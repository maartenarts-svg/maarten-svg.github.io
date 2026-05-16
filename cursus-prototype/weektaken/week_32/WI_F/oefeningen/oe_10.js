// ============================================================
//  oefeningen/oe_10.js  —  Punt aanduiden: punt I
// ============================================================
window.__taakOefening = (function () {

  const OEF_ID   = 'oe_10';
  const LETTER   = 'I';
  const GROEP    = 'punten2';
  const IDX      = 2;
  const REEKS_N  = 6;

  let _punt      = null;
  let _antwoord  = { antwoord: { x: null, y: null }, score: 0 };
  let _verbeterd = false;
  let _blokkeer  = false;

  // ── render ──────────────────────────────────────────────
  async function render(container, opgeslagenAntwoorden, verbeterd, mail, slaOp, leerling, herlaadLeerling) {
    _verbeterd = verbeterd;
    _blokkeer  = verbeterd || false;

    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden) && opgeslagenAntwoorden[0]) {
      const a = opgeslagenAntwoorden[0];
      _antwoord = (a && typeof a === 'object' && 'antwoord' in a)
        ? a : { antwoord: a, score: 0 };
    }

    // Punten ophalen — genereer ENKEL als ze nog niet in de databank staan
    const reeksOk = leerling.opgaven
      && leerling.opgaven[GROEP]
      && leerling.opgaven[GROEP].length === REEKS_N
      && leerling.opgaven[GROEP].every(p => p && typeof p.x === 'number' && typeof p.y === 'number');

    if (!reeksOk) {
      if (!leerling.opgaven) leerling.opgaven = {};
      leerling.opgaven[GROEP] = _genereerReeks(REEKS_N);
      await slaOp();
    }

    _punt = leerling.opgaven[GROEP][IDX];
    container.innerHTML = '';
    _bouw(container);
  }

  // ── Punten genereren ────────────────────────────────────
  function _genereerReeks(n) {
    const gebruikt = new Set();
    const punten = [];
    while (punten.length < n) {
      const x = Math.floor(Math.random() * 19) - 9;
      const y = Math.floor(Math.random() * 19) - 9;
      if (!_isGeldig(x, y)) continue;
      const key = `${x},${y}`;
      if (gebruikt.has(key)) continue;
      gebruikt.add(key);
      punten.push({ x, y });
    }
    return punten;
  }

  function _isGeldig(x, y) {
    if (x === -10 || x === 10 || y === -10 || y === 10) return false;
    if (x === y) return false;
    if (x === -1 && [-2,-4,-6,-8].includes(y)) return false;
    return true;
  }

  // ── Oefening bouwen ──────────────────────────────────────
  function _bouw(container) {
    const inhoud = maakOefening({ id: OEF_ID, nummer: 10, container });
    voegTekstToe(inhoud, 'Duid de plaats van het punt aan in het assenstelsel.', ['intro-tekst']);

    const opgRij = document.createElement('div');
    opgRij.style.cssText = 'margin:0.2cm 0 0.3cm;font-family:var(--font);font-size:10pt;';
    opgRij.innerHTML = `co(<i>${LETTER}</i>)\u00a0=\u00a0(${_punt.x}\u00a0,\u00a0${_punt.y})`;
    inhoud.appendChild(opgRij);

    const svgWrap = document.createElement('div');
    svgWrap.style.cssText = 'margin:0.2cm 0;';
    svgWrap.innerHTML = _maakSvg();
    inhoud.appendChild(svgWrap);

    const feedback = document.createElement('div');
    feedback.id = 'oe_10-fb';
    feedback.style.cssText = 'font-family:var(--font-oplossing);font-size:10pt;margin-top:0.2cm;min-height:1.2em;';
    inhoud.appendChild(feedback);
    _updateFeedback(feedback);

    if (!_blokkeer) {
      svgWrap.addEventListener('click', (e) => {
        const cel = e.target.closest('[data-x]');
        if (!cel) return;
        _antwoord.antwoord = { x: parseInt(cel.dataset.x), y: parseInt(cel.dataset.y) };
        svgWrap.innerHTML = _maakSvg();
        _updateFeedback(feedback);
      });
    }
  }

  function _updateFeedback(el) {
    const ant = _antwoord.antwoord;
    if (!ant || ant.x === null) { el.textContent = ''; return; }
    if (_verbeterd) {
      const juist = ant.x === _punt.x && ant.y === _punt.y;
      if (juist) {
        el.style.color = 'var(--groen-donker)';
        el.textContent = '✓ Juist!';
      } else {
        el.style.color = 'var(--oranje-rand)';
        el.innerHTML = `✗\u00a0Jouw antwoord:\u00a0(${ant.x}\u00a0,\u00a0${ant.y})\u00a0— `
          + `<span style="color:var(--lila-tekst)">Correct:\u00a0(${_punt.x}\u00a0,\u00a0${_punt.y})</span>`;
      }
    } else {
      el.textContent = '';
    }
  }

  // ── SVG ──────────────────────────────────────────────────
  function _maakSvg() {
    const O = 260, S = 24;
    const ant = _antwoord.antwoord;
    const heeftAnt = ant && ant.x !== null && ant.y !== null;

    let rooster = '';
    for (let i = -10; i <= 10; i++) {
      const p = O + i * S;
      rooster += `<line class="rooster" x1="${p}" y1="20" x2="${p}" y2="500"/>`;
      rooster += `<line class="rooster" x1="20" y1="${p}" x2="500" y2="${p}"/>`;
    }
    let ms = '', gt = '';
    for (const v of [-8,-6,-4,-2,2,4,6,8]) {
      const p = O + v * S;
      ms += `<line class="as" x1="${p}" y1="255" x2="${p}" y2="265"/>`;
      ms += `<line class="as" x1="255" y1="${p}" x2="265" y2="${p}"/>`;
      gt += `<text class="getal" x="${p}" y="278" text-anchor="middle">${v}</text>`;
      gt += `<text class="getal" x="250" y="${O - v * S}" text-anchor="end" dominant-baseline="middle">${v}</text>`;
    }

    let gekozenEl = '';
    if (heeftAnt) {
      const px = O + ant.x * S, py = O - ant.y * S;
      let kleur = '#1a4fa0';
      if (_verbeterd) kleur = (ant.x === _punt.x && ant.y === _punt.y) ? '#4a7c59' : '#e65100';
      gekozenEl = `<circle cx="${px}" cy="${py}" r="6" fill="${kleur}" opacity="0.85"/>`;
    }
    let correctEl = '';
    if (_verbeterd && heeftAnt && !(ant.x === _punt.x && ant.y === _punt.y)) {
      const px = O + _punt.x * S, py = O - _punt.y * S;
      correctEl = `<circle cx="${px}" cy="${py}" r="6" fill="#d500f9" opacity="0.85"/>`;
    }

    let overlay = '';
    if (!_blokkeer) {
      for (let xi = -9; xi <= 9; xi++) {
        for (let yi = -9; yi <= 9; yi++) {
          const px = O + xi * S, py = O - yi * S;
          overlay += `<rect x="${px-12}" y="${py-12}" width="24" height="24" data-x="${xi}" data-y="${yi}" fill="transparent" style="cursor:pointer;" class="klik-cel"/>`;
        }
      }
    }

    return `<svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;display:block;">
  <defs>
    <marker id="px10" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1a1a1a"/></marker>
    <marker id="py10" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1a1a1a"/></marker>
  </defs>
  <style>.rooster{stroke:#b0b0b0;stroke-width:.5}.as{stroke:#1a1a1a;stroke-width:1.5}.getal{font-family:Arial,sans-serif;font-size:10pt;fill:#1a1a1a}.aslabel{font-family:Arial,sans-serif;font-size:10pt;font-style:italic;fill:#1a1a1a}.klik-cel:hover{fill:rgba(74,124,89,0.2)}</style>
  ${rooster}
  <line class="as" x1="14" y1="260" x2="510" y2="260" marker-end="url(#px10)"/>
  <line class="as" x1="260" y1="506" x2="260" y2="10" marker-end="url(#py10)"/>
  ${ms}${gt}
  <text class="getal" x="250" y="278" text-anchor="end">0</text>
  <text class="aslabel" x="508" y="250" text-anchor="middle">x</text>
  <text class="aslabel" x="267" y="14" text-anchor="start" dominant-baseline="middle">y</text>
  ${gekozenEl}${correctEl}${overlay}
</svg>`;
  }

  function getAntwoorden() { return [{ ..._antwoord }]; }

  return { render, getAntwoorden };
})();
