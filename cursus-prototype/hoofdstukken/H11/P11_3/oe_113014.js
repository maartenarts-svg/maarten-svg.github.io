/* ============================================================
   H11 / P11_3 / oe_113014.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';

  const oe_113014_1 = document.createElement('span');
  oe_113014_1.appendChild(htmlSpan('Loes koopt een boek van 24,99 euro, twee dezelfde bordstiften en een balpen van 3,99 euro. Ze betaalt 33,96 euro. <br>Bereken de prijs van een bordstift.'));

  const oe_113014_2 = document.createElement('span');
  const oe_113014_2_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113014_2.appendChild(oe_113014_2_b1);
  const oe_113014_2_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113014_2.appendChild(oe_113014_2_b2);
  oe_113014_2.appendChild(htmlSpan('prijs bordstift:  <i>p</i>'));

  const oe_113014_3 = document.createElement('span');
  const oe_113014_3_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113014_3.appendChild(oe_113014_3_b1);
  const oe_113014_3_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113014_3.appendChild(oe_113014_3_b2);
  const oe_113014_3_s3 = document.createElement('span');
  oe_113014_3_s3.appendChild(htmlSpan('24,99 + 2<i>p</i> + 3,99 = 33,96'));
  oe_113014_3.appendChild(oe_113014_3_s3);

  const oe_113014_4 = document.createElement('span');
  const oe_113014_4_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113014_4.appendChild(oe_113014_4_b1);
  const oe_113014_4_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113014_4.appendChild(oe_113014_4_b2);
  oe_113014_4.appendChild(htmlSpan('<i>p</i> = 2,49'));

  const oe_113014_5 = document.createElement('span');
  const oe_113014_5_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113014_5.appendChild(oe_113014_5_b1);
  const oe_113014_5_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113014_5.appendChild(oe_113014_5_b2);
  oe_113014_5.appendChild(htmlSpan('De prijs van een bordstift is 2,49 euro.'));

  const oe_113014_6 = document.createElement('span');
  const oe_113014_6_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113014_6.appendChild(oe_113014_6_b1);
  const oe_113014_6_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113014_6.appendChild(oe_113014_6_b2);
  oe_113014_6.appendChild(htmlSpan('24,99 + 2 · 2,49 + 3,99 = 33,96'));

  const oe_113014_12 = document.createElement('span');
  oe_113014_12.appendChild(htmlSpan('Een poetsbedrijf rekent per poetsbeurt een vast bedrag aan van 25 euro. Voor een klus van 13 uur betaal je 200,50 euro. <br>Bereken de prijs per uur.'));

  const oe_113014_7 = document.createElement('span');
  const oe_113014_7_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113014_7.appendChild(oe_113014_7_b1);
  const oe_113014_7_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113014_7.appendChild(oe_113014_7_b2);
  oe_113014_7.appendChild(htmlSpan('prijs per uur:  <i>p</i>'));

  const oe_113014_8 = document.createElement('span');
  const oe_113014_8_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113014_8.appendChild(oe_113014_8_b1);
  const oe_113014_8_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113014_8.appendChild(oe_113014_8_b2);
  oe_113014_8.appendChild(htmlSpan('25 + 13<i>p</i> = 200,50'));

  const oe_113014_9 = document.createElement('span');
  const oe_113014_9_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113014_9.appendChild(oe_113014_9_b1);
  const oe_113014_9_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113014_9.appendChild(oe_113014_9_b2);
  oe_113014_9.appendChild(htmlSpan('<i>p</i> = 13,50'));

  const oe_113014_10 = document.createElement('span');
  const oe_113014_10_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113014_10.appendChild(oe_113014_10_b1);
  const oe_113014_10_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113014_10.appendChild(oe_113014_10_b2);
  oe_113014_10.appendChild(htmlSpan('De prijs per uur is 13,5 euro.'));

  const oe_113014_11 = document.createElement('span');
  const oe_113014_11_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113014_11.appendChild(oe_113014_11_b1);
  const oe_113014_11_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113014_11.appendChild(oe_113014_11_b2);
  oe_113014_11.appendChild(htmlSpan('25 + 13 · 13,50 = 200,50'));

  const inhoud = maakOefening({
    id:'oe_113014', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vraagstukken op met een vergelijking.<br>Laat de verschillende stappen in je oplossing duidelijk zien.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_113014_1, false);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);
  
  voegWitruimteToe(tbody,'0.4cm');

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd(oe_113014_2, false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd(oe_113014_3, false);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);
  const tra2 = document.createElement('tr');
  const tda2 = maakSlTd(oe_113014_4, false);
  tda2.classList.add('kolom-links');
  tra2.appendChild(tda2);
  tbody.appendChild(tra2);
  const tra3 = document.createElement('tr');
  const tda3 = maakSlTd(oe_113014_5, false);
  tda3.classList.add('kolom-links');
  tra3.appendChild(tda3);
  tbody.appendChild(tra3);
  const tra4 = document.createElement('tr');
  const tda4 = maakSlTd(oe_113014_6, false);
  tda4.classList.add('kolom-links');
  tra4.appendChild(tda4);
  tbody.appendChild(tra4);
  
  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_113014_12, false);
  tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);
  
  voegWitruimteToe(tbody,'0.4cm');

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(oe_113014_7, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd(oe_113014_8, false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd(oe_113014_9, false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);
  const trb3 = document.createElement('tr');
  const tdb3 = maakSlTd(oe_113014_10, false);
  tdb3.classList.add('kolom-links');
  trb3.appendChild(tdb3);
  tbody.appendChild(trb3);
  const trb4 = document.createElement('tr');
  const tdb4 = maakSlTd(oe_113014_11, false);
  tdb4.classList.add('kolom-links');
  trb4.appendChild(tdb4);
  tbody.appendChild(trb4);

})();
