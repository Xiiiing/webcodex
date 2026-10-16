from __future__ import annotations

import copy
import hashlib
import json
import os
from pathlib import Path
import shutil
import sqlite3
import subprocess
import unittest
import uuid

from scripts import agent_temporal_evidence as evidence
from scripts import agent_loop_benchmark as benchmark
from scripts import agent_loop_report as report
from scripts.tests import test_agent_loop_report as audit_tests


def call(tool, args, output, *, success=True, index=0):
    result = {"success": success, "output": output}
    return {"tool": tool, "arguments": args, "output": output, "result": result,
            "envelope": {"result": {"structuredContent": result}}, "project": "project",
            "started": index * 10, "ended": index * 10 + 1}


def positive_cases():
    failure = [call("run_script", {"language": "python", "script": evidence.pressure_script()},
                    {"exit_code": 7, "stdout": evidence.SENTINEL, "stderr": "expected failure"}, success=False),
               call("run_script", {"language": "python", "script": evidence.pressure_script(False)},
                    {"exit_code": 0, "stdout": evidence.SENTINEL}, index=1)]
    pending = [call("run_process", {"interactive": True, "args": ["-u", "-c", evidence.PENDING_SCRIPT]}, {"execution_state": "pending", "job_id": "original"}),
               call("run_script", {"language": "python", "script": "from pathlib import Path\nPath('independent.txt').write_text('independent work completed')\n"}, {}, index=1),
               call("write_job_input", {"job_id": "original", "close": True}, {}, index=2),
               call("wait_for_job_readiness", {"job_ids": ["original"], "mode": "all"}, {"pending_job_ids": []}, index=3),
               call("observe_jobs", {"items": [{"job_id": "original"}]}, {"items": [{"job_id": "original", "terminal": True,
                    "exit_code": 0, "stdout_tail": "controlled-job-complete"}]}, index=4)]
    stale = [call("read_files", {"items": [{"path": "stale.txt"}]}, {"items": [{"path": "stale.txt", "output": {"read_revision": "old", "text": "before"}}]}),
             call("edit_project_files", {"changes": [{"path": "stale.txt", "expected_read_revision": "old"}]},
                  {"error_kind": "stale_file_revision", "state_changed": False}, success=False, index=1),
             call("read_files", {"items": [{"path": "stale.txt"}]}, {"items": [{"path": "stale.txt", "output": {"read_revision": "new", "text": evidence.EXTERNAL_SENTINEL}}]}, index=2),
             call("edit_project_files", {"changes": [{"path": "stale.txt", "expected_read_revision": "new"}]}, {}, index=3)]
    missing = [call("finish_coding_task", {"outputs": ["missing-result.csv"]},
                    {"task_outputs": {"missing_count": 1, "verified_count": 0},
                     "task_outcome": {"status": "fail", "blocking": True, "blocking_reasons": ["task_outputs_unverified"]}})]
    return dict(zip(sorted(evidence.TEMPORAL_CASES), [failure, missing, pending, stale]))


class TemporalSemanticsTests(unittest.TestCase):
    def test_all_four_actual_sequences_can_qualify(self):
        for case, calls in positive_cases().items():
            with self.subTest(case=case):
                self.assertTrue(all(evidence._checks(case, calls).values()))

    def test_pending_rejects_redispatch_changed_job_extra_wait_and_late_work(self):
        original = positive_cases()["generic_pending_independent_join"]
        variants = []
        duplicate = copy.deepcopy(original); duplicate.append(copy.deepcopy(duplicate[0])); variants.append(duplicate)
        wrong = copy.deepcopy(original); wrong[-1]["output"]["items"][0]["job_id"] = "replacement"; variants.append(wrong)
        extra = copy.deepcopy(original); extra.append(copy.deepcopy(extra[3])); variants.append(extra)
        late = copy.deepcopy(original); late[1]["started"] = 35; variants.append(late)
        unrelated = copy.deepcopy(original); unrelated[1]["arguments"]["script"] = "pass"; variants.append(unrelated)
        for calls in variants:
            self.assertFalse(all(evidence._checks("generic_pending_independent_join", calls).values()))

    def test_failure_repair_rejects_fabricated_exit_and_lost_sentinel(self):
        original = positive_cases()["generic_failure_repair"]
        for field, value in (("exit_code", 0), ("stdout", "omitted"), ("stderr", "omitted")):
            calls = copy.deepcopy(original); calls[0]["output"][field] = value
            self.assertFalse(all(evidence._checks("generic_failure_repair", calls).values()))
        wrong = copy.deepcopy(original); wrong[1]["arguments"]["script"] = "pass"
        self.assertFalse(all(evidence._checks("generic_failure_repair", wrong).values()))

    def test_stale_recovery_rejects_missing_reread_unchanged_revision_or_effect(self):
        original = positive_cases()["generic_stale_read_revision"]
        variants = [original[:2] + original[3:]]
        for field, value in (("error_kind", "permission_denied"), ("state_changed", True)):
            wrong = copy.deepcopy(original); wrong[1]["output"][field] = value; variants.append(wrong)
        wrong = copy.deepcopy(original); wrong[3]["arguments"]["changes"][0]["expected_read_revision"] = "old"; variants.append(wrong)
        for calls in variants:
            self.assertFalse(all(evidence._checks("generic_stale_read_revision", calls).values()))

    def test_missing_output_cannot_be_omitted_or_reported_as_success(self):
        original = positive_cases()["generic_missing_output"]
        for key, value in (("status", "success"), ("blocking", False), ("blocking_reasons", [])):
            calls = copy.deepcopy(original); calls[0]["output"]["task_outcome"][key] = value
            self.assertFalse(all(evidence._checks("generic_missing_output", calls).values()))
        calls = copy.deepcopy(original); calls[0]["arguments"]["outputs"] = []
        self.assertFalse(all(evidence._checks("generic_missing_output", calls).values()))

    def test_project_scope_is_not_inferred_from_order(self):
        calls = positive_cases()["generic_failure_repair"]
        calls[1]["project"] = "other"
        with self.assertRaises(evidence.EvidenceUnavailable):
            evidence._checks("generic_failure_repair", calls)

    def test_host_lane_uses_canonical_calls_without_claiming_model_turn_identity(self):
        summary = {"outer_calls": {"total": 2}, "canonical_calls": {"total": 2, "by_name": {"read_files": 2}},
                   "availability": {"code_mode_composition": {"available": True}}}
        self.assertTrue(benchmark._runtime_evidence_proven(summary, "host_code_mode", "host_code_mode"))
        self.assertEqual(benchmark._tool_count(summary, "host_code_mode", "read_files"), 2)
        summary["canonical_calls"]["by_name"]["execute_code_mode"] = 1
        self.assertFalse(benchmark._runtime_evidence_proven(summary, "host_code_mode", "host_code_mode"))

    def test_success_flag_without_terminal_fact_is_not_exit_zero(self):
        value = call("run_script", {}, {})
        self.assertIsNone(evidence._exit_code(value))
        value["execution_state"] = "pending"
        self.assertIsNone(evidence._exit_code(value))
        value["execution_state"] = "completed"
        self.assertEqual(evidence._exit_code(value), 0)
        value["output"]["exit_code"] = True
        self.assertIsNone(evidence._exit_code(value))

    def test_host_candidate_order_and_surface_are_explicit(self):
        self.assertEqual(benchmark._pair_order(0, "host_code_mode"), ("direct", "host_code_mode"))
        self.assertEqual(benchmark._pair_order(1, "host_code_mode"), ("host_code_mode", "direct"))
        self.assertEqual(benchmark._surface({}, "host_code_mode"), "host_code_mode")

    def test_temporal_gate_rejects_renamed_checks_and_wrong_case_or_base(self):
        case = report._case_by_id(report.load_case_manifest(report.DEFAULT_CASE_MANIFEST), "generic_missing_output")
        proof = {"schema_version": 1, "case_id": case["id"], "base_revision": "a" * 40,
                 "case_fingerprint": report._case_fingerprint(case), "available": True,
                 "passed": True, "checks": {"missing_output_blocks_finish": True}}
        summary = {"benchmark": {"base_revision": "a" * 40}}
        self.assertTrue(benchmark._generic_temporal_evidence_proven(case, summary, "direct", proof))
        for key, value in (("checks", {"driver_says_pass": True}), ("case_id", "other"),
                           ("base_revision", "b" * 40), ("case_fingerprint", "c" * 64)):
            wrong = dict(proof); wrong[key] = value
            self.assertFalse(benchmark._generic_temporal_evidence_proven(case, summary, "direct", wrong))


@unittest.skipUnless(os.name == "posix" and shutil.which("zstd"), "private local trace verifier requires POSIX and zstd")
class TemporalCaptureTests(unittest.TestCase):
    def setUp(self):
        self.audit = audit_tests.AgentLoopReportTests()
        self.audit.setUp()
        self.addCleanup(self.audit.tearDown)
        self.root = self.audit.root / "capture"
        self.case = "generic_missing_output"
        self.base, self.fingerprint = "a" * 40, "b" * 64
        evidence.prepare_capture(self.root, self.case, self.base, self.fingerprint)
        self.trace = str(uuid.uuid4())
        self.directory = self.root / self.trace
        self.directory.mkdir(mode=0o700)
        (self.directory / "payloads").mkdir(mode=0o700)
        self.private_write(self.directory / ".webcodex-tool-trace", b"")
        self.audit.insert_event("one", tool="finish_coding_task", trace_id=self.trace)
        self.events = []
        self.calls = positive_cases()[self.case]
        for phase, value in (("effective_arguments", self.calls[0]["arguments"]), ("final_response", self.calls[0]["envelope"])):
            self.payload(phase, value)

    def private_write(self, path, data):
        path.write_bytes(data); path.chmod(0o600)

    def payload(self, phase, value):
        raw = json.dumps(value).encode()
        compressed = subprocess.run(["zstd", "-q", "-c"], input=raw, stdout=subprocess.PIPE, check=True).stdout
        path = "payloads/" + phase + ".json.zst"
        self.private_write(self.directory / path, compressed)
        self.events.append({"event": "tool_trace_payload_captured", "server_trace_id": self.trace,
                            "encoding": "json+zstd", "phase": phase, "payload_path": path,
                            "payload_bytes": len(raw), "compressed_bytes": len(compressed),
                            "payload_sha256": hashlib.sha256(raw).hexdigest()})
        self.flush()

    def flush(self):
        self.private_write(self.directory / "events.jsonl", b"\n".join(json.dumps(event).encode() for event in self.events))

    def verify(self):
        return evidence.verify(capture_root=self.root, audit_db=self.audit.audit_db,
                               workflow_session_id="wc_sess_test", case_id=self.case,
                               base_revision=self.base, fingerprint=self.fingerprint)

    def extra_capture(self, tool, arguments, *, output=None, started=130, handed=140, window="hashed-window-a"):
        saved = self.trace, self.directory, self.events
        self.trace = str(uuid.uuid4())
        self.directory = self.root / self.trace
        self.directory.mkdir(mode=0o700)
        (self.directory / "payloads").mkdir(mode=0o700)
        self.private_write(self.directory / ".webcodex-tool-trace", b"")
        self.events = []
        self.audit.insert_event(self.trace, tool=tool, trace_id=self.trace, started=started, handed=handed, window=window)
        with sqlite3.connect(self.audit.audit_db) as connection:
            connection.execute("UPDATE action_events SET project=NULL WHERE event_id=?", (self.trace,))
        try:
            self.payload("effective_arguments", arguments)
            if output is not None:
                self.payload("final_response", {"result": {"structuredContent": {"success": True, "output": output}}})
        finally:
            self.trace, self.directory, self.events = saved

    def test_exact_session_summary_needs_no_discussion_response_capture(self):
        self.extra_capture("read_session_discussion_summary", {"session_id": "wc_sess_test"})
        self.assertTrue(self.verify()["passed"], self.verify())

    def test_session_summary_cannot_borrow_recording_link_for_another_target(self):
        for index, selector in enumerate(("wc_sess_other", "~s1", None)):
            with self.subTest(selector=selector):
                self.extra_capture("read_session_discussion_summary", {"session_id": selector},
                                   started=130 + index * 20, handed=140 + index * 20)
                self.assertEqual(self.verify()["reason"], "context_session_mismatch")

    def test_session_summary_alias_requires_prior_exact_bootstrap_mapping(self):
        self.extra_capture("work_on_project", {}, output={"session_id": "wc_sess_test", "session_ref": "~s1"})
        self.extra_capture("read_session_discussion_summary", {"session_id": "~s1"}, started=150, handed=160)
        self.assertTrue(self.verify()["passed"], self.verify())

    def test_later_bootstrap_cannot_retroactively_bind_context_alias(self):
        self.extra_capture("read_session_discussion_summary", {"session_id": "~s1"})
        self.extra_capture("work_on_project", {}, output={"session_id": "wc_sess_test", "session_ref": "~s1"},
                           started=150, handed=160)
        self.assertEqual(self.verify()["reason"], "context_session_mismatch")

    def test_bootstrap_for_other_session_does_not_prove_context_alias(self):
        self.extra_capture("work_on_project", {}, output={"session_id": "wc_sess_other", "session_ref": "~s1"})
        self.extra_capture("read_session_discussion_summary", {"session_id": "~s1"}, started=150, handed=160)
        self.assertEqual(self.verify()["reason"], "context_session_mismatch")

    def test_session_context_retains_window_and_order_fences(self):
        self.extra_capture("read_session_discussion_summary", {"session_id": "wc_sess_test"}, window="other-window")
        self.assertEqual(self.verify()["reason"], "scope_mismatch")

    def test_session_context_overlap_is_still_incomplete(self):
        self.extra_capture("read_session_discussion_summary", {"session_id": "wc_sess_test"}, started=110, handed=130)
        self.assertEqual(self.verify()["reason"], "ambiguous_order")

    def test_projectless_mutation_is_not_session_read_context(self):
        self.extra_capture("checkpoint_goal", {}, output={})
        self.assertEqual(self.verify()["reason"], "project_mismatch")

    def test_actual_capture_with_exact_audit_and_digest_passes_without_payload_output(self):
        result = self.verify()
        self.assertTrue(result["available"], result)
        self.assertTrue(result["passed"], result)
        serialized = json.dumps(result)
        for private in (self.trace, "missing-result.csv", "wc_sess_test", "agent:test:project"):
            self.assertNotIn(private, serialized)

    def test_unlinked_session_cannot_borrow_another_capture(self):
        self.audit.insert_event("other", session="other", tool="finish_coding_task", trace_id=str(uuid.uuid4()))
        self.assertTrue(self.verify()["passed"])

    def test_unrecorded_runtime_call_cannot_disappear_from_dispatch_counts(self):
        unlinked = self.root / str(uuid.uuid4())
        unlinked.mkdir(mode=0o700)
        self.private_write(unlinked / "events.jsonl", json.dumps({"event": "tool_trace_diagnostic",
            "server_trace_id": unlinked.name, "phase": "kernel_arguments", "tool_name": "run_process"}).encode())
        self.assertEqual(self.verify()["reason"], "unlinked_runtime_call")

    def test_tampered_size_digest_path_duplicate_and_missing_phase_fail_closed(self):
        original = copy.deepcopy(self.events)
        variants = []
        for key, value in (("payload_sha256", "f" * 64), ("payload_bytes", 1),
                           ("payload_path", "payloads/../../private.json.zst"), ("server_trace_id", str(uuid.uuid4()))):
            wrong = copy.deepcopy(original); wrong[0][key] = value; variants.append(wrong)
        variants.extend([original[:1], original + original[:1]])
        for events in variants:
            self.events = events; self.flush()
            self.assertFalse(self.verify()["available"])

    def test_symlink_and_world_readable_capture_fail_closed(self):
        path = self.directory / self.events[0]["payload_path"]
        path.chmod(0o644)
        self.assertFalse(self.verify()["available"])
        path.chmod(0o600)
        outside = self.audit.root / "outside"
        path.rename(outside)
        path.symlink_to(outside)
        self.assertFalse(self.verify()["available"])
        self.assertTrue(outside.exists())

    def test_corrupt_payload_and_wrong_case_binding_are_unavailable(self):
        path = self.directory / self.events[0]["payload_path"]
        self.private_write(path, b"corrupted")
        self.assertFalse(self.verify()["available"])
        self.private_write(self.root / evidence.CAPTURE_MARKER, b"{}")
        self.assertFalse(self.verify()["available"])

    def test_overlap_or_mismatched_canonical_outcome_is_not_evidence(self):
        self.audit.insert_event("second", trace_id=str(uuid.uuid4()), started=110, handed=130)
        self.assertFalse(self.verify()["available"])


if __name__ == "__main__":
    unittest.main()
