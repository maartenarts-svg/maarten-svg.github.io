// ============================================================
//  oefeningen/oe_4.js  —  Tabel: tegengestelde en omgekeerde
// ============================================================

window.__taakOefening = (function () {

  // ── Opgaven ───────────────────────────────────────────────
  // Formaat: { getal, tegengestelde, omgekeerde }
  // Breuken als { t, n }, gehele getallen als { t, n:1 }
  const RIJEN = [
    {
      getal:        { t: 9,  n: 1  },
      tegengestelde:{ t: -9, n: 1  },
      omgekeerde:   { t: 1,  n: 9  },
    },
    {
      getal:        { t: -3, n: 1  },
      tegengestelde:{ t: 3,  n: 1  },
      omgekeerde:   { t: -1, n: 3  },
    },
    {
      getal:        { t: 1,  n: 5  },
      tegengestelde:{ t: -1, n: 5  },
      omgekeerde:   { t: 5,  n: 1  },
    },
    {
      getal:        { t: -7, n: 4  },
      tegengestelde:{ t: 7,  n: 4  },
      omgekeerde:   { t: -4, n: 7  },
    },
  ];

  // ── Staat ─────────────────────────────────────────────────
  // 8 antwoorden: per rij [tegengestelde, omgekeerde]
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
    const inhoud = maakOefening({ id: 'oe_4', nummer: 4, container: _container });
    voegTekstToe(inhoud, 'Vul de tabel aan.', ['intro-tekst']);

    const divTest = document.createElement('div');
    inhoud.appendChild(divTest);
    const spanTest = maakBreuk('5','3','opgave');
    divTest.appendChild(spanTest);

    // Stijlen
    const stijl = document.createElement('style');
    stijl.textContent = `
      .tg-tabel {
        border-collapse: collapse;
        width: 100%;
        margin-top: 0.3cm;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
      }
      .tg-tabel th {
        background: var(--groen-pastel, #c8e6c9);
        color: var(#1a1a1a);
        font-weight: bold;
        padding: 0.15cm 0.3cm;
        border: 1px solid var(--groen-scheiding, #a5d6a7);
        text-align: center;
      }
      .tg-tabel td {
        border: 1px solid var(--groen-scheiding, #a5d6a7);
        padding: 0.1cm 0.2cm;
        vertical-align: middle;
        text-align: center;
      }
      .tg-getal {
        font-weight: bold;
        color: var(--tekst, #1a1a1a);
      }
      .tg-invoer-wrap {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.1cm;
        min-width: 3cm;
      }
      .tg-invoer {
        border: none;
        border-bottom: 1.5px solid var(--groen-donker, #4a7c59);
        background: transparent;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
        color: var(--tekst, #1a1a1a);
        outline: none;
        text-align: center;
        width: 1.5cm;
        padding: 0 0.1cm;
        height: 0.7cm;
      }
      .tg-invoer:disabled {
        color: var(--tekst, #1a1a1a);
      }
      .tg-breuk-wrap {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        vertical-align: middle;
      }
      .tg-teller {
        border: none;
        border-bottom: 1.5px solid var(#1a1a1a);
        background: transparent;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
        color: var(--tekst, #1a1a1a);
        outline: none;
        text-align: center;
        width: 0.7cm;
        padding: 0;
        height: 0.6cm;
      }
      .tg-streep {
        width: 100%;
        min-width: 0.7cm;
        height: 1px;
        background: var(--tekst, #1a1a1a);
        margin: 1px 0;
      }
      .tg-noemer {
        border: none;
        background: transparent;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
        color: var(--tekst, #1a1a1a);
        outline: none;
        text-align: center;
        width: 0.7cm;
        padding: 0;
        height: 0.6cm;
      }
      .tg-breuk-wrap.juist .tg-teller,
      .tg-breuk-wrap.juist .tg-noemer,
      .tg-invoer.juist {
        color: var(--groen-midden, #6aab7e);
      }
      .tg-breuk-wrap.juist .tg-streep,
      .tg-invoer.juist {
        border-color: var(--groen-midden, #6aab7e);
      }
      .tg-breuk-wrap.fout .tg-teller,
      .tg-breuk-wrap.fout .tg-noemer,
      .tg-invoer.fout {
        color: var(--oranje-rand, #e65100);
        text-decoration: line-through;
      }
      .tg-breuk-wrap.fout .tg-streep {
        background: var(--oranje-rand, #e65100);
      }
      .tg-opl {
        color: var(--blauw-oplossing, #1a4fa0);
        font-family: var(--font-oplossing, 'Comic Sans MS');
        font-size: var(--fontsize, 10pt);
        margin-left: 0.2cm;
        display: inline-flex;
        align-items: center;
      }
      .tg-opl-breuk {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        color: var(--blauw-oplossing, #1a4fa0);
        font-family: var(--font-oplossing, 'Comic Sans MS');
        font-size: var(--fontsize, 10pt);
        margin-left: 0.2cm;
        vertical-align: middle;
      }
      .tg-opl-streep {
        width: 100%;
        min-width: 1cm;
        height: 1.5px;
        background: var(--blauw-oplossing, #1a4fa0);
        margin: 1px 0;
      }
      .tg-tabel td .rij {
        height: auto;
        border-bottom: none;
      }
    `;
    inhoud.appendChild(stijl);

    // Tabel bouwen
    const tabel = document.createElement('table');
    tabel.classList.add('tg-tabel');

    // Header
    const thead = document.createElement('thead');
    const trH   = document.createElement('tr');
    ['Getal', 'Tegengestelde', 'Omgekeerde'].forEach(kop => {
      const th = document.createElement('th');
      th.textContent = kop;
      trH.appendChild(th);
    });
    thead.appendChild(trH);
    tabel.appendChild(thead);

    // Body
    const tbody = document.createElement('tbody');
    RIJEN.forEach((rij, rijIdx) => {
      const tr = document.createElement('tr');

      // Kolom 1: getal (gegeven)
      const tdGetal = document.createElement('td');
      tdGetal.classList.add('tg-getal');
      tdGetal.appendChild(_maakGetalWeergave(rij.getal));
      tr.appendChild(tdGetal);

      // Kolom 2: tegengestelde
      const antIdx1 = rijIdx * 2;
      const tdTeg = document.createElement('td');
      const wrap1 = _maakInvoerCel(antIdx1, rij.tegengestelde);
      tdTeg.appendChild(wrap1);
      tr.appendChild(tdTeg);

      // Kolom 3: omgekeerde
      const antIdx2 = rijIdx * 2 + 1;
      const tdOmg = document.createElement('td');
      const wrap2 = _maakInvoerCel(antIdx2, rij.omgekeerde);
      tdOmg.appendChild(wrap2);
      tr.appendChild(tdOmg);

      tbody.appendChild(tr);
    });

    tabel.appendChild(tbody);
    inhoud.appendChild(tabel);
  }

  // ── Getal weergeven (gegeven kolom) ───────────────────────
  function _maakGetalWeergave(getal) {
    if (getal.n === 1) {
      const span = document.createElement('span');
      span.textContent = String(getal.t);
      return span;
    }
    return maakBreuk(String(getal.t), String(getal.n));
  }

  // ── Invoercel maken ───────────────────────────────────────
  function _maakInvoerCel(antIdx, correct) {
    const wrap = document.createElement('div');
    wrap.classList.add('tg-invoer-wrap');

    const opgeslagen = _antwoorden[antIdx].antwoord;

    // Bepaal of het antwoord een breuk is of een geheel getal
    // We maken altijd een breuk-invoer (teller + streep + noemer)
    // maar als de noemer leeg blijft, behandelen we het als geheel getal

    const breukWrap = document.createElement('div');
    breukWrap.classList.add('tg-breuk-wrap');

    const tellerInvoer = document.createElement('input');
    tellerInvoer.classList.add('tg-teller');
    tellerInvoer.type        = 'text';
    tellerInvoer.placeholder = '…';
    tellerInvoer.disabled    = _blokkeren;

    const streep = document.createElement('div');
    streep.classList.add('tg-streep');
    streep.style.display = 'none'; // verborgen tot / getypt wordt

    const noemerInvoer = document.createElement('input');
    noemerInvoer.classList.add('tg-noemer');
    noemerInvoer.type        = 'text';
    noemerInvoer.placeholder = '…';
    noemerInvoer.disabled    = _blokkeren;
    noemerInvoer.style.display = 'none'; // verborgen tot / getypt wordt

    breukWrap.appendChild(tellerInvoer);
    breukWrap.appendChild(streep);
    breukWrap.appendChild(noemerInvoer);
    wrap.appendChild(breukWrap);

    // Herstel opgeslagen waarde
    if (opgeslagen !== null && opgeslagen !== undefined) {
      if (typeof opgeslagen === 'string' && opgeslagen.includes('/')) {
        const delen = opgeslagen.split('/');
        tellerInvoer.value = delen[0];
        noemerInvoer.value = delen[1];
        streep.style.display    = '';
        noemerInvoer.style.display = '';
      } else {
        tellerInvoer.value = String(opgeslagen);
      }
    }

    // / detectie in teller
    tellerInvoer.addEventListener('keydown', e => {
      if (e.key === '/') {
        e.preventDefault();
        streep.style.display       = '';
        noemerInvoer.style.display = '';
        noemerInvoer.focus();
      }
    });

    // Opslaan bij invoer
    const _slaWaardeOp = () => {
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

    tellerInvoer.addEventListener('input', _slaWaardeOp);
    noemerInvoer.addEventListener('input', _slaWaardeOp);

    _invoerVelden.push({ tellerInvoer, noemerInvoer, antIdx });

    // Verbetering toepassen
    if (_verbeterd) {
      const antwoord = _antwoorden[antIdx].antwoord;
      const isJuist  = _vergelijkAntwoord(antwoord, correct);

      if (isJuist) {
        breukWrap.classList.add('juist');
        _antwoorden[antIdx].score = 1;
      } else {
        breukWrap.classList.add('fout');
        _antwoorden[antIdx].score = 0;

        // Oplossing tonen
        const oplEl = _maakOplossing(correct);
        wrap.appendChild(oplEl);
      }
    }

    return wrap;
  }

  // ── Antwoord vergelijken ──────────────────────────────────
  function _vergelijkAntwoord(antwoord, correct) {
    if (antwoord === null || antwoord === undefined || antwoord === '') return false;

    // Normaliseer antwoord
    const antStr = String(antwoord).replace(/\s+/g, '');

    if (correct.n === 1) {
      // Geheel getal verwacht
      return antStr === String(correct.t);
    } else {
      // Breuk verwacht: moet t/n zijn
      if (!antStr.includes('/')) return false;
      const delen = antStr.split('/');
      if (delen.length !== 2) return false;
      const t = parseInt(delen[0]);
      const n = parseInt(delen[1]);
      if (isNaN(t) || isNaN(n)) return false;
      if (n <= 0) return false; // negatief teken mag alleen in teller
      return t === correct.t && n === correct.n;
    }
  }

  // ── Oplossing weergeven ───────────────────────────────────
  function _maakOplossing(correct) {
    if (correct.n === 1) {
      const span = document.createElement('span');
      span.classList.add('tg-opl');
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