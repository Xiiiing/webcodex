"""Contract tests only: fabricated fixtures are never real model evidence."""
import copy
import json
import unittest
from pathlib import Path
from unittest.mock import patch

from scripts import agent_efficiency_benchmark as efficiency
from scripts import agent_loop_report as report
from scripts.tests import test_agent_loop_report as report_fixtures

REV = "a" * 40
IDENTITY = "b" * 64


def matrix():
    manifest = report.load_case_manifest(report.DEFAULT_CASE_MANIFEST)
    cases = []
    for case_id in efficiency.CASES:
        definition = report._case_by_id(manifest, case_id)
        pairs = []
        for index in range(3):
            samples = []
            for lane in efficiency.LANES:
                surface = lane
                summary = {"schema_version": 1, "kind": "agent_loop_summary",
                    "benchmark": {"case_id": case_id, "base_revision": REV,
                        "case_fingerprint": report._case_fingerprint(definition),
                        "variant": lane, "surface": surface,
                        "validation_required": definition["validation"]["required"]},
                    "correctness": {"task_verdict": "pass", "validation_verdict": "pass"},
                    "efficiency_identity": {"model_config_digest": IDENTITY, "attested": True}}
                samples.append({"case_id": case_id, "variant": lane, "surface": surface,
                    "status": "pass", "driver_exit_code": 0, "summary": summary,
                    "identity_attestation": {"matched": True, "independently_verified": False},
                    "fixture_oracle": {"available": True, "passed": True}})
            order = list(efficiency.LANES if index % 2 == 0 else reversed(efficiency.LANES))
            samples.sort(key=lambda sample: order.index(sample["variant"]))
            pairs.append({"pair_index": index, "order": order, "samples": samples,
                          "comparison": {"throughput_compatibility": {"comparable": True}}})
        cases.append({"case_id": case_id, "groups": [{"candidate": "host_code_mode", "pairs": pairs}]})
    return {"pair_count": 3, "base_revision": REV, "model_config_digest": IDENTITY,
            "cases": cases, "strict_passed": True, "sample_count": 18}, manifest


class EfficiencyTests(unittest.TestCase):
    def setUp(self):
        self.result, self.manifest = matrix()
        self.patches = [patch.object(efficiency.bench, name, return_value=True) for name in
            ("_runtime_evidence_proven", "_long_handoff_terminal_proven", "_guarded_multi_file_contract_proven")]
        for p in self.patches:
            p.start()
            self.addCleanup(p.stop)

    def sample(self):
        return self.result["cases"][0]["groups"][0]["pairs"][0]["samples"][0]

    def strict(self):
        return efficiency.strict_passed(self.result, self.manifest)

    def test_complete_contract_matrix(self):
        self.assertTrue(self.strict())

    def test_missing_sample_ignores_misleading_counts(self):
        self.result["cases"][0]["groups"][0]["pairs"][0]["samples"].pop()
        self.assertFalse(self.strict())

    def test_missing_pair(self):
        self.result["cases"][0]["groups"][0]["pairs"].pop()
        self.assertFalse(self.strict())

    def test_missing_case(self):
        self.result["cases"].pop()
        self.assertFalse(self.strict())

    def test_altered_identity(self):
        self.sample()["summary"]["efficiency_identity"]["model_config_digest"] = "c" * 64
        self.assertFalse(self.strict())

    def test_altered_case_or_base_or_lane(self):
        for key, value in (("base_revision", "d" * 40), ("case_fingerprint", "e" * 64), ("variant", "code_mode")):
            with self.subTest(key=key):
                old = self.sample()["summary"]["benchmark"][key]
                self.sample()["summary"]["benchmark"][key] = value
                self.assertFalse(self.strict())
                self.sample()["summary"]["benchmark"][key] = old

    def test_nonpass_kept(self):
        for status in ("fail", "partial", "unsupported"):
            self.sample()["status"] = status
            self.assertFalse(self.strict())

    def test_reported_pass_cannot_hide_failed_correctness(self):
        self.sample()["summary"]["correctness"]["task_verdict"] = "fail"
        self.assertFalse(self.strict())

    def test_stored_comparison_cannot_hide_noncomparable_report(self):
        self.sample()["summary"]["correctness"]["validation_verdict"] = "unavailable"
        self.assertFalse(self.strict())

    def test_counts_cannot_hide_runtime_failure(self):
        with patch.object(efficiency.bench, "_runtime_evidence_proven", return_value=False):
            self.assertFalse(self.strict())

    def test_oracle_required_for_guarded_edit(self):
        sample = self.result["cases"][1]["groups"][0]["pairs"][0]["samples"][0]
        sample["fixture_oracle"] = {"available": False}
        self.assertFalse(self.strict())

    def test_missing_metrics_are_null(self):
        self.assertTrue(all(v is None for v in efficiency._metrics({}).values()))
        summary = efficiency._delta_summary([])
        self.assertTrue(all(v["total"] is None for v in summary["candidate_minus_direct"].values()))

    def test_no_hotspots_from_counts_alone(self):
        self.assertEqual(efficiency._hotspots({"outer_calls": {"total": 100},
            "tools": {"outer_by_name": {"read_file": 20, "observe_job": 20}}}), [])

    def test_hotspots_state_proxy_limits(self):
        rows = efficiency._hotspots({"repair_turns": {"by_reason": {"invalid_arguments": 2}},
            "host_short_chain": {"observed_by_tool_pair": {"read_file->read_file": 3}}})
        self.assertEqual([r["priority"] for r in rows], [1, 2])
        self.assertIn("does not prove", rows[1]["interpretation"])

    def test_attestation_requires_exact_pins_and_does_not_echo_private_data(self):
        definition = report._case_by_id(self.manifest, efficiency.CASES[0])
        sample = copy.deepcopy(self.sample())
        efficiency._attest(sample, {"efficiency_attestation": {"model_config_digest": "secret-private-value"},
            "private_reasoning": "private payload"}, definition, REV, IDENTITY)
        serialized = json.dumps(sample)
        self.assertNotIn("secret-private-value", serialized)
        self.assertNotIn("private payload", serialized)
        self.assertEqual(sample["status"], "fail")
        self.assertIsNone(sample["summary"]["efficiency_identity"]["model_config_digest"])

    def test_identity_failure_retains_unsupported_status(self):
        definition = report._case_by_id(self.manifest, efficiency.CASES[0])
        self.sample()["status"] = "unsupported"
        self.sample()["reason_code"] = "driver_platform_unsupported"
        efficiency._attest(self.sample(), {}, definition, REV, IDENTITY)
        self.assertEqual(self.sample()["status"], "unsupported")
        self.assertEqual(self.sample()["reason_code"], "driver_platform_unsupported")
        self.assertFalse(self.strict())

    def test_observe_metric_requires_coverage(self):
        definition = report._case_by_id(self.manifest, efficiency.CASES[0])
        sample = self.sample()
        efficiency._attest(sample, {}, definition, REV, IDENTITY)
        self.assertIsNone(sample["summary"]["efficiency"]["job_observe_calls"])
        sample["summary"]["availability"] = {"canonical_calls": {"available": True}}
        sample["summary"]["tools"] = {"outer_by_name": {"observe_jobs": 2}}
        efficiency._attest(sample, {}, definition, REV, IDENTITY)
        self.assertEqual(sample["summary"]["efficiency"]["job_observe_calls"], 2)

    def test_missing_attestation(self):
        definition = report._case_by_id(self.manifest, efficiency.CASES[0])
        efficiency._attest(self.sample(), {}, definition, REV, IDENTITY)
        self.assertFalse(self.strict())

    def test_compare_identity_missing_or_mismatched(self):
        left, right = self.result["cases"][0]["groups"][0]["pairs"][0]["samples"]
        right["summary"].pop("efficiency_identity")
        result = report.compare_reports(left["summary"], right["summary"])
        self.assertFalse(result["throughput_compatibility"]["comparable"])

    def test_changed_required_validation_cannot_weaken_gate(self):
        sample = self.result["cases"][2]["groups"][0]["pairs"][0]["samples"][0]
        sample["summary"]["benchmark"]["validation_required"] = False
        sample["summary"]["correctness"]["validation_verdict"] = "not_required"
        self.assertFalse(self.strict())

    def test_wrong_alternating_order(self):
        self.result["cases"][0]["groups"][0]["pairs"][0]["order"] = ["host_code_mode", "direct"]
        self.assertFalse(self.strict())

    def test_orchestration_reuses_sample_and_cleans_temporary_root(self):
        roots, calls = [], []
        def fake_sample(repo, root, driver, case, **options):
            # Fabricated collector fixture, not a live-model driver.
            roots.append(root)
            calls.append((case["id"], options["pair_index"], options["variant"]))
            lane = options["variant"]
            template = next(c for c in self.result["cases"] if c["case_id"] == case["id"])
            sample = copy.deepcopy(next(s for s in template["groups"][0]["pairs"][0]["samples"] if s["variant"] == lane))
            receipt = {"status": "pass", "efficiency_attestation": {
                "model_config_digest": IDENTITY, "base_revision": REV,
                "case_fingerprint": report._case_fingerprint(case), "variant": lane, "surface": lane}}
            label = f"{case['id']}-p{options['pair_index'] + 1}-{options['ordinal'] + 1}-{lane}.json"
            (root / "receipts" / label).write_text(json.dumps(receipt))
            return sample
        with patch.object(efficiency.bench, "_git_root", return_value=Path.cwd()), \
             patch.object(efficiency.bench, "_require_exact_revision", return_value=REV), \
             patch.object(efficiency.bench, "_head_revision", return_value=REV), \
             patch.object(efficiency.bench, "_read_manifest_at_revision", return_value=json.dumps(self.manifest)), \
             patch.object(efficiency.bench, "_run_sample", side_effect=fake_sample):
            result = efficiency.run_efficiency(repo=Path.cwd(), base_revision=REV,
                driver_argv=["real-driver-placeholder"], identity_digest=IDENTITY)
        self.assertTrue(result["strict_passed"])
        self.assertEqual(len(calls), 18)
        self.assertEqual([c[2] for c in calls[:6]],
            ["direct", "host_code_mode", "host_code_mode", "direct", "direct", "host_code_mode"])
        self.assertTrue(all(not root.exists() for root in roots))

    def test_setup_failure_cleans_temporary_root(self):
        roots = []
        original = efficiency.tempfile.TemporaryDirectory
        def owned(*args, **kwargs):
            resource = original(*args, **kwargs)
            roots.append(Path(resource.name))
            return resource
        with patch.object(efficiency.bench, "_git_root", return_value=Path.cwd()), \
             patch.object(efficiency.bench, "_require_exact_revision", return_value=REV), \
             patch.object(efficiency.bench, "_head_revision", return_value=REV), \
             patch.object(efficiency.bench, "_read_manifest_at_revision", side_effect=efficiency.bench.BenchmarkError("fixture failure")), \
             patch.object(efficiency.tempfile, "TemporaryDirectory", side_effect=owned):
            with self.assertRaises(efficiency.bench.BenchmarkError):
                efficiency.run_efficiency(repo=Path.cwd(), base_revision=REV,
                    driver_argv=["driver"], identity_digest=IDENTITY)
        self.assertEqual(len(roots), 1)
        self.assertFalse(roots[0].exists())

    def test_input_bounds_before_worktree_setup(self):
        for count in (0, 11, True):
            with self.assertRaises(efficiency.bench.BenchmarkError):
                efficiency.run_efficiency(repo=Path.cwd(), base_revision=REV,
                    driver_argv=["driver"], identity_digest=IDENTITY, pairs=count)
        with self.assertRaises(efficiency.bench.BenchmarkError):
            efficiency.run_efficiency(repo=Path.cwd(), base_revision="HEAD",
                driver_argv=["driver"], identity_digest=IDENTITY)


class EfficiencyReportIntegrationTests(unittest.TestCase):
    """Exercise persisted audit -> canonical report -> efficiency consumers."""
    def setUp(self):
        self.fixture = report_fixtures.AgentLoopReportTests(methodName="runTest")
        self.fixture.setUp()
        self.addCleanup(self.fixture.tearDown)

    def add_job_event(self, trace, previous=None, kind=None, failure=None):
        row = report_fixtures.JobConvergenceTests.row(trace, previous, kind,
            failure=failure, terminal=2000 if kind in ("passive_terminal", "explicit_observe") else None)
        self.fixture.insert_event(str(trace), trace_id=str(trace),
            previous_trace_id=str(previous) if previous else None,
            started=trace * 1000, handed=trace * 1000 + 100,
            transition="serial" if previous else "unavailable",
            tool="observe_jobs" if kind == "explicit_observe" else "run_process",
            job_convergence=row["summary"]["model_ergonomics"]["job_convergence"])

    def test_immediate_observe_metric_uses_canonical_report_path(self):
        self.add_job_event(1, kind="pending_handoff")
        self.add_job_event(2, 1, "explicit_observe")
        summary = self.fixture.summarize()
        path = "job_convergence.pending_followed_immediately_by_observe_count"
        self.assertEqual(efficiency._metrics(summary)[path], 1)
        comparison = report.compare_reports(summary, self.fixture.summarize(variant="host_code_mode"))
        metric = next(item for item in comparison["metrics"] if item["metric"] == path)
        self.assertTrue(metric["comparable"])
        self.assertEqual((metric["baseline"], metric["candidate"], metric["delta"]), (1, 1, 0))

    def test_passive_terminal_without_observe_is_not_an_observe_candidate(self):
        self.add_job_event(1, kind="pending_handoff")
        self.add_job_event(2, 1, "passive_terminal", failure=True)
        self.add_job_event(3, 2)
        summary = self.fixture.summarize()
        self.assertEqual(summary["job_convergence"]["passive_terminal_before_explicit_observe_count"], 1)
        self.assertEqual(summary["job_convergence"]["terminal_failure_followed_by_observe_count"], 0)
        self.assertFalse(any(row["candidate"] == "observe_after_delivered_failure"
                             for row in efficiency._hotspots(summary)))

    def test_delivered_failure_then_observe_is_only_an_inspection_candidate(self):
        self.add_job_event(1, kind="pending_handoff")
        self.add_job_event(2, 1, "passive_terminal", failure=True)
        self.add_job_event(3, 2, "explicit_observe")
        summary = self.fixture.summarize()
        rows = [row for row in efficiency._hotspots(summary)
                if row["candidate"] == "observe_after_delivered_failure"]
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]["observed_count"], 1)
        self.assertIn("inspect necessity", rows[0]["interpretation"])
        self.assertNotIn("excess", rows[0]["interpretation"])

    def test_same_kind_hotspot_uses_actual_report_tool_pair_field(self):
        self.fixture.insert_event("read-one", tool="read_files", started=100, handed=120)
        self.fixture.insert_event("read-two", tool="read_files", started=150, handed=170, transition="serial")
        summary = self.fixture.summarize(variant="host_code_mode")
        self.assertEqual(summary["host_short_chain"]["observed_by_tool_pair"], {"read_files->read_files": 1})
        rows = efficiency._hotspots(summary)
        self.assertEqual(rows[0]["candidate"], "same_kind_serial_calls")
        self.assertEqual(rows[0]["observed_count"], 1)
        self.assertIn("does not prove", rows[0]["interpretation"])


if __name__ == "__main__":
    unittest.main()
