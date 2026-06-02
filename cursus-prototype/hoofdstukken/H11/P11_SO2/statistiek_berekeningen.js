/* ============================================================
   statistiek_berekeningen.js
   Berekeningen voor het statistisch onderzoek
   ============================================================ */

/* ------------------------------------------------------------
   GEMIDDELDE
   Geeft een object terug met:
   - som:       optelling als string  "x + y + z + ..."
   - somWaarde: numerieke som
   - berekening: "som : 20"
   - gemiddelde: afgerond op 1 decimaal
   ------------------------------------------------------------ */
function berekenGemiddelde(data) {
  const somWaarde = data.reduce((acc, val) => acc + val, 0);
  const som = data.join(' + ');
  const gemiddelde = (somWaarde / data.length);
  return {
    som,
    somWaarde,
    berekening: `${somWaarde} : ${data.length}`,
    gemiddelde: gemiddelde.toString().replace('.', ','),
  };
}

/* ------------------------------------------------------------
   MEDIAAN
   Geeft een object terug met:
   - gesorteerd:   array van klein naar groot
   - reeks:        gesorteerde getallen als string "g[0], g[1], ..."
   - middenLinks:  middelste getal (of linker van de twee bij even n)
   - middenRechts: zelfde als middenLinks bij oneven n, rechter bij even n
   - berekening:   "(g[m] + g[m+1]) : 2" bij even n, "g[m]" bij oneven n
   - mediaan:      uitkomst, afgerond op 1 decimaal
   ------------------------------------------------------------ */
function berekenMediaan(data) {
  const gesorteerd = [...data].sort((a, b) => a - b);
  const reeks = gesorteerd.join(', ');
  const n = gesorteerd.length;
  let middenLinks, middenRechts, mediaan, berekening;
  if (n % 2 === 0) {
    middenLinks  = gesorteerd[n / 2 - 1];
    middenRechts = gesorteerd[n / 2];
    mediaan = Math.round(((middenLinks + middenRechts) / 2) * 10) / 10;
    berekening = `(${middenLinks} + ${middenRechts}) : 2`;
  } else {
    middenLinks  = gesorteerd[Math.floor(n / 2)];
    middenRechts = middenLinks;
    mediaan = middenLinks;
    berekening = `${middenLinks}`;
  }
  return {
    gesorteerd,
    reeks,
    middenLinks,
    middenRechts,
    berekening,
    mediaan: mediaan.toString().replace('.', ','),
  };
}

/* ------------------------------------------------------------
   MODUS
   Geeft de waarde terug die het vaakst voorkomt.
   (Datasets zijn gegenereerd met precies één modus.)
   ------------------------------------------------------------ */
function berekenModus(data) {
  const telling = {};
  data.forEach(v => { telling[v] = (telling[v] || 0) + 1; });
  let maxFreq = 0;
  let modus = null;
  for (const [waarde, freq] of Object.entries(telling)) {
    if (freq > maxFreq) {
      maxFreq = freq;
      modus = Number(waarde);
    }
  }
  return { modus, frequentie: maxFreq };
}

/* ------------------------------------------------------------
   VARIATIEBREEDTE
   Geeft een object terug met:
   - min:            kleinste waarde
   - max:            grootste waarde
   - berekening:     "max - min"
   - variatiebreedte: uitkomst
   ------------------------------------------------------------ */
function berekenVariatiebreedte(data) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  return {
    min,
    max,
    berekening: `${max} - ${min}`,
    variatiebreedte: max - min,
  };
}

/* ------------------------------------------------------------
   FREQUENTIETABEL
   Geeft een gesorteerde lijst van [waarde, frequentie]-paren
   gesorteerd van klein naar groot op waarde.
   Voorbeeld: [ [2, 3], [3, 2], [4, 1] ]
   ------------------------------------------------------------ */
function berekenFrequentietabel(data) {
  const telling = {};
  data.forEach(v => { telling[v] = (telling[v] || 0) + 1; });
  return Object.entries(telling)
    .map(([waarde, freq]) => [Number(waarde), freq])
    .sort((a, b) => a[0] - b[0]);
}

/* ------------------------------------------------------------
   ALLES IN ÉÉN
   Handig om alles in één keer op te vragen.
   ------------------------------------------------------------ */
function berekenAlles(data) {
  return {
    gemiddelde:      berekenGemiddelde(data),
    mediaan:         berekenMediaan(data),
    modus:           berekenModus(data),
    variatiebreedte: berekenVariatiebreedte(data),
    frequentietabel: berekenFrequentietabel(data),
  };
}
