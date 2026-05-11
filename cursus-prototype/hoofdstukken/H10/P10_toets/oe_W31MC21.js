// LET OP: voorgedrukte oplossingen gebruiken de klasse 'opl-vast'.
// Pas in helpers.js de badge-toggle aan zodat .opl-vast altijd zichtbaar blijft:
//
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_1 / oe_101010.js
   soort: inoefenen
   ============================================================ */


(function () {

  const inhoud = maakOefening({
    id:'oe_101010', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud, 'Noteer de eigenschap in woorden.', ['intro-tekst']);

const tabelInhoud = [
  [
    {
      inhoud: 'in symbolen',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: 'in woorden',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: '∀ <i>a</i>, <i>b</i> ∈ ℚ: <i>a</i> · <i>b</i> = <i>b</i> · <i>a</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: 'De vermenigvuldiging van rationale getallen is commutatief.',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: '∀ <i>a</i> ∈ ℚ: <i>a</i> · 1 = <i>a</i> = 1 · <i>a</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '1 is het neutraal element voor de vermenigvuldiging van rationale getallen.',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: '∀ <i>a</i> ∈ ℚ: <i>a</i> · 0 = 0 = 0 · <i>a</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '0 is het opslorpend element voor de vermenigvuldiging van rationale getallen.',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ]
];

const tabel = maakZichtbareTabel(inhoud, 4, 2, {
  hoofding: 'boven', // 'links' | 'boven'
  matrix: tabelInhoud,
  rijHoogtes: ['0.9cm', '2.5cm', '2.5cm', '2.5cm'],
  kolomBreedtes: ['40%','60%']
});

})();
