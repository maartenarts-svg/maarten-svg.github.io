/* ============================================================
   H11 / H11_W35WID / oe_4.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';
  const breedte2 = '6cm';

  const inhoud = maakOefening({
    id:'oe_4', nummer:'?', soort:'test',
    niveaus:[''], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vraagstukken op met een vergelijking.<br>Laat de verschillende stappen in je oplossing duidelijk zien.<br>Los de vergelijking op met ICT.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');  
  
  const oe_4_1 = document.createElement('span');
  oe_4_1.appendChild(htmlSpan('De E40 en de E19 zijn twee belangrijke Europese wegen. Samen zijn ze 8 851 km lang. De E40 is de langste van de twee en is 35 km langer dan het vijftienvoud van de lengte van de E19.<br>Bereken de lengte van beide wegen.'));

  const trLblB = document.createElement('tr');
  const tdLblB = document.createElement('td');
  tdLblB.appendChild(oe_4_1, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);
  
  voegWitruimteToe(tbody,'0.2cm');

  const oe_4_2 = document.createElement('span');
  const oe_4_2_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_4_2.appendChild(oe_4_2_b1);
  const oe_4_2_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_4_2.appendChild(oe_4_2_b2);
  oe_4_2.appendChild(maakSpanBreedte(breedte2,'lengte E19: <i>x</i>'));
  oe_4_2.appendChild(htmlSpan('<span class="markeer-lila">551</span>'));
  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTdZonderInsprong(oe_4_2, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);  

  const oe_4_3 = document.createElement('span');
  const oe_4_3_b1 = maakSpanBreedte('0.65cm', '');
  oe_4_3.appendChild(oe_4_3_b1);
  const oe_4_3_b2 = maakSpanBreedte(breedte1, '');
  oe_4_3.appendChild(oe_4_3_b2);
  oe_4_3.appendChild(maakSpanBreedte(breedte2,'lengte E40: 15<i>x</i> + 35'));
  oe_4_3.appendChild(htmlSpan('<span class="markeer-lila">15 · 551 + 35 = 8 300</span>'));
  const trb01 = document.createElement('tr');
  const tdb01 = maakSlTdZonderInsprong(oe_4_3, false);
  tdb01.classList.add('kolom-links');
  trb01.appendChild(tdb01);
  tbody.appendChild(trb01);

  const oe_4_4 = document.createElement('span');
  const oe_4_4_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_4_4.appendChild(oe_4_4_b1);
  const oe_4_4_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_4_4.appendChild(oe_4_4_b2);
  oe_4_4.appendChild(htmlSpan('<i>x</i> + 15<i>x</i> + 35 = 8 851'));
  const trb02 = document.createElement('tr');
  const tdb02 = maakSlTdZonderInsprong(oe_4_4, false);
  tdb02.classList.add('kolom-links');
  trb02.appendChild(tdb02);
  tbody.appendChild(trb02);  

  const oe_4_5 = document.createElement('span');
  const oe_4_5_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_4_5.appendChild(oe_4_5_b1);
  const oe_4_5_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_4_5.appendChild(oe_4_5_b2);
  oe_4_5.appendChild(htmlSpan('<i>x</i> = 551'));
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTdZonderInsprong(oe_4_5, false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);

  const oe_4_6 = document.createElement('span');
  const oe_4_6_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_4_6.appendChild(oe_4_6_b1);
  const oe_4_6_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_4_6.appendChild(oe_4_6_b2);
  oe_4_6.appendChild(htmlSpan('De E19 is 551 km lang en de E40 is 8 300 km.'));
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTdZonderInsprong(oe_4_6, false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);

  const oe_4_7 = document.createElement('span');
  const oe_4_7_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_4_7.appendChild(oe_4_7_b1);
  const oe_4_7_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_4_7.appendChild(oe_4_7_b2);
  oe_4_7.appendChild(htmlSpan('551 + 8 300 = 8 851'));
  const trb3 = document.createElement('tr');
  const tdb3 = maakSlTdZonderInsprong(oe_4_7, false);
  tdb3.classList.add('kolom-links');
  trb3.appendChild(tdb3);
  tbody.appendChild(trb3);

  const trb4 = document.createElement('tr');
  const tdb4 = maakSlTdZonderInsprong(htmlSpan(''), false);
  tdb4.classList.add('kolom-links');
  trb4.appendChild(tdb4);
  tbody.appendChild(trb4);

})();
