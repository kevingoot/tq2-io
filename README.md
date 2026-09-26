# tq2.io

Static Titan Quest 2 item + remnant-drop database (diablo2.io-shaped, EA-sized).

## GitHub Pages (do this once on github.com)

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / root
4. Site will be `https://kevingoot.github.io/tq2-io/`

Hash routes work on Pages with no extra config.

## What v1 is

- Item catalog (epic / named essence / off-table)
- Boss pages with observed rates from remnant samples
- Seeded: Pan 55 +0 closed (100), Hippokampos 55 +0 open (~78)
- Skill-tree stubs for Earth, Rogue, Storm, Warfare, Spirit, Forge

## What v1 is not

- Marketplace
- Holy Grail tracker
- Datamined true drop weights
- Complete skill modifiers

## Data rules

- One boss table per sample. Never mix Pan into Hippokampos.
- `+0` and `+3` are different samples.
- Protocol: screenshot full pile every remnant kill; log green + purple; gold band; named pages vs color counts.
- Off-table / shared-pool uniques get `flag: "off-table"` until a second source confirms.

## Edit at work (github.com only)

- Change numbers in `js/data.js`
- Commit on `main` in the web editor
- Pages rebuilds in a minute
