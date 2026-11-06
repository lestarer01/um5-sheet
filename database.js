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
  /* ============ ONE-HANDED SMALL ARMS [TL0] ============ */
  "10-gauge Break Pistol":        { type: "One-Handed Small Arm (TL0)", damage: "1d10 Piercing*", range: "20/60",  properties: "Breech (2 shells, 10G), Double (2d8), Shotgun",         magSize: 2 },
  "12-gauge Break Pistol":        { type: "One-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "20/60",  properties: "Breech (2 shells, 12G), Double (1d12), Shotgun",        magSize: 2 },
  "Apache Pinfire Revolver":      { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "20/60",  properties: "Load (5 rounds), Draw, Light, Pocket, Special",         magSize: 5 },
  "Astra 400 Auto Revolver":      { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "30/90",  properties: "Load (6 rounds), Draw, FTF, Light",                     magSize: 6 },
  "Belt Buckle Gun":              { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "5/20",   properties: "Breech (4 rounds), Light, Pocket",                      magSize: 4 },
  "Blunderbuss, Light":           { type: "One-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "10/40",  properties: "Muzzle (1 buck), Shotgun, Special",                     magSize: 1 },
  "Colt Root Revolver":           { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "30/90",  properties: "Cap&Ball (5 shots), Draw, Light, Perc",                 magSize: 5 },
  "Colt Revolving Shot Pistol":   { type: "One-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "20/60",  properties: "Cap&Ball (5 buck, 10G), Draw, FTF, Perc, Shotgun, Special", magSize: 5 },
  "Colt Paterson No. 5":          { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "20/80",  properties: "Cap&Ball (5 shots), Draw, Perc",                        magSize: 5 },
  "Colt Dragoon Revolver":        { type: "One-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "30/120", properties: "Cap&Ball (5 shots), Perc",                              magSize: 5 },
  "Duelling Pistol":              { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "20/80",  properties: "Muzzle (1 shot), Draw, Flint",                          magSize: 1 },
  "Duck Foot Pistol":             { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "10/40",  properties: "Muzzle (4 shots), Special",                             magSize: 4 },
  "Elgin Cutlass Pistol":         { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "30/120", properties: "Muzzle (1 shot), Light, Special",                       magSize: 1 },
  "Ethan Allen Pepperbox":        { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "20/80",  properties: "Muzzle (9 shots), Light, Special",                      magSize: 9 },
  "Guycot 40-Shot Chain Pistol":  { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "20/80",  properties: "Breech (40 rounds), Special",                           magSize: 40 },
  "Lancaster Howdah Pistol":      { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing*",  range: "20/80",  properties: "Breech (4 rounds), Double (1d10)",                      magSize: 4 },
  "Landstad Revolver":            { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "40/160", properties: "Load (12 rounds), Draw, FTF, Special",                  magSize: 12 },
  "Lemat Grapeshot Cartridge":    { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing*",  range: "30/120", properties: "Breech (9 rounds), Draw. Undermount: 1d8P 20/60 Shotgun", magSize: 9 },
  "Lemat Grapeshot Caplock":      { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing*",  range: "30/120", properties: "Cap&Ball (9 shots), Draw, Perc. Undermount: 1d8P Shotgun", magSize: 9 },
  "Liege Pinfire Revolver":       { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "20/80",  properties: "Breech (20 rounds), Draw, Special",                     magSize: 20 },
  "Manifold Revolver":            { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "30/120", properties: "Load (12 shots), FTF, Perc, Special",                   magSize: 12 },
  "Mariette Band Revolver":       { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "30/120", properties: "Breech (20 rounds), Draw, FTF",                         magSize: 20 },
  "Marlin Volcanic":              { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "30/120", properties: "Cap&Ball (9 rounds), Draw, Mod(G), Special",            magSize: 9 },
  "Nagant M1895":                 { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "40/160", properties: "Breech (7 rounds), Draw, Mod(B)",                       magSize: 7 },
  "Protector Ring Pistol":        { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "10/40",  properties: "Breech (7 rounds), FTF, Light, Pocket",                 magSize: 7 },
  "Queen Anne Pistol":            { type: "One-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "20/80",  properties: "Breech (1 shot), Draw, Flint",                          magSize: 1 },
  "Remington Double Derringer":   { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "10/40",  properties: "Breech (2 rounds), Double (1d8), Draw, Light, Pocket",  magSize: 2 },
  "Sharps Four-Barrel Derringer": { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "20/80",  properties: "Breech (4 rounds), Draw, Light, Pocket",                magSize: 4 },
  "Smith & Wesson Model 1":       { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "30/120", properties: "Breech (7 rounds), Light, Pocket",                      magSize: 7 },
  "Tierce Triplex Pinch Pistol":  { type: "One-Handed Small Arm (TL0)", damage: "1d4 Piercing",   range: "20/80",  properties: "Load (3 shots), Double (1d8), Draw, Light, Perc, Pocket", magSize: 3 },
  "Tucker & Sherrard Revolver":   { type: "One-Handed Small Arm (TL0)", damage: "1d10 Piercing*", range: "20/60",  properties: "Breech (1 shell, 10G), Shotgun",                        magSize: 1 },
  "Webley Fosbery Revolver":      { type: "One-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "30/120", properties: "Breech (8 rounds), Draw, Special",                      magSize: 8 },

  /* ============ ONE-HANDED SMALL ARMS [TL1] ============ */
  "Beretta 92F":                  { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "30/120", properties: "Light, Mag (15 rounds)",                                magSize: 15 },
  "Beretta 93R":                  { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "40/160", properties: "Auto (1d8), Mag+ (20 rounds), Mod(G/U), Special",       magSize: 20 },
  "Browning Hi-Power":            { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "40/160", properties: "Light, Mag (13 rounds)",                                magSize: 13 },
  "Capsicum Spray":               { type: "One-Handed Small Arm (TL1)", damage: "Special",        range: "5/20",   properties: "Breech (Special), Light",                               magSize: 1 },
  "Colt M1911A1":                 { type: "One-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "20/80",  properties: "Mag (7 rounds), Draw",                                  magSize: 7 },
  "Colt Python .357":             { type: "One-Handed Small Arm (TL1)", damage: "1d10 Piercing*", range: "40/160", properties: "Breech (6 rounds), Master",                             magSize: 6 },
  "CZ-75":                        { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "40/160", properties: "Light, Mag (15 rounds)",                                magSize: 15 },
  "Derringer, HS":                { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "10/40",  properties: "Breech (2 rounds), Light",                              magSize: 2 },
  "Derringer, COP":               { type: "One-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "10/40",  properties: "Breech (4 rounds), Light",                              magSize: 4 },
  "Desert Eagle .44":             { type: "One-Handed Small Arm (TL1)", damage: "1d10 Piercing*", range: "50/200", properties: "Master, Mod(S/U), Mag (8 rounds)",                      magSize: 8 },
  "Double 1911":                  { type: "One-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "30/120", properties: "Double (1d12), Mag (14 rounds), Special",               magSize: 14 },
  "FN Five-seven":                { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing",   range: "50/200", properties: "Light, Mod(S/U), Mag+ (20 rounds)",                     magSize: 20 },
  "Gyrojet Pistol":               { type: "One-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "40/160", properties: "Breech (5 microjets), Gyro",                            magSize: 5 },
  "H&K P7":                       { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "40/160", properties: "Light, Mag (8 rounds)",                                 magSize: 8 },
  "H&K VP70M":                    { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "40/160", properties: "Auto (1d8), Mag+ (18 rounds), Mod(G), Special",         magSize: 18 },
  "Liberator Pistol":             { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing",   range: "10/40",  properties: "Breech (1 round), Light",                               magSize: 1 },
  "Luger P08":                    { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "30/120", properties: "Light, Mag (8 rounds), Mod(G)",                         magSize: 8 },
  "MAC-10":                       { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing*",  range: "40/160", properties: "Auto (1d6), Mod(B/G/M), Mag (30 rounds)",               magSize: 30 },
  "Makarov PB (suppressed)":      { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing",   range: "20/80",  properties: "Light, Mag (8 rounds), Special",                        magSize: 8 },
  "Makarov PM":                   { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing*",  range: "20/80",  properties: "Light, Mag (8 rounds)",                                 magSize: 8 },
  "Mauser C96 Broomhandle":       { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "30/120", properties: "Mag (10 rounds), Mod(G)",                               magSize: 10 },
  "Pfeifer Zeliska .600 NE":      { type: "One-Handed Small Arm (TL1)", damage: "2d8 Piercing",   range: "60/240", properties: "Breech (5 rounds), Draw, Special",                      magSize: 5 },
  "Revolver (Snubnose)":          { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "30/120", properties: "Breech (6 rounds), Light",                              magSize: 6 },
  "Ruger Standard":               { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing",   range: "30/120", properties: "Light, Mag (9 rounds)",                                 magSize: 9 },
  "Sawed-Off Shotgun":            { type: "One-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "10/40",  properties: "Breech (2 shells, 12G), Shotgun",                       magSize: 2 },
  "Smith & Wesson Model 29":      { type: "One-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "30/120", properties: "Breech (6 rounds), Draw",                               magSize: 6 },
  "Stechkin APS":                 { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "30/120", properties: "Auto (1d8), Mag (20 rounds), Mod(G)",                   magSize: 20 },
  "Steyr GB":                     { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing",   range: "30/120", properties: "Light, Mag (18 rounds)",                                magSize: 18 },
  "Taurus Model 85":              { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "30/120", properties: "Breech (5 rounds), Light",                              magSize: 5 },
  "TP-82":                        { type: "One-Handed Small Arm (TL1)", damage: "Special",        range: "Special",properties: "Breech (3 rounds), Special",                            magSize: 3 },
  "Uzi":                          { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing*",  range: "40/160", properties: "Auto (1d6), Mag (30 rounds), Mod(B/G/M/S), Special",    magSize: 30 },
  "Walther P38":                  { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "25/100", properties: "Mag (8 rounds), Light, Mod(B/G/M/S)",                   magSize: 8 },
  "Walther PPK":                  { type: "One-Handed Small Arm (TL1)", damage: "1d4 Piercing*",  range: "30/120", properties: "Light, Draw, Mag+ (7 rounds)",                          magSize: 7 },
  "Welrod MkII":                  { type: "One-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "20/80",  properties: "Light, Mag (8 rounds), Special",                        magSize: 8 },

  /* ============ ONE-HANDED SMALL ARMS [TL2] ============ */
  "Bond Arms Cyclops":            { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "25/100", properties: "Breech (1 shell, 12G), Shotgun, Light",                 magSize: 1 },
  "Cellphone Gun":                { type: "One-Handed Small Arm (TL2)", damage: "1d4 Piercing",   range: "10/30",  properties: "Breech (2 rounds), Light, Pocket",                      magSize: 2 },
  "Chiappa Rhino Revolver":       { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "40/160", properties: "Breech (6 rounds), Light, Master, Mod(S/U)",            magSize: 6 },
  "CSG Maglite Sting":            { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "20/80",  properties: "Breech (1 round), Light, Special",                      magSize: 1 },
  "Electroshock Gun":             { type: "One-Handed Small Arm (TL2)", damage: "Special",        range: "10",     properties: "Light, Mag (2 M-cell)",                                 magSize: 2 },
  "FN 57 Mk3":                    { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "70/280", properties: "Light, Mag+ (20 rounds), Mod(S/U)",                     magSize: 20 },
  "Glock 19":                     { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "70/280", properties: "Light, Mag+ (15 rounds), Mod(S/U)",                     magSize: 15 },
  "Grappling Hook":               { type: "One-Handed Small Arm (TL2)", damage: "1d4 Special",    range: "20/80",  properties: "Grapple, Load (1 hook)",                                magSize: 1 },
  "Heckler & Koch MK23":          { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "40/160", properties: "Mag+ (12 rounds), Special",                             magSize: 12 },
  "Heiser PS1 Pocket Shotgun":    { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "25/100", properties: "Breech (1 shell, 12G), Light, Shotgun, Special",       magSize: 1 },
  "Kel-Tec P50":                  { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "100/400",properties: "Mod(G/S/U), Mag (50 rounds)",                           magSize: 50 },
  "Lifecard .22 LR":              { type: "One-Handed Small Arm (TL2)", damage: "1d4 Piercing",   range: "20/80",  properties: "Breech (1 round), Light, Pocket",                       magSize: 1 },
  "Metalstorm VLE":               { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "40/160", properties: "ESP (Auto 1d8, Auto-Heavy 2d6), Light, Load (40 rounds)", magSize: 40 },
  "NA Arms 22 Short":             { type: "One-Handed Small Arm (TL2)", damage: "1d4 Piercing",   range: "30/120", properties: "Breech (1 round), Light, Pocket",                       magSize: 1 },
  "Palm Pistol":                  { type: "One-Handed Small Arm (TL2)", damage: "1d4 Piercing",   range: "10/40",  properties: "Breech (5 rounds), Light, Pocket",                      magSize: 5 },
  "Peak Rocket Pistol":           { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "30/120", properties: "Breech (5 microjets), Gyro",                            magSize: 5 },
  "Peak Pocket Rocket":           { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "30/120", properties: "Breech (1 microjet), Gyro, Light",                      magSize: 1 },
  "PP90":                         { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "70/280", properties: "Auto (1d8), Mag (30 rounds), Special",                  magSize: 30 },
  "PSS Pistol":                   { type: "One-Handed Small Arm (TL2)", damage: "1d4 Piercing",   range: "20/80",  properties: "Mag (6 rounds), Special",                               magSize: 6 },
  "Ruger LC Charger":             { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "100/400",properties: "Mod(B/G/U), Mag (20 rounds), Sniper (+1), Special",     magSize: 20 },
  "SIG-Sauer P320":               { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "50/200", properties: "Light, Mag+ (17 rounds), Mod(S/U)",                     magSize: 17 },
  "Smith & Wesson 500":           { type: "One-Handed Small Arm (TL2)", damage: "1d12 Piercing",  range: "100/400",properties: "Breech (5 rounds), Mod(S/U)",                           magSize: 5 },
  "Taurus Defender":              { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "20/80",  properties: "Breech (3 shells, 12G), Shotgun, Light",                magSize: 3 },
  "Taurus Judge":                 { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "20/80",  properties: "Breech (5 shells, 12G), Shotgun, Special",              magSize: 5 },
  "TTI Pit Viper":                { type: "One-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "60/240", properties: "Master, Mag+ (17 rounds), Mod(M/S/U), Special",         magSize: 17 },
  "VAG-73 Caseless":              { type: "One-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "40/160", properties: "Light, Mag (16 caseless)",                              magSize: 16 },
  "Whitney Wolverine":            { type: "One-Handed Small Arm (TL2)", damage: "1d4 Piercing",   range: "80/320", properties: "Light, Mag (10 rounds)",                                magSize: 10 },

  /* ============ ONE-HANDED SMALL ARMS [TL3+] ============ */
  "Assembly Assault Anachronism": { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Piercing",   range: "70/280", properties: "Light, EM, Master, Mag+ (30 flechettes/special)",       magSize: 30 },
  "Auto 9":                       { type: "One-Handed Small Arm (TL3+)", damage: "1d8 Piercing",   range: "70/280", properties: "Auto (1d10), Master, Mag+ (50 rounds)",                 magSize: 50 },
  "Black Guard Revolver":         { type: "One-Handed Small Arm (TL3+)", damage: "2d8+16 Piercing",range: "150/600",properties: "AP+, Breech (5 rounds), Master",                        magSize: 5 },
  "Blood Beam":                   { type: "One-Handed Small Arm (TL3+)", damage: "1d10 Force*",    range: "Special",properties: "Laser, Mag (8 M-cell), Special",                        magSize: 8 },
  "Brutalist Object of Power":    { type: "One-Handed Small Arm (TL3+)", damage: "Varies (Force)", range: "Varies", properties: "Mag+ (50, Special), Master. Modes: Grip/Shatter/Spin/Pierce/Charge", magSize: 50 },
  "Capacitor Plasma Pistol":      { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Fire*",      range: "70/280", properties: "Auto (1d8), Light, Mag+ (30 M-cell), Master, Mod(S/U), Plasma", magSize: 30 },
  "Charge Pistol":                { type: "One-Handed Small Arm (TL3+)", damage: "1d4 Fire*",      range: "70/280", properties: "Light, Mod(S/U), Plasma, Mag+ (Special)",               magSize: 0 },
  "Coil Pistol":                  { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Piercing*",  range: "150/600",properties: "Light, EM, Mag (10 flechettes), Mod(S/U)",              magSize: 10 },
  "Demiurge":                     { type: "One-Handed Small Arm (TL3+)", damage: "Varies",         range: "Varies", properties: "Light, Mag (60 M-cell), Master, Plasma. Modes: Revelation/Prophecy/Apocalypse", magSize: 60 },
  "Graviton":                     { type: "One-Handed Small Arm (TL3+)", damage: "1d6+6 Force",    range: "200/800",properties: "Light, Mag+ (6 M-cell), Master, Special",               magSize: 6 },
  "Lawmaker, Mark 2":             { type: "One-Handed Small Arm (TL3+)", damage: "Varies",         range: "70/280", properties: "Mag (Special), Master. Modes: Standard/AP/Incendiary/Hi-Ex/Stun", magSize: 6 },
  "Line Gun":                     { type: "One-Handed Small Arm (TL3+)", damage: "1d8 Slashing",   range: "Special",properties: "Mag (10 H-cell), Mod(S/U), Special",                    magSize: 10 },
  "Needler Pistol":               { type: "One-Handed Small Arm (TL3+)", damage: "1d4 Piercing",   range: "30/120", properties: "Mag (20 needles), Mod(S/U), Special",                   magSize: 20 },
  "Nuclear Pellet Pistol":        { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Radiant*",   range: "50/200", properties: "Light, Mag+ (15 M-cell), Master, Mod(S/U), Nuclear",   magSize: 15 },
  "Particle Magnum":              { type: "One-Handed Small Arm (TL3+)", damage: "Varies",         range: "70/280", properties: "Mag+ (6 M-cell), Nuclear. Modes: Stun/Kill/Incinerate", magSize: 6 },
  "Plasma Pistol":                { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Fire*",      range: "70/280", properties: "Light, Mag+ (15 M-cell), Master, Mod(S/U), Plasma",    magSize: 15 },
  "Pico-Positron":                { type: "One-Handed Small Arm (TL3+)", damage: "2d10 Special",   range: "70/280", properties: "Direct (2d10+10), Exp (10 ft.), Light, Mag (Special), Master, Plasma", magSize: 0 },
  "Psycho Gun":                   { type: "One-Handed Small Arm (TL3+)", damage: "1d8+8 Force",    range: "70/280", properties: "Laser, Special (6 attacks), Master, Special",          magSize: 6 },
  "Rail Pistol":                  { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Piercing*",  range: "150/600",properties: "Light, EM, Mag+ (10 flechettes), Master, Mod(S/U)",    magSize: 10 },
  "Restrainment Field":           { type: "One-Handed Small Arm (TL3+)", damage: "Special",        range: "30/120", properties: "Light, Mag (4 H-cell)",                                 magSize: 4 },
  "Smart Pistol":                 { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Piercing",   range: "30/120", properties: "Light, Master, Mag+ (10 rounds), Mod(S/U), Guided",    magSize: 10 },
  "Solid Laser Pistol":           { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Force*",     range: "70/280", properties: "Laser, Light, Mag+ (20 M-cell), Master, Mod(S/U)",     magSize: 20 },
  "Thumper Laser Pistol":         { type: "One-Handed Small Arm (TL3+)", damage: "1d6 Force*",     range: "70/280", properties: "Auto (1d8), Laser, Light, Mag+ (30 M-cell), Master, Mod(S/U)", magSize: 30 },

// ============================================================
// TWO-HANDED SMALL ARMS
// ============================================================
  // ==========================================
  // TWO-HANDED SMALL ARMS [TL0]
  // ==========================================
  "\"Apache\" Cane-Gun (Bullet)":       { type: "Two-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "80/320",  properties: "Muzzle (1 shot), Special",                              magSize: 1 },
  "\"Apache\" Cane-Gun (Shotgun)":      { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "20/80",   properties: "Muzzle (1 buck), Shotgun, Special",                      magSize: 1 },
  "Baker Rifle":                        { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "120/480", properties: "Muzzle (1 shot), Draw, Flint, FTF, Special",            magSize: 1 },
  "Balls Carbine":                      { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "90/360",  properties: "Load(6 rounds), Draw",                                  magSize: 6 },
  "Blunderbuss, Heavy":                 { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "10/40",   properties: "Muzzle (1 buck), Shotgun, Special",                      magSize: 1 },
  "Boss & Co Shotgun":                  { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "40/160",  properties: "Breech (2 shells, 12G), Shotgun",                        magSize: 2 },
  "Brunswick Rifle":                    { type: "Two-Handed Small Arm (TL0)", damage: "1d12 Piercing",  range: "120/480", properties: "Draw, FTF, Muzzle (1 shot), Perc",                      magSize: 1 },
  "Brown Bess Musket":                  { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "80/320",  properties: "Flint, FTF, Muzzle (1 shot), Special",                   magSize: 1 },
  "Burnside Carbine":                   { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "90/360",  properties: "Breech (1 shot), Draw, Perc",                           magSize: 1 },
  "Charleville Musket":                 { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "80/320",  properties: "Flint, FTF, Muzzle (1 shot), Special",                   magSize: 1 },
  "Chain Rifle":                        { type: "Two-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "50/200",  properties: "Load(50 shots), Special",                               magSize: 50 },
  "Colt Model 1878 Coach Gun":          { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "30/120",  properties: "Breech (2 shells, 12G), Double (1d12), Shotgun",         magSize: 2 },
  "Chassepot Rifle":                    { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "120/480", properties: "Breech (1 shot), Draw, Perc",                           magSize: 1 },
  "Collier Repeating Flintlock":        { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "60/240",  properties: "Cap&Ball (6 shots), Flint, Special",                     magSize: 6 },
  "Colt Ring Lever Rifle":              { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "80/320",  properties: "Cap&Ball (6 shots), Perc",                               magSize: 6 },
  "Colt Revolving Shotgun":             { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "30/120",  properties: "Cap&Ball (6 buck, 12G), Draw, Perc, Shotgun",            magSize: 6 },
  "Cook & Brother Infantry Rifle":      { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "100/400", properties: "Muzzle (1 shot), Perc, FTF, Special",                  magSize: 1 },
  "Cookson Volitional Repeater":        { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Load(12 shots), Flint, FTF, Special",                   magSize: 12 },
  "Dreyse Needle Gun":                  { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Breech (1 round), Draw",                              magSize: 1 },
  "Ferguson Rifle":                     { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "100/400", properties: "Cap&Ball (1 shot), Draw, Flint, Special",              magSize: 1 },
  "Gallagher Carbine":                  { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "90/360",  properties: "Cap&Ball (1 shot), Draw, FTF, Perc",                     magSize: 1 },
  "Girandoni Air Rifle":                { type: "Two-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "80/320",  properties: "Load(22 shots), Special",                               magSize: 22 },
  "Grappling Gun":                      { type: "Two-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "75/300",  properties: "Load(1 grapple), Grapple",                              magSize: 1 },
  "H&H Duck Gun":                       { type: "Two-Handed Small Arm (TL0)", damage: "1d12 Piercing*", range: "50/200",  properties: "Breech (1 shell, 8G), Shotgun",                          magSize: 1 },
  "Hall Rifle":                         { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Cap&Ball (1 shot), Draw, Perc",                        magSize: 1 },
  "Hawken Rifle":                       { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "150/600", properties: "Muzzle (1 shot), Draw, Flint, FTF",                    magSize: 1 },
  "Henry Repeating Rifle":              { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "100/400", properties: "Load(16 rounds), Special",                              magSize: 16 },
  "Jäger Rifle":                        { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Muzzle (1 shot), Draw, FTF",                           magSize: 1 },
  "Jonathan Browning Harmonica Rifle":  { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "150/600", properties: "Cap&Ball (4 shots), Draw, Perc",                       magSize: 4 },
  "Joslyn Carbine":                     { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "90/360",  properties: "Breech (1 round), Draw",                                magSize: 1 },
  "Kalthoff Repeater":                  { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Cap&Ball (30 shots), Flint, FTF, Special",             magSize: 30 },
  "Kentucky Long Rifle":                { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing*", range: "150/600", properties: "Muzzle (1 shot), Draw, Flint, FTF",                    magSize: 1 },
  "Lindner T.U.S.C.A.R. Rifle":         { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "80/320",  properties: "Load(9 shots), Draw, Perc, Special",                    magSize: 9 },
  "Lancaster Four-Barrel Shotgun":      { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "40/160",  properties: "Breech (4 shells, 12G), Double (1d12), Shotgun",         magSize: 4 },
  "M1841 Mississippi Rifle":            { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Mod(U), Muzzle (1 shot), Draw, Perc, Special",          magSize: 1 },
  "M1817 Common Rifle":                 { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "90/360",  properties: "Muzzle (1 shot), Draw, Flint, FTF",                    magSize: 1 },
  "Marlin \"Volcanic\" Repeater":       { type: "Two-Handed Small Arm (TL0)", damage: "1d6 Piercing",   range: "80/320",  properties: "Load(30 rounds), Draw, Special",                        magSize: 30 },
  "Martini-Henry Rifle":                { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing*", range: "120/480", properties: "Breech (1 round)",                                    magSize: 1 },
  "Maynard Carbine":                    { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "90/360",  properties: "Cap&Ball (1 shot), Perc, Special",                      magSize: 1 },
  "Nock Volley Gun (4-Barrel)":         { type: "Two-Handed Small Arm (TL0)", damage: "1d10+10 Piercing", range: "30/120", properties: "Muzzle (4 buck, 12G), Perc, Shotgun, Special",            magSize: 4 },
  "Nock Volley Gun (6-Barrel)":         { type: "Two-Handed Small Arm (TL0)", damage: "2d8+8 Piercing*", range: "30/120",  properties: "Muzzle (6 buck, 12G), Perc, Shotgun, Special",            magSize: 6 },
  "O.K. \"Godkiller\" Revolver":        { type: "Two-Handed Small Arm (TL0)", damage: "1d12 Piercing",  range: "100/400", properties: "Cap&Ball (4 shots), Draw, Special",                    magSize: 4 },
  "Perdition Flintlock Shotgun":        { type: "Two-Handed Small Arm (TL0)", damage: "1d8+8 Piercing*", range: "60/240",  properties: "Muzzle (14 buck, 12G), Double (2d8+16), Flint, Shotgun, Special", magSize: 14 },
  "P53 Enfield":                        { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "100/400", properties: "Mod(U), Muzzle (1 shot), Perc, Special",               magSize: 1 },
  "Remington Rolling Block Rifle":      { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "120/480", properties: "Cap&Ball (1 shot), Draw",                               magSize: 1 },
  "Sharps Buffalo Rifle":               { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing*", range: "150/600", properties: "Cap&Ball (1 shot), Draw, Perc, Special",               magSize: 1 },
  "Starr Carbine":                      { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "90/360",  properties: "Cap&Ball (1 shot), Draw, Perc",                        magSize: 1 },
  "Smith Carbine":                      { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "90/360",  properties: "Cap&Ball (1 shot), Draw, Perc",                        magSize: 1 },
  "Snider-Enfield":                     { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "100/400", properties: "Cap&Ball (1 round), Draw, Mod(U)",                     magSize: 1 },
  "Spencer Repeating Carbine":          { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "100/400", properties: "Load(7 rounds), Draw",                                  magSize: 7 },
  "Springfield Model 1861":             { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Mod(U), Muzzle (1 shot), FTF, Special",                magSize: 1 },
  "Trapdoor Springfield":               { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "120/480", properties: "Breech (1 rounds), Draw, Mod(U)",                      magSize: 1 },
  "Umbrella Gun":                       { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "30/120",  properties: "Breech (3 rounds), Special",                            magSize: 3 },
  "Volition Repeating Rifle":           { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Breech (15 rounds), FTF",                              magSize: 15 },
  "Vetterli M1870":                     { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "120/480", properties: "Mod(U), Load(4 rounds)",                               magSize: 4 },
  "Wesson Rifle":                       { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "100/400", properties: "Load(14 rounds)",                                      magSize: 14 },
  "Whitworth Long Rifle":               { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing",   range: "300/1200",properties: "Muzzle (1 shot), Draw, Perc",                          magSize: 1 },
  "Whitworth Rifle":                    { type: "Two-Handed Small Arm (TL0)", damage: "1d10 Piercing",  range: "150/600", properties: "Muzzle (1 shot), Draw, FTF, Sniper (+1)",              magSize: 1 },
  "Winchester Model 1866":              { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "100/400", properties: "Load(9 rounds)",                                       magSize: 9 },
  "Winchester Model 1897 Trench Gun":   { type: "Two-Handed Small Arm (TL0)", damage: "1d8 Piercing*",  range: "30/120",  properties: "Load(6 shells, 12G), Shotgun",                           magSize: 6 },

  // ==========================================
  // TWO-HANDED SMALL ARMS [TL1]
  // ==========================================
  "AK-47":                              { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "120/480", properties: "Auto (1d10), Mag (30 rounds), Mod(B/M/S/U)",           magSize: 30 },
  "AR-10":                              { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "120/480", properties: "Auto (1d10), Mag (20 rounds), Mod(B/M/S/U)",           magSize: 20 },
  "AR-15/M16":                          { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "120/480", properties: "Auto (1d8), Mag (30 rounds), Mod(B/M/S/U)",            magSize: 30 },
  "AVS-36":                             { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "120/480", properties: "Auto (1d10), Mag (15 rounds), Mod(S)",                 magSize: 15 },
  "BAR M1918A2":                        { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "200/800", properties: "Auto (1d10), Mag (40 rounds), Mod(B/M/U), Special",     magSize: 40 },
  "Benelli M4":                         { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "40/160",  properties: "Mag (7 shells, 12G), Master, Shotgun",                   magSize: 7 },
  "Burton LMR":                         { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "100/400", properties: "Auto (1d10), Mag (2x20 rounds), Special",                magSize: 40 },
  "Carl Gustaf m/45":                   { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "80/320",  properties: "Auto (1d8), Mag (35 rounds), Mod(B)",                    magSize: 35 },
  "CETME Modelo C":                     { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "120/480", properties: "Auto (1d10), Mag (20 rounds), Mod(B/M/U)",             magSize: 20 },
  "Delisle Carbine":                    { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "100/400", properties: "Load(10 rounds), Special",                             magSize: 10 },
  "Dragunov SVD":                       { type: "Two-Handed Small Arm (TL1)", damage: "1d10 Piercing",  range: "300/1200",properties: "Mag (10 rounds), Mod(B/M/S/U), Sniper (+2)",           magSize: 10 },
  "FG 42":                              { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "120/480", properties: "Auto (1d10), Mag (20 rounds), Mod(B/S/U)",             magSize: 20 },
  "FN FAL":                             { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "200/800", properties: "Auto (1d10), Mag (30 rounds), Mod(B/M/S/U)",           magSize: 30 },
  "Galil ARM":                          { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "100/400", properties: "Auto (1d10), Mag (35 rounds), Mod(B/M/S/U), Special",   magSize: 35 },
  "Garand M1":                          { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "120/480", properties: "Mod(B/S/U), Clip (8 rounds)",                          magSize: 8 },
  "Grappling Hook (TL1)":               { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Special",    range: "75/300",  properties: "Grapple, Load(1 grapple)",                              magSize: 1 },
  "Heckler & Koch HK33":                { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "120/480", properties: "Auto (1d10), Mag (30 rounds), Mod(B/M/S/U)",           magSize: 30 },
  "Heckler & Koch PSG1":                { type: "Two-Handed Small Arm (TL1)", damage: "1d10 Piercing",  range: "300/1200",properties: "Mag (20 rounds), Mod(B/M/S/U), Sniper (+2)",           magSize: 20 },
  "Johnson M1941":                      { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "100/400", properties: "Mod(B), Clip (2x 5 rounds)",                           magSize: 10 },
  "L1A1 SLR":                           { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "100/400", properties: "Mag (20 rounds), Mod(B/M/S/U)",                        magSize: 20 },
  "Lee-Enfield No.4":                   { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "120/480", properties: "Mag (10 rounds), Mod(B/S/U)",                          magSize: 10 },
  "M1 Carbine":                         { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "80/320",  properties: "Mag (15 rounds), Mod(B/S)",                            magSize: 15 },
  "M14":                                { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "100/400", properties: "Auto (1d10), Mod(B/M/S/U), Mag (20 rounds)",            magSize: 20 },
  "M4 Carbine":                         { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "300/1200",properties: "Auto (1d8), Mag (30 rounds), Mod(B/M/S/U)",            magSize: 30 },
  "M40 Sniper Rifle":                   { type: "Two-Handed Small Arm (TL1)", damage: "1d10 Piercing",  range: "400/1600",properties: "Mod(B/M/S/U), Load(5 rounds), Sniper (+3)",            magSize: 5 },
  "M79 Grenade Launcher":               { type: "Two-Handed Small Arm (TL1)", damage: "Grenade",        range: "30/120",  properties: "Grenade, Load(1 grenade)",                              magSize: 1 },
  "Marlin Model 60":                    { type: "Two-Handed Small Arm (TL1)", damage: "1d4 Piercing*",  range: "80/320",  properties: "Mod(S), Load(14 rounds)",                               magSize: 14 },
  "MAS-49":                             { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "120/480", properties: "Mag (10 rounds), Mod(S/U)",                             magSize: 10 },
  "Mosin-Nagant":                       { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "100/400", properties: "Mod(B), Clip (5 reloads)",                             magSize: 5 },
  "MP43/StG 44":                        { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "80/320",  properties: "Auto (1d10), Mag (30 rounds), Mod(B/S)",                 magSize: 30 },
  "Net Gun":                            { type: "Two-Handed Small Arm (TL1)", damage: "Special",        range: "25/100",  properties: "Load(1 Net)",                                           magSize: 1 },
  "NIVA XM1970":                        { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "120/480", properties: "Mod(B/S/U), Mag/Load(30 rounds/1 shell), Auto (1d8), Special. Recoilless: 2d8+8 Bludgeoning 150/600", magSize: 30 },
  "PPSh-41":                            { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "70/280",  properties: "Auto (1d8), Mod(B/M), Mag (40 rounds)",                  magSize: 40 },
  "RPD":                                { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "80/320",  properties: "Auto (1d10), Mod(B/M/U), Mag (100 rounds)",              magSize: 100 },
  "Ruger 10/22":                        { type: "Two-Handed Small Arm (TL1)", damage: "1d4 Piercing",   range: "80/320",  properties: "Mag (10 rounds), Mod(M/S)",                             magSize: 10 },
  "Springfield M1903":                  { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "100/400", properties: "Clip (5 rounds), Mod(S/U)",                             magSize: 5 },
  "Sten Gun":                           { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing",   range: "80/320",  properties: "Auto (1d8), FTF, Mag (30 rounds), Mod(B)",               magSize: 30 },
  "Sterling L2A3":                      { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "80/320",  properties: "Auto (1d8), Mod(B), Mag (35 rounds)",                    magSize: 35 },
  "SVT-40":                             { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "120/480", properties: "Mag (10 rounds), Mod(B/S/U)",                          magSize: 10 },
  "Thompson M1A1":                      { type: "Two-Handed Small Arm (TL1)", damage: "1d6 Piercing*",  range: "70/280",  properties: "Auto (1d8), Mag (30 rounds), Mod(B/M)",                  magSize: 30 },
  "Walther WA 2000":                    { type: "Two-Handed Small Arm (TL1)", damage: "1d10 Piercing*", range: "250/1000",properties: "Mag (6 rounds), Master, Mod(B/M/S), Sniper (+2)",       magSize: 6 },
  "Walther G43":                        { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "120/480", properties: "Mag (10 rounds), Mod(B/S/U)",                          magSize: 10 },
  "Winchester Model 1912":              { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing*",  range: "40/160",  properties: "Load(7 shells, 12G), Shotgun",                           magSize: 7 },
  "Armsel Striker/SWD Street Sweeper":  { type: "Two-Handed Small Arm (TL1)", damage: "1d8 Piercing",   range: "30/90",   properties: "Load(12 shells, 12G), Shotgun, Special",                magSize: 12 },

  // ==========================================
  // TWO-HANDED SMALL ARMS [TL2]
  // ==========================================
  "A-91 Assault Rifle":                 { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "120/480", properties: "Auto (1d8), Bull, Mag (30 rounds), Mod(B/M/S/U), Special", magSize: 30 },
  "Accuracy International AXMC":        { type: "Two-Handed Small Arm (TL2)", damage: "1d10 Piercing*", range: "400/1600",properties: "Mag (5 rounds), Master, Mod(B/M/S/U), Sniper (+2)",     magSize: 5 },
  "ADS Amphibious Rifle":               { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "100/400", properties: "Mag (20 rounds), Special",                              magSize: 20 },
  "AN-94":                              { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "150/600", properties: "Auto (1d10), Mag (30 rounds), Mod(B/M/S/U), Special",   magSize: 30 },
  "Barrett MRAD":                       { type: "Two-Handed Small Arm (TL2)", damage: "1d10 Piercing*", range: "400/1600",properties: "Mag (10 rounds), Master, Mod(B/M/S/U), Sniper (+2)",    magSize: 10 },
  "Beretta ARX-200":                    { type: "Two-Handed Small Arm (TL2)", damage: "1d10 Piercing*", range: "150/600", properties: "Auto (1d12), Mag+ (20 rounds), Mod(B/M/S/U), Special", magSize: 20 },
  "B&T APC308":                         { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "150/600", properties: "Auto (1d10), Mod(B/M/S/U), Load(25 rounds)",            magSize: 25 },
  "Bushmaster ACR":                     { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "120/480", properties: "Auto (1d8), Mag+ (30 rounds), Mod(B/M/S/U)",            magSize: 30 },
  "Calico Carbine":                     { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "100/400", properties: "Auto (1d8), Mag (100 rounds), Mod(S/U)",               magSize: 100 },
  "Desert Tech MDRX":                   { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "150/600", properties: "Auto (1d10), Bull, Mag+ (20 rounds), Mod(B/M/S/U)",     magSize: 20 },
  "Dragon Thrower":                     { type: "Two-Handed Small Arm (TL2)", damage: "2d6 Fire",       range: "Special", properties: "Mag (10 units), Special",                              magSize: 10 },
  "FN SCAR-L":                          { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "300/1200",properties: "Auto (1d8), Mag+ (30 rounds), Mod(B/M/S/U)",            magSize: 30 },
  "FN SCAR 20S":                        { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "300/1200",properties: "Mag (10 rounds), Mod(B/M/S/U), Sniper (+2)",           magSize: 10 },
  "Gyrojet Automatic":                  { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "200/800", properties: "Auto (1d10), Gyro, Mag (30 microjets)",                magSize: 30 },
  "Gyrojet Carbine":                    { type: "Two-Handed Small Arm (TL2)", damage: "1d10 Piercing",  range: "200/800", properties: "Load(7 microjets), Gyro",                              magSize: 7 },
  "Heckler & Koch G11":                 { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "120/480", properties: "Auto (1d8), Mag (45 caseless), Master, Mod(S), Special",magSize: 45 },
  "Heckler & Koch HK433":               { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "120/480", properties: "Auto (1d8), Mag+ (30 rounds), Mod(B/M/S/U)",            magSize: 30 },
  "IWI Tavor 7":                        { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "150/600", properties: "Auto (1d8), Auto-Heavy (1d10), Bull, Mag+ (20 rounds), Mod(B/M/S/U), Special", magSize: 20 },
  "IWI US Carmel":                      { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "120/480", properties: "Auto (1d8), Auto-Heavy (1d10), Bull, Mag+ (20 rounds), Mod(B/M/S/U), Special", magSize: 20 },
  "KAC SR-25":                          { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "300/1200",properties: "Mag (20 rounds), Master, Mod(B/M/S/U), Sniper (+2)",     magSize: 20 },
  "Kel-Tec RDB":                        { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "120/480", properties: "Bull, Mag (20 rounds), Mod(B/M/S/U)",                 magSize: 20 },
  "Knight's Armament LAMG":             { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "150/600", properties: "Auto (1d10), Feed(200 rounds), Master, Mod(B/M/S/U)",   magSize: 200 },
  "KS7 Gen2":                           { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "40/160",  properties: "Bull, Mod(S/U), Load(7 shells, 12G), Shotgun",        magSize: 7 },
  "LSAT Light Machine Gun":             { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "150/600", properties: "Auto (1d10), Feed(150 rounds), Mod(B/M/U)",             magSize: 150 },
  "McMillan TAC-338":                   { type: "Two-Handed Small Arm (TL2)", damage: "1d10 Piercing",  range: "400/1600",properties: "Master, Mag (5 rounds), Mod(B/M/S), Sniper (+2)",     magSize: 5 },
  "Neopup PAW-20":                      { type: "Two-Handed Small Arm (TL2)", damage: "Grenade",        range: "100/400", properties: "Load(6 rounds), Mod(M/S/U)",                            magSize: 6 },
  "PAPOP":                              { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "150/600", properties: "Auto (1d8), Mag (30 rounds), Special",                 magSize: 30 },
  "Q Honey Badger SD":                  { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "100/400", properties: "Auto (1d8), Mag (30 rounds), Mod(B/M/S/U)",            magSize: 30 },
  "Robinson Armament XCR-L":            { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "150/600", properties: "Auto (1d10), Auto-Heavy (1d12), Mag+ (20 rounds), Mod(B/M/S/U), Special", magSize: 20 },
  "Saritch-308":                        { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "150/600", properties: "Bullpup, Mag (10 rounds), Mod(B/M/S/U)",               magSize: 10 },
  "Sig Sauer MCX Spear (XM5)":          { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "150/600", properties: "Auto (1d10), Mag+ (20 rounds), Master, Mod(B/M/S/U)",  magSize: 20 },
  "SRM 1216":                           { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing*",  range: "40/160",  properties: "Mag (16 shells, 12G), Mod(B/S), Shotgun",              magSize: 16 },
  "Steyr AUG A3":                       { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "120/480", properties: "Auto (1d8), Bull, Mag (30 rounds), Mod(B/M/S/U)",      magSize: 30 },
  "TDI-KRISS Vector":                   { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing*",  range: "100/400", properties: "Auto (1d8), Mag+ (30 rounds), Mod(B/M/S/U), Special",   magSize: 30 },
  "Tracking Point M900":                { type: "Two-Handed Small Arm (TL2)", damage: "1d12 Piercing",  range: "400/1600",properties: "Mag (5 rounds), Master, Mod(B/M/S), Sniper (+3), Special", magSize: 5 },
  "VHS-2 (Hellion)":                    { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "120/480", properties: "Auto (1d8), Bull, Mag+ (30 rounds), Mod(B/M/S/U)",     magSize: 30 },
  "Zastava M91":                        { type: "Two-Handed Small Arm (TL2)", damage: "1d10 Piercing",  range: "300/1200",properties: "Mag (10 rounds), Mod(B/M/S/U), Sniper (+2)",           magSize: 10 },
  "10mm HV Penetrator":                 { type: "Two-Handed Small Arm (TL2)", damage: "1d8 Piercing",   range: "150/600", properties: "AP, Auto (1d10), Mag (25 needles), Mod(S/U), Sniper (+1), Special", magSize: 25 },
  "Accelerator Rifle":                  { type: "Two-Handed Small Arm (TL2)", damage: "1d6 Piercing",   range: "300/1200",properties: "Auto (Special), Bull, Mag+ (100 rounds), Master, Mod(S/U)", magSize: 100 },
  "Taser Carbine":                      { type: "Two-Handed Small Arm (TL2)", damage: "Special",        range: "50/200",  properties: "Mag (10 M-cell), Special",                              magSize: 10 },

  // ==========================================
  // TWO-HANDED SMALL ARMS [TL3+]
  // ==========================================
  "XM-25":                              { type: "Two-Handed Small Arm (TL3)", damage: "Grenade",        range: "150/600", properties: "Grenade, Mag (6 rounds), Special",                     magSize: 6 },
  "Condensed Matter Rifle":             { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Radiant*",  range: "500/2000",properties: "Mag (10 M-cell), Master, Mod(M/S/U), Nuclear, Sniper (+2)", magSize: 10 },
  "Crvena Zastava Nosle M22":           { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Piercing*",  range: "300/1200",properties: "Auto (1d10), Bull, Mag+ (50 rounds), Mod(B/M/S/U), Special", magSize: 50 },
  "Cyclotron Rifle":                    { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Radiant*",   range: "200/800", properties: "Bull, Nuclear, Mag+ (20 M-cell), Mod(M)",               magSize: 20 },
  "Electronic Burst Rifle":             { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Piercing",   range: "120/480", properties: "Auto (1d10), Mag (30 caseless), Mod(B/M/S/U), Special", magSize: 30 },
  "Electronic Pulse Rifle":             { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Piercing",   range: "100/400", properties: "Auto (1d10), Mag (100 caseless), Mod(B/S/U), Special", magSize: 100 },
  "Electronic Scout Rifle":             { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Piercing",  range: "150/600", properties: "Mod(B/M/S/U), Mag (20 caseless), Mod(B, U), Sniper (+1), Special", magSize: 20 },
  "Electronic Smart Rifle":             { type: "Two-Handed Small Arm (TL3)", damage: "1d6 Piercing",   range: "100/400", properties: "Auto-Heavy (1d10), Mag (400 caseless), Mod(B, S), Special", magSize: 400 },
  "Hades Incinerator":                  { type: "Two-Handed Small Arm (TL3)", damage: "2d6 Fire",       range: "Special", properties: "Mag (10 fuel units), Mod(M)",                          magSize: 10 },
  "Ion Rifle":                          { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Lightning*", range: "50/200",  properties: "Mag+ (20 M-cell), Mod(M/S/U), Pincher",                  magSize: 20 },
  "Light Coilgun":                      { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Piercing*",  range: "300/1200",properties: "EM, Mag (16 flechettes), Master, Mod(B/M/S/U)",         magSize: 16 },
  "Metalstorm Rifle":                   { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Piercing",   range: "80/320",  properties: "Auto (Auto 1d10, Auto-Heavy 2d6), Mag (80 rounds), Mod(U)", magSize: 80 },
  "Nuclear Imploding Rifle":            { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Radiant*",   range: "200/800", properties: "Auto (1d10), Mag+ (60 M-cell), Master, Mod(M/U), Nuclear", magSize: 60 },
  "Solid Slug":                         { type: "Two-Handed Small Arm (TL3)", damage: "1d8+8 Piercing", range: "50/200",  properties: "EM",                                                    magSize: 0 },
  "Sniper Cannon":                      { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Piercing",  range: "200/800", properties: "EM, Sniper (+2)",                                       magSize: 0 },
  "Sonic Shotgun":                      { type: "Two-Handed Small Arm (TL3)", damage: "Special",        range: "30/90",   properties: "Mag (5 M-cell), Special",                               magSize: 5 },
  "Sonic Focus Rifle":                  { type: "Two-Handed Small Arm (TL3)", damage: "1d8 Thunder",    range: "50/200",  properties: "Mag+ (20 M-cell), Mod(M), Sonic",                       magSize: 20 },
  "Sonic Stunner":                      { type: "Two-Handed Small Arm (TL3)", damage: "Special",        range: "50/200",  properties: "Mag (5 M-cell), Special",                               magSize: 5 },
  "SPP Rifle":                          { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Piercing",  range: "150/600", properties: "Guided, Gyro, Mag (20 micromissiles), Mod(M/S/U)",     magSize: 20 },
  "SPP Sensor Gun":                     { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Piercing",  range: "300/1200",properties: "Guided, Gyro, Mag (10 micromissiles), Mod(M/S/U)",     magSize: 10 },
  "SPP Vortex":                         { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Piercing",  range: "200/800", properties: "Auto (1d12), Mag (70 micromissiles), Mod(M/S/U), Guided, Gyro, Special", magSize: 70 },
  "Watson Machine Shotgun":             { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Piercing*", range: "40/160",  properties: "Auto (1d12), Mag (20 shells, 10G), Mod(M), Shotgun",    magSize: 20 },
  "Anti-Material Electric Driver":      { type: "Two-Handed Small Arm (TL4)", damage: "1d10 Plasma*",  range: "500/2000",properties: "Master, Mod(M/S/U), Plasma, Load(6 M-cell), Sniper (+3)", magSize: 6 },
  "Disruptor":                          { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Radiant",    range: "50/200",  properties: "Mag (10 M-cell), Master, Mod(M/S/U), Nuclear, Special",  magSize: 10 },
  "Endothermic Rifle":                  { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Cold*",      range: "150/600", properties: "Mag (20 M-cell), Mod(M), Special",                      magSize: 20 },
  "Field Manipulator":                  { type: "Two-Handed Small Arm (TL4)", damage: "Special",        range: "50/200",  properties: "Mag (Special), Special",                                magSize: 0 },
  "Gauss Repeater":                     { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Piercing*",  range: "400/1600",properties: "Auto (1d10), Bull, EM, Mag+ (60 flechettes), Master, Mod(B/M/S/U)", magSize: 60 },
  "Gravity Beam":                       { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Force*",     range: "200/800", properties: "Laser, Mag+ (20 M-cell), Mod(M/S/U), Special",          magSize: 20 },
  "Portable Railgun":                   { type: "Two-Handed Small Arm (TL4)", damage: "1d10 Piercing*", range: "400/1600",properties: "EM, Mag (16 flechettes), Master, Mod(B/M/S/U)",         magSize: 16 },
  "Saint Elmo's Rifle":                 { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Lightning",  range: "100/400", properties: "Direct (2d8), Exp (5 ft.), Mag (10 M-cell), Mod(M/S/U), Pincher", magSize: 10 },
  "Solid Laser Rifle":                  { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Force*",     range: "150/600", properties: "Laser, Master, Mag+ (20 M-cell), Mod(M)",               magSize: 20 },
  "Thunderbolt":                        { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Lightning*", range: "100/400", properties: "Mag+ (10 M-cell), Master, Mod(M/S/U), Pincher, Special", magSize: 10 },
  "Ultimate Sniper Rifle":              { type: "Two-Handed Small Arm (TL4)", damage: "1d10 Piercing*", range: "600/2400",properties: "EM, Mag (5 flechettes), Master, Mod(M/S/U), Sniper (+3)",magSize: 5 },
  "X-Beam":                             { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Lightning",  range: "200/800", properties: "Mag+ (20 M-cell), Master, Special",                     magSize: 20 },
  "ZF-X Pod":                           { type: "Two-Handed Small Arm (TL4)", damage: "Special",        range: "Special", properties: "Mag (Special), Master, Special",                        magSize: 0 },
  "Particle Beam (ZF-X Pod)":           { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Force",      range: "200/800", properties: "Auto (1d10)/Auto-Heavy (1d12), Mag(3,000 1 H-cell)",   magSize: 3000 },
  "Mini Rocket (ZF-X Pod)":             { type: "Two-Handed Small Arm (TL4)", damage: "4d10 Bludgeoning",range: "300/1200",properties: "Direct (8d10), Exp (5 ft.), Load(1 rocket)",          magSize: 1 },
  "Poison Arrow Volley (ZF-X Pod)":     { type: "Two-Handed Small Arm (TL4)", damage: "1d6 Piercing + 2d6 Poison", range: "50/200", properties: "Load(10 arrows), Special",               magSize: 10 },
  "Net Launcher (ZF-X Pod)":            { type: "Two-Handed Small Arm (TL4)", damage: "Special",        range: "30/120",  properties: "Load(1 net), Special",                                  magSize: 1 },
  "Flamethrower (ZF-X Pod)":            { type: "Two-Handed Small Arm (TL4)", damage: "2d8 Fire",       range: "Special", properties: "Special",                                               magSize: 0 },
  "Cryo-Beam (ZF-X Pod)":               { type: "Two-Handed Small Arm (TL4)", damage: "2d8 Cold",       range: "Special", properties: "Special",                                               magSize: 0 },
  "ChemRail":                           { type: "Two-Handed Small Arm (TL5)", damage: "2d10 Piercing*", range: "400/1600",properties: "AP+, Auto (3d8), EM, Mag (40 flechettes), Master, Special", magSize: 40 },
  "Directed Energy Rifle":              { type: "Two-Handed Small Arm (TL5)", damage: "1d8 Fire*",      range: "300/1200",properties: "Auto (1d10), Mag+ (60 M-cell), Master, Mod(B/M/S/U), Plasma", magSize: 60 },
  "Displacement Device":                { type: "Two-Handed Small Arm (TL5)", damage: "1d6 Fire*",      range: "50/200",  properties: "Mag (8 M-cell), Mod(M), Plasma, Special",               magSize: 8 },
  "M-25 Phased Plasma Pulse Gun":       { type: "Two-Handed Small Arm (TL5)", damage: "1d8 Fire*",      range: "150/600", properties: "AP, Mag+ (30 M-cell), Master, Mod(M/S/U), Plasma",     magSize: 30 },
  "Shift-Energy Modulator":             { type: "Two-Handed Small Arm (TL5)", damage: "Special",        range: "Varies",  properties: "Mag (80 H-cell), Special",                              magSize: 80 },
  "Plasma Repeater (Shift-Energy)":     { type: "Two-Handed Small Arm (TL5)", damage: "1d6 Fire",       range: "150/600", properties: "Auto (1d8), Plasma",                                   magSize: 80 },
  "Shock Blaster (Shift-Energy)":       { type: "Two-Handed Small Arm (TL5)", damage: "1d8 Fire",       range: "30/90",   properties: "Plasma, Shotgun",                                       magSize: 80 },
  "Electro Mortar (Shift-Energy)":      { type: "Two-Handed Small Arm (TL5)", damage: "2d6+6 Radiant",  range: "50/200",  properties: "Direct (4d6+6), Exp (5 ft.), Plasma",                   magSize: 80 },
  "Electro-Volt (Shift-Energy)":        { type: "Two-Handed Small Arm (TL5)", damage: "1d10 Fire",      range: "200/800", properties: "Plasma, Sniper (+2)",                                   magSize: 80 },
  "Shift-Nano Modulator":               { type: "Two-Handed Small Arm (TL5)", damage: "Special",        range: "Varies",  properties: "Mag (100 rounds), Special",                             magSize: 100 },
  "Assault Rifle (Shift-Nano)":         { type: "Two-Handed Small Arm (TL5)", damage: "1d8 Piercing",   range: "200/800", properties: "Auto (1d10), EM",                                       magSize: 100 },
  "Combat Shotgun (Shift-Nano)":        { type: "Two-Handed Small Arm (TL5)", damage: "1d10 Piercing",  range: "40/160",  properties: "EM, Shotgun",                                           magSize: 100 },
  "Thumper Laser Rifle":                { type: "Two-Handed Small Arm (TL5)", damage: "1d8 Force",      range: "150/600", properties: "Auto (1d10), Laser, Mag+ (30 M-cell), Master, Mod(M/S/U)", magSize: 30 },
  "Vapour Rifle":                       { type: "Two-Handed Small Arm (TL5)", damage: "2d6 Fire",       range: "200/800", properties: "Mag+ (5 M-cell), Master, Plasma, Special",              magSize: 5 }, 
  "Watson Machine Shotgun":             { type: "Two-Handed Small Arm (TL3)", damage: "1d10 Piercing*", range: "40/160",  properties: "Auto (1d12), Mag (20 shells, 10G), Mod(M), Shotgun",    magSize: 20 },
  "X-Beam":                             { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Lightning",  range: "200/800", properties: "Mag+ (20 M-cell), Master, Special",                     magSize: 20 },
  "ZF-X Pod":                           { type: "Two-Handed Small Arm (TL4)", damage: "Special",        range: "Special", properties: "Mag (Special), Master, Special",                        magSize: 0 },
  "Particle Beam (ZF-X Pod)":           { type: "Two-Handed Small Arm (TL4)", damage: "1d8 Force",      range: "200/800", properties: "Auto (1d10)/Auto-Heavy (1d12), Mag(3,000 1 H-cell)",   magSize: 3000 },
  "Mini Rocket (ZF-X Pod)":             { type: "Two-Handed Small Arm (TL4)", damage: "4d10 Bludgeoning", range: "300/1200", properties: "Direct (8d10), Exp (5 ft.), Load(1 rocket)",         magSize: 1 },
  "Poison Arrow Volley (ZF-X Pod)":     { type: "Two-Handed Small Arm (TL4)", damage: "1d6 Piercing + 2d6 Poison", range: "50/200", properties: "Load(10 arrows), Special",               magSize: 10 },
  "Net Launcher (ZF-X Pod)":            { type: "Two-Handed Small Arm (TL4)", damage: "Special",        range: "30/120",  properties: "Load(1 net), Special",                                  magSize: 1 },
  "Flamethrower (ZF-X Pod)":            { type: "Two-Handed Small Arm (TL4)", damage: "2d8 Fire",       range: "Special", properties: "Special",                                               magSize: 0 },
  "Cryo-Beam (ZF-X Pod)":               { type: "Two-Handed Small Arm (TL4)", damage: "2d8 Cold",       range: "Special", properties: "Special",                                               magSize: 0 },

  // ==========================================
  // HEAVY WEAPONS [TL0]
  // ==========================================
  "Blunderbuss, 2 Bore":              { type: "Heavy Weapon (TL0)", damage: "2d8+16 Piercing",   range: "30/120",   properties: "Heavy, Muzzle (1 buck), Shotgun, Special",                     magSize: 1 },
  "Blunderbuss, 4-Barreled":          { type: "Heavy Weapon (TL0)", damage: "2d8+16 Piercing",   range: "30/120",   properties: "Heavy, Loading, Muzzle (4 buck), Shotgun, Special",            magSize: 4 },
  "Crankgun":                         { type: "Heavy Weapon (TL0)", damage: "1d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (1d12), Feed, Heavy, FTF, Special",                 magSize: 0 },
  "Double Deck Street Howitzer":      { type: "Heavy Weapon (TL0)", damage: "1d12 Piercing*",    range: "50/200",   properties: "Breech (2 shells, 8G), Double (2d10), Heavy, Shotgun, Special", magSize: 2 },
  "Puckle Gun":                       { type: "Heavy Weapon (TL0)", damage: "1d12 Piercing",     range: "100/400",  properties: "Breech (9 shots), Heavy, Flint, Load(9 shots)",                magSize: 9 },
  "Ribauldequin (Organ Gun)":         { type: "Heavy Weapon (TL0)", damage: "2d8 Piercing",      range: "50/200",   properties: "Breech (24 shots), Heavy, Load, Special",                     magSize: 24 },
  "Stopping Rifle (2-Bore)":          { type: "Heavy Weapon (TL0)", damage: "2d8+16 Piercing",   range: "200/800",  properties: "Muzzle (1 shot), Heavy, Draw, Perc",                           magSize: 1 },
  "Wall Gun (Amusette)":              { type: "Heavy Weapon (TL0)", damage: "2d8 Piercing",      range: "200/800",  properties: "Draw, Flint, Heavy, Muzzle (1 shot)",                          magSize: 1 },

  // ==========================================
  // HEAVY WEAPONS [TL1]
  // ==========================================
  ".700 Nitro Express Elephant Gun":  { type: "Heavy Weapon (TL1)", damage: "1d12+12 Piercing",  range: "200/800",  properties: "Breech (2 rounds), Double (2d10+20), Heavy, Master, Special", magSize: 2 },
  "Bazooka M9A1":                     { type: "Heavy Weapon (TL1)", damage: "1d12+12 Bludgeoning", range: "300/1200", properties: "Direct (2d12+24), Exp (5 ft.), Heavy, Load(1 rocket), Rocket", magSize: 1 },
  "Browning M2HB .50 Cal":            { type: "Heavy Weapon (TL1)", damage: "1d12 Piercing",     range: "300/1200", properties: "Auto-Heavy (2d8), Feed, Heavy, Mod(M/U)",                     magSize: 0 },
  "Carl Gustaf M2":                   { type: "Heavy Weapon (TL1)", damage: "1d12+12 Bludgeoning", range: "200/800",  properties: "Direct (2d12+24), Exp (10 ft.), Heavy, Load(1 rocket)",       magSize: 1 },
  "Degtyaryov DP-27":                 { type: "Heavy Weapon (TL1)", damage: "1d10 Piercing",     range: "150/600",  properties: "Auto (1d12), Mag (50 rounds), Heavy",                         magSize: 50 },
  "FG 42 (Type 1)":                   { type: "Heavy Weapon (TL1)", damage: "1d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (1d12), Heavy, Mag (20 rounds), Heavy, Mod(M/U)",  magSize: 20 },
  "Flammenwerfer 35":                 { type: "Heavy Weapon (TL1)", damage: "2d8 Fire",          range: "Special",  properties: "Mag (20 units), Heavy, Special",                              magSize: 20 },
  "Grappling Gun (Heavy)":            { type: "Heavy Weapon (TL1)", damage: "1d8 Special",       range: "75/300",   properties: "Grapple, Heavy, Load(1 grapple)",                             magSize: 1 },
  "M20 Super Bazooka":                { type: "Heavy Weapon (TL1)", damage: "2d8+16 Bludgeoning", range: "400/1600", properties: "AP, Direct (4d8+32), Exp (5 ft.), Heavy, Load(1 rocket), Rocket", magSize: 1 },
  "M60 Machine Gun":                  { type: "Heavy Weapon (TL1)", damage: "1d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (1d12), Feed, Heavy, Mod(M/U)",                    magSize: 0 },
  "MG 34":                            { type: "Heavy Weapon (TL1)", damage: "1d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (1d12), Mag (50 rounds), Heavy, Mod(U)",           magSize: 50 },
  "PIAT":                             { type: "Heavy Weapon (TL1)", damage: "1d12+12 Bludgeoning", range: "115/460",  properties: "AP, Direct (2d12+24), Exp (5 ft.), Heavy, Load(1 rocket), Mod(U), Rocket", magSize: 1 },
  "RPG-7":                            { type: "Heavy Weapon (TL1)", damage: "2d8+16 Bludgeoning", range: "400/1600", properties: "Direct (4d8+32), Exp (5 ft.), Heavy, Load(1 rocket), Rocket", magSize: 1 },
  "Type 99 LMG":                      { type: "Heavy Weapon (TL1)", damage: "1d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (1d12), Mag (30 rounds), Heavy, Mod(M/U)",         magSize: 30 },
  "ZB vz. 26":                        { type: "Heavy Weapon (TL1)", damage: "1d10 Piercing",     range: "200/800",  properties: "Auto (1d12), Mag (20 rounds), Heavy, Mod(M/U)",               magSize: 20 },

  // ==========================================
  // HEAVY WEAPONS [TL2]
  // ==========================================
  "Barrett M82A1":                    { type: "Heavy Weapon (TL2)", damage: "2d8 Piercing",      range: "400/1600", properties: "Heavy, Mag (5 rounds), Sniper (+2), Mod(B/M/S/U)",            magSize: 5 },
  "FN EVOLYS":                        { type: "Heavy Weapon (TL2)", damage: "1d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (1d12), Feed, Heavy, Mod(B/M/S/U)",                magSize: 0 },
  "FGM-148 Javelin":                  { type: "Heavy Weapon (TL2)", damage: "2d10+20 Bludgeoning", range: "500/2000", properties: "AP, Direct (4d10+40), Exp (10 ft.), Guided, Heavy, Load(1 missile), Rocket, Sniper (+2), Special", magSize: 1 },
  "GAU-19/B":                         { type: "Heavy Weapon (TL2)", damage: "1d10+10 Piercing",  range: "300/1200", properties: "Auto-Heavy (2d8+16), Feed, Heavy, Mod(M/U), Special",         magSize: 0 },
  "Hawk MM1 Grenade Launcher":        { type: "Heavy Weapon (TL2)", damage: "Grenade",           range: "100/400",  properties: "Load(12 grenades), Heavy, Special",                          magSize: 12 },
  "HK GMG":                           { type: "Heavy Weapon (TL2)", damage: "1d12+12 Bludgeoning", range: "150/600",  properties: "Auto (2d8+16), Direct (2d8+24), Exp (5 ft.), Feed(30 grenades), Heavy, Mod(U), Special", magSize: 30 },
  "Mk 153 SMAW":                      { type: "Heavy Weapon (TL2)", damage: "2d8+16 Bludgeoning", range: "300/1200", properties: "Direct (4d8+32), Exp (5 ft.), Guided, Heavy, Load(missile), Mod(B/S), Rocket", magSize: 1 },
  "M240L":                            { type: "Heavy Weapon (TL2)", damage: "1d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (1d12), Feed, Heavy, Mod(M/U)",                    magSize: 0 },
  "Mk 19 Mod 3":                      { type: "Heavy Weapon (TL2)", damage: "Grenade",           range: "200/800",  properties: "Feed(35 grenades), Heavy",                                   magSize: 35 },
  "Panzerfaust 3":                    { type: "Heavy Weapon (TL2)", damage: "2d10+20 Bludgeoning", range: "300/1200", properties: "Direct (4d10+40), Exp (5 ft.), Heavy, Load(1 rocket), Rocket", magSize: 1 },
  "Saab AT4 CS":                      { type: "Heavy Weapon (TL2)", damage: "2d8+16 Bludgeoning", range: "150/600",  properties: "Direct (4d8+32), Exp (10 ft.), Guided, Heavy, Rocket, Special", magSize: 1 },
  "Sig Sauer MG 338":                 { type: "Heavy Weapon (TL2)", damage: "1d10 Piercing",     range: "300/1200", properties: "Auto (1d12), Feed(50 rounds), Heavy, Mod(M/S/U)",             magSize: 50 },
  "XM214 Microgun":                   { type: "Heavy Weapon (TL2)", damage: "1d12 Piercing",     range: "300/1200", properties: "Auto-Heavy (2d8), Feed, Heavy, Mod(M/U), Special",            magSize: 0 },
  "XM312":                            { type: "Heavy Weapon (TL2)", damage: "1d12 Piercing",     range: "300/1200", properties: "Auto (2d8), Feed, Heavy, Mod(M/S/U)",                         magSize: 0 },

  // ==========================================
  // HEAVY WEAPONS [TL3+]
  // ==========================================
  "AMR-B21 ARC Gun":                  { type: "Heavy Weapon (TL5)", damage: "3d8 Lightning",     range: "150/600",  properties: "Master, Pincher, Mag (10 H-cell), Heavy, Special",            magSize: 10 },
  "Atomizer":                         { type: "Heavy Weapon (TL4)", damage: "2d8 Radiant",       range: "300/1200", properties: "Heavy, Mag (5 M-cell), Heavy, Master, Mod(M/S/U), Nuclear, Sniper (+2), Special", magSize: 5 },
  "BFG-X":                            { type: "Heavy Weapon (TL5)", damage: "3d10+30 Force",     range: "300/1200", properties: "Direct (6d10+60), Exp (Special), Heavy, Mag (10 H-cell), Master", magSize: 10 },
  "Blade Launcher":                   { type: "Heavy Weapon (TL4)", damage: "1d10 Slashing",     range: "50/400",   properties: "EM, Heavy, Mag (10 blades), Mod(M/S/U), Special",             magSize: 10 },
  "Cobra Assault Cannon":             { type: "Heavy Weapon (TL3)", damage: "2d8+16 Bludgeoning", range: "300/1200", properties: "AP, Direct (4d8+32), Exp (10 ft.), Heavy, Mag (6 rounds), Master, Special", magSize: 6 },
  "Coil Light Gun":                   { type: "Heavy Weapon (TL3)", damage: "1d10 Piercing",     range: "300/1200", properties: "AP, Auto-Heavy (2d8), Heavy, EM, Mag (40 flechettes), Master, Mod(M/S/U)", magSize: 40 },
  "Cryo Projector":                   { type: "Heavy Weapon (TL4)", damage: "2d8 Cold",          range: "Special",  properties: "Heavy, Mag (15 rounds), Master, Mod(U), Special",             magSize: 15 },
  "Death Ray":                        { type: "Heavy Weapon (TL4)", damage: "1d12 Lightning",    range: "200/800",  properties: "Heavy, Mag (20 H-cell), Master, Mod(M/S/U), Pincher, Special", magSize: 20 },
  "Gravity Hammer":                   { type: "Heavy Weapon (TL5)", damage: "2d10 Force",        range: "50/200",   properties: "Direct (4d10+10), Exp (20 ft.), Heavy, Mag (10 H-cell), Mod(M/U), Special", magSize: 10 },
  "Ion Cannon":                       { type: "Heavy Weapon (TL3)", damage: "1d10 Lightning",    range: "200/800",  properties: "Heavy, Mag (40 H-cell), Mod(M/S/U), Pincher",                  magSize: 40 },
  "Linear Collider":                  { type: "Heavy Weapon (TL3)", damage: "1d10 Radiant",      range: "200/800",  properties: "Auto-Heavy (2d8), Heavy, Mag (100 H-cell), Master, Mod(M/U), Nuclear", magSize: 100 },
  "Medved Heavy Shotgun":             { type: "Heavy Weapon (TL3)", damage: "1d12 Piercing*",    range: "40/160",   properties: "Auto (2d8), Heavy, Master, Mod(M/S/U), Load(12 shells, 8G), Shotgun", magSize: 12 },
  "Micromissile Launcher":            { type: "Heavy Weapon (TL3)", damage: "1d8 Piercing",      range: "300/1200", properties: "Heavy, Guided, Gyro, Heavy, Mag (30 missiles)",               magSize: 30 },
  "Magnetic Accelerator Cannon":      { type: "Heavy Weapon (TL5)", damage: "2d8+16 Piercing",   range: "1000/4000",properties: "AP+, Heavy, Load(1 flechette), EM, Master, Sniper (+4)",      magSize: 1 },
  "Monkey Missile Launcher":          { type: "Heavy Weapon (TL4)", damage: "1d6+6 Bludgeoning", range: "200/800",  properties: "Guided, Heavy, Mag (25 missiles), Rocket, Special",           magSize: 25 },
  "MX \"Little Boy\" Launcher":       { type: "Heavy Weapon (TL5)", damage: "6d12+72 Radiant",   range: "5000/20000",properties: "Direct (12d12+144), Exp (200 ft.), Heavy, Load(1 mini-nuke), Nuclear, Rocket, Special", magSize: 1 },
  "Nuclear Particle Lance":           { type: "Heavy Weapon (TL3)", damage: "2d8 Radiant",       range: "300/1200", properties: "Heavy, Master, Mag (30 H-cell), Mod(M/S/U), Nuclear",          magSize: 30 },
  "Plasma Railgun":                   { type: "Heavy Weapon (TL5)", damage: "3d8 Piercing",      range: "500/2000", properties: "AP+, Heavy, Load(1 flechette), Master, Mod(M/S/U), Plasma, Sniper (+3)", magSize: 1 },
  "Proton Wand":                      { type: "Heavy Weapon (TL3)", damage: "1d8 Radiant",       range: "25/150",   properties: "Heavy, Nuclear, Special",                                     magSize: 0 },
  "Pulse Minigun":                    { type: "Heavy Weapon (TL5)", damage: "1d12 Fire",         range: "200/8000", properties: "Auto-Heavy (3d8), Heavy, Mag (400 2xH-cell), Mod(M/U), Plasma, Special", magSize: 400 },
  "Q56 Electric Smartgun":            { type: "Heavy Weapon (TL3)", damage: "1d10 Piercing",     range: "300/1200", properties: "Auto-Heavy (2d8), Heavy, Feed(400 caseless), Special",        magSize: 400 },
  "Q95 Grenade Launcher":             { type: "Heavy Weapon (TL3)", damage: "Grenade",           range: "150/600",  properties: "Heavy, Mag (24 grenades)",                                    magSize: 24 },
  "Railcannon":                       { type: "Heavy Weapon (TL4)", damage: "1d10 Piercing",     range: "300/1200", properties: "Auto-Heavy (2d8), Heavy, EM, Mag (120 flechettes), Master, Mod(M/S/U)", magSize: 120 },
  "Rocket Launcher, Mk2":             { type: "Heavy Weapon (TL3)", damage: "1d12+12 Bludgeoning", range: "500/2000", properties: "AP, Direct (2d12+24), Exp (10 ft.), Guided, Heavy, Rocket, Special", magSize: 1 },
  "Solid Laser Cannon":               { type: "Heavy Weapon (TL4)", damage: "1d12 Force",        range: "250/1000", properties: "Heavy, Laser, Mag (30 H-cell), Master",                       magSize: 30 },
  "Sonic Devastator":                 { type: "Heavy Weapon (TL5)", damage: "1d12 Thunder",      range: "70/280",   properties: "Heavy, Mag (40 H-cell), Master, Sonic",                       magSize: 40 },
  "Spartan Laser":                    { type: "Heavy Weapon (TL5)", damage: "2d10+20 Force",     range: "300/1200", properties: "Heavy, Laser, Mag (10 H-Cell), Master, Special",              magSize: 10 },
  "Spike Launcher":                   { type: "Heavy Weapon (TL4)", damage: "2d8 Piercing",      range: "100/400",  properties: "AP, Heavy, EM, Mag (10 needles), Mod(U), Special",            magSize: 10 },
  "SPIW 2020 \"Penetrator\"":         { type: "Heavy Weapon (TL3)", damage: "2d8+16 Piercing",   range: "200/800",  properties: "AP+, EM, Heavy, Mag (10 flechettes), Master, Special",        magSize: 10 },
  "Thor Cannon":                      { type: "Heavy Weapon (TL5)", damage: "1d8 Radiant",       range: "300/1200", properties: "Heavy, Master, Nuclear, Load(Special)",                       magSize: 0 },
  "Thumper Laser Cannon":             { type: "Heavy Weapon (TL5)", damage: "1d10 Force",        range: "250/1000", properties: "Auto-Heavy (2d8), Heavy, Laser, Mag (200 2x H-cell), Master", magSize: 200 },
  "Volcan Heavy Plasma":              { type: "Heavy Weapon (TL4)", damage: "1d10 Fire",         range: "200/800",  properties: "Auto-Heavy (2d8), Heavy, Mag (100 H-cell), Master, Plasma",   magSize: 100 },
  "Watson \"Triple-Threat\"":         { type: "Heavy Weapon (TL3)", damage: "1d10 Piercing*",    range: "30/90",    properties: "Auto-Heavy (2d8), Heavy, Mag, Mod(M/S/U), Load(100 shells, 12G), Shotgun", magSize: 100 },
  "Xenocide Flamethrower":            { type: "Heavy Weapon (TL3)", damage: "3d6 Fire",          range: "Special",  properties: "Heavy, Master, Mag (20 rounds), Special",                    magSize: 20 },

   // ==========================================
  // SUPER-HEAVY WEAPONS [TL0]
  // ==========================================
  "Fauconneau":                       { type: "Super-Heavy Weapon (TL0)", damage: "1d8+8 Piercing",    range: "150/600",  properties: "Ball, Muzzle (1 shot), Draw, Flint, FTF, SH, Special",           magSize: 1 },
  "Gatling Gun":                      { type: "Super-Heavy Weapon (TL0)", damage: "1d10 Piercing",     range: "300/1200", properties: "Auto-Heavy (1d8+8), Feed, SH, Special",                          magSize: 0 },
  "Leather Gun":                      { type: "Super-Heavy Weapon (TL0)", damage: "1d8+8 Piercing",    range: "100/400",  properties: "Ball, Muzzle (1 shot), FTF, SH, Special",                        magSize: 1 },
  "Organ Gun (24-Barrel)":            { type: "Super-Heavy Weapon (TL0)", damage: "1d12+12 Piercing",  range: "80/320",   properties: "Breech (24 shots), Load, Massive, Special",                      magSize: 24 },
  "Paterero":                         { type: "Super-Heavy Weapon (TL0)", damage: "1d10+10 Bludgeoning", range: "100/400", properties: "Ball, Load, Muzzle (1 shot), SH",                               magSize: 1 },
  "Punt Gun":                         { type: "Super-Heavy Weapon (TL0)", damage: "2d10+20 Piercing",  range: "80/320",   properties: "Muzzle (1 Buck), Perc, SH, Shotgun, Special",                   magSize: 1 },
  "Stinkpot Launcher":                { type: "Super-Heavy Weapon (TL0)", damage: "Special",           range: "Special",  properties: "Heavy, Muzzle (1 shot), Exp (10 ft. cloud), Massive, Special",  magSize: 1 },

  // ==========================================
  // SUPER-HEAVY WEAPONS [TL1]
  // ==========================================
  "DShK 12.7mm HMG":                  { type: "Super-Heavy Weapon (TL1)", damage: "1d10+10 Piercing",  range: "250/1000", properties: "Auto (1d12+12), Feed, SH",                                      magSize: 0 },
  "Hotchkiss Mle 1914":               { type: "Super-Heavy Weapon (TL1)", damage: "1d8+8 Piercing",    range: "250/1000", properties: "Auto-Heavy (1d12+12), Feed, SH",                                magSize: 0 },
  "Lahti L-39 20mm Anti-Tank Rifle":  { type: "Super-Heavy Weapon (TL1)", damage: "2d8+16 Piercing",   range: "300/1200", properties: "AP+, Mag (10 rounds), SH, Special",                             magSize: 10 },
  "MG 13 7.92mm MG":                  { type: "Super-Heavy Weapon (TL1)", damage: "1d6+6 Piercing",    range: "150/600",  properties: "Auto (1d8+8), Mag (75 rounds), SH",                             magSize: 75 },
  "M2-2 Flamethrower":                { type: "Super-Heavy Weapon (TL1)", damage: "3d8 Fire",          range: "Special",  properties: "Mag (20 units), SH, Special",                                   magSize: 20 },
  "M1919 .30 Cal MG":                 { type: "Super-Heavy Weapon (TL1)", damage: "1d6+6 Piercing",    range: "150/600",  properties: "Auto (1d8+8), Feed, SH",                                        magSize: 0 },
  "M20 75mm Recoilless Rifle":        { type: "Super-Heavy Weapon (TL1)", damage: "2d8+16 Bludgeoning", range: "300/1200", properties: "AP, Direct (4d8+32), Exp (5 ft.), Load(1 round), Mod(S), SH, Special", magSize: 1 },
  "M202 FLASH":                       { type: "Super-Heavy Weapon (TL1)", damage: "1d10+10 Bludgeoning", range: "200/800", properties: "Direct (2d10+20), Exp (10 ft.), Heavy, Load(4 rockets), Special", magSize: 4 },
  "MG 08/15":                         { type: "Super-Heavy Weapon (TL1)", damage: "1d10 Piercing",     range: "500/2000", properties: "Auto-Heavy (2d8), Feed(250 round belt), Massive, Special",     magSize: 250 },
  "M67 90mm Recoilless Rifle":        { type: "Super-Heavy Weapon (TL1)", damage: "2d10+20 Bludgeoning", range: "400/1600", properties: "AP, Direct (4d10+40), Exp (5 ft.), Load(1 round), SH, Special", magSize: 1 },
  "Vickers .303 MG":                  { type: "Super-Heavy Weapon (TL1)", damage: "1d8+8 Piercing",    range: "250/1000", properties: "Auto-Heavy (1d12+12), Feed, SH",                                magSize: 0 },
  "Vickers .50 Mk III":               { type: "Super-Heavy Weapon (TL1)", damage: "1d8+8 Piercing",    range: "400/1600", properties: "Auto (1d10+10), Feed, Mod(M/U), SH",                            magSize: 0 },

  // ==========================================
  // SUPER-HEAVY WEAPONS [TL2]
  // ==========================================
  "KPVT 14.5mm HMG":                  { type: "Super-Heavy Weapon (TL2)", damage: "1d10+10 Piercing",  range: "250/1000", properties: "Auto-Heavy (1d12+12), Feed, SH",                                magSize: 0 },
  "L7 GPMG":                          { type: "Super-Heavy Weapon (TL2)", damage: "1d8+8 Piercing",    range: "250/1000", properties: "Auto-Heavy (1d12+12), Feed, SH",                                magSize: 0 },
  "L16 81mm Mortar":                  { type: "Super-Heavy Weapon (TL2)", damage: "2d12+24 Bludgeoning", range: "300/1200", properties: "Exp (20 ft.), Load(1 round), SH, Special",                   magSize: 1 },
  "M134 Minigun":                     { type: "Super-Heavy Weapon (TL2)", damage: "2d8 Piercing",      range: "200/800",  properties: "Auto-Heavy (3d8), Feed, Mod(M/U), SH, Special",                magSize: 0 },
  "Metalstorm MAUL":                  { type: "Super-Heavy Weapon (TL2)", damage: "1d12 Piercing",     range: "400/1600", properties: "Auto (2d8), Auto-Heavy (2d10), Mag (200 rounds), Mod(U), SH",  magSize: 200 },
  "MK19 40mm AGL":                    { type: "Super-Heavy Weapon (TL2)", damage: "Grenade",           range: "200/800",  properties: "Feed(35 grenades), SH",                                         magSize: 35 },
  "NTW-20":                           { type: "Super-Heavy Weapon (TL2)", damage: "1d10+10 Piercing*", range: "1500/6000",properties: "AP+, Heavy, Load(3 rounds), Sniper (+3), Mod(B/M/S)",          magSize: 3 },
  "RBS 70 MANPADS":                   { type: "Super-Heavy Weapon (TL2)", damage: "3d10+30 Bludgeoning", range: "1000/4000", properties: "AP+, Direct (6d10+60), Exp (10 ft.), Guided, Heavy, Load(1 missile), Rocket, Special", magSize: 1 },
  "Rheinmetall RMG 50":               { type: "Super-Heavy Weapon (TL2)", damage: "1d8+8 Piercing",    range: "500/2000", properties: "AP+, Auto (1d10+10), Feed, Mod(M/S), Massive",                  magSize: 0 },

  // ==========================================
  // SUPER-HEAVY WEAPONS [TL3+]
  // ==========================================
  "4Sure Ballistics Missile Launcher": { type: "Super-Heavy Weapon (TL3)", damage: "3d10+30 Bludgeoning", range: "100km/400km", properties: "AP+, Direct (6d10+60), Exp (20 ft.), Guided, Load(4 missiles), Rocket, SH, Special", magSize: 4 },
  "Arctic Wave Cryo Projector":       { type: "Super-Heavy Weapon (TL3)", damage: "2d8+16 Cold*",     range: "Special",  properties: "Mod(M/U), Mag (15 2xH-cell), SH, Special",                      magSize: 15 },
  "Dense Plasma Focus Cannon":        { type: "Super-Heavy Weapon (TL5)", damage: "1d10+10 Fire*",    range: "400/1600", properties: "AP+, Auto-Heavy (1d12+12), Mag (200 4xH-cell), Mod(M/U), Plasma, SH", magSize: 200 },
  "Plasma Artillery":                 { type: "Super-Heavy Weapon (TL5)", damage: "2d8+16 Fire",      range: "500/2000", properties: "AP+, Direct (4d8+32), Exp (10 ft.), Mag (1 H-cell), Plasma, SH", magSize: 1 },
  "Psi-Scrambler Emitter":            { type: "Super-Heavy Weapon (TL5)", damage: "1d10+10 Psychic*", range: "150/600",  properties: "Mod(M/U), Mag (10 2xH-cell), Massive, SH, Special",              magSize: 10 },
  "Repeating Laser Blaster":          { type: "Super-Heavy Weapon (TL4)", damage: "1d8+8 Force*",     range: "250/1000", properties: "AP, Auto-Heavy (1d12+12), Laser, Mag (200 3xH-cell), Mod(M/U), SH", magSize: 200 },
  "Super-Kill Sniper":                { type: "Super-Heavy Weapon (TL4)", damage: "1d12+12 Piercing", range: "4000/16000",properties: "AP+, EM, Mag (5 flechettes), SH, Sniper (+3)",                  magSize: 5 }, 

  // ==========================================
  // MARTIAL (SUBSONIC) RANGED WEAPONS
  // ==========================================

  // TL0 Ranged Weapons
  "Arbalest (Steel Crossbow)":        { type: "Martial Ranged Weapon (TL0)", damage: "1d12 Piercing",   range: "50/200",  properties: "Cock (1 bolt), Heavy, Two-Handed, Special",              magSize: 1 },
  "Crossbow Pistol":                  { type: "Martial Ranged Weapon (TL0)", damage: "1d4 Piercing",    range: "20/80",   properties: "Cock (1 bolt), Light",                                  magSize: 1 },
  "Repeating Crossbow (Chu-ko-nu)":   { type: "Martial Ranged Weapon (TL0)", damage: "1d6 Piercing",    range: "80/320",  properties: "Mag (5 bolts), Two-Handed, Special",                    magSize: 5 },

  // TL1 Ranged Weapons
  "Compound Bow":                     { type: "Martial Ranged Weapon (TL1)", damage: "1d8 Piercing",    range: "150/600", properties: "Ammunition, Heavy, Two-Handed, Special",                magSize: 1 },
  "Harpoon Gun (Pneumatic)":          { type: "Martial Ranged Weapon (TL1)", damage: "1d10 Piercing",   range: "50/200",  properties: "Cock (1 harpoon), Heavy, Special, Two-Handed",          magSize: 1 },

  // TL2 Ranged Weapons
  "AEA Alarmo":                       { type: "Martial Ranged Weapon (TL3)", damage: "1d12 Bludgeoning", range: "5 ft.",   properties: "Breech (2 charges), Double (2d10)",                     magSize: 2 },
  "AEA Big Bore Double Shot Air Pistol": { type: "Martial Ranged Weapon (TL3)", damage: "Special",       range: "50/200",  properties: "Breech (2 cartridge), Double (Special), Special",      magSize: 2 },
  "AEA SF Compact":                   { type: "Martial Ranged Weapon (TL2)", damage: "1d4-1d8 Piercing*", range: "80/320", properties: "Load(6-14 pellets), Mod(S), Special, Two-Handed",       magSize: 14 },
  "AEA SF Sniper":                    { type: "Martial Ranged Weapon (TL2)", damage: "1d4-1d8 Piercing", range: "100/400", properties: "Load(6-14 pellets), Sniper (+1), Special, Two-Handed",  magSize: 14 },
  "Bearx Desire XL Pistol Crossbow":  { type: "Martial Ranged Weapon (TL2)", damage: "1d6 Piercing",    range: "30/90",   properties: "Light, Load(1 bolt), Mod(S)",                           magSize: 1 },
  "BinTac T-50 (Extreme)":            { type: "Martial Ranged Weapon (TL2)", damage: "1d12 Piercing",   range: "100/400", properties: "Mag (6 pellets), Mod(S), Special, Two-Handed",          magSize: 6 },
  "Cobra Adder Tactical Crossbow":    { type: "Martial Ranged Weapon (TL2)", damage: "1d8 Piercing",    range: "80/320",  properties: "Load(5 bolts), Mod(S), Special, Two-Handed",            magSize: 5 },
  "FX Redback \"Gatling\"":           { type: "Martial Ranged Weapon (TL2)", damage: "1d6-1d10 Piercing", range: "80/320", properties: "Load(8 pellets/bolts), Special, Two-Handed",           magSize: 8 },
  "Lancehead F1 Hunting Crossbow":    { type: "Martial Ranged Weapon (TL2)", damage: "1d12 Piercing",   range: "200/800", properties: "AP, Cock (1 bolt), Mod(S), Special, Two-Handed",        magSize: 1 },
  "MEY Interceptor Assault Crossbow": { type: "Martial Ranged Weapon (TL2)", damage: "1d6/1d8 Piercing", range: "100/400", properties: "Mag (18 bolts), Mod(S), Special, Two-Handed",          magSize: 18 },
  "NXWerks Pistelle X-68":            { type: "Martial Ranged Weapon (TL3)", damage: "1d6 Bludgeoning*", range: "20/80",  properties: "Mag (6 pellets), Light, Mod(B,M,S,U)",                   magSize: 6 },
  "Ravin R500":                       { type: "Martial Ranged Weapon (TL2)", damage: "1d10 Piercing",   range: "220/880", properties: "Cock (1 bolt), Mod(S), Special, Two-Handed",            magSize: 1 },
  "TenPoint TRX 515":                 { type: "Martial Ranged Weapon (TL2)", damage: "2d8 Piercing",    range: "250/1000",properties: "Cock (1 bolt), AP, Mod(S), Two-Handed",                  magSize: 1 },
  "WT Mini Striker":                  { type: "Martial Ranged Weapon (TL2)", damage: "1d8 Piercing",    range: "70/210",  properties: "Load(6 bolts), Mod(U)",                                  magSize: 6 },

  // TL3 Ranged Weapons
  "Acheron Mk. IV \"Stake Driver\"":  { type: "Martial Ranged Weapon (TL3)", damage: "1d8 Piercing",    range: "120/480", properties: "Double (1d12), Mag (20 bolts), Two-Handed",              magSize: 20 },
  "Harkonnen HMG-90 \"Reaper\"":      { type: "Martial Ranged Weapon (TL3)", damage: "1d10 Piercing",   range: "150/600", properties: "Auto (1d12), Mag (60 bolts), Heavy, Two-Handed",         magSize: 60 },
  "Krait HPA Micro-Burst":            { type: "Martial Ranged Weapon (TL3)", damage: "1d8 Piercing",    range: "50/200",  properties: "Auto (1d10), Bull, Mag (200 pellets), Special",          magSize: 200 },
  "Stryder X1 \"Impaler\"":           { type: "Martial Ranged Weapon (TL3)", damage: "1d6 Piercing",    range: "200/800", properties: "Auto-Heavy (1d10), Heavy, Mag (80 bolts), Two-Handed",  magSize: 80 },
  "Valravn C-10 \"Corvid\"":          { type: "Martial Ranged Weapon (TL3)", damage: "1d6 Piercing",    range: "100/400", properties: "Auto (1d8), Mag (40 bolts), Two-Handed, Special",        magSize: 40 },
  "Vektor A-9 \"Whisper Creek\"":     { type: "Martial Ranged Weapon (TL3)", damage: "1d10 Piercing",   range: "200/800", properties: "Bull, Mag (20 pellets), Mod(S/U), Sniper (+2), Special, Two-Handed", magSize: 20 },

  // ==========================================
  // INJECTION WEAPONS
  // ==========================================
  "Dan-Inject JM Standard":           { type: "Injection Weapon (TL1)", damage: "0",                  range: "40/120",  properties: "Breech (1 dart), Special, Two-Handed",                   magSize: 1 },
  "SixNeedler Needle Gun":            { type: "Injection Weapon (TL2)", damage: "0",                  range: "30/90",   properties: "Light, Breech(6 darts), Mod(S/U), Special",               magSize: 6 },
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

// Full Paths list
const MAGIC_PATHS = {
  collective: {
    name: "Collective Spells",
    cost: 0,
    synergy: "",
    benefit: "Access the shared spell list available to all practitioners. Purchase each spell once with Assets; cast with Vessel (or as a ritual).",
    traits: "Foundational techniques taught across traditions. No synergy path. Path unlock is free; each spell still costs AP once.",
    spells: [
      { tier: 0, name: "Dispel", ap: 2, cc: 3, time: "1 minute", range: "60 ft.", duration: "Inst.", comp: "", ritual: false,
        desc: "End one spell on a creature/object/effect in range. Vigor check DC 10 + (tier × 2); roots = tier 0.<br><b>River note:</b> cost drops to a reaction if target ≤ 60 ft." },
      { tier: 0, name: "Parlor Tricks", ap: 1, cc: null, time: "1 action", range: "30 ft.", duration: "Conc. up to 1 hour", comp: "V, S", ritual: true,
        desc: "Minor effects: boom voice, flicker lights, tiny tremors, telekinesis ≤ 1 lb, slight appearance tweaks, dim/brighten lights. Can concentrate on multiple at once." }
    ]
  },

      air: {
    name: "Path of Air",
    cost: 2,
    synergy: "movement",
    benefit: "Always land on your feet; reduce fall distance by 20 ft.",
    traits: "Hand movements and exhaled air; rarely spoken words.",
    spells: [
      { tier: 0, name: "Wave", ap: 2, cc: 2, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "S", ritual: false,
        desc: "Ranged spell attack; push target 10 ft. +5 ft push per 1 dark (max +20).<br><b>Boost (DC 15):</b> cost becomes 1 action." },
      { tier: 0, name: "Jump", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "1 minute", comp: "V, S, M", ritual: false,
        desc: "Triple jump distance. +1 target per 1 dark (max +4)." },
      { tier: 1, name: "Feather Fall", ap: 4, cc: 4, time: "1 bonus", range: "60 ft.", duration: "Conc. up to 5 minutes", comp: "V, S", ritual: false,
        desc: "Up to 5 creatures fall at 60 ft/round, take no fall damage, land on feet. +1 target per 1 dark (max +4).<br><b>Boost (DC 20):</b> double targets." },
      { tier: 1, name: "Levitate", ap: 4, cc: 4, time: "1 minute", range: "60 ft.", duration: "Conc. up to 1 hour", comp: "V, S", ritual: false,
        desc: "One creature/object ≤ 500 lb rises 20 ft and stays. Unwilling gets Con/Vig save. Move 20 ft/turn. +100 lb per 1 dark.<br><b>Boost (DC 15):</b> double weight. <b>(DC 20):</b> quadruple." },
      { tier: 2, name: "God's Breath", ap: 6, cc: 6, time: "1 minute", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "20-ft line both ways; creatures in/near line Str save or pushed 20 ft + prone. Disperses gas, snuffs flames. Hard to move toward you. +5 ft line per 1 dark (max +20).<br><b>Boost (DC 20):</b> area 30 ft." },
      { tier: 2, name: "Storm Wall", ap: 6, cc: 6, time: "1 minute", range: "120 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false,
        desc: "Wall of air ≤ 60×20×5 ft. Str save: 4d8 + Vig mod bludgeoning (half on success). Blocks small flyers & normal projectiles. +10 ft length per 1 dark.<br><b>Boost (DC 15):</b> extend 1 min on Vig check (DC +1 each time)." },
      { tier: 2, name: "Fly", ap: 6, cc: 6, time: "1 action", range: "Touch", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: false,
        desc: "Fly speed 60 ft. Falls if aloft when spell ends. +1 target per 2 dark.<br><b>Boost (DC 15):</b> speed 80 ft until end of next turn." },
      { tier: 3, name: "Freedom", ap: 8, cc: 8, time: "1 minute", range: "Touch", duration: "Conc. up to 1 hour", comp: "V, S, M", ritual: false,
        desc: "Ignore difficult terrain, paralysis, restraint, underwater penalties. Auto-escape nonmagical bonds for 5 ft move. Free stand-up; swim/climb/crawl = speed. +1 target per 2 dark." },
      { tier: 3, name: "Wind Road", ap: 8, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 8 hours", comp: "V, S, M", ritual: true,
        desc: "60-ft radius air platform; double ground speed on it; moves with you. Fall if you leave range.<br><b>Sacrifice:</b> 2 HD, +1 HD per +10 ft radius (max +40 ft)." },
      { tier: 4, name: "Weather Master", ap: 10, cc: 11, time: "1 minute", range: "Self", duration: "Conc. up to 8 hours", comp: "V, S", ritual: false,
        desc: "Control weather in 5 miles (must see sky). Rain, wind, temp, clear/storm. +1 mile per 3 dark (max +6).<br><b>Boost (DC 20):</b> double area." }
    ]
  },
  
      attraction: {
    name: "Path of Attraction",
    cost: 2,
    synergy: "knowledge",
    benefit: "Proficiency in one Charisma skill of your choice.",
    traits: "Subtle words and gestures; spells often look non-magical.",
    spells: [
      { tier: 0, name: "Command", ap: 2, cc: 4, time: "1 action", range: "30 ft.", duration: "1 round", comp: "V", ritual: false,
        desc: "One-word command; Wis/Vig save or obey next turn. No effect if undead, doesn't understand, or command is directly harmful. Success = immune 8 hrs. +10 ft range per 1 dark." },
      { tier: 1, name: "Charm", ap: 4, cc: 4, time: "1 minute", range: "30 ft.", duration: "1 hour", comp: "V", ritual: false,
        desc: "Wis/Vig save (adv if fighting you). Fail: charmed, friendly acquaintance. Harm ends it. Success = immune 8 hrs. +1 target per 2 dark (max +3)." },
      { tier: 1, name: "Sleep", ap: 4, cc: 5, time: "1 minute", range: "60 ft.", duration: "10 minutes", comp: "V, S, M", ritual: false,
        desc: "Unconscious pool of 30 HP (subtract per creature). Wakes on damage/action. No undead/charm-immune. +5 HP pool per 1 dark.<br><b>Boost (DC 20):</b> force-include a partial creature (it gets a save)." },
      { tier: 2, name: "Captivation", ap: 6, cc: 6, time: "1 minute", range: "30 ft.", duration: "Conc. up to 5 minutes", comp: "V", ritual: false,
        desc: "All who see/hear you: Wis/Vig save. Fail: disadv on checks/attacks/saves, half speed, must move closer. Ends on damage/silence/incapacitated. Auto-fail if HP < your max. +10 ft per 1 dark (max +60)." },
      { tier: 2, name: "Suggestion", ap: 6, cc: 6, time: "1 minute", range: "30 ft.", duration: "1 minute", comp: "V", ritual: false,
        desc: "Suggest a non-harmful course of action; Wis/Vig save or pursue it. +1 target per 2 dark (max +3).<br><b>Boost (DC 15):</b> double range." },
      { tier: 2, name: "Terror", ap: 6, cc: 7, time: "1 minute", range: "Self", duration: "Conc. up to 1 minute", comp: "V", ritual: false,
        desc: "20-ft radius; Wis/Vig save or drop items + frightened (Dash away each turn). Save again out of sight. +5 ft radius per 1 dark (max +30)." },
      { tier: 3, name: "Compulsion", ap: 8, cc: 9, time: "1 minute", range: "30 ft.", duration: "1 minute", comp: "V", ritual: false,
        desc: "As Suggestion, but can order violent/harmful acts. Still one command. +1 target per 2 dark (max +3)." },
      { tier: 3, name: "Dominate", ap: 8, cc: 9, time: "1 minute", range: "30 ft.", duration: "Conc. up to 1 hour", comp: "V", ritual: false,
        desc: "Charm creature with HP ≤ your max; telepathic commands. Action = total control 1 turn. New save each time it takes damage. +10 HP limit per 1 dark (max +50).<br><b>Boost (DC 25):</b> double HP limit." },
      { tier: 4, name: "Memory Writer", ap: 10, cc: 10, time: "1 minute", range: "30 ft.", duration: "Conc. up to 1 hour", comp: "V, S", ritual: false,
        desc: "Wis/Vig save or charmed + incapacitated. Rewrite/erase one ≤ 10-min memory from last 24 hrs. Extra dark unlocks older memories (7 days → lifetime)." },
      { tier: 4, name: "Mob Rule", ap: 10, cc: 12, time: "1 minute", range: "30 ft.", duration: "5 minutes", comp: "V, S", ritual: false,
        desc: "Suggestion on all chosen creatures in range (one shared action). +10 ft range per 2 dark (max +60).<br><b>Boost (DC 25):</b> allow violent order." }
    ]
  },
  
      creation: {
    name: "Path of Creation",
    cost: 2,
    synergy: "technology",
    benefit: "+2 bonus to your vessel.",
    traits: "Modest hand motions; few spoken words.",
    spells: [
      { tier: 0, name: "Mending", ap: 2, cc: null, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S", ritual: true,
        desc: "Repair objects (no trace). Can fix magic items/constructs but not restore their magic. 1d4 HP to objects per minute.<br><b>Sacrifice:</b> 1 HP." },
      { tier: 0, name: "Purify", ap: 2, cc: null, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "V, S", ritual: true,
        desc: "Purify all food & drink in range (no poison/disease).<br><b>Sacrifice:</b> 1 HP." },
      { tier: 1, name: "Chef", ap: 4, cc: null, time: "1 minute", range: "20 ft.", duration: "Inst.", comp: "V, S", ritual: true,
        desc: "Create food & water for 5 people. Food vanishes after 1 hour if uneaten.<br><b>Sacrifice:</b> 2 HP." },
      { tier: 1, name: "Create Elemental", ap: 4, cc: 6, time: "1 minute", range: "90 ft.", duration: "10 minutes", comp: "V, S, M", ritual: false,
        desc: "Summon elemental CR ≤ 2, friendly, obeys verbal commands. +1 CR per 3 dark (max CR 5).<br><b>Boost (DC 15):</b> double range." },
      { tier: 2, name: "Fabricate", ap: 6, cc: null, time: "10 minutes", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: true,
        desc: "Convert raw materials into finished goods (Large or smaller / 10-ft cube). No creatures, magic items, or complex tech.<br><b>Sacrifice:</b> 2 HD." },
      { tier: 3, name: "Bag of Anything", ap: 8, cc: null, time: "1 minute", range: "Touch", duration: "5 minutes", comp: "V, S", ritual: true,
        desc: "Pull one mundane gear item from a satchel; lasts 5 min then disintegrates. No chemicals/firearms/explosives.<br><b>Sacrifice:</b> 2 HD." },
      { tier: 4, name: "Create Beast", ap: 10, cc: 12, time: "1 minute", range: "Touch", duration: "Conc. up to 5 minutes", comp: "V, S, M", ritual: false,
        desc: "Summon beast CR ≤ 4, friendly, own initiative, obeys commands. +1 CR per 3 dark (max = your level).<br><b>Boost (DC 25):</b> max CR +2." }
    ]
  },
  
      death: {
    name: "Path of Death",
    cost: 2,
    synergy: "decay",
    benefit: "When spells heal you, may take vessel instead (1 dark : 5 HP), free.",
    traits: "Dark incantations; blood/ash materials; obvious magic.",
    spells: [
      { tier: 0, name: "Drain Touch", ap: 2, cc: 3, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false,
        desc: "Melee spell attack: 1d6 + Vig mod necrotic + heal 1 HP. +1 die & +1 heal per 2 dark (max +3).<br><b>Boost (DC 15):</b> cost becomes 1 action." },
      { tier: 0, name: "Dead Life", ap: 2, cc: 5, time: "1 minute", range: "Self", duration: "5 minutes", comp: "S", ritual: false,
        desc: "Gain temp HP = Vig mod. +1 temp HP per 1 dark (max +10)." },
      { tier: 1, name: "Death Curse", ap: 4, cc: 4, time: "1 minute", range: "Touch", duration: "Conc. up to 1 hour", comp: "S, M", ritual: false,
        desc: "Melee spell attack: disadv on ability checks & Con saves; +1d6 necrotic on your non-spell hits.<br><b>Boost (DC 15):</b> also make a Drain Touch as part of cast." },
      { tier: 1, name: "Animate", ap: 4, cc: 5, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "V, S, M", ritual: false,
        desc: "Turn Medium-or-smaller corpse into undead CR ≤ 2 for 24 hrs. Bonus action to command. +2 undead per 3 dark.<br><b>Boost (DC 20):</b> CR ≤ 3." },
      { tier: 2, name: "Perish", ap: 6, cc: 7, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false,
        desc: "Con save: 7d6 + Vig mod necrotic (half on success). No undead/constructs. +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 2, name: "Line of Death", ap: 6, cc: 7, time: "1 minute", range: "120 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false,
        desc: "Invisible necrotic wall ≤ 60×20×5 ft. Dex save: 7d6 + Vig mod (half on success). +10 ft length per 1 dark.<br><b>Boost (DC 13):</b> extend 1 min on Vig check (DC +1 each)." },
      { tier: 3, name: "Greater Animate", ap: 8, cc: 9, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "V, S, M", ritual: false,
        desc: "As Animate, but CR ≤ 5. +2 undead per 3 dark.<br><b>Boost (DC 20):</b> CR ≤ 6." },
      { tier: 3, name: "Lifeforce", ap: 8, cc: 9, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false,
        desc: "Con save: 7d6 + Vig mod necrotic (half on success); you heal 25% of damage dealt (can't drop target below 1). +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 4, name: "Hand of Death", ap: 10, cc: 11, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S", ritual: false,
        desc: "Con save: 9d6 + Vig mod necrotic (half on success). Humanoid killed rises next turn as CR ≤ 3 undead under your permanent command. +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 4, name: "Resurrection", ap: 12, cc: null, time: "1 hour", range: "Touch", duration: "Inst.", comp: "V, S, M", ritual: true,
        desc: "Restore creature dead ≤ 5 years (not old age/undead) to full HP; cures poisons/diseases/wounds/missing parts. Target at exhaustion 4.<br><b>Boost (DC 15):</b> +5 years per +1 DC.<br><b>Sacrifice:</b> gain 4 exhaustion." }
    ]
  },
  
      decay: {
    name: "Path of Decay",
    cost: 2,
    synergy: "death",
    benefit: "Resistance to poison and acid damage.",
    traits: "Audible incantations; little/no blood.",
    spells: [
      { tier: 0, name: "Acidic Touch", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "Inst.", comp: "S", ritual: false,
        desc: "Melee spell attack: 1d8 + Vig mod acid. +1 die per 3 dark (max +3)." },
      { tier: 0, name: "Acid Ball", ap: 2, cc: 4, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "S", ritual: false,
        desc: "1–2 targets (within 5 ft of each other); Dex save or 1d4 + Vig mod acid. +1 die per 2 dark (max +3).<br><b>Boost (DC 15):</b> cost becomes 1 action." },
      { tier: 1, name: "Acid Spray", ap: 3, cc: 6, time: "1 minute", range: "15 ft. cone", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "15-ft cone; Dex save 3d6 + Vig mod (half on success). Fail also takes half again. +1 die per 3 dark (max +3).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 1, name: "Poison Puff", ap: 3, cc: 6, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "Con save: 4d6 + Vig mod (half on success); fail = poisoned 1 min. +1 die per 3 dark (max +3).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 2, name: "Acid/Poison Spit", ap: 4, cc: 7, time: "1 minute", range: "20 ft.", duration: "Inst.", comp: "S", ritual: false,
        desc: "Dex save: 7d6 + Vig mod (half on success). Acid: fail takes half again. Poison: fail = poisoned 1 min. +1 die per 2 dark (max +3).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 2, name: "Condition", ap: 4, cc: 7, time: "1 minute", range: "60 ft.", duration: "5 minutes", comp: "V, S", ritual: false,
        desc: "Target makes 2 Con saves; each fail = 1 exhaustion (fades when spell ends; can't give level 6). +1 save per 3 dark (max 5)." },
      { tier: 3, name: "Decomposition", ap: 6, cc: 9, time: "1 minute", range: "90 ft.", duration: "Inst. (+10 rounds)", comp: "V, S", ritual: false,
        desc: "Ranged spell attack: 7d6 + Vig mod, then 2d6 + Vig mod / round for 10 rounds. Miss = half initial, no ongoing. +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 3, name: "Contagion", ap: 6, cc: 9, time: "1 minute", range: "Touch", duration: "Until cured", comp: "V, S", ritual: false,
        desc: "Melee spell attack: inflict any disease. Target Con saves each turn; 3 fails = disease locks, 3 successes = cured." },
      { tier: 4, name: "Plague", ap: 8, cc: 12, time: "1 minute", range: "60 ft.", duration: "Until cured", comp: "V, S", ritual: false,
        desc: "As Contagion, but ranged against any number of targets you can see. +10 ft range per 2 dark (max +60)." }
    ]
  },

      earth: {
    name: "Path of Earth",
    cost: 2,
    synergy: "water",
    benefit: "Advantage on Intelligence (Nature) checks.",
    traits: "Dirt and puppeteering gestures.",
    spells: [
      { tier: 0, name: "Snap", ap: 2, cc: 3, time: "1 action", range: "10 ft.", duration: "Inst.", comp: "S", ritual: false,
        desc: "Ranged spell attack: 1d6 + Vig mod thunder + deafened until your next turn. +1 die per 3 dark (max +3)." },
      { tier: 0, name: "Clap", ap: 2, cc: 4, time: "1 minute", range: "10 ft.", duration: "Inst.", comp: "S", ritual: false,
        desc: "Needs 2 free hands. Con save or prone (flyers immune). +5 ft range per 2 dark (max +15)." },
      { tier: 1, name: "Entangle", ap: 4, cc: 6, time: "1 minute", range: "30 ft. cone", duration: "Conc. up to 5 minutes", comp: "S", ritual: false,
        desc: "30-ft cone of vines = difficult terrain. Str save or restrained (Str check vs DC to break). +10 ft per 2 dark (max +30)." },
      { tier: 1, name: "Animal Kinship", ap: 4, cc: null, time: "1 minute", range: "30 ft.", duration: "24 hours", comp: "V, S, M", ritual: true,
        desc: "Charm beast Int ≤ 4 (Wis save) or give it a 25-word message delivery (~50 mi fly / 25 mi walk per day).<br><b>Sacrifice:</b> disadv on checks 1 hour — or 1 exhaustion to target 2 beasts." },
      { tier: 2, name: "Thunderwave", ap: 6, cc: 7, time: "1 minute", range: "15 ft. cube", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "15-ft cube; Con save: 1d6 + Vig mod thunder + push 10 ft (half dmg, no push on success). +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 2, name: "Spines", ap: 6, cc: 7, time: "1 minute", range: "10 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false,
        desc: "Dex save: 3d6 + Vig mod piercing (half on success); fail = restrained. +10 ft & +1 die per 2 dark (max +30 ft / +3 dice).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 3, name: "Wall of Earth", ap: 8, cc: 8, time: "1 minute", range: "120 ft.", duration: "Conc. up to 10 minutes", comp: "V, S, M", ritual: false,
        desc: "Nonmagical wall 80×30×5 ft, shapeable. Full-duration concentration makes it permanent." },
      { tier: 3, name: "Terraform", ap: 8, cc: 9, time: "1 minute", range: "100 ft.", duration: "Conc. up to 2 hours", comp: "V, S, M", ritual: false,
        desc: "Reshape terrain slowly (elevation, trenches, pillars). New area every 10 min. No buildings/tech. +50 ft range per 2 dark (max +200).<br><b>Boost (DC 25):</b> double range." },
      { tier: 4, name: "Earthquake", ap: 10, cc: 12, time: "1 minute", range: "500 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false,
        desc: "100-ft radius tremor; difficult terrain, concentration Con saves, prone Dex saves. Spend 4 dark: 1d6 fissures. Spend 3 dark: 50 dmg/turn to structures." }
    ]
  },

      flame: {
    name: "Path of Flame",
    cost: 2,
    synergy: "self",
    benefit: "Resistance to fire; immunity to magical fire you create.",
    traits: "Hand/mouth movements; flammable material components.",
    spells: [
      { tier: 0, name: "Fire Bolt", ap: 2, cc: 2, time: "1 action", range: "100 ft.", duration: "Conc. up to 1 hour or until fired", comp: "V, S", ritual: false,
        desc: "Ranged spell attack: 1d6 + Vig mod fire. Can hold as torch (bright 10 / dim 10). +1 die per 2 dark (max +3)." },
      { tier: 0, name: "Enchant Flame", ap: 2, cc: 5, time: "1 minute", range: "—", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false,
        desc: "Weapon deals +2 fire (guns: 1 clip). Not on energy weapons." },
      { tier: 1, name: "Flamethrower", ap: 4, cc: 6, time: "1 minute", range: "15-ft. cone", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "15-ft cone; Dex save 3d6 + Vig mod fire (half on success). Ignites flammables.<br><b>Boost (DC 15):</b> dice to d8." },
      { tier: 1, name: "Forever Flame", ap: 4, cc: null, time: "1 minute", range: "Touch", duration: "Until disp.", comp: "V, S, M", ritual: true,
        desc: "Permanent torch flame on object; no heat, no oxygen, can't be smothered (can be covered)." },
      { tier: 1, name: "Flame Ball", ap: 4, cc: 5, time: "1 minute", range: "5 ft.", duration: "Conc. up to 1 hour", comp: "V, S, M", ritual: false,
        desc: "5-ft fire sphere. Bonus action: move 30 ft or detonate (20-ft radius, double dice). Adjacent creatures take 1d6 + Vig mod (Dex half). +1 die per dark (max 6).<br><b>Boost (DC 15):</b> dice to d8." },
      { tier: 2, name: "Pillars of Fire", ap: 6, cc: 7, time: "1 minute", range: "120 ft.", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "3 pillars (5 ft wide). Dex save 2d6 + Vig mod (half on success). +1 pillar per 3 dark (max +2).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 2, name: "Blazing Barrier", ap: 6, cc: 7, time: "1 minute", range: "120 ft.", duration: "Conc. up to 1 minute", comp: "V, S, M", ritual: false,
        desc: "Fire wall ≤ 60×20×5 ft. Dex save: 4d8 + Vig mod (half on success). +10 ft length per 1 dark.<br><b>Boost (DC 10):</b> extend 1 min on Vig check (DC +1 each)." },
      { tier: 3, name: "Artillery Flare", ap: 8, cc: 9, time: "1 minute", range: "600 ft.", duration: "Inst.", comp: "V, S, M", ritual: false,
        desc: "40-ft radius blast. Dex save: 6d8 + Vig mod fire (half on success). +5 ft radius per dark (max +20).<br><b>Boost (DC 20):</b> range 1,200 ft." },
      { tier: 3, name: "Fire Storm", ap: 8, cc: 9, time: "1 minute", range: "150 ft.", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "Up to ten 10-ft cubes. Dex save: 5d8 + Vig mod fire (half on success). +1 cube per 3 dark (max +2).<br><b>Boost (DC 20):</b> dice to d10." },
      { tier: 4, name: "Incendiary Bomb", ap: 10, cc: 12, time: "1 minute", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "30-ft radius around you. Dex save: 9d8 + Vig mod fire (half on success); save on enter/end turn. +5 ft radius per 2 dark.<br><b>Boost (DC 25):</b> dice to d10." }
    ]
  },

    illusion: {
    name: "Path of Illusion",
    cost: 2,
    synergy: "power",
    benefit: "+2 bonus to your vessel.",
    traits: "Subtle gestures; rituals use deep trance.",
    spells: [
      { tier: 0, name: "Artifice", ap: 2, cc: 2, time: "1 action", range: "30 ft.", duration: "Conc. up to 1 minute", comp: "S", ritual: false,
        desc: "Sound or image ≤ 5-ft cube. Physical touch reveals illusion; Int (Inv) vs DC. +1 DC per 1 dark." },
      { tier: 0, name: "Pose", ap: 2, cc: 3, time: "1 action", range: "Self", duration: "Conc. up to 1 hour", comp: "S", ritual: false,
        desc: "Alter your appearance (same body type). Int (Inv) vs DC to see through. +1 DC per 2 dark." },
      { tier: 1, name: "Mirror", ap: 4, cc: 5, time: "1 minute", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "2 duplicates; attacks may hit a dupe (1d6 ≤ dupe count). +1 dupe per 3 dark (max +4)." },
      { tier: 1, name: "Hallucination", ap: 4, cc: 6, time: "1 minute", range: "120 ft.", duration: "Conc. up to 10 minutes", comp: "V, S, M", ritual: false,
        desc: "Image + sound/smell ≤ 20-ft cube. Touch reveals; Int (Inv) vs DC. +1 DC per 1 dark.<br><b>Boost (DC 25):</b> 40-ft cube." },
      { tier: 2, name: "Dreamscape", ap: 5, cc: null, time: "1 minute", range: "300 ft.", duration: "24 hours", comp: "V, S, M", ritual: true,
        desc: "Reskin 150-ft cube of natural terrain (look/sound/smell). Int (Inv) to disbelieve.<br><b>Boost (DC 20):</b> double range.<br><b>Sacrifice:</b> 3 HD." },
      { tier: 2, name: "Masquerade", ap: 5, cc: null, time: "1 minute", range: "30 ft.", duration: "Conc. up to 8 hours", comp: "V, S", ritual: true,
        desc: "Pose on any number of creatures (each can look different). Unwilling Cha save.<br><b>Boost (DC 20):</b> double range.<br><b>Sacrifice:</b> 3 HD." },
      { tier: 3, name: "Program", ap: 7, cc: null, time: "1 minute", range: "200 ft.", duration: "Until dispelled", comp: "V, S, M", ritual: true,
        desc: "As Hallucination but 40-ft cube, pre-scripted actions (up to 5 min), can start invisible.<br><b>Boost (DC 25):</b> 80-ft cube.<br><b>Sacrifice:</b> 5 HD." },
      { tier: 3, name: "Mirage", ap: 7, cc: null, time: "10 minutes", range: "Sight", duration: "10 days", comp: "V, S, M", ritual: true,
        desc: "As Dreamscape but 1-mile terrain; can add/alter structures; full senses including touch (difficult terrain etc.).<br><b>Boost (DC 20):</b> double range.<br><b>Sacrifice:</b> 5 HD." },
      { tier: 4, name: "Projection", ap: 9, cc: 10, time: "1 minute", range: "500 miles", duration: "Conc. up to 1 day", comp: "V, S, M", ritual: false,
        desc: "Illusory copy of you at a place you've seen. See/hear through it; your body blind/deaf while switched. +1 DC per 1 dark.<br><b>Boost (DC 20):</b> ×10 range." }
    ]
  },

    knowledge: {
    name: "Path of Knowledge",
    cost: 2,
    synergy: "attraction",
    benefit: "Use Vigor for any Intelligence-based skill checks.",
    traits: "Chanting, prayer-like gestures, magic circles.",
    spells: [
      { tier: 0, name: "Comprehension", ap: 2, cc: 3, time: "1 minute", range: "Self", duration: "Conc. up to 1 hour", comp: "V, S, M", ritual: false,
        desc: "Understand any spoken/written language (not codes/glyphs)." },
      { tier: 1, name: "Communication", ap: 2, cc: 4, time: "1 minute", range: "Self", duration: "Conc. up to 1 hour", comp: "V, S, M", ritual: false,
        desc: "Speak with plants, beasts, and creatures dead ≤ 24 hrs. Limited by their Int; small favors possible." },
      { tier: 1, name: "Locate", ap: 3, cc: null, time: "5 minutes", range: "Self", duration: "Conc. up to 10 minutes", comp: "V, S, M", ritual: true,
        desc: "Sense direction to known object/person within 1,000 ft.<br><b>Sacrifice:</b> 1 exhaustion. +1,000 ft per HD spent (max +5,000)." },
      { tier: 2, name: "Clairvoyance", ap: 4, cc: null, time: "10 minutes", range: "1 mile", duration: "Conc. up to 10 minutes", comp: "V, S, M", ritual: true,
        desc: "Invisible sensor at a familiar or obvious place; see/hear through it.<br><b>Sacrifice:</b> 1 exhaustion after. +1 mile per HD (max +6).<br><b>Boost (DC 20):</b> darkvision." },
      { tier: 2, name: "Premonition", ap: 4, cc: null, time: "10 minutes", range: "Self", duration: "Inst.", comp: "V, S, M", ritual: true,
        desc: "Ask spirits one question about a goal/event within 7 days; cryptic truthful reply.<br><b>Boost (DC 20):</b> second question.<br><b>Sacrifice:</b> 1 exhaustion after." },
      { tier: 3, name: "Dreamwalker", ap: 5, cc: null, time: "10 minutes", range: "Unlimited", duration: "Conc. up to 1 hour", comp: "V, S, M", ritual: false,
        desc: "Enter target's dream (or send willing messenger). Shape dream; converse. Can scare for 3d6 + Vig mod psychic on wake (Wis save).<br><b>Boost (DC 20):</b> d8 dice OR wrest control.<br><b>Sacrifice:</b> 1 exhaustion after; +1 DC & die per HD (max +5)." },
      { tier: 3, name: "Predestination", ap: 6, cc: null, time: "10 minutes", range: "Self", duration: "Inst.", comp: "V, S, M", ritual: false,
        desc: "Ask how to reach a specific future within 1 month. GM gives concrete steps (may reveal later)." },
      { tier: 4, name: "Anticipation", ap: 8, cc: 12, time: "1 minute", range: "Self", duration: "Conc. up to 5 minutes", comp: "V, S, M", ritual: false,
        desc: "Can't be surprised; adv on attacks/checks/saves; enemies have disadv on attacks against you." }
    ]
  },

    life: {
    name: "Path of Life",
    cost: 2,
    synergy: "light",
    benefit: "Max HP +2 each time you acquire a life spell.",
    traits: "Prayer-like; physical contact; ash circles.",
    spells: [
      { tier: 0, name: "Touch of Life", ap: 2, cc: 3, time: "1 action", range: "Touch", duration: "Inst.", comp: "S", ritual: false,
        desc: "Heal 2 HP (target must have ≥ 1 HP). +1 HP per 1 dark (max +5)." },
      { tier: 0, name: "Alleviate", ap: 2, cc: 3, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "Heal 1d6 + Vig mod. No undead/constructs. +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 1, name: "Revivify", ap: 4, cc: 20, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S, M", ritual: false,
        desc: "Restore creature dead ≤ 1 minute to 1 HP. No old age, no missing parts.<br><b>Boost (DC 20):</b> cost 15. <b>(DC 25):</b> cost 10." },
      { tier: 1, name: "Minor Exorcism", ap: 4, cc: null, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S, M", ritual: true,
        desc: "End all curses on one creature/object. Cursed items stay cursed but attunement breaks.<br><b>Sacrifice:</b> take 3 damage." },
      { tier: 2, name: "Healing Wave", ap: 6, cc: 6, time: "1 minute", range: "60 ft.", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "Up to 4 creatures heal 1d4 + Vig mod. No undead/constructs. +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d6." },
      { tier: 2, name: "Death Ward", ap: 6, cc: null, time: "1 minute", range: "Touch", duration: "8 hours", comp: "V, S, M", ritual: true,
        desc: "First time target would drop to 0 HP, drops to 1 HP instead. Instant-kill effects are negated and spell ends.<br><b>Sacrifice:</b> 1 HD per target. +1 target per 1 HD (max +3)." },
      { tier: 3, name: "Cleanse", ap: 8, cc: null, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S, M", ritual: true,
        desc: "Neutralize poison and cure nonmagical diseases.<br><b>Sacrifice:</b> 3 HD. +1 target per 3 HD (max +3)." },
      { tier: 3, name: "Restore", ap: 8, cc: 9, time: "1 minute", range: "Touch", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "Heal 7d8 + Vig mod; also ends blindness, deafness, and diseases. No constructs/undead. +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d10." },
      { tier: 4, name: "Regenerate", ap: 10, cc: null, time: "1 minute", range: "Touch", duration: "5 minutes", comp: "V, S, M", ritual: true,
        desc: "Target regains 1d6 + Vig mod HP at the start of each of its turns. Severed limbs regrow after 2 minutes (or instantly if held to stump).<br><b>Boost (DC 15):</b> that turn heals 2d8 + Vig instead.<br><b>Sacrifice:</b> 5 HD or lose half your HP when spell ends." },
      { tier: 4, name: "Healing Aura", ap: 10, cc: 13, time: "1 minute", range: "30 ft.", duration: "Inst.", comp: "V, S", ritual: false,
        desc: "As Restore, but all chosen creatures within 30 ft. +1 die per 2 dark (max +5).<br><b>Boost (DC 20):</b> dice to d10." }
    ]
  },

    light: {
    name: "Path of Light",
    cost: 2,
    synergy: "life",
    benefit: "You cannot be blinded.",
    traits: "Obvious casting; components burn brightly; often uses a focus (wand/staff/sword).",
    spells: [
      { tier: 0, name: "Radiant Strike", ap: 2, cc: 3, time: "1 bonus action", range: "Self", duration: "Conc. up to 1 minute", comp: "S, M", ritual: false,
        desc: "Next hit deals +1d6 radiant (+2d6 vs fiends/undead). +1 die per 2 dark (max +3).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 0, name: "Light", ap: 2, cc: null, time: "1 minute", range: "Touch", duration: "1 hour", comp: "S, M", ritual: true,
        desc: "Touch a focus/nonmechanical item; bright 20 ft / dim 20 ft.<br><b>Sacrifice:</b> 2 HP. +10 ft both ranges per 1 HP (max +30)." },
      { tier: 1, name: "Bolt of Heaven", ap: 3, cc: 5, time: "1 minute", range: "120 ft.", duration: "Inst.", comp: "S, M", ritual: false,
        desc: "Ranged spell attack: 3d6 + Vig mod radiant (4d6 vs fiends/undead) + Con/Vig save or blind until your next turn (fiends/undead disadv). +1 die per 2 dark (max +3).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 1, name: "Starburst", ap: 3, cc: 5, time: "1 minute", range: "5 ft.", duration: "Inst.", comp: "S, M", ritual: false,
        desc: "Con/Vig save: 3d6 + Vig mod fire (half on success; fiends/undead disadv). Fail = blind until your next turn. +5 ft range per 2 dark (max +20).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 2, name: "Sunsphere", ap: 4, cc: null, time: "1 minute", range: "30 ft.", duration: "Conc. up to 1 hour", comp: "S, M", ritual: true,
        desc: "5-ft light sphere (AC 18, 1 HP), speed 30, bright 30 / dim 30. Bonus action move 30 ft. Ram: 2d8 + Vig mod radiant (4d8 vs fiends/undead, half on save). Vanishes after 5 hits.<br><b>Sacrifice:</b> 2 HD. +5 ft range & +1 die per 1 HD (max +20 ft / +4 dice)." },
      { tier: 2, name: "Extradite", ap: 4, cc: 7, time: "1 minute", range: "Touch", duration: "Inst.", comp: "S, M", ritual: false,
        desc: "Melee spell attack: 6d8 + Vig mod radiant (double vs fiend/undead) + push 20 ft. +1 die per 2 dark (max +3).<br><b>Boost (DC 25):</b> auto-hit." },
      { tier: 3, name: "Sunbeam", ap: 5, cc: 9, time: "1 minute", range: "60 ft.", duration: "Inst.", comp: "S, M", ritual: false,
        desc: "5×60 ft beam. Con/Vig save: 6d8 radiant + blind until your next turn (half dmg, no blind on success; fiends/undead disadv)." },
      { tier: 3, name: "Nova", ap: 6, cc: 10, time: "1 minute", range: "Self", duration: "Inst.", comp: "S, M", ritual: false,
        desc: "60-ft radius flash. Chosen creatures Con/Vig save: 10d6 radiant + blind 1 min (half dmg, no blind on success; fiends/undead disadv). Blinded save each turn to end. +1 die & +5 ft per 3 dark (max +4 / +20)." },
      { tier: 4, name: "Sunrise", ap: 7, cc: null, time: "5 minutes", range: "1 mile", duration: "8 hours", comp: "S, M", ritual: true,
        desc: "Daylight orb in sky; bright 1 mile / dim +1 mile. Action: slam into a point ≤ 1 mile — 70-ft radius Con/Vig save: 10d6 + Vig mod radiant + blind 1 min (half/no blind on success; fiends/undead disadv).<br><b>Sacrifice:</b> all HD (min 12)." }
    ]
  },

    might: {
    name: "Path of Might",
    cost: 2,
    synergy: "protection",
    benefit: "Proficiency with all melee weapons.",
    traits: "Subtle combat motions; looks like weapon flourishes.",
    spells: [
      { tier: 0, name: "Pinpoint", ap: 2, cc: 2, time: "1 bonus action", range: "Self", duration: "End of turn", comp: "S", ritual: false,
        desc: "Advantage on your first attack roll this turn.<br><b>Boost (DC 15):</b> use again this turn (DC +2 each extra, max DC 21)." },
      { tier: 1, name: "Paranormal Aim", ap: 3, cc: 3, time: "1 bonus action", range: "Self", duration: "End of turn", comp: "S", ritual: false,
        desc: "Your next attack this turn auto-hits.<br><b>Boost (DC 15):</b> use again this turn (DC +2 each extra, max DC 21)." },
      { tier: 1, name: "Compression", ap: 3, cc: 4, time: "1 bonus action", range: "Self", duration: "End of turn", comp: "S", ritual: false,
        desc: "Make one extra ranged or melee attack as part of this spell.<br><b>Boost (DC 25):</b> one more extra attack (once per turn)." },
      { tier: 2, name: "Wrath", ap: 5, cc: 6, time: "1 action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "Next weapon hit: +1d4 + Vig mod psychic; creature Wis/Vig save or frightened of you. Action each turn to re-save. +1 die per 2 dark (max +3).<br><b>Boost (DC 20):</b> dice to d8." },
      { tier: 2, name: "Magic Weapon", ap: 5, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: true,
        desc: "Touch nonmagical weapon; while you wield it, +1 attack & damage.<br><b>Sacrifice:</b> disadv on Wis checks until long rest." },
      { tier: 3, name: "Crack", ap: 7, cc: 8, time: "1 bonus action", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "Next hit on a lock/door/chest/manacles opens it (loud crack 300 ft; one lock if many). Arcane lock suppressed 10 min. Hit creature: +3d6 + Vig mod thunder + push 10 ft; Medium or smaller also prone." },
      { tier: 3, name: "Magic Weapon +2", ap: 8, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: true,
        desc: "As Magic Weapon, but +2 attack & damage (does not stack with lower tiers).<br><b>Sacrifice:</b> disadv on Wis checks until long rest." },
      { tier: 4, name: "Disintegrate", ap: 12, cc: 13, time: "1 minute", range: "Self", duration: "Conc. up to 1 minute", comp: "V, S", ritual: false,
        desc: "Next hit: Con/Vig save 12d6 + Vig mod force (half on success). 0 HP = disintegrated (gear too, except magic items). Also disintegrates Large-or-smaller nonmagical objects (10-ft cube of Huge+). +1 die per 3 dark (max +6).<br><b>Boost (DC 25):</b> dice to d8." },
      { tier: 4, name: "Magic Weapon +3", ap: 9, cc: null, time: "1 minute", range: "Self", duration: "Conc. up to 10 minutes", comp: "V, S", ritual: true,
        desc: "As Magic Weapon, but +3 attack & damage (does not stack with lower tiers).<br><b>Sacrifice:</b> disadv on Wis checks until long rest." }
    ]
  },

    movement: {
    name: "Path of Movement",
    cost: 2,
    synergy: "air",
    benefit: "Use Vigor instead of Dexterity for Dex saves against spells.",
    traits: "Magic circles + hand motions; little/no speech.",
    spells: [
      { tier: 0, name: "Runner", ap: 2, cc: null, time: "1 action", range: "Touch", duration: "1 hour", comp: "S, M", ritual: true,
        desc: "Target speed +10 ft.<br><b>Sacrifice:</b> 1 HD. +1 target per 1 HD (max +3)." },
      { tier: 1, name: "Swiftness", ap: 4, cc: 5, time: "1 minute", range: "Touch", duration: "Conc. up to 1 minute", comp: "S, M", ritual: false,
        desc: "Double speed, +2 AC, adv on Dex saves, extra action (Attack [1 weapon only] / Dash / Disengage / Hide / Use Object). +1 target per 3 dark (max +3)." },
      { tier: 1, name: "Passthrough", ap: 4, cc: null, time: "1 minute", range: "30 ft.", duration: "Conc. up to 5 minutes", comp: "S, M", ritual: true,
        desc: "5-ft portal through floor/wall; Medium or smaller can pass. Needs an opening on the other side.<br><b>Sacrifice:</b> 1 HD." },
      { tier: 2, name: "Jumper", ap: 6, cc: 7, time: "1 minute", range: "400 ft.", duration: "Inst.", comp: "S, M", ritual: false,
        desc: "Teleport yourself to a spot you can see or have been. Bring willing creature your size or smaller + gear. +100 ft per 1 dark (max +600)." },
      { tier: 2, name: "Portal", ap: 6, cc: null, time: "1 minute", range: "Special", duration: "Inst. / Conc. up to 1 minute", comp: "S, M", ritual: true,
        desc: "10-ft circle on wall/floor; action to open and link to another portal you know. Both sides can look through. Sigil-locked (you hold keys).<br><b>Boost (Special):</b> Vig (Induce) vs caster DC to break a known lock.<br><b>Sacrifice:</b> 1 exhaustion." },
      { tier: 3, name: "Gateway", ap: 8, cc: null, time: "1 minute", range: "500 ft.", duration: "Conc. up to 1 minute", comp: "S, M", ritual: true,
        desc: "As Portal, but can hang mid-air, no need to link to another portal, one-way visible passage to a point in range.<br><b>Boost (DC 12):</b> ×2 range (raise DC +2 per extra multiple).<br><b>Sacrifice:</b> 1 exhaustion." },
      { tier: 3, name: "Recall", ap: 8, cc: 9, time: "1 action", range: "500 ft.", duration: "Inst.", comp: "S, M", ritual: false,
        desc: "You + up to 5 willing creatures within 5 ft teleport to a place you've been since your last long rest. +100 ft per 1 dark (max +500)." },
      { tier: 4, name: "Dimension Circle", ap: 12, cc: null, time: "5 minutes", range: "Special", duration: "8 hours", comp: "S, M", ritual: true,
        desc: "Two-way doorway from a portal you create to any point on the planet within 30 ft of destination.<br><b>Sacrifice:</b> 2 exhaustion. Spend 4 HD: any location in the universe. Extra 4 HD: alternate realities." }
    ]
  },

  // Finish Path of Power (Replace the previous partial entry)
  power: {
    name: "Path of Power",
    cost: 2,
    synergy: "illusion",
    benefit: "Increase your maximum River slots by 1.",
    spells: {
      roots: [
        { name: "Electric Arc", ap: 2, cc: 3, desc: "Ranged spell attack; 1d10 + Vig mod lightning. +1 die per 2 dark spent (max +4)." },
        { name: "Shock Strike", ap: 3, cc: 2, desc: "Melee spell attack; 2d6 + Vig mod lightning. Target can't take reactions until its next turn." }
      ],
      tier1: [
        { name: "Shocking Fist", ap: 4, cc: 4, desc: "Ranged spell attack; 1d8 + Vig mod lightning. Adv on lightning spell attacks vs target. +1 die per 2 dark (max +4).<br><b>Boost (DC 20):</b> dice to d10." },
        { name: "Lightning Bolt", ap: 4, cc: 6, desc: "100ft line; 6d6 + Vig mod lightning (Dex save half). +1 die per 2 dark (max +4).<br><b>Boost (DC 20):</b> dice to d8." }
      ],
      tier2: [
        { name: "Electrified Weapon", ap: 6, cc: 7, desc: "Touched weapon deals +1d8 lightning. If hit, previous target within 60ft takes 1d8 lightning if hit last round." },
        { name: "Storm", ap: 6, cc: 7, desc: "Ranged spell attack; 3d8 + Vig mod lightning. Make secondary attack on another within 60ft for same damage. +1 die per 2 dark (max +4).<br><b>Boost (DC 20):</b> dice to d10." }
      ],
      tier3: [
        { name: "Electrovolt", ap: 8, cc: 9, desc: "Ranged spell attack; 4d8 + Vig mod lightning (half on miss). All within 10ft of target take 1d8 + Vig lightning (Dex save half). +1 die per 2 dark (max +4).<br><b>Boost (DC 20):</b> dice to d10." }
      ],
      tier4: [
        { name: "Lightning Sequence", ap: 10, cc: 13, desc: "Release 2 bolts; each leaps to 2 more (max 6 targets). 7d6 + Vig mod lightning (Dex save half). +1 die per 2 dark (max +3).<br><b>Boost (DC 25):</b> 1 extra leap bolt." }
      ]
    }
  },

  protection: {
    name: "Path of Protection",
    cost: 2,
    synergy: "might",
    benefit: "If an opponent crits you, you gain advantage on your next attack and your vessel regains 2.",
    spells: {
      roots: [
        { name: "Reprisal", ap: 2, cc: 3, desc: "Reaction to melee hit: Target takes Vig mod force damage. Adv on next attack vs them. +1 dmg per 2 dark (max +5)." },
        { name: "Magic Armor", ap: 2, cc: 3, desc: "Base AC 13 + Vig mod (max +2). Ends if you don armor. Spend 6 dark to increase base AC to 16." }
      ],
      tier1: [
        { name: "Shield", ap: 4, cc: 5, desc: "+2 AC. If in river, cast as reaction. +1 AC per 3 dark (max +4).<br><b>Boost (DC 20):</b> Reaction to gain +2 vs one attack." },
        { name: "Hush", ap: 4, cc: 5, desc: "20ft sphere; no sound enters/leaves. Creatures inside are deafened; verbal casting impossible." }
      ],
      tier2: [
        { name: "Blur", ap: 6, cc: 6, desc: "Disadvantage on attack rolls against you. +5ft speed. Attackers with truesight/blindsight immune." },
        { name: "Alienation", ap: 6, ritual: true, desc: "20ft circle; specified creature type cannot enter/exit. Protection from charm/possession.<br><b>Sacrifice:</b> 1 dmg/turn. <b>Boost (DC 20):</b> +50 HP to field." }
      ],
      tier3: [
        { name: "Colossus", ap: 7, cc: 7, desc: "Gain resistance to nonmagical bludgeoning, piercing, and slashing damage." },
        { name: "Blender Barrier", ap: 8, ritual: true, desc: "Alienation upgrade: Storm of sharp objects deals 3d10 + Vig mod slashing to those touching barrier.<br><b>Sacrifice:</b> 3 dmg/turn. <b>Boost (DC 20):</b> +50 HP to field." }
      ],
      tier4: [
        { name: "Invulnerability", ap: 10, cc: 10, desc: "Immune to all damage until end of next turn. If in river, cast as reaction.<br><b>Boost (DC 20):</b> Extend 1 round (max 5 times)." },
        { name: "Impenetrable", ap: 10, ritual: true, desc: "60ft sphere; move sphere as action. AC 10, 200 HP. Sacrifice: 2 dmg/turn. <b>Boost (DC 20):</b> +50 HP to field." }
      ]
    }
  },

  self: {
    name: "Path of Self",
    cost: 2,
    synergy: "flame",
    benefit: "+2 bonus to your Vessel.",
    spells: {
      roots: [
        { name: "Darkvision", ap: 2, ritual: true, desc: "60ft Darkvision. <b>Sacrifice:</b> Spend 1 hit die." },
        { name: "Channel Bear", ap: 3, cc: 4, desc: "Adv on Con checks and 2d6 + Vig mod temp HP." },
        { name: "Channel Ape", ap: 3, cc: 4, desc: "Adv on Str checks and +2 bonus to Str-based melee damage." },
        { name: "Channel Wolf", ap: 3, cc: 4, desc: "Adv on Dex checks and +5ft speed." },
        { name: "Channel Tiger", ap: 3, cc: 4, desc: "Adv on Cha and Int checks." },
        { name: "Channel Falcon", ap: 3, cc: 4, desc: "Adv on Wis checks and +5 Passive Perception." }
      ],
      tier1: [
        { name: "Gravity Shifter", ap: 4, cc: 5, desc: "Walk on walls/ceilings as ground. Climb speed equals walking speed." },
        { name: "Invisibility", ap: 4, cc: 5, desc: "Invisible until you attack or cast a spell." }
      ],
      tier2: [
        { name: "Sizing", ap: 6, cc: 7, desc: "Increase/Decrease size 1 category. Large: Adv on Str checks/saves, +1d4 dmg. Small: Adv on Dex checks/saves, Disadv on Str.<br><b>Boost (DC 20):</b> Change extra category." },
        { name: "Ultravision", ap: 6, ritual: true, desc: "90ft: Darkvision, Adv on Perception (sight), see invisible/ethereal. <b>Sacrifice:</b> Spend 2 hit dice." }
      ],
      tier3: [
        { name: "Renew", ap: 8, ritual: true, desc: "Regain 1d4 exhaustion, cleanse curses, heal HP equal to Vigor score. <b>Sacrifice:</b> Spend 4 hit dice." },
        { name: "Truesight", ap: 8, ritual: true, desc: "120ft Truesight; see secret doors and into Ethereal Plane." }
      ],
      tier4: [
        { name: "Ghost", ap: 10, ritual: true, desc: "Become ethereal; move through objects. Ends early if you return to reality. <b>Sacrifice:</b> Gain 2 exhaustion when spell ends." }
      ]
    }
  },

  technology: {
    name: "Path of Technology",
    cost: 2,
    synergy: "creation",
    benefit: "Proficient in Engineering; use Vigor instead of Intelligence for technology checks.",
    spells: {
      roots: [
        { name: "Construction", ap: 3, ritual: true, desc: "Aid crafting: +3 effective level, advance schedule, save 20% money. <b>Sacrifice:</b> 1 hit die." },
        { name: "Refurbishment", ap: 2, ritual: true, desc: "Vigor (Engineering) check to recover HP to an object. <b>Sacrifice:</b> 1 hit die." }
      ],
      tier1: [
        { name: "Magic Firearm", ap: 4, ritual: true, desc: "Touched firearm gains Armor Piercing (AP) and counts as magic. <b>Sacrifice:</b> 1 hit die." },
        { name: "EMP", ap: 4, cc: 5, desc: "30ft pulse disables electronics/batteries. +5ft per 2 dark (max +20ft)." },
        { name: "Access", ap: 4, ritual: true, desc: "Control/read electronic device via touch (no password override). <b>Boost (DC 20):</b> 60ft range. <b>Sacrifice:</b> 1 hit die." },
        { name: "Eyes of SOL", ap: 5, ritual: true, desc: "Bird's eye view from satellite; darkvision and see invisible. <b>Sacrifice:</b> 2 hit dice." }
      ],
      tier2: [
        { name: "Hijack", ap: 5, cc: 6, desc: "Control robot (Wis save). +1 robot per 3 dark (max 3).<br><b>Boost (DC 20):</b> Double range." },
        { name: "Presence of SOL", ap: 5, ritual: true, desc: "Transmit holographic image and audio of self/creature to any location. <b>Sacrifice:</b> 2 hit dice." }
      ],
      tier3: [
        { name: "Wireless", ap: 7, ritual: true, desc: "Access networks as a computer; unlimited range if cell/sat access exists. <b>Sacrifice:</b> 1 hit die." },
        { name: "Radial Access", ap: 7, ritual: true, desc: "As Access, but 60ft range and target any device. <b>Boost (DC 20):</b> 120ft range. <b>Sacrifice:</b> 1 hit die." },
        { name: "Will of SOL", ap: 7, ritual: true, desc: "Satellite alerts you to all movement/living things within 500ft. <b>Sacrifice:</b> 2 hit dice." }
      ],
      tier4: [
        { name: "Hammer of SOL", ap: 12, cc: 13, desc: "40ft cylinder; 20d6 fire + 20d6 radiant (nuclear, counts as AP). Dex save half. <b>Sacrifice:</b> Ignore cover. +1 beam per 4 dark (max 3)." }
      ]
    }
  },

  water: {
    name: "Path of Water",
    cost: 2,
    synergy: "earth",
    benefit: "Gain a swim speed equal to your ground speed.",
    spells: {
      roots: [
        { name: "Endothermic Ray", ap: 2, cc: 3, desc: "Ranged spell attack; 1d6 + Vig mod cold. Target speed -5ft. +1 die per 3 dark.<br><b>Boost (DC 20):</b> dice to d8." },
        { name: "Alter Temperature", ap: 2, ritual: true, desc: "Freeze or boil 5 gallons of pure water. <b>Sacrifice:</b> 1 point of damage." }
      ],
      tier1: [
        { name: "Water Breathing", ap: 3, ritual: true, desc: "Breathe underwater. <b>Sacrifice:</b> 2 HP + 1 HP per extra creature." },
        { name: "Water Walk", ap: 3, ritual: true, desc: "Walk on liquid; rise to surface at 60ft/round. <b>Sacrifice:</b> 2 HP + 1 HP per extra creature." }
      ],
      tier2: [
        { name: "Control Water", ap: 4, ritual: true, desc: "500ft cube: Rise, Trench, or Whirlpool. Str save or 1d8 + Vig bludgeoning. <b>Sacrifice:</b> 2 hit dice." },
        { name: "Shard Thrower", ap: 4, cc: 7, desc: "Ranged spell attack; 5d6 + Vig mod cold. +1 die per 2 dark (max +4).<br><b>Boost (DC 20):</b> dice to d8." }
      ],
      tier3: [
        { name: "Storm", ap: 5, cc: 9, desc: "20ft radius hail; 1d8 + Vig bludgeoning and 3d6 + Vig cold (Dex save half). +1 die per 2 dark (max +4).<br><b>Boost (DC 20):</b> dice to d10." },
        { name: "Breath of Cold", ap: 5, cc: 9, desc: "60ft cone; 7d6 + Vig mod cold (Con save half). Killed targets freeze. +1 die per 2 dark (max +4).<br><b>Boost (DC 20):</b> dice to d8." },
        { name: "Frozen Barrier", ap: 5, cc: 9, desc: "Wall 60x20x5ft; 6d8 + Vig cold to those in area (Dex save half). AC 15, 40 HP per 10ft. +10ft length per 1 dark.<br><b>Boost (DC 10):</b> Vigor check to extend 1 min." }
      ],
      tier4: [
        { name: "Tsunami", ap: 7, cc: 12, desc: "Wall 300x300x50ft; 5d8 + Vig bludgeoning (Str save half). Moves 50ft/turn. 4d8 bludgeoning/round to those caught. +1 die per 2 dark (max +4).<br><b>Boost (DC 25):</b> dice to d10." }
      ]
    }
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
