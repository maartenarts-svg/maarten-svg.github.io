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
  const aantalVerbeterd = [1, 2, 3].filter(nr =>
    (verbetering[nr]?.pogingen?.length || 0) > 0
  ).length;

  let scoreVerbeteringen;
  if (aantalVerbeterd === 3)      scoreVerbeteringen = 'A';
  else if (aantalVerbeterd >= 1)  scoreVerbeteringen = 'C';
  else                            scoreVerbeteringen = 'NI';

  // ── Score 3: zelfevaluatie succescriteria (oe_3) ─────────
  const oe3 = antwoorden['oe_3'] || [];
  const aantalSC = 3;
  const aangeduid = oe3.filter(a =>
    a?.antwoord === 'A' || a?.antwoord === 'B' || a?.antwoord === 'C'
  ).length;

  let scoreZelfevaluatie;
  if (aangeduid === aantalSC)     scoreZelfevaluatie = 'A';
  else if (aangeduid >= 1)        scoreZelfevaluatie = 'C';
  else                            scoreZelfevaluatie = 'NI';

  // ── Individuele SC-scores uit oe_3 ────────────────────────
  const scLabels = ['W34WIDSC01', 'W34WIDSC02', 'W34WIDSC03'];
  const scScores = {};
  scLabels.forEach((id, i) => {
    scScores[id] = oe3[i]?.antwoord || 'NI';
  });

  // ── Score 4: succescriteria eindscherm ───────────────────
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
    scoreZelfevaluatie,
    ...scScores,
    scoreSC,
    succescriteria: `${scAan}/${scTot}`,
    ingediend:      leerling.ingediend ? 'ja' : 'nee',
  };
};
