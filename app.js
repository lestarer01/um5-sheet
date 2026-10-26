// LocalStorage & State Management
const STORAGE_KEY = 'um5_chars';
let characterList = [];
let currentCharacterId = null;
let memoryBackup = [];

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('localStorage read failed, using memory backup');
  }
  return memoryBackup;
}

function saveStorage(data) {
  memoryBackup = data;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('localStorage save failed');
  }
}

// Helpers
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function setValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

function calcMod(score) {
  return Math.floor((parseInt(score || 10) - 10) / 2);
}

function calcProf(level) {
  const lvl = parseInt(level || 1);
  if (lvl >= 17) return 6;
  if (lvl >= 13) return 5;
  if (lvl >= 9) return 4;
  if (lvl >= 5) return 3;
  return 2;
}

// Populate Dropdowns from database.js
function populateDropdowns() {
  const ladderSelect = document.getElementById('char-ladder');
  const classSelect = document.getElementById('char-class');
  const wpn1Select = document.getElementById('wpn-1-preset');
  const wpn2Select = document.getElementById('wpn-2-preset');

  if (ladderSelect && typeof LADDER_DATA !== 'undefined') {
    ladderSelect.innerHTML = Object.keys(LADDER_DATA)
      .map(l => `<option value="${l}">${l}</option>`)
      .join('');
  }

  if (classSelect && typeof CLASS_DATA !== 'undefined') {
    classSelect.innerHTML = Object.keys(CLASS_DATA)
      .map(c => `<option value="${c}">${c}</option>`)
      .join('');
  }

  if (typeof WEAPON_DATA !== 'undefined') {
    const weaponOptions = [
      '<option value="__custom__">-- Custom / Manual Entry --</option>',
      ...Object.keys(WEAPON_DATA).map(w => `<option value="${w}">${w} (${WEAPON_DATA[w].type})</option>`)
    ].join('');

    if (wpn1Select) wpn1Select.innerHTML = weaponOptions;
    if (wpn2Select) wpn2Select.innerHTML = weaponOptions;
  }
}

// Apply Weapon Presets
function applyWeaponPreset(num) {
  const selectId = `wpn-${num}-preset`;
  const selected = getValue(selectId);
  if (selected === '__custom__' || !WEAPON_DATA[selected]) return;

  const w = WEAPON_DATA[selected];
  setValue(`wpn-${num}-name`, selected);
  setValue(`wpn-${num}-damage`, w.damage);
  setValue(`wpn-${num}-range`, w.range);
  setValue(`wpn-${num}-props`, w.properties);
  setValue(`wpn-${num}-max-ammo`, w.magSize);
  setValue(`wpn-${num}-cur-ammo`, w.magSize);

  const curDisplay = document.getElementById(`wpn-${num}-cur-display`);
  if (curDisplay) curDisplay.innerText = w.magSize;

  readForm();
}

function markCustom(num) {
  setValue(`wpn-${num}-preset`, '__custom__');
}

function fireWeapon(num) {
  let cur = parseInt(getValue(`wpn-${num}-cur-ammo`)) || 0;
  if (cur > 0) {
    cur -= 1;
    setValue(`wpn-${num}-cur-ammo`, cur);
    const display = document.getElementById(`wpn-${num}-cur-display`);
    if (display) display.innerText = cur;
    readForm();
  }
}

function reloadWeapon(num) {
  const max = parseInt(getValue(`wpn-${num}-max-ammo`)) || 0;
  setValue(`wpn-${num}-cur-ammo`, max);
  const display = document.getElementById(`wpn-${num}-cur-display`);
  if (display) display.innerText = max;
  readForm();
}

// Character Operations
function createNewCharacter() {
  const newChar = {
    id: 'char_' + Date.now(),
    name: 'New Operative',
    species: 'Human',
    background: 'Mercenary',
    ladder: 'Born Leader',
    class: 'Gunslinger',
    archetype: '',
    level: 1,

    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
    hpMax: 10, hpCurrent: 10, hpTemp: 0,
    ac: 10, speed: 30,

    wpn1Preset: '__custom__', wpn1Name: 'Sidearm', wpn1MaxAmmo: 12, wpn1CurrentAmmo: 12, wpn1Damage: '1d6', wpn1Range: '50/150', wpn1Props: 'Light',
    wpn2Preset: '__custom__', wpn2Name: '', wpn2MaxAmmo: 0, wpn2CurrentAmmo: 0, wpn2Damage: '', wpn2Range: '', wpn2Props: '',

    credits: 500,
    inventory: 'Standard Tactical Gear, Commlink',
    abilitiesNotes: ''
  };

  characterList.push(newChar);
  currentCharacterId = newChar.id;
  saveStorage(characterList);
  loadCharacterToForm(newChar);
  renderCharacterList();
}

function readForm() {
  if (!currentCharacterId) return null;
  const char = characterList.find(c => c.id === currentCharacterId);
  if (!char) return null;

  char.name = getValue('char-name') || 'Unnamed Operative';
  char.species = getValue('char-species');
  char.background = getValue('char-background');
  char.ladder = getValue('char-ladder');
  char.class = getValue('char-class');
  char.archetype = getValue('char-archetype');
  char.level = parseInt(getValue('char-level')) || 1;

  char.str = parseInt(getValue('stat-str')) || 10;
  char.dex = parseInt(getValue('stat-dex')) || 10;
  char.con = parseInt(getValue('stat-con')) || 10;
  char.int = parseInt(getValue('stat-int')) || 10;
  char.wis = parseInt(getValue('stat-wis')) || 10;
  char.cha = parseInt(getValue('stat-cha')) || 10;

  char.hpMax = parseInt(getValue('hp-max')) || 10;
  char.hpCurrent = parseInt(getValue('hp-current')) || 0;
  char.hpTemp = parseInt(getValue('hp-temp')) || 0;
  char.ac = parseInt(getValue('ac-val')) || 10;
  char.speed = parseInt(getValue('speed-val')) || 30;

  char.wpn1Preset = getValue('wpn-1-preset');
  char.wpn1Name = getValue('wpn-1-name');
  char.wpn1MaxAmmo = parseInt(getValue('wpn-1-max-ammo')) || 0;
  char.wpn1CurrentAmmo = parseInt(getValue('wpn-1-cur-ammo')) || 0;
  char.wpn1Damage = getValue('wpn-1-damage');
  char.wpn1Range = getValue('wpn-1-range');
  char.wpn1Props = getValue('wpn-1-props');

  char.wpn2Preset = getValue('wpn-2-preset');
  char.wpn2Name = getValue('wpn-2-name');
  char.wpn2MaxAmmo = parseInt(getValue('wpn-2-max-ammo')) || 0;
  char.wpn2CurrentAmmo = parseInt(getValue('wpn-2-cur-ammo')) || 0;
  char.wpn2Damage = getValue('wpn-2-damage');
  char.wpn2Range = getValue('wpn-2-range');
  char.wpn2Props = getValue('wpn-2-props');

  char.credits = parseInt(getValue('credits-val')) || 0;
  char.inventory = getValue('inventory-val');
  char.abilitiesNotes = getValue('char-abilities-notes');

  saveStorage(characterList);
  recalculateCalculatedFields();
  return char;
}

function loadCharacterToForm(c) {
  if (!c) return;

  setValue('char-name', c.name || '');
  setValue('char-species', c.species || '');
  setValue('char-background', c.background || '');
  setValue('char-ladder', c.ladder || '');
  setValue('char-class', c.class || '');
  setValue('char-archetype', c.archetype || '');
  setValue('char-level', c.level || 1);

  setValue('stat-str', c.str || 10);
  setValue('stat-dex', c.dex || 10);
  setValue('stat-con', c.con || 10);
  setValue('stat-int', c.int || 10);
  setValue('stat-wis', c.wis || 10);
  setValue('stat-cha', c.cha || 10);

  setValue('hp-max', c.hpMax || 10);
  setValue('hp-current', c.hpCurrent || 10);
  setValue('hp-temp', c.hpTemp || 0);
  setValue('ac-val', c.ac || 10);
  setValue('speed-val', c.speed || 30);

  setValue('wpn-1-preset', c.wpn1Preset || '__custom__');
  setValue('wpn-1-name', c.wpn1Name || '');
  setValue('wpn-1-max-ammo', c.wpn1MaxAmmo || 0);
  setValue('wpn-1-cur-ammo', c.wpn1CurrentAmmo || 0);
  setValue('wpn-1-damage', c.wpn1Damage || '');
  setValue('wpn-1-range', c.wpn1Range || '');
  setValue('wpn-1-props', c.wpn1Props || '');

  setValue('wpn-2-preset', c.wpn2Preset || '__custom__');
  setValue('wpn-2-name', c.wpn2Name || '');
  setValue('wpn-2-max-ammo', c.wpn2MaxAmmo || 0);
  setValue('wpn-2-cur-ammo', c.wpn2CurrentAmmo || 0);
  setValue('wpn-2-damage', c.wpn2Damage || '');
  setValue('wpn-2-range', c.wpn2Range || '');
  setValue('wpn-2-props', c.wpn2Props || '');

  const cur1 = document.getElementById('wpn-1-cur-display');
  if (cur1) cur1.innerText = c.wpn1CurrentAmmo || 0;

  const cur2 = document.getElementById('wpn-2-cur-display');
  if (cur2) cur2.innerText = c.wpn2CurrentAmmo || 0;

  setValue('credits-val', c.credits || 0);
  setValue('inventory-val', c.inventory || '');
  setValue('char-abilities-notes', c.abilitiesNotes || '');

  recalculateCalculatedFields();
}

function recalculateCalculatedFields() {
  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  stats.forEach(s => {
    const score = parseInt(getValue(`stat-${s}`)) || 10;
    const mod = calcMod(score);
    const modEl = document.getElementById(`mod-${s}`);
    if (modEl) modEl.innerText = (mod >= 0 ? '+' : '') + mod;
  });

  const level = parseInt(getValue('char-level')) || 1;
  const prof = calcProf(level);

  const profEl = document.getElementById('prof-bonus-display');
  if (profEl) profEl.innerText = '+' + prof;

  const wisMod = calcMod(getValue('stat-wis'));
  const passivePerc = 10 + wisMod;
  const percEl = document.getElementById('passive-perception-display');
  if (percEl) percEl.innerText = passivePerc;
}

// Render Functions
function renderCharacterList() {
  const container = document.getElementById('character-list');
  if (!container) return;

  if (characterList.length === 0) {
    container.innerHTML = '<p class="empty-msg">No operatives active. Create one above.</p>';
    return;
  }

  container.innerHTML = characterList.map(c => `
    <div class="char-card ${c.id === currentCharacterId ? 'active-char' : ''}" onclick="selectCharacter('${c.id}')">
      <div>
        <strong>${c.name}</strong>
        <span class="char-sub">${c.species || 'Human'} • Lvl ${c.level} ${c.ladder} ${c.class}</span>
      </div>
      <button class="btn danger-btn" onclick="deleteCharacter(event, '${c.id}')">Delete</button>
    </div>
  `).join('');
}

function selectCharacter(id) {
  currentCharacterId = id;
  const c = characterList.find(char => char.id === id);
  if (c) loadCharacterToForm(c);
  renderCharacterList();
  switchPage('page-sheet');
}

function deleteCharacter(event, id) {
  event.stopPropagation();
  if (!confirm('Delete this operative?')) return;
  characterList = characterList.filter(c => c.id !== id);
  saveStorage(characterList);
  if (currentCharacterId === id) {
    currentCharacterId = characterList.length ? characterList[0].id : null;
    if (currentCharacterId) {
      loadCharacterToForm(characterList[0]);
    }
  }
  renderCharacterList();
}

function switchPage(pageId) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const targetPage = document.getElementById(pageId);
  const targetBtn = document.querySelector(`[data-tab="${pageId}"]`);

  if (targetPage) targetPage.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  if (pageId === 'page-abilities') renderAbilities();
}

function renderAbilities() {
  const ladderBox = document.getElementById('ladder-abilities-container');
  const classBox = document.getElementById('class-abilities-container');

  const ladderName = getValue('char-ladder');
  const className = getValue('char-class');
  const level = parseInt(getValue('char-level')) || 1;

  if (ladderBox && typeof LADDER_DATA !== 'undefined' && LADDER_DATA[ladderName]) {
    const lData = LADDER_DATA[ladderName];
    const unlocked = lData.abilities.filter(a => a.level <= level);

    ladderBox.innerHTML = `
      <p class="ladder-desc">${lData.desc}</p>
      ${unlocked.map(a => `
        <div class="ability-entry">
          <div class="ability-entry-header">
            <span class="ability-entry-name">${a.name}</span>
            <span class="ability-entry-level">Level ${a.level}</span>
          </div>
          <p class="ability-entry-desc">${a.desc}</p>
        </div>
      `).join('')}
    `;
  }

  if (classBox && typeof CLASS_DATA !== 'undefined' && CLASS_DATA[className]) {
    const cData = CLASS_DATA[className];
    const unlocked = cData.abilities.filter(a => a.level <= level);

    classBox.innerHTML = `
      <p class="ladder-desc">Hit Die: ${cData.hitDie} | Primary: ${cData.primaryStat}</p>
      ${unlocked.map(a => `
        <div class="ability-entry">
          <div class="ability-entry-header">
            <span class="ability-entry-name">${a.name}</span>
            <span class="ability-entry-level">Level ${a.level}</span>
          </div>
          <p class="ability-entry-desc">${a.desc}</p>
        </div>
      `).join('')}
    `;
  }
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  characterList = loadStorage();
  populateDropdowns();

  if (characterList.length > 0) {
    currentCharacterId = characterList[0].id;
    loadCharacterToForm(characterList[0]);
  } else {
    createNewCharacter();
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.dataset.tab));
  });

  const btnNew = document.getElementById('btn-new-char');
  if (btnNew) btnNew.addEventListener('click', createNewCharacter);

  document.querySelectorAll('#page-sheet input, #page-sheet select, #page-sheet textarea').forEach(input => {
    input.addEventListener('input', readForm);
    input.addEventListener('change', readForm);
  });

  const notes = document.getElementById('char-abilities-notes');
  if (notes) {
    notes.addEventListener('input', readForm);
  }

  renderCharacterList();
});
