const LADDER_DATA = {
    'Born Leader': {
    desc: 'Confidence, presence, and tactical command. (Key: CHA, INT)',
    abilities: [
      { level: 1, name: 'Brains and Good Looks', desc: 'Use INT instead of WIS for Insight/Perception. After long rest: gain +2 to CHA or INT until you attack or cast a spell (set CHA or INT as primary ladder ability, max 22).' },
      { level: 4, name: 'Compelling Directive', desc: '+1 to any stat (max 20, primary 22). After long rest, roll a d20 and store it; swap it with any roll you or a communicating ally makes (no action, 2 swaps/long rest).' },
      { level: 8, name: 'Social Sciences', desc: '+1 to any stat (max 20, primary 22). Compelling Directive improves: swap up to 4 die rolls per long rest.' },
      { level: 12, name: 'Presence of Leadership', desc: '+2 to one stat or +1 to two stats (max 20, primary 22). After long rest: gain advantage on CHA or INT skill checks until you attack or cast a spell.' },
      { level: 16, name: 'Earned Loyalty', desc: '+1 to any stat (max 20, primary 22). Convert a short rest into a long rest with no extra time for you and visible allies (1 use per 4 long rests).' },
      { level: 19, name: 'Just Stop', desc: '+2 to one stat or +1 to two stats (max 20, primary 22). Action: You and up to 5 communicating allies instantly gain the benefit of a short rest (1/long rest).' }
    ]
  },
    'Juggernaut': {
    desc: 'Brutal power, extreme stamina, and physical perfection. (Key: CON, STR)',
    abilities: [
      { level: 1, name: 'Full Torque', desc: 'Use STR instead of DEX for ranged/thrown attack & damage rolls and save DCs; OR use CON instead of DEX for 2-handed small arms, heavy, or super heavy weapons. Set STR or CON as primary ladder ability.' },
      { level: 4, name: 'Good Cardio', desc: '+1 to any stat (max 20, primary 22). Ignore speed reduction from difficult terrain. Gain bonus HP equal to twice primary mod (triple if CON).' },
      { level: 8, name: 'Unstoppable', desc: '+1 to any stat (max 20, primary 22). Gain 1 extra Hit Die now; maximize HP gained from both this extra Hit Die and your normal Hit Die at this level.' },
      { level: 12, name: 'Built Like a Truck', desc: '+2 to one stat or +1 to two (max 20, primary 22). Gain bonus HP equal to primary mod (double if CON). Add primary mod to melee damage vs incapacitated targets or objects. Advantage on saves vs poison and stun.' },
      { level: 16, name: 'Hulking Smash', desc: '+1 to any stat (max 20, primary 22). Action to Hulk (1/long rest): gain (2x lvl + 2x primary mod) temp HP and add primary mod to melee damage while temp HP lasts; suffer disadvantage on INT/WIS/CHA checks & attacks for 1 hr.' },
      { level: 19, name: 'In Your Prime', desc: '+2 to one stat or +1 to two (max 20, primary 22). Gain resistance to non-magical bludgeoning, piercing, and slashing damage.' }
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
  'Face': {
    desc: 'The smooth talker, the negotiator, and the haggler.',
    hitDie: 'd8',
    primaryStat: 'Any',
    abilities: [
      { level: 1, name: 'Bulletproof Ego', desc: 'wear light or no armor, you gain a bonus to AC equal to half your proficiency bonus (rounded up).' },
      { level: 1, name: 'Double your efforts', desc: 'once per turn on your turn, can make a DC 15 Perception free check; pass, take an additional action (not for Attack or cast spells).' },
      { level: 1, name: 'Life Insurance', desc: 'Spend a Hit Die on your turn, regain no hit points, and you gain all the following benefi ts (this requires no action.' },
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
  // --- TL2 ARMOUR ---
  // Light Armour
  'CIRAS Maritime': { type: 'Light Armor', baseAc: 14, maxDex: 99, props: 'Cost: $2,000 | Wt: 14 lb. | TL2' },
  'Modular Scalable Vest (Config 1)': { type: 'Light Armor', baseAc: 15, maxDex: 99, props: 'Cost: $3,000 | Wt: 10 lb. | TL2' },
  'PASGT Vest': { type: 'Light Armor', baseAc: 12, maxDex: 99, props: 'Cost: $600 | Wt: 11 lb. | TL2' },
  'Ranger Body Armour (Config 1)': { type: 'Light Armor', baseAc: 15, maxDex: 99, props: 'Cost: $2,500 | Wt: 16 lb. | TL2' },
  'RBAV Plate Carrier (Light)': { type: 'Light Armor', baseAc: 14, maxDex: 99, props: 'Cost: $2,000 | Wt: 15 lb. | TL2' },
  'Soviet 6B2 Vest': { type: 'Light Armor', baseAc: 13, maxDex: 99, props: 'Cost: $500 | Wt: 11 lb. | TL2' },
  // Medium Armour
  'Dragon Skin': { type: 'Medium Armor', baseAc: 16, maxDex: 2, props: 'Cost: $4,500 | Str 13 | Stealth Disadv | Speed -5 ft. | Wt: 25 lb. | TL2' },
  'Flak Longcoat': { type: 'Medium Armor', baseAc: 14, maxDex: 2, props: 'Cost: $100 | Str 13 | Stealth Disadv | Wt: 35 lb. | TL2' },
  'Interceptor Body Armour': { type: 'Medium Armor', baseAc: 15, maxDex: 2, props: 'Cost: $1,600 | Str 13 | Stealth Disadv | Wt: 17 lb. | TL2' },
  'IOTV Gen IV': { type: 'Medium Armor', baseAc: 16, maxDex: 2, props: 'Cost: $2,000 | Str 13 | Stealth Disadv | Speed -5 ft. | Wt: 25 lb. | TL2' },
  'KDH Magnum TAC-I': { type: 'Medium Armor', baseAc: 16, maxDex: 2, props: 'Cost: $2,500 | Wt: 20 lb. | TL2' },
  'Modular Scalable Vest (Config 2)': { type: 'Medium Armor', baseAc: 16, maxDex: 2, props: 'Cost: $3,000 | Speed -5 ft. | Wt: 16 lb. | TL2' },
  'Modular Scalable Vest (Config 3)': { type: 'Medium Armor', baseAc: 17, maxDex: 2, props: 'Cost: $3,000 | Str 13 | Stealth Disadv | Speed -5 ft. | Wt: 20 lb. | TL2' },
  'Ranger Body Armour (Config 2)': { type: 'Medium Armor', baseAc: 16, maxDex: 2, props: 'Cost: $2,500 | Stealth Disadv | Speed -5 ft. | Wt: 25 lb. | TL2' },
  // Heavy Armour
  'EOD 9': { type: 'Heavy Armor', baseAc: 18, maxDex: 0, props: 'Cost: $12,000 | Str 15 | Stealth Disadv | Speed -20 ft. | Wt: 85 lb. | TL2' },
  'Juggernaut Suit': { type: 'Heavy Armor', baseAc: 18, maxDex: 0, props: 'Cost: $17,000 | Str 15 | Stealth Disadv | Speed -15 ft. | Wt: 60 lb. | TL2' },

  // --- TL1 ARMOUR ---
  // Light Armour
  'MRC (UK)': { type: 'Light Armor', baseAc: 12, maxDex: 99, props: 'Cost: $100 | Stealth Disadv | Wt: 5 lb. | TL1' },
  'M1952 Flak Jacket': { type: 'Light Armor', baseAc: 12, maxDex: 99, props: 'Cost: $50 | Wt: 9 lb. | TL1' },
  'M1955 Doron': { type: 'Light Armor', baseAc: 13, maxDex: 99, props: 'Cost: $150 | Wt: 7 lb. | TL1' },
  // Medium Armour
  'M1 Flyer\'s Vest': { type: 'Medium Armor', baseAc: 15, maxDex: 2, props: 'Cost: $100 | Stealth Disadv | Speed -5 ft. | Wt: 20 lb. | TL1' },
  'Trench Armour': { type: 'Medium Armor', baseAc: 15, maxDex: 2, props: 'Cost: $100 | Stealth Disadv | Speed -5 ft. | Wt: 20 lb. | TL1' },
  'Variable Body Armour (Light)': { type: 'Medium Armor', baseAc: 14, maxDex: 2, props: 'Cost: $150 | Wt: 10 lb. | TL1' },
  'Variable Body Armour (Medium)': { type: 'Medium Armor', baseAc: 15, maxDex: 2, props: 'Cost: $150 | Stealth Disadv | Wt: 15 lb. | TL1' },
  'Variable Body Armour (Heavy)': { type: 'Medium Armor', baseAc: 15, maxDex: 2, props: 'Cost: $150 | Stealth Disadv | Speed -5 ft. | Wt: 20 lb. | TL1' },
  // Heavy Armour
  'Brewster Armour': { type: 'Heavy Armor', baseAc: 17, maxDex: 0, props: 'Cost: $500 | Str 15 | Stealth Disadv | Speed -20 ft. | Wt: 40 lb. | TL1' },
  'EOD Bomb Disposal Suit': { type: 'Heavy Armor', baseAc: 18, maxDex: 0, props: 'Cost: $1,000 | Str 17 | Stealth Disadv | Speed -20 ft. | Wt: 65 lb. | TL1' },
  'Yowie Suit': { type: 'Heavy Armor', baseAc: 15, maxDex: 0, props: 'Cost: $750 | Str 13 | Speed -10 ft. | Wt: 35 lb. | TL1' },

  // --- TL0 ARMOUR ---
  // Light Armour
  'Buff Coat': { type: 'Light Armor', baseAc: 11, maxDex: 99, props: 'Cost: $20 | Wt: 7 lb. | TL0' },
  'Leather Jerkin': { type: 'Light Armor', baseAc: 11, maxDex: 99, props: 'Cost: $15 | Wt: 5 lb. | TL0' },
  'Linothorax': { type: 'Light Armor', baseAc: 12, maxDex: 99, props: 'Cost: $15 | Wt: 9 lb. | TL0' },
  'Padded': { type: 'Light Armor', baseAc: 11, maxDex: 99, props: 'Cost: $10 | Stealth Disadv | Wt: 8 lb. | TL0' },
  'Studded Leather': { type: 'Light Armor', baseAc: 12, maxDex: 99, props: 'Cost: $45 | Wt: 13 lb. | TL0' },
  // Medium Armour
  'Brigandine': { type: 'Medium Armor', baseAc: 14, maxDex: 2, props: 'Cost: $75 | Speed -10 ft. | Wt: 35 lb. | TL0' },
  'Chain Shirt': { type: 'Medium Armor', baseAc: 13, maxDex: 2, props: 'Cost: $50 | Speed -5 ft. | Wt: 20 lb. | TL0' },
  'Coat of Plates': { type: 'Medium Armor', baseAc: 14, maxDex: 2, props: 'Cost: $70 | Stealth Disadv | Speed -10 ft. | Wt: 38 lb. | TL0' },
  'Hide': { type: 'Medium Armor', baseAc: 12, maxDex: 2, props: 'Cost: $10 | Wt: 12 lb. | TL0' },
  'Lamellar': { type: 'Medium Armor', baseAc: 14, maxDex: 2, props: 'Cost: $60 | Speed -10 ft. | Wt: 40 lb. | TL0' },
  'Scale Mail': { type: 'Medium Armor', baseAc: 14, maxDex: 2, props: 'Cost: $50 | Stealth Disadv | Speed -10 ft. | Wt: 45 lb. | TL0' },
  // Heavy Armour
  'Chain Mail': { type: 'Heavy Armor', baseAc: 16, maxDex: 0, props: 'Cost: $75 | Str 13 | Stealth Disadv | Speed -15 ft. | Wt: 55 lb. | TL0' },
  'Gothic Plate': { type: 'Heavy Armor', baseAc: 18, maxDex: 0, props: 'Cost: $1,500 | Str 15 | Stealth Disadv | Speed -20 ft. | Wt: 55 lb. | TL0' },
  'Jousting Plate': { type: 'Heavy Armor', baseAc: 19, maxDex: 0, props: 'Cost: $2,000 | Str 17 | Stealth Disadv | Speed -20 ft. | Wt: 70 lb. | TL0' },
  'Milanese Plate': { type: 'Heavy Armor', baseAc: 18, maxDex: 0, props: 'Cost: $1,200 | Str 15 | Stealth Disadv | Speed -20 ft. | Wt: 60 lb. | TL0' },
  'Plate Mail': { type: 'Heavy Armor', baseAc: 17, maxDex: 0, props: 'Cost: $400 | Str 15 | Stealth Disadv | Speed -20 ft. | Wt: 55 lb. | TL0' },
  'Samurai O-yoroi': { type: 'Heavy Armor', baseAc: 17, maxDex: 0, props: 'Cost: $800 | Str 13 | Stealth Disadv | Speed -20 ft. | Wt: 50 lb. | TL0' },
  'Splint Mail': { type: 'Heavy Armor', baseAc: 17, maxDex: 0, props: 'Cost: $200 | Str 15 | Stealth Disadv | Speed -20 ft. | Wt: 60 lb. | TL0' }
};
