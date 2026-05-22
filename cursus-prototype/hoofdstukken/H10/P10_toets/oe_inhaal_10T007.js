/* ============================================================
   H10 / P10_T / oe_inhaal_10T007.js
   soort: inoefenen
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_10T007', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'De prijs <i>p</i> van een gamekaart voor een online spel kun je berekenen met de formule <i>p</i> = 5 + 3<i>x</i> euro.', ['intro-tekst']);

  voegWitruimteToe(inhoud,'0.05cm');

  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Hierin is <i>x</i> het aantal extra skins dat je koopt.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  voegWitruimteToe(inhoud,'0.05cm');

  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Vul de tabel aan.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['50%', '50%'];

  const matrix = [
    [
      { inhoud: 'aantal extra skins (<i>x</i>)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'prijs <i>p</i> (euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 + 3 · <span class="markeer-lila">0</span> = 5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 + 3 · <span class="markeer-lila">3</span> = 14', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '8', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 + 3 · <span class="markeer-lila">8</span> = 29', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '10', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 + 3 · <span class="markeer-lila">10</span> = 35', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 5, 2, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
