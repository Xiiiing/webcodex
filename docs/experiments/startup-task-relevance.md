# Task-relevant startup catalogs

[简体中文](startup-task-relevance.zh-CN.md)

This records the bounded startup-selection change for
[Issue #1257](https://github.com/yyjeqhc/webcodex/issues/1257). It is separate from
the historical six-case knowledge/Skill results and efficiency baseline.

## Behavior and deterministic evidence

`work_on_project` orders already-authorized, already-discovered Skill and Plugin
metadata using the current instruction, before the existing 2,900-byte catalog
limits. Unique name hits take precedence over description hits. Stable sorting
retains ties and unmatched candidates; the full catalog and its source revision
are unchanged. Explicit discovery remains available through the existing hints.
No resource body, Plugin binding or execution is added by ranking.

Matching reuses the manifest ranker's ASCII splitting, English singularization
and stopwords. Complete multi-character Chinese phrases from metadata may match
the instruction; there is no translation or semantic retrieval. Query work uses
the first 2,048 instruction characters and at most 64 unique ASCII terms. The
existing manifest ranker, its query limit and result ordering remain unchanged.

Regression fixtures show that the original prefix projection omits a relevant
late Skill/Plugin entry, while ranking retains it before applying the same byte
limits. Runtime tests cover both catalogs, current-instruction changes within
one Session, scope refusal, disabled discovery, no extra Plugin binding, counts,
truncation, hints and aggregate startup bounds. Unmatched and equal-score order,
Chinese phrases, normalization and query limits have focused coverage.

Checks on implementation commit `332277688f5d05a3ca482056ccc8102015933a6d`:

- `work_on_project`: 79 tests passed; `discovery`: 77 passed;
  `startup_brief`: 31 passed; `startup_catalog`: 7 passed. Filter sets overlap.
- Rust formatting, diff whitespace and Markdown links passed.
- Clean default-feature dogfood Server and Runner build passed, offline/locked.
- The default optimized root libtest compile was terminated with SIGKILL.
  Local tests subsequently used command-line package overrides
  `profile.dogfood.package.webcodex.opt-level=0` and
  `profile.dogfood.package.webcodex.codegen-units=256` to control build resources.
  Production build settings and test assertions were unchanged.
- An initial Plugin regression fixture used numerically generated names without
  canonical lexical order and was rejected by the existing catalog validator.
  The fixture was corrected; production admission was not relaxed.

## One actual model task — 2026-10-22

A fresh Codex subagent, configured as `gpt-6.1-sol` with medium reasoning, answered
a business question about the current Quartz invoice audit procedure and approval
code. Its task did not name a Skill, resource path, answer or resource-read order.
It used a private generic API adapter against the existing isolated test role;
the adapter owned credential handling and a single ordinary HTTP cookie jar.

The fixture had 25 Project Skills. Startup returned five descriptors, with the
relevant `quartz-audit` first and truncation explicit. The model independently
selected `load_skill`, read the current definition and returned the correct two
facts with `.agents/skills/zz-quartz-audit/SKILL.md`, lines 6–7. Source bytes,
SHA-256, definition revision, exact Project, returned range and the unchanged
fixture Git state were independently checked.

All eight HTTP attempts have matching Server metadata lifecycle traces from
clean `332277688f5d`, with one HTTP-cookie Window: six successful calls and two
HTTP 400 argument rejections. The model corrected an unsupported `list_tools`
field and an MCP-only `_wc` argument used on the HTTP API. Both failures remain
in the evidence; this is not first-attempt success. Native API ActionAudit
Session/Window linkage was not established, so this sample is not claimed as
strict qualification under the separate MCP knowledge collector.

Both running candidate executable hashes and clean Server/Runner build identities
were checked. Only the existing test runtime was temporarily switched; its
application state and credentials were isolated from stable. The user explicitly
permitted a shared control-plane key with distinct stable/test Tunnel IDs. The
original test source/configuration was restored afterward; stable service and
native Tunnel process identities were unchanged. No public connection or key was
created, rotated or rebound.

## Limits

This establishes the observed task result and resource adoption for one Codex
HTTP/API task. ChatGPT/MCP/Tunnel model acceptance was unavailable and is not
claimed. Backend model identity was not independently verified; token usage,
cache behavior, model-only timing, comparative latency and success rates remain
unknown. The deterministic old-prefix comparison is not a paired real-model
performance experiment. Raw replies, credentials and private captures remain
outside Git. This record does not establish deployment to the user's stable
runtime or completion of the broader Agent roadmap.
