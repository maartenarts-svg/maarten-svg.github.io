/* ============================================================
   H10 / P10_2 / oe_102006.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102006', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul aan zoals het voorbeeld.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '1.2cm', '0.1cm', '1.2cm', '0.1cm', '1.2cm', '0.1cm', '1.2cm', '0.1cm', '1.2cm', '0.1cm', '1.2cm'];
  const kolomBreedtes = ['10%', '7%', '13%', '7%', '13%','50%'];

  const oe10200601 = document.createElement('span');
  oe10200601.appendChild(htmlSpan('<i>x</i><sup>2</sup>'));

  const oe10200602 = document.createElement('span');
  oe10200602.appendChild(htmlSpan('<i>y</i><sup>3</sup>'));

  const matrix = [
    [
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'coëfficiënt', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'letterdeel', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '7<i>x</i><sup>2</sup>', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '=', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '7', type: 'oplossing', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '·', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe10200601, type: 'oplossing', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '3<i>bz</i>', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '=', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '·', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>bz</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '1,5<i>k</i>', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '=', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1,5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '·', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>k</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '-0,8<i>y</i><sup>3</sup>', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '=', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-0,8', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '·', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: oe10200602, type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('2','5','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>ab</i>'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '=', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('2','5','oplossing'));
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '·', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>ab</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('-4','9','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>z</i>'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '=', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('-4','9','oplossing'));
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '·', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'z', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabel = maakZichtbareTabel(inhoud, 12, 6, {
    hoofding: null,
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  pasRandenAan(tabel, {
    cellenMetRand: [
      { r: 1, c: 2 }, { r: 1, c: 4 },
      { r: 3, c: 2 }, { r: 3, c: 4 },
      { r: 5, c: 2 }, { r: 5, c: 4 },
      { r: 7, c: 2 }, { r: 7, c: 4 },
      { r: 9, c: 2 }, { r: 9, c: 4 },
      { r: 11, c: 2 }, { r: 11, c: 4 },
    ]
});

})();
