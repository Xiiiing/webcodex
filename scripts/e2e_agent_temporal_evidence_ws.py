#!/usr/bin/env python3
"""Verify temporal evidence against disposable real MCP/WS services, no model.

Uses the existing generic fixture scenarios; this tests verifier integration,
never ChatGPT selection, Host rendering or a successful real-model task.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import sqlite3
import re
import subprocess
import sys
import tempfile
from types import SimpleNamespace

try:
    from scripts import agent_temporal_evidence as temporal, agent_loop_report as report
    from scripts.e2e_generic_agent_ws import GenericSmoke
except ModuleNotFoundError:
    import agent_temporal_evidence as temporal
    import agent_loop_report as report
    from e2e_generic_agent_ws import GenericSmoke


class RecordedSmoke(GenericSmoke):
    def raw_tool(self, name, args, token, *, direct=False):
        args = dict(args)
        if getattr(self, "session_ref", None):
            args.setdefault("_wc", {"record": self.session_ref})
        return super().raw_tool(name, args, token, direct=direct)


def run(bin_dir, source_revision):
    builds = {}
    for name in ("webcodex-server", "webcodex-runner"):
        version = subprocess.run([str(bin_dir / name), "--version"], stdin=subprocess.DEVNULL,
                                 stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=10, check=True).stdout.decode()
        match = re.fullmatch(r"[\w-]+ ([\w.+-]+) \(commit ([0-9a-f]+), dirty=(true|false), built_at=(\d+)\)\s*", version)
        if not match or not source_revision.startswith(match[2]):
            raise AssertionError("fixture runtime source identity mismatch")
        builds[name] = {"version": match[1], "commit_prefix": match[2], "dirty": match[3] == "true", "built_at": int(match[4])}
    if builds["webcodex-server"] != builds["webcodex-runner"]:
        raise AssertionError("fixture Server/Runner build identities differ")
    manifest = report.load_case_manifest(report.DEFAULT_CASE_MANIFEST)
    scenarios = {"generic_failure_repair": "failure_logs", "generic_pending_independent_join": "pending",
                 "generic_stale_read_revision": "stale_edit", "generic_missing_output": "missing_output"}
    results = []
    for case_id, method in scenarios.items():
        case = report._case_by_id(manifest, case_id)
        with tempfile.TemporaryDirectory(prefix="webcodex-temporal-e2e-") as temporary:
            root = Path(temporary)
            capture = root / "capture"
            temporal.prepare_capture(capture, case_id, source_revision, report._case_fingerprint(case))
            args = SimpleNamespace(bin_dir=bin_dir, server=bin_dir / "webcodex-server", runner=bin_dir / "webcodex-runner",
                                   profile="upgraded", goal_plan_only=False)
            smoke = RecordedSmoke(args, root)
            smoke.env.update({"WEBCODEX_TOOL_REQUEST_TRACE": "full", "WEBCODEX_TOOL_REQUEST_TRACE_DIR": str(capture),
                              "WEBCODEX_TOOL_REQUEST_TRACE_MAX_TOTAL_BYTES": str(16 * 1024 * 1024)})
            try:
                # Synthetic Host metadata supplies stable scope; it is explicitly
                # fixture identity, not an observation of a real ChatGPT Window.
                smoke.app_fixture = True
                smoke.prepare()
                # Setup calls are not part of this case. Start a fresh recorder
                # Session with a fixed explicit business Project.
                smoke.session_ref = None
                started = smoke.call("work_on_project", {"project": smoke.project, "instruction": "Temporal verifier fixture"}, direct=True)
                smoke.project_ref, smoke.session_ref = started["project_ref"], started["session_ref"]
                getattr(smoke, method)()
                session = started["session_id"]
            finally:
                smoke.close()  # Drain the existing trace/audit writers before inspection.
            databases = list((root / "data").rglob("*.db"))
            audit_db = None
            for database in databases:
                with sqlite3.connect(f"file:{database}?mode=ro", uri=True) as connection:
                    if connection.execute("SELECT 1 FROM sqlite_master WHERE name='action_events'").fetchone():
                        audit_db = database
                        break
            if audit_db is None:
                raise AssertionError("fixture audit database unavailable")
            result = temporal.verify(capture_root=capture, audit_db=audit_db, workflow_session_id=session,
                                     case_id=case_id, base_revision=source_revision, fingerprint=report._case_fingerprint(case))
            if result.get("available") is not True or result.get("passed") is not True:
                raise AssertionError("temporal verifier did not establish " + case_id + ": " + json.dumps(result))
            results.append(result)
            print("PASS: real MCP/WS temporal verifier " + case_id)
    return {"source_revision": source_revision, "runtime_builds": builds, "real_model_test": False, "cases": results}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bin-dir", type=Path, required=True)
    parser.add_argument("--source-revision", required=True)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    if len(args.source_revision) != 40 or any(char not in "0123456789abcdef" for char in args.source_revision):
        parser.error("source revision must be an exact 40-hex Git commit")
    result = run(args.bin_dir.resolve(), args.source_revision)
    if args.output:
        args.output.write_text(json.dumps(result, indent=2) + "\n")


if __name__ == "__main__":
    main()
