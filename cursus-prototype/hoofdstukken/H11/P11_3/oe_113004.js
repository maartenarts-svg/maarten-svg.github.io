/* ============================================================
   H11 / P11_3 / oe_113004.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_113004', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de uitspraken in symbolen.<br> Stel het getal voor door <i>g</i>.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['70%', '30%'];

  const matrix = [
    [
      { inhoud: 'in woorden', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'in symbolen', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '13 minder dan een getal', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '<i>g</i> - 13', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '5 meer dan het drievoud van een getal', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '3<i>g</i> + 5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '12 minder dan een vierde van een getal', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('1','4','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>g</i> - 12'; s.appendChild(p1);
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'het dubbele van de som van een getal en 5', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '2(<i>g</i> + 5)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '1 meer dan het kwadraat van een getal', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '<i>g</i><sup>2</sup> + 1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 6, 2, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
