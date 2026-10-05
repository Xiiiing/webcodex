# Linux terminal unified update adapter

The `environment update` command delegates discovery, cache/download validation,
installation classification, candidate preparation and reconciliation to the shared
Environment updater. The existing Core journal, owner receipt and installer broker
remain authoritative. No Desktop window, UI preferences, new pending transaction
or remote-device update mechanism is introduced.

Linux effects require explicit confirmation and stdin TTY admission before any
store/cache resolution or program probe. Core's existing system-service authorization
also selects normal terminal sudo under that TTY. The Environment owner does not
become root; literal argv elevates only the trusted installed installer helper.
Both the literal system-tool path chain and its resolved target must be root-owned
and protected against untrusted writes. No shell, password input collector or GUI
authorization fallback is added.

`status` and `check` preserve missing Environment/cache roots. Status does not discover
releases. Check does not download. Download is awaited with bounded cancellation.
Application revalidates the selected candidate and task state; service state and
ownership stay under Core's original prepare/finish contract. Original stopped
components stay stopped. Additional Runner installations still require the existing
official unified package; no standalone distribution is converted automatically.

Terminal apply/resume/rollback results explicitly reconcile only the exact pending
Environment, manifest and operation. Missing or superseding identity, unconfirmed
installed bytes and ambiguous nonterminal handoff fail closed. Restoration is limited
to Core-proven preparation before replacement, or an already restored operation.
Completion retries are limited to an already committed lease release. Other phases
retain the existing manual recovery route, without redispatch or competing rollback.
The public JSON wrapper is schema 1, at most 64 KiB, with static error categories and
whitelisted identities; raw configuration, service arguments, receipt bodies and
arbitrary child output are excluded.

## Actual local verification

Recorded 2026-10-06 on Linux x64 using a dirty source development build from
`upstream/main` `ed22e5c0` plus the shared adapters. No release/native package was installed.

| Check | Result |
| --- | --- |
| `cargo test --locked --offline -p webcodex-cli environment::update --profile dogfood` | 7 passed: parser targets, TTY/platform admission, absent readonly status, secret-safe errors, exact acknowledgement, literal argv and writable-alias rejection. |
| CLI `environment::` focused regression after guarded-handoff integration | 18 passed: the seven terminal-update tests plus eleven existing/guarded setup, identity, scope, secret and installer authorization tests. |
| `cargo build --locked --offline -p webcodex-cli --profile dogfood` | Passed on Linux x64. |
| Built CLI, isolated absent roots, `status --json` | Passed with no Environment/cache creation, no release discovery and bounded single-document stdout. |
| Built CLI, non-TTY apply/resume/rollback with explicit version/operation and `--yes` | Expected `interactive_terminal_required`, exit 1, bounded JSON stdout, no stderr or storage creation. No service-changing call was executed. |
| CLI `guarded_` compatibility regression | 3 passed, including additive Windows build-info and original non-Windows bytes (overlaps two environment tests above). |
| Rust formatting and diff checks | Passed. |

Shared Core tests independently cover exact terminal reconciliation, stale target
rejection, transaction privacy, candidate/receipt validation and original recovery
boundaries. They use disposable fixtures; they are not real installation acceptance.

Not executed: actual sudo authorization, SSH TTY installation, DEB/RPM replacement,
real system/user services, task-window interruption, logout/reboot, native upgrade or
rollback, and secret/configuration preservation on a real package upgrade. macOS and
Windows headless application remains unsupported by this command. Existing native
Desktop/manual paths and explicit low-level commands remain available.
