// ============================================================
// DASHBOARD.JS — tabnavigatie en initialisatie
// Voeg hier extra tabbladen toe aan de TABBLADEN array.
// ============================================================
import { initialiseerAuth, inloggenMetGoogle, uitloggen } from './auth.js';
import { bouwHelperTab }       from './tabs/helpers-tab.js';
import { bouwHoofdstukkenTab } from './tabs/hoofdstukken-tab.js';
import { bouwDoelenTab }       from './tabs/doelen-tab.js';

// ── Tabbladen configuratie ────────────────────────────────────
// Voeg hier nieuwe tabbladen toe:
// { id: 'mijn-tab', label: 'mijn tab', bouw: bouwMijnTab }
const TABBLADEN = [
  { id: 'helpers',      label: 'helpers',      bouw: bouwHelperTab       },
  { id: 'hoofdstukken', label: 'hoofdstukken', bouw: bouwHoofdstukkenTab },
  { id: 'doelen',       label: 'doelen',       bouw: bouwDoelenTab       },
];

// ── DOM-referenties ───────────────────────────────────────────
const loginScherm   = document.getElementById('login-scherm');
const dashboard     = document.getElementById('dashboard');
const tabBalk       = document.getElementById('tab-balk');
const tabInhoud     = document.getElementById('tab-inhoud');
const gebruikerInfo = document.getElementById('gebruiker-info');
const uitlogBtn     = document.getElementById('uitlog-btn');
const inlogBtn      = document.getElementById('inlog-btn');

// ── Auth ──────────────────────────────────────────────────────
inlogBtn.addEventListener('click', inloggenMetGoogle);
uitlogBtn.addEventListener('click', uitloggen);

initialiseerAuth({
  onIngelogd(gebruiker) {
    loginScherm.classList.add('verborgen');
    dashboard.classList.remove('verborgen');
    gebruikerInfo.textContent = gebruiker.displayName || gebruiker.email;
    bouwTabBalk();
    activeerTab(TABBLADEN[0].id);
  },
  onUitgelogd() {
    loginScherm.classList.remove('verborgen');
    dashboard.classList.add('verborgen');
    tabBalk.innerHTML   = '';
    tabInhoud.innerHTML = '';
  }
});

// ── Tabbalk opbouwen ──────────────────────────────────────────
function bouwTabBalk() {
  tabBalk.innerHTML = '';
  TABBLADEN.forEach(tab => {
    const knop = document.createElement('button');
    knop.className       = 'tab-knop';
    knop.dataset.tabId   = tab.id;
    knop.textContent     = tab.label;
    knop.addEventListener('click', () => activeerTab(tab.id));
    tabBalk.appendChild(knop);
  });
}

// ── Tab activeren ─────────────────────────────────────────────
function activeerTab(tabId) {
  // Knopstatus
  tabBalk.querySelectorAll('.tab-knop').forEach(knop => {
    knop.classList.toggle('actief', knop.dataset.tabId === tabId);
  });

  // Inhoud opbouwen
  tabInhoud.innerHTML = '';
  const tab = TABBLADEN.find(t => t.id === tabId);
  if (tab) tab.bouw(tabInhoud);
}
