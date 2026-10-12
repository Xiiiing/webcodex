# Natural-language tool discovery

`read_tool_manifest(query=...)` accepts a bounded task expression in English or
Chinese. It returns compact summaries of existing admitted tools. Selection does
not execute a tool, expand its input/output schemas, register Host callables, or
grant permission. `tool_name` remains the separate exact-contract path, with its
existing conflict rules and canonical input schema.

## Canonical metadata and ranking

Task vocabulary belongs to each existing
[`ToolDefinition.model_spec`](../../crates/webcodex-tool-contracts/src/tool_definition.rs)
declaration. The schema-free descriptor carries it to
[`ToolSpec`](../../crates/webcodex-tool-contracts/src/tool_spec.rs), where serde skips
it. Public tool descriptors and manifest result fields retain their wire shape;
keywords are neither tool aliases nor argument aliases. Descriptions retain their
selection, authority and recovery contracts.

The [ranker](../../src/tool_runtime/surface/discovery.rs) runs after capability,
OAuth scope, category and intent filtering. Exact canonical names rank first.
Other queries use unique English words, remove common grammatical words and
normalize ordinary plurals. Name-word hits receive weight 12, declared task-word
hits 6, and description-word hits 1. Chinese matches use declared multi-character
vocabulary within the query. Scores sort descending; name-word and task-word hit
counts then canonical tool name settle ties deterministically. Underscore-separated
keywords also support partial names such as `read_file` and `edit_project`; every
supplied meaningful term must match metadata, so an unknown task word does not
silently disappear from that keyword query. Related permitted candidates can
remain when the caller lacks authority for a particular canonical tool.

No-match queries return an empty list. The existing 200-character/control-character
query validation, default 20-result query limit and 1..100 limit clamp remain.
Category and intent restrict the candidate universe before ranking. Exact
`tool_name` queries retain their existing contract and route projection.

## Validation

Focused tests cover field weights and stable ties, English/Chinese task retrieval,
query bounds, category/intent intersections, schema-free selection, exact input
contracts, Direct/Gateway MCP parity, scope-filtered retrieval and denial of an
unauthorized execution after discovery:

```bash
cargo test --locked -p webcodex --lib natural_language
cargo test --locked -p webcodex --lib discovery
cargo test --locked -p webcodex-tool-contracts descriptors_preserve_full_contract_metadata_and_order_without_materialization
```

Offline task-corpus evaluation measures ordered retrieval only. Keep the corpus
and split fixed before capture, tune using development cases, freeze ranking and
vocabulary before heldout capture, and report heldout results without further
tuning. Offline/local evidence does not prove real ChatGPT Web discovery,
invocation success, or end-to-end completion; record that Host evidence separately.
