# Consistent selection and controls

[简体中文](README.zh-CN.md)

Implements [#1211](https://github.com/yyjeqhc/webcodex/issues/1211). The earlier
[#1172](https://github.com/yyjeqhc/webcodex/issues/1172),
[#1174](https://github.com/yyjeqhc/webcodex/issues/1174),
[#1186](https://github.com/yyjeqhc/webcodex/issues/1186) and
[#1198](https://github.com/yyjeqhc/webcodex/issues/1198) are completed historical
UI work; this is the new cross-surface selection and controls scope.

Selected controls now use a pale accent background and readable accent text/icons by default. Web appearance menus,
Desktop General settings and card appearance settings offer accent or monochrome.
Monochrome reverses with light/dark appearance and retains the saved accent.
Runtime/Admin share local storage on their origin; Desktop and MCP iframe
origins/Host storage partitions retain their own choices. Blocked storage keeps a
usable in-memory choice. No server preference API or authority state is added.

Navigation and compact mutually exclusive choices use a rounded filled plate.
Vertical Settings/Extensions categories remain filled navigation, including their
responsive grid. Only horizontal content-tab rows use a rounded 3px underline
matching their text and icons. Horizontal placement alone does not turn primary
navigation such as Home/Goals into content tabs. Both use
the shared 260ms controller, at most 3% stretch and stationary labels. Reversals
continue from visible geometry. Paint-time card reflow corrects the destination
without cancelling active motion; responsive changes recalibrate the containing
block. Reduced motion disables movement; forced colors retain platform selection
and focus. Status, danger and ordinary action colors retain their semantics.

React ordinary selectors use Mantine Select. Framework-free cards use a shared
portal listbox retaining the native select's form/value/event ownership. Arrow
keys, Enter, Escape, focus return, disabled options, scrolling and narrow popup
positioning are covered. Inputs have rounded borders/focus, and composers show
their focus ring around the rounded outer shell.

## Four reported areas

1. Runtime Goals/Activity now occupies a compact full-width header. Both panels
   begin on the same row; Window/Collaboration uses an underline.

   ![Pale blue Runtime navigation and horizontal underline tabs](runtime-activity-light.png)

   ![Aligned Runtime panels in dark appearance](runtime-activity-dark.png)

2. Collaboration uses a themed popup and rounded composer focus.

   ![Runtime collaboration dropdown](runtime-composer-dropdown.png)

3. Admin fills the available content width with one consistent sidebar gutter.
   The sidebar sticks, the main title scrolls, and summary cards remain separate.
   Anchor navigation includes fractional-pixel landing tolerance.

   ![Admin at the top](admin-top.png)

   ![Admin after navigating to Runners](admin-scrolled.png)

4. MCP Home/Goals uses the real shared filled controller. Work Result content and
   spreadsheet sheet navigation use underlines. The first-party generator emits
   self-contained HTML; affected resources advance to Workbench v8, Work Result
   v33 and spreadsheet v4.

   ![MCP Home/Goals](workbench-home-goals.png)

   ![Work Result themed picker in a narrow viewport](work-result-dropdown.png)

## Appearance, responsive and motion evidence

![Runtime monochrome in dark appearance](runtime-monochrome.png)

![Runtime mobile layout](runtime-mobile.png)

![Admin mobile anchor in monochrome](admin-mobile.png)

![MCP local monochrome setting at 320px](workbench-mobile-monochrome.png)

![Paused Runtime tab transition](runtime-mid-motion.png)

Recordings contain real browser interactions and paused intermediate frames used
by assertions: [Runtime motion](runtime-motion.webm),
[MCP Workbench motion](workbench-motion.webm).

## Native Linux evidence

The native dogfood binary ran in the unlocked Linux graphical session, using its
real WebKitGTK renderer and Tauri backend. A disposable loopback Server/Runner,
synthetic user/project, separate configuration/data roots and private D-Bus kept
the viewer isolated. Exact executable/build identities, listener ownership and
temporary Runner identity were checked locally. No Tunnel or services were
installed. All owned processes and temporary credentials/state were cleaned.

Actual native input opened Settings and the popup, selected monochrome with
ArrowDown/Enter, switched to dark appearance, cancelled a different highlighted
choice with Escape and resized the window from 1180 to 800px. These images are
native window captures, not browser fixtures:

![Native Desktop pale category navigation](desktop-native-navigation.png)

![Native Desktop selection popup](desktop-native-appearance.png)

![Native Desktop dark monochrome](desktop-native-dark-monochrome.png)

![Native Desktop at 800px](desktop-native-narrow.png)

## Validation and limits

See the compact [validation record](validation.json) for counts and bundle
digests. Typechecks and production frontend/Desktop builds pass. Component tests
pass: 260 frontend and 753 Desktop; frontend Node suites pass 105 + 23 tests;
existing MCP controller suites pass 582. Focused Rust checks pass 5 registry,
15 Work Result and 1 resource capability test. Formatting and generated-resource
consistency checks pass.

The production-bundle motion harness passes 30 checks in each light/dark theme.
The Runtime/Admin matrix passes 192 checks and covers 1440/390px, light/dark and accent/monochrome,
including top/scroll/anchor, focus, popup, pale selection, keyboard-highlighted
option colors and animation behavior. Vertical category navigation is also checked
at desktop and responsive-grid widths; the previous saturated/underline candidate
fails these new assertions. MCP browser
coverage passes 48 cases at 320/390/800/1440px, including Host theme changes,
controls, motion, uncertain submissions and teardown.

Browser screenshots use public synthetic data with loopback fixtures and the
actual shipped bundles/HTML. They establish browser rendering, not ChatGPT Host
acceptance. **Real ChatGPT card rendering remains unverified.** Native validation
covers Linux source preview, not an installed package, Windows/macOS, or a release.
Native binaries identify the preceding PR head plus dirty worktree; recorded
Desktop asset hashes identify the corrected native candidate that was built and captured.

No persistent stable/test deployment was updated. Host resource refresh and
deployment remain separate operations. CI is not included in these local results.

## Reproduce browser checks

After installing the frontend, Desktop and `scripts/ui-smoke` dependencies:

```sh
npm --prefix frontend run typecheck
npm --prefix frontend run build
npm --prefix frontend run test:runtime
npm --prefix frontend run test:admin
npm --prefix frontend run check:dist
npm --prefix apps/desktop run typecheck
npm --prefix apps/desktop run build
npm --prefix apps/desktop test
node --test src/mcp_tests/*.test.mjs
node scripts/ui-smoke/flowing-selection.mjs
WEBCODEX_MOTION_THEME=dark node scripts/ui-smoke/flowing-selection.mjs
node scripts/ui-smoke/selection-consistency.mjs
node scripts/ui-smoke/mcp-workspaces.mjs
```

Regenerable reports/screenshots stay in ignored `artifacts/`; this directory
contains the curated public captures. For native source-preview setup, follow
[Desktop development](../../DESKTOP_DEVELOPMENT.md) with disposable test roots.
