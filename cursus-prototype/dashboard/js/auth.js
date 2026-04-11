// ============================================================
//  auth.js  —  login-logica
// ============================================================

import { fetchLeerlingen, fetchInhoud } from "./firebase.js";

const formulier   = document.getElementById("login-formulier");
const mailInvoer  = document.getElementById("login-mail");
const codeWrap    = document.getElementById("code-wrap");
const codeInvoer  = document.getElementById("login-code");
const loginKnop   = document.getElementById("login-knop");
const foutBericht = document.getElementById("login-fout");

let _cachedData = null;

// Toon code-veld als mailadres een beheerder is
mailInvoer.addEventListener("blur", async () => {
  const mail = mailInvoer.value.trim().toLowerCase();
  if (!mail) return;
  const data    = await _laadData();
  const persoon = _zoekOpMail(data, mail);
  if (persoon?.code) codeWrap.classList.remove("verborgen");
  else               codeWrap.classList.add("verborgen");
});

formulier.addEventListener("submit", async (e) => {
  e.preventDefault();
  foutBericht.textContent = "";
  loginKnop.disabled      = true;
  loginKnop.textContent   = "Even geduld…";

  const mail = mailInvoer.value.trim().toLowerCase();
  const code = codeInvoer.value.trim();

  try {
    const data    = await _laadData();
    const persoon = _zoekOpMail(data, mail);

    if (!persoon) {
      _toonFout("Dit mailadres is niet gekend. Neem contact op met de beheerder.");
      return;
    }

    const isBeheerder = !!(persoon.code);
    if (isBeheerder && code !== persoon.code) {
      _toonFout("Onjuiste code. Neem contact op met de beheerder.");
      return;
    }

    // Login geslaagd — laad inhoud en sla op
    const inhoud = await fetchInhoud();

    // sessionStorage: voor deze tab
    // localStorage: gedeeld met popup-vensters (correctiesleutel-viewer)
    sessionStorage.setItem("wiskunde_leerlingen", JSON.stringify(data));
    sessionStorage.setItem("wiskunde_inhoud",     JSON.stringify(inhoud));
    sessionStorage.setItem("wiskunde_mail",        mail);
    sessionStorage.setItem("wiskunde_rol",         isBeheerder ? "beheerder" : "leerling");
    localStorage.setItem("wiskunde_leerlingen",    JSON.stringify(data));
    localStorage.setItem("wiskunde_mail",          mail);

    window.location.href = "dashboard.html";

  } catch (err) {
    _toonFout("Er is een technische fout opgetreden. Probeer opnieuw.");
    console.error(err);
  } finally {
    loginKnop.disabled    = false;
    loginKnop.textContent = "Inloggen";
  }
});

async function _laadData() {
  if (_cachedData) return _cachedData;
  const cached = sessionStorage.getItem("wiskunde_leerlingen");
  if (cached) { _cachedData = JSON.parse(cached); return _cachedData; }
  _cachedData = await fetchLeerlingen();
  return _cachedData;
}

function _zoekOpMail(data, mail) {
  return (data.leerlingen || []).find(l => l.mail.toLowerCase() === mail);
}

function _toonFout(bericht) {
  foutBericht.textContent = bericht;
  loginKnop.disabled      = false;
  loginKnop.textContent   = "Inloggen";
}