/* ============================================================
   statistiek_antwoorden.js
   Standaardantwoorden per vraag voor het statistisch onderzoek.
   Per vraag: mediaan (2 zinnen), modus (2 zinnen), variatiebreedte (2 zinnen).
   Placeholders: $$mediaan$$, $$modus$$, $$variatiebreedte$$
   ============================================================ */

const antwoorden = {

  'Hoeveel kinderen telt je gezin?': {
    mediaan: [
      'Bij de helft van de deelnemers bestaat het gezin uit $$mediaan$$ of minder kinderen.',
      'Bij de andere helft bestaat het gezin uit $$mediaan$$ of meer kinderen.',
    ],
    modus: [
      'Bij de meeste deelnemers telt het gezin $$modus$$ kinderen.',
    ],
    variatiebreedte: [
      'Het verschil tussen het gezin met het grootste aantal kinderen',
      'en dat met het kleinste aantal kinderen is $$variatiebreedte$$ kinderen.',
    ],
  },

  'Hoeveel dagen per week doe je aan sport?': {
    mediaan: [
      'De helft van de deelnemers doet $$mediaan$$ of minder dagen per week aan sport.',
      'De andere helft doet $$mediaan$$ of meer dagen per week aan sport.',
    ],
    modus: [
      'De meeste deelnemers doen $$modus$$ dagen per week aan sport.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste dagen per week aan sport doet',
      'en diegene die het minste dagen per week aan sport doet is $$variatiebreedte$$ dagen.',
    ],
  },

  'Hoeveel boeken lees je per jaar (ongeveer)?': {
    mediaan: [
      'De helft van de deelnemers leest $$mediaan$$ of minder boeken per jaar.',
      'De andere helft leest $$mediaan$$ of meer boeken per jaar.',
    ],
    modus: [
      'De meeste deelnemers lezen $$modus$$ boeken per jaar.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die de meeste boeken leest per jaar',
      'en diegene die de minste boeken leest per jaar is $$variatiebreedte$$ boeken.',
    ],
  },

  'Hoeveel keer per week eet je fruit?': {
    mediaan: [
      'De helft van de deelnemers eet $$mediaan$$ of minder keer per week fruit.',
      'De andere helft eet $$mediaan$$ of meer keer per week fruit.',
    ],
    modus: [
      'De meeste deelnemers eten $$modus$$ keer per week fruit.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste fruit eet',
      'en diegene die het minste fruit eet is $$variatiebreedte$$ keer per week.',
    ],
  },

  'Hoeveel keer per week eet je fastfood?': {
    mediaan: [
      'De helft van de deelnemers eet $$mediaan$$ of minder keer per week fastfood.',
      'De andere helft eet $$mediaan$$ of meer keer per week fastfood.',
    ],
    modus: [
      'De meeste deelnemers eten $$modus$$ keer per week fastfood.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste fastfood eet',
      'en diegene die het minste fastfood eet is $$variatiebreedte$$ keer per week.',
    ],
  },

  'Hoeveel vakken vind je leuk op school?': {
    mediaan: [
      'De helft van de deelnemers vindt $$mediaan$$ of minder vakken leuk.',
      'De andere helft vindt $$mediaan$$ of meer vakken leuk.',
    ],
    modus: [
      'De meeste deelnemers vinden $$modus$$ vakken leuk.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die de meeste vakken leuk vindt',
      'en diegene die de minste vakken leuk vindt is $$variatiebreedte$$ vakken.',
    ],
  },

  'Hoeveel dagen per week ga je met de fiets naar school?': {
    mediaan: [
      'De helft van de deelnemers fietst $$mediaan$$ of minder dagen per week naar school.',
      'De andere helft fietst $$mediaan$$ of meer dagen per week naar school.',
    ],
    modus: [
      'De meeste deelnemers fietsen $$modus$$ dagen per week naar school.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste dagen per week fietst',
      'en diegene die het minste dagen per week fietst is $$variatiebreedte$$ dagen.',
    ],
  },

  'Hoeveel huisdieren heb je?': {
    mediaan: [
      'De helft van de deelnemers heeft $$mediaan$$ of minder huisdieren.',
      'De andere helft heeft $$mediaan$$ of meer huisdieren.',
    ],
    modus: [
      'De meeste deelnemers hebben $$modus$$ huisdieren.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer met de meeste huisdieren',
      'en diegene met de minste huisdieren is $$variatiebreedte$$ huisdieren.',
    ],
  },

  'Hoeveel keer ben je dit schooljaar te laat gekomen?': {
    mediaan: [
      'De helft van de deelnemers kwam $$mediaan$$ of minder keer te laat dit schooljaar.',
      'De andere helft kwam $$mediaan$$ of meer keer te laat.',
    ],
    modus: [
      'De meeste deelnemers kwamen $$modus$$ keer te laat dit schooljaar.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste keer te laat kwam',
      'en diegene die het minste keer te laat kwam is $$variatiebreedte$$ keer.',
    ],
  },

  'Hoeveel dagen per week help je thuis in het huishouden?': {
    mediaan: [
      'De helft van de deelnemers helpt $$mediaan$$ of minder dagen per week in het huishouden.',
      'De andere helft helpt $$mediaan$$ of meer dagen per week.',
    ],
    modus: [
      'De meeste deelnemers helpen $$modus$$ dagen per week in het huishouden.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste dagen helpt',
      'en diegene die het minste dagen helpt is $$variatiebreedte$$ dagen.',
    ],
  },

  'Hoeveel minuten doe je erover om naar school te komen?': {
    mediaan: [
      'De helft van de deelnemers doet $$mediaan$$ of minder minuten over de rit naar school.',
      'De andere helft doet $$mediaan$$ of meer minuten over de rit naar school.',
    ],
    modus: [
      'De meeste deelnemers doen $$modus$$ minuten over de rit naar school.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer met de langste reistijd',
      'en diegene met de kortste reistijd is $$variatiebreedte$$ minuten.',
    ],
  },

  'Hoeveel uur slaap je gemiddeld per nacht?': {
    mediaan: [
      'De helft van de deelnemers slaapt $$mediaan$$ of minder uur per nacht.',
      'De andere helft slaapt $$mediaan$$ of meer uur per nacht.',
    ],
    modus: [
      'De meeste deelnemers slapen $$modus$$ uur per nacht.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste slaapt',
      'en diegene die het minste slaapt is $$variatiebreedte$$ uur.',
    ],
  },

  'Hoeveel minuten per dag besteed je aan huiswerk?': {
    mediaan: [
      'De helft van de deelnemers besteedt $$mediaan$$ of minder minuten per dag aan huiswerk.',
      'De andere helft besteedt $$mediaan$$ of meer minuten per dag aan huiswerk.',
    ],
    modus: [
      'De meeste deelnemers besteden $$modus$$ minuten per dag aan huiswerk.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die de meeste tijd aan huiswerk besteedt',
      'en diegene die de minste tijd besteedt is $$variatiebreedte$$ minuten.',
    ],
  },

  'Hoeveel uur schermtijd heb je thuis per dag?': {
    mediaan: [
      'De helft van de deelnemers heeft $$mediaan$$ of minder uur schermtijd per dag.',
      'De andere helft heeft $$mediaan$$ of meer uur schermtijd per dag.',
    ],
    modus: [
      'De meeste deelnemers hebben $$modus$$ uur schermtijd per dag.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer met de meeste schermtijd',
      'en diegene met de minste schermtijd is $$variatiebreedte$$ uur.',
    ],
  },

  'Hoeveel minuten per dag luister je naar muziek?': {
    mediaan: [
      'De helft van de deelnemers luistert $$mediaan$$ of minder minuten per dag naar muziek.',
      'De andere helft luistert $$mediaan$$ of meer minuten per dag naar muziek.',
    ],
    modus: [
      'De meeste deelnemers luisteren $$modus$$ minuten per dag naar muziek.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste naar muziek luistert',
      'en diegene die het minste naar muziek luistert is $$variatiebreedte$$ minuten.',
    ],
  },

  'Hoeveel minuten per dag besteed je aan gamen?': {
    mediaan: [
      'De helft van de deelnemers gamet $$mediaan$$ of minder minuten per dag.',
      'De andere helft gamet $$mediaan$$ of meer minuten per dag.',
    ],
    modus: [
      'De meeste deelnemers gamen $$modus$$ minuten per dag.',
    ],
    variatiebreedte: [
      'Het verschil tussen de deelnemer die het meeste gamet',
      'en diegene die het minste gamet is $$variatiebreedte$$ minuten.',
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
