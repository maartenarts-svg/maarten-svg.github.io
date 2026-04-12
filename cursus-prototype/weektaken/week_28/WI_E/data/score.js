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

  let totaalIngevuld = 0;
  let totaalVerwacht = 0;

  Object.values(antwoorden).forEach(arr => {
    if (!Array.isArray(arr)) return;
    totaalVerwacht += arr.length;
    totaalIngevuld += arr.filter(a => {
      if (a === null || a === undefined) return false;
      if (typeof a === 'object') return a.antwoord !== null && a.antwoord !== undefined && a.antwoord !== '';
      return a !== '';
    }).length;
  });

  // ── Scorebepaling ─────────────────────────────────────────
  let score;
  if (!leerling.ingediend)         score = 'NI';
  else if (totaalIngevuld === 17)  score = 'A';
  else if (totaalIngevuld >= 15)   score = 'B';
  else                             score = 'C';

  // ── Succescriteria ────────────────────────────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  // ── Score succescriteria ──────────────────────────────────
  let scoreSC;
  if (!leerling.ingediend)  scoreSC = 'NI';
  else if (scAan >= 1)      scoreSC = 'A';
  else                      scoreSC = 'C';  

  return {
    score,
    scoreSC,
    ingevuld:       `${totaalIngevuld}/17`,
    succescriteria: `${scAan}/${scTot}`,
    ingediend:      leerling.ingediend ? 'ja' : 'nee',
  };
};