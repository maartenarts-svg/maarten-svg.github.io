/* ============================================================
   H11 / checkout / checkout.js
   soort: ontdek
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'checkin', nummer:'CO', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Een aantal leerlingen verkopen snacks voor een schoolactie. <br>Een pakje chips kost 2 euro en een drankje kost 3 euro. <br> Ze verkopen 362 items en verdienen zo 969 euro.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Bereken hoeveel zakjes chips en hoeveel drankjes ze verkochten.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.5cm');

    /* ---- Span-variabelen ---- */
  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('Gebruik de tabel om een overzicht te krijgen van het probleem.<br>Stel het aantal verkochte drankjes voor door <i>x</i>.'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('Stel met behulp van de tabel de vergelijking op.'));

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('1', oe_1, false);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tbodyA = maakNestedTabel(tbody,'4.19%');

  {
    const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm'];
    const kolomBreedtes = ['20%', '20%', '20%', '40%'];

    const matrix = [
      [
        { inhoud: 'wat', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'aantal', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'prijs (in euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'verdiende bedrag (in euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      ],
      [
        { inhoud: 'drankje', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '<i>x</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '3<i>x</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      ],
      [
        { inhoud: 'chips', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '362 - <i>x</i>', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '2', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '2(362 - <i>x</i>)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      ],
      [
        { inhoud: 'TOTAAL', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '362', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'XXX', type: 'oplossing', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '969', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      ],
    ];

    maakZichtbareTabel(tbodyA, 4, 4, {
      hoofding: 'boven',
      rijHoogtes,
      kolomBreedtes,
      matrix,
    });
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('2', oe_2, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(htmlSpan('3<i>x</i> + 2(362 - <i>x</i>) = 969'), false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('3', htmlSpan('Los de vergelijking op.'), false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd(htmlSpan('3<i>x</i> + 2(362 - <i>x</i>) = 969'), false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);

  const trc1 = document.createElement('tr');
  const tdc1 = maakSlTd(htmlSpan('3<i>x</i> + 724 - 2<i>x</i> = 969'), false);
  tdc1.classList.add('kolom-links');
  trc1.appendChild(tdc1);
  tbody.appendChild(trc1);

  const trc2 = document.createElement('tr');
  const tdc2 = maakSlTd(htmlSpan('3<i>x</i> + 724 - 2<i>x</i> <span class="markeer-lila">- 724</span> = 969 <span class="markeer-lila">- 724</span>'), false);
  tdc2.classList.add('kolom-links');
  trc2.appendChild(tdc2);
  tbody.appendChild(trc2);

  const trc3 = document.createElement('tr');
  const tdc3 = maakSlTd(htmlSpan('<i>x</i> = 245'), false);
  tdc3.classList.add('kolom-links');
  trc3.appendChild(tdc3);
  tbody.appendChild(trc3);

  const trLblC2 = document.createElement('tr');
  const tdLblC2 = maakOpTdazGeenStreep('','Vul de tabel opnieuw aan, maar nu met wat je berekend hebt.')
  trLblC2.appendChild(tdLblC2);
  tbody.appendChild(trLblC2);

  {
    const tbodyA = maakNestedTabel(tbody,'4.19%');

    const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm',];
    const kolomBreedtes = ['20%', '20%', '20%', '40%'];

    const matrix = [
      [
        { inhoud: 'wat', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'aantal', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'prijs (in euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'verdiende bedrag (in euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      ],
      [
        { inhoud: 'drankje', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '245', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '3 · 245 = 735', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      ],
      [
        { inhoud: 'chips', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '362 - 245 = 117', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '2', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '2 · 117 = 234', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      ],
      [
        { inhoud: 'TOTAAL', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '362', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: 'XXX', type: 'oplossing', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '969', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      ],
    ];

    maakZichtbareTabel(tbodyA, 4, 4, {
      hoofding: 'boven',
      rijHoogtes,
      kolomBreedtes,
      matrix,
    });
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d */
  const trLblD = document.createElement('tr');
  const tdLblD = maakOpTdaz('4', htmlSpan('Formuleer een antwoord.'), false);
  tdLblD.classList.add('kolom-links');
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  const trd0 = document.createElement('tr');
  const tdd0 = maakSlTd(htmlSpan('Ze verkochten 117 zakjes chips en 245 drankjes.'), false);
  tdd0.classList.add('kolom-links');
  trd0.appendChild(tdd0);
  tbody.appendChild(trd0);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d */
  const trLblE = document.createElement('tr');
  const tdLblE = maakOpTdaz('5', htmlSpan('Controleer je antwoord met behulp van de ingevulde tabel.'), false);
  tdLblE.classList.add('kolom-links');
  trLblE.appendChild(tdLblE);
  tbody.appendChild(trLblE);


})();
