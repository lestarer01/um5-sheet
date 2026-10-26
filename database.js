const LADDER_DATA = {
  'Born Leader': { desc: 'Commands the battlefield.', abilities: [{ level: 1, name: 'Commanding Presence', desc: 'Grants allies bonuses.' }] },
  'Juggernaut': { desc: 'Unstoppable force.', abilities: [{ level: 1, name: 'Toughness', desc: '+1 HP per level.' }] }
};

const CLASS_DATA = {
  'Gunslinger': { desc: 'Master of firearms.', hitDie: 'd10', primaryStat: 'DEX', abilities: [{ level: 1, name: 'Quick Draw', desc: 'Draw weapons instantly.' }] },
  'Techie': { desc: 'Technology expert.', hitDie: 'd8', primaryStat: 'INT', abilities: [{ level: 1, name: 'Jury-Rig', desc: 'Fix electronics fast.' }] }
};

const WEAPON_DATA = {
  'M4 Carbine': { type: 'Assault Rifle', damage: '2d6', magSize: 30, range: '80/300', properties: 'Burst' },
  'Glock 17': { type: 'Pistol', damage: '1d6', magSize: 17, range: '50/150', properties: 'Light' },
  'Combat Knife': { type: 'Melee', damage: '1d4', magSize: 0, range: '5', properties: 'Finesse, Light' }
};

const ARMOR_DATA = {
  'Plain Clothes': { type: 'None', baseAc: 10, maxDex: 99 },
  'Undercover Vest': { type: 'Light', baseAc: 11, maxDex: 99 },
  'Tactical Vest': { type: 'Medium', baseAc: 13, maxDex: 2 },
  'Heavy Combat Suit': { type: 'Heavy', baseAc: 16, maxDex: 0 }
};

const SKILL_LIST = [
  'Acrobatics (Dex)','Athletics (Str)','Computers (Int)','Deception (Cha)',
  'Demolitions (Int)','Driving (Dex)','Insight (Wis)','Intimidation (Cha)',
  'Investigation (Int)','Medicine (Wis)','Perception (Wis)','Persuasion (Cha)',
  'Piloting (Dex)','Science (Int)','Stealth (Dex)','Survival (Wis)'
];
