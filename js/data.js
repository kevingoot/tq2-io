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
    rogue: { source: "Client screenshots 2026-09-24", actives: [
      { name: "Lethal Strike", type: "active", tags: "Main \u00b7 Weapon Attack \u00b7 Exhaust", cost: "30 Energy", cd: "3.6s", note: "300% Weapon Damage, single target. Consumes Flow for +25% Damage. Flow consume or kill refreshes cooldown. Can Execute.", mods: ["Enhanced Damage 10","Enhanced Critical Hits 5","Rupture 5","Consume Doom 5","Mark Focus 5","Gain Flow 1","Poison Explosion 5","Shadow Strike 1","Shadow Dagger 1"] },
      { name: "Trick Shot", type: "active", tags: "Main \u00b7 Ranged Attack \u00b7 Projectile \u00b7 Exhaust", cost: "55 Energy", cd: "None", note: "Hidden blade, Pierce Damage. Infinite projectile penetration. 10m range.", mods: ["Enhanced Damage 10","Enhanced Critical Hits 5","Execute 1","Mortality 3","Doom on Hit 3","Consume Doom 3","Doom Explosion 2","Interrupt 3","Counter 5","Enhanced Ailment 5","Critical Rupture 5","Mark Focus 5","Shrapnel"] },
      { name: "Preparation", type: "sustained", tags: "Aura \u00b7 Buff", cost: "No Cost", cd: "None", note: "18m aura: you and allies +20% Poison Damage and +20% Physical Damage.", mods: ["Conservation 5","Health Reservation 1","Pierce Imbuement 2","Poison Imbuement 2","Poison Resistance 5","Enhanced Ailments 5","Enhanced Critical Hits 5","Weapon Coating 5","Trail Blazer 5","Ability Enhancement 5","Shadow Dagger 5"] },
      { name: "Mark for Death", type: "active", tags: "Spell \u00b7 Shadow", cost: "22 Energy", cd: "None", note: "Mark a target. Hits vs your Mark deal extra 15% of the hit as unscaled Vitality Damage. Cannot crit.", mods: ["Apply Doom 5","Weaken 5","Poison Burst 5","Poison Explosion 5","Shadow Dagger 5","Consume Flow 5","Execution Threshold 5"] },
      { name: "Grenade", type: "active", tags: "Main \u00b7 Projectile \u00b7 Area \u00b7 Fire", cost: "Energy", cd: "4.3s", note: "Fire grenade, 2m radius. Farmer skill. Supports extra capacity.", mods: ["Vulnerable on Hit 1","Enhanced Damage 10","Poison Grenade 1","Burning Ground 5","Payload 1","Fragmentation 5","Rupture 5","Consume Flow 3","Enhanced Ailment 5","Cluster Bomb 3"] },
      { name: "Vanish", type: "active", tags: "Blessing", cost: "No Cost", cd: "3.6s", note: "+30% Movement Speed and +30% increased Damage for 6s.", mods: ["Enhanced Critical Hits 5","Flash Powder 5","Gain Flow 1","Apply Doom 5","Enhanced Ailments 5","Enhanced Duration 5","Deadly Strike 5","Lifesteal 5","Burst of Speed 3"] },
      { name: "Flicker", type: "active", tags: "Movement \u00b7 Teleport", cost: "Energy", cd: "9.3s", note: "Dash 8m. Pierce Damage to enemies you pass through.", mods: ["Enhanced Damage 10","Enhanced Critical Hits 5","Rupture 5","Punish 5","Apply Doom 5","Mark Focus 5","Gain Flow 1","Mark Refresh 3","Cooldown Charge 2","Quick Slash 5"] },
      { name: "Shadow Clone", type: "active", tags: "Greater Summon", cost: "50 Energy", cd: "None", note: "12s clone. 100% of its weapon damage. Melee clone teleports to targets. +20% all speed, +30% more ranged weapon damage. Empowered: +20% total damage.", mods: ["Enhanced Lifetime 3","Strong Awakening 1","Detonation 1","Empowered Assault 3","Doom 3","Frenzied 1","Enhanced Damage 10","Squad Tactics 1","Shadow Dagger 2"] },
      { name: "Scattershot", type: "active", tags: "Main \u00b7 Ranged Attack \u00b7 Projectile \u00b7 Exhaust", cost: "Energy", cd: "None", note: "5 projectiles in a cone, 150% Weapon Damage. Infinite pen. Falloff after first hit. Requires Ranged Weapon.", mods: ["Enhanced Damage 10","Enhanced Critical Hits 5","Doom on Hit 3","Consume Doom 3","Doom Explosion 2","Blade Trick 5","Additional Projectiles 5","Returning Projectiles 5","Enhanced Ailment 5","Consume Flow 5","Shadow Dagger 1","Rupture 5","Shadow Clone Copy"] },
      { name: "Bladespin", type: "active", tags: "Main \u00b7 Weapon Attack \u00b7 Area \u00b7 Exhaust", cost: "Energy", cd: "None", note: "165% Weapon Damage in a 3m radius. Requires 1H Axe, Dagger or Sword.", mods: ["Vulnerable on Hit 1","Enhanced Damage 10","Doom on Hit 3","Consume Doom 3","Doom Explosion 2","Riposte 5","Bladedance 5","Shadow Blades 1","Enhanced Ailment 5","Rupture 5","Double Strike 5","Consume Flow 5","Shadow Clone Copy"] }
    ], passives: [
      { name: "Death Angle", type: "passive", note: "Skill Damage + Physical / Vitality / Poison Penetration.", feats: "8/16 Physical Pen, Poison Pen, Vitality Pen" },
      { name: "Mortal Blades", type: "passive", note: "Skill Damage + Crit Multi.", feats: "8/16 Crit Chance, Crit Damage, High Crit Hit Damage" },
      { name: "Lacerate", type: "passive", note: "Ailment Chance, Plague Damage, Bleed Damage.", feats: "8/16 Ailment Duration, Ailment Chance, Ailment Damage" },
      { name: "Poison Domain", type: "passive", note: "Poison Damage, Plague Damage, Poison Pen.", feats: "8/16 Plague Damage, Poison Damage, Poison Penetration" },
      { name: "Blade Domain", type: "passive", note: "Physical Damage, Bleed Damage, Physical Pen.", feats: "8/16 Bleed Damage, Physical Damage, Physical Penetration" },
      { name: "Surgical Precision", type: "passive", note: "Crit Chance + Crit Multi.", feats: "8/16 Crit Chance, Crit Damage, High Critical Strike Damage" },
      { name: "Open Wound", type: "passive", note: "Rupture Chance + Rupture Damage.", feats: "6/12 Rupture Chance, Rupture Damage, Rupture Mark Damage" },
      { name: "Art of Death", type: "passive", note: "Doom Damage.", feats: "6/12 Doom Lifesteal, Doom Conversion, Doom Amount" },
      { name: "Torment", type: "passive", note: "Damage over Time + Ailment Chance. Feat: +2 max Ailment stacks all types.", feats: "Ailment Chance, Damage over Time, Ailment Amount" },
      { name: "Evasive Maneuvers", type: "passive", note: "Glancing Hit Chance. Glance grants Barrier on ICD.", feats: "6/12 Heal on Glancing Hits, Movement Skill, Glancing Hits DR" },
      { name: "Taste for Blood", type: "passive", note: "Vitality Damage + Lifesteal.", feats: "4/8 Lifesteal, Shadow Spell, Vitality Damage" },
      { name: "Volatile Concoction", type: "passive", note: "Fire Damage + Burn Chance. Feat: Fire Pen / Burn Power.", feats: "Burn Chance, Fire Damage, Shadow Spell" },
      { name: "Shadow Arts", type: "passive", note: "Spell Damage. Summons deal more damage.", feats: "6/12 Cast Speed, Ailment Chance, Crit Chance" },
      { name: "Sleight of Hand", type: "passive", note: "Weapon Attack Damage. Summons deal more damage.", feats: "6/12 Attack Speed, Ailment Chance, Crit Chance" },
      { name: "Dismantling Tactics", type: "passive", note: "More damage to your Mark. Kills deal Vitality to the Mark.", feats: "6/12 Crit Chance, Lifesteal, Mark Resistance" },
      { name: "Anatomy", type: "passive", note: "Pierce Damage + Bleed Chance.", feats: "4/8 Bleed Chance, Pierce Damage, Shadow Spell" },
      { name: "Toxin Distillation", type: "passive", note: "Poison Damage + Plagued Chance.", feats: "4/8 Plagued Chance, Poison Damage, Shadow Spell" },
      { name: "Deadly Affliction", type: "passive", note: "Ailment Chance + Ailment Power. Feat: +2 max stacks all Ailments.", feats: "Ailment Chance, Ailment Amount, Ailment Power" },
      { name: "Nimble Defense", type: "passive", note: "Movement Skill CDR + Glancing Hit Chance.", feats: "6/12 Glancing Projectile, Glancing Blow, Movement Skill CDR" },
      { name: "Remote Tactics", type: "passive", note: "Summon Damage + Summon Crit Chance.", feats: "6/12 Summon Damage, Summon Critical Hit, Device Activations" },
      { name: "Accuracy", type: "passive", note: "Damage + Crit Chance.", feats: "6/12 Crit Chance, Crit Damage, High Crit Chance" },
      { name: "Deft Hands", type: "passive", note: "Damage, Attack Speed, Cast Speed. Feat: Ailment Chance.", feats: "Ailment Chance, Attack and Cast Speed, Crit Chance" }
    ] },
    storm: [
      { tier: 1, name: "Ice Shards", type: "active", note: "Cone of cold projectiles." },
      { tier: 2, name: "Frost Explosion", type: "wip", note: "Planned Tempest fantasy." }
    ],
    warfare: [
      { tier: 1, name: "Weapon Mastery", type: "passive", note: "Stub." },
      { tier: 2, name: "Onslaught", type: "wip", note: "Stub." }
    ],
    spirit: [
      { tier: 1, name: "Summon line", type: "wip", note: "Added Aug 2026." }
    ],
    forge: [
      { tier: 1, name: "Forge line", type: "wip", note: "Skill list empty until logged." }
    ]
  },
  bosses: [
    { id: "hippokampos", name: "Hippokampos", title: "Devourer of the Lost", act: 1, actName: "Act 1 \u2014 Flooded Farmlands", remnant: "Hippokampos Vertebra", remnantConfirmed: true, zone: "Erana Ruins", kind: "optional", samples: [{ id: "hippo-55-0", label: "55 +0", status: "open", kills: 29, date: "2026-09-22", gold: "7.4k-12.2k (most 8.0-10.5k)", epics: 8, infrequents: 11, namedEssences: 2, notes: "Double-Scapula pile once. Shadowsting off-table / shared pool. Target 100.", drops: [{ item: "hippokampos-scapula", count: 6 }, { item: "chaos-cube", count: 1 }, { item: "shadowsting", count: 1, flag: "off-table" }, { item: "essence-typhon-fang", count: 1 }, { item: "essence-iron-will-ajax", count: 1 }], infrequentNames: ["Essence Sword of Wisdom","Essence Sword of Clarity","Essence Sword of Excellence","Essence Sword of the Invoker","Unscorched Sharptooth Greaves of Sanctuary","Empowered Benthic Wand of Precision","Tormenting Studded Spirit Scepter of Knowledge","Piercing Star Mace of Zelus","Venomous Fume Scepter of Crippling","Invoker's Force Crescent Staff of Clarity","Freezing Studded Spirit Scepter of Wisdom"] }] },
    { id: "aristomenes", name: "Aristomenes", title: "King of Messenia", act: 1, actName: "Act 1 \u2014 Flooded Farmlands", remnant: "Aristomenes' Skull", remnantConfirmed: true, zone: "Pyrgos Graveyard Tomb", kind: "optional", notes: "Burial Rites. Graveyard west of The Enclave. Kill Hyllus, Otonia, Tydeus, light two hall braziers, fight in the tomb depths. Knot at the tomb after offering the Skull.", samples: [] },
    { id: "pan", name: "Pan", title: "God of the Wild", act: 1, actName: "Act 1 \u2014 Flooded Farmlands", remnant: "Pan's Horn", remnantConfirmed: true, zone: "Pan's Sanctum", waypoint: "Pan's Sanctum", image: "img/Pan.jpg", kind: "story", samples: [{ id: "pan-55-0", label: "55 +0", status: "closed", kills: 100, date: "2026-09-23", gold: "11k-18k", epics: 5, infrequents: 11, infrequentAttribution: "zone-likely", uniqueAttribution: "pool-unproven", namedEssences: 8, notes: "Logged as observed in the Pan pile. Infrequents and most uniques stay OFF Pan's exclusive pool until proven. Named essences listed as seen here. Best keep: Chromatic Staff.", drops: [{ item: "captains-signet", count: 2, flag: "pile / pool unproven" }, { item: "thorny-maul", count: 1, flag: "pile / pool unproven" }, { item: "chromatic-staff", count: 1, flag: "pile / pool unproven" }, { item: "ram-bow-ii", count: 1, flag: "pile / pool unproven" }, { item: "essence-apollo", count: 2 }, { item: "essence-zeus", count: 1 }, { item: "essence-hypnos", count: 2 }, { item: "essence-aegis-athena", count: 1 }, { item: "essence-hera-scepter", count: 1 }, { item: "essence-typhon-fang", count: 1 }, { item: "empowered-pyromancer-sword", count: 1, flag: "off-table" }] }] },
    { id: "dysepilogos", name: "Dysepilogos", title: "Denier of Destiny", act: 1, actName: "Act 1 \u2014 Flooded Farmlands", remnant: "Dysepilogos' Amulet", remnantConfirmed: true, zone: "Moirai Temple", kind: "story", samples: [] },
    { id: "ajax", name: "Ajax the Magnificent", title: "Lord of the Skies", act: 2, actName: "Act 2 \u2014 Northern Beaches", remnant: "Ajax the Magnificent's Feather", remnantConfirmed: false, zone: "Gryphon's Lair", kind: "optional", notes: "Community 20-run farm exists. Confirm Memory Knot + shrine offer.", samples: [] },
    { id: "king-of-tides", name: "King of Tides", title: "Leader of the Ichthians", act: 2, actName: "Act 2 \u2014 Northern Beaches", remnant: "King-of-Tides' Tooth", remnantConfirmed: false, zone: "Ichthian Stronghold", kind: "story", notes: "Named body-part drop. Confirm it offers at the Ritual Shrine.", samples: [] },
    { id: "skylla", name: "Skylla", title: "Bane of Sailors", act: 2, actName: "Act 2 \u2014 Northern Beaches", remnant: "Skylla's Scale", remnantConfirmed: false, zone: "Lair of Skylla", kind: "story", notes: "Public 100-kill relic logs exist. Almost certainly remnant-farmable. Confirm shrine item name.", samples: [] },
    { id: "ixion", name: "Ixion", title: "Centaur patriarch", act: 3, actName: "Act 3 \u2014 Arkadian Plains", remnant: "unlogged", remnantConfirmed: false, zone: "Arkadian Plains", kind: "story", notes: "User melted Ixion. Centaurus is his son. Confirm remnant + Memory Knot.", samples: [] },
    { id: "skirion", name: "Skirion", title: "Arena of Champions", act: 3, actName: "Act 3 \u2014 Arkadian Plains", remnant: "unlogged", remnantConfirmed: false, zone: "Arena of Champions", kind: "verify", notes: "Ch3 arena. Community 20-run farm exists; comments say skip vs Act 2 end boss. Confirm Memory Knot vs one-shot arena.", samples: [] },
    { id: "feral-hippokampos", name: "Feral Hippokampos", title: "Lake Taka hippo", act: 3, actName: "Act 3 \u2014 Arkadian Plains", remnant: "Feral Hippokampos Vertebra (name unconfirmed)", remnantConfirmed: false, zone: "Lake Taka", kind: "story", notes: "Act 3 Return the Water / Pangaea. Separate table from Act 1 Hippokampos. Community 20-run farm + remnant hand-in. Confirm exact remnant name.", samples: [] },
    { id: "first-boarman", name: "First Boarman", title: "Buried-city patriarch", act: 4, actName: "Act 4 \u2014 Wild Lands", remnant: "unlogged", remnantConfirmed: false, zone: "Ancient buried city", kind: "story", notes: "Official Ch4 beat. Confirm remnant.", samples: [] },
    { id: "centaurus", name: "Centaurus", title: "King of the centaurs", act: 4, actName: "Act 4 \u2014 Wild Lands", remnant: "unlogged", remnantConfirmed: false, zone: "Temple of Nemesis", kind: "story", notes: "Temple of Nemesis is the real Centaurus fight after a fake. Log the real kill only. Confirm remnant + Memory Knot.", samples: [] }
  ],
  excluded: [
    { name: "Appollonia the Terrible", reason: "Prologue gryphon. No remnant \u2014 cannot return to prologue." },
    { name: "Tauros", reason: "Optional in Moirai. No remnant item listed." },
    { name: "Klepton", reason: "Optional in Moirai. Stopped spawning after Ch3." },
    { name: "Mother Crab", reason: "Quest elite. Later secret crab is non-respawnable." },
    { name: "Fake Centaurus", reason: "Decoy before the real Temple of Nemesis fight. Do not log as a remnant table." }
  ],
  items: [
    { id: "hippokampos-scapula", name: "Hippokampos Scapula", rarity: "epic", slot: "2H axe", unique: true, notes: "Lv55 rolls: 245-271 base, +1 Primary Attack capacity, RSV 366.", mods: ["Cold + poison + strike mix", "+1 Primary Attack capacity"] },
    { id: "shadowsting", name: "Shadowsting", rarity: "epic", slot: "spear", unique: true, notes: "Hippo drop; shared unique / off-table until second source." },
    { id: "chaos-cube", name: "Chaos Cube", rarity: "epic", slot: "talisman", unique: true },
    { id: "captains-signet", name: "Captain's Signet", rarity: "epic", slot: "ring", unique: true, notes: "2 in 100 Pan 55 +0." },
    { id: "thorny-maul", name: "Thorny Maul", rarity: "epic", slot: "2H mace", unique: true },
    { id: "chromatic-staff", name: "Chromatic Staff", rarity: "epic", slot: "staff", unique: true, notes: "Best keep from Pan 55 +0." },
    { id: "ram-bow-ii", name: "Ram Bow II", rarity: "epic", slot: "bow", unique: true },
    { id: "fotia", name: "Fotia", rarity: "epic", slot: "staff", unique: true, notes: "+2 Capacity to Fire Skills (Lv50 piece)." },
    { id: "essence-apollo", name: "Essence of Apollo", rarity: "named-essence", slot: "relic" },
    { id: "essence-zeus", name: "Essence of Zeus", rarity: "named-essence", slot: "relic" },
    { id: "essence-hypnos", name: "Essence of Hypnos", rarity: "named-essence", slot: "relic" },
    { id: "essence-aegis-athena", name: "Essence of Aegis of Athena", rarity: "named-essence", slot: "relic" },
    { id: "essence-hera-scepter", name: "Hera's Scepter (essence)", rarity: "named-essence", slot: "relic" },
    { id: "essence-typhon-fang", name: "Essence of Typhon's Serpentine Fang", rarity: "named-essence", slot: "relic" },
    { id: "essence-iron-will-ajax", name: "Essence of Iron Will of Ajax", rarity: "named-essence", slot: "relic" },
    { id: "empowered-pyromancer-sword", name: "Empowered Essence Sword of the Pyromancer", rarity: "off-table", slot: "sword", notes: "Off-table bird on Pan 55 +0. Rolled Essence Sword — see base page." },
    { id: "essence-sword", name: "Essence Sword", rarity: "infrequent", slot: "sword", notes: "Base infrequent. One page for the base, not each roll. Observed rolls: of Wisdom, of Clarity, of Excellence, of the Invoker (Hippokampos 55 +0); Empowered of the Pyromancer (Pan pile, off-table)." },
    { id: "sharptooth-greaves", name: "Sharptooth Greaves", rarity: "infrequent", slot: "boots", notes: "Base infrequent. Observed roll: Unscorched Sharptooth Greaves of Sanctuary (Hippokampos 55 +0 pile)." },
    { id: "benthic-wand", name: "Benthic Wand", rarity: "infrequent", slot: "wand", notes: "Base infrequent. Observed roll: Empowered Benthic Wand of Precision (Hippokampos 55 +0 pile)." },
    { id: "studded-spirit-scepter", name: "Studded Spirit Scepter", rarity: "infrequent", slot: "scepter", notes: "Base infrequent. Observed rolls: Tormenting of Knowledge, Freezing of Wisdom (Hippokampos 55 +0 pile)." },
    { id: "star-mace", name: "Star Mace", rarity: "infrequent", slot: "mace", notes: "Base infrequent. Observed roll: Piercing Star Mace of Zelus (Hippokampos 55 +0 pile)." },
    { id: "fume-scepter", name: "Fume Scepter", rarity: "infrequent", slot: "scepter", notes: "Base infrequent. Observed roll: Venomous Fume Scepter of Crippling (Hippokampos 55 +0 pile)." },
    { id: "force-crescent-staff", name: "Force Crescent Staff", rarity: "infrequent", slot: "staff", notes: "Base infrequent. Observed roll: Invoker's Force Crescent Staff of Clarity (Hippokampos 55 +0 pile)." }
  ]
};
