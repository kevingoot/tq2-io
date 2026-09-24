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
    rogue: [
      { tier: 1, name: "Lethal Strike", type: "active", note: "High single-target hit." },
      { tier: 1, name: "Trick Shot", type: "active", note: "Thrown blade, pierce." },
      { tier: 2, name: "Grenade", type: "active", note: "User farmer skill." }
    ],
    storm: [
      { tier: 1, name: "Ice Shards", type: "active", note: "Cone of cold projectiles." },
      { tier: 2, name: "Frost Explosion", type: "wip", note: "Planned Tempest fantasy." }
    ],
    warfare: [
      { tier: 1, name: "Weapon Mastery", type: "passive", note: "Stub." },
      { tier: 1, name: "Onslaught", type: "wip", note: "Stub." }
    ],
    spirit: [
      { tier: 1, name: "Summon line", type: "wip", note: "Added Aug 2026. Combo names unverified in-client." }
    ],
    forge: [
      { tier: 1, name: "Forge line", type: "wip", note: "Skill list empty until logged in-game." }
    ]
  },
  bosses: [
    {
      id: "pan",
      name: "Pan",
      remnant: "Pan's Horn",
      zone: "Pan's Sanctum",
      samples: [{
        id: "pan-55-0", label: "55 +0", status: "closed", kills: 100, date: "2026-09-23",
        gold: "11k-18k", epics: 5, infrequents: 11, namedEssences: 8,
        notes: "Act 1 zone-table hypothesis for Infrequents still standing. Best keep: Chromatic Staff.",
        drops: [
          { item: "captains-signet", count: 2 },
          { item: "thorny-maul", count: 1 },
          { item: "chromatic-staff", count: 1 },
          { item: "ram-bow-ii", count: 1 },
          { item: "essence-apollo", count: 2 },
          { item: "essence-zeus", count: 1 },
          { item: "essence-hypnos", count: 2 },
          { item: "essence-aegis-athena", count: 1 },
          { item: "essence-hera-scepter", count: 1 },
          { item: "essence-typhon-fang", count: 1 },
          { item: "empowered-pyromancer-sword", count: 1, flag: "off-table" }
        ]
      }]
    },
    {
      id: "hippokampos",
      name: "Hippokampos",
      remnant: "Hippokampos Vertebra",
      zone: "Hippokampos arena",
      samples: [{
        id: "hippo-55-0", label: "55 +0", status: "open", kills: 29, date: "2026-09-22",
        gold: "7.4k-12.2k (most 8.0-10.5k)", epics: 8, infrequents: null, namedEssences: 2,
        notes: "Includes one double-Scapula pile. Shadowsting off-table / shared unique pool. Target 100 kills.",
        drops: [
          { item: "hippokampos-scapula", count: 6 },
          { item: "chaos-cube", count: 1 },
          { item: "shadowsting", count: 1, flag: "off-table" },
          { item: "essence-typhon-fang", count: 1 },
          { item: "essence-iron-will-ajax", count: 1 }
        ],
        infrequentNames: [
          "Essence Sword of Wisdom","Essence Sword of Clarity","Essence Sword of Excellence","Essence Sword of the Invoker",
          "Unscorched Sharptooth Greaves of Sanctuary","Empowered Benthic Wand of Precision",
          "Tormenting Studded Spirit Scepter of Knowledge","Piercing Star Mace of Zelus",
          "Venomous Fume Scepter of Crippling","Invoker's Force Crescent Staff of Clarity",
          "Freezing Studded Spirit Scepter of Wisdom"
        ]
      }]
    }
  ],
  items: [
    { id: "hippokampos-scapula", name: "Hippokampos Scapula", rarity: "epic", slot: "2H axe", unique: true, notes: "Lv55 rolls: 245-271 base, +1 Primary Attack capacity, RSV 366.", mods: ["Cold + poison + strike mix","+1 Primary Attack capacity"] },
    { id: "shadowsting", name: "Shadowsting", rarity: "epic", slot: "spear", unique: true, notes: "Hippo drop; shared unique / off-table until second source." },
    { id: "chaos-cube", name: "Chaos Cube", rarity: "epic", slot: "talisman", unique: true, notes: "Epic talisman Lv55." },
    { id: "captains-signet", name: "Captain's Signet", rarity: "epic", slot: "ring", unique: true, notes: "2 in 100 Pan 55 +0." },
    { id: "thorny-maul", name: "Thorny Maul", rarity: "epic", slot: "2H mace", unique: true },
    { id: "chromatic-staff", name: "Chromatic Staff", rarity: "epic", slot: "staff", unique: true, notes: "Best keep from Pan 55 +0." },
    { id: "ram-bow-ii", name: "Ram Bow II", rarity: "epic", slot: "bow", unique: true },
    { id: "fotia", name: "Fotia", rarity: "epic", slot: "staff", unique: true, notes: "+2 Capacity to Fire Skills (Lv50 piece). Wikis omit capacity line." },
    { id: "essence-apollo", name: "Essence of Apollo", rarity: "named-essence", slot: "relic" },
    { id: "essence-zeus", name: "Essence of Zeus", rarity: "named-essence", slot: "relic" },
    { id: "essence-hypnos", name: "Essence of Hypnos", rarity: "named-essence", slot: "relic" },
    { id: "essence-aegis-athena", name: "Essence of Aegis of Athena", rarity: "named-essence", slot: "relic" },
    { id: "essence-hera-scepter", name: "Hera's Scepter (essence)", rarity: "named-essence", slot: "relic" },
    { id: "essence-typhon-fang", name: "Essence of Typhon's Serpentine Fang", rarity: "named-essence", slot: "relic" },
    { id: "essence-iron-will-ajax", name: "Essence of Iron Will of Ajax", rarity: "named-essence", slot: "relic" },
    { id: "empowered-pyromancer-sword", name: "Empowered Essence Sword of the Pyromancer", rarity: "off-table", slot: "sword", notes: "Off-table bird on Pan 55 +0." }
  ]
};
