// ============================================================
// DOELEN-VOLGORDE.JS
// Logica voor knop "Volgorde" in het doelen-tabblad.
//
// Werking:
//   1) Kies een hoofdstuk (H)
//   2) Blok 1: doelen met plaatscode H.x — sorteerbaar, toepasbaar
//   3) Blok 2: doelen met referentie H.y maar zonder plaatscode H.x
//              — naar blok 1 verplaatsbaar
//
// Opslaan gebeurt enkel bij "Toepassen" of "Matrix downloaden".
// ============================================================

import { laadAlleDoelen, updatePlaatscode, pasDoelaanPas, resetDoelenCache } from './doelen-firebase.js';

// ── Hoofdstukken ──────────────────────────────────────────────
// !! Voeg hier nieuwe hoofdstukken toe indien nodig !!
const HOOFDSTUKKEN = [1,2,3,4,5,6,7,8,9,10,11,12,100];

// ── State ─────────────────────────────────────────────────────
let _huidigH    = null;   // gekozen hoofdstuk (number)
let _blok1      = [];     // doelen in blok 1 (gesorteerd op x)
let _gewijzigd  = false;

// ── Bouw de volgorde-weergave ─────────────────────────────────
export function bouwVolgorde(container, typeFilter = null) {
  container.innerHTML = '';
  _gewijzigd = false;

  // Waarschuwing bij verlaten
  window._doelenVolgordeGewijzigd = false;

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:flex;flex-direction:column;gap:16px;';

  // ── Hoofdstuk dropdown ────────────────────────────────────
  const selectWrapper = document.createElement('div');
  selectWrapper.style.cssText = 'display:flex;align-items:center;gap:10px;';

  const label = document.createElement('label');
  label.textContent = 'Hoofdstuk:';
  label.style.fontWeight = '600';

  const select = document.createElement('select');
  select.style.cssText = selectStijl();

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Kies hier het hoofdstuk.';
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  HOOFDSTUKKEN.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h;
    opt.textContent = `Hoofdstuk ${h}`;
    select.appendChild(opt);
  });

  selectWrapper.appendChild(label);
  selectWrapper.appendChild(select);
  wrapper.appendChild(selectWrapper);

  // ── Blokken container ─────────────────────────────────────
  const blokkenDiv = document.createElement('div');
  blokkenDiv.id = 'volgorde-blokken';
  wrapper.appendChild(blokkenDiv);

  container.appendChild(wrapper);

  select.addEventListener('change', async () => {
    _huidigH = parseInt(select.value);
    await laadEnToonBlokken(blokkenDiv, typeFilter);
  });
}

// ── Laad en toon blok 1 en blok 2 ────────────────────────────
async function laadEnToonBlokken(container, typeFilter = null) {
  container.innerHTML = '<p style="color:#888;font-style:italic;">Laden…</p>';

  const doelen = await laadAlleDoelen();
  const gefilterd = typeFilter ? doelen.filter(d => d.type === typeFilter) : doelen;
  const H      = _huidigH;
  const prefix = `${H}.`;

  // Blok 1: heeft plaatscode die start met H.
  const metPlaatscode = gefilterd
    .filter(d => (d.plaatscode || []).some(c => c.startsWith(prefix)))
    .map(d => {
      const code = (d.plaatscode || []).find(c => c.startsWith(prefix));
      const x    = parseFloat(code.slice(prefix.length)) || 0;
      return { ...d, _x: x, _hCode: code };
    })
    .sort((a, b) => a._x - b._x);

  _blok1 = metPlaatscode;

  // Blok 2: heeft referentie die start met H. maar geen plaatscode H.
  const blok2 = gefilterd
    .filter(d => !(d.plaatscode || []).some(c => c.startsWith(prefix)))
    .filter(d =>  (d.referenties || []).some(r => r.startsWith(prefix)))
    .map(d => {
      const ref = (d.referenties || []).find(r => r.startsWith(prefix));
      const y   = parseFloat(ref.slice(prefix.length)) || 0;
      return { ...d, _y: y };
    })
    .sort((a, b) => a._y - b._y);

  container.innerHTML = '';

  // ── Render blok 1 ────────────────────────────────────────
  container.appendChild(maakBlokTitel(`Blok 1 — Doelen met plaatscode ${H}.x`));

  const acties1 = document.createElement('div');
  acties1.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';

  const btnToepassen = maakKnop('✔ Toepassen', 'primair');
  btnToepassen.disabled = true;
  btnToepassen.addEventListener('click', () => pasVolgordeToepassen(container));

  const btnMatrix = maakKnop('⬇ Matrix downloaden', 'secundair');
  btnMatrix.addEventListener('click', () => downloadMatrix(typeFilter));

  acties1.appendChild(btnToepassen);
  acties1.appendChild(btnMatrix);
  container.appendChild(acties1);

  const lijstBlok1 = document.createElement('div');
  lijstBlok1.id = 'blok1-lijst';
  lijstBlok1.style.cssText = 'display:flex;flex-direction:column;gap:4px;';
  container.appendChild(lijstBlok1);

  function hertekenBlok1() {
    lijstBlok1.innerHTML = '';
    if (_blok1.length === 0) {
      const leeg = document.createElement('p');
      leeg.style.cssText = 'color:#888;font-style:italic;padding:8px 0;';
      leeg.textContent = 'Geen doelen met deze plaatscode.';
      lijstBlok1.appendChild(leeg);
      return;
    }
    _blok1.forEach((doel, idx) => {
      const rij = document.createElement('div');
      rij.style.cssText = `
        display:flex;align-items:center;gap:8px;
        padding:8px 10px;background:white;
        border:1px solid #a5d6a7;border-radius:4px;
      `;

      // Pijltjes
      const btnOmhoog = maakPijlKnop('▲');
      btnOmhoog.disabled = idx === 0;
      btnOmhoog.addEventListener('click', () => {
        [_blok1[idx - 1], _blok1[idx]] = [_blok1[idx], _blok1[idx - 1]];
        markeerGewijzigd(btnToepassen);
        hertekenBlok1();
      });

      const btnOmlaag = maakPijlKnop('▼');
      btnOmlaag.disabled = idx === _blok1.length - 1;
      btnOmlaag.addEventListener('click', () => {
        [_blok1[idx], _blok1[idx + 1]] = [_blok1[idx + 1], _blok1[idx]];
        markeerGewijzigd(btnToepassen);
        hertekenBlok1();
      });

      const nrSpan = document.createElement('span');
      nrSpan.style.cssText = 'min-width:2em;font-weight:700;color:#4a7c59;';
      nrSpan.textContent = idx + 1;

      const codeSpan = document.createElement('span');
      codeSpan.style.cssText = 'font-family:Consolas,monospace;font-size:11px;color:#888;min-width:3em;';
      codeSpan.textContent = doel._hCode || '';

      const tekstSpan = document.createElement('span');
      tekstSpan.style.flex = '1';
      tekstSpan.textContent = doel.tekst || '(geen tekst)';

      rij.appendChild(btnOmhoog);
      rij.appendChild(btnOmlaag);
      rij.appendChild(nrSpan);
      rij.appendChild(codeSpan);
      rij.appendChild(tekstSpan);
      lijstBlok1.appendChild(rij);
    });
  }

  hertekenBlok1();

  // ── Render blok 2 ────────────────────────────────────────
  container.appendChild(maakBlokTitel(`Blok 2 — Doelen met referentie ${H}.y (nog niet in blok 1)`));

  if (blok2.length === 0) {
    const leeg = document.createElement('p');
    leeg.style.cssText = 'color:#888;font-style:italic;padding:8px 0;';
    leeg.textContent = 'Geen doelen met deze referentie buiten blok 1.';
    container.appendChild(leeg);
  } else {
    const lijstBlok2 = document.createElement('div');
    lijstBlok2.style.cssText = 'display:flex;flex-direction:column;gap:4px;';

    blok2.forEach(doel => {
      const rij = document.createElement('div');
      rij.style.cssText = `
        display:flex;align-items:center;gap:8px;
        padding:8px 10px;background:white;
        border:1px solid #e0e0e0;border-radius:4px;
      `;

      const refSpan = document.createElement('span');
      refSpan.style.cssText = 'font-family:Consolas,monospace;font-size:11px;color:#888;min-width:3em;';
      refSpan.textContent = `${H}.${doel._y}`;

      const tekstSpan = document.createElement('span');
      tekstSpan.style.flex = '1';
      tekstSpan.textContent = doel.tekst || '(geen tekst)';

      const btnNaarBlok1 = maakKnop('→ Naar blok 1', 'secundair');
      btnNaarBlok1.style.padding = '3px 8px';
      btnNaarBlok1.style.fontSize = '11px';
      btnNaarBlok1.addEventListener('click', () => {
        // Voeg toe aan blok 1 met x = volgende nummer
        const nieuweX = _blok1.length + 1;
        const nieuweCode = `${H}.${nieuweX}`;
        _blok1.push({ ...doel, _x: nieuweX, _hCode: nieuweCode });
        markeerGewijzigd(btnToepassen);
        hertekenBlok1();
        // Verberg rij in blok 2
        rij.style.display = 'none';
      });

      rij.appendChild(refSpan);
      rij.appendChild(tekstSpan);
      rij.appendChild(btnNaarBlok1);
      lijstBlok2.appendChild(rij);
    });

    container.appendChild(lijstBlok2);
  }
}

// ── Toepassen: plaatscodes opslaan in Firestore ───────────────
async function pasVolgordeToepassen(container) {
  const H = _huidigH;
  const laadEl = document.createElement('p');
  laadEl.style.cssText = 'color:#888;font-style:italic;margin-top:8px;';
  laadEl.textContent = 'Opslaan…';
  container.appendChild(laadEl);

  for (let i = 0; i < _blok1.length; i++) {
    const doel = _blok1[i];
    const xNieuw = i + 1;
    await updatePlaatscode(doel.id, H, xNieuw);
    _blok1[i]._x    = xNieuw;
    _blok1[i]._hCode = `${H}.${xNieuw}`;
  }

  resetDoelenCache();
  _gewijzigd = false;
  window._doelenVolgordeGewijzigd = false;

  laadEl.textContent = '✔ Opgeslagen.';
  laadEl.style.color = '#4a7c59';
  setTimeout(() => laadEl.remove(), 2000);

  // Knop toepassen terug uitschakelen
  const btnToepassen = container.querySelector('button');
  if (btnToepassen) btnToepassen.disabled = true;
}

// ── Matrix downloaden ─────────────────────────────────────────
async function downloadMatrix(typeFilter = null) {
  // Eerst toepassen (opslaan) als er wijzigingen zijn
  if (_gewijzigd) {
    const blokDiv = document.getElementById('volgorde-blokken');
    if (blokDiv) await pasVolgordeToepassen(blokDiv);
  }

  const H      = _huidigH;
  const prefix = `${H}.`;

  const regels = _blok1.map((doel, idx) => {
    const x = idx + 1;
    return (
      `  { id: '${doel.id}', tekst: ${JSON.stringify(doel.tekst)}, ` +
      `type: '${doel.type || ''}', plaatscode: '${H}.${x}', ` +
      `leerplandoelcodes: ${JSON.stringify(doel.leerplandoelcodes || [])}, ` +
      `referenties: ${JSON.stringify(doel.referenties || [])}, ` +
      `evalueerbaarheid: '${doel.evalueerbaarheid || 'nee'}', ` +
      `scores: ${JSON.stringify(doel.scores || '')} }`
    );
  });

  const inhoud =
    `// Doelen matrix H${H} — gegenereerd op ${new Date().toLocaleDateString('nl-BE')}\n` +
    `var H${H}_${typeFilter ? typeFilter : 'doelen'} = [\n` +
    regels.join(',\n') +
    `\n];\n`;

  const blob = new Blob([inhoud], { type: 'text/javascript;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = typeFilter ? `H${H}-${typeFilter}-matrix.js` : `H${H}-doelen-matrix.js`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Hulpfuncties ──────────────────────────────────────────────
function markeerGewijzigd(btnToepassen) {
  _gewijzigd = true;
  window._doelenVolgordeGewijzigd = true;
  if (btnToepassen) btnToepassen.disabled = false;
}

function maakBlokTitel(tekst) {
  const el = document.createElement('h3');
  el.textContent = tekst;
  el.style.cssText = `
    font-size:13px;font-weight:700;color:#4a7c59;
    border-bottom:2px solid #a5d6a7;padding-bottom:4px;
    margin:8px 0 6px;
  `;
  return el;
}

function maakKnop(tekst, stijl) {
  const btn = document.createElement('button');
  btn.textContent = tekst;
  btn.style.cssText = stijl === 'primair'
    ? 'padding:5px 14px;font-size:12px;background:#4a7c59;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600;'
    : 'padding:5px 14px;font-size:12px;background:white;color:#4a7c59;border:1.5px solid #4a7c59;border-radius:4px;cursor:pointer;font-weight:600;';
  return btn;
}

function maakPijlKnop(symbool) {
  const btn = document.createElement('button');
  btn.textContent = symbool;
  btn.style.cssText = `
    padding:2px 6px;font-size:11px;background:white;
    border:1px solid #a5d6a7;border-radius:3px;cursor:pointer;
    color:#4a7c59;line-height:1;
  `;
  btn.onmouseenter = () => { if (!btn.disabled) btn.style.background = '#e8f5e9'; };
  btn.onmouseleave = () => { btn.style.background = 'white'; };
  return btn;
}

function selectStijl() {
  return `
    padding:5px 10px;font-size:13px;
    border:1px solid #a5d6a7;border-radius:4px;
    font-family:inherit;outline:none;background:white;
  `;
}
