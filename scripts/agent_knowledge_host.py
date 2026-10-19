#!/usr/bin/env python3
"""User-assisted ChatGPT Web driver; never runs or simulates a model.

The selection runner owns fixture/oracle/capture verification. This adapter owns
only a dedicated disposable Server/Runner and private operator handoff files.
State keeps one loopback port and auth DB across sequential samples so a normal
user-created connector can keep its URL. No existing service is reused.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import secrets
import re
import socket
import subprocess
import sys
import time
import uuid
from urllib.parse import urlsplit

try:
    from scripts.agent_knowledge_fixture import CASE_IDS
    from scripts import agent_temporal_evidence as trace
    from scripts.e2e_job_input_ws import InteractiveSmoke
    from scripts.e2e_session_continuity_ws import ROOT, check
except ModuleNotFoundError:
    from agent_knowledge_fixture import CASE_IDS
    import agent_temporal_evidence as trace
    from e2e_job_input_ws import InteractiveSmoke
    from e2e_session_continuity_ws import ROOT, check

SCOPES = ["runtime:read", "project:read", "project:write", "session:collaborate",
          "plugin:inspect", "plugin:invoke"]
MAX_HANDOFF_BYTES = 64 * 1024


def private_directory(path):
    path = Path(path).absolute()
    for parent in (path, *path.parents):
        if parent.is_symlink():
            raise ValueError("private state cannot traverse symlinks")
    path.mkdir(mode=0o700, parents=True, exist_ok=True)
    trace._private(path, True)
    return path


def write_private(path, value):
    raw = (json.dumps(value, ensure_ascii=False, sort_keys=True, indent=2) + "\n").encode()
    if len(raw) > MAX_HANDOFF_BYTES:
        raise ValueError("operator handoff exceeds bound")
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW, 0o600)
    with os.fdopen(fd, "wb") as handle:
        handle.write(raw)


def read_private(path):
    value = json.loads(trace._read(Path(path), MAX_HANDOFF_BYTES))
    if not isinstance(value, dict):
        raise ValueError("operator handoff must be an object")
    return value


def archive_capture(source, destination):
    """Retain only bounded private regular trace files, without following links."""
    source = Path(source)
    total, entries = 0, 0
    def copy(directory, target, depth):
        nonlocal total, entries
        if depth > 2:
            raise ValueError("capture directory depth exceeds bound")
        trace._private(directory, True)
        private_directory(target)
        for path in directory.iterdir():
            entries += 1
            if entries > 4096:
                raise ValueError("capture file count exceeds bound")
            if path.is_symlink():
                raise ValueError("capture contains symlink")
            if path.is_dir():
                copy(path, target / path.name, depth + 1)
            else:
                raw = trace._read(path, trace.MAX_INDEX_BYTES)
                total += len(raw)
                if total > 40 * 1024 * 1024:
                    raise ValueError("capture archive exceeds bound")
                fd = os.open(target / path.name, os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW, 0o600)
                with os.fdopen(fd, "wb") as handle:
                    handle.write(raw)
    copy(source, destination, 0)


def connection(state):
    path = state / "connection.json"
    if path.exists():
        value = read_private(path)
        if set(value) not in ({"port", "bootstrap"}, {"port", "bootstrap", "owner"},
                              {"port", "bootstrap", "owner", "username"}):
            raise ValueError("invalid private connection state")
        if type(value.get("port")) is not int or not 1024 <= value["port"] <= 65535:
            raise ValueError("invalid private port")
        if "username" in value and (not isinstance(value["username"], str)
                or re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_.-]{0,63}", value["username"]) is None):
            raise ValueError("invalid imported owner username")
        return value
    with socket.socket() as listener:
        listener.bind(("127.0.0.1", 0))
        port = listener.getsockname()[1]
    value = {"port": port, "bootstrap": secrets.token_urlsafe(32)}
    write_private(path, value)
    return value


def runtime_identity(bin_dir, source_revision, *, require_clean=False):
    if re.fullmatch(r"[0-9a-f]{40}", source_revision) is None:
        raise ValueError("source revision must be exact")
    builds = {}
    hashes = {}
    for name in ("webcodex-server", "webcodex-runner"):
        path = Path(bin_dir) / name
        raw = subprocess.run([str(path), "--version"], stdin=subprocess.DEVNULL,
            stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=10, check=True).stdout
        match = re.fullmatch(rb"[\w-]+ ([\w.+-]+) \(commit ([0-9a-f]+), dirty=(true|false), built_at=(\d+)\)\s*", raw)
        if match is None or not source_revision.startswith(match[2].decode()):
            raise ValueError("runtime source identity mismatch")
        builds[name] = {"version": match[1].decode(), "commit_prefix": match[2].decode(),
                        "dirty": match[3] == b"true", "built_at": int(match[4])}
        if require_clean and builds[name]["dirty"]:
            raise ValueError("formal model samples require clean runtime builds")
        digest = hashlib.sha256()
        with path.open("rb") as handle:
            for chunk in iter(lambda: handle.read(1024 * 1024), b""):
                digest.update(chunk)
        hashes[name] = digest.hexdigest()
    if builds["webcodex-server"] != builds["webcodex-runner"]:
        raise ValueError("Server and Runner builds differ")
    return {"build": builds["webcodex-server"], "binary_sha256": hashes}


class HostSample(InteractiveSmoke):
    def __init__(self, bin_dir, state, sample_root, workspace, capture_root, public_url=None):
        super().__init__(Path(bin_dir), sample_root)
        self.state, self.workspace, self.capture_root = state, Path(workspace), Path(capture_root)
        self.env = {key: value for key, value in self.env.items() if key in {
            "PATH", "SYSTEMROOT", "WINDIR", "PATHEXT", "TMP", "TEMP", "LANG",
            "XDG_CONFIG_HOME", "XDG_DATA_HOME", "XDG_STATE_HOME", "GIT_CONFIG_GLOBAL",
            "GIT_CONFIG_NOSYSTEM", "RUST_LOG"}}
        self.env.update(HOME=str(sample_root / "home"), XDG_CACHE_HOME=str(sample_root / "cache"))
        (sample_root / "home").mkdir()
        self.connection = connection(state)
        self.username = self.connection.get("username", "knowledge-owner")
        self.port, self.bootstrap = self.connection["port"], self.connection["bootstrap"]
        self.url = f"http://127.0.0.1:{self.port}"
        if public_url:
            parsed = urlsplit(public_url)
            if (parsed.scheme != "https" or not parsed.hostname or parsed.username or parsed.password
                    or parsed.query or parsed.fragment or parsed.path not in ("", "/")):
                raise ValueError("public URL must be a credential-free HTTPS origin")
            self.env.update(WEBCODEX_PUBLIC_URL=public_url.rstrip("/"),
                WEBCODEX_OAUTH2_ISSUER=public_url.rstrip("/"), WEBCODEX_OAUTH2_ENABLED="true")

    def start_server(self):
        env = self.env | {"WEBCODEX_ADDR": f"127.0.0.1:{self.port}",
            "WEBCODEX_DATA": str(self.state / "data"), "WEBCODEX_TOKEN": self.bootstrap,
            "WEBCODEX_TOOL_REQUEST_TRACE": "full",
            "WEBCODEX_TOOL_REQUEST_TRACE_DIR": str(self.capture_root),
            "WEBCODEX_TOOL_REQUEST_TRACE_MAX_TOTAL_BYTES": "33554432"}
        self.server = self.launch("webcodex-server", [], env)
        self.wait_ready()

    def prepare(self):
        self.start_server()
        if "owner" not in self.connection:
            check(self.post("/api/users/create", {"username": self.username}, self.bootstrap).get("success") is True,
                  "fixture account creation failed")
            self.connection["owner"] = self.pat(self.username, SCOPES)
            # This file is created by this driver; replace only the exact owned
            # connection state, never a caller-selected credential path.
            path = self.state / "connection.json"
            trace._read(path, MAX_HANDOFF_BYTES)
            temporary = self.state / ("connection-" + uuid.uuid4().hex + ".json")
            write_private(temporary, self.connection)
            os.replace(temporary, path)
        self.owner = self.connection["owner"]
        self.client_id = "knowledge-" + uuid.uuid4().hex[:16]
        agent = self.post("/api/agent-tokens/create", {"username": self.username,
            "client_id": self.client_id, "name": "knowledge-acceptance"}, self.bootstrap)
        check(isinstance(agent.get("token"), str), "fixture Runner enrollment failed")
        registry = self.root / "projects"
        registry.mkdir()
        (registry / "fixture.toml").write_text('id = "fixture"\npath = ' + json.dumps(str(self.workspace)) + '\n')
        settings = [f'server_url = {json.dumps(self.url)}', f'token = {json.dumps(agent["token"])}',
            f'client_id = {json.dumps(self.client_id)}', f'owner = {json.dumps(self.username)}',
            'transport = "websocket"', f'project_registry_dir = {json.dumps(str(registry))}',
            '[policy]', 'allow_cwd_anywhere = false', f'allowed_roots = {json.dumps([str(self.workspace)])}',
            '[[plugins.providers]]', 'id = "project-knowledge"', 'name = "Project Knowledge"',
            f'command = {json.dumps(sys.executable)}',
            f'args = {json.dumps(["-B", str(ROOT / "plugins/project-knowledge/plugin.py")])}',
            f'cwd = {json.dumps(str(self.workspace))}', 'timeout_secs = 30']
        config = self.root / "runner.toml"
        with config.open("x", encoding="utf-8") as handle:
            handle.write("\n".join(settings) + "\n")
        config.chmod(0o600)
        self.runner = self.launch("webcodex-runner", ["--config", str(config)], self.env)
        self.project = f"agent:{self.client_id}:fixture"
        self.wait_ready(self.project, self.owner)
        return self


def drive(args):
    state = private_directory(args.state_dir)
    lock = state / "active.lock"
    fd = os.open(lock, os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW, 0o600)
    os.close(fd)
    sample = None
    try:
        required = {}
        for key in ("WORKSPACE", "CASE_ID", "BASE_REVISION", "CASE_FINGERPRINT", "PROMPT", "DRIVER_RESULT",
                    "FIXTURE_COORDINATION", "TEMPORAL_TRACE_ROOT"):
            required[key] = os.environ["WEBCODEX_BENCH_" + key]
        if required["CASE_ID"] not in CASE_IDS or os.environ.get("WEBCODEX_BENCH_TARGET") != "knowledge_skill_disposable_fixture":
            raise ValueError("knowledge driver requires an admitted knowledge fixture")
        builds = runtime_identity(args.bin_dir, required["BASE_REVISION"], require_clean=True)
        model_record = read_private(args.model_config)
        if model_record.get("host") != "chatgpt_web":
            raise ValueError("model configuration must identify ChatGPT Web")
        config_digest = hashlib.sha256(json.dumps(model_record, sort_keys=True, separators=(",", ":")).encode()).hexdigest()
        sample_id = uuid.uuid4().hex
        parent = private_directory(state / "samples")
        sample_root = private_directory(parent / sample_id)
        sample = HostSample(args.bin_dir, state, sample_root, required["WORKSPACE"],
                            required["TEMPORAL_TRACE_ROOT"], args.public_url)
        sample.prepare()
        prompt = (f'This is sample {sample_id}, case {required["CASE_ID"]}. Start a fresh ChatGPT Web conversation. '
            f'Work only in the existing checkout at {required["WORKSPACE"]}, on Runner {sample.client_id}; '
            'bootstrap that exact path and retain the returned canonical Workflow Session identity. '
            'Record relevant tool calls to that exact Session. Report the canonical Session ID with your final JSON.\n\n'
            + required["PROMPT"])
        prompt_path = sample_root / "prompt.txt"
        with prompt_path.open("x", encoding="utf-8") as handle:
            handle.write(prompt + "\n")
        prompt_path.chmod(0o600)
        write_private(sample_root / "ready.json", {"sample_id": sample_id, "case_id": required["CASE_ID"],
            "loopback_url": sample.url, "project": sample.project, "runner": sample.client_id,
            "coordination": required["FIXTURE_COORDINATION"], "audit_db": str(state / "data/webcodex.db"),
            "case_fingerprint": required["CASE_FINGERPRINT"], "base_revision": required["BASE_REVISION"],
            "model_config_digest": config_digest, "runtime_identity": builds})
        deadline = time.monotonic() + 29 * 60
        submitted = sample_root / "submission.json"
        while not submitted.exists():
            check(sample.server.poll() is None and sample.runner.poll() is None, "sample service exited")
            check(time.monotonic() < deadline, "operator submission deadline exceeded")
            time.sleep(0.2)
        value = read_private(submitted)
        if set(value) != {"workflow_session_id", "answer"} or not isinstance(value["workflow_session_id"], str):
            raise ValueError("invalid operator submission")
        checkpoint = Path(required["FIXTURE_COORDINATION"]) / "advanced.json"
        if checkpoint.exists():
            write_private(sample_root / "checkpoint.json", read_private(checkpoint))
        sample.close()
        sample = None
        # Preserve private captures before the selection runner releases its
        # temporary resources. Published output never contains these payloads.
        archive_capture(required["TEMPORAL_TRACE_ROOT"], sample_root / "capture")
        receipt = {"status": "pass", "audit_db": str(state / "data/webcodex.db"),
            "workflow_session_id": value["workflow_session_id"], "answer": value["answer"],
            "host_config_digest": config_digest, "runtime_identity": builds}
        write_private(Path(required["DRIVER_RESULT"]), receipt)
        return 0
    finally:
        if sample is not None:
            sample.close()
        lock.unlink(missing_ok=True)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    run = commands.add_parser("drive")
    run.add_argument("--state-dir", type=Path, required=True)
    run.add_argument("--bin-dir", type=Path, required=True)
    run.add_argument("--model-config", type=Path, required=True)
    run.add_argument("--public-url")
    for name in ("submit", "checkpoint", "info"):
        item = commands.add_parser(name)
        item.add_argument("--sample-dir", type=Path, required=True)
        if name != "info":
            item.add_argument("--session", required=True)
        if name == "submit":
            item.add_argument("--answer-file", type=Path, required=True)
        if name == "checkpoint":
            item.add_argument("--trace-id", required=True)
    args = parser.parse_args(argv)
    os.umask(0o077)
    try:
        if args.command == "drive":
            return drive(args)
        ready = read_private(args.sample_dir / "ready.json")
        if args.command == "info":
            print(json.dumps(ready, ensure_ascii=False, indent=2))
        elif args.command == "submit":
            answer = read_private(args.answer_file)
            write_private(args.sample_dir / "submission.json", {"workflow_session_id": args.session, "answer": answer})
        else:
            if ready["case_id"] not in {"knowledge_source_update", "knowledge_skill_update"}:
                raise ValueError("case has no update checkpoint")
            write_private(Path(ready["coordination"]) / "advance-request.json", {
                "audit_db": ready["audit_db"], "workflow_session_id": args.session, "trace_id": args.trace_id})
        return 0
    except (OSError, ValueError, KeyError, AssertionError, subprocess.SubprocessError) as error:
        print("knowledge_host: " + type(error).__name__, file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
