/* ============================================================
   H11 / P11_3 / oe_113016.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';
  const breedte2 = '6cm';

  const oe_113014_1 = document.createElement('span');
  oe_113014_1.appendChild(htmlSpan('Leerlingen kunnen tijdens de middag kiezen tussen tomatensoep en kervelsoep. Van de <br>102 leerlingen die soep eten, kiezen er dubbel zoveel voor tomatensoep als voor kervelsoep. <br>Bereken het aantal leerlingen dat kervelsoep kiest.'));

  const oe_113014_2 = document.createElement('span');
  const oe_113014_2_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113014_2.appendChild(oe_113014_2_b1);
  const oe_113014_2_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113014_2.appendChild(oe_113014_2_b2);
  oe_113014_2.appendChild(maakSpanBreedte(breedte2,'aantal kervelsoep:  <i>x</i>'));
  oe_113014_2.appendChild(htmlSpan('<span class="markeer-lila">34</span>'));

  const oe_113016_2 = document.createElement('span');
  const oe_113016_2_b1 = maakSpanBreedte('0.65cm', '');
  oe_113016_2.appendChild(oe_113016_2_b1);
  const oe_113016_2_b2 = maakSpanBreedte(breedte1, '');
  oe_113016_2.appendChild(oe_113016_2_b2);
  oe_113016_2.appendChild(maakSpanBreedte(breedte2,'aantal tomatensoep:  2<i>x</i>'));
  oe_113016_2.appendChild(htmlSpan('<span class="markeer-lila">2 · 34 = 68</span>'));


  const oe_113014_3 = document.createElement('span');
  const oe_113014_3_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113014_3.appendChild(oe_113014_3_b1);
  const oe_113014_3_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113014_3.appendChild(oe_113014_3_b2);
  oe_113014_3.appendChild(htmlSpan('<i>x</i> + 2<i>x</i> = 102'));
  
  const oe_113014_4 = document.createElement('span');
  const oe_113014_4_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113014_4.appendChild(oe_113014_4_b1);
  const oe_113014_4_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113014_4.appendChild(oe_113014_4_b2);
  oe_113014_4.appendChild(htmlSpan('<i>x</i> = 34'));

  const oe_113014_5 = document.createElement('span');
  const oe_113014_5_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113014_5.appendChild(oe_113014_5_b1);
  const oe_113014_5_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113014_5.appendChild(oe_113014_5_b2);
  oe_113014_5.appendChild(htmlSpan('Er kiezen 34 leerlingen kervelsoep.'));

  const oe_113014_6 = document.createElement('span');
  const oe_113014_6_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113014_6.appendChild(oe_113014_6_b1);
  const oe_113014_6_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113014_6.appendChild(oe_113014_6_b2);
  oe_113014_6.appendChild(htmlSpan('34 + 68 = 102'));

  const oe_113014_12 = document.createElement('span');
  oe_113014_12.appendChild(htmlSpan('De IJzer, de Schelde en de Maas zijn samen 1 363 km. De Schelde is 30 km korter dan het vijfvoud van de lengte van de IJzer. De Maas is 565 km langer dan de Schelde.<br>Bereken de lengte van elke rivier.'));

  const oe_113014_7 = document.createElement('span');
  const oe_113014_7_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113014_7.appendChild(oe_113014_7_b1);
  const oe_113014_7_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113014_7.appendChild(oe_113014_7_b2);
  oe_113014_7.appendChild(maakSpanBreedte(breedte2,'lengte IJzer:  <i>x</i>'));
  oe_113014_7.appendChild(htmlSpan('<span class="markeer-lila">78</span>'));

  const oe_113014_71 = document.createElement('span');
  const oe_113014_71_b1 = maakSpanBreedte('0.65cm', '');
  oe_113014_71.appendChild(oe_113014_71_b1);
  const oe_113014_71_b2 = maakSpanBreedte(breedte1, '');
  oe_113014_71.appendChild(oe_113014_71_b2);
  oe_113014_71.appendChild(maakSpanBreedte(breedte2,'lengte Schelde:  5<i>x</i> - 30'));
  oe_113014_71.appendChild(htmlSpan('<span class="markeer-lila">5 · 78 - 30 = 360</span>'));

  const oe_113014_72 = document.createElement('span');
  const oe_113014_72_b1 = maakSpanBreedte('0.65cm', '');
  oe_113014_72.appendChild(oe_113014_72_b1);
  const oe_113014_72_b2 = maakSpanBreedte(breedte1, '');
  oe_113014_72.appendChild(oe_113014_72_b2);
  oe_113014_72.appendChild(maakSpanBreedte(breedte2,'lengte Maas:  5<i>x</i> - 30 + 565'));
  oe_113014_72.appendChild(htmlSpan('<span class="markeer-lila">360 + 565 = 925</span>'));

  const oe_113014_8 = document.createElement('span');
  const oe_113014_8_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113014_8.appendChild(oe_113014_8_b1);
  const oe_113014_8_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113014_8.appendChild(oe_113014_8_b2);
  oe_113014_8.appendChild(htmlSpan('<i>x</i> + 5<i>x</i> - 30 + 5<i>x</i> - 30 + 565 = 1 363'));

  const oe_113014_9 = document.createElement('span');
  const oe_113014_9_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113014_9.appendChild(oe_113014_9_b1);
  const oe_113014_9_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113014_9.appendChild(oe_113014_9_b2);
  oe_113014_9.appendChild(htmlSpan('<i>x</i> = 78'));

  const oe_113014_10 = document.createElement('span');
  const oe_113014_10_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113014_10.appendChild(oe_113014_10_b1);
  const oe_113014_10_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113014_10.appendChild(oe_113014_10_b2);
  oe_113014_10.appendChild(htmlSpan('De IJzer is 78 km lang, de Schelde 360 km'));
  const oe_113014_101 = document.createElement('span');
  const oe_113014_101_b1 = maakSpanBreedte('0.65cm', '');
  oe_113014_101.appendChild(oe_113014_101_b1);
  const oe_113014_101_b2 = maakSpanBreedte(breedte1, '');
  oe_113014_101.appendChild(oe_113014_101_b2);
  oe_113014_101.appendChild(htmlSpan('en de Maas 925 km.'));

  const oe_113014_11 = document.createElement('span');
  const oe_113014_11_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113014_11.appendChild(oe_113014_11_b1);
  const oe_113014_11_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113014_11.appendChild(oe_113014_11_b2);
  oe_113014_11.appendChild(htmlSpan('25 + 13 · 13,50 = 200,50'));

  const inhoud = maakOefening({
    id:'oe_113016', nummer:'?', soort:'inoefenen',
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
  const tra01 = document.createElement('tr');
  const tda01 = maakSlTd(oe_113016_2, false);
  tda01.classList.add('kolom-links');
  tra01.appendChild(tda01);
  tbody.appendChild(tra01);
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
  const trb01 = document.createElement('tr');
  const tdb01 = maakSlTd(oe_113014_71, false);
  tdb01.classList.add('kolom-links');
  trb01.appendChild(tdb01);
  tbody.appendChild(trb01);
  const trb02 = document.createElement('tr');
  const tdb02 = maakSlTd(oe_113014_72, false);
  tdb02.classList.add('kolom-links');
  trb02.appendChild(tdb02);
  tbody.appendChild(trb02);
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
  const trb31 = document.createElement('tr');
  const tdb31 = maakSlTd(oe_113014_101, false);
  tdb31.classList.add('kolom-links');
  trb31.appendChild(tdb31);
  tbody.appendChild(trb31);
  const trb4 = document.createElement('tr');
  const tdb4 = maakSlTd(oe_113014_11, false);
  tdb4.classList.add('kolom-links');
  trb4.appendChild(tdb4);
  tbody.appendChild(trb4);

})();
