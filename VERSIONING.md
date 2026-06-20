# Versioning

This repository tracks both the original upstream package version and our own local modification history.

## Rules

1. Baseline imports keep the upstream version unchanged.
   - Do not modify `version.name` or `version.code` when we only import a package into the repository.
2. The first installable local modification starts at revision 1.
   - `version.name`: `<upstream-name>-r1`
   - `version.code`: `<upstream-code> * 1000 + 1`
3. Each additional installable local modification increments the local revision by 1.
   - Example: `1.0.6-r2`, `1.0.6-r3`
   - Example: `7002`, `7003`
4. When upstream releases a new version, reset the local revision counter.
   - Example: upstream `1.0.7` with code `8` becomes `1.0.7-r1` and `8001` for our first modified release based on that upstream version.

## Format

- `version.name = <upstream-name>-r<revision>`
- `version.code = (<upstream-code> * 1000) + <revision>`

## When To Bump

Bump both version fields only when a change affects the installable watchface package, such as:

- layout or widget changes
- asset replacements
- localization updates inside the package
- code fixes or behavior changes
- packaging changes intended for device installation

Do not bump the package version for repository-only changes, such as:

- README updates
- file renames outside the installable package
- notes, screenshots, or documentation cleanup

## Example

For the current `Stardew Valley` baseline:

- upstream baseline: `version.name = 1.0.6`, `version.code = 7`
- first local modified release: `version.name = 1.0.6-r1`, `version.code = 7001`
- second local modified release: `version.name = 1.0.6-r2`, `version.code = 7002`
