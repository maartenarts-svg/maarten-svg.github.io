// ============================================================
//  hoofdstuk.js  —  hulpfuncties voor hoofdstukkenbeheer
// ============================================================

/**
 * Parseer een datum-string "dd/mm/yyyy" naar een Date-object.
 */
export function parseDatum(str) {
  if (!str) return null;
  const [d, m, y] = str.split("/").map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Geef het huidige hoofdstuk terug op basis van vandaag.
 * Een hoofdstuk is "huidig" als vandaag >= startDatum EN <= eindDatum.
 * @param {Array} hoofdstukken
 * @returns {Object|null}
 */
export function getHuidigHoofdstuk(hoofdstukken) {
  const nu = new Date();
  nu.setHours(0, 0, 0, 0);
  return (hoofdstukken || []).find(h => {
    const start = parseDatum(h.startDatum);
    const einde = parseDatum(h.eindDatum);
    if (!start || !einde) return false;
    return nu >= start && nu <= einde;
  }) || null;
}

/**
 * Bepaal de "tot en met"-paragraaf die vandaag zichtbaar is
 * voor de opdrachten van een hoofdstuk.
 * @param {Object} hoofdstuk
 * @returns {string|null}  bv. "10.2"
 */
export function getTotEnMet(hoofdstuk) {
  if (!hoofdstuk?.zichtbaarheid?.length) return null;
  const nu = new Date();
  nu.setHours(0, 0, 0, 0);

  // Neem de laatste zichtbaarheidsregel waarvan de datum al gepasseerd is
  let actief = null;
  for (const regel of hoofdstuk.zichtbaarheid) {
    const vanaf = parseDatum(regel.vanaf);
    if (vanaf && nu >= vanaf) actief = regel;
  }
  return actief?.totEnMet || null;
}
