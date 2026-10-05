use super::{UpdateError, UpdateResult};
use std::path::{Path, PathBuf};

pub const DESKTOP_DATA_DIR_ENV: &str = "WEBCODEX_DESKTOP_DATA_DIR";

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

pub fn resolve(default: PathBuf) -> UpdateResult<DesktopDataDir> {
    resolve_with_override(default, std::env::var_os(DESKTOP_DATA_DIR_ENV))
}

pub fn resolve_with_override(
    default: PathBuf,
    override_value: Option<std::ffi::OsString>,
) -> UpdateResult<DesktopDataDir> {
    let (logical, source) = match override_value {
        Some(value) => {
            let path = PathBuf::from(value);
            if !path.is_absolute() {
                return Err(UpdateError::CacheUnavailable);
            }
            (path, DesktopDataDirSource::Environment)
        }
        None => (default, DesktopDataDirSource::Tauri),
    };

    let effective = resolve_physical_path(&logical)?;
    let physical_resolution_changed =
        !webcodex_runner_config::paths::paths_equal(&logical, &effective);
    Ok(DesktopDataDir {
        effective,
        source,
        physical_resolution_changed,
    })
}
#[cfg(windows)]
fn resolve_physical_path(path: &Path) -> UpdateResult<PathBuf> {
    if !path.is_absolute() {
        return Err(invalid_data_dir(
            path,
            "Desktop data directory is not absolute",
        ));
    }

    // Resolve only ancestors, not the final Desktop-owned directory itself.
    // This is the important security boundary: a redirected Windows profile or
    // LocalAppData ancestor may legitimately be a Junction, but an existing
    // WebCodex data root that was replaced with a Junction/symlink must remain
    // visible to the credential-path safety checks instead of being
    // canonicalized away here.
    let leaf = path.file_name().ok_or_else(|| {
        invalid_data_dir(
            path,
            "Desktop data directory must have an application-owned final component",
        )
    })?;
    let parent = path
        .parent()
        .ok_or_else(|| invalid_data_dir(path, "Desktop data directory has no parent directory"))?;

    let mut resolved_parent = resolve_existing_ancestor(parent, path)?;
    resolved_parent.push(leaf);
    validate_effective_root(&resolved_parent, path)?;
    Ok(resolved_parent)
}

#[cfg(windows)]
fn resolve_existing_ancestor(path: &Path, original: &Path) -> UpdateResult<PathBuf> {
    let mut existing = path.to_path_buf();
    let mut tail = Vec::new();
    loop {
        match std::fs::symlink_metadata(&existing) {
            Ok(_) => break,
            Err(error) if error.kind() == std::io::ErrorKind::NotFound => {
                let name = existing.file_name().ok_or_else(|| {
                    invalid_data_dir(original, "Desktop data directory has no existing ancestor")
                })?;
                tail.push(name.to_os_string());
                if !existing.pop() {
                    return Err(invalid_data_dir(
                        original,
                        "Desktop data directory has no existing ancestor",
                    ));
                }
            }
            Err(_) => {
                return Err(invalid_data_dir(
                    original,
                    "Desktop cannot inspect its app-data directory",
                ))
            }
        }
    }

    let metadata = std::fs::metadata(&existing)
        .map_err(|_| invalid_data_dir(original, "Desktop cannot inspect its app-data directory"))?;
    if !metadata.is_dir() {
        return Err(invalid_data_dir(
            original,
            "Desktop data directory resolves through a non-directory ancestor",
        ));
    }

    let mut resolved = std::fs::canonicalize(&existing)
        .map_err(|_| invalid_data_dir(original, "Desktop cannot resolve its app-data directory"))?;
    resolved = normalize_windows_canonical_path(resolved);
    for component in tail.iter().rev() {
        resolved.push(component);
    }
    Ok(resolved)
}

#[cfg(windows)]
fn validate_effective_root(path: &Path, original: &Path) -> UpdateResult<()> {
    match std::fs::symlink_metadata(path) {
        Ok(metadata) if metadata.is_symlink() => Err(invalid_data_dir(
            original,
            "Desktop data directory itself is a reparse point",
        )),
        Ok(metadata) if metadata.is_dir() => Ok(()),
        Ok(_) => Err(invalid_data_dir(
            original,
            "Desktop data directory is not a directory",
        )),
        Err(error) if error.kind() == std::io::ErrorKind::NotFound => Ok(()),
        Err(_) => Err(invalid_data_dir(
            original,
            "Desktop cannot inspect its app-data directory",
        )),
    }
}
#[cfg(not(windows))]
fn resolve_physical_path(path: &Path) -> UpdateResult<PathBuf> {
    if !path.is_absolute() {
        return Err(invalid_data_dir(
            path,
            "Desktop data directory is not absolute",
        ));
    }
    Ok(path.to_path_buf())
}

#[cfg(windows)]
fn normalize_windows_canonical_path(path: PathBuf) -> PathBuf {
    let value = path.to_string_lossy();
    if let Some(rest) = value.strip_prefix(r"\?\UNC\") {
        return PathBuf::from(format!(r"\\{rest}"));
    }
    if let Some(rest) = value.strip_prefix(r"\?\") {
        let bytes = rest.as_bytes();
        if bytes.len() >= 3
            && bytes[0].is_ascii_alphabetic()
            && bytes[1] == b':'
            && matches!(bytes[2], b'\\' | b'/')
        {
            return PathBuf::from(rest);
        }
    }
    path
}

fn invalid_data_dir(_: &Path, _: &'static str) -> UpdateError {
    UpdateError::CacheUnavailable
}
pub fn default_desktop_data_dir() -> UpdateResult<PathBuf> {
    let default = dirs::data_local_dir()
        .ok_or(UpdateError::CacheUnavailable)?
        .join("dev.webcodex.desktop");
    resolve(default).map(|dir| dir.effective)
}
