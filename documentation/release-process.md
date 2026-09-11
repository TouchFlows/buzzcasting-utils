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

This link was configured on npmjs.com on 2026-09-11 (found under the package's own Settings/Access page, not account-level settings). If `release.yml` ever fails with an auth/permission error and nothing else changed, check that link first - it's the one piece of this that isn't in version control and can go stale (e.g. after a package transfer, or if the workflow file is ever renamed). Note that as of this writing the publish leg itself hasn't been exercised by a real release yet - `main.yml` (build+test) is verified green on real pushes, but no tag has actually been pushed through `release.yml` to confirm the OIDC handshake and `npm publish` step work end-to-end. Treat the next genuine version bump as the real first test of this path.

## What's unchanged

- `npm run changelog` (`changelogen --release` alone, no publish/tag push) still works the same as before for previewing a changelog.
- `.github/workflows/main.yml` (added alongside this) runs build+test on every push/PR, independent of releases.
