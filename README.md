<p align="right"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a></p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/brand/webcodex-mark-dark.svg">
    <img src="docs/assets/brand/webcodex-mark.svg" alt="WebCodex mark" width="76" height="76">
  </picture>
</p>

<h1 align="center">WebCodex</h1>

<p align="center"><strong>Give cloud AI agents a real development environment on your own machines.</strong></p>
<p align="center">Connect ChatGPT, Claude, and other MCP clients to the repositories, Git checkout, compilers, tests, and tools you already use.</p>
<p align="center"><a href="#try-one-repository">Quick Trial</a> · <a href="#full-setup">Full Setup</a> · <a href="docs/INDEX.md">Documentation</a> · <a href="SECURITY.md">Security</a></p>

<p align="center">
  <a href="docs/MCP.md"><img src="https://img.shields.io/badge/protocol-MCP-334155" alt="MCP protocol"></a>
  <a href="docs/QUICK_START.md#prerequisites"><img src="https://img.shields.io/badge/Node.js-18%2B-334155" alt="Node.js 18 or newer"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-334155" alt="Apache 2.0 license"></a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/readme/webcodex-overview-dark.svg">
    <img src="docs/assets/readme/webcodex-overview.svg" alt="AI clients connect to the WebCodex Server over MCP. The Server routes authorized work to a Runner on your own machine, where repositories, Git, tests, and developer tools live." width="520">
  </picture>
</p>

## Try one repository

From a repository you want an AI client to inspect:

```bash
cd /path/to/your/repository
npx --yes @yyjeqhc/webcodex share
```

This starts a **temporary, single-project, restricted trial**. Keep the command running, use the printed MCP connection values, and stop it to end the endpoint and credential. See the [Quick Trial](docs/QUICK_START.md) for prerequisites and ChatGPT connection steps.

## Full setup

For everyday development, run a regular **Server + Runner**. The Runner works where your repositories and toolchain already live; the Server gives your AI client an authenticated path to registered projects. This supports multiple projects and the full development workflow.

Install the CLI with `npm install -g @yyjeqhc/webcodex`, then follow the [Full Setup guide](docs/PERSONAL_SETUP.md). A public HTTPS endpoint or tunnel is a way to reach the Server, not a replacement for the regular setup.

## Why WebCodex

- **Work on the real repository.** The Runner operates in registered project directories on your machine, using the Git checkout you already have.
- **Use the real toolchain.** Read and edit code, inspect Git, and run compilers, tests, formatters, and project commands within the configured boundaries.
- **Keep long work observable.** Commands and checks that outlive a quick response continue as Jobs with bounded status and output you can inspect or stop.
- **Keep work reviewable.** Project policy, guarded edits, Git diffs, validation results, and runtime evidence help you inspect what happened.

## How it works

WebCodex is a self-hosted execution bridge. The AI client calls its Server through MCP; the Server authenticates and routes the request, and a Runner on the repository machine performs the work. The Server does not scan your filesystem for projects. For the detailed model, see [Architecture](docs/ARCHITECTURE.md).

## Security and control

Your repository stays on the machine that owns it. Tool results, including requested file excerpts, may be returned to the AI client. Register only projects you intend to expose, keep credentials private, and review changes before accepting them. WebCodex can read and modify files in registered projects and run powerful project commands; read the [security model](SECURITY.md) before connecting sensitive projects.

## Platforms

| Platform | Quick Trial | Everyday setup |
| --- | --- | --- |
| Linux x64 / arm64 | `share` | Server + Runner |
| macOS x64 / arm64 | `share` | Runner connected to a Server |
| Windows x64 | `share` | Foreground Server + Runner |
| Windows arm64 | `share` with an explicit supported tunnel option | Foreground Server + Runner |

The default managed Cloudflare trial is available on Linux, macOS, and Windows x64. Windows arm64 tunnel details and service limitations are in [Deployment](docs/DEPLOYMENT.md) and [MCP](docs/MCP.md).

## Documentation

**Get started:** [Quick Trial](docs/QUICK_START.md) · [Full Setup](docs/PERSONAL_SETUP.md) · [AI-assisted setup](docs/AI_ONBOARDING.md)

**Connect clients:** [MCP](docs/MCP.md) · [CLI](docs/CLI.md)

**Operate safely:** [Security](SECURITY.md) · [Deployment](docs/DEPLOYMENT.md) · [Troubleshooting](docs/TROUBLESHOOTING.md)

**Understand the system:** [Architecture](docs/ARCHITECTURE.md) · [Authentication](docs/AUTH_MODEL.md) · [All documentation](docs/INDEX.md)

## Build and contribute

The npm package is the normal installation path. To build the binaries from source:

```bash
cargo build --release --workspace --bins
export PATH="$PWD/target/release:$PATH"
```

See [Contributing](CONTRIBUTING.md) for development and pull request guidance.

## Acknowledgements

Thanks to the [LINUX DO](https://linux.do/) community for technical discussion and support for open-source sharing.

## License

Apache License 2.0. See [LICENSE](LICENSE).
