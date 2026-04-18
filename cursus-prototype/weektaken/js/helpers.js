// ============================================================
//  js/helpers.js  —  gedeelde functies voor weektaken
// ============================================================

// ── maakOefTabel ─────────────────────────────────────────────
// Maakt een tabel aan voor oefeningen.
// @param {HTMLElement} container
// @param {number}      aantalKolommen
// @param {boolean}     metLijn
// @returns {{ tabel, tbody }}
function maakOefTabel(container, aantalKolommen = 2, metLijn = false) {
  const tabel = document.createElement('table');
  tabel.classList.add('oef-tabel');
  if (metLijn) tabel.classList.add('met-lijn');

  const cg = document.createElement('colgroup');
  for (let i = 0; i < aantalKolommen; i++) {
    const col = document.createElement('col');
    col.style.width = `${100 / aantalKolommen}%`;
    cg.appendChild(col);
  }
  tabel.appendChild(cg);

  const tbody = document.createElement('tbody');
  tabel.appendChild(tbody);
  container.appendChild(tabel);
  return { tabel, tbody };
}

// ── maakOefening ─────────────────────────────────────────────
// Vereenvoudigde versie voor weektaken: geen toggle, geen tools,
// geen niveauiconen. Enkel een genummerd vierkant blokje.
// @param {object} config  { id, nummer, container }
// @returns {HTMLElement}  de inhoud-div waarin je de oefening bouwt
function maakOefening(config) {
  const {
    id,
    nummer,
    container = '#oefening-container'
  } = config;

  const actueleContainer = typeof container === 'string'
    ? document.querySelector(container)
    : container;

  if (!actueleContainer) {
    console.warn('maakOefening: container niet gevonden:', container);
    return document.createElement('div');
  }

  const oefDiv = document.createElement('div');
  oefDiv.classList.add('oefening');
  oefDiv.id = id;

  // Marge met badge
  const margeDiv = document.createElement('div');
  margeDiv.classList.add('oefening-marge');

  const badge = document.createElement('div');
  badge.classList.add('badge', 'vierkant-badge');
  badge.textContent = nummer;
  margeDiv.appendChild(badge);

  // Inhoud
  const inhoudDiv = document.createElement('div');
  inhoudDiv.classList.add('oefening-inhoud');

  oefDiv.appendChild(margeDiv);
  oefDiv.appendChild(inhoudDiv);
  actueleContainer.appendChild(oefDiv);

  return inhoudDiv;
}

// ── voegTekstToe ─────────────────────────────────────────────
// Voegt een alinea toe aan een container.
function voegTekstToe(container, tekst, klassen = []) {
  const p = document.createElement('p');

  if (tekst instanceof Node) {
    p.appendChild(tekst);
  } else {
    p.appendChild(htmlSpan(tekst));
  }

  klassen.forEach(k => p.classList.add(k));
  container.appendChild(p);
  return p;
}

// helper om string → span om te zetten
function htmlSpan(html) {
  const span = document.createElement('span');
  span.innerHTML = html;
  return span;
}

/* ============================================================
   VOEG LIJST TOE
   container  : DOM-element waar de lijst in komt
   type       : 'bullet' (•) of 'streep' (-)
   insprong   : afstand van linkerrand, bv. '0.4cm'
   gap        : ruimte tussen teken en tekst, bv. '0.2cm'
   items      : array van strings of DOM-nodes
   ============================================================ */
function voegLijstToe(container, type, insprong, gap, items) {
  const ul = document.createElement('ul');
  ul.style.listStyle   = 'none';
  ul.style.margin      = '0';
  ul.style.padding     = '0';
  ul.style.paddingLeft = insprong;

  const teken = type === 'streep' ? '-' : '•';

  items.forEach(item => {
    const li = document.createElement('li');
    li.style.display      = 'flex';
    li.style.alignItems   = 'baseline';
    li.style.marginBottom = '0.05cm';

    const tekenSpan = document.createElement('span');
    tekenSpan.textContent    = teken;
    tekenSpan.style.flexShrink  = '0';
    tekenSpan.style.marginRight = gap;

    const tekstSpan = document.createElement('span');
    if (typeof item === 'string') tekstSpan.innerHTML = item;
    else tekstSpan.appendChild(item);

    li.appendChild(tekenSpan);
    li.appendChild(tekstSpan);
    ul.appendChild(li);
  });

  container.appendChild(ul);
  return ul;
}

// ── maakRij ──────────────────────────────────────────────────
// Maakt een .rij div aan.
function maakRij(container, opties = {}) {
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (opties.breuk) rij.classList.add('breuk');
  container.appendChild(rij);
  return rij;
}

// ── maakSlTd ─────────────────────────────────────────────────
// Maakt een tabelcel aan met een schrijflijn.
function maakSlTd(tekst = '', metOpl = false) {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');

  const sl = document.createElement('div');
  sl.classList.add('sl');
  sl.textContent = '_'.repeat(60);
  rij.appendChild(sl);

  if (metOpl) {
    const opl = document.createElement('div');
    opl.classList.add('opl');
    opl.textContent = tekst;
    rij.appendChild(opl);
  }

  td.appendChild(rij);
  return td;
}

// ── maakOpTdaz ───────────────────────────────────────────────
// Maakt een tabelcel aan met label + tekst.
function maakOpTdaz(label, tekst, metSl = true) {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');

  if (label !== '') {
    const lbl = document.createElement('span');
    lbl.classList.add('lbl');
    lbl.textContent = label + '|';
    rij.appendChild(lbl);
  }

  const txt = document.createElement('span');
  txt.classList.add('txt');
  if (tekst instanceof Node) {
    txt.appendChild(tekst);
  } else {
    txt.appendChild(htmlSpan(tekst));
  }
  rij.appendChild(txt);

  if (metSl) {
    const sl = document.createElement('div');
    sl.classList.add('sl');
    sl.textContent = '_'.repeat(60);
    rij.appendChild(sl);
  }

  td.appendChild(rij);
  return td;
}

// ============================================================
//  helpers.js  —  maakTrOpl
//
//  Maakt een <tr> aan met twee <td>'s:
//    - tdAntwoord (kolom-links):  invoerveld voor de leerling
//    - tdOplossing (kolom-rechts): oplossing bij verbetering
//
//  Geeft { tr, invoer } terug.
//
//  Parameters:
//    antwoorden   – de _antwoorden-array van de oefening
//                   elk element: { antwoord: null, score: 0 }
//    verbeterd    – boolean: is de oefening in verbeterd-modus?
//    antwoorditem – index in de antwoorden-array (standaard 0)
//    label        – boolean: witruimte-span vóór invoerveld?
//                   (standaard true)
//    type         – invoerveld: 'tekst' of 'geheel' of 'getal'
//    oplossing    – string: het juiste antwoord (standaard 'oplossing')
//    verbeteren   – boolean: moet deze vraag verbeterd worden?
//                   (standaard true)
//    score        – boolean: score tonen naast oplossing?
//                   (standaard true)
// ============================================================

function maakTrOpl(
  antwoorden,
  verbeterd,
  antwoorditem = 0,
  label        = true,
  type         = 'tekst',
  oplossing    = 'oplossing',
  verbeteren   = true,
  score        = true,
) {
  const item = antwoorden[antwoorditem]; // { antwoord: null, score: 0 }

  // ── <tr> ─────────────────────────────────────────────────
  const tr = document.createElement('tr');

  // ── tdAntwoord (kolom-links) ──────────────────────────────
  const tdAntwoord = document.createElement('td');
  tdAntwoord.classList.add('kolom-links');

  const rijAntwoord = document.createElement('div');
  rijAntwoord.classList.add('rij');

  // Optionele label-span (witruimte)
  if (label === true) {
    const lbl = document.createElement('span');
    lbl.classList.add('lbl');
    rijAntwoord.appendChild(lbl);
  }

  // Invoerveld
  const invoer = document.createElement('input');
  invoer.type = (type === 'geheel' || type === 'getal') ? 'number' : 'text';
  if (type === 'geheel') {
    invoer.setAttribute('step', '1');
    invoer.addEventListener('keydown', e => {
      if (['.', ','].includes(e.key)) e.preventDefault();
    });
  }
  invoer.style.cssText = `
    flex: 1; border: 1.5px solid var(--sl-kleur, #b0b0b0);
    font-family: var(--font, Arial); font-size: var(--fontsize, 10pt);
    color: var(--tekst, #1a1a1a); background: transparent;
    padding: 0 0.1cm; outline: none; height: 0.9cm;
  `;
  invoer.value       = item.antwoord ?? '';
  invoer.placeholder = '…';
  invoer.disabled    = verbeterd || false;

  invoer.addEventListener('input', () => {
    item.antwoord = invoer.value.trim() || null;
  });

  // Verbetering: stijl aanpassen op basis van juistheid
  if (verbeterd && verbeteren) {
    const leerlingAntwoord = (item.antwoord ?? '').replace(/\s+/g, '').toLowerCase();
    const juistAntwoord    = oplossing.replace(/\s+/g, '').toLowerCase();
    const isJuist          = leerlingAntwoord === juistAntwoord;

    if (isJuist) {
      invoer.style.color = 'var(--groen-midden, #6aab7e)';
      if (score) item.score = 1;
    } else {
      invoer.style.color          = 'var(--oranje-rand, #e65100)';
      invoer.style.textDecoration = 'line-through';
      if (score) item.score = 0;
    }
  }

  rijAntwoord.appendChild(invoer);
  tdAntwoord.appendChild(rijAntwoord);
  tr.appendChild(tdAntwoord);

  // ── tdOplossing (kolom-rechts) ────────────────────────────
  const tdOplossing = document.createElement('td');
  tdOplossing.classList.add('kolom-rechts');

  const rijOplossing = document.createElement('div');
  rijOplossing.classList.add('rij');

  if (verbeterd && verbeteren) {
    // Span met de juiste oplossing
    const spanOpl = document.createElement('span');
    spanOpl.style.cssText = `
      flex: 1; border-bottom: 1.5px solid var(--sl-kleur, #b0b0b0);
      font-family: var(--font-oplossing, 'Comic Sans MS'); font-size: var(--fontsize, 10pt);
      color: var(--blauw-oplossing, #1a4fa0); background: transparent;
      padding: 0 0.1cm; outline: none; height: 0.9cm; line-height: 0.9cm;
      ${score ? 'width: 85%;' : ''}
    `;
    spanOpl.textContent = oplossing;
    rijOplossing.appendChild(spanOpl);

    // Optionele score-span
    if (score) {
      const spanScore = document.createElement('span');
      spanScore.style.cssText = `
        width: 10%;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
        color: var(--lila-rand);
        text-align: right;
      `;
      spanScore.textContent = item.score;
      rijOplossing.appendChild(spanScore);

      const spanTot = document.createElement('span');
      spanTot.style.cssText = `
        width: 5%;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
        color: var(--lila-rand);
        text-align: left;
      `;
      spanTot.textContent = '/1';
      rijOplossing.appendChild(spanTot);
    }
  }

  tdOplossing.appendChild(rijOplossing);
  tr.appendChild(tdOplossing);

  // ── Teruggeven ────────────────────────────────────────────
  return { tr, invoer };
}

// ============================================================
//  helpers.js  —  maakTrOpl2 -> enkel opl in 1 kolom
//
//  Maakt een <tr> aan met één <td>'s:
//    - tdAntwoord (kolom-links):  invoerveld voor de leerling
//
//  Geeft { tr, invoer } terug.
//
//  Parameters:
//    antwoorden   – de _antwoorden-array van de oefening
//                   elk element: { antwoord: null, score: 0 }
//    verbeterd    – boolean: is de oefening in verbeterd-modus?
//    antwoorditem – index in de antwoorden-array (standaard 0)
//    label        – boolean: witruimte-span vóór invoerveld?
//                   (standaard true)
//    type         – invoerveld: 'tekst' of 'geheel' of 'getal'
// ============================================================

function maakTrOpl2(
  antwoorden,
  verbeterd,
  antwoorditem = 0,
  label        = true,
  type         = 'tekst',
) {
  const item = antwoorden[antwoorditem]; // { antwoord: null, score: 0 }

  // ── <tr> ─────────────────────────────────────────────────
  const tr = document.createElement('tr');

  // ── tdAntwoord (kolom-links) ──────────────────────────────
  const tdAntwoord = document.createElement('td');
  tdAntwoord.classList.add('kolom-links');

  const rijAntwoord = document.createElement('div');
  rijAntwoord.classList.add('rij');

  // Optionele label-span (witruimte)
  if (label === true) {
    const lbl = document.createElement('span');
    lbl.classList.add('lbl');
    rijAntwoord.appendChild(lbl);
  }

  // Invoerveld
  const invoer = document.createElement('input');
  invoer.type = (type === 'geheel' || type === 'getal') ? 'number' : 'text';
  if (type === 'geheel') {
    invoer.setAttribute('step', '1');
    invoer.addEventListener('keydown', e => {
      if (['.', ','].includes(e.key)) e.preventDefault();
    });
  }  
  invoer.style.cssText = `
    flex: 1; border: 1.5px solid var(--sl-kleur, #b0b0b0);
    font-family: var(--font, Arial); font-size: var(--fontsize, 10pt);
    color: var(--tekst, #1a1a1a); background: transparent;
    padding: 0 0.1cm; outline: none; height: 0.9cm;
  `;
  invoer.value       = item.antwoord ?? '';
  invoer.placeholder = '…';
  invoer.disabled    = verbeterd || false;

  invoer.addEventListener('input', () => {
    item.antwoord = invoer.value.trim() || null;
  });

  rijAntwoord.appendChild(invoer);
  tdAntwoord.appendChild(rijAntwoord);
  tr.appendChild(tdAntwoord);

  // ── Teruggeven ────────────────────────────────────────────
  return { tr, invoer };
}

// ── bouwVoorkennisTabel ───────────────────────────────────────
// Bouwt de voorkennistabel op basis van een matrix.
// @param {HTMLElement} container
// @param {Array}       matrix  [{ tekst, plaatscode }]
// @param {boolean}     aanklikbaar
function bouwVoorkennisTabel(container, matrix, aanklikbaar = false) {
  const prefix = _bepaalPrefix(matrix);
  const items  = _sorteerOpPlaatscode(matrix, prefix);

  const element = _maakCriteriaTabel(items, aanklikbaar, false);
  container.appendChild(element);
}

// ── bouwSuccescriteriaTabel ───────────────────────────────────
// Bouwt de succescriteriatabelle op basis van een matrix.
// @param {HTMLElement} container
// @param {Array}       matrix  [{ tekst, plaatscode, leerplandoelcodes }]
// @param {boolean}     aanklikbaar
// @param {Array}       waardenArray  [true/false/null] — huidige staat van checkboxen
// @param {Function}    onChange(index, waarde)
function bouwSuccescriteriaTabel(container, matrix, aanklikbaar = false, waardenArray = [], onChange = null) {
  const prefix = _bepaalPrefix(matrix);
  const items  = _sorteerOpPlaatscode(matrix, prefix);

  const element = _maakCriteriaTabel(items, aanklikbaar, true, waardenArray, onChange);
  container.appendChild(element);
}

// ── bouwInstructieLijst ───────────────────────────────────────
// Bouwt de instructielijst op basis van een matrix.
// @param {HTMLElement} container
// @param {Array}       matrix  [{ tekst, plaatscode }]
//   plaatscode x.y     = hoofdinstructie
//   plaatscode x.y.z   = subinstructie bij x.y
function bouwInstructieLijst(container, matrix) {
  // Groepeer: hoofdstappen (x.y) en subinstructies (x.y.z)
  const hoofd = matrix
    .filter(i => i.plaatscode.split('.').length === 2)
    .sort((a, b) => _vergelijkPlaatscode(a.plaatscode, b.plaatscode));

  hoofd.forEach(item => {
    const [x, y] = item.plaatscode.split('.');

    // Hoofdrij
    const rijEl = document.createElement('div');
    rijEl.classList.add('rij', 'instructie-rij');

    const lbl = document.createElement('span');
    lbl.classList.add('lbl');
    lbl.textContent = y + '|';
    rijEl.appendChild(lbl);

    const txt = document.createElement('span');
    txt.classList.add('txt');
    txt.textContent = item.tekst;
    rijEl.appendChild(txt);

    container.appendChild(rijEl);

    // Subinstructies
    const subs = matrix
      .filter(i => {
        const delen = i.plaatscode.split('.');
        return delen.length === 3 && delen[0] === x && delen[1] === y;
      })
      .sort((a, b) => _vergelijkPlaatscode(a.plaatscode, b.plaatscode));

    subs.forEach(sub => {
      const [, , z] = sub.plaatscode.split('.');

      const subRij = document.createElement('div');
      subRij.classList.add('rij', 'instructie-rij', 'instructie-sub');

      const subLbl = document.createElement('span');
      subLbl.classList.add('lbl');
      subLbl.textContent = y + '.' + z + '|';
      subRij.appendChild(subLbl);

      const subTxt = document.createElement('span');
      subTxt.classList.add('txt');
      subTxt.textContent = sub.tekst;
      subRij.appendChild(subTxt);

      container.appendChild(subRij);
    });
  });
}

// ── bouwBenodigdhedenLijst ────────────────────────────────────
// Bouwt de lijst met benodigdheden.
// @param {HTMLElement} container
// @param {Array}       matrix  [{ tekst, plaatscode }]
function bouwBenodigdhedenLijst(container, matrix) {
  const items = matrix
    .sort((a, b) => _vergelijkPlaatscode(a.plaatscode, b.plaatscode));

  items.forEach(item => {
    const rijEl = document.createElement('div');
    rijEl.classList.add('rij', 'benodigd-rij');

    const bullet = document.createElement('span');
    bullet.classList.add('lbl');
    bullet.textContent = '•';
    rijEl.appendChild(bullet);

    const txt = document.createElement('span');
    txt.classList.add('txt');
    txt.textContent = item.tekst;
    rijEl.appendChild(txt);

    container.appendChild(rijEl);
  });
}

// ── maakBanner ───────────────────────────────────────────────
// Maakt een banner aan (zoals in het dashboard).
// @param {string} icoon
// @param {string} tekst
// @returns {HTMLElement}
function maakBanner(icoon, tekst) {
  const banner = document.createElement('div');
  banner.classList.add('banner');

  const icoonEl = document.createElement('div');
  icoonEl.classList.add('banner-icoon');
  icoonEl.textContent = icoon;
  banner.appendChild(icoonEl);

  const tekstEl = document.createElement('div');
  tekstEl.classList.add('banner-tekst');
  tekstEl.textContent = tekst;
  banner.appendChild(tekstEl);

  return banner;
}

// ── Interne hulpfuncties ──────────────────────────────────────

function _bepaalPrefix(matrix) {
  if (!matrix || matrix.length === 0) return '';
  const eerste = matrix[0].plaatscode || '';
  const delen  = eerste.split('.');
  return delen[0] + '.';
}

function _sorteerOpPlaatscode(matrix, prefix) {
  return [...matrix]
    .filter(i => i.plaatscode && i.plaatscode.startsWith(prefix))
    .sort((a, b) => _vergelijkPlaatscode(a.plaatscode, b.plaatscode));
}

function _vergelijkPlaatscode(a, b) {
  const delenA = a.split('.').map(Number);
  const delenB = b.split('.').map(Number);
  for (let i = 0; i < Math.max(delenA.length, delenB.length); i++) {
    const nA = delenA[i] ?? 0;
    const nB = delenB[i] ?? 0;
    if (nA !== nB) return nA - nB;
  }
  return 0;
}

function _maakCriteriaTabel(items, aanklikbaar, metLeerplandoel, waardenArray = [], onChange = null) {
  // Bepaal welke types aanwezig zijn in de matrix
  const heeftLeer     = items.some(i => i.type === 'leer');
  const heeftEvalueer = items.some(i => i.type === 'evalueer');
  const heeftTypes    = heeftLeer || heeftEvalueer;

  // Als aanklikbaar: toon 'Vink aan!' bovenaan
  const wrap = document.createElement('div');

  if (aanklikbaar) {
    const vinkAan = document.createElement('p');
    vinkAan.style.cssText = 'font-weight:bold; margin-bottom:0.3cm; font-family:var(--font,Arial); font-size:14pt ;color:var(--lila-tekst)';
    vinkAan.textContent = 'Vink aan!';
    wrap.appendChild(vinkAan);
  }

  const tabel = document.createElement('table');
  tabel.classList.add('criteria-tabel');

  const cg = document.createElement('colgroup');
  const c1 = document.createElement('col'); c1.style.width = '95%';
  const c2 = document.createElement('col'); c2.style.width = '5%';
  cg.appendChild(c1); cg.appendChild(c2);
  tabel.appendChild(cg);

  const tbody = document.createElement('tbody');

  // Globale teller voor nummering (loopt door over beide groepen)
  let teller = 0;

  // Hulpfunctie: voeg sectietitel-rij toe
  function _voegTitelToe(tekst) {
    const trTitel = document.createElement('tr');
    const tdTitel = document.createElement('td');
    tdTitel.colSpan = 2;
    tdTitel.style.cssText = `
      background: #e8f5e9;
      color: var(--groen-donker, #4a7c59);
      font-weight: bold;
      font-family: var(--font, Arial);
      font-size: var(--fontsize, 10pt);
      padding: 0.15cm 0.2cm;
    `;
    tdTitel.textContent = tekst;
    trTitel.appendChild(tdTitel);
    tbody.appendChild(trTitel);
  }

  // Hulpfunctie: voeg één criterium-rij toe
  function _voegCriteriumToe(item, globalIdx) {
    const tr = document.createElement('tr');

    // Kolom 1: tekst
    const td1 = document.createElement('td');
    td1.classList.add('criteria-tekst-cel');

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex; align-items:baseline; flex-direction:column;';

    const rijTekst = document.createElement('div');
    rijTekst.style.cssText = 'display:flex; align-items:baseline; width:100%;';

    const lbl = document.createElement('span');
    lbl.classList.add('lbl');
    lbl.textContent = (globalIdx + 1) + '|';
    rijTekst.appendChild(lbl);

    const txt = document.createElement('span');
    txt.classList.add('txt');
    let tekstInhoud = item.tekst || '';
    if (metLeerplandoel && item.leerplandoelcodes?.length) {
      tekstInhoud += ' (' + item.leerplandoelcodes.join(', ') + ')';
    }
    txt.textContent = tekstInhoud;
    rijTekst.appendChild(txt);
    wrapper.appendChild(rijTekst);

    // Score-tekst (enkel bij type evalueer en als score aanwezig)
    if (item.type === 'evalueer' && item.scores) {
      const scoreTekst = document.createElement('div');
      scoreTekst.style.cssText = `
        font-size: 9pt;
        color: var(--sl-kleur, #b0b0b0);
        padding-left: 1cm;
        margin-top: 0.05cm;
        line-height: 1.4;
        font-family: var(--font, Arial);
      `;
      // Vervang <br> door echte regeleinden
      scoreTekst.innerHTML = item.scores.replace(/<br>/gi, '<br>');
      wrapper.appendChild(scoreTekst);
    }

    td1.appendChild(wrapper);
    tr.appendChild(td1);

    // Kolom 2: checkbox
    const td2 = document.createElement('td');
    td2.classList.add('criteria-check-cel');

    const cb = document.createElement('input');
    cb.type     = 'checkbox';
    cb.checked  = waardenArray[globalIdx] === true;
    cb.disabled = !aanklikbaar;
    cb.classList.add('criteria-checkbox');
    if (aanklikbaar && onChange) {
      cb.addEventListener('change', () => onChange(globalIdx, cb.checked));
    }
    td2.appendChild(cb);
    tr.appendChild(td2);

    tbody.appendChild(tr);
  }

  if (!heeftTypes) {
    // Geen types: gewone lijst zonder onderverdeling
    items.forEach((item, idx) => _voegCriteriumToe(item, idx));
  } else {
    // Met types: onderverdeling in leer en evalueer
    if (heeftLeer) {
      _voegTitelToe('Wat leer je met deze taak?');
      items.filter(i => i.type === 'leer').forEach(item => {
        _voegCriteriumToe(item, teller++);
      });
    }
    if (heeftEvalueer) {
      const trWit = document.createElement('tr');
      const tdWit = document.createElement('td');
      tdWit.colSpan = 2;
      tdWit.style.height = '0.9cm';
      trWit.appendChild(tdWit);
      tbody.appendChild(trWit);
      _voegTitelToe('Waarop word je geëvalueerd bij deze taak?');
      items.filter(i => i.type === 'evalueer').forEach(item => {
        _voegCriteriumToe(item, teller++);
      });
    }
  }

  tabel.appendChild(tbody);
  wrap.appendChild(tabel);
  return wrap;
}


//uit andere helpers
function maakBreuk(teller, noemer, stijl='opgave') {
  const span = document.createElement('span');
  span.classList.add('breuk-html');
  if (stijl === 'oplossing') {
    span.style.fontFamily = 'var(--font-oplossing)';
    span.style.color = 'var(--blauw-oplossing)';
  }
  const t = document.createElement('span'); 
  t.classList.add('teller'); 
  if (teller instanceof Node) t.appendChild(teller);
  else t.innerHTML = teller;
  const n = document.createElement('span'); 
  n.classList.add('noemer');
  if (noemer instanceof Node) n.appendChild(noemer);
  else n.innerHTML = noemer;
  span.appendChild(t); 
  span.appendChild(n);
  return span;
}


/*====knop theorie====*/
function maakPdfKnop(inhoud, pdfUrl, knopTekst = '📄 Bekijk de theorie.') {
  const witruimte = document.createElement('div');
  witruimte.style.height = '0.3cm';
  inhoud.appendChild(witruimte);

  const knop = document.createElement('button');
  knop.className = 'knop-secundair';
  knop.textContent = knopTekst;
  knop.style.marginTop = '1cm';

  knop.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 999;
      display: flex; align-items: center; justify-content: center;
    `;

    const popup = document.createElement('div');
    popup.style.cssText = `
      background: white;
      border-radius: var(--radius, 8px);
      box-shadow: var(--schaduw-groot, 0 4px 20px rgba(0,0,0,0.2));
      width: 90vw; height: 90vh;
      display: flex; flex-direction: column;
      overflow: hidden;
    `;

    const balk = document.createElement('div');
    balk.style.cssText = `
      display: flex; justify-content: flex-end;
      padding: 0.3cm 0.3cm 0.2cm;
      border-bottom: 1px solid var(--groen-scheiding, #a5d6a7);
      flex-shrink: 0;
    `;

    const sluit = document.createElement('button');
    sluit.className = 'knop-secundair';
    sluit.textContent = '✕ Sluiten';
    sluit.addEventListener('click', () => overlay.remove());
    balk.appendChild(sluit);

    const iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    iframe.style.cssText = 'flex: 1; border: none; width: 100%;';

    popup.appendChild(balk);
    popup.appendChild(iframe);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  });

  inhoud.appendChild(knop);
}