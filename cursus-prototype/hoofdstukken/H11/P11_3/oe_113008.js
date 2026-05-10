/* ============================================================
   H11 / P11_3 / oe_113008.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '8cm';

  const oe_113008_4 = document.createElement('span');
  oe_113008_4.appendChild(htmlSpan('Verminder je het drievoud van'));
  oe_113008_4.appendChild(htmlSpan(' '));
  oe_113008_4.appendChild(maakOnderstreping(htmlSpan('de leeftijd van Maarten'), 'enkel', '0cm', false));
  oe_113008_4.appendChild(htmlSpan(' '));
  oe_113008_4.appendChild(htmlSpan('met 35, dan heb je 100.'));

  const oe_113008_5 = document.createElement('span');
  oe_113008_5.appendChild(maakSpanBreedte(breedte1,htmlSpan('3 · leeftijd Maarten - 35 = 100')));
  oe_113008_5.appendChild(htmlSpan('3<i>l</i> - 35 = 100'));

  const oe_113008_7 = document.createElement('span');
  oe_113008_7.appendChild(htmlSpan('Als je'));
  oe_113008_7.appendChild(htmlSpan(' '));
  oe_113008_7.appendChild(maakOnderstreping(htmlSpan('de inhoud van je spaarpot'), 'enkel', '0cm', false));
  oe_113008_7.appendChild(htmlSpan(' '));
  oe_113008_7.appendChild(htmlSpan('verdubbelt en er daarna 10 euro bijsteekt, dan heb je 90 euro.'));

  const oe_113008_9 = document.createElement('span');
  oe_113008_9.appendChild(maakSpanBreedte(breedte1,htmlSpan('2 · inhoud spaarpot + 10 = 90')));
  oe_113008_9.appendChild(htmlSpan('2<i>i</i> + 10 = 90'));

  const oe_113008_11 = document.createElement('span');
  oe_113008_11.appendChild(htmlSpan('Het getal 275 is 15 meer dan het tienvoud van'));
  oe_113008_11.appendChild(htmlSpan(' '));
  oe_113008_11.appendChild(maakOnderstreping(htmlSpan('een ander getal'), 'enkel', '0cm', false));
  oe_113008_11.appendChild(htmlSpan('.'));

  const oe_113008_13 = document.createElement('span');
  oe_113008_13.appendChild(maakSpanBreedte(breedte1,htmlSpan('275 = 10 · getal + 15')));
  oe_113008_13.appendChild(htmlSpan('275 = 10<i>g</i> + 15'));

  const inhoud = maakOefening({
    id:'oe_113008', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Schrijf als een vergelijking. Wat je moet kiezen als onbekende, is onderstreept.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_113008_4, false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd(oe_113008_5, false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);

  voegWitruimteToe(tbody,'0.3cm');
  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_113008_7, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(oe_113008_9, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);

  voegWitruimteToe(tbody,'0.3cm');
  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_113008_11, false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd(oe_113008_13, false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);

})();
