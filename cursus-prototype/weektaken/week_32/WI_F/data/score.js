// ============================================================
//  data/score.js  —  Scoreberekening voor de taak
// ============================================================

window.__berekenScores = function(leerling, taakData) {
  const antwoorden = leerling.antwoorden || {};

  function puntVoor(id) {
    return (antwoorden[id] || [])[0]?.score || 0;
  }

  // ── Score 1: coördinaten aflezen (oe_2–oe_7) ─────────────
  const puntenAflezen = [2, 3, 4, 5, 6, 7].reduce((som, n) => som + puntVoor(`oe_${n}`), 0);

  let scoreAflezen;
  if (puntenAflezen === 6)      scoreAflezen = 'A';
  else if (puntenAflezen >= 5)  scoreAflezen = 'B';
  else                          scoreAflezen = 'C';

  // ── Score 2: coördinaten aanduiden (oe_8–oe_13) ──────────
  const puntenAanduiden = [8, 9, 10, 11, 12, 13].reduce((som, n) => som + puntVoor(`oe_${n}`), 0);

  let scoreAanduiden;
  if (puntenAanduiden === 6)      scoreAanduiden = 'A';
  else if (puntenAanduiden >= 5)  scoreAanduiden = 'B';
  else                            scoreAanduiden = 'C';

  // ── Score 3: succescriteria eindscherm ───────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  let scoreSC;
  if (!leerling.ingediend)  scoreSC = 'NI';
  else if (scAan >= 1)      scoreSC = 'A';
  else                      scoreSC = 'C';

  return {
    scoreAflezen,
    scoreAanduiden,
    scoreSC,
    puntenAflezen:   `${puntenAflezen}/6`,
    puntenAanduiden: `${puntenAanduiden}/6`,
    succescriteria:  `${scAan}/${scTot}`,
    ingediend:       leerling.ingediend ? 'ja' : 'nee',
  };
};
