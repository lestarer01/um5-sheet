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
  },
    'Diplomat': {
    desc: 'You\'re the one brought in when weapons cannot be used, when even the brandishing of firearms is considered a total failure. You cannot give the appearance of aggression. You\'re the wave of the future, where words rather than bullets will solve disputes.',
    synergy: 'Civilian, Face, Marshal, Medic, Techie',
    proficiencies: 'Two Charisma skills of your choice',
    abilities: [
      { level: 3, name: 'Volume and Presence', desc: 'As an action, select one target your size within 25 feet that can understand you. The target makes a Wisdom save against your psychological attack. DC = 8 + proficiency bonus + Wisdom or Charisma modifier. On a failed save, either you have advantage on all contested Wisdom or Charisma ability checks and skill checks until the end of your next turn, OR the target is frightened of you until the beginning of your next turn. If you target the same creature on your next turn, the DC increases by +2 (consecutively to +6). Does not work on a target that has suffered damage from you or an ally in the past minute. If a creature\'s saving throw is successful against the fear or the fear effect ends for it, the creature is immune to this effect for the next 24 hours.' },
      { level: 7, name: 'The Art of the Compromise', desc: 'Select one Charisma skill. You double your proficiency bonus with this skill. At 11th level and 18th level, you may select an additional Charisma skill.' },
      { level: 11, name: 'Confidence Comes With The Position', desc: 'You can never have disadvantage with any Charisma skill checks, ability checks, or saving throws.' },
      { level: 15, name: 'I Think We Got Off On The Wrong Foot', desc: 'As a bonus action, you can spend a Hit Die (recovering no hit points) to set your next Charisma or Wisdom skill check to a natural 20 instead of rolling.' },
      { level: 18, name: 'Everything You Got', desc: 'As an action, select one target within 25 feet that can understand you. The target makes a Wisdom save against your psychological attack. DC = 8 + proficiency bonus + Wisdom/Charisma modifier. If the target fails, it is stunned until the start of your next turn. Does not work on a target that has suffered damage from you or an ally in the past minute.' }
    ]
  },
  'Driver': {
    desc: 'You love your vehicle. You wash her; you change the oil; you maintain every part. Every week she gets a fresh coat of wax, and on Sunday afternoon, you take her for a cruise. No, it\'s not weird.',
    synergy: 'Civilian, Face, Infiltrator, Marshal, Techie',
    proficiencies: 'All ground vehicles and aircraft',
    abilities: [
      { level: 3, name: 'Stunt Master', desc: 'You can learn vehicle stunts. Select one stunt from the list. You can select one additional stunt at 7th, 11th, 15th, and 18th level. Many stunts require a vehicle attack. Your attack bonus equals your Dexterity modifier + proficiency bonus. If you hit, you inflict 1d8 per size category larger your vehicle is than the target (minimum 1d8 if same size). Your vehicle takes 25% of the damage from this attack. STUNTS: Love Tap — As an action, ram attack another vehicle or creature; on hit deal 1d8 additional damage. Signature Move — As a bonus action, gain +3 bonus with Dexterity (Vehicle Operation) checks until end of your turn. Counter Maneuver — If a vehicle or creature hits your moving vehicle with a physical attack (ram or melee), make a ram attack against the target as a reaction; on hit deal 1d8 additional damage. Drop The Hammer — As a bonus action, gain +5 bonus to speed until end of your turn. Defensive Driving — As a bonus action, gain +2 bonus to your vehicle\'s AC until the beginning of your next turn. Damage Avoidance — As a bonus action, halve all damage you take from making vehicle attacks until the beginning of your next turn. Hole Shot — As an action, ram against another vehicle or creature; on hit deal 2d8 additional damage and target has disadvantage on all ability checks and attack rolls until beginning of your next turn (1/long rest). Thread The Needle — Set a Dexterity (Vehicle Operation) check you made to a natural 20 (1/long rest; can select this stunt up to three times for additional uses).' },
      { level: 7, name: 'Inside and Out', desc: 'Select one specific vehicle (make, model, and year). With your chosen vehicle, you have advantage on control checks.' },
      { level: 11, name: 'Flat Out', desc: 'You gain +5 feet to the acceleration of any vehicle you control.' },
      { level: 15, name: 'Jagged Edge', desc: 'You gain a +2 bonus with attack rolls when using a vehicle.' },
      { level: 18, name: 'Racing Record', desc: 'When you inflict damage with your vehicle, roll twice for all damage rolls. Use the higher value for the damage you inflict, and the lower value to calculate how much damage you take.' }
    ]
  },
  'Field Machinist': {
    desc: 'You are a troubleshooter. Without you, the others don\'t amount to much more than a bunch of poorly equipped primitives with clubs. You improvise when needed, solving most mechanical problems when they arise. You are a walking, talking Swiss army knife.',
    synergy: 'Face, Medic, Techie',
    proficiencies: 'Intelligence (Engineering)',
    abilities: [
      { level: 3, name: 'Artisan of Gears', desc: 'You add half again your proficiency bonus to Intelligence (Engineering) checks. At 15th level, you instead double your proficiency bonus to Intelligence (Engineering) checks.' },
      { level: 7, name: 'Kit Mastery', desc: 'You treat all tool kits as one tech level higher. This increases to two levels at 15th level.' },
      { level: 11, name: 'Frantic Repair', desc: 'You can attempt to repair broken items as an action. Additionally, your progress in crafting any technology is doubled.' },
      { level: 15, name: 'Covered in Grease', desc: 'All technology you build costs 15% less (and thus takes 15% less time, round down).' },
      { level: 18, name: 'Pure Engineer', desc: 'You can set an Intelligence (Engineering) check you made to a natural 20 (1/long rest). Additionally, whenever you roll a natural 1 on an Intelligence (Engineering) check, re-roll until the result is anything except a natural 1.' }
    ]
  },
  'Field Medic': {
    desc: 'You specialize in the treatment of the injured during combat situations. You know when to keep your head low, but more importantly, when to rise in defiance to protect those under your care.',
    synergy: 'Marshal, Martial Artist, Medic, Techie',
    proficiencies: 'Wisdom (Medicine)',
    abilities: [
      { level: 3, name: 'A True Healer', desc: 'You gain a bonus to Wisdom (Medicine) checks equal to half your proficiency bonus. At 11th level, you instead double your proficiency bonus to Wisdom (Medicine) checks.' },
      { level: 7, name: 'Heal Thy Self', desc: 'As an action you can spend up to four hit dice to recover hit points, or one hit die as a bonus action.' },
      { level: 11, name: 'Race to the Fallen', desc: 'You can use the Disengage action as a bonus action if you move at least 10 feet directly towards an ally on that same turn.' },
      { level: 15, name: 'In the Presence', desc: 'Every ally within reach can take a bonus action to spend a Hit Die and recover hit points.' },
      { level: 18, name: 'No Longer Civilized', desc: 'If an ally in line of sight is reduced to 0 hit points, you have advantage on attack rolls until you hit; you also gain a bonus to damage with your next hit equal to your Wisdom score.' }
    ]
  },
  'Grandmaster': {
    desc: 'This path does not encourage violence. Instead, it is designed for self-control and mental clarity. These adventurers love to spar and often duel aggressively with allies to test their mettle. Even enemies matching their skills in a fair duel will garner respect.',
    synergy: 'Civilian, Grounder, Gunslinger, Martial Artist',
    proficiencies: 'All simple melee weapons',
    abilities: [
      { level: 3, name: 'Martial Art Discipline', desc: 'Select a specific martial art discipline. A discipline can be activated on your turn as a bonus action. Once activated, you gain the benefits of this discipline until the end of the encounter (or five minutes). Once you use a martial art discipline, you cannot use it again until you finish a long rest. At 7th, 11th, 15th, and 18th level, you can either select a new discipline or gain additional uses of one you already know. If you select the same discipline three times, you unlock an additional benefit. You can only have one discipline in effect at a time. DISCIPLINES: Capoeira — Disengage as bonus action; +5 speed; advantage on all DEX saves; (3rd pick: speed bonus +10). Drunken Boxing — Must be inebriated; temp HP = 2× level; crits don\'t double dice, instead gain 1 additional unarmed melee attack as part of same action (max 2/turn); each miss vs you +1 AC (max +3), at max AC bonus reverts to 0 and you gain unarmed melee attack as reaction vs triggering target; (3rd pick: 3 additional unarmed attacks on crit instead of 2). Eagle Claw — On hit can instead inflict half damage and grapple; at start of turn grappled enemy takes damage = primary attack mod; crit on creature → half your hit damage at start of its turn; (3rd pick: grappled enemy at start of turn takes damage = STR + DEX mod). Karate — Action to focus: advantage on unarmed attacks + triple crit dice until end of next turn; spend 30 ft movement for +1 AC until start of next turn; action for single kick attack 1d10+STR (+4 dmg per additional attack you would make); (3rd pick: kick 2d6 instead of 1d10, AC bonus +2). Iron Palm — +1 melee damage; crit unarmed → maximize one damage die; vs obstacles double damage dice; (3rd pick: maximize two dice on crit, triple all dice vs obstacles). Iron Shirt — Resistance to nonmagical slashing & bludgeoning; spend up to half level in HD as action to recover HP as short rest; if take damage ≥1/4 total HP outside your turn, advantage on attacks until end of next turn; (3rd pick: also resistance to nonmagical piercing). Long Fist — +1 melee damage; unarmed & light melee gain Reach; opportunity attack hit → disengage from all other creatures and move within 5 ft of that target; (3rd pick: reach 10 ft for opportunity attacks). Monkey Kung-Fu — Each unarmed hit +1 AC vs that creature (cumulative +3, lost if miss/don\'t attack/attack other); set aside 4 monkey points: (a) knock prone as reaction to miss on melee vs you, (b) auto-pass DEX save, (c) half damage from enemy attack as reaction, (d) double prof + advantage on next STR Athletics or DEX Acrobatics; (3rd pick: +3 monkey points). Muay Thai — Must select attack type: Punch 1d4 (two punches replace one normal attack, max 2/Attack); Elbow 1d8 (once per Attack action, roll damage twice take higher); Jump Kick 1d10 (must move ≥10 ft toward target); Roundhouse Kick 2d8 (−3 attack); Knee 1d6 (shove 5 ft, +2 dmg if hits obstacle); (3rd pick: if hit creature 3+ times in Attack action, target has disadvantage on its next attack vs you before end of its next turn). Praying Mantis — +1 AC (no shield); enemy misses melee vs you → reaction single melee attack (half damage, crit → target disadvantage on next melee vs you); advantage vs being moved against your will; (3rd pick: AC +2). Snake Style — Free at start of turn: +1 AC vs one creature you can see until start of next turn (no shield); roll 1 on damage die → additional melee attack vs same target (all dice must be 1 if multiple; 1/turn); while prone, creatures don\'t have advantage on you and you don\'t have disadvantage on them; (3rd pick: AC bonus +2). Tai Chi — Enemy melee miss vs you → difference between attack result and your AC becomes damage bonus on your next melee attack vs that target (max 5); must attack that target next turn or bonus lost; natural 1 on enemy melee vs you → knock prone + melee attack as reaction; (3rd pick: trigger on natural 1 or 2). Taekwondo — If not grappled/legs free, unarmed (kick) damage die steps up one (d4→d6→d8→d10→d12→2d6→2d8→2d10); move ≥20 ft toward creature + unarmed kick as Attack action → advantage (1/until start of next turn); once per activation, crit vs your size or smaller → max damage; (3rd pick: max damage on crit twice per activation). Tiger Claw — +5 speed; spend 20 ft movement to occupy same space as opponent (you no longer occupy space around them, allies can attack through you, target can\'t Disengage); unarmed hit → bonus action claw (slashing) damage = attack ability mod (not part of Attack action, not multiplied on crit, 1/until start of next turn); (3rd pick: speed bonus +10).' }
    ]
  },
    'Gun Dancer': {
    desc: 'You can examine a target in an eye blink and determine the perfect point to inflict the greatest harm. You rarely remain still in combat, continually moving from cover to cover, always with a vital enemy weakness firmly locked in your crosshairs.',
    synergy: 'Gunslinger, Infiltrator, Martial Artist, Techie',
    proficiencies: 'One-handed small arms',
    abilities: [
      { level: 3, name: 'Spastic Shot', desc: 'If you use your Attack action to make ranged attacks with one-handed small arms, before the end of your action, roll a d20. On a roll of 16, 17 or 18, you gain one extra ranged attack as part of the same action using a one-handed small arm, and on a roll of 19 or 20, you gain two extra ranged attacks.' },
      { level: 7, name: 'Faster Than Eyes Can See', desc: 'You can reload a single one-handed small arm taking no action. Once you use this feature, you cannot use it again until you take a short or long rest. You also gain a +2 bonus to initiative.' },
      { level: 11, name: 'Cowboy Kembo', desc: 'If you score a critical hit with a ranged attack gained from Spastic Shot, you gain one extra attack (max 4 extra attacks) with that action.' },
      { level: 15, name: 'Mayhem Sonata', desc: 'Your Spastic Shot range increases to 14–17 for one extra attack, and 18–20 for two extra attacks.' },
      { level: 18, name: 'Gun Waltz', desc: 'If you gain at least two additional attacks with Spastic Shot, you also gain a +1 bonus to AC and +5-foot bonus to your speed until the end of your next turn (not cumulative).' }
    ]
  },
  'Infantry Support Specialist': {
    desc: 'You are not placed on this world to lead. You support those that have earned your loyalty. You carry the largest weapons and know-how to employ them effectively without endangering the lives of your allies. Your only weakness is your speed.',
    synergy: 'Grounder, Heavy, Marshal, Techie',
    proficiencies: 'Simple melee weapons, all small arms, heavy weapons, and super heavy weapons',
    abilities: [
      { level: 3, name: 'Weapons Platform', desc: 'If you don\'t move on your turn, you can plant your feet to stabilize your position. You cannot use your speed to move until the beginning of your next turn. Until the beginning of your next turn, you gain a +1 bonus to attack rolls with auto or auto-heavy weapons. Saving throw DCs against your auto or auto-heavy weapon attacks also increase by 1.' },
      { level: 7, name: 'Focused Barrage', desc: 'If using an auto or auto-heavy weapon, at the end of your turn, you can make a single ranged attack against one target you have already hit that same turn as a bonus action.' },
      { level: 11, name: 'Lawnmower Barrage', desc: 'You can move 5 feet without incurring attack penalties with two-handed small arms and heavy weapons (but not super heavy weapons). You can also plant a super heavy weapon as a bonus action.' },
      { level: 15, name: 'The Mean One', desc: 'All opponents within 20 feet of you suffer disadvantage on any attack that doesn\'t include you, and you gain a +3 bonus to damage rolls with ranged weapons against them.' },
      { level: 18, name: 'Let\'s Rock', desc: 'You can use an action to make a single ranged attack against each enemy in range you can see. Once you use this feature, you cannot use it again until you finish a short or long rest. If no targets are hit by this action, you regain the use of this feature.' }
    ]
  },
  'Machine of War': {
    desc: 'Some accuse you of being a warmonger. This may be true, but the fact is that there will always be a war somewhere. Most heroes are insane anyway. At least you\'re aware of how close you are to losing it. It\'s a great time to be alive.',
    synergy: 'Grounder, Gunslinger, Martial Artist',
    proficiencies: 'None',
    abilities: [
      { level: 3, name: 'Adrenaline Rush', desc: 'Each time you make an attack against a creature within 30 feet of you, you recover 1 hit point of damage. For every 10 hit points recovered this way, you gain one additional attack with your next Attack action (max 1 additional attack). This value is reduced to zero if you don\'t make an attack within 1 minute.' },
      { level: 7, name: 'Glazed Look', desc: 'If you are reduced to 0 hit points by a non-critical hit, you can spend a Hit Die as a reaction, but only regain half the hit points (rounded up). This prevents you from falling prone.' },
      { level: 11, name: 'You Want Some Of This', desc: 'For free on your turn, you can allow enemies to have advantage against you until the beginning of your next turn. If you do, until the beginning of your next turn, you have advantage on attack rolls and regain 2 hit points instead of 1 with Adrenaline Rush.' },
      { level: 15, name: 'Risky Maneuver', desc: 'If you are reduced to 15 hit points or less, double your proficiency bonus on attack rolls until the end of your next turn. After using this ability, you cannot use it again until you finish a short or long rest.' },
      { level: 18, name: 'Ultimate Badass', desc: 'When your hit points are reduced to half your total hit point value or less, you gain a +2 bonus to damage rolls. When your hit points are reduced to one-quarter your total hit value or less, this bonus increases to +3. These effects end the next time you roll for initiative or finish a short or long rest.' }
    ]
  },
  // Add/Update these entries within your ARCHETYPE_DATA object in database.js

    "Man-at-Arms": {
        desc: "You are a specialist in a specific firearm, treating it not as a tool, but as an extension of your own body.",
        synergy: "This archetype works best with the Brave, Face, or Tough classes.",
        proficiencies: "None.",
        abilities: [
            { level: 3, name: "This Is My Rifle", desc: "Select one specific firearm. You gain a +1 bonus to attack rolls with it. You do not suffer disadvantage when firing this weapon while prone. You can change your chosen weapon whenever you gain a level." },
            { level: 7, name: "My Weapon is My Best Friend", desc: "You can change a clip, magazine, or cell on your chosen weapon without taking an action. Once you use this feature, you cannot use it again until you finish a short or long rest." },
            { level: 11, name: "Fire My Weapon True", desc: "Once per turn, if you have advantage on your ranged attack with your chosen weapon and both rolls hit, you are considered to have hit twice (using additional ammunition accordingly)." },
            { level: 15, name: "We Are Masters of Our Enemy", desc: "Once per turn, if you drop a creature to 0 hit points using a firearm, you can make a single ranged attack as part of the same action." },
            { level: 18, name: "Inseparable Appendage", desc: "Your chosen weapon becomes an arm. You can re-roll one natural 1 on an attack roll with that weapon (1/short or long rest). You cannot be disarmed of it, it cannot be targeted/destroyed, and you can stow it/draw a one-handed small arm without an action." }
        ]
    },

    "Mecha Pilot": {
        desc: "You don't just operate a machine; you become it. You listen to the whisper of the engine and the feedback of the sensors until the metal is your skin.",
        synergy: "This archetype works best with any class, as it depends on the presence of mecha in the setting.",
        proficiencies: "You have proficiency with all mecha.",
        abilities: [
            { level: 3, name: "Naturally Adept", desc: "When calculating your Control Ability (average of your pilot ability score and mecha's physical score), your own score counts as 2 higher. (Example: 18 INT counts as 20)." },
            { level: 7, name: "Changing the Laws / Adept +3", desc: "While in a mecha, you can use your Reaction to add your Proficiency bonus to your mecha's AC against one attack. Your 'Naturally Adept' score bonus increases to +3." },
            { level: 11, name: "Hearing the Whisper / Adept +4", desc: "You gain advantage on initiative rolls while in a mecha. You cannot be surprised while piloted. Your 'Naturally Adept' score bonus increases to +4." },
            { level: 15, name: "Instinctual Reactions / Adept +5", desc: "When you use your action to take the Multiattack action with a mecha, you can make one additional attack. Your 'Naturally Adept' score bonus increases to +5." },
            { level: 18, name: "One in the Same / Adept +6", desc: "While in a mecha, you gain resistance to all damage types. If the mecha is destroyed, you are ejected safely to an adjacent square. Your 'Naturally Adept' score bonus increases to +6." }
        ]
    },
  'Militarist': {
    desc: 'You graduated from a command school or officer college. You emerged as a trained, disciplined leader, ready to rally the uncontrolled masses. You are not some desk jockey trained from books. You possess natural, applicable talents, earning the respect that goes along with them.',
    synergy: 'Grounder, Marshal, Medic, Sniper',
    proficiencies: 'None listed',
    abilities: [
      { level: 3, name: 'Coordination', desc: 'You receive Tactical Points (TPs) each time something unfortunate happens to you or an ally. Points are lost when you take a short rest or long rest or when you roll for initiative. Spending points usually takes either a bonus action or a reaction. You receive 1 point when each of the following occurs: (1) An ally you can see or communicate with rolls a natural 1 on an attack roll. (2) An ally suffers a critical hit. (3) An ally is reduced past half hit points. (4) An ally is reduced to zero hit points. (5) Two or more allies suffer damage from an area effect. SPEND TPs: Elevate Strategy (3+ pts) — Bonus action, select one ally per 3 points spent; targeted ally can take two actions and two bonus actions on their next turn. Eyes Around (2–6 pts) — Bonus action, select one ally per 2 points spent (max 3 allies); targeted ally makes a single attack. Intelligent Defense (1 pt) — One ally gains a +3 bonus to AC until the beginning of your next turn. If you move before then, the bonus is lost. Opportune Weakness (2 pts) — As a reaction, one ally\'s hit becomes a critical hit. Outmaneuver (1 pt) — Spend 1 point and 30 feet of movement to move a creature within 30 feet of you that is your size or smaller up to 5 feet (cannot be moved into hazardous terrain). The target suffers disadvantage on attack rolls until the beginning of your next turn. Shift Battle Theater (1–3 pts) — Bonus action, select one ally per 1 point spent (max 3 allies); the targeted ally can either make a Disengage action for free or can move immediately up to 20 feet. Reverse Course of Action (10 pts) — As an action, all enemies you can see are stunned until the beginning of your next turn. This can only occur once every 24 hours.' },
      { level: 7, name: 'Reevaluate Strategy', desc: 'You can spend your Hit Dice as a bonus action (recovering no hit points) to gain 1d4 TP per spent die.' },
      { level: 11, name: 'Tide of War', desc: 'You gain 1d4 TP each time you meet a Coordination condition instead of 1.' },
      { level: 15, name: 'Battle Instinct', desc: 'If enemies gain a surprise action, you gain 5 TP. If a creature hits you, you gain 1 TP.' },
      { level: 18, name: 'Battle Leader', desc: 'If you are reduced to 0 hit points, you gain 10 TP and can use as many Coordination abilities as you want and can afford as a reaction (even ones which are usually bonus actions). You fall unconscious as normal as soon as all these effects are resolved.' }
    ]
  },
  // Add these to the ARCHETYPE_DATA object in database.js

    "Pathfinder": {
        desc: "You move in darkness behind enemy lines, sneaking through shadows or strolling in broad daylight to reach your destination without evidence.",
        synergy: "This archetype works best with the Face, Infiltrator, Martial Artist, and Sniper classes.",
        proficiencies: "Proficiency in Dexterity (Stealth).",
        abilities: [
            { level: 3, name: "Dust", desc: "Gain a dust pool of 20 feet. If no opponents see you, you can use your dust pool to 'teleport' to an area out of sight. This replaces your normal movement. Every 10 feet you do not move on your turn refills the pool by 5 feet." },
            { level: 7, name: "Back of Your Head / Dust (25ft)", desc: "If you roll 5 or less on any Dexterity (Stealth) check, you can re-roll. Your dust pool increases to 25 feet." },
            { level: 11, name: "Like a Hawk / Dust (30ft)", desc: "If you use at least 10 feet from your dust pool on your turn, you gain 10 feet of additional walking speed that turn. Your dust pool increases to 30 feet." },
            { level: 15, name: "Under Any Shadow / Dust (35ft)", desc: "If you have cover at the beginning of your turn, you retain the benefit of cover until the beginning of your next turn, regardless of where you move. Your dust pool increases to 35 feet." },
            { level: 18, name: "Complete Covertness / Dust (40ft)", desc: "If you use 20 feet from your dust pool, you gain 20 feet of walking speed (replaces Like a Hawk). Your dust pool increases to 40 feet." }
        ]
    },

    "Pistolero": {
        desc: "You prefer close-quarters gunplay, placing perfect shots at point-blank range while maximizing your own defense.",
        synergy: "This archetype works best with the Gunslinger, Medic, and Techie classes.",
        proficiencies: "Proficiency with all one-handed small arms.",
        abilities: [
            { level: 3, name: "Point Shot", desc: "As an action, make a single ranged attack with a non-auto one-handed small arm against a creature 20ft or closer. Inflict an additional 1d6 damage." },
            { level: 7, name: "Weaver Stance / Point Shot (2d6)", desc: "If wielding one small arm with two hands, suffer -20ft speed but increase Point Shot damage by 1 step. Gain a bonus to Point Shot attack rolls equal to half the damage steps (e.g., 4d6 = +2). Point Shot increases to 2d6." },
            { level: 11, name: "Kill Shot / Point Shot (3d6)", desc: "If Point Shot reduces a creature to HP less than your level, use 1 extra ammo to kill the target as a bonus action. Point Shot increases to 3d6." },
            { level: 15, name: "Kinetic Shot / Point Shot (4d6)", desc: "If you act before an enemy in initiative, increase Point Shot damage against them by two steps until they act. Point Shot increases to 4d6." },
            { level: 18, name: "Only Need One / Point Shot (5d6)", desc: "If you score a critical hit with Point Shot, increase your damage by two steps. Point Shot increases to 5d6." }
        ]
    },

    "Recon Intelligence": {
        desc: "You become one with the terrain, waiting for the perfect moment where no wind or gravity can stop your single, lethal shot.",
        synergy: "This archetype works best with the Face, Medic, Techie, and Sniper classes.",
        proficiencies: "Light armor, ghillie/yowie suits, sniper weapons, and Dexterity (Stealth).",
        abilities: [
            { level: 3, name: "Flawless Reputation", desc: "When making Stealth vs Perception, roll 1d10 and set it aside (your reputation die). Use it to replace any attack or Stealth roll later. You can only have one die at a time; lost on long rest." },
            { level: 7, name: "Yowie Specialization", desc: "If wearing a ghillie/yowie suit in its proper environment, use an action to become invisible until you move or attack." },
            { level: 11, name: "Brilliant Shadow", desc: "Roll all acquired reputation dice twice and set aside the higher value." },
            { level: 15, name: "Psychological Warfare", desc: "If you drop a creature 25ft or further away to 0 HP, gain one additional reputation die." },
            { level: 18, name: "Specter", desc: "You can have two reputation dice at once (three if one was acquired from Psychological Warfare)." }
        ]
    },

    "Ring Fighter": {
        desc: "A master of the physical realm, you have fought hard for respect and the belt. Few boast the record you have.",
        synergy: "This archetype works best with the Grounder, Gunslinger, Marshal, and Martial Artist classes.",
        proficiencies: "Proficiency with simple melee weapons.",
        abilities: [
            { level: 3, name: "Grapple Discipline", desc: "You have advantage on all rolls related to grappling." },
            { level: 7, name: "Guard Control", desc: "While grappling a creature, you gain a +1 bonus to AC." },
            { level: 11, name: "Tolerance Threshold", desc: "If grappling a creature, you have resistance to any piercing, bludgeoning, or slashing damage from nonmagical weapons from that target." },
            { level: 15, name: "Choke / Lock", desc: "Each turn you sustain a grapple, you inflict damage equal to your Str or Dex modifier. This does not count as an action." },
            { level: 18, name: "Mounted Attack", desc: "While grappling a creature, it suffers disadvantage on escape attempts." }
        ]
    },

    "Sapper": {
        desc: "Combat engineers approach bombs while others run. You can be a bridge builder and a bridge destroyer.",
        synergy: "This archetype works best with the Civilian, Marshal, Medic, and Techie classes.",
        proficiencies: "Proficiency with Intelligence (Demolitions).",
        abilities: [
            { level: 3, name: "The Long Walk", desc: "Advantage on Intelligence (Demolitions) checks. When a target takes damage from an 'exp' property weapon you threw/set, add your level to the damage." },
            { level: 7, name: "Render Safe Procedures", desc: "If forced to make a Dex save vs an explosion, move 5ft as a reaction before rolling (possibly escaping the area)." },
            { level: 11, name: "Slight Chemical Improvement", desc: "Explosions (10ft+ blast radius) from your thrown/set explosives increase their radius by 5ft." },
            { level: 15, name: "Proper Application", desc: "When determining Save DC for your explosives, double your Int modifier. If a target fails the save, increase the number of damage dice by two." },
            { level: 18, name: "Scorched Earth", desc: "After detonating an explosive, a lingering fire deals Int modifier + level damage to any targets entering/starting their turn in the area for 1 minute." }
        ]
    },

    "Selfless Protector": {
        desc: "From the traditions of respected security forces, you possess a natural instinct to protect your assigned ward.",
        synergy: "This archetype works best with the Face, Grounder, Heavy, and Martial Artist classes.",
        proficiencies: "None.",
        abilities: [
            { level: 3, name: "Take A Bullet", desc: "Select one creature within reach as your focus. If they are hit or fail a Dex save, you can use your AC or take the damage/effects instead. Focus is lost if you move or take a short rest." },
            { level: 7, name: "Licensed Response", desc: "If your focus is hit, you can make an attack against the attacker as a reaction. If the focus suffered damage, you have advantage on this attack." },
            { level: 11, name: "Job Well Done", desc: "Gain +1 AC while protecting your focus. If you take a short rest after a period where the focus suffered no damage, you regain double your Hit Dice." },
            { level: 15, name: "Evasive Techniques", desc: "If your focus is within reach and caught in an area effect, as a reaction, throw your focus up to 15ft away before the effect activates." },
            { level: 18, name: "Keep It Together", desc: "Each time you regain hit points, you can give your focus any amount of those hit points instead." }
        ]
    },

    "Skirmisher": {
        desc: "You disrupt enemy lines by surgically removing officers and threats, causing disarray and fear.",
        synergy: "This archetype works best with the Grounder, Gunslinger, Infiltrator, and Sniper classes.",
        proficiencies: "Proficiency with all sniper weapons.",
        abilities: [
            { level: 3, name: "Automatic Reflexes", desc: "After hitting a creature 25ft+ away, make an extra ranged attack against a different target in range as part of the same action. (1/short rest)." },
            { level: 7, name: "Waste of Skill / Reflexes (2)", desc: "On a crit, you may choose normal damage to make a single ranged attack against any target in range. Reflexes uses increase at 7, 11, 15, 18." },
            { level: 11, name: "The Second Shooter / Reflexes (3)", desc: "After a ranged attack vs a creature 50ft+ away, move up to half speed without it counting as movement." },
            { level: 15, name: "Splintering Shrapnel / Reflexes (4)", desc: "If you drop a creature 25ft+ away to 0 HP, each creature within 5ft takes damage equal to your attack ability modifier." },
            { level: 18, name: "Perfect Shot Placement / Reflexes (5)", desc: "If you drop a creature 50ft+ away to 0 HP, you can make another single ranged attack as part of the same action (1/turn)." }
        ]
    },

    "Suave": {
        desc: "Debonair and charming, you talk, walk, and sway your way into areas keys never could.",
        synergy: "This archetype works best with the Civilian, Face, Marshal, Martial Artist, and Medic classes.",
        proficiencies: "Proficiency in Deception, Insight, Perception, and Persuasion.",
        abilities: [
            { level: 3, name: "It's the Clothes", desc: "Double proficiency bonus for Charisma (Deception) and (Persuasion) checks. Gain +1 bonus to attack rolls." },
            { level: 7, name: "Shaken, Not Stirred", desc: "While wearing no armor, you have advantage on all saving throws." },
            { level: 11, name: "Spilled Drink", desc: "If you fail any skill or tool check, you have advantage on attack rolls until the end of your next turn." },
            { level: 15, name: "Surreptitious Walk", desc: "Spend an action to gain advantage on your next Wis/Cha skill check. Useable twice per long rest (if the check fails, the use is not spent)." },
            { level: 18, name: "Mesmer Stare", desc: "Triple proficiency bonus to your next Charisma skill check. Useable once per long rest (if the check fails, the use is not spent)." }
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

// ============================================================
// MAGIC SYSTEM DATA (Ultramodern5 - Chapter Nine: Magic)
// ============================================================

const MAGIC_RULES = {
  exhaustionLevels: [
    { level: 1, effect: "Disadvantage on ability checks (affects Vigor)." },
    { level: 2, effect: "Speed and max vessel halved." },
    { level: 3, effect: "Disadvantage on attack rolls and saving throws." },
    { level: 4, effect: "Hit point maximum halved, and VR reduced to 0." },
    { level: 5, effect: "Speed and vessel reduced to 0." },
    { level: 6, effect: "Death." }
  ],
  darkSequence: "Spell acquisition follows the Dark Sequence: a chain of linked spells from basic cantrips (root spells) to larger epic spells. You must acquire a spell in each tier of a path (including root) to gain a higher-tier spell. There are no character level requirements.",
  pathRules: "To pursue a path, spend the Path Cost (always 2 Assets) plus the asset cost of at least one root spell. You then gain the Path Benefit. Your first root spell is more expensive than some later spells.",
  synergyRules: "Each path has a related focus (Synergy Path). If you purchase the path cost of this related path, when you acquire a spell from a higher tier you gain one spell from the lowest tier you have access to from the related path for free (or a root, if it's the lowest). Note: a GM may make a path available without its synergy path.",
  rootRules: "A character must purchase at least one root spell to acquire additional spells along that same path.",
  ritualRules: "Rituals (marked *) take longer to cast and cannot be placed in your river, but cost no dark from your vessel. They carry their own sacrifice (exhaustion, lost hit dice/points, or other conditions). Hit point spending incurs psychic damage that cannot be resisted.",
  concentrationRules: "Only one concentration spell at a time. Concentration doesn't consume dark beyond initial cast. You cannot recover vessel with any action on your turn while concentrating, but items can still restore vessel."
};

// Collective spells available to any spellcaster
const COLLECTIVE_SPELLS = [
  { 
    name: 'Dispel', 
    ap: 2, 
    cc: 3, 
    time: "1 minute", 
    range: "60 ft.", 
    duration: "Inst.", 
    comp: "", 
    ritual: false,
    desc: "Choose one creature or object or magical effect within range affected by or casting a spell. Make a Vigor check. The DC equals 10 + (the spell's tier x 2). Root spells = tier 0. On a successful check, the spell ends.<br><br><b>Note:</b> If you place this spell in your river, its spell cost can be reduced to a reaction if the target is within 60 feet."
  },
  { 
    name: 'Parlor Tricks', 
    ap: 1, 
    cc: null, 
    time: "1 action", 
    range: "30 ft.", 
    duration: "Conc. up to 1 hour", 
    comp: "V, S", 
    ritual: true,
    desc: "These are minor magical effects like booming your voice, causing lights to change color or flicker, or generating slight tremors in the ground. Mild telekinesis is available up to 1 pound. You can alter your appearance in minor ways without actually disguising yourself. You can reduce or increase brightness without making it dark or blinding anyone. You can concentrate on multiple instances of this spell at once."
  }
];

// Full Paths list
const MAGIC_PATHS = {
    air: {
    name: "Path of Air",
    cost: 2,
    synergy: "movement",
    benefit: "When falling, you always land on your feet, and you reduce 20 feet from every fall.",
    traits: "Air spells all involve hand movements, often the exhaling of air from your own lungs. Very seldom are actual words spoken in your casting.",
    spells: [
      { tier: 0, name: "Wave", ap: 2, cc: 2, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "S", ritual: false, desc: "Make a ranged spell attack; on a hit, the target is pushed 10 feet. For every 1 additional dark spent before casting, increase the push distance by 5 feet (max +20 feet).<br><br><b>Boost (DC 15).</b> Reduce the cost of this spell to an action." },
      { tier: 0, name: "Jump", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "1 minute", comp: "V, S, M", ritual: false, desc: "Target one creature; the target's jump distance is tripled until the spell ends. For every 1 additional dark spent before casting, increase the number of targets by 1 (max +4)." },
      { tier: 1, name: "Feather Fall", ap: 4, cc: 4, time: "1 bonus", range: "60 ft.", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: false, desc: "Up to five falling creatures within range reduce their fall speed to 60 feet/round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature. For every 1 additional dark spent before casting, target one additional creature (max +4).<br><br><b>Boost (DC 20).</b> Double the number of targets." },
      { tier: 1, name: "Levitate", ap: 4, cc: 4, time: "1 minute", range: "60 ft.", duration: "Conc. up to 1 hour", comp: "V, S", ritual: false, desc: "One creature or an object up to 500 pounds that you can see within range rises vertically and/or horizontally, up to 20 feet, and remains suspended there for the duration. An unwilling creature that succeeds on a Constitution or Vigor saving throw is unaffected. You can change the target's direction up to 20 feet on your turn (either movement if cast on yourself, or an action if on another target). When the spell ends, the target floats gently to the ground if it is still aloft. For every 1 additional dark spent before casting, increase the target's weight by 100 lb.<br><br><b>Boost (DC 15).</b> Double the target's weight.<br><b>Boost (DC 20).</b> Quadruple the target's weight." },
      { tier: 2, name: "God's Breath", ap: 6, cc: 6, time: "1 minute", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false, desc: "Create a line 20 feet in each direction from you; all creatures within 20 feet of that line and in front of you must succeed on a Strength saving throw or be pushed 20 feet away from you and knocked prone. The wind disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. Any creature in the area must spend 2 feet of movement for every 1 foot it moves when moving closer to you. As part of your move, you can change the orientation of the wall, and if you move, the wall moves with you. For every 1 additional dark spent before casting, increase the line on each side by 5 feet (max +20 feet).<br><br><b>Boost (DC 20).</b> Area of effect increases to 30 feet." },
      { tier: 2, name: "Storm Wall", ap: 6, cc: 6, time: "1 minute", range: "120 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false, desc: "You create a solid wall of swirling translucent air up to 60 feet long, 20 feet high, and 5 feet thick with its furthest point no further than 120 ft. You can bend this wall in any configuration, even enclosed shapes like cubes, cylinders, or domes. Each creature within its area or entering its area must make a Strength saving throw. A creature takes 4d8 + Vigor modifier bludgeoning damage on a failed save, or half as much damage on a successful one. Any creature passing into the wall after it is cast fails automatically. Small or smaller flying creatures or objects can't pass through the wall. All ordinary projectiles, including rounds from one- and two-handed small arms launched at targets behind the wall automatically miss. Larger weapons are unaffected. For every additional 1 dark spent before casting, increase the length of the wall by 10 feet.<br><br><b>Boost (DC 15).</b> When the duration expires, make a Vigor (Induce) check to extend the effect for another minute. The DC increases by 1 each time it is attempted." },
      { tier: 2, name: "Fly", ap: 6, cc: 6, time: "1 action", range: "Touch", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: false, desc: "One target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall. For every additional 2 dark spent before casting, target 1 additional creature.<br><br><b>Boost (DC 15).</b> While in effect, make a Vigor (Induce) check to increase speed to 80 feet until the end of your next turn." },
      { tier: 3, name: "Freedom", ap: 8, cc: 8, time: "1 minute", range: "Touch", duration: "Conc. up to 1 hour", comp: "V, S, M", ritual: false, desc: "One willing creature is unaffected by difficult terrain and spells and other magical effects that can either reduce the target's speed or cause the target to be paralyzed or restrained. The target can also spend 5 feet of movement to automatically escape from nonmagical restraints. Being underwater imposes no penalties on the target's movement or attacks. The target can stand up for free on its turn and gains a swim, crawl, and climb speed equal to its normal speed. The target suffers no adverse effects from squeezing. For every additional 2 dark spent before casting, target 1 additional creature." },
      { tier: 3, name: "Wind Road", ap: 8, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 8 hours", comp: "V, S, M", ritual: true, desc: "You create a platform of air 60 feet in radius centered on you. It feels like solid ground, allowing a group to traverse across like a bridge. All ground movement on the platform is doubled, though any target moving beyond 60 feet of you falls. As you move, the platform moves you, giving the illusion the wind road is dozens if not hundreds of miles across.<br><br><b>Sacrifice.</b> 2 hit dice, +1 for every additional 10 feet (max +40 feet)." },
      { tier: 4, name: "Weather Master", ap: 10, cc: 11, time: "1 minute", range: "Self", duration: "Conc. up to 8 hours", comp: "V, S", ritual: false, desc: "You control the weather within 5 miles of you for the duration. You must be outdoors or see the outdoors to cast this spell. If you cannot see the sky, the spell ends early. When the spell ends, the weather gradually returns to normal. You can dissipate a tornado or create torrential rain. You can adjust the temperature from blistering heat to below freezing. You can increase the wind to near gale force. You can blacken the sky or clear away the clouds. You can recreate any natural temperature that can occur on the planet. For every additional 3 dark spent before casting, increase the range by 1 mile (max +6 miles).<br><br><b>Boost (DC 20).</b> Double the area of effect." }
    ]
  },
    attraction: {
    name: "Path of Attraction",
    cost: 2,
    synergy: "knowledge",
    benefit: "You gain proficiency in one Charisma skill of your choice.",
    traits: "Attraction spells are about alluring subjects using magic, thus making it necessary to make your spells not look like magic. You conceal the spells in your words and graceful nonchalant hand movements. As the effects are often subtle, it can sometimes be difficult to notice you casting a spell at all.",
    spells: [
      // ROOT
      { tier: 0, name: "Command", ap: 2, cc: 4, time: "1 action", range: "30 ft.", duration: "1 round", comp: "V", ritual: false, desc: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom or Vigor saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it. A target that succeeds at the save is immune to it for 8 hours. For every additional 1 dark spent before casting, you can increase the range by 10 feet." },

      // TIER 1
      { tier: 1, name: "Charm", ap: 4, cc: 4, time: "1 minute", range: "30 ft.", duration: "1 hour", comp: "V", ritual: false, desc: "The target must make a Wisdom or Vigor saving throw, with advantage if you or your companions are fighting it. If it fails, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. Once a creature succeeds at this save, it is immune to the spell for 8 hours. For every additional 2 dark spent before casting, you can include one additional target (max +3 targets) in range." },
      { tier: 1, name: "Sleep", ap: 4, cc: 5, time: "1 minute", range: "60 ft.", duration: "10 minutes", comp: "V, S, M", ritual: false, desc: "You can target a number of creatures in range with 30 total hit points. Each creature affected falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action wake the sleeper. Subtract each creature's hit points from the total before moving on to the creature. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell. For every additional 1 dark spent before casting, you can increase the amount of hit points by 5.<br><br><b>Boost (DC 20).</b> If a creature cannot be included entirely with your remaining hit point allotment, you can attempt this check to include it. Unlike regular targets, this one gets a Wisdom or Vigor saving throw." },

      // TIER 2
      { tier: 2, name: "Captivation", ap: 6, cc: 6, time: "1 minute", range: "30 ft.", duration: "Conc. up to 5 minutes", comp: "V", ritual: false, desc: "All creatures in range that can see and hear you must make a Wisdom or Vigor saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. Creatures with fewer hit points than your maximum automatically fail at this save. On a failed save, the target has disadvantage on ability checks, attack rolls, and saving throws. Its speed is halved and must always use its movement to move closer to you. This lasts until the spell ends, the target can no longer hear you, or the target suffers damage. The spell ends if you are incapacitated or can no longer speak. For every additional 1 dark spent before casting, you can increase the range by 10 feet (max +60 feet)." },
      { tier: 2, name: "Suggestion", ap: 6, cc: 6, time: "1 minute", range: "30 ft.", duration: "1 minute", comp: "V", ritual: false, desc: "You suggest a course of activity and influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune. The suggestion can be anything that does not cause obvious physical harm to itself or others. The target must make a Wisdom or Vigor saving throw. On a failed save, it pursues the course of action you described to the best of its ability. You can only make one suggestion per spell, and if the spell expires before the target can complete the task, the spell expires. For every additional 2 dark spent before casting, you can include one additional target (max +3 targets).<br><br><b>Boost (DC 15).</b> Double the range of this spell." },
      { tier: 2, name: "Terror", ap: 6, cc: 7, time: "1 minute", range: "Self", duration: "Conc. up to 1 minute", comp: "V", ritual: false, desc: "Each creature in a 20-foot radius must succeed on a Wisdom or Vigor saving throw or drop whatever it is holding and become frightened for the duration. While frightened, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature. For every additional 1 dark spent before casting, you can increase the range by 5 feet (max +30 feet)." },

      // TIER 3
      { tier: 3, name: "Compulsion", ap: 8, cc: 9, time: "1 minute", range: "30 ft.", duration: "1 minute", comp: "V", ritual: false, desc: "This functions identically to suggestion, except you can now give it a violent action, like inflicting harm on itself or others. It still must be a single command. For every additional 2 dark spent before casting, you can include one additional target (max +3 targets)." },
      { tier: 3, name: "Dominate", ap: 8, cc: 9, time: "1 minute", range: "30 ft.", duration: "Conc. up to 1 hour", comp: "V", ritual: false, desc: "You attempt to beguile a creature with hit points equal or less than you (your maximum) that you can see within range. It must succeed on a Wisdom or Vigor saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. You two possess a telepathic link while the target is charmed that you can use to issue commands to while you are conscious (no action required), which it does its best to obey. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. For every additional 1 dark spent before casting, increase the hit points of the creature you want to dominate by 10 (+50 max).<br><br><b>Boost (DC 25).</b> Double the number of hit points of the creature you want to dominate." },

      // TIER 4
      { tier: 4, name: "Memory Writer", ap: 10, cc: 10, time: "1 minute", range: "30 ft.", duration: "Conc. up to 1 hour", comp: "V, S", ritual: false, desc: "One creature that you can see within range must make a Wisdom or Vigor saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage, this spell ends prematurely. While this charm lasts, you can alter the target's memory of an event within the last 24 hours that lasted no more than 10 minutes. This includes permanently eliminating that memory. The creature must be able to understand you. If a modified memory is too nonsensical to affect a creature in a meaningful manner (GM's decision), it is disregarded as a dream. For every additional 2 dark spent before casting, you can go back further and modify more (2—7 days, 1 hour; 4—30 days, 1 day; 6—1 year, 1 week; 8—lifetime, 1 year)." },
      { tier: 4, name: "Mob Rule", ap: 10, cc: 12, time: "1 minute", range: "30 ft.", duration: "5 minutes", comp: "V, S", ritual: false, desc: "This operates the same as suggestion, except that it affects all creatures you wish within range. It still must be a single action. For every additional 2 dark spent before casting, you can extend the range by 10 feet (max +60 ft).<br><br><b>Boost (DC 25).</b> When you give the command, you can provide a violent action, per dominate." }
    ]
  },
  
    creation: {
    name: "Path of Creation",
    cost: 2,
    synergy: "technology",
    benefit: "You gain a +2 bonus to your vessel.",
    traits: "With creation spells, hand movements are modest and don't account more than a hand passing over a subject. A few words spoken may be confused as an unrecognized prayer.",
    spells: [
      { tier: 0, name: "Mending", ap: 2, cc: null, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S", ritual: true, desc: "This spell makes necessary repairs on objects, and each minute in use further aids in the mending. The spell leaves no trace of damage. This spell can physically repair a magic item or construct but can't restore magic to such an object. Each minute will also recover 1d4 hit points to an object without requiring widgets or a skill check.<br><br><b>Sacrifice.</b> Spend 1 hit point." },
      { tier: 0, name: "Purify", ap: 2, cc: null, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "V, S", ritual: true, desc: "All food and drink within range is purified and rendered free of poison and disease.<br><br><b>Sacrifice.</b> Spend 1 hit point." },
      { tier: 1, name: "Chef", ap: 4, cc: null, time: "1 minute", range: "20 ft.", duration: "Inst.", comp: "V, S", ritual: true, desc: "You create appetizing food and clean water for five people in range. The meals takes an hour to enjoy and to have any effect. The food vanishes if not eaten after an hour, though the water remains.<br><br><b>Sacrifice.</b> Spend 2 hit points." },
      { tier: 1, name: "Create Elemental", ap: 4, cc: 6, time: "1 minute", range: "90 ft.", duration: "10 minutes", comp: "V, S, M", ritual: false, desc: "You gather natural elements and inject them with a modicum of intelligence. You create an elemental of challenge rating 2 or lower. An elemental created by this spell disappears when it drops to 0 hit points or when the spell ends. The elemental is friendly to you and your companions. It obeys verbal commands that you issue (no action required by you). For every 3 additional dark spent before casting, increase the challenge rating of the created elemental by 1 (Max CR 5).<br><br><b>Boost (DC 15).</b> Double the range you can create the elemental." },
      { tier: 2, name: "Fabricate", ap: 6, cc: null, time: "10 minutes", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: true, desc: "You convert raw materials into products of the same material. You can gather what you can see within range to fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create complicated items like technology.<br><br><b>Sacrifice.</b> Spend 2 hit dice." },
      { tier: 3, name: "Bag of Anything", ap: 8, cc: null, time: "1 minute", range: "Touch", duration: "5 minutes", comp: "V, S", ritual: true, desc: "You have constructed a backpack or satchel from which you can remove nearly anything you need. The object is created as you remove it from the bag. The object cannot be chemical or mechanical (no firearms or explosives), but rather standard gear. Only one item can be removed per use of the spell, and the object lasts 5 minutes before disintegrating.<br><br><b>Sacrifice.</b> Spend 2 hit dice." },
      { tier: 4, name: "Create Beast", ap: 10, cc: 12, time: "1 minute", range: "Touch", duration: "Conc. up to 5 minutes", comp: "V, S, M", ritual: false, desc: "You create any beast with a challenge rating 4 or lower, which appears in an unoccupied space next to you. The beast disappears when it drops to 0 hit points or when the spell ends. The beast is friendly to you and your companions for the duration. Roll initiative for the beast, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands, it defends itself from hostile creatures but otherwise takes no actions. A beast is defined as any creature native to this setting or a \"Giant\" version of one. This beast is not real, only an imitation, and it vanishes after the spell expires. For every 3 additional dark spent before casting, increase the challenge rating of the created beast by 1 (Max CR = your level).<br><br><b>Boost (DC 25).</b> The maximum CR increases by 2 (you must still spend dark)." }
    ]
  },

    death: {
    name: "Path of Death",
    cost: 2,
    synergy: "decay",
    benefit: "When you recover hit points through spells, you can recover vessel instead at a rate of 1 dark:5 HP. This occurs for free.",
    traits: "Death spells involve dark incantations, and when materials are required, it is often always blood or ash…or both blood and ash, often used to construct a magic circle. It's not a subtle method of magic. Blood should be fresh, often with a recent animal sacrifice (in the past 5 minutes).",
    spells: [
      { tier: 0, name: "Drain Touch", ap: 2, cc: 3, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false, desc: "Make a melee spell attack against a creature, inflicting 1d6 + Vigor modifier necrotic damage, and you regain 1 hit point. For every 2 additional dark spent before casting, increase dice by 1 and recovery by 1 (max +3 each).<br><br><b>Boost (DC 15).</b> Reduce the cost of this spell to an action." },
      { tier: 0, name: "Dead Life", ap: 2, cc: 5, time: "1 minute", range: "Self", duration: "5 minutes", comp: "S", ritual: false, desc: "You gain your Vigor modifier in temporary hit points, which are lost after the spell expires. For every 1 additional dark spent before casting, increase gain 1 additional temporary hit point (Max +10)." },
      { tier: 1, name: "Death Curse", ap: 4, cc: 4, time: "1 minute", range: "Touch", duration: "Conc. up to 1 hour", comp: "S, M", ritual: false, desc: "Make a melee spell attack against a creature; on a hit, the creature suffers disadvantage on all ability checks on Constitution saving throws until the spell ends. You also deal 1d6 additional necrotic damage whenever you hit with any non-spell attack.<br><br><b>Boost (DC 15).</b> Make a drain touch attack (regardless if it's selected as your spell) as part of the same spell." },
      { tier: 1, name: "Animate", ap: 4, cc: 5, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "V, S, M", ritual: false, desc: "A Medium or smaller-sized corpse in any state of decay (even bones) becomes any undead creature with a CR of 2 or less. On your turn, you can use a bonus action to mentally command any creature you made with this spell that you can see (you can command any or all of them at the same time). If you issue no commands, the creature only defends itself against hostile creatures. The creature is under your control for 24 hours, after which it stops obeying until you cast this spell on it again. For every 3 additional dark spent before casting, you can raise or sustain two undead.<br><br><b>Boost (DC 20).</b> You can create undead at CR 3 or less." },
      { tier: 2, name: "Perish", ap: 6, cc: 7, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false, desc: "The target you touch must make a Constitution saving throw, taking 7d6 + Vigor modifier necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs. For every 2 additional dark spent before casting, you can increase the number of dice by 1 (Max +5 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 2, name: "Line of Death", ap: 6, cc: 7, time: "1 minute", range: "120 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false, desc: "You create an invisible wall of necrotic energy up to 60 feet long, 20 feet high, and 5 feet thick with its furthest point no further than 120 ft. You can bend this wall in any configuration, even enclosed shapes like cubes, cylinders, or domes. Each creature within its area upon creation or within 5 feet while it is in effect must make a Dexterity saving throw. On a failed save, a creature takes 7d6 + Vigor modifier necrotic damage, or half as much damage on a successful save. Any creature passing into the wall after it is cast fails automatically. For every additional 1 dark spent before casting, increase the length of the wall by 10 feet. This wall is invisible, with the only evidence of its existence being the inevitable corpses.<br><br><b>Boost (DC 13).</b> When the duration expires, make a Vigor (Induce) check to extend the effect for another minute. The DC increases by 1 each time it is attempted." },
      { tier: 3, name: "Greater Animate", ap: 8, cc: 9, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "V, S, M", ritual: false, desc: "This operates the same as animate, except the maximum CR of the undead creature is now 5. For every 3 additional dark spent before casting, you can raise or sustain two undead.<br><br><b>Boost (DC 20).</b> You can create undead at CR 6 or less." },
      { tier: 3, name: "Lifeforce", ap: 8, cc: 9, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false, desc: "The target must make a Constitution saving throw. On a failed save, it takes 7d6 + Vigor modifier necrotic damage, or half as much damage on a successful save; you recover hit points equal to 25% of the damage dealt. The damage can't reduce the target's hit points below 1. For every 2 additional dark spent before casting, you can increase the number of dice by 1 (Max +5 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 4, name: "Hand of Death", ap: 10, cc: 11, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false, desc: "The target must make a Constitution saving throw. It takes 9d6 + Vigor modifier necrotic damage on a failed save, or half as much damage on a successful one. A humanoid killed by this spell rises at the start of your next turn as an undead of CR 3 or less that is permanently under your command, following your verbal orders to the best of its ability. For every 2 additional dark spent before casting, you can increase the number of dice by 1 (Max +5 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 4, name: "Resurrection", ap: 12, cc: null, time: "1 hour", range: "Touch", duration: "Inst.", comp: "V, S, M", ritual: true, desc: "You touch a creature that has been dead for no more than 5 years that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points. This spell neutralizes any poisons and cures all diseases afflicting the creature when it died. This spell closes all mortal wounds and restores any missing body parts. Coming back from the dead is an ordeal. The target is at level 4 exhaustion.<br><br><b>Boost (DC 15).</b> You can increase the age of the corpse by 5 years. Increase the DC by 1, increasing the age by 5 years each (no Max).<br><br><b>Sacrifice.</b> After casting, you gain four levels of exhaustion." }
    ]
  },

    decay: {
    name: "Path of Decay",
    cost: 2,
    synergy: "death",
    benefit: "You have resistance to poison and acid damage.",
    traits: "Necromancy's red-headed stepchild, decay spells are often confused with the former given its use of audible incantations. The only notable difference is the lack of blood in many of the spells.",
    spells: [
      { tier: 0, name: "Acidic Touch", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "Inst.", comp: "S", ritual: false, desc: "Make a melee spell attack. On a hit, the target takes 1d8 + Vigor modifier acid damage. For every 3 additional dark spent before casting, increase dice by 1 (max +3 dice)." },
      { tier: 0, name: "Acid Ball", ap: 2, cc: 4, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "S", ritual: false, desc: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d4 + Vigor modifier acid damage. For every 2 additional dark spent before casting, increase dice by 1 (max +3 dice).<br><br><b>Boost (DC 15).</b> Reduce the cost of this spell to an action." },
      { tier: 1, name: "Acid Spray", ap: 3, cc: 6, time: "1 minute", range: "15 ft. cone", duration: "Inst.", comp: "V, S", ritual: false, desc: "You produce a 15-foot cone of acid; targets make a Dexterity saving throw, inflicting 3d6 + Vigor modifier damage on a failed save, or half as much on a successful one. A target that fails takes additional damage equal to half the initial damage. For every 3 additional dark spent before casting, increase dice by 1 (max +3 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 1, name: "Poison Puff", ap: 3, cc: 6, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "V, S", ritual: false, desc: "A target able to inhale your attack must make a Constitution saving throw, inflicting 4d6 + Vigor modifier damage on a failed save, or half as much on a successful one. A target that fails is also poisoned for 1 minute. For every 3 additional dark spent before casting, increase dice by 1 (max +3 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 2, name: "Acid/Poison Spit", ap: 4, cc: 7, time: "1 minute", range: "20 ft.", duration: "Inst.", comp: "S", ritual: false, desc: "One target in range must make a Dexterity saving throw, suffering 7d6 + Vigor modifier damage on a failed save, or half as much on a successful one. If you spit acid, a target that fails takes additional damage equal to half the initial damage. If you spit poison, a target that fails is poisoned for 1 minute. For every 2 additional dark spent before casting, increase dice by 1 (max +3 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 2, name: "Condition", ap: 4, cc: 7, time: "1 minute", range: "60 ft.", duration: "5 minutes", comp: "V, S", ritual: false, desc: "Choose one creature that you can see within range to make two Constitution saving throws. For each saving throw failed, the target gains a level of exhaustion. Unlike standard exhaustion, these levels are lost after the spell's duration. This spell cannot inflict level 6 exhaustion, although the target can still reach it normally. For every 3 additional dark spent before casting, add one additional saving throw (max 5 = 5 levels of exhaustion)." },
      { tier: 3, name: "Decomposition", ap: 6, cc: 9, time: "1 minute", range: "90 ft.", duration: "Inst. (+10 rounds)", comp: "V, S", ritual: false, desc: "Make a ranged spell attack against one target in range; on a hit, the target takes 7d6 + Vigor modifier damage immediately, and 2d6 + Vigor modifier damage every additional round for 10 rounds. On a miss, the attack splashes the target with acid for half as much of the initial damage and no subsequent damage. For every 2 additional dark spent before casting, increase dice by 1 (max +5 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 3, name: "Contagion", ap: 6, cc: 9, time: "1 minute", range: "Touch", duration: "Until cured", comp: "V, S", ritual: false, desc: "Make a melee spell attack. On a hit, you afflict the creature with any disease of your choice. At the end of each of the target's turns, it must make a Constitution saving throw. After failing three of these saving throws, the disease's effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends." },
      { tier: 4, name: "Plague", ap: 8, cc: 12, time: "1 minute", range: "60 ft.", duration: "Until cured", comp: "V, S", ritual: false, desc: "This operates the same as contagion, except now you can make a ranged spell attack against any number of targets you can see in range. For every 2 additional dark spent before casting, increase the range by 10 ft. (max +60 ft.)." }
    ]
  },

    earth: {
    name: "Path of Earth",
    cost: 2,
    synergy: "water",
    benefit: "You have advantage with Intelligence (Nature) checks.",
    traits: "Spells focused on Earth employ what appears to be dirt in nearly all of its spellcraft. Hand movements, akin to acting as puppeteering to nature, are prevalent.",
    spells: [
      { tier: 0, name: "Snap", ap: 2, cc: 3, time: "1 action", range: "10 ft.", duration: "Inst.", comp: "S", ritual: false, desc: "You make a ranged spell attack against one creature in range. On a hit, you inflict 1d6 + Vigor modifier thunder damage, and the target is deafened until the beginning of your next turn. For every 3 additional dark spent before casting, increase dice by 1 (max +3 dice)." },
      { tier: 0, name: "Clap", ap: 2, cc: 4, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "S", ritual: false, desc: "This spell requires two free hands. Each creature you select in range must make a Constitution saving throw or be knocked prone. Flying creatures are immune. For every 2 additional dark spent before casting, increase the range by 5 feet (max +15 feet)." },
      { tier: 1, name: "Entangle", ap: 4, cc: 6, time: "1 minute", range: "30 ft. cone", duration: "Conc. up to 5 minutes", comp: "S", ritual: false, desc: "Vines sprout in a 30-foot cone radiating from you. For the duration, this area counts as difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained until the spell ends. A restrained creature can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the plants wilt away. For every 2 additional dark spent before casting, increase the range by 10 feet (max +30 feet)." },
      { tier: 1, name: "Animal Kinship", ap: 4, cc: null, time: "1 minute", range: "30 ft.", duration: "24 hours", comp: "V, S, M", ritual: true, desc: "Select a beast with an Intelligence of 4 or less; it must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends. Instead of controlling it, you can give it a single instruction and a message to deliver. When you do, specify a location, which you must have visited, and a recipient who matches a general description. You can speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.<br><br><b>Sacrifice.</b> You suffer disadvantage to ability checks for 1 hour. You can gain one level of exhaustion and target 2 beasts instead of 1." },
      { tier: 2, name: "Thunderwave", ap: 6, cc: 7, time: "1 minute", range: "15 ft. cube", duration: "Inst.", comp: "V, S", ritual: false, desc: "Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 1d6 + Vigor modifier thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. Unsecured objects entirely within the area are counted as having failed. The spell emits a thunderous boom audible out to 300 feet. For every 2 additional dark spent before casting, increase dice by 1 (max +5 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 2, name: "Spines", ap: 6, cc: 7, time: "1 minute", range: "10 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false, desc: "Each creature in range centered on you must make a Dexterity saving throw. A creature takes 3d6 + Vigor modifier piercing damage on a failed save, or half as much damage on a successful one. A failed creature is also restrained until the spell ends. A restrained creature can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the plants wilt away. Creatures entering the spells effect must make the same saving throw or suffer equal damage and effect. For every 2 additional dark spent before casting, increase the range by 10 feet and the damage by 1 die (max +30 feet and +3 dice).<br><br><b>Boost (DC 20).</b> Increase damage dice to d8." },
      { tier: 3, name: "Wall of Earth", ap: 8, cc: 8, time: "1 minute", range: "120 ft.", duration: "Conc. up to 10 minutes", comp: "V, S, M", ritual: false, desc: "A nonmagical wall of earth rises 80 feet long, 30 feet high, and 5 feet thick with its furthest point not further than 120 feet. You can bend this wall in any configuration, even enclosed shapes like cubes, cylinders, or domes. If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. You can use this spell to bridge a chasm, create a ramp, erect crenellations, battlements, and so on. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends." },
      { tier: 3, name: "Terraform", ap: 8, cc: 9, time: "1 minute", range: "100 ft.", duration: "Conc. up to 2 hours", comp: "V, S, M", ritual: false, desc: "You can reshape the terrain in the area in any manner you choose for the duration. You can change elevation, create or fill in a trench, erect or flatten a wall, or form a pillar (GM's discretion on the limits given present terrain). At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect. Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement. This spell can't manipulate construction or technology. If the way you shape the terrain would make a structure unstable, it might collapse. This spell doesn't directly affect plant growth. The moved earth carries any plants along with it. For every 2 additional dark spent before casting, increase the range by 50 feet (max +200 feet).<br><br><b>Boost (DC 25).</b> Double the spell's range." },
      { tier: 4, name: "Earthquake", ap: 10, cc: 12, time: "1 minute", range: "500 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false, desc: "You create an intense tremor in a 100-foot-radius circle centered on a point in range. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken. When you cast this spell, and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.<br><br>Spend 4 additional dark to open up 1d6 fissures. Each is 1d10 × 10 feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below).<br><br>Spend 3 additional dark to inflict 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 4d6 + Vigor modifier bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The GM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried." }
    ]
  },

  flame: {
    name: "Path of Flame", cost: 2, synergy: "self",
    benefit: "Resistance to fire damage; immune to your own magical fire.",
    traits: "Flame spells require vocal shouts and sweeping gestures.",
    spells: [
      { tier: 0, name: "Fire Bolt", ap: 2, cc: 3, time: "1 action", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 0, name: "Enchant Flame", ap: 2, cc: null, time: "1 action", range: "Touch", duration: "1 hour", comp: "V, S", ritual: false },
      { tier: 1, name: "Flamethrower", ap: 3, cc: 4, time: "1 action", range: "Self (15-ft cone)", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 1, name: "Forever Flame", ap: 3, cc: null, time: "1 action", range: "Touch", duration: "Until dismissed", comp: "V, S", ritual: true },
      { tier: 1, name: "Flame Ball", ap: 3, cc: 4, time: "1 action", range: "150 ft.", duration: "Inst.", comp: "V, S, M", ritual: false },
      { tier: 2, name: "Pillars of Fire", ap: 5, cc: 6, time: "1 action", range: "60 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 2, name: "Blazing Barrier", ap: 5, cc: 6, time: "1 action", range: "120 ft.", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: false },
      { tier: 3, name: "Artillery Flare", ap: 7, cc: 8, time: "1 action", range: "500 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 3, name: "Fire Storm", ap: 7, cc: 8, time: "1 action", range: "150 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 4, name: "Incendiary Bomb", ap: 10, cc: 11, time: "1 action", range: "1500 ft.", duration: "Inst.", comp: "V, S", ritual: false }
    ]
  },

  illusion: {
    name: "Path of Illusion", cost: 2, synergy: "power",
    benefit: "+2 bonus to your Vessel maximum.",
    traits: "Illusion spells use theatrical gestures and whispered words.",
    spells: [
      { tier: 0, name: "Artifice", ap: 2, cc: 3, time: "1 action", range: "30 ft.", duration: "1 minute", comp: "V, S", ritual: false },
      { tier: 0, name: "Pose", ap: 2, cc: 3, time: "1 action", range: "Self", duration: "1 hour", comp: "V, S", ritual: false },
      { tier: 1, name: "Mirror", ap: 3, cc: 4, time: "1 action", range: "Self", duration: "1 minute", comp: "V, S", ritual: false },
      { tier: 1, name: "Hallucination", ap: 3, cc: 4, time: "1 action", range: "60 ft.", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 2, name: "Dreamscape", ap: 5, cc: null, time: "1 minute", range: "Special", duration: "8 hours", comp: "V, S, M", ritual: true },
      { tier: 2, name: "Masquerade", ap: 5, cc: null, time: "1 action", range: "Self", duration: "1 hour", comp: "V, S", ritual: true },
      { tier: 3, name: "Program", ap: 7, cc: null, time: "10 minutes", range: "120 ft.", duration: "Until dispelled", comp: "V, S, M", ritual: true },
      { tier: 3, name: "Mirage", ap: 7, cc: null, time: "10 minutes", range: "Sight", duration: "24 hours", comp: "V, S", ritual: true },
      { tier: 4, name: "Projection", ap: 10, cc: 11, time: "1 action", range: "500 ft.", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: false }
    ]
  },

  knowledge: {
    name: "Path of Knowledge", cost: 2, synergy: "attraction",
    benefit: "You may use your Vigor score instead of Intelligence for skill checks.",
    traits: "Knowledge spells rarely require components beyond concentration.",
    spells: [
      { tier: 0, name: "Comprehension", ap: 2, cc: null, time: "1 minute", range: "Self", duration: "1 hour", comp: "V, S", ritual: false },
      { tier: 1, name: "Communication", ap: 3, cc: 4, time: "1 action", range: "500 ft.", duration: "1 minute", comp: "V", ritual: false },
      { tier: 1, name: "Locate", ap: 3, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 10 minutes", comp: "V, S, M", ritual: true },
      { tier: 2, name: "Clairvoyance", ap: 5, cc: null, time: "10 minutes", range: "1 mile", duration: "Conc. up to 10 minutes", comp: "V, S, M", ritual: true },
      { tier: 2, name: "Premonition", ap: 5, cc: 6, time: "1 action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 3, name: "Dreamwalker", ap: 7, cc: 8, time: "1 minute", range: "Special", duration: "8 hours", comp: "V, S, M", ritual: false },
      { tier: 3, name: "Predestination", ap: 7, cc: 8, time: "1 minute", range: "Touch", duration: "8 hours", comp: "V, S", ritual: false },
      { tier: 4, name: "Anticipation", ap: 10, cc: 11, time: "1 action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false }
    ]
  },

  life: {
    name: "Path of Life", cost: 2, synergy: "light",
    benefit: "+2 max HP for each Life spell you know.",
    traits: "Life spells use laying-on-hands and soft vocalizations.",
    spells: [
      { tier: 0, name: "Touch of Life", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 0, name: "Alleviate", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 1, name: "Revivify", ap: 3, cc: 4, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S, M", ritual: false },
      { tier: 1, name: "Minor Exorcism", ap: 3, cc: null, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S", ritual: true },
      { tier: 2, name: "Healing Wave", ap: 5, cc: 6, time: "1 action", range: "60 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 2, name: "Death Ward", ap: 5, cc: null, time: "1 action", range: "Touch", duration: "8 hours", comp: "V, S", ritual: true },
      { tier: 3, name: "Cleanse", ap: 7, cc: null, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S", ritual: true },
      { tier: 3, name: "Restore", ap: 7, cc: 8, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 4, name: "Regenerate", ap: 10, cc: null, time: "1 minute", range: "Touch", duration: "1 hour", comp: "V, S", ritual: true },
      { tier: 4, name: "Healing Aura", ap: 10, cc: 11, time: "1 action", range: "Self (30-ft radius)", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: false }
    ]
  },

  light: {
    name: "Path of Light", cost: 2, synergy: "life",
    benefit: "You cannot be blinded.",
    traits: "Light spells shed bright illumination and use luminous gestures.",
    spells: [
      { tier: 0, name: "Radiant Strike", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 0, name: "Light", ap: 2, cc: null, time: "1 action", range: "Touch", duration: "1 hour", comp: "V, S", ritual: true },
      { tier: 1, name: "Bolt of Heaven", ap: 3, cc: 4, time: "1 action", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 1, name: "Starburst", ap: 3, cc: 4, time: "1 action", range: "60 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 2, name: "Sunsphere", ap: 5, cc: null, time: "1 action", range: "60 ft.", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: true },
      { tier: 2, name: "Extradite", ap: 5, cc: 6, time: "1 action", range: "60 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 3, name: "Sunbeam", ap: 7, cc: 8, time: "1 action", range: "Self (60-ft line)", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 3, name: "Nova", ap: 7, cc: 8, time: "1 action", range: "150 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 4, name: "Sunrise", ap: 10, cc: null, time: "1 minute", range: "Sight", duration: "1 hour", comp: "V, S", ritual: true }
    ]
  },

  might: {
    name: "Path of Might", cost: 2, synergy: "protection",
    benefit: "Proficiency with all melee weapons.",
    traits: "Might spells enhance physical capabilities with brief gestures.",
    spells: [
      { tier: 0, name: "Pinpoint", ap: 2, cc: 3, time: "1 bonus action", range: "Self", duration: "1 round", comp: "V, S", ritual: false },
      { tier: 1, name: "Paranormal Aim", ap: 3, cc: 4, time: "1 bonus action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 1, name: "Compression", ap: 3, cc: 4, time: "1 action", range: "Touch", duration: "1 hour", comp: "V, S", ritual: false },
      { tier: 2, name: "Wrath", ap: 5, cc: 6, time: "1 bonus action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 2, name: "Magic Weapon (T2)", ap: 5, cc: null, time: "1 bonus action", range: "Touch", duration: "Conc. up to 1 hour", comp: "V, S", ritual: true,
        desc: "Target weapon becomes magical with +1 to attack and damage rolls. Sacrifice: disadvantage on Wis checks until long rest." },
      { tier: 3, name: "Crack", ap: 7, cc: 8, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 3, name: "Magic Weapon (T3)", ap: 7, cc: null, time: "1 bonus action", range: "Touch", duration: "Conc. up to 1 hour", comp: "V, S", ritual: true,
        desc: "As T2, but +2 (does not stack with T2 or T4). Sacrifice: disadvantage on Wis checks until long rest." },
      { tier: 4, name: "Disintegrate", ap: 10, cc: 11, time: "1 action", range: "60 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 4, name: "Magic Weapon (T4)", ap: 10, cc: null, time: "1 bonus action", range: "Touch", duration: "Conc. up to 1 hour", comp: "V, S", ritual: true,
        desc: "As T3, but +3 (does not stack with T1 or T2). Sacrifice: disadvantage on Wis checks until long rest." }
    ]
  },

  movement: {
    name: "Path of Movement", cost: 2, synergy: "air",
    benefit: "You can use Vigor instead of Dexterity for Dex saving throws against spells.",
    traits: "Movement spells employ magic circles and hand movements with little vocalization.",
    spells: [
      { tier: 0, name: "Runner", ap: 2, cc: null, time: "1 action", range: "Touch", duration: "1 hour", comp: "S, M", ritual: true },
      { tier: 1, name: "Swiftness", ap: 4, cc: 5, time: "1 minute", range: "Touch", duration: "Conc. up to 1 minute", comp: "S, M", ritual: false },
      { tier: 1, name: "Passthrough", ap: 4, cc: null, time: "1 minute", range: "30 ft.", duration: "Conc. up to 5 minutes", comp: "S, M", ritual: true },
      { tier: 2, name: "Jumper", ap: 6, cc: 7, time: "1 minute", range: "400 ft.", duration: "Inst.", comp: "S, M", ritual: false },
      { tier: 2, name: "Portal", ap: 6, cc: null, time: "1 minute", range: "Special", duration: "Inst. / Conc. up to 1 minute", comp: "S, M", ritual: true },
      { tier: 3, name: "Gateway", ap: 8, cc: null, time: "1 minute", range: "500 ft.", duration: "Conc. up to 1 minute", comp: "S, M", ritual: true },
      { tier: 3, name: "Recall", ap: 8, cc: 9, time: "1 action", range: "500 ft.", duration: "Inst.", comp: "S, M", ritual: false },
      { tier: 4, name: "Dimension Circle", ap: 12, cc: null, time: "5 minutes", range: "Special", duration: "8 hours", comp: "S, M", ritual: true }
    ]
  },

  power: {
    name: "Path of Power", cost: 2, synergy: "illusion",
    benefit: "Your river increases by 1.",
    traits: "Power spells are flashy, colorful, flamboyant gestures with vocal screaming.",
    spells: [
      { tier: 0, name: "Electric Arc", ap: 2, cc: 3, time: "1 minute", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 0, name: "Shock Strike", ap: 3, cc: 2, time: "1 bonus action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 1, name: "Shocking Fist", ap: 4, cc: 4, time: "1 minute", range: "60 ft.", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 1, name: "Lightning Bolt", ap: 4, cc: 6, time: "1 minute", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 2, name: "Electrified Weapon", ap: 6, cc: 7, time: "1 minute", range: "Touch", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 2, name: "Storm", ap: 6, cc: 7, time: "1 minute", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: false },
      { tier: 3, name: "Electrovolt", ap: 8, cc: 9, time: "1 minute", range: "Varies", duration: "Varies", comp: "V, S", ritual: false },
      { tier: 4, name: "Lightning Sequence", ap: 10, cc: 13, time: "1 minute", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: false }
    ]
  },

  protection: {
    name: "Path of Protection", cost: 2, synergy: "might",
    benefit: "If an opponent scores a critical hit on you, your vessel regains 2.",
    traits: "Protection spells use defensive gestures with little expression.",
    spells: [
      { tier: 0, name: "Reprisal", ap: 2, cc: 3, time: "1 action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false },
      { tier: 0, name: "Magic Armor", ap: 2, cc: 3, time: "1 minute", range: "Self", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: false },
      { tier: 1, name: "Shield", ap: 4, cc: 5, time: "1 bonus action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "+2 bonus to AC. If placed in your river, use as a reaction against an incoming hit." },
      { tier: 1, name: "Hush", ap: 4, cc: 5, time: "1 minute", range: "Self", duration: "Conc. up to 5 minutes", comp: "S, M", ritual: false },
      { tier: 2, name: "Blur", ap: 6, cc: 6, time: "1 minute", range: "Self", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: false },
      { tier: 2, name: "Alienation", ap: 6, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 1 hour", comp: "V, M", ritual: true },
      { tier: 3, name: "Colossus", ap: 7, cc: 7, time: "1 minute", range: "Self", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: false },
      { tier: 3, name: "Blender Barrier", ap: 8, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 1 hour", comp: "V, M", ritual: true },
      { tier: 4, name: "Invulnerability", ap: 10, cc: 10, time: "1 bonus action", range: "Self", duration: "1 round", comp: "V, M", ritual: false,
        desc: "Immune to all damage until end of next turn. If in river, use as a reaction." },
      { tier: 4, name: "Impenetrable", ap: 10, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 1 hour", comp: "V, M", ritual: true }
    ]
  },

  self: {
    name: "Path of Self", cost: 2, synergy: "flame",
    benefit: "+2 bonus to your Vessel.",
    traits: "Self spells have little outward expression beyond minor hand movements.",
    spells: [
      { tier: 0, name: "Darkvision", ap: 2, cc: null, time: "1 action", range: "Self", duration: "1 hour", comp: "S", ritual: true },
      { tier: 0, name: "Channel Bear", ap: 3, cc: 4, time: "1 action", range: "Self", duration: "Conc. up to 5 minutes", comp: "S", ritual: false },
      { tier: 0, name: "Channel Ape", ap: 3, cc: 4, time: "1 action", range: "Self", duration: "Conc. up to 5 minutes", comp: "S", ritual: false },
      { tier: 0, name: "Channel Wolf", ap: 3, cc: 4, time: "1 action", range: "Self", duration: "Conc. up to 5 minutes", comp: "S", ritual: false },
      { tier: 0, name: "Channel Tiger", ap: 3, cc: 4, time: "1 action", range: "Self", duration: "Conc. up to 5 minutes", comp: "S", ritual: false },
      { tier: 0, name: "Channel Falcon", ap: 3, cc: 4, time: "1 action", range: "Self", duration: "Conc. up to 5 minutes", comp: "S", ritual: false },
      { tier: 1, name: "Gravity Shifter", ap: 4, cc: 5, time: "1 action", range: "Self", duration: "Conc. up to 5 minutes", comp: "S", ritual: false },
      { tier: 1, name: "Invisibility", ap: 4, cc: 5, time: "1 minute", range: "Self", duration: "Conc. up to 1 hour", comp: "S", ritual: false },
      { tier: 2, name: "Sizing", ap: 6, cc: 7, time: "1 minute", range: "Self", duration: "Conc. up to 5 minutes", comp: "S", ritual: false },
      { tier: 2, name: "Ultravision", ap: 6, cc: null, time: "1 action", range: "Self", duration: "1 hour", comp: "", ritual: true },
      { tier: 3, name: "Renew", ap: 8, cc: null, time: "1 minute", range: "Self", duration: "Inst.", comp: "S", ritual: true },
      { tier: 3, name: "Truesight", ap: 8, cc: null, time: "1 minute", range: "Self", duration: "1 hour", comp: "S", ritual: true },
      { tier: 4, name: "Ghost", ap: 10, cc: null, time: "1 minute", range: "Self", duration: "1 hour", comp: "S", ritual: true }
    ]
  },

  technology: {
    name: "Path of Technology", cost: 2, synergy: "creation",
    benefit: "Proficient with Engineering; use Vigor instead of Intelligence for tech checks.",
    traits: "Technology spells access technology magically through various techniques.",
    spells: [
      { tier: 0, name: "Construction", ap: 3, cc: null, time: "1 hour", range: "120 ft.", duration: "Inst.", comp: "V, S, M", ritual: true },
      { tier: 0, name: "Refurbishment", ap: 2, cc: null, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S, M", ritual: true },
      { tier: 1, name: "Magic Firearm", ap: 4, cc: null, time: "1 minute", range: "Touch", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: true },
      { tier: 1, name: "EMP", ap: 4, cc: 5, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "V, S, M", ritual: false },
      { tier: 1, name: "Access", ap: 4, cc: null, time: "1 action", range: "Touch", duration: "Inst.", comp: "V, S", ritual: true },
      { tier: 1, name: "Eyes of SOL", ap: 5, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 1 hour", comp: "V, S", ritual: true },
      { tier: 2, name: "Hijack", ap: 5, cc: 6, time: "1 minute", range: "30 ft.", duration: "Conc. up to 1 hour", comp: "V, S", ritual: false },
      { tier: 2, name: "Presence of SOL", ap: 5, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: true },
      { tier: 3, name: "Wireless", ap: 7, cc: null, time: "1 action", range: "Self", duration: "Conc. up to 1 hour", comp: "V, S", ritual: true },
      { tier: 3, name: "Radial Access", ap: 7, cc: null, time: "1 minute", range: "60 ft.", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: true },
      { tier: 3, name: "Will of SOL", ap: 7, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 8 hours", comp: "V, S", ritual: true },
      { tier: 4, name: "Hammer of SOL", ap: 12, cc: 13, time: "1 minute", range: "1 mile", duration: "Inst.", comp: "V, S, M", ritual: false }
    ]
  },

  water: {
    name: "Path of Water", cost: 2, synergy: "earth",
    benefit: "Swim speed equal to your ground speed.",
    traits: "Water spells involve boisterous hand movements and little to no vocalization.",
    spells: [
      { tier: 0, name: "Endothermic Ray", ap: 2, cc: 3, time: "1 minute", range: "60 ft.", duration: "Inst.", comp: "S", ritual: false },
      { tier: 0, name: "Alter Temperature", ap: 2, cc: null, time: "1 action", range: "Touch", duration: "Inst.", comp: "S", ritual: true },
      { tier: 1, name: "Water Breathing", ap: 3, cc: null, time: "1 action", range: "Self", duration: "Conc. up to 8 hours", comp: "S", ritual: true },
      { tier: 1, name: "Water Walk", ap: 3, cc: null, time: "1 action", range: "Self", duration: "Conc. up to 8 hours", comp: "S", ritual: true },
      { tier: 2, name: "Control Water", ap: 4, cc: null, time: "1 action", range: "500 ft.", duration: "Conc. up to 1 hour", comp: "S", ritual: true },
      { tier: 2, name: "Shard Thrower", ap: 4, cc: 7, time: "1 minute", range: "120 ft.", duration: "Inst.", comp: "S", ritual: false },
      { tier: 3, name: "Storm", ap: 5, cc: 9, time: "1 minute", range: "500 ft.", duration: "Inst.", comp: "S", ritual: false },
      { tier: 3, name: "Breath of Cold", ap: 5, cc: 9, time: "1 minute", range: "60 ft.", duration: "Inst.", comp: "S", ritual: false },
      { tier: 3, name: "Frozen Barrier", ap: 5, cc: 9, time: "1 minute", range: "120 ft.", duration: "Conc. up to 1 minute", comp: "S", ritual: false },
      { tier: 4, name: "Tsunami", ap: 7, cc: 12, time: "1 minute", range: "Sight", duration: "Conc. up to 1 minute", comp: "S", ritual: false }
    ]
  }
};

// Helper: flat spell list with path tagging for UI/filtering
const ALL_SPELLS_FLAT = (() => {
  const list = [];
  COLLECTIVE_SPELLS.forEach(s => list.push({ ...s, pathKey: "collective", pathName: "Collective", tier: 0 }));
  Object.entries(MAGIC_PATHS).forEach(([key, p]) => {
    p.spells.forEach(s => list.push({ ...s, pathKey: key, pathName: p.name }));
  });
  return list;
})();
