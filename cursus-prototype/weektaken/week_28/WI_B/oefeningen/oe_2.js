// ============================================================
//  oefeningen/oe_2.js  —  Drag and drop getallen
// ============================================================

window.__taakOefening = (function () {

  // ── Staat ─────────────────────────────────────────────────
  // Volgorde: [0, 1, 2, -1, -2, -3, 0.5, -7.8, 3/4]
  let _antwoorden = [
    { antwoord: null, score: 0 }, // 0
    { antwoord: null, score: 0 }, // 1
    { antwoord: null, score: 0 }, // 2
    { antwoord: null, score: 0 }, // -1
    { antwoord: null, score: 0 }, // -2
    { antwoord: null, score: 0 }, // -3
    { antwoord: null, score: 0 }, // 0,5
    { antwoord: null, score: 0 }, // -7,8
    { antwoord: null, score: 0 }, // 3/4
  ];
  let _invoerVelden = [];
  let _container    = null;
  let _verbeterd    = false;
  let _blokkeren    = false;

  // ── Definitie van items ───────────────────────────────────
  // veld: 0 = natuurlijk, 1 = geheel niet-natuurlijk, 2 = rationaal niet-geheel
  const ITEMS = [
    { id: 0, veld: 0, label: '0' },
    { id: 1, veld: 0, label: '1' },
    { id: 2, veld: 0, label: '2' },
    { id: 3, veld: 1, label: '-1' },
    { id: 4, veld: 1, label: '-2' },
    { id: 5, veld: 1, label: '-3' },
    { id: 6, veld: 2, label: '0,5' },
    { id: 7, veld: 2, label: '-7,8' },
    { id: 8, veld: 2, label: '3/4', breuk: true },
  ];

  // Huidige plaatsing: itemId → veldNr (of null = in bank)
  let _plaatsing = {};

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd, mail, slaOp, leerling, herlaadLeerling, terugNaarOverzicht, blokkeren) {
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a
          : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < 9) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _container = container;
    _verbeterd = verbeterd;
    _blokkeren = blokkeren || verbeterd || false;
    _invoerVelden = [];

    // Plaatsing reconstrueren uit antwoorden
    _plaatsing = {};
    ITEMS.forEach(item => {
      const a = _antwoorden[item.id].antwoord;
      if (a !== null && a !== undefined && a !== false) {
        // antwoord = veldnummer (0, 1 of 2) indien correct geplaatst
        // we slaan het veldnummer op als antwoord
        _plaatsing[item.id] = (typeof a === 'number') ? a : null;
      }
    });

    _container.innerHTML = '';
    _bouwOefening();
  }

  // ── Oefening bouwen ───────────────────────────────────────
  function _bouwOefening() {
    const inhoud = maakOefening({ id: 'oe_2', nummer: 2, container: _container });
    voegTekstToe(inhoud, 'Versleep de getallen naar de juiste plaats.', ['intro-tekst']);

    // ── Stijlen ───────────────────────────────────────────
    const stijl = document.createElement('style');
    stijl.textContent = `
      .dd-wrap {
        display: flex;
        flex-direction: column;
        gap: 0.3cm;
        margin-top: 0.3cm;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
      }
      .dd-bank {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2cm;
        min-height: 1.2cm;
        padding: 0.2cm;
        border: 1.5px dashed var(--groen-scheiding, #a5d6a7);
        border-radius: var(--radius, 8px);
        background: #fafafa;
      }
      .dd-rij {
        display: flex;
        align-items: center;
        gap: 0.3cm;
      }
      .dd-label {
        width: 6cm;
        flex-shrink: 0;
        font-weight: bold;
        color: var(--groen-donker, #4a7c59);
      }
      .dd-veld {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2cm;
        min-height: 1.2cm;
        min-width: 5cm;
        padding: 0.2cm;
        border: 1.5px solid var(--groen-donker, #4a7c59);
        border-radius: var(--radius, 8px);
        background: var(--wit, #ffffff);
      }
      .dd-veld.dragover {
        background: var(--groen-pastel, #c8e6c9);
      }
      .dd-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1.2cm;
        height: 0.9cm;
        padding: 0 0.2cm;
        border: 1.5px solid var(--groen-donker, #4a7c59);
        border-radius: 4px;
        background: var(--wit, #ffffff);
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
        cursor: grab;
        user-select: none;
        box-sizing: border-box;
      }
      .dd-item:active { cursor: grabbing; opacity: 0.7; }
      .dd-item.juist  { 
        border-color: var(--groen-donker, #4a7c59);
        color: var(--groen-donker, #4a7c59);
      }
      .dd-item.fout   { 
        border-color: var(--oranje-rand, #e65100);
        color: var(--oranje-rand, #e65100);
      }
      .breuk-html {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        vertical-align: middle;
        font-size: 0.85em;
        line-height: 1.1;
      }
      .breuk-html .teller {
        //border-bottom: 1.5px solid currentColor;
        padding: 0 2px;
        text-align: center;
      }
      .breuk-html .noemer {
        padding: 0 2px;
        text-align: center;
      }
    `;
    inhoud.appendChild(stijl);

    const wrap = document.createElement('div');
    wrap.classList.add('dd-wrap');

    // ── Bank ──────────────────────────────────────────────
    const bankLabel = document.createElement('div');
    bankLabel.style.cssText = 'font-family: var(--font, Arial); font-size: var(--fontsize, 10pt); color: var(--tekst-zacht, #555); margin-bottom: 0.1cm;';
    bankLabel.textContent = 'Getallen:';
    wrap.appendChild(bankLabel);

    const bank = document.createElement('div');
    bank.classList.add('dd-bank');
    bank.dataset.veld = 'bank';
    wrap.appendChild(bank);

    // ── Velden ────────────────────────────────────────────
    const veldLabels = [
      'Natuurlijk getal',
      'Geheel getal, maar niet natuurlijk',
      'Rationaal getal, maar niet geheel',
    ];

    const veldEls = [];
    veldLabels.forEach((lbl, i) => {
      const rij = document.createElement('div');
      rij.classList.add('dd-rij');

      const label = document.createElement('div');
      label.classList.add('dd-label');
      label.textContent = lbl;
      rij.appendChild(label);

      const veld = document.createElement('div');
      veld.classList.add('dd-veld');
      veld.dataset.veld = String(i);
      rij.appendChild(veld);

      wrap.appendChild(rij);
      veldEls.push(veld);
    });

    inhoud.appendChild(wrap);

    // ── Items aanmaken en willekeurig schudden ────────────
    const volgorde = [...ITEMS].sort(() => Math.random() - 0.5);

    volgorde.forEach(item => {
      const el = _maakItem(item);

      // Plaatsen op basis van opgeslagen plaatsing
      const opgeslagenVeld = _plaatsing[item.id];
      if (opgeslagenVeld !== undefined && opgeslagenVeld !== null && veldEls[opgeslagenVeld]) {
        veldEls[opgeslagenVeld].appendChild(el);
      } else {
        bank.appendChild(el);
      }

      // Verbetering toepassen
      if (_blokkeren) {
        el.draggable = false;
        el.style.cursor = 'default';
      }
      if (_verbeterd) {
        const juist = item.veld === _plaatsing[item.id];
        el.classList.add(juist ? 'juist' : 'fout');
      }
    });

    // ── Drop-zones instellen ──────────────────────────────
    if (!_blokkeren) {
      [bank, ...veldEls].forEach(zone => {
        zone.addEventListener('dragover', e => {
          e.preventDefault();
          zone.classList.add('dragover');
        });
        zone.addEventListener('dragleave', () => {
          zone.classList.remove('dragover');
        });
        zone.addEventListener('drop', e => {
          e.preventDefault();
          zone.classList.remove('dragover');
          const itemId = parseInt(e.dataTransfer.getData('text/plain'));
          const el = document.querySelector(`[data-item-id="${itemId}"]`);
          if (!el) return;
          zone.appendChild(el);

          // Plaatsing bijwerken
          const veldNr = zone.dataset.veld === 'bank'
            ? null
            : parseInt(zone.dataset.veld);
          _plaatsing[itemId] = veldNr;

          // Antwoord bijwerken
          if (veldNr !== null) {
            _antwoorden[itemId].antwoord = veldNr;
          } else {
            _antwoorden[itemId].antwoord = null;
          }
        });
      });
    }

    maakPdfKnop(inhoud, 'https://drive.google.com/file/d/14zISb0K_9Vww7-GGgscp_jrivbC_PjzM/preview?usp=drive_link');

  }

  // ── Item aanmaken ─────────────────────────────────────────
  function _maakItem(item) {
    const el = document.createElement('div');
    el.classList.add('dd-item');
    el.dataset.itemId = String(item.id);
    el.draggable = !_blokkeren;

    if (item.breuk) {
      el.appendChild(maakBreuk('3', '4'));
    } else {
      el.textContent = item.label;
    }

    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', String(item.id));
    });

    return el;
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    // Antwoord = juist (true) als item in correct veld staat
    ITEMS.forEach(item => {
      const veld = _plaatsing[item.id];
      if (veld === null || veld === undefined) {
        _antwoorden[item.id].antwoord = null;
      } else {
        _antwoorden[item.id].antwoord = veld;
      }
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();