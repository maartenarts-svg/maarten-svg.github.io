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

  voegTekstToe(inhoud, 'Noteer de betekenis van de eigenschap <strong>EN</strong> een voorbeeld.', ['intro-tekst']);

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
      inhoud: '∀ <i>a</i>, <i>b</i> ∈ ℚ: <i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: 'Bij de optelling van rationale getallen mogen de getallen van plaats verwisseld worden. <br>17 + 8 + 13 = 17 + 13 + 8',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: '∀ <i>a</i> ∈ ℚ: <i>a</i> + 0 = <i>a</i> = 0 + <i>a</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '0 ergens bij optellen verandert niets aan het eindresultaat.<br>0 + 17 = 17',
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
      inhoud: '0 ergens mee vermenigvuldigen zorgt ervoor dat het eindresultaat 0 is.<br>0 · 13 = 0',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ]
];

const tabel = maakZichtbareTabel(inhoud, 4, 2, {
  hoofding: 'boven', // 'links' | 'boven'
  matrix: tabelInhoud,
  rijHoogtes: ['0.9cm', '3cm', '3cm', '3cm']
  
});

})();
