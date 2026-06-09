// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.

/* ============================================================
   H11 / H11_W35WID / oe_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_2_1 = document.createElement('span');
  oe_2_1.appendChild(htmlSpan('Kwik is 5 jaar ouder dan Kwak.<br>Kwek is drie keer zo oud als Kwak.'));

  const oe_2_2 = document.createElement('span');
  oe_2_2.appendChild(htmlSpan('<i>l</i>'));

  const oe_2_3 = document.createElement('span');
  oe_2_3.appendChild(htmlSpan('<i>l</i> + 5'));

  const oe_2_4 = document.createElement('span');
  oe_2_4.appendChild(htmlSpan('3<i>l</i>'));

  const oe_2_5 = document.createElement('span');
  oe_2_5.appendChild(htmlSpan('Serena is 10 cm langer dan Venus.'));

  const oe_2_6 = document.createElement('span');
  oe_2_6.appendChild(htmlSpan('<i>g</i>'));

  const oe_2_7 = document.createElement('span');
  oe_2_7.appendChild(htmlSpan('<i>g</i> + 10'));

  const oe_2_8 = document.createElement('span');
  oe_2_8.appendChild(htmlSpan('Op een festival zijn 700 kinderen en volwassenen aanwezig.'));

  const oe_2_9 = document.createElement('span');
  oe_2_9.appendChild(htmlSpan('<i>k</i>'));

  const oe_2_10 = document.createElement('span');
  oe_2_10.appendChild(htmlSpan('700 - <i>k</i>'));

  const oe_2_11 = document.createElement('span');
  oe_2_11.appendChild(htmlSpan('Ik heb 150 euro meer gespaard dan mijn broer.'));

  const oe_2_12 = document.createElement('span');
  oe_2_12.appendChild(htmlSpan('<i>b</i>'));

  const oe_2_13 = document.createElement('span');
  oe_2_13.appendChild(htmlSpan('<i>b</i> + 150'));

  const inhoud = maakOefening({
    id:'oe_2', nummer:'?', soort:'test',
    niveaus:[''], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de keuze van de onbekende aan.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  const breedte1 = '4cm';

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_2_1, false);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakOpTdDubbelZStrZdub('',htmlSpan('leeftijd Kwak:'),breedte1,false,oe_2_2);
  tda0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakOpTdDubbelZStrZdub('',htmlSpan('leeftijd Kwik:'),breedte1,false,oe_2_3);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);
  const tra2 = document.createElement('tr');
  const tda2 = maakOpTdDubbelZStrZdub('',htmlSpan('leeftijd Kwek:'),breedte1,false,oe_2_4);
  tda2.classList.add('kolom-links');
  tra2.appendChild(tda2);
  tbody.appendChild(tra2);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_2_5, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakOpTdDubbelZStrZdub('',htmlSpan('lengte Venus:'),breedte1,false,oe_2_6);
  tdb0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakOpTdDubbelZStrZdub('',htmlSpan('lengte Serena:'),breedte1,false,oe_2_7);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_2_8, false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakOpTdDubbelZStrZdub('',htmlSpan('aantal kinderen:'),breedte1,false,oe_2_9);
  tdc0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);
  const trc1 = document.createElement('tr');
  const tdc1 = maakOpTdDubbelZStrZdub('',htmlSpan('aantal volwassenen:'),breedte1,false,oe_2_10);
  tdc1.classList.add('kolom-links');
  trc1.appendChild(tdc1);
  tbody.appendChild(trc1);

  /* Opgave d */
  const trLblD = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', oe_2_11, false);
  tdLblD.classList.add('kolom-links');
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  const trd0 = document.createElement('tr');
  const tdd0 = maakOpTdDubbelZStrZdub('',htmlSpan('bedrag van mijn broer:'),breedte1,false,oe_2_12);
  tdd0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdd0.classList.add('kolom-links');
  trd0.appendChild(tdd0);
  tbody.appendChild(trd0);
  const trd1 = document.createElement('tr');
  const tdd1 = maakOpTdDubbelZStrZdub('',htmlSpan('mijn bedrag:'),breedte1,false,oe_2_13);
  tdd1.classList.add('kolom-links');
  trd1.appendChild(tdd1);
  tbody.appendChild(trd1);

})();
