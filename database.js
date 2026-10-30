const BACKGROUND_DATA = [
  'Affluent',
  'Bruiser',
  'Delinquent',
  'Disciple',
  'Drifter',
  'Intellectual',
  'Laborer',
  'Prodigy',
  'Recluse',
  'Regular Joe',
  'Smooth Talker'
];

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
    'Performer': {
    desc: 'Creativity, agility, and absolute focus under pressure. (Key: DEX, CHA)',
    abilities: [
      { level: 1, name: 'Constant Practice', desc: 'Use DEX for Performance or CHA for Acrobatics. Gain proficiency in Deception and Performance skills. Set DEX or CHA as primary ladder ability.' },
      { level: 4, name: 'Over Baseline', desc: '+1 to any stat (max 20, primary 22). You are immune to the frightened condition.' },
      { level: 8, name: 'Practice Makes Perfect', desc: '+1 to any stat (max 20, primary 22). Re-roll any die results of 5 or less on ability checks using your primary performer ability.' },
      { level: 12, name: 'Confidence', desc: '+1 to any stat (max 20, primary 22). Guess your d20 roll before rolling to gain a bonus up to +4 based on guess accuracy (recharges short/long rest if +4 used).' },
      { level: 16, name: 'Effortless', desc: '+1 to any stat (max 20, primary 22). Re-roll any die results of 10 or less on ability checks using your primary performer ability.' },
      { level: 19, name: 'Personal Control', desc: '+2 to one stat or +1 to two (max 20, primary 22). 1/long rest: set the die roll of a proficient DEX or CHA skill check to a natural 20.' }
    ]
  },
    'Runner': {
    desc: 'Unmatched speed, agility, and tactical mobility. (Key: DEX, INT)',
    abilities: [
      { level: 1, name: 'Power to Weight Ratio', desc: 'Use DEX for Athletics, INT for Perception, and DEX for non-heavy weapon attacks/damage/DCs. Gain Acrobatics proficiency. Set DEX or INT as primary runner ability.' },
      { level: 4, name: 'Cat Balance', desc: '+1 to any stat (max 20, primary 22). +5 ft speed. Moving 10+ ft toward a wall grants climb speed on vertical surfaces for remaining movement.' },
      { level: 8, name: 'Saute de Precision', desc: '+1 to any stat (max 20, primary 22). Dashing increases movement by 1.5x speed. Add both DEX and INT mods to Acrobatics checks.' },
      { level: 12, name: 'Natural Athlete', desc: '+1 to any stat (max 20, primary 22). Action (INT mod/long rest): set next DEX check or save to your DEX score without rolling. Take 0 damage on successful DEX save that normally deals half.' },
      { level: 16, name: 'All About the Flipping', desc: '+1 to any stat (max 20, primary 22). Max DEX for medium armor increases to 3; light armor gives +1 AC. Action to analyze path before moving: gain +INT mod AC until start of next turn.' },
      { level: 19, name: 'Parkour Master', desc: '+2 to one stat or +1 to two (max 20, primary 22). Gain a pool of extra actions equal to primary mod per long rest (max 1/turn) to Dash, Disengage, or Use an Object.' }
    ]
  },
    'Savant': {
    desc: 'Genius intellect, master analysis, and pure knowledge. (Key: INT, WIS)',
    abilities: [
      { level: 1, name: 'Training Beats Experience', desc: 'Use INT instead of DEX for attack/damage/DCs with small arms. Use INT or WIS instead of DEX for AC and spellcasting. Set INT or WIS as primary savant ability.' },
      { level: 4, name: 'Not Stupid', desc: '+1 to any stat (max 20, primary 22). Ask GM if an action is "plain dumb" (uses equal to primary mod per long rest).' },
      { level: 8, name: 'Experience Beats Training', desc: '+1 to any stat (max 20, primary 22). Gain proficiency in all skills of your primary savant ability. Use primary mod instead of DEX for initiative.' },
      { level: 12, name: 'Too Smart', desc: '+2 to one stat or +1 to two (max 20, primary 22). Maintain wealthy lifestyle free; reduce research/training cost/time to 1/4. After long rest: gain +3 to INT or WIS until you attack or cast a spell.' },
      { level: 16, name: 'Eidetic Memory', desc: '+1 to any stat (max 20, primary 22). When both rolls on advantage succeed, store one die result for up to 5 mins to replace any future d20 roll without rolling.' },
      { level: 19, name: 'Opus', desc: '+1 to any stat (max 20, primary 22). Whenever you roll a check or save using your primary savant ability, set the die roll equal to your primary ability score.' }
    ]
  },
    'Survivor': {
    desc: 'Indomitable instinct, extreme endurance, and absolute survival. (Key: CON, WIS)',
    abilities: [
      { level: 1, name: 'Hunter', desc: 'Use WIS instead of DEX for ranged attack/damage/DCs. Use CON instead of DEX for AC. Set CON or WIS as primary survivor ability.' },
      { level: 4, name: 'Natural Equilibrium', desc: '+1 to any stat (max 20, primary 22). Gain proficiency in Survival or Animal Handling. Action: DC 15 CON check to reduce exhaustion by 1 (+5 DC per attempt until long rest + food/water).' },
      { level: 8, name: 'Tough It Out', desc: '+1 to any stat (max 20, primary 22). Action (gain 1 exhaustion level): pick temp HP (primary mod + lvl), force a critical hit (+2x lvl dmg), +1 AC for 1 min, or +1 attack for 1 min (1 use each per long rest).' },
      { level: 12, name: 'Dead Man Walking', desc: '+1 to any stat (max 20, primary 22). Can drop below 0 HP down to -50 HP while remaining conscious, gaining 1-5 levels of exhaustion based on depth.' },
      { level: 16, name: 'Elite', desc: '+2 to one stat or +1 to two (max 20, primary 22). Auto-pass WIS (Survival) checks with DC 20 or less unless you have disadvantage.' },
      { level: 19, name: 'Unnatural Survival', desc: '+2 to one stat or +1 to two (max 20, primary 22). Long rest with food & drink reduces exhaustion level by 2.' }
    ]
  },
  'Veteran': {
    desc: 'Battle-hardened wisdom, sharp reflexes, and combat intuition. (Key: CHA, WIS)',
    abilities: [
      { level: 1, name: 'Calm Reflexes', desc: 'Use WIS for ranged, unarmed, or non-heavy melee attack/damage/DCs. Gain 1 CHA skill proficiency. Use WIS or CHA for spells. Set WIS or CHA as primary veteran ability.' },
      { level: 4, name: 'Good Guess', desc: '+1 to any stat (max 20, primary 22). Gain a pool of rerolls equal to primary mod per long rest (reroll any roll after seeing the final result).' },
      { level: 8, name: 'Expecting Trouble', desc: '+1 to any stat (max 20, primary 22). Good Guess pool +2 (regain 1 charge on a 1 or 2 roll). WIS (History) works as gut instinct truth check, CHA (History) as convincing lies.' },
      { level: 12, name: 'Stone Faced', desc: '+2 to one stat or +1 to two (max 20, primary 22). Immune to frightened and charmed conditions.' },
      { level: 16, name: 'Instinct with Time', desc: '+1 to any stat (max 20, primary 22). Reaction before making a save: move 5 ft. If movement takes you out of the AoE, no save required.' },
      { level: 19, name: 'At Any Cost', desc: '+1 to any stat (max 20, primary 22). Good Guess pool +2. Gain advantage on attacks & auto-crit on first hit against previously defeated enemy types.' }
    ]
  },
  'Warrior': {
    desc: 'Relentless combat training, stance mastery, and escalating power. (Key: DEX, STR)',
    abilities: [
      { level: 1, name: 'Strength Over Agility', desc: 'Use STR instead of DEX for 2-handed small arms, heavy, super heavy weapon attacks/damage/DCs. Medium armor max DEX is 3; heavy armor max DEX is 1. Set STR or DEX as primary warrior ability.' },
      { level: 4, name: 'Power Up', desc: '+1 to any stat (max 20, primary 22). Action: increase Power Rank (1-5). Rank 1: Adv on next attack (+2 dmg); Rank 2: Auto-hit + step up dmg die; Rank 3: Auto-crit; Rank 4: Reroll 1s/2s & exploding max dmg; Rank 5: Double all dmg dice.' },
      { level: 8, name: 'Ultra Super', desc: '+2 to one stat or +1 to two (max 20, primary 22). Bonus action: gain +1 Power Rank (1/short or long rest).' },
      { level: 12, name: 'Covert Energy', desc: '+2 to one stat or +1 to two (max 20, primary 22). If you don\'t move on your turn, gain +1 Power Rank at start of next turn (1/short or long rest).' },
      { level: 16, name: 'Vigorous Surge', desc: '+2 to one stat or +1 to two (max 20, primary 22). Start every combat at Power Rank 1 after rolling initiative.' },
      { level: 19, name: 'Loses Patience, Finds Anger', desc: '+1 to any stat (max 20, primary 22). When hit by a crit or reduced below half HP, roll 1d4 and add to Power Rank (1/combat).' }
    ]
  },
};

const CLASS_DATA = {
    'Face': {
    desc: 'The smooth talker, the negotiator, and the haggler.',
    hitDie: 'd8',
    primaryStat: 'CHA',
    abilities: [
      { level: 1, name: 'Bulletproof Ego', desc: 'As long as you wear light or no armor, you gain a bonus to AC equal to half your proficiency bonus (rounded up).' },
      { level: 1, name: 'Double Your Efforts', desc: 'Once per turn, make a free DC 15 WIS (Perception) check. If you pass, take an additional action (cannot be Attack or cast spell).' },
      { level: 1, name: 'Life Insurance', desc: 'Spend a Hit Die on your turn (no action, heals no HP) to gain: Auto-pass Double Your Efforts check; Advantage on all attacks, checks, and saves until next turn; Any CHA save you force gains +3 DC until next turn.' },
      { level: 2, name: 'Hustle Pool', desc: 'Gain a pool = 2 + (2x CHA mod). After rolling any non-attack d20, you can alter the result by pulling from this pool. Refills on long rest.' },
      { level: 3, name: 'Archetype Feature', desc: 'You gain a feature from your chosen Archetype (or skip it to take an extra Protagonist Trait).' },
      { level: 5, name: 'Life Insurance Upgrade', desc: 'When you use Life Insurance, your speed increases by +5 ft and you gain +2 AC until start of your next turn.' },
      { level: 6, name: 'Automatic Improvisation', desc: 'Spend a Hit Die as a bonus action to gain proficiency with a tool for 1 minute.' },
      { level: 7, name: 'Archetype Feature', desc: 'You gain a feature from your chosen Archetype.' },
      { level: 9, name: 'Double Your Efforts Upgrade', desc: 'The DC to gain your extra action reduces to 10.' },
      { level: 10, name: 'Life Insurance Upgrade', desc: 'The bonus to Save DCs when using Life Insurance increases to +5.' },
      { level: 11, name: 'Archetype Feature', desc: 'You gain a feature from your chosen Archetype.' },
      { level: 13, name: 'Make Them Flinch', desc: 'Force a creature that made a CHA saving throw you imposed to re-roll. (1/long rest per target).' },
      { level: 14, name: 'Life Insurance Upgrade', desc: 'When you use Life Insurance, you regain 2 points to your Hustle Pool.' },
      { level: 15, name: 'Archetype Feature', desc: 'You gain a feature from your chosen Archetype.' },
      { level: 17, name: 'Life Insurance Upgrade', desc: 'When you use Life Insurance, roll the spent Hit Die and recover hit points equal to the result.' },
      { level: 18, name: 'Archetype Feature', desc: 'You gain a feature from your chosen Archetype.' },
      { level: 20, name: 'Automatic Improvisation Mastery', desc: 'You have proficiency with all tools all the time (no need to spend hit dice).' }
    ],
    choiceMenu: {
      name: 'Protagonist Traits',
      levels: [1, 1, 5, 10, 15, 20],
      options: {
        'Biting Taunt': 'Action: Target makes CHA save or has disadvantage on attack rolls and ability checks until the beginning of your next turn. (If pass, immune for 24 hrs).',
        'Cognitive Empathy': 'Action: Target within 30ft (INT 4+) makes CHA save. Fail: you learn surface thoughts, likely actions, and emotional state until end of your next turn. (1/target/long rest).',
        'Faceman': 'Select one INT, WIS, or CHA skill or one item you are proficient with. Action: Double your proficiency bonus with the next check made with that skill/item. Can be taken multiple times for different skills.',
        'Fascination': 'Action: Target makes CHA save. Fail: Charmed by you and allies for 5 mins or until damaged/line of sight broken. (1/long rest, or 2/long rest if taken twice).',
        'Iceman': 'If you suffer a critical hit, you regain 1 spent Hit Die.',
        'Know the Signs': 'You have advantage against any Charisma and Wisdom saving throws.',
        'Mind Twist': 'Action: Target makes CHA save. Fail: Stunned until the beginning of your next turn. (1/target/long rest, can take twice to gain a second use).',
        'Poker Face': 'Immune to frightened and charmed conditions. Advantage against being frightened/charmed.',
        'Polyglot': 'Learn 3 additional languages. Learn 1 more every 3 levels from now on.',
        'Possible Sociopath': 'Resistance to psychic damage. Advantage on saving throws against effects that sense emotions or read thoughts.',
        'Veneer': 'With a disguise kit, alter voice and mannerisms. If mimicking generically, disguise is near flawless. If mimicking someone specific, set visual disguise check roll to your CHA save DC.',
        'Winning Smile': 'Before making a skill check for a proficient skill, you can set the roll to your ability score instead of rolling. (1/long rest, can take twice to gain a second use).'
      }
    }
  },
    'Grounder': {
    desc: 'Front-line multi-purpose soldier. Firearms master and team backbone.',
    hitDie: 'd10',
    primaryStat: 'STR / DEX',
    abilities: [
      { level: 1, name: 'Fire Support', desc: 'Select a Fire Support discipline (Assault or Precision). Each time you select a discipline, its tier increases. Additional picks at 3rd, 7th, 11th, 15th, and 18th level.' },
      { level: 1, name: 'Brotherhood', desc: 'Select Brotherhood abilities that reward teamwork. Additional picks at 4th, 8th, 12th, 16th, and 19th level.' },
      { level: 2, name: 'Take A Knee', desc: 'Spend 30 ft movement to brace and make one ranged attack. Cannot use if an enemy is within reach. Cost drops to 25 ft (5th), 20 ft (13th), 15 ft (17th).' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Fire Support path pick or Brotherhood ability).' },
      { level: 6, name: 'Double Tap', desc: 'When you take the Attack action, you can attack twice instead of once.' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 9, name: 'Triple Tap', desc: 'Extra Attack improves to three attacks.' },
      { level: 10, name: 'Meat Shield', desc: 'Reaction or part of your action: grab a killed/incapacitated creature within 5 ft for half-cover until you move. -1 to attacks with two-handed small arms while holding. Cannot use heavy/super heavy or Take A Knee while holding.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 14, name: 'Quadruple Tap', desc: 'Extra Attack improves to four attacks.' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 20, name: 'All In', desc: 'On a hit, empty a full magazine to double the number of attacks from your Attack action against a single target (1/short or long rest). That weapon is then out of ammo.' }
    ],
    choiceMenus: [
      {
        name: 'Fire Support Path',
        hint: 'Pick Assault or Precision each time. Repeat picks raise that path\'s tier.',
        trackTiers: true,
        levels: [1, 3, 7, 11, 15, 18],
        options: {
          'Assault': [
            'T1: Bonus dmg = margin you beat AC (max 5; max 10 for auto-heavy).',
            'T2: After hit, +2 to attack roll for path calc (+4 for auto-heavy).',
            'T3: After hit, +4 to attack roll for path calc (+8 for auto-heavy).',
            'T4: Damage cap doubles (max 10; max 20 for auto-heavy).',
            'T5: After hit, +8 to attack roll for path calc (+16 for auto-heavy).'
          ],
          'Precision': [
            'T1: +1 to non-autofire attack rolls.',
            'T2: Crits roll damage dice 3× instead of 2×.',
            'T3: Bank a natural 20 to replace a miss (1/rest); reroll natural 2–3.',
            'T4: Reroll natural 2–5 on non-autofire attacks.',
            'T5: Advantage on all non-autofire firearm attacks.'
          ]
        }
      },
      {
        name: 'Brotherhood',
        hint: 'Teamwork abilities. Pick one at each unlocked level.',
        levels: [1, 4, 8, 12, 16, 19],
        options: {
          'Action Star': 'On a hit vs a creature ≤20 ft, it has disadvantage on attacks that don\'t include you until you leave range/LOS or don\'t attack it before end of your next turn.',
          'Cauterize': 'Action: heal an injured ally in reach for 1d6 per your level (1/short or long rest).',
          'Combat Ineffective': 'If an ally in LOS drops to 0 HP, advantage on attacks vs the creature that hit them until it dies, ally recovers, or long rest.',
          'Comrades In Arms': 'If an ally within 10 ft suffers a crit, advantage on attacks vs that attacker until end of your next turn.',
          'Covering Fire': 'Attack action at disadvantage: allies in LOS gain +1 AC and advantage on saves vs those targets until start of your next turn.',
          'For The Common Honor': 'Reaction: when ally within 5 ft is hit, swap places and take the hit instead.',
          'Front Line Deployment': 'Bonus action: ally within 10 ft gains +1 AC until start of your next turn.',
          'Jump In Front': 'Reaction: when you + ≥1 ally are hit by ≤60 ft AoE, push allies out; you are targeted once per ally pushed (1/short or long rest).',
          'Man Down': 'While sharing space with a dead/prone/unconscious ally, they can\'t be targeted by ranged/melee and auto-pass DEX saves. Ends if you leave, they stand, or they attack.',
          'Member Of A Team': 'Spend 30 ft movement: ally within 5 ft can Disengage for free on their next turn.',
          'Slow Is Smooth': 'Reduce your speed by 10 ft to pull an ally within 5 ft with you. If you Disengage, they also disengage.',
          'Snap Out Of It': 'Action: remove charmed, frightened, stunned, or unconscious (not dying) from an ally in reach (1/short or long rest).',
          'Solid Frame': 'While wielding a two-handed small arm, ignore the -2 penalty to firing while moving.',
          'Spotter': 'Action: mark an enemy in LOS; one ally within 5 ft of you has advantage on their next attack vs it before end of their next turn.',
          'Toss Magazine': 'Spend 30 ft movement to reload an ally\'s weapon within 10 ft (you need the proper ammo).'
        }
      }
    ]
  },
    'Gunslinger': {
    desc: 'Agile, cinematic firearm specialist, bullet-ballet artist, and master of Kata exploits.',
    hitDie: 'd8',
    primaryStat: 'DEX / WIS',
    abilities: [
      { level: 1, name: 'Converging Fire', desc: 'When attacking a creature within 5 ft with 1 or 2 small arms, gain +1 to attack rolls and +2 AC against that target.' },
      { level: 1, name: 'Kata System', desc: 'Gain Kata Points (4 at L1, scaling to 10 at L18) to trigger Kata Exploits. Regain all spent Kata on short or long rest. Max 1 exploit/turn (2/turn at L10+).' },
      { level: 5, name: 'Gun-Fu', desc: 'Attack twice with Attack action. If all attacks target the same creature, make 1 additional ranged attack against it.' },
      { level: 6, name: 'Cinematic Style Upgrade', desc: 'One Weapon: damage bonus increases to +6. Two Weapons: add ability modifier to the damage of your bonus off-hand attack.' },
      { level: 9, name: 'Reflex Shot', desc: 'When wielding a one-handed small arm, you can make a ranged attack as an opportunity attack.' },
      { level: 10, name: 'Kata Improvement', desc: 'You can now use up to 2 Kata Exploits per turn. Selecting an exploit a second time unlocks its ENHANCED version.' },
      { level: 13, name: 'Gun-Fu Upgrade', desc: 'Extra Attack improves to 3 attacks.' },
      { level: 14, name: 'Heroic Bloodshed', desc: '1/rest (1-hand small arm): All hits are auto-crits until next turn. (2 small arms): Double total attacks with Attack action, Bonus, and Reactions until next turn.' },
      { level: 17, name: 'Gun-Fu Upgrade', desc: 'The bonus attacks for focusing all attacks on a single target increases to +2 additional ranged attacks.' },
      { level: 20, name: 'Endorphin Response', desc: 'Bonus action: spend Hit Dice (no HP restored) to gain 4 Kata Points instantly.' }
    ],
    choiceMenus: [
      {
        name: 'Cinematic Style',
        hint: 'Choose your weapon combat style at 1st level.',
        levels: [1],
        options: {
          'One Weapon': 'Wielding a single 1-handed small arm grants +3 to damage rolls (+6 at L6).',
          'Two Weapons': 'Wielding two 1-handed small arms lets you make a bonus action off-hand attack (add ability mod to damage at L6).'
        }
      },
      {
        name: 'Kata Exploits',
        hint: 'Select exploits fueled by Kata points. Pick a second time at L10+ to unlock the Enhanced version.',
        trackTiers: true,
        levels: [1, 1, 2, 4, 8, 12, 16, 19],
        options: {
          'Abnormally Fast (1 Kata)': [
            'Double speed until next turn; if hit before next turn, regain 1 Kata.',
            'ENHANCED: Also gain +10 ft speed.'
          ],
          'Between The Knees (1 Kata)': [
            'Advantage on ranged attack; double ability mod on hit. If both miss, regain 1 Kata.',
            'ENHANCED: Triple ability mod damage on hit.'
          ],
          'Blood In The Eyes (1 Kata)': [
            'Reaction when enemy crits you: make ranged attack. Auto-crit if hit; regain 1 Kata if miss by 5+.',
            'ENHANCED: Regain 1 Kata on any miss.'
          ],
          'Boundary Threshold (1 Kata)': [
            'Within 5 ft of ≥2 enemies: spend 30 ft movement for 1 ranged attack.',
            'ENHANCED: Costs only 15 ft; can attack between movement.'
          ],
          'Classic Tumble (1 Kata)': [
            'Reaction on hit or failed DEX save: take 1/4 damage.',
            'ENHANCED: Take 0 damage instead.'
          ],
          'Equilibrium (1 Kata)': [
            'Reaction when enemy misses ranged attack vs you: make ranged attack; regain 1 Kata on crit.',
            'ENHANCED: Gain advantage on this attack.'
          ],
          'Hydrostatic Shot (1 Kata)': [
            'After hit: +2d6 dmg. If target moves/attacks, knock prone as reaction.',
            'ENHANCED: +3d6 dmg instead.'
          ],
          'Just One Bullet (1 Kata)': [
            'Spend before attack action: +2 dmg to all attacks this turn; regain 1 Kata on crit.',
            'ENHANCED: +4 dmg instead.'
          ],
          'Kinesics (1 Kata)': [
            'Bonus action: ignore diff terrain, no opportunity attacks, disadvantage on attacks vs you. Regain 1 Kata if hit >1 time.',
            'ENHANCED: Also gain +5 ft speed.'
          ],
          'Limber Up (1 Kata)': [
            'Bonus action: advantage on DEX/STR checks & saves until end of turn.',
            'ENHANCED: Also reroll results ≤8.'
          ],
          'Rapid Kill (2 Kata)': [
            'After hit: turn hit into a critical hit.',
            'ENHANCED: Triple damage dice instead of double.'
          ],
          'Way Of The Gun (1 Kata)': [
            'Hit target ≥20 ft away: make extra attack vs enemy within 5 ft of target.',
            'ENHANCED: Trigger on target up to 50 ft; bonus target within 15 ft.'
          ],
          'Weak Spot (4 Kata)': [
            'After hit: +3 dmg to every hit vs that target until dead or 5 mins.',
            'ENHANCED: +5 dmg instead.'
          ]
        }
      }
    ]
  },
    'Heavy': {
    desc: 'Devastating heavy-gunner, field control master, and walking firepower.',
    hitDie: 'd10',
    primaryStat: 'STR / CON',
    abilities: [
      { level: 1, name: 'Artillery Talents', desc: 'Gain 4 Artillery Talents at 1st level, and 1 more at 2nd, 5th, 9th, 13th, 17th, and 20th level. Repeating a talent increases its tier.' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Artillery Talent).' },
      { level: 6, name: 'Too Close', desc: 'If hit by an opportunity attack, make a single melee attack using your weapon as a club (as an action or part of your action).' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 10, name: 'Strongpoint', desc: '1/rest: Gain an additional action on your turn if both this and your normal action are used for Artillery Talents.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 14, name: 'Strongpoint Upgrade', desc: 'Strongpoint can be used twice per rest. Spend a Hit Die as a bonus action (no healing) to gain an extra use (max 1 extra action/turn).' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' }
    ],
    choiceMenus: [
      {
        name: 'Artillery Talents',
        hint: 'Select talents to customize your heavy weapons. Repeating a talent unlocks higher Tiers.',
        trackTiers: true,
        levels: [1, 1, 1, 1, 2, 5, 9, 13, 17, 20],
        options: {
          'Attack of Necessity': [
            'T1: Action (auto/auto-heavy): DEX save vs 10-ft cone (15-ft auto-heavy) for weapon dmg.',
            'T2: Cone size increases by +5 ft.',
            'T3: Knock target prone on failed save.',
            'T4: Cone size increases by another +5 ft.'
          ],
          'Rapid Fire': [
            'T1: Action (auto/auto-heavy): DEX save vs 10-ft cube (20-ft auto-heavy) in range for weapon dmg (-5 DC at max range).',
            'T2: Cube size increases by +10 ft.',
            'T3: Halve affected target\'s speed on failed save.',
            'T4: Cube size increases by another +10 ft.'
          ],
          'Easy Target': [
            'T1: Auto/auto-heavy attacks vs Large+ creatures deal +2 bonus dmg (+3 auto-heavy).',
            'T2: Bonus increases by +1.',
            'T3: Bonus increases by another +1.',
            'T4: Bonus increases by another +1.'
          ],
          'Gaming Avatar': [
            'T1: Action single autofire attack: beat AC by X to trigger effects (push, disadv, zero speed, lose action).',
            'T2: +2 to attack roll for talent calculation.',
            'T3: +4 to attack roll for talent calculation.',
            'T4: +6 to attack roll for talent calculation.'
          ],
          'Imposing Frame': [
            'T1: Spend 30 ft movement: +1 AC, half-cover to allies within 5 ft, adv vs forced move.',
            'T2: Allies gain 3/4 cover instead of half cover.',
            'T3: Your AC bonus increases to +2.',
            'T4: Movement cost reduces to 20 ft.'
          ],
          'Overwatch': [
            'T1: Spend 30 ft movement (auto/auto-heavy): set 10-ft cube (20-ft auto-heavy) as diff terrain; reaction DEX save for dmg if enemy enters.',
            'T2: Cube size increases by +10 ft.',
            'T3: Movement cost reduces to 20 ft.',
            'T4: Cube size increases by another +10 ft.',
            'T5: Spend action to double the area.',
            'T6: Sustain zone by spending only 10 ft of movement.'
          ],
          'Precision Fire': [
            'T1: Non-autofire attack: reroll 1s on dmg; max dmg die result gives +1 dmg.',
            'T2: Crits roll all damage dice twice and keep the higher result.',
            'T3: Max die bonus increases to +2 dmg.',
            'T4: Roll 1d6 extra damage on a max die result.',
            'T5: Reroll 1s and 2s on damage dice.'
          ],
          'Shrapnel': [
            'T1: Hit with auto/auto-heavy: 1 target within 5 ft (10 ft auto-heavy) takes DEX/STR mod dmg.',
            'T2: Shrapnel range increases by +10 ft.',
            'T3: Double damage to secondary target.'
          ],
          'Sure-Footed': 'Treat heavy weapons as two-handed small arms for movement penalty purposes (does not apply to super heavy weapons).'
        }
      }
    ]
  },
    'Infiltrator': {
    desc: 'Stealth operative, assassin, and master of procedural memory and tactical precision.',
    hitDie: 'd8',
    primaryStat: 'DEX / WIS',
    abilities: [
      { level: 1, name: 'Procedural Memory', desc: 'Gain rerolls equal to Proficiency Bonus + 4 per long rest. Reroll any bad d20 roll until you accept a result or run out of uses. Works on disadvantage (removes disadvantage state).' },
      { level: 1, name: 'Leet', desc: 'Whenever you have advantage on an attack roll, that target has disadvantage on attacks against you until start of your next turn.' },
      { level: 1, name: 'Intended Target', desc: '1/turn: Hitting a target within 20 ft when you have advantage doubles your weapon\'s base damage dice.' },
      { level: 2, name: 'Pacification', desc: 'When you hit with an attack, spend a Hit Die (restores no HP) to convert the hit into a critical hit.' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Procedural Memory use).' },
      { level: 5, name: 'Ghost', desc: 'Advantage on initiative. If you act first in combat, gain 1 extra action on turn 1 and advantage on all attack rolls until end of turn.' },
      { level: 6, name: 'Efficient Killer', desc: 'Hitting a target within 20 ft with a melee or ranged weapon lets you repeat the attack on the same target as part of the same action if previous hit.' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 9, name: 'Most Dangerous Prey', desc: 'When attacking with a 1-handed small arm or melee weapon with advantage, from cover, or vs surprised target: step up weapon damage die by 1 rank (d4->d6->d8->d10->d12).' },
      { level: 10, name: 'Crippling Effect', desc: 'Score critical hits on a natural 19 or 20 with 1-handed small arms and 1-handed melee weapons.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 13, name: 'Efficient Killer Upgrade', desc: 'Efficient Killer allows up to 5 additional attacks against the same target in a single action as long as each previous attack hits.' },
      { level: 14, name: 'Tactical Passage', desc: 'Dash as a bonus action. Moving through non-hostile creatures\' spaces costs no extra movement.' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 17, name: 'Enhanced Camouflage', desc: 'Half cover counts as 3/4 cover; 3/4 cover counts as total cover.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 20, name: 'System Shock', desc: 'Scoring a critical hit on a creature stuns it until the end of your next turn (1/long rest).' }
    ],
    choiceMenus: [
      {
        name: 'Solid Skills',
        hint: 'Select specialized tactical abilities at levels 1, 4, 7, 10, 13, 16, and 19.',
        levels: [1, 4, 7, 10, 13, 16, 19],
        options: {
          'Around Corners': 'Aware of the location of hidden/invisible creatures within 10 ft as long as you are not deaf.',
          'Automatic': '+2 additional uses of Procedural Memory (can only be selected once).',
          'Focus': 'Range of Intended Target increases to 40 ft.',
          'Following Patterns': 'Reduce the Passive Perception of all encountered enemies by 2.',
          'Increased Fatality': 'Intended Target triples base weapon damage dice instead of double.',
          'Multi-Talented': 'Gain proficiency in 1 skill or tool (or +2 bonus if already proficient).',
          'Quickness': '+5 ft speed if unseen enemies are within 50 ft.',
          'Readiness': 'Readying an Attack action grants advantage when triggered within 20 ft or when target reveals itself.',
          'Reflex Dash': '+10 ft speed until end of next turn when hit by an attack.',
          'Response': 'Advantage on next attack vs an enemy within 40 ft that missed an attack against you.',
          'Scanner': 'You can perform the Search action as a bonus action.',
          'Sprung': 'Stand from prone using only 5 ft movement; high jump distance increased by +5 ft.'
        }
      }
    ]
  },
    'Marshal': {
    desc: 'Tactical commander, battlefield coordinator, and inspiring squad leader.',
    hitDie: 'd8',
    primaryStat: 'CHA / WIS / INT',
    abilities: [
      { level: 1, name: 'Command Presence', desc: 'Select 1 Command Presence aura. At levels 2, 6, 10, 14, and 18, choose another presence or upgrade an existing one to Tier 2.' },
      { level: 1, name: 'For the Good of the Team', desc: 'Action: grant an ally in LOS an extra action on their next turn. Reaction to rolling initiative: swap initiative result with any willing ally.' },
      { level: 1, name: 'Team Power', desc: 'Gain Team Powers at level 1 and at levels 2, 5, 6, 9, 10, 13, 14, 17, and 20.' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Team Power).' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 20, name: 'Manifestation of Greatness', desc: 'Roll 1d4 natural 20s per long rest. Reaction: replace any ally\'s d20 roll in LOS with one of these stored natural 20s.' }
    ],
    choiceMenus: [
      {
        name: 'Command Presence',
        hint: 'Aura abilities that motivate allies. Repeat a pick to unlock Tier 2.',
        trackTiers: true,
        levels: [1, 2, 6, 10, 14, 18],
        options: {
          'By Example': [
            'T1: Allies in LOS have adv on INT/WIS/CHA saves. [Boost Action 1/rest: allies in 20ft gain +1 AC for 1 min].',
            'T2: Also grants adv on STR/CON saves; Boost gives +2 AC instead.'
          ],
          'Field Advice': [
            'T1: Double effects that remove exhaustion; long rest reduces exhaustion by 2 if eaten. [Boost Action 1/rest: reduce ally exhaustion by 1].',
            'T2: Distribute half-level HD on long rest; Boost heals allies 1/4 HP.'
          ],
          'Intimidating Mug': [
            'T1: Enemies within 10 ft treat area as difficult terrain. [Boost Action 1/rest: double range to 20 ft for 1 min].',
            'T2: Base range becomes 20 ft; Boost range becomes 40 ft.'
          ],
          'Mask of Authority': [
            'T1: Allies in LOS reroll 1s on damage dice. [Boost Action 1/rest: allies gain +1 dmg for 1 min].',
            'T2: Allies reroll 1s twice; Boost gives +2 dmg.'
          ],
          'Stand As One': [
            'T1: Allies in LOS reduce damage taken by 1 (2 at L10). [Boost Action 1/rest: grant resistance to 1 energy type for 1 min].',
            'T2: Damage reduction becomes 2 (3 at L10).'
          ],
          'Strategic Precision': [
            'T1: 1/turn on hit: ally in LOS gains +2 to next attack roll. [Boost Action 1/rest: +1 attack vs last target hit].',
            'T2: Selected ally gains advantage instead of +2.'
          ]
        }
      },
      {
        name: 'Team Power',
        hint: 'Tactical squad powers unlocked as you level up.',
        levels: [1, 2, 5, 6, 9, 10, 13, 14, 17, 20],
        options: {
          'Allies Rebound (L5+)': 'Action: attack a target up to number of allies that attacked it since your last turn (max 2; multi-pick up to 4 attacks).',
          'Autocratic': 'Reaction when ally suffers a crit: make a single attack vs the attacker.',
          'Big Picture': 'Action: pick ally; if they hit before your next turn, add +(WIS mod + level) bonus damage.',
          'Boar\'s Head': 'Spend 10 ft movement: ally gains +5 ft speed until start of next turn.',
          'Control the Battle Theater': 'You and all allies gain +2 bonus to initiative rolls.',
          'Face Slap (L5+)': 'Action: wake adjacent unconscious ally; if at <0 HP, heal to 1 HP (1/long rest).',
          'Focus Target (L5+)': 'Bonus action: ally within 5 ft makes 1 ranged attack vs same target you hit with ranged attack this turn.',
          'Improvisation is the Best Plan': 'Bonus action: gain 1 additional reaction before start of next turn.',
          'Mark of the Puppeteer': 'Reaction when ally hits: shove target 5 ft (cannot shove into hazards).',
          'No One Hits the Chief (L5+)': 'Reaction when hit by a crit: allies gain adv on attacks vs attacker until start of your next turn.',
          'Pat on the Back': 'During short rest: give any of your Hit Dice to allies.',
          'Plan of Attack': 'Spend 10 ft movement: move an ally 5 ft (no opportunity attacks, no reaction needed).',
          'Pure Leader': 'Hit with ranged attack: deal 0 dmg, ally disengages and moves up to half speed.',
          'Quick Patch': 'Action: heal ally 1d6 per your level HP (1/long rest; multi-pick up to 3 uses & +1d6).',
          'Reading Body Language': 'Gain advantage on Insight, Survival, Deception, Intimidation, Performance, or Persuasion (multi-pick for different skills).',
          'Shared Vigilance': 'You and allies gain +2 bonus to passive Perception while you are conscious.',
          'Snap Out Of It': 'Reaction: deal 1d4 damage to ally within 5 ft to remove charmed, frightened, or stunned.',
          'Unnecessary Abuse (L5+)': 'Reaction when ally within 5 ft misses: deal 1d4 dmg to ally to let them reroll with advantage.',
          'Warrior\'s Respite (L5+)': 'Action: up to 4 allies spend 1 HD + CON mod to heal (1/rest).'
        }
      }
    ]
  },
    'Martial Artist': {
    desc: 'Unarmed and melee specialist utilizing lethal combo chains and devastating finishing moves.',
    hitDie: 'd10',
    primaryStat: 'DEX / STR',
    abilities: [
      { level: 1, name: 'Combo Chain', desc: 'Hits build your combo chain tier (T1: 1d6 -> T2: 1d8 -> T3: 1d10 -> T4: 1d12 [L9] -> T5: 2d6 [L13]). Hitting at T2+ lets you unleash a Finishing Move, which resets chain to T1.' },
      { level: 2, name: 'Block Attack', desc: 'Bonus action: gain +2 AC until next turn OR make 1 single melee attack. At level 5: spend a Hit Die to increase to +3 AC or 3 attacks instead of 1.' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Martial Exploit).' },
      { level: 6, name: 'Extra Attack', desc: 'Attack twice when taking the Attack action.' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 9, name: 'Combo Chain (Tier 4)', desc: 'Max combo chain increases to Tier 4 (1d12 unarmed).' },
      { level: 10, name: 'Extra Attack (3)', desc: 'Extra Attack improves to three attacks.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 13, name: 'Combo Chain (Tier 5)', desc: 'Max combo chain increases to Tier 5 (2d6 unarmed).' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 20, name: 'Extra Attack (4)', desc: 'Extra Attack improves to four attacks.' }
    ],
    choiceMenus: [
      {
        name: 'Fighting Form',
        hint: 'Choose your combat core focus at 1st level.',
        levels: [1],
        options: {
          'Dexterity Form': '+1 melee attack roll at Tier 2 (+2 at L14, +3 at L17); add +0.5x DEX mod to AC in light armor; use DEX (Acrobatics) for grapples.',
          'Strength Form': '+1 to all melee damage rolls (+3 at L14, +5 at L17); gain medium/heavy armor prof; adv on shove checks (+10 ft shove distance).'
        }
      },
      {
        name: 'Martial Exploits',
        hint: 'Select combat maneuvers to augment your martial abilities.',
        levels: [1, 2, 5, 8, 11, 14, 17, 20],
        options: {
          'C-C-C-Combo Breaker': 'Reaction when same enemy hits you twice in a round: make melee attack vs target; on hit, inflict dmg and end its turn (size <= yours).',
          'Calisthenics': 'Gain +1 damage bonus to all melee damage rolls.',
          'Gun Something-Something': 'Treat 1-handed small arms as melee weapons vs targets within 5 ft (all ranged attacks at <=5 ft count as melee).',
          'Chain Boost': 'Bonus action: spend 1d4 HD (restore no HP) to increase combo chain tier by that same amount (1/rest, max tier applies).',
          'Marker': 'On hit, target in reach has disadv on attacks not including you until end of next turn (ends if 0 HP or out of reach).',
          'Newaza': 'Reaction grapple if target breaks grapple; +2 AC vs grappled target; no disadv on melee while prone; miss grappled target by <=5 hits them instead; move grappled target without speed penalty.',
          'Pound for Pound': 'Reaction: move up to your speed towards an enemy that moves away from you (even with Disengage).',
          'Redirection of Energy': 'Gain temp HP = melee crit dmg taken (1/long rest); gain adv on attacks vs attacker until end of next turn.',
          'Rhythm String': 'After finisher, gain bonus to next T1 attack = finisher tier (+5 bonus for T5 finisher).',
          'Tag Team': 'Reaction when ally hits enemy in 5 ft with melee attack: deal bonus dmg = STR or DEX mod (doesn\'t count toward combo).',
          'Ultra': 'Hit target: increase combo tier by +1 and immediately perform a finisher (1/long rest).',
          'Unarmed Expanded Profile': 'Spend 30 ft movement: unarmed attacks gain reach until end of next turn.',
          'Vicious Hook (Req L10)': 'Melee attacks score a critical hit on natural 19 or 20.',
          'Wrestler': 'Half cover while grappling a target; missed attacks against you by <=5 hit grappled target instead.'
        }
      }
    ]
  },
    'Medic': {
    desc: 'Battlefield doctor, combat chemist, and support specialist using spell-like Medical Exploits.',
    hitDie: 'd6',
    primaryStat: 'WIS / INT',
    abilities: [
      { level: 1, name: 'Target Avoidance', desc: 'Bonus action: take the Dash action (at level 2: can also Disengage as a bonus action).' },
      { level: 1, name: 'Primary Target', desc: 'If you don\'t take an Attack action on your turn, gain +2 AC until start of next turn (+3 at L5, +4 at L9).' },
      { level: 1, name: 'Medical Exploits & Applications', desc: 'Access to at-will Medical Applications and 1st-4th level Medical Exploits (fueled by exploit slots). Use INT or WIS for save DCs and attack rolls.' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Medical Application).' },
      { level: 6, name: 'Medical Emergency', desc: '1/turn on your turn: activate one Medical Application requiring an action or bonus action for free.' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 10, name: 'Intelligent Resistance', desc: 'Double your proficiency bonus on all Intelligence and Wisdom saving throws.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 13, name: 'Risk An Aneurysm', desc: 'On your turn: spend Hit Dice (no HP restored) to instantly recover 1 Medical Exploit slot per Hit Die spent (max 1 slot/turn).' },
      { level: 14, name: 'Mindfulness', desc: 'Gain 2 additional Hit Dice permanently.' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 17, name: 'Expanded Knowledge', desc: 'Gain proficiency in 2 additional skills from the Medic class list.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 20, name: 'Good Thing You Have Friends', desc: 'Allies within 5 ft grant cover (1 ally = half cover, 2 = 3/4 cover, 3 = full cover). Transfer hit damage to an adjacent ally.' }
    ],
    choiceMenus: [
      {
        name: 'Medical Applications',
        hint: 'At-will tactical medical abilities unlocked as you level up.',
        levels: [1, 1, 5, 9, 13, 17],
        options: {
          'Basic Treatment': 'Action (Touch, Medkit): Target gains bonus to next CON/WIS/INT save = your Proficiency Bonus (1/check).',
          'Defilade': 'Reaction: When hit by a crit, allies in LOS gain advantage on attacks vs the attacker until start of its next turn.',
          'Do Science To It': 'Bonus action: Double proficiency bonus on your next Medicine or Sciences check made this turn.',
          'Evasive Overdrive': 'Bonus action: Gain +1 AC against 1 visible target and provoke no opportunity attacks from it until next turn.',
          'Field Shot': 'Bonus action: After using a medical exploit as an action, make 1 ranged attack using INT/WIS instead of DEX.',
          'Imperative Escape': 'Reaction: Halve damage from a hit suffered while already below half HP.',
          'Live, Damn You': 'Action (Touch, Medkit + 1 HD): Target at 0 HP stabilizes to 1 HP; target above 0 HP heals 1d6 + Prof bonus (2d6 at L10).',
          'Medical Expertise': 'Reaction on ally hit: Add INT or WIS modifier as extra damage to the ally\'s hit.',
          'Medical Knowledge': 'Bonus action after firearm hit: Make exploit attack; on hit, target has disadv on next attack roll.',
          'Modern Master': 'Bonus action after exploit that recovers HP: Target recovers +1d4 extra HP (+2d4 at L10).',
          'Outthink and Outwit': 'Action (30 ft): Make a ranged attack roll using INT or WIS instead of DEX.',
          'Weak Spot': 'Bonus action on hit: Halve target\'s speed until start of your next turn (1/turn).'
        }
      }
    ]
  },
    'Sniper': {
    desc: 'Long-range assassin, patient marksman, and cover-based stealth specialist.',
    hitDie: 'd8',
    primaryStat: 'DEX / WIS',
    abilities: [
      { level: 1, name: 'Marksman Talent', desc: 'Pool of Marksman Points (5 at L1, up to 15 at L20; +2 temp pts on sniper kill). Spend points per attack (max 2 at L1, 3 at L5, 4 at L10, 5 at L17, 6 at L20) to trigger talents (e.g. Academic Hill, Boom Headshot, Magic Bullet, Pinpoint Accuracy). Points refill on rest.' },
      { level: 2, name: 'Ghostly Positioning', desc: 'If you move <= half speed and end movement in cover, gain +2 Stealth. Take the Hide action as a bonus action.' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Battle Condition).' },
      { level: 6, name: 'Hidden Relocation', desc: 'On a successful Hide action, move up to half speed without revealing position if ending in a location not clearly visible.' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 9, name: 'Mad Minute', desc: 'Attack twice with Attack action. If you hit with 1st attack, sacrifice 2nd attack to gain 1 Marksman Point immediately.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 13, name: 'Mad Minute Upgrade', desc: 'Attack three times with Attack action. Sacrifice up to 2 additional attacks on hit to gain up to 2 Marksman Points immediately.' },
      { level: 14, name: 'Shadow\'s Veil', desc: 'Hitting a target with a sniper weapon while hidden lets you immediately attempt to Hide again with advantage as part of the same action.' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' }
    ],
    choiceMenus: [
      {
        name: 'Battle Condition',
        hint: 'Select specialized tactical sniping disciplines as you level up.',
        levels: [1, 2, 6, 10, 14, 17, 20],
        options: {
          'Army Crawl': 'While prone, no disadvantage on ranged attacks made with sniper weapons.',
          'Ballistics Expertise': 'Spend 10 ft movement to instantly swap between a 1-handed small arm and a sniper weapon.',
          'Covert Operation': 'Spend 20 ft movement to gain advantage on Dexterity (Stealth) checks until end of turn.',
          'Dead Eye': 'Reaction when hit by a crit within 25 ft: automatically switch to pistol and make a ranged attack against the attacker.',
          'Low Profile': 'While prone, half cover becomes 3/4 cover, and 3/4 cover becomes total cover.',
          'Failure Is Not An Option': 'Reroll a natural 1 on an attack roll with a sniper weapon (unless at disadvantage).',
          'Snap Shot': 'Bonus action ranged attack with any firearm (disadvantage with sniper weapons; cannot use Marksman Talents).',
          'Lead The Target': 'Bonus action focus target in LOS (1/rest): +1 attack with sniper weapon; 3/4 cover treated as total cover.',
          'Penetration Shot': '3/4 cover treated as half cover; ignore half cover when making ranged sniper attacks.',
          'Perfect Tracker': 'Move up to half speed while maintaining your sniper bonus.',
          'Sharpshooter': 'Action: gain advantage on your next ranged attack with a sniper weapon.',
          'Shock & Awe': 'Missing with a sniper weapon causes target to suffer disadvantage on its next attack vs you.',
          'Smooth As Glass': 'Permanently add +2 additional Marksman Points to your maximum total (can select up to 3 times).',
          'Zero Your Weapon': 'Bonus action: double both normal and long ranges of any sniper weapon you wield.'
        }
      }
    ]
  },
    'Techie': {
    desc: 'Master field engineer, gadget hacker, firearm modifier, and machine technician.',
    hitDie: 'd8',
    primaryStat: 'INT / WIS',
    abilities: [
      { level: 1, name: 'Tech Points & Shiny Red Button', desc: 'Gain Tech Points (6 at L1, +1/level). Program custom button configurations onto firearms. Pressing the button (no action) spends TP to activate all programmed Button Functions for 5 mins.' },
      { level: 1, name: 'Widget Bag', desc: 'Carry $200 worth of spare parts and salvage. Scavenge $10 worth during short rests and $20 worth during long rests.' },
      { level: 1, name: 'Tech Savant Exploits', desc: 'Gain unique technical traits at levels 1, 2, 5, 9, 13, 17, and 20.' },
      { level: 3, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype (or forgo it for an extra Tech Savant exploit).' },
      { level: 6, name: 'Pioneer', desc: 'Attack twice when taking the Attack action (improves to three attacks at level 14).' },
      { level: 7, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 10, name: 'McGuy Something', desc: '1/long rest: Spend $20 of widget bag parts and make an INT (Engineering) check to improvise useful tools or crisis solutions on the fly.' },
      { level: 11, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 14, name: 'Pioneer Upgrade', desc: 'Extra Attack improves to three attacks.' },
      { level: 15, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' },
      { level: 18, name: 'Archetype Feature', desc: 'Gain a feature from your chosen Archetype.' }
    ],
    choiceMenus: [
      {
        name: 'Tech Savant Exploits',
        hint: 'Select engineering perks and technological enhancements.',
        levels: [1, 2, 5, 9, 13, 17, 20],
        options: {
          'Candy-Like Button': 'Each button implanted on a weapon can hold up to three different configurations.',
          'Economical Plating': 'Gain +1 AC. Action (1 TP): increase armor AC by an additional +1 for 5 minutes.',
          'Failsafe': 'Unintended user explodes weapon on trigger (crit dmg, stunned if <=Medium). Weapon breaks.',
          'Friggin\' Love Science': 'Spend 1 TP: gain advantage on INT (Science) or INT (Engineering) checks. Multi-pick: spend 1 TP to set next d20 roll to natural 20.',
          'Immediacy': 'Bonus action (1 TP): gain an extra action on this turn (cannot be used for an Attack action).',
          'Like Machines': 'Permanently increase your maximum Tech Points by +2 (can be selected up to 4 times).',
          'Midas Touch': 'Firearm damage bonus increases by +2. Stacks with other damage-increasing effects.',
          'Priorities': 'Spend Hit Dice on your turn (restore no HP) to recover 2 Tech Points per Hit Die spent.',
          'Scientist, Not A Soldier': 'When taking the Disengage action, make a single ranged attack as part of the same action (half damage on hit).',
          'Shrapnel Modification': 'Spend 1 TP after a hit: target becomes vulnerable to all ally attacks until start of your next turn.'
        }
      }
    ]
  },  
};

const ARCHETYPE_DATA = {
  'Anti-Hero': {
    desc: 'You are no one\'s friend. A mercenary, a calculating killer who maintains temporary alliances only when it suits you.',
    synergy: 'Face, Infiltrator, Grounder, Sniper',
    proficiencies: 'Simple melee weapons and one-handed small arms',
    abilities: [
      { level: 3, name: 'Dead Pool', desc: 'Gain a reservoir of death you can tap to inflict additional damage. Add any amount from your dead pool to any hit against a target 20 ft or closer. Long rest reduces dead pool to zero. Gain points: (1) Reduce a creature 20 ft or closer to 0 HP → gain 5 points; additional damage beyond zero is added (max 5, 10 total). (2) Roll the maximum value of a damage die vs a target 20 ft or closer → add half that value (once until start of next turn). (3) An enemy scores a critical hit on you → gain 10 points. Pool size: 10 (3rd) / 20 (7th) / 30 (11th) / 40 (15th) / 50 (18th).' },
      { level: 7, name: 'Fourth Wall', desc: 'If any ally within 50 ft suffers any damage, your dead pool is filled by the same value. Once you use this ability, you cannot use it again until you finish a long rest.' },
      { level: 11, name: 'Cheat', desc: 'When you finish a long rest, set a d20 roll to 20 and put it aside. You can replace any attack roll, saving throw, or ability check made by you with that die (at which point it is used up). No action. Can do so before or after a roll, but not after determining the results. An unused die is lost when you finish a long rest.' },
      { level: 15, name: 'The Less Interesting 15th Level Ability', desc: 'As a bonus action, you can use any amount from your dead pool to recover your hit points.' },
      { level: 18, name: 'The Benefit of Friends', desc: 'If an ally is reduced to 0 hit points, you gain 20 points to your dead pool.' }
    ]
  },
  'Authority': {
    desc: 'You are the best in your field. Among the esteemed elite, you consider yourself an equal — leading scientist, world expert, or a head doctor.',
    synergy: 'Civilian, Face, Marshal, Medic, Techie',
    proficiencies: 'One of: Intelligence (Demolitions), Intelligence (Engineering), Intelligence (History), or Intelligence (Sciences). Or pick a skill you already possess to gain a +2 bonus to that skill.',
    abilities: [
      { level: 3, name: 'PHD', desc: 'Select one Intelligence skill of your choice. You can set your d20 roll to 20 when you really need a roll to succeed. Once you use this ability, you cannot use it again until you finish a long rest.' },
      { level: 7, name: 'Resident Expert', desc: 'Instead of using your Hit Dice to recover hit points, you can spend an action and spend one hit die (recover no hit points) to gain a +10 bonus to any failed Intelligence skill check.' },
      { level: 11, name: 'Second Nature', desc: 'When attempting any Intelligence skill, it only takes a bonus action instead of an action. Additionally, if you roll less than 10 for an Intelligence check, increase the result to 10.' },
      { level: 15, name: 'Sherlock', desc: 'You can use the Search action as a bonus action. You also gain half your proficiency bonus (round down) to every Intelligence skill you are not already proficient in.' },
      { level: 18, name: 'Straight Dope', desc: 'Your selected skill with PHD improves — unless you have disadvantage with the check, it always results in a natural 20.' }
    ]
  },
  'Banner Head': {
    desc: 'You are not a pretty individual. You have one job. You shoot people twice in the chest and once in the head. You are the champion hero — the one target enemies need to take down.',
    synergy: 'Grounder, Gunslinger, Heavy, Marshal, Martial Artist',
    proficiencies: 'Any two ranged weapons of your choice',
    abilities: [
      { level: 3, name: 'Fleeting Adversary', desc: 'After rolling initiative (no action), select one creature within 50 ft and line of sight. That target is your fleeting adversary. You gain a +1 bonus to attack your fleeting adversary, and it suffers disadvantage on attack rolls that don\'t include you as a target. Ends if you drop to 0 HP, the creature drops to 0 HP, you move beyond 50 ft, or line of sight is broken. Once selected, you cannot select another until you roll for initiative again.' },
      { level: 7, name: 'The War Pose', desc: 'You can take a −1 penalty to attack rolls for each weapon you wield to wield a two-handed small arm with one hand. The weapon only counts as a one-handed small arm for purposes of how many hands you use to wield it and for abilities and feats.' },
      { level: 11, name: 'Adversarial Rage', desc: 'As a bonus action, gain +2 damage against your fleeting adversary, increasing to +3 at 15th level, +4 at 18th level. This increase ends if the target is no longer your fleeting adversary. Once you use this feature, you cannot select another until you finish a long rest.' },
      { level: 15, name: 'Remember Me?', desc: 'If your fleeting adversary attacks an ally, you can make a single ranged attack against it as a reaction.' },
      { level: 18, name: 'Unexpected Response', desc: 'Until your fleeting adversary is reduced to 0 hit points, each time it hits you, you gain a +1 bonus to attack rolls against it. This bonus is cumulative up to +3 but is lost if you attack any creature other than your fleeting adversary or you score a hit.' }
    ]
  },
  'Brawler': {
    desc: 'You\'re a thug, pure and simple. Scrappy. Your talents are less about martial discipline and more about using brute strength to manhandle opponents.',
    synergy: 'Gunslinger, Marshal, Martial Artist',
    proficiencies: 'All simple melee weapons and unarmed strikes',
    abilities: [
      { level: 3, name: 'Ham Hands', desc: 'You can use both hands when grappling a target your size or smaller to have advantage on all rolls related to the grapple.' },
      { level: 7, name: 'Head-Butt', desc: 'While grappling a creature your size or smaller, you can inflict 1d6 damage per character level on the target as a bonus action. Once you use this feature, you cannot use it again until you take a short rest or long rest.' },
      { level: 11, name: 'Head Slam', desc: 'If you have one grappled creature in each hand, you can use a bonus action and make an unarmed melee attack against each target. A hit deals 2d6 + your Strength modifier damage to each target.' },
      { level: 15, name: 'Bear Hug', desc: 'When grappling a target your size or smaller with two hands, you may attempt a bear hug. Make an unarmed strike as your action (or one of your attacks). A hit inflicts 2d6 + your Strength modifier damage.' },
      { level: 18, name: 'Neck Snap', desc: 'If you make an unarmed strike against a target you are grappling, you score a critical hit on a natural roll of 19 or 20.' }
    ]
  },
  'Brother of Blood': {
    desc: 'On the battlefield, every ally is a brother. You know when one is hurt. You would never take risks that endanger another brother\'s life. NOTE: This archetype\'s abilities are useless unless at least one other party member has taken the same archetype.',
    synergy: 'Grounder, Heavy, Marshal, Medic, Sniper',
    proficiencies: 'One weapon and one armor (except exo-armor) another brother of blood is proficient in. If you both select this archetype at the same time, you can both choose new items, as long as you both choose the same items.',
    abilities: [
      { level: 3, name: 'More Like Family', desc: 'If a creature scores a critical hit on an allied brother of blood, you can make a single ranged attack against the attacker as a reaction.' },
      { level: 7, name: 'Allied Support', desc: 'As a bonus action, target one allied brother of blood in line of sight. The targeted brother gains an action that must be used before the end of your turn (does not count as a reaction for the ally). Each brother of blood can benefit from Allied Support only once per round. Once per short or long rest. You gain one additional use at 11th, 15th, and 18th level before being required to finish a short or long rest to regain all spent uses.' },
      { level: 11, name: 'Army of Many', desc: 'You grant a +2 bonus to damage rolls to each brother of blood within 10 feet of you (cumulative up to +6). Remember that they will be granting you this same bonus.' },
      { level: 15, name: 'Better Reflexes', desc: 'You can use the Help action on another allied brother of blood as a bonus action.' },
      { level: 18, name: 'Team Effort', desc: 'After rolling for initiative, you and all allied brothers of blood act on the highest initiative among you. You all can decide which order you act in.' }
    ]
  },
  'Cleaner': {
    desc: 'Someone hands you an image, an address, or just a name. You move in quickly and quietly, eliminating defenses, dispatch the enemy efficiently, and vanish into the shadows.',
    synergy: 'Face, Gunslinger, Infiltrator, Martial Artist',
    proficiencies: 'All simple melee weapons and one-handed small arms',
    abilities: [
      { level: 3, name: 'Once In The Head', desc: 'If you score a hit on a target 20 feet away or closer with a melee weapon or a one-handed small arm, you inflict additional damage equal to three times your level. You can use this ability once before taking a short or long rest, or twice if you kill the first target with this attack.' },
      { level: 7, name: 'Twice In The Chest', desc: 'If wielding a melee weapon or a one-handed small arm, as an action you can make three attacks against a single target 20 feet away or closer. All attacks have advantage. You can use this ability once before taking a short or long rest, or twice if you kill your target with one of these attacks.' },
      { level: 11, name: 'Quick Succession', desc: 'If you use Once In The Head but fail to kill the target, make one additional identical attack. This attack automatically hits, and you inflict additional damage equal to three times your level (including the additional damage with Once In The Head). Once you use this feature, you cannot use it again until you take a long rest.' },
      { level: 15, name: 'Out Of The Blue', desc: 'If you have advantage against a target that is surprised or from whom you are hidden, your first hit against them is an automatic critical hit assuming you hit before the end of your first turn.' },
      { level: 18, name: 'Desperate Solution', desc: 'As an action, add up all the enemies you can see — you then gain a number of attacks equal to double that number as part of that same action (Max 20 attacks). You can distribute the attacks any way you see fit. Once you use this feature, you cannot use it again until you take a long rest.' }
    ]
  },
  'Country Gunman': {
    desc: 'You keep your weapon holstered until the last second. You prefer to stare down opponents than use your firearm. However, when drawn, you make it quick and final — single shots, single kills.',
    synergy: 'Face, Grounder, Gunslinger, Marshal',
    proficiencies: 'All one-handed small arms',
    abilities: [
      { level: 3, name: 'Improved Reaction Time', desc: 'You add 2d4 to all your initiative rolls.' },
      { level: 7, name: 'Precise Shot', desc: 'If you act before any enemy in the encounter, you have advantage with all attack rolls made with one-handed small arms until the first enemy acts.' },
      { level: 11, name: 'Quick and the Dead', desc: 'If you have the highest initiative value at the start of an encounter, add your initiative roll (including your bonus from Improved Reaction Time) as bonus damage to your first hit with a one-handed small arm. This bonus to damage is lost if not applied by the end of your first turn.' },
      { level: 15, name: 'Reputation', desc: 'If you have the highest initiative value at the start of an encounter, you gain one additional action on your first turn.' },
      { level: 18, name: '12 O\'Clock', desc: 'When you ready an attack action with a one-handed small arm, you have advantage with the attack, and if you hit the target, the attack becomes a critical hit. If you employ this ability, you can only make a single attack.' }
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
