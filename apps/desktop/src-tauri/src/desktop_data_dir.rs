use crate::error::{DesktopError, DesktopResult};
#[cfg(all(test, windows))]
use std::path::Path;
use std::path::PathBuf;

pub use webcodex_environment::unified_update::DESKTOP_DATA_DIR_ENV;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DesktopDataDirSource {
    Tauri,
    Environment,
}

impl DesktopDataDirSource {
    pub fn label(self) -> &'static str {
        match self {
            Self::Tauri => "tauri",
            Self::Environment => "environment",
        }
    }
}

#[derive(Debug, Clone)]
pub struct DesktopDataDir {
    pub effective: PathBuf,
    pub source: DesktopDataDirSource,
    pub physical_resolution_changed: bool,
}

pub fn resolve(default: PathBuf) -> DesktopResult<DesktopDataDir> {
    let override_value = std::env::var_os(DESKTOP_DATA_DIR_ENV);
    if override_value
        .as_ref()
        .is_some_and(|value| !PathBuf::from(value).is_absolute())
    {
        return Err(DesktopError::new(
            "desktop_data_dir_invalid",
            format!("{DESKTOP_DATA_DIR_ENV} must be an absolute path"),
            "Set the override to an absolute filesystem path or remove it.",
        ));
    }
    let resolved = webcodex_environment::unified_update::desktop_data_dir::resolve_with_override(
        default,
        override_value,
    )
    .map_err(|_| {
        DesktopError::new(
            "desktop_data_dir_unavailable",
            "Desktop cannot resolve its app-data directory",
            "Check the Desktop app-data location and local filesystem permissions, then retry.",
        )
    })?;
    Ok(DesktopDataDir { effective: resolved.effective, source: match resolved.source {
        webcodex_environment::unified_update::desktop_data_dir::DesktopDataDirSource::Tauri => DesktopDataDirSource::Tauri,
        webcodex_environment::unified_update::desktop_data_dir::DesktopDataDirSource::Environment => DesktopDataDirSource::Environment,
    }, physical_resolution_changed: resolved.physical_resolution_changed })
}

#[cfg(all(test, windows))]
fn resolve_with_override(
    default: PathBuf,
    override_value: Option<std::ffi::OsString>,
) -> DesktopResult<DesktopDataDir> {
    let resolved = webcodex_environment::unified_update::desktop_data_dir::resolve_with_override(
        default,
        override_value,
    )
    .map_err(|_| {
        DesktopError::new(
            "desktop_data_dir_invalid",
            "Invalid app-data directory",
            "Use an absolute app-data directory.",
        )
    })?;
    Ok(DesktopDataDir { effective: resolved.effective, source: if matches!(resolved.source, webcodex_environment::unified_update::desktop_data_dir::DesktopDataDirSource::Environment) { DesktopDataDirSource::Environment } else { DesktopDataDirSource::Tauri }, physical_resolution_changed: resolved.physical_resolution_changed })
}
#[cfg(all(test, windows))]
fn resolve_physical_path(path: &Path) -> DesktopResult<PathBuf> {
    resolve_with_override(path.to_path_buf(), None).map(|d| d.effective)
}

#[cfg(all(test, windows))]
mod tests {
    use super::*;
    use std::process::Command;

    fn create_junction(link: &Path, target: &Path) {
        let status = Command::new("cmd")
            .args(["/C", "mklink", "/J"])
            .arg(link)
            .arg(target)
            .status()
            .expect("launch mklink");
        assert!(status.success(), "mklink /J failed with {status}");
    }

    #[test]
    fn explicit_override_is_distinct_and_relative_override_fails_closed() {
        let temp = tempfile::tempdir().unwrap();
        let default = temp.path().join("default");
        let override_path = temp.path().join("override");

        let resolved =
            resolve_with_override(default, Some(override_path.clone().into_os_string())).unwrap();
        assert_eq!(resolved.source, DesktopDataDirSource::Environment);
        let expected =
            normalize_windows_canonical_path(temp.path().canonicalize().unwrap()).join("override");
        assert!(webcodex_runner_config::paths::paths_equal(
            &resolved.effective,
            &expected
        ));

        let error = resolve_with_override(
            temp.path().join("default"),
            Some(std::ffi::OsString::from("relative-data-root")),
        )
        .unwrap_err();
        assert_eq!(error.code, "desktop_data_dir_invalid");
    }

    #[test]
    fn final_desktop_data_root_junction_is_rejected_instead_of_canonicalized_away() {
        let temp = tempfile::tempdir().unwrap();
        let parent = temp.path().join("parent");
        let outside = temp.path().join("outside");
        let data_root = parent.join("WebCodex");
        std::fs::create_dir_all(&parent).unwrap();
        std::fs::create_dir_all(&outside).unwrap();
        create_junction(&data_root, &outside);

        let error = resolve_physical_path(&data_root).unwrap_err();
        assert_eq!(error.code, "desktop_data_dir_unavailable");
        assert!(error.message.contains("reparse point"));
    }

    #[test]
    fn ordinary_existing_ancestor_keeps_equivalent_path_and_appends_missing_tail() {
        let temp = tempfile::tempdir().unwrap();
        let logical = temp.path().join("missing").join("nested");
        let resolved = resolve_physical_path(&logical).unwrap();
        let expected = normalize_windows_canonical_path(temp.path().canonicalize().unwrap())
            .join("missing")
            .join("nested");
        assert!(webcodex_runner_config::paths::paths_equal(
            &resolved, &expected
        ));
    }

    #[test]
    fn ancestor_junction_resolves_to_physical_target_with_missing_tail() {
        let temp = tempfile::tempdir().unwrap();
        let physical = temp.path().join("physical");
        let logical_root = temp.path().join("logical");
        std::fs::create_dir(&physical).unwrap();
        create_junction(&logical_root, &physical);

        let logical = logical_root.join("AppData").join("Local").join("WebCodex");
        let resolved = resolve_physical_path(&logical).unwrap();
        let expected = normalize_windows_canonical_path(physical.canonicalize().unwrap())
            .join("AppData")
            .join("Local")
            .join("WebCodex");
        assert!(webcodex_runner_config::paths::paths_equal(
            &resolved, &expected
        ));
        assert!(!webcodex_runner_config::paths::paths_equal(
            &resolved, &logical
        ));
    }

    #[test]
    fn dangling_junction_ancestor_fails_closed_instead_of_becoming_missing_tail() {
        let temp = tempfile::tempdir().unwrap();
        let target = temp.path().join("target");
        let junction = temp.path().join("junction");
        std::fs::create_dir_all(&target).unwrap();
        create_junction(&junction, &target);
        std::fs::remove_dir(&target).unwrap();

        let logical = junction.join("AppData").join("Local").join("WebCodex");
        let error = resolve_physical_path(&logical).unwrap_err();
        assert_eq!(error.code, "desktop_data_dir_unavailable");
    }

    #[test]
    fn nested_junctions_resolve_before_reappending_missing_tail() {
        let temp = tempfile::tempdir().unwrap();
        let physical = temp.path().join("physical");
        let first = temp.path().join("first");
        let second_target = physical.join("profile");
        let second = physical.join("redirected-profile");
        std::fs::create_dir_all(&second_target).unwrap();
        create_junction(&first, &physical);
        create_junction(&second, &second_target);

        let logical = first
            .join("redirected-profile")
            .join("AppData")
            .join("Local")
            .join("WebCodex");
        let resolved = resolve_physical_path(&logical).unwrap();
        let expected = normalize_windows_canonical_path(second_target.canonicalize().unwrap())
            .join("AppData")
            .join("Local")
            .join("WebCodex");
        assert!(webcodex_runner_config::paths::paths_equal(
            &resolved, &expected
        ));
    }

    #[test]
    fn local_runtime_paths_are_derived_from_the_effective_physical_root() {
        let temp = tempfile::tempdir().unwrap();
        let physical = temp.path().join("physical");
        let logical_root = temp.path().join("logical");
        std::fs::create_dir(&physical).unwrap();
        create_junction(&logical_root, &physical);

        let effective = resolve_physical_path(&logical_root.join("WebCodex")).unwrap();
        let (env_file, server_data) = crate::state::local_runtime_paths(&effective);
        let expected_runtime_root = effective.join("runtime").join("local");
        assert!(webcodex_runner_config::paths::paths_equal(
            &env_file,
            &expected_runtime_root.join("webcodex.env")
        ));
        assert!(webcodex_runner_config::paths::paths_equal(
            &server_data,
            &expected_runtime_root.join("data")
        ));
    }
}
