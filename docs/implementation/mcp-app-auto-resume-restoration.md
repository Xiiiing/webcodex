# MCP App continuation restoration acceptance

[PR #1028](https://github.com/yyjeqhc/webcodex/pull/1028) restored
`present_agent_continuation` and `present_job_terminal_continuation` as
model-visible Direct tools with Continuation reason. Durable waits remain
Gateway tools. This procedure is the dogfood/publication gate for future changes
to continuation behavior or Host integration. It does not itself establish Host
readiness or authorize deployment.

The Agent View uses `ui://webcodex/agent-continuation/v22`. A valid ref-only
presentation input waits for the initial Server result to resolve the exact
identity; the ref itself never grants identity or authority. This fixes the
previous initialization teardown when the Host delivered ref-only tool input
before the result. Complete tuple inputs still work, and invalid selectors or
conflicting resolved identities still stop coordination. The View also retains
the presentation-reference fence: changing `~ac1` to `~ac2` is a terminal conflict,
even before a Server projection arrives. Tests cover all six
initialization/input/result orders, including an initial `host_binding.bound=false`.
The [MCP Apps input notification](https://apps.extensions.modelcontextprotocol.io/api/interfaces/app.McpUiToolInputNotification.html)
allows `arguments` to be omitted. Such notifications preserve an already
selected identity or keep waiting for one, rather than tearing down the card.
Explicit malformed or conflicting selectors still fail closed.

## Local and Host evidence

Rust contract, MCP routing/admission and continuation regression tests validate
the local boundary. JavaScript tests validate the card state machines, including
duplicate and uncertain dispatch. They cannot prove ChatGPT scheduling.
`ui/message` acceptance is only dispatch evidence. Agent resumption requires a
fresh model turn and exact Wake consume. The existing Job protocol has no
consume operation: require its exact wait/Job delivery evidence and a fresh turn
that actually observes that Job instead. Neither a delivery ACK nor a displayed
message proves model execution.

Use an explicitly selected disposable test connection on the approved server.
Build the reviewed commit using the `dogfood` profile, record the existing
`git_commit`, `git_dirty` and `built_at` identity, and preserve the previous
binary/configuration before any approved replacement. Isolate state, credentials,
ports and Runner Projects from ordinary service data. Never expose a shared-key
test server without normal authentication. Refresh ChatGPT tool registration
and confirm both dedicated presentation descriptors and their App resources.
Do not route their presentation through `call_runtime_tool`.

Keep `WEBCODEX_MCP_APP_RESUME_MODE=unknown` for an unverified deployment.
Do not set `unattended` merely to make a readiness flag true. The existing App
acquire/prepare/dispatch path can be measured while policy is `unknown`; that
mode keeps the readiness declaration false without blocking this explicit
experiment. Run the complete matrix in that mode first. Only after measured
zero-click fresh-turn behavior may the test deployment declare `unattended` and
verify its readiness projection. Restore its previous policy when the experiment
ends. Historical Host observations are in the
[continuation experiments](../agent/mcp-app-continuation-experiments.md).

## Real ChatGPT matrix

Run each case in a new test conversation with fresh identities. For Agent,
create one identity, rotate one Endpoint and present its exact ref/tuple. Arrange
a delayed Conversation message from an independently authorized sender to that
Agent. For Job, start one harmless delayed Job in a disposable Project, create
its exact durable terminal wait and present that still-waiting wait. Handle a
Job that already terminated in the current turn instead of presenting it.

After the presentation tool result, output a normal assistant final response
and ensure the original turn has finished. Do not click, send another user
message or use a current-turn wait to manufacture the later turn. Leave the
conversation visible for foreground cases; switch away for background cases.

| Card | Delay | Visibility | Required observation |
| --- | --- | --- | --- |
| Agent | about 30 seconds | foreground | zero-click fresh turn, exact Wake consume |
| Agent | about 5 minutes | foreground | zero-click fresh turn, exact Wake consume |
| Agent | about 5 minutes | background | zero-click fresh turn, exact Wake consume |
| Job | about 30 seconds | foreground | zero-click fresh turn, exact wait delivery and Job observation |
| Job | about 5 minutes | foreground | zero-click fresh turn, exact wait delivery and Job observation |
| Job | about 5 minutes | background | zero-click fresh turn, exact wait delivery and Job observation |

For each case record UTC timestamps for original final response, trigger,
prepare, Host dispatch outcome, fresh-turn first tool call and exact Agent
consume or Job observation.
Record the source build, protocol, visibility, policy, correlation IDs and
whether any user action occurred. Verify the Agent turn calls
`consume_agent_wake` with the matching identity. For Job, correlate the exact
wait's one-shot delivery with the resumed turn's `observe_jobs` call for that
Job; do not invent a Job consume API or infer execution from `delivered` alone.
Observe a further polling interval and verify there is no second turn or
duplicated consume/delivery effect for the same logical event.

Retain only bounded, redacted evidence. Omit credentials, binding/claim fences,
consume tokens, raw automatic envelopes and private Conversation content.
`delivery_unknown` must never cause an automatic resend; use the established
explicit recovery path. Stale generations and foreign-owner calls must remain
rejected by their ordinary authority checks.

## Readiness and cleanup

For changes to continuation behavior or Host integration, the matrix is a manual
dogfood/publication gate. Record actual results against the exact candidate build
and deployment; report failures as Host observations without guessing their cause.
Do not declare such a candidate ready while any required case is missing or failed.
Automatic tests do not waive this gate. Test-only and documentation-only changes
use focused local validation and must not claim a new real-Host acceptance result.
Stop the disposable processes and restore the previous test configuration when
done; leave normal service and release state untouched.

## Goal hidden cadence baseline and candidate comparison

This is the user-assisted measurement gate for
[Issue #1159](https://github.com/yyjeqhc/webcodex/issues/1159), with historical
Host limitations tracked in [#1051](https://github.com/yyjeqhc/webcodex/issues/1051).
Use the same actual Host/browser, account, disposable connection, visibility
pattern and readiness policy for both builds. Record their exact commit and
build identities. Baseline Goal Plan uses a 60s hidden target; candidate uses
30s (resource `ui://webcodex/goal-plan/v10`, App 9.0.0) and Agent resource
`ui://webcodex/agent-continuation/v22` (App 22.0.0). The 300s inactivity threshold,
75s observation lease, 10s RPC timeout and Agent 15s hidden heartbeat are unchanged.
Changing binaries or restarting a deployment needs separate authorization; this
procedure grants none. Keep policy `unknown` until real unattended behavior is
established. Candidate timing records are diagnostic evidence, never authority.

Run three independent 300s inactivity trials on **each** build (six trials total),
with fresh Goal/Session/Wake identities per trial. Alternate baseline/candidate
where practical to reduce Host-time confounding. A trial starts at the Server's
last completed meaningful activity, then lasts at least 300s plus the observed
dispatch/fresh-turn interval. A missing fresh turn is a measured missing result;
record the observation end time rather than substituting a guessed latency.

1. On the authorized disposable connection, explicitly correlate one active Goal,
   its Session and its bound controller Agent. Present both exact cards and end
   the setup turn normally. Verify the loaded resource/build identities; stale
   cached cards cannot establish candidate behavior.
2. Enable each card's local timing ring and existing metadata tracing on the
   authorized test service. Capture the final meaningful completion timestamp.
   Hide the chat/browser in the same way on every trial. Record hide/show times,
   browser/window minimization, device sleep and any user interaction; do not
   interact during the inactivity interval or inject another message to create
   the follow-up turn.
3. After at least 300s, let the existing pipeline run. Record actual Goal poll
   gaps, RPC durations, observation age and remaining lease margin at attention
   reconciliation. Record the first eligible attention candidate, Event/Wake,
   prepare, Host dispatch, exact consume, and first meaningful work timestamps.
   Candidate Agent timing shows local `ui/message` start/completion/error and
   duration; baseline dispatch timing may require the existing server trace and
   manual Host observation. Mark unavailable fields as unavailable.
4. A human observes and records whether the Host displays a Send/confirmation
   modal, visible automatic message, or fresh model turn. Preserve a redacted
   screenshot or screen-recording reference and UTC timestamp. Do not infer
   absence of a modal or execution from API ACKs or server logs. If confirmation
   is needed, record it before deliberately confirming; the result is user
   confirmed, and its latency is separate from unattended latency.
5. Correlate exactly one logical Wake/Attempt and exact `consume_agent_wake`,
   then observe at least one further Goal and Agent polling interval for a
   duplicate. Check fresh-turn recovery of the exact Goal/Session and current
   work. Unknown delivery must never trigger a blind resend. A detached or
   expired observation cannot create attention until eligible observation is
   restored. Exercise visible/hidden transitions, teardown/remount and a
   separately authorized restart as additional labeled lifecycle trials;
   they do not replace the six comparison trials or the Agent/Job matrix above.
6. Save bounded redacted evidence, disable timing to clear the local rings,
   restore authorized test configuration and stop disposable processes. Rings
   retain only 64 events, so capture relevant records before they roll out.
   Never save tokens, raw automatic envelopes, credentials or private messages.

Report the three trial distributions and range for each build, with sample count
and missing outcomes. Separate inactivity-threshold → attention, attention →
prepare, prepare → Host ACK/error, and Host outcome → exact consume/first
meaningful work. Compare timer gaps and lease misses as well as end-to-end
latency; three trials do not establish broad Host reliability. A faster callback
with the same modal behavior is a narrower result than unattended continuation.
Do not claim improvement, zero-click readiness or gate completion from local
fake-clock tests. The required real-Host matrix remains a publication gate.

Copy this report template into the task's evidence when actual trials are run:

```text
Status: NOT RUN / PARTIAL / COMPLETE (no measured result is implied by this template)
Host/browser/version, device, UTC date:
Disposable connection/environment and authorization reference:
Readiness policy; metadata tracing mode:
Baseline commit/build identity; Goal/Agent resource identities:
Candidate commit/build identity; Goal/Agent resource identities:
Visibility pattern; terminal observation limit; confounding user/device actions:

Build | Trial | Quiet start UTC | Hide/show UTC | Observation end UTC
baseline | 1 | | |
baseline | 2 | | |
baseline | 3 | | |
candidate | 1 | | |
candidate | 2 | | |
candidate | 3 | | |

For EACH row record (unknown/unavailable fields must stay explicit):
- Poll target/actual/max gap; RPC duration; observation age/min lease margin
- Threshold, eligible candidate, attention/Wake, prepare timestamps
- Host dispatch start/end, elapsed, accepted/unknown/error; local/Server clock source
- Modal shown? Human-observed UTC/evidence reference; confirmation click if any
- Fresh-turn first tool; exact consume; first meaningful work timestamps
- Correlated exact Goal/Session and redacted Event/Wake/Attempt references
- Logical Wake/dispatch/consume counts; duplicate check interval and outcome
- Outcome: unattended / user-confirmed / unknown / missing / failed
- Redacted evidence references; unavailable data and reason

Per-build count, latency distributions/ranges, lease misses, modal/duplicate counts:
Lifecycle trials and original Agent/Job matrix results:
Acceptance condition → actual evidence or remaining step:
Measured conclusion and limits (never infer real Host behavior from fake clocks):
Remaining required trials/gates; cleanup performed:
```
