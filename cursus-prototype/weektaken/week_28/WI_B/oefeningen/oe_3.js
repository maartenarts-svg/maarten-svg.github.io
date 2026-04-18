// ============================================================
//  oefeningen/oe_3.js  —  Tabel: tegengestelde en omgekeerde
// ============================================================

window.__taakOefening = (function () {

  // ── Opgaven ───────────────────────────────────────────────
  const RIJEN = [
    { getal: { t: 9,  n: 1 }, tegengestelde: { t: -9, n: 1 }, omgekeerde: { t: 1,  n: 9 } },
    { getal: { t: -3, n: 1 }, tegengestelde: { t: 3,  n: 1 }, omgekeerde: { t: -1, n: 3 } },
    { getal: { t: 1,  n: 5 }, tegengestelde: { t: -1, n: 5 }, omgekeerde: { t: 5,  n: 1 } },
    { getal: { t: -7, n: 4 }, tegengestelde: { t: 7,  n: 4 }, omgekeerde: { t: -4, n: 7 } },
  ];

  // ── Staat ─────────────────────────────────────────────────
  let _antwoorden = [
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
  ];
  let _invoerVelden = [];
  let _container    = null;
  let _verbeterd    = false;
  let _blokkeren    = false;

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd, mail, slaOp, leerling, herlaadLeerling, terugNaarOverzicht, blokkeren) {
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a
          : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < 8) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _container = container;
    _verbeterd = verbeterd;
    _blokkeren = blokkeren || verbeterd || false;
    _invoerVelden = [];

    _container.innerHTML = '';
    _bouwOefening();
  }

  // ── Oefening bouwen ───────────────────────────────────────
  function _bouwOefening() {
    const inhoud = maakOefening({ id: 'oe_3', nummer: 3, container: _container });
    voegTekstToe(inhoud, 'Vul de tabel aan.', ['intro-tekst']);

    voegTekstToe(inhoud,'<span class="markeer-lila">Om een breuk te noteren, klik je op /.</span>')

    const stijl = document.createElement('style');
    stijl.textContent = `
      .tg-tabel {
        border-collapse: collapse;
        margin-top: 0.3cm;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
      }
      .tg-tabel th {
        background: var(--groen-pastel, #c8e6c9);
        color: var(--tekst, #1a1a1a);
        font-weight: bold;
        padding: 0.15cm 0.4cm;
        border: 1px solid var(--groen-scheiding, #a5d6a7);
        text-align: center;
      }
      .tg-tabel td {
        border: 1px solid var(--groen-scheiding, #a5d6a7);
        padding: 0.15cm 0.3cm;
        vertical-align: middle;
        text-align: center;
      }
      .tg-tabel td .rij {
        height: auto;
        border-bottom: none;
      }
      .tg-getal {
        font-weight: bold;
      }
      .tg-cel-wrap {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.2cm;
      }
      .tg-breuk-invoer {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        vertical-align: middle;
        line-height: 1.1;
      }
      .tg-teller-invoer {
        display: block;
        border: none;
        //border-bottom: 1.5px solid var(--sl-kleur, #1a1a1a);
        background: transparent;
        font-family: var(--font-oplossing, 'Comic Sans MS');
        font-size: var(--fontsize, 10pt);
        color: var(--blauw-oplossing, #1a4fa0);
        outline: none;
        text-align: center;
        min-width: 0.4cm;
        padding: 0 2px;
        height: auto;
        line-height: 1.1;
      }
      .tg-streep-invoer {
        //width: 100%;
        min-width: 0.4cm;
        height: 0.8px;
        background: var(--blauw-oplossing, #1a4fa0);
        margin: 1px 0;
      }
      .tg-noemer-invoer {
        display: block;
        border: none;
        background: transparent;
        font-family: var(--font-oplossing, 'Comic Sans MS');
        font-size: var(--fontsize, 10pt);
        color: var(--blauw-oplossing, #1a4fa0);
        outline: none;
        text-align: center;
        min-width: 0.4cm;
        padding: 0 2px;
        height: auto;
        line-height: 1.1;
        margin-top: 1px;
      }
      .tg-breuk-invoer.juist .tg-teller-invoer {
        color: var(--groen-donker, #4a7c59);
        border-bottom-color: var(--groen-donker, #4a7c59);
      }
      .tg-breuk-invoer.juist .tg-streep-invoer {
        background: var(--groen-donker, #4a7c59);
      }
      .tg-breuk-invoer.juist .tg-noemer-invoer {
        color: var(--groen-donker, #4a7c59);
      }
      .tg-breuk-invoer.fout .tg-teller-invoer {
        color: var(--oranje-rand, #e65100);
        text-decoration: line-through;
        border-bottom-color: var(--oranje-rand, #e65100);
      }
      .tg-breuk-invoer.fout .tg-streep-invoer {
        background: var(--oranje-rand, #e65100);
      }
      .tg-breuk-invoer.fout .tg-noemer-invoer {
        color: var(--oranje-rand, #e65100);
        text-decoration: line-through;
      }
      .tg-opl-span {
        color: var(--lila-tekst, #d500f9);
        font-family: var(--font-oplossing, 'Comic Sans MS');
        font-size: var(--fontsize, 10pt);
      }
      .tg-opl-breuk {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        vertical-align: middle;
        line-height: 1.1;
        color: var(--lila-tekst, #d500f9);
        font-family: var(--font-oplossing, 'Comic Sans MS');
        font-size: var(--fontsize, 10pt);
      }
      .tg-opl-streep {
        //width: 100%;
        min-width: 0.4cm;
        height: 0.8px;
        background: var(--lila-tekst, #d500f9);
        margin: 1px 0;
      }
    `;
    inhoud.appendChild(stijl);

    const tabel = document.createElement('table');
    tabel.classList.add('tg-tabel');

    const thead = document.createElement('thead');
    const trH   = document.createElement('tr');
    ['Getal', 'Tegengestelde', 'Omgekeerde'].forEach(kop => {
      const th = document.createElement('th');
      th.textContent = kop;
      trH.appendChild(th);
    });
    thead.appendChild(trH);
    tabel.appendChild(thead);

    const tbody = document.createElement('tbody');
    RIJEN.forEach((rij, rijIdx) => {
      const tr = document.createElement('tr');

      // Kolom 1: getal (gegeven)
      const tdGetal = document.createElement('td');
      tdGetal.classList.add('tg-getal');
      if (rij.getal.n === 1) {
        tdGetal.textContent = String(rij.getal.t);
      } else {
        tdGetal.appendChild(maakBreuk(String(rij.getal.t), String(rij.getal.n)));
      }
      tr.appendChild(tdGetal);

      // Kolom 2: tegengestelde
      const tdTeg = document.createElement('td');
      tdTeg.appendChild(_maakInvoerCel(rijIdx * 2, rij.tegengestelde));
      tr.appendChild(tdTeg);

      // Kolom 3: omgekeerde
      const tdOmg = document.createElement('td');
      tdOmg.appendChild(_maakInvoerCel(rijIdx * 2 + 1, rij.omgekeerde));
      tr.appendChild(tdOmg);

      tbody.appendChild(tr);
    });

    tabel.appendChild(tbody);
    inhoud.appendChild(tabel);

    maakPdfKnop(inhoud, 'https://drive.google.com/file/d/1VlHP5ldj82ndanMC98ozjQA3ZjqdZnpo/preview?usp=drive_link');

  }

  // ── Invoercel ─────────────────────────────────────────────
  function _maakInvoerCel(antIdx, correct) {
    const celWrap = document.createElement('div');
    celWrap.classList.add('tg-cel-wrap');

    const breukInvoer = document.createElement('div');
    breukInvoer.classList.add('tg-breuk-invoer');

    const tellerInvoer = document.createElement('input');
    tellerInvoer.classList.add('tg-teller-invoer');
    tellerInvoer.type        = 'text';
    tellerInvoer.placeholder = '___';
    tellerInvoer.disabled    = _blokkeren;

    const streep = document.createElement('div');
    streep.classList.add('tg-streep-invoer');
    streep.style.display = 'none';

    const noemerInvoer = document.createElement('input');
    noemerInvoer.classList.add('tg-noemer-invoer');
    noemerInvoer.type        = 'text';
    noemerInvoer.placeholder = '___';
    noemerInvoer.disabled    = _blokkeren;
    noemerInvoer.style.display = 'none';

    breukInvoer.appendChild(tellerInvoer);
    breukInvoer.appendChild(streep);
    breukInvoer.appendChild(noemerInvoer);
    celWrap.appendChild(breukInvoer);

    // Herstel opgeslagen waarde
    const opgeslagen = _antwoorden[antIdx].antwoord;
    if (opgeslagen !== null && opgeslagen !== undefined) {
      const str = String(opgeslagen);
      if (str.includes('/')) {
        const delen = str.split('/');
        tellerInvoer.value     = delen[0];
        noemerInvoer.value     = delen[1];
        streep.style.display       = 'block';
        noemerInvoer.style.display = 'block';
      } else {
        tellerInvoer.value = str;
      }
    }

    // / detectie: zet streep en noemer zichtbaar
    tellerInvoer.addEventListener('keydown', e => {
      if (e.key === '/') {
        e.preventDefault();
        streep.style.display       = 'block';
        noemerInvoer.style.display = 'block';
        noemerInvoer.focus();
      }
      if (e.key === 'Backspace' && tellerInvoer.value === '' && noemerInvoer.value === '') {
        streep.style.display       = 'none';
        noemerInvoer.style.display = 'none';
      }
    });

    noemerInvoer.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && noemerInvoer.value === '') {
        streep.style.display       = 'none';
        noemerInvoer.style.display = 'none';
        tellerInvoer.focus();
      }
    });

    // Lokaal opslaan in _antwoorden (GEEN slaOp aanroep)
    const _slaLokaalOp = () => {
      const t = tellerInvoer.value.trim();
      const n = noemerInvoer.value.trim();
      if (t === '') {
        _antwoorden[antIdx].antwoord = null;
      } else if (noemerInvoer.style.display === 'none' || n === '') {
        _antwoorden[antIdx].antwoord = t;
      } else {
        _antwoorden[antIdx].antwoord = `${t}/${n}`;
      }
    };

    tellerInvoer.addEventListener('input', _slaLokaalOp);
    noemerInvoer.addEventListener('input', _slaLokaalOp);

    _invoerVelden.push({ tellerInvoer, noemerInvoer, antIdx });

    // Verbetering: alleen visueel, geen wijzigingen aan _antwoorden
    if (_verbeterd) {
      const isJuist = _vergelijkAntwoord(_antwoorden[antIdx].antwoord, correct);
      breukInvoer.classList.add(isJuist ? 'juist' : 'fout');
      if (!isJuist) {
        celWrap.appendChild(_maakOplossing(correct));
      }
    }

    return celWrap;
  }

  // ── Antwoord vergelijken ──────────────────────────────────
  function _vergelijkAntwoord(antwoord, correct) {
    if (antwoord === null || antwoord === undefined || antwoord === '') return false;
    const str = String(antwoord).replace(/\s+/g, '');
    if (correct.n === 1) {
      return str === String(correct.t);
    } else {
      if (!str.includes('/')) return false;
      const delen = str.split('/');
      if (delen.length !== 2) return false;
      const t = parseInt(delen[0]);
      const n = parseInt(delen[1]);
      if (isNaN(t) || isNaN(n) || n <= 0) return false;
      return t === correct.t && n === correct.n;
    }
  }

  // ── Oplossing weergeven ───────────────────────────────────
  function _maakOplossing(correct) {
    if (correct.n === 1) {
      const span = document.createElement('span');
      span.classList.add('tg-opl-span');
      span.textContent = String(correct.t);
      return span;
    } else {
      const wrap = document.createElement('div');
      wrap.classList.add('tg-opl-breuk');
      const t = document.createElement('span');
      t.textContent = String(correct.t);
      const s = document.createElement('div');
      s.classList.add('tg-opl-streep');
      const n = document.createElement('span');
      n.textContent = String(correct.n);
      wrap.appendChild(t);
      wrap.appendChild(s);
      wrap.appendChild(n);
      return wrap;
    }
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();