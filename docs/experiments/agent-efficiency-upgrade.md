# Agent efficiency paired evidence

[简体中文](agent-efficiency-upgrade.zh-CN.md)

This procedure collects current-source evidence for
[Issue #1159](https://github.com/yyjeqhc/webcodex/issues/1159). It does not contain
real-model measurements or establish a production inefficiency. The collector
is a thin wrapper over `agent_loop_benchmark` sample ownership, fixture oracles,
runtime gates and `agent_loop_report` comparison. Existing Agent Loop evidence
remains usable without the optional efficiency identity fields.

## Run the same three tasks

Use a checkout whose HEAD is the exact source commit being tested. The runner
reads the case manifest from that commit, uses fresh detached worktrees, and
runs `readonly_review`, `guarded_multi_file_edit`, and
`long_validation_handoff`. Default three pairs per task produce 18 samples,
alternating Direct → Host Code Mode and Host Code Mode → Direct. Pair count is
bounded to 1–10; each driver has the existing 30-minute process-group limit.
Worktrees, receipts and annotations belong to one temporary directory and are
removed on completion or failure. Setup errors also clean the owned directory.

Provide a real live ChatGPT Host driver executable. It must submit each case
prompt to a fresh ChatGPT task/session connected to the sample workspace and
retain the actual WebCodex audit evidence for that task. Direct uses admitted
WebCodex calls directly. Host Code Mode uses the Host's JavaScript orchestration
of admitted WebCodex tools, preserving the same permissions and Job lifecycle.
It must not substitute WebCodex nested `execute_*_code_mode` for the Host lane.
Job follow-up uses the existing outer Job tools. A scripted MCP driver or mock
model can test the collector, but is not real-model evidence.

Before starting, pin the model/configuration record externally: actual model
identifier, Host version, inference settings, task instructions, tool exposure,
permission configuration and relevant Server/Runner build identities. Hash a
stable serialization of that record with SHA-256; pass its exact lowercase
64-hex digest. Keep the safe record with the experiment evidence. Neither this
hash nor a driver claim independently proves which model ran. Do not include
credentials, private instructions, payloads or private reasoning in published
records. The driver must obtain its attestation from the configured run, rather
than copying expected values without checking its configuration.

```sh
python3 scripts/agent_efficiency_benchmark.py \
  --repo . --base-revision "$(git rev-parse HEAD)" \
  --driver-command '/absolute/path/to/live-chatgpt-driver --pinned-config /private/config.json' \
  --model-config-digest '<64-hex SHA-256 of pinned model/config record>' \
  --pairs 3 --output /private/evidence/efficiency.json --strict
```

The driver receives the existing `WEBCODEX_BENCH_*` environment contract:
workspace, case ID, prompt, variant, surface, exact base revision, case
fingerprint and result-receipt path. It must write the existing bounded result
receipt including status, selected audit database/workflow session, correctness
and validation verdicts, and optional repair annotations. It additionally
writes exactly these `efficiency_attestation` fields (values below are
placeholders):

```json
{
  "efficiency_attestation": {
    "model_config_digest": "<pinned 64-hex SHA-256>",
    "base_revision": "<exact 40-hex commit>",
    "case_fingerprint": "<WEBCODEX_BENCH_CASE_FINGERPRINT>",
    "variant": "host_code_mode",
    "surface": "host_code_mode"
  }
}
```

Direct uses `variant=direct,surface=direct`. Missing, extra or mismatched
attestation fields fail the sample without echoing unexpected receipt values.
Receipts are regular files bounded to 64 KiB. Do not copy private model text,
raw tool arguments or payloads into receipts. The runner emits payload-safe
summaries rather than receipts or raw driver stdout/stderr.

`--experimental-nested` adds an isolated comparison group for WebCodex nested
Code Mode, with its own fresh Direct controls (36 samples at three pairs).
Nested surfaces come from the fixed case definitions. It does not replace or
mix with the default Host result. Same model/configuration pinning is required
throughout; if a configuration changes, start a separate experiment.

## Free tool-selection regression

Stage 2 depends on the generic runtime-evidence acceptance work in
[PR #1162](https://github.com/yyjeqhc/webcodex/pull/1162). Separately from the fixed
three-task, three-pair efficiency suite, the default `tool_selection` experiment
runs four bounded read-only scenarios: `selection_single_read`,
`selection_batch_read`, `selection_cross_tool_review`, and
`selection_compound_source_context`. The last asks the model to locate and explain
match-derived source-context reads, including overlap coalescing, read limits,
byte-budget fallback and zero matches, citing current source and tests. It names
no required tool or sequence. The existing canonical compound tool is
`search_file_context`; separate searches/reads are equally admissible, and
sufficient returned context does not require another read.

```sh
python3 scripts/agent_loop_benchmark.py \
  --experiment tool_selection --repo . --base-revision "$(git rev-parse HEAD)" \
  --driver '/absolute/path/to/live-chatgpt-selection-driver' \
  --samples 3 --output /private/evidence/selection.json --strict
```

Record the manifest at the exact tested commit before running. The default
selection count is four cases × three repetitions here, without forced-lane
pairs; the efficiency collector remains three tasks × three pairs × two lanes.
The repair and Session-recovery selection cases remain explicit opt-ins. See the
[selection protocol](agent-loop-baseline.md#free-tool-selection-experiment).

For all four scenarios, retain the actual final answer and an independent check
against the tested sources or fixture values; repository review also needs
independent Git state. The file oracle establishes fixture eligibility only.
The caller supplies the external correctness verdict: a driver pass declaration,
canonical call count or final fixture alone cannot establish answer correctness.
The harness has no automatic semantic answer verifier. Missing external
correctness stays partial and cannot pass strict; missing canonical Audit
metadata also fails strict and unavailable counts remain null. Both a single
compound call and separate search/read calls can satisfy the selection runtime
contract; that admission check does not prove the answer or identify optimal
tool choice. Existing overlap/byte-budget/zero-match runtime tests and synthetic
Audit regression fixtures validate contracts, not actual model behavior. No live
measurement of the new case or guidance improvement is claimed here.

## Interpret evidence

Strict mode rejects missing cases, groups, pairs or lane samples, nonpass
statuses, missing/mismatched identity attestations, failed fixture oracles,
unproven runtime/case contracts, and noncomparable exact source/case/correctness
pairs. It recomputes acceptance rather than trusting a stored success flag or
sample count. Strict acceptance does not require every optional metric to
exist and does not prove Host cell grouping or independent model identity.

Each sample and qualified pair reports wall time, WebCodex outer calls,
serialized tool-result bytes, repair turns, outer `observe_jobs` calls, and
immediate-observe scheduling metadata. Missing measurements remain null, with
missing/observed counts in paired distributions. Runner wall time includes Host
driver orchestration; outer calls are not model turns; result bytes are not
complete network traffic; immediate observe is not proof of excess observe.
Deltas are candidate minus Direct; p50/p95 are descriptive nearest-rank values,
not confidence intervals or a speedup claim.

Hotspot candidates are ordered by observed invalid-argument/tool-selection
repairs, same-kind serial Window calls, then explicit observe after a delivered
failure. The serial proxy does not prove unnecessary microcalls. Current
payload-safe summaries cannot prove repeated reads of identical content, so
no repeated-read finding is invented. Observe after delivered failure requires
inspection of necessity before proposing a change. Low call counts alone do
not prove success or efficiency. Inspect actual candidate evidence before
proposing a focused tool-contract or guidance change, rerun the same three
pairs at the changed current revision, and keep correctness/runtime gates.
Absent live observations, this stage makes no production guidance or runtime
changes. Unit fixtures validate collection and rejection behavior only.
