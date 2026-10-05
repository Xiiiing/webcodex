# First Run and device invitations

This first-round change improves Desktop onboarding using the existing
Environment, pairing and native service lifecycle. It does not change their
authorization, configuration format, credential issuance or ownership rules.

## Source inventory and gaps

At upstream `390b7bbe`, FirstRun already supplies an explicit Runner role,
protected pairing input, saved enrollment reuse and setup progress. Create/Join
support an empty initial Project; Environment add-project reuses the saved Runner.
The missing presentation is two ordinary primary/join paths, advanced alternatives,
and optional initial directory selection.

NativeEnvironment::invite already checks the saved local Server environment and
upgrade exclusion, and invokes the existing Server pairing authorization. It
issues a ten-minute single-use code. Desktop needs only a target-bound IPC and
explicit Add device dialog. ProjectsPanel/RunnerDevices already show authorized
devices and their Projects with exact identities.

## Boundaries

Ordinary new Create means Server plus local Runner; ordinary Join means an
additional Runner. Empty Projects do not disable the Runner. Server-only,
viewer-only and temporary Quick Share remain advanced options. Saved environments
retain their roles. Tunnel setup continues through the existing Connection UI.

Invitations are transient responses, never Desktop preferences or state. User
input for the advertised Server URL is instruction text, not an authorization
target. No firewall, listener or service is changed. Core's invitation result
contains only a code: ten-minute validity is guidance, not an exact server expiry
or proof of redemption. Device connection is observed separately through the
existing authorized fleet view. Failed/uncertain requests are never retried
automatically.

Configuration inventory/backup, update UX, runtime packages and native installer
acceptance belong to later independently reviewed rounds. Automated UI/adapter
tests and source builds do not establish native installation, logout, reboot,
upgrade or rollback acceptance.
