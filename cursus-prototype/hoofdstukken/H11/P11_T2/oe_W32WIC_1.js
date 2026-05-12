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
      { inhoud: htmlSpan('7<i>a</i><sup>2</sup>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('-3 · <i>x</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('<i>z</i>20', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('5<i>x</i> · 1<i>y</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: htmlSpan('<i>a</i><sup>2</sup><i>b</i><sup>3</sup>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: htmlSpan('-<i>x</i><i>y</i>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('-1<i>s</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('5<i>s</i>1<i>t</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
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
