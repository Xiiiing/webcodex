use super::super::download::{DownloadPhase, PendingInstall};
use super::*;

fn record() -> UpdateRecord {
    let mut record = UpdateRecord::default();
    record.version = Some("1.2.3".into());
    let platform = crate::unified_update::RuntimePlatform::current().unwrap();
    record.target = crate::unified_update::InstallerTarget::default_for_non_linux(platform)
        .or_else(|| {
            crate::unified_update::InstallerTarget::for_platform(
                platform,
                crate::unified_update::PackageFormat::Deb,
            )
        });
    record.source_sha = Some("a".repeat(40));
    record.source_manifest_sha256 = Some("b".repeat(64));
    record.pending = Some(PendingInstall {
        environment_id: "environment".into(),
        operation_id: Some("operation".into()),
        started_at_ms: 100,
    });
    record.phase = DownloadPhase::InstallingOrHandedOff;
    record
}
fn observation(outcome: UpgradeOutcome) -> UpgradeObservation {
    UpgradeObservation {
        environment_id: "environment".into(),
        operation_id: "operation".into(),
        version: "1.2.3".into(),
        source_sha: "a".repeat(40),
        manifest_sha256: "b".repeat(64),
        outcome,
    }
}
fn build(version: &str) -> webcodex_core::desktop_runtime_contract::MachineBuildInfo {
    let mut build: webcodex_core::desktop_runtime_contract::MachineBuildInfo = serde_json::from_value(serde_json::json!({"schema_version":1,"binary":"webcodex-desktop","version":"1.2.3","git_commit":null,"git_dirty":false,"built_at":null,"target":"x86_64-unknown-linux-gnu","architecture":"x86_64","desktop_runtime_contract":{"min_generation":1,"max_generation":1}})).unwrap();
    build.version = version.into();
    build.git_commit = Some("a".repeat(40));
    build.git_dirty = Some(false);
    build
}

#[test]
fn handoff_never_means_installed_without_version_and_core_commit() {
    let record = record();
    let current = build("1.2.2");
    assert_eq!(
        reconcile(&record, None, Some(&current), 101),
        Reconciliation::RecoveryRequired
    );
    assert_eq!(
        reconcile(
            &record,
            Some(&observation(UpgradeOutcome::Pending)),
            Some(&current),
            101
        ),
        Reconciliation::InProgress
    );
    assert_eq!(
        reconcile(
            &record,
            Some(&observation(UpgradeOutcome::Pending)),
            Some(&current),
            2_000_000
        ),
        Reconciliation::RecoveryRequired
    );
    assert_eq!(
        reconcile(
            &record,
            Some(&observation(UpgradeOutcome::Committed)),
            Some(&current),
            101
        ),
        Reconciliation::RecoveryRequired
    );
    assert_eq!(
        reconcile(
            &record,
            Some(&observation(UpgradeOutcome::Committed)),
            Some(&build("1.2.3")),
            101
        ),
        Reconciliation::Installed
    );
    assert_eq!(
        reconcile(
            &record,
            Some(&observation(UpgradeOutcome::RolledBack)),
            Some(&current),
            101
        ),
        Reconciliation::Restored
    );
}

#[test]
fn changed_owner_operation_source_or_dirty_build_cannot_clear_pending() {
    for changed in ["owner", "operation", "source", "manifest"] {
        let mut observed = observation(UpgradeOutcome::Pending);
        match changed {
            "owner" => observed.environment_id = "other".into(),
            "operation" => observed.operation_id = "other".into(),
            "source" => observed.source_sha = "c".repeat(40),
            _ => observed.manifest_sha256 = "c".repeat(64),
        }
        assert_eq!(
            reconcile(&record(), Some(&observed), Some(&build("1.2.2")), 101),
            Reconciliation::RecoveryRequired
        );
    }
    let mut dirty = build("1.2.3");
    dirty.git_dirty = Some(true);
    assert_eq!(
        reconcile(
            &record(),
            Some(&observation(UpgradeOutcome::Committed)),
            Some(&dirty),
            101
        ),
        Reconciliation::RecoveryRequired
    );
}

#[test]
fn superseding_committed_generation_requires_manual_reconciliation() {
    let mut observed = observation(UpgradeOutcome::Committed);
    observed.version = "1.2.4".into();
    observed.operation_id = "newer-operation".into();
    assert_eq!(
        reconcile(&record(), Some(&observed), Some(&build("1.2.4")), 101),
        Reconciliation::RecoveryRequired
    );
}

#[test]
fn repeated_target_with_different_operation_never_clears_pending() {
    let mut observed = observation(UpgradeOutcome::Committed);
    observed.operation_id = "replacement-operation".into();
    assert_eq!(
        reconcile(&record(), Some(&observed), Some(&build("1.2.3")), 101),
        Reconciliation::RecoveryRequired
    );
}

#[test]
fn verified_installed_disk_identity_owns_committed_reconciliation() {
    let old_running_desktop = build("1.2.2");
    let verified_disk_desktop = build("1.2.3");
    assert_ne!(old_running_desktop.version, verified_disk_desktop.version);
    assert_eq!(
        reconcile(
            &record(),
            Some(&observation(UpgradeOutcome::Committed)),
            Some(&verified_disk_desktop),
            101
        ),
        Reconciliation::Installed
    );
    assert_eq!(
        reconcile(
            &record(),
            Some(&observation(UpgradeOutcome::Committed)),
            None,
            101
        ),
        Reconciliation::RecoveryRequired
    );
}

#[test]
fn unacknowledged_windows_spawn_cannot_attach_a_later_same_candidate_operation() {
    let mut record = record();
    record.pending.as_mut().unwrap().operation_id = None;
    for outcome in [
        UpgradeOutcome::Pending,
        UpgradeOutcome::Committed,
        UpgradeOutcome::RolledBack,
    ] {
        assert_eq!(
            reconcile(
                &record,
                Some(&observation(outcome)),
                Some(&build("1.2.3")),
                101
            ),
            Reconciliation::RecoveryRequired
        );
    }
}
