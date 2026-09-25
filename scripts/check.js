// Sanity check for js/data.js. Run: node scripts/check.js
global.window = {};
require("../js/data.js");
const D = window.TQ2;
const items = Object.fromEntries(D.items.map((i) => [i.id, i]));
let bad = 0;
const fail = (m) => { bad++; console.log("FAIL  " + m); };
D.bosses.forEach((b) => (b.samples || []).forEach((s) => {
  const tag = b.name + " " + s.label;
  let epic = 0, ess = 0;
  (s.drops || []).forEach((d) => {
    const it = items[d.item];
    if (!it) return fail(tag + ": unknown item id '" + d.item + "'");
    if (it.rarity === "epic") epic += d.count;
    if (it.rarity === "named-essence") ess += d.count;
  });
  if (s.epics != null && s.epics !== epic) fail(tag + ": epics=" + s.epics + " but epic drop rows sum to " + epic);
  if (s.namedEssences != null && s.namedEssences !== ess) fail(tag + ": namedEssences=" + s.namedEssences + " but essence rows sum to " + ess);
  if (s.infrequentNames && s.infrequents !== s.infrequentNames.length) fail(tag + ": infrequents=" + s.infrequents + " but " + s.infrequentNames.length + " names listed");
  console.log("ok    " + tag + " · " + s.kills + " kills · " + epic + " epics · " + ess + " essences");
}));
const seen = new Set();
D.items.forEach((i) => { if (seen.has(i.id)) fail("duplicate item id " + i.id); seen.add(i.id); });
if (bad) { console.log(bad + " problem(s)"); process.exit(1); } else console.log("all checks passed");
