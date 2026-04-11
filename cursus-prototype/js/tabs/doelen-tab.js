// ============================================================
// DOELEN-TAB.JS
// Hoofdmodule voor het doelen-tabblad in het dashboard.
//
// Vier knoppen bovenaan:
//   Volgorde  → doelen-volgorde.js
//   Invoegen  → doelen-invoegen.js
//   Uploaden  → doelen-uploaden.js
//   Aanpassen → doelen-invoegen.js (bouwAanpassen)
//
// Bij elke knop wordt de inhoud van het tabblad vervangen.
// Actieve knop krijgt een andere stijl.
//
// Waarschuwing bij verlaten pagina als er niet-opgeslagen
// wijzigingen zijn (via window._doelenVolgordeGewijzigd
// en isGewijzigd() uit doelen-invoegen.js).
// ============================================================

import { bouwVolgorde }   from '../doelen-volgorde.js';
import { bouwInvoegen, bouwAanpassen, isGewijzigd } from '../doelen-invoegen.js';
import { bouwUploaden }   from '../doelen-uploaden.js';

// ── Knoppen configuratie ──────────────────────────────────────
// Voeg hier nieuwe knoppen toe indien nodig.
const KNOPPEN = [
  { id: 'volgorde',  label: 'Volgorde',  actie: (c) => bouwVolgorde(c, 'succescriterium')  },
  { id: 'voorkennis', label: 'Voorkennis', actie: (c) => bouwVolgorde(c, 'voorkennis') },
  { id: 'invoegen',  label: 'Invoegen',  actie: (c) => bouwInvoegen(c)  },
  { id: 'uploaden',  label: 'Uploaden',  actie: (c) => bouwUploaden(c)  },
  { id: 'aanpassen', label: 'Aanpassen', actie: (c) => bouwAanpassen(c) },
];

// ── Bouw het doelen-tabblad ───────────────────────────────────
export function bouwDoelenTab(container) {
  container.innerHTML = '';

  // ── Knoppenbalk ───────────────────────────────────────────
  const balk = document.createElement('div');
  balk.style.cssText = `
    display:flex;gap:8px;flex-wrap:wrap;
    margin-bottom:16px;
    border-bottom:2px solid #a5d6a7;
    padding-bottom:10px;
  `;

  // ── Inhoud zone ───────────────────────────────────────────
  const inhoud = document.createElement('div');
  inhoud.id = 'doelen-inhoud';
  inhoud.style.cssText = 'font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;font-size:13px;';

  let actiefId = null;

  function activeer(knopId) {
    // Waarschuwing als er niet-opgeslagen wijzigingen zijn
    if (actiefId && heeftWijzigingen()) {
      if (!confirm('Je hebt niet-opgeslagen wijzigingen. Wil je toch verder gaan?')) return;
    }

    actiefId = knopId;

    // Knopstijlen aanpassen
    balk.querySelectorAll('button').forEach(btn => {
      const actief = btn.dataset.id === knopId;
      btn.style.background    = actief ? '#4a7c59' : 'white';
      btn.style.color         = actief ? 'white'   : '#4a7c59';
      btn.style.borderColor   = '#4a7c59';
    });

    // Inhoud vervangen
    const knop = KNOPPEN.find(k => k.id === knopId);
    if (knop) knop.actie(inhoud);
  }

  KNOPPEN.forEach(knop => {
    const btn = document.createElement('button');
    btn.textContent  = knop.label;
    btn.dataset.id   = knop.id;
    btn.style.cssText = `
      padding:6px 18px;font-size:13px;font-weight:600;
      background:white;color:#4a7c59;
      border:1.5px solid #4a7c59;border-radius:4px;
      cursor:pointer;transition:all .15s;
      font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;
    `;
    btn.addEventListener('click', () => activeer(knop.id));
    balk.appendChild(btn);
  });

  container.appendChild(balk);
  container.appendChild(inhoud);

  // ── Waarschuwing bij verlaten pagina ─────────────────────
  window.addEventListener('beforeunload', e => {
    if (heeftWijzigingen()) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}

// ── Controleer niet-opgeslagen wijzigingen ────────────────────
function heeftWijzigingen() {
  return window._doelenVolgordeGewijzigd === true || isGewijzigd();
}
