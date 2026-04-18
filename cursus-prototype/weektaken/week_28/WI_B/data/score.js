// ============================================================
//  data/score.js  —  Scoreberekening voor de taak
// ============================================================

window.__berekenScores = function(leerling, taakData) {
  const antwoorden = leerling.antwoorden || {};

  // ── Hulpfuncties ──────────────────────────────────────────
  function getArr(id) {
    return antwoorden[id] || [];
  }

  function aantalIngevuld(arr) {
    return arr.filter(a => {
      if (a === null || a === undefined) return false;
      if (typeof a === 'object') return a.antwoord !== null && a.antwoord !== undefined && a.antwoord !== '';
      return a !== '';
    }).length;
  }

  function antwoord(arr, idx) {
    const a = arr[idx];
    if (a === null || a === undefined) return null;
    if (typeof a === 'object') return a.antwoord;
    return a;
  }

  // ── Score oe_1: drag and drop verzamelingen ───────────────
  const arr1 = getArr('oe_1');
  const ITEMS_OE1 = [
    { id: 0, veld: 0 },
    { id: 1, veld: 1 },
    { id: 2, veld: 2 },
  ];

  let score1;
  if (aantalIngevuld(arr1) === 0) {
    score1 = 'NI';
  } else {
    const fouten1 = ITEMS_OE1.filter(item => {
      const a = antwoord(arr1, item.veld);
      return a === null || a !== item.id;
    }).length;
    score1 = fouten1 === 0 ? 'A' : 'C';
  }

  // ── Score oe_2: drag and drop getallen ────────────────────
  const arr2 = getArr('oe_2');
  const ITEMS_OE2 = [
    { id: 0, veld: 0 }, { id: 1, veld: 0 }, { id: 2, veld: 0 },
    { id: 3, veld: 1 }, { id: 4, veld: 1 }, { id: 5, veld: 1 },
    { id: 6, veld: 2 }, { id: 7, veld: 2 }, { id: 8, veld: 2 },
  ];

  let score2;
  if (aantalIngevuld(arr2) === 0) {
    score2 = 'NI';
  } else {
    const fouten2 = ITEMS_OE2.filter(item => {
      const a = antwoord(arr2, item.id);
      return a === null || a !== item.veld;
    }).length;
    if (fouten2 === 0)      score2 = 'A';
    else if (fouten2 <= 1)  score2 = 'B';
    else                    score2 = 'C';
  }

  // ── Score oe_3: tabel tegengestelde en omgekeerde ─────────
  const arr3 = getArr('oe_3');
  const CORRECT_OE3 = ['-9', '1/9', '3', '-1/3', '-1/5', '5', '7/4', '-4/7'];

  let score3;
  if (aantalIngevuld(arr3) === 0) {
    score3 = 'NI';
  } else {
    const fouteIndices3 = CORRECT_OE3
      .map((correct, idx) => {
        const a = String(antwoord(arr3, idx) ?? '').replace(/\s+/g, '');
        return a === correct.replace(/\s+/g, '') ? null : idx;
      })
      .filter(i => i !== null);

    const aantalFouten3 = fouteIndices3.length;
    const tegenIndices  = [0, 2, 4, 6];
    const omgIndices    = [1, 3, 5, 7];
    const foutenTegen   = fouteIndices3.filter(i => tegenIndices.includes(i)).length;
    const foutenOmg     = fouteIndices3.filter(i => omgIndices.includes(i)).length;

    if (aantalFouten3 <= 1) {
      score3 = 'A';
    } else if (aantalFouten3 === 2 && foutenTegen === 1 && foutenOmg === 1) {
      score3 = 'B';
    } else {
      score3 = 'C';
    }
  }

  // ── Score oe_4: aftrekking en deling ──────────────────────
  const arr4 = getArr('oe_4');
  const CORRECT_OE4 = ['(-9)', '(-8)', '5', '1/2', '1/7', '9/4'];

  let score4;
  if (aantalIngevuld(arr4) === 0) {
    score4 = 'NI';
  } else {
    const fouteIndices4 = CORRECT_OE4
      .map((correct, idx) => {
        const a = String(antwoord(arr4, idx) ?? '').replace(/\s+/g, '');
        return a === correct.replace(/\s+/g, '') ? null : idx;
      })
      .filter(i => i !== null);

    const aantalFouten4  = fouteIndices4.length;
    const aftrekIndices  = [0, 1, 2];
    const delingIndices  = [3, 4, 5];
    const foutenAftrek   = fouteIndices4.filter(i => aftrekIndices.includes(i)).length;
    const foutenDeling   = fouteIndices4.filter(i => delingIndices.includes(i)).length;

    if (aantalFouten4 <= 1) {
      score4 = 'A';
    } else if (aantalFouten4 === 2 && foutenAftrek === 1 && foutenDeling === 1) {
      score4 = 'B';
    } else {
      score4 = 'C';
    }
  }

  // ── Score succescriteria ──────────────────────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  let scoreSC;
  if (!leerling.ingediend) scoreSC = 'NI';
  else if (scAan >= 1)     scoreSC = 'A';
  else                     scoreSC = 'C';

  return {
    score1,
    score2,
    score3,
    score4,
    scoreSC,
    succescriteria: `${scAan}/${scTot}`,
    ingediend:      leerling.ingediend ? 'ja' : 'nee',
  };
};