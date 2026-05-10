// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.

/* ============================================================
   H11 / P11_3 / oe_113011.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_113011_1 = document.createElement('span');
  oe_113011_1.appendChild(htmlSpan('Sofie is 17 jaar ouder dan Nelle.'));

  const oe_113011_2 = document.createElement('span');
  oe_113011_2.appendChild(htmlSpan('<i>l</i>'));

  const oe_113011_3 = document.createElement('span');
  oe_113011_3.appendChild(htmlSpan('<i>l</i> + 17'));

  const oe_113011_4 = document.createElement('span');
  oe_113011_4.appendChild(htmlSpan('Van twee getallen is de som 30.'));

  const oe_113011_5 = document.createElement('span');
  oe_113011_5.appendChild(htmlSpan('<i>g</i>'));

  const oe_113011_6 = document.createElement('span');
  oe_113011_6.appendChild(htmlSpan('30 - <i>g</i>'));

  const oe_113011_7 = document.createElement('span');
  oe_113011_7.appendChild(htmlSpan('Op een festival zijn 4 523 kinderen en volwassenen aanwezig.'));

  const oe_113011_8 = document.createElement('span');
  oe_113011_8.appendChild(htmlSpan('<i>k</i>'));

  const oe_113011_9 = document.createElement('span');
  oe_113011_9.appendChild(htmlSpan('4 523 - <i>k</i>'));

  const oe_113011_10 = document.createElement('span');
  oe_113011_10.appendChild(htmlSpan('Mijn tuin is 3 m breder dan die van mijn buur.'));

  const oe_113011_11 = document.createElement('span');
  oe_113011_11.appendChild(htmlSpan('<i>b</i>'));

  const oe_113011_12 = document.createElement('span');
  oe_113011_12.appendChild(htmlSpan('<i>b</i> - 3'));

  const oe_113011_13 = document.createElement('span');
  oe_113011_13.appendChild(htmlSpan('Siebe heeft 7 snoepjes minder dan Riene, en Yasser heeft er vier keer zoveel als Riene.'));

  const oe_113011_14 = document.createElement('span');
  oe_113011_14.appendChild(htmlSpan('<i>x</i>'));

  const oe_113011_15 = document.createElement('span');
  oe_113011_15.appendChild(htmlSpan('<i>x</i> - 7'));

  const oe_113011_16 = document.createElement('span');
  oe_113011_16.appendChild(htmlSpan('4<i>x</i>'));

  const inhoud = maakOefening({
    id:'oe_113011', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de keuze van de onbekende aan.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_113011_1, false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const breedte1 = '4cm';

  const tra0 = document.createElement('tr');
  const tda0 = maakOpTdDubbelZStrZdub('',htmlSpan('leeftijd Nelle:'),breedte1,false,oe_113011_2);
  tda0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakOpTdDubbelZStrZdub('',htmlSpan('leeftijd Sofie:'),breedte1,false,oe_113011_3);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_113011_4, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakOpTdDubbelZStrZdub('',htmlSpan('eerste getal:'),breedte1,false,oe_113011_5);
  tdb0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakOpTdDubbelZStrZdub('',htmlSpan('tweede getal:'),breedte1,false,oe_113011_6);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_113011_7, false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakOpTdDubbelZStrZdub('',htmlSpan('aantal kinderen:'),breedte1,false,oe_113011_8);
  tdc0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);
  const trc1 = document.createElement('tr');
  const tdc1 = maakOpTdDubbelZStrZdub('',htmlSpan('aantal volwassenen:'),breedte1,false,oe_113011_9);
  tdc1.classList.add('kolom-links');
  trc1.appendChild(tdc1);
  tbody.appendChild(trc1);

  /* Opgave d */
  const trLblD = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', oe_113011_10, false);
  tdLblD.classList.add('kolom-links');
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  const trd0 = document.createElement('tr');
  const tdd0 = maakOpTdDubbelZStrZdub('',htmlSpan('breedte mijn tuin:'),breedte1,false,oe_113011_11);
  tdd0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdd0.classList.add('kolom-links');
  trd0.appendChild(tdd0);
  tbody.appendChild(trd0);
  const trd1 = document.createElement('tr');
  const tdd1 = maakOpTdDubbelZStrZdub('',htmlSpan('breedte tuin buur:'),breedte1,false,oe_113011_12);
  tdd1.classList.add('kolom-links');
  trd1.appendChild(tdd1);
  tbody.appendChild(trd1);

  /* Opgave e */
  const trLblE = document.createElement('tr');
  const tdLblE = maakOpTdaz('e', oe_113011_13, false);
  tdLblE.classList.add('kolom-links');
  trLblE.appendChild(tdLblE);
  tbody.appendChild(trLblE);

  const tre0 = document.createElement('tr');
  const tde0 = maakOpTdDubbelZStrZdub('',htmlSpan('aantal snoepjes Riene:'),breedte1,false,oe_113011_14);
  tde0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tde0.classList.add('kolom-links');
  tre0.appendChild(tde0);
  tbody.appendChild(tre0);
  const tre1 = document.createElement('tr');
  const tde1 = maakOpTdDubbelZStrZdub('',htmlSpan('aantal snoepjes Siebe:'),breedte1,false,oe_113011_15);
  tde1.classList.add('kolom-links');
  tre1.appendChild(tde1);
  tbody.appendChild(tre1);
  const tre2 = document.createElement('tr');
  const tde2 = maakOpTdDubbelZStrZdub('',htmlSpan('aantal snoepjes Yasser:'),breedte1,false,oe_113011_16);
  tde2.classList.add('kolom-links');
  tre2.appendChild(tde2);
  tbody.appendChild(tre2);

})();
