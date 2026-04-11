// ============================================================
// H10-VISUEEL-OVERZICHT.JS
// Bouwt een statisch visueel overzicht van alle oefeningen
// van H10 in de cursus.
//
// Gebruik in de cursus (structuurbestand):
//   voegContentToe('content-overzicht');
//   (daarna wordt dit bestand geladen via een <script>-tag)
//
// Data komt uit H10-data.js (de geëxporteerde matrix).
// Beide bestanden staan in dezelfde map (hoofdstukken/H10/).
//
// Compatibel met layout-systeem 1 (doorlopend) en
// systeem 2 (pagina's met marges).
// ============================================================

// ── VERWIJZING NAAR MATRIX ────────────────────────────────────
// !! Pas dit aan als H10-datamatrix.js ergens anders staat !!
// H10-datamatrix.js moet geladen zijn vóór dit bestand
// via laadOefeningen(['H10-data.js', 'H10-visueel-overzicht.js'])

// ── MAATINSTELLINGEN ──────────────────────────────────────────
// Speel hier met de afmetingen van de blokjes en de tussenruimtes.

const VAKJE_GROOTTE   = '0.8cm';    // breedte én hoogte van elk oefeningblokje
const VAKJE_GAP       = '0.1cm';   // horizontale ruimte tussen blokjes
const RIJ_GAP         = '0.1cm';   // verticale ruimte tussen rijen binnen een paragraaf
const PARAGRAAF_GAP   = '0.5cm';    // verticale ruimte tussen paragrafen

// ── ICONEN ────────────────────────────────────────────────────
const ICOON_BREEDTE = '0.6cm';      // breedte van de icoonkolom links

const ONDERDEEL_VOLGORDE = [
  { sleutel: 'ontdek',   icoon: '🔍' },
  { sleutel: 'zoeje',    icoon: '🧭' },
  { sleutel: 'cirkel',   icoon: '⬤'  },
  { sleutel: 'vierkant', icoon: '⏹'  },
  { sleutel: 'zeshoek',  icoon: '⬢'  },
];

// Niveau-onderdelen: oefeningen die ingedeeld worden per niveau
const NIVEAU_ONDERDELEN = new Set(['oefenen', 'hoever', 'hoeveR']);

// ── CONTAINER OPZOEKEN EN VULLEN ──────────────────────────────
(function() {
  const container = document.getElementById('content-overzicht');
  if (!container) {
    console.warn('H10-visueel-overzicht.js: container #content-overzicht niet gevonden.');
    return;
  }

  // Maximale breedte: 21cm min linker- en rechtermarge
  // --marge-links: 3cm, --marge-rechts: 2.5cm → beschikbare breedte: 15.5cm
  container.style.cssText = `
    width: 100%;
    max-width: calc(21cm - var(--marge-links, 3cm) - var(--marge-rechts, 2.5cm));
    font-family: var(--font, Arial);
    font-size: var(--fontsize, 10pt);
    color: var(--tekst, #1a1a1a);
    display: flex;
    flex-direction: column;
    gap: ${PARAGRAAF_GAP};
  `;

  // ── Groepeer oefeningen per paragraaf ─────────────────────
  const perParagraaf = {};
  H10_matrix.forEach(o => {
    if (!perParagraaf[o.paragraaf]) perParagraaf[o.paragraaf] = [];
    perParagraaf[o.paragraaf].push(o);
  });

  // ── Bouw elke paragraaf ───────────────────────────────────
  Object.keys(perParagraaf).sort().forEach(par => {
    const groep = perParagraaf[par];

    const paragraafBlok = document.createElement('div');

    // Paragraaftitel
    const titel = document.createElement('div');
    titel.style.cssText = `
      font-weight: bold;
      font-size: var(--fontsize, 10pt);
      color: var(--groen-donker, #4a7c59);
      padding-bottom: 0.1cm;
      border-bottom: 1.5px solid var(--groen-scheiding, #a5d6a7);
      margin-bottom: 0.2cm;
    `;
    const paragraafNaam = (typeof _paragraafNamenGlobaal !== 'undefined' && _paragraafNamenGlobaal[par])
      ? par + ' ' + _paragraafNamenGlobaal[par]
      : 'Paragraaf ' + par;
    titel.textContent = paragraafNaam;
    paragraafBlok.appendChild(titel);

    // Grid van rijen
    const grid = document.createElement('div');
    grid.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: ${RIJ_GAP};
    `;

    // ── Bepaal of cirkel/vierkant/zeshoek dezelfde oefeningen hebben ──
    // Als dat zo is, tonen we één rij met 🔄 in plaats van drie aparte rijen.
    const oefeningenVoor = (niveau) =>
      groep
        .filter(o => NIVEAU_ONDERDELEN.has(_sleutelUitOnderdeel(o.onderdeel)))
        .filter(o => {
          const n = o.niveau || 'geen';
          return n !== 'geen' && n.split('+').includes(niveau);
        })
        .map(o => o.nr)
        .sort((a, b) => a - b)
        .join(',');

    const cirkelOef   = oefeningenVoor('cirkel');
    const vierkantOef = oefeningenVoor('vierkant');
    const zeshoekOef  = oefeningenVoor('zeshoek');
    const alleGelijk  = cirkelOef === vierkantOef && vierkantOef === zeshoekOef && cirkelOef !== '';

    // ── Bouw elke rij ─────────────────────────────────────────
    ONDERDEEL_VOLGORDE.forEach(({ sleutel, icoon }) => {
      if (alleGelijk && sleutel === 'vierkant') return;
      if (alleGelijk && sleutel === 'zeshoek') return;
      if (alleGelijk && sleutel === 'cirkel') {
        // Vervang de drie niveaurijen door één gecombineerde rij met 🔄
        const rij = groep
          .filter(o => NIVEAU_ONDERDELEN.has(_sleutelUitOnderdeel(o.onderdeel)))
          .filter(o => (o.niveau || 'geen') !== 'geen' && o.niveau.split('+').includes('cirkel'))
          .sort((a, b) => a.nr - b.nr);

        if (rij.length > 0) {
          const rijEl = document.createElement('div');
          rijEl.style.cssText = `display: flex; align-items: center; gap: 0.2cm;`;

          const icoonEl = document.createElement('div');
          icoonEl.style.cssText = `width: ${ICOON_BREEDTE}; flex-shrink: 0; text-align: left; font-size: var(--fontsize, 10pt); user-select: none;`;
          icoonEl.textContent = '🔄';
          rijEl.appendChild(icoonEl);

          const vakjesEl = document.createElement('div');
          vakjesEl.style.cssText = `display: flex; flex-direction: row; flex-wrap: wrap; gap: ${VAKJE_GAP};`;

          rij.forEach(o => {
            const vakje = document.createElement('div');
            vakje.style.cssText = `width: ${VAKJE_GROOTTE}; height: ${VAKJE_GROOTTE}; display: flex; align-items: center; justify-content: center; border: 1.5px solid var(--groen-donker, #4a7c59); border-radius: 2px; background: transparent; font-size: 8pt; font-weight: bold; font-family: var(--font, Arial); color: var(--tekst, #1a1a1a); flex-shrink: 0; box-sizing: border-box;`;
            vakje.textContent = o.nr;
            vakjesEl.appendChild(vakje);
          });

          rijEl.appendChild(vakjesEl);
          grid.appendChild(rijEl);
        }
        return;
      }

      let rij = [];

      if (sleutel === 'ontdek' || sleutel === 'zoeje') {
        // Niet-niveau rijen: filter op onderdeel
        rij = groep.filter(o => {
          const s = _sleutelUitOnderdeel(o.onderdeel);
          return s === sleutel;
        });
      } else {
        // Niveaurijen: filter op niveau
        const teFilterenNiveau = alleGelijk ? null : sleutel;
        rij = groep
          .filter(o => NIVEAU_ONDERDELEN.has(_sleutelUitOnderdeel(o.onderdeel)))
          .filter(o => {
            const n = o.niveau || 'geen';
            if (teFilterenNiveau === null) return n !== 'geen';
            return n !== 'geen' && n.split('+').includes(teFilterenNiveau);
          })
          .sort((a, b) => a.nr - b.nr);
      }

      if (rij.length === 0) return;

      const rijEl = document.createElement('div');
      rijEl.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.2cm;
      `;

      // Icoon
      const icoonEl = document.createElement('div');
      icoonEl.style.cssText = `
        width: ${ICOON_BREEDTE};
        flex-shrink: 0;
        text-align: left;
        font-size: var(--fontsize, 10pt);
        user-select: none;
      `;
      icoonEl.textContent = icoon;
      rijEl.appendChild(icoonEl);

      // Vakjes
      const vakjesEl = document.createElement('div');
      vakjesEl.style.cssText = `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${VAKJE_GAP};
      `;

      rij.forEach(o => {
        const vakje = document.createElement('div');
        vakje.style.cssText = `
          width: ${VAKJE_GROOTTE};
          height: ${VAKJE_GROOTTE};
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--groen-donker, #4a7c59);
          border-radius: 2px;
          background: transparent;
          font-size: 8pt;
          font-weight: bold;
          font-family: var(--font, Arial);
          color: var(--tekst, #1a1a1a);
          flex-shrink: 0;
          box-sizing: border-box;
        `;
        vakje.textContent = o.nr;
        vakjesEl.appendChild(vakje);
      });

      rijEl.appendChild(vakjesEl);
      grid.appendChild(rijEl);
    });

    paragraafBlok.appendChild(grid);
    container.appendChild(paragraafBlok);
  });
})();

// ── Hulpfunctie: sleutel afleiden uit onderdeel-naam ──────────
// Nodig omdat de matrix 'onderdeel' opslaat als leesbare naam
// (bv. 'Oefenen!') en niet als sleutel (bv. 'oefenen').
function _sleutelUitOnderdeel(onderdeel) {
  const map = {
    'Oefenen!':          'oefenen',
    'Zo doe je dat!':    'zoeje',
    'Hoe ver sta ik?':   'hoever',
    'Ontdekkingstocht':  'ontdek',
  };
  return map[onderdeel] || '';
}
