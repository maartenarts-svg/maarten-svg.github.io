/* ============================================================
   statistiek_antwoorden.js
   Standaardantwoorden per vraag voor het statistisch onderzoek.
   Per vraag: mediaan (2 zinnen), modus (2 zinnen), variatiebreedte (2 zinnen).
   Placeholders: $$mediaan$$, $$modus$$, $$variatiebreedte$$
   ============================================================ */

const antwoorden = {

  'Hoeveel woorden heb je onthouden?': {
    mediaan: [
      'De helft van de leerlingen heeft $$mediaan$$ of minder woorden onthouden.',
      'De andere helft heeft $$mediaan$$ of meer woorden onthouden.',
    ],
    modus: [
      'De meeste leerlingen hebben $$modus$$ woorden onthouden.',
    ],
    variatiebreedte: [
      'Het verschil tussen de leerling die de meeste woorden heeft onthouden',
      'en die die de minste woorden heeft onthouden, is $$variatiebreedte$$ woorden.',
    ],
  },

};

/* ============================================================
   HAAL ANTWOORDEN OP VOOR EEN SPECIFIEKE VRAAG EN MAATSTAF
   Vervangt $$mediaan$$, $$modus$$, $$variatiebreedte$$ door
   de berekende waarden.

   Gebruik:
     const zinnen = getAntwoord('mediaan', ACTIEVE_DATA);
     // → array van strings, klaar om te tonen
   ============================================================ */
function getAntwoord(maatstaf, data) {
  const berekeningen = berekenAlles(data);
  const vraag = datasets[
    Object.keys(datasets).find(k => datasets[k].data.toString() === data.toString())
  ]?.vraag;

  if (!vraag || !antwoorden[vraag]) return [];

  const zinnen = antwoorden[vraag][maatstaf] ?? [];
  const waarden = {
    mediaan:         berekeningen.mediaan.mediaan,
    modus:           berekeningen.modus.modus,
    variatiebreedte: berekeningen.variatiebreedte.variatiebreedte,
  };

  return zinnen.map(zin =>
    zin.replace(/\$\$(\w+)\$\$/g, (_, sleutel) => waarden[sleutel] ?? `$$${sleutel}$$`)
  );
}
