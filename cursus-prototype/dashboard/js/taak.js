// ============================================================
//  taak.js  —  logica voor de individuele taakpagina
// ============================================================

import { saveLeerlingen } from "./firebase.js";

// ── Sessiebewaking ────────────────────────────────────────────
const mail = sessionStorage.getItem("wiskunde_mail");
if (!mail) { window.location.href = "index.html"; }

// ── Data ─────────────────────────────────────────────────────
let dataLeerlingen = JSON.parse(sessionStorage.getItem("wiskunde_leerlingen") || '{"leerlingen":[]}');
let dataInhoud     = JSON.parse(sessionStorage.getItem("wiskunde_inhoud")     || '{}');

const taakCode = sessionStorage.getItem("actieve_taak_code");
const taakType = sessionStorage.getItem("actieve_taak_type") || "taak";

if (!taakCode) { window.location.href = "dashboard.html"; }

// ── Huidig bekeken leerling ───────────────────────────────────
const leerlingMail = sessionStorage.getItem("wiskunde_mail");
let leerling = dataLeerlingen.leerlingen.find(
  l => l.mail.toLowerCase() === leerlingMail.toLowerCase()
) || {};

// ── DOM-elementen ─────────────────────────────────────────────
const elTopbalk     = document.getElementById("taak-topbalk");
const elNaam        = document.getElementById("taak-leerling-naam");
const elCode        = document.getElementById("taak-code");
const elTitel       = document.getElementById("taak-titel");
const elInhoud      = document.getElementById("taak-inhoud");
const elOpslaan     = document.getElementById("knop-opslaan");
const elTerug       = document.getElementById("knop-terug");
const elDialoog     = document.getElementById("dialoog-opslaan");
const elNietOpslaan = document.getElementById("dialoog-niet-opslaan");
const elOpslaanDlg  = document.getElementById("dialoog-opslaan-knop");

// ── Wijzigingsbewaking ────────────────────────────────────────
let heeftWijzigingen = false;
export function markeerGewijzigd() {
  heeftWijzigingen = true;
  elOpslaan.classList.add("gewijzigd");
  elOpslaan.classList.remove("opgeslagen");
  elOpslaan.textContent = "Opslaan *";
}

// ── Item ophalen ──────────────────────────────────────────────
let item = null;
if (taakType === "taak") {
  item = (dataInhoud.taken || []).find(t => t.code === taakCode);
} else if (taakType === "correctiesleutel") {
  item = (dataInhoud.verbetersleutels || []).find(v => v.code === taakCode);
} else {
  item = (dataInhoud.extraMateriaal || []).find(e => e.code === taakCode);
}

if (!item) {
  elInhoud.innerHTML = '<p style="color:#c62828;">Item niet gevonden.</p>';
}

// ── Topbalk opbouwen ──────────────────────────────────────────
const vooruitgang = _getVooruitgang();
elTopbalk.className = `taak-topbalk ${vooruitgang === "nog-starten" ? "" : vooruitgang}`;
elNaam.textContent  = leerling.volledigeNaam || "";
elCode.textContent  = taakCode;
elTitel.textContent = item ? item.titel : "";

// ── Taakinhoud dynamisch laden ────────────────────────────────
if (item) {
  _laadTaakModule(taakCode, taakType);
}

// ── Opslaan ───────────────────────────────────────────────────
elOpslaan.addEventListener("click", () => _slaOp());

async function _slaOp() {
  // Taakmodule kan een functie 'getAntwoorden()' exporteren
  // die we hier aanroepen als die beschikbaar is
  if (window.__taakGetAntwoorden) {
    const antwoorden = window.__taakGetAntwoorden();
    _slaVooruitgangOp(antwoorden);
  } else {
    _slaVooruitgangOp({});
  }

  // Schrijf naar sessionStorage én Firebase
  sessionStorage.setItem("wiskunde_leerlingen", JSON.stringify(dataLeerlingen));
  await saveLeerlingen(dataLeerlingen);

  heeftWijzigingen = false;
  elOpslaan.classList.remove("gewijzigd");
  elOpslaan.classList.add("opgeslagen");
  elOpslaan.textContent = "Opgeslagen ✓";

  // Topbalk-kleur bijwerken
  const nieuweVooruitgang = _getVooruitgang();
  elTopbalk.className = `taak-topbalk ${nieuweVooruitgang === "nog-starten" ? "" : nieuweVooruitgang}`;

  setTimeout(() => {
    elOpslaan.classList.remove("opgeslagen");
    elOpslaan.textContent = "Opslaan";
  }, 3000);
}

// ── Terug-knop ────────────────────────────────────────────────
elTerug.addEventListener("click", () => {
  if (heeftWijzigingen) {
    elDialoog.classList.add("zichtbaar");
  } else {
    window.location.href = "dashboard.html";
  }
});

elNietOpslaan.addEventListener("click", () => {
  elDialoog.classList.remove("zichtbaar");
  window.location.href = "dashboard.html";
});

elOpslaanDlg.addEventListener("click", async () => {
  elDialoog.classList.remove("zichtbaar");
  await _slaOp();
  window.location.href = "dashboard.html";
});

// Waarschuw ook bij sluiten/vernieuwen van het tabblad
window.addEventListener("beforeunload", (e) => {
  if (heeftWijzigingen) {
    e.preventDefault();
    e.returnValue = "";
  }
});

// ── Hulpfuncties ─────────────────────────────────────────────
function _getVooruitgang() {
  const key = taakType === "taak"
    ? "taken"
    : taakType === "correctiesleutel"
    ? "verbetersleutel"
    : "extra";
  return ((leerling[key] || {})[taakCode] || {}).vooruitgang || "nog-starten";
}

function _slaVooruitgangOp(antwoorden) {
  const key = taakType === "taak"
    ? "taken"
    : taakType === "correctiesleutel"
    ? "verbetersleutel"
    : "extra";

  if (!leerling[key]) leerling[key] = {};
  if (!leerling[key][taakCode]) leerling[key][taakCode] = {};

  // Antwoorden samenvoegen
  Object.assign(leerling[key][taakCode], antwoorden);

  // Vooruitgang bepalen op basis van aanwezige antwoorden
  // (taakmodule kan window.__taakVooruitgang instellen)
  if (window.__taakVooruitgang) {
    leerling[key][taakCode].vooruitgang = window.__taakVooruitgang();
  } else if (!leerling[key][taakCode].vooruitgang ||
             leerling[key][taakCode].vooruitgang === "nog-starten") {
    leerling[key][taakCode].vooruitgang = "bezig";
  }

  // Leerling bijwerken in de dataset
  const idx = dataLeerlingen.leerlingen
    .findIndex(l => l.mail.toLowerCase() === leerlingMail.toLowerCase());
  if (idx >= 0) dataLeerlingen.leerlingen[idx] = leerling;
}

// ── Taakmodule dynamisch laden ────────────────────────────────
async function _laadTaakModule(code, type) {
  // Pad-conventie: taken/H10.js, correctiesleutels/V01.js, extra/E01.js
  const map = { taak: "taken", correctiesleutel: "correctiesleutels", extra: "extra" };
  const pad = `../${map[type]}/${code}.js`;

  try {
    const mod = await import(pad);
    if (mod.render) {
      mod.render(elInhoud, leerling, taakCode, { markeerGewijzigd });
    }
  } catch {
    elInhoud.innerHTML = `
      <div style="padding:1rem; color:#888; font-style:italic;">
        De inhoud van <strong>${code}</strong> is nog niet beschikbaar.<br>
        Voeg het bestand <code>${pad}</code> toe.
      </div>
    `;
  }
}
