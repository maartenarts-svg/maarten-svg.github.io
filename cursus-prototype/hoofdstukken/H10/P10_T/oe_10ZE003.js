/* ============================================================
   H10 / P10_ZE / oe_10ZE003.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE003_1 = document.createElement('span');
  oe_10ZE003_1.appendChild(htmlSpan('Bereken het driehoeksgetal met basis 1 001.'));

  const oe_10ZE003_2 = document.createElement('span');
  oe_10ZE003_2.appendChild(htmlSpan('500 500 + 1 001 = 501 501'));

  const oe_10ZE003_3 = document.createElement('span');
  oe_10ZE003_3.appendChild(htmlSpan('Het driehoeksgetal 501 501 heeft als basis 1 001.'));

  const oe_10ZE003_4 = document.createElement('span');
  oe_10ZE003_4.appendChild(htmlSpan('Als ik jou vraag om het driehoeksgetal met basis 300 uit te rekenen, zul je waarschijnlijk lang bezig zijn. Stel dat je er 100 euro mee kunt verdienen.<br>Omschrijf hoe je dit driehoeksgetal zou kunnen uitrekenen.'));

  const oe_10ZE003_5 = document.createElement('span');
  oe_10ZE003_5.appendChild(htmlSpan('eigen antwoord'));

  const inhoud = maakOefening({
    id:'oe_10ZE003', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Riene is een ster met de computer. Ze heeft een code geschreven dat voor haar de eerste 1 000 driehoeksgetallen heeft uitgerekend. Het driehoeksgetal met basis 1 000 blijkt 500 500 te zijn.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_10ZE003_1, false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd(oe_10ZE003_2, false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd(oe_10ZE003_3, false);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);

  voegWitruimteToe(tbody);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_10ZE003_4, false);
  tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  voegWitruimteToe(tbody);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(oe_10ZE003_5, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd(null, false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd(null, false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);
  const trb3 = document.createElement('tr');
  const tdb3 = maakSlTd(null, false);
  tdb3.classList.add('kolom-links');
  trb3.appendChild(tdb3);
  tbody.appendChild(trb3);
  const trb4 = document.createElement('tr');
  const tdb4 = maakSlTd(null, false);
  tdb4.classList.add('kolom-links');
  trb4.appendChild(tdb4);
  tbody.appendChild(trb4);
  const trb5 = document.createElement('tr');
  const tdb5 = maakSlTd(null, false);
  tdb5.classList.add('kolom-links');
  trb5.appendChild(tdb5);
  tbody.appendChild(trb5);
  const trb6 = document.createElement('tr');
  const tdb6 = maakSlTd(null, false);
  tdb6.classList.add('kolom-links');
  trb6.appendChild(tdb6);
  tbody.appendChild(trb6);
  const trb7 = document.createElement('tr');
  const tdb7 = maakSlTd(null, false);
  tdb7.classList.add('kolom-links');
  trb7.appendChild(tdb7);
  tbody.appendChild(trb7);
  const trb8 = document.createElement('tr');
  const tdb8 = maakSlTd(null, false);
  tdb8.classList.add('kolom-links');
  trb8.appendChild(tdb8);
  tbody.appendChild(trb8);
  const trb9 = document.createElement('tr');
  const tdb9 = maakSlTd(null, false);
  tdb9.classList.add('kolom-links');
  trb9.appendChild(tdb9);
  tbody.appendChild(trb9);

})();
