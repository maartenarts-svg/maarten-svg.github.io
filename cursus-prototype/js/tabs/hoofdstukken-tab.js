// ============================================================
// HOOFDSTUKKEN-TAB.JS
// Voeg hier extra hoofdstukken toe aan de HOOFDSTUKKEN array.
// ============================================================

const HOOFDSTUKKEN = [
  { label: 'Hoofdstuk 10', map: 'H10', nummer: '10' },
  { label: 'Hoofdstuk 11', map: 'H11', nummer: '11' },
  { label: 'Hoofdstuk 12', map: 'H12', nummer: '12' },
  // ── Voeg hier nieuwe hoofdstukken toe ─────────────────────
  // { label: 'Hoofdstuk 13', map: 'H13', nummer: '13' },
];

export function bouwHoofdstukkenTab(container) {
  container.innerHTML = '';

  // Dropdown
  const selectWrapper = document.createElement('div');
  selectWrapper.className = 'select-wrapper';

  const select = document.createElement('select');
  select.id = 'hoofdstuk-select';

  const placeholder = document.createElement('option');
  placeholder.value    = '';
  placeholder.textContent = 'Kies hier het hoofdstuk.';
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  HOOFDSTUKKEN.forEach(hfst => {
    const optie = document.createElement('option');
    optie.value       = JSON.stringify(hfst);
    optie.textContent = hfst.label;
    select.appendChild(optie);
  });

  selectWrapper.appendChild(select);
  container.appendChild(selectWrapper);

  // Tegelzone (aanvankelijk leeg)
  const tegelZone = document.createElement('div');
  tegelZone.id        = 'hoofdstuk-tegels';
  tegelZone.className = 'tegel-rooster verborgen';
  container.appendChild(tegelZone);

  select.addEventListener('change', () => {
    const gekozen = JSON.parse(select.value);
    toonHoofdstukTegels(tegelZone, gekozen);
  });
}

function toonHoofdstukTegels(zone, hfst) {
  zone.innerHTML = '';
  zone.classList.remove('verborgen');

  const tegels = [
    {
      label:   'structuur',
      pad:     `hoofdstukken/${hfst.map}/H${hfst.nummer}_structuur.html`,
    },
    {
      label:   'overzicht oefeningen',
      pad:     `hoofdstukken/${hfst.map}/H${hfst.nummer}_oefeningenoverzicht.html`,
    },
  ];

  tegels.forEach(t => {
    const tegel = document.createElement('a');
    tegel.className   = 'tegel';
    tegel.href        = t.pad;
    tegel.target      = '_blank';
    tegel.rel         = 'noopener noreferrer';
    tegel.textContent = t.label;
    zone.appendChild(tegel);
  });
}
