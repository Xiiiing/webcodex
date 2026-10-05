# Shared update adapter validation

Recorded 2026-10-06 on Linux x64, against `upstream/main` `ed22e5c0`, with a dirty source development build. No release package, native installer, authorization prompt or existing host service was exercised.

| Check | Actual result |
| --- | --- |
| `cargo test --locked --offline -p webcodex-environment unified_update --profile dogfood` | 53 passed: discovery, bounded download, source/candidate verification, cache exclusion/privacy, reconciliation, installed-versus-running identity, noncreating status and safe component projection. |
| `cargo test --locked --offline -p webcodex-environment upgrade::status --profile dogfood` | 11 passed: all journal phases, terminal history, bounded whitelist/canary output, stale targets, original operation binding and conservative headless recovery. |
| Existing `upgrade::tests` | 9 passed with `--locked --offline --profile dogfood`: original transaction and restoration regression coverage. |
| Desktop `cargo check --offline --manifest-path apps/desktop/src-tauri/Cargo.toml --profile dogfood` | Passed against the extracted adapters. Two existing dead-code warnings remained. |
| Desktop native `cargo test --locked --offline --manifest-path apps/desktop/src-tauri/Cargo.toml updates` | 11 passed: existing update/cache and literal native handoff adapter tests. |
| Guarded terminal reconciliation, cache and status focused tests | 24 passed with `--locked --offline`: exact pending operation, stale/missing targets, exclusive existing fences, rollback reconciliation and unchanged files on rejected cleanup. |
| Workspace and Desktop Rust formatting, `git diff --check` | Passed. |
| Initial Windows production CI | Compiled, but failed its zero-warning gate with 11 platform-unused imports/constants/parameters introduced by the extraction. These were scoped to their Unix/Linux consumers; the Linux unified-update suite passed all 53 tests again. Replacement Windows CI remains a separate check, not a local Windows acceptance claim. |

Query tests use temporary private stores and prove missing roots/fences stay missing, existing permissions/mtime stay unchanged, and unknown probe fields do not cross the public status. The earlier creation-capable query constructor was identified by source inspection; no prior Linux permission mutation was reproduced.

Upgrade tests use disposable state and controlled backends. Their success does not establish actual DEB/RPM/PKG/EXE installation, system authorization, logout/reboot, real service ownership, database migration or native rollback. Those matrix rows remain pending in `unified-deployment-validation.md`.

This contribution is the shared prerequisite for separate Desktop UX, Linux terminal CLI, and Windows guarded-handoff PRs. Old Windows packages do not advertise a guarded handoff. No new remote update operation is supplied.
