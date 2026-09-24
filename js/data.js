window.TQ2 = {
  meta: {
    game: "Titan Quest 2",
    status: "Early Access",
    chapter: "4 Wild Lands",
    cap: 55,
    updated: "2026-09-24",
    method: "Full-pile screenshot per remnant kill. Loot logged: green + purple only. Gold band recorded. Named pages vs color counts."
  },
  masteries: [
    { id: "earth", name: "Earth", tag: "Fire / earth control", color: "#ef4444" },
    { id: "rogue", name: "Rogue", tag: "Single-target, mobility", color: "#22c55e" },
    { id: "storm", name: "Storm", tag: "Ice / lightning CC", color: "#38bdf8" },
    { id: "warfare", name: "Warfare", tag: "Weapons and armor", color: "#f59e0b" },
    { id: "spirit", name: "Spirit", tag: "Summons (Aug 2026)", color: "#c084fc" },
    { id: "forge", name: "Forge", tag: "Craft / divine wonders", color: "#fb7185" }
  ],
  classes: [
    { id: "ashstalker", name: "Ashstalker", a: "rogue", b: "earth" },
    { id: "elementalist", name: "Elementalist", a: "storm", b: "earth" },
    { id: "battlemage", name: "Battlemage", a: "earth", b: "warfare" },
    { id: "tempest", name: "Tempest", a: "storm", b: "warfare" },
    { id: "stormblade", name: "Stormblade", a: "storm", b: "rogue" },
    { id: "reaver", name: "Reaver", a: "rogue", b: "warfare" }
  ],
  skills: {
    earth: [
      { tier: 1, name: "Roiling Magma", type: "active", note: "Fireball that explodes on contact." },
      { tier: 1, name: "Fissure", type: "active", note: "Strike line, slows. Overwhelm consumes for more damage." },
      { tier: 1, name: "Magma Shell", type: "passive", note: "Health / armor / fire res." },
      { tier: 2, name: "Ignite", type: "active", note: "Fire res shred + proliferate on user's Ashstalker." },
      { tier: 2, name: "Earthbreaker", type: "wip", note: "Tree nodes not fully catalogued." }
    ],
    rogue: { source: "Client screenshots 2026-09-24", actives: [], passives: [] },
    storm: [{ tier: 1, name: "Ice Shards", type: "active", note: "Cone of cold projectiles." }],
    warfare: [{ tier: 1, name: "Weapon Mastery", type: "passive", note: "Stub." }],
    spirit: [{ tier: 1, name: "Summon line", type: "wip", note: "Added Aug 2026." }],
    forge: [{ tier: 1, name: "Forge line", type: "wip", note: "Skill list empty until logged." }]
  },
  bosses: [],
  excluded: [],
  items: []
};
