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
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de eigenschap in symbolen.<br> Let op de getallenverzameling!', ['intro-tekst']);

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
      inhoud: 'De optelling van gehele getallen is commutatief.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i>, <i>b</i> ∈ ℤ: <i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: 'De vermenigvuldiging van natuurlijke getallen is associatief.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℕ: (<i>a</i> · <i>b</i>) · <i>c</i> = <i>a</i> · (<i>b</i> · <i>c</i>)',
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
      inhoud: '0 is het neutraal element voor de optelling van natuurlijke getallen.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i> ∈ ℕ: <i>a</i> + 0 = <i>a</i> = 0 + <i>a</i>',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: '0 is het opslorpend element voor de vermenigvuldiging van gehele getallen.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i> ∈ ℤ: <i>a</i> · 0 = 0 = 0 · <i>a</i>',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: 'Elk geheel getal heeft een symmetrisch element voor de optelling.',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '∀ <i>a</i> ∈ ℤ: <i>a</i> + (-<i>a</i>) = 0 = -<i>a</i> + <i>a</i>',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ]
];

const tabel = maakZichtbareTabel(inhoud, 7, 2, {
  hoofding: 'boven', // 'links' | 'boven'
  matrix: tabelInhoud,
  rijHoogtes: ['0.9cm', '1.5cm', '1.5cm', '1.5cm', '1.5cm', '1.5cm', '1.5cm']
  
});

})();
