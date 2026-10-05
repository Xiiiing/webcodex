use super::*;

#[test]
fn absent_status_is_bounded_private_and_creates_nothing() {
    let temp = tempfile::tempdir().unwrap();
    let data = temp.path().join("desktop");
    let environment = temp.path().join("environment");
    let manager = UpdateManager::with_environment_root(data.clone(), environment.clone());
    let view = manager.status_view(&[]).unwrap();
    assert_eq!(view.schema_version, 1);
    assert_eq!(view.installed.len(), 4);
    assert_eq!(view.candidate_components.len(), 4);
    assert!(!view.download.can_install);
    assert!(view.upgrade.is_none());
    assert!(!data.exists());
    assert!(!environment.exists());
    let bytes = serde_json::to_vec(&view).unwrap();
    assert!(bytes.len() <= MAX_UPDATE_VIEW_BYTES);
    let text = String::from_utf8(bytes).unwrap();
    assert!(!text.contains(&temp.path().display().to_string()));
    for field in [
        "argv",
        "receipt",
        "installer_path",
        "candidate_dir",
        "journal",
    ] {
        assert!(!text.contains(field), "{field}");
    }
}

#[tokio::test]
async fn active_download_projection_keeps_live_progress_without_saved_state_mutation() {
    let temp = tempfile::tempdir().unwrap();
    let data = temp.path().join("desktop");
    let manager =
        UpdateManager::with_environment_root(data.clone(), temp.path().join("environment"));
    manager.change(|record| {
        record.phase = DownloadPhase::Downloading;
        record.downloaded_bytes = 42;
        record.total_bytes = None;
    });
    let _guard = manager.attempt.lock().await;
    let view = manager.status_view(&[]).unwrap();
    assert_eq!(view.download.phase, DownloadPhase::Downloading);
    assert_eq!(view.download.downloaded_bytes, 42);
    assert_eq!(view.download.total_bytes, None);
    assert!(!view.download.can_install);
    assert!(!data.exists());
}
