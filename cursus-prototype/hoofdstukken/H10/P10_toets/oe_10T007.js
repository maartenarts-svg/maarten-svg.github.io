/* ============================================================
   H10 / P10_T / oe_10T007.js
   soort: inoefenen
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_10T007', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'De prijs <i>k</i> voor een gsm-abonnement kun je berekenen met de formule <i>k</i> = 10 + 0,15<i>s</i> euro.', ['intro-tekst']);

  voegWitruimteToe(inhoud,'0.05cm');

  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Hierin is <i>s</i> het aantal verstuurde sms\'en.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
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
      { inhoud: 'aantal sms\'en (<i>s</i>)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'kostprijs (euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10 + 0,15 · <span class="markeer-lila">0</span> = 10', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '20', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10 + 0,15 · <span class="markeer-lila">20</span> = 13', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '40', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10 + 0,15 · <span class="markeer-lila">40</span> = 16', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '100', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10 + 0,15 · <span class="markeer-lila">100</span> = 25', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 5, 2, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
