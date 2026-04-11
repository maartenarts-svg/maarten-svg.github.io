// ============================================================
//  beheerder.js  —  beheerdersscherm (3 tabs)
// ============================================================

import { saveLeerlingen, saveInhoud } from "./firebase.js";

let _data   = null;   // { leerlingen: [...] }
let _inhoud = null;   // { hoofdstukken: [...] }
let _geInit = false;

// ── Init ──────────────────────────────────────────────────────
export function init(dataLeerlingen, dataInhoud) {
  _data   = dataLeerlingen;
  _inhoud = dataInhoud;
  if (!_inhoud.hoofdstukken) _inhoud.hoofdstukken = [];
  if (_geInit) return;
  _geInit = true;
  _bouwLeerlingen();
  _bouwHoofdstukken();
  _bouwEvolutie();
}

// ── Opslaan ───────────────────────────────────────────────────
async function _slaLeerlingenOp() {
  sessionStorage.setItem("wiskunde_leerlingen", JSON.stringify(_data));
  localStorage.setItem("wiskunde_leerlingen",   JSON.stringify(_data));
  await saveLeerlingen(_data);
}
async function _slaInhoudOp() {
  sessionStorage.setItem("wiskunde_inhoud", JSON.stringify(_inhoud));
  await saveInhoud(_inhoud);
}

// ── Hulpfuncties ──────────────────────────────────────────────
function _veld(label, id, waarde, placeholder = "") {
  return `
    <div class="veld-groep">
      <label class="veld-label">${label}</label>
      <input type="text" id="${id}" class="veld-invoer"
        value="${_esc(waarde)}" placeholder="${placeholder}">
    </div>`;
}

function _esc(str) {
  return String(str || "").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function _downloadCsv(inhoud, naam) {
  const blob = new Blob([inhoud], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = naam; a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
//  TAB 1: LEERLINGENBEHEER
// ============================================================
function _bouwLeerlingen() {
  const el = document.getElementById("beheer-leerlingen-inhoud");
  el.innerHTML = `
    <div style="display:flex; gap:0.7rem; flex-wrap:wrap; margin-bottom:1rem; align-items:center;">
      <input type="text" id="zoek-ll" class="veld-invoer"
        placeholder="Zoek op naam of mail…" style="max-width:280px;">
      <button class="knop-primair"   id="knop-nieuwe-ll">+ Leerling toevoegen</button>
      <button class="knop-secundair" id="knop-upload-ll">CSV uploaden</button>
      <button class="knop-secundair" id="knop-download-ll">Voorbeeld CSV</button>
      <input type="file" id="csv-ll" accept=".csv" style="display:none;">
    </div>
    <div id="ll-tabel"></div>
    <div id="ll-formulier" class="verborgen"></div>
  `;

  el.querySelector("#zoek-ll").addEventListener("input", _renderLeerlingenTabel);
  el.querySelector("#knop-nieuwe-ll").addEventListener("click", () => _toonLeerlingFormulier(null));
  el.querySelector("#knop-upload-ll").addEventListener("click", () =>
    el.querySelector("#csv-ll").click());
  el.querySelector("#csv-ll").addEventListener("change", _verwerkCsvLeerlingen);
  el.querySelector("#knop-download-ll").addEventListener("click", () =>
    _downloadCsv(
      "mail,volledigeNaam,voornaam,familienaam\n" +
      "jan.janssen@school.be,Jan Janssen,Jan,Janssen\n",
      "voorbeeld_leerlingen.csv"
    )
  );
  _renderLeerlingenTabel();
}

function _renderLeerlingenTabel() {
  const zoek = (document.getElementById("zoek-ll")?.value || "").toLowerCase();
  const wrap = document.getElementById("ll-tabel");
  if (!wrap) return;

  const items = (_data.leerlingen || []).filter(l =>
    !l.code && (!zoek ||
      l.volledigeNaam?.toLowerCase().includes(zoek) ||
      l.mail?.toLowerCase().includes(zoek))
  );

  if (items.length === 0) {
    wrap.innerHTML = '<p class="sectie-leeg">Geen leerlingen gevonden.</p>';
    return;
  }

  wrap.innerHTML = `
    <table class="beheer-tabel">
      <thead><tr>
        <th>Mail</th><th>Naam</th><th>Voornaam</th><th>Familienaam</th><th></th>
      </tr></thead>
      <tbody>
        ${items.map(l => `
          <tr>
            <td>${l.mail || ""}</td>
            <td>${l.volledigeNaam || ""}</td>
            <td>${l.voornaam || ""}</td>
            <td>${l.familienaam || ""}</td>
            <td><button class="knop-secundair"
              style="padding:0.2rem 0.6rem; font-size:0.8rem;"
              data-mail="${l.mail}">Bewerk</button></td>
          </tr>`).join("")}
      </tbody>
    </table>`;

  wrap.querySelectorAll("button[data-mail]").forEach(knop => {
    knop.addEventListener("click", () => {
      const idx = _data.leerlingen.findIndex(l => l.mail === knop.dataset.mail);
      _toonLeerlingFormulier(_data.leerlingen[idx], idx);
    });
  });
}

function _toonLeerlingFormulier(leerling, idx = null) {
  const wrap    = document.getElementById("ll-formulier");
  const isNieuw = leerling === null;
  const l       = leerling || {};

  wrap.classList.remove("verborgen");
  wrap.innerHTML = `
    <div class="formulier-kaart">
      <h3 style="color:var(--groen-donker); margin-bottom:0.8rem;">
        ${isNieuw ? "Nieuwe leerling" : "Bewerk: " + (l.volledigeNaam || "")}
      </h3>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem;">
        ${_veld("Mailadres",   "ll-mail",        l.mail        || "")}
        ${_veld("Voornaam",    "ll-voornaam",    l.voornaam    || "")}
        ${_veld("Familienaam", "ll-familienaam", l.familienaam || "")}
      </div>
      <div style="display:flex; gap:0.7rem; margin-top:1rem;">
        <button class="knop-primair"   id="ll-opslaan">Opslaan</button>
        <button class="knop-secundair" id="ll-annuleer">Annuleer</button>
        ${!isNieuw ? `<button class="knop-secundair" id="ll-verwijder"
          style="margin-left:auto;color:#c62828;border-color:#c62828;">Verwijder</button>` : ""}
      </div>
    </div>`;

  wrap.querySelector("#ll-annuleer").addEventListener("click", () => {
    wrap.classList.add("verborgen"); wrap.innerHTML = "";
  });

  wrap.querySelector("#ll-opslaan").addEventListener("click", async () => {
    const voornaam    = wrap.querySelector("#ll-voornaam").value.trim();
    const familienaam = wrap.querySelector("#ll-familienaam").value.trim();
    const nieuw = {
      mail:         wrap.querySelector("#ll-mail").value.trim().toLowerCase(),
      voornaam,
      familienaam,
      volledigeNaam: `${voornaam} ${familienaam}`.trim(),
      verbetersleutel: l.verbetersleutel || {},
    };
    if (!nieuw.mail) { alert("Mailadres is verplicht."); return; }

    if (isNieuw) _data.leerlingen.push(nieuw);
    else         _data.leerlingen[idx] = { ..._data.leerlingen[idx], ...nieuw };

    await _slaLeerlingenOp();
    wrap.classList.add("verborgen");
    _renderLeerlingenTabel();
  });

  if (!isNieuw) {
    wrap.querySelector("#ll-verwijder").addEventListener("click", async () => {
      if (!confirm(`Verwijder ${l.volledigeNaam}?`)) return;
      _data.leerlingen.splice(idx, 1);
      await _slaLeerlingenOp();
      wrap.classList.add("verborgen");
      _renderLeerlingenTabel();
    });
  }
}

async function _verwerkCsvLeerlingen(e) {
  const bestand = e.target.files[0];
  if (!bestand) return;
  const lezer = new FileReader();
  lezer.onload = async (ev) => {
    const regels  = ev.target.result.split("\n").filter(r => r.trim());
    const headers = regels[0].split(",").map(h => h.trim());
    let toegevoegd = 0;
    for (let i = 1; i < regels.length; i++) {
      const w   = regels[i].split(",").map(v => v.trim());
      const rij = {};
      headers.forEach((h, j) => rij[h] = w[j] || "");
      if (!rij.mail) continue;
      if (!rij.volledigeNaam && (rij.voornaam || rij.familienaam))
        rij.volledigeNaam = `${rij.voornaam || ""} ${rij.familienaam || ""}`.trim();
      const bi = _data.leerlingen.findIndex(l => l.mail === rij.mail);
      if (bi >= 0) _data.leerlingen[bi] = { ..._data.leerlingen[bi], ...rij };
      else { _data.leerlingen.push({ ...rij, verbetersleutel: {} }); toegevoegd++; }
    }
    await _slaLeerlingenOp();
    _renderLeerlingenTabel();
    alert(`CSV verwerkt. ${toegevoegd} nieuwe leerlingen toegevoegd.`);
  };
  lezer.readAsText(bestand);
  e.target.value = "";
}

// ============================================================
//  TAB 2: HOOFDSTUKKENBEHEER
// ============================================================
function _bouwHoofdstukken() {
  const el = document.getElementById("beheer-hoofdstukken-inhoud");
  el.innerHTML = `
    <div style="margin-bottom:1rem;">
      <button class="knop-primair" id="knop-nieuw-hst">+ Hoofdstuk toevoegen</button>
    </div>
    <div id="hst-tabel"></div>
    <div id="hst-formulier" class="verborgen"></div>
  `;

  el.querySelector("#knop-nieuw-hst").addEventListener("click", () => _toonHoofdstukFormulier(null));
  _renderHoofdstukkenTabel();
}

function _renderHoofdstukkenTabel() {
  const wrap = document.getElementById("hst-tabel");
  if (!wrap) return;
  const items = _inhoud.hoofdstukken || [];

  if (items.length === 0) {
    wrap.innerHTML = '<p class="sectie-leeg">Nog geen hoofdstukken.</p>';
    return;
  }

  wrap.innerHTML = `
    <table class="beheer-tabel">
      <thead><tr>
        <th>Code</th><th>Titel</th><th>Start</th><th>Einde</th><th></th>
      </tr></thead>
      <tbody>
        ${items.map((h, i) => `
          <tr>
            <td><strong>${h.code}</strong></td>
            <td>${h.titel || ""}</td>
            <td>${h.startDatum || ""}</td>
            <td>${h.eindDatum  || ""}</td>
            <td><button class="knop-secundair"
              style="padding:0.2rem 0.6rem; font-size:0.8rem;"
              data-idx="${i}">Bewerk</button></td>
          </tr>`).join("")}
      </tbody>
    </table>`;

  wrap.querySelectorAll("button[data-idx]").forEach(knop => {
    knop.addEventListener("click", () => {
      const i = parseInt(knop.dataset.idx);
      _toonHoofdstukFormulier(_inhoud.hoofdstukken[i], i);
    });
  });
}

function _toonHoofdstukFormulier(hst, idx = null) {
  const wrap    = document.getElementById("hst-formulier");
  const isNieuw = hst === null;
  const h       = hst || {};

  // Zichtbaarheidsregels
  let zichtbaarheid = Array.isArray(h.zichtbaarheid) ? [...h.zichtbaarheid] : [];

  wrap.classList.remove("verborgen");
  wrap.innerHTML = `
    <div class="formulier-kaart" style="max-width:700px;">
      <h3 style="color:var(--groen-donker); margin-bottom:0.8rem;">
        ${isNieuw ? "Nieuw hoofdstuk" : "Bewerk: " + (h.code || "")}
      </h3>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem; margin-bottom:0.6rem;">
        ${_veld("Code (bv. H10)",        "hst-code",       h.code       || "")}
        ${_veld("Titel",                 "hst-titel",      h.titel      || "")}
        ${_veld("Startdatum (dd/mm/yyyy)","hst-start",     h.startDatum || "")}
        ${_veld("Einddatum (dd/mm/yyyy)", "hst-einde",     h.eindDatum  || "")}
      </div>

      <fieldset style="border:1.5px solid var(--groen-scheiding); border-radius:var(--radius); padding:0.8rem; margin-bottom:0.8rem;">
        <legend style="font-weight:600; color:var(--groen-donker); padding:0 0.3rem;">Bestanden</legend>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
          ${_veld("Cursus (html)",     "hst-cursus",     h.bestanden?.cursus     || "")}
          ${_veld("Theorie (html)",    "hst-theorie",    h.bestanden?.theorie    || "")}
          ${_veld("Check-in (js)",     "hst-checkin",    h.bestanden?.checkin    || "")}
          ${_veld("Checkout (js)",     "hst-checkout",   h.bestanden?.checkout   || "")}
          ${_veld("Schema (js)",       "hst-schema",     h.bestanden?.schema     || "")}
          ${_veld("Datamatrix (js)",   "hst-datamatrix", h.bestanden?.datamatrix || "")}
          ${_veld("PDF Cursus",        "hst-pdf-cursus",  h.bestanden?.pdfCursus  || "")}
          ${_veld("PDF Theorie",       "hst-pdf-theorie", h.bestanden?.pdfTheorie || "")}
        </div>
      </fieldset>

      <fieldset style="border:1.5px solid var(--groen-scheiding); border-radius:var(--radius); padding:0.8rem; margin-bottom:0.8rem;">
        <legend style="font-weight:600; color:var(--groen-donker); padding:0 0.3rem;">
          Zichtbaarheid opdrachten
        </legend>
        <p style="font-size:0.82rem; color:var(--tekst-zacht); margin-bottom:0.5rem;">
          Vanaf welke datum zijn welke paragrafen zichtbaar voor de leerlingen?
        </p>
        <div id="zichtbaar-regels"></div>
        <button class="knop-secundair" id="zichtbaar-toevoeg"
          style="margin-top:0.4rem; padding:0.3rem 0.8rem; font-size:0.82rem;">
          + Periode toevoegen
        </button>
      </fieldset>

      <div style="display:flex; gap:0.7rem; margin-top:1rem;">
        <button class="knop-primair"   id="hst-opslaan">Opslaan</button>
        <button class="knop-secundair" id="hst-annuleer">Annuleer</button>
        ${!isNieuw ? `<button class="knop-secundair" id="hst-verwijder"
          style="margin-left:auto;color:#c62828;border-color:#c62828;">Verwijder</button>` : ""}
      </div>
    </div>`;

  // Zichtbaarheidsregels renderen
  const regelContainer = wrap.querySelector("#zichtbaar-regels");
  const _renderRegels = () => {
    regelContainer.innerHTML = "";
    zichtbaarheid.forEach((r, i) => {
      const rij = document.createElement("div");
      rij.className = "zichtbaar-rij";
      rij.innerHTML = `
        <span style="font-size:0.82rem; color:var(--tekst-zacht);">Vanaf</span>
        <input type="text" class="veld-invoer zr-vanaf" placeholder="dd/mm/yyyy"
          value="${_esc(r.vanaf || "")}" style="max-width:130px;">
        <span style="font-size:0.82rem; color:var(--tekst-zacht);">tot en met paragraaf</span>
        <input type="text" class="veld-invoer zr-tem" placeholder="bv. 10.2"
          value="${_esc(r.totEnMet || "")}" style="max-width:90px;">
        <button class="zichtbaar-rij-verwijder" data-i="${i}" title="Verwijder">×</button>`;

      rij.querySelector(".zr-vanaf").addEventListener("input", ev => {
        zichtbaarheid[i].vanaf = ev.target.value.trim();
      });
      rij.querySelector(".zr-tem").addEventListener("input", ev => {
        zichtbaarheid[i].totEnMet = ev.target.value.trim();
      });
      rij.querySelector(".zichtbaar-rij-verwijder").addEventListener("click", () => {
        zichtbaarheid.splice(i, 1);
        _renderRegels();
      });
      regelContainer.appendChild(rij);
    });
  };
  _renderRegels();

  wrap.querySelector("#zichtbaar-toevoeg").addEventListener("click", () => {
    zichtbaarheid.push({ vanaf: "", totEnMet: "" });
    _renderRegels();
  });

  wrap.querySelector("#hst-annuleer").addEventListener("click", () => {
    wrap.classList.add("verborgen"); wrap.innerHTML = "";
  });

  wrap.querySelector("#hst-opslaan").addEventListener("click", async () => {
    const nieuw = {
      code:       wrap.querySelector("#hst-code").value.trim(),
      titel:      wrap.querySelector("#hst-titel").value.trim(),
      startDatum: wrap.querySelector("#hst-start").value.trim(),
      eindDatum:  wrap.querySelector("#hst-einde").value.trim(),
      bestanden: {
        cursus:     wrap.querySelector("#hst-cursus").value.trim(),
        theorie:    wrap.querySelector("#hst-theorie").value.trim(),
        checkin:    wrap.querySelector("#hst-checkin").value.trim(),
        checkout:   wrap.querySelector("#hst-checkout").value.trim(),
        schema:     wrap.querySelector("#hst-schema").value.trim(),
        datamatrix: wrap.querySelector("#hst-datamatrix").value.trim(),
        pdfCursus:  wrap.querySelector("#hst-pdf-cursus").value.trim(),
        pdfTheorie: wrap.querySelector("#hst-pdf-theorie").value.trim(),
      },
      zichtbaarheid: zichtbaarheid.filter(r => r.vanaf || r.totEnMet),
    };
    if (!nieuw.code) { alert("Code is verplicht."); return; }

    if (isNieuw) _inhoud.hoofdstukken.push(nieuw);
    else         _inhoud.hoofdstukken[idx] = nieuw;

    await _slaInhoudOp();
    wrap.classList.add("verborgen");
    _renderHoofdstukkenTabel();
  });

  if (!isNieuw) {
    wrap.querySelector("#hst-verwijder").addEventListener("click", async () => {
      if (!confirm(`Verwijder hoofdstuk ${h.code}?`)) return;
      _inhoud.hoofdstukken.splice(idx, 1);
      await _slaInhoudOp();
      wrap.classList.add("verborgen");
      _renderHoofdstukkenTabel();
    });
  }
}

// ============================================================
//  TAB 3: EVOLUTIE & SCORES
// ============================================================

// Constanten — onderdelen die meetellen voor score
const NIVEAU_ONDERDELEN_SCORE = new Set(['oefenen', 'hoever', 'hoeveR']);
const ONDERDEEL_SLEUTEL_SCORE = {
  'Oefenen!':        'oefenen',
  'Zo doe je dat!':  'zoeje',
  'Hoe ver sta ik?': 'hoever',
  'Hoe ver sta ik?R':'hoeveR',
  'Ontdekkingstocht':'ontdek',
};

function _bouwEvolutie() {
  const el = document.getElementById("beheer-evolutie-inhoud");
  el.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1.5rem; padding:0.5rem 0;">

      <!-- ── Deel 1: Leerling volgen ── -->
      <div class="formulier-kaart" style="max-width:100%;">
        <h3 style="color:var(--groen-donker); margin-bottom:0.8rem;">Leerling volgen</h3>
        <div style="display:flex; gap:0.7rem; align-items:center; flex-wrap:wrap; margin-bottom:0.8rem;">
          <input type="text" id="evo-zoek" class="veld-invoer"
            placeholder="Zoek op naam…" style="max-width:220px;">
          <select id="evo-leerling" class="veld-invoer" style="max-width:300px;">
            <option value="">— Kies een leerling —</option>
          </select>
        </div>
        <div id="evo-overzicht"></div>
      </div>

      <!-- ── Deel 2: Score CSV ── -->
      <div class="formulier-kaart" style="max-width:100%;">
        <h3 style="color:var(--groen-donker); margin-bottom:0.8rem;">Score downloaden</h3>
        <div style="display:flex; gap:0.7rem; align-items:center; flex-wrap:wrap; margin-bottom:0.5rem;">
          <div class="veld-groep">
            <label class="veld-label">Hoofdstuk</label>
            <select id="score-hst" class="veld-invoer" style="max-width:220px;">
              <option value="">— Kies —</option>
            </select>
          </div>
          <div class="veld-groep">
            <label class="veld-label">Paragraaf</label>
            <select id="score-par" class="veld-invoer" style="max-width:160px;">
              <option value="">— Kies eerst hoofdstuk —</option>
            </select>
          </div>
          <div class="veld-groep" style="justify-content:flex-end;">
            <label class="veld-label">&nbsp;</label>
            <button class="knop-primair" id="score-download">CSV downloaden</button>
          </div>
        </div>
      </div>

      <!-- ── Deel 3: Opmerkingen overzicht ── -->
      <div class="formulier-kaart" style="max-width:100%;">
        <h3 style="color:var(--groen-donker); margin-bottom:0.8rem;">Opmerkingen overzicht</h3>
        <div style="display:flex; gap:0.7rem; align-items:center; flex-wrap:wrap; margin-bottom:0.8rem;">
          <div class="veld-groep">
            <label class="veld-label">Hoofdstuk</label>
            <select id="opm-hst" class="veld-invoer" style="max-width:220px;">
              <option value="">— Kies —</option>
            </select>
          </div>
          <div class="veld-groep">
            <label class="veld-label">Type</label>
            <select id="opm-type" class="veld-invoer" style="max-width:200px;">
              <option value="2">Keuze 2 — fouten (oranje)</option>
              <option value="3">Keuze 3 — vragen (lila)</option>
            </select>
          </div>
          <div class="veld-groep" style="justify-content:flex-end;">
            <label class="veld-label">&nbsp;</label>
            <button class="knop-primair" id="opm-toon">Toon overzicht</button>
          </div>
        </div>
        <div id="opm-resultaat"></div>
      </div>

    </div>
  `;

  // ── Dropdowns vullen ────────────────────────────────────────
  const leerlingen = (_data.leerlingen || [])
    .filter(l => !l.code)
    .sort((a, b) => (a.volledigeNaam || "").localeCompare(b.volledigeNaam || ""));

  const selectLL = el.querySelector("#evo-leerling");
  leerlingen.forEach(l => {
    const opt = document.createElement("option");
    opt.value       = l.mail;
    opt.textContent = l.volledigeNaam || l.mail;
    selectLL.appendChild(opt);
  });

  // Zoekfilter op dropdown
  el.querySelector("#evo-zoek").addEventListener("input", (e) => {
    const zoek = e.target.value.toLowerCase();
    [...selectLL.options].forEach(opt => {
      if (opt.value === "") return;
      opt.hidden = !opt.textContent.toLowerCase().includes(zoek);
    });
  });

  // Leerling kiezen → overzicht tonen
  selectLL.addEventListener("change", () => {
    const mail = selectLL.value;
    if (!mail) { el.querySelector("#evo-overzicht").innerHTML = ""; return; }
    const leerling = leerlingen.find(l => l.mail === mail);
    _toonLeerlingOverzicht(leerling, el.querySelector("#evo-overzicht"));
  });

  // Hoofdstuk dropdowns voor score en opmerkingen
  const hstOpties = (_inhoud.hoofdstukken || [])
    .map(h => `<option value="${h.code}">${h.titel}</option>`).join("");

  el.querySelector("#score-hst").innerHTML += hstOpties;
  el.querySelector("#opm-hst").innerHTML   += hstOpties;

  // Score: bij kiezen hoofdstuk → paragrafen laden
  el.querySelector("#score-hst").addEventListener("change", () => {
    _vulParagraafDropdown(
      el.querySelector("#score-hst").value,
      el.querySelector("#score-par")
    );
  });

  // Score downloaden
  el.querySelector("#score-download").addEventListener("click", () => {
    const hstCode = el.querySelector("#score-hst").value;
    const par     = el.querySelector("#score-par").value;
    if (!hstCode || !par) { alert("Kies eerst een hoofdstuk en paragraaf."); return; }
    _downloadScoreCsv(hstCode, par);
  });

  // Opmerkingen tonen
  el.querySelector("#opm-toon").addEventListener("click", () => {
    const hstCode = el.querySelector("#opm-hst").value;
    const type    = parseInt(el.querySelector("#opm-type").value);
    if (!hstCode) { alert("Kies eerst een hoofdstuk."); return; }
    _toonOpmerkingen(hstCode, type, el.querySelector("#opm-resultaat"));
  });
}

// ── Paragrafen ophalen uit H10_matrix (al geladen als global) ─
function _getParagrafen(hstCode) {
  // H10_matrix is een globale variabele geladen via de datamatrix
  // We laden die dynamisch als die nog niet beschikbaar is
  const matrixNaam = `H10_matrix`; // uitbreidbaar later per hoofdstuk
  if (typeof H10_matrix !== 'undefined') {
    return [...new Set(H10_matrix.map(o => o.paragraaf))].sort();
  }
  return [];
}

function _vulParagraafDropdown(hstCode, selectEl) {
  selectEl.innerHTML = '<option value="">— Kies een paragraaf —</option>';
  if (!hstCode) return;

  // Matrix dynamisch laden indien nodig
  const hst = (_inhoud.hoofdstukken || []).find(h => h.code === hstCode);
  if (!hst?.bestanden?.datamatrix) {
    selectEl.innerHTML = '<option value="">Geen datamatrix ingesteld</option>';
    return;
  }

  if (typeof H10_matrix !== 'undefined') {
    _vulParagraafOpties(selectEl);
  } else {
    const s = document.createElement('script');
    s.src = `../hoofdstukken/${hstCode}/${hst.bestanden.datamatrix}`;
    s.onload = () => _vulParagraafOpties(selectEl);
    document.head.appendChild(s);
  }
}

function _vulParagraafOpties(selectEl) {
  if (typeof H10_matrix === 'undefined') return;
  const paragrafen = [...new Set(H10_matrix.map(o => o.paragraaf))].sort();
  paragrafen.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p; opt.textContent = p;
    selectEl.appendChild(opt);
  });
}

// ── Deel 1: Leerling overzicht via CR1.js ────────────────────
function _toonLeerlingOverzicht(leerling, container) {
  if (!leerling) { container.innerHTML = ""; return; }

  const hst = (_inhoud.hoofdstukken || [])[0];
  if (!hst?.bestanden?.datamatrix) {
    container.innerHTML = '<p class="sectie-leeg">Geen datamatrix beschikbaar.</p>';
    return;
  }

  container.innerHTML = '<p style="color:#888;font-style:italic;padding:0.5rem;">Wordt geladen…</p>';

  // Zet zichtbaarheid klaar (zoals opdrachten.html dat doet)
  sessionStorage.setItem("actieve_taak_code",     hst.code);
  sessionStorage.setItem("actieve_zichtbaarheid", JSON.stringify(hst.zichtbaarheid || []));

  import("./CR1_stub.js").catch(() => null); // warm up — geen effect

  // Laad CR1.js dynamisch en roep render() aan
  import("../taken/CR1.js").then(mod => {
    if (mod.render) {
      mod.render(container, leerling, hst.code, { markeerGewijzigd: () => {} });
    }
  }).catch(e => {
    container.innerHTML = '<p style="color:#c62828;">Kon CR1.js niet laden: ' + e.message + '</p>';
  });
}

// ── Deel 2: Score CSV ─────────────────────────────────────────
function _downloadScoreCsv(hstCode, par) {
  if (typeof H10_matrix === 'undefined') {
    alert("Datamatrix nog niet geladen. Kies eerst een hoofdstuk."); return;
  }

  const alleOef    = H10_matrix.filter(o => o.paragraaf === par);
  const hvsiOef    = alleOef.filter(o => {
    const s = ONDERDEEL_SLEUTEL_SCORE[o.onderdeel];
    return s === 'hoever' || s === 'hoeveR';
  });
  const oefeningOef = alleOef.filter(o =>
    ONDERDEEL_SLEUTEL_SCORE[o.onderdeel] === 'oefenen'
  );
  const heeftHVSI  = hvsiOef.length > 0;

  // Niveau-iconen
  const ICOON = { cirkel: '⬤', vierkant: '⏹', zeshoek: '⬢' };

  // Heeft de paragraaf oefeningen van enkel niveau cirkel in HVSI?
  const cirkelHVSI  = hvsiOef.filter(o => o.niveau && o.niveau.includes('cirkel') && !o.niveau.replace('cirkel','').includes('vierkant') && !o.niveau.replace('cirkel','').includes('zeshoek'));
  // Eigenlijk: cirkel-HVSI = HVSI met niveau dat cirkel bevat
  // extra-HVSI = HVSI zonder cirkel
  const cirkelHVSIv2 = hvsiOef.filter(o => (o.niveau||'geen').split('+').includes('cirkel'));
  const extraHVSIv2  = hvsiOef.filter(o => !(o.niveau||'geen').split('+').includes('cirkel'));

  const leerlingen = (_data.leerlingen || []).filter(l => !l.code);
  const headers = ["mail","volledigeNaam","voornaam","familienaam","niveau","allesKeuze1","score","opmerking"];
  const regels  = [headers.join(";")];

  leerlingen.forEach(l => {
    const crData  = l?.verbetersleutel?.["CR1"] || { niveaus: {}, oefeningen: {} };
    const oefData = crData.oefeningen || {};
    const gekozenNiveau = (crData.niveaus || {})[par] || null;
    const definitiefNiveau = (gekozenNiveau && gekozenNiveau !== 'na_cirkel') ? gekozenNiveau : null;

    // ── Niveau-kolom ──
    let niveauKolom;
    if (!heeftHVSI) {
      niveauKolom = 'niet van toepassing';
    } else if (!definitiefNiveau) {
      niveauKolom = 'nog niet gekozen';
    } else {
      niveauKolom = (ICOON[definitiefNiveau] || '') + ' ' + definitiefNiveau;
    }

    // ── Oefeningen die meetellen voor deze leerling ──
    let telOef;
    if (!heeftHVSI) {
      telOef = oefeningOef;
    } else if (!definitiefNiveau) {
      telOef = []; // nog geen niveau, geen score mogelijk
    } else {
      telOef = [...hvsiOef, ...oefeningOef].filter(o =>
        (o.niveau || 'geen').split('+').includes(definitiefNiveau)
      );
    }

    // ── Score berekenen ──
    let aantalVerbeterd = 0;
    let alleEersteKeuze1 = true;

    telOef.forEach(o => {
      const pogingen = oefData[o.bestandsnaam]?.pogingen || [];
      if (pogingen.length > 0) {
        aantalVerbeterd++;
        if (pogingen[0].keuze !== 1) alleEersteKeuze1 = false;
      } else {
        alleEersteKeuze1 = false;
      }
    });

    let score;
    if (telOef.length === 0)                        score = 'NI';
    else if (aantalVerbeterd === 0)                 score = 'NI';
    else if (aantalVerbeterd === telOef.length)     score = 'A';
    else                                            score = 'C';

    // ── allesKeuze1 kolom ──
    const k1 = (score === 'A' && alleEersteKeuze1) ? 'alles keuze 1' : '';

    // ── Opmerkingstekst ──
    const opmerking = _berekenOpmerking(
      score, definitiefNiveau, heeftHVSI,
      cirkelHVSIv2, extraHVSIv2, oefeningOef,
      oefData, par
    );

    regels.push([
      l.mail, l.volledigeNaam, l.voornaam, l.familienaam,
      niveauKolom, k1, score, '"'+ opmerking.replace(/"/g,'\'')+'"' 
    ].join(";"));
  });

  _downloadCsv(regels.join("\n"), `scores_${hstCode}_${par.replace('.','_')}.csv`);
}

// ── Opmerkingstekst berekenen ─────────────────────────────────
function _berekenOpmerking(score, niveau, heeftHVSI, cirkelHVSI, extraHVSI, oefeningOef, oefData, par) {
  if (score === 'C') {
    return 'Je hebt niet voor alle opdrachten de verbetering bekeken. Dat wil zeggen dat je ofwel die opdrachten niet gemaakt hebt, ofwel niet verbeterd hebt. Door opdrachten niet te maken of verbeteringen niet te bekijken, weet je dus niet of je de leerstof echt beheerst.';
  }
  if (score === 'NI') {
    return 'Je hebt voor geen enkel opdrachten de verbetering bekeken. Dat wil zeggen dat je ofwel die opdrachten niet gemaakt hebt, ofwel niet verbeterd hebt. De opdrachten dienen om de leerstof voldoende in te oefenen. Wil je echt tot leren komen, dan moet je alle opdrachten maken en verbeteren.';
  }

  // Score A: controleer situatie 1
  if (heeftHVSI && niveau) {
    // Situatie 1a: alle cirkel-HVSI eerste poging keuze 1, toch cirkel gekozen
    if (niveau === 'cirkel' && cirkelHVSI.length > 0) {
      const alleCircelJuist = cirkelHVSI.every(o => {
        const p = oefData[o.bestandsnaam]?.pogingen || [];
        return p.length > 0 && p[0].keuze === 1;
      });
      if (alleCircelJuist) {
        return 'Je hebt bij de eerste reeks opdrachten van \'Hoe ver sta je?\' aangeduid dat je alles juist had. Toch koos je voor de oefeningen met een ⬤. Daardoor blijf je in de comfortzone en leer je niets bij. Daag jezelf uit en ga de leerkuil in.';
      }
    }

    // Situatie 1b: alle extra-HVSI eerste poging keuze 1, toch vierkant gekozen
    if (niveau === 'vierkant' && extraHVSI.length > 0) {
      const alleExtraJuist = extraHVSI.every(o => {
        const p = oefData[o.bestandsnaam]?.pogingen || [];
        return p.length > 0 && p[0].keuze === 1;
      });
      if (alleExtraJuist) {
        return 'Je hebt bij de tweede reeks opdrachten van \'Hoe ver sta je?\' aangeduid dat je alles juist had. Toch koos je voor de oefeningen met een ⏹. Daardoor blijf je in de comfortzone en leer je niets bij. Daag jezelf uit en ga de leerkuil in.';
      }
    }
  }

  // Situatie 2: eerste poging oefeningen van gekozen niveau allemaal keuze 1
  if (niveau) {
    const niveauOef = oefeningOef.filter(o =>
      (o.niveau || 'geen').split('+').includes(niveau)
    );
    if (niveauOef.length > 0) {
      const alleNiveauJuist = niveauOef.every(o => {
        const p = oefData[o.bestandsnaam]?.pogingen || [];
        return p.length > 0 && p[0].keuze === 1;
      });
      if (alleNiveauJuist) {
        // Controleer of er een hoger niveau is
        const heeftZeshoek = oefeningOef.some(o => (o.niveau||'geen').split('+').includes('zeshoek'));
        if (niveau === 'cirkel') {
          return 'Je hebt bij alle opdrachten met een ⬤ aangeduid dat je alles juist had. Misschien kun je de volgende keer de opdrachten met een ⏹ of een ⬢ kiezen.';
        }
        if (niveau === 'vierkant' && heeftZeshoek) {
          return 'Je hebt bij alle opdrachten met een ⏹ aangeduid dat je alles juist had. Misschien kun je de volgende keer de opdrachten met een ⬢ kiezen.';
        }
        if (niveau === 'zeshoek') {
          return 'Je hebt bij alle opdrachten met een ⬢ aangeduid dat je alles juist had. Dan gaan we ervan uit dat deze leerstof voor jou eenvoudig is. Als dit vaak gebeurt, spreek dan je coach aan.';
        }
      }
    }
  }

  return '';
}

// ── Deel 3: Opmerkingen overzicht ─────────────────────────────
function _toonOpmerkingen(hstCode, keuzeFilter, container) {
  if (typeof H10_matrix === 'undefined') {
    container.innerHTML = '<p class="sectie-leeg">Datamatrix nog niet geladen.</p>';
    return;
  }

  const leerlingen = (_data.leerlingen || []).filter(l => !l.code);
  const isLila     = keuzeFilter === 3;

  // Verzamel per oefening alle opmerkingen van alle leerlingen
  const perOefening = {}; // { bestandsnaam: [ { nr, opmerking, leerling, opgelost } ] }

  leerlingen.forEach(l => {
    const crData  = l?.verbetersleutel?.["CR1"] || { oefeningen: {} };
    const oefData = crData.oefeningen || {};

    Object.entries(oefData).forEach(([bestandsnaam, data]) => {
      const pogingen = (data.pogingen || []).filter(p =>
        p.keuze === keuzeFilter && p.opmerking
      );
      if (pogingen.length === 0) return;

      if (!perOefening[bestandsnaam]) perOefening[bestandsnaam] = [];
      pogingen.forEach(p => {
        perOefening[bestandsnaam].push({
          opmerking:    p.opmerking,
          opgelost:     p.opgelost || false,
          leerlingNaam: l.volledigeNaam || l.mail,
        });
      });
    });
  });

  if (Object.keys(perOefening).length === 0) {
    container.innerHTML = '<p class="sectie-leeg">Geen opmerkingen gevonden.</p>';
    return;
  }

  // Zoek het oefeningnummer op via de matrix
  const nrVan = (bestandsnaam) => {
    const o = H10_matrix.find(o => o.bestandsnaam === bestandsnaam);
    return o ? o.nr : bestandsnaam;
  };

  // Sorteer op oefeningnummer
  const gesorteerd = Object.entries(perOefening)
    .map(([bestandsnaam, rijen]) => ({ nr: nrVan(bestandsnaam), bestandsnaam, rijen }))
    .sort((a, b) => {
      const nA = typeof a.nr === 'number' ? a.nr : 9999;
      const nB = typeof b.nr === 'number' ? b.nr : 9999;
      return nA - nB;
    });

  const randKleur = isLila ? '#7b1fa2' : '#e65100';
  const achtergrond = isLila ? '#f3e5f5' : '#ffe0b2';

  const tbl = document.createElement('table');
  tbl.style.cssText = 'width:100%; border-collapse:collapse; font-size:0.85rem;';

  const thead = document.createElement('thead');
  const trH   = document.createElement('tr');
  trH.style.background = randKleur;

  const koppen = isLila
    ? ['Nr.', 'Opmerking / Vraag', 'Leerling', 'Opgelost']
    : ['Nr.', 'Opmerking', 'Leerling'];

  koppen.forEach((k, i) => {
    const th = document.createElement('th');
    th.textContent = k;
    th.style.cssText = `padding:6px 10px; color:white; text-align:left;
      font-size:0.85rem; font-weight:bold;
      ${i === 0 ? 'width:50px;' : ''}
      ${isLila && i === 3 ? 'width:70px; text-align:center;' : ''}`;
    trH.appendChild(th);
  });
  thead.appendChild(trH);
  tbl.appendChild(thead);

  const tbody = document.createElement('tbody');
  let rijTeller = 0;

  gesorteerd.forEach(({ nr, rijen }) => {
    rijen.forEach(r => {
      const tr  = document.createElement('tr');
      const bg  = rijTeller % 2 === 0 ? achtergrond : 'white';
      tr.style.background = bg;
      rijTeller++;

      const tdNr = document.createElement('td');
      tdNr.style.cssText = `padding:5px 10px; font-weight:bold;
        border-bottom:1px solid ${randKleur}30; vertical-align:top;`;
      tdNr.textContent = nr;
      tr.appendChild(tdNr);

      const tdOpm = document.createElement('td');
      tdOpm.style.cssText = `padding:5px 10px;
        border-bottom:1px solid ${randKleur}30;
        ${r.opgelost ? 'text-decoration:line-through; opacity:0.6;' : ''}`;
      tdOpm.textContent = r.opmerking;
      tr.appendChild(tdOpm);

      const tdNaam = document.createElement('td');
      tdNaam.style.cssText = `padding:5px 10px; color:var(--tekst-zacht);
        border-bottom:1px solid ${randKleur}30;
        ${r.opgelost ? 'text-decoration:line-through; opacity:0.6;' : ''}`;
      tdNaam.textContent = r.leerlingNaam;
      tr.appendChild(tdNaam);

      if (isLila) {
        const tdOpl = document.createElement('td');
        tdOpl.style.cssText = `padding:5px 10px; text-align:center;
          border-bottom:1px solid ${randKleur}30;`;
        const vinkje = document.createElement('span');
        vinkje.textContent = r.opgelost ? '✓' : '';
        vinkje.style.cssText = 'font-size:1rem; color:#7b1fa2; font-weight:bold;';
        tdOpl.appendChild(vinkje);
        tr.appendChild(tdOpl);
      }

      tbody.appendChild(tr);
    });
  });

  tbl.appendChild(tbody);
  container.innerHTML = '';
  container.appendChild(tbl);
}