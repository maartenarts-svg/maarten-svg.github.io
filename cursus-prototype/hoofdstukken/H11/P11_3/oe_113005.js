/* ============================================================
   H11 / P11_3 / oe_113005.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_113005', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de tabel aan.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['10%', '25%', '25%', '40%'];

  const matrix = [
    [
      { inhoud: 'getal', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '7 meer dan het getal', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '\u00A0het zesvoud<br>van het getal', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3 meer dan het viervoud<br>\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0van het getal', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '8', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '8 + 7 = 15', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6 · 8 = 48', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4 · 8 + 3 = 35', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '10', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10 + 7 = 15', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6 · 10 = 60', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4 · 10 + 3 = 43', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '-3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-3 + 7 = 4', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6 · (-3) = -18', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4 · (-3) + 3 = -9', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '<i>g</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>g</i> + 7', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6<i>g</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4<i>g</i> + 3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 5, 4, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
