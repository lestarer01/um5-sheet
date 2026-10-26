const STORAGE_KEY = 'um5_chars_v2';
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
function mod(score) {
  return Math.floor((parseInt(score || 10, 10) - 10) / 2);
}
function fmtMod(n) { return (n >= 0 ? '+' : '') + n; }
function profBonus(level) {
  const l = parseInt(level || 1, 10);
  if (l >= 17) return 6;
  if (l >= 13) return 5;
  if (l >= 9) return 4;
  if (l >= 5) return 3;
  return 2;
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
  const ladder = $('c-ladder');
  const cls = $('c-class');
  const arm = $('armor-preset');
  const w1 = $('w1-preset');
  const w2 = $('w2-preset');

  ladder.innerHTML = Object.keys(LADDER_DATA).map(k =>
    `<option value="${k}">${k}</option>`).join('');
  cls.innerHTML = Object.keys(CLASS_DATA).map(k =>
    `<option value="${k}">${k}</option>`).join('');

  arm.innerHTML = '<option value="__custom__">Custom / Manual</option>' +
    Object.keys(ARMOR_DATA).map(k =>
      `<option value="${k}">${k} (AC ${ARMOR_DATA[k].baseAc})</option>`).join('');

  const wOpts = '<option value="__custom__">Custom / Manual</option>' +
    Object.keys(WEAPON_DATA).map(k =>
      `<option value="${k}">${k} (${WEAPON_DATA[k].type})</option>`).join('');
  w1.innerHTML = wOpts;
  w2.innerHTML = wOpts;
}

function buildSkillsUI() {
  const box = $('skills-box');
  box.innerHTML = SKILL_LIST.map((sk, i) => `
    <div class="skill-row">
      <span class="skill-name">${sk.name}</span>
      <span class="skill-stat">${sk.stat}</span>
      <span class="skill-bonus" id="sk-bonus-${i}">+0</span>
      <div class="skill-checks">
        <label><input type="checkbox" id="sk-p-${i}" data-sk="${i}" /> Prof</label>
        <label><input type="checkbox" id="sk-e-${i}" data-sk="${i}" /> Exp</label>
      </div>
    </div>
  `).join('');
}

function recalc() {
  ['str','dex','con','int','wis','cha','vig'].forEach(s => {
    const m = mod(val('s-' + s));
    const el = $('m-' + s);
    if (el) el.textContent = fmtMod(m);
  });

  const lvl = val('c-lvl') || 1;
  const pb = profBonus(lvl);
  $('prof-display').textContent = fmtMod(pb);

  const wisM = mod(val('s-wis'));
  $('pass-perc').textContent = 10 + wisM;
  $('vig-save').textContent = fmtMod(mod(val('s-vig')) + pb);

  // skill bonuses
  SKILL_LIST.forEach((sk, i) => {
    const statMod = mod(val('s-' + sk.stat));
    const isProf = val('sk-p-' + i);
    const isExp = val('sk-e-' + i);
    let total = statMod;
    if (isProf) total += pb;
    if (isExp) total += pb;
    const el = $('sk-bonus-' + i);
    if (el) el.textContent = fmtMod(total);
  });
}

function applyArmor() {
  const key = val('armor-preset');
  if (!key || key === '__custom__' || !ARMOR_DATA[key]) return;
  const a = ARMOR_DATA[key];
  let dex = mod(val('s-dex'));
  if (dex > a.maxDex) dex = a.maxDex;
  val('ac-val', a.baseAc + dex);
  val('armor-name', key);
  val('armor-props', a.props || a.type);
  saveCurrent();
}

function applyWeapon(n) {
  const key = val(`w${n}-preset`);
  if (!key || key === '__custom__' || !WEAPON_DATA[key]) return;
  const w = WEAPON_DATA[key];
  val(`w${n}-name`, key);
  val(`w${n}-dmg`, w.damage);
  val(`w${n}-range`, w.range);
  val(`w${n}-props`, w.properties);
  val(`w${n}-max`, w.magSize);
  $(`w${n}-cur`).textContent = w.magSize;
  saveCurrent();
}

function markWeaponCustom(n) {
  val(`w${n}-preset`, '__custom__');
}

function fire(n) {
  let cur = parseInt($(`w${n}-cur`).textContent, 10) || 0;
  if (cur > 0) {
    cur -= 1;
    $(`w${n}-cur`).textContent = cur;
    saveCurrent();
  }
}
function reload(n) {
  const max = parseInt(val(`w${n}-max`), 10) || 0;
  $(`w${n}-cur`).textContent = max;
  saveCurrent();
}

function blankChar() {
  return {
    id: 'c_' + Date.now(),
    name: 'New Operative',
    species: 'Human',
    bg: 'Mercenary',
    arch: '',
    ladder: 'Born Leader',
    className: 'Gunslinger',
    lvl: 1,
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, vig: 10,
    hpMax: 10, hpCur: 10, hpTemp: 0,
    ac: 10, spd: 30, init: 0,
    dsS: [false,false,false], dsF: [false,false,false],
    armorPreset: 'Plain Clothes', armorName: 'Plain Clothes', armorProps: '',
    w1Preset: '__custom__', w1Name: '', w1Dmg: '', w1Range: '', w1Props: '', w1Max: 0, w1Cur: 0,
    w2Preset: '__custom__', w2Name: '', w2Dmg: '', w2Range: '', w2Props: '', w2Max: 0, w2Cur: 0,
    credits: 500, inventory: '',
    skills: {},
    featNotes: '',
    mpMax: 0, mpCur: 0, spellDc: 10, spellAtk: 0, magicSource: '', spellList: ''
  };
}

function createChar() {
  const c = blankChar();
  chars.push(c);
  activeId = c.id;
  saveStorage();
  loadToForm(c);
  renderRoster();
  switchTab('tab-core');
}

function getActive() {
  return chars.find(c => c.id === activeId) || null;
}

function saveCurrent() {
  const c = getActive();
  if (!c) return;

  c.name = val('c-name') || 'Unnamed';
  c.species = val('c-species');
  c.bg = val('c-bg');
  c.arch = val('c-arch');
  c.ladder = val('c-ladder');
  c.className = val('c-class');
  c.lvl = parseInt(val('c-lvl'), 10) || 1;

  c.str = +val('s-str') || 10;
  c.dex = +val('s-dex') || 10;
  c.con = +val('s-con') || 10;
  c.int = +val('s-int') || 10;
  c.wis = +val('s-wis') || 10;
  c.cha = +val('s-cha') || 10;
  c.vig = +val('s-vig') || 10;

  c.hpMax = +val('hp-max') || 0;
  c.hpCur = +val('hp-cur') || 0;
  c.hpTemp = +val('hp-temp') || 0;
  c.ac = +val('ac-val') || 10;
  c.spd = +val('spd-val') || 30;
  c.init = +val('init-val') || 0;

  c.dsS = [val('ds-s1'), val('ds-s2'), val('ds-s3')];
  c.dsF = [val('ds-f1'), val('ds-f2'), val('ds-f3')];

  c.armorPreset = val('armor-preset');
  c.armorName = val('armor-name');
  c.armorProps = val('armor-props');

  c.w1Preset = val('w1-preset');
  c.w1Name = val('w1-name');
  c.w1Dmg = val('w1-dmg');
  c.w1Range = val('w1-range');
  c.w1Props = val('w1-props');
  c.w1Max = +val('w1-max') || 0;
  c.w1Cur = parseInt($('w1-cur').textContent, 10) || 0;

  c.w2Preset = val('w2-preset');
  c.w2Name = val('w2-name');
  c.w2Dmg = val('w2-dmg');
  c.w2Range = val('w2-range');
  c.w2Props = val('w2-props');
  c.w2Max = +val('w2-max') || 0;
  c.w2Cur = parseInt($('w2-cur').textContent, 10) || 0;

  c.credits = +val('credits') || 0;
  c.inventory = val('inventory');

  c.skills = {};
  SKILL_LIST.forEach((_, i) => {
    c.skills['p' + i] = val('sk-p-' + i);
    c.skills['e' + i] = val('sk-e-' + i);
  });

  c.featNotes = val('feat-notes');
  c.mpMax = +val('mp-max') || 0;
  c.mpCur = +val('mp-cur') || 0;
  c.spellDc = +val('spell-dc') || 10;
  c.spellAtk = +val('spell-atk') || 0;
  c.magicSource = val('magic-source');
  c.spellList = val('spell-list');

  saveStorage();
  recalc();
  renderRoster();
}

function loadToForm(c) {
  if (!c) return;
  activeId = c.id;

  val('c-name', c.name);
  val('c-species', c.species);
  val('c-bg', c.bg);
  val('c-arch', c.arch);
  val('c-ladder', c.ladder);
  val('c-class', c.className);
  val('c-lvl', c.lvl);

  val('s-str', c.str); val('s-dex', c.dex); val('s-con', c.con);
  val('s-int', c.int); val('s-wis', c.wis); val('s-cha', c.cha);
  val('s-vig', c.vig != null ? c.vig : 10);

  val('hp-max', c.hpMax); val('hp-cur', c.hpCur); val('hp-temp', c.hpTemp || 0);
  val('ac-val', c.ac); val('spd-val', c.spd); val('init-val', c.init || 0);

  val('ds-s1', c.dsS && c.dsS[0]); val('ds-s2', c.dsS && c.dsS[1]); val('ds-s3', c.dsS && c.dsS[2]);
  val('ds-f1', c.dsF && c.dsF[0]); val('ds-f2', c.dsF && c.dsF[1]); val('ds-f3', c.dsF && c.dsF[2]);

  val('armor-preset', c.armorPreset || '__custom__');
  val('armor-name', c.armorName || '');
  val('armor-props', c.armorProps || '');

  val('w1-preset', c.w1Preset || '__custom__');
  val('w1-name', c.w1Name || ''); val('w1-dmg', c.w1Dmg || '');
  val('w1-range', c.w1Range || ''); val('w1-props', c.w1Props || '');
  val('w1-max', c.w1Max || 0); $('w1-cur').textContent = c.w1Cur || 0;

  val('w2-preset', c.w2Preset || '__custom__');
  val('w2-name', c.w2Name || ''); val('w2-dmg', c.w2Dmg || '');
  val('w2-range', c.w2Range || ''); val('w2-props', c.w2Props || '');
  val('w2-max', c.w2Max || 0); $('w2-cur').textContent = c.w2Cur || 0;

  val('credits', c.credits || 0);
  val('inventory', c.inventory || '');

  SKILL_LIST.forEach((_, i) => {
    val('sk-p-' + i, c.skills && c.skills['p' + i]);
    val('sk-e-' + i, c.skills && c.skills['e' + i]);
  });

  val('feat-notes', c.featNotes || '');
  val('mp-max', c.mpMax || 0); val('mp-cur', c.mpCur || 0);
  val('spell-dc', c.spellDc || 10); val('spell-atk', c.spellAtk || 0);
  val('magic-source', c.magicSource || '');
  val('spell-list', c.spellList || '');

  recalc();
  renderAbilities();
  renderRoster();
}

function renderRoster() {
  const box = $('roster');
  if (!chars.length) {
    box.innerHTML = '<p class="empty-msg">No operatives yet. Create one.</p>';
    return;
  }
  box.innerHTML = chars.map(c => `
    <div class="char-card ${c.id === activeId ? 'active-char' : ''}" data-id="${c.id}">
      <div>
        <strong>${c.name || 'Unnamed'}</strong>
        <small>${c.species || 'Human'} · Lvl ${c.lvl || 1} ${c.ladder || ''} ${c.className || ''}</small>
      </div>
      <button class="btn btn-danger" data-del="${c.id}">Delete</button>
    </div>
  `).join('');
}

function renderAbilities() {
  const c = getActive();
  const ladderBox = $('ladder-box');
  const classBox = $('class-box');
  const lvl = parseInt(val('c-lvl'), 10) || 1;
  const ladderName = val('c-ladder');
  const className = val('c-class');

  if (LADDER_DATA[ladderName]) {
    const L = LADDER_DATA[ladderName];
    const list = L.abilities.filter(a => a.level <= lvl);
    ladderBox.innerHTML = `<p class="ladder-desc">${L.desc}</p>` + list.map(a => `
      <div class="ability-entry">
        <div class="ability-entry-header">
          <span class="ability-entry-name">${a.name}</span>
          <span class="ability-entry-level">Lvl ${a.level}</span>
        </div>
        <div class="ability-entry-desc">${a.desc}</div>
      </div>
    `).join('') || '<p class="empty-msg">No features unlocked yet.</p>';
  } else ladderBox.innerHTML = '';

  if (CLASS_DATA[className]) {
    const C = CLASS_DATA[className];
    const list = C.abilities.filter(a => a.level <= lvl);
    classBox.innerHTML = `<p class="ladder-desc">${C.desc} · Hit Die ${C.hitDie} · Primary ${C.primaryStat}</p>` +
      list.map(a => `
      <div class="ability-entry">
        <div class="ability-entry-header">
          <span class="ability-entry-name">${a.name}</span>
          <span class="ability-entry-level">Lvl ${a.level}</span>
        </div>
        <div class="ability-entry-desc">${a.desc}</div>
      </div>
    `).join('') || '<p class="empty-msg">No features unlocked yet.</p>';
  } else classBox.innerHTML = '';
}

function switchTab(id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('.tab-page').forEach(p => p.classList.toggle('active', p.id === id));
  if (id === 'tab-abilities') renderAbilities();
  if (id === 'tab-skills') recalc();
}

function bindEvents() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  $('btn-new').addEventListener('click', createChar);

  $('roster').addEventListener('click', (e) => {
    const del = e.target.getAttribute('data-del');
    if (del) {
      e.stopPropagation();
      if (!confirm('Delete this operative?')) return;
      chars = chars.filter(c => c.id !== del);
      if (activeId === del) {
        activeId = chars.length ? chars[0].id : null;
        if (activeId) loadToForm(chars[0]);
      }
      saveStorage();
      renderRoster();
      return;
    }
    const card = e.target.closest('.char-card');
    if (card) {
      const c = chars.find(x => x.id === card.dataset.id);
      if (c) {
        loadToForm(c);
        switchTab('tab-core');
      }
    }
  });

  $('armor-preset').addEventListener('change', applyArmor);

  $('w1-preset').addEventListener('change', () => applyWeapon(1));
  $('w2-preset').addEventListener('change', () => applyWeapon(2));

  ['w1-name','w1-dmg','w1-range','w1-props','w1-max'].forEach(id => {
    $(id).addEventListener('input', () => markWeaponCustom(1));
  });
  ['w2-name','w2-dmg','w2-range','w2-props','w2-max'].forEach(id => {
    $(id).addEventListener('input', () => markWeaponCustom(2));
  });

  $('btn-fire-1').addEventListener('click', () => fire(1));
  $('btn-reload-1').addEventListener('click', () => reload(1));
  $('btn-fire-2').addEventListener('click', () => fire(2));
  $('btn-reload-2').addEventListener('click', () => reload(2));

  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => { saveCurrent(); });
    el.addEventListener('change', () => { saveCurrent(); });
  });

  $('c-ladder').addEventListener('change', () => { saveCurrent(); renderAbilities(); });
  $('c-class').addEventListener('change', () => { saveCurrent(); renderAbilities(); });
  $('c-lvl').addEventListener('change', () => { saveCurrent(); renderAbilities(); });
  $('s-dex').addEventListener('change', () => {
    if (val('armor-preset') !== '__custom__') applyArmor();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadStorage();
  populateSelects();
  buildSkillsUI();
  bindEvents();

  if (chars.length) {
    loadToForm(chars[0]);
  } else {
    createChar();
  }
  renderRoster();
  recalc();
});
