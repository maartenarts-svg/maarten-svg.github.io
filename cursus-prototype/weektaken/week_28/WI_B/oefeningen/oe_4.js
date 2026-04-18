// ============================================================
//  oefeningen/oe_4.js  —  Aftrekking als optelling, deling als vermenigvuldiging
// ============================================================

window.__taakOefening = (function () {

  // ── Opgaven ───────────────────────────────────────────────
  // Pas hier de opgaven aan
  const OPGAVEN = [
    { label: 'a|', voor: '5 - 9 = 5 + ',       antwoord: '(-9)', breuk: false },
    { label: 'b|', voor: '-10 - 8 = -10 + ',    antwoord: '(-8)', breuk: false },
    { label: 'c|', voor: '-20 - (-5) = -20 + ', antwoord: '5',    breuk: false },
    { label: 'd|', voor: '8 : 2 = 8 · ',        antwoord: '1/2',  breuk: true  },
    { label: 'e|', voor: '10 : 7 = 10 · ',      antwoord: '1/7',  breuk: true  },
    { label: 'f|', voor: null,                   antwoord: '9/4',  breuk: true  },
  ];

  // ── Breedtes — pas hier aan ────────────────────────────────
  const BR_OPG  = '3cm';   // breedte opgavetekst
  const BR_INV  = '1cm';   // breedte invoerveld
  const BR_OPL  = '1cm';   // breedte correcte oplossing

  // ── Staat ─────────────────────────────────────────────────
  let _antwoorden = [
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
      while (_antwoorden.length < 6) _antwoorden.push({ antwoord: null, score: 0 });
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

    voegLijstToe(inhoud, 'bullet', '0cm', '0.3cm', [
      'Noteer elke aftrekking als een optelling.',
      'Noteer elke deling als een vermenigvuldiging.',
    ]);
    voegTekstToe(inhoud,'<span class="markeer-lila">Om een breuk te noteren, klik je op /.</span>')      

    const { tbody } = maakOefTabel(inhoud, 2, true);

    // Paren: [links, rechts]
    [[0, 3], [1, 4], [2, 5]].forEach(([links, rechts]) => {
      const tr = document.createElement('tr');

      [links, rechts].forEach(idx => {
        const td = document.createElement('td');
        td.classList.add(idx === links ? 'kolom-links' : 'kolom-rechts');

        const div = document.createElement('div');
        div.classList.add('rij', 'breuk');
        div.style.cssText = 'display: flex; align-items: center;';

        // Label
        const lblSpan = document.createElement('span');
        lblSpan.classList.add('lbl');
        lblSpan.textContent = OPGAVEN[idx].label;
        div.appendChild(lblSpan);

        // Opgavetekst
        const opgSpan = document.createElement('span');
        opgSpan.style.cssText = `width: ${BR_OPG}; flex-shrink: 0; display: inline-flex; align-items: center; gap: 0.05cm;`;
        if (idx === 5) {
          // Opgave f: breuken in de tekst
          opgSpan.appendChild(maakBreuk('5', '2'));
          opgSpan.appendChild(htmlSpan(' '));
          opgSpan.appendChild(htmlSpan(':'));
          opgSpan.appendChild(htmlSpan(' '));
          opgSpan.appendChild(maakBreuk('4', '9'));
          opgSpan.appendChild(htmlSpan(' '));
          opgSpan.appendChild(htmlSpan('='));
          opgSpan.appendChild(htmlSpan(' '));
          opgSpan.appendChild(maakBreuk('5', '2'));
          opgSpan.appendChild(htmlSpan(' '));
          opgSpan.appendChild(htmlSpan('·'));
          opgSpan.appendChild(htmlSpan(' '));
        } else {
          opgSpan.textContent = OPGAVEN[idx].voor;
        }
        div.appendChild(opgSpan);

        // Invoerveld
        const invSpan = document.createElement('span');
        invSpan.style.cssText = `width: ${BR_INV}; flex-shrink: 0; display: inline-flex; align-items: center;`;
        invSpan.appendChild(_maakInvoer(idx));
        div.appendChild(invSpan);

        const WitSpan = document.createElement('span');
        WitSpan.style.width = '0.6 cm';
        div.appendChild(WitSpan);

        // Correcte oplossing (alleen bij verbetering en fout)
        const oplSpan = document.createElement('span');
        oplSpan.style.cssText = `width: ${BR_OPL}; flex-shrink: 0; display: inline-flex; align-items: center; margin-left: 0.5cm;`;
        if (_verbeterd) {
          const ant     = _antwoorden[idx].antwoord;
          const correct = OPGAVEN[idx].antwoord;
          const isJuist = _vergelijk(ant, correct);
          if (!isJuist) {
            oplSpan.appendChild(_maakOplossing(correct));
          }
        }
        div.appendChild(oplSpan);

        td.appendChild(div);
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    maakPdfKnop(inhoud, 'https://drive.google.com/file/d/1PJmbM9-YifW3Efm3sZ_THXqAgWhEJSp5/preview?usp=drive_link');

  }

  // ── Invoerveld ────────────────────────────────────────────
  function _maakInvoer(antIdx) {
    const breukInvoer = document.createElement('span');
    breukInvoer.style.cssText = 'display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; line-height: 1.1;';

    const tellerInvoer = document.createElement('input');
    tellerInvoer.type        = 'text';
    tellerInvoer.placeholder = '___';
    tellerInvoer.disabled    = _blokkeren;
    tellerInvoer.style.cssText = `
      display: block; border: none;
      //border-bottom: 1.5px solid var(--sl-kleur, #b0b0b0);
      background: transparent;
      font-family: var(--font-oplossing, 'Comic Sans MS'); font-size: var(--fontsize, 10pt);
      color: var(--blauw-oplossing, #1a4fa0); outline: none;
      text-align: center; width: ${BR_INV}; padding: 0 2px;
      height: auto; line-height: 1.1;
    `;

    const streep = document.createElement('div');
    streep.style.cssText = `min-width: 0.4cm; height: 0.8px; background: var(--blauw-oplossing, #1a4fa0); margin: 1px 0; display: none;`;

    const noemerInvoer = document.createElement('input');
    noemerInvoer.type        = 'text';
    noemerInvoer.placeholder = '___';
    noemerInvoer.disabled    = _blokkeren;
    noemerInvoer.style.cssText = `
      display: none; border: none;
      background: transparent;
      font-family: var(--font-oplossing, 'Comic Sans MS'); font-size: var(--fontsize, 10pt);
      color: var(--blauw-oplossing, #1a4fa0); outline: none;
      text-align: center; width: ${BR_INV}; padding: 0 2px;
      height: auto; line-height: 1.1; margin-top: 1px;
    `;

    breukInvoer.appendChild(tellerInvoer);
    breukInvoer.appendChild(streep);
    breukInvoer.appendChild(noemerInvoer);

    // Herstel opgeslagen waarde
    const opgeslagen = _antwoorden[antIdx].antwoord;
    if (opgeslagen !== null && opgeslagen !== undefined) {
      const str = String(opgeslagen);
      if (str.includes('/')) {
        const delen = str.split('/');
        tellerInvoer.value         = delen[0];
        noemerInvoer.value         = delen[1];
        streep.style.display       = 'block';
        noemerInvoer.style.display = 'block';
      } else {
        tellerInvoer.value = str;
      }
    }

    // / detectie
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

    // Lokaal opslaan
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

    _invoerVelden.push(tellerInvoer);

    // Verbetering
    if (_verbeterd) {
      const ant     = _antwoorden[antIdx].antwoord;
      const correct = OPGAVEN[antIdx].antwoord;
      const isJuist = _vergelijk(ant, correct);
      const kleur   = isJuist ? 'var(--groen-donker, #4a7c59)' : 'var(--oranje-rand, #e65100)';
      tellerInvoer.style.color            = kleur;
      tellerInvoer.style.borderBottomColor = kleur;
      if (!isJuist) {
        tellerInvoer.style.textDecoration = 'line-through';
      }
      if (noemerInvoer.style.display !== 'none') {
        noemerInvoer.style.color = kleur;
        streep.style.background  = kleur;
        if (!isJuist) {
          noemerInvoer.style.textDecoration = 'line-through';
        }
      }
    }

    return breukInvoer;
  }

  // ── Vergelijken ───────────────────────────────────────────
  function _vergelijk(antwoord, correct) {
    if (antwoord === null || antwoord === undefined) return false;
    return String(antwoord).replace(/\s+/g, '') === correct.replace(/\s+/g, '');
  }

  // ── Oplossing weergeven ───────────────────────────────────
  function _maakOplossing(correct) {
    if (!correct.includes('/')) {
      const span = document.createElement('span');
      span.style.cssText = `color: var(--lila-tekst, #d500f9); font-family: var(--font-oplossing, 'Comic Sans MS'); font-size: var(--fontsize, 10pt);`;
      span.textContent = correct;
      return span;
    }
    const delen = correct.split('/');
    const wrap  = document.createElement('span');
    wrap.style.cssText = `display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; line-height: 1.1; color: var(--lila-tekst, #d500f9); font-family: var(--font-oplossing, 'Comic Sans MS'); font-size: var(--fontsize, 10pt);`;
    const t = document.createElement('span');
    t.textContent = delen[0];
    const s = document.createElement('div');
    s.style.cssText = `min-width: 0.6cm; height: 0.8px; background: var(--lila-tekst, #d500f9); margin: 1px 0;`;
    const n = document.createElement('span');
    n.textContent = delen[1];
    wrap.appendChild(t);
    wrap.appendChild(s);
    wrap.appendChild(n);
    return wrap;
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();