// ============================================================
// OVERZICHT-VISUEEL.JS
// Bouwt het visuele overzicht van oefeningen.
//
// Gebruik:
//   bouwVisueel(container, oefeningen, niveaus, verbeterdata, params)
//
// Parameters (params-object):
// ─────────────────────────────────────────────────────────────
//   aanklikbaarheid : 'ja'       → alle oefeningen klikbaar
//                   : 'gefaseerd'→ enkel eerste met verbeterkeuze 0
//                   : 'nee'      → niet klikbaar
//
//   messagebox      : true       → messagebox na "Verbeterd, keer terug."
//                   : false      → geen messagebox, direct terug naar overzicht
//
//   inkleuren       : true       → blokjes gekleurd volgens verbeterkeuze
//                   : false      → blokjes altijd wit (verbeterkeuze 0-stijl)
//
//   zichtbaarheid   : '1.1'      → x.y formaat
//                     x=1: "Heeft nog geen plaats." zichtbaar
//                     x=0: verborgen
//                     y=1: "Mijn opmerkingen." zichtbaar
//                     y=0: verborgen
//
//   locatie         : 'databank' → basisdata via Firebase (al ingeladen)
//                   : 'matrix'   → basisdata via H10-data.js (vaste array)
//                     (bij 'matrix' worden oefeningen/niveaus genegeerd
//                      en uit de matrix gehaald)
//
// Callbacks:
//   onOefeningKlik(oefening) → wordt aangeroepen als blokje geklikt wordt
//
// Kleuren voor verbeteropties (toe te voegen aan cursus.css):
//   --oranje-rand    bv. #e65100
//   --oranje-pastel  bv. #ffe0b2
//   --lila-rand      bv. #7b1fa2
//   --lila-pastel    bv. #f3e5f5
// ─────────────────────────────────────────────────────────────

// ── Maatinstellingen ──────────────────────────────────────────
const VAKJE_GROOTTE = '0.9cm';   // ← zijde van elk oefenvakje (breedte en hoogte)
const VAKJE_GAP     = '0.2cm';   // ← ruimte tussen twee vakjes naast elkaar
// ─────────────────────────────────────────────────────────────

const ONDERDEEL_VOLGORDE = [
  { sleutel: 'ontdek',   icoon: '🔍' },
  { sleutel: 'zoeje',    icoon: '🧭' },
  { sleutel: 'cirkel',   icoon: '⬤'  },
  { sleutel: 'vierkant', icoon: '⏹'  },
  { sleutel: 'zeshoek',  icoon: '⬢'  },
];

// Onderdelen die bij de niveaurijen horen
const NIVEAU_ONDERDELEN = new Set(['oefenen', 'hoever', 'hoeveR']);

// Kleurstijlen per verbeterkeuze
function vakjeStijl(keuze, inkleuren) {
  if (!inkleuren || keuze === 0) {
    // Wit, groene rand
    return {
      background: 'white',
      border:     '1.5px solid var(--groen-donker, #4a7c59)',
      color:      '#1a1a1a',
    };
  }
  if (keuze === 1) {
    return {
      background: 'var(--groen-pastel, #c8e6c9)',
      border:     '1.5px solid var(--groen-donker, #4a7c59)',
      color:      '#1a1a1a',
    };
  }
  if (keuze === 2) {
    return {
      background: 'var(--oranje-pastel, #ffe0b2)',
      border:     '1.5px solid var(--oranje-rand, #e65100)',
      color:      '#1a1a1a',
    };
  }
  if (keuze === 3) {
    return {
      background: 'var(--lila-pastel, #f3e5f5)',
      border:     '1.5px solid var(--lila-rand, #7b1fa2)',
      color:      '#1a1a1a',
    };
  }
  return {};
}

export function bouwVisueel(container, oefeningen, niveaus, verbeterdata, params, callbacks) {
  container.innerHTML = '';

  // ── Parameters uitlezen met standaardwaarden ─────────────────
  const aanklikbaarheid = params?.aanklikbaarheid ?? 'nee';
  const messagebox      = params?.messagebox      ?? false;
  const inkleuren       = params?.inkleuren       ?? false;
  const zichtbaarheid   = String(params?.zichtbaarheid ?? '1.1');
  // locatie wordt afgehandeld door de aanroeper (oefeningen zijn al beschikbaar)

  const toonZonderPlaats  = zichtbaarheid[0] === '1';
  const toonOpmerkingen   = zichtbaarheid[2] === '1';

  const onOefeningKlik = callbacks?.onOefeningKlik || (() => {});

  // ── Bepaal welke oefening klikbaar is bij 'gefaseerd' ────────
  let eersteZonderKeuze = null;
  if (aanklikbaarheid === 'gefaseerd') {
    const kandidaten = oefeningen
      .filter(o => NIVEAU_ONDERDELEN.has(o.sleutelRaw))
      .filter(o => (verbeterdata[o.bestandsnaam]?.keuze ?? 0) === 0)
      .sort((a, b) => a.nr - b.nr);
    eersteZonderKeuze = kandidaten[0]?.bestandsnaam ?? null;
  }

  // ── Groepeer per paragraaf ────────────────────────────────────
  const perParagraaf = {};
  oefeningen.forEach(o => {
    if (!perParagraaf[o.paragraaf]) perParagraaf[o.paragraaf] = [];
    perParagraaf[o.paragraaf].push(o);
  });

  const getoondNrs = new Set();

  // ── Paragraafnamen ophalen ────────────────────────────────────
  // Worden meegegeven via params.paragraafNamen:
  // { "10.1": "Eigenschappen van bewerkingen", ... }
  const paragraafNamen = params?.paragraafNamen || {};

  Object.keys(perParagraaf).sort().forEach(par => {
    const groep = perParagraaf[par];
    const naam  = paragraafNamen[par] ? par + ' ' + paragraafNamen[par] : 'Paragraaf ' + par;

    // Paragraaftitel
    const titel = document.createElement('div');
    titel.className = 'visueel-paragraaf-titel';
    titel.textContent = naam;
    container.appendChild(titel);

    const grid = document.createElement('div');
    grid.className = 'visueel-grid';
    container.appendChild(grid);

    ONDERDEEL_VOLGORDE.forEach(({ sleutel, icoon }) => {
      let rij = [];

      if (sleutel === 'ontdek' || sleutel === 'zoeje') {
        rij = groep.filter(o => o.sleutelRaw === sleutel);
      } else {
        // Niveaurijen: oefenen + hoever, gefilterd op niveau, gesorteerd op nr
        rij = groep
          .filter(o => NIVEAU_ONDERDELEN.has(o.sleutelRaw))
          .filter(o => {
            const n = niveaus[o.bestandsnaam] || [];
            return n.includes(sleutel);
          })
          .sort((a, b) => a.nr - b.nr);
      }

      if (rij.length === 0) return;
      rij.forEach(o => getoondNrs.add(o.nr));

      const rij_el = document.createElement('div');
      rij_el.className = 'visueel-rij';

      const icoon_el = document.createElement('div');
      icoon_el.className = 'visueel-icoon';
      icoon_el.textContent = icoon;
      rij_el.appendChild(icoon_el);

      const vakjes = document.createElement('div');
      vakjes.className = 'visueel-vakjes';
      vakjes.style.gap = VAKJE_GAP;

      rij.forEach(o => {
        const keuze = verbeterdata[o.bestandsnaam]?.keuze ?? 0;
        const stijl = vakjeStijl(keuze, inkleuren);

        const vakje = document.createElement('div');
        vakje.className = 'visueel-vakje';
        vakje.dataset.bestandsnaam = o.bestandsnaam;
        vakje.style.width      = VAKJE_GROOTTE;
        vakje.style.height     = VAKJE_GROOTTE;
        vakje.style.background = stijl.background;
        vakje.style.border     = stijl.border;
        vakje.style.color      = stijl.color;
        vakje.textContent      = o.nr;

        // Aanklikbaarheid
        let klikbaar = false;
        if (aanklikbaarheid === 'ja') klikbaar = true;
        if (aanklikbaarheid === 'gefaseerd' && o.bestandsnaam === eersteZonderKeuze) klikbaar = true;

        if (klikbaar) {
          vakje.style.cursor = 'pointer';
          vakje.title = o.bestandsnaam;
          vakje.addEventListener('click', () => onOefeningKlik(o));
        }

        vakjes.appendChild(vakje);
      });

      rij_el.appendChild(vakjes);
      grid.appendChild(rij_el);
    });
  });

  // ── "Heeft nog geen plaats." ──────────────────────────────────
  if (toonZonderPlaats) {
    const zonderPlaats = oefeningen
      .filter(o => NIVEAU_ONDERDELEN.has(o.sleutelRaw))
      .filter(o => (niveaus[o.bestandsnaam] || []).length === 0)
      .sort((a, b) => a.nr - b.nr);

    const zonderTitel = document.createElement('div');
    zonderTitel.className = 'visueel-paragraaf-titel visueel-zonder-titel';
    zonderTitel.textContent = 'Heeft nog geen plaats.';
    container.appendChild(zonderTitel);

    if (zonderPlaats.length === 0) {
      const leeg = document.createElement('div');
      leeg.className = 'visueel-zonder-leeg';
      leeg.textContent = '— geen —';
      container.appendChild(leeg);
    } else {
      const lijst = document.createElement('div');
      lijst.className = 'visueel-zonder-lijst';
      lijst.textContent = zonderPlaats.map(o => o.nr).join(', ');
      container.appendChild(lijst);
    }
  }

  // ── "Mijn opmerkingen." ───────────────────────────────────────
  if (toonOpmerkingen) {
    const opmTitel = document.createElement('div');
    opmTitel.className = 'visueel-paragraaf-titel visueel-opm-titel';
    opmTitel.textContent = 'Mijn opmerkingen.';
    container.appendChild(opmTitel);

    // Tabel keuze 2 (oranje)
    const keuze2 = oefeningen
      .filter(o => (verbeterdata[o.bestandsnaam]?.pogingen || []).some(p => p.opmerking && p.keuze === 2))
      .sort((a, b) => a.nr - b.nr);

    if (keuze2.length > 0) {
      const tbl2 = _maakOpmTabel(keuze2, verbeterdata, 'oranje', false, 2);
      container.appendChild(tbl2);
    }

    // Tabel keuze 3 (lila)
    const keuze3 = oefeningen
      .filter(o => (verbeterdata[o.bestandsnaam]?.pogingen || []).some(p => p.opmerking && p.keuze === 3))
      .sort((a, b) => a.nr - b.nr);

    if (keuze3.length > 0) {
      const tbl3 = _maakOpmTabel(keuze3, verbeterdata, 'lila', true, 3);
      container.appendChild(tbl3);
    }

    if (keuze2.length === 0 && keuze3.length === 0) {
      const leeg = document.createElement('div');
      leeg.className = 'visueel-zonder-leeg';
      leeg.textContent = '— geen opmerkingen —';
      container.appendChild(leeg);
    }
  }
}

// ── Opmerkingtabel bouwen ─────────────────────────────────────
function _maakOpmTabel(oefeningen, verbeterdata, kleur, metOpgelost, keuzeFilter) {
  const isOranje = kleur === 'oranje';
  const achtergronden = isOranje
    ? ['#fff3e0', '#ffe0b2']   // afwisselende oranje tinten
    : ['#f3e5f5', '#e1bee7'];  // afwisselende lila tinten
  const randKleur = isOranje
    ? 'var(--oranje-rand, #e65100)'
    : 'var(--lila-rand, #7b1fa2)';

  const wrapper = document.createElement('div');
  wrapper.style.marginBottom = '12px';

  const tbl = document.createElement('table');
  tbl.style.cssText = `
    width: 100%; border-collapse: collapse;
    font-family: var(--font, Arial); font-size: 10pt;
    margin-top: 8px;
  `;

  // Header
  const thead = document.createElement('thead');
  const trH   = document.createElement('tr');
  trH.style.background = isOranje
    ? 'var(--oranje-rand, #e65100)'
    : 'var(--lila-rand, #7b1fa2)';

  const koppen = metOpgelost
    ? ['Nr.', 'Opmerking / Vraag', 'Opgelost']
    : ['Nr.', 'Opmerking'];

  koppen.forEach((k, i) => {
    const th = document.createElement('th');
    th.textContent = k;
    th.style.cssText = `
      padding: 6px 10px; color: white; text-align: left;
      font-size: 10pt; font-weight: bold;
      ${i === 0 ? 'width: 50px;' : ''}
      ${metOpgelost && i === 2 ? 'width: 80px; text-align:center;' : ''}
    `;
    trH.appendChild(th);
  });
  thead.appendChild(trH);
  tbl.appendChild(thead);

  const tbody = document.createElement('tbody');
  oefeningen.forEach((o, idx) => {
    const vd  = verbeterdata[o.bestandsnaam] || {};
    const tr  = document.createElement('tr');
    const bg  = achtergronden[idx % 2];

    // Opgelost-stijl: streep door tekst
    const pogingen = vd.pogingen || [];
    const laatstePoging = pogingen[pogingen.length - 1];
    const opgelost = laatstePoging?.opgelost === true;

    tr.style.background = bg;
    if (opgelost) tr.style.opacity = '0.7';

    const tdNr = document.createElement('td');
    tdNr.style.cssText = `padding:6px 10px; font-weight:bold; color:#1a1a1a; border-bottom:1px solid ${randKleur}20;`;
    tdNr.textContent = o.nr;
    tr.appendChild(tdNr);

    const tdOpm = document.createElement('td');
    tdOpm.style.cssText = `padding:6px 10px; color:#1a1a1a; border-bottom:1px solid ${randKleur}20;`;
    pogingen.forEach((p, i) => {
      if (!p.opmerking) return;
      if (p.keuze !== keuzeFilter) return;
      const regel = document.createElement('div');
      regel.style.paddingLeft = '1em';
      regel.style.textIndent = '-1em';
      regel.textContent = '• ' + p.opmerking;
      if (i < pogingen.length - 1) {
        regel.style.marginBottom = '4px';
      }
      tdOpm.appendChild(regel);
    });
    tr.appendChild(tdOpm);

    if (metOpgelost) {
      const tdOpl = document.createElement('td');
      tdOpl.style.cssText = `padding:6px 10px; text-align:center; border-bottom:1px solid ${randKleur}20;`;
      const cb = document.createElement('input');
      cb.type    = 'checkbox';
      cb.checked = opgelost;
      cb.dataset.bestandsnaam = o.bestandsnaam;
      cb.style.cursor = 'pointer';
      cb.style.accentColor = 'var(--lila-rand, #7b1fa2)';
      cb.addEventListener('change', () => {
        // Callback voor opslaan wordt afgehandeld door de aanroeper
        // via het custom event 'opgelost-gewijzigd'
        tr.style.opacity = cb.checked ? '0.7' : '1';
        tdOpm.style.textDecoration = cb.checked ? 'line-through' : '';
        tdOpm.style.opacity = cb.checked ? '0.6' : '1';
        container.dispatchEvent(new CustomEvent('opgelost-gewijzigd', {
          bubbles: true,
          detail: { bestandsnaam: o.bestandsnaam, opgelost: cb.checked }
        }));
      });
      tdOpl.appendChild(cb);
      tr.appendChild(tdOpl);
    }

    tbody.appendChild(tr);
  });

  tbl.appendChild(tbody);
  wrapper.appendChild(tbl);
  return wrapper;
}