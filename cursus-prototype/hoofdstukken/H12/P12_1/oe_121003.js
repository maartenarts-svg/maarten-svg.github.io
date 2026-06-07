/* ============================================================
   H12 / P12_1 / oe_121003.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_121003', nummer:'?', soort:'oefen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, '', ['intro-tekst']);

  const rijHoogtes = ['0.7cm', '0.7cm', '0.7cm', '0.7cm', '0.7cm'];
  const kolomBreedtes = ['80%', '10%', '10%'];

  const matrix = [
    [
      { inhoud: 'Situatie', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>P</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>A</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Pascals coachees hebben de sporthal geveegd.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Thomas vernieuwt de omheining van zijn tuin.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Linda behangt deze zomer haar keuken.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Fien heeft net een heel A4’tje ingekleurd.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 5, 3, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
