// ============================================================
//  data/score.js  —  Scoreberekening voor W33WID
// ============================================================

window.__berekenScores = function (leerling) {
  const antwoorden = leerling.antwoorden || {};

  // ── Hulpfuncties ──────────────────────────────────────────
  function norm(s) {
    return (s || '').replace(/\s/g, '').replace(/−/g, '-').toLowerCase();
  }

  function ant(oeId, idx) {
    const arr = antwoorden[oeId] || [];
    const a = arr[idx];
    return (a && typeof a === 'object' && 'antwoord' in a) ? a.antwoord : (a ?? null);
  }

  // Numerieke vergelijking via evalueer() uit helpers.js
  function evalEqFrac(s, t, n) {
    if (!s) return false;
    try {
      const str = norm(s).replace(/\((-?\d+)\)\/\((\d+)\)/g, '$1/$2');
      const val = evalueer(str);
      return val ? val.valEq(new Br(t, n)) : false;
    } catch (e) { return false; }
  }

  // ── Score 1: Zelfevaluatie ────────────────────────────────
  let scoreZelfevaluatie;
  if (leerling.ingediend) {
    scoreZelfevaluatie = 'A';
  } else {
    const begonnen = Object.values(antwoorden).some(arr =>
      Array.isArray(arr) && arr.some(a => {
        const v = (a && typeof a === 'object' && 'antwoord' in a) ? a.antwoord : a;
        return v !== null && v !== undefined && v !== '';
      })
    );
    scoreZelfevaluatie = begonnen ? 'C' : 'NI';
  }

  // ── Tussenstap juistheid per oefening ─────────────────────
  function tsOe1() {
    return norm(ant('oe_1', 0)) === 'x+7-7' && norm(ant('oe_1', 1)) === '35-7';
  }
  function tsOe2() {
    return norm(ant('oe_2', 0)) === 't-8+8' && norm(ant('oe_2', 1)) === '-2+8';
  }
  function tsOe3() {
    return norm(ant('oe_3', 0)) === '-7y:(-7)' && norm(ant('oe_3', 1)) === '77:(-7)';
  }
  function tsOe4() {
    return norm(ant('oe_4', 0)) === '11z:11' && norm(ant('oe_4', 1)) === '23:11';
  }
  function tsOe5() {
    const l = ant('oe_5', 0);
    const r = ant('oe_5', 1);
    if (!l || !r) return false;
    const lNorm = norm(l);
    if (!lNorm.includes('x') || lNorm === 'x') return false;
    try {
      function evalMetX(tekst) {
        let s = norm(tekst).replace(/\((-?\d+)\)\/\((\d+)\)/g, '($1/$2)');
        s = s.replace(/([0-9])([xX])/g, '$1*(5/12)');
        s = s.replace(/[xX]/g, '(5/12)');
        return evalueer(s);
      }
      const lv = evalMetX(l);
      const rv = evalMetX(r);
      return lv && rv && lv.valEq(rv) && rv.valEq(new Br(5, 12));
    } catch (e) { return false; }
  }
  function tsOe6() {
    const l = ant('oe_6', 0);
    const r = ant('oe_6', 1);
    if (!l || !r) return false;
    const lNorm = norm(l);
    if (!lNorm.includes('y') || lNorm === 'y') return false;
    try {
      function evalMetY(tekst) {
        let s = norm(tekst).replace(/\((-?\d+)\)\/\((\d+)\)/g, '($1/$2)');
        s = s.replace(/\)([yY])/g, ')*(4/35)');
        s = s.replace(/([0-9])([yY])/g, '$1*(4/35)');
        s = s.replace(/[yY]/g, '(4/35)');
        return evalueer(s);
      }
      const lv = evalMetY(l);
      const rv = evalMetY(r);
      return lv && rv && lv.valEq(rv) && rv.valEq(new Br(4, 35));
    } catch (e) { return false; }
  }

  const tsResultaten = [tsOe1(), tsOe2(), tsOe3(), tsOe4(), tsOe5(), tsOe6()];
  const aantalTsJuist = tsResultaten.filter(Boolean).length;
  const aantalTsFout  = 6 - aantalTsJuist;

  let scoreTussenstap;
  if (!leerling.ingediend)    scoreTussenstap = 'NI';
  else if (aantalTsJuist === 6) scoreTussenstap = 'A';
  else if (aantalTsFout >= 4)   scoreTussenstap = 'B';
  else                          scoreTussenstap = 'C';

  // ── Oplossing juistheid per oefening ──────────────────────
  // oe_1/2/3: antwoord op index 2 (variabele) en 3 (waarde)
  function oplOe1() {
    return norm(ant('oe_1', 2)) === 'x' && norm(ant('oe_1', 3)) === '28';
  }
  function oplOe2() {
    return norm(ant('oe_2', 2)) === 't' && norm(ant('oe_2', 3)) === '6';
  }
  function oplOe3() {
    return norm(ant('oe_3', 2)) === 'y' && norm(ant('oe_3', 3)) === '-11';
  }
  // oe_4/5/6: oplossing = laatste paar; waarde numerisch vergeleken (ook niet-vereenvoudigd OK)
  function oplOe4() {
    const arr = antwoorden['oe_4'] || [];
    const n = arr.length;
    if (n < 2) return false;
    const l = (arr[n-2] && 'antwoord' in arr[n-2]) ? arr[n-2].antwoord : arr[n-2];
    const r = (arr[n-1] && 'antwoord' in arr[n-1]) ? arr[n-1].antwoord : arr[n-1];
    return norm(l) === 'z' && evalEqFrac(r, 23, 11);
  }
  function oplOe5() {
    const arr = antwoorden['oe_5'] || [];
    const n = arr.length;
    if (n < 2) return false;
    const l = (arr[n-2] && 'antwoord' in arr[n-2]) ? arr[n-2].antwoord : arr[n-2];
    const r = (arr[n-1] && 'antwoord' in arr[n-1]) ? arr[n-1].antwoord : arr[n-1];
    return norm(l) === 'x' && evalEqFrac(r, 5, 12);
  }
  function oplOe6() {
    const arr = antwoorden['oe_6'] || [];
    const n = arr.length;
    if (n < 2) return false;
    const l = (arr[n-2] && 'antwoord' in arr[n-2]) ? arr[n-2].antwoord : arr[n-2];
    const r = (arr[n-1] && 'antwoord' in arr[n-1]) ? arr[n-1].antwoord : arr[n-1];
    return norm(l) === 'y' && evalEqFrac(r, 4, 35);
  }

  const oplResultaten = [oplOe1(), oplOe2(), oplOe3(), oplOe4(), oplOe5(), oplOe6()];
  const aantalOplJuist = oplResultaten.filter(Boolean).length;

  let scoreOplossing;
  if (!leerling.ingediend)       scoreOplossing = 'NI';
  else if (aantalOplJuist >= 5)  scoreOplossing = 'A';
  else if (aantalOplJuist === 4) scoreOplossing = 'B';
  else                           scoreOplossing = 'C';

  // ── Score 4: Succescriteria ───────────────────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  let scoreSuccescriteria;
  if (!leerling.ingediend) scoreSuccescriteria = 'NI';
  else if (scAan >= 1)     scoreSuccescriteria = 'A';
  else                     scoreSuccescriteria = 'C';

  return {
    scoreZelfevaluatie,
    scoreTussenstap,
    scoreOplossing,
    scoreSuccescriteria,
    succescriteria: `${scAan}/${scTot}`,
    ingediend: leerling.ingediend ? 'ja' : 'nee',
  };
};
