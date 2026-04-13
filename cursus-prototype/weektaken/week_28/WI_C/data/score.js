// ============================================================
//  data/score.js  —  Scoreberekening voor de taak
// ============================================================

window.__berekenScores = function(leerling, taakData) {
  const antwoorden = leerling.antwoorden || {};

  // ── Score 1: foto's indienen (oe_1) ──────────────────────
  const fotoAntwoord = (antwoorden['oe_1'] || [])[0];
  const fotoIngediend = fotoAntwoord?.antwoord === 'ja' || fotoAntwoord === 'ja';
  const scoreFotos = fotoIngediend ? 'A' : 'NI';

  // ── Score 2: verbeteringen (oe_2) ────────────────────────
  const verbetering  = leerling.verbetering || {};
  const aantalVerbeterd = [1, 2, 3, 4].filter(nr =>
    (verbetering[nr]?.pogingen?.length || 0) > 0
  ).length;

  let scoreVerbeteringen;
  if (aantalVerbeterd === 4)      scoreVerbeteringen = 'A';
  else if (aantalVerbeterd >= 1)  scoreVerbeteringen = 'C';
  else                            scoreVerbeteringen = 'NI';

  // ── Score 3: succescriteria ───────────────────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  let scoreSC;
  if (!leerling.ingediend)  scoreSC = 'NI';
  else if (scAan >= 1)      scoreSC = 'A';
  else                      scoreSC = 'C';

  return {
    scoreFotos,
    scoreVerbeteringen,
    scoreSC,
    succescriteria: `${scAan}/${scTot}`,
    ingediend:      leerling.ingediend ? 'ja' : 'nee',
  };
};