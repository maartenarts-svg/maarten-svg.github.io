// ============================================================
// DOELEN-UPLOADEN.JS
// Logica voor knop "Uploaden" in het doelen-tabblad.
//
// CSV-formaat (puntkomma als scheidingsteken, UTF-8 BOM):
//   tekst ; type ; evalueerbaarheid ; scores ;
//   leerplandoelcodes (|) ; referenties (|) ; plaatscode (|)
//
// Arrays worden gescheiden door | in de CSV.
// Scores: "A+:...###A:...###B:...###C:..."
//
// Samenvoeglogica: als tekst al bestaat → samenvoegen (zie doelen-firebase.js)
// ============================================================

import { slaaDoel, resetDoelenCache } from './doelen-firebase.js';

// ── CSV sjabloon ──────────────────────────────────────────────
const KOLOMMEN = [
  'tekst',
  'type',
  'evalueerbaarheid',
  'scores',
  'leerplandoelcodes',
  'referenties',
  'plaatscode',
];

// ── Bouw de upload-weergave ───────────────────────────────────
export function bouwUploaden(container) {
  container.innerHTML = '';

  const titel = maakSectietitel('Doelen uploaden via CSV');
  container.appendChild(titel);

  // ── Info ──────────────────────────────────────────────────
  const info = document.createElement('p');
  info.style.cssText = 'font-size:12px;color:#555;margin-bottom:12px;line-height:1.5;';
  info.innerHTML =
    'Upload een CSV-bestand met doelen. Arrays (leerplandoelcodes, referenties, plaatscode) ' +
    'worden gescheiden door <code>|</code>. ' +
    'Scores worden ingevoerd als <code>A+:tekst###A:tekst###B:tekst###C:tekst</code>.<br>' +
    'Als een doel met dezelfde tekst al bestaat, worden de gegevens samengevoegd.';
  container.appendChild(info);

  // ── Sjabloon downloaden ───────────────────────────────────
  const btnSjabloon = document.createElement('button');
  btnSjabloon.textContent = '⬇ Download CSV-sjabloon';
  btnSjabloon.style.cssText = knopStijl('secundair') + 'margin-bottom:16px;';
  btnSjabloon.addEventListener('click', downloadSjabloon);
  container.appendChild(btnSjabloon);

  // ── Upload zone ───────────────────────────────────────────
  const uploadZone = document.createElement('div');
  uploadZone.style.cssText = `
    border:2px dashed #a5d6a7;border-radius:6px;
    padding:30px;text-align:center;cursor:pointer;
    transition:all .2s;color:#555;margin-bottom:12px;
  `;
  uploadZone.innerHTML = `
    <div style="font-size:28px;margin-bottom:8px;">📄</div>
    <div style="font-size:13px;">Klik of sleep een CSV-bestand hier</div>
    <div style="font-size:11px;color:#888;margin-top:4px;">Alleen .csv bestanden</div>
  `;

  const fileInput = document.createElement('input');
  fileInput.type   = 'file';
  fileInput.accept = '.csv';
  fileInput.style.display = 'none';
  uploadZone.appendChild(fileInput);

  uploadZone.addEventListener('click', () => fileInput.click());
  uploadZone.addEventListener('dragover', e => {
    e.preventDefault();
    uploadZone.style.borderColor = '#4a7c59';
    uploadZone.style.background  = '#e8f5e9';
  });
  uploadZone.addEventListener('dragleave', () => {
    uploadZone.style.borderColor = '#a5d6a7';
    uploadZone.style.background  = '';
  });
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.style.borderColor = '#a5d6a7';
    uploadZone.style.background  = '';
    const bestand = e.dataTransfer.files[0];
    if (bestand) verwerkBestand(bestand, resultaatDiv);
  });
  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) verwerkBestand(fileInput.files[0], resultaatDiv);
  });

  container.appendChild(uploadZone);

  // ── Resultaat zone ────────────────────────────────────────
  const resultaatDiv = document.createElement('div');
  resultaatDiv.id = 'upload-resultaat';
  container.appendChild(resultaatDiv);
}

// ── CSV verwerken ─────────────────────────────────────────────
async function verwerkBestand(bestand, resultaatDiv) {
  if (!bestand.name.endsWith('.csv')) {
    toonResultaat(resultaatDiv, '✘ Kies een .csv bestand.', 'fout');
    return;
  }

  resultaatDiv.innerHTML = '<p style="color:#888;font-style:italic;">Verwerken…</p>';

  const tekst = await bestand.text();
  const rijen = parseerCSV(tekst);

  if (rijen.length === 0) {
    toonResultaat(resultaatDiv, '✘ Geen geldige rijen gevonden.', 'fout');
    return;
  }

  let toegevoegd = 0;
  let bijgewerkt = 0;
  let fout       = 0;

  for (const rij of rijen) {
    if (!rij.tekst?.trim()) continue;

    const data = {
      tekst:             rij.tekst.trim(),
      type:              rij.type?.trim()             || 'voorkennis',
      evalueerbaarheid:  rij.evalueerbaarheid?.trim() || 'nee',
      scores:            rij.scores?.trim()           || '',
      leerplandoelcodes: splitArray(rij.leerplandoelcodes),
      referenties:       splitArray(rij.referenties),
      plaatscode:        splitArray(rij.plaatscode),
    };

    const resultaat = await slaaDoel(data);
    if (!resultaat)        fout++;
    else if (resultaat.actie === 'bijgewerkt') bijgewerkt++;
    else                   toegevoegd++;
  }

  resetDoelenCache();

  const bericht =
    `✔ Verwerkt: ${toegevoegd} toegevoegd, ${bijgewerkt} samengevoegd` +
    (fout > 0 ? `, ${fout} mislukt.` : '.');
  toonResultaat(resultaatDiv, bericht, fout > 0 ? 'waarschuwing' : 'ok');
}

// ── CSV parseren ──────────────────────────────────────────────
// Verwacht puntkomma als scheidingsteken, eerste rij = kolomnamen
function parseerCSV(tekst) {
  // BOM verwijderen
  const schoon = tekst.replace(/^\uFEFF/, '');
  const regels  = schoon.split(/\r?\n/).filter(r => r.trim());
  if (regels.length < 2) return [];

  const scheidingsteken = regels[0].includes(';') ? ';' : ',';
  const koppen = regels[0].split(scheidingsteken).map(k => k.trim().toLowerCase());
  const rijen  = [];

  for (let i = 1; i < regels.length; i++) {
    const cellen = regels[i].split(scheidingsteken);
    const rij    = {};
    koppen.forEach((k, j) => {
      rij[k] = (cellen[j] || '').trim().replace(/^"|"$/g, '');
    });
    rijen.push(rij);
  }

  return rijen;
}

function splitArray(str) {
  if (!str) return [];
  return str.split('|').map(s => s.trim()).filter(Boolean);
}

// ── Sjabloon downloaden ───────────────────────────────────────
function downloadSjabloon() {
  const header  = KOLOMMEN.join(';');
  const voorbeeld = [
    '"Ik kan optellen"',
    '"voorkennis"',
    '"ja"',
    '"A+:Geen fouten###A:Enkele fouten###B:Veel fouten###C:Nog niet"',
    '"6.3.5|BG6.2"',
    '"10.1|7.0"',
    '"10.1"',
  ].join(';');

  const inhoud = '\uFEFF' + header + '\n' + voorbeeld + '\n';
  const blob   = new Blob([inhoud], { type: 'text/csv;charset=utf-8;' });
  const url    = URL.createObjectURL(blob);
  const a      = document.createElement('a');
  a.href = url;
  a.download = 'doelen-sjabloon.csv';
  a.click();
  URL.revokeObjectURL(url);
}

// ── Hulpfuncties ──────────────────────────────────────────────
function maakSectietitel(tekst) {
  const el = document.createElement('h3');
  el.textContent = tekst;
  el.style.cssText = 'font-size:14px;font-weight:700;color:#4a7c59;margin-bottom:8px;';
  return el;
}

function knopStijl(stijl) {
  return stijl === 'primair'
    ? 'padding:6px 16px;font-size:12px;background:#4a7c59;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600;'
    : 'padding:6px 16px;font-size:12px;background:white;color:#4a7c59;border:1.5px solid #4a7c59;border-radius:4px;cursor:pointer;font-weight:600;';
}

function toonResultaat(container, tekst, type) {
  container.innerHTML = '';
  const el = document.createElement('p');
  el.textContent = tekst;
  el.style.cssText = `
    font-size:12px;padding:8px 12px;border-radius:4px;
    background:${type==='ok'?'#e8f5e9':type==='waarschuwing'?'#fff8e1':'#fdecea'};
    color:${type==='ok'?'#2e7d32':type==='waarschuwing'?'#e65100':'#c0392b'};
    border:1px solid ${type==='ok'?'#a5d6a7':type==='waarschuwing'?'#ffe0b2':'#ef9a9a'};
  `;
  container.appendChild(el);
}
