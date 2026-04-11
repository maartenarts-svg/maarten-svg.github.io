/* ============================================================
   H10 / P10_4 / oe_104K04.js
   soort: inoefenen
   ============================================================ */
(function () {

  const oe_104K04_1 = document.createElement('span');
  const oe_104K04_1_m1 = maakMarkering(htmlSpan('<i>xy</i> + <i>xz</i>'), '#bbdefb', true);
  oe_104K04_1.appendChild(oe_104K04_1_m1);

  const oe_104K04_2 = document.createElement('span');
  const oe_104K04_2_m1 = maakMarkering(htmlSpan('<i>xz</i> + <i>xy</i>'), '#bbdefb', true);
  oe_104K04_2.appendChild(oe_104K04_2_m1);

  const oe_104K04_3 = document.createElement('span');
  const oe_104K04_3_m1 = maakMarkering(htmlSpan('6<i>a</i>'), '#bbdefb', true);
  oe_104K04_3.appendChild(oe_104K04_3_m1);

  const oe_104K04_4 = document.createElement('span');
  const oe_104K04_4_m1 = maakMarkering(htmlSpan('<i>t</i> · '), '#bbdefb', true);
  oe_104K04_4.appendChild(oe_104K04_4_m1);
  const oe_104K04_4_m2 = maakMarkering(maakBreuk('1','5','opgave'), '#bbdefb', true);
  oe_104K04_4.appendChild(oe_104K04_4_m2);

  const oe_104K04_5 = document.createElement('span');
  const oe_104K04_5_m1 = maakMarkering(htmlSpan('<i>t</i> : 5'), '#bbdefb', true);
  oe_104K04_5.appendChild(oe_104K04_5_m1);

  const oe_104K04_6 = document.createElement('span');
  const oe_104K04_6_m1 = maakMarkering(maakBreuk('5','9','opgave'), '#bbdefb', true);
  oe_104K04_6.appendChild(oe_104K04_6_m1);
  const oe_104K04_6_m2 = maakMarkering(htmlSpan('<i>a</i>'), '#bbdefb', true);
  oe_104K04_6.appendChild(oe_104K04_6_m2);

  const oe_104K04_7 = document.createElement('span');
  const oe_104K04_7_m1 = maakMarkering(htmlSpan('5 · '), '#bbdefb', true);
  oe_104K04_7.appendChild(oe_104K04_7_m1);
  const oe_104K04_7_m2 = maakMarkering(maakBreuk('<i>a</i>','9','opgave'), '#bbdefb', true);
  oe_104K04_7.appendChild(oe_104K04_7_m2);

  const oe_104K04_8 = document.createElement('span');
  const oe_104K04_8_m1 = maakMarkering(htmlSpan('3 + '), '#bbdefb', true);
  oe_104K04_8.appendChild(oe_104K04_8_m1);
  const oe_104K04_8_m2 = maakMarkering(maakBreuk('<i>b</i>','2','opgave'), '#bbdefb', true);
  oe_104K04_8.appendChild(oe_104K04_8_m2);

  const inhoud = maakOefening({
    id:'oe_104K04', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Welke uitdrukkingen in kolommen A, B of C zijn gelijk aan de gegeven lettervorm? <br>Markeer alle juiste antwoorden.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '1.2cm', '1.2cm', '1.2cm', '1.2cm', '1.2cm'];
  const kolomBreedtes = ['25%', '25%', '25%', '25%'];

  const matrix = [
    [
      { inhoud: 'lettervorm', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'A', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'B', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'C', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '<i>x</i>(<i>y</i> + <i>z</i>)', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>xy</i> + <i>z</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_1, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_2, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '7<i>a</i> - <i>a</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '7', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-7<i>a</i><sup>2</sup>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_3, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('<i>t</i>','5','opgave'));
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_4, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('1','<i>t</i>','opgave'));
      const p1=document.createElement('span'); p1.innerHTML=' · 5'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_5, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('5<i>a</i>','9','opgave'));
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('5','9','opgave'));
      const p1=document.createElement('span'); p1.innerHTML=' · '; s.appendChild(p1);
      s.appendChild(maakBreuk('<i>a</i>','9','opgave'));
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_6, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_7, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('6 + <i>b</i>','\u00A0\u00A0 2 \u00A0\u00A0','opgave'));
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe_104K04_8, type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='6 + '; s.appendChild(p0);
      s.appendChild(maakBreuk('<i>b</i>','2','opgave'));
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3 + <i>b</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 6, 4, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
