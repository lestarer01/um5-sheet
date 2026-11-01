const UM5_SKILLS = [
  { name: 'Acrobatics', stat: 'dex' },
  { name: 'Animal Handling', stat: 'wis' },
  { name: 'Arcana', stat: 'int' },
  { name: 'Athletics', stat: 'str' },
  { name: 'Commune', stat: 'vig' },
  { name: 'Computer Use', stat: 'int' },
  { name: 'Deception', stat: 'cha' },
  { name: 'Demolitions', stat: 'int' },
  { name: 'Detection', stat: 'vig' },
  { name: 'Engineering', stat: 'int' },
  { name: 'History', stat: 'int' },
  { name: 'Induce', stat: 'vig' },
  { name: 'Insight', stat: 'wis' },
  { name: 'Intimidation', stat: 'cha' },
  { name: 'Investigation', stat: 'int' },
  { name: 'Medicine', stat: 'wis' },
  { name: 'Nature', stat: 'int' },
  { name: 'Perception', stat: 'wis' },
  { name: 'Performance', stat: 'cha' },
  { name: 'Persuasion', stat: 'cha' },
  { name: 'Religion', stat: 'int' },
  { name: 'Sciences', stat: 'int' },
  { name: 'Sleight of Hand', stat: 'dex' },
  { name: 'Stealth', stat: 'dex' },
  { name: 'Survival', stat: 'dex' }
];

const STORAGE_KEY = 'um5_chars_v5';
let chars = [];
let activeId = null;

function $(id) { return document.getElementById(id); }

function val(id, v) {
  const el = $(id);
  if (!el) return null;
  if (v !== undefined) {
    if (el.type === 'checkbox') el.checked = !!v;
    else el.value = v;
  }
  return el.type === 'checkbox' ? el.checked : el.value;
}

function mod(score) { return Math.floor((parseInt(score || 10, 10) - 10) / 2); }
function fmtMod(n) { return (n >= 0 ? '+' : '') + n; }
function profBonus(level) {
  const l = parseInt(level || 1, 10);
  if (l >= 17) return 6; if (l >= 13) return 5;
  if (l >= 9) return 4; if (l >= 5) return 3; return 2;
}

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    chars = raw ? JSON.parse(raw) : [];
  } catch (e) {
    chars = [];
  }
}

function saveStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chars));
  } catch (e) {}
}

function populateSelects() {
  if (typeof LADDER_DATA !== 'undefined' && $('c-ladder')) {
    $('c-ladder').innerHTML = Object.keys(LADDER_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  }
  if (typeof CLASS_DATA !== 'undefined' && $('c-class')) {
    $('c-class').innerHTML = Object.keys(CLASS_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  }
  if (typeof ARMOR_DATA !== 'undefined' && $('armor-preset')) {
  populateArmorPresets('__all__');
  }
  if (typeof ARCHETYPE_DATA !== 'undefined' && $('c-arch')) {
    $('c-arch').innerHTML = '<option value="">-- Select Archetype --</option>' +
      ARCHETYPE_DATA.map(a => `<option value="${a}">${a}</option>`).join('');
  }
  if (typeof BACKGROUND_DATA !== 'undefined' && $('c-background')) {
    $('c-background').innerHTML = '<option value="">-- Select Background --</option>' +
      BACKGROUND_DATA.map(b => `<option value="${b}">${b}</option>`).join('');
  }
}

function populateArmorPresets(filterType) {
  if (typeof ARMOR_DATA === 'undefined' || !$('armor-preset')) return;
  let keys = Object.keys(ARMOR_DATA);
  if (filterType && filterType !== '__all__') {
    keys = keys.filter(k => ARMOR_DATA[k].type === filterType);
  }
  $('armor-preset').innerHTML = '<option value="__custom__">Custom / Manual</option>' +
    keys.map(k => `<option value="${k}">${k} (AC ${ARMOR_DATA[k].baseAc})</option>`).join('');
}

function buildSkillsUI() {
  const box = $('skills-box');
  if (!box) return;
  box.innerHTML = UM5_SKILLS.map((sk, i) => `
    <div class="skill-row">
      <span style="font-size:0.85rem; flex:1;">${sk.name}</span>
      <span style="font-size:0.65rem; color:var(--muted); width:34px; text-transform:uppercase;">${sk.stat}</span>
      <span class="skill-bonus" id="sk-bonus-${i}">+0</span>
      <div class="skill-checks">
        <label><input type="checkbox" id="sk-p-${i}" /> Prof</label>
        <label><input type="checkbox" id="sk-e-${i}" /> Exp</label>
      </div>
    </div>
  `).join('');
}

/* --- WEAPONS SYSTEM --- */

function emptyWeapon() {
  return { preset: '__custom__', name: '', dmg: '', range: '', props: '', max: 0, cur: 0 };
}

function renderWeapons() {
  const box = $('weapons-container');
  if (!box) return;

  const c = chars.find(x => x.id === activeId);
  if (!c) return;

  if (!c.weapons || !Array.isArray(c.weapons) || c.weapons.length === 0) {
    c.weapons = [emptyWeapon()];
  }

  const wOpts = '<option value="__custom__">Custom / Manual</option>' +
    (typeof WEAPON_DATA !== 'undefined'
      ? Object.keys(WEAPON_DATA).map(k => `<option value="${k}">${k} (${WEAPON_DATA[k].type})</option>`).join('')
      : '');

  box.innerHTML = c.weapons.map((w, i) => `
    <div class="weapon-block" data-wpn-idx="${i}">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <h4 style="color:var(--accent2); 
