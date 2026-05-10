/* ============================================================
   H11 / P11_1 / oe_111004.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_111004', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Markeer de vergelijkingen', ['intro-tekst']);

  const oe_111004a = document.createElement('span');
  const oe_111004a_m1 = maakMarkering(htmlSpan('<i>t</i> - 7 = 12'), '#bbdefb', true);
  oe_111004a.appendChild(oe_111004a_m1);

  const oe_111004b = document.createElement('span');
  const oe_111004b_m1 = maakMarkering(htmlSpan('2<i>x</i> + 8 = -3<i>x</i> - 6'), '#bbdefb', true);
  oe_111004b.appendChild(oe_111004b_m1);  

  const oe_111004c = document.createElement('span');
  const oe_111004c_m1 = maakMarkering(htmlSpan('19<i>t</i> - 13 = 5'), '#bbdefb', true);
  oe_111004c.appendChild(oe_111004c_m1);  

  const oe_111004d = document.createElement('span');
  const oe_111004d_m1 = maakMarkering(htmlSpan('6<i>z</i> = 24'), '#bbdefb', true);
  oe_111004d.appendChild(oe_111004d_m1);  

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['33%', '33%', '33%'];

  const matrix = [
    [
      { inhoud: oe_111004a, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_111004b, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2<i>d</i> - 5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '30 · 2 = 60', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_111004c, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_111004d, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabel = maakZichtbareTabel(inhoud, 2, 3, {
    hoofding: null,
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });
  
  pasRandenAan(tabel,[{r:0,c:0},]);

})();
