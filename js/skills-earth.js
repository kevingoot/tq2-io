/* Overrides the Earth stub in data.js. Loaded after data.js. */
(function () {
  if (!window.TQ2 || !window.TQ2.skills) return;
  if (!window.TQ2.masteries.some(function (m) { return m.id === "core"; })) {
    window.TQ2.masteries.unshift({ id: "core", name: "Core", tag: "Shared basics", color: "#a8a29e" });
  }
  window.TQ2.skills.core = {
    source: "Client screenshots 2026-09-24. Two Primary Attack nodes (ranged snapshot + melee twin), Barrier, Dodge.",
    layout: { actives: [["Primary Attack", "Primary Attack (Melee)"], ["Barrier", "Dodge"]], passives: [] },
    actives: [
      { name: "Primary Attack", type: "active", tags: "Basic \u00b7 Ranged Attack \u00b7 Projectile", cost: "5.5 Energy (Initial)", cd: "None", note: "100% Weapon Damage. Attack Time 0.80s. On use gain Overwhelm while you have an Overwhelm skill equipped.", mods: ["Tailwind 3","Enhanced Ailment 5","Vitality Damage 5","Hamstring 3","Retaliating Attack 3","Fire Explosion 3","Fragmentation","Volley 3","Punish 3","Indomitable 3","Shield Attack 1","Gain Flow 1","Heavy Impact 3","Toxicity"] },
      { name: "Primary Attack (Melee)", type: "active", tags: "Basic \u00b7 Weapon Attack", cost: "Energy", cd: "None", note: "Second Core Primary Attack node. Melee twin. Inspect not sent.", mods: [] },
      { name: "Barrier", type: "active", tags: "Spell", cost: "63.8 Energy (Initial)", cd: "8.6s", note: "Absorbing barrier that decays. 1 Energy = 10.25 Energy Barrier on this snapshot. Cast 0.36s.", mods: ["Guard 1","Preparation 1","Reflecting Guard 3","Enduring Barrier 3","Fleeting Barrier 3","Barrier Heal 3","Invigorating Guard 3","Ailment Cleanse 1","Fast Barrier 3"] },
      { name: "Dodge", type: "active", tags: "Movement", cost: "No Cost", cd: "4.3s", note: "Short dash. Light or Medium Armor increases Dodge Cooldown Rate.", mods: ["Cooldown Charge 2","Speed 3","Celerity 3","Flow 1","Distance 3","Teleport 1","Fire Explosion 3","Dash Attack 3"] }
    ],
    passives: []
  };
  window.TQ2.skills.earth = {
    source: "Client screenshots 2026-09-24. Earth actives + all 19 passives.",
    layout: {
      actives: [
        ["Fissure", "Roiling Magma"],
        ["Earth Enchantment", "Flame Volley", "Earthquake", "Core Dweller"],
        ["Ignite", "Ring of Flame"],
        ["Volcanic Eruption", "Stone Form"]
      ],
      passives: [
        ["Cinderbreak", "Stoneborn Army", "Erosion", "Fire Domain", "Stone Domain"],
        ["Cremation", "Concussive Force", "Stable Barrier"],
        ["Combustion", "Overheat", "Magma Shell", "Igneous Power"],
        ["Earth Attunement", "Earth Affliction", "Earth Wielder", "Earth Barrier", "Earth Invoker"],
        ["Grand Magic", "Arcane Abundance"]
      ]
    },
    actives: [
      { name: "Fissure", type: "active", tags: "Main \u00b7 Spell \u00b7 Overwhelm \u00b7 Area \u00b7 Exhaust", cost: "77 Energy (Initial)", cd: "None", note: "8m line, 923 Strike. Stays 2s, slows 20%. Full Overwhelm = 50% more Damage.", mods: ["Vulnerable on Hit 1","Enhanced Damage 10","Shockwave 3","Spikes 3","Interrupt 3","Consume Overwhelm 1","Bulwark on Hit 1","Lava Fissure 3","Slam Attack 1","Staggering Force 3","Additional Fissures 2","Core Dweller Command 1"] },
      { name: "Roiling Magma", type: "active", tags: "Main \u00b7 Spell \u00b7 Area \u00b7 Projectile \u00b7 Fire", cost: "110 Energy (Initial)", cd: "None", note: "Magma ball explodes on contact. 923 Fire in 2.2m.", mods: ["Enhanced Damage 10","Overload 3","Grandeur 3","Enhanced Ailment 5","Fragmentation 5","Consume Overwhelm 3","Vortex 3"] },
      { name: "Earth Enchantment", type: "sustained", tags: "Aura \u00b7 Buff", cost: "70 Energy (Reserved)", cd: "None", note: "18m aura: +20% Fire and +20% Physical.", mods: ["Fire Resistance 5","Health Reservation 1","Strike Imbuement 2","Flame Shield 3","Conservation 5","Fire Imbuement 2","Enhanced Armor 5","Earth Enhancement 5"] },
      { name: "Flame Volley", type: "active", tags: "Main \u00b7 Spell \u00b7 Projectile \u00b7 Channel \u00b7 Fire", cost: "No Cost", cd: "None", note: "Projectiles from above, 192 Fire in 0.9m. Amplify per 15 Energy spent, max 20.", mods: ["Enhanced Amplify 5","Orbit 2","Mayhem 1","Overwhelm Gain 1","Enhanced Ailment 5","Amplified Damage 5","Conservation 3"] },
      { name: "Earthquake", type: "active", tags: "Main \u00b7 Spell \u00b7 Area \u00b7 Channel", cost: "22 Energy (Initial) + 3.3/s", cd: "None", note: "Stages every 1.0s. Stage 1 Strike 4.0m. +120% Damage per extra Stage. Stage 2 stuns 0.6s.", mods: ["Channel Barrier 3","Extended Charge 1","Aftershock 3","Stone Protection 5","Trembles 3","Heavy Impact 3","Fast Channel 3"] },
      { name: "Core Dweller", type: "sustained", tags: "Greater Summon \u00b7 Spell \u00b7 Channel", cost: "40/s + 60 Reserved", cd: "None", note: "Auto-summons Core Dweller. Channel empower heals 8% HP/s.", mods: ["Detonation 1","Enhanced Damage 5","Enhanced Health 3","Augmenting Channel 2","Short Restoration 1","Slam 1","Autonomous Strength 1","Enhanced Speed 3","Empowered Assault 3","Protective Channel 2","Frenzied 1"] },
      { name: "Ignite", type: "active", tags: "Main \u00b7 Spell \u00b7 Fire \u00b7 Exhaust", cost: "66 Energy (Initial)", cd: "None", note: "Ignite 4s. Extra capacity. Farmer skill.", mods: ["Flame Burst 3","Fire Explosion 3","Flame Volley Trigger 1","Resistance Reduction 5","Proliferation 1"] },
      { name: "Ring of Flame", type: "sustained", tags: "Spell \u00b7 Area \u00b7 Fire", cost: "85 Energy (Reserved)", cd: "None", note: "67 Fire every 0.5s in 2.0m. Amplify max 40.", mods: ["Permanency 1","Blazing Heat 5","Enhanced Amplify 5","Overload 3","Weakening Heat 3","Scorching Weapon 2","Empowering Flame 3"] },
      { name: "Volcanic Eruption", type: "active", tags: "Main \u00b7 Spell \u00b7 Area \u00b7 Exhaust \u00b7 Fire", cost: "88 Energy (Initial)", cd: "None", note: "Strike 3m + root 1s, then Fire eruption. Reactivate to end early.", mods: ["Enhanced Damage 10","Lava Field 5","Aftershocks 5","Overload 5","Enhanced Duration 3","Forced Eruptions 5","Escalating Eruption 5"] },
      { name: "Stone Form", type: "active", tags: "Spell", cost: "No Cost", cd: "8.6s", note: "Stone 5s. 100% less Damage, cannot act. Recast or Movement Skill cancels.", mods: ["Rapid Regeneration 5","Rock Explosion 5","Strike Retaliation 5","Unshackled 1","Enhanced Duration 3","Shockwave 5","Overload Cleanse 2"] }
    ],
    passives: [
      { name: "Cinderbreak", type: "passive", note: "Skill Damage + Fire Pen + Physical Pen.", feats: "8/16 Physical Penetration, Fire Penetration, Penetration. Taken: +10% Fire Pen" },
      { name: "Stoneborn Army", type: "passive", note: "Summon Damage + Summon Crit Chance.", feats: "8/16 Minion Master, Summon Defenses, Summon Critical Hit Chance" },
      { name: "Stable Barrier", type: "passive", note: "Barrier % + Barrier Decay Threshold.", feats: "8/16 Barrier, Energy to Barrier, Barrier Decay" },
      { name: "Fire Domain", type: "passive", note: "Fire Damage, Burn Damage, Fire Penetration. L16: 32% Fire, 32% Burn, +12.8% Fire Pen.", feats: "Fire Damage, Fire Penetration, Burn Damage. Taken: 25% Burn Damage, +10% Fire Pen" },
      { name: "Erosion", type: "passive", note: "Ailment Chance, Stagger Power, Burn, Bleed.", feats: "8/16" },
      { name: "Stone Domain", type: "passive", note: "Physical Damage + Physical Penetration.", feats: "8/16 Physical Damage, Bleed and Stagger, Physical Penetration" },
      { name: "Grand Magic", type: "passive", note: "Spell Damage + flat Max Energy.", feats: "6/12" },
      { name: "Arcane Abundance", type: "passive", note: "Flat + % Max Energy.", feats: "Cost, Regen, Energy. Taken: Regen 1% Energy/s; 15% Max Energy and 10% increased Skill Cost" },
      { name: "Concussive Force", type: "passive", note: "Unlocks Stagger-Stun.", feats: "5/10 Stagger Amount, Damage on Immobilized, Stun Duration" },
      { name: "Combustion", type: "passive", note: "Fire Damage. Burning kill: 25% chance Fire explosion.", feats: "Chance, Radius, Damage. Taken: +10% explosion chance, +0.5m radius" },
      { name: "Overheat", type: "passive", note: "Damage with Overload abilities.", feats: "5/10 Barrier, Fire Damage, Energy" },
      { name: "Magma Shell", type: "passive", note: "Health, Armor, Fire Res.", feats: "12 Fire Resistance, Overload, Fire Retaliation. Taken: +3% Max Fire Res, +10% Fire Res" },
      { name: "Earth Attunement", type: "passive", note: "Fire / Physical / Summon Damage.", feats: "Area, Weapon, Spell. Taken: 15% Area Damage; 10% Fire and Physical Spell Damage + 4% Cast Speed" },
      { name: "Earth Affliction", type: "passive", note: "Ailment Chance + Ailment Power.", feats: "Ailment Amount, Ailment Power, Ailment Chance. Taken: +2 max stacks all Ailments, 5% Ailment Power" },
      { name: "Earth Invoker", type: "passive", note: "Summon Damage + Summon Health.", feats: "6/12 Summon Damage, Summon Health and Resist, Summon Health and Armor" },
      { name: "Earth Wielder", type: "passive", note: "Attack Damage + Spell Damage.", feats: "4/8 Ailment Chance, Attack Damage, Critical Hit Chance" },
      { name: "Igneous Power", type: "passive", note: "Elemental Damage + Ailment Chance + Summon Elemental.", feats: "6/12 Elemental Damage, Summon Damage, Empower" },
      { name: "Earth Barrier", type: "passive", note: "Barrier % + Armor %.", feats: "4/8 Armor, Barrier Decay, Barrier Decay Threshold" },
      { name: "Cremation", type: "passive", note: "Burn Chance + Burn Power. L8: 45%/45%.", feats: "Ignite, Power, Chance. Taken: 50% Burn Power and 20% less Burn Chance; apply Burn 2% chance per stack to trigger Ignite" }
    ]
  };
})();
