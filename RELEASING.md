# Releasing Watchfaces

This repository contains multiple watchfaces, but GitHub Releases are created at the repository level and are tied to Git tags. Because of that, the cleanest model is:

- one GitHub Release per watchface revision
- one namespaced tag per watchface revision
- one attached `.zip` asset per watchface release

## Recommended Naming

Use these formats consistently:

- Tag: `<watchface-slug>-v<version>`
- Release title: `<App Name> <version>`
- Asset file: `<appId>-<App_Name>-<version>.zip`

Examples:

- `planetary-universe-v1.0.1-r1`
- `stardew-valley-v1.0.6-r1`
- `1091567-Planetary_Universe-1.0.1-r1.zip`

## Local Preparation

Generate the uploadable artifact from the repository root:

```bash
./watchface bump --watchface planetary-universe
./watchface release --watchface planetary-universe
./watchface release --watchface stardew-valley
```

Artifacts are written to:

- `artifacts/releases/planetary-universe/`
- `artifacts/releases/stardew-valley/`

Each release run also writes a `.release.json` file that contains:

- the suggested Git tag
- the suggested GitHub Release title
- the exact artifact path
- the generated Git tag commands

Each release run also writes a `.release.md` file generated from `<watchface>/release-notes.json`.

## GitHub Release Workflow

### Option A: Release One Watchface

This is the recommended default.

1. Commit and push the watchface changes.
2. Run `./watchface release --watchface <slug>`.
3. Read the generated `.release.json` file in `artifacts/releases/<slug>/`.
4. Use the generated `.release.md` file as the GitHub Release body.
5. Run the suggested Git tag commands from the metadata file.
6. Open the repository's Releases page on GitHub.
7. Draft a new release using that tag.
8. Set the release title from the metadata file.
9. Upload the generated `.zip` asset.
10. Paste the generated `.release.md` content into the release body.
11. Publish the release.

### Option B: Release Multiple Watchfaces Separately

If two watchfaces changed at the same time, still create separate releases:

1. Build one artifact per watchface.
2. Create one tag per watchface version.
3. Create one GitHub Release per tag.
4. Attach only the matching asset to each release.

This keeps each release page focused and makes it easy for users to find the right download.

## Tag Strategy

Use namespaced tags rather than repo-wide tags like `v1.0.7`.

Good:

- `planetary-universe-v1.0.2-r1`
- `stardew-valley-v1.0.6-r2`

Avoid:

- `v1.0.2`
- `release-12`

Namespaced tags make it obvious which watchface a release belongs to and prevent version collisions between watchfaces.

## Release Notes Source

Each watchface keeps its versioned release notes in:

- `planetary-universe/release-notes.json`
- `stardew-valley/release-notes.json`

When you bump a watchface version, add a matching entry to that file. The local release tool uses it to generate the GitHub Release body.

## About "Latest Release"

GitHub shows releases at the repository level, not per watchface. That means the repository can only have one repo-wide "latest release" badge at a time.

In practice, this means:

- a `Stardew Valley` release can become the repo's latest release even if `Planetary Universe` users are looking for their latest build
- users should rely on the release title or tag prefix to identify the correct watchface

Because of that, treat the release title and tag naming as the primary navigation aid.

## Suggested Workflow When Bumping a Version

1. Run `./watchface bump --watchface <slug>` for the next local revision, or add `--upstream-name` plus `--upstream-code` to start a new upstream baseline.
2. Replace the generated `TODO` entry in `<watchface>/release-notes.json`.
3. Review the README version history block that was refreshed automatically.
4. Commit and push your watchface changes.
5. Run `./watchface release --watchface <slug>`.
6. Use the generated `.release.md` body and `.release.json` metadata when publishing on GitHub.
