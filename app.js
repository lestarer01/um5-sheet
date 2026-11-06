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
    $('c-ladder').innerHTML = '<option value="">-- Select Ladder --</option>' +
      Object.keys(LADDER_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  }
  if (typeof CLASS_DATA !== 'undefined' && $('c-class')) {
    $('c-class').innerHTML = '<option value="">-- Select Class --</option>' +
      Object.keys(CLASS_DATA).map(k => `<option value="${k}">${k}</option>`).join('');
  }
  if (typeof ARMOR_DATA !== 'undefined' && $('armor-preset')) {
    populateArmorPresets('__all__');
  }
  // FIX: Object.keys() ensures it works with your updated ARCHETYPE_DATA object
  if (typeof ARCHETYPE_DATA !== 'undefined' && $('c-arch')) {
    $('c-arch').innerHTML = '<option value="">-- Select Archetype --</option>' +
      Object.keys(ARCHETYPE_DATA).map(a => `<option value="${a}">${a}</option>`).join('');
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
      
      <!-- Changed from span to input -->
      <input type="number" class="skill-bonus-input" id="sk-bonus-${i}" data-idx="${i}" onchange="handleSkillEdit(this)" style="width:45px; background:transparent; border:none; border-bottom:1px solid var(--accent); color:var(--text); text-align:center; font-weight:bold; font-size:1rem;" />
      
      <div class="skill-checks">
        <label><input type="checkbox" id="sk-p-${i}" /> Prof</label>
        <label><input type="checkbox" id="sk-e-${i}" /> Exp</label>
      </div>
    </div>
  `).join('');
}

function handleSkillEdit(el) {
  const idx = parseInt(el.dataset.idx, 10);
  const c = getActiveChar();
  if (!c) return;
  
  const typedVal = parseInt(el.value, 10) || 0;
  
  // Calculate what the base SHOULD be right now
  const statMod = mod(val('s-' + UM5_SKILLS[idx].stat));
  const pb = profBonus(val('c-lvl'));
  let base = statMod;
  if (val('sk-p-' + idx)) base += pb;
  if (val('sk-e-' + idx)) base += pb;
  
  // Save the difference as a manual modifier
  if (!c.skillMods) c.skillMods = {};
  c.skillMods[idx] = typedVal - base;
  
  saveStorage();
  recalc();
}

/* --- WEAPONS SYSTEM --- */

function emptyWeapon() {
  return { type: '', preset: '__custom__', name: '', atk: '', dmg: '', range: '', props: '', max: 0, cur: 0, notes: '' };
}

// Helper: Extract distinct weapon types from WEAPON_DATA
function getWeaponTypes() {
  if (typeof WEAPON_DATA === 'undefined') return [];
  const types = new Set();
  Object.values(WEAPON_DATA).forEach(w => { if (w.type) types.add(w.type); });
  return Array.from(types).sort();
}

function renderWeapons() {
  const box = $('weapons-container');
  if (!box) return;

  const c = chars.find(x => x.id === activeId);
  if (!c) return;

  if (!c.weapons || !Array.isArray(c.weapons) || c.weapons.length === 0) {
    c.weapons = [emptyWeapon()];
  }

  const allTypes = getWeaponTypes();

  box.innerHTML = c.weapons.map((w, i) => {
    // 1. Build Type Dropdown options
    const typeOpts = '<option value="">-- All Types --</option>' +
      allTypes.map(t => `<option value="${t}">${t}</option>`).join('');

    // 2. Filter Presets based on selected weapon type
    const filteredPresets = (typeof WEAPON_DATA !== 'undefined')
      ? Object.keys(WEAPON_DATA).filter(k => !w.type || WEAPON_DATA[k].type === w.type)
      : [];

    const wOpts = '<option value="__custom__">Custom / Manual</option>' +
      filteredPresets.map(k => `<option value="${k}">${k}</option>`).join('');

    return `
      <div class="weapon-block" data-wpn-idx="${i}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h4 style="color:var(--accent2); margin:0;">Weapon ${i + 1}</h4>
          ${c.weapons.length > 1 ? `<button type="button" class="btn btn-danger btn-remove-wpn" data-idx="${i}">Remove</button>` : ''}
        </div>
        
        <div class="grid-2">
          <div class="field-group">
            <label>Weapon Type</label>
            <select class="wpn-type-select" data-idx="${i}">${typeOpts}</select>
          </div>
          <div class="field-group">
            <label>Weapon Preset</label>
            <select class="wpn-preset-select" data-idx="${i}">${wOpts}</select>
          </div>
        </div>
        
        <div style="display:grid; grid-template-columns: 2fr 0.5fr 1.5fr; gap:10px; margin-bottom:10px;">
          <div class="field-group" style="margin:0;"><label>Name</label><input type="text" class="wpn-input-name" data-idx="${i}" value="${w.name || ''}" /></div>
          <div class="field-group" style="margin:0;"><label>Attack</label><input type="text" class="wpn-input-atk" data-idx="${i}" value="${w.atk || ''}" style="text-align:center;" /></div>
          <div class="field-group" style="margin:0;"><label>Damage</label><input type="text" class="wpn-input-dmg" data-idx="${i}" value="${w.dmg || ''}" style="text-align:center;" /></div>
        </div>
        
        <div style="display:grid; grid-template-columns: 1fr 2.5fr; gap:10px; margin-bottom:10px;">
          <div class="field-group" style="margin:0;"><label>Range</label><input type="text" class="wpn-input-range" data-idx="${i}" value="${w.range || ''}" /></div>
          <div class="field-group" style="margin:0;"><label>Properties</label><input type="text" class="wpn-input-props" data-idx="${i}" value="${w.props || ''}" /></div>
        </div>
        
        <div class="ammo-row">
          <span>Ammo: <strong id="wpn-cur-display-${i}">${w.cur || 0}</strong> / 
            <input type="number" class="wpn-input-max" data-idx="${i}" value="${w.max || 0}" style="width:50px; display:inline-block; padding:4px;" />
          </span>
          <div>
            <button type="button" class="btn btn-shoot btn-fire-wpn" data-idx="${i}">SHOOT</button>
            <button type="button" class="btn btn-reload btn-reload-wpn" data-idx="${i}">RELOAD</button>
          </div>
        </div>
        <div class="field-group" style="margin-top:8px;">
          <label>Notes</label>
          <textarea class="wpn-input-notes" data-idx="${i}" rows="2"
            style="width:100%; min-height:40px; resize:vertical; background:var(--input); color:var(--text); border:1px solid var(--border); border-radius:4px; padding:6px; font-family:inherit; font-size:0.85rem;"
            placeholder="Attachments, special ammo, etc.">${w.notes || ''}</textarea>
        </div>
      </div>
    `;
  }).join('');

  // Set dropdown values after HTML insertion
  c.weapons.forEach((w, i) => {
    const typeSel = box.querySelector(`.wpn-type-select[data-idx="${i}"]`);
    if (typeSel) typeSel.value = w.type || '';

    const presetSel = box.querySelector(`.wpn-preset-select[data-idx="${i}"]`);
    if (presetSel) presetSel.value = w.preset || '__custom__';
  });

  bindWeaponEvents();
}

function bindWeaponEvents() {
  const box = $('weapons-container');
  if (!box) return;

  // 1. TYPE SELECT CHANGED
  box.querySelectorAll('.wpn-type-select').forEach(sel => {
    sel.onchange = (e) => {
      const idx = parseInt(e.target.dataset.idx, 10);
      const key = e.target.value;
      const c = chars.find(x => x.id === activeId);
      if (!c || !c.weapons[idx]) return;

      c.weapons[idx].type = key;

      // Reset preset if current preset doesn't match the new selected type
      if (c.weapons[idx].preset && c.weapons[idx].preset !== '__custom__' && typeof WEAPON_DATA !== 'undefined' && WEAPON_DATA[c.weapons[idx].preset]) {
        if (WEAPON_DATA[c.weapons[idx].preset].type !== key) {
          c.weapons[idx].preset = '__custom__';
        }
      }

      saveStorage();
      renderWeapons();
    };
  });

  // 2. PRESET SELECT CHANGED
  box.querySelectorAll('.wpn-preset-select').forEach(sel => {
    sel.onchange = (e) => {
      const idx = parseInt(e.target.dataset.idx, 10);
      const key = e.target.value;
      const c = chars.find(x => x.id === activeId);
      if (!c || !c.weapons[idx]) return;

      if (key !== '__custom__' && typeof WEAPON_DATA !== 'undefined' && WEAPON_DATA[key]) {
        const data = WEAPON_DATA[key];
        
        // Calculate Attack and Damage based on Dex + Proficiency
        const dexMod = mod(val('s-dex'));
        const pb = profBonus(val('c-lvl'));
        const atkBonus = fmtMod(dexMod + pb);
        
        // Format damage: e.g., "1d10" -> "1d10+4"
        let dmgStr = data.damage || '';
        if (dexMod !== 0 && dmgStr) {
          dmgStr += (dexMod > 0 ? '+' : '') + dexMod;
        }

        c.weapons[idx] = {
          type: data.type || '',
          preset: key, 
          name: key, 
          atk: atkBonus,
          dmg: dmgStr,
          range: data.range || '', 
          props: data.properties || '', 
          max: data.magSize || 0, 
          cur: data.magSize || 0,
          notes: c.weapons[idx].notes || ''
        };
      } else {
        c.weapons[idx].preset = '__custom__';
      }
      saveStorage();
      renderWeapons();
    };
  });

  // 3. SHOOT BUTTON
  box.querySelectorAll('.btn-fire-wpn').forEach(btn => {
    btn.onclick = (e) => {
      const idx = parseInt(e.target.dataset.idx, 10);
      const c = chars.find(x => x.id === activeId);
      if (c && c.weapons[idx] && c.weapons[idx].cur > 0) {
        c.weapons[idx].cur -= 1;
        saveStorage();
        const display = $(`wpn-cur-display-${idx}`);
        if (display) display.textContent = c.weapons[idx].cur;
      }
    };
  });

  // 4. RELOAD BUTTON
  box.querySelectorAll('.btn-reload-wpn').forEach(btn => {
    btn.onclick = (e) => {
      const idx = parseInt(e.target.dataset.idx, 10);
      const c = chars.find(x => x.id === activeId);
      if (c && c.weapons[idx]) {
        c.weapons[idx].cur = c.weapons[idx].max || 0;
        saveStorage();
        const display = $(`wpn-cur-display-${idx}`);
        if (display) display.textContent = c.weapons[idx].cur;
      }
    };
  });

  // 5. REMOVE BUTTON
  box.querySelectorAll('.btn-remove-wpn').forEach(btn => {
    btn.onclick = (e) => {
      const idx = parseInt(e.target.dataset.idx, 10);
      const c = chars.find(x => x.id === activeId);
      if (c && c.weapons && c.weapons.length > 1) {
        c.weapons.splice(idx, 1);
        saveStorage();
        renderWeapons();
      }
    };
  });

  // 6. INPUT & TEXTAREA LISTENERS
  box.querySelectorAll('input, textarea').forEach(inp => {
    inp.oninput = (e) => {
      const idx = parseInt(e.target.dataset.idx, 10);
      const c = chars.find(x => x.id === activeId);
      if (!c || !c.weapons[idx]) return;

      if (e.target.classList.contains('wpn-input-name')) c.weapons[idx].name = e.target.value;
      if (e.target.classList.contains('wpn-input-atk')) c.weapons[idx].atk = e.target.value;
      if (e.target.classList.contains('wpn-input-dmg')) c.weapons[idx].dmg = e.target.value;
      if (e.target.classList.contains('wpn-input-range')) c.weapons[idx].range = e.target.value;
      if (e.target.classList.contains('wpn-input-props')) c.weapons[idx].props = e.target.value;
      if (e.target.classList.contains('wpn-input-max')) c.weapons[idx].max = parseInt(e.target.value, 10) || 0;
      if (e.target.classList.contains('wpn-input-notes')) c.weapons[idx].notes = e.target.value;

      saveStorage();
    };
  });
}

function addWeapon() {
  const c = chars.find(x => x.id === activeId);
  if (!c) return;
  if (!c.weapons) c.weapons = [];
  c.weapons.push(emptyWeapon());
  saveStorage();
  renderWeapons();
}

  
/* --- CORE CALCULATIONS & RECALC --- */

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

    const cActive = chars.find(x => x.id === activeId);
  
  UM5_SKILLS.forEach((sk, i) => {
    const statMod = mod(val('s-' + sk.stat));
    let total = statMod;
    if (val('sk-p-' + i)) total += pb;
    if (val('sk-e-' + i)) total += pb;
    
    // Apply manual modifier if one exists
    if (cActive && cActive.skillMods && cActive.skillMods[i]) {
      total += cActive.skillMods[i];
    }
    
    // Apply to the new input value
    if ($('sk-bonus-' + i)) {
      $('sk-bonus-' + i).value = total;
    }
  });

  // ADD THIS LINE: Automatically updates AC when Dexterity changes
  applyArmor();

  // update Magic UI when stats change
  renderMagic();
} // End of recalc

/* --- MAGIC CALCULATIONS --- */
function renderMagic() {
  if (!$('tab-magic')) return;

  const lvl = Math.max(1, parseInt(val('c-lvl'), 10) || 1);
  const vigorScore = parseInt(val('s-vig'), 10) || 10;
  const vigorMod = Math.floor((vigorScore - 10) / 2);
  
  // RIVER RULE: Vigor Modifier
  const riverMax = Math.min(10, Math.max(0, vigorMod));
  if ($('m-river-max')) $('m-river-max').textContent = riverMax;

  // VESSEL RULE: Vigor >= 8 required. Formula = Floor(Vigor/2) + Level
  const baseVessel = vigorScore >= 8 ? Math.floor(vigorScore / 2) + lvl : 0;
  const exLevel = parseInt(val('m-exhaustion'), 10) || 0;
  let calculatedMaxVessel = baseVessel;

  const noteEl = $('m-exhaustion-note');
  if (noteEl) {
    if (exLevel >= 5) {
      calculatedMaxVessel = 0;
      noteEl.textContent = 'WARNING: Max Vessel is 0 (Exhaustion 5+).';
    } else if (exLevel >= 2) {
      calculatedMaxVessel = Math.floor(baseVessel / 2);
      noteEl.textContent = 'NOTICE: Max Vessel is halved due to exhaustion.';
    } else {
      noteEl.textContent = '';
    }
  }

  if ($('m-vessel-max')) $('m-vessel-max').value = calculatedMaxVessel;

  if ($('m-vessel-cur')) {
    let curVessel = parseInt($('m-vessel-cur').value, 10) || 0;
    if (curVessel > calculatedMaxVessel) {
      $('m-vessel-cur').value = calculatedMaxVessel;
    }
  }

  // ASSET RULE: Currency system with retroactive Level/Vigor deposits
  const c = getActiveChar();
  if (c) {
    const expectedLifetime = Math.max(0, vigorMod * lvl);
    let needSave = false;
    
    // If this is the first time the character accesses magic
    if (c.lifetimeAssetsEarned === undefined) {
      c.lifetimeAssetsEarned = expectedLifetime;
      if (c.assets === undefined || c.assets === null || c.assets === '') {
        c.assets = expectedLifetime;
      }
      needSave = true;
    } 
    // If they leveled up or Vigor changed, calculate the difference and deposit it
    else {
      const diff = expectedLifetime - c.lifetimeAssetsEarned;
      if (diff !== 0) {
        c.assets = Math.max(0, (parseInt(c.assets, 10) || 0) + diff);
        c.lifetimeAssetsEarned = expectedLifetime;
        needSave = true;
      }
    }
    
    if ($('m-assets')) $('m-assets').value = c.assets;
    if (needSave) saveStorage();
  }

  // Render the new magic UI pieces
  renderRiverSlots(riverMax);
  renderKnownSpells();
  renderDarkSequence();
}

function applyArmor() {
  const key = val('armor-preset');
  const dexMod = mod(val('s-dex'));

  // If "Custom / Manual" is selected, don't overwrite so manual edits stay
  if (key === '__custom__') return;

  let baseAc = 10;
  let effectiveDex = dexMod;

  if (typeof ARMOR_DATA !== 'undefined' && key && ARMOR_DATA[key]) {
    const a = ARMOR_DATA[key];
    baseAc = a.baseAc;

    // Determine Max Dex Cap (check explicit property or armor type name)
    let maxDex = a.maxDex;
    if (maxDex === undefined && a.type) {
      const typeLower = a.type.toLowerCase();
      if (typeLower.includes('medium')) maxDex = 2;
      else if (typeLower.includes('heavy')) maxDex = 0;
    }

    // Apply Dex Cap rules
    if (maxDex !== undefined) {
      if (maxDex === 0) {
        effectiveDex = 0; // Heavy armor ignores Dex
      } else {
        effectiveDex = Math.min(dexMod, maxDex); // Medium armor caps Dex at +2
      }
    }

    val('armor-name', key);
    val('armor-props', a.props || a.type || '');
  } else {
    // Unarmored / No armor selected -> 10 + full Dex
    val('armor-name', 'Unarmored');
    val('armor-props', 'None');
  }

  const totalAc = baseAc + effectiveDex;

  // Update AC display & character memory
  val('ac-val', totalAc);
  const c = getActiveChar();
  if (c) c.ac = totalAc;
}

function blankChar() {
  return {
    id: 'c_' + Date.now(), name: 'New Operative', species: '', arch: '', background: '', ladder: '', className: '', lvl: 1,
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, vig: 10,
    saveProfs: {str:false, dex:false, con:false, int:false, wis:false, cha:false, vig:false},
    hpMax: 10, hpCur: 10, hpTemp: 0, hd: '1d10', ac: 10, spd: 30, init: 0,
    dsS: [false,false,false], dsF: [false,false,false],
    armorPreset: 'Plain Clothes', armorName: 'Plain Clothes', armorProps: '',
    weapons: [emptyWeapon()],
    credits: 500, inventory: '', skills: {}, ladderTaken: null, classChoices: {}, featNotes: '',
    mpMax: 0, mpCur: 0, spellDc: 10, spellAtk: 0, magicSource: '', spellList: '',
    // New Dark Magic Fields
    vesselCur: 0, vesselMax: 0, assets: 0, exhaustion: 0,
    unlockedPaths: [],
    knownSpells: [],
    riverSpells: []
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

function saveCurrent() {
  const c = chars.find(x => x.id === activeId);
  if (!c) return;

  c.name = val('c-name'); c.species = val('c-species'); c.arch = val('c-arch'); c.background = val('c-background');
  c.ladder = val('c-ladder'); c.className = val('c-class'); c.lvl = val('c-lvl');
  
  c.str = val('s-str'); c.dex = val('s-dex'); c.con = val('s-con'); c.int = val('s-int'); c.wis = val('s-wis'); c.cha = val('s-cha'); c.vig = val('s-vig');
  c.saveProfs = { str: val('svS-str'), dex: val('svS-dex'), con: val('svS-con'), int: val('svS-int'), wis: val('svS-wis'), cha: val('svS-cha'), vig: val('svS-vig') };
  
  c.hpMax = val('hp-max'); c.hpCur = val('hp-cur'); c.hpTemp = val('hp-temp');
  c.hd = val('hd-val'); c.ac = val('ac-val'); c.spd = val('spd-val'); c.init = val('init-val');
  c.dsS = [val('ds-s1'), val('ds-s2'), val('ds-s3')]; c.dsF = [val('ds-f1'), val('ds-f2'), val('ds-f3')];

  c.armorPreset = val('armor-preset'); c.armorName = val('armor-name'); c.armorProps = val('armor-props');
  c.credits = val('credits'); c.inventory = val('inventory');

  UM5_SKILLS.forEach((_, i) => { c.skills['p'+i] = val('sk-p-'+i); c.skills['e'+i] = val('sk-e-'+i); });
  
  c.featNotes = val('feat-notes'); c.mpMax = val('mp-max'); c.mpCur = val('mp-cur');
  c.spellDc = val('spell-dc'); c.spellAtk = val('spell-atk'); c.magicSource = val('magic-source'); c.spellList = val('spell-list');

  c.vesselCur = val('m-vessel-cur');
  c.vesselMax = val('m-vessel-max');
  c.assets = val('m-assets');
  c.exhaustion = val('m-exhaustion');

  
if (!c.unlockedPaths) c.unlockedPaths = [];
  if (!c.knownSpells) c.knownSpells = [];
  if (!c.riverSpells) c.riverSpells = [];
  
  saveStorage();
  recalc();
  renderRoster();
}

function loadToForm(c) {
  if (!c) return;
  activeId = c.id;

  val('c-name', c.name); val('c-species', c.species); val('c-arch', c.arch); val('c-background', c.background);
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
  val('credits', c.credits); val('inventory', c.inventory);

  UM5_SKILLS.forEach((_, i) => { val('sk-p-'+i, c.skills && c.skills['p'+i]); val('sk-e-'+i, c.skills && c.skills['e'+i]); });
  
  val('feat-notes', c.featNotes); val('mp-max', c.mpMax); val('mp-cur', c.mpCur);
  val('spell-dc', c.spellDc); val('spell-atk', c.spellAtk); val('magic-source', c.magicSource); val('spell-list', c.spellList);
  
  val('m-vessel-cur', c.vesselCur || 0);
  val('m-vessel-max', c.vesselMax || 0);
  val('m-assets', c.assets || 0);
  val('m-exhaustion', c.exhaustion || 0);

  if (!c.unlockedPaths) c.unlockedPaths = [];
  if (!c.knownSpells) c.knownSpells = [];
  if (!c.riverSpells) c.riverSpells = [];
  
  renderWeapons();
  recalc();
  renderAbilities();
  renderRoster();
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
  const c = chars.find(x => x.id === activeId);
  const arch = typeof ARCHETYPE_DATA !== 'undefined' ? ARCHETYPE_DATA[val('c-arch')] : null;

  if (lad && $('ladder-box')) {
    if (!c.ladderTaken || !Array.isArray(c.ladderTaken) || c.ladderTaken.length !== lad.abilities.length) {
      c.ladderTaken = lad.abilities.map((_, i) => i === 0);
    }
    c.ladderTaken[0] = true;

    $('ladder-box').innerHTML =
      `<p style="font-size:0.8rem;color:var(--accent2);margin-bottom:6px;">${lad.desc}</p>` +
      `<p style="font-size:0.72rem;color:var(--muted);margin-bottom:10px;">1st-level feature is automatic. Later features are optional (taken instead of ASI/feat) and must be taken in order.</p>` +
      lad.abilities.map((a, i) => {
        const taken = !!c.ladderTaken[i];
        const prevTaken = i === 0 || !!c.ladderTaken[i - 1];
        const levelOk = lvl >= a.level;
        const locked = i === 0;
        const canCheck = !locked && prevTaken && levelOk;
        const disabled = locked || (!taken && !canCheck);
        const statusNote = !levelOk ? ' (need L' + a.level + ')' : (!prevTaken && i > 0 ? ' (take prior first)' : '');
        return `<div class="ability-entry${taken ? ' ability-taken' : ''}">
          <div class="ability-entry-header">
            <label class="ladder-check-label">
              <input type="checkbox" class="ladder-feat-check" data-idx="${i}" ${taken ? 'checked' : ''} ${disabled ? 'disabled' : ''} />
              <span>${a.name}</span>
            </label>
            <span class="ability-entry-level">Lvl ${a.level}${statusNote}</span>
          </div>
          <div class="ability-entry-desc">${a.desc}</div>
        </div>`;
      }).join('');

    $('ladder-box').querySelectorAll('.ladder-feat-check').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        const char = chars.find(x => x.id === activeId);
        const ladder = typeof LADDER_DATA !== 'undefined' ? LADDER_DATA[val('c-ladder')] : null;
        if (!char || !ladder || idx === 0) {
          e.target.checked = true;
          return;
        }
        const charLvl = parseInt(val('c-lvl'), 10) || 1;
        if (e.target.checked) {
          if (!char.ladderTaken[idx - 1] || charLvl < ladder.abilities[idx].level) {
            e.target.checked = false;
            return;
          }
          char.ladderTaken[idx] = true;
        } else {
          for (let j = idx; j < char.ladderTaken.length; j++) char.ladderTaken[j] = false;
        }
        saveStorage();
        renderAbilities();
      });
    });
  }

  // Archetype Box (New logic you had prior)
  if ($('archetype-box')) {
    if (!arch) {
      $('archetype-box').innerHTML = '<p style="color:var(--muted);font-size:0.8rem;">Select an Archetype on the Core tab to view its features here.</p>';
    } else {
      let html = `<p style="font-size:0.8rem;color:var(--accent2);margin-bottom:6px;">${arch.desc}</p>
        <p style="font-size:0.75rem;margin-bottom:2px;"><strong>Synergy:</strong> ${arch.synergy}</p>
        <p style="font-size:0.75rem;margin-bottom:10px;"><strong>Proficiencies:</strong> ${arch.proficiencies}</p>`;
      
      const archAbils = arch.abilities.filter(a => a.level <= lvl);
      if (archAbils.length === 0) {
        html += `<p style="color:var(--muted);font-size:0.8rem;margin-top:10px;">No archetype features unlocked yet (starts at Level 3).</p>`;
      } else {
        archAbils.forEach(a => {
          html += `<div class="ability-entry">
            <div class="ability-entry-header"><span>${a.name}</span><span class="ability-entry-level">Lvl ${a.level}</span></div>
            <div class="ability-entry-desc">${a.desc}</div>
          </div>`;
        });
      }
      $('archetype-box').innerHTML = html;
    }
  }

  if (cls && $('class-box')) {
    const list = cls.abilities.filter(a => a.level <= lvl);
    let html = `<p style="font-size:0.8rem;color:var(--accent2);margin-bottom:10px;">${cls.desc} · Hit Die ${cls.hitDie}</p>`;

    const menus = cls.choiceMenus ? cls.choiceMenus : (cls.choiceMenu ? [cls.choiceMenu] : []);

    if (!c.classChoices) c.classChoices = {};
    if (!c.classChoices[val('c-class')]) c.classChoices[val('c-class')] = {};

    const renderMenuBlock = (menu) => {
      const key = menu.name;
      if (!Array.isArray(c.classChoices[val('c-class')][key])) {
        c.classChoices[val('c-class')][key] = [];
      }
      const unlockedCount = menu.levels.filter(l => l <= lvl).length;
      if (unlockedCount <= 0) return '';

      let tierSummary = '';
      if (menu.trackTiers) {
        const counts = {};
        c.classChoices[val('c-class')][key].forEach(v => { if (v) counts[v] = (counts[v] || 0) + 1; });
        const parts = Object.keys(counts).map(k => `${k} Tier ${counts[k]}`);
        if (parts.length) tierSummary = `<div style="font-size:0.75rem;color:var(--accent);margin-bottom:6px;">Current: ${parts.join(' · ')}</div>`;
      }

      let menuHtml = `<div class="ability-entry" style="border-left-color: var(--accent2);">
        <div class="ability-entry-header"><span style="color:var(--accent2);">${menu.name}</span></div>
        <div class="ability-entry-desc" style="margin-bottom:6px;">${menu.hint || `Select ${unlockedCount} option(s) based on your level.`}</div>
        ${tierSummary}`;

      for (let i = 0; i < unlockedCount; i++) {
        const selected = c.classChoices[val('c-class')][key][i] || '';
        const opts = ['<option value="">-- Select --</option>']
          .concat(Object.keys(menu.options).map(k =>
            `<option value="${k}" ${k === selected ? 'selected' : ''}>${k}</option>`
          )).join('');

        let descHtml = '';
        if (selected && menu.options[selected]) {
          const optionData = menu.options[selected];
          if (Array.isArray(optionData)) {
            let tierCount = 0;
            for (let j = 0; j <= i; j++) {
              if (c.classChoices[val('c-class')][key][j] === selected) tierCount++;
            }
            const tierIndex = tierCount - 1;
            if (tierIndex >= 0 && tierIndex < optionData.length) {
              descHtml = `<div style="font-size:0.75rem;color:var(--text);margin-top:4px;padding:6px;background:rgba(0,0,0,0.3);border-radius:4px;">
                <span style="color:var(--accent);font-weight:700;">Tier ${tierCount}:</span> ${optionData[tierIndex]}
              </div>`;
            }
          } else {
            descHtml = `<div style="font-size:0.75rem;color:var(--text);margin-top:4px;padding:6px;background:rgba(0,0,0,0.3);border-radius:4px;">${optionData}</div>`;
          }
        }

        menuHtml += `<div class="field-group" style="margin-bottom:8px;">
          <label style="font-size:0.65rem;color:var(--muted);">Pick at level ${menu.levels[i] || '?'}</label>
          <select class="class-choice-select" data-menu="${key}" data-idx="${i}" style="background:var(--bg);">${opts}</select>
          ${descHtml}
        </div>`;
      }
      menuHtml += `</div>`;
      return menuHtml;
    };

    const renderedMenus = new Set();

    list.forEach(a => {
      html += `<div class="ability-entry"><div class="ability-entry-header"><span>${a.name}</span><span class="ability-entry-level">Lvl ${a.level}</span></div><div class="ability-entry-desc">${a.desc}</div></div>`;

      menus.forEach(menu => {
        if (renderedMenus.has(menu.name)) return;
        const firstUnlock = menu.levels[0];
        if (firstUnlock === a.level) {
          html += renderMenuBlock(menu);
          renderedMenus.add(menu.name);
        }
      });
    });

    menus.forEach(menu => {
      if (!renderedMenus.has(menu.name)) {
        const block = renderMenuBlock(menu);
        if (block) {
          html += block;
          renderedMenus.add(menu.name);
        }
      }
    });

    $('class-box').innerHTML = html;

    $('class-box').querySelectorAll('.class-choice-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const menuKey = e.target.dataset.menu;
        const idx = parseInt(e.target.dataset.idx, 10);
        const char = chars.find(x => x.id === activeId);
        const className = val('c-class');
        if (char && char.classChoices && char.classChoices[className]) {
          if (!Array.isArray(char.classChoices[className][menuKey])) {
            char.classChoices[className][menuKey] = [];
          }
          char.classChoices[className][menuKey][idx] = e.target.value;
          saveStorage();
          renderAbilities();
        }
      });
    });
  }
}

function switchTab(id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('.tab-page').forEach(p => p.classList.toggle('active', p.id === id));
  if (id === 'tab-abilities') renderAbilities();
  if (id === 'tab-skills' || id === 'tab-core') recalc();
  if (id === 'tab-combat') renderWeapons();
  if (id === 'tab-magic') renderMagic(); // Force render magic UI when opening the tab
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
  if ($('armor-type')) $('armor-type').addEventListener('change', (e) => populateArmorPresets(e.target.value));

  // Global listener for ALL inputs (ignore skill bonus inputs to prevent overwrite loops)
  document.querySelectorAll('input:not(.skill-bonus-input), select, textarea').forEach(el => {
    el.addEventListener('input', saveCurrent);
    el.addEventListener('change', saveCurrent);
  });

  // Magic Tab: Vessel Buttons Handling
  if ($('m-vessel-refill')) {
    $('m-vessel-refill').addEventListener('click', () => {
      val('m-vessel-cur', val('m-vessel-max'));
      saveCurrent();
    });
  }
  if ($('m-vessel-sub1')) {
    $('m-vessel-sub1').addEventListener('click', () => {
      val('m-vessel-cur', Math.max(0, (parseInt(val('m-vessel-cur'), 10) || 0) - 1));
      saveCurrent();
    });
  }
  if ($('m-vessel-add1')) {
    $('m-vessel-add1').addEventListener('click', () => {
      val('m-vessel-cur', (parseInt(val('m-vessel-cur'), 10) || 0) + 1);
      saveCurrent();
    });
  }
  
  if ($('c-ladder')) $('c-ladder').addEventListener('change', () => {
    const ch = chars.find(x => x.id === activeId);
    if (ch) ch.ladderTaken = null;
    renderAbilities();
  });
  if ($('c-arch')) $('c-arch').addEventListener('change', renderAbilities);
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

/* ============================================================
   MAGIC SYSTEM WIRING
   ============================================================ */

function getActiveChar() {
  return chars.find(x => x.id === activeId);
}

function getAssets() {
  return parseInt(val('m-assets'), 10) || 0;
}

function setAssets(n) {
  val('m-assets', Math.max(0, n));
  const c = getActiveChar();
  if (c) c.assets = Math.max(0, n);
  saveStorage();
}

function getVesselCur() {
  return parseInt(val('m-vessel-cur'), 10) || 0;
}

function setVesselCur(n) {
  const max = parseInt(val('m-vessel-max'), 10) || 0;
  const clamped = Math.max(0, Math.min(max, n));
  val('m-vessel-cur', clamped);
  const c = getActiveChar();
  if (c) c.vesselCur = clamped;
  saveStorage();
}

function spellKey(pathKey, name) {
  return pathKey + '::' + name;
}

function characterKnowsSpell(c, pathKey, name) {
  if (!c || !c.knownSpells) return false;
  return c.knownSpells.some(s => s.pathKey === pathKey && s.name === name);
}

function characterHasPath(c, pathKey) {
  if (!c || !c.unlockedPaths) return false;
  return c.unlockedPaths.includes(pathKey);
}

function characterHasRootInPath(c, pathKey) {
  if (!c || !c.knownSpells) return false;
  return c.knownSpells.some(s => {
    if (s.pathKey !== pathKey) return false;
    if (typeof MAGIC_PATHS === 'undefined' || !MAGIC_PATHS[pathKey]) return false;
    const sp = MAGIC_PATHS[pathKey].spells.find(x => x.name === s.name);
    return sp && sp.tier === 0;
  });
}


/* ---- DARK SEQUENCE (Clean UI & Rules) ---- */

function renderDarkSequence() {
  const box = $('dark-sequence-container');
  if (!box || typeof MAGIC_PATHS === 'undefined') return;

  const c = getActiveChar();
  if (!c) { box.innerHTML = ''; return; }

  const assets = getAssets();
  let html = '';

  // Separate paths into Unlocked and Locked
  const unlocked = Object.keys(MAGIC_PATHS).filter(k => characterHasPath(c, k));
  const locked = Object.keys(MAGIC_PATHS).filter(k => !characterHasPath(c, k));

  // 1. UNLOCKED PATHS SECTION
  if (unlocked.length > 0) {
    html += `<h4 style="color:var(--accent); border-bottom:1px solid var(--border); padding-bottom:4px; margin-bottom:10px;">Unlocked Paths</h4>`;
    unlocked.forEach(pathKey => {
      html += renderPathCard(c, pathKey, assets, true);
    });
  } else {
    html += `<div style="padding:10px; background:rgba(0,0,0,0.2); border-radius:6px; text-align:center; color:var(--muted); margin-bottom:15px;">
      No paths unlocked yet. Use your Assets to unlock one below.
    </div>`;
  }

  // 2. EXPLORE & UNLOCK SECTION
  if (locked.length > 0) {
    html += `<h4 style="color:var(--accent2); border-bottom:1px solid var(--border); padding-bottom:4px; margin-top:20px; margin-bottom:10px;">Explore & Unlock Paths</h4>`;
    html += `<div class="field-group" style="margin-bottom:10px;">
      <select id="path-explore-select" style="background:var(--bg); border:1px solid var(--accent2);">
        <option value="">-- Select a Path to explore --</option>
        ${locked.map(k => `<option value="${k}">${MAGIC_PATHS[k].name} (Cost: ${MAGIC_PATHS[k].cost})</option>`).join('')}
      </select>
    </div>`;
    html += `<div id="path-preview-container"></div>`;
  }

  box.innerHTML = html;

  // Bind "Buy Spell" buttons for unlocked paths
  box.querySelectorAll('.btn-buy-spell').forEach(btn => {
    btn.onclick = () => buySpell(btn.dataset.path, btn.dataset.name);
  });

  // Bind the Dropdown to show the path preview instantly
  const sel = $('path-explore-select');
  if (sel) {
    sel.addEventListener('change', (e) => {
      const previewBox = $('path-preview-container');
      if (!e.target.value) {
        previewBox.innerHTML = '';
      } else {
        // Render the selected path as a locked preview
        previewBox.innerHTML = renderPathCard(c, e.target.value, assets, false);
        
        // Bind the unlock button inside the preview
        const btnUnlock = previewBox.querySelector('.btn-unlock-path');
        if (btnUnlock) {
          btnUnlock.onclick = () => {
            unlockPath(e.target.value);
          };
        }
      }
    });
  }
}

// Helper to generate the HTML for a single Path
function renderPathCard(c, pathKey, assets, isUnlocked) {
  const path = MAGIC_PATHS[pathKey];
  if (!path) return '';

  let html = `<div class="ability-entry" style="border-left-color:${isUnlocked ? 'var(--success)' : 'var(--accent2)'}; margin-bottom:10px; background:var(--input);">
    <div class="ability-entry-header">
      <span style="color:${isUnlocked ? 'var(--success)' : 'var(--accent2)'};">${path.name}</span>
      <span class="ability-entry-level">${isUnlocked ? 'UNLOCKED' : `Cost: ${path.cost} Assets`}</span>
    </div>
    <div class="ability-entry-desc" style="margin-bottom:10px;">
      <strong style="color:var(--accent);">Benefit:</strong> ${path.benefit}<br>
      <strong style="color:var(--accent);">Synergy:</strong> ${path.synergy}<br>
      <em style="font-size:0.75rem; color:var(--muted);">${path.traits}</em>
    </div>`;

  if (!isUnlocked) {
    const canAfford = assets >= path.cost;
    html += `<button type="button" class="btn btn-primary btn-unlock-path"
      data-path="${pathKey}" ${canAfford ? '' : 'disabled'}
      style="margin-bottom:10px; width:100%; background:var(--accent2); color:#000;">
      Unlock ${path.name} (${path.cost} Assets)${canAfford ? '' : ' - Need more Assets'}
    </button>`;
  }

  // Group spells by tier
  const tiers = {};
  path.spells.forEach(sp => {
    if (!tiers[sp.tier]) tiers[sp.tier] = [];
    tiers[sp.tier].push(sp);
  });

  Object.keys(tiers).sort().forEach(tier => {
    html += `<div style="margin-top:8px;">
      <div style="font-size:0.75rem; color:var(--accent); font-weight:700; margin-bottom:4px; border-bottom:1px solid rgba(0,242,254,0.2);">
        Tier ${tier}${tier === '0' ? ' (Root)' : ''}
      </div>`;

    tiers[tier].forEach(sp => {
      const known = characterKnowsSpell(c, pathKey, sp.name);
      let canBuy = false;
      let btnLabel = '';

      if (!isUnlocked) {
        btnLabel = `AP ${sp.ap}`; // Just show cost text if locked
      } else {
        // Strict Rule: Must have a spell in EVERY lower tier
        let hasLowerTiers = true;
        for (let t = 0; t < sp.tier; t++) {
          const hasT = c.knownSpells.some(s => s.pathKey === pathKey && path.spells.find(x => x.name === s.name)?.tier === t);
          if (!hasT) hasLowerTiers = false;
        }

        const canAfford = assets >= sp.ap;
        canBuy = !known && hasLowerTiers && canAfford;

        if (known) btnLabel = '✓ Known';
        else if (!hasLowerTiers) btnLabel = `Buy (${sp.ap} AP) - Need prior tiers`;
        else if (!canAfford) btnLabel = `Buy (${sp.ap} AP) - Not enough Assets`;
        else btnLabel = `Buy (${sp.ap} AP)`;
      }

      html += `<div style="background:rgba(0,0,0,0.3); padding:6px 8px; border-radius:4px; margin-bottom:4px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
          <span style="font-size:0.82rem; font-weight:700; color:${isUnlocked ? 'var(--text)' : 'var(--muted)'};">
            ${sp.name}${sp.ritual ? ' <small style="color:var(--accent2);">(Ritual)</small>' : ''}
          </span>`;

      if (isUnlocked) {
        html += `<button type="button" class="btn btn-sm btn-buy-spell"
          data-path="${pathKey}" data-name="${sp.name}"
          ${canBuy ? '' : 'disabled'}
          style="font-size:0.7rem; padding:4px 8px; background:${known ? 'var(--success)' : 'var(--accent)'}; color:#000;">
          ${btnLabel}
        </button>`;
      } else {
        html += `<span style="font-size:0.7rem; color:var(--muted); font-weight:bold;">${btnLabel}</span>`;
      }

            html += `</div>
        <div style="font-size:0.7rem; color:var(--muted); margin-top:2px;">
          ${sp.cc ? `CC ${sp.cc} · ` : ''}${sp.time} · ${sp.range} · ${sp.duration} · ${sp.comp}
        </div>
        ${sp.desc ? `<div style="font-size:0.75rem; color:var(--text); margin-top:4px; border-top:1px dashed rgba(255,255,255,0.1); padding-top:4px;">${sp.desc}</div>` : ''}
      </div>`;
    });
    html += `</div>`;
  });
  html += `</div>`;
  return html;
}

function buySpell(pathKey, name) {
  const c = getActiveChar();
  if (!c || !MAGIC_PATHS[pathKey]) return;
  const path = MAGIC_PATHS[pathKey];
  const sp = path.spells.find(x => x.name === name);
  if (!sp) return;

  const assets = getAssets();
  if (assets < sp.ap) {
    alert('Not enough Assets to buy this spell.');
    return;
  }
  if (characterKnowsSpell(c, pathKey, name)) return;

  // Strict rule check: Must own at least one spell in EACH lower tier
  if (sp.tier > 0) {
    for (let t = 0; t < sp.tier; t++) {
      const hasSpellInTier = c.knownSpells.some(s => {
        if (s.pathKey !== pathKey) return false;
        const knownSp = path.spells.find(x => x.name === s.name);
        return knownSp && knownSp.tier === t;
      });
      if (!hasSpellInTier) {
        alert(`You must know at least one Tier ${t} spell in this path before buying a Tier ${sp.tier} spell.`);
        return;
      }
    }
  }

  if (!confirm(`Buy "${sp.name}" for ${sp.ap} Assets?`)) return;

  if (!c.knownSpells) c.knownSpells = [];
  c.knownSpells.push({ pathKey, name: sp.name });
  setAssets(assets - sp.ap);

  // SYNERGY RULE (Matches page 229)
  if (sp.tier > 0 && path.synergy && MAGIC_PATHS[path.synergy] && characterHasPath(c, path.synergy)) {
    const synPath = MAGIC_PATHS[path.synergy];
    const sorted = [...synPath.spells].sort((a, b) => a.tier - b.tier);
    const freeSpell = sorted.find(s => !characterKnowsSpell(c, path.synergy, s.name));
    if (freeSpell) {
      c.knownSpells.push({ pathKey: path.synergy, name: freeSpell.name });
      alert(`Synergy bonus! You gained "${freeSpell.name}" from ${synPath.name} for free.`);
    }
  }

  saveStorage();
  renderMagic();
}


    

function unlockPath(pathKey) {
  const c = getActiveChar();
  if (!c || !MAGIC_PATHS[pathKey]) return;
  const path = MAGIC_PATHS[pathKey];
  const assets = getAssets();
  if (assets < path.cost) {
    alert('Not enough Assets to unlock this path.');
    return;
  }
  if (!confirm(`Unlock ${path.name} for ${path.cost} Assets?`)) return;

  if (!c.unlockedPaths) c.unlockedPaths = [];
  c.unlockedPaths.push(pathKey);
  setAssets(assets - path.cost);
  renderMagic();
}

/* ---- KNOWN SPELLS LIST ---- */

let knownSpellsFilter = 'all'; // 'all' | 'river' | 'rituals'

function renderKnownSpells() {
  const box = $('known-spells-list');
  if (!box) return;

  const c = getActiveChar();
  if (!c) { box.innerHTML = ''; return; }

  // Build filter buttons (reuse existing header buttons if present)
  const header = box.closest('.card');
  if (header) {
    const btns = header.querySelectorAll('.btn-group .btn');
    btns.forEach(b => {
      b.classList.remove('active');
      const label = b.textContent.trim().toLowerCase();
      if (
        (knownSpellsFilter === 'all' && label === 'all') ||
        (knownSpellsFilter === 'river' && label.includes('river')) ||
        (knownSpellsFilter === 'rituals' && label.includes('ritual'))
      ) {
        b.classList.add('active');
      }
      b.onclick = () => {
        if (label === 'all') knownSpellsFilter = 'all';
        else if (label.includes('river')) knownSpellsFilter = 'river';
        else if (label.includes('ritual')) knownSpellsFilter = 'rituals';
        renderKnownSpells();
      };
    });
  }

  // Collect spells: collective + known
  const list = [];

  if (typeof COLLECTIVE_SPELLS !== 'undefined') {
    COLLECTIVE_SPELLS.forEach(sp => {
      list.push({ ...sp, pathKey: 'collective', pathName: 'Collective', tier: 0 });
    });
  }

  if (c.knownSpells) {
    c.knownSpells.forEach(entry => {
      const path = MAGIC_PATHS[entry.pathKey];
      if (!path) return;
      const sp = path.spells.find(x => x.name === entry.name);
      if (!sp) return;
      list.push({ ...sp, pathKey: entry.pathKey, pathName: path.name });
    });
  }

  // Apply filter
  const inRiver = c.riverSpells || [];
  let filtered = list;
  if (knownSpellsFilter === 'river') {
    filtered = list.filter(s => inRiver.some(r => r.pathKey === s.pathKey && r.name === s.name));
  } else if (knownSpellsFilter === 'rituals') {
    filtered = list.filter(s => s.ritual);
  }

  if (filtered.length === 0) {
    box.innerHTML = '<p style="font-size:0.8rem;color:var(--muted);">No spells match this filter.</p>';
    return;
  }

  let html = '';
  filtered.forEach(sp => {
    const isInRiver = inRiver.some(r => r.pathKey === sp.pathKey && r.name === sp.name);
    const riverFull = inRiver.length >= (parseInt($('m-river-max')?.textContent, 10) || 0);
    const canSlot = !sp.ritual && !isInRiver && !riverFull && sp.pathKey !== 'collective';

    html += `<div style="background:var(--input); border-left:3px solid var(--accent); border-radius:0 6px 6px 0; padding:8px 10px; margin-bottom:6px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
        <span style="font-weight:700; font-size:0.85rem;">
          ${sp.name} <small style="color:var(--muted); font-weight:400;">[${sp.pathName} T${sp.tier}]</small>
          ${sp.ritual ? '<small style="color:var(--accent2);"> (Ritual)</small>' : ''}
          ${isInRiver ? '<small style="color:var(--success);"> ★ In River</small>' : ''}
        </span>
        <div style="display:flex; gap:4px;">`;

    if (sp.ritual) {
      html += `<button type="button" class="btn btn-sm btn-cast-ritual"
        data-path="${sp.pathKey}" data-name="${sp.name}"
        style="font-size:0.7rem; padding:4px 8px; background:var(--accent2); color:#000;">
        Cast Ritual
      </button>`;
    } else if (sp.pathKey !== 'collective') {
      if (isInRiver) {
        html += `<button type="button" class="btn btn-sm btn-remove-river"
          data-path="${sp.pathKey}" data-name="${sp.name}"
          style="font-size:0.7rem; padding:4px 8px; background:var(--danger); color:#fff;">
          Remove from River
        </button>`;
      } else {
        html += `<button type="button" class="btn btn-sm btn-add-river"
          data-path="${sp.pathKey}" data-name="${sp.name}"
          ${canSlot ? '' : 'disabled'}
          style="font-size:0.7rem; padding:4px 8px; background:var(--accent); color:#000;">
          ${riverFull ? 'River Full' : 'Slot into River'}
        </button>`;
      }
    }

    // Collective spells get a Cast button too
    if (sp.pathKey === 'collective' && !sp.ritual) {
      html += `<button type="button" class="btn btn-sm btn-cast-collective"
        data-name="${sp.name}"
        style="font-size:0.7rem; padding:4px 8px; background:var(--accent2); color:#000;">
        Cast (${sp.cc} CC)
      </button>`;
    }

    html += `</div></div>
      <div style="font-size:0.72rem; color:var(--muted); margin-top:3px;">
        AP ${sp.ap}${sp.cc ? ` · CC ${sp.cc}` : ''} · ${sp.time} · ${sp.range} · ${sp.duration} · ${sp.comp}
      </div>`;

    if (sp.desc) {
      html += `<div style="font-size:0.75rem; color:var(--text); margin-top:4px;">${sp.desc}</div>`;
    }

    html += `</div>`;
  });

  box.innerHTML = html;

  // Bind events
  box.querySelectorAll('.btn-add-river').forEach(btn => {
    btn.onclick = () => addSpellToRiver(btn.dataset.path, btn.dataset.name);
  });
  box.querySelectorAll('.btn-remove-river').forEach(btn => {
    btn.onclick = () => removeSpellFromRiver(btn.dataset.path, btn.dataset.name);
  });
  box.querySelectorAll('.btn-cast-ritual').forEach(btn => {
    btn.onclick = () => castRitual(btn.dataset.path, btn.dataset.name);
  });
  box.querySelectorAll('.btn-cast-collective').forEach(btn => {
    btn.onclick = () => castCollective(btn.dataset.name);
  });
}

function addSpellToRiver(pathKey, name) {
  const c = getActiveChar();
  if (!c) return;
  if (!c.riverSpells) c.riverSpells = [];
  const riverMax = parseInt($('m-river-max')?.textContent, 10) || 0;
  if (c.riverSpells.length >= riverMax) {
    alert('River is full.');
    return;
  }
  if (c.riverSpells.some(r => r.pathKey === pathKey && r.name === name)) return;
  c.riverSpells.push({ pathKey, name });
  saveStorage();
  renderMagic();
}

function removeSpellFromRiver(pathKey, name) {
  const c = getActiveChar();
  if (!c || !c.riverSpells) return;
  c.riverSpells = c.riverSpells.filter(r => !(r.pathKey === pathKey && r.name === name));
  saveStorage();
  renderMagic();
}

function castRitual(pathKey, name) {
  const path = MAGIC_PATHS[pathKey];
  const sp = path?.spells.find(x => x.name === name);
  if (!sp) return;
  alert(`Casting ritual: ${sp.name}\n\nTime: ${sp.time}\nSacrifice may apply (see description).\n\nNo Vessel cost.`);
}

function castCollective(name) {
  if (typeof COLLECTIVE_SPELLS === 'undefined') return;
  const sp = COLLECTIVE_SPELLS.find(x => x.name === name);
  if (!sp) return;
  if (sp.ritual) {
    alert(`Casting ritual: ${sp.name}`);
    return;
  }
  const cur = getVesselCur();
  const cost = sp.cc || 0;
  if (cur < cost) {
    alert(`Not enough Vessel to cast ${sp.name} (needs ${cost}, you have ${cur}).`);
    return;
  }
  if (!confirm(`Cast ${sp.name} for ${cost} Vessel?`)) return;
  setVesselCur(cur - cost);
  renderMagic();
}

/* ---- RIVER SLOTS ---- */

function renderRiverSlots(riverMax) {
  const box = $('river-slots-container');
  if (!box) return;

  const c = getActiveChar();
  if (!c) { box.innerHTML = ''; return; }
  if (!c.riverSpells) c.riverSpells = [];

  // Prune invalid/removed river spells
  c.riverSpells = c.riverSpells.filter(r => {
    const path = MAGIC_PATHS[r.pathKey];
    if (!path) return false;
    const sp = path.spells.find(x => x.name === r.name);
    if (!sp) return false;
    if (sp.ritual) return false;
    if (!characterKnowsSpell(c, r.pathKey, r.name)) return false;
    return true;
  });
  // Clamp to current river max
  if (c.riverSpells.length > riverMax) c.riverSpells = c.riverSpells.slice(0, riverMax);

  if ($('m-river-count')) $('m-river-count').textContent = c.riverSpells.length;

  if (riverMax <= 0) {
    box.innerHTML = '<p style="font-size:0.8rem;color:var(--muted);">Vigor modifier is 0 or lower. No River slots available.</p>';
    return;
  }

  let html = '';
  for (let i = 0; i < riverMax; i++) {
    const slot = c.riverSpells[i];
    if (slot) {
      const path = MAGIC_PATHS[slot.pathKey];
      const sp = path?.spells.find(x => x.name === slot.name);
      const cost = sp?.cc || 0;
      const curVessel = getVesselCur();
      const canCast = curVessel >= cost;

      html += `<div style="border:2px solid var(--accent); border-radius:6px; padding:10px; background:rgba(0,242,254,0.08);">
        <div style="font-size:0.8rem; font-weight:700; color:var(--accent); margin-bottom:4px;">${sp?.name || slot.name}</div>
        <div style="font-size:0.68rem; color:var(--muted); margin-bottom:6px;">
          ${path?.name || ''} · T${sp?.tier ?? '?'}<br>
          CC ${cost} · ${sp?.time || ''} · ${sp?.range || ''}
        </div>
        <div style="display:flex; gap:4px; flex-wrap:wrap;">
          <button type="button" class="btn btn-sm btn-cast-river"
            data-path="${slot.pathKey}" data-name="${slot.name}"
            ${canCast ? '' : 'disabled'}
            style="font-size:0.7rem; padding:4px 8px; background:var(--accent); color:#000; flex:1;">
            Cast (${cost} CC)
          </button>
          <button type="button" class="btn btn-sm btn-river-remove"
            data-path="${slot.pathKey}" data-name="${slot.name}"
            style="font-size:0.7rem; padding:4px 8px; background:var(--danger); color:#fff;">
            ✕
          </button>
        </div>
      </div>`;
    } else {
      html += `<div style="border:1px dashed var(--border); border-radius:6px; padding:10px; text-align:center; background:rgba(0,0,0,0.2); min-height:80px; display:flex; flex-direction:column; justify-content:center;">
        <small style="color:var(--muted); font-size:0.75rem;">River Slot ${i + 1}</small>
        <span style="font-size:0.8rem; font-style:italic; color:var(--muted);">Empty</span>
      </div>`;
    }
  }

  box.innerHTML = html;

  box.querySelectorAll('.btn-cast-river').forEach(btn => {
    btn.onclick = () => castFromRiver(btn.dataset.path, btn.dataset.name);
  });
  box.querySelectorAll('.btn-river-remove').forEach(btn => {
    btn.onclick = () => removeSpellFromRiver(btn.dataset.path, btn.dataset.name);
  });
}

function castFromRiver(pathKey, name) {
  const c = getActiveChar();
  if (!c) return;
  const path = MAGIC_PATHS[pathKey];
  const sp = path?.spells.find(x => x.name === name);
  if (!sp) return;

  const cur = getVesselCur();
  const cost = sp.cc || 0;
  if (cur < cost) {
    alert(`Not enough Vessel to cast ${sp.name} (needs ${cost}, you have ${cur}).`);
    return;
  }
  if (!confirm(`Cast ${sp.name} from River for ${cost} Vessel?`)) return;
  setVesselCur(cur - cost);
  renderMagic();
}
