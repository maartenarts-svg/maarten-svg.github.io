/* ============================================================
   H10 / P10_1 / oe_101013.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101013', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Waar of niet waar?<br>Verklaar met eigenschappen van bewerkingen.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '17 + (23 + 15) = 17 + 23 + 15', false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd('Waar: de optelling van rationale getallen is associatief.', false);
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
  const tdLblB = maakOpTdaz('b', '5 - 20 = 20 - 5', false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd('Niet waar: de aftrekking van rationale getallen is niet commutatief.', false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd('', false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);

  const _trWit1 = document.createElement('tr');
  const _tdWit1 = document.createElement('td');
  _tdWit1.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit1.appendChild(_tdWit1);
  tbody.appendChild(_trWit1);
  
  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', '17 : 1 = 17 = 1 : 17', false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd('Niet waar: 1 is niet het neutraal element voor de deling van rationale getallen.', false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);
  const trc1 = document.createElement('tr');
  const tdc1 = maakSlTd('', false);
  tdc1.classList.add('kolom-links');
  trc1.appendChild(tdc1);
  tbody.appendChild(trc1);

})();
