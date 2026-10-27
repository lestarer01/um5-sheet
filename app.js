/* ==========================================
   ULTRAMODERN 5 (UM5) CHARACTER SHEET ENGINE
   ========================================== */

const STORAGE_KEY = 'um5_chars_v5';

// Master UM5 Skills List
const UM5_SKILLS = [
  { name: "Acrobatics", stat: "dex" },
  { name: "Animal Handling", stat: "wis" },
  { name: "Arcana", stat: "int" },
  { name: "Athletics", stat: "str" },
  { name: "Commune", stat: "vig" },
  { name: "Computer Use", stat: "int" },
  { name: "Deception", stat: "cha" },
  { name: "Demolitions", stat: "int" },
  { name: "Detection", stat: "vig" },
  { name: "Engineering", stat: "int" },
  { name: "History", stat: "int" },
  { name: "Induce", stat: "vig" },
  { name: "Insight", stat: "wis" },
  { name: "Intimidation", stat: "cha" },
  { name: "Investigation", stat: "int" },
  { name: "Medicine", stat: "wis" },
  { name: "Nature", stat: "int" },
  { name: "Perception", stat: "wis" },
  { name: "Performance", stat: "cha" },
  { name: "Persuasion", stat: "cha" },
  { name: "Religion", stat: "int" },
  { name: "Sciences", stat: "int" },
  { name: "Sleight of Hand", stat: "dex" },
  { name: "Stealth", stat: "dex" },
  { name: "Survival", stat: "dex" }
];

let chars = [];
let activeId = null;

// Helper: Calculate Proficiency Bonus by Level
function getProfBonus(lvl) {
  const level = parseInt(lvl) || 1;
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  if (level >= 9) return 4;
  if (level >= 5) return 3;
  return 2;
}

// Helper: Calculate Ability Modifier
function calcMod(score) {
  const s = parseInt(score) || 10;
  return Math.floor((s - 10) / 2);
}

// Blank Character Generator Template
function emptyWeapon() {
  return { preset: "", name: "", dmg: "", range: "", props: "", max: "", cur: "" };
}

function emptyChar(name = "New Operative") {
  const skillObj = {};
  UM5_SKILLS.forEach(sk => {
    skillObj[sk.name] = { prof: false, exp: false };
  });

  return {
    id: "char_" + Date.now(),
    name: name,
    species: "",
    background: "",
    ladder: "",
    class: "",
    archetype: "",
    level: 1,

    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, vig: 10,
    strSave: false, dexSave: false, conSave: false, intSave: false, wisSave: false, chaSave: false, vigSave: false,

    initiativeBonus: 0,
    speed: 30,
    hpMax: 10,
    hpCurrent: 10,
    hpTemp: 0,
    hitDiceMax: "1d8",
    hitDiceCurrent: 1,
    ac: 10,

    dsS1: false, dsS2: false, dsS3: false,
    dsF1: false, dsF2: false, dsF3: false,

    armorType: "",
    armorPreset: "",
    armorName: "",
    armorProps: "",

    weapons: [emptyWeapon()],

    credits: "",
    inventory: "",
    skills: skillObj,

    ladderNotes: "",
    classNotes: "",

    darkManaMax: 0,
    darkManaCur: 0,
    darkSpells: ""
  };
}

// Active Character Helper
function getActiveChar() {
  return chars.find(c => c.id === activeId);
}

// Data Persistence
function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      chars = JSON.parse(raw);
    } catch (e) {
      chars = [];
    }
  }
  if (!chars || chars.length === 0) {
    const defaultChar = emptyChar("Operative 1");
    chars = [defaultChar];
    activeId = defaultChar.id;
    saveData();
  } else {
    activeId = chars[0].id;
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chars));
}

// Tab Switching System
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add("active");
    });
  });
}

// Operatives Management
function populateOperativesList() {
  const select = document.getElementById("op-select");
  if (!select) return;

  select.innerHTML = "";
  chars.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name || "Unnamed Operative";
    if (c.id === activeId) opt.selected = true;
    select.appendChild(opt);
  });
}

function initOperativeEvents() {
  const select = document.getElementById("op-select");
  const btnNew = document.getElementById("btn-new-op");
  const btnDelete = document.getElementById("btn-delete-op");

  if (select) {
    select.addEventListener("change", (e) => {
      activeId = e.target.value;
      loadToForm();
    });
  }

  if (btnNew) {
    btnNew.addEventListener("click", () => {
      const nameInput = document.getElementById("new-op-name");
      const name = nameInput?.value.trim() || "New Operative";
      const newChar = emptyChar(name);
      chars.push(newChar);
      activeId = newChar.id;
      if (nameInput) nameInput.value = "";
      saveData();
      populateOperativesList();
      loadToForm();
    });
  }

  if (btnDelete) {
    btnDelete.addEventListener("click", () => {
      if (chars.length <= 1) {
        alert("You must keep at least one Operative!");
        return;
      }
      if (confirm("Delete this Operative? This action cannot be undone.")) {
        chars = chars.filter(c => c.id !== activeId);
        activeId = chars[0].id;
        saveData();
        populateOperativesList();
        loadToForm();
      }
    });
  }
}

// Armor Categorization and Calculation
function filterArmorByType() {
  const typeSelect = document.getElementById("armor-type");
  const presetSelect = document.getElementById("armor-preset");
  if (!typeSelect || !presetSelect) return;

  const selectedType = typeSelect.value.trim().toLowerCase();
  presetSelect.innerHTML = '<option value="">-- Select Preset --</option>';

  if (typeof ARMOR_DATA === "undefined") return;

  for (const [key, a] of Object.entries(ARMOR_DATA)) {
    const itemType = (a.type || "").toLowerCase();
    
    // Show all if no filter selected, or match if filter is Light / Medium / Heavy
    const isMatch = !selectedType || 
                    itemType.includes(selectedType) || 
                    selectedType.includes(itemType.replace(" armor", ""));

    if (isMatch) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = `${key} (AC ${a.baseAc})`;
      presetSelect.appendChild(opt);
    }
  }
}

function applyArmor() {
  const presetKey = document.getElementById("armor-preset")?.value;
  if (!presetKey || typeof ARMOR_DATA === "undefined" || !ARMOR_DATA[presetKey]) return;

  const a = ARMOR_DATA[presetKey];
  const dexScore = parseInt(document.getElementById("dex-score")?.value) || 10;
  const dexMod = calcMod(dexScore);

  let dexBonus = 0;
  if (a.maxDex > 0) {
    dexBonus = Math.min(dexMod, a.maxDex);
  }

  const calculatedAc = a.baseAc + dexBonus;

  const acInput = document.getElementById("ac");
  const nameInput = document.getElementById("armor-name");
  const propsInput = document.getElementById("armor-props");

  if (acInput) acInput.value = calculatedAc;
  if (nameInput) nameInput.value = presetKey;

  const propsStr = `${a.props?.cost ? a.props.cost : ''} | Wt: ${a.props?.wt ? a.props.wt : ''} | ${a.props?.stealth ? a.props.stealth : ''} | TL${a.props?.tl !== undefined ? a.props.tl : ''}`;
  if (propsInput) propsInput.value = propsStr.replace(/^ \| | \| $/g, '');

  saveCurrent();
}

// Dynamic Weapon System
function renderWeapons() {
  const container = document.getElementById("weapons-container");
  if (!container) return;

  const c = getActiveChar();
  if (!c) return;

  if (!c.weapons || c.weapons.length === 0) {
    c.weapons = [emptyWeapon()];
  }

  container.innerHTML = "";

  c.weapons.forEach((w, index) => {
    const card = document.createElement("div");
    card.className = "card weapon-card mb-2";

    let weaponOptions = '<option value="">-- Preset --</option>';
    if (typeof WEAPON_DATA !== "undefined") {
      Object.keys(WEAPON_DATA).forEach(wName => {
        const sel = w.preset === wName ? "selected" : "";
        weaponOptions += `<option value="${wName}" ${sel}>${wName}</option>`;
      });
    }

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="color:var(--accent);">Weapon #${index + 1}</strong>
        <button class="btn btn-delete btn-sm" onclick="removeWeapon(${index})">Remove</button>
      </div>

      <div class="form-group mb-1">
        <label>Preset Quick-Fill</label>
        <select class="form-control w-preset" data-index="${index}">${weaponOptions}</select>
      </div>

      <div class="row">
        <div class="col-6 form-group">
          <label>Weapon Name</label>
          <input type="text" class="form-control w-name" data-index="${index}" value="${w.name || ''}" placeholder="Custom Weapon">
        </div>
        <div class="col-6 form-group">
          <label>Damage</label>
          <input type="text" class="form-control w-dmg" data-index="${index}" value="${w.dmg || ''}" placeholder="1d8 ballistic">
        </div>
      </div>

      <div class="row">
        <div class="col-6 form-group">
          <label>Range</label>
          <input type="text" class="form-control w-range" data-index="${index}" value="${w.range || ''}" placeholder="50/150">
        </div>
        <div class="col-6 form-group">
          <label>Properties</label>
          <input type="text" class="form-control w-props" data-index="${index}" value="${w.props || ''}" placeholder="Recoil, Burst">
        </div>
      </div>

      <div class="row">
        <div class="col-6 form-group">
          <label>Ammo Capacity</label>
          <input type="number" class="form-control w-max" data-index="${index}" value="${w.max !== undefined ? w.max : ''}" placeholder="30">
        </div>
        <div class="col-6 form-group">
          <label>Ammo Loaded</label>
          <input type="number" class="form-control w-cur" data-index="${index}" value="${w.cur !== undefined ? w.cur : ''}" placeholder="30">
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  bindWeaponEvents();
}

function bindWeaponEvents() {
  const container = document.getElementById("weapons-container");
  if (!container) return;

  const c = getActiveChar();
  if (!c) return;

  container.querySelectorAll(".w-preset").forEach(elem => {
    elem.addEventListener("change", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const presetKey = e.target.value;
      if (presetKey && typeof WEAPON_DATA !== "undefined" && WEAPON_DATA[presetKey]) {
        const wData = WEAPON_DATA[presetKey];
        c.weapons[idx] = {
          preset: presetKey,
          name: presetKey,
          dmg: wData.dmg || "",
          range: wData.range || "",
          props: wData.props || "",
          max: wData.max || "",
          cur: wData.max || ""
        };
        saveData();
        renderWeapons();
      }
    });
  });

  const fields = ['name', 'dmg', 'range', 'props', 'max', 'cur'];
  fields.forEach(field => {
    container.querySelectorAll(`.w-${field}`).forEach(elem => {
      elem.addEventListener("input", (e) => {
        const idx = parseInt(e.target.getAttribute("data-index"));
        if (c.weapons[idx]) {
          c.weapons[idx][field] = e.target.value;
          saveData();
        }
      });
    });
  });
}

function addWeapon() {
  const c = getActiveChar();
  if (!c) return;
  if (!c.weapons) c.weapons = [];
  c.weapons.push(emptyWeapon());
  saveData();
  renderWeapons();
}

function removeWeapon(index) {
  const c = getActiveChar();
  if (!c) return;
  c.weapons.splice(index, 1);
  if (c.weapons.length === 0) c.weapons.push(emptyWeapon());
  saveData();
  renderWeapons();
}

// Skills Renderer
function renderSkillsTable() {
  const tbody = document.getElementById("skills-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  UM5_SKILLS.forEach(sk => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <strong>${sk.name}</strong>
        <span style="font-size:0.75rem; color:var(--text-dim); display:block;">${sk.stat.toUpperCase()}</span>
      </td>
      <td style="text-align:center;">
        <input type="checkbox" id="sk-prof-${sk.name}" class="sk-prof-chk" data-skill="${sk.name}">
      </td>
      <td style="text-align:center;">
        <input type="checkbox" id="sk-exp-${sk.name}" class="sk-exp-chk" data-skill="${sk.name}">
      </td>
      <td style="text-align:right;">
        <strong id="sk-val-${sk.name}">+0</strong>
      </td>
    `;

    tbody.appendChild(tr);
  });

  tbody.querySelectorAll(".sk-prof-chk, .sk-exp-chk").forEach(chk => {
    chk.addEventListener("change", () => {
      saveCurrent();
      recalc();
    });
  });
}

// Abilities Tab Renderer
function renderAbilities() {
  const ladderBox = document.getElementById("ladder-features");
  const classBox = document.getElementById("class-features");
  const c = getActiveChar();

  if (!c) return;
  const charLvl = parseInt(c.level) || 1;

  if (ladderBox) {
    ladderBox.innerHTML = "";
    if (typeof LADDER_DATA !== "undefined" && c.ladder && LADDER_DATA[c.ladder]) {
      const ladder = LADDER_DATA[c.ladder];
      for (const [lvl, text] of Object.entries(ladder.features || {})) {
        if (parseInt(lvl) <= charLvl) {
          const div = document.createElement("div");
          div.className = "mb-1";
          div.innerHTML = `<strong style="color:var(--accent);">Level ${lvl}:</strong> <span>${text}</span>`;
          ladderBox.appendChild(div);
        }
      }
    } else {
      ladderBox.innerHTML = '<span style="color:var(--text-dim);">Select a Ladder in Core tab to load features.</span>';
    }
  }

  if (classBox) {
    classBox.innerHTML = "";
    if (typeof CLASS_DATA !== "undefined" && c.class && CLASS_DATA[c.class]) {
      const cls = CLASS_DATA[c.class];
      for (const [lvl, text] of Object.entries(cls.features || {})) {
        if (parseInt(lvl) <= charLvl) {
          const div = document.createElement("div");
          div.className = "mb-1";
          div.innerHTML = `<strong style="color:var(--accent);">Level ${lvl}:</strong> <span>${text}</span>`;
          classBox.appendChild(div);
        }
      }
    } else {
      classBox.innerHTML = '<span style="color:var(--text-dim);">Select a Class in Core tab to load features.</span>';
    }
  }
}

// Dropdown Pre-Populators
function populateDropdowns() {
  const ladderSel = document.getElementById("char-ladder");
  const classSel = document.getElementById("char-class");

  if (ladderSel && typeof LADDER_DATA !== "undefined") {
    ladderSel.innerHTML = '<option value="">-- Select Ladder --</option>';
    Object.keys(LADDER_DATA).forEach(l => {
      const opt = document.createElement("option");
      opt.value = l;
      opt.textContent = l;
      ladderSel.appendChild(opt);
    });
  }

  if (classSel && typeof CLASS_DATA !== "undefined") {
    classSel.innerHTML = '<option value="">-- Select Class --</option>';
    Object.keys(CLASS_DATA).forEach(cls => {
      const opt = document.createElement("option");
      opt.value = cls;
      opt.textContent = cls;
      classSel.appendChild(opt);
    });
  }
}

// Recalculate Stats, Saves, & Skills UI
function recalc() {
  const c = getActiveChar();
  if (!c) return;

  const level = parseInt(document.getElementById("char-level")?.value) || 1;
  const prof = getProfBonus(level);
  const profElem = document.getElementById("prof-bonus");
  if (profElem) profElem.value = `+${prof}`;

  const stats = ["str", "dex", "con", "int", "wis", "cha", "vig"];
  const mods = {};

  stats.forEach(st => {
    const scoreVal = parseInt(document.getElementById(`${st}-score`)?.value) || 10;
    const mod = calcMod(scoreVal);
    mods[st] = mod;

    const modElem = document.getElementById(`${st}-mod`);
    if (modElem) modElem.textContent = mod >= 0 ? `+${mod}` : `${mod}`;

    const saveProf = document.getElementById(`${st}-save-prof`)?.checked;
    const saveVal = mod + (saveProf ? prof : 0);
    const saveElem = document.getElementById(`${st}-save-val`);
    if (saveElem) saveElem.textContent = saveVal >= 0 ? `+${saveVal}` : `${saveVal}`;
  });

  // Calculate Skills
  UM5_SKILLS.forEach(sk => {
    const statMod = mods[sk.stat] || 0;
    const isProf = document.getElementById(`sk-prof-${sk.name}`)?.checked;
    const isExp = document.getElementById(`sk-exp-${sk.name}`)?.checked;

    let total = statMod;
    if (isExp) total += (prof * 2);
    else if (isProf) total += prof;

    const skElem = document.getElementById(`sk-val-${sk.name}`);
    if (skElem) skElem.textContent = total >= 0 ? `+${total}` : `${total}`;
  });

  renderAbilities();
}

// Load Active Character to HTML Form
function loadToForm() {
  const c = getActiveChar();
  if (!c) return;

  document.getElementById("char-name").value = c.name || "";
  document.getElementById("char-species").value = c.species || "";
  document.getElementById("char-background").value = c.background || "";
  document.getElementById("char-ladder").value = c.ladder || "";
  document.getElementById("char-class").value = c.class || "";
  document.getElementById("char-archetype").value = c.archetype || "";
  document.getElementById("char-level").value = c.level || 1;

  const stats = ["str", "dex", "con", "int", "wis", "cha", "vig"];
  stats.forEach(st => {
    document.getElementById(`${st}-score`).value = c[st] !== undefined ? c[st] : 10;
    document.getElementById(`${st}-save-prof`).checked = !!c[`${st}Save`];
  });

  document.getElementById("init-bonus").value = c.initiativeBonus !== undefined ? c.initiativeBonus : 0;
  document.getElementById("speed").value = c.speed !== undefined ? c.speed : 30;
  document.getElementById("hp-max").value = c.hpMax !== undefined ? c.hpMax : 10;
  document.getElementById("hp-cur").value = c.hpCurrent !== undefined ? c.hpCurrent : 10;
  document.getElementById("hp-temp").value = c.hpTemp !== undefined ? c.hpTemp : 0;
  document.getElementById("hd-max").value = c.hitDiceMax || "1d8";
  document.getElementById("hd-cur").value = c.hitDiceCurrent !== undefined ? c.hitDiceCurrent : 1;
  document.getElementById("ac").value = c.ac !== undefined ? c.ac : 10;

  document.getElementById("ds-s1").checked = !!c.dsS1;
  document.getElementById("ds-s2").checked = !!c.dsS2;
  document.getElementById("ds-s3").checked = !!c.dsS3;
  document.getElementById("ds-f1").checked = !!c.dsF1;
  document.getElementById("ds-f2").checked = !!c.dsF2;
  document.getElementById("ds-f3").checked = !!c.dsF3;

  const armorTypeElem = document.getElementById("armor-type");
  if (armorTypeElem) armorTypeElem.value = c.armorType || "";
  
  filterArmorByType();

  const armorPresetElem = document.getElementById("armor-preset");
  if (armorPresetElem) armorPresetElem.value = c.armorPreset || "";

  document.getElementById("armor-name").value = c.armorName || "";
  document.getElementById("armor-props").value = c.armorProps || "";

  document.getElementById("credits").value = c.credits || "";
  document.getElementById("inventory").value = c.inventory || "";

  if (c.skills) {
    UM5_SKILLS.forEach(sk => {
      const skData = c.skills[sk.name] || { prof: false, exp: false };
      const profChk = document.getElementById(`sk-prof-${sk.name}`);
      const expChk = document.getElementById(`sk-exp-${sk.name}`);
      if (profChk) profChk.checked = !!skData.prof;
      if (expChk) expChk.checked = !!skData.exp;
    });
  }

  document.getElementById("ladder-notes").value = c.ladderNotes || "";
  document.getElementById("class-notes").value = c.classNotes || "";

  document.getElementById("dark-mana-max").value = c.darkManaMax !== undefined ? c.darkManaMax : 0;
  document.getElementById("dark-mana-cur").value = c.darkManaCur !== undefined ? c.darkManaCur : 0;
  document.getElementById("dark-spells").value = c.darkSpells || "";

  renderWeapons();
  recalc();
}

// Save Current Form Inputs into Active Character
function saveCurrent() {
  const c = getActiveChar();
  if (!c) return;

  c.name = document.getElementById("char-name")?.value || "Unnamed";
  c.species = document.getElementById("char-species")?.value || "";
  c.background = document.getElementById("char-background")?.value || "";
  c.ladder = document.getElementById("char-ladder")?.value || "";
  c.class = document.getElementById("char-class")?.value || "";
  c.archetype = document.getElementById("char-archetype")?.value || "";
  c.level = parseInt(document.getElementById("char-level")?.value) || 1;

  const stats = ["str", "dex", "con", "int", "wis", "cha", "vig"];
  stats.forEach(st => {
    c[st] = parseInt(document.getElementById(`${st}-score`)?.value) || 10;
    c[`${st}Save`] = document.getElementById(`${st}-save-prof`)?.checked || false;
  });

  c.initiativeBonus = parseInt(document.getElementById("init-bonus")?.value) || 0;
  c.speed = parseInt(document.getElementById("speed")?.value) || 30;
  c.hpMax = parseInt(document.getElementById("hp-max")?.value) || 10;
  c.hpCurrent = parseInt(document.getElementById("hp-cur")?.value) || 0;
  c.hpTemp = parseInt(document.getElementById("hp-temp")?.value) || 0;
  c.hitDiceMax = document.getElementById("hd-max")?.value || "1d8";
  c.hitDiceCurrent = parseInt(document.getElementById("hd-cur")?.value) || 0;
  c.ac = parseInt(document.getElementById("ac")?.value) || 10;

  c.dsS1 = document.getElementById("ds-s1")?.checked || false;
  c.dsS2 = document.getElementById("ds-s2")?.checked || false;
  c.dsS3 = document.getElementById("ds-s3")?.checked || false;
  c.dsF1 = document.getElementById("ds-f1")?.checked || false;
  c.dsF2 = document.getElementById("ds-f2")?.checked || false;
  c.dsF3 = document.getElementById("ds-f3")?.checked || false;

  c.armorType = document.getElementById("armor-type")?.value || "";
  c.armorPreset = document.getElementById("armor-preset")?.value || "";
  c.armorName = document.getElementById("armor-name")?.value || "";
  c.armorProps = document.getElementById("armor-props")?.value || "";

  c.credits = document.getElementById("credits")?.value || "";
  c.inventory = document.getElementById("inventory")?.value || "";

  if (!c.skills) c.skills = {};
  UM5_SKILLS.forEach(sk => {
    c.skills[sk.name] = {
      prof: document.getElementById(`sk-prof-${sk.name}`)?.checked || false,
      exp: document.getElementById(`sk-exp-${sk.name}`)?.checked || false
    };
  });

  c.ladderNotes = document.getElementById("ladder-notes")?.value || "";
  c.classNotes = document.getElementById("class-notes")?.value || "";

  c.darkManaMax = parseInt(document.getElementById("dark-mana-max")?.value) || 0;
  c.darkManaCur = parseInt(document.getElementById("dark-mana-cur")?.value) || 0;
  c.darkSpells = document.getElementById("dark-spells")?.value || "";

  saveData();
  populateOperativesList();
}

// Global Event Listeners Setup
function initAutoSave() {
  document.body.addEventListener("input", (e) => {
    if (!e.target.classList.contains("w-preset") && !e.target.classList.contains("w-name") &&
        !e.target.classList.contains("w-dmg") && !e.target.classList.contains("w-range") &&
        !e.target.classList.contains("w-props") && !e.target.classList.contains("w-max") &&
        !e.target.classList.contains("w-cur")) {
      saveCurrent();
      recalc();
    }
  });

  document.body.addEventListener("change", (e) => {
    if (e.target.id === "armor-type") {
      filterArmorByType();
      saveCurrent();
    } else if (e.target.id === "armor-preset") {
      applyArmor();
    } else {
      saveCurrent();
      recalc();
    }
  });

  const btnAddWep = document.getElementById("btn-add-weapon");
  if (btnAddWep) {
    btnAddWep.addEventListener("click", addWeapon);
  }
}

// Initialization Entry Point
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  initTabs();
  populateDropdowns();
  renderSkillsTable();
  populateOperativesList();
  initOperativeEvents();
  loadToForm();
  initAutoSave();
});
