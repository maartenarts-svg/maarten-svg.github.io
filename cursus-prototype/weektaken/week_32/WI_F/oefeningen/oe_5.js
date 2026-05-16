// ============================================================
//  oefeningen/oe_5.js  —  Coördinaat aflezen: punt D
// ============================================================
window.__taakOefening = (function () {

  const OEF_ID   = 'oe_5';
  const LETTER   = 'D';
  const GROEP    = 'punten1';
  const IDX      = 3;
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
      await slaOp();  // meteen opslaan zodat andere oefeningen dezelfde reeks zien
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
    const inhoud = maakOefening({ id: OEF_ID, nummer: 5, container });
    voegTekstToe(inhoud, 'Noteer de coördinaat.', ['intro-tekst']);

    const svgWrap = document.createElement('div');
    svgWrap.style.cssText = 'margin: 0.3cm 0;';
    svgWrap.innerHTML = _maakSvg();
    inhoud.appendChild(svgWrap);

    const rij = document.createElement('div');
    rij.style.cssText = 'display:flex;align-items:center;gap:0.15cm;margin-top:0.3cm;font-family:var(--font);font-size:10pt;';

    const lbl = document.createElement('span');
    lbl.innerHTML = 'co(<i>' + LETTER + '</i>)\u00a0=\u00a0(';
    rij.appendChild(lbl);
    rij.appendChild(_maakInput('x'));
    const komma = document.createElement('span');
    komma.textContent = '\u00a0,\u00a0';
    rij.appendChild(komma);
    rij.appendChild(_maakInput('y'));
    const sluit = document.createElement('span');
    sluit.textContent = ')';
    rij.appendChild(sluit);

    if (_verbeterd) {
      const ant   = _antwoord.antwoord;
      const juist = ant && ant.x === _punt.x && ant.y === _punt.y;
      const vink  = document.createElement('span');
      vink.style.cssText = `margin-left:0.3cm;font-family:var(--font-oplossing);font-size:10pt;color:${juist ? 'var(--groen-donker)' : 'var(--oranje-rand)'};`;
      vink.textContent = juist ? '✓' : '✗';
      rij.appendChild(vink);
      if (!juist) {
        const opl = document.createElement('span');
        opl.style.cssText = 'margin-left:0.2cm;font-family:var(--font-oplossing);font-size:10pt;color:var(--lila-tekst);';
        opl.textContent = `(${_punt.x}\u00a0,\u00a0${_punt.y})`;
        rij.appendChild(opl);
      }
    }

    inhoud.appendChild(rij);
  }

  // ── SVG ──────────────────────────────────────────────────
  function _maakSvg() {
    const O = 260, S = 24;
    const px = O + _punt.x * S;
    const py = O - _punt.y * S;
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
    return `<svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;display:block;">
  <defs>
    <marker id="px5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1a1a1a"/></marker>
    <marker id="py5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1a1a1a"/></marker>
  </defs>
  <style>.rooster{stroke:#b0b0b0;stroke-width:.5}.as{stroke:#1a1a1a;stroke-width:1.5}.getal{font-family:Arial,sans-serif;font-size:10pt;fill:#1a1a1a}.aslabel{font-family:Arial,sans-serif;font-size:10pt;font-style:italic;fill:#1a1a1a}.plabel{font-family:Arial,sans-serif;font-size:10pt;font-style:italic;font-weight:bold;fill:#1a1a1a}</style>
  ${rooster}
  <line class="as" x1="14" y1="260" x2="510" y2="260" marker-end="url(#px5)"/>
  <line class="as" x1="260" y1="506" x2="260" y2="10" marker-end="url(#py5)"/>
  ${ms}${gt}
  <text class="getal" x="250" y="278" text-anchor="end">0</text>
  <text class="aslabel" x="508" y="250" text-anchor="middle">x</text>
  <text class="aslabel" x="267" y="14" text-anchor="start" dominant-baseline="middle">y</text>
  <circle cx="${px}" cy="${py}" r="5" fill="#1a1a1a"/>
  <text class="plabel" x="${px+7}" y="${py-7}">${LETTER}</text>
</svg>`;
  }

  // ── Invoerveld ───────────────────────────────────────────
  function _maakInput(as) {
    const inp = document.createElement('input');
    inp.type = 'text'; inp.placeholder = '?'; inp.disabled = _blokkeer;
    inp.style.cssText = 'width:1cm;text-align:center;border:none;border-bottom:1.5px solid var(--sl-kleur,#b0b0b0);background:transparent;outline:none;font-family:var(--font-oplossing);font-size:10pt;color:var(--blauw-oplossing,#1a4fa0);';
    const opg = _antwoord.antwoord;
    if (opg && opg[as] !== null && opg[as] !== undefined) inp.value = String(opg[as]);
    if (_verbeterd && opg) {
      const juist = opg.x === _punt.x && opg.y === _punt.y;
      inp.style.color = juist ? 'var(--groen-donker)' : 'var(--oranje-rand)';
      if (!juist) inp.style.textDecoration = 'line-through';
    }
    inp.addEventListener('input', () => {
      const val = parseInt(inp.value.trim());
      if (!_antwoord.antwoord || typeof _antwoord.antwoord !== 'object') _antwoord.antwoord = { x: null, y: null };
      _antwoord.antwoord[as] = isNaN(val) ? null : val;
    });
    return inp;
  }

  function getAntwoorden() { return [{ ..._antwoord }]; }

  return { render, getAntwoorden };
})();
