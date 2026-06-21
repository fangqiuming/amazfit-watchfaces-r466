A collection of imported, custom, and modified watchfaces with **466x466 resolution** for modern Amazfit smartwatches (Zepp OS).

## Compatibility
These watchfaces are designed and optimized for 466x466 screens. They should be compatible with:

- Amazfit GTR 4
- Amazfit Active 2 (Round)
- Amazfit Active 3
- Amazfit T-Rex 3 Pro (44mm)
- Amazfit Cheetah 2 Pro

## Available Watchfaces

### 1. Stardew Valley

![Stardew Valley](stardew-valley/preview.png)

* **Author**: `max.marauder`
* **Version**: `1.0.6-r1`
* **App ID**: `1089671`
* **Source**: Official Zepp store package
* **Repository Path**: [`stardew-valley/1089671`](stardew-valley/1089671)

**Summary:** A tribute to Stardew Valley with digital time, date and weekday, current weather and temperature, sunrise/sunset progress, steps and progress indicator, heart rate, battery level, Bluetooth status, and Always-on Display support.

**What's Modified by Version:**

#### `1.0.6-r1`

- Reworked the sunrise and sunset pointer to match the adapted background's 06:00-02:00 sky cycle, replacing the stock behavior that entered the night state before sunset and snapped back after sunset.
- The sun icon now follows a custom 210->300 daytime arc, moves from 300->360 after sunset until 02:00, then re-enters from 180->210 before sunrise.
- Tapping the date now opens the system calendar.

### 2. Planetary Universe

![Planetary Universe](planetary-universe/preview.png)

* **Author**: `zeppewf001`
* **Version**: `1.0.1-r1`
* **App ID**: `1091567`
* **Source**: Official Zepp store package
* **Repository Path**: [`planetary-universe/1091567`](planetary-universe/1091567)

**Summary:** A sci-fi themed digital watchface with time and seconds, weather conditions and temperature range, UV index, sunrise and sunset times, steps and distance, heart rate, calories, battery level, date and weekday, plus Always-on Display support.

**What's Modified by Version:**

#### `1.0.1-r1`

- Added an `AQI` readout to the weather header so the number now matches the `AQI` label already present in the background.
- Added tap targets for the weather, sunrise and sunset, heart rate, steps, calories, battery, and date sections.
- Tapping the date now opens the system calendar.

## Local Tooling

Use the repository CLI from the root directory:

```bash
./watchface list
./watchface preview
./watchface preview --watchface planetary-universe
./watchface bump --watchface planetary-universe
./watchface bump --watchface planetary-universe --upstream-name 1.0.2 --upstream-code 3
./watchface release
./watchface release --all
```

### `preview`

- Prompts you to choose a watchface by name.
- Runs `zeus preview` inside the selected package directory.

### `release`

- Prompts you to choose one watchface, or all watchfaces at once.
- Validates the local revision suffix in `app.json` using the repository's `-rN` scheme.
- Creates a `.zip` artifact in `artifacts/releases/<watchface-slug>/`.
- Writes a sidecar `.release.json` file with the suggested Git tag and release title for GitHub Releases.
- Writes a `.release.md` file generated from `<watchface>/release-notes.json` for direct use as the GitHub Release body.

### `bump`

- Updates the selected watchface's `app.json` to the next release version.
- Without extra flags, increments the local revision from `-rN` to `-rN+1`.
- With `--upstream-name` and `--upstream-code`, starts a new upstream version at `-r1`.
- Adds a new `TODO` entry to `<watchface>/release-notes.json`.
- Refreshes the README version block for that watchface so the new version appears first.

See [RELEASING.md](/Users/fangqiuming/Developer/Personal/amazfit-watchfaces-r466/RELEASING.md) for the GitHub Release workflow.

## Credits & Disclaimer

Some watchfaces in this repository are ported, translated, imported, or modified based on the works of other designers.

- All original design copyrights belong to their respective creators.
- Modifications (such as resolution scaling to 466x466, localizations, or code optimizations) are made under non-commercial open-source guidelines.
- If you are an original author and wish to have your design removed, please open an Issue.
