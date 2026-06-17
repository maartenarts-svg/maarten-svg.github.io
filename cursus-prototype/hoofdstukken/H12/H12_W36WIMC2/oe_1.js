/* ============================================================
   H12 / H12_W36WIMC2 / oe_1.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_121001', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Kruis aan of het over omtrek (<i>P</i>) of over oppervlakte (<i>A</i>) gaat.', ['intro-tekst']);

  const rijHoogtes = ['0.7cm', '0.7cm', '0.7cm', '0.7cm', '0.7cm',];
  const kolomBreedtes = ['80%', '10%', '10%'];

  const matrix = [
    [
      { inhoud: 'Situatie', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>P</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>A</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Ik fiets een toertje rond Sint-Niklaas.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De poetsers vegen de vloer.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De politie spant de plaats van de misdaad af met een lint.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De feestzaal zit volgepakt met mensen.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
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
