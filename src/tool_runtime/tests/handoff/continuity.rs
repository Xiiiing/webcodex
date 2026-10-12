//! Recovery reads must preserve concurrent task corrections and execution identity.

use super::*;

#[tokio::test]
async fn handoff_reread_recovers_corrected_task_without_reusing_validation_or_restarting_job() {
    let root = tempfile::tempdir().unwrap();
    init_git_repo(root.path());
    commit_file(root.path(), "README.md", "initial\n", "initial");
    let runtime = test_runtime();
    let client = "handoff-corrected-task";
    let auth = auth_context(None, true);
    let project =
        register_runner_project_at_path_with_auth(&runtime, client, "demo", root.path(), &auth)
            .await;
    let session = runtime.sessions.start_session(
        Some(project.clone()),
        Some("Implement the original request".into()),
    );
    let sid = session.session_id;
    let instruction = |text: &str| {
        runtime
            .sessions
            .ensure_coding_session(sessions::CodingSessionRequest {
                project: project.clone(),
                authority_fingerprint: sessions::TEST_ONLY_PROJECT_SESSION_AUTHORITY_FINGERPRINT
                    .to_string(),
                resume_session_id: Some(sid.clone()),
                instruction: Some(text.into()),
                mode: SessionMode::Normal,
                guards: SessionGuards::default(),
                execution_context: None,
                project_instructions: None,
                transport: SessionTransport::Api,
                context_refreshed: true,
                write_scope_verified: true,
            })
            .unwrap();
    };
    instruction("Implement the original request");
    let job_id =
        seed_session_projection_job(&runtime, client, &project, &sid, "running", "", &auth).await;
    record_handoff_tool_event(
        &runtime,
        &sid,
        "cargo_check",
        json!({"project": project}),
        true,
        json!({"exit_code": 0}),
    );
    let task = tokio::spawn({
        let runtime = runtime.clone();
        let sid = sid.clone();
        async move {
            runtime
                .session_handoff_summary(
                    sid,
                    None,
                    Some(true),
                    Some(false),
                    Some(true),
                    true,
                    Some(20),
                    None,
                )
                .await
        }
    });
    // This pending workspace request is the deterministic boundary after the
    // initial task/notes/validation snapshots, before handoff finishes.
    let request = wait_for_patch_agent_request(&runtime, client).await;
    instruction("User correction: preserve the external writer's changes");
    post_session_message(
        &runtime,
        &sid,
        "decision",
        "Keep the user's corrected scope",
    );
    post_session_message(
        &runtime,
        &sid,
        "progress",
        "Implementation remains; validate the corrected source",
    );
    record_handoff_tool_event(
        &runtime,
        &sid,
        "edit_project_files",
        json!({"project": project, "changes": [{"kind": "edit", "path": "README.md"}]}),
        true,
        json!({"state_changed": true}),
    );
    let external_bytes = "external writer's correction\n";
    std::fs::write(root.path().join("README.md"), external_bytes).unwrap();
    complete_agent_request_by_running_locally(&runtime, client, request).await;
    let raced = task.await.unwrap();
    assert!(raced.success, "{raced:?}");
    let brief = &raced.output["handoff_brief"];
    assert_reason_list_contains(
        &brief["basis"],
        "reason_codes",
        "session_changed_during_snapshot",
    );
    assert_eq!(brief["basis"]["complete"], false);
    assert_eq!(brief["progress"]["state"], "insufficient_evidence");
    assert_eq!(
        brief["task"]["latest_instruction"]["excerpt"],
        "Implement the original request"
    );
    assert_eq!(brief["task"]["decisions"]["returned"], 0);
    assert_eq!(raced.output["validation"]["latest_status"], "passed");
    assert_eq!(
        brief["next_actions"][0],
        "re-read read_session_handoff for the exact Session before dependent work"
    );

    let before = runtime.sessions.summary(&sid, Some(200)).unwrap();
    let refreshed =
        dispatch_handoff_diagnostic_with_agent(&runtime, client, sid.clone(), None, true, false)
            .await;
    assert!(refreshed.success, "{refreshed:?}");
    let brief = &refreshed.output["handoff_brief"];
    assert_eq!(brief["basis"]["complete"], true);
    assert_eq!(
        brief["task"]["root_instruction"]["excerpt"],
        "Implement the original request"
    );
    assert_eq!(
        brief["task"]["latest_instruction"]["excerpt"],
        "User correction: preserve the external writer's changes"
    );
    assert_eq!(
        brief["task"]["decisions"]["items"][0]["excerpt"],
        "Keep the user's corrected scope"
    );
    assert_eq!(
        brief["task"]["recent_progress"]["items"][0]["excerpt"],
        "Implementation remains; validate the corrected source"
    );
    // The corrected instruction starts a new attempt. The old passing result
    // remains historical, while no validation proves the corrected task.
    assert_eq!(brief["validation"]["status"], "not_run");
    assert_eq!(refreshed.output["validation"]["latest_status"], "passed");
    assert_eq!(brief["attention"]["active_jobs"], 1);
    assert_eq!(refreshed.output["jobs"]["recent"][0]["job_id"], job_id);
    assert_eq!(refreshed.output["jobs"]["running_count"], 1);
    assert_eq!(
        std::fs::read_to_string(root.path().join("README.md")).unwrap(),
        external_bytes
    );
    let after = runtime.sessions.summary(&sid, Some(200)).unwrap();
    // The public read records its standard observation telemetry only; it
    // cannot add another instruction or execute a replacement Job.
    let added_events = after
        .events
        .iter()
        .filter(|event| {
            !before
                .events
                .iter()
                .any(|prior| prior.event_id == event.event_id)
        })
        .collect::<Vec<_>>();
    assert_eq!(added_events.len(), 2);
    assert!(added_events.iter().all(|event| {
        event.tool_name == "read_session_handoff" && !event.write_like && !event.shell_like
    }));
    assert!(
        probe_patch_agent_request(&runtime, client).await.is_none(),
        "recovery must not redispatch the running Job"
    );
}
