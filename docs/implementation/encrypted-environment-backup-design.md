# Encrypted Environment backup and constrained restore design

Status: **security review required; design only**. Baseline:
`4e787dc4e4776d4ee629ea728fcd122102929a75`, reviewed 2026-10-06.
This document authorizes no implementation, installation, native service action,
release or deployment. Backup/restore code must wait for explicit user security
review of this document. The prerequisites below require independent reviews;
a specification is not evidence that those adapters or proofs already exist.

## Review revision, 2026-10-06

The user requested a design adjustment and deferred P7/P8. This draft is not
accepted implementation scope. P9's backup/restore adaptation also waits for
its dependent Core contracts. Independent installation and nonsecret export
work may continue.

The prerequisite table below is an admission gate, not an implementation
checklist that automatically grants new permissions. Review must separately
record the accepted capture file slots, their owning domain validators and the
platforms on which each can be admitted. Missing evidence leaves that slot or
platform unsupported; it must not trigger a fallback selector or elevated copy.

Before P7 starts, review must settle capture-only behavior, machine/account
binding, exact service pause ownership and permission adapters. Before P8 starts,
review must additionally settle the independent write/authority witness and
read-only historical validators. Approval of the age container alone does not
approve a restore capable of replacing current databases or credentials.

The first restore implementation must advertise historical/unprovable captures
as authenticated quarantine only. The conditional current-capture replacement
path in section 7 is a future capability until its complete witness and write
barriers are independently reviewed and tested. No idle-task observation,
matching digest, timestamp, password possession or archive authenticity supplies
that missing proof. This distinction must remain visible in CLI/GUI plans and
terminal outcomes, including interrupted operations.

## 1. Deliverable and trust boundary

Provide an explicit, local-owner operation that captures known private
Environment configuration, credentials, project registration and defined
persistent data into a passphrase-encrypted file. Restore is limited to the
**same machine, OS account, Environment identity, service scope and canonical
paths**. Possessing the archive or passphrase confers no runtime, installer,
service-manager or remote Server authority.

There are two restore outcomes. An independently verified current capture with
no intervening business or authority writes may restore exactly confirmed owned
files, then return only previously running services to their previous state.
A historical or unprovable capture is authenticated and staged privately; its
database and credentials must never replace current authority. The exact
confirmed component range remains offline with `manual_needed`. Neither outcome
clones identity, pairs again, rotates credentials, replays Jobs/Wakes/Tasks,
rewrites revocation state, migrates scope, adopts services or installs programs.

The existing [configuration inventory manifest](configuration-inventory-backup-manifest.md)
remains `manifest_only`, contains no files and cannot restore. Its secret-free
projection is not the encrypted archive's private manifest. Keep its commands,
schema, exports and privacy notice distinct; do not give it a secret-backup flag.

## 2. Existing implementation evidence and missing prerequisites

These links pin facts to the reviewed baseline, rather than treating current
implementation as a permanent design requirement.

| Evidence | Consequence for this design |
| --- | --- |
| [Store open, existing read and setup lock](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/storage.rs#L37) | `open` may create/secure paths; `lock` may create `setup.lock`. Read-only preflight cannot use them blindly. Mutating operations share the existing lock and recheck after acquisition. |
| [Private file validation and creation](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/storage.rs#L217) | Reuse private ownership, no-follow and create-new principles; strengthen directory/handle races for archive operations. Unix rejects hard links; Windows checks owner/ACL and reparse points. |
| [Upgrade preparation and capture](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/upgrade.rs#L1402) | Upgrade prepares program backups and an installer receipt. It is not a backup API. Never call `upgrade_prepare` with a fabricated candidate. |
| [Upgrade stop/consistent snapshot sequence](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/upgrade.rs#L1570) and [bounded tree copy](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/upgrade.rs#L2054) | Idle admission, exact owned services, stopped verification and source/snapshot digests are useful semantics. The recursive whole-data-directory copy admits unknown files and cannot be the archive selector. |
| [Maintenance transport](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/upgrade_transport.rs#L9) and [Server maintenance persistence](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/src/upgrade_maintenance_store.rs#L1) | The token/nonce belongs to the original operation; expiry does not reopen admission. Existing upgrade snapshots contain the Server lease file. Encrypted backups must exclude it. |
| [Saved scope reconciliation](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/native.rs#L2000) and [migration journal](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/migration.rs#L94) | Preserve actual account and user/system namespace. Pending migration, conflicting scope or unknown ownership blocks backup and restore. |
| [Narrow privilege requests](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/privilege.rs#L1) and [installer authorization](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/installer_authorization.rs#L120) | Existing privileged program restore and installer authorization do not authorize secret capture or data restore. No borrowing a receipt, installer channel, arbitrary helper command or privileged file path. |
| [Database/session paths](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/src/config.rs#L577), [Job receipts and authorization tables](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-store/src/schema.rs#L86), [OAuth revocations](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-store/src/schema.rs#L241) | DB history combines effects and authority. Byte integrity alone cannot prove that restored grants remain valid or that a historical operation is safe to replay. |
| [Durable Server takeover contract](../architecture/durable-agent-conversation.md) | Generic DB open can migrate and perform housekeeping; startup ownership can reconcile Wakes. Validation must not start a Server or use production `Database::open` on the staged DB. |
| [Generated Runner configuration](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/native.rs#L1106) and [Tunnel configuration](https://github.com/yyjeqhc/webcodex/blob/4e787dc4e4776d4ee629ea728fcd122102929a75/crates/webcodex-environment/src/tunnel.rs#L54) | Config contains tokens; Runner registry and Tunnel profile paths come from authoritative records/parsers, not arbitrary archive paths. |

Required prerequisites, with explicit fail-closed behavior:

| Gap at baseline | Independently reviewed prerequisite | Until available |
| --- | --- | --- |
| No backup-specific operation/pause journal or mutual exclusion with all lifecycle actions | Core operation discriminator, durable intent and admission checks covering configure, project edits, Tunnel edits, migration, upgrade and backup/restore | Do not ship mutating backup/restore. |
| Maintenance is upgrade-named and operation ownership is not a portable backup grant | Extract/reuse the existing maintenance mechanism with an exact purpose/operation fence; preserve pending-begin response-loss recovery and original-owner release | Do not disguise backup as upgrade; unsupported Server or uncertain fence blocks capture. |
| No stable same-machine restore binding found in Environment record | Private local machine/environment anchor backed by validated OS machine identity; platform-specific, no hostname/IP/hardware-name fallback | Create requires the reviewed anchor; missing/mismatched anchor permits inspection only. |
| No monotonic proof covering every effect/authority write since capture | Core/Server/Runner capture witness and restore write barrier described in section 7, surviving restart and protected against restoration | Historical/unprovable restore stages only; never claim safe completion from idle state or matching file timestamps. |
| Privilege adapter admits service/program operations, not backup data capture | Dedicated capture/restore capability and bounded handle-based request/response, exact source/destination file slots, requester and operation fence | System-owned files requiring that capability remain unsupported. No implicit elevation or ACL repair. |
| Private helpers do not constitute complete directory-handle race protection on every OS | Native path/handle adapter, Windows ACL/reparse/file-ID and Unix directory-relative no-follow tests; filesystem durability matrix | Reject unsupported filesystem/platform combinations. |
| No reviewed domain validator for historical DB/session/registry captures | Read-only validation that never migrates, performs housekeeping, issues credentials or runs takeover/replay | Stage remains quarantined and `manual_needed`; no production open/start. |

Follow the current [permission model](../agent/permission-model.md): scopes,
read-only constraints, hard path rules and exact target ownership remain effective
under `trusted_agent`. Backup is a local operator feature, not a new model tool,
remote HTTP export route or audit-derived grant. A future exposure needs its own
scope/audience review. Desktop and CLI call one Core authority path.

## 3. Format, crypto and resource contract

The proposed v1 file is **binary age v1 containing one uncompressed tar stream**,
using the Rust `age` crate pinned to `=0.12.1` and locked dependencies. It has one
standard scrypt recipient. Use `scrypt::Recipient::new`, then
`set_work_factor(18)` before `Encryptor::with_recipients`; do not rely on the
device-calibrated default. Decryption sets `scrypt::Identity::set_max_work_factor(18)`
before use. The bounded format gate additionally requires exactly log-N 18;
lower factors are not this product's v1 profile and higher factors are rejected
before KDF work. These methods are documented by the
[Recipient API](https://docs.rs/age/0.12.1/age/scrypt/struct.Recipient.html) and
[Identity API](https://docs.rs/age/0.12.1/age/scrypt/struct.Identity.html).

The [age specification](https://c2sp.org/age#the-scrypt-recipient-type) defines
scrypt with N = 2^18, r = 8 and p = 1 for this selected work factor, a fresh
16-byte salt, and requires a scrypt stanza to be the only stanza. Reject armor,
multiple/mixed recipients, plugins, other age versions and noncanonical stanza
encodings. Do not implement alternative crypto or shell out to `age`/`rage`.
The library owns randomness, key wrapping, header authentication and payload
encryption. Use a bounded syntactic profile check followed by the library's
cryptographic validation; never treat a syntactic header check as authentication.

Age payload authentication is streamed. Its
[final-chunk requirement](https://c2sp.org/age#payload) means early decrypted
bytes are not a fully verified archive. Consume and authenticate the complete
stream, including final chunk and exact EOF, before interpreting file content or
using anything in a live target. Reject truncation, appended ciphertext and
trailing plaintext beyond the permitted tar terminator. An attacker knowing the
passphrase can construct another valid archive; encryption is not an owner
signature, so binding and target fences remain mandatory.

| Bound | v1 rule |
| --- | --- |
| Passphrase | At least 16 Unicode scalar values and at most 1,024 UTF-8 bytes; exact bytes, no trim, Unicode normalization or generated default. Reject invalid UTF-8/NUL. Create asks for exact confirmation. A weak 16-character phrase remains weak; UI suggests an independently generated long phrase without claiming minimum length guarantees entropy. |
| Snapshot | At most 16 GiB of aggregate regular-file payload and at most 100,000 tar entries including directories/manifest; bounded while reading, copying and decrypting, not just from advertised sizes. |
| Private manifest | At most 16 MiB aggregate metadata, including file list and bindings; schema rejects unknown fields and unsupported versions. Existing per-file/domain configuration limits remain; 16 MiB is not permission to widen them. |
| Header | At most 4 KiB, one bounded scrypt stanza; reject before costly KDF allocation. |
| Names and nesting | At most 4,096 UTF-8 bytes per archive name and depth 64; bounded canonical identifiers, no control characters; path components cannot be empty, dot or parent. |
| Output/input | Maximum tar bytes = 16 GiB + 16 MiB + 2,048 bytes per admitted entry + 1,024-byte terminator. Age ciphertext maximum additionally reserves 16 bytes per 64 KiB chunk plus 4 KiB header and 16-byte nonce. Enforce checked arithmetic and streaming count limits. |
| Temporary disk | Preflight calculates worst-case private snapshot, decrypted quarantine, staged files and rollback copies on each filesystem; insufficient reserve fails before pause. Runtime ENOSPC still enters explicit recovery. |
| Concurrency | One mutating operation per Environment; one KDF per operation, one bounded worker, streaming buffers. No unbounded task-per-file queue or repeated automatic passphrase attempts. |
| Public JSON | Versioned allowlist, at most 64 KiB, 64 component/action/issue rows, 512-byte messages; overflow is a typed refusal, never a partial ready plan. |

No passphrase argument, environment variable, configuration, history, clipboard
handoff, telemetry, persisted journal, crash report or log. CLI reads from a
hidden controlling-terminal prompt; headless automation may opt into a dedicated
inherited anonymous pipe descriptor with a bounded length-prefixed message, never
an on-disk passphrase file or ordinary stdin that may also carry JSON. It reads
once and closes the descriptor. Credentials and plaintext are never stdout.
Secrets use nonserializable, redacted, zeroizing owners; borrowed exposure is
short-lived. Zeroize passphrase, confirmation, keys and buffers on error/cancel/
completion. Memory zeroization does not promise protection from OS swap, forced
process termination, same-account debugging or a compromised host.

## 4. Explicit archive membership

The selector is a typed category-to-file resolver. Archive names are logical
slots, never source absolute paths. The encrypted manifest privately records
the original canonical destinations, roles, owner and schema; these are checked
against current authority before any restore. No walk of the Environment root,
Server data tree, Desktop app-data or project source tree is permitted. An
unknown file in a source directory is ignored, not promoted to a category.

| Category / logical slot | Fixed authoritative source | Capture/restore policy |
| --- | --- | --- |
| `environment/record.json` | Committed `environment.json` only | Exact private record; no pending setup state. Identity, scopes, paths and service definitions cannot be rewritten by import. |
| `environment/user-token` | `webcodex-user-token` belonging to that record | Private credential; never issue/register a replacement or infer validity from successful decryption. |
| `server/config.env` | Saved local Server specification's confirmed configuration, normally `server/webcodex.env` | Local Server role only; raw mixed configuration stays encrypted. Parse known path/authority fields; unknown path-bearing fields make safe restore unsupported. |
| `runner/config.toml` and admitted token-file slot | Managed `runner.toml` with confirmed client ID, owner, Server URL and registry binding; any token-file reference must be an explicitly supported owned private path | Local Runner only; reject unknown external credential providers or unresolved references. No token scanning. |
| `runner/registry/<project-id>.toml` | Exact saved/validated local registry records corresponding to committed project IDs and paths | Bounded top-level registration records only, validated by current domain contract; no glob import, temporary files, unregister tombstones or dereferencing project paths. Omitted/unresolved registration makes capture incomplete and blocked. |
| `tunnel/records.json`, `tunnel/<profile-id>/config.env` | Committed `tunnel.json` and each validated saved local Tunnel profile's exact configuration | Local Server profiles only, existing profile bound to original environment and service definition; no remote Server/Tunnel secrets for a joined Runner. Embedded process ownership must be confirmed or blocked. |
| `server/data/webcodex.db`, `server/data/webcodex.db-wal` | Confirmed absolute `WEBCODEX_DATA` and the fixed database path | Cold, fully stopped consistent set. WAL included only if present, regular and validated with DB. Do not independently copy a live DB/WAL or checkpoint/migrate production data. |
| `server/data/sessions.json` | Current Server `session_ledger_path`, only when confirmed absolute and bound to that local Server | Defined persistent Workflow Session history. Historical data stays inert; no replay, activation or automatic Session resolution. |

`webcodex.db-shm` is transient shared-memory indexing and is excluded. The
read-only validator must prove the captured DB/WAL can be examined safely with
that exclusion; an uncheckpointed or incompatible set it cannot validate blocks
capture. Sidecars are resolved by these fixed names, not wildcard enumeration.
An existing `webcodex.db-journal` blocks capture until the original database
owner resolves it; never discard a possibly hot rollback journal. SQLite warns
that a copy taken during a transaction may mix old/new state, and that hot
journals/WAL must remain paired with their DB in its
[backup/corruption guidance](https://www.sqlite.org/howtocorrupt.html#_backup_or_restore_while_a_transaction_is_active).
The safe live replacement path additionally requires no remaining target
`-shm` or `-journal` under the stopped-owner proof. If either persists, this v1
operation blocks rather than deleting or rebuilding it implicitly. Validation
may use disposable derived copies in quarantine, never mutate the captured set.
For unconfigured roles, slots are explicitly inapplicable. Required files missing
or unreadable are errors, not successful partial backup; any future partial mode
needs a separate version and recovery contract.

Always exclude unknown files, project source/data contents, logs/traces,
readiness observations, caches, executable programs, downloaded releases,
Desktop preferences/profile/cache stores, support reports, OS unit/plist/task
definitions and ACL dumps. The archive records safe service binding data needed
to compare current installed definitions, not material that can reinstall them.
Desktop-owned legacy configurations are unsupported until an explicit migration
establishes Environment authority.

Also exclude `setup.lock`, `setup.json`, `migration.json`, `upgrade.json`,
`upgrade-prepared.json`, installer authorization/receipts, `upgrade-backups/`,
`upgrade-maintenance.secret` in both Core and Server storage, enrollment/pairing
recovery, add/remove-project pending records, privilege request/response files,
backup/restore journals, staging, rollback copies and local machine anchors.
Existence of an unresolved transaction or maintenance recovery file blocks a new
operation; do not merely omit it and pretend the remaining state is consistent.
Terminal legacy journals require authoritative terminal-state and lease-release
checks. A malformed journal or unknown phase blocks; do not delete it to proceed.

## 5. Binding, paths and privileges

Create stores a private binding consisting of: platform and machine-anchor
fingerprint; exact UID/SID; Environment ID; local roles; saved user/system service
scope; principal/client IDs and exact current credential scopes/audiences;
Server authority identity and canonical URL; canonical Environment/config/data/
registry paths; project IDs and canonical path references; exact installed
service-spec fingerprints; component build and data-format compatibility; and
the capture revision/witness. Paths remain encrypted private metadata. A URL or
hostname alone is not a Server or machine identity. Hashes of secrets stay
private and never enter JSON or logs.

The local anchor is not archived, imported, replaced or regenerated by restore.
It survives normal program upgrades. It is bound to OS machine identity through
a reviewed platform adapter; copying an Environment directory or reinstalling
the OS does not satisfy the machine check. When the anchor is lost, inspection
and manual recovery are available; restore cannot create a new anchor to admit
the old capture. This is a conservative accidental-cloning fence, not protection
against an attacker already controlling the original account or machine.

Plans include an opaque revision derived from exact authority and path/file
identity observations, plus archive SHA-256, requested operation, service range,
destination slots and preconditions. Bind operation IDs to the local private
journal and requesting account. Under the shared lock, every mutating phase
rechecks all these facts and the complete archive hash from a no-follow pinned
handle. Any change produces `stale_plan`; it cannot retarget to a replacement
directory, service, archive or Environment. Digest equality is not authorization.

Reject symlinks, hardlinks, junctions/reparse points, alternate data streams,
device/FIFO/socket entries, sparse files, absolute/drive/UNC paths, `..`, case or
Unicode alias collisions, duplicate names, nested archive payloads and special
tar extension records. Use a narrow ustar profile with regular files/directories
and fixed UID/GID/mtime/modes; do not honor archive owner, executable bits, ACLs,
xattrs or overwrite directives. Logical names must fit that profile; otherwise
capture fails. Cross-check every member exactly once against the manifest's
category, declared size and SHA-256. Manifest path strings are comparison data,
not inputs to extraction.

Never invoke `tar` or use a generic `unpack` into managed storage. Before
authentication completes, stream plaintext to a private opaque quarantine file;
do not interpret its manifest or create member paths. After complete age
authentication, a bounded tar parser creates admitted files only in an empty
private staging directory using trusted slot mappings, create-new no-follow
directory-relative handles and restrictive permissions. Pin and recheck ancestor
directory identities and filesystem boundaries; reject network/shared filesystems
unless their lock, handle and durability behavior has independently passed.

Unix directories/files use 0700/0600 and exact owner; Windows installs and
validates a protected owner ACL before secret bytes are written, consistent with
the existing trusted SYSTEM/Administrators boundary. User scope cannot fall back
to sudo/UAC/system services. System scope does not change file owner to the
invoking elevated account. An archive destination is create-new, outside every
managed/staging/data/project root, in a private validated owner directory. No
overwrite, implicit ACL repair or file upload; archive loss cannot be fixed by
printing credentials.

The proposed privileged adapter accepts only typed operations and preverified
slot handles for the exact operation, account, Environment, revision, source
hashes, destination identities and previously confirmed service scope. It cannot
take arbitrary script, argv, executable, source root or destination path from
Desktop input. It returns bounded typed evidence, never file bytes or secrets.
Elevation requires an explicit OS interaction for that operation; existing
installer authorization does not substitute. Until this adapter is reviewed,
preflight reports `permission_adapter_required` for inaccessible system material.

## 6. Capture state machine

Read-only `preflight` projects missing prerequisites without creating the root,
lock, anchor or output. `create` is an explicit pause request for the displayed
confirmed service range. A UI checkbox or CLI option names that range and binds
the revision; observing services is not permission to pause an unrelated stack.

```text
preflight -> planned -> fencing -> stopping -> stopped -> capturing
  -> snapshot_verified -> encrypting -> archive_committed -> resuming -> complete
                         any uncertain effect -> recovery_required
```

1. Acquire the existing Environment lock; recheck revision, complete membership,
   ownership, permissions, space and all pending transactions. Persist private
   operation intent and prior running/stopped states before effects.
2. Confirm idle through authoritative admission state, not a UI task count.
   Acquire maintenance for the entire local Server or only this joined Runner,
   using the current credential and exact owner. Another owner, active work,
   missing capability or unknown outcome blocks. A joined Runner never fences
   the central Server or other Runners.
3. Stop only admitted, exactly owned, previously running Tunnel/Runner/Server
   components in dependency order. Verify all capture writers stopped, including
   socket activation and embedded children. Unknown ownership/stopped state or
   an unowned process able to write the slots blocks. Preserve already stopped
   components. No process-name killing or adoption.
4. Capture fixed slots to the private snapshot, flush and validate all domains,
   compare source and snapshot digest sets while the barrier holds, and record
   the authoritative capture witness. A WAL/session inconsistency is a failure.
   Lease tokens, pending authority and this operation's journals stay separate.
5. Encrypt the deterministic uncompressed tar to a create-new private partial
   destination. Finish the age writer and flush data; publish without overwrite
   using a reviewed same-filesystem atomic no-replace operation; sync the parent.
   Persist ciphertext hash and final decision. A pre-existing final filename is
   a conflict, never a retry target chosen by its name alone.
6. Return only previously running components to the prior state using the same
   service bindings. Start Server/Runner behind the retained maintenance fence,
   verify ownership/readiness, then release that exact lease. Mark complete only
   after release is confirmed. Snapshot cleanup is bounded to operation-owned
   private files; cleanup failure is explicit. An archive can be valid while
   service recovery remains `recovery_required`.

Lease recovery and pause outcome remain private, durable operation state.
The ordinary Core operation header stays within the existing 1 MiB state-file
limit. A separate, operation-owned, hash-bound per-slot action ledger has an
aggregate 16 MiB cap and a dedicated bounded private reader; it cannot bypass
`EnvironmentStore` limits by changing the generic state reader. Journal states
use closed enums, reject unknown fields, and store no passphrase or file content.
Cancellation is a recorded request, not a claim that side effects stopped.
Before fencing it discards only its own partials; afterwards it reconciles exact
effects and restores prior states where proven, or leaves the owned range fenced
and reports `recovery_required`. A process crash must not auto-start services.

## 7. Restore eligibility and state machine

`restore plan` decrypts/authenticates/validates into private quarantine and
returns a bounded plan with `safe_current_capture` or `historical_or_unproven`.
Planning does not pause services or install files. It never trusts the archive's
assertion of its own eligibility. Applying requires the displayed exact service
range, operation ID, revision and archive hash, and rechecks them under lock.

The safe path needs a **current, locally authoritative capture witness**, stored
outside restored files and never obtained from archive content. It binds the
capture digest set, stable machine/account/Environment anchor, current grant
identities/scopes/audiences/revocation generation, project registration, session/
DB generation, and execution/effect generation. Every admission path capable of
changing those facts must invalidate or advance it; that includes CLI/GUI edits,
remote Server changes, Runner effects and offline writers. A restore barrier
must atomically freeze those generations and verify no business or authority
writes occurred since capture. Idle now, stopped services, unchanged file size,
an empty queue or matching DB digest alone are insufficient. Unknown external
effects and credentials whose current revocation status cannot be established
make the proof absent. The reviewed baseline does not provide this proof.

```text
plan -> authenticated -> validated -> ready
apply -> rechecked -> fenced -> stopped -> staged_verified
  safe proof: -> rollback_point -> replacing -> verifying
             -> committed_closed -> resuming -> complete
  no proof:  -> manual_needed (exact confirmed range remains offline)
any uncertain replacement/ownership/lease effect -> recovery_required
```

For the safe path, take a fresh consistent private pre-restore rollback point
before changing any slot. Restore exact admitted files only; no program, service
definition, scope, anchor, unknown file or pending transaction changes. Missing
targets may be recreated only when the retained authoritative witness and pinned
parent establish the exact destination and prior absence. No witness means no
reconstruction of Environment identity from the archive. Compatibility is checked
without executing archived programs or performing a DB migration.

Before replacement, record per-slot expected old/new hashes and absence state.
Each replace is atomic within the pinned filesystem and journaled with fsync;
multi-file restore is not falsely described as one atomic rename. Readers/writers
remain stopped throughout. Resume reconciles a slot only if its exact old/new
state is proven; a third state blocks. Verify the full resulting set and domains
with no production startup. Persist `committed_closed` before starting behind
the gate. Preserve the original credential identity and exact scopes; validation
does not register, re-pair, refresh, rotate or revive a revoked token.

For historical/unproven data, `apply` may only produce the verified private stage
and hold the **explicitly confirmed** owned component range offline. It must
never replace current DB, session history, registry or credential/configuration
authority, nor start a Server on the staged DB to see whether it works. Report
`manual_needed`, staged categories and reason codes; never `restored` or
`complete`. A stage-only inspection without an explicit pause leaves services
untouched. If the intended pause range cannot be verified, do not claim it was
held; report `recovery_required` with confirmed/unknown components separately.

Manual recovery needs a separate reviewed operator procedure for reconciling
current revocations and ambiguous effect receipts while preserving identity.
There is no `--force`, replay, clone, re-pair, rotate or auto-merge escape hatch.
A user selecting an old archive is not authorization to reinterpret historical
effects as unexecuted or old credentials as currently valid.

`rollback` restores this operation's verified pre-restore files only before any
business/authority write is admitted after replacement. It compares each slot,
service owner, barrier and operation fence; uncertainty or a third-party write
blocks. Once the gate opens, persist `business_writes_possible`; old DB/credential
rollback is forbidden even if nobody is known to have written. A response lost
while opening the gate is uncertain, not proof that rollback is safe. For an
inert manual stage, rollback can discard owned stage and release the unchanged
original stack's hold only after proving no live replacements or external manual
changes; it never installs the historical stage. Otherwise keep it offline and
require manual reconciliation.

## 8. CLI, Desktop and bounded evidence

Proposed local commands (not implemented by this PR):

```text
webcodex environment backup preflight [--environment-dir ABS] --json
webcodex environment backup create [--operation-id ID] --revision REV --pause-components RANGE --output ABS --json
webcodex environment backup inspect --archive ABS --json
webcodex environment backup status --operation-id ID --json
webcodex environment restore plan --archive ABS [--environment-dir ABS] --json
webcodex environment restore apply --operation-id ID --revision REV --archive-sha256 HASH --pause-components RANGE --json
webcodex environment restore resume --operation-id ID --revision REV --archive-sha256 HASH --json
webcodex environment restore rollback --operation-id ID --revision REV --json
```

Core resolves each ID to the private operation; caller arguments cannot add a
destination or service. Create implicitly persists an operation ID before effects;
status exposes it without recovery effects. Retrying `create` with that ID resumes
the exact saved capture only if revision, range and output match its journal;
omitting the ID cannot start a second operation while one is pending. It reconciles
committed output before attempting any new encryption. `inspect` requires
passphrase and validates the whole file but exposes only
category counts, format/build compatibility and binding-match classifications;
it does not render raw manifest paths, principals, config, hashes of secrets,
DB rows or credentials. A wrong passphrase, corrupt file or failed authentication
has one bounded `archive_authentication_failed` result without secret detail.

JSON is a versioned secret-free allowlist: operation ID, phase, opaque revision,
ciphertext hash, finite eligibility/error codes, bounded category counts,
confirmed component state and one exact next action. Private local paths appear
only in an explicit local review panel if needed; never ordinary JSON, Activity,
telemetry or support bundles. Full manifest and journals cannot be exported via
this interface. Exit codes distinguish complete, blocked, manual-needed and
recovery-required; cancel/timeout never returns success because a child vanished.

Desktop is a thin self-owned adapter around these Core operations. It uses the
existing Environment selection and native private save/open dialogs; it cannot
take arbitrary frontend paths, scripts or service definitions. Passphrase entry
is local and submitted once to native Core through an explicit secret IPC method,
never model tools. Clear the input immediately after submission, on cancel and
window close; exclude it from reactive stores, persistence, DevTools events,
analytics and IPC tracing. JavaScript strings cannot promise deterministic
zeroization: native ownership is zeroizing, while frontend retention is minimized
and this limitation must remain documented and tested.

Cancel requests target the exact operation. Closing a window neither implicitly
commits nor blindly kills a Core worker; the native owner retains durable state
and reconciles or leaves recovery-required. Reopening observes status; it does
not repeat apply/start/lease release. Window replacement cannot select another
Environment for a pending operation. Passphrases are never retained for resume;
request fresh input if verified encrypted material must be read again.

## 9. Failure and crash matrix

| Boundary / adversarial event | Required durable result and next action |
| --- | --- |
| Preflight absent root, bad permission, unsupported adapter, pending transaction | Read-only refusal; no directories, service action, permission repair or new authority. |
| Plan-to-apply archive/path/account/scope/service change | Under-lock recheck fails `stale_plan`; create a new plan only after original operation is resolved. |
| Maintenance begin response lost | Keep original private nonce; reconcile that same request/Server epoch. No second lease or stop based on guessed success. |
| Stop response lost, process descendant unknown, activation still possible | Record unknown exact component; no capture/replacement/start. Recover original owner or remain fenced. |
| Source changes or limits exceeded during capture | No final archive; owned partial quarantined/removed, prior states recovered only with ownership proof. |
| Wrong phrase, malformed/high-work header, tampered/truncated/trailing archive | Reject before use; no target writes or service pause by inspect/plan. Clear secrets; no automatic retries. |
| ENOSPC/permission failure/kill during tar or encryption | Partial is not a backup; verify operation-owned files on resume; never overwrite an unrelated final file. |
| Rename completed but final decision/response lost | Pin expected final file and ciphertext hash, verify full archive, reconcile journal; do not create another output or assert durable success without parent-sync evidence. |
| Restore has historical effects or uncertain revocation | Validated private stage only; exact requested confirmed range held offline, `manual_needed`; current authority untouched. |
| Crash between per-slot replaces | Gate and prior owner remain; compare recorded old/new states, reconcile only exact transition or verified pre-write rollback. Unknown/mixed third state requires manual recovery. |
| Verification/start fails before gate release | Do not admit writes; safe pre-write rollback permitted only with complete fence proof; failed rollback remains recovery-required. |
| Gate release succeeds but response/decision is lost | Business writes may have occurred; no old-data rollback. Reconcile exact lease and current state, never blindly release/start again. |
| Journal corrupted/deleted, lease expired, anchor lost, reboot/account switch | No fresh operation or lease ownership inference; keep confirmed owned range closed and use manual recovery. Expiry alone never releases. |
| Cleanup failure or ciphertext export succeeded but restart failed | Report archive validity and recovery state separately; do not hide plaintext staging or claim the stack is healthy. |

Retention is explicit: completed backup removes its private plaintext snapshot;
failed cleanup records its presence without contents. Failed/held restore keeps
only operation-owned private recovery material and never uploads it. Deletion is
not claimed to securely erase SSD/filesystem copies. Status is observational and
must not repair journals, ACLs or services. Native reboot/power-loss acceptance
must test persisted gate and journal together; unit tests do not prove it.

## 10. Supported recovery and acceptance review

| Situation | Proposed supported outcome |
| --- | --- |
| Same current capture, complete write/authority witness, exact binding, reviewed adapters | Exact owned-file restore with fresh rollback point; prior running/stopped states preserved, gate released only after verification. |
| Historical DB, revoked/unknown credentials, external-effect ambiguity, or missing write witness | Authenticate/validate/private-stage; explicit component range held offline with manual-needed; no current authority replacement. |
| Joined Runner backup | Only its local config, credentials and committed registry; no central Server/Tunnel capture or central-wide pause. Historical remote revocation uncertainty blocks automatic restoration. |
| No pause requested, inspection only | Full authentication and bounded private validation, no live target/service mutation. |
| Lost machine anchor, changed UID/SID/Environment ID/scope/path, copied directory/new machine/OS reinstall | Inspection/manual recovery only; no clone, adoption or newly generated binding to bypass mismatch. |
| Pending setup/migration/upgrade/enrollment/project/maintenance recovery | Finish the exact original operation first; cannot back up or restore pending authority. |
| Unowned/manual service, unresolved legacy config, unsupported elevated data adapter/filesystem | Explicit unsupported/blocked result; no implicit migration, root read or installer permission reuse. |
| Lost passphrase or corrupted unauthenticated archive | No restore; no recovery key, plaintext fallback or credential issuance. |
| Restore after business writes became possible | No historical DB/credential rollback; current-state/manual reconciliation only. |

Required tests before implementation is considered deliverable:

- Interoperability vectors with pinned age 0.12.1 and an independent standard age
  implementation; exact log-N 18 emitted. Reject log-N 17/19, mixed/duplicate
  stanzas, armor, malformed salt, corrupt header/body/final chunk and trailing data
  before target effects; malformed/high-work input cannot trigger unbounded KDF.
- Boundary cases for 15/16 scalar values, 1,024/1,025 UTF-8 bytes, multibyte
  phrases, spaces and canonical-equivalent-but-different Unicode. Verify exact
  confirmation; instrument secret lifetime and redaction, not secret values.
- Canary config/token/DB/project/log/cache/pending-lease material in every source
  category. Prove only admitted private members exist; unknown adjacent files and
  all journals/maintenance tokens are absent. Scan public JSON, errors, Activity,
  traces, support bundles, argv and persisted UI state for canaries.
- Malicious tar absolute/parent/drive/UNC names, hard/symlinks, reparse points,
  ADS, devices, sparse/extension entries, duplicate/case-colliding names, oversized
  metadata, long/deep names, understated sizes, file growth and count/disk limits.
  No generic extraction and no writes outside operation-owned private handles.
- Deterministic race fixtures swapping archive/source/parent/destination/service
  identity between plan, lock, open, copy, replace and resume. Deny wrong account,
  scope, anchor, grant audience, revision and operation ID; no retargeting.
- Idle admission versus new work, unknown tasks, stopped services, socket
  activation, embedded children, joined Runner fence isolation, permission denial
  and unknown service control outcomes. Preserve already stopped services.
- Witness invalidation by each business/authority writer, remote revocation,
  unknown effect, offline change and Server restart. Historical DB/credential
  restore must never touch current files or execute Wakes/Jobs; read-only staged
  DB validation must neither migrate nor run production housekeeping.
- Fault injection at every journal/fsync/rename/lease response boundary; old/new/
  third-state reconciliation, gate-release response loss, rollback-before-write
  enforcement, cleanup failures, cancel and Desktop close/reopen. A second
  window cannot replace the pending operation or infer completion.
- Native Linux/macOS/Windows tests of owner/ACL/handle/reparse/elevation semantics,
  cold DB/WAL/session consistency, actual service pause/resume and crash/reboot
  recovery on supported filesystems. Separate mocks, compilation and real OS
  evidence; no claim of native acceptance or release from documentation checks.

Security review must explicitly approve the archive category set and limits,
passphrase/KDF/profile choice, private staging/retention, stable machine binding,
permission-adapter authority, complete capture witness/write-barrier coverage,
safe-current versus historical/manual behavior, restore/rollback commit boundary,
service pause range and secret-free Desktop/CLI evidence. Unresolved prerequisites
remain visible blockers, rather than optional hardening after shipment.

## 11. Validation of this design contribution

This contribution changes documentation only. Source references were checked
against the pinned baseline; crypto statements were checked against primary age
format and age 0.12.1 API documentation on 2026-10-06. Markdown relative links,
source line anchors and whitespace are checked locally. No backup/restore code,
new dependency, real secret capture, native service action, cross-platform runtime
test, installation, release or deployment is claimed here.
