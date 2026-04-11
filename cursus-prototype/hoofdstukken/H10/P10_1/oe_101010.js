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
  // CELINHOUD: ∀ x ∈ ℚ₀: x · 1/x = 1 = 1/x · x
  const celInhoud1 = (function() {
    const s = document.createElement('span'); // wrapper

    // Deel 1: ∀ x ∈ ℚ₀: x · 
    const deel1 = document.createElement('span');
    deel1.innerHTML = '∀ <i>x</i> ∈ ℚ<sub>0</sub>: <i>x</i> · ';
    s.appendChild(deel1);

    // Deel 2: breuk 1/x
    const teller1 = '1'; // kan string
    const noemer1 = document.createElement('i');
    noemer1.textContent = 'x';
    s.appendChild(maakBreuk(teller1, noemer1, 'opgave'));

    // Deel 3: = 1 =
    const deel3 = document.createElement('span');
    deel3.textContent = ' = 1 = ';
    s.appendChild(deel3);

    // Deel 4: breuk 1/x
    const teller2 = '1';
    const noemer2 = document.createElement('i');
    noemer2.textContent = 'x';
    s.appendChild(maakBreuk(teller2, noemer2, 'opgave'));

    // Deel 5: · x
    const deel5 = document.createElement('span');
    deel5.innerHTML = ' · <i>x</i>';
    s.appendChild(deel5);

    return s;
  })();

  const inhoud = maakOefening({
    id:'oe_101010', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud, 'Noteer de eigenschap in woorden.<br> Let op de getallenverzameling!', ['intro-tekst']);

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
      inhoud: '∀ <i>x</i>, <i>y</i> ∈ ℤ: <i>x</i> · <i>y</i> = <i>y</i> · <i>x</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: 'De optelling van gehele getallen is commutatief.',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: celInhoud1,
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: 'Elk rationaal getal verschillend van nul heeft een symmetrisch element voor de vermenigvuldiging.',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: '∀ <i>x</i> ∈ ℕ: <i>x</i> · 1 = <i>x</i> = 1 · <i>x</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: '1 is het neutraal element voor de optelling van natuurlijke getallen.',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ],
  [
    {
      inhoud: '∀ <i>x</i>, <i>y</i>, <i>z</i> ∈ ℤ: <i>x</i> · (<i>y</i> + <i>z</i>) = <i>x</i> · <i>y</i> + <i>x</i> · <i>z</i>',
      type: 'opgave', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'left', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    },
    {
      inhoud: 'De vermenigvuldiging van gehele getallen is distributief ten opzichte van de optelling van gehele getallen.',
      type: 'toggle', // 'opgave' | 'oplossing' | 'toggle'
      hAlign: 'center', // 'left' | 'center' | 'right'
      vAlign: 'middle'  // 'top' | 'middle' | 'bottom'
    }
  ]
];

const tabel = maakZichtbareTabel(inhoud, 5, 2, {
  hoofding: 'boven', // 'links' | 'boven'
  matrix: tabelInhoud,
  rijHoogtes: ['0.9cm', '1.5cm', '1.5cm', '1.5cm', '1.5cm'],
  kolomBreedtes: ['40%','60%']
});

})();
