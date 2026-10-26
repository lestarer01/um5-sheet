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
      { level: 5, name: 'Kinetic Barrier', desc: 'Reaction: reduce damage by 1d10 
