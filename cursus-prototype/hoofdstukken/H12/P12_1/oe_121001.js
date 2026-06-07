/* ============================================================
   H12 / P12_1 / oe_121001.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_121001', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, '', ['intro-tekst']);

  const rijHoogtes = ['0.7cm', '0.7cm', '0.7cm', '0.7cm', '0.7cm', '0.7cm', '0.7cm', '0.7cm'];
  const kolomBreedtes = ['80%', '10%', '10%'];

  const matrix = [
    [
      { inhoud: 'Situatie', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>P</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>A</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Yana loopt rond het zwembad.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Loes schildert de muren van haar slaapkamer.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Paulien kleurt de rand van haar brieven geel.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De vloer van Maartens slaapkamer is bedekt met tapijt.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Mike kiest voor elke foto een kleurrijke kader.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De school heeft genoeg groene ruimte.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De camping is volledig bezet.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'X', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 8, 3, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
