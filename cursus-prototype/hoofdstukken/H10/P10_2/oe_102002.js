/* ============================================================
   H10 / P10_2 / oe_102002.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102002', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de tabel aan.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '1.2cm', '1.2cm', '1.2cm', '1.2cm', '1.2cm', '1.2cm'];
  const kolomBreedtes = ['33%', '33%', '33%'];

  const matrix = [
    [
      { inhoud: 'lettervorrm', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'coëfficiënt', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'letterdeel', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '-7<i>d</i><sup>4</sup>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-7', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>d</i><sup>4</sup>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '<i>qr</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>qr</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('7','2','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>x</i>'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('7','2','oplossing'));
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>x</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('-8','3','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>ab</i>'; s.appendChild(p1);
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('-8','3','opgave'));
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>ab</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '-<i>y</i><sup>2</sup>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '-1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>y</i><sup>2</sup>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('1','5','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>k</i>'; s.appendChild(p1);
      return s;})(), type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('1','5','oplossing'));
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>k</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 7, 3, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
