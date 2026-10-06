# Native acceptance preflight — 2026-10-06

This is a **read-only preflight and blocker record**, not a completed native acceptance run. The observation was made at `2026-10-05T17:48:57Z` (2026-10-06 in Asia/Shanghai). Reviewed `upstream/main`: `ed22e5c060ae05e5be354d600be20a05b6ffed7c`. Exact public asset metadata and the host observation are retained in [the safe JSON snapshot](2026-10-06-preflight.json).

No test machine, test account, service scope, installation authorization, old installed package or candidate has been selected. No existing Environment or private configuration was read, and no package, service, firewall, session or recovery state was changed. No native matrix row is passed by this record.

## Observations and limits

| Check actually performed | Expected | Observed | Classification |
| --- | --- | --- | --- |
| Fetch `upstream/main`; inspect deployment, installation and release guides | Bind the review to one exact source | `ed22e5c060ae05e5be354d600be20a05b6ffed7c`; optional packaging defines eight installer targets and six Runtime/source platforms | Read-only source observation |
| Read `/etc/os-release`, `platform.machine()`, `platform.release()`, UID/EUID and `/proc/1/comm` | Identify the current host without assigning it as a test target | Ubuntu 24.04.4 LTS, x86_64, kernel `7.0.0-34-generic`, UID/EUID 1000, PID 1 `systemd` | Read-only host observation; installation not authorized |
| Check executable presence with `shutil.which`; check `/dev/kvm` existence | Identify available tooling without launching it | systemctl/loginctl/sudo/SSH/Docker/dpkg present; QEMU, libvirt, VirtualBox and RPM executable absent; `/dev/kvm` present | Presence only; no VM, Docker daemon access, guest or systemd persistence proven |
| GET public release catalog, latest release and exact tag reference | Identify public candidate availability without treating an asset name as verification | `v0.4.6`, published `2026-10-03T14:24:34Z`, 15 uploaded assets; tag peels to `5072608fe74b2bfa6e8f208515c04242f475582f` | Public catalog observation, distinct from reviewed main |
| Inspect the 20 releases returned by `GET /releases?per_page=100` | Locate unified installer/source manifests | No `webcodex-unified-*`, `webcodex-source-*` or installer `manifest.json` assets in that response | Formal unified package availability blocked; not an installer failure |
| Fetch three small public metadata assets and compare SHA-256 to GitHub asset digests | Check the retained metadata bytes | All three matched; hashes are recorded below | Metadata-byte verification only; no package bytes or installed builds verified |

The public endpoints were `https://api.github.com/repos/yyjeqhc/webcodex/releases?per_page=100`, `/releases/latest`, `/git/ref/tags/v0.4.6`, and the referenced annotated-tag endpoint. Only public JSON and the three named metadata assets were fetched, with a 2 MiB response limit and 15-second per-request timeout. The snapshot uses selected public fields; it does not retain request headers, raw API responses, arbitrary stdout/stderr or private machine configuration.

| Verified metadata file | SHA-256 |
| --- | --- |
| `SHA256SUMS` | `18d43ee6ae3d25a05defee28bf7bb85f7cdaa15857970f2c7528fb8543f0def9` |
| `webcodex-desktop-v0.4.6-darwin-x64.dmg.sha256` | `e4c52abc925ea5c98dd390d4f7b43b7a1731ac6b4b941420caef8c78c485bed5` |
| `webcodex-release-manifest.json` | `b8feb8e99fbbeca11d42efa1b1700c20677b770b9f3540f8ef083c859e582f92` |

`webcodex-release-manifest.json` is schema-1 Runtime-generation compatibility metadata, **not** an installer/source manifest. Public Desktop setup EXEs and DMGs are separate distributions; their availability neither proves the optional unified EXE/PKG hooks nor accepts DEB/RPM. Their native installation could be tested under its own explicitly selected scope. No public package was selected for this run. An authorized development package built from reviewed main would require its own byte hash, build identities and explicit development label; `v0.4.6` cannot be relabeled as the current main build.

## Blocked targets

All existing [native matrix rows](../unified-deployment-validation.md#native-acceptance-matrix) remain pending. Every row below lacks a selected matching test package and a separately recorded old/candidate pair for upgrade; package versions, hashes and installed identities therefore remain **unbound**, not borrowed from another platform or from the release catalog.

| Matrix target | Target/scope still needed | Result this run |
| --- | --- | --- |
| Windows x64 / unified NSIS EXE | Dedicated x64 Windows machine/VM, exact OS version, test account; ordinary Task Scheduler session scope and separately authorized advanced SCM scope | Blocked; not run |
| Windows ARM64 / unified NSIS EXE | Native ARM64 Windows target and exact OS version, account/SID and session/system scopes | Blocked; not run; x64 evidence cannot substitute |
| macOS Intel / PKG | Intel Mac, exact macOS version, owner account, user LaunchAgent and authorized LaunchDaemon scope; unlocked OS/project volumes and GUI session | Blocked; not run |
| macOS Apple Silicon / PKG | Native Apple Silicon Mac with the same explicit scope/session prerequisites | Blocked; not run; Intel evidence cannot substitute |
| Debian 12 x64 / DEB | Disposable Debian 12 x64 target, account, user/system service scopes and authorized reboot/logout/linger changes | Blocked; not run |
| Debian 12 ARM64 / DEB | Native Debian 12 ARM64 target with exact account/session and service authorization | Blocked; not run |
| Ubuntu x64 / DEB | Exact Ubuntu version and dedicated target; current Ubuntu 24.04.4 host has not been authorized for installation/service changes | Blocked; not run; no 22.04-or-later family-wide claim |
| Ubuntu ARM64 / DEB | Exact Ubuntu version on native ARM64 and explicit account/service scope | Blocked; not run |
| RPM x64 | Exact Fedora/openEuler distribution/version and dependencies within the existing RPM limits, dedicated x64 target and service scope | Blocked; not run; DEB evidence does not apply |
| RPM ARM64 | Exact distribution/version on native ARM64, selected RPM and separate native lifecycle/upgrade evidence | Blocked; not run; x64 evidence does not apply |

[RPM distribution scope](../RPM_INSTALLER.md#distribution-scope) does not turn recognized RHEL/CentOS, Rocky/AlmaLinux or openEuler identities into verified Desktop support. No Fedora minimum version is declared. openEuler 24.03-lts has the prior container observation only; full install remains unproven. CentOS Stream 9 is explicitly outside the supported Desktop target for this build. Core runtime ABI coverage and the unified Desktop's GLIBC/dependency gate are separate. Do not bypass dependencies or verification.

## Execution evidence

Before any native operation, record one approved target and exact package. Use the existing installer, Environment, pairing, ownership and upgrade mechanisms. This record introduces no alternative installer, credential store, transaction or restore mechanism.

Each executed scenario needs:

- A stable evidence ID, time, OS/version, actual CPU architecture and machine/VM alias; whether native hardware or a same-architecture VM, and available snapshot/recovery boundary.
- Explicitly authorized installation/service/session/system-setting effects, test-account alias and ownership type, user/system scope and actual process-account comparison. Keep credentials and full private account/configuration records out of public evidence.
- Package format/version/source SHA, byte SHA-256 and verified CLI/Server/Runner/Desktop build identities. Record signing/provenance and source/dirty identity without guessing absent fields. Label formal public Release, development package or source-only run separately. An upgrade needs both old and candidate identities.
- Exact safe command/GUI steps, expected and observed results, stage/error category, bounded redacted evidence location and recovery outcome. Protected inputs remain protected; no passwords, tokens, API keys, private config bodies, project source or arbitrary child output in the evidence.
- One result: **native pass**, **native fail**, **expected refusal**, **automated-test pass**, **blocked/not run**. A guard that was never executed is not an expected refusal. CI/build/container/package inspection is not a native session/reboot acceptance result.

The following scenario groups are all **blocked/not run** in this preflight. Apply them to each relevant target above; a completed scenario updates only that exact OS/version/architecture/package/scope.

| Scenario | Evidence required to promote it |
| --- | --- |
| Architecture and dependencies | Installer matches actual CPU/OS; required dependencies handled through existing platform mechanisms without `--nodeps`, `--force` or permission relaxation |
| Ordinary Create, with initial project | Separate Server and local Runner work; generated identities/private credentials owned by the correct account; an authorized synthetic project is read and an applicable real tool runs |
| Ordinary Create, skipping project | Runner role remains enabled; later project registration and actual reading use the saved identity |
| Join and additional device | Reachable direct Server URL and protected one-time code; no new central Server or copied Tunnel/bootstrap secrets; reconnect with saved identity; main node's local Runner remains available |
| Advanced and interrupted setup | Server-only/viewer/Quick Share retain existing roles/lifecycles; wrong address, expired code, interrupted network/setup and existing resume path report accurate states |
| Multi-device projects | Duplicate names/paths resolve to the exact Runner/Project; files remain on their owning machine |
| Program/configuration ownership | Installed CLI/Desktop/runtime and authoritative root are the intended ones; actual process account agrees with saved ownership; user versus system scope remains distinct |
| Local MCP versus ChatGPT/Tunnel | Record local MCP separately; only a real ChatGPT project read accepts the complete external chain |
| Separate service controls and Desktop exit | Start/stop/restart each authorized component independently; persistent services survive Desktop exit; previously stopped components are observed without auto-start |
| Logout/login and OS reboot | Windows Task Scheduler logout versus advanced SCM reboot; macOS LaunchAgent/LaunchDaemon and disk unlock; Linux user/system plus explicitly authorized linger and no-login startup conditions |
| GUI session | Same owner, logged in and unlocked; macOS Accessibility/Screen Recording and signing/TCC persistence; file/project service health alone is not GUI availability |
| Identity/configuration persistence | Runner identity, project registrations and existing Tunnel/credentials survive the applicable session and package transitions; compare privately without publishing secret values or full configuration hashes |
| Authorized successful upgrade | Exact old/candidate, owner prepare, OS authorization, installer handoff and finish; separately verify four installed identities, service restoration, original stopped state and actual post-upgrade project access |
| Task window | Running task blocks or delays update through the existing preflight; no forced interruption without explicit test authorization |
| Download/verification and authorization cancellation | Record actual failure/refusal stage and unchanged state; do not repeat an uncertain installation |
| Installer/process/file failures | Isolated early installer failure, process interruption before/after handoff and files in use; retain authoritative pending/recovery records |
| Ownership/finish failure and recovery | Mismatched owner or failed finish verification; use only existing applicable resume/restore paths, bound to the original operation |
| Supported rollback | Respect data-format/new-business-data boundaries; no deletion of recovery records, competing rollback or blind replacement with an old database |

## Outcome

New native passes: **0**. Native failures: **0**. Executed expected refusals: **0**. New automated-test acceptance claims: **0**. These zeroes describe what was executed; they are not platform quality results. All installation, service/session, upgrade and recovery scenarios above are blocked/not run.

The host and public-metadata observations succeeded. Continuing native execution requires the explicitly authorized disposable machines/accounts, selected packages (or an authorized development-package build), old/candidate upgrade pair, permitted user/system service and logout/reboot/fault-injection scopes, and an authorized ChatGPT/Tunnel test path when that chain is to be accepted. No production environment was borrowed or modified.

Documentation checks passed: JSON parsing, source/release separation, recorded digest consistency, local Markdown links, preservation of the original pending targets, a bounded snapshot and `git diff --check`. An independent read-only review found no invented acceptance or distribution-support claim. No Cargo/frontend/runtime tests were rerun for this documentation-only change, and no compilation is presented as native evidence.

## Follow-up acceptance preparation

This supplement changes the preparation scope only. The observations, hashes,
source `ed22e5c060ae05e5be354d600be20a05b6ffed7c`, JSON snapshot and zero-execution
outcome above remain historical evidence from their original review. No new
host/release observation, package build, installation, service action or secret
configuration read was performed for this supplement.

The [follow-up code/test gates](../unified-deployment-validation.md#follow-up-code-and-test-gates)
separate P1 first-run UX, P2 Full/Runtime contracts, P3 Runtime packaging, P4 Linux
terminal updates and P5 nonsecret payload export from native acceptance. Review
their individual source/test reports and rerun their required focused gates on
the final integrated revision. The candidate-relocation repair has source and
disposable fixture evidence; its actual package-hook completion remains pending.

| Additional independent target | Required before execution | Current result |
| --- | --- | --- |
| Linux Runtime x64 / DEB | Exact Debian 12 or Ubuntu 22.04+ target, Runtime package identity/hash, correct account and approved user/system service scope | Blocked; not run |
| Linux Runtime ARM64 / DEB | Exact native ARM64 OS/version and Runtime package; independent service/session and old/candidate identity bindings | Blocked; not run |
| Linux Runtime x64 / RPM | Exact admitted RPM distribution/version/dependencies, Runtime RPM and authorized x64 lifecycle scope | Blocked; not run |
| Linux Runtime ARM64 / RPM | Exact native ARM64 distribution/version, Runtime RPM and independent hook/upgrade/recovery scope | Blocked; not run |

Runtime acceptance must separately record absence of Desktop/GUI dependencies,
fresh installation without service start, exact package-owned destinations and
provenance, reciprocal Full/Runtime conflicts without conversion, Runtime receipt
and preinstall hook architecture/format binding, protected candidate relocation,
same-flavor upgrades and preserved original running/stopped state. Full evidence,
DEB inspection, RPM rendering, CI and x64 runs cannot satisfy these four rows.
Selecting a Runtime target does not broaden the existing OS/ABI support contract.
For Runtime, the execution-evidence component set is CLI/Server/Runner; Desktop
is not fabricated as a fourth installed component. Full still requires all four.

P6 remains an adjusted security-design draft awaiting explicit review. P7 encrypted
backup Core/CLI, P8 same-Environment controlled restore Core/CLI and P9 Desktop
backup/restore adapter remain deferred. Neither the nonsecret export nor these
documents authorize secret capture, service pause or restoration. Historical or
unprovable captures are limited to authenticated private quarantine in the draft;
current database/credential replacement needs separately reviewed complete proof
and write barriers before implementation or acceptance can be planned.

No target/package/account/scope authorization has been added. Runtime and all
original native rows remain blocked/not run. The unmodified safe JSON snapshot
contains only the original observations; this supplement supplies no new package
hash, machine binding or passed scenario.

## Functional integration checks; not native acceptance

An isolated local integration branch combined the latest First Run on upstream
`8719afd7`, Runtime contracts/packaging/CLI and nonsecret settings export. The
combined source was `b9fa15b4a4d174510e0f385af65a57c61c50f5b7` (local validation
branch; not a published package or Release). No acceptance target was added.

| Focused check | Actual result | Evidence class |
| --- | --- | --- |
| CLI Environment, dogfood | 33 passed, including projectless named Join, read-only export and nonTTY effect refusal | Automated Rust/source fixture |
| Shared path inventory/settings projection | 24 passed | Automated Rust/source fixture |
| Desktop First Run, completion, settings/export, App and language suites | 160 passed across seven suites | Frontend behavior fixture |
| Desktop native path/export, invitation/setup and update adapters | 13 + 7 + 13 passed | Native adapter unit fixtures on Linux; no installed services |
| Desktop typecheck, frontend build, CSS and root/native Rust formatting | Passed; existing bundle-size advisory retained | Source/build check |

The first frontend invocation preceded completion of the local dependency links;
shared UI module resolution failed. After configuring the disposable worktree's
Desktop and shared frontend dependencies, the exact checks above passed. No
production code or test expectation was relaxed for that setup error.

Runtime PRs #941/#942/#943 and settings-export #935 were synchronized with current
main, with CI repairs committed on those feature branches. Duplicate repair PRs
#939/#940 are closed. CI success/failure/queued states stay bound to their own
heads; they do not promote any installation, logout/reboot or recovery row.
The safe JSON observation snapshot above remains byte-identical.

## CI fixture correction; not native acceptance

At PR #925 source `001c8e1dcc5c3fee25a1e7eb1295a7a57aa9e967`,
[Windows core job 112157326756](https://github.com/yyjeqhc/webcodex/actions/runs/37429521364/job/112157326756)
reported 25 passing and three failing unified-upgrade tests. All failures were
in the disposable candidate-relocation fixture: it recursively created an
intermediate directory without explicitly securing its Windows ACL before
private-directory validation. This fixture was inherited unchanged from main.

The correction explicitly secures that intermediate directory and synthetic
payloads, and writes synthetic manifest/checksum files through the existing
private writer. Production ownership checks and candidate validation remain
unchanged. The three candidate-relocation tests pass locally on Linux with
`cargo test --profile dogfood -p webcodex-environment upgrade::candidate_relocation_tests`;
root Rust formatting and `git diff --check` also pass. Windows confirmation on
this PR's corrected source remains a separate CI gate until it completes.

These are automated fixture results. No installer was executed, no existing
service was changed, and no native acceptance row is promoted. The original
safe JSON snapshot remains unchanged.
