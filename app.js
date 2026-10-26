let chars = JSON.parse(localStorage.getItem('um5_chars') || '[]');
let activeId = null;

function val(id, v) { 
  const el = document.getElementById(id);
  if (!el) return;
  if (v !== undefined) el.type === 'checkbox' ? el.checked = v : el.value = v;
  return el.type === 'checkbox' ? el.checked : el.value;
}

// SETUP DROPDOWNS & TABS
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn, .tab-page').forEach(e => e.classList.remove('active'));
      b.classList.add('active');
      document.getElementById(b.dataset.tab).classList.add('active');
      if (b.dataset.tab === 'tab-abilities') renderAbilities();
    });
  });

  const ladSel = document.getElementById('c-ladder');
  const clsSel = document.getElementById('c-class');
  const wpnSel = document.getElementById('w1-preset');
  const armSel = document.getElementById('armor-preset');

  if(ladSel) ladSel.innerHTML = Object.keys(LADDER_DATA).map(k=>`<option value="${k}">${k}</option>`).join('');
  if(clsSel) clsSel.innerHTML = Object.keys(CLASS_DATA).map(k=>`<option value="${k}">${k}</option>`).join('');
  
  const wOpts = '<option value="">--Custom--</option>' + Object.keys(WEAPON_DATA).map(k=>`<option value="${k}">${k}</option>`).join('');
  if(wpnSel) wpnSel.innerHTML = wOpts;

  const aOpts = '<option value="">--Custom / Unarmored--</option>' + Object.keys(ARMOR_DATA).map(k=>`<option value="${k}">${k}</option>`).join('');
  if(armSel) armSel.innerHTML = aOpts;

  document.getElementById('btn-new').addEventListener('click', createChar);
  
  // Setup Skills UI
  document.getElementById('skills-container').innerHTML = SKILL_LIST.map((s, i) => `
    <div class="skill-row">
      <strong>${s}</strong>
      <div class="skill-checks">
        <label><input type="checkbox" id="sk-p-${i}"> Prof</label>
        <label><input type="checkbox" id="sk-e-${i}"> Exp</label>
      </div>
    </div>
  `).join('');

  // Auto-save on inputs
  document.querySelectorAll('input, select, textarea').forEach(i => i.addEventListener('input', saveChar));

  if (chars.length > 0) loadChar(chars[0].id);
  renderRoster();
});

function createChar() {
  const c = { 
    id: Date.now().toString(), name: 'New Operative', 
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
    hpMax: 10, hpCur: 10, ac: 10, w1Max: 12, w1Cur: 12, skills: {} 
  };
  chars.push(c);
  loadChar(c.id);
  renderRoster();
}

function loadChar(id) {
  activeId = id;
  const c = chars.find(x => x.id === id);
  if (!c) return;

  val('c-name', c.name || ''); val('c-species', c.species || '');
  val('c-bg', c.bg || ''); val('c-archetype', c.archetype || '');
  val('c-ladder', c.ladder || 'Born Leader'); val('c-class', c.class || 'Gunslinger');
  val('c-lvl', c.lvl || 1);

  val('s-str', c.str); val('s-dex', c.dex); val('s-con', c.con);
  val('s-int', c.int); val('s-wis', c.wis); val('s-cha', c.cha);

  val('hp-max', c.hpMax); val('hp-cur', c.hpCur); val('hp-temp', c.hpTemp || 0);
  val('ac-val', c.ac); val('spd-val', c.spd || 30);
  
  val('ds-s1', c.dsS1); val('ds-s2', c.dsS2); val('ds-s3', c.dsS3);
  val('ds-f1', c.dsF1); val('ds-f2', c.dsF2); val('ds-f3', c.dsF3);

  val('armor-preset', c.armorPreset || '');
  val('w1-preset', c.w1Preset || ''); val('w1-name', c.w1Name || '');
  val('w1-dmg', c.w1Dmg || ''); val('w1-max', c.w1Max);
  document.getElementById('w1-cur').innerText = c.w1Cur || 0;

  SKILL_LIST.forEach((s, i) => {
    val(`sk-p-${i}`, c.skills[`p${i}`]);
    val(`sk-e-${i}`, c.skills[`e${i}`]);
  });

  val('c-notes', c.notes || '');
  val('mp-max', c.mpMax || 0); val('mp-cur', c.mpCur || 0);
  val('spell-dc', c.spellDc || 10); val('spell-atk', c.spellAtk || 0);
  val('spell-list', c.spellList || '');
}

function saveChar() {
  if (!activeId) return;
  const c = chars.find(x => x.id === activeId);
  
  c.name = val('c-name'); c.species = val('c-species');
  c.bg = val('c-bg'); c.archetype = val('c-archetype');
  c.ladder = val('c-ladder'); c.class = val('c-class'); c.lvl = val('c-lvl');

  c.str = val('s-str'); c.dex = val('s-dex'); c.con = val('s-con');
  c.int = val('s-int'); c.wis = val('s-wis'); c.cha = val('s-cha');

  c.hpMax = val('hp-max'); c.hpCur = val('hp-cur'); c.hpTemp = val('hp-temp');
  c.ac = val('ac-val'); c.spd = val('spd-val');
  
  c.dsS1 = val('ds-s1'); c.dsS2 = val('ds-s2'); c.dsS3 = val('ds-s3');
  c.dsF1 = val('ds-f1'); c.dsF2 = val('ds-f2'); c.dsF3 = val('ds-f3');

  c.armorPreset = val('armor-preset');
  c.w1Preset = val('w1-preset'); c.w1Name = val('w1-name');
  c.w1Dmg = val('w1-dmg'); c.w1Max = val('w1-max'); 
  c.w1Cur = parseInt(document.getElementById('w1-cur').innerText) || 0;

  SKILL_LIST.forEach((s, i) => {
    c.skills[`p${i}`] = val(`sk-p-${i}`);
    c.skills[`e${i}`] = val(`sk-e-${i}`);
  });

  c.notes = val('c-notes');
  c.mpMax = val('mp-max'); c.mpCur = val('mp-cur');
  c.spellDc = val('spell-dc'); c.spellAtk = val('spell-atk');
  c.spellList = val('spell-list');

  // Calc Prof
  let lvl = parseInt(c.lvl) || 1;
  let prof = (lvl >= 17) ? 6 : (lvl >= 13) ? 5 : (lvl >= 9) ? 4 : (lvl >= 5) ? 3 : 2;
  val('prof-val', '+' + prof);

  localStorage.setItem('um5_chars', JSON.stringify(chars));
  renderRoster();
}

function applyArmor() {
  const p = val('armor-preset');
  if (ARMOR_DATA[p]) {
    let base = ARMOR_DATA[p].baseAc;
    let dex = Math.floor((val('s-dex') - 10) / 2);
    if (dex > ARMOR_DATA[p].maxDex) dex = ARMOR_DATA[p].maxDex;
    val('ac-val', base + dex);
    saveChar();
  }
}

function applyWpn(n) {
  const p = val(`w${n}-preset`);
  if (WEAPON_DATA[p]) {
    val(`w${n}-name`, p);
    val(`w${n}-dmg`, WEAPON_DATA[p].damage);
    val(`w${n}-max`, WEAPON_DATA[p].magSize);
    document.getElementById(`w${n}-cur`).innerText = WEAPON_DATA[p].magSize;
    saveChar();
  }
}

function fire(n) {
  let c = parseInt(document.getElementById(`w${n}-cur`).innerText);
  if (c > 0) document.getElementById(`w${n}-cur`).innerText = c - 1;
  saveChar();
}
function reload(n) {
  document.getElementById(`w${n}-cur`).innerText = val(`w${n}-max`);
  saveChar();
}

function renderRoster() {
  document.getElementById('roster-list').innerHTML = chars.map(c => `
    <div style="border:1px solid #30363d; padding:10px; margin-bottom:10px; border-radius:4px; display:flex; justify-content:space-between; ${c.id === activeId ? 'border-color:#00f2fe' : ''}" onclick="loadChar('${c.id}')">
      <div><strong>${c.name}</strong><br><small>Lvl ${c.lvl || 1} ${c.class}</small></div>
      <button class="btn danger" onclick="event.stopPropagation(); chars = chars.filter(x=>x.id!=='${c.id}'); localStorage.setItem('um5_chars', JSON.stringify(chars)); renderRoster();">Del</button>
    </div>
  `).join('');
}

function renderAbilities() {
  const lad = val('c-ladder');
  const cls = val('c-class');
  let html = '';
  if (LADDER_DATA[lad]) {
    html += `<strong>Ladder: ${lad}</strong><p style="font-size:0.8rem; color:#8b949e; margin-bottom:10px;">${LADDER_DATA[lad].desc}</p>`;
    LADDER_DATA[lad].abilities.forEach(a => html += `<div style="background:#0d1117; padding:8px; border-left:3px solid #00f2fe; margin-bottom:5px;"><strong>${a.name} (Lvl ${a.level})</strong><br><small>${a.desc}</small></div>`);
  }
  if (CLASS_DATA[cls]) {
    html += `<strong style="display:block; margin-top:15px;">Class: ${cls}</strong><p style="font-size:0.8rem; color:#8b949e; margin-bottom:10px;">${CLASS_DATA[cls].desc} | Hit Die: ${CLASS_DATA[cls].hitDie}</p>`;
    CLASS_DATA[cls].abilities.forEach(a => html += `<div style="background:#0d1117; padding:8px; border-left:3px solid #00f2fe; margin-bottom:5px;"><strong>${a.name} (Lvl ${a.level})</strong><br><small>${a.desc}</small></div>`);
  }
  document.getElementById('abilities-box').innerHTML = html;
}
