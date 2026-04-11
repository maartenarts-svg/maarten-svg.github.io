/* ============================================================
   H10 / P10_1 / oe_101008.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101008', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Waar of niet waar?<br>Verklaar met eigenschappen van bewerkingen.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '16 : 4 = 4 : 16', false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd('Niet waar: de deling van rationale getallen is niet commutatief.', false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd('', false);
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
  const tdLblB = maakOpTdaz('b', '17 · 25 · 4 = 17 · (25 · 4)', false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd('Waar: de vermenigvuldiging van rationale getallen is distributief ten opzichte van de', false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd('optelling van rationale getallen.', false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);

})();
