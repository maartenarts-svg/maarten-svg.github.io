// ============================================================
//  oefeningen/oe_2.js  —  Vergelijking: t - 8 = -2
// ============================================================

window.__taakOefening = (function () {

  const CORRECT_TS_L  = 't-8+8';
  const CORRECT_TS_R  = '-2+8';
  const CORRECT_ANT_L = 't';
  const CORRECT_ANT_R = '6';

  let _antwoorden = [
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
  ];
  let _invoerVelden = [];

  function _norm(s) {
    return (s || '').replace(/\s/g, '').replace(/−/g, '-').toLowerCase();
  }

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

    const inhoud = maakOefening({ id: 'oe_2', nummer: 2, container });

    const intro = document.createElement('p');
    intro.classList.add('intro-tekst');
    intro.innerHTML = 'Los de vergelijking op.<br>Je bent verplicht een tussenstap te noteren!';
    inhoud.appendChild(intro);

    const tsLJ  = _norm(_antwoorden[0].antwoord) === CORRECT_TS_L;
    const tsRJ  = _norm(_antwoorden[1].antwoord) === CORRECT_TS_R;
    const tsJuist  = tsLJ && tsRJ;
    const antLJ = _norm(_antwoorden[2].antwoord) === CORRECT_ANT_L;
    const antRJ = _norm(_antwoorden[3].antwoord) === CORRECT_ANT_R;
    const oefJuist = tsJuist && antLJ && antRJ;
    const antLJToon = tsJuist ? antLJ : false;
    const antRJToon = tsJuist ? antRJ : false;

    const opgRij = document.createElement('div');
    opgRij.classList.add('rij');
    opgRij.style.marginBottom = '0.3cm';
    opgRij.innerHTML = '<span style="font-weight:bold;"><em>t</em> − 8 = −2</span>';
    inhoud.appendChild(opgRij);

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
          '<div><em>t</em> − 8 = −2</div>' +
          '<div style="font-family:Arial,sans-serif;font-style:italic;color:var(--tekst,#1a1a1a);">Je moet in het linkerlid de term − 8 wegwerken, dus je moet beide leden vermeerderen met 8.</div>' +
          '<div><em>t</em> − 8 + 8 = −2 + 8</div>' +
          '<div><em>t</em> = 6</div>';
        fb.appendChild(uitw);
      }

      inhoud.appendChild(fb);
    }
  }

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

  function getAntwoorden() {
    _invoerVelden.forEach((veld, i) => {
      _antwoorden[i].antwoord = veld.value.trim() || null;
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();
