/* ===========================================
   LADDER ABILITIES DATABASE
   Add more ladders or abilities here anytime
=========================================== */
const LADDER_DATA = {
  'Born Leader': {
    desc: 'Natural commander and tactical leader',
    abilities: [
      { level: 1, name: 'Command Presence', desc: 'Gain proficiency in Persuasion and Intimidation.' },
      { level: 2, name: 'Rally', desc: 'Grant allies within 30ft a bonus action attack.' },
      { level: 5, name: 'Tactical Insight', desc: 'Grant advantage on an ally\'s attack roll.' },
      { level: 10, name: 'Inspiring Leader', desc: 'Allies gain temp HP equal to your level.' }
    ]
  },
  'Cyberborn': {
    desc: 'Enhanced with cybernetic implants',
    abilities: [
      { level: 1, name: 'Cybernetic Enhancement', desc: '+1 to any ability score (bio-mechanical).' },
      { level: 2, name: 'Neural Interface', desc: 'Connect wirelessly to any computer system.' },
      { level: 5, name: 'Reflex Boosters', desc: '+2 to initiative rolls.' },
      { level: 10, name: 'Advanced Cybernetics', desc: 'Gain additional slot for implants.' }
    ]
  },
  'Heavy Armor': {
    desc: 'Expert in heavy armor and defensive combat',
    abilities: [
      { level: 1, name: 'Armor Proficiency', desc: 'Proficient in all armor types.' },
      { level: 2, name: 'Damage Reduction', desc: 'Reduce physical damage by 2 while in heavy armor.' },
      { level: 5, name: 'Armored Juggernaut', desc: 'Immune to being knocked prone.' },
      { level: 10, name: 'Fortress', desc: '+2 AC bonus when wearing heavy armor.' }
    ]
  },
  'Infiltrator': {
    desc: 'Master of stealth, infiltration and silent takedowns',
    abilities: [
      { level: 1, name: 'Shadow Step', desc: 'Advantage on Stealth checks in dim light.' },
      { level: 2, name: 'Silent Takedown', desc: 'Instant kill unaware enemies with surprise attack.' },
      { level: 5, name: 'Ghost', desc: 'Can hide in plain sight when not observed.' },
      { level: 10, name: 'Phantom Strike', desc: 'Deal +2d6 damage from stealth.' }
    ]
  },
  'Juggernaut': {
    desc: 'Unstoppable force on the battlefield',
    abilities: [
      { level: 1, name: 'Ironclad', desc: 'Gain +2 AC when wearing heavy armor.' },
      { level: 2, name: 'Unstoppable', desc: 'Advantage on STR saving throws.' },
      { level: 5, name: 'Battering Ram', desc: 'Push targets 10ft on melee hit.' },
      { level: 10, name: 'Unbreakable', desc: 'Resistance to all physical damage.' }
    ]
  },
  'Martial Artist': {
    desc: 'Trained in close combat and martial arts',
    abilities: [
      { level: 1, name: 'Unarmed Strike', desc: 'Unarmed strikes deal 1d6 damage.' },
      { level: 2, name: 'Flurry of Blows', desc: 'Make an additional unarmed strike as bonus action.' },
      { level: 5, name: 'Deflect Missiles', desc: 'Reduce ranged weapon damage by 1d10+DEX.' },
      { level: 10, name: 'Perfect Form', desc: 'Advantage on all DEX saves.' }
    ]
  },
  'Outlaw': {
    desc: 'Criminal operator surviving on the fringes',
    abilities: [
      { level: 1, name: 'Streetwise', desc: 'Advantage on checks involving criminal contacts.' },
      { level: 2, name: 'Quick Escape', desc: 'Bonus action Dash or Hide.' },
      { level: 5, name: 'Dirty Fighter', desc: '+1d6 damage when attacking from flank.' }
    ]
  },
  'Psion': {
    desc: 'Wielder of psionic/mental abilities',
    abilities: [
      { level: 1, name: 'Mind Link', desc: 'Telepathic communication within 60ft.' },
      { level: 2, name: 'Psionic Blast', desc: 'Mental attack dealing 1d8 psychic damage.' },
      { level: 5, name: 'Mind Shield', desc: 'Resistance to psychic damage.' }
    ]
  },
  'Runner': {
    desc: 'Fast-moving scout and courier',
    abilities: [
      { level: 1, name: 'Fleet Footed', desc: 'Base speed increased by 10ft.' },
      { level: 2, name: 'Nimble Dodger', desc: 'Disengage as a bonus action.' },
      { level: 5, name: 'Marathon', desc: 'Never tire from running or climbing.' }
    ]
  },
  'Savant': {
    desc: 'Genius specialist in science and intellect',
    abilities: [
      { level: 1, name: 'Expert Knowledge', desc: 'Double proficiency in one skill.' },
      { level: 2, name: 'Analytical Mind', desc: 'Advantage on Investigation checks.' },
      { level: 5, name: 'Breakthrough', desc: 'Can research a solution to any problem.' }
    ]
  },
  'Survivor': {
    desc: 'Hardened veteran able to withstand anything',
    abilities: [
      { level: 1, name: 'Hardy', desc: 'Advantage on CON saving throws.' },
      { level: 2, name: 'Second Wind', desc: 'Heal 1d10+level once per short rest.' },
      { level: 5, name: 'Diehard', desc: 'Automatically stabilize at 0 HP.' }
    ]
  },
  'Techie': {
    desc: 'Technology specialist, hacker and engineer',
    abilities: [
      { level: 1, name: 'Hacker', desc: 'Proficient in Computers and Electronics.' },
      { level: 2, name: 'Jury Rig', desc: 'Repair broken items with a check.' },
      { level: 5, name: 'Signature Device', desc: 'Create a custom tech gadget.' }
    ]
  },
  'Veteran': {
    desc: 'Experienced soldier with combat training',
    abilities: [
      { level: 1, name: 'Combat Reflexes', desc: '+1 to initiative.' },
      { level: 2, name: 'Weapon Expert', desc: '+1 to attack rolls with chosen weapon type.' },
      { level: 5, name: 'Battle Hardened', desc: 'Advantage against fear effects.' }
    ]
  }
};


/* ===========================================
   CLASS ABILITIES DATABASE
=========================================== */
const CLASS_DATA = {
  'Gunslinger': {
    desc: 'Expert marksman with firearms',
    hitDie: 'd10',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Quick Draw', desc: 'Can draw a weapon as part of attacking.' },
      { level: 1, name: 'Firearm Mastery', desc: 'Proficient in all firearms.' },
      { level: 3, name: 'Trick Shot', desc: 'Special shots (Disarm, Wound, Trip, etc.).' },
      { level: 5, name: 'Extra Attack', desc: 'Attack twice when using the Attack action.' }
    ]
  },
  'Heavy': {
    desc: 'Soldier wielding heavy weapons and explosives',
    hitDie: 'd12',
    primaryStat: 'STR',
    abilities: [
      { level: 1, name: 'Heavy Weapon Proficiency', desc: 'Proficient in all heavy weapons.' },
      { level: 1, name: 'Suppressive Fire', desc: 'Force enemies to take cover with autofire.' },
      { level: 3, name: 'Explosives Expert', desc: 'Advantage on Demolitions checks.' },
      { level: 5, name: 'Blast Resistance', desc: 'Resistance to explosive damage.' }
    ]
  },
  'Infiltrator': {
    desc: 'Covert operator and spy',
    hitDie: 'd8',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Stealth Expert', desc: 'Expertise in Stealth skill.' },
      { level: 1, name: 'Silent Weapons', desc: 'Attacks with silenced weapons don\'t alert enemies.' },
      { level: 3, name: 'Sneak Attack', desc: 'Deal +2d6 damage against surprised foes.' }
    ]
  },
  'Martial Artist': {
    desc: 'Hand-to-hand combat specialist',
    hitDie: 'd8',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Martial Arts', desc: 'Unarmed strikes deal 1d6 damage.' },
      { level: 1, name: 'Unarmored Defense', desc: 'AC = 10 + DEX mod + WIS mod.' },
      { level: 3, name: 'Stunning Strike', desc: 'Stun enemies on a successful melee hit.' }
    ]
  },
  'Medic': {
    desc: 'Combat medical specialist',
    hitDie: 'd8',
    primaryStat: 'WIS',
    abilities: [
      { level: 1, name: 'First Aid', desc: 'Heal allies with a bonus action (1d4+WIS).' },
      { level: 1, name: 'Medical Expert', desc: 'Expertise in Medicine skill.' },
      { level: 3, name: 'Combat Reviver', desc: 'Revive downed allies in combat.' }
    ]
  },
  'Officer': {
    desc: 'Commanding officer and tactician',
    hitDie: 'd10',
    primaryStat: 'CHA',
    abilities: [
      { level: 1, name: 'Command', desc: 'Direct allies to attack as bonus action.' },
      { level: 1, name: 'Battle Plan', desc: 'Grant allies tactical bonuses.' },
      { level: 3, name: 'Inspiring Presence', desc: 'Allies gain +2 to saves within 30ft.' }
    ]
  },
  'Sniper': {
    desc: 'Long-range precision marksman',
    hitDie: 'd8',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Marksman', desc: '+2 to ranged attack rolls.' },
      { level: 1, name: 'Steady Aim', desc: 'Skip movement for +2 to attack.' },
      { level: 3, name: 'Headshot', desc: 'Critical hit on roll of 19-20.' }
    ]
  },
  'Techie': {
    desc: 'Hacker and tech specialist',
    hitDie: 'd6',
    primaryStat: 'INT',
    abilities: [
      { level: 1, name: 'Hacker', desc: 'Expertise in Computers.' },
      { level: 1, name: 'Gadget Master', desc: 'Craft tech gadgets.' },
      { level: 3, name: 'System Breaker', desc: 'Hack systems as action.' }
    ]
  },
  'Commando': {
    desc: 'Elite special forces operator',
    hitDie: 'd10',
    primaryStat: 'STR',
    abilities: [
      { level: 1, name: 'Combat Training', desc: 'Proficient in all weapons and armor.' },
      { level: 1, name: 'Breaching Expert', desc: 'Advantage on breaking down doors/walls.' },
      { level: 3, name: 'Extra Attack', desc: 'Attack twice per action.' }
    ]
  },
  'Driver / Pilot': {
    desc: 'Vehicle specialist',
    hitDie: 'd8',
    primaryStat: 'DEX',
    abilities: [
      { level: 1, name: 'Vehicle Expert', desc: 'Expertise in Driving.' },
      { level: 1, name: 'Evasive Maneuvers', desc: 'Impose disadvantage on attacks against your vehicle.' }
    ]
  }
};


/* ===========================================
   WEAPONS DATABASE
   Add more weapons here anytime
=========================================== */
const WEAPON_DATA = {
  // --- Assault Rifles ---
  'M4 Carbine':      { type: 'Assault Rifle', damage: '1d8+1', magSize: 30, range: '150/600',  properties: 'Automatic, Burst' },
  'AK-47':           { type: 'Assault Rifle', damage: '1d10',  magSize: 30, range: '150/600',  properties: 'Automatic' },
  'FN SCAR':         { type: 'Assault Rifle', damage: '1d10',  magSize: 30, range: '200/800',  properties: 'Automatic, Modular' },

  // --- SMGs ---
  'MP5':             { type: 'SMG',           damage: '1d6+1', magSize: 30, range: '50/200',   properties: 'Automatic, Compact' },
  'Uzi':             { type: 'SMG',           damage: '1d6',   magSize: 32, range: '40/160',   properties: 'Automatic, Concealable' },
  'P90':              { type: 'SMG',          damage: '1d6+2', magSize: 50, range: '60/240',   properties: 'Automatic, High-capacity' },

  // --- Pistols ---
  'Glock 17':        { type: 'Pistol',        damage: '1d8',   magSize: 17, range: '50/150',   properties: 'Semi-Auto, Reliable' },
  'Desert Eagle':    { type: 'Pistol',        damage: '1d12',  magSize: 7,  range: '50/150',   properties: 'Heavy, Loud' },
  'M9 Beretta':      { type: 'Pistol',        damage: '1d8',   magSize: 15, range: '50/150',   properties: 'Semi-Auto' },
  '.44 Magnum':      { type: 'Revolver',      damage: '1d10+2',magSize: 6,  range: '40/120',   properties: 'Heavy, Loud' },

  // --- Shotguns ---
  'Combat Shotgun':  { type: 'Shotgun',       damage: '2d6',   magSize: 8,  range: '20/60',    properties: 'Scatter, Loud' },
  'Sawed-Off':       { type: 'Shotgun',       damage: '2d6',   magSize: 2,  range: '10/30',    properties: 'Scatter, Concealable' },

  // --- Sniper Rifles ---
  'Sniper Rifle':    { type: 'Sniper',        damage: '2d10',  magSize: 5,  range: '500/2000', properties: 'Scoped, Heavy' },
  'Anti-Materiel':   { type: 'Sniper',        damage: '2d12',  magSize: 5,  range: '600/2400', properties: 'Scoped, Armor-Piercing' },

  // --- Heavy Weapons ---
  'LMG':             { type: 'Heavy',         damage: '1d10',  magSize: 100,range: '200/800',  properties: 'Automatic, Suppressive' },
  'Rocket Launcher': { type: 'Heavy',         damage: '6d6',   magSize: 1,  range: '150/450',  properties: 'Explosive, Area' },

  // --- Melee ---
  'Combat Knife':    { type: 'Melee',         damage: '1d4',   magSize: 0,  range: 'Melee',    properties: 'Light, Finesse' },
  'Katana':          { type: 'Melee',         damage: '1d8',   magSize: 0,  range: 'Melee',    properties: 'Finesse, Versatile' },
  'Stun Baton':      { type: 'Melee',         damage: '1d6',   magSize: 0,  range: 'Melee',    properties: 'Stun, Non-Lethal' }
};
