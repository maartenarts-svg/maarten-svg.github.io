// ============================================================
//  dashboard.js  —  dashboard-logica (leerling + beheerder)
// ============================================================

import { getHuidigHoofdstuk, getTotEnMet } from "./hoofdstuk.js";

// ── Sessiebewaking ────────────────────────────────────────────
const mail = sessionStorage.getItem("wiskunde_mail");
const rol  = sessionStorage.getItem("wiskunde_rol");
if (!mail) { window.location.href = "index.html"; }

// ── Data ─────────────────────────────────────────────────────
const dataLeerlingen = JSON.parse(sessionStorage.getItem("wiskunde_leerlingen") || '{"leerlingen":[]}');
const dataInhoud     = JSON.parse(sessionStorage.getItem("wiskunde_inhoud")     || '{"hoofdstukken":[]}');
const hoofdstukken   = dataInhoud.hoofdstukken || [];
let _huidigHoofdstuk = null;

// Leerling/beheerder ophalen
const ikZelf = dataLeerlingen.leerlingen.find(l => l.mail.toLowerCase() === mail.toLowerCase()) || {};

// ── DOM ───────────────────────────────────────────────────────
const elNaam          = document.getElementById("topbalk-naam");
const elUitloggen     = document.getElementById("knop-uitloggen");
const elTerugBeheerder= document.getElementById("knop-terug-beheerder");
const elBeheerderBalk = document.getElementById("beheerder-balk");
const elAlsLeerling   = document.getElementById("knop-als-leerling");
const elAlsBeheerder  = document.getElementById("knop-als-beheerder");
const elSchermLeerling= document.getElementById("scherm-leerling");
const elSchermBeheerder=document.getElementById("scherm-beheerder");

// ── Init ─────────────────────────────────────────────────────
elNaam.textContent = ikZelf.voornaam || ikZelf.volledigeNaam || mail;

if (rol === "beheerder") {
  elBeheerderBalk.classList.remove("verborgen");
  _toonBeheerdersScherm();
} else {
  _toonLeerlingScherm();
}

// ── Knoppen ───────────────────────────────────────────────────
elUitloggen.addEventListener("click", () => {
  sessionStorage.clear();
  localStorage.removeItem("wiskunde_leerlingen");
  localStorage.removeItem("wiskunde_mail");
  window.location.href = "index.html";
});

elTerugBeheerder.addEventListener("click", () => {
  elTerugBeheerder.classList.add("verborgen");
  elBeheerderBalk.classList.remove("verborgen");
  _toonBeheerdersScherm();
});

elAlsLeerling.addEventListener("click", () => {
  elBeheerderBalk.classList.add("verborgen");
  elTerugBeheerder.classList.remove("verborgen");
  _toonLeerlingScherm();
});

elAlsBeheerder.addEventListener("click", _toonBeheerdersScherm);

// Tabs
document.querySelectorAll(".tab-knop").forEach(knop => {
  knop.addEventListener("click", () => {
    document.querySelectorAll(".tab-knop").forEach(k => k.classList.remove("actief"));
    document.querySelectorAll(".tab-paneel").forEach(p => p.classList.remove("actief"));
    knop.classList.add("actief");
    document.getElementById("tab-" + knop.dataset.tab).classList.add("actief");
  });
});

// ============================================================
//  LEERLINGENSCHERM
// ============================================================

function _toonLeerlingScherm() {
  elSchermLeerling.classList.remove("verborgen");
  elSchermBeheerder.classList.add("verborgen");

  _huidigHoofdstuk = getHuidigHoofdstuk(hoofdstukken) || hoofdstukken[0] || null;
  _renderHoofdstuk(_huidigHoofdstuk);

  // Dropdown vullen
  const dropdown = document.getElementById("hst-dropdown");
  dropdown.innerHTML = '<option value="">Verander hier het hoofdstuk</option>';
  hoofdstukken.forEach(h => {
    if (_huidigHoofdstuk && h.code === _huidigHoofdstuk.code) return;
    const opt = document.createElement("option");
    opt.value       = h.code;
    opt.textContent = h.titel;
    dropdown.appendChild(opt);
  });

  dropdown.addEventListener("change", () => {
    if (!dropdown.value) return;
    const gekozen = hoofdstukken.find(h => h.code === dropdown.value);
    if (gekozen) {
      _huidigHoofdstuk = gekozen;
      _renderHoofdstuk(gekozen);
      // Herlaad dropdown zonder huidig
      dropdown.innerHTML = '<option value="">Verander hier het hoofdstuk</option>';
      hoofdstukken.forEach(h => {
        if (h.code === gekozen.code) return;
        const opt = document.createElement("option");
        opt.value       = h.code;
        opt.textContent = h.titel;
        dropdown.appendChild(opt);
      });
      dropdown.value = "";
    }
  });
}

function _renderHoofdstuk(h) {
  const elTitel = document.getElementById("hst-titel");
  elTitel.textContent = h?.titel || "—";

  const basis = h ? `../hoofdstukken/${h.code}/` : "#";

  // Cursus + theorie links
  const knopCursus  = document.getElementById("knop-cursus");
  const knopTheorie = document.getElementById("knop-theorie");
  knopCursus.href  = h?.bestanden?.cursus  ? basis + h.bestanden.cursus  : "#";
  knopTheorie.href = h?.bestanden?.theorie ? basis + h.bestanden.theorie : "#";

  // PDF fallback knoppen
  const knopPdfCursus  = document.getElementById("knop-pdf-cursus");
  const knopPdfTheorie = document.getElementById("knop-pdf-theorie");
  knopPdfCursus.href  = h?.bestanden?.pdfCursus
    ? `../hoofdstukken/${h.code}/${h.bestanden.pdfCursus}`  : "#";
  knopPdfTheorie.href = h?.bestanden?.pdfTheorie
    ? `../hoofdstukken/${h.code}/${h.bestanden.pdfTheorie}` : "#";

  // Correctiesleutel-knoppen
  document.getElementById("knop-checkin").onclick   = () => _openEenvoudigeViewer(h, "checkin");
  document.getElementById("knop-checkout").onclick  = () => _openEenvoudigeViewer(h, "checkout");
  document.getElementById("knop-schema").onclick    = () => _openEenvoudigeViewer(h, "schema");
  document.getElementById("knop-opdrachten").onclick = () => _openOpdrachten(h);
}

// ── Eenvoudige viewer (checkin / checkout / schema) ───────────
function _openEenvoudigeViewer(h, type) {
  if (!h?.bestanden?.[type]) { alert(`Nog geen bestand ingesteld voor '${type}'.`); return; }
  const url = new URL("eenvoudige-viewer.html", window.location.href);
  url.searchParams.set("bestand",    h.bestanden[type]);
  url.searchParams.set("hoofdstuk",  h.code);
  url.searchParams.set("paragraafnr","");
  window.open(url.toString(), "_blank");
}

// ── Opdrachten (correctiesleutel met niveaulogica) ─────────────
function _openOpdrachten(h) {
  if (!h) { alert("Geen hoofdstuk geselecteerd."); return; }
  // Sla het actieve hoofdstuk op en navigeer naar opdrachten.html
  sessionStorage.setItem("actieve_taak_code",     h.code);
  sessionStorage.setItem("actieve_datamatrix",    h.bestanden?.datamatrix || "");
  sessionStorage.setItem("actieve_zichtbaarheid", JSON.stringify(h.zichtbaarheid || []));
  window.location.href = "opdrachten.html";
}

// ============================================================
//  BEHEERDERSSCHERM
// ============================================================
function _toonBeheerdersScherm() {
  elSchermLeerling.classList.add("verborgen");
  elSchermBeheerder.classList.remove("verborgen");
  elNaam.textContent = "Beheerder";

  import("./beheerder.js").then(mod => mod.init(dataLeerlingen, dataInhoud));
}