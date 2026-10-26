const LADDER_DATA = {
  'Born Leader': {
    desc: 'You inspire allies and dominate the social battlefield.',
    abilities: [
      { level: 1, name: 'Commanding Presence', desc: 'Allies in 30 ft gain +1 to attack rolls while you are conscious.' },
      { level: 2, name: 'Tactical Order', desc: 'Bonus action: one ally can move or reload without using their reaction.' },
      { level: 5, name: 'Rally', desc: 'Once per rest, grant temporary HP equal to your level + CHA mod to allies in 30 ft.' },
      { level: 10, name: 'Battlefield Authority', desc: 'Your Commanding Presence bonus becomes +2.' }
    ]
  },
  'Cyberborn': {
    desc: 'Augmented body, digital mind.',
    abilities: [
      { level: 1, name: 'Neural Jack', desc: 'Advantage on Computers and Electronics checks.' },
      { level: 2, name: 'Overclock', desc: 'Once per rest, take an extra action; suffer 1 level of exhaustion after.' },
      { level: 5, name: 'System Shield', desc: 'Resistance to psychic and lightning damage.' },
      { level: 10, name: 'Ghost Protocol', desc: 'You can become undetectable to electronic sensors for 1 minute / long rest.' }
    ]
  },
  'Heavy Armor': {
    desc: 'Walking tank. Armor is your second skin.',
    abilities: [
      { level: 1, name: 'Armored Hide', desc: 'While wearing heavy armor, +1 AC and ignore speed penalty.' },
      { level: 2, name: 'Bulwark', desc: 'Impose disadvantage on attacks against adjacent allies.' },
      { level: 5, name: 'Shock Absorber', desc: 'Resistance to bludgeoning from non-magical / ballistic sources while armored.' },
      { level: 10, name: 'Juggernaut Charge', desc: 'Dash into a creature; STR save or knocked prone and take extra damage.' }
    ]
  },
  'Infiltrator': {
    desc: 'Ghost in the machine and the shadows.',
    abilities: [
      { level: 1, name: 'Ghost Step', desc: 'Advantage on Stealth; move full speed while hidden.' },
      { level: 2, name: 'Weak Point', desc: 'Once per turn, add 1d6 damage when attacking from hiding.' },
      { level: 5, name: 'False Identity', desc: 'Create airtight cover identities; advantage on Deception for them.' },
      { level: 10, name: 'Vanishing Act', desc: 'Bonus action Hide even when lightly obscured.' }
    ]
  },
  'Juggernaut': {
    desc: 'Unstoppable physical force.',
    abilities: [
      { level: 1, name: 'Thick Skin', desc: '+1 max HP per level.' },
      { level: 2, name: 'Power Through', desc: 'Ignore difficult terrain; advantage vs shove/prone.' },
      { level: 5, name: 'Adrenal Surge', desc: 'When bloodied, gain +2 STR and temp HP equal to level.' },
      { level: 10, name: 'Unbreakable', desc: 'Once per long rest, drop to 1 HP instead of 0.' }
    ]
  },
  'Martial Artist': {
    desc: 'Body is the weapon.',
    abilities: [
      { level: 1, name: 'Unarmed Arsenal', desc: 'Unarmed strikes deal 1d6 and count as finesse.' },
      { level: 2, name: 'Flow State', desc: 'After hitting with unarmed, make a second unarmed as bonus action.' },
      { level: 5, name: 'Pressure Point', desc: 'Unarmed hit can force CON save or target speed becomes 0 until your next turn.' },
      { level: 10, name: 'Perfect Form', desc: 'Unarmed damage becomes 1d10; add WIS mod to AC when unarmored.' }
    ]
  },
  'Outlaw': {
    desc: 'Rules are for other people.',
    abilities: [
      { level: 1, name: 'Dirty Fighting', desc: 'Once per turn deal +1d6 when you have advantage or an ally is adjacent.' },
      { level: 2, name: 'Street Smarts', desc: 'Advantage on Insight and Intimidation in urban environments.' },
      { level: 5, name: 'Escape Artist', desc: 'Disengage or Hide as a bonus action.' },
      { level: 10, name: 'One Last Job', desc: 'When you reduce a creature to 0 HP, regain 1 use of Dirty Fighting die.' }
    ]
  },
  'Psion': {
    desc: 'Mind over matter.',
    abilities: [
      { level: 1, name: 'Telepathic Whisper', desc: 'Speak telepathically to any creature you can see within 60 ft.' },
      { level: 2, name: 'Mind Spike', desc: 'Ranged psychic attack 1d8 + INT; target has disadvantage on next attack.' },
      { level: 5, name: 'Kinetic Barrier', desc: 'Reaction: reduce damage by 1d10 + INT mod (prof/day).' },
      { level: 10, name: 'Domination', desc: 'Once per long rest, charm a humanoid for 1 minute (WIS save).' }
    ]
  },
  'Runner': {
    desc: 'Speed is life.',
    abilities: [
      { level: 1, name: 'Sprint Protocol', desc: '+10 ft speed; Dash as bonus action once per rest.' },
      { level: 2, name: 'Parkour', desc: 'Climb and long jump use full speed; no Athletics check for basic vaults.' },
      { level: 5, name: 'Afterimage', desc: 'When you Dash, opportunity attacks against you have disadvantage.' },
      { level: 10, name: 'Blitz', desc: 'Move through enemy spaces; each enemy you pass must save or be off-balance.' }
    ]
  },
  'Savant': {
    desc: 'Hyper-focused genius.',
    abilities: [
      { level: 1, name: 'Hyperfocus', desc: 'Choose one skill; double proficiency for it.' },
      { level: 2, name: 'Rapid Analysis', desc: 'Bonus action: learn one resistance, vulnerability, or weak point of a target.' },
      { level: 5, name: 'Calculated Strike', desc: 'Once per turn add INT mod to damage of an attack you hit.' },
      { level: 10, name: 'Master Plan', desc: 'Grant allies advantage on the first round of combat once per long rest.' }
    ]
  },
  'Survivor': {
    desc: 'Hard to kill. Harder to stop.',
    abilities: [
      { level: 1, name: 'Grit', desc: 'Advantage on death saves; stabilize on a 18–20.' },
      { level: 2, name: 'Scavenger', desc: 'Find useful scrap/ammo during short rests in urban/ruins.' },
      { level: 5, name: 'Second Wind', desc: 'Bonus action heal 1d10 + level once per rest.' },
      { level: 10, name: 'Die Hard', desc: 'When you fail a death save, you can choose to succeed instead (1/long rest).' }
    ]
  },
  'Techie': {
    desc: 'If it has a circuit, you own it.',
    abilities: [
      { level: 1, name: 'Jury Rig', desc: 'Repair or temporarily boost a device in 1 minute.' },
      { level: 2, name: 'Drone Link', desc: 'You have a small scout drone (AC 12, 5 HP, fly 30).' },
      { level: 5, name: 'EMP Pulse', desc: 'Once per rest, 15 ft sphere disables unshielded electronics for 1 round.' },
      { level: 10, name: 'Override', desc: 'Attempt to seize control of a machine or turret (INT contest).' }
    ]
  },
  'Veteran': {
    desc: 'Seen every war. Still standing.',
    abilities: [
      { level: 1, name: 'Combat Experience', desc: '+1 to initiative; cannot be surprised while conscious.' },
      { level: 2, name: 'Suppressing Fire', desc: 'When you miss with a firearm, the target still has disadvantage on next attack.' },
      { level: 5, name: 'No Man Left Behind', desc: 'Drag or carry an ally at full speed without extra checks.' },
      { level: 10, name: 'Old Soldier', desc: 'Once per long rest ignore all conditions until end of your next turn.' }
    ]
  }
};

const CLASS_DATA = {
  'Gunslinger': {
    desc: 'Fast hands, faster bullets.',
    hitDie: 'd10',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Quick Draw', desc: 'Draw/stow firearms freely; +2 initiative with a firearm in hand.' },
      { level: 2, name: 'Fan the Hammer', desc: 'When you take Attack, fire twice with a pistol (same target or adjacent).' },
      { level: 5, name: 'Deadeye', desc: 'Ignore half cover; +1d8 damage on critical hits with firearms.' }
    ]
  },
  'Heavy': {
    desc: 'Biggest guns. Biggest hits.',
    hitDie: 'd12',
    primaryStat: 'STR',
    abilities: [
      { level: 1, name: 'Heavy Weapon Specialist', desc: 'No disadvantage for firing heavy weapons at close range.' },
      { level: 2, name: 'Suppressive Barrage', desc: 'Area fire: creatures in a line make DEX save or become pinned.' },
      { level: 5, name: 'Overkill', desc: 'Extra damage die with heavy firearms and launchers.' }
    ]
  },
  'Infiltrator': {
    desc: 'Silent entry, silent exit.',
    hitDie: 'd8',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Sneak Attack', desc: '1d6 extra damage once per turn when you have advantage or an ally is adjacent.' },
      { level: 2, name: 'Infiltration Tools', desc: 'Proficiency with thieves’ tools, hacking kits, and disguise kits.' },
      { level: 5, name: 'Assassinate', desc: 'Advantage on attack vs creatures that have not acted; crit on surprise hit.' }
    ]
  },
  'Martial Artist': {
    desc: 'Strikes faster than a trigger pull.',
    hitDie: 'd8',
    primaryStat: 'DEX / WIS',
    abilities: [
      { level: 1, name: 'Flurry', desc: 'After Attack action with unarmed/melee, two unarmed strikes as bonus action.' },
      { level: 2, name: 'Evasion Style', desc: 'Add WIS mod to AC while unarmored and not using a shield.' },
      { level: 5, name: 'Stunning Palm', desc: 'Once per rest force CON save or stun until end of your next turn.' }
    ]
  },
  'Medic': {
    desc: 'Keeps the squad breathing.',
    hitDie: 'd8',
    primaryStat: 'WIS',
    abilities: [
      { level: 1, name: 'Field Medicine', desc: 'Stabilize as bonus action; Medicine checks restore 1 HP on success.' },
      { level: 2, name: 'Stim Pack', desc: 'Heal 2d8 + WIS as an action (uses equal to prof bonus / long rest).' },
      { level: 5, name: 'Trauma Surgeon', desc: 'Remove one condition or end ongoing poison/bleed on a touch.' }
    ]
  },
  'Officer': {
    desc: 'Tactical command presence.',
    hitDie: 'd10',
    primaryStat: 'CHA',
    abilities: [
      { level: 1, name: 'Issue Order', desc: 'Bonus action: ally within 30 ft can move or make one attack.' },
      { level: 2, name: 'Coordinated Fire', desc: 'When you hit, next ally attack against that target has advantage.' },
      { level: 5, name: 'Command Aura', desc: 'Allies in 10 ft add your CHA mod to saving throws vs fear and charm.' }
    ]
  },
  'Sniper': {
    desc: 'One shot. One story.',
    hitDie: 'd10',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Steady Aim', desc: 'Bonus action: advantage on your next ranged attack this turn (speed 0).' },
      { level: 2, name: 'Long Range Expert', desc: 'No disadvantage at long range with rifles; +20 ft range.' },
      { level: 5, name: 'Kill Confirmed', desc: 'Critical hits with rifles deal one extra damage die and ignore cover.' }
    ]
  },
  'Techie': {
    desc: 'Wires, drones, and chaos.',
    hitDie: 'd8',
    primaryStat: 'INT',
    abilities: [
      { level: 1, name: 'Tech Expertise', desc: 'Double proficiency on Computers, Electronics, and Technology.' },
      { level: 2, name: 'Deployable', desc: 'Deploy a turret or scanner (stats scale with level).' },
      { level: 5, name: 'System Crack', desc: 'Action: shut down or hijack a device within 30 ft (INT contest).' }
    ]
  },
  'Commando': {
    desc: 'Elite all-range combatant.',
    hitDie: 'd10',
    primaryStat: 'STR / DEX',
    abilities: [
      { level: 1, name: 'Assault Doctrine', desc: 'Proficiency in Athletics and Stealth; +5 ft speed.' },
      { level: 2, name: 'Breach and Clear', desc: 'After moving 15+ ft, first attack deals +1d6 and may shove.' },
      { level: 5, name: 'Special Ops', desc: 'Ignore reload once per turn; advantage on initiative in planned assaults.' }
    ]
  },
  'Driver/Pilot': {
    desc: 'If it moves, you can weaponize it.',
    hitDie: 'd8',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Wheelman', desc: 'Vehicles you drive gain +2 AC and you have advantage on Driving/Piloting.' },
      { level: 2, name: 'Ram', desc: 'Vehicle melee attack dealing collision damage; DEX save or prone.' },
      { level: 5, name: 'Evasive Pattern', desc: 'While driving, impose disadvantage on attacks against your vehicle.' }
    ]
  }
};

const WEAPON_DATA = {
  'M4 Carbine': { type: 'Assault Rifle', damage: '2d6', magSize: 30, range: '80/300', properties: 'Burst, Two-Handed' },
  'AK-47': { type: 'Assault Rifle', damage: '2d6+1', magSize: 30, range: '70/280', properties: 'Burst, Reliable' },
  'FN SCAR': { type: 'Assault Rifle', damage: '2d6+1', magSize: 30, range: '90/320', properties: 'Burst, Accurate' },
  'MP5': { type: 'SMG', damage: '1d8', magSize: 30, range: '40/160', properties: 'Burst, Light' },
  'Uzi': { type: 'SMG', damage: '1d8', magSize: 25, range: '30/120', properties: 'Spray, Light' },
  'P90': { type: 'SMG', damage: '1d10', magSize: 50, range: '50/150', properties: 'Burst, High-Cap' },
  'Glock 17': { type: 'Pistol', damage: '1d6', magSize: 17, range: '50/150', properties: 'Light, Reload' },
  'Desert Eagle': { type: 'Pistol', damage: '1d10', magSize: 7, range: '40/120', properties: 'Heavy Kick' },
  'M9 Beretta': { type: 'Pistol', damage: '1d6', magSize: 15, range: '50/150', properties: 'Light' },
  '.44 Magnum': { type: 'Revolver', damage: '2d6', magSize: 6, range: '40/120', properties: 'Powerful, Reload' },
  'Combat Shotgun': { type: 'Shotgun', damage: '2d8', magSize: 8, range: '20/60', properties: 'Spread, Reload' },
  'Sawed-Off': { type: 'Shotgun', damage: '2d8', magSize: 2, range: '10/30', properties: 'Scatter, Concealable' },
  'Sniper Rifle': { type: 'Sniper', damage: '2d10', magSize: 5, range: '150/600', properties: 'Accurate, Two-Handed' },
  'Anti-Materiel': { type: 'Sniper', damage: '2d12', magSize: 4, range: '200/800', properties: 'Armor Piercing, Heavy' },
  'LMG': { type: 'Heavy', damage: '2d8', magSize: 100, range: '80/300', properties: 'Suppressive, Two-Handed' },
  'Rocket Launcher': { type: 'Heavy', damage: '4d10', magSize: 1, range: '100/400', properties: 'Explosive, Reload' },
  'Combat Knife': { type: 'Melee', damage: '1d4', magSize: 0, range: '5', properties: 'Finesse, Light' },
  'Katana': { type: 'Melee', damage: '1d8', magSize: 0, range: '5', properties: 'Finesse, Slash' },
  'Stun Baton': { type: 'Melee', damage: '1d6', magSize: 0, range: '5', properties: 'Shock, Nonlethal' }
};

const ARMOR_DATA = {
  'Plain Clothes': { type: 'None', baseAc: 10, maxDex: 99, props: 'Normal clothing' },
  'Leather Jacket': { type: 'Light', baseAc: 11, maxDex: 99, props: 'Stylish, Concealed' },
  'Undercover Vest': { type: 'Light', baseAc: 12, maxDex: 99, props: 'Hidden under clothes' },
  'Tactical Vest': { type: 'Medium', baseAc: 14, maxDex: 2, props: 'Mag pouches, Standard issue' },
  'Riot Armor': { type: 'Medium', baseAc: 15, maxDex: 2, props: 'Ballistic plates' },
  'Heavy Combat Suit': { type: 'Heavy', baseAc: 17, maxDex: 0, props: 'Full plate modern, No Stealth' },
  'Powered Exosuit': { type: 'Heavy', baseAc: 18, maxDex: 0, props: 'Servo-assisted, Loud' }
};
