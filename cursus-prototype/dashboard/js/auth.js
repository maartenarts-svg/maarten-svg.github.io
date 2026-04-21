// ============================================================
//  auth.js  —  login-logica
// ============================================================

import { fetchLeerling, fetchAlleLeerlingen, fetchBeheerder, fetchInhoud } from "./firebase.js";

const formulier   = document.getElementById("login-formulier");
const mailInvoer  = document.getElementById("login-mail");
const codeWrap    = document.getElementById("code-wrap");
const codeInvoer  = document.getElementById("login-code");
const loginKnop   = document.getElementById("login-knop");
const foutBericht = document.getElementById("login-fout");

// Toon code-veld als mailadres een beheerder is
mailInvoer.addEventListener("blur", async () => {
  const mail = mailInvoer.value.trim().toLowerCase();
  if (!mail) return;
  const beheerder = await fetchBeheerder(mail);
  if (beheerder) codeWrap.classList.remove("verborgen");
  else           codeWrap.classList.add("verborgen");
});

formulier.addEventListener("submit", async (e) => {
  e.preventDefault();
  foutBericht.textContent = "";
  loginKnop.disabled      = true;
  loginKnop.textContent   = "Even geduld…";

  const mail = mailInvoer.value.trim().toLowerCase();
  const code = codeInvoer.value.trim();

  try {
    const persoon = await _zoekOpMail(mail);

    if (!persoon) {
      _toonFout("Dit mailadres is niet gekend. Neem contact op met de beheerder.");
      return;
    }

    const isBeheerder = persoon._isBeheerder;
    if (isBeheerder && code !== persoon.code) {
      _toonFout("Onjuiste code. Neem contact op met de beheerder.");
      return;
    }

    const inhoud = await fetchInhoud();
    sessionStorage.setItem("wiskunde_inhoud", JSON.stringify(inhoud));
    sessionStorage.setItem("wiskunde_mail",   mail);
    sessionStorage.setItem("wiskunde_rol",    isBeheerder ? "beheerder" : "leerling");
    localStorage.setItem("wiskunde_mail",     mail);

    if (isBeheerder) {
      const alleLeerlingen = await fetchAlleLeerlingen();
      sessionStorage.setItem("wiskunde_leerlingen", JSON.stringify(alleLeerlingen));
      localStorage.setItem("wiskunde_leerlingen",   JSON.stringify(alleLeerlingen));
    } else {
      const { _isBeheerder, ...leerlingData } = persoon;
      sessionStorage.setItem("wiskunde_leerlingen", JSON.stringify(leerlingData));
      localStorage.setItem("wiskunde_leerlingen",   JSON.stringify(leerlingData));
    }

    window.location.href = "dashboard.html";

  } catch (err) {
    _toonFout("Er is een technische fout opgetreden. Probeer opnieuw.");
    console.error(err);
  } finally {
    loginKnop.disabled    = false;
    loginKnop.textContent = "Inloggen";
  }
});

async function _zoekOpMail(mail) {
  const leerling = await fetchLeerling(mail);
  if (leerling) return { ...leerling, _isBeheerder: false };
  const beheerder = await fetchBeheerder(mail);
  if (beheerder) return { ...beheerder, _isBeheerder: true };
  return null;
}

function _toonFout(bericht) {
  foutBericht.textContent = bericht;
  loginKnop.disabled      = false;
  loginKnop.textContent   = "Inloggen";
}