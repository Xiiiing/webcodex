#!/usr/bin/env python3
"""Bounded current-source Direct/Host Code Mode paired evidence collector.

The caller supplies the live Host driver. This module reuses Agent Loop sample
ownership, fixture oracles, runtime gates and comparison; it is not a model.
"""
from __future__ import annotations

import argparse
import json
import shlex
import sys
import tempfile
from pathlib import Path
from typing import Any

try:
    from scripts import agent_loop_benchmark as bench, agent_loop_report as report
except ModuleNotFoundError:
    import agent_loop_benchmark as bench
    import agent_loop_report as report

CASES = bench.DEFAULT_CASES
LANES = ("direct", "host_code_mode")
MAX_PAIRS = 10
METRICS = (*bench.PAIRED_DELTA_METRICS, "job_convergence.pending_followed_immediately_by_observe_count", "efficiency.job_observe_calls")


def _attest(sample, receipt, case, revision, identity_digest):
    expected = {
        "model_config_digest": identity_digest,
        "base_revision": revision,
        "case_fingerprint": report._case_fingerprint(case),
        "variant": sample["variant"],
        "surface": sample["surface"],
    }
    actual = receipt.get("efficiency_attestation")
    valid = isinstance(actual, dict) and actual == expected
    sample["identity_attestation"] = {"matched": valid, "independently_verified": False}
    if not valid:
        if sample.get("status") == "pass":
            sample["status"] = "fail"
        sample.setdefault("reason_code", "efficiency_attestation_mismatch")
    # Job control remains outer even in nested Code Mode. Missing canonical
    # coverage is unknown, never a zero observation count.
    summary = sample.get("summary")
    if isinstance(summary, dict):
        count = None
        if report._get_path(summary, "availability.canonical_calls.available") is True:
            tools = report._get_path(summary, "tools.outer_by_name")
            if isinstance(tools, dict):
                observed = tools.get("observe_jobs", 0)
                if type(observed) is int and observed >= 0:
                    count = observed
        summary["efficiency"] = {"job_observe_calls": count}
    # Only pinned digest leaves the receipt boundary. Never echo unexpected data.
    if isinstance(sample.get("summary"), dict):
        sample["summary"]["efficiency_identity"] = {
            "model_config_digest": identity_digest if valid else None,
            "attested": valid,
        }
    return sample


def _metrics(summary):
    return {name: report._get_path(summary or {}, name) for name in METRICS}


def _hotspots(summary):
    """Prioritized evidence candidates, never infer inefficiency from call count."""
    rows = []
    repairs = report._get_path(summary, "repair_turns.by_reason") or {}
    for name in ("invalid_arguments", "tool_selection_repair"):
        value = repairs.get(name)
        if type(value) is int and value > 0:
            rows.append({"priority": 1, "candidate": name, "observed_count": value,
                         "interpretation": "driver-annotated repair; inspect contract evidence before changing guidance"})
    pairs = report._get_path(summary, "host_short_chain.observed_by_tool_pair") or {}
    count = sum(value for name, value in pairs.items()
                if isinstance(name, str) and len(parts := name.split("->")) == 2
                and parts[0] == parts[1] and type(value) is int and value > 0)
    if count:
        rows.append({"priority": 2, "candidate": "same_kind_serial_calls", "observed_count": count,
                     "interpretation": "serial Window proxy; does not prove unnecessary microcalls or same model turn"})
    # Canonical summary has no read-content identity proving repeated reads.
    # Immediate observe is not redundant observe; keep that distinction explicit.
    value = report._get_path(summary, "job_convergence.terminal_failure_followed_by_observe_count")
    if type(value) is int and value > 0:
        rows.append({"priority": 4, "candidate": "observe_after_delivered_failure", "observed_count": value,
                     "interpretation": "explicit observe after delivered failure; inspect necessity before proposing a change"})
    return rows


def _delta_summary(pairs):
    output = bench._paired_delta_summary(pairs)
    # Existing aggregation owns the four core metrics. Add the Job proxy with
    # the same nullable/missing convention; it is not an excess-observe count.
    comparisons = [p["comparison"] for p in pairs if isinstance(p.get("comparison"), dict)
                   and p["comparison"]["throughput_compatibility"]["comparable"]]
    for name in METRICS[len(bench.PAIRED_DELTA_METRICS):]:
        deltas = [m["delta"] for c in comparisons for m in c["metrics"]
                  if m["metric"] == name and m["comparable"] and type(m["delta"]) is int]
        value = report._metric_distribution(deltas, missing=len(comparisons) - len(deltas))
        if not comparisons:
            value["total"] = None
        value["complete"] = bool(comparisons) and value["missing"] == 0
        output["candidate_minus_direct"][name] = value
    return output


def run_efficiency(*, repo: Path, base_revision: str, driver_argv: list[str],
                   identity_digest: str, pairs: int = 3, experimental_nested: bool = False):
    if type(pairs) is not int or not 1 <= pairs <= MAX_PAIRS:
        raise bench.BenchmarkError("pairs must be between 1 and 10")
    if not driver_argv or not report._is_exact_sha256(identity_digest):
        raise bench.BenchmarkError("real driver and exact SHA-256 model/config digest are required")
    if not report._is_exact_git_revision(base_revision):
        raise bench.BenchmarkError("base revision must be an exact 40-hex commit")
    repo = bench._git_root(repo)
    if bench._require_exact_revision(repo, base_revision) != base_revision or bench._head_revision(repo) != base_revision:
        raise bench.BenchmarkError("base revision must equal current checkout HEAD")
    with tempfile.TemporaryDirectory(prefix="webcodex-agent-efficiency-") as owned:
        root = Path(owned)
        for name in ("worktrees", "receipts", "annotations"):
            (root / name).mkdir()
        manifest_path = root / "agent_loop_cases.json"
        manifest_path.write_text(bench._read_manifest_at_revision(repo, base_revision), encoding="utf-8")
        manifest = report.load_case_manifest(manifest_path)
        cases = [bench._case(manifest, name) for name in CASES]
        outputs = []
        for case in cases:
            if case.get("target") != "webcodex_repository":
                raise bench.BenchmarkError("efficiency tasks require repository worktrees")
            groups = []
            # Nested Code Mode gets a separate fresh Direct control, so it
            # cannot contaminate the default Host comparison or its deltas.
            for candidate in (("host_code_mode", "code_mode") if experimental_nested else ("host_code_mode",)):
                paired = []
                for index in range(pairs):
                    lanes = ("direct", candidate)
                    order = lanes if index % 2 == 0 else tuple(reversed(lanes))
                    samples = []
                    for ordinal, lane in enumerate(order):
                        sample = bench._run_sample(repo, root, driver_argv, case, variant=lane,
                            pair_index=index, ordinal=ordinal, base_revision=base_revision, case_manifest=manifest_path)
                        label = f"{case['id']}-p{index + 1}-{ordinal + 1}-{lane}"
                        try:
                            receipt = bench._load_driver_receipt(root / "receipts" / (label + ".json"))
                        except bench.BenchmarkError:
                            receipt = {}
                        _attest(sample, receipt, case, base_revision, identity_digest)
                        sample["metrics"] = _metrics(sample.get("summary"))
                        sample["hotspot_candidates"] = _hotspots(sample.get("summary") or {})
                        samples.append(sample)
                    by_lane = {s["variant"]: s for s in samples}
                    paired.append({"pair_index": index, "order": list(order), "samples": samples,
                                   "comparison": bench._comparison(by_lane["direct"], by_lane[candidate])})
                groups.append({"candidate": candidate, "pairs": paired,
                               "paired_delta_summary": _delta_summary(paired)})
            outputs.append({"case_id": case["id"], "groups": groups})
        result = {"schema_version": 1, "kind": "agent_efficiency_benchmark", "base_revision": base_revision,
                  "model_config_digest": identity_digest, "pair_count": pairs,
                  "experimental_nested": experimental_nested, "cases": outputs,
                  "notes": ["identity is pinned caller/driver attestation, not independent model verification",
                            "missing metrics are null; outer calls and immediate observe are proxies",
                            "hotspots are evidence candidates, not production recommendations"]}
        result["strict_passed"] = strict_passed(result, manifest)
        return result


def strict_passed(result, manifest):
    """Recompute evidence and comparison; never trust stored success/counts."""
    try:
        pairs = result["pair_count"]
        if type(pairs) is not int or not 1 <= pairs <= MAX_PAIRS:
            return False
        identity = result["model_config_digest"]
        revision = result["base_revision"]
        if not report._is_exact_sha256(identity) or not report._is_exact_git_revision(revision):
            return False
        cases = result["cases"]
        if len(cases) != len(CASES) or {c["case_id"] for c in cases} != set(CASES):
            return False
        candidates = {"host_code_mode", "code_mode"} if result.get("experimental_nested") is True else {"host_code_mode"}
        for case in cases:
            definition = bench._case(manifest, case["case_id"])
            if len(case["groups"]) != len(candidates) or {g["candidate"] for g in case["groups"]} != candidates:
                return False
            for group in case["groups"]:
                candidate = group["candidate"]
                if len(group["pairs"]) != pairs or {p["pair_index"] for p in group["pairs"]} != set(range(pairs)):
                    return False
                for pair in group["pairs"]:
                    samples = pair["samples"]
                    index = pair["pair_index"]
                    lanes = ("direct", candidate)
                    expected_order = list(lanes if index % 2 == 0 else tuple(reversed(lanes)))
                    if (type(index) is not int or pair.get("order") != expected_order
                        or [s.get("variant") for s in samples] != expected_order):
                        return False
                    if len(samples) != 2 or {s["variant"] for s in samples} != {"direct", candidate}:
                        return False
                    by_lane = {s["variant"]: s for s in samples}
                    for sample in samples:
                        summary = sample["summary"]
                        expected_surface = "direct" if sample["variant"] == "direct" else (
                            "host_code_mode" if sample["variant"] == "host_code_mode" else definition["code_mode_surface"])
                        if (sample["case_id"] != case["case_id"] or sample["status"] != "pass"
                            or sample.get("surface") != expected_surface or sample.get("driver_exit_code") != 0
                            or sample.get("identity_attestation", {}).get("matched") is not True
                            or summary.get("efficiency_identity") != {"model_config_digest": identity, "attested": True}):
                            return False
                        metadata = summary["benchmark"]
                        expected = {"case_id": case["case_id"], "base_revision": revision,
                            "case_fingerprint": report._case_fingerprint(definition), "variant": sample["variant"], "surface": expected_surface,
                            "validation_required": definition["validation"]["required"]}
                        if any(metadata.get(k) != v for k, v in expected.items()):
                            return False
                        if not bench._runtime_evidence_proven(summary, sample["variant"], expected_surface):
                            return False
                        if case["case_id"] == "long_validation_handoff" and not bench._long_handoff_terminal_proven(summary, sample["variant"]):
                            return False
                        if case["case_id"] == "guarded_multi_file_edit" and not bench._guarded_multi_file_contract_proven(summary, sample["variant"]):
                            return False
                        oracle = sample["fixture_oracle"]
                        if ((definition.get("correctness") or {}).get("fixture_oracle") is not None
                            and (oracle.get("available") is not True or oracle.get("passed") is not True)):
                            return False
                        if oracle.get("available") is True and oracle.get("passed") is not True:
                            return False
                    comparison = bench._comparison(by_lane["direct"], by_lane[candidate])
                    if not comparison or comparison["throughput_compatibility"]["comparable"] is not True:
                        return False
        return True
    except (KeyError, TypeError, AttributeError, bench.BenchmarkError, report.ReportError):
        return False


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=Path.cwd())
    parser.add_argument("--base-revision", required=True)
    parser.add_argument("--driver-command", required=True)
    parser.add_argument("--model-config-digest", required=True)
    parser.add_argument("--pairs", type=int, default=3)
    parser.add_argument("--experimental-nested", action="store_true")
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args(argv)
    try:
        result = run_efficiency(repo=args.repo, base_revision=args.base_revision,
            driver_argv=shlex.split(args.driver_command), identity_digest=args.model_config_digest,
            pairs=args.pairs, experimental_nested=args.experimental_nested)
        report._write_json(result, args.output)
        return 1 if args.strict and not result["strict_passed"] else 0
    except (ValueError, OSError):
        print("agent efficiency benchmark failed; check pinned inputs and driver contract", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
