use super::*;
use crate::test_support::{seed_user, test_config_oauth2, test_db};
use serde_json::json;
use std::os::unix::fs::PermissionsExt;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

fn private_file(path: &std::path::Path, bytes: &[u8]) {
    std::fs::create_dir_all(path.parent().unwrap()).unwrap();
    for parent in path
        .ancestors()
        .skip(1)
        .take_while(|path| path.starts_with(std::env::temp_dir()) && *path != std::env::temp_dir())
    {
        std::fs::set_permissions(parent, std::fs::Permissions::from_mode(0o700)).unwrap();
    }
    std::fs::write(path, bytes).unwrap();
    std::fs::set_permissions(path, std::fs::Permissions::from_mode(0o600)).unwrap();
}

struct Fixture {
    _dir: tempfile::TempDir,
    _db_dir: tempfile::TempDir,
    control: Arc<CloudflareControl>,
}
impl Fixture {
    fn new() -> Self {
        let dir = tempfile::tempdir().unwrap();
        let root = dir.path().join("environment");
        let store = EnvironmentStore::open(root.clone()).unwrap();
        let environment = json!({"schema_version":1,"environment_id":"fixture","username":"owner","runner_client_id":"runner","projects":[],"configured":true,
            "request":{"service_scope":"user","mode":{"kind":"user_create","listen":"127.0.0.1:8888"},"server_url":"http://127.0.0.1:8888","project":null,"runner":true,
            "account":{"name":"fixture","identity":"1000","home":dir.path()},"binaries":{"cli":"/fixture/cli","server":"/fixture/server","runner":"/fixture/runner"}}});
        store
            .save_environment(&serde_json::from_value(environment).unwrap())
            .unwrap();
        private_file(
            &root.join("server/webcodex.env"),
            b"WEBCODEX_ADDR=127.0.0.1:8888\nWEBCODEX_TOKEN=private-bootstrap\n",
        );
        private_file(
            &root.join("server/cloudflare-ingress.json"),
            br#"{"port":8889}"#,
        );
        private_file(&root.join("tunnel.json"), br#"[{"profile_id":"quick","configuration_id":"00000000-0000-4000-8000-000000000001","provider":{"kind":"cloudflare_quick"},"name":"Quick","host_mode":"embedded","autostart":false,"revision":1,"runtime_revision":1,"installed":false,"started":false}]"#);
        private_file(
            &root.join("server/tunnels/quick/webcodex.env"),
            b"WEBCODEX_TUNNEL_PROFILE_ID=quick\nWEBCODEX_TUNNEL_PROVIDER=cloudflare_quick\n",
        );
        private_file(&root.join("server/tunnels/quick/readiness.json"), b"{}");
        let (_db_dir, db) = test_db();
        seed_user(&db, "owner");
        Self {
            _dir: dir,
            _db_dir,
            control: Arc::new(CloudflareControl {
                root,
                ingress_port: 8889,
                db,
                registry: Arc::new(crate::RunnerRegistry::default()),
                config: test_config_oauth2(Some("private-bootstrap")),
                instance_id: "server-one".into(),
                generation: std::sync::atomic::AtomicI64::new(0),
                attempt: Mutex::new(None),
            }),
        }
    }
}

#[test]
fn prepare_stop_restart_fences_profile_revision_instance_and_generation() {
    let fixture = Fixture::new();
    let control = fixture.control;
    assert!(matches!(
        control.prepare("quick", 2, false),
        Err("cloudflare_revision_conflict")
    ));
    assert!(matches!(
        control.prepare("quick", 1, true),
        Err("cloudflare_owner_conflict")
    ));
    let first = control.prepare("quick", 1, false).unwrap();
    assert!(matches!(
        control.prepare("quick", 1, false),
        Err("cloudflare_already_active")
    ));
    assert!(control
        .stop("quick", "server-other", first.process_generation, None)
        .is_err());
    assert!(control
        .stop("quick", "server-one", first.process_generation + 1, None)
        .is_err());
    control
        .stop("quick", "server-one", first.process_generation, None)
        .unwrap();
    let second = control.prepare("quick", 1, false).unwrap();
    assert!(second.process_generation > first.process_generation);
    assert_ne!(second.probe_nonce, first.probe_nonce);
    assert!(control
        .stop("quick", "server-one", first.process_generation, None)
        .is_err());
    assert_eq!(control.status("quick").unwrap().lifecycle, "starting");
    control
        .stop("quick", "server-one", second.process_generation, None)
        .unwrap();
    assert!(control.status("quick").unwrap().public_origin.is_none());
}

#[test]
fn oauth_handoff_is_once_and_replacement_revokes_previous_client() {
    let fixture = Fixture::new();
    let control = fixture.control;
    control.prepare("quick", 1, false).unwrap();
    let entry = control
        .db
        .get_public_ingress_entry_for_profile("quick")
        .unwrap()
        .unwrap();
    let entry = control
        .db
        .finalize_public_ingress_origin(&entry.fence(), "https://fixture.trycloudflare.com")
        .unwrap()
        .unwrap();
    assert!(control
        .db
        .set_public_ingress_admission(&entry.fence(), true)
        .unwrap());
    let first = control
        .provision_oauth("quick", "https://client.example/callback", vec![], false)
        .unwrap();
    assert!(first["client_secret"].as_str().is_some());
    let repeated = control
        .provision_oauth("quick", "https://client.example/callback", vec![], false)
        .unwrap();
    assert!(repeated["client_secret"].is_null());
    assert_eq!(repeated["client_id"], first["client_id"]);
    assert!(control
        .provision_oauth("quick", "https://other.example/callback", vec![], false)
        .is_err());
    let replacement = control
        .provision_oauth("quick", "https://other.example/callback", vec![], true)
        .unwrap();
    assert_ne!(replacement["client_id"], first["client_id"]);
    assert!(control
        .db
        .get_oauth_client_by_client_id(first["client_id"].as_str().unwrap())
        .unwrap()
        .is_none());
    assert!(control
        .provision_oauth(
            "quick",
            "https://other.example/callback",
            vec!["admin".into()],
            true
        )
        .is_err());
}

async fn probe_response(body: Vec<u8>, prepared: &PreparedIngress) -> Result<bool, &'static str> {
    let listener = tokio::net::TcpListener::bind("127.0.0.1:0").await.unwrap();
    let addr = listener.local_addr().unwrap();
    let task = tokio::spawn(async move {
        let (mut stream, _) = listener.accept().await.unwrap();
        let mut request = [0u8; 2048];
        let _ = stream.read(&mut request).await.unwrap();
        let header = format!(
            "HTTP/1.1 200 OK\r\nContent-Length: {}\r\nConnection: close\r\n\r\n",
            body.len()
        );
        stream.write_all(header.as_bytes()).await.unwrap();
        let _ = stream.write_all(&body).await;
    });
    let client = reqwest::Client::builder()
        .no_proxy()
        .timeout(Duration::from_secs(2))
        .build()
        .unwrap();
    let result = forwarding_matches(&client, &format!("http://{addr}"), prepared).await;
    task.await.unwrap();
    result
}

#[tokio::test]
async fn probe_requires_exact_server_profile_generation_and_nonce_and_bounds_body() {
    let prepared = PreparedIngress {
        profile_id: "quick".into(),
        server_instance_id: "server".into(),
        process_generation: 3,
        local_target: String::new(),
        probe_nonce: "random-nonce".into(),
    };
    assert_eq!(
        probe_response(serde_json::to_vec(&prepared).unwrap(), &prepared).await,
        Ok(true)
    );
    for field in [
        "profile_id",
        "server_instance_id",
        "process_generation",
        "probe_nonce",
    ] {
        let mut value = serde_json::to_value(&prepared).unwrap();
        value[field] = if field == "process_generation" {
            json!(2)
        } else {
            json!("stale")
        };
        assert_eq!(
            probe_response(serde_json::to_vec(&value).unwrap(), &prepared).await,
            Err("cloudflare_forwarding_mismatch")
        );
    }
    assert_eq!(
        probe_response(vec![b'x'; 4097], &prepared).await,
        Err("cloudflare_forwarding_mismatch")
    );
}

#[tokio::test]
async fn missing_runner_identity_requires_explicit_repair() {
    let fixture = Fixture::new();
    let mut profile = fixture.control.profile("quick").unwrap();
    profile.runner_client_id = None;
    assert_eq!(
        fixture.control.verify_owner(&profile).await,
        Err("cloudflare_identity_repair_required")
    );
}

#[tokio::test]
async fn incorrect_or_missing_runner_owner_fails_without_rebinding_it() {
    for owner in [None, Some("other-owner")] {
        let fixture = Fixture::new();
        let registration = serde_json::from_value(json!({"client_id":"runner","agent_instance_id":"instance", "agent_protocol_generation":2,"owner":owner,"capabilities":{"shell":true}})).unwrap();
        let registration = crate::test_support::current_runner_registration(registration);
        let access = webcodex_runner_registry::RunnerAccess {
            global_visibility: false,
            owner_bypass: false,
            username: owner.map(str::to_owned),
            group: None,
        };
        fixture
            .control
            .registry
            .register_with_auth(registration, owner.map(|_| &access))
            .await
            .unwrap();
        assert_eq!(
            fixture
                .control
                .verify_owner(&fixture.control.profile("quick").unwrap())
                .await,
            Err("cloudflare_owner_repair_required")
        );
        assert_eq!(
            fixture.control.registry.list_runners_for_auth(None).await[0]
                .owner
                .as_deref(),
            owner
        );
    }
}

#[handler]
async fn effective_public_configuration(depot: &mut Depot, res: &mut Response) {
    let config = crate::auth::get_config(depot).unwrap();
    res.render(Json(json!({"issuer":config.oauth2.issuer,"pkce":config.oauth2.require_pkce,"bridge":config.oauth2.shared_key_bridge_enabled})));
}

#[tokio::test]
async fn public_snapshot_enforces_pkce_and_origin_without_changing_private_config() {
    use salvo::test::{ResponseExt, TestClient};
    let mut fixture = Fixture::new();
    let mut config = (*fixture.control.config).clone();
    config.oauth2.require_pkce = false;
    config.oauth2.issuer = Some("https://private.example".into());
    config.oauth2.shared_key_bridge_enabled = true;
    Arc::get_mut(&mut fixture.control).unwrap().config = Arc::new(config);
    fixture.control.prepare("quick", 1, false).unwrap();
    let entry = fixture
        .control
        .db
        .get_public_ingress_entry_for_profile("quick")
        .unwrap()
        .unwrap();
    let entry = fixture
        .control
        .db
        .finalize_public_ingress_origin(&entry.fence(), "https://fixture.trycloudflare.com")
        .unwrap()
        .unwrap();
    fixture
        .control
        .db
        .set_public_ingress_admission(&entry.fence(), true)
        .unwrap();
    let service = Service::new(
        Router::new()
            .hoop(affix_state::inject(fixture.control.clone()))
            .hoop(PublicSnapshot)
            .get(effective_public_configuration),
    );
    let mut response = TestClient::get("https://fixture.trycloudflare.com/")
        .send(&service)
        .await;
    assert_eq!(response.status_code, Some(StatusCode::OK));
    let body: serde_json::Value = response.take_json().await.unwrap();
    assert_eq!(
        body,
        json!({"issuer":"https://fixture.trycloudflare.com","pkce":true,"bridge":false})
    );
    assert!(!fixture.control.config.oauth2.require_pkce);
    assert_eq!(
        fixture.control.config.oauth2.issuer.as_deref(),
        Some("https://private.example")
    );
}

#[tokio::test]
async fn configured_listener_port_conflict_is_explicit_and_never_reallocated() {
    let fixture = Fixture::new();
    let occupied = tokio::net::TcpListener::bind("127.0.0.1:0").await.unwrap();
    let port = occupied.local_addr().unwrap().port();
    private_file(
        &fixture.control.root.join("server/cloudflare-ingress.json"),
        serde_json::to_string(&json!({"port":port}))
            .unwrap()
            .as_bytes(),
    );
    let result = CloudflareOwner::from_root(
        fixture.control.root.clone(),
        fixture.control.config.clone(),
        fixture.control.db.clone(),
        fixture.control.registry.clone(),
        Arc::new(crate::tool_runtime::ToolRuntime::new_for_tests()),
        Arc::new(crate::oauth_http::AuthorizeSessionStore::new()),
        Arc::new(crate::server_shutdown::ShutdownCoordinator::default()),
    )
    .await;
    assert!(result.is_err());
    assert_eq!(
        webcodex_environment::cloudflare_ingress_port(
            &EnvironmentStore::open(fixture.control.root.clone()).unwrap()
        )
        .unwrap(),
        Some(port)
    );
}
