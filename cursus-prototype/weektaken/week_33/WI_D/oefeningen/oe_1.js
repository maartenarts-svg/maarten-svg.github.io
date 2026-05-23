// ============================================================
//  oefeningen/oe_1.js  —  Vergelijking: x + 7 = 35
//
//  Structuur: vergelijking tonen → tussenstap (L = R) → antwoord (L = R)
//  Tussenstap fout → hele oefening fout.
//  Verbeterd-modus: velden groen/oranje + uitwerking bij fout.
// ============================================================

window.__taakOefening = (function () {

  // ── Correcte antwoorden (spaties genegeerd, lowercase) ───
  const CORRECT_TS_L  = 'x+7-7';
  const CORRECT_TS_R  = '35-7';
  const CORRECT_ANT_L = 'x';
  const CORRECT_ANT_R = '28';

  // ── Staat ────────────────────────────────────────────────
  // [0] tussenstap linkerlid  [1] tussenstap rechterlid
  // [2] antwoord linkerlid    [3] antwoord rechterlid
  let _antwoorden = [
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
  ];
  let _invoerVelden = [];

  // ── Normaliseren: spaties weg, lowercase ─────────────────
  function _norm(s) {
    return (s || '').replace(/\s/g, '').toLowerCase();
  }

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd) {
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < 4) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _invoerVelden = [];
    container.innerHTML = '';

    const inhoud = maakOefening({ id: 'oe_1', nummer: 1, container });
    const intro = document.createElement('p');
    intro.classList.add('intro-tekst');
    intro.innerHTML = 'Los de vergelijking op.<br>Je bent verplicht een tussenstap te noteren!';
    inhoud.appendChild(intro);

    // ── Correctheidsberekening ────────────────────────────
    const tsLJ  = _norm(_antwoorden[0].antwoord) === CORRECT_TS_L;
    const tsRJ  = _norm(_antwoorden[1].antwoord) === CORRECT_TS_R;
    const tsJuist  = tsLJ && tsRJ;
    const antLJ = _norm(_antwoorden[2].antwoord) === CORRECT_ANT_L;
    const antRJ = _norm(_antwoorden[3].antwoord) === CORRECT_ANT_R;
    const oefJuist = tsJuist && antLJ && antRJ;

    // Als tussenstap fout: antwoord-velden ook als fout kleuren
    const antLJToon = tsJuist ? antLJ : false;
    const antRJToon = tsJuist ? antRJ : false;

    // ── Opgave ────────────────────────────────────────────
    const opgRij = document.createElement('div');
    opgRij.classList.add('rij');
    opgRij.style.marginBottom = '0.3cm';
    opgRij.innerHTML = '<span style="font-weight:bold;"><em>x</em> + 7 = 35</span>';
    inhoud.appendChild(opgRij);

    // ── Tussenstap ────────────────────────────────────────
    const [tsL, tsR] = _maakInvoerRij(
      inhoud,
      _antwoorden[0].antwoord, _antwoorden[1].antwoord,
      verbeterd,
      verbeterd ? tsLJ  : null,
      verbeterd ? tsRJ  : null,
      '4cm', '4cm'
    );
    _invoerVelden.push(tsL, tsR);
    tsL.addEventListener('input', () => { _antwoorden[0].antwoord = tsL.value.trim() || null; });
    tsR.addEventListener('input', () => { _antwoorden[1].antwoord = tsR.value.trim() || null; });

    // ── Antwoord ──────────────────────────────────────────
    const spacerRijen = document.createElement('div');
    spacerRijen.style.height = '0.25cm';
    inhoud.appendChild(spacerRijen);

    const [antL, antR] = _maakInvoerRij(
      inhoud,
      _antwoorden[2].antwoord, _antwoorden[3].antwoord,
      verbeterd,
      verbeterd ? antLJToon : null,
      verbeterd ? antRJToon : null,
      '4cm', '4cm'
    );
    _invoerVelden.push(antL, antR);
    antL.addEventListener('input', () => { _antwoorden[2].antwoord = antL.value.trim() || null; });
    antR.addEventListener('input', () => { _antwoorden[3].antwoord = antR.value.trim() || null; });

    // ── Verbeteringsfeedback ──────────────────────────────
    if (verbeterd) {
      const spacer = document.createElement('div');
      spacer.style.height = '0.7cm';
      inhoud.appendChild(spacer);

      const fb = document.createElement('div');

      if (oefJuist) {
        fb.style.cssText = `
          padding: 0.2cm 0.4cm;
          background: var(--groen-pastel, #c8e6c9);
          border-left: 4px solid var(--groen-donker, #4a7c59);
          border-radius: 4px;
          font-weight: 600;
          color: var(--groen-donker, #4a7c59);
        `;
        fb.textContent = '✓ Correct!';
      } else {
        fb.style.cssText = `
          padding: 0.25cm 0.4cm;
          background: var(--oranje-pastel, #ffe0b2);
          border-left: 4px solid var(--oranje-rand, #e65100);
          border-radius: 4px;
        `;

        const foutTitel = document.createElement('div');
        foutTitel.style.cssText = `
          font-weight: 600;
          color: var(--oranje-rand, #e65100);
          margin-bottom: 0.2cm;
        `;
        foutTitel.textContent = '✗ Niet correct — bekijk de uitwerking:';
        fb.appendChild(foutTitel);

        const uitw = document.createElement('div');
        uitw.style.cssText = `
          font-family: var(--font-oplossing, 'Comic Sans MS', cursive);
          color: var(--blauw-oplossing, #1a4fa0);
          font-size: var(--fontsize, 10pt);
          line-height: 2;
        `;
        uitw.innerHTML =
          '<div><em>x</em> + 7 = 35</div>' +
          '<div style="font-family:Arial,sans-serif;font-style:italic;color:var(--tekst,#1a1a1a);">Je moet in het linkerlid de term + 7 wegwerken, dus je moet beide leden verminderen met 7.</div>' +
          '<div><em>x</em> + 7 − 7 = 35 − 7</div>' +
          '<div><em>x</em> = 28</div>';
        fb.appendChild(uitw);
      }

      inhoud.appendChild(fb);
    }
  }

  // ── Invoer-rij: [links] = [rechts] ────────────────────────
  function _maakInvoerRij(inhoud, waardeL, waardeR, verbeterd, juistL, juistR, breedteL, breedteR) {
    const rij = document.createElement('div');
    rij.classList.add('rij');
    rij.style.cssText = 'gap: 0.25cm; margin-top: 0.05cm;';

    const invL = _maakInvoer(waardeL, verbeterd, juistL);
    invL.style.width = breedteL;

    const isSpan = document.createElement('span');
    isSpan.classList.add('is');
    isSpan.textContent = '=';
    isSpan.style.cssText = 'font-weight: bold; flex-shrink: 0;';

    const invR = _maakInvoer(waardeR, verbeterd, juistR);
    invR.style.width = breedteR;

    rij.appendChild(invL);
    rij.appendChild(isSpan);
    rij.appendChild(invR);
    inhoud.appendChild(rij);

    return [invL, invR];
  }

  // ── Invoerveld aanmaken ────────────────────────────────────
  function _maakInvoer(waarde, verbeterd, juist) {
    const inv = document.createElement('input');
    inv.type        = 'text';
    inv.value       = waarde ?? '';
    inv.placeholder = '…';
    inv.disabled    = verbeterd;

    const rand = juist === true  ? 'var(--groen-donker, #4a7c59)'
               : juist === false ? 'var(--oranje-rand, #e65100)'
               :                   'var(--groen-donker, #4a7c59)';
    const bg   = juist === true  ? 'var(--groen-pastel, #c8e6c9)'
               : juist === false ? 'var(--oranje-pastel, #ffe0b2)'
               :                   'transparent';

    inv.style.cssText = `
      border: 1.5px solid ${rand};
      border-radius: 4px;
      font-family: var(--font, Arial);
      font-size: var(--fontsize, 10pt);
      color: var(--tekst, #1a1a1a);
      background: ${bg};
      padding: 0 0.1cm;
      outline: none;
      height: 0.9cm;
    `;

    return inv;
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    _invoerVelden.forEach((veld, i) => {
      _antwoorden[i].antwoord = veld.value.trim() || null;
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();
