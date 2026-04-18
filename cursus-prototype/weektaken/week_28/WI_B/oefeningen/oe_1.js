// ============================================================
//  oefeningen/oe_1.js  —  Drag and drop verzamelingen
// ============================================================

window.__taakOefening = (function () {

  // ── Staat ─────────────────────────────────────────────────
  let _antwoorden = [
    { antwoord: null, score: 0 }, // ℕ
    { antwoord: null, score: 0 }, // ℤ
    { antwoord: null, score: 0 }, // ℚ
  ];
  let _invoerVelden = [];
  let _container    = null;
  let _verbeterd    = false;
  let _blokkeren    = false;

  // ── Definitie van items ───────────────────────────────────
  // veld: 0 = ℕ, 1 = ℤ, 2 = ℚ
  const ITEMS = [
    { id: 0, veld: 0, label: 'De verzameling van de natuurlijke getallen.' },
    { id: 1, veld: 1, label: 'De verzameling van de gehele getallen.' },
    { id: 2, veld: 2, label: 'De verzameling van de rationale getallen.' },
  ];

  const VELD_LABELS = ['ℕ', 'ℤ', 'ℚ'];

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
      while (_antwoorden.length < 3) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _container = container;
    _verbeterd = verbeterd;
    _blokkeren = blokkeren || verbeterd || false;
    _invoerVelden = [];

    // Plaatsing reconstrueren uit antwoorden
    _plaatsing = {};
    ITEMS.forEach(item => {
      const a = _antwoorden[item.veld].antwoord;
      if (a !== null && a !== undefined) {
        if (a === item.id) _plaatsing[item.id] = item.veld;
      }
    });

    _container.innerHTML = '';
    _bouwOefening();
  }

  // ── Oefening bouwen ───────────────────────────────────────
  function _bouwOefening() {
    const inhoud = maakOefening({ id: 'oe_1', nummer: 1, container: _container });
    voegTekstToe(inhoud, 'Versleep elke omschrijving naar de juiste verzameling.', ['intro-tekst']);

    const stijl = document.createElement('style');
    stijl.textContent = `
      .dd6-wrap {
        display: flex;
        flex-direction: column;
        gap: 0.3cm;
        margin-top: 0.3cm;
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
      }
      .dd6-bank {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2cm;
        min-height: 1.2cm;
        padding: 0.2cm;
        border: 1.5px dashed var(--groen-scheiding, #a5d6a7);
        border-radius: var(--radius, 8px);
        background: #fafafa;
      }
      .dd6-rij {
        display: flex;
        align-items: center;
        gap: 0.3cm;
      }
      .dd6-label {
        width: 1.5cm;
        flex-shrink: 0;
        font-weight: bold;
        font-size: 14pt;
        color: var(--groen-donker, #4a7c59);
        text-align: right;
      }
      .dd6-veld {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2cm;
        min-height: 1.2cm;
        flex: 1;
        padding: 0.2cm;
        border: 1.5px solid var(--groen-donker, #4a7c59);
        border-radius: var(--radius, 8px);
        background: var(--wit, #ffffff);
      }
      .dd6-veld.dragover {
        background: var(--groen-pastel, #c8e6c9);
      }
      .dd6-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.1cm 0.2cm;
        border: 1.5px solid var(--groen-donker, #4a7c59);
        border-radius: 4px;
        background: var(--wit, #ffffff);
        font-family: var(--font, Arial);
        font-size: var(--fontsize, 10pt);
        cursor: grab;
        user-select: none;
        box-sizing: border-box;
      }
      .dd6-item:active { cursor: grabbing; opacity: 0.7; }
      .dd6-item.juist {
        border-color: var(--groen-midden, #6aab7e);
        color: var(--groen-midden, #6aab7e);
      }
      .dd6-item.fout {
        border-color: var(--oranje-rand, #e65100);
        color: var(--oranje-rand, #e65100);
      }
    `;
    inhoud.appendChild(stijl);

    const wrap = document.createElement('div');
    wrap.classList.add('dd6-wrap');

    // Bank
    const bankLabel = document.createElement('div');
    bankLabel.style.cssText = 'font-family: var(--font, Arial); font-size: var(--fontsize, 10pt); color: var(--tekst-zacht, #555); margin-bottom: 0.1cm;';
    bankLabel.textContent = 'Omschrijvingen:';
    wrap.appendChild(bankLabel);

    const bank = document.createElement('div');
    bank.classList.add('dd6-bank');
    bank.dataset.veld = 'bank';
    wrap.appendChild(bank);

    // Velden
    const veldEls = [];
    VELD_LABELS.forEach((lbl, i) => {
      const rij = document.createElement('div');
      rij.classList.add('dd6-rij');

      const label = document.createElement('div');
      label.classList.add('dd6-label');
      label.textContent = lbl;
      rij.appendChild(label);

      const veld = document.createElement('div');
      veld.classList.add('dd6-veld');
      veld.dataset.veld = String(i);
      rij.appendChild(veld);

      wrap.appendChild(rij);
      veldEls.push(veld);
    });

    inhoud.appendChild(wrap);

    // Items aanmaken en willekeurig schudden
    const volgorde = [...ITEMS].sort(() => Math.random() - 0.5);

    volgorde.forEach(item => {
      const el = _maakItem(item);

      const opgeslagenVeld = _plaatsing[item.id];
      if (opgeslagenVeld !== undefined && opgeslagenVeld !== null && veldEls[opgeslagenVeld]) {
        veldEls[opgeslagenVeld].appendChild(el);
      } else {
        bank.appendChild(el);
      }

      if (_blokkeren) {
        el.draggable = false;
        el.style.cursor = 'default';
      }
      if (_verbeterd) {
        const juist = item.veld === _plaatsing[item.id];
        el.classList.add(juist ? 'juist' : 'fout');
      }
    });

    // Drop-zones
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

          const veldNr = zone.dataset.veld === 'bank'
            ? null
            : parseInt(zone.dataset.veld);
          _plaatsing[itemId] = veldNr;

          // Antwoorden bijwerken per veld
          ITEMS.forEach(item => {
            const v = _plaatsing[item.id];
            if (v !== null && v !== undefined) {
              _antwoorden[v].antwoord = item.id;
            }
          });
          // Velden zonder item krijgen null
          [0, 1, 2].forEach(veldNr => {
            const heeftItem = ITEMS.some(item => _plaatsing[item.id] === veldNr);
            if (!heeftItem) _antwoorden[veldNr].antwoord = null;
          });
        });
      });
    }

    maakPdfKnop(inhoud, 'https://drive.google.com/file/d/14zISb0K_9Vww7-GGgscp_jrivbC_PjzM/preview?usp=drive_link');
  }

  // ── Item aanmaken ─────────────────────────────────────────
  function _maakItem(item) {
    const el = document.createElement('div');
    el.classList.add('dd6-item');
    el.dataset.itemId = String(item.id);
    el.draggable = !_blokkeren;
    el.textContent = item.label;

    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', String(item.id));
    });

    return el;
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    [0, 1, 2].forEach(veldNr => {
      const item = ITEMS.find(item => _plaatsing[item.id] === veldNr);
      _antwoorden[veldNr].antwoord = item ? item.id : null;
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();