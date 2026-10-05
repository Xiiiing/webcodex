# Configuration visibility and backup manifests

## Baseline and sources

Round two starts independently from upstream `390b7bbe`. First Run and device
invitation changes are separate contributions. This work projects existing
configuration; it does not relocate authority or change enrollment, project
registration, credential storage, service ownership, or upgrade transactions.

| Fact | Existing authoritative source |
| --- | --- |
| Environment root | `default_environment_dir` or the CLI's explicit `--environment-dir`, using the existing client configuration-base resolver |
| Identity, local roles, service scope, project references | Environment record or interrupted setup journal |
| Server configuration and working directory | Saved Environment service specification; Desktop-owned legacy Runtime references |
| Server data and trace locations | Known configuration path keys, interpreted with the existing Server parser and saved working directory |
| Runner configuration and project registry | Managed Runner configuration and its saved binding; existing Runner path contracts |
| Environment Tunnel profiles | Existing Tunnel records and their service specifications |
| Desktop app-data | Already resolved Tauri app-local-data root or `WEBCODEX_DESKTOP_DATA_DIR` |
| Desktop settings, Tunnel profiles, cache | Existing Desktop stores under that root; not another Environment authority |
| Persistent service logs | Existing platform adapter: systemd journal, private lifecycle file, or system task diagnostics |
| Desktop Activity and child output | Bounded in-memory queues, not an invented persistent log directory |

`EnvironmentStore::open` can create directories and adjust Windows permissions;
`lock` can create a lock file. Neither is suitable for a read-only inventory.
The existing diagnostic report is an allowlisted support projection. The existing
upgrade snapshot is private, secret-bearing recovery state. Neither is a portable
secret-free Environment backup.

## Intended delivery

The shared inventory is a bounded, read-only projection. Desktop adds only its
own resolved locations; the headless CLI describes the selected Environment.
Unknown, inaccessible, missing, remote, unconfigured, and inapplicable locations
remain distinct. Canonical paths are established only after native validation.
Saved configuration is not evidence of a live process's effective environment.

The versioned backup manifest describes safe metadata categories, their
projections, exclusions and role-specific restoration requirements. It contains
no file payloads and is not a complete recoverable backup. Raw mixed configuration,
credentials, database state, logs, project contents, recovery snapshots and
unknown files are excluded. Full secret backup and restore need a separate design.

Location opening and JSON export are explicit user actions bound to an observed
inventory revision. Frontend input cannot choose an arbitrary navigation target.
Inventory and manifest exports contain local paths and are private metadata, not
automatic support-report attachments.

## Validation

Implementation and validation results will be recorded here before publication.
No native installation, logout/reboot, upgrade/rollback or production service
action is part of this round.
