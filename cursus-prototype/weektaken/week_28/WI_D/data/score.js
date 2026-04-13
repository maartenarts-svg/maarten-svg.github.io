// ============================================================
//  data/score.js  —  Scoreberekening voor de taak
// ============================================================

window.__berekenScores = function(leerling, taakData) {
  const antwoorden = leerling.antwoorden || {};

  // ── Score 1: foto's indienen (oe_2) ──────────────────────
  const fotoAntwoord  = (antwoorden['oe_2'] || [])[0];
  const fotoIngediend = fotoAntwoord?.antwoord === 'ja' || fotoAntwoord === 'ja';
  const scoreFotos    = fotoIngediend ? 'A' : 'NI';

  // ── Score 2: flashcards (oe_1, oe_3, oe_4, oe_5) ─────────
  const flashOefeningen = ['oe_1', 'oe_3', 'oe_4', 'oe_5'];
  const aantalKlaar = flashOefeningen.filter(id => {
    const arr = antwoorden[id] || [];
    const a   = arr[0];
    return a?.antwoord === true || a === true;
  }).length;

  let scoreFlash;
  if (aantalKlaar === 4)     scoreFlash = 'A';
  else if (aantalKlaar >= 1) scoreFlash = 'C';
  else                       scoreFlash = 'NI';

  // ── Score 3: succescriteria ───────────────────────────────
  const sc    = leerling.succescriteria || [];
  const scAan = sc.filter(Boolean).length;
  const scTot = sc.length;

  let scoreSC;
  if (!leerling.ingediend) scoreSC = 'NI';
  else if (scAan >= 1)     scoreSC = 'A';
  else                     scoreSC = 'C';

  return {
    scoreFotos,
    scoreFlash,
    scoreSC,
    succescriteria: `${scAan}/${scTot}`,
    ingediend:      leerling.ingediend ? 'ja' : 'nee',
  };
};