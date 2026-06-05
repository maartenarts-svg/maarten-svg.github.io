/* ============================================================
   H10 / P10_2 / oe_W31WIE_1.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_W31WIE_1', nummer:'?', soort:'test',
    niveaus:[''], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud,'Markeer de lettervormen die NIET volgens de afspraak genoteerd zijn.')
 
  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['17%', '17%', '17%', '17%', '17%', '17%'];

  const matrix = [
    [
      { inhoud: maakMarkering('5 · <i>a</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('-<i>x</i> · 2', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: htmlSpan('<i>z</i><sup>2</sup>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('3<i>a</i> · 2<i>b</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: maakMarkering('1<i>qr</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: htmlSpan('5<i>a</i><sup>2</sup><i>b</i><sup>3</sup>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('-1<i>k</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('<i>s</i>2', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabel = maakZichtbareTabel(inhoud, 2, 4, {
    hoofding: null,
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  pasRandenAan(tabel,[]);

})();
