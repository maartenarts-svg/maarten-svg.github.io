/* ============================================================
   H10 / P10_2 / oe_102011.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102011', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  const minderw = '-0.2cm'

  voegTekstToe(inhoud, 'Seli maakt een ballonvaart. Hoe hoger hij komt, hoe kouder het wordt.<br>Met de formule <i>t</i> = 21 - 6<i>h</i> kun je de temperatuur <i>t</i> (in °C) berekenen in functie van de <br>hoogte <i>h</i> (in km).', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', 'Hoe warm is het aan de grond?', false);
  tdLblA.classList.add('kolom-links');
  tdLblA.querySelector('.rij').style.marginBottom = minderw;
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd('hoogte:\u00A0 <i>h</i>\u200A = 0 km (aan de grond)', false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd('temperatuur:\u00A0 <i>t</i>\u200A = 21 - 6 ·\u00A0 <span class="markeer-lila">0</span>\u200A = 21', false);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);
  const tra2 = document.createElement('tr');
  const tda2 = maakSlTd('Aan de grond is het 21 °C.', false);
  tda2.classList.add('kolom-links');
  tra2.appendChild(tda2);
  tbody.appendChild(tra2);

  const _trWit = document.createElement('tr');
  const _tdWit = document.createElement('td');
  _tdWit.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit.appendChild(_tdWit);
  tbody.appendChild(_trWit);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', 'Bereken de temperatuur op een hoogte van 1 km.', false);
  tdLblB.classList.add('kolom-links');
  tdLblB.querySelector('.rij').style.marginBottom = minderw;
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd('hoogte:\u00A0 <i>h</i>\u200A = 1 km', false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd('temperatuur:\u00A0 <i>t</i>\u200A = 21 - 6 ·\u00A0 <span class="markeer-lila">1</span>\u200A = 15', false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd('De temperatuur is daar 15 °C.', false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);

  const _trWit1 = document.createElement('tr');
  const _tdWit1 = document.createElement('td');
  _tdWit1.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit1.appendChild(_tdWit1);
  tbody.appendChild(_trWit1);

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', 'Bereken de temperatuur op een hoogte van 500 m.', false);
  tdLblC.classList.add('kolom-links');
  tdLblC.querySelector('.rij').style.marginBottom = minderw;
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd('hoogte:\u00A0 <i>h</i>\u200A = 500 m = 0,5 km', false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);
  const trc1 = document.createElement('tr');
  const tdc1 = maakSlTd('temperatuur:\u00A0 <i>t</i>\u200A = 21 - 6 ·\u00A0 <span class="markeer-lila">0,5</span>\u200A = 18', false);
  tdc1.classList.add('kolom-links');
  trc1.appendChild(tdc1);
  tbody.appendChild(trc1);
  const trc2 = document.createElement('tr');
  const tdc2 = maakSlTd('De temperatuur is daar 18 °C.', false);
  tdc2.classList.add('kolom-links');
  trc2.appendChild(tdc2);
  tbody.appendChild(trc2);

})();
