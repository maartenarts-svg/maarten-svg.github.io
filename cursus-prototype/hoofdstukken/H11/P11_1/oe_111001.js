/* ============================================================
   H11 / P11_1 / oe_111001.js
   soort: ontdek
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_111001', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de tabel aan. Gebruik voor het getal de letter <i>g</i>.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '1.5cm', '1.5cm', '1.5cm', '1.5cm'];
  const kolomBreedtes = ['33%', '33%', '33%'];

  const matrix = [
    [
      { inhoud: 'uitspraak 🪄', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'in symbolen', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'getal', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Ik heb een getal in mijn hoed. Tel je er 7 bij op, dan is de som 25.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '<i>g</i> + 7 = 25', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>g</i> = 18', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Ik heb een getal in mijn hoed. Trek je er 8 van af, dan is het verschil 10.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '<i>g</i> - 8 = 10', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>g</i> = 18', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Ik heb een getal in mijn hoed. Doe je dat maal 4, dan is het product 20.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '4<i>g</i> = 20', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>g</i> = 5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Ik heb een getal in mijn hoed. Doe je dat maal -6, dan is het product 42.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '-6<i>g</i> = 42', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>g</i> = -7', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 5, 3, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
