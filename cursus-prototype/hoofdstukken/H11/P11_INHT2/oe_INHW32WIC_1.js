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
      { inhoud: maakMarkering('-7 · <i>y</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: htmlSpan('3<i>x</i><sup>2</sup>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('<i>a</i>5', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: htmlSpan('<i>q</i><sup>2</sup><i>s</i><sup>3</sup>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: maakMarkering('4<i>a</i> · 1<i>b</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('4<i>x</i>1<i>y</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('-1<i>t</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: htmlSpan('-<i>a</i><i>b</i>'), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
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
