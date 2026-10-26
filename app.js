const UM5_SKILLS = [
  { name: 'Athletics', stat: 'str' },
  { name: 'Acrobatics', stat: 'dex' },
  { name: 'Sleight of Hands', stat: 'dex' },
  { name: 'Stealth', stat: 'dex' },
  { name: 'Survival', stat: 'dex' },
  { name: 'Detection', stat: 'vig' },
  { name: 'Commune', stat: 'vig' },
  { name: 'Induce', stat: 'vig' },
  { name: 'Arcana', stat: 'int' },
  { name: 'Investigation', stat: 'int' },
  { name: 'History', stat: 'int' },
  { name: 'Nature', stat: 'int' },
  { name: 'Religion', stat: 'int' },
  { name: 'Sciences', stat: 'int' },
  { name: 'Demolitions', stat: 'int' },
  { name: 'Computer use', stat: 'int' },
  { name: 'Engineering', stat: 'int' },
  { name: 'Animal Handling', stat: 'wis' },
  { name: 'Insight', stat: 'wis' },
  { name: 'Perception', stat: 'wis' },
  { name: 'Medicine', stat: 'wis' },
  { name: 'Deception', stat: 'cha' },
  { name: 'Intimidation', stat: 'cha' },
  { name: 'Performance', stat: 'cha' },
];

const STORAGE_KEY = 'um5_chars_v4';
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
  try { const raw = localStorage.getItem(STORAGE_KEY); chars = raw ? JSON.parse(raw) : []; } 
  catch (e) { chars = []; }
}
function saveStorage() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(chars)); } catch (e) {}
}

function populateSelects() {
  if (typeof LADDER_DATA !== 'undefined' && $('c-ladder')) {
    $('c-ladder').innerHTML = Object.keys(LADDER_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  }
  if (typeof CLASS_DATA !== 'undefined' && $('c-class')) {
    $('c-class').innerHTML = Object.keys(CLASS_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  }
  if (typeof ARMOR_DATA !== 'undefined' && $('armor-preset')) {
    $('armor-preset').innerHTML = '<option value="__custom__">Custom / Manual</option>' + Object.keys(ARMOR_DATA).map(k => `<option value="${k}">${k} (AC ${ARMOR_DATA[k].baseAc})</option>`).join('');
  }
  if (typeof WEAPON_DATA !== 'undefined') {
    const wOpts = '<option value="__custom__">Custom / Manual</option>' + Object.keys(WEAPON_DATA).map(k => `<option value="${k}">${k} (${WEAPON_DATA[k].type})</option>`).join('');
    if ($('w1-preset')) $('w1-preset').innerHTML = wOpts;
    if ($('w2-preset')) $('w2-preset').innerHTML = wOpts;
  }
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

function recalc() {
  const lvl = val('c-lvl') || 1;
  const pb = profBonus(lvl);
  if ($('prof-display')) $('prof-display').textContent = fmtMod(pb);

  const stats = ['str','dex','con','int','wis','cha','vig'];
  stats.forEach(s => {
    const score = val('s-' + s);
    const m = mod(score);
    if ($('m-' + s)) $('m-' + s).textContent = fmtMod(m);
    
    const hasSaveProf = val('svS-' + s);
    const saveTotal = m + (hasSaveProf ? pb : 0);
    if ($('sv-' + s)) $('sv-' + s).textContent = fmtMod(saveTotal);
  });

  UM5_SKILLS.forEach((sk, i) => {
    const statMod = mod(val('s-' + sk.stat));
    let total = statMod;
    if (val('sk-p-' + i)) total += pb;
    if (val('sk-e-' + i)) total += pb;
    if ($('sk-bonus-' + i)) $('sk-bonus-' + i).textContent = fmtMod(total);
  });
}

function applyArmor() {
  const key = val('armor-preset');
  if (!key || key === '__custom__' || typeof ARMOR_DATA === 'undefined' || !ARMOR_DATA[key]) return;
  const a = ARMOR_DATA[key];
  let dex = mod(val('s-dex'));
  if (dex > a.maxDex) dex = a.maxDex;
  val('ac-val', a.baseAc + dex);
  val('armor-name', key); val('armor-props', a.props || a.type);
  saveCurrent();
}

function emptyWeapon() {
  return { preset: '__custom__', name: '', dmg: '', range: '', props: '', max: 0, cur: 0 };
}

function renderWeapons() {
  const box = $('weapons-container');
  if (!box) return;
  const c = chars.find(x => x.id === activeId);
  if (!c) return;
  if (!c.weapons || !c.weapons.length) c.weapons = [emptyWeapon()];

  box.innerHTML = c.weapons.map((w, i) => `
    <div class="weapon-block" data-wpn="${i}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <h4 style="color:var(--accent2);margin:0;">Weapon ${i + 1}</h4>
        ${c.weapons.length > 1 ? `<button type="button" class="btn btn-danger" data-remove-wpn="${i}">Remove</button>` : ''}
      </div>
      <div class="field-group">
        <label>Weapon Preset</label>
        <select id="wpn-${i}-preset" data-wpn-preset="${i}"></select>
      </div>
      <div class="grid-2">
        <div class="field-group"><label>Name</label><input type="text" id="wpn-${i}-name" value="${w.name || ''}" /></div>
        <div class="field-group"><label>Damage</label><input type="text" id="wpn-${i}-dmg" value="${w.dmg || ''}" /></div>
      </div>
      <div class="grid-2">
        <div class="field-group"><label>Range</label><input type="text" id="wpn-${i}-range" value="${w.range || ''}" /></div>
        <div class="field-group"><label>Properties</label><input type="text" id="wpn-${i}-props" value="${w.props || ''}" /></div>
      </div>
      <div class="ammo-row">
        <span>Ammo: <strong id="wpn-${i}-cur">${w.cur || 0}</strong> /
          <input type="number" id="wpn-${i}-max" value="${w.max || 0}" style="width:50px;display:inline-block;padding:4px;" />
        </span>
        <div>
          <button type="button" class="btn btn-shoot" data-fire="${i}">SHOOT</button>
          <button type="button" class="btn btn-reload" data-reload="${i}">RELOAD</button>
        </div>
      </div>
    </div>
  `).join('');

  // Fill preset dropdowns
  const wOpts = '<option value="__custom__">Custom / Manual</option>' +
    (typeof WEAPON_DATA !== 'undefined'
      ? Object.keys(WEAPON_DATA).map(k => `<option value="${k}">${k} (${WEAPON_DATA[k].type})</option>`).join('')
      : '');

  c.weapons.forEach((w, i) => {
    const sel = $(`wpn-${i}-preset`);
    if (sel) {
      sel.innerHTML = wOpts;
      sel.value = w.preset || '__custom__';
    }
  });
}

function applyWeaponPreset(i) {
  const c = chars.find(x => x.id === activeId);
  if (!c || !c.weapons[i]) return;
  const key = val(`wpn-${i}-preset`);
  if (!key || key === '__custom__' || typeof WEAPON_DATA === 'undefined' || !WEAPON_DATA[key]) {
    c.weapons[i].preset = '__custom__';
    saveCurrent();
    return;
  }
  const w = WEAPON_DATA[key];
  c.weapons[i].preset = key;
  c.weapons[i].name = key;
  c.weapons[i].dmg = w.damage;
  c.weapons[i].range = w.range;
  c.weapons[i].props = w.properties;
  c.weapons[i].max = w.magSize;
  c.weapons[i].cur = w.magSize;
  val(`wpn-${i}-name`, key);
  val(`wpn-${i}-dmg`, w.damage);
  val(`wpn-${i}-range`, w.range);
  val(`wpn-${i}-props`, w.properties);
  val(`wpn-${i}-max`, w.magSize);
  const curEl = $(`wpn-${i}-cur`);
  if (curEl) curEl.textContent = w.magSize;
  saveCurrent();
}

function readWeaponsFromForm() {
  const c = chars.find(x => x.id === activeId);
  if (!c || !c.weapons) return;
  c.weapons.forEach((w, i) => {
    w.preset = val(`wpn-${i}-preset`) || '__custom__';
    w.name = val(`wpn-${i}-name`) || '';
    w.dmg = val(`wpn-${i}-dmg`) || '';
    w.range = val(`wpn-${i}-range`) || '';
    w.props = val(`wpn-${i}-props`) || '';
    w.max = parseInt(val(`wpn-${i}-max`), 10) || 0;
    const curEl = $(`wpn-${i}-cur`);
    w.cur = curEl ? (parseInt(curEl.textContent, 10) || 0) : 0;
  });
}

function addWeapon() {
  const c = chars.find(x => x.id === activeId);
  if (!c) return;
  if (!c.weapons) c.weapons = [];
  c.weapons.push(emptyWeapon());
  saveStorage();
  renderWeapons();
  bindWeaponEvents();
}

function removeWeapon(i) {
  const c = chars.find(x => x.id === activeId);
  if (!c || !c.weapons || c.weapons.length <= 1) return;
  c.weapons.splice(i, 1);
  saveStorage();
  renderWeapons();
  bindWeaponEvents();
}

function fireWeapon(i) {
  const c = chars.find(x => x.id === activeId);
  if (!c || !c.weapons[i]) return;
  if (c.weapons[i].cur > 0) {
    c.weapons[i].cur -= 1;
    const curEl = $(`wpn-${i}-cur`);
    if (curEl) curEl.textContent = c.weapons[i].cur;
    saveCurrent();
  }
}

function reloadWeapon(i) {
  const c = chars.find(x => x.id === activeId);
  if (!c || !c.weapons[i]) return;
  c.weapons[i].cur = c.weapons[i].max || 0;
  const curEl = $(`wpn-${i}-cur`);
  if (curEl) curEl.textContent = c.weapons[i].cur;
  saveCurrent();
}

function bindWeaponEvents() {
  // Preset change
  document.querySelectorAll('[data-wpn-preset]').forEach(sel => {
    sel.onchange = () => applyWeaponPreset(parseInt(sel.getAttribute('data-wpn-preset'), 10));
  });
  // Fire / Reload / Remove
  document.querySelectorAll('[data-fire]').forEach(btn => {
    btn.onclick = () => fireWeapon(parseInt(btn.getAttribute('data-fire'), 10));
  });
  document.querySelectorAll('[data-reload]').forEach(btn => {
    btn.onclick = () => reloadWeapon(parseInt(btn.getAttribute('data-reload'), 10));
  });
  document.querySelectorAll('[data-remove-wpn]').forEach(btn => {
    btn.onclick = () => removeWeapon(parseInt(btn.getAttribute('data-remove-wpn'), 10));
  });
  // Manual edit → mark custom
  document.querySelectorAll('#weapons-container input').forEach(inp => {
    inp.oninput = () => {
      const block = inp.closest('[data-wpn]');
      if (!block) return;
      const i = parseInt(block.getAttribute('data-wpn'), 10);
      const preset = $(`wpn-${i}-preset`);
      if (preset && preset.value !== '__custom__') {
        // if user types in name/dmg/etc, keep preset unless they want custom
      }
      readWeaponsFromForm();
      saveCurrent();
    };
  });
}

function blankChar() {
  return {
    id: 'c_' + Date.now(), name: 'New Operative', species: 'Human', arch: '', ladder: 'Born Leader', className: 'Gunslinger', lvl: 1,
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, vig: 10,
    saveProfs: {str:false, dex:false, con:false, int:false, wis:false, cha:false, vig:false},
    hpMax: 10, hpCur: 10, hpTemp: 0, hd: '1d10', ac: 10, spd: 30, init: 0,
    dsS: [false,false,false], dsF: [false,false,false],
    armorPreset: 'Plain Clothes', armorName: 'Plain Clothes', armorProps: '',
    weapons: [
      { preset: '__custom__', name: '', dmg: '', range: '', props: '', max: 0, cur: 0 }
    ],
    credits: 500, inventory: '', skills: {}, featNotes: '',
    mpMax: 0, mpCur: 0, spellDc: 10, spellAtk: 0, magicSource: '', spellList: ''
  };
}

function createChar() {
  const c = blankChar(); chars.push(c); activeId = c.id;
  saveStorage(); loadToForm(c); renderRoster(); switchTab('tab-core');
}

function saveCurrent() {
  const c = chars.find(x => x.id === activeId);
  if (!c) return;
  c.name = val('c-name'); c.species = val('c-species'); c.arch = val('c-arch');
  c.ladder = val('c-ladder'); c.className = val('c-class'); c.lvl = val('c-lvl');
  
  c.str = val('s-str'); c.dex = val('s-dex'); c.con = val('s-con'); c.int = val('s-int'); c.wis = val('s-wis'); c.cha = val('s-cha'); c.vig = val('s-vig');
  c.saveProfs = { str: val('svS-str'), dex: val('svS-dex'), con: val('svS-con'), int: val('svS-int'), wis: val('svS-wis'), cha: val('svS-cha'), vig: val('svS-vig') };
  
  c.hpMax = val('hp-max'); c.hpCur = val('hp-cur'); c.hpTemp = val('hp-temp');
  c.hd = val('hd-val'); c.ac = val('ac-val'); c.spd = val('spd-val'); c.init = val('init-val');
  c.dsS = [val('ds-s1'), val('ds-s2'), val('ds-s3')]; c.dsF = [val('ds-f1'), val('ds-f2'), val('ds-f3')];

  c.armorPreset = val('armor-preset'); c.armorName = val('armor-name'); c.armorProps = val('armor-props');
  
  readWeaponsFromForm();

  c.credits = val('credits'); c.inventory = val('inventory');
  UM5_SKILLS.forEach((_, i) => { c.skills['p'+i] = val('sk-p-'+i); c.skills['e'+i] = val('sk-e-'+i); });
  
  c.featNotes = val('feat-notes'); c.mpMax = val('mp-max'); c.mpCur = val('mp-cur');
  c.spellDc = val('spell-dc'); c.spellAtk = val('spell-atk'); c.magicSource = val('magic-source'); c.spellList = val('spell-list');

  saveStorage(); recalc(); renderRoster();
}

function loadToForm(c) {
  if (!c) return;
  activeId = c.id;
  val('c-name', c.name); val('c-species', c.species); val('c-arch', c.arch);
  val('c-ladder', c.ladder); val('c-class', c.className); val('c-lvl', c.lvl);
  
  val('s-str', c.str); val('s-dex', c.dex); val('s-con', c.con); val('s-int', c.int); val('s-wis', c.wis); val('s-cha', c.cha); val('s-vig', c.vig);
  if (!c.saveProfs) c.saveProfs = {};
  val('svS-str', c.saveProfs.str); val('svS-dex', c.saveProfs.dex); val('svS-con', c.saveProfs.con); val('svS-int', c.saveProfs.int); val('svS-wis', c.saveProfs.wis); val('svS-cha', c.saveProfs.cha); val('svS-vig', c.saveProfs.vig);
  
  val('hp-max', c.hpMax); val('hp-cur', c.hpCur); val('hp-temp', c.hpTemp);
  val('hd-val', c.hd || '1d10'); val('ac-val', c.ac); val('spd-val', c.spd); val('init-val', c.init);
  
  if (!c.dsS) c.dsS=[false,false,false]; if (!c.dsF) c.dsF=[false,false,false];
  val('ds-s1', c.dsS[0]); val('ds-s2', c.dsS[1]); val('ds-s3', c.dsS[2]);
  val('ds-f1', c.dsF[0]); val('ds-f2', c.dsF[1]); val('ds-f3', c.dsF[2]);

  val('armor-preset', c.armorPreset); val('armor-name', c.armorName); val('armor-props', c.armorProps);
    
  // Migrate old w1/w2 characters → new weapons array
  if (!c.weapons) {
    c.weapons = [];
    if (c.w1Name || c.w1Preset) {
      c.weapons.push({
        preset: c.w1Preset || '__custom__',
        name: c.w1Name || '',
        dmg: c.w1Dmg || '',
        range: c.w1Range || '',
        props: c.w1Props || '',
        max: c.w1Max || 0,
        cur: c.w1Cur || 0
      });
    }
    if (c.w2Name || c.w2Preset) {
      c.weapons.push({
        preset: c.w2Preset || '__custom__',
        name: c.w2Name || '',
        dmg: c.w2Dmg || '',
        range: c.w2Range || '',
        props: c.w2Props || '',
        max: c.w2Max || 0,
        cur: c.w2Cur || 0
      });
    }
    if (!c.weapons.length) c.weapons = [emptyWeapon()];
  }
  renderWeapons();
  bindWeaponEvents();

  val('credits', c.credits); val('inventory', c.inventory);
  UM5_SKILLS.forEach((_, i) => { val('sk-p-'+i, c.skills && c.skills['p'+i]); val('sk-e-'+i, c.skills && c.skills['e'+i]); });
  
  val('feat-notes', c.featNotes); val('mp-max', c.mpMax); val('mp-cur', c.mpCur);
  val('spell-dc', c.spellDc); val('spell-atk', c.spellAtk); val('magic-source', c.magicSource); val('spell-list', c.spellList);
  
  recalc(); renderAbilities(); renderRoster();
}

function renderRoster() {
  const box = $('roster');
  if (!box) return;
  if (!chars.length) { box.innerHTML = '<p style="color:var(--muted);text-align:center;padding:10px;">No operatives. Create one above.</p>'; return; }
  box.innerHTML = chars.map(c => `
    <div class="char-card ${c.id === activeId ? 'active-char' : ''}" data-id="${c.id}">
      <div><strong>${c.name || 'Unnamed'}</strong><br><small>Lvl ${c.lvl||1} ${c.className||''}</small></div>
      <button class="btn btn-danger" data-del="${c.id}">Delete</button>
    </div>`).join('');
}

function renderAbilities() {
  const lvl = parseInt(val('c-lvl'), 10) || 1;
  const lad = typeof LADDER_DATA !== 'undefined' ? LADDER_DATA[val('c-ladder')] : null;
  const cls = typeof CLASS_DATA !== 'undefined' ? CLASS_DATA[val('c-class')] : null;

  if (lad && $('ladder-box')) {
    const list = lad.abilities.filter(a => a.level <= lvl);
    $('ladder-box').innerHTML = `<p style="font-size:0.8rem;color:var(--accent2);margin-bottom:10px;">${lad.desc}</p>` + 
      list.map(a => `<div class="ability-entry"><div class="ability-entry-header"><span>${a.name}</span><span class="ability-entry-level">Lvl ${a.level}</span></div><div class="ability-entry-desc">${a.desc}</div></div>`).join('');
  }
  if (cls && $('class-box')) {
    const list = cls.abilities.filter(a => a.level <= lvl);
    $('class-box').innerHTML = `<p style="font-size:0.8rem;color:var(--accent2);margin-bottom:10px;">${cls.desc} · Hit Die ${cls.hitDie}</p>` + 
      list.map(a => `<div class="ability-entry"><div class="ability-entry-header"><span>${a.name}</span><span class="ability-entry-level">Lvl ${a.level}</span></div><div class="ability-entry-desc">${a.desc}</div></div>`).join('');
  }
}

function switchTab(id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('.tab-page').forEach(p => p.classList.toggle('active', p.id === id));
  if (id === 'tab-abilities') renderAbilities();
  if (id === 'tab-skills' || id === 'tab-core') recalc();
    if (id === 'tab-combat') {
    renderWeapons();
    bindWeaponEvents();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadStorage();
  populateSelects();
  buildSkillsUI();
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  const btnNew = $('btn-new');
  if (btnNew) btnNew.addEventListener('click', createChar);

  const btnAddWpn = $('btn-add-weapon');
  if (btnAddWpn) btnAddWpn.addEventListener('click', addWeapon);

  const rosterEl = $('roster');
  if (rosterEl) {
    rosterEl.addEventListener('click', e => {
      const del = e.target.getAttribute('data-del');
      if (del) {
        if (!confirm('Delete this operative?')) return;
        chars = chars.filter(c => c.id !== del);
        if (activeId === del) { activeId = chars.length ? chars[0].id : null; if(activeId) loadToForm(chars[0]); }
        saveStorage(); renderRoster(); return;
      }
      const card = e.target.closest('.char-card');
      if (card) { loadToForm(chars.find(x => x.id === card.dataset.id)); switchTab('tab-core'); }
    });
  }

  if ($('armor-preset')) $('armor-preset').addEventListener('change', applyArmor);

  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', saveCurrent);
    el.addEventListener('change', saveCurrent);
  });
  
  if ($('c-ladder')) $('c-ladder').addEventListener('change', renderAbilities);
  if ($('c-class')) $('c-class').addEventListener('change', renderAbilities);
  if ($('c-lvl')) $('c-lvl').addEventListener('change', renderAbilities);

  if (chars.length) {
    loadToForm(chars[0]);
  } else {
    createChar();
  }
  renderRoster();
  recalc();
});
