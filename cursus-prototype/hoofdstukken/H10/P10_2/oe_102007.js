/* ============================================================
   H10 / P10_2 / oe_102007.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102007', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegLijstToe(inhoud, 'bullet', '0cm', '0.2cm', [
  'Markeer in het blauw de lettervormen met coëfficiënt 1.',
  'Markeer in het geel de lettervormen met coëfficiënt -1.'
  ]);
 
  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['17%', '17%', '17%', '17%', '17%', '17%'];

  const matrix = [
    [
      { inhoud: maakMarkering('<i>c</i><sup>2</sup>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3<i>xy</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('<i>d</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('1','3','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='\u200A<i>a</i>'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('-<i>q</i>', '#fae528', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1,5<i>p</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: maakMarkering('-<i>st</i>', '#fae528', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('<i>qr</i>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('<i>z</i><sup>3</sup>', '#bbdefb', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: maakMarkering('-<i>bk</i>', '#fae528', true), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1,1<i>x</i><sup>2</sup><i>y</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('-1','4','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>de</i>'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabel = maakZichtbareTabel(inhoud, 2, 6, {
    hoofding: null,
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  pasRandenAan(tabel,[]);

})();
