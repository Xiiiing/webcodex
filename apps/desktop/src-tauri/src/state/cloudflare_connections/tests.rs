use super::*;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[test]
fn cloudflare_native_control_origin_rejects_remote_and_credential_routes() {
    for good in [
        "http://127.0.0.1:8787",
        "http://localhost:8787",
        "http://[::1]:8787",
    ] {
        assert!(validate_control_origin(good).is_ok());
    }
    for bad in [
        "https://public.example",
        "http://192.168.1.1",
        "http://user:secret@127.0.0.1:8787",
        "http://127.0.0.1/admin",
        "http://127.0.0.1?token=value",
        "http://127.0.0.1#fragment",
    ] {
        assert!(validate_control_origin(bad).is_err());
    }
}

#[test]
fn cloudflare_native_actions_require_selected_instance_and_secret_free_status() {
    assert!(serde_json::from_value::<CloudflareConnectionRequest>(
        serde_json::json!({"action":"start","profile_id":"profile","expected_revision":3})
    )
    .is_err());
    assert!(serde_json::from_value::<CloudflareConnectionRequest>(serde_json::json!({"action":"configure_oauth","profile_id":"profile","redirect_uri":"https://client.example/callback","scopes":["runtime:read"]})).is_err());
    let request:CloudflareConnectionRequest=serde_json::from_value(serde_json::json!({"action":"start","profile_id":"profile","server_instance_id":"selected-instance","expected_revision":3})).unwrap();
    assert_eq!(
        serde_json::to_value(request).unwrap()["server_instance_id"],
        "selected-instance"
    );
    let status:CloudflareConnectionStatus=serde_json::from_value(serde_json::json!({"profile_id":"profile","server_instance_id":"instance","process_generation":2,"lifecycle":"running","public_origin":"https://public.example","oauth_configured":true,"observed_authorization":false,"configured_revision":3,"applied_revision":3,"local_target":"http://127.0.0.1:1234","reason_code":null,"client_secret":"must-not-project"})).unwrap();
    let projected = serde_json::to_string(&status).unwrap();
    assert!(!projected.contains("client_secret"));
    assert!(!projected.contains("must-not-project"));
    assert!(!status.observed_authorization);
}

#[tokio::test]
async fn cloudflare_native_http_rejects_redirect_and_does_not_expose_response_body() {
    let listener = tokio::net::TcpListener::bind("127.0.0.1:0").await.unwrap();
    let address = listener.local_addr().unwrap();
    let fixture = tokio::spawn(async move {
        let (mut socket, _) = listener.accept().await.unwrap();
        let mut request = vec![0; 8192];
        let read = socket.read(&mut request).await.unwrap();
        let request = String::from_utf8_lossy(&request[..read]);
        assert!(request
            .to_ascii_lowercase()
            .contains("authorization: bearer test-private-bootstrap"));
        socket.write_all(b"HTTP/1.1 302 Found\r\nLocation: http://127.0.0.1:1/leak\r\nContent-Length: 21\r\nConnection: close\r\n\r\nprivate-response-body").await.unwrap();
    });
    let client = reqwest::Client::builder()
        .no_proxy()
        .redirect(reqwest::redirect::Policy::none())
        .timeout(Duration::from_secs(2))
        .build()
        .unwrap();
    let result = control_response(
        &client,
        &format!("http://{address}/api/connections/cloudflare"),
        &Secret::new("test-private-bootstrap".into()),
        &CloudflareConnectionRequest::Status {
            profile_id: "profile".into(),
        },
    )
    .await;
    let error = serde_json::to_string(&result.unwrap_err()).unwrap();
    assert!(!error.contains("private-response-body"));
    assert!(!error.contains("test-private-bootstrap"));
    fixture.await.unwrap();
}

#[tokio::test]
async fn cloudflare_native_http_bounds_unknown_length_response() {
    let listener = tokio::net::TcpListener::bind("127.0.0.1:0").await.unwrap();
    let address = listener.local_addr().unwrap();
    let fixture = tokio::spawn(async move {
        let (mut socket, _) = listener.accept().await.unwrap();
        let mut request = [0; 8192];
        socket.read(&mut request).await.unwrap();
        socket
            .write_all(b"HTTP/1.0 200 OK\r\nConnection: close\r\n\r\n")
            .await
            .unwrap();
        socket.write_all(&vec![b'x'; 40 * 1024]).await.unwrap();
    });
    let client = reqwest::Client::builder()
        .no_proxy()
        .redirect(reqwest::redirect::Policy::none())
        .timeout(Duration::from_secs(2))
        .build()
        .unwrap();
    assert!(control_response(
        &client,
        &format!("http://{address}/api/connections/cloudflare"),
        &Secret::new("test-private-bootstrap".into()),
        &CloudflareConnectionRequest::Status {
            profile_id: "profile".into()
        }
    )
    .await
    .is_err());
    fixture.await.unwrap();
}
