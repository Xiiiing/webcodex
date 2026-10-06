# Unified deployment validation

[简体中文](#中文)

This checklist records scope and evidence for the unified environment work. The optional unified build defines eight installer targets: Windows NSIS `.exe`, macOS `.pkg`, and Linux `.deb` and `.rpm`, each for x64 and arm64. Runtime/source identities remain six. Debian 12 / Ubuntu 22.04+ are the declared DEB scope; RPM distribution limits are recorded below. These targets have not received full native installation/session/upgrade acceptance or a complete public unified release. Source changes and CI/package construction do not prove real-machine behavior. No cross-platform equivalence claim is made.

The follow-up preparation below keeps that Full baseline and adds four independent
Linux Runtime targets (DEB/RPM, x64/arm64). The twelve-target catalog does not add
a native pass or expand OS support. Historical observations and their source/hash
bindings remain unchanged.

## Milestones and scope

| Milestone | Scope | Evidence / acceptance boundary |
| --- | --- | --- |
| M1 | Shared setup core: create/join, project/no-project, identity, recovery, and shared Desktop/CLI setup state | Core tests cover deterministic setup behavior; this does not establish native packaging or service behavior. |
| M2a | Linux environment/service behavior | systemd, package lifecycle, and Linux-specific migration/upgrade boundaries; native Debian/Ubuntu checks remain required. |
| M2b | Windows environment/service behavior | SCM identity, hidden credential repair, and Windows-specific migration/upgrade path; native x64/arm64 checks remain required. |
| M2c | macOS environment/service behavior | LaunchDaemon and macOS-specific migration/upgrade path; native Intel/Apple Silicon checks remain required. |
| M2d | Desktop GUI helper and session boundary | Helper is limited to the same user's logged-in, unlocked session. Linux does not add a GUI helper backend. |
| M2e | Tunnel profiles and existing ChatGPT Tunnel integration | CLI profile configuration/status/removal and service lifecycle are covered by code; live end-to-end Tunnel acceptance remains separate. |
| M2f | Existing installation migration | Core supports Desktop migration. Linux adds explicit owner-bearing user-Runner and fixed root-Server CLI migrations; source review is complete, but native acceptance remains outstanding. Ownerless shared-key/custom units are not guessed; a fail-closed guard is not migration completion. |
| M2g | Upgrade and rollback | Platform-specific prepare/authorize/finish constraints and incomplete outer installer recovery are recorded below; native full-installer validation remains required. |
| M3 | Desktop, Web Runtime Console, and CLI | Shared Server-authorized fleet; optional local projects, viewer authentication, local service diagnosis, live setup progress, and user credential repair. Desktop Diagnostics has separate local Server/Runner lifecycle controls; persistent services are observed and periodically refreshed without auto-restart. |
| M4 | Unified packaging | Eight optional targets: Windows EXE, macOS PKG, Linux DEB and RPM, each x64 and arm64. Artifacts do not prove native installation or expand distribution support. |
| M5 | Integrated end-to-end acceptance | Verify create/join, projects, ChatGPT path, persistence, migration, and upgrade on real machines. No full cross-platform acceptance has been completed. |

### Confirmed automated evidence

These automated results have been confirmed for the current branch at this checkpoint. Later changes or runs may change counts. They do not establish native installer, reboot, GUI-session, or upgrade behavior:

- Core: 70 tests passed.
- Desktop: 148 TypeScript tests passed at `31940d7e` (including viewer presentation and Add Project routing); 204 Rust tests passed and 4 were ignored.
- Web runtime: 101 runtime tests and 2 build tests, plus typecheck, build, and `check:dist`.
- Server Runtime Console HTTP: 44 tests; runtime status HTTP: 4 tests.
- Runtime Console registry: 301 tests; Runner computer-use: 6 tests; CLI: 424 tests passed (including 7 environment adapter tests); packaging/release scripts: 306 tests.
- Linux `cargo check` passed for Server, CLI, and Runner.

After integration with upstream `2f5d34b4`, Web runtime coverage is 125 tests plus 2 build tests, the Runner registry has 304 passing tests, and Runtime Console HTTP has 47 passing tests. Web typecheck, build, `check:dist`, Linux Server/CLI/Runner compilation, and formatting were checked again. The source-deployment evidence below remains tied to its original revision. A later integration with upstream `20abda57` preserved the extracted RuntimeInfo test module and passed 5 RuntimeInfo-filtered tests plus all 49 metadata tests. A reproduced test-only environment-variable race was fixed with the existing environment guard; the original assertions remain intact.

After the PR CI failure at `42fedb56`, the native Computer helper exports were restricted to their intended ancestor module, installer test fixtures were isolated from the hosting GitHub Actions identity, and the environment crate/dependencies were registered in the workspace policy. The 11 focused installer tests pass both with and without inherited CI variables; mismatch regressions verify rejection before probing or staging. All 316 release-tooling tests pass with a simulated foreign CI identity. Integration with upstream `adb8c2ae` preserves both the authenticated user and effective configuration in Runtime Console; 139 Web runtime tests, 2 build tests, typecheck, build, `check:dist`, and 47 Runtime Console HTTP tests pass. These local checks do not replace the pending Windows/macOS CI or native acceptance below.

Follow-up CI reached the Windows CLI tests and exposed two outdated legacy-command assertions; the four pure Windows command-guard tests now run on every host and pass with the environment setup guidance. An additional regression exposed a missing GUI-session availability projection: both summary/full Runner lists now preserve `true`/`false` and omit absent legacy metadata. All 48 Runtime Console HTTP tests pass, including authorized overview/detail/list coverage and cross-user isolation. The fixes do not change native installation acceptance.

## Linux source deployment evidence

On 2026-09-26, Ubuntu 24.04.4 x64 was used for a local source deployment of version `0.4.3`, source `31940d7e8f5786b727735d121cde2738cf07668b`, with `git_dirty: false` on CLI, Server, Runner, and Desktop. This is a development snapshot, not an installer release.

- Existing custom **user** systemd units continued to own Server and Runner. Before replacement, active Jobs and pending Runner requests were zero; prior binaries/configuration and a stopped, consistent Server data snapshot were retained for recovery.
- After restart, the same three Runner identities were online and the same four projects were visible. Only the local Server/Runner were upgraded; the two remote Runners retained their prior build.
- `/runtime`, its JavaScript and stylesheet returned HTTP 200. Authenticated local MCP initialization returned HTTP 200 with Server version `0.4.3`.
- Native Desktop used embedded assets and user-authenticated viewer setup against the existing Server. It showed the four authorized projects without a new Runner identity. Viewer labels and Add Project routing passed the 148-test Desktop frontend suite. Repeated Desktop restarts left the independently managed services running.
- The existing OpenAI Tunnel process, configuration, and credentials were retained. No new ChatGPT-to-Tunnel end-to-end read/write was performed; local MCP success is not evidence of that full path.

This evidence does **not** accept `.deb` installation, Core system-service migration, unattended reboot/logout recovery, installer rollback, Windows/macOS service behavior, or GUI helper session transitions. The native matrix below remains pending. Local recovery files are private and are not included in the repository.

## Native acceptance matrix

| Target | Installer acceptance | Reboot/service acceptance | GUI acceptance | Upgrade acceptance |
| --- | --- | --- | --- | --- |
| Windows x64, NSIS | Not yet accepted on a real Windows x64 machine | Not yet accepted: user Task Scheduler lifecycle, sign-out/sign-in and Desktop exit; separately authorized system SCM lifecycle, reboot, account/SID and credential repair | Not yet accepted: same-user logged-in unlocked session helper and Desktop shutdown behavior | Not yet accepted: published HTTPS manifest verification and installed upgrade/rollback behavior |
| Windows arm64, NSIS | Not yet accepted on a real Windows arm64 machine | Not yet accepted: native user Task Scheduler logout/login behavior; separately authorized system SCM identity, lifecycle and reboot | Not yet accepted: native GUI helper/session behavior | Not yet accepted: native installed upgrade and recovery |
| macOS arm64, package | Not yet accepted on a real Apple Silicon Mac | Not yet accepted: user LaunchAgent and authorized system LaunchDaemon lifecycle, logout/login, reboot and volume-unlock boundaries | Not yet accepted: GUI helper only in same user's logged-in unlocked session | Not yet accepted: published manifest verification and installed upgrade/rollback |
| macOS x64, package | Not yet accepted on a real Intel Mac | Not yet accepted: user LaunchAgent and authorized system LaunchDaemon lifecycle, logout/login, reboot and volume-unlock boundaries | Not yet accepted: GUI helper only in same user's logged-in unlocked session | Not yet accepted: published manifest verification and installed upgrade/rollback |
| Debian 12 x64, `.deb` | Not yet accepted on a native Debian 12 x64 host | Not yet accepted: systemd user/system lifecycle, login/logout, authorized linger and unattended reboot conditions | No new Linux GUI helper backend is planned; confirm Desktop/runtime behavior without one | Not yet accepted: published manifest verification and installed package upgrade/rollback |
| Debian 12 arm64, `.deb` | Not yet accepted on a native Debian 12 arm64 host | Not yet accepted: systemd user/system lifecycle, login/logout, authorized linger and unattended reboot conditions | No new Linux GUI helper backend is planned; confirm Desktop/runtime behavior without one | Not yet accepted: native package upgrade/rollback |
| Ubuntu 22.04+ x64, `.deb` | Not yet accepted on a native Ubuntu x64 host | Not yet accepted: systemd user/system lifecycle, login/logout, authorized linger and unattended reboot conditions | No new Linux GUI helper backend is planned; confirm Desktop/runtime behavior without one | Not yet accepted: published manifest verification and installed package upgrade/rollback |
| Ubuntu 22.04+ arm64, `.deb` | Not yet accepted on a native Ubuntu arm64 host | Not yet accepted: systemd user/system lifecycle, login/logout, authorized linger and unattended reboot conditions | No new Linux GUI helper backend is planned; confirm Desktop/runtime behavior without one | Not yet accepted: native package upgrade/rollback |
| RPM x64, `.rpm` | Not yet accepted: exact Fedora/openEuler distribution/version and dependencies must be selected within the limits below | Not yet accepted: native systemd user/system, logout/login, linger and reboot | Not yet accepted: Desktop/runtime on that exact distribution; no Linux GUI helper backend | Not yet accepted: RPM-specific prepare, package hooks, finish and recovery |
| RPM arm64, `.rpm` | Not yet accepted: exact distribution/version and native arm64 machine required; x64 evidence does not apply | Not yet accepted: native systemd user/system and unattended startup conditions | Not yet accepted: Desktop/runtime on that exact distribution | Not yet accepted: native RPM package upgrade/rollback |
| Linux Runtime x64, `.deb` | Not yet accepted: select an exact Debian 12 or Ubuntu 22.04+ disposable x64 target and Runtime package | Not yet accepted: independently verify user/system systemd, logout/login, authorized linger and reboot | Desktop/GUI helper is outside Runtime package composition; headless behavior remains unaccepted | Not yet accepted: same-flavor DEB ownership, receipt/hook target, upgrade/rollback and original stopped state |
| Linux Runtime arm64, `.deb` | Not yet accepted: select an exact Debian 12 or Ubuntu 22.04+ native arm64 target and Runtime package | Not yet accepted: native arm64 user/system service and unattended startup behavior | Desktop/GUI helper is outside Runtime package composition; x64 evidence does not apply | Not yet accepted: native same-flavor DEB upgrade, identity preservation and recovery |
| Linux Runtime x64, `.rpm` | Not yet accepted: select exact RPM distribution/version, dependencies, x64 target and Runtime package | Not yet accepted: independently verify native systemd, logout/login, linger and reboot | Desktop/GUI helper is outside Runtime package composition; removal of GUI dependencies does not prove OS support | Not yet accepted: same-flavor RPM prepare, protected candidate relocation, target-bound hooks, finish and recovery |
| Linux Runtime arm64, `.rpm` | Not yet accepted: select exact RPM distribution/version and native arm64 target/package | Not yet accepted: native arm64 user/system scope and no-login startup conditions | Desktop/GUI helper is outside Runtime package composition; neither Full nor x64 evidence applies | Not yet accepted: native same-flavor RPM upgrade/rollback and original service-state preservation |

### Follow-up code and test gates

This preparation update records review scope, not a fresh host/release observation
or native execution. Each contribution's own revision and test report is the
automated evidence; after integration, rerun the relevant gates on the final
combined revision. No test count or artifact hash is transferred to a new build.

| Workstream | Code/test evidence to review | Separate native evidence still needed |
| --- | --- | --- |
| P1: complete first-run UX ([#936](https://github.com/yyjeqhc/webcodex/pull/936), [onboarding contract](implementation/first-run-device-onboarding.md)) | First-run/Create/Join and optional-project fixtures; Runner display name; existing Tunnel connection editor; real ChatGPT-read instructions and user-report presentation | Actual correct-account service creation, device/project identities, persistent setup, and a real ChatGPT/Tunnel project read. Instructions or a user-reported outcome do not promote a native row. |
| P2: [Full/Linux Runtime package contract](https://github.com/yyjeqhc/webcodex/pull/941) | Schema/flavor/component and canonical-path fences; v2/legacy reader compatibility; cache/operation identity; exact Runtime receipt package target, ownership and fail-closed recovery tests | Actual installed DEB/RPM ownership and privilege boundary, hook authorization, package replacement, scope and service-state preservation on each selected architecture |
| P3: [Linux Runtime packaging and metadata](https://github.com/yyjeqhc/webcodex/pull/942) | Native-archive byte reuse, DEB content inspection/RPM rendering, reciprocal conflicts, no Desktop/GUI dependencies, exact twelve-target catalog and 32-record primary checksums | Actual x64/arm64 DEB/RPM installation, dependencies, same-flavor upgrade/rollback and refusal of conversion. Package inspection, workflow construction and CI do not establish these outcomes. |
| P4: [Linux terminal update adapter](implementation/headless-unified-update.md) | Shared updater delegation, bounded secret-free JSON, status/check/download separation, TTY authorization admission, exact apply/resume/rollback target and conservative uncertain-handoff tests | Authorized native terminal/sudo and SSH TTY handoff; task-window behavior, package hooks and terminal recovery without redispatch or competing restoration |
| P5: allowlisted nonsecret settings payload export ([#935](https://github.com/yyjeqhc/webcodex/pull/935), [export contract](https://github.com/yyjeqhc/webcodex/pull/935)) | Exact allowlist/schema, secret/path canaries, bounded encoding and protected export-file tests; distinct from inventory-only metadata | Native output-file ownership/permissions on each admitted platform and confirmation that export preserves credentials, pairing, services and authoritative configuration |
| Minimal installer prerequisite ([#938](https://github.com/yyjeqhc/webcodex/pull/938), [candidate relocation](implementation/installer-candidate-relocation.md)) | Source comparison and disposable verified-copy fixtures preserve hashes, provenance and relative layout across owner cache and package-hook storage | Actual Full/Runtime package-hook invocation and completion; source/fixture success does not prove native installation |

P2/P3/P4 are submitted separately as [#941](https://github.com/yyjeqhc/webcodex/pull/941), [#942](https://github.com/yyjeqhc/webcodex/pull/942) and [#943](https://github.com/yyjeqhc/webcodex/pull/943), with explicit dependency and pending-CI boundaries. The Windows private-fixture correction [#939](https://github.com/yyjeqhc/webcodex/pull/939) and public CLI dispatch repair [#940](https://github.com/yyjeqhc/webcodex/pull/940) are independent prerequisites; their tests are not native installation evidence.
Review and integration are prerequisites to native testing, not native evidence.
Keep compilation, fixture tests, package inspection, CI, source-process regression
and real-machine acceptance as separate results. Full evidence does not accept
Runtime; DEB does not accept RPM; x64 does not accept arm64. Runtime's lack of
GTK/WebKit does not grant support for a distribution whose ABI/dependencies have
not been independently admitted.

The [P6 draft security design](https://github.com/yyjeqhc/webcodex/pull/934)
([#934](https://github.com/yyjeqhc/webcodex/pull/934)) requires the requested design
adjustment and explicit security review. P7 encrypted backup Core/CLI, P8 controlled
same-Environment restore Core/CLI, and P9 Desktop backup/restore adaptation are
**deferred; not implemented or accepted by this checklist**. Before P7, review
capture-only behavior, exact admitted file slots, machine/account binding, owned
service pause and permission adapters. Before P8, additionally review independent
write/authority witnesses, domain validators and crash recovery. Historical or
unprovable captures permit authenticated private quarantine only; current DB or
credential replacement needs separately reviewed proof and write barriers.
P9 waits for accepted Core contracts and must remain a thin adapter. Nonsecret
export does not authorize secret capture, restoration or installer-receipt reuse.

The remaining gates are: integrated focused Core/CLI/adapter and Python packaging
tests; legacy/v2/schema and crash/cancellation/target-fence regressions; then an
explicitly authorized native target, exact package bytes and old/candidate pair,
account/service scope, and approved reboot/logout/fault-injection effects. P6
review and P7/P8/P9 gates remain separate. This documentation update reruns only
links/format and preserves **zero new native passes**; it supplies no machine
authorization, package hash, release or deployment.

### Current native execution status (2026-10-06)

The [dated preflight record](acceptance/2026-10-06-native-preflight.md) and [safe JSON snapshot](acceptance/2026-10-06-preflight.json) bind this review to source `ed22e5c060ae05e5be354d600be20a05b6ffed7c`. They record only read-only host and public release observations. No installer, service, logout/reboot or recovery operation was executed, and no native row was promoted to passed.

The observed public `v0.4.6` release has runtime/Desktop assets but no unified EXE/PKG/DEB/RPM, installer `manifest.json` or source-manifest assets. A dedicated authorized test target, a selected matching package with source/build identity and byte hash, service scope/account, and an old/candidate pair for upgrade are still required. The current Ubuntu 24.04.4 x64 development host is not automatically a disposable installation target. Windows/macOS OS versions and RPM distribution/version remain unselected; a family or architecture is not an OS-version acceptance claim.

RPM selection recognizes Fedora, RHEL/CentOS, Rocky/AlmaLinux and openEuler, but recognition is not installation acceptance. [RPM distribution scope](RPM_INSTALLER.md#distribution-scope) expects Fedora/openEuler packaging smoke without declaring a Fedora minimum version. openEuler 24.03-lts has only the documented container observation; its full install smoke remains unproven. CentOS Stream 9 is explicitly not a supported Desktop target. Do not invent broader support or use `--nodeps`/permission changes to pass an unsupported target. DEB evidence never accepts RPM.

Before executing a matrix row, use the [evidence binding and scenario checklist](acceptance/2026-10-06-native-preflight.md#execution-evidence) to record the exact test object and authorized effects. Keep native pass, native fail, expected refusal, automated-test pass and blocked/not-run outcomes separate. Local MCP and a real ChatGPT/Tunnel project read require separate evidence.

Linux/macOS upgrades use a staged owner-authorized flow: the original user runs `upgrade-prepare`, an administrator authorizes its private receipt, and the package hook invokes `installer-finish` through Core’s narrow owner-context broker. Windows prepares and finishes in the current user’s context. Reinstalling the exact same validated package is a read-only idempotent verification path, including without an Environment. On Unix, a different package without an Environment is rejected and requires an owner recovery record; it is not an automatic upgrade.

Rollback snapshots follow package ownership: Linux restores its managed Desktop executable, macOS restores the complete `.app` bundle, and Windows restores only `WebCodex.exe` plus the CLI, Server, and Runner executables under `webcodex-runtime/`. OS menu entries, `.desktop` files, and uninstall metadata remain with the package manager. Core also snapshots runtime executables and Environment data. Broken-installed-CLI recovery and complete outer-installer recovery still need native validation. These hooks have not received native installer acceptance.

Linux’s explicit legacy CLI migration commands preserve owner-bearing Runner identity and the fixed root Server unit/socket plus its fixed env/data locations; they reuse the original user’s private API token and do not re-pair. Source review is complete, but Linux migration has not passed native acceptance. The system Server migration transfers only the Server; an independently configured Tunnel remains with its existing owner/profile and is not imported into Core. Ownerless shared-key configurations and custom units are not guessed or migrated automatically.

A successful cross-compiled build or package inspection is useful packaging evidence, but does not satisfy a native row above. Record OS version, architecture, installer artifact identity, exact steps, observed result, and relevant logs for each completed row. Never include tokens, passwords, or other secrets in evidence.

## Workflow and security checks

- Ordinary Create must keep both independent Server and local Runner services, including with no initial Project; add a Project later and read it. Join from machines B and C as additional Runners without creating a second Server or copying Tunnel/bootstrap credentials. Verify exact Runner/Project identities with duplicate names/paths. Separately exercise Advanced Server-only, viewer-only and Quick Share without converting saved roles or ownership.
- Exercise viewer join with a personal access token through hidden input or `--token-file`; exercise Runner join with a one-time code supplied through stdin. Confirm secrets are absent from process arguments and logs.
- Exercise `add-project` with existing Runner identity and the viewer-to-Runner conversion prompt. Interrupt setup and resume; request `--new-pairing-code` only when code redemption is uncertain.
- Verify ordinary `resume --token-file` does not rotate a saved credential. Exercise `repair-user-credential [--token-file PATH]` through hidden input and protected file input; confirm it verifies the saved Server and username, atomically replaces the credential, and has no Runner-pairing or service-state effects. In Desktop Diagnostics, verify **Restore Server user credential** uses protected input.
- Check `status --json` and `doctor --json`, and the `start|stop|restart` lifecycle for Server, Runner, and Tunnel. Configure a named Tunnel profile with `configure-tunnel [PROFILE] --credentials-file PATH` using protected JSON fields `tunnel_id` and `api_key`; verify `tunnel-status`, `remove-tunnel`, and `--profile PROFILE` lifecycle. Confirm closing Desktop leaves persistent services running.
- Verify Desktop Diagnostics independently starts, stops, and restarts local Server and Runner services. Reopen a persistent environment with a stopped service and confirm Desktop only observes and periodically refreshes status without restarting it.
- On Windows, verify `repair-credential runner` accepts the account password via hidden input, rejects reliance on Windows Hello PIN, runs under the real user SID, and leaves the password only with SCM. Do not print or retain the password in test evidence. Verify the native Runner credential-repair control.
- Verify GUI helpers run only in the same user's logged-in unlocked session. Linux has no added GUI helper backend. On macOS, confirm reboot recovery only after OS and project volumes are unlocked; WebCodex does not store FileVault unlock secrets.
- Verify ChatGPT remains connected to the central Server through its existing MCP/Tunnel integration. Confirm a remote Runner has a separately reachable Server URL; setup does not open firewall ports or alter the listen address. Tailscale is optional.
- Verify normal upgrade checks the published HTTPS source manifest and compares version, source SHA, and provenance hash without requiring a shared CI job or timestamp. A CI/development candidate requires explicit `--development-build` and reports `provenance_verified: false`; it must not be represented as official verification.

## 中文

本清单记录统一环境工作的范围和证据边界。可选统一打包定义八类安装文件：Windows NSIS `.exe`、macOS `.pkg`、Linux `.deb` 和 `.rpm`，各含 x64、arm64；Runtime/source 身份仍为六个平台。DEB 声明范围为 Debian 12 / Ubuntu 22.04+，RPM 发行版限制见下文。这些文件尚未完成完整的原生安装、会话和升级验收，也未作为完整统一安装集合公开发布。源码和 CI/打包结果不能证明真实机器上的行为；本文不宣称跨平台体验一致。

本轮准备保留上述 Full 基线，并新增 Linux Runtime 的 DEB/RPM、x64/arm64 四个独立目标。十二目标 catalog 不增加原生通过项，也不扩大 OS 支持范围；历史观察与对应源码/hash 绑定保持不变。

### 里程碑与范围

| 里程碑 | 范围 | 证据与验收边界 |
| --- | --- | --- |
| M1 | 共用配置核心：创建/加入、项目/无项目、身份、恢复及 Desktop/CLI 共用配置状态 | Core tests 覆盖确定性配置行为；不能证明原生打包或服务行为。 |
| M2a | Linux 环境与服务行为 | systemd、安装包生命周期及 Linux 迁移/升级边界；仍需原生 Debian/Ubuntu 检查。 |
| M2b | Windows 环境与服务行为 | SCM 身份、隐藏凭据修复及 Windows 迁移/升级路径；仍需原生 x64/arm64 检查。 |
| M2c | macOS 环境与服务行为 | LaunchDaemon 和 macOS 迁移/升级路径；仍需原生 Intel/Apple Silicon 检查。 |
| M2d | Desktop GUI helper 与会话边界 | helper 仅限同一用户已登录且未锁定的会话。Linux 不新增 GUI helper backend。 |
| M2e | Tunnel profiles 与现有 ChatGPT Tunnel 集成 | CLI profile 配置/状态/删除和服务生命周期有代码覆盖；仍需单独验收真实端到端 Tunnel。 |
| M2f | 现有安装迁移 | Core 支持 Desktop 迁移。Linux 新增显式的 owner Runner 与固定 root Server CLI 迁移；源码审查已完成，但仍需原生验收。不会猜测无 owner shared-key/custom unit；安全拒绝不等于迁移完成。 |
| M2g | 升级与回滚 | 下文记录平台专属 prepare/authorize/finish 限制及外层安装器恢复缺口；仍需原生完整安装器验证。 |
| M3 | Desktop、网页 Runtime Console、CLI 三端体验 | 同一 Server 的授权项目与 Runner；本机项目可空、viewer 用户认证、本机诊断、实时配置进度和用户凭据修复。Desktop Diagnostics 可独立控制本机 Server/Runner 生命周期；持久服务只观察并定期刷新状态，不会自动重启。 |
| M4 | 统一打包 | 八个可选目标：Windows EXE、macOS PKG、Linux DEB/RPM，各含 x64 与 arm64。构建产物不能证明原生安装成功或扩大发行版支持。 |
| M5 | 集成端到端验收 | 在真实机器检查创建/加入、项目、ChatGPT 链路、持久性、迁移和升级。目前尚未完成跨平台整体验收。 |

### 已确认的自动化验证证据

以下为本分支此检查点已确认的自动化结果。后续代码或测试运行可能改变数量。这些结果不能证明原生安装器、重启、GUI 会话或升级行为：

- Core：70 项测试通过。
- Desktop：`31940d7e` 上 148 项 TypeScript 测试通过（包含仅查看状态及添加项目入口）；204 项 Rust 测试通过，4 项被忽略。
- Web runtime：101 项 runtime 测试、2 项 build 测试，以及 typecheck、build、`check:dist`。
- Server Runtime Console HTTP：44 项；runtime status HTTP：4 项。
- Runtime Console registry：301 项；Runner computer-use：6 项；CLI：424 项通过（其中包含 7 项 environment adapter 测试）；打包/Release scripts：306 项。
- Linux 上 Server、CLI 和 Runner 的 `cargo check` 通过。

合并上游 `2f5d34b4` 后，Web runtime 为 125 项测试和 2 项 build 测试，Runner registry 为 304 项通过，Runtime Console HTTP 为 47 项通过。已重新检查 Web typecheck、build、`check:dist`、Linux Server/CLI/Runner 编译及格式。下文源码部署证据仍对应原始部署修订。 随后合并上游 `20abda57` 时保留了独立的 RuntimeInfo 测试模块，5 项 RuntimeInfo 筛选测试和全部 49 项 metadata 测试通过。已复现的测试环境变量竞争通过现有环境 guard 修复，原断言保持不变。

PR 在 `42fedb56` 的 CI 失败后，已将原生 Computer helper 导出范围修正到所需祖先模块，隔离安装器测试与宿主 GitHub Actions 的构建身份，并登记 environment crate 及其依赖规则。11 项安装器定向测试在有、无继承 CI 变量时均通过；不匹配回归测试验证在探测或暂存前拒绝。模拟外部 CI 身份下，316 项发布工具测试通过。合并上游 `adb8c2ae` 后，Runtime Console 同时保留认证用户与生效配置字段；139 项 Web runtime 测试、2 项构建测试、typecheck、build、`check:dist` 和 47 项 Runtime Console HTTP 测试通过。这些本地检查不替代待运行的 Windows/macOS CI 和下方原生验收。

后续 CI 进入 Windows CLI 测试后发现两项旧命令断言过时；4 项纯 Windows 命令判断测试现已在所有主机运行，并通过 environment 配置指引断言。另一个回归测试发现 GUI 会话可用性投影缺失，Runner 的精简与完整列表现均保留 `true`/`false`，旧版未提供时省略字段。全部 48 项 Runtime Console HTTP 测试通过，包含授权概览、详情、列表及跨用户隔离。这些修正不改变原生安装验收状态。

### Linux 源码部署证据

2026-09-26 在 Ubuntu 24.04.4 x64 上部署了源码开发版 `0.4.3`，source 为 `31940d7e8f5786b727735d121cde2738cf07668b`；CLI、Server、Runner 和 Desktop 的 `git_dirty` 均为 `false`。这是开发快照，不是安装包发布。

- Server、Runner 继续由原有自定义 systemd **用户服务**托管。切换前确认活动 Job 和 Runner 待处理请求均为零，保留旧程序、配置以及停服后的一致 Server 数据快照供恢复。
- 重启后，相同的 3 个 Runner 身份在线，相同的 4 个项目可见。只升级了本机 Server/Runner，另外两台 Runner 保留原构建。
- `/runtime`、JavaScript 和样式资源均返回 HTTP 200；使用既有用户认证初始化本地 MCP 返回 HTTP 200，Server 版本为 `0.4.3`。
- 原生 Desktop 使用内嵌资源，以用户认证的仅查看配置连接已有 Server，显示 4 个获授权项目，没有创建新的 Runner 身份。仅查看文案与添加项目入口通过了 148 项 Desktop 前端测试；多次重启 Desktop 后，独立托管的服务继续运行。
- 原 OpenAI Tunnel 进程、配置和凭据保留。本次没有重新通过 ChatGPT/Tunnel 执行端到端项目读写，本地 MCP 成功不能替代整条链路验证。

以上证据**不代表** `.deb` 安装、Core 系统服务迁移、无人登录重启/注销恢复、安装器回滚、Windows/macOS 服务行为或 GUI helper 会话切换已经验收。下表的原生验收仍待完成。恢复文件保存在本机私有目录，不提交到仓库。

### 原生平台验收矩阵

| 目标平台 | 安装验收 | 重启/服务验收 | GUI 验收 | 升级验收 |
| --- | --- | --- | --- | --- |
| Windows x64，NSIS | 尚未在真实 Windows x64 机器验收 | 尚未验收用户计划任务、注销/登录及 Desktop 退出；另需授权验收系统 SCM、重启、账户/SID 和凭据修复 | 尚未验收同用户登录且未锁定时的 helper 与 Desktop 退出行为 | 尚未验收已发布 HTTPS manifest 验证及安装后的升级/回滚 |
| Windows arm64，NSIS | 尚未在真实 Windows arm64 机器验收 | 尚未验收用户计划任务的注销/登录；另需授权验收系统 SCM 身份、生命周期与重启 | 尚未验收原生 GUI helper/会话行为 | 尚未验收原生安装升级与恢复 |
| macOS arm64，安装包 | 尚未在真实 Apple Silicon Mac 验收 | 尚未验收用户 LaunchAgent、获授权系统 LaunchDaemon、注销/登录、重启及磁盘解锁边界 | 尚未验收 helper 仅在同用户登录且未锁定会话运行 | 尚未验收已发布 manifest 验证及安装后的升级/回滚 |
| macOS x64，安装包 | 尚未在真实 Intel Mac 验收 | 尚未验收用户 LaunchAgent、获授权系统 LaunchDaemon、注销/登录、重启及磁盘解锁边界 | 尚未验收 helper 仅在同用户登录且未锁定会话运行 | 尚未验收已发布 manifest 验证及安装后的升级/回滚 |
| Debian 12 x64，`.deb` | 尚未在原生 Debian 12 x64 主机验收 | 尚未验收 systemd user/system、注销/登录、获授权 linger 和无人登录开机条件 | 不计划新增 Linux GUI helper backend；需确认无该 backend 时 Desktop/runtime 行为 | 尚未验收已发布 manifest 验证及安装包升级/回滚 |
| Debian 12 arm64，`.deb` | 尚未在原生 Debian 12 arm64 主机验收 | 尚未验收 systemd user/system、注销/登录、获授权 linger 和无人登录开机条件 | 不计划新增 Linux GUI helper backend；需确认无该 backend 时 Desktop/runtime 行为 | 尚未验收原生安装包升级/回滚 |
| Ubuntu 22.04+ x64，`.deb` | 尚未在原生 Ubuntu x64 主机验收 | 尚未验收 systemd user/system、注销/登录、获授权 linger 和无人登录开机条件 | 不计划新增 Linux GUI helper backend；需确认无该 backend 时 Desktop/runtime 行为 | 尚未验收已发布 manifest 验证及安装包升级/回滚 |
| Ubuntu 22.04+ arm64，`.deb` | 尚未在原生 Ubuntu arm64 主机验收 | 尚未验收 systemd user/system、注销/登录、获授权 linger 和无人登录开机条件 | 不计划新增 Linux GUI helper backend；需确认无该 backend 时 Desktop/runtime 行为 | 尚未验收原生安装包升级/回滚 |
| RPM x64，`.rpm` | 尚未验收：需按下方限制选定 Fedora/openEuler 的准确版本和依赖 | 尚未验收 systemd user/system、注销/登录、linger 和重启 | 尚未验收该发行版 Desktop/runtime；不新增 Linux GUI helper | 尚未验收 RPM 专属 prepare、包 hook、finish 和恢复 |
| RPM arm64，`.rpm` | 尚未验收：需准确发行版/版本及原生 arm64 主机；x64 证据不适用 | 尚未验收原生 systemd user/system 和无人登录开机条件 | 尚未验收该发行版 Desktop/runtime | 尚未验收原生 RPM 升级/回滚 |
| Linux Runtime x64，`.deb` | 尚未验收：需选定准确 Debian 12 或 Ubuntu 22.04+ 可重装 x64 主机及 Runtime 包 | 尚未独立验收 systemd user/system、注销/登录、授权 linger 和重启 | Runtime 包不含 Desktop/GUI helper；headless 行为仍未验收 | 尚未验收同 flavor DEB ownership、receipt/hook target、升级/回滚及原先停止状态 |
| Linux Runtime arm64，`.deb` | 尚未验收：需选定准确 Debian 12 或 Ubuntu 22.04+ 原生 arm64 主机及 Runtime 包 | 尚未验收原生 arm64 服务和无人登录开机条件 | Runtime 包不含 Desktop/GUI helper；x64 证据不适用 | 尚未验收原生同 flavor DEB 升级、身份保留及恢复 |
| Linux Runtime x64，`.rpm` | 尚未验收：需准确 RPM 发行版/版本、依赖、x64 主机及 Runtime 包 | 尚未独立验收 systemd、注销/登录、linger 和重启 | Runtime 包不含 Desktop/GUI helper；移除 GUI 依赖不证明 OS 支持 | 尚未验收同 flavor RPM prepare、受保护候选搬移、target-bound hooks、finish 和恢复 |
| Linux Runtime arm64，`.rpm` | 尚未验收：需准确 RPM 发行版/版本及原生 arm64 主机/包 | 尚未验收原生 arm64 user/system scope 和无人登录开机条件 | Runtime 包不含 Desktop/GUI helper；Full 或 x64 证据均不适用 | 尚未验收原生同 flavor RPM 升级/回滚及原服务状态保留 |

### 后续代码与测试门禁

本轮仅更新验收准备，没有重新观察主机/公开发布，也没有执行原生操作。P1–P5 的代码和测试以各自修订、PR 及上方[代码与测试门禁表](#follow-up-code-and-test-gates)为准；整合后必须在最终组合修订重跑相关门禁，不向新构建转移历史测试计数或 hash。

- P1 [#936](https://github.com/yyjeqhc/webcodex/pull/936)：完整首次配置 UX，含 Runner display name、现有 Tunnel 连接编辑器、真实 ChatGPT 读取说明和用户报告。UI/adapter 测试不接受真实服务创建、设备/项目身份或 ChatGPT/Tunnel 读取；用户报告单独记录。
- P2：Full/Linux Runtime 包合同、严格 schema/flavor/路径、v2 与旧 reader、cache/operation target、Runtime receipt 的准确包格式、ownership 和恢复。仍需各架构真实 DEB/RPM 权限、包 hook 和替换证据。
- P3：Linux Runtime 包与发布元数据复用原生 archive 字节；包内容/RPM spec/CI、十二目标 catalog、32 条主校验记录属于自动化或打包证据。仍需独立原生安装、依赖、同 flavor 升级/回滚和拒绝转换证据。
- P4：Linux 终端更新薄适配，复用共享 updater，区分 status/check/download，限制 TTY 授权、secret-free JSON 和准确 apply/resume/rollback target。实际 sudo/SSH TTY、任务窗口、安装器 handoff 和恢复仍未验收。
- P5 [#935](https://github.com/yyjeqhc/webcodex/pull/935)：白名单非敏感设置载荷导出，与 inventory-only 元数据区分。canary/边界测试不替代原生文件权限与凭据、配对、服务和配置保持证据。
- 前置 [#938](https://github.com/yyjeqhc/webcodex/pull/938)：修复已验证候选搬到包 hook 暂存位置后的身份比较；源码与私有 fixture 保留 hash、provenance 和相对路径，只证明该比较行为，没有原生安装证据。

P2/P3/P4 已分别提交 [#941](https://github.com/yyjeqhc/webcodex/pull/941)、[#942](https://github.com/yyjeqhc/webcodex/pull/942)、[#943](https://github.com/yyjeqhc/webcodex/pull/943)，保留明确依赖与待完成 CI 状态。Windows 私有 fixture 修正 [#939](https://github.com/yyjeqhc/webcodex/pull/939) 和 CLI public dispatch 修复 [#940](https://github.com/yyjeqhc/webcodex/pull/940) 独立审核；这些测试不是原生安装证据。Full 不替代 Runtime，DEB 不替代 RPM，x64 不替代 arm64；无 GTK/WebKit 依赖不自动接受任何发行版。

P6 [#934](https://github.com/yyjeqhc/webcodex/pull/934)仍是要求调整、等待明确安全审查的设计草稿。P7 加密备份 Core/CLI、P8 同 Environment 受控恢复 Core/CLI、P9 Desktop 备份恢复薄适配均**暂缓，未实现，未验收**。P7 前需审查 capture-only、准确文件槽、机器/账户绑定、已知自有服务暂停和权限 adapter；P8 还需独立写入/authority witness、只读领域 validator 及 crash recovery。历史或无法证明的 capture 只能认证后私有隔离暂存；替换当前 DB/凭据必须另有经审查的完整证明与写入屏障。P9 等待获接受的 Core 合同。P5 非敏感导出不授予 secret capture、恢复或借用 installer receipt 的权限。

后续门禁依次为整合后的 Core/CLI/adapter 与 Python 打包定向测试、legacy/v2/schema 和 crash/cancel/target fence 回归，再到明确授权的原生测试机、准确包字节、旧包/候选包、账户/service scope 及重启/注销/故障注入范围。P6 安全审查和 P7/P8/P9 门禁独立保持。本轮仅核对文档链接/格式，**新增原生通过仍为零**，没有生成机器授权、包 hash、Release 或部署证据。

### 本轮原生执行状态（2026-10-06）

[本轮只读盘点](acceptance/2026-10-06-native-preflight.md)与[安全 JSON 快照](acceptance/2026-10-06-preflight.json)绑定源码 `ed22e5c060ae05e5be354d600be20a05b6ffed7c`，仅记录主机和公开发布信息。没有执行安装、服务、注销/重启或恢复操作，没有将任何原生行改为通过。

公开 `v0.4.6` 含 Runtime/Desktop 文件，但不含统一 EXE/PKG/DEB/RPM、安装器 `manifest.json` 或 source manifest。仍需提供明确授权的测试机、匹配的测试包与源码/构建身份和字节 hash、服务 scope/账户，以及升级所需旧包/候选包。当前 Ubuntu 24.04.4 x64 开发主机不是默认可重装测试机；Windows/macOS 版本及 RPM 发行版/版本尚未选定，不能从家族或架构推断已经验收的 OS 版本。

RPM selector 识别 Fedora、RHEL/CentOS、Rocky/AlmaLinux 和 openEuler，不代表安装已经验收。[RPM 发行版范围](RPM_INSTALLER.md#distribution-scope)要求 Fedora/openEuler 打包 smoke，但没有声明 Fedora 最低版本。openEuler 24.03-lts 目前只有文档中的容器观察，完整安装未证明；CentOS Stream 9 明确不是受支持 Desktop 目标。不得扩大支持声明或通过 `--nodeps`/放宽权限通过测试，DEB 证据不能替代 RPM。

执行前按[证据绑定及场景清单](acceptance/2026-10-06-native-preflight.md#execution-evidence)记录具体测试对象和获授权操作。原生通过、原生失败、预期拒绝、自动化通过、阻塞/未执行应分别记录。本地 MCP 成功与真实 ChatGPT/Tunnel 项目读取需要两份证据。

Linux/macOS 升级使用分阶段的 owner 授权流程：原用户运行 `upgrade-prepare`，管理员授权私有 receipt，包钩子再通过 Core 窄范围 owner-context broker 调用 `installer-finish`。Windows 在当前用户上下文 prepare 和 finish。重新安装完全相同且已验证的包会走只读幂等验证路径，即使没有 Environment 也一样。Unix 上没有 Environment 时，不同包版本会被拒绝，需要 owner recovery record；这不属于自动升级。

回滚快照严格遵循包管理边界：Linux 恢复受管 Desktop 可执行文件，macOS 恢复完整 `.app` bundle，Windows 只恢复 `WebCodex.exe` 及 `webcodex-runtime/` 下的 CLI、Server、Runner。OS 菜单项、`.desktop` 文件和卸载元数据归包管理器所有。Core 也会快照 runtime 可执行文件和 Environment 数据。已安装 CLI 损坏后的恢复和完整外层安装器恢复仍需原生验证；这些钩子尚未通过原生安装器验收。

Linux 显式旧 CLI 迁移命令会保留 owner Runner 身份及固定 root Server unit/socket 和固定 env/data 位置，复用原用户私有 API token，不重新配对。源码审查已完成，但 Linux 迁移尚未通过原生验收。system Server 迁移只迁移 Server；独立配置的 Tunnel 仍归原 owner/profile 管理，不会迁入 Core。不会猜测或自动迁移无 owner shared-key 配置和自定义 unit。

交叉编译成功或检查包内容属于有用的打包证据，但不满足上表原生验收。每项完成后记录 OS 版本、架构、安装包身份、操作步骤、观察结果和相关日志。证据中不得包含 token、密码或其他密钥。

### 流程与安全检查

- 普通创建需保留独立 Server 和本机 Runner，初始项目为空时角色不变，之后可添加并读取项目；B、C 作为追加 Runner 加入，不创建第二个中心 Server，不复制主节点 Tunnel/bootstrap 凭据。同名/同路径项目按准确 Runner/Project 身份验证。另测 Advanced Server-only、viewer-only 和 Quick Share，不转换既有角色或 ownership。
- 使用隐藏输入或 `--token-file` 测试 viewer 用户访问 token；使用 stdin 测试 Runner 一次性 code。确认 secret 不出现在进程参数和日志中。
- 验证复用既有 Runner 身份的 `add-project`，以及 viewer 转 Runner 提示。中断后恢复配置；仅当无法确定 code 是否已兑换时请求 `--new-pairing-code`。
- 验证普通 `resume --token-file` 不会轮换已保存凭据。通过隐藏输入和受保护文件测试 `repair-user-credential [--token-file PATH]`；确认会核对已保存的 Server 与用户名、原子替换凭据，且不影响 Runner 配对或服务状态。在 Desktop Diagnostics 确认 **Restore Server user credential** 使用受保护输入。
- 检查 `status --json`、`doctor --json` 和 Server、Runner、Tunnel 的 `start|stop|restart`。用 `configure-tunnel [PROFILE] --credentials-file PATH` 配置命名 Tunnel profile，并使用受保护 JSON 中的 `tunnel_id`、`api_key`；验证 `tunnel-status`、`remove-tunnel` 和 `--profile PROFILE` 生命周期。确认关闭 Desktop 后持久服务仍运行。
- Windows 上验证 `repair-credential runner` 通过隐藏输入获取账户密码，不依赖 Windows Hello PIN，以真实用户 SID 运行且密码只交由 SCM 保存。测试证据不可打印或保留密码。
- 验证 Desktop Diagnostics 可分别启动、停止和重启本机 Server 与 Runner。对停止服务的持久环境重新打开 Desktop，确认它只观察并定期刷新状态，不会自动重启服务。
- 验证 Windows 原生 Runner 凭据修复控件。
- 验证 GUI helper 仅在同一用户登录且未锁定的会话运行。Linux 不新增 GUI helper backend。macOS 需在系统和项目磁盘解锁后验证重启恢复；WebCodex 不保存 FileVault 解锁凭据。
- 验证 ChatGPT 继续通过现有 MCP/Tunnel 集成连接中心 Server。确认远程 Runner 有单独可达的 Server URL；配置不会开放防火墙端口或修改监听地址。Tailscale 是可选方案。
- 验证普通升级会检查已发布 HTTPS source manifest，并校验 version、source SHA、provenance hash；不要求这些身份共享 CI job 或 timestamp。CI/开发候选必须显式使用 `--development-build` 并报告 `provenance_verified: false`，不得称为官方验证。
