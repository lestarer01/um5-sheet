let memoryBackup = [];
function loadStorage() {
  try {
    const raw = localStorage.getItem('um5_chars');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return memoryBackup;
  }
}
function saveStorage(data) {
  memoryBackup = data;
  try {
    localStorage.setItem('um5_chars', JSON.stringify(data));
  } catch (e) {}
}

const SKILLS = [
  { name: 'Acrobatics', stat: 'dex' },
  { name: 'Athletics', stat: 'str' },
  { name: 'Computers', stat: 'int' },
  { name: 'Demolitions', stat: 'int' },
  { name: 'Driving', stat: 'dex' },
  { name: 'Electronics', stat: 'int' },
  { name: 'Heavy Weapons', stat: 'str' },
  { name: 'History', stat: 'int' },
  { name: 'Insight', stat: 'wis' },
  { name: 'Investigation', stat: 'int' },
  { name: 'Medicine', stat: 'wis' },
  { name: 'Perception', stat: 'wis' },
  { name: 'Persuasion', stat: 'cha' },
  { name: 'Sleight of Hand', stat: 'dex' },
  { name: 'Stealth', stat: 'dex' },
  { name: 'Survival', stat: 'wis' },
  { name: 'Technology', stat: 'int' },
  { name: 'Vehicle (Air/Sea)', stat: 'dex' }
];

let characters = loadStorage();
let currentCharId = null;
let saveTimeout = null;

window.switchPage = function(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));

  const targetPage = document.getElementById('page-' + page);
  const targetTab = document.getElementById('tab-' + page);

  if (targetPage) targetPage.classList.add('active');
  if (targetTab) targetTab.classList.add('active');

  if (page === 'list') renderCharacterList();
  if (page === 'skills') renderSkills();
};

window.renderCharacterList = function() {
  const container = document.getElementById('character-list');
  if (!container) return;

  if (!characters || characters.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 30px; color:#8b949e;">
        <div style="font-size: 40px; margin-bottom:8px;">🛡️</div>
        <h3>No Operatives Deployed</h3>
        <p style="font-size: 11px; margin-top: 4px;">Click button below to create your first character.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = characters.map(c => {
    const initial = (c.name && c.name.length > 0) ? c.name[0].toUpperCase() : '?';
    return `
      <div class="char-card" onclick="openCharacter('${c.id}')">
        <div style="display:flex; align-items:center;">
          <div class="char-avatar">${initial}</div>
          <div>
            <div style="font-weight:800; font-size:15px; color:#fff;">${c.name || 'Unnamed Operative'}</div>
            <div style="font-size:11px; color:#8b949e;">Lvl ${c.level || 1} ${c.ladder || ''} ${c.class || ''}</div>
            <div style="font-size:11px; color:#00f2fe; margin-top:2px;">HP: ${c.currentHp || 10}/${c.maxHp || 10} | Credits: ₡${c.credits || 0}</div>
          </div>
        </div>
        <button class="icon-btn" onclick="event.stopPropagation(); deleteCharacter('${c.id}')">🗑</button>
      </div>
    `;
  }).join('');
};

window.createNewCharacter = function() {
  const newChar = {
    id: 'c_' + Date.now(),
    name: '', ladder: '', class: '', race: '', level: 1, credits: 500,
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
    ac: 10, maxHp: 10, currentHp: 10, speed: 30, notes: '',
    wpn1Name: '', wpn1MaxAmmo: 30, wpn1CurrentAmmo: 30,
    wpn2Name: '', wpn2MaxAmmo: 12, wpn2CurrentAmmo: 12,
    proficientSkills: []
  };
  characters.push(newChar);
  saveStorage(characters);
  openCharacter(newChar.id);
};

window.openCharacter = function(id) {
  currentCharId = id;
  const c = characters.find(char => char.id === id);
  if (!c) return;

  document.getElementById('char-name').value = c.name || '';
  document.getElementById('char-ladder').value = c.ladder || '';
  document.getElementById('char-class').value = c.class || '';
  document.getElementById('char-race').value = c.race || '';
  document.getElementById('char-level').value = c.level || 1;
  document.getElementById('char-credits').value = c.credits || 0;

  document.getElementById('ability-str').value = c.str || 10;
  document.getElementById('ability-dex').value = c.dex || 10;
  document.getElementById('ability-con').value = c.con || 10;
  document.getElementById('ability-int').value = c.int || 10;
  document.getElementById('ability-wis').value = c.wis || 10;
  document.getElementById('ability-cha').value = c.cha || 10;

  document.getElementById('char-ac').value = c.ac || 10;
  document.getElementById('char-hp').value = c.maxHp || 10;
  document.getElementById('char-speed').value = c.speed || 30;
  document.getElementById('char-notes').value = c.notes || '';

  document.getElementById('wpn-1-name').value = c.wpn1Name || '';
  document.getElementById('wpn-1-max-ammo').value = c.wpn1MaxAmmo || 30;
  document.getElementById('wpn-2-name').value = c.wpn2Name || '';
  document.getElementById('wpn-2-max-ammo').value = c.wpn2MaxAmmo || 12;

  updateAll();
  switchPage('sheet');
};

window.deleteCharacter = function(id) {
  if (confirm('Delete this operative?')) {
    characters = characters.filter(c => c.id !== id);
    saveStorage(characters);
    renderCharacterList();
  }
};

function calcMod(score) { return Math.floor((score - 10) / 2); }
function modStr(score) { const m = calcMod(score); return m >= 0 ? '+' + m : '' + m; }

window.updateAll = function() {
  ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(s => {
    const val = parseInt(document.getElementById('ability-' + s).value) || 10;
    document.getElementById('mod-' + s).textContent = modStr(val);
  });

  const dex = parseInt(document.getElementById('ability-dex').value) || 10;
  document.getElementById('char-initiative').textContent = modStr(dex);

  const lvl = parseInt(document.getElementById('char-level').value) || 1;
  let prof = 2;
  if (lvl >= 17) prof = 6;
  else if (lvl >= 13) prof = 5;
  else if (lvl >= 9) prof = 4;
  else if (lvl >= 5) prof = 3;
  document.getElementById('char-prof').textContent = '+' + prof;

  updateHpDisplay();
  updateAmmoDisplay();
};

window.updateHpDisplay = function() {
  const c = characters.find(char => char.id === currentCharId);
  if (!c) return;
  const maxHp = parseInt(document.getElementById('char-hp').value) || 10;
  const curHp = (c.currentHp !== undefined) ? c.currentHp : maxHp;
  document.getElementById('hp-current').textContent = curHp;
  document.getElementById('hp-max-display').textContent = maxHp;
};

window.changeHp = function(amt) {
  const c = characters.find(char => char.id === currentCharId);
  if (!c) return;
  const maxHp = parseInt(document.getElementById('char-hp').value) || 10;
  const curHp = (c.currentHp !== undefined) ? c.currentHp : maxHp;
  c.currentHp = Math.max(0, Math.min(maxHp, curHp + amt));
  saveStorage(characters);
  updateHpDisplay();
};

window.updateAmmoDisplay = function() {
  const c = characters.find(char => char.id === currentCharId);
  if (!c) return;

  const m1 = parseInt(document.getElementById('wpn-1-max-ammo').value) || 30;
  const m2 = parseInt(document.getElementById('wpn-2-max-ammo').value) || 12;

  const a1 = (c.wpn1CurrentAmmo !== undefined) ? Math.min(m1, c.wpn1CurrentAmmo) : m1;
  const a2 = (c.wpn2CurrentAmmo !== undefined) ? Math.min(m2, c.wpn2CurrentAmmo) : m2;

  document.getElementById('wpn-1-ammo-text').textContent = a1 + ' / ' + m1;
  document.getElementById('wpn-2-ammo-text').textContent = a2 + ' / ' + m2;
};

window.shootWeapon = function(num) {
  const c = characters.find(char => char.id === currentCharId);
  if (!c) return;
  if (num === 1 && c.wpn1CurrentAmmo > 0) c.wpn1CurrentAmmo--;
  if (num === 2 && c.wpn2CurrentAmmo > 0) c.wpn2CurrentAmmo--;
  saveStorage(characters);
  updateAmmoDisplay();
};

window.reloadWeapon = function(num) {
  const c = characters.find(char => char.id === currentCharId);
  if (!c) return;
  if (num === 1) c.wpn1CurrentAmmo = parseInt(document.getElementById('wpn-1-max-ammo').value) || 30;
  if (num === 2) c.wpn2CurrentAmmo = parseInt(document.getElementById('wpn-2-max-ammo').value) || 12;
  saveStorage(characters);
  updateAmmoDisplay();
};

window.renderSkills = function() {
  const c = characters.find(char => char.id === currentCharId);
  const container = document.getElementById('skills-container');
  if (!container) return;
  if (!c) {
    container.innerHTML = '<p style="color:#8b949e; font-size:12px;">Select an operative first.</p>';
    return;
  }

  const lvl = parseInt(document.getElementById('char-level').value) || 1;
  let profBonus = 2;
  if (lvl >= 17) profBonus = 6;
  else if (lvl >= 13) profBonus = 5;
  else if (lvl >= 9) profBonus = 4;
  else if (lvl >= 5) profBonus = 3;

  c.proficientSkills = c.proficientSkills || [];

  container.innerHTML = SKILLS.map(s => {
    const statScore = c[s.stat] || 10;
    const mod = calcMod(statScore);
    const isProf = c.proficientSkills.includes(s.name);
    const total = mod + (isProf ? profBonus : 0);

    return `
      <div class="skill-item">
        <div class="skill-left">
          <input type="checkbox" ${isProf ? 'checked' : ''} onchange="toggleSkill('${s.name}')">
          <span>${s.name} <small style="color:#8b949e">(${s.stat.toUpperCase()})</small></span>
        </div>
        <div class="skill-val">${total >= 0 ? '+' + total : total}</div>
      </div>
    `;
  }).join('');
};

window.toggleSkill = function(name) {
  const c = characters.find(char => char.id === currentCharId);
  if (!c) return;
  c.proficientSkills = c.proficientSkills || [];
  if (c.proficientSkills.includes(name)) {
    c.proficientSkills = c.proficientSkills.filter(s => s !== name);
  } else {
    c.proficientSkills.push(name);
  }
  saveStorage(characters);
  renderSkills();
};

window.autoSave = function() {
  if (!currentCharId) return;
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const c = characters.find(char => char.id === currentCharId);
    if (!c) return;

    c.name = document.getElementById('char-name').value;
    c.ladder = document.getElementById('char-ladder').value;
    c.class = document.getElementById('char-class').value;
    c.race = document.getElementById('char-race').value;
    c.level = parseInt(document.getElementById('char-level').value) || 1;
    c.credits = parseInt(document.getElementById('char-credits').value) || 0;

    c.str = parseInt(document.getElementById('ability-str').value) || 10;
    c.dex = parseInt(document.getElementById('ability-dex').value) || 10;
    c.con = parseInt(document.getElementById('ability-con').value) || 10;
    c.int = parseInt(document.getElementById('ability-int').value) || 10;
    c.wis = parseInt(document.getElementById('ability-wis').value) || 10;
    c.cha = parseInt(document.getElementById('ability-cha').value) || 10;

    c.ac = parseInt(document.getElementById('char-ac').value) || 10;
    c.maxHp = parseInt(document.getElementById('char-hp').value) || 10;
    c.speed = parseInt(document.getElementById('char-speed').value) || 30;
    c.notes = document.getElementById('char-notes').value;

    c.wpn1Name = document.getElementById('wpn-1-name').value;
    c.wpn1MaxAmmo = parseInt(document.getElementById('wpn-1-max-ammo').value) || 30;
    c.wpn2Name = document.getElementById('wpn-2-name').value;
    c.wpn2MaxAmmo = parseInt(document.getElementById('wpn-2-max-ammo').value) || 12;

    saveStorage(characters);
  }, 300);
};

window.onload = function() {
  renderCharacterList();
};
