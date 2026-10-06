//! Explicit installed Linux package identity. Absence of Desktop is never an
//! installation classifier. Queries are bounded, read-only and use literal argv.
use super::super::{InstallerTarget, PackageFlavor};
#[cfg(target_os = "linux")]
use super::super::{PackageFormat, RuntimePlatform};
#[cfg(target_os = "linux")]
use crate::process::CommandOutputExt;
use crate::RuntimeBinaries;
#[cfg(target_os = "linux")]
use std::{
    path::{Path, PathBuf},
    time::Duration,
};

#[cfg(target_os = "linux")]
fn query(program: &str, arguments: &[&std::ffi::OsStr]) -> Option<Vec<u8>> {
    let output = std::process::Command::new(program)
        .args(arguments)
        .output_with_limits(Duration::from_secs(2), 4096)
        .ok()?;
    output.status.success().then_some(output.stdout)
}
#[cfg(target_os = "linux")]
pub(crate) fn installed_package() -> Option<InstallerTarget> {
    let platform = RuntimePlatform::current()?;
    let mut found = Vec::new();
    for (name, flavor) in [
        ("webcodex", PackageFlavor::Full),
        ("webcodex-runtime", PackageFlavor::Runtime),
    ] {
        if query(
            "/usr/bin/dpkg-query",
            &[
                "-W".as_ref(),
                "-f=${db:Status-Status}".as_ref(),
                name.as_ref(),
            ],
        )
        .as_deref()
            == Some(b"installed")
        {
            found.push(InstallerTarget {
                platform,
                format: PackageFormat::Deb,
                flavor,
            });
        }
        if query(
            "/usr/bin/rpm",
            &["-q".as_ref(), "--quiet".as_ref(), name.as_ref()],
        )
        .is_some()
        {
            found.push(InstallerTarget {
                platform,
                format: PackageFormat::Rpm,
                flavor,
            });
        }
    }
    (found.len() == 1).then(|| found[0])
}
#[cfg(target_os = "linux")]
pub(super) fn provenance_path(target: InstallerTarget) -> Option<PathBuf> {
    let package = if target.flavor.is_full() {
        "webcodex"
    } else {
        "webcodex-runtime"
    };
    match target.format {
        PackageFormat::Deb => Some(PathBuf::from(format!(
            "/usr/share/doc/{package}/unified-source-manifest.json"
        ))),
        PackageFormat::Rpm => Some(PathBuf::from(format!(
            "/usr/share/{package}/unified-source-manifest.json"
        ))),
        _ => None,
    }
}
#[cfg(target_os = "linux")]
fn root_protected(path: &Path) -> bool {
    use std::os::unix::fs::MetadataExt;
    path.ancestors().all(|ancestor| {
        std::fs::symlink_metadata(ancestor).is_ok_and(|m| {
            !m.is_symlink()
                && m.uid() == 0
                && m.mode() & 0o022 == 0
                && (ancestor != path || m.is_file())
        })
    })
}
#[cfg(target_os = "linux")]
pub(crate) fn owned_layout(target: InstallerTarget, binaries: &RuntimeBinaries) -> bool {
    let Some(provenance) = provenance_path(target) else {
        return false;
    };
    let root = Path::new("/usr/lib/webcodex/webcodex-runtime");
    let paths = [&binaries.cli, &binaries.server, &binaries.runner];
    if paths
        .into_iter()
        .zip(super::super::RUNTIME_BINARIES)
        .any(|(p, n)| p != &root.join(n) || !root_protected(p))
        || !root_protected(&provenance)
    {
        return false;
    }
    let package = if target.flavor.is_full() {
        "webcodex"
    } else {
        "webcodex-runtime"
    };
    let desktop = target
        .flavor
        .is_full()
        .then(|| PathBuf::from("/usr/lib/webcodex/webcodex-desktop"));
    if desktop.as_ref().is_some_and(|p| !root_protected(p)) {
        return false;
    }
    let owned = paths
        .into_iter()
        .chain([&provenance])
        .chain(desktop.as_ref())
        .all(|path| match target.format {
            PackageFormat::Deb => query("/usr/bin/dpkg-query", &["-S".as_ref(), path.as_os_str()])
                .is_some_and(|bytes| {
                    std::str::from_utf8(&bytes)
                        .is_ok_and(|s| s.trim_end() == format!("{package}: {}", path.display()))
                }),
            PackageFormat::Rpm => {
                query(
                    "/usr/bin/rpm",
                    &[
                        "-qf".as_ref(),
                        "--qf".as_ref(),
                        "%{NAME}".as_ref(),
                        path.as_os_str(),
                    ],
                )
                .as_deref()
                    == Some(package.as_bytes())
            }
            _ => false,
        });
    owned
}
/// Runtime admission requires installed package ownership and fixed root-protected
/// destinations. Full's existing development path is unchanged, but a known
/// installed Runtime can never be prepared as Full.
pub(crate) fn verify_candidate_flavor(
    flavor: PackageFlavor,
    binaries: &RuntimeBinaries,
) -> crate::SetupResultValue<()> {
    let bad = || {
        crate::SetupDiagnostic { code: "upgrade_package_flavor".into(), message: "The candidate package flavor differs from the verified installed package; installation types cannot be converted by an update".into(), recovery: "Use the existing manual installation path for a different package flavor".into() }
    };
    #[cfg(target_os = "linux")]
    {
        let managed = binaries.cli == Path::new("/usr/lib/webcodex/webcodex-runtime/webcodex");
        if !flavor.is_full() || managed {
            let installed = installed_package().ok_or_else(bad)?;
            if installed.flavor != flavor || !owned_layout(installed, binaries) {
                return Err(bad());
            }
        }
        Ok(())
    }
    #[cfg(not(target_os = "linux"))]
    {
        let _ = binaries;
        if flavor.is_full() {
            Ok(())
        } else {
            Err(bad())
        }
    }
}

#[cfg(not(target_os = "linux"))]
pub(crate) fn installed_package() -> Option<InstallerTarget> {
    None
}
#[cfg(not(target_os = "linux"))]
pub(crate) fn owned_layout(_: InstallerTarget, _: &RuntimeBinaries) -> bool {
    false
}

/// Re-read package identity at the privileged effect boundary, including the
/// package manager. Saved receipts never authorize an installation conversion.
pub(crate) fn verify_installed_target(
    target: InstallerTarget,
    binaries: &RuntimeBinaries,
) -> crate::SetupResultValue<()> {
    if installed_target_matches(target, installed_package(), owned_layout(target, binaries)) {
        return Ok(());
    }
    Err(crate::SetupDiagnostic {
        code: "upgrade_package_ownership".into(),
        message: "The installed package identity or ownership changed before installation".into(),
        recovery: "Refresh the installation assessment; do not reuse this installer handoff".into(),
    })
}
fn installed_target_matches(
    expected: InstallerTarget,
    observed: Option<InstallerTarget>,
    owned: bool,
) -> bool {
    observed == Some(expected) && owned
}
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn changed_package_flavor_format_and_unknown_ownership_fail_closed() {
        let full = InstallerTarget::ALL[4];
        let runtime = InstallerTarget {
            flavor: PackageFlavor::Runtime,
            ..full
        };
        let rpm = InstallerTarget {
            format: super::super::super::PackageFormat::Rpm,
            ..runtime
        };
        assert!(installed_target_matches(runtime, Some(runtime), true));
        for observed in [None, Some(full), Some(rpm)] {
            assert!(!installed_target_matches(runtime, observed, true));
        }
        assert!(!installed_target_matches(runtime, Some(runtime), false));
    }
}
