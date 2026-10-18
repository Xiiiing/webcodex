# Isolated WebUI, Desktop, and Admin renderer smoke

This harness renders the real production bundles against deterministic local fixtures. It never starts a WebCodex Server, Runner, Tunnel, Plugin, or native permission request. Its injected credentials and Tauri responses exist only in this loopback test server, never in product code.

From the repository root:

```sh
npm --prefix frontend ci
npm --prefix frontend run build
npm --prefix apps/desktop ci
npm --prefix apps/desktop run build
npm --prefix scripts/ui-smoke ci
# Needed where no installed macOS Google Chrome is available:
cd scripts/ui-smoke && npx playwright install chromium && cd ../..
npm --prefix scripts/ui-smoke test
```

The script checks 1440, 1280, 1024, 768, and 390-pixel viewports in light and dark themes, the current Work / Projects / Runtime WebUI, all Desktop navigation destinations, Connection profile creation and credential containment, exact project selection/addition, exact-target instruction/Skill saves, native Plugin registration, keyboard navigation, foreground permission explanation, explicit Workflow Session vs Window activity, preserved drafts, and the Admin access gate and dashboard. It verifies row and section alignment, bounded long paths, dialog focus and dismissal, and horizontal overflow. It also emulates reduced transparency and reduced motion in Chromium.

Screenshots and `report.json` are regenerated in `artifacts/liquid-glass-ui/` (ignored by Git). The report explicitly says `fixture: true` and `nativeBackend: false`. Browser errors fail the run; the browser and server close in `finally`.

For the dedicated PDF reader, run `npm --prefix scripts/ui-smoke run test:pdf`
after `node frontend/scripts/build-pdf-document.mjs`. This uses the shipped HTML
and actual PDF.js Worker with original, deterministic PDF fixtures; it needs no
WebCodex backend or frontend app build. Install Chromium with
`npm --prefix scripts/ui-smoke exec -- playwright install chromium`, or set
`WEBCODEX_SMOKE_BROWSER` to an installed Chrome/Chromium executable. It covers
800/390-pixel layouts, mixed page sizes, rotation, text-layer alignment, embedded
Chinese Type3 glyphs/selection/search, scan image pixel colors, rapid zoom and
resize, reading-position preservation, 32-page lazy loading and scroll-back,
the total canvas budget at DPR 2,
repeated delivery, version changes, parse errors, cancellation of pending transfers
on replacement/invalid selection, and transfer/Worker teardown (including removal
of Host request timers and rejection of late replies).
The Chinese sample tests an embedded font and Unicode text mapping, not every
external CMap or OpenType font. Expected pixel colors and glyph/geometry assertions
are portable test oracles; screenshots are review evidence rather than unchecked
golden images. Errors and external PDF fetches fail the run. Outputs are ignored
under `artifacts/pdf-reader/`. To check a prior HTML build without replacing the
checkout, use `node scripts/ui-smoke/pdf-document-reader.mjs --html PATH`.

For interactive Browser Use, run `npm --prefix scripts/ui-smoke run serve` and use the printed loopback URL. Routes are `/runtime/`, `/desktop/`, `/admin/`, `/desktop/?state=disconnected`, and `/desktop/?permissions`. The server expires after 30 minutes. Stop only its exact owned process when finished.

This is not a substitute for native permission, installer, real Tunnel, or Windows platform testing. Native Rust tests independently cover configuration preservation, stale-target rejection, process ownership, project inventory, and Server/Runner PID preservation on failed Tunnel replacement.

For focused Desktop layout checks after building `apps/desktop`, run
`node scripts/ui-smoke/desktop-workflow-layout.mjs`. This covers the six Settings
categories, preserved drafts, explicit-effect boundaries, readable form controls,
visible instruction/Skill paths, and long-folder containment at 1440, 1280, 1024,
768, and 390 pixels in both themes, including Chinese and English. Fixture
screenshots and `report.json` go to `artifacts/desktop-workflow/`.

For focused Runtime workflow layout checks after building `frontend`, run
`node scripts/ui-smoke/runtime-workflow.mjs`. This checks visible running calls,
Project attribution, expanded Session activity, and horizontal overflow at 1440,
1024, and 390 pixels in both themes. Fixture screenshots and the report go to
`artifacts/liquid-glass-ui/runtime-workflow/`.

For multilingual layout regression checks, build both renderers and run
`node scripts/ui-smoke/localized-layout.mjs`. It covers all seven language choices,
Desktop navigation and controls at 390/768/1024/1440 pixels, and Runtime collaboration
at 390/1024/1440 pixels. It checks message/composer separation, reading space,
fixed activity controls, and text containment. Screenshots and geometry evidence
are written to `artifacts/localized-layout/`. This uses Chromium renderer fixtures;
it does not validate native Windows/macOS WebView rendering.

For Desktop neutral surfaces and preference controls, build `apps/desktop` and run
`node scripts/ui-smoke/desktop-soft-surfaces.mjs`. It covers all seven destinations,
all seven Settings and six Extensions categories, Activity tabs and details, Connection
and native Plugin dialogs, selected project rows, and long bilingual metadata at
1440/1280/1024/780/768/390 pixels, in both themes and English/Chinese. The 780-pixel
case represents the native minimum width; narrower cases are supplementary renderer
checks. Assertions cover shared content origin and bounded reading measure, overflow,
large blur removal, rounded monochrome navigation without rails, selected entity label contrast of at least 4.5:1, stable category
geometry and equal tab treatment, and compact preferences in expanded/compact
navigation. Real control interactions cover accent presets/custom input, invalid
input, appearance cycling, language, focus return, reload persistence, and absence
of configuration/service effects while browsing. Screenshots and detailed geometry,
check, error, and failure evidence go to ignored `artifacts/desktop-soft-surfaces/`.
These isolated Chromium fixtures do not establish native WebView or real-model
acceptance. Set `WEBCODEX_SMOKE_BROWSER` for an installed Chromium executable.

For the Desktop dialog inventory, run `node scripts/ui-smoke/desktop-dialogs.mjs`
after building Desktop. The browser fixture opens each app-owned WorkspaceDialog
variant and the native HTML permission welcome dialog through its real UI trigger,
then resizes the same mounted dialog through 1440×960, 1024×760, 780×580, and
1440×960 again. English and Chinese cases flip light/dark through the production
appearance event while open, check containment, stable bounds, focus, ordinary
wheel access to final controls, Escape dismissal, and focus restoration. A strict
invoke allowlist records all calls and rejects configuration, service, permission,
authorization, credential and clipboard final effects. OS file selection is a
browser fixture; no native picker or backend is contacted. Outputs and the exact
surface/check/command inventory are saved under ignored
`artifacts/desktop-soft-surfaces/dialogs/`. Use `DIALOG_LOCALES=en-US` and
`DIALOG_FILTER=substring` for focused reproductions. Failed triggers remain failures
in the report; loading/busy/error states and native WebView behavior are separate
acceptance work. Inline update confirmation belongs to the page-flow harness.

For Desktop pages under live window-size and theme changes, run
`node scripts/ui-smoke/desktop-resize-theme.mjs` after the Desktop production
build. The same mounted English/Chinese views traverse 1440×960, 1280×760,
1024×580, 780×580, 1180×760 and back to 1440×960. All main destinations,
Settings/Extensions categories, onboarding choices, synthetic setup completion,
operation banner and inline update confirmation are included. Geometry,
monochrome selection, tab state, drafts, light/dark overflow, preference access,
OS-theme following and absence of unplanned fixture effects are asserted.
Update-confirmation geometry, action reachability and cancellation focus are
checked separately from the underlying page. Results are saved under ignored
`artifacts/desktop-soft-surfaces/resize-theme/`. Native Windows/macOS, OS dialogs,
and asynchronous error/busy permutations require separate acceptance.
