/* ============================================================
   H10 / P10_2 / oe_102005.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102005', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, '', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '1.2cm', '1.2cm', '1.2cm', '1.2cm', '1.2cm'];
  const kolomBreedtes = ['33%', '33%', '33%'];

  const matrix = [
    [
      { inhoud: 'lettervorm', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'coëfficiënt', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'letterdeel', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '-15<i>a</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-15', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>a</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '-<i>xy</i>\u00A0', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>xy</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('5','4','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>b</i><sup>2</sup>'; s.appendChild(p1);
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('5','4','opgave'));
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>b</i><sup>2</sup>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '<i>z</i><sup>2</sup>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>z</i><sup>2</sup>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('-1','9','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>y</i>'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('-1','9','oplossing'));
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>y</i>\u00A0', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 6, 3, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
