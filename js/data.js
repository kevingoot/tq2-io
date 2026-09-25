window.TQ2 = {
  meta: {
    game: "Titan Quest 2",
    status: "Early Access",
    chapter: "4 Wild Lands",
    cap: 55,
    updated: "2026-09-25",
    method: "Full-pile screenshot per remnant kill. Loot logged: green + purple only. Gold band recorded. Named pages vs color counts."
  },
  masteries: [
    { id: "core", name: "Core", tag: "Shared basics", color: "#a8a29e" },
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
    earth: [{ tier: 1, name: "Roiling Magma", type: "active", note: "Fireball that explodes on contact." }],
    rogue: { source: "Client screenshots 2026-09-24", actives: [], passives: [] },
    storm: [], warfare: [], spirit: [], forge: []
  },
  bosses: [
    {
      id: "hippokampos",
      name: "Hippokampos",
      title: "Devourer of the Lost",
      act: 1, actName: "Act 1 \u2014 Flooded Farmlands",
      remnant: "Hippokampos Vertebra",
      remnantConfirmed: true,
      zone: "Erana Ruins",
      waypoint: "Erana Ruins",
      kind: "optional",
      image: "img/hippokampos.jpg",
      samples: [{
        id: "hippo-55-0", label: "55 +0", status: "open", kills: 62, date: "2026-09-24",
        gold: "7.4k-12.9k (most 8.0-10.8k)", epics: 23, infrequents: 18, namedEssences: 3,
        notes: "Scapula count-only going forward. Three double-Scapula piles. Shadowsting off-table. Earthen Talisman is first Earth unique on this table.",
        drops: [
          { item: "hippokampos-scapula", count: 20 },
          { item: "chaos-cube", count: 1 },
          { item: "shadowsting", count: 1, flag: "off-table" },
          { item: "earthen-talisman", count: 1 },
          { item: "essence-typhon-fang", count: 1 },
          { item: "essence-iron-will-ajax", count: 1 },
          { item: "essence-aegis-athena", count: 1 }
        ],
        infrequentNames: [
          "Essence Sword of Wisdom","Essence Sword of Clarity","Essence Sword of Excellence","Essence Sword of the Invoker",
          "Unscorched Sharptooth Greaves of Sanctuary","Empowered Benthic Wand of Precision",
          "Tormenting Studded Spirit Scepter of Knowledge","Piercing Star Mace of Zelus",
          "Venomous Fume Scepter of Crippling","Savage Fume Scepter of Crippling",
          "Invoker's Force Crescent Staff of Clarity",
          "Freezing Studded Spirit Scepter of Wisdom","Malignant Rot-Cleaver of Precision",
          "Invoker's Star Mace of Consistency","Empowered Essence Sword of Weakening",
          "Unscorched Sharptooth Shell of Renewal","Icy Essence Sword of Clarity","Invoker's Essence Sword of Prowess"
        ]
      }]
    },
    { id: "aristomenes", name: "Aristomenes", title: "King of Messenia", act: 1, actName: "Act 1 \u2014 Flooded Farmlands", remnant: "Aristomenes' Skull", remnantConfirmed: true, zone: "Pyrgos Graveyard Tomb", kind: "optional", samples: [] },
    {
      id: "pan", name: "Pan", title: "God of the Wild", act: 1, actName: "Act 1 \u2014 Flooded Farmlands",
      remnant: "Pan's Horn", remnantConfirmed: true, zone: "Pan's Sanctum", waypoint: "Pan's Sanctum",
      image: "img/Pan.jpg", kind: "story",
      samples: [{
        id: "pan-55-0", label: "55 +0", status: "closed", kills: 100, date: "2026-09-23",
        gold: "11k-18k", epics: 5, infrequents: 11, infrequentAttribution: "zone-likely", uniqueAttribution: "pool-unproven", namedEssences: 8,
        notes: "Observed in Pan pile. Best keep: Chromatic Staff.",
        drops: [
          { item: "captains-signet", count: 2, flag: "pile / pool unproven" },
          { item: "thorny-maul", count: 1, flag: "pile / pool unproven" },
          { item: "chromatic-staff", count: 1, flag: "pile / pool unproven" },
          { item: "ram-bow-ii", count: 1, flag: "pile / pool unproven" },
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
    { id: "dysepilogos", name: "Dysepilogos", title: "Denier of Destiny", act: 1, actName: "Act 1 \u2014 Flooded Farmlands", remnant: "Dysepilogos' Amulet", remnantConfirmed: true, zone: "Moirai Temple", kind: "story", samples: [] },
    { id: "ajax", name: "Ajax the Magnificent", title: "Lord of the Skies", act: 2, actName: "Act 2 \u2014 Northern Beaches", remnant: "Ajax the Magnificent's Feather", remnantConfirmed: false, zone: "Gryphon's Lair", kind: "optional", samples: [] },
    { id: "king-of-tides", name: "King of Tides", title: "Leader of the Ichthians", act: 2, actName: "Act 2 \u2014 Northern Beaches", remnant: "King-of-Tides' Tooth", remnantConfirmed: false, zone: "Ichthian Stronghold", kind: "story", samples: [] },
    { id: "skylla", name: "Skylla", title: "Bane of Sailors", act: 2, actName: "Act 2 \u2014 Northern Beaches", remnant: "Skylla's Scale", remnantConfirmed: false, zone: "Lair of Skylla", kind: "story", samples: [] },
    { id: "ixion", name: "Ixion", title: "Centaur patriarch", act: 3, actName: "Act 3 \u2014 Arkadian Plains", remnant: "unlogged", remnantConfirmed: false, zone: "Arkadian Plains", kind: "story", samples: [] },
    { id: "skirion", name: "Skirion", title: "Arena of Champions", act: 3, actName: "Act 3 \u2014 Arkadian Plains", remnant: "unlogged", remnantConfirmed: true, zone: "Arena of Champions, Arkadian Plains", kind: "optional", notes: "Memory Knot confirmed 2026-09-24.", samples: [] },
    { id: "feral-hippokampos", name: "Feral Hippokampos", title: "Lake Taka hippo", act: 3, actName: "Act 3 \u2014 Arkadian Plains", remnant: "unlogged", remnantConfirmed: false, zone: "Lake Taka", kind: "story", samples: [] },
    { id: "first-boarman", name: "First Boarman", title: "Buried-city patriarch", act: 4, actName: "Act 4 \u2014 Wild Lands", remnant: "unlogged", remnantConfirmed: false, zone: "Ancient buried city", kind: "story", samples: [] },
    { id: "centaurus", name: "Centaurus", title: "King of the centaurs", act: 4, actName: "Act 4 \u2014 Wild Lands", remnant: "unlogged", remnantConfirmed: false, zone: "Temple of Nemesis", kind: "story", samples: [] },
    {
      id: "arachne",
      name: "Arachne",
      title: "Spider Queen",
      act: 4, actName: "Act 4 \u2014 Wild Lands",
      remnant: "Arachne's Leg",
      remnantConfirmed: true,
      zone: "Wild Lands \u2014 exact cave / forest arena still unlogged",
      waypoint: "unlogged",
      complexity: "Optional / story-adjacent Ch4. Farmable via Ritual of Ares.",
      kind: "optional",
      image: "img/arachne.jpg",
      notes: "CONFIRMED remnant-farmable 2026-09-24. Remnant is Arachne's Leg (NOT a unique). Dedicated Arachne chat for the 100-kill table.",
      samples: [{
        id: "arachne-55-0", label: "55 +0", status: "open", kills: 1, date: "2026-09-24",
        gold: "unlogged; rest of pile gold-rarity junk", epics: 0, infrequents: 1, infrequentAttribution: "shared-sword", namedEssences: 0,
        notes: "First logged remnant kill. Arachne's Leg = remnant, not loot. Empowered Essence Sword of Clarity is the recurring always-drops sword.",
        drops: [
          { item: "essence-sword", count: 1, flag: "always-drops sword / shared" }
        ],
        infrequentNames: ["Empowered Essence Sword of Clarity"]
      }]
    }
  ],
  excluded: [
    { name: "Appollonia the Terrible", reason: "Prologue gryphon. No remnant." },
    { name: "Tauros", reason: "Optional in Moirai. No remnant." },
    { name: "Klepton", reason: "Stopped spawning after Ch3." },
    { name: "Mother Crab", reason: "Quest elite." },
    { name: "Fake Centaurus", reason: "Decoy. Do not log as remnant table." }
  ],
  items: [
    { id: "hippokampos-scapula", name: "Hippokampos Scapula", rarity: "epic", slot: "2H axe", unique: true, notes: "Lv55 unique 2H axe. Count-only on Hippo farm.", mods: ["245-271 base (98-108 strike / 76-84 poison / 71-79 cold)", "+1 Primary Attack capacity", "RSV 366"] },
    { id: "shadowsting", name: "Shadowsting", rarity: "epic", slot: "spear", unique: true, notes: "Hippo 55 +0 unique spear. Off-table until second source." },
    { id: "chaos-cube", name: "Chaos Cube", rarity: "epic", slot: "talisman", unique: true, notes: "Lv55 epic talisman." },
    { id: "earthen-talisman", name: "Earthen Talisman", rarity: "epic", slot: "talisman", unique: true, notes: "Lv55 Earth unique. +1 Level to all Earth Passive Skills. First Earth unique on Hippokampos 55 +0.", mods: ["+1 Level to all Earth Passive Skills", "+11% increased Armor", "28% increased Ailment Power", "Poison / stun resistance"] },
    { id: "captains-signet", name: "Captain's Signet", rarity: "epic", slot: "ring", unique: true, notes: "2 in 100 Pan 55 +0. Pool unproven." },
    { id: "thorny-maul", name: "Thorny Maul", rarity: "epic", slot: "2H mace", unique: true, notes: "Pan 55 +0. Pool unproven." },
    { id: "chromatic-staff", name: "Chromatic Staff", rarity: "epic", slot: "staff", unique: true, notes: "Best keep from Pan 55 +0." },
    { id: "ram-bow-ii", name: "Ram Bow II", rarity: "epic", slot: "bow", unique: true, notes: "Pan 55 +0. Pool unproven." },
    { id: "fotia", name: "Fotia", rarity: "epic", slot: "staff", unique: true, notes: "Unique fire staff.", mods: ["+2 Capacity to Fire Skills (Lv50 piece)"] },
    { id: "arachnes-leg", name: "Arachne's Leg", rarity: "remnant", slot: "quest / ritual", unique: false, notes: "Remnant hand-in for Arachne. Not a wearable unique." },
    { id: "essence-apollo", name: "Essence of Apollo", rarity: "named-essence", slot: "relic" },
    { id: "essence-zeus", name: "Essence of Zeus", rarity: "named-essence", slot: "relic" },
    { id: "essence-hypnos", name: "Essence of Hypnos", rarity: "named-essence", slot: "relic" },
    { id: "essence-aegis-athena", name: "Essence of Aegis of Athena", rarity: "named-essence", slot: "relic" },
    { id: "essence-hera-scepter", name: "Hera's Scepter (essence)", rarity: "named-essence", slot: "relic" },
    { id: "essence-typhon-fang", name: "Essence of Typhon's Serpentine Fang", rarity: "named-essence", slot: "relic" },
    { id: "essence-iron-will-ajax", name: "Essence of Iron Will of Ajax", rarity: "named-essence", slot: "relic" },
    { id: "empowered-pyromancer-sword", name: "Empowered Essence Sword of the Pyromancer", rarity: "off-table", slot: "sword", aliasOf: "essence-sword" },
    { id: "essence-sword", name: "Essence Sword", rarity: "infrequent", slot: "sword", notes: "Shared infrequent sword. Shows on Hippo / Pan / Arachne.", variants: [{ name: "Essence Sword of Wisdom", seen: "Hippokampos 55 +0" }, { name: "Essence Sword of Clarity", seen: "Hippokampos 55 +0" }, { name: "Essence Sword of Excellence", seen: "Hippokampos 55 +0" }, { name: "Essence Sword of the Invoker", seen: "Hippokampos 55 +0" }, { name: "Empowered Essence Sword of the Pyromancer", seen: "Pan 55 +0", flag: "off-table" }, { name: "Empowered Essence Sword of Clarity", seen: "Arachne 55 +0", flag: "always-drops sword" }, { name: "Empowered Essence Sword of Weakening", seen: "Hippokampos 55 +0" }, { name: "Icy Essence Sword of Clarity", seen: "Hippokampos 55 +0" }, { name: "Invoker's Essence Sword of Prowess", seen: "Hippokampos 55 +0" }] },
    { id: "sharptooth-greaves", name: "Sharptooth Greaves", rarity: "infrequent", slot: "boots", variants: [{ name: "Unscorched Sharptooth Greaves of Sanctuary", seen: "Hippokampos 55 +0" }] },
    { id: "sharptooth-shell", name: "Sharptooth Shell", rarity: "infrequent", slot: "torso", variants: [{ name: "Unscorched Sharptooth Shell of Renewal", seen: "Hippokampos 55 +0" }] },
    { id: "benthic-wand", name: "Benthic Wand", rarity: "infrequent", slot: "wand", variants: [{ name: "Empowered Benthic Wand of Precision", seen: "Hippokampos 55 +0" }] },
    { id: "studded-spirit-scepter", name: "Studded Spirit Scepter", rarity: "infrequent", slot: "scepter", variants: [{ name: "Tormenting Studded Spirit Scepter of Knowledge", seen: "Hippokampos 55 +0" }, { name: "Freezing Studded Spirit Scepter of Wisdom", seen: "Hippokampos 55 +0" }] },
    { id: "star-mace", name: "Star Mace", rarity: "infrequent", slot: "mace", variants: [{ name: "Piercing Star Mace of Zelus", seen: "Hippokampos 55 +0" }, { name: "Invoker's Star Mace of Consistency", seen: "Hippokampos 55 +0" }] },
    { id: "fume-scepter", name: "Fume Scepter", rarity: "infrequent", slot: "scepter", variants: [{ name: "Venomous Fume Scepter of Crippling", seen: "Hippokampos 55 +0" }, { name: "Savage Fume Scepter of Crippling", seen: "Hippokampos 55 +0" }] },
    { id: "force-crescent-staff", name: "Force Crescent Staff", rarity: "infrequent", slot: "staff", variants: [{ name: "Invoker's Force Crescent Staff of Clarity", seen: "Hippokampos 55 +0" }] },
    { id: "rot-cleaver", name: "Rot-Cleaver", rarity: "infrequent", slot: "sword", notes: "Infrequent sword base.", variants: [{ name: "Malignant Rot-Cleaver of Precision", seen: "Hippokampos 55 +0" }] }
  ]
};
