const STORAGE_KEY = 'um5_chars_v3';
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
  $('c-ladder').innerHTML = Object.keys(LADDER_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  $('c-class').innerHTML = Object.keys(CLASS_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  $('armor-preset').innerHTML = '<option value="__custom__">Custom / Manual</option>' + Object.keys(ARMOR_DATA).map(k => `<option value="${k}">${k} (AC ${ARMOR_DATA[k].baseAc})</option>`).join('');
  const wOpts = '<option value="__custom__">Custom / Manual</option>' + Object.keys(WEAPON_DATA).map(k => `<option value="${k}">${k} (${WEAPON_DATA[k].type})</option>`).join('');
  $('w1-preset').innerHTML = wOpts; $('w2-preset').innerHTML = wOpts;
}

function buildSkillsUI() {
  $('skills-box').innerHTML = SKILL_LIST.map((sk, i) => `
    <div class="skill-row">
      <span style="font-size:0.85rem; flex:1;">${sk.name}</span>
      <span style="font-size:0.65rem; color:var(--muted); width:34px;">${sk.stat}</span>
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
  $('prof-display').textContent = fmtMod(pb);

  const stats = ['str','dex','con','int','wis','cha','vig'];
  stats.forEach(s => {
    const score = val('s-' + s);
    const m = mod(score);
    if($('m-' + s)) $('m-' + s).textContent = fmtMod(m);
    
    // Saving Throws calculation
    const hasSaveProf = val('svS-' + s);
    const saveTotal = m + (hasSaveProf ? pb : 0);
    if($('sv-' + s)) $('sv-' + s).textContent = fmtMod(saveTotal);
  });

  // Skills
  SKILL_LIST.forEach((sk, i) => {
    const statMod = mod(val('s-' + sk.stat));
    let total = statMod;
    if (val('sk-p-' + i)) total += pb;
    if (val('sk-e-' + i)) total += pb;
    if ($('sk-bonus-' + i)) $('sk-bonus-' + i).textContent = fmtMod(total);
  });
}

function applyArmor() {
  const key = val('armor-preset');
  if (!key || key === '__custom__' || !ARMOR_DATA[key]) return;
  const a = ARMOR_DATA[key];
  let dex = mod(val('s-dex'));
  if (dex > a.maxDex) dex = a.maxDex;
  val('ac-val', a.baseAc + dex);
  val('armor-name', key); val('armor-props', a.props || a.type);
  saveCurrent();
}

function applyWeapon(n) {
  const key = val(`w${n}-preset`);
  if (!key || key === '__custom__' || !WEAPON_DATA[key]) return;
  const w = WEAPON_DATA[key];
  val(`w${n}-name`, key); val(`w${n}-dmg`, w.damage); val(`w${n}-range`, w.range);
  val(`w${n}-props`, w.properties); val(`w${n}-max`, w.magSize);
  $(`w${n}-cur`).textContent = w.magSize;
  saveCurrent();
}

function fire(n) {
  let cur = parseInt($(`w${n}-cur`).textContent, 10) || 0;
  if (cur > 0) { $(`w${n}-cur`).textContent = cur - 1; saveCurrent(); }
}
function reload(n) {
  $(`w${n}-cur`).textContent = parseInt(val(`w${n}-max`), 10) || 0;
  saveCurrent();
}

function blankChar() {
  return {
    id: 'c_' + Date.now(), name: 'New Operative', species: 'Human', arch: '', ladder: 'Born Leader', className: 'Gunslinger', lvl: 1,
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, vig: 10,
    saveProfs: {str:false, dex:false, con:false, int:false, wis:false, cha:false, vig:false},
    hpMax: 10, hpCur: 10, hpTemp: 0, hd: '1d10', ac: 10, spd: 30, init: 0,
    dsS: [false,false,false], dsF: [false,false,false],
    armorPreset: 'Plain Clothes', armorName: 'Plain Clothes', armorProps: '',
    w1Preset: '__custom__', w1Name: '', w1Dmg: '', w1Range: '', w1Props: '', w1Max: 0, w1Cur: 0,
    w2Preset: '__custom__', w2Name: '', w2Dmg: '', w2Range: '', w2Props: '', w2Max: 0, w2Cur: 0,
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
  c.w1Preset = val('w1-preset'); c.w1Name = val('w1-name'); c.w1Dmg = val('w1-dmg'); c.w1Range = val('w1-range'); c.w1Props = val('w1-props'); c.w1Max = val('w1-max'); c.w1Cur = parseInt($('w1-cur').textContent)||0;
  c.w2Preset = val('w2-preset'); c.w2Name = val('w2-name'); c.w2Dmg = val('w2-dmg'); c.w2Range = val('w2-range'); c.w2Props = val('w2-props'); c.w2Max = val('w2-max'); c.w2Cur = parseInt($('w2-cur').textContent)||0;

  c.credits = val('credits'); c.inventory = val('inventory');
  SKILL_LIST.forEach((_, i) => { c.skills['p'+i] = val('sk-p-'+i); c.skills['e'+i] = val('sk-e-'+i); });
  
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
  if(!c.saveProfs) c.saveProfs = {};
  val('svS-str', c.saveProfs.str); val('svS-dex', c.saveProfs.dex); val('svS-con', c.saveProfs.con); val('svS-int', c.saveProfs.int); val('svS-wis', c.saveProfs.wis); val('svS-cha', c.saveProfs.cha); val('svS-vig', c.saveProfs.vig);
  
  val('hp-max', c.hpMax); val('hp-cur', c.hpCur); val('hp-temp', c.hpTemp);
  val('hd-val', c.hd || '1d10'); val('ac-val', c.ac); val('spd-val', c.spd); val('init-val', c.init);
  
  if(!c.dsS) c.dsS=[false,false,false]; if(!c.dsF) c.dsF=[false,false,false];
  val('ds-s1', c.dsS[0]); val('ds-s2', c.dsS[1]); val('ds-s3', c.dsS[2]);
  val('ds-f1', c.dsF[0]); val('ds-f2', c.dsF[1]); val('ds-f3', c.dsF[2]);

  val('armor-preset', c.armorPreset); val('armor-name', c.armorName); val('armor-props', c.armorProps);
  val('w1-preset', c.w1Preset); val('w1-name', c.w1Name); val('w1-dmg', c.w1Dmg); val('w1-range', c.w1Range); val('w1-props', c.w1Props); val('w1-max', c.w1Max); $('w1-cur').textContent = c.w1Cur || 0;
  val('w2-preset', c.w2Preset); val('w2-name', c.w2Name); val('w2-dmg', c.w2Dmg); val('w2-range', c.w2Range); val('w2-props', c.w2Props); val('w2-max', c.w2Max); $('w2-cur').textContent = c.w2Cur || 0;

  val('credits', c.credits); val('inventory', c.inventory);
  SKILL_LIST.forEach((_, i) => { val('sk-p-'+i, c.skills&&c.skills['p'+i]); val('sk-e-'+i, c.skills&&c.skills['e'+i]); });
  
  val('feat-notes', c.featNotes); val('mp-max', c.mpMax); val('mp-cur', c.mpCur);
  val('spell-dc', c.spellDc); val('spell-atk', c.spellAtk); val('magic-source', c.magicSource); val('spell-list', c.spellList);
  
  recalc(); renderAbilities(); renderRoster();
}

function renderRoster() {
  const box = $('roster');
  if (!chars.length) { box.innerHTML = '<p style="color:var(--muted);text-align:center;">No operatives. Create one.</p>'; return; }
  box.innerHTML = chars.map(c => `
    <div class="char-card ${c.id === activeId ? 'active-char' : ''}" data-id="${c.id}">
      <div><strong>${c.name || 'Unnamed'}</strong><br><small>Lvl ${c.lvl||1} ${c.className||''}</small></div>
      <button class="btn btn-danger" data-del="${c.id}">Delete</button>
    </div>`).join('');
}

function renderAbilities() {
  const lvl = parseInt(val('c-lvl'),10)||1;
  const lad = LADDER_DATA[val('c-ladder')];
  const cls = CLASS_DATA[val('c-class')];

  if (lad) {
    const list = lad.abilities.filter(a => a.level <= lvl);
    $('ladder-box').innerHTML = `<p style="font-size:0.8rem;color:var(--accent2);margin-bottom:10px;">${lad.desc}</p>` + 
      list.map(a => `<div class="ability-entry"><div class="ability-entry-header"><span>${a.name}</span><span class="ability-entry-level">Lvl ${a.level}</span></div><div class="ability-entry-desc">${a.desc}</div></div>`).join('');
  }
  if (cls) {
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
}

document.addEventListener('DOMContentLoaded', () => {
  loadStorage(); populateSelects(); buildSkillsUI();
  
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));
  $('btn-new').addEventListener('click', createChar);
  $('roster').addEventListener('click', e => {
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

  $('armor-preset').addEventListener('change', applyArmor);
  $('w1-preset').addEventListener('change', ()=>applyWeapon(1)); $('w2-preset').addEventListener('change', ()=>applyWeapon(2));
  $('btn-fire-1').addEventListener('click', ()=>fire(1)); $('btn-reload-1').addEventListener('click', ()=>reload(1));
  $('btn-fire-2').addEventListener('click', ()=>fire(2)); $('btn-reload-2').addEventListener('click', ()=>reload(2));

  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', saveCurrent); el.addEventListener('change', saveCurrent);
  });
  
  $('c-ladder').addEventListener('change', renderAbilities);
  $('c-class').addEventListener('change', renderAbilities);
  $('c-lvl').addEventListener('change', renderAbilities);

  if (chars.length) loadToForm(chars[0]); else createChar();
});
