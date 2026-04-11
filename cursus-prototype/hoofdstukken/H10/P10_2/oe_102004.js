/* ============================================================
   H10 / P10_2 / oe_102004.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102004', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Op camping LAB betaal je voor een staanplaats een vast bedrag per nacht. Daarbij komt nog een bedrag per volwassene en een bedrag per kind.<br>Het totaalbedrag <i>b</i> per nacht (in EUR) kun je berekenen met de formule <i>b</i> = 13 + 5<i>v</i> + 3<i>k</i>.<br>Hierin is <i>v</i> het aantal volwassenen en <i>k</i> het aantal kinderen.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', 'Bereken wat de familie Pieters (2 volwassenen en 4 kinderen) betaalt per nacht.', false);
  tdLblA.classList.add('kolom-links');
  tdLblA.querySelector('.rij').style.marginBottom = '-0.1cm';
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd('<i>b</i>\u200A = 13 + 5 · 2 + 3 · 4 = 13 + 10 + 12 = 35', false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd('Ze betalen 35 euro per nacht.', false);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);

  const _trWit = document.createElement('tr');
  const _tdWit = document.createElement('td');
  _tdWit.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit.appendChild(_tdWit);
  tbody.appendChild(_trWit);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', 'De familie Verhulst komt met 4 volwassenen en 7 kinderen.<br>Bereken wat ze betalen voor een week.', false);
  /* zet bovenaan */
  tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
  /* geef extra ruimte boven */
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd('per dag:\u00A0 <i>b</i>\u200A = 13 + 5 · 4 + 3 · 7 = 13 + 20 + 21 = 54', false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd('per week: 7 · 54 = 378', false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd('Ze betalen 378 euro per week.', false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);

  const _trWit2 = document.createElement('tr');
  const _tdWit2 = document.createElement('td');
  _tdWit2.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit2.appendChild(_tdWit2);
  tbody.appendChild(_trWit2);

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', 'Noteer de betekenis van de getallen 13, 5 en 3 uit de formule.', false);
  tdLblC.classList.add('kolom-links');
  tdLblC.querySelector('.rij').style.marginBottom = '-0.1cm';
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd('13 is het vaste bedrag (in euro) per dag', false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);
  const trc1 = document.createElement('tr');
  const tdc1 = maakSlTd('5 is het bedrag (in euro) per volwassene', false);
  tdc1.classList.add('kolom-links');
  trc1.appendChild(tdc1);
  tbody.appendChild(trc1);
  const trc2 = document.createElement('tr');
  const tdc2 = maakSlTd('3 is het bedrag (in euro) per kind', false);
  tdc2.classList.add('kolom-links');
  trc2.appendChild(tdc2);
  tbody.appendChild(trc2);

})();
