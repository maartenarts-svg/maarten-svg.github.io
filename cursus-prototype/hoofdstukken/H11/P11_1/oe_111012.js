/* ============================================================
   H11 / P11_1 / oe_111012.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_111012', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Markeer de vergelijkingen waarbij je een term moet wegwerken in het blauw.<br>Markeer de vergelijkingen waarbij je een factor moet wegwerken in het geel.', ['intro-tekst']);

  const vgl1 = maakMarkering(htmlSpan('-8<i>x</i> = 5'), '#fff9c4', true);
  const vgl2 = maakMarkering(htmlSpan('<i>a</i> + 3 = 17'), '#bbdefb', true);
  const vgl3 = maakMarkering(htmlSpan('-<i>y</i> = 5'), '#fff9c4', true);
  const vgl4 = maakMarkering(htmlSpan('7 = <i>t</i> - 3'), '#bbdefb', true);
  const vgl5 = maakMarkering(htmlSpan('5 = 2<i>d</i>'), '#fff9c4', true);
  const vgl6 = maakMarkering(htmlSpan('7<i>z</i> = -8'), '#fff9c4', true);
  const vgl7 = maakMarkering(htmlSpan('9 + <i>d</i> = -10'), '#bbdefb', true);
  const vgl8 = maakMarkering(htmlSpan('-2<i>p</i> = 50'), '#fff9c4', true);  


  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['25%', '25%', '25', '25%'];

  const matrix = [
    [
      { inhoud: vgl1, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: vgl2, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: vgl3, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: vgl4, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: vgl5, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: vgl6, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: vgl7, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: vgl8, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabel = maakZichtbareTabel(inhoud, 2, 4, {
    hoofding: null,
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });
  
  pasRandenAan(tabel,[{r:0,c:0},]);
})();
