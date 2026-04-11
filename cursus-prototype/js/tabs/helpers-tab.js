// ============================================================
// HELPERS-TAB.JS
// Voeg hier extra helpers toe aan de HELPERS array.
// ============================================================

const HELPERS = [
  {
    label:    'standaard oefening',
    bestand:  'sjablonen/helper_gecombineerd2.html',
  },
  {
    label:    'oefening met figuur',
    bestand:  'sjablonen/helper_voor_figuren3.html',
  },
  {
    label:    'oefening met tabel',
    bestand:  'sjablonen/helper_voor_tabellen1.html',
  },
  {
    label:    'helper voor code',
    bestand:  'sjablonen/code_helper1.html',
  },
  // ── Voeg hier nieuwe helpers toe ──────────────────────────
  // { label: 'mijn nieuwe helper', bestand: 'sjablonen/mijn_helper.html' },
];

export function bouwHelperTab(container) {
  container.innerHTML = '';

  const rooster = document.createElement('div');
  rooster.className = 'tegel-rooster';

  HELPERS.forEach(helper => {
    const tegel = document.createElement('a');
    tegel.className   = 'tegel';
    tegel.href        = helper.bestand;
    tegel.target      = '_blank';
    tegel.rel         = 'noopener noreferrer';
    tegel.textContent = helper.label;
    rooster.appendChild(tegel);
  });

  container.appendChild(rooster);
}
