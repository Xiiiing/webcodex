# Nonsecret settings export

`webcodex environment settings-export [--environment-dir PATH] [--json]`
prints a schema-version-1 JSON document with `kind: "settings_export"`.
Desktop **Settings → Configuration & data → Export nonsecret settings** saves
the same document and adds Desktop's own preferences. This operation observes
existing configuration; it does not configure an Environment or import settings.

The allowlist contains the saved Environment ID, local Server/Runner roles,
saved service scope, up to 16 recorded Project IDs and path references, and the
Runner's optional `display_name`. Desktop separately adds its effective current
language (one of its seven supported locales) and automatic update download
boolean. The language comes from the existing native locale state; the update
preference comes from the existing Desktop configuration owner. CLI never reads
Desktop app-data or invents Desktop preferences.

Each value has an explicit `state`: `known` with a typed `value`, `unknown`, or
`not_applicable`. A known null device name means the optional key is absent in
an otherwise admitted Runner configuration. A missing, unreadable, malformed,
duplicated-key or mismatched Runner configuration does not provide a device
name. The parser and binding checks are the same ones used by the inventory.
An absent local Runner makes its device name inapplicable. Unknown Environment
records, project lists or legacy service scopes remain unknown. Duplicate project
IDs make the project list unknown; no registry or project-directory enumeration
fills missing references. Relative/unsafe/remote paths retain the inventory's
status, without inventing a local effective path.

Only named typed values are projected. Credential fields, API keys, tokens,
Server/Tunnel URLs, service arguments, arbitrary extension fields, raw mixed
configuration, databases, logs, recovery payloads, project contents and unknown
files are excluded by construction. Display names are bounded to 256 UTF-8
bytes, reject control characters and URL/userinfo-like values, and retain the
inventory's existing sensitive-text guard. This guard is not a guarantee about
arbitrary user-entered metadata: names and path references may be private or
contain information the user entered. Review the output before sharing it.

The settings observation joins the existing inventory revision but is not
serialized into path inventory or `manifest_only` documents. Changing an
exported device name, language or update preference invalidates an earlier
revision. Existing inventory and manifest wire fields and planning behavior
remain unchanged. Native export reprojects the selected context, checks the
revision before writing, and uses the existing bounded JSON/create-new writer.
The native save chooser selects a new `.json` document; existing files and managed
locations cannot be overwritten. Cancelled or stale selections do not write.
Incomplete inventories cannot establish a safe destination and refuse export.
Native output remains capped at 1 MiB and uses mode 0600/no-follow on Unix.

`cannot_restore: true` is deliberate. Exported values do not grant authority,
copy identities or credentials, register Projects, or form a complete recoverable
backup. There is no include-secrets option, import/restore action, automatic
support attachment, network request, process launch or query-state mutation.

Linux focused coverage includes all four role combinations, missing state,
actual value projection, excluded-field/file canaries, malformed/duplicate
Runner configuration, duplicate project references, revision changes, bounded
JSON/schema rejection, all seven native/UI languages, native create-new and
protected-destination behavior, stale exports and picker cancellation. Native
Windows/macOS save/ACL/WebView behavior requires their platform validation;
headless component checks do not establish installed-application behavior.

## Validation on Linux, 2026-10-06

| Focused check | Result |
| --- | --- |
| Shared inventory, including six settings-export regressions | 24 passed |
| CLI Environment tests after main `03c2c313` integration | 13 passed |
| Native Desktop inventory/open/export adapter tests | 13 passed |
| Desktop ConfigurationDataPanel, RuntimeShell, WorkspaceSettings and presentation | 81 passed |
| Desktop TypeScript, production frontend build, form-control CSS contract | Passed; existing large-bundle advisory remains |
| CLI and native Desktop dogfood builds | Passed; existing native dead-code warnings remain |
| Rust formatting and diff whitespace | Passed |
| Actual CLI binary | Missing roots stayed absent; joined Runner exported actual values; excluded canaries stayed absent; the temporary fixture tree stayed byte-for-byte unchanged |
| Isolated Chromium component fixture | At 360 px, all seven languages had no horizontal overflow and keyboard Tab reached the settings-export action |

The temporary browser fixture used the actual component and styles with an
in-memory inventory stub. It did not invoke the native application or any
production service. No full workspace suite, installation, deployment, secret
backup or restore was performed.

After merging main `03c2c313`, shared inventory (24), CLI Environment (13),
Desktop frontend (81), TypeScript/build/CSS and formatting passed again.
The native export adapter suite (13) passed after `545d5caf`; a fixture's
private updater import was corrected to the public shared compatibility type.
The added Windows binding changes do not alter inventory/export behavior.
