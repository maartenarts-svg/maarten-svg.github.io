/* ============================================================
   H11 / P11_1 / oe_111005.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_111005', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, '', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['25%', '25%', '25%', '25%'];

  const matrix = [
    [
      { inhoud: 'vergelijking', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'linkerlid', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'rechterlid', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'onbekende', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '2<i>x</i> - 6 = 5<i>x</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2<i>x</i> - 6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5<i>x</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>x</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '-17 = 7<i>t</i> + 8', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-17', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '7<i>t</i> + 8', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>t</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '0,3(<i>a</i> - 4) = 2<i>a</i> + 1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '0,3(<i>a</i> - 4)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2<i>a</i> + 1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>a</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 4, 4, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
