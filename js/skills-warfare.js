/* Overrides the Warfare stub in data.js. Loaded after data.js. */
(function () {
  if (!window.TQ2 || !window.TQ2.skills) return;
  window.TQ2.skills.warfare = {
    source: "Client screenshots 2026-09-25. 10 actives + 20 passives. Numbers from 0-point inspect char (Weapon Proficiency already at 3). Layout actives I bottom\u2192up; passives listed top-down to match Rogue/Earth board render.",
    layout: {
      actives: [
        ["Heavy Attack", "Sweeping Strike"],
        ["Stomp", "Doom Horn", "Leap"],
        ["Barrage", "Rain of Arrows", "Battlefield Awareness"],
        ["Valor", "War Banner"]
      ],
      passives: [
        ["Carnage", "Precision Strikes", "Brutal Impact", "War Domain", "Sanguine Domain"],
        ["Eviscerate", "Unyielding", "Strategos"],
        ["Heart of Battle", "Versatile Defense", "Second Wind", "Leadership", "Frenzied Rage"],
        ["Combat Rush", "Marksmanship", "Invoker of War", "Battle Rage", "Battle Hardened"],
        ["Weapon Proficiency", "Martial Expert"]
      ]
    },
    actives: [
      { name: "Heavy Attack", type: "active", tags: "Main \u00b7 Ranged Attack \u00b7 Projectile \u00b7 Overwhelm \u00b7 Exhaust", cost: "70 Energy (Initial)", cd: "None", note: "368\u2013406 Damage. Attack Time 0.94s. 20% crit, 84% ailment. 225% Weapon Damage. Consumes full Overwhelm for +50% Damage. Melee 2.5m. Ranged: +100% Projectile Speed, +1 Pierce.", mods: ["Bulwark on Hit 1","Second Hit 1","Raging Attack 5","Wind Up 3","Shatter 5","Staggering Force 3","Projectile Penetration 3","Enhanced Ailment 5"] },
      { name: "Sweeping Strike", type: "active", tags: "Main \u00b7 Weapon Attack \u00b7 Area \u00b7 Exhaust", cost: "75 Energy (Initial)", cd: "None", note: "228\u2013251 Damage. Attack Time 0.62s. 20% crit, 14% ailment. 150% Weapon Damage in a 4m circle. Requires Melee.", mods: ["Whirlwind 1","Lasting Whirl 3","Rage Gain 5","Deadly Reach 5","Siphon 5","Ramp Up 5","Lasting Sweep 3","Concentrated Fury 5","Consume Overwhelm 3","Sunder 3"] },
      { name: "Stomp", type: "active", tags: "Main \u00b7 Area", cost: "No Cost", cd: "8s", note: "306 Damage. Use 0.37s. 20% crit, 140% ailment. 125 Strike in 3.0m and Stun 0.4s.", mods: ["Vulnerable on Hit 1","Quick Stomp 1","Interrupt 3","Raging Stomp 3","Enhanced Stun 2","Consume Overwhelm 3","Enhanced Ailment 3","Slow 3"] },
      { name: "Doom Horn", type: "active", tags: "Spell \u00b7 Area", cost: "50 Energy (Initial)", cd: "None", note: "Cast 0.41s. Debuff 4.0m: enemies \u221212% Damage Resistance for 4.0s.", mods: ["Crushing Spirit 3","Frail 3","Long Range 3","Thundering Horn 3","Follow Up 3","Intensity 3","Siphon 3"] },
      { name: "Leap", type: "active", tags: "Movement \u00b7 Area \u00b7 Exhaust", cost: "25 Energy (Initial)", cd: "12s", note: "377 Damage. Use 0.60s. 15% crit, 14% ailment. Leap to target, 155 Strike on landing in 2.0m.", mods: ["Engage 2","Slam Attack 1","Staggering Leap 3","Stun 3","Escape 2","Seismic Leap 3","Rage Gain 3","Cooldown Charge 3"] },
      { name: "Barrage", type: "active", tags: "Main \u00b7 Ranged Attack \u00b7 Projectile \u00b7 Exhaust", cost: "80 Energy (Initial)", cd: "None", note: "57\u201363 Damage. Attack Time 0.93s. 20% crit, 21% ailment. Wind-up then attack 5 times at 44% Weapon Damage. Requires Dagger, Sword, Spear or Ranged. Cancel by moving.", mods: ["Consume Flow 5","Punish 3","Ramp Up 3","Projectile Penetration 3","Riposte 3","Consume Overwhelm 5","Enhanced Ailment 3","Extended Barrage 1","Enhanced Precision 3","Lunge 3"] },
      { name: "Rain of Arrows", type: "active", tags: "Main \u00b7 Ranged Attack \u00b7 Area \u00b7 Exhaust", cost: "100 Energy (Initial)", cd: "None", note: "95\u2013105 Damage. Attack Time 0.50s. 20% crit, 14% ailment. 63% Weapon Damage in 5m every 0.6s. 3 waves. Requires Bow.", mods: ["Consume Flow 5","Downpour 3","Slow 3","Focused Damage 3","Consume Overwhelm 5","Enhanced Ailment 3","Pincushion 3"] },
      { name: "Battlefield Awareness", type: "sustained", tags: "Aura \u00b7 Buff", cost: "40 Energy (Reserved)", cd: "None", note: "Instant. 18m aura: you and allies +107 Armor.", mods: ["Enhanced Regeneration 5","Pierce Retaliation 5","Vitality Damage 5","Inspiration 5","Health Reservation 1","Enhanced Armor 5","Enhanced Glancing Hits 5","Enhanced Resistances 5","Barrier Preservation 5","Conservation 5","Strike Imbuement 2"] },
      { name: "Valor", type: "active", tags: "Spell \u00b7 Blessing \u00b7 Area", cost: "No Cost", cd: "6s", note: "Instant. 401\u2013535 Pierce after 0.7s delay. 20% crit, 7% ailment. Giant sword overhead 6s: +30% Movement Speed, +10% Total Damage, then crash.", mods: ["Burst of Speed 5","Rapid Regeneration 5","Deadly Strike 5","Enhanced Critical Hits 5","Enhanced Damage 10","Vitality Damage 5","Frenzy 5","Enhanced Ailments 5","Enhanced Duration 3","Sword of Damocles 5"] },
      { name: "War Banner", type: "sustained", tags: "Aura", cost: "40 Energy (Initial) + 40 Reserved", cd: "3s", note: "Instant. Place Banner, 6s duration that refreshes while you stand inside. 6m aura: +15% Total Damage.", mods: ["Heal 2","Increased Speed 3","Energy Recovery 5","Extended Duration 3","Increased Damage 5","Damage Protection 3","Enfeeble 3"] }
    ],
    passives: [
      { name: "Weapon Proficiency", type: "passive", note: "Weapon Attack Damage + Attack Speed. L3: 12% Weapon Attack Damage, 6% Attack Speed. L4: 15% / 7%.", feats: "6/12 Ailment Chance, Attack Speed, Critical Chance" },
      { name: "Martial Expert", type: "passive", note: "Physical Damage, Bleed and Stagger Chance, Summon Physical. L1: 8% Phys, 8% Bleed/Stagger Chance, summons +3% Phys. L2: 12% / 12% / +6%.", feats: "6/12 Damage, Pierce, Strike" },
      { name: "Combat Rush", type: "passive", note: "Melee skill hit grants Damage + MS for 1s. L1: +10% Damage, +20% MS. L2: +15% Damage, +20% MS.", feats: "4/8 Armor, Damage, Regeneration" },
      { name: "Marksmanship", type: "passive", note: "Projectile Damage + Projectile Speed. L2: 15%/15%. L3: 20%/20%.", feats: "5/10 Projectile Damage, Projectile Penetration, Projectile Range" },
      { name: "Invoker of War", type: "passive", note: "Unlocks Spell Rage. L1: 4% Spell Damage, 2% Attack Damage. L2: 8% Spell, 4% Attack. Spell Rage: +1% Total Spell Damage and +1% Cast Speed per Rage stack.", feats: "4/8 Cast Speed, Spell Ailment Chance, Spell Critical Hit Chance" },
      { name: "Battle Rage", type: "passive", note: "Rage Effect. L1: 8%. L2: 16%.", feats: "6/12 Rage Overflow, Rage Amount, Rage On Kill" },
      { name: "Battle Hardened", type: "passive", note: "Flat Health, % Health, Armor. L1: +10 Health, 1.5% Health, 2% Armor. L2: +20 / 3% / 4%.", feats: "4/8 Health, Health Regeneration, Armor" },
      { name: "Heart of Battle", type: "passive", note: "+4% Damage per enemy in 12.0m. L1 cap 12%. L2 cap 16%.", feats: "5/10 Enhanced Armor, Enhanced Damage, Enhanced Limit" },
      { name: "Versatile Defense", type: "passive", note: "Armor, Thermic and Natural Res, Dodge CDR. L1: 5% Armor, +2 Res, 4% Dodge CDR. L2: 10% / +4 / 8%.", feats: "4/8 Armor, Barrier, Movement" },
      { name: "Second Wind", type: "passive", note: "Health/sec regen + increased Health Regeneration. L1: 0.1%/s, 5% Regen. L2: 0.2%/s, 10% Regen.", feats: "4/8 Health Regeneration, Low Health, Rage" },
      { name: "Leadership", type: "passive", note: "Summon Damage + Summon Health. L1: +3% Damage, +4% Health. L2: +6% / +8%.", feats: "6/12 Summon Health, Summon Damage, Damage and Health" },
      { name: "Frenzied Rage", type: "passive", note: "Rage Effect + Rage Duration. L1: 5% Effect, 2% Duration. L2: 10% / 4%.", feats: "8/16 Rage Overflow, Rage Stacks, Rage Duration" },
      { name: "Eviscerate", type: "passive", note: "Unlocks Bleed-Rupture. L1: 5% Bleed Chance, 4% Bleed Damage, 4% Rupture Damage. L2: 10%/8%/8%. Bleed-Rupture: when you apply Bleed, +1% chance per Bleed stack on the target to cause Rupture.", feats: "6/12 Rage, Bleed Amount, Bleed Duration" },
      { name: "Unyielding", type: "passive", note: "% Health + Vitality Resistance. L1: 1.5% Health, +4% Vit Res. L2: 3% / +8%.", feats: "6/12 Health, Health for Vigor, Vitality Resistance" },
      { name: "Strategos", type: "passive", note: "Skill Damage + Summon Damage. L1: 3% Skill, summons +3% Damage. L2: 6% / +6%.", feats: "6/12 Skill Damage, Rage for Summon Death, Damage per Ally" },
      { name: "Carnage", type: "passive", note: "Skill Damage + Physical Pen + Vitality Pen. L1: 2% Skill, +0.3% Phys Pen, +0.3% Vit Pen. L2: 4% / +0.6% / +0.6%.", feats: "8/16 Penetration, Physical Penetration, Vitality Penetration" },
      { name: "Precision Strikes", type: "passive", note: "Physical Damage, Vitality Damage, Crit Multi. L1: 2% Phys, 2% Vit, +1% Crit Multi. L2: 4% / 4% / +2%.", feats: "8/16 Critical Hit Chance, Critical Hit Damage, High Critical Hit Damage" },
      { name: "Brutal Impact", type: "passive", note: "Ailment Chance, Stagger Power, Bleed Damage. L1: 2% Chance, 1% Stagger Power, 2% Bleed. L2: 4% / 2% / 4%.", feats: "8/16 Ailment Chance, Ailment Damage, Ailment Duration" },
      { name: "War Domain", type: "passive", note: "Physical Damage, Bleed Damage, Physical Pen. L1: 2% Phys, 2% Bleed, +0.8% Phys Pen. L2: 4% / 4% / +1.6%.", feats: "8/16 Bleed Damage, Physical Damage, Physical Penetration" },
      { name: "Sanguine Domain", type: "passive", note: "Vitality Damage, Lifesteal, Vitality Pen. L1: 2% Vit, 2% Lifesteal, +0.8% Vit Pen. L2: 4% / 4% / +1.6%.", feats: "8/16 Lifesteal, Vitality Damage, Vitality Penetration" }
    ]
  };
})();
