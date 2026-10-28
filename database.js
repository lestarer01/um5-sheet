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
      levels: [1, 1, 5, 10, 15, 20], // You get two at level 1, then one at 5, 10, 15, 20.
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
          'Assault': 'Autofire path. T1: bonus dmg = margin you beat AC (max 5/10 auto-heavy). T2: after hit, +2/+4 attack for path calc. T3: +4/+8. T4: dmg cap doubles (10/20). T5: +8/+16 attack for path calc.',
          'Precision': 'Single-shot path. T1: +1 to non-autofire attacks. T2: crits roll dmg dice 3× instead of 2×. T3: bank a natural 20 to replace a miss (1/rest); reroll natural 2–3. T5: advantage on non-autofire firearm attacks.'
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
        levels: [1, 1, 2, 4, 8, 12, 16, 19],
        options: {
          'Abnormally Fast (1 Kata)': 'Double speed until next turn; if hit before next turn, regain 1 Kata. [Enhanced: +10 ft speed].',
          'Between The Knees (1 Kata)': 'Advantage on ranged attack; double ability mod on hit. If both miss, regain 1 Kata. [Enhanced: Triple ability mod dmg].',
          'Blood In The Eyes (1 Kata)': 'Reaction when enemy crits you: make ranged attack. Auto-crit if hit; regain 1 Kata if miss by 5+. [Enhanced: Regain 1 Kata on any miss].',
          'Boundary Threshold (1 Kata)': 'Within 5 ft of ≥2 enemies: spend 30 ft movement for 1 ranged attack. [Enhanced: 15 ft cost, attack between movement].',
          'Classic Tumble (1 Kata)': 'Reaction on hit or failed DEX save: take 1/4 damage. [Enhanced: Take 0 damage].',
          'Equilibrium (1 Kata)': 'Reaction when enemy misses ranged attack vs you: make ranged attack; regain 1 Kata on crit. [Enhanced: Gain advantage].',
          'Hydrostatic Shot (1 Kata)': 'After hit: +2d6 dmg. If target moves/attacks, knock prone as reaction. [Enhanced: +3d6 dmg].',
          'Just One Bullet (1 Kata)': 'Spend before attack action: +2 dmg to all attacks this turn; regain 1 Kata on crit. [Enhanced: +4 dmg].',
          'Kinesics (1 Kata)': 'Bonus action: ignore diff terrain, no opportunity attacks, disadvantage on attacks vs you. Regain 1 Kata if hit >1 time. [Enhanced: +5 ft speed].',
          'Limber Up (1 Kata)': 'Bonus action: advantage on DEX/STR checks & saves until end of turn. [Enhanced: Reroll results ≤8].',
          'Rapid Kill (2 Kata)': 'After hit: turn hit into a critical hit. [Enhanced: Triple dmg dice instead of double].',
          'Way Of The Gun (1 Kata)': 'Hit target ≥20 ft away: make extra attack vs enemy within 5 ft of target. [Enhanced: Trigger target up to 50 ft, bonus target within 15 ft].',
          'Weak Spot (4 Kata)': 'After hit: +3 dmg to every hit vs that target until dead or 5 mins. [Enhanced: +5 dmg].'
        }
      }
    ]
  },
    'Heavy': {
    desc: 'Devastating heavy-gunner, field control master, and walking firepower.',
    hitDie: 'd10',
    primaryStat: 'STR / CON',
    abilities: [
      { level: 1, name: 'Artillery Talents', desc: 'Gain 4 Artillery Talents at 1st level, and 1 more at 2nd, 5th, 9th, 13th, 17th, and 20th level. Repeating a talent increases its Tier (max Tier 2 at 1st level).' },
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
          'Attack of Necessity': 'Action (auto/auto-heavy): DEX save vs 10-ft cone (15-ft auto-heavy) for weapon dmg. T2: +5 ft cone. T3: Knock target prone on fail. T4: +5 ft cone.',
          'Rapid Fire': 'Action (auto/auto-heavy): DEX save vs 10-ft cube (20-ft auto-heavy) in range for weapon dmg (-5 DC at max range). T2: +10 ft cube. T3: Halve target speed. T4: +10 ft cube.',
          'Easy Target': 'Auto/auto-heavy attacks vs Large+ creatures deal bonus dmg (+2 to +5 auto; +3 to +6 auto-heavy). T2: Bonus +1. T3: Bonus +2. T4: Bonus +3.',
          'Gaming Avatar': 'Action single autofire attack: beat AC by X to trigger effects (push, disadv, zero speed, lose action). T2: +2 to attack roll for talent. T3: +4 to attack. T4: +6 to attack.',
          'Imposing Frame': 'Spend 30 ft movement: +1 AC, half-cover to allies within 5 ft, adv vs forced move. T2: 3/4 cover for allies. T3: +2 AC. T4: Costs 20 ft movement.',
          'Overwatch': 'Spend 30 ft movement (auto/auto-heavy): set 10-ft cube (20-ft auto-heavy) as diff terrain; reaction DEX save for dmg if enemy enters. T2: +10 ft cube. T3: 20 ft cost. T4: +10 ft cube. T5: Double area with action. T6: Sustain for 10 ft move.',
          'Precision Fire': 'Non-autofire attack: reroll 1s on dmg; max dmg die result gives +1 dmg. T2: Crits roll all dmg dice twice & keep higher. T3: +2 dmg on max die. T4: Roll 1d6 on max die. T5: Reroll 1s & 2s.',
          'Shrapnel': 'Hit with auto/auto-heavy: 1 target within 5 ft (10 ft auto-heavy) takes DEX/STR mod dmg. T2: +10 ft range. T3: Double damage to second target.',
          'Sure-Footed': 'Treat heavy weapons as two-handed small arms for movement penalty purposes (does not apply to super heavy weapons).'
        }
      }
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
