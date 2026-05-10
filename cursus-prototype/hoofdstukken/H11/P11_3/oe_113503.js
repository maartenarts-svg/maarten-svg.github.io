/* ============================================================
   H11 / P11_3 / oe_113503.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_113503', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de uitspraken in symbolen.<br> Stel de massa voor door <i>m</i>.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['70%', '30%'];

  const matrix = [
    [
      { inhoud: 'in woorden', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'in symbolen', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'het drievoud van de massa', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '3<i>m</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '5 minder dan de massa', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '<i>m</i> - 5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'een derde van de massa', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('1','3','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>m</i>'; s.appendChild(p1);
      return s;})(), type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'het dubbele van de som van de massa en 4', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '2(<i>m</i> + 4)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 5, 2, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
