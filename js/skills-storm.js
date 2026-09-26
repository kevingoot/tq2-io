/* Overrides the Storm stub in data.js. Loaded after data.js. */
(function () {
  if (!window.TQ2 || !window.TQ2.skills) return;
  window.TQ2.skills.storm = {
    source: "Client screenshots 2026-09-25. 10 actives + 21 passives. Geometry actives 2-3-3-2, passives 5-5-4-5-2 top\u2192bottom. Ice Shards has extra modifier capacity (I–V jewels). Numbers from 0-point inspect (Ice Shards already invested).",
    layout: {
      actives: [
        ["Ice Shards", "Call Lightning"],
        ["Storm Nimbus", "Ice Nova", "Lightning Bolt"],
        ["Wisp", "Cyclone", "Blink"],
        ["Tempest", "Frostbite"]
      ],
      passives: [
        ["Relentless Invoker", "Unerring Storm", "Wailing Winds", "Lightning Domain", "Cold Domain"],
        ["Tempest Essence", "Deep Freeze", "Lightning Bringer", "Arcane Shielding", "Stormpiercer"],
        ["Lightning Evoker", "Overcharge", "Raging Storm", "Storm Adaptation"],
        ["Storm Attunement", "Storm Affliction", "Storm Guidance", "Storm Protection", "Storm Invoker"],
        ["Raging Mind", "Arcane Influx"]
      ]
    },
    actives: [
      { name: "Ice Shards", type: "active", tags: "Main \u00b7 Basic \u00b7 Spell \u00b7 Projectile \u00b7 Cold", cost: "11 Energy (Initial)", cd: "None", note: "34 DPS. Cast 0.65s. 5% crit, 10% ailment. 19–26 listed. Fire 6 ice shards in a cone dealing 10–14 Cold each. Additional hits vs same enemy deal 80% less Damage. On use gain Overwhelm if an Overwhelm skill is equipped.", mods: ["Torrent 5","Frost Explosion 3","Homing 1","Infused Shard 5","Projectile Penetration 3","Chaos 1","Orbit 1"] },
      { name: "Call Lightning", type: "active", tags: "Main \u00b7 Spell \u00b7 Area \u00b7 Lightning", cost: "50 Energy (Initial)", cd: "None", note: "53 Damage. Cast 0.65s. 5% crit, 20% ailment. Lightning at target, 27 Lightning in 1.6m.", mods: ["Consume Flow 5","Exhaust 1","Cooldown Charge 2","Delayed Impact 3","Rage Gain 3","Overload 3","Cooldown Refresh - Combo 1","Consume Overwhelm 5","Cooldown 1","Repetition 3","Thunderstorm 3","Enhanced Ailment 5","Energy Damage 5","Cooldown Refresh - Energy 1"] },
      { name: "Storm Nimbus", type: "sustained", tags: "Aura \u00b7 Buff", cost: "40 Energy (Reserved)", cd: "None", note: "Instant. 18m aura: you and allies 20% increased Cold Damage and 20% increased Lightning Damage.", mods: ["Inspiration 5","Health Reservation 1","Lightning Imbuement 2","Cold Resistance 5","Thunderstorm 3","Storm Enhancement 5","Conservation 5","Cold Imbuement 2","Lightning Resistance 5","Enhanced Ailments 5","Frost Armor 3"] },
      { name: "Ice Nova", type: "active", tags: "Main \u00b7 Spell \u00b7 Area \u00b7 Cold", cost: "50 Energy (Initial)", cd: "6s", note: "48 Damage. Cast 0.34s. 5% crit, 100% ailment. 27 Cold in 4.0m around you. 25% chance to Freeze for 1.0s.", mods: ["Vulnerable on Hit 1","Cooldown Charge 2","Enhanced Ailment 5","Freezing Blast 5","Frost Explosion 3","Flash Freeze 2","Enhanced Freeze 3","Double Cast 1","Counter 3","Wisp Nova 1"] },
      { name: "Lightning Bolt", type: "active", tags: "Main \u00b7 Basic \u00b7 Spell \u00b7 Projectile \u00b7 Lightning", cost: "10 Energy (Initial)", cd: "None", note: "68 Damage. Cast 0.65s. 5% crit, 10% ailment. 25 Lightning. Infinite Projectile Penetration. Always fires 1 Projectile; extras split off the first hit and deal 60% less. On use gain Overwhelm if an Overwhelm skill is equipped.", mods: ["Gain Flow 1","Electric Burst 3","Additional Projectiles 3","Lightning Strikes 3","Weapon Attack 1","Rage Gain 3","Lightning Fury 1","Overload 3"] },
      { name: "Wisp", type: "sustained", tags: "Sustained \u00b7 Lesser Summon \u00b7 Spell", cost: "60 Energy (Reserved)", cd: "4s", note: "Use 0.65s. Sustained: auto-summon and restore Wisps. Active: Empower Wisps 5s, Restoration Timer −4s, heal this Summon 5% Health. Wisp: Limit 0 on empty inspect, Restoration 12s, Health 480, Base Weapon 17 Lightning. Attacks 100% of Weapon Damage. Intangible while Empowered.", mods: ["Strong Awakening 1","Autonomous Strength 1","Enhanced Speed 3","Short Restoration 1","Summon Limit 3","Fulminate 3","Lightning Strike 1","Detonation 1","Enhanced Damage 5","Empowered Assault 3","Energized 1","Wisp Blast 1","Intangible 1"] },
      { name: "Cyclone", type: "active", tags: "Main \u00b7 Spell \u00b7 Area \u00b7 Cold", cost: "50 Energy (Initial)", cd: "None", note: "16 Damage. Cast 0.65s. 5% crit, 5% ailment. Cyclone deals 4 Cold in 7.0m for 10s. Consumes 8 Energy/sec while active. +5% Damage per Amplify. Gains Amplify when you use a Fire, Cold or Lightning skill (max 10). Loses all Amplify when it ends or is recast.", mods: ["Blizzard 3","Personal Storm 1","Escalation 3","Thunderstorm 3","Localized Storm 3","Violent Resolution 3"] },
      { name: "Blink", type: "active", tags: "Spell \u00b7 Movement \u00b7 Teleport", cost: "No Cost", cd: "12s", note: "Cast 0.01s. Instant teleport to target. While on cooldown, reactivate once to teleport back to the start location.", mods: ["Engage 1","Freeze Explosion 3","Stun Chance 3","Repeat 2","Cold Explosion 2","Thundercrash 5","Thunderstorm 3"] },
      { name: "Tempest", type: "active", tags: "Spell \u00b7 Blessing \u00b7 Lightning", cost: "No Cost", cd: "6s", note: "Instant. 36–49 Damage. 5% crit, 5% ailment. Active: +30% Movement Speed, +10% Total Damage for 6s. Passive: hitting with other skills grants Tempest Amplify (max 50). At 30+ Amplify, consume to hit up to 5 enemies in 6m for 19–25 Lightning. +5% Damage per Amplify consumed.", mods: ["Burst of Speed 3","Enhanced Critical Hits 5","Discharge 5","Enhanced Area 5","Enhanced Ailments 5","Enhanced Duration 3","Enhanced Amplify 5","Accelerated Amplify 1"] },
      { name: "Frostbite", type: "active", tags: "Main \u00b7 Spell \u00b7 Exhaust \u00b7 Cold", cost: "60 Energy (Initial)", cd: "None", note: "113 Damage. Use 0.47s. 0% crit, 0% ailment. Frozen Ground 3s at target; curse Frostbite 5s in 2m. Frozen Ground slows 25%. Cursed take 6 Cold every 0.5s. Frozen Ground damage ramps up to +30% after 3s. At cap, cold explosion deals 13 Cold in 1.5m.", mods: ["Enhanced Damage 10","Frost Explosion 5","Acceleration 5","Enhanced Duration 5","Cold Snap 5","Enhanced Area 5","Enhanced Control Duration 5"] }
    ],
    passives: [
      { name: "Raging Mind", type: "passive", note: "Unlocks Spell Rage. L4: 15% Spell Damage, 7% Cast Speed. L5: 18% Spell, 8% Cast. Spell Rage: +1% Total Spell Damage and +1% Cast Speed per Rage stack.", feats: "6/12 Cast Speed, Ailment Chance, Critical Chance" },
      { name: "Arcane Influx", type: "passive", note: "Energy Regen + Energy. L4: 12% Energy Regen, 4% Energy. L5: 15% / 5%. Feat on node: Reserve 10% Energy, gain 2.5% of Reserved Energy as Energy Regeneration.", feats: "8 Energy Regeneration, Reservation, Energy" },
      { name: "Storm Attunement", type: "passive", note: "Lightning + Cold + Summon Damage. L1: 8% Lightning, 8% Cold, summons +2% Damage. L2: 12% / 12% / +4%.", feats: "6/12 Projectile Damage, Spell Damage, Weapon Damage" },
      { name: "Storm Affliction", type: "passive", note: "Shock/Chill chance and power. L1: 8% Shock Chance and Chill Chance, 8% Shock and Chill Power. L2: 12% / 12%.", feats: "6/12 Power, Max Chill, Max Shock" },
      { name: "Storm Guidance", type: "passive", note: "Projectile Damage / Homing / Range. L1: 10% Proj Damage, 8% Homing, 8% Range. L2: 15% / 12% / 12%.", feats: "5/10 Homing, Penetration, Speed" },
      { name: "Storm Protection", type: "passive", note: "Barrier + conversion + glancing projectiles. L1: 7% Barrier, 5% Barrier Conversion Rate, +2% Glancing Projectile Hit Chance. L2: 14% / 10% / +4%.", feats: "5/10 Barrier, Barrier Decay, Movement" },
      { name: "Storm Invoker", type: "passive", note: "Summon Damage + All Speed. L1: summons +3% Damage, +2% All Speed. L2: +6% / +4%.", feats: "6/12 Summon Damage, Summon Resistances, Summon Speed" },
      { name: "Lightning Evoker", type: "passive", note: "Lightning Strike proc. L1: +0 Lightning Strike Damage; 4% chance on active non-channel skill to hit a random enemy within 12m with a Lightning Strike. L2: +1 Strike Damage, 8% chance.", feats: "8/16 Damage, Rage, Shock" },
      { name: "Overcharge", type: "passive", note: "Overload skill damage. L1: 10% increased Damage with Overload abilities. L2: 15%.", feats: "5/10 Energy, Duration, Lightning Damage" },
      { name: "Raging Storm", type: "passive", note: "Damage + Rage Effect. L1: 2% Damage, 5% Rage Effect. L2: 4% / 10%.", feats: "8/16 Rage Amount, Rage Duration, Rage Overflow" },
      { name: "Storm Adaptation", type: "passive", note: "Barrier Decay Threshold + Cold/Lightning Res. L1: +8 Barrier Decay Threshold, +4% Cold Res, +4% Lightning Res. L2: +16 / +8% / +8%.", feats: "5/10 Cold Resistance, Lightning Resistance, Overload" },
      { name: "Tempest Essence", type: "passive", note: "Elemental Damage, Crit, Summon Elemental. L1: 3% Elemental, +0.2% Crit, summons +3% Elemental. L2: 6% / +0.4% / +6%.", feats: "6/12 Elemental Damage, Summon Crit, Summon Restoration Time" },
      { name: "Deep Freeze", type: "passive", note: "Unlocks Chill - Freeze. L1: 5% Chill Chance, 3% Freeze Duration, 5% Damage vs Immobilized. L2: 10% / 6% / 10%. Chill-Freeze: when you apply Chill, +1% chance per Chilled stack on target to Freeze for 1.5s.", feats: "6/12 Freeze Duration, Chill Duration, Chill Amount" },
      { name: "Lightning Bringer", type: "passive", note: "Flat Lightning Strike Damage. L1: +1. L2: +2.", feats: "8/16 Fire Explosions, Reservation, Critical Hit Chance" },
      { name: "Arcane Shielding", type: "passive", note: "Barrier + Barrier Regen. L1: 6% Barrier, +2 Barrier Regeneration. L2: 12% / +3.", feats: "6/12 Reservation, Barrier Decay, Barrier Cooldown" },
      { name: "Stormpiercer", type: "passive", note: "Skill Damage + Lightning/Cold Pen. L1: 2% Skill, +0.3% Lightning Pen, +0.3% Cold Pen. L2: 4% / +0.6% / +0.6%.", feats: "8/16 Penetration, Cold Penetration, Lightning Penetration" },
      { name: "Relentless Invoker", type: "passive", note: "Summon Damage + Crit. L1: summons +3% Damage, +0.5% Crit. L2: +6% / +1%.", feats: "8/16 Minion Master, Summon Critical Hit Chance, Summon Speed" },
      { name: "Unerring Storm", type: "passive", note: "Lightning, Cold, Crit Multi. L1: 2% Lightning, 2% Cold, +1% Crit Multi. L2: 4% / 4% / +2%.", feats: "8/16 Critical Hit Chance, Critical Hit Damage, High Critical Hit Damage" },
      { name: "Wailing Winds", type: "passive", note: "Ailment Chance, Chill Power, Shock Damage. L1: 2% Ailment Chance, 1% Chill Power, 2% Shock Damage. L2: 4% / 2% / 4%.", feats: "8/16 Ailment Chance, Ailment Damage, Ailment Duration" },
      { name: "Lightning Domain", type: "passive", note: "Lightning Damage, Shock Damage, Lightning Pen. L1: 2% Lightning, 2% Shock, +0.8% Lightning Pen. L2: 4% / 4% / +1.6%.", feats: "8/16 Lightning Damage, Shocked Damage, Lightning Penetration" },
      { name: "Cold Domain", type: "passive", note: "Cold Damage, Chill Power, Cold Pen. L1: 2% Cold, 1% Chill Power, +0.8% Cold Pen. L2: 4% / 2% / +1.6%.", feats: "8/16 Cold Damage, Chilled Power, Cold Penetration" }
    ]
  };
})();
