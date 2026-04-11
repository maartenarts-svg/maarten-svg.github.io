// ============================================================
//  taken/CR1.js  —  Correctiesleutel Hoofdstuk 10
//
//  Exporteert: render(container, leerling, code, callbacks)
//
//  De matrix H10-datamatrix.js wordt dynamisch geladen via
//  een <script>-tag (var H10_matrix beschikbaar als global).
//  Pad: ../hoofdstukken/H10/H10-datamatrix.js
// ============================================================

// ── Constanten ───────────────────────────────────────────────
const HOOFDSTUK   = 'H10';
const TITEL       = 'Rekenen met letters';
const SLEUTEL_CODE = 'CR1';

const PARAGRAAF_NAMEN = {
  '10.1': 'Eigenschappen van bewerkingen',
  '10.2': 'Lettervormen',
  '10.3': 'Lettervormen herleiden',
  '10.4': 'Een getal vermenigvuldigen met een lettervorm',
};

// Iconen per niveau
const NIVEAU_ICOON = {
  cirkel:   '⬤',
  vierkant: '⏹',
  zeshoek:  '⬢',
};

// Onderdelen die meetellen voor niveaubepaling
const NIVEAU_ONDERDELEN = new Set(['oefenen', 'hoever', 'hoeveR']);

// Sleutel-mapping (bestandsnaam-veld)
const ONDERDEEL_SLEUTEL = {
  'Oefenen!':         'oefenen',
  'Zo doe je dat!':   'zoeje',
  'Hoe ver sta ik?':  'hoever',
  'Hoe ver sta ik?R': 'hoeveR',
  'Ontdekkingstocht': 'ontdek',
};

// Vakje-grootte
const VAKJE = '0.9cm';
const GAP   = '0.15cm';

// ── Kleuren per verbeterkeuze ─────────────────────────────────
function vakjeStijl(keuze) {
  if (!keuze || keuze === 0) return { bg: 'white',                              rand: 'var(--groen-donker,#4a7c59)',    kleur: '#1a1a1a' };
  if (keuze === 1)           return { bg: 'var(--groen-pastel,#c8e6c9)',         rand: 'var(--groen-donker,#4a7c59)',    kleur: '#1a1a1a' };
  if (keuze === 2)           return { bg: 'var(--oranje-pastel,#ffe0b2)',        rand: 'var(--oranje-rand,#e65100)',     kleur: '#1a1a1a' };
  if (keuze === 3)           return { bg: 'var(--lila-pastel,#f3e5f5)',          rand: 'var(--lila-rand,#7b1fa2)',       kleur: '#1a1a1a' };
  return {};
}

// ── Hulpfuncties ─────────────────────────────────────────────

// Niveaus van een oefening als array: 'cirkel+vierkant' → ['cirkel','vierkant']
function niveauArray(oefening) {
  if (!oefening.niveau || oefening.niveau === 'geen') return [];
  return oefening.niveau.split('+').map(n => n.trim());
}

// Laatste keuze van een oefening (0 = nog niet verbeterd)
function laasteKeuze(crData, bestandsnaam) {
  const pogingen = crData?.oefeningen?.[bestandsnaam]?.pogingen || [];
  if (pogingen.length === 0) return 0;
  return pogingen[pogingen.length - 1].keuze;
}

// Is een oefening verbeterd (minstens één poging)?
function isVerbeterd(crData, bestandsnaam) {
  return (crData?.oefeningen?.[bestandsnaam]?.pogingen?.length || 0) > 0;
}

// Gekozen niveau voor een paragraaf (opgeslagen in crData.niveaus)
function getNiveau(crData, paragraaf) {
  return crData?.niveaus?.[paragraaf] || null;
}

// ── Paragraafnummer ophalen (bv. '10.4' → '4') ───────────────
function paragraafNr(par) {
  return par.split('.')[1];
}

// ── Maximale zichtbare paragraaf bepalen ─────────────────────
// totEnMet is een string zoals '10.3'
function paragraafZichtbaar(par, totEnMet) {
  if (!totEnMet) return true;
  const parts = par.split('.');
  const limParts = totEnMet.split('.');
  if (parts[0] !== limParts[0]) return false;
  return parseInt(parts[1]) <= parseInt(limParts[1]);
}

// ── Matrix laden (eenmalig via global var H10_matrix) ─────────
let _matrixGeladen = false;
function laadMatrix() {
  return new Promise((ok, fout) => {
    if (typeof H10_matrix !== 'undefined') { ok(); return; }
    const s = document.createElement('script');
    s.src = '../hoofdstukken/H10/H10-datamatrix.js';
    s.onload  = () => { _matrixGeladen = true; ok(); };
    s.onerror = () => fout(new Error('H10-datamatrix.js kon niet geladen worden'));
    document.head.appendChild(s);
  });
}

// ── Module-niveau referenties voor herrender ─────────────────
let _renderContainer = null;
let _renderCallbacks = null;
let _renderLeerling  = null;

// ============================================================
//  RENDER — hoofdfunctie
// ============================================================
export async function render(container, leerling, code, callbacks) {
  container.innerHTML = '<p style="color:#888; font-style:italic; padding:1rem;">Correctiesleutel wordt geladen…</p>';

  // Bewaar referenties zodat _herrender() altijd opnieuw kan renderen
  _renderContainer = container;
  _renderCallbacks = callbacks;
  _renderLeerling  = leerling || null;

  try {
    await laadMatrix();
  } catch (e) {
    container.innerHTML = `<p style="color:#c62828; padding:1rem;">Fout: ${e.message}</p>`;
    return;
  }

  _herrender();
}

// ── Volledige herrender met verse data uit localStorage ───────
// Dit is de enige juiste manier om de pagina bij te werken na
// een popup-venster, want callbacks met verouderde crData zijn
// te foutgevoelig.
function _herrender() {
  const mail     = sessionStorage.getItem('wiskunde_mail');
  const versData = JSON.parse(
    localStorage.getItem('wiskunde_leerlingen') ||
    sessionStorage.getItem('wiskunde_leerlingen') ||
    '{"leerlingen":[]}'
  );
  // Altijd synchroniseren zodat de rest van de app ook actueel is
  sessionStorage.setItem('wiskunde_leerlingen', JSON.stringify(versData));

  const mailVanLeerling = _renderLeerling?.mail || mail;
  const leerling = versData.leerlingen.find(
    l => l.mail.toLowerCase() === mailVanLeerling.toLowerCase()
  ) || _renderLeerling || {};
  const crData      = leerling?.verbetersleutel?.[SLEUTEL_CODE] || { niveaus: {}, oefeningen: {} };
  // Zichtbaarheid: lees de actieve zichtbaarheidsregels die door opdrachten.html
  // in sessionStorage gezet zijn, en bereken totEnMet op basis van vandaag.
  const _zichtbaarheid = JSON.parse(sessionStorage.getItem('actieve_zichtbaarheid') || '[]');
  const _nu = new Date(); _nu.setHours(0,0,0,0);
  const _parseDatum = s => { if (!s) return null; const [d,m,y]=s.split('/').map(Number); return new Date(y,m-1,d); };
  let totEnMet = null;
  for (const r of _zichtbaarheid) {
    const v = _parseDatum(r.vanaf);
    if (v && _nu >= v) totEnMet = r.totEnMet;
  }

  _bouwPagina(_renderContainer, crData, totEnMet, leerling, _renderCallbacks);
}

// ============================================================
//  PAGINA BOUWEN
// ============================================================
function _bouwPagina(container, crData, totEnMet, leerling, callbacks) {

  // Wrapper met cursus-stijl
  container.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'pagina';
  wrap.style.cssText = 'margin: 0.5cm auto; max-width: 21cm;';
  container.appendChild(wrap);

  // Titel
  const titel = document.createElement('div');
  titel.style.cssText = `
    font-weight: bold; font-size: 12pt;
    color: var(--groen-donker, #4a7c59);
    border-bottom: 2px solid var(--groen-scheiding, #a5d6a7);
    padding-bottom: 0.2cm; margin-bottom: 0.4cm;
  `;
  titel.textContent = `${HOOFDSTUK} — ${TITEL}`;
  wrap.appendChild(titel);

  // ── Paragrafen ophalen en filteren ───────────────────────
  const paragrafen = [...new Set(H10_matrix.map(o => o.paragraaf))].sort();
  const zichtbareParagrafen = paragrafen.filter(p => paragraafZichtbaar(p, totEnMet));

  zichtbareParagrafen.forEach(par => {
    const blok = _bouwParagraaf(par, crData, leerling, callbacks);
    if (blok) wrap.appendChild(blok);
  });

  // ── Opmerkingentabellen onderaan ─────────────────────────
  const opmBlok = _bouwOpmerkingen(crData, zichtbareParagrafen, leerling);
  if (opmBlok) wrap.appendChild(opmBlok);
}

// ============================================================
//  PARAGRAAF BOUWEN
// ============================================================
function _bouwParagraaf(par, crData, leerling, callbacks) {
  const oefeningen = H10_matrix.filter(o => o.paragraaf === par);
  if (oefeningen.length === 0) return null;

  const blok = document.createElement('div');
  blok.style.cssText = 'margin-bottom: 0.5cm;';
  blok.dataset.paragraaf = par;

  // Paragraaftitel
  const ptitel = document.createElement('div');
  ptitel.style.cssText = `
    font-weight: bold; font-size: 11pt;
    color: var(--groen-donker, #4a7c59);
    border-bottom: 1.5px solid var(--groen-scheiding, #a5d6a7);
    padding-bottom: 0.15cm; margin-bottom: 0.25cm;
  `;
  ptitel.textContent = `${par} ${PARAGRAAF_NAMEN[par] || ''}`;
  blok.appendChild(ptitel);

  // Grid van rijen
  const grid = document.createElement('div');
  grid.id = `cr-grid-${par.replace('.', '-')}`;
  grid.style.cssText = 'display: flex; flex-direction: column; gap: 0.15cm;';
  grid.dataset.paragraaf = par;
  blok.appendChild(grid);

  _vulGrid(grid, par, oefeningen, crData, leerling, callbacks);
  return blok;
}

// ============================================================
//  GRID VULLEN
// ============================================================
function _vulGrid(grid, par, oefeningen, crData, leerling, callbacks) {
  grid.innerHTML = '';

  const gekozenNiveau = getNiveau(crData, par);

  // ── Onderdelen ontdek en zoeje: altijd zichtbaar ──────────
  ['ontdek', 'zoeje'].forEach(sleutel => {
    const rij = oefeningen.filter(o => ONDERDEEL_SLEUTEL[o.onderdeel] === sleutel);
    if (rij.length === 0) return;
    const icoon = sleutel === 'ontdek' ? '🔍' : '🧭';
    const rijEl = _maakRij(icoon, rij, crData, leerling, true, callbacks);
    grid.appendChild(rijEl);
  });

  // ── Hoe ver sta ik? oefeningen ───────────────────────────
  const hvsiOef = oefeningen.filter(o => {
    const s = ONDERDEEL_SLEUTEL[o.onderdeel];
    return s === 'hoever' || s === 'hoeveR';
  });

  // ── Oefeningen ───────────────────────────────────────────
  const oefeningOef = oefeningen.filter(o => ONDERDEEL_SLEUTEL[o.onderdeel] === 'oefenen');

  // ── UITZONDERING: geen HVSI-oefeningen ───────────────────
  if (hvsiOef.length === 0) {
    if (oefeningOef.length > 0) {
      const rij = _maakRijGefaseerd('🔄', oefeningOef, crData, leerling, null, callbacks);
      grid.appendChild(rij);
    }
    return;
  }

  // ── NORMAAL: HVSI aanwezig ────────────────────────────────
  const cirkelHVSI  = hvsiOef.filter(o => niveauArray(o).includes('cirkel'));
  const extraHVSI   = hvsiOef.filter(o => !niveauArray(o).includes('cirkel'));
  const heeftExtraHVSI = extraHVSI.length > 0;

  if (!gekozenNiveau) {
    // Fase 1: toon cirkel-HVSI, popup daarna
    if (cirkelHVSI.length > 0) {
      const rij = _maakRijGefaseerd('🚦', cirkelHVSI, crData, leerling,
        { par, fase: 'cirkel', heeftExtraHVSI }, callbacks);
      grid.appendChild(rij);
    }

  } else if (gekozenNiveau === 'na_cirkel') {
    // Fase 2: cirkel-HVSI + extra HVSI samen tonen, popup na de laatste
    const alleHVSI = [...cirkelHVSI, ...extraHVSI];
    if (alleHVSI.length > 0) {
      const rij = _maakRijGefaseerd('🚦', alleHVSI, crData, leerling,
        { par, fase: 'extra', heeftExtraHVSI }, callbacks);
      grid.appendChild(rij);
    }

  } else {
    // Definitief niveau: toon alle oefeningen van dat niveau samen
    const alleNiveauOef = [...hvsiOef, ...oefeningOef]
      .filter(o => niveauArray(o).includes(gekozenNiveau))
      .sort((a, b) => a.nr - b.nr);
    if (alleNiveauOef.length > 0) {
      const icoon = NIVEAU_ICOON[gekozenNiveau] || '⬤';
      const rij   = _maakRijGefaseerd(icoon, alleNiveauOef, crData, leerling, null, callbacks);
      grid.appendChild(rij);
    }
  }
}

// ============================================================
//  RIJ MAKEN (altijd klikbaar — ontdek/zoeje)
// ============================================================
function _maakRij(icoon, oefeningen, crData, leerling, klikbaar, callbacks) {
  const rijEl = document.createElement('div');
  rijEl.style.cssText = 'display: flex; align-items: center; gap: 0.2cm;';

  const icoonEl = document.createElement('div');
  icoonEl.style.cssText = `width: 1.2cm; flex-shrink: 0; text-align: right; font-size: 13px; user-select: none;`;
  icoonEl.textContent = icoon;
  rijEl.appendChild(icoonEl);

  const vakjesEl = document.createElement('div');
  vakjesEl.style.cssText = `display: flex; flex-wrap: wrap; gap: ${GAP};`;

  oefeningen.forEach(o => {
    const keuze = laasteKeuze(crData, o.bestandsnaam);
    const vakje = _maakVakje(o, keuze, klikbaar, leerling, callbacks, null);
    vakjesEl.appendChild(vakje);
  });

  rijEl.appendChild(vakjesEl);
  return rijEl;
}

// ============================================================
//  RIJ MAKEN (gefaseerd klikbaar)
// ============================================================
function _maakRijGefaseerd(icoon, oefeningen, crData, leerling, popupInfo, callbacks) {
  const rijEl = document.createElement('div');
  rijEl.style.cssText = 'display: flex; align-items: center; gap: 0.2cm;';

  const icoonEl = document.createElement('div');
  icoonEl.style.cssText = `width: 1.2cm; flex-shrink: 0; text-align: right; font-size: 13px; user-select: none;`;
  icoonEl.textContent = icoon;
  rijEl.appendChild(icoonEl);

  const vakjesEl = document.createElement('div');
  vakjesEl.style.cssText = `display: flex; flex-wrap: wrap; gap: ${GAP};`;

  oefeningen.forEach((o, idx) => {
    const keuze           = laasteKeuze(crData, o.bestandsnaam);
    const vorigeOef       = idx > 0 ? oefeningen[idx - 1] : null;
    const vorigeVerbeterd = vorigeOef ? isVerbeterd(crData, vorigeOef.bestandsnaam) : true;
    const klikbaar        = idx === 0 || vorigeVerbeterd;
    const isLaatste       = idx === oefeningen.length - 1;

    // Na de laatste oefening: popup tonen als popupInfo aanwezig is
    const naViewer = (popupInfo && isLaatste)
      ? () => _toonNiveauPopup(popupInfo, leerling, callbacks)
      : null;

    const vakje = _maakVakje(o, keuze, klikbaar, leerling, callbacks, naViewer);
    vakjesEl.appendChild(vakje);
  });

  rijEl.appendChild(vakjesEl);
  return rijEl;
}

// ============================================================
//  VAKJE MAKEN
// ============================================================
function _maakVakje(oefening, keuze, klikbaar, leerling, callbacks, naViewerSluiten) {
  const stijl = vakjeStijl(keuze);
  const vakje = document.createElement('div');
  vakje.style.cssText = `
    width: ${VAKJE}; height: ${VAKJE};
    display: flex; align-items: center; justify-content: center;
    border: 1.5px solid ${stijl.rand};
    border-radius: 2px;
    background: ${stijl.bg};
    color: ${stijl.kleur};
    font-size: 8pt; font-weight: bold;
    font-family: var(--font, Arial);
    flex-shrink: 0; box-sizing: border-box;
    transition: opacity 0.15s;
    ${klikbaar ? 'cursor: pointer;' : 'opacity: 0.4; cursor: default;'}
  `;
  vakje.textContent = oefening.nr;
  vakje.title       = klikbaar ? `Oefening ${oefening.nr}` : 'Maak eerst de vorige oefening.';
  vakje.dataset.bestandsnaam = oefening.bestandsnaam;

  if (klikbaar) {
    vakje.addEventListener('mouseenter', () => { if (klikbaar) vakje.style.opacity = '0.75'; });
    vakje.addEventListener('mouseleave', () => { vakje.style.opacity = '1'; });
    vakje.addEventListener('click', () => {
      // naViewerSluiten is enkel ingesteld voor de niveau-popup na laatste HVSI-oefening
      // In alle andere gevallen roept _openViewer zelf _herrender() aan
      _openViewer(oefening, leerling, naViewerSluiten);
    });
  }

  return vakje;
}

// ============================================================
//  VIEWER OPENEN
// ============================================================
function _openViewer(oefening, leerling, naSluitenCb) {
  const pNr  = paragraafNr(oefening.paragraaf);
  const url  = new URL('correctiesleutel-viewer.html', window.location.href);
  url.searchParams.set('bestandsnaam', oefening.bestandsnaam);
  url.searchParams.set('paragraaf',    oefening.paragraaf);
  url.searchParams.set('nr',           oefening.nr);
  url.searchParams.set('paragraafnr',  pNr);
  url.searchParams.set('sleutelCode',  SLEUTEL_CODE);

  const popup = window.open(url.toString(), 'oefening-viewer');

  // Detecteer sluiten van popup
  // Na sluiten: herrender de volledige pagina met verse data.
  // Dit is robuuster dan callbacks met verouderde crData.
  const check = setInterval(() => {
    if (popup && popup.closed) {
      clearInterval(check);
      // Altijd eerst synchroniseren vanuit localStorage
      const versData = JSON.parse(
        localStorage.getItem('wiskunde_leerlingen') ||
        sessionStorage.getItem('wiskunde_leerlingen') ||
        '{"leerlingen":[]}'
      );
      sessionStorage.setItem('wiskunde_leerlingen', JSON.stringify(versData));
      if (naSluitenCb) {
        naSluitenCb();
      } else {
        _herrender();
      }
    }
  }, 300);
}

// ============================================================
//  NIVEAU POPUP
// ============================================================
function _toonNiveauPopup(popupInfo, leerling, callbacks) {
  const { par, fase, heeftExtraHVSI } = popupInfo;

  // Bepaal keuzeteksten op basis van fase
  let keuze1Tekst, keuze2Tekst, niveau1, niveau2;
  if (fase === 'cirkel') {
    keuze1Tekst = 'Ik heb nog niet alles begrepen en ga verder met de opdrachten met een ⬤.';
    niveau1     = 'cirkel';
    if (heeftExtraHVSI) {
      keuze2Tekst = 'Alles is in orde. Ik maak de volgende opdrachten.';
      niveau2     = 'na_cirkel'; // tussentijds: ga naar extra HVSI
    } else {
      keuze2Tekst = 'Alles is in orde. Ik maak de opdrachten met een ⏹.';
      niveau2     = 'vierkant';
    }
  } else { // fase === 'extra'
    keuze1Tekst = 'Ik heb nog niet alles begrepen en ga verder met de opdrachten met een ⏹.';
    keuze2Tekst = 'Alles is in orde. Ik maak de opdrachten met een ⬢.';
    niveau1     = 'vierkant';
    niveau2     = 'zeshoek';
  }

  // Overlay opbouwen
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.45);
    z-index: 999; display: flex; align-items: center; justify-content: center;
  `;

  const popup = document.createElement('div');
  popup.style.cssText = `
    background: white; border-radius: 10px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.2);
    padding: 1.5rem 1.8rem; max-width: 420px; width: 90%;
    font-family: var(--font, Arial); font-size: 10pt;
  `;
  popup.innerHTML = `
    <p style="font-weight:bold; font-size:11pt; margin-bottom:1rem;
       color:var(--groen-donker,#4a7c59);">Kies je volgende stap.</p>
    <label style="display:flex; align-items:flex-start; gap:8px;
       margin-bottom:10px; cursor:pointer; line-height:1.4;">
      <input type="radio" name="niv" value="1"
        style="margin-top:3px; cursor:pointer; accent-color:var(--groen-donker,#4a7c59);">
      <span>${keuze1Tekst}</span>
    </label>
    <label style="display:flex; align-items:flex-start; gap:8px;
       margin-bottom:1.2rem; cursor:pointer; line-height:1.4;">
      <input type="radio" name="niv" value="2"
        style="margin-top:3px; cursor:pointer; accent-color:var(--groen-donker,#4a7c59);">
      <span>${keuze2Tekst}</span>
    </label>
    <div style="text-align:right;">
      <button id="niv-ok" disabled style="
        background:var(--groen-donker,#4a7c59); color:white;
        border:none; border-radius:4px; padding:7px 20px;
        font-size:10pt; font-family:var(--font,Arial);
        cursor:pointer; opacity:0.4;">Bevestigen</button>
    </div>
  `;

  const btnOk = popup.querySelector('#niv-ok');
  popup.querySelectorAll('input[type="radio"]').forEach(r => {
    r.addEventListener('change', () => {
      btnOk.disabled = false;
      btnOk.style.opacity = '1';
    });
  });

  btnOk.addEventListener('click', async () => {
    const keuzeVal = popup.querySelector('input[name="niv"]:checked')?.value;
    overlay.remove();
    const gekozenNiveau = keuzeVal === '1' ? niveau1 : niveau2;
    await _slaGekozenNiveauOp(par, gekozenNiveau, leerling);
    _herrender();
    if (callbacks?.markeerGewijzigd) callbacks.markeerGewijzigd();
  });

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

// ── Gekozen niveau opslaan ────────────────────────────────────
async function _slaGekozenNiveauOp(par, niveau, leerling) {
  const { saveLeerlingen } = await import('../js/firebase.js');
  const mail        = sessionStorage.getItem('wiskunde_mail');
  // Lees altijd uit localStorage want viewer heeft daar naartoe geschreven
  const dataLL = JSON.parse(
    localStorage.getItem('wiskunde_leerlingen') ||
    sessionStorage.getItem('wiskunde_leerlingen') ||
    '{"leerlingen":[]}'
  );
  const idx         = dataLL.leerlingen.findIndex(l => l.mail.toLowerCase() === mail.toLowerCase());
  if (idx < 0) return;

  if (!dataLL.leerlingen[idx].verbetersleutel)               dataLL.leerlingen[idx].verbetersleutel               = {};
  if (!dataLL.leerlingen[idx].verbetersleutel[SLEUTEL_CODE]) dataLL.leerlingen[idx].verbetersleutel[SLEUTEL_CODE] = { niveaus: {}, oefeningen: {} };
  if (!dataLL.leerlingen[idx].verbetersleutel[SLEUTEL_CODE].niveaus) dataLL.leerlingen[idx].verbetersleutel[SLEUTEL_CODE].niveaus = {};

  dataLL.leerlingen[idx].verbetersleutel[SLEUTEL_CODE].niveaus[par] = niveau;

  // Beide opslaan zodat popup-vensters altijd de meest recente data zien
  sessionStorage.setItem('wiskunde_leerlingen', JSON.stringify(dataLL));
  localStorage.setItem('wiskunde_leerlingen',   JSON.stringify(dataLL));
  await saveLeerlingen(dataLL);
}

// _herlaadGrid verwijderd — gebruik _herrender()

// ============================================================
//  OPMERKINGENTABELLEN
// ============================================================
function _bouwOpmerkingen(crData, zichtbareParagrafen, leerling) {
  const wrap = document.createElement('div');
  wrap.id    = 'cr-opmerkingen';
  wrap.style.cssText = 'margin-top: 0.6cm;';

  // Verzamel alle oefeningen met opmerkingen
  const oefMetKeuze2 = [];
  const oefMetKeuze3 = [];

  zichtbareParagrafen.forEach(par => {
    H10_matrix.filter(o => o.paragraaf === par).forEach(o => {
      const pogingen = crData?.oefeningen?.[o.bestandsnaam]?.pogingen || [];
      if (pogingen.some(p => p.keuze === 2 && p.opmerking)) oefMetKeuze2.push(o);
      if (pogingen.some(p => p.keuze === 3 && p.opmerking)) oefMetKeuze3.push(o);
    });
  });

  if (oefMetKeuze2.length === 0 && oefMetKeuze3.length === 0) return null;

  const titelEl = document.createElement('div');
  titelEl.style.cssText = `
    font-weight: bold; font-size: 11pt;
    color: var(--tekst, #1a1a1a);
    border-bottom: 1.5px solid var(--groen-scheiding, #a5d6a7);
    padding-bottom: 0.15cm; margin-bottom: 0.25cm;
  `;
  titelEl.textContent = 'Mijn opmerkingen.';
  wrap.appendChild(titelEl);

  if (oefMetKeuze2.length > 0) {
    wrap.appendChild(_maakOpmTabel(oefMetKeuze2, crData, 'oranje', 2, leerling));
  }
  if (oefMetKeuze3.length > 0) {
    wrap.appendChild(_maakOpmTabel(oefMetKeuze3, crData, 'lila', 3, leerling));
  }

  return wrap;
}

function _maakOpmTabel(oefeningen, crData, kleur, keuzeFilter, leerling) {
  const isOranje      = kleur === 'oranje';
  const achtergronden = isOranje ? ['#fff3e0', '#ffe0b2'] : ['#f3e5f5', '#e1bee7'];
  const randKleur     = isOranje
    ? 'var(--oranje-rand, #e65100)'
    : 'var(--lila-rand, #7b1fa2)';
  const metOpgelost   = !isOranje; // enkel lila (keuze 3) heeft opgelost-vinkje

  const wrapper = document.createElement('div');
  wrapper.style.marginBottom = '0.3cm';

  const tbl = document.createElement('table');
  tbl.style.cssText = `
    width: 100%; border-collapse: collapse;
    font-family: var(--font, Arial); font-size: 10pt; margin-top: 0.15cm;
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
      padding: 5px 10px; color: white; text-align: left;
      font-size: 10pt; font-weight: bold;
      ${i === 0 ? 'width: 50px;' : ''}
      ${metOpgelost && i === 2 ? 'width: 70px; text-align: center;' : ''}
    `;
    trH.appendChild(th);
  });
  thead.appendChild(trH);
  tbl.appendChild(thead);

  const tbody = document.createElement('tbody');

  oefeningen.forEach((o, idx) => {
    const allePogingen = crData?.oefeningen?.[o.bestandsnaam]?.pogingen || [];
    const pogingen     = allePogingen.filter(p => p.keuze === keuzeFilter && p.opmerking);
    if (pogingen.length === 0) return;

    // Opgelost = meest recente poging van keuze 3 heeft opgelost: true
    const opgelost = allePogingen
      .filter(p => p.keuze === keuzeFilter)
      .slice(-1)[0]?.opgelost === true;

    const tr = document.createElement('tr');
    tr.style.background = achtergronden[idx % 2];
    if (opgelost) tr.style.opacity = '0.6';

    // Kolom Nr.
    const tdNr = document.createElement('td');
    tdNr.style.cssText = `padding:5px 10px; font-weight:bold; color:#1a1a1a;
      border-bottom:1px solid ${randKleur}30; vertical-align:top;`;
    tdNr.textContent = o.nr;
    tr.appendChild(tdNr);

    // Kolom Opmerking
    const tdOpm = document.createElement('td');
    tdOpm.style.cssText = `padding:5px 10px; color:#1a1a1a;
      border-bottom:1px solid ${randKleur}30;
      ${opgelost ? 'text-decoration: line-through; opacity: 0.7;' : ''}`;
    pogingen.forEach(p => {
      const regel = document.createElement('div');
      regel.style.cssText = 'padding-left: 1em; text-indent: -1em; margin-bottom: 3px;';
      regel.textContent = '• ' + p.opmerking;
      tdOpm.appendChild(regel);
    });
    tr.appendChild(tdOpm);

    // Kolom Opgelost (enkel voor lila/keuze 3)
    if (metOpgelost) {
      const tdOpl = document.createElement('td');
      tdOpl.style.cssText = `padding:5px 10px; text-align:center;
        border-bottom:1px solid ${randKleur}30; vertical-align:middle;`;

      const cb = document.createElement('input');
      cb.type    = 'checkbox';
      cb.checked = opgelost;
      cb.style.cssText = 'cursor:pointer; accent-color: var(--lila-rand,#7b1fa2); width:16px; height:16px;';

      cb.addEventListener('change', async () => {
        // Zet opgelost op de meest recente poging van keuze 3
        const { saveLeerlingen } = await import('../js/firebase.js');
        const mailNu   = sessionStorage.getItem('wiskunde_mail');
        const dataLL   = JSON.parse(localStorage.getItem('wiskunde_leerlingen')
                       || sessionStorage.getItem('wiskunde_leerlingen')
                       || '{"leerlingen":[]}');
        const llIdx    = dataLL.leerlingen.findIndex(l => l.mail.toLowerCase() === mailNu.toLowerCase());
        if (llIdx < 0) return;

        const ll = dataLL.leerlingen[llIdx];
        const pogs = ll?.verbetersleutel?.[SLEUTEL_CODE]?.oefeningen?.[o.bestandsnaam]?.pogingen;
        if (!pogs) return;

        // Vind de laatste poging met keuze 3 en zet opgelost
        for (let i = pogs.length - 1; i >= 0; i--) {
          if (pogs[i].keuze === keuzeFilter) {
            pogs[i].opgelost = cb.checked;
            break;
          }
        }

        dataLL.leerlingen[llIdx] = ll;
        localStorage.setItem('wiskunde_leerlingen',   JSON.stringify(dataLL));
        sessionStorage.setItem('wiskunde_leerlingen', JSON.stringify(dataLL));
        await saveLeerlingen(dataLL);

        // Visuele feedback
        tr.style.opacity      = cb.checked ? '0.6' : '1';
        tdOpm.style.textDecoration = cb.checked ? 'line-through' : '';
        tdOpm.style.opacity   = cb.checked ? '0.7' : '1';
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

// ============================================================
//  VOORUITGANG BEREKENEN (voor dashboard-knop)
//  Exporteer dit zodat dashboard.js het kan aanroepen
// ============================================================
export function berekenVooruitgang(leerling, sleutelItem) {
  if (!sleutelItem) return 'nog-starten';

  const crData   = leerling?.verbetersleutel?.[SLEUTEL_CODE] || { niveaus: {}, oefeningen: {} };
  const totEnMet = sleutelItem?.totEnMet || null;

  const paragrafen = [...new Set(H10_matrix.map(o => o.paragraaf))].sort()
    .filter(p => paragraafZichtbaar(p, totEnMet));

  let totaalZichtbaar = 0;
  let totaalVerbeterd = 0;

  paragrafen.forEach(par => {
    const gekozenNiveau = getNiveau(crData, par);
    const oefeningen    = H10_matrix.filter(o => o.paragraaf === par);
    const hvsiOef       = oefeningen.filter(o => {
      const s = ONDERDEEL_SLEUTEL[o.onderdeel];
      return s === 'hoever' || s === 'hoeveR';
    });
    const oefeningOef = oefeningen.filter(o => ONDERDEEL_SLEUTEL[o.onderdeel] === 'oefenen');

    let niveauOef = [];
    if (hvsiOef.length === 0) {
      niveauOef = oefeningOef;
    } else if (gekozenNiveau) {
      niveauOef = [...hvsiOef, ...oefeningOef].filter(o => niveauArray(o).includes(gekozenNiveau));
    } else {
      // Niveau nog niet gekozen: alleen cirkel-HVSI
      niveauOef = hvsiOef.filter(o => niveauArray(o).includes('cirkel'));
    }

    totaalZichtbaar += niveauOef.length;
    totaalVerbeterd += niveauOef.filter(o => isVerbeterd(crData, o.bestandsnaam)).length;
  });

  if (totaalVerbeterd === 0)                         return 'nog-starten';
  if (totaalVerbeterd >= totaalZichtbaar && totaalZichtbaar > 0) return 'klaar';
  return 'bezig';
}