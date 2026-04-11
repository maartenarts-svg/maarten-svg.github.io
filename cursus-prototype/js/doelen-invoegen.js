// ============================================================
// DOELEN-INVOEGEN.JS
// Logica voor knoppen "Invoegen" en "Aanpassen" in het doelen-tabblad.
//
// Invoegen : leeg formulier, na opslaan velden leegmaken
// Aanpassen: filter + zoek, kies doel, formulier prefilled
//
// Samenvoeglogica bij invoegen: als tekst al bestaat → samenvoegen.
// Bij aanpassen: volledige overschrijving van het gekozen doel.
// ============================================================

import { laadAlleDoelen, slaaDoel, pasDoelaanPas, resetDoelenCache } from './doelen-firebase.js';

// ── Invoegen ──────────────────────────────────────────────────
export function bouwInvoegen(container) {
  container.innerHTML = '';
  _gewijzigd = false;

  const titel = maakSectietitel('Nieuw doel invoegen');
  container.appendChild(titel);

  const form = maakDoelenForm(null, async (data) => {
    const resultaat = await slaaDoel(data);
    if (resultaat) {
      resetDoelenCache();
      const melding = resultaat.actie === 'bijgewerkt'
        ? `✔ Samengevoegd met bestaand doel (id: ${resultaat.id})`
        : `✔ Nieuw doel toegevoegd (id: ${resultaat.id})`;
      toonMeldingInContainer(container, melding, 'ok');
      // Velden leegmaken
      bouwInvoegen(container);
    } else {
      toonMeldingInContainer(container, '✘ Opslaan mislukt.', 'fout');
    }
  });

  container.appendChild(form);
}

// ── Aanpassen ─────────────────────────────────────────────────
export async function bouwAanpassen(container) {
  container.innerHTML = '<p style="color:#888;font-style:italic;">Laden…</p>';
  _gewijzigd = false;

  const doelen = await laadAlleDoelen();
  container.innerHTML = '';

  const titel = maakSectietitel('Doel aanpassen');
  container.appendChild(titel);

  // ── Filters ───────────────────────────────────────────────
  const filterDiv = document.createElement('div');
  filterDiv.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center;';

  const alleTypes       = ['', 'voorkennis', 'succescriterium'];
  const alleLPnrs       = [...new Set(doelen.flatMap(d => d.leerplandoelcodes || []))].sort();
  const allePlaatscodes = [...new Set(doelen.flatMap(d => d.plaatscode || []))].sort();
  const alleRefs        = [...new Set(doelen.flatMap(d => d.referenties || []))].sort();

  const selType  = maakSelect([{v:'',l:'Alle types'},{v:'voorkennis',l:'Voorkennis'},{v:'succescriterium',l:'Succescriterium'}]);
  const selLP    = maakSelect([{v:'',l:'Alle leerplandoelen'}, ...alleLPnrs.map(l=>({v:l,l}))]);
  const selPl    = maakSelect([{v:'',l:'Alle plaatscodes'},    ...allePlaatscodes.map(l=>({v:l,l}))]);
  const selRef   = maakSelect([{v:'',l:'Alle referenties'},    ...alleRefs.map(l=>({v:l,l}))]);
  const zoekInput = document.createElement('input');
  zoekInput.type = 'text';
  zoekInput.placeholder = 'Zoek in tekst…';
  zoekInput.style.cssText = inputStijl() + 'min-width:160px;';

  filterDiv.appendChild(selType);
  filterDiv.appendChild(selLP);
  filterDiv.appendChild(selPl);
  filterDiv.appendChild(selRef);
  filterDiv.appendChild(zoekInput);
  container.appendChild(filterDiv);

  // ── Lijst met doelen ──────────────────────────────────────
  const lijstDiv = document.createElement('div');
  lijstDiv.style.cssText = 'display:flex;flex-direction:column;gap:4px;max-height:280px;overflow-y:auto;margin-bottom:16px;';
  container.appendChild(lijstDiv);

  // ── Formulier zone ────────────────────────────────────────
  const formZone = document.createElement('div');
  formZone.id = 'aanpas-form-zone';
  container.appendChild(formZone);

  function hertekenLijst() {
    const type  = selType.value;
    const lp    = selLP.value;
    const pl    = selPl.value;
    const ref   = selRef.value;
    const zoek  = zoekInput.value.toLowerCase();

    const gefilterd = doelen.filter(d => {
      if (type && d.type !== type) return false;
      if (lp   && !(d.leerplandoelcodes || []).includes(lp)) return false;
      if (pl   && !(d.plaatscode        || []).includes(pl)) return false;
      if (ref  && !(d.referenties       || []).includes(ref)) return false;
      if (zoek && !d.tekst?.toLowerCase().includes(zoek)) return false;
      return true;
    });

    lijstDiv.innerHTML = '';
    if (gefilterd.length === 0) {
      lijstDiv.innerHTML = '<p style="color:#888;font-style:italic;padding:6px 0;">Geen doelen gevonden.</p>';
      return;
    }

    gefilterd.forEach(doel => {
      const rij = document.createElement('div');
      rij.style.cssText = `
        display:flex;align-items:center;gap:8px;padding:7px 10px;
        background:white;border:1px solid #e0e0e0;border-radius:4px;
        cursor:pointer;transition:background .15s;
      `;
      rij.onmouseenter = () => rij.style.background = '#e8f5e9';
      rij.onmouseleave = () => rij.style.background = 'white';

      const badge = document.createElement('span');
      badge.style.cssText = `
        background:${doel.type==='voorkennis'?'#e3f2fd':'#e8f5e9'};
        color:${doel.type==='voorkennis'?'#1565c0':'#2e7d32'};
        border-radius:3px;padding:1px 5px;font-size:10px;flex-shrink:0;
      `;
      badge.textContent = doel.type === 'voorkennis' ? 'VK' : 'SC';

      const tekst = document.createElement('span');
      tekst.style.flex = '1';
      tekst.textContent = doel.tekst || '(geen tekst)';

      rij.appendChild(badge);
      rij.appendChild(tekst);
      rij.addEventListener('click', () => toonAanpasForm(doel, formZone, doelen));
      lijstDiv.appendChild(rij);
    });
  }

  [selType, selLP, selPl, selRef].forEach(s => s.addEventListener('change', hertekenLijst));
  zoekInput.addEventListener('input', hertekenLijst);
  hertekenLijst();
}

function toonAanpasForm(doel, formZone, doelen) {
  formZone.innerHTML = '';
  const subtitel = maakSectietitel(`Aanpassen: ${doel.tekst?.substring(0,60)}…`, '13px');
  formZone.appendChild(subtitel);
  const form = maakDoelenForm(doel, async (data) => {
    const ok = await pasDoelaanPas(doel.id, data);
    console.log('resultaat aanpassen:', ok);
    if (ok) {
      resetDoelenCache();
      // Cache van doelen bijwerken
      const idx = doelen.findIndex(d => d.id === doel.id);
      if (idx !== -1) doelen[idx] = { id: doel.id, ...data };
      toonMeldingInContainer(formZone, '✔ Doel aangepast.', 'ok');
      _gewijzigd = false;
    } else {
      toonMeldingInContainer(formZone, '✘ Aanpassen mislukt.', 'fout');
    }
  }, 'Aanpassen');

  formZone.appendChild(form);
}

// ── Gedeeld formulier ─────────────────────────────────────────
let _gewijzigd = false;

function maakDoelenForm(prefill, onOpslaan, opslaanLabel = 'Opslaan') {
  _gewijzigd = false;

  const form = document.createElement('div');
  form.style.cssText = 'display:flex;flex-direction:column;gap:12px;background:white;padding:16px;border:1px solid #a5d6a7;border-radius:6px;';

  function markeer() { _gewijzigd = true; }

  // ── Tekst ────────────────────────────────────────────────
  form.appendChild(maakLabel('Tekst'));
  const tekst = document.createElement('textarea');
  tekst.style.cssText = inputStijl() + 'min-height:70px;resize:vertical;';
  tekst.value = prefill?.tekst || '';
  tekst.addEventListener('input', markeer);
  form.appendChild(tekst);

  // ── Type ─────────────────────────────────────────────────
  form.appendChild(maakLabel('Type'));
  const typeDiv = maakRadioGroep('type', [
    { value: 'voorkennis',      label: 'Voorkennis' },
    { value: 'succescriterium', label: 'Succescriterium' },
  ], prefill?.type || 'voorkennis', markeer);
  form.appendChild(typeDiv);

  // ── Evalueerbaarheid ──────────────────────────────────────
  form.appendChild(maakLabel('Evalueerbaarheid'));
  const evalDiv = maakRadioGroep('eval', [
    { value: 'ja',  label: 'Ja'  },
    { value: 'nee', label: 'Nee' },
  ], prefill?.evalueerbaarheid || 'nee', () => {
    markeer();
    const isJa = form.querySelector('input[name="eval"]:checked')?.value === 'ja';
    scoresZone.style.display = isJa ? 'block' : 'none';
  });
  form.appendChild(evalDiv);

  // ── Scores (alleen bij evalueerbaarheid = ja) ─────────────
  const scoresZone = document.createElement('div');
  scoresZone.style.display = (prefill?.evalueerbaarheid === 'ja') ? 'block' : 'none';
  scoresZone.style.cssText += 'display:' + ((prefill?.evalueerbaarheid === 'ja') ? 'flex' : 'none') + ';flex-direction:column;gap:6px;';

  form.appendChild(maakLabel('Scores (verschijnt bij evalueerbaarheid = ja)'));

  // Parseer bestaande scores string
  const scoresParsed = parseScores(prefill?.scores || '');
  const scoreVelden = {};
  ['A+','A','B','C'].forEach(code => {
    const rij = document.createElement('div');
    rij.style.cssText = 'display:flex;align-items:center;gap:8px;';
    const lbl = document.createElement('label');
    lbl.textContent = code + ':';
    lbl.style.cssText = 'min-width:2em;font-weight:600;color:#4a7c59;';
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.style.cssText = inputStijl() + 'flex:1;';
    inp.value = scoresParsed[code] || '';
    inp.addEventListener('input', markeer);
    rij.appendChild(lbl);
    rij.appendChild(inp);
    scoresZone.appendChild(rij);
    scoreVelden[code] = inp;
  });
  form.appendChild(scoresZone);

  // ── Leerplandoelcodes ─────────────────────────────────────
  form.appendChild(maakLabel('Leerplandoelcodes'));
  const lpZone = maakTagInvoer(prefill?.leerplandoelcodes || [], markeer);
  form.appendChild(lpZone.el);

  // ── Referenties ───────────────────────────────────────────
  form.appendChild(maakLabel('Referenties'));
  const refZone = maakTagInvoer(prefill?.referenties || [], markeer);
  form.appendChild(refZone.el);

  // ── Plaatscodes ───────────────────────────────────────────
  form.appendChild(maakLabel('Plaatscodes'));
  const plZone = maakTagInvoer(prefill?.plaatscode || [], markeer);
  form.appendChild(plZone.el);

  // ── Opslaan knop ─────────────────────────────────────────
  const meldingEl = document.createElement('p');
  meldingEl.style.cssText = 'font-size:12px;color:#4a7c59;min-height:1.2em;';
  form.appendChild(meldingEl);

  const btnOpslaan = document.createElement('button');
  btnOpslaan.textContent = opslaanLabel;
  btnOpslaan.style.cssText = 'padding:7px 20px;font-size:13px;background:#4a7c59;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600;align-self:flex-start;';
  btnOpslaan.addEventListener('click', async () => {
    if (!tekst.value.trim()) {
      meldingEl.style.color = '#c0392b';
      meldingEl.textContent = 'Tekst is verplicht.';
      return;
    }

    // Scores samenvoegen
    const evalWaarde = form.querySelector('input[name="eval"]:checked')?.value || 'nee';
    let scoresStr = '';
    if (evalWaarde === 'ja') {
      const delen = ['A+','A','B','C']
        .filter(c => scoreVelden[c].value.trim())
        .map(c => `${c}:${scoreVelden[c].value.trim()}`);
      scoresStr = delen.join('###');
    }

    const data = {
      tekst:             tekst.value.trim(),
      type:              form.querySelector('input[name="type"]:checked')?.value || 'voorkennis',
      evalueerbaarheid:  evalWaarde,
      scores:            scoresStr,
      leerplandoelcodes: lpZone.getWaarden(),
      referenties:       refZone.getWaarden(),
      plaatscode:        plZone.getWaarden(),
    };

    meldingEl.style.color = '#888';
    meldingEl.textContent = 'Opslaan…';
    await onOpslaan(data);
    _gewijzigd = false;
  });
  form.appendChild(btnOpslaan);

  return form;
}

// ── Tag-invoer (meerdere waarden) ─────────────────────────────
function maakTagInvoer(begintags, onChange) {
  let tags = [...begintags];

  const el = document.createElement('div');
  el.style.cssText = 'display:flex;flex-direction:column;gap:4px;';

  const tagsDiv = document.createElement('div');
  tagsDiv.style.cssText = 'display:flex;flex-wrap:wrap;gap:4px;min-height:24px;';

  const invoerRij = document.createElement('div');
  invoerRij.style.cssText = 'display:flex;gap:6px;';

  const inp = document.createElement('input');
  inp.type = 'text';
  inp.placeholder = 'Voeg toe en druk Enter…';
  inp.style.cssText = inputStijl() + 'flex:1;';

  const btnAdd = document.createElement('button');
  btnAdd.textContent = '+';
  btnAdd.type = 'button';
  btnAdd.style.cssText = 'padding:4px 10px;background:#4a7c59;color:white;border:none;border-radius:4px;cursor:pointer;font-size:13px;';

  invoerRij.appendChild(inp);
  invoerRij.appendChild(btnAdd);
  el.appendChild(tagsDiv);
  el.appendChild(invoerRij);

  function hertekenTags() {
    tagsDiv.innerHTML = '';
    tags.forEach((tag, i) => {
      const span = document.createElement('span');
      span.style.cssText = 'background:#c8e6c9;color:#4a7c59;border-radius:3px;padding:2px 6px;font-size:11px;display:inline-flex;align-items:center;gap:4px;';
      span.textContent = tag;
      const x = document.createElement('span');
      x.textContent = '×';
      x.style.cssText = 'cursor:pointer;font-weight:700;';
      x.addEventListener('click', () => {
        tags.splice(i, 1);
        hertekenTags();
        onChange();
      });
      span.appendChild(x);
      tagsDiv.appendChild(span);
    });
  }

  function voegToe() {
    const v = inp.value.trim();
    if (v && !tags.includes(v)) {
      tags.push(v);
      hertekenTags();
      onChange();
    }
    inp.value = '';
    inp.focus();
  }

  btnAdd.addEventListener('click', voegToe);
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); voegToe(); } });

  hertekenTags();

  return { el, getWaarden: () => [...tags] };
}

// ── Hulpfuncties ──────────────────────────────────────────────
function maakLabel(tekst) {
  const el = document.createElement('label');
  el.textContent = tekst;
  el.style.cssText = 'font-size:11px;font-weight:700;color:#4a7c59;text-transform:uppercase;letter-spacing:.05em;';
  return el;
}

function maakSectietitel(tekst, size = '14px') {
  const el = document.createElement('h3');
  el.textContent = tekst;
  el.style.cssText = `font-size:${size};font-weight:700;color:#4a7c59;margin-bottom:8px;`;
  return el;
}

function maakRadioGroep(naam, opties, geselecteerd, onChange) {
  const div = document.createElement('div');
  div.style.cssText = 'display:flex;gap:16px;';
  opties.forEach(opt => {
    const label = document.createElement('label');
    label.style.cssText = 'display:flex;align-items:center;gap:5px;cursor:pointer;font-size:13px;';
    const radio = document.createElement('input');
    radio.type  = 'radio';
    radio.name  = naam;
    radio.value = opt.value;
    radio.checked = opt.value === geselecteerd;
    radio.style.accentColor = '#4a7c59';
    radio.addEventListener('change', onChange);
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt.label));
    div.appendChild(label);
  });
  return div;
}

function maakSelect(opties) {
  const sel = document.createElement('select');
  sel.style.cssText = 'padding:5px 8px;font-size:12px;border:1px solid #a5d6a7;border-radius:4px;font-family:inherit;outline:none;background:white;';
  opties.forEach(o => {
    const opt = document.createElement('option');
    opt.value = o.v;
    opt.textContent = o.l;
    sel.appendChild(opt);
  });
  return sel;
}

function inputStijl() {
  return 'padding:6px 8px;font-size:13px;border:1px solid #a5d6a7;border-radius:4px;font-family:inherit;outline:none;width:100%;box-sizing:border-box;';
}

function toonMeldingInContainer(container, tekst, type) {
  let el = container.querySelector('.form-melding');
  if (!el) {
    el = document.createElement('p');
    el.className = 'form-melding';
    el.style.cssText = 'font-size:12px;padding:6px 10px;border-radius:4px;margin-top:4px;';
    container.appendChild(el);
  }
  el.textContent = tekst;
  el.style.background = type === 'ok' ? '#e8f5e9' : '#fdecea';
  el.style.color      = type === 'ok' ? '#2e7d32' : '#c0392b';
  el.style.border     = type === 'ok' ? '1px solid #a5d6a7' : '1px solid #ef9a9a';
}

function parseScores(str) {
  const result = {};
  if (!str) return result;
  str.split('###').forEach(deel => {
    const idx = deel.indexOf(':');
    if (idx !== -1) {
      const code  = deel.slice(0, idx).trim();
      const waarde = deel.slice(idx + 1).trim();
      result[code] = waarde;
    }
  });
  return result;
}

// ── Waarschuwing bij verlaten ─────────────────────────────────
// Wordt gecheckt door doelen-tab.js
export function isGewijzigd() {
  return _gewijzigd;
}
