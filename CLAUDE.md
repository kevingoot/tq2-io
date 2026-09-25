# tq2.io — agent instructions

Static GitHub Pages site, no build step. Deploys from `main` root.
- `js/data.js` — ALL data (window.TQ2). The only file batches normally touch.
- `js/app.js` — hash router + rendering. Don't change unless asked.
- `js/skills-*.js` — skill boards. Don't change unless asked.
- `scripts/check.js` — consistency check. Run `node scripts/check.js` after every data edit.

## Data rules
- One sample per boss per Ares tier (+0 / +3 / +5). Never mix bosses or tiers.
- Log only: **green** (infrequent), **purple** (unique/epic), **light blue** (named essence). Ignore dark blue (magic) and yellow (rare) — but note in OPEN QUESTIONS if the ratio looks unusual (e.g. unusually few yellows or many dark blues).
- `epics` must equal the sum of epic-rarity drop rows. `namedEssences` must equal the sum of essence rows. `infrequents` must equal `infrequentNames.length` when names are listed.
- Reuse existing item ids. A new item gets an `items[]` entry with its slot taken from the tooltip type line (e.g. "2h Light Axe"). Flag it for my confirmation.
- A unique not previously seen on this boss's table gets `flag: "off-table"` until a second source confirms it.
- Hippokampos Scapula is count-only on Hippo (no tooltip required).
- Gold is recorded as a band/range, not an average. Missing gold for a pile is fine — skip it, do not block the batch.
- Update `meta.updated` and any counts in README.md.
- Never commit screenshots.

## Batch workflow (phase-gated — stop after each phase)
Input from me: boss, Ares tier. Screenshots are in the `Screenshots/` folder — read them from there. Kill range: if not specified, assume these are the next sequential kills for that boss and tier (continuing from the existing `kills` count).

1. PARSE (no edits): One row per pile: pile #, gold, purple items, green items, named essences. Then totals and OPEN QUESTIONS: unreadable labels, missing gold, tooltips you couldn't match to a pile (match them using inventory gold and visible labels), and any kill-range overlap with the existing sample's `kills` (if there is overlap, stop and ask). Wait for my confirmation.
2. IMPLEMENT: Apply the confirmed numbers to js/data.js (add to kills, drops, counts, infrequentNames, gold band). Add tooltip mods to items only when they're new or outside the recorded range.
3. VERIFY: Run `node scripts/check.js`. Show the output. Fix any failures before continuing.
4. COMMIT: One commit, message like `Hippo 55 +0: kills 41–50`. Push the branch and tell me it's ready for a PR.
