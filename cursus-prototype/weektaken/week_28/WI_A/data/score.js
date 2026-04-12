// ============================================================
//  data/score.js  —  Scoreberekening voor de taak
//
//  Exporteert via window.__berekenScores:
//    __berekenScores(leerling, taakData) → { [sleutel]: waarde }
//
//  Het geretourneerde object bepaalt de kolommen in de CSV.
//  Pas de logica aan per taak.
// ============================================================

window.__berekenScores = function(leerling, taakData) {
  const antwoorden = leerling.antwoorden || {};

  // ── Voorbeeld: tel aantal ingevulde antwoorden per oefening ──
  let totaalIngevuld  = 0;
  let totaalVerwacht  = 0;

  Object.values(antwoorden).forEach(arr => {
    if (!Array.isArray(arr)) return;
    totaalVerwacht  += arr.length;
    totaalIngevuld  += arr.filter(a => a !== null && a !== '').length;
  });

  const percentage = totaalVerwacht > 0
    ? Math.round((totaalIngevuld / totaalVerwacht) * 100)
    : 0;

  // ── Scorebepaling ─────────────────────────────────────────
  let score;
  if (totaalIngevuld === 0)                      score = 'NI';
  else if (totaalIngevuld === totaalVerwacht)    score = 'A';
  else                                           score = 'C';

  // ── Succescriteria ────────────────────────────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  return {
    score,
    percentage:         percentage + '%',
    ingevuld:           `${totaalIngevuld}/${totaalVerwacht}`,
    succescriteria:     `${scAan}/${scTot}`,
    ingediend:          leerling.ingediend ? 'ja' : 'nee',
  };
};
