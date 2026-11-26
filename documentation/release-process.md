# Release process

Publishing to npm is CI-driven, triggered by pushing a version tag - not a local `npm publish` anymore.

## The flow

1. Locally, run `npm run release` (`npm test && npm run build && changelogen --release && git push --follow-tags`). `changelogen` reads conventional commits since the last tag to pick the version bump, updates `CHANGELOG.md`, bumps `package.json`'s `version`, commits, and creates a `vX.Y.Z` git tag. The script then pushes both the commit and that tag.
2. The tag push triggers `.github/workflows/release.yml` (`on: push: tags: ['v*']`), which checks out the tagged commit, installs, builds, runs the test suite again (an independent, authoritative re-check - not just trusting the local run), verifies the tag name exactly matches `package.json`'s version (a guard against ever publishing the wrong thing if a stray tag is pushed by hand), and only then runs `npm publish`.

**Why this exists**: before this, the same local `release` script ended with `npm publish` itself - a version could be bumped/tagged/committed locally without the publish step actually completing (or without ever running `npm run release` at all after a hand-edited version bump), and nothing would notice. That happened for real: this package was hand-bumped for `EVENTS.UNSUBSCRIBE` but never actually published - only surfaced as a confusing type error in `buzzcasting-storage`'s CI (a downstream consumer expecting the new type). Moving the actual `npm publish` into CI, gated on a real tag push, means "the tag exists on GitHub" and "the version is live on npm" can no longer silently drift apart.

## Authentication: npm Trusted Publishing (OIDC)

`release.yml` has `permissions: id-token: write` and no `NODE_AUTH_TOKEN`/`NPM_TOKEN` anywhere - it authenticates via npm's [Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) feature, which trusts GitHub Actions' own short-lived OIDC identity for this specific repo + workflow file instead of a stored secret. This requires a one-time manual setup on npmjs.com (package Settings → Trusted Publisher) linking:

- Organization/user: `TouchFlows`
- Repository: `buzzcasting-utils`
- Workflow filename: `release.yml`
- No environment required

**Important**: npm's Trusted Publisher config lets you restrict a linked workflow to `npm stage publish` only, or also allow direct `npm publish` (the default changed for configurations created after 2026-09-03). This workflow runs plain `npm publish`, so direct publish must be permitted on the Trusted Publisher entry, or every release run will fail at the publish step with a permissions error.

This link was configured on npmjs.com on 2026-09-11 (found under the package's own Settings/Access page, not account-level settings). If `release.yml` ever fails with an auth/permission error and nothing else changed, check that link first - it's the one piece of this that isn't in version control and can go stale (e.g. after a package transfer, or if the workflow file is ever renamed). The publish leg is no longer untested: `v1.14.3` and `v1.14.4` (both 2026-11-26) went through `release.yml` end to end, `npm publish` succeeded with a signed provenance statement, and the registry served each version a minute or so after the run finished.

**Check the tag does not already exist before tagging.** `git push --follow-tags` silently skips a tag the remote already has, so a stray tag from an earlier attempt (or a hand-made one) means the release commit is pushed and no workflow runs at all - that happened on `v1.14.3`, where a pre-existing tag pointed at the previous release's commit and its own Release run had failed the tag-vs-version guard. Run `git ls-remote --tags origin | grep vX.Y.Z` first, and push `main` and `refs/tags/vX.Y.Z` explicitly rather than relying on `--follow-tags`.

## Consumers: pnpm's release-age gate (one exemption entry per package)

Every release reaches its consumers through pnpm 11's `minimumReleaseAge`: a version published less than 24 hours ago makes the consuming repo's lockfile fail verification with `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION` the next time its dependencies are resolved. That includes a plain `pnpm run …`, whose dependency check verifies the lockfile. So each release needs a consumer-side exemption in every repo that depends on this package and is on the pnpm gate (`buzzcasting-app`, `axa`, `axagroup`, `customers/sncf` at the time of writing), edited in that repo's `pnpm-workspace.yaml`.

**The rule: one exemption entry per package, replaced on each bump, never appended.** pnpm's lockfile verifier collapses several `name@version` entries for the same package to the **first** one, so an appended new version is ignored and the gate still fails while `pnpm config list` shows every entry. Measured on 2026-11-26 with `buzzcasting-utils@1.14.3`: listing `1.14.2` and `1.14.3` as two lines failed with the violation; a single `buzzcasting-utils@1.14.2 || 1.14.3` entry passed.

```yaml
# one entry, replaced on every bump:
minimumReleaseAgeExclude:
  - buzzcasting-utils@1.14.4
# or a union, when a lockfile still resolves the older version:
#   - buzzcasting-utils@1.14.3 || 1.14.4
```

- The exemption is **temporary**: once the version is a day old it passes on its own, so drop the entry on the next bump rather than accumulating holes in the gate.
- Verify it, don't assume it: copy the consumer's `package.json`, `pnpm-lock.yaml` and `pnpm-workspace.yaml` to a scratch directory and run `pnpm install --frozen-lockfile`. With the entry it must exit 0; remove the entry and it must fail with the violation. If it still passes without the entry, the entry is not doing the work you think it is.
- In a non-TTY shell this repo's own `pnpm run` can abort with `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`; `CI=true pnpm …` bypasses the prompt.

## What's unchanged

- `npm run changelog` (`changelogen --release` alone, no publish/tag push) still works the same as before for previewing a changelog.
- `.github/workflows/main.yml` (added alongside this) runs build+test on every push/PR, independent of releases.
