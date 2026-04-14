/* ============================================================
   H10 / P10_T / oe_10T003.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_10T003', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Een taxibedrijf berekent de ritprijs <i>r</i> (in euro) met de formule <i>r</i> = 3 + 2,5<i>s</i>. ', ['intro-tekst']);

  voegWitruimteToe(inhoud,'0.05cm');

  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Hierin is <i>s</i> de afstand (in km). '; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);

  voegWitruimteToe(inhoud,'0.05cm');
  }

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
      { inhoud: 'afstand (km)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'ritprijs (EUR)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3 + 2,5 · <span class="markeer-lila">0</span> = 3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '10', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3 + 2,5 · <span class="markeer-lila">10</span> = 28', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '15', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3 + 2,5 · <span class="markeer-lila">15</span> = 40,5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '20', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3 + 2,5 · <span class="markeer-lila">40</span> = 103', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 5, 2, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
