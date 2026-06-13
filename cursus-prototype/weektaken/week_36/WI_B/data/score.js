// ============================================================
//  data/score.js  —  Scoreberekening voor de taak
// ============================================================

window.__berekenScores = function(leerling, taakData) {
  const antwoorden = leerling.antwoorden || {};

  // ── Score 1: verbeteringen (oe_1) ────────────────────────
  const verbetering  = leerling.verbetering || {};
  const aantalVerbeterd = [1, 2, 3, 4].filter(nr =>
    (verbetering[nr]?.pogingen?.length || 0) > 0
  ).length;

  let scoreVerbeteringen;
  if (aantalVerbeterd === 4)      scoreVerbeteringen = 'A';
  else if (aantalVerbeterd >= 1)  scoreVerbeteringen = 'C';
  else                            scoreVerbeteringen = 'NI';

  // ── Score 2: leren reflecteren (oe_2) ────────────────────
  const oe2Data    = (antwoorden['oe_2'] || [])[0]?.antwoord || {};
  const secties    = ['stop', 'start', 'doorgaan'];
  const ietsItems  = [
    ...secties.map(s => (oe2Data[s]?.checks || []).length > 0),
    (oe2Data.doel?.checks || []).length > 0,
    ...secties.map(s => (oe2Data[s]?.anders || '').trim() !== ''),
  ].some(Boolean);
  const actieIngevuld = (oe2Data.actie || '').trim() !== '';

  let scoreLeren;
  if      (actieIngevuld && ietsItems)  scoreLeren = 'A';
  else if (!actieIngevuld && ietsItems) scoreLeren = 'B';
  else if (leerling.ingediend)          scoreLeren = 'C';
  else                                  scoreLeren = 'NI';

  // ── Score 3: succescriteria eindscherm ───────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  let scoreSC;
  if (!leerling.ingediend)  scoreSC = 'NI';
  else if (scAan >= 1)      scoreSC = 'A';
  else                      scoreSC = 'C';

  return {
    scoreVerbeteringen,
    scoreLeren,
    scoreSC,
    succescriteria: `${scAan}/${scTot}`,
    ingediend:      leerling.ingediend ? 'ja' : 'nee',
  };
};
