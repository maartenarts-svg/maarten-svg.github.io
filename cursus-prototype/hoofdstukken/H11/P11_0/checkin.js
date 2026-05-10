/* ============================================================
   H11 / checkin / checkin.js
   soort: ontdek
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'checkin', nummer:'CI', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Een aantal leerlingen verkopen snacks voor een schoolactie. <br>Een pakje chips kost 2 euro en een drankje kost 3 euro. <br> Ze verkopen 10 items en verdienen zo 26 euro.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.5cm');

    /* ---- Span-variabelen ---- */
  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('Onderzoek met behulp van de tabel hoeveel zakjes chips en hoeveel drankjes ze verkocht hebben.'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('Formuleer een antwoord.'));

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_1, false);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tbodyA = maakNestedTabel(tbody,'4.19%');

    const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['25%', '25%', '50%'];

  const matrix = [
    [
      { inhoud: 'aantak zakjes chips', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'aantal drankjes', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'verdiende bedrag (in euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '10', type: 'oplossing', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '0', type: 'oplossing', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10 · 2 + 0 · 3 = 20', type: 'oplossing', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '9', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '9 · 2 + 1 · 3 = 21', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '8', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '8 · 2 + 2 · 3 = 22', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '7', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '7 · 2 + 3 · 3 = 23', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6 · 2 + 4 · 3 = 24', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 · 2 + 5 · 3 = 25', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '4', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4 · 2 + 6 · 3 = 26', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(tbodyA, 8, 3, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_2, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(htmlSpan('Ze verkochten 4 zakjes chips en 6 drankjes.'), false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);


})();
