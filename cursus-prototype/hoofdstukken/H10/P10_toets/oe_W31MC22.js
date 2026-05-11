// LET OP: voorgedrukte oplossingen gebruiken de klasse 'opl-vast'.
// Pas in helpers.js de badge-toggle aan zodat .opl-vast altijd zichtbaar blijft:
//
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_1 / oe_101009.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101009', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de eigenschap in symbolen.', ['intro-tekst']);

const tabelInhoud = [
  [
    {
      inhoud: 'in woorden',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: 'in symbolen',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: 'De optelling van rationale getallen is associatief.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ: (<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>)',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: 'De vermenigvuldiging van rationale getallen is distributief ten opzichte van de optelling van rationale getallen.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ: <i>a</i> · (<i>b</i> + <i>c</i>) = <i>a</i> · <i>b</i> + <i>a</i> · <i>c</i>',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: 'Elk rationaal getal heeft een symmetrisch element voor de optelling.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i> ∈ ℚ: <i>a</i> + (-<i>a</i>) = 0 = -<i>a</i> + <i>a</i>',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ]
];

const tabel = maakZichtbareTabel(inhoud, 4, 2, {
  hoofding: 'boven', // 'links' | 'boven'
  matrix: tabelInhoud,
  rijHoogtes: ['0.9cm', '2cm', '2cm', '2cm']
  
});

})();
