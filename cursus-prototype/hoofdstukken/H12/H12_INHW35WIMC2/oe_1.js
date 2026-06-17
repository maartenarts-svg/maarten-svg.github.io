/* ============================================================
   H12 / H12_INHW35WIMC2 / oe_1.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_1_1 = document.createElement('span');
  oe_1_1.appendChild(htmlSpan('Een keuken heeft een lengte van 3,2 m. Dat is ... cm.'));

  const oe_1_2 = document.createElement('span');
  oe_1_2.appendChild(htmlSpan('320'));

  const oe_1_3 = document.createElement('span');
  oe_1_3.appendChild(htmlSpan('Een koord is 84 cm lang. Dat is ... m.'));

  const oe_1_4 = document.createElement('span');
  oe_1_4.appendChild(htmlSpan('0,84'));

  const oe_1_5 = document.createElement('span');
  oe_1_5.appendChild(htmlSpan('De afstand tussen twee gemeenten is 4,7 km. Dat is ... m.'));

  const oe_1_6 = document.createElement('span');
  oe_1_6.appendChild(htmlSpan('4 700'));

  const oe_1_7 = document.createElement('span');
  oe_1_7.appendChild(htmlSpan('Een plank is 2 800 mm lang. Dat is ... m.'));

  const oe_1_8 = document.createElement('span');
  oe_1_8.appendChild(htmlSpan('2,8'));

  const inhoud = maakOefening({
    id:'oe_1', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Zet de lengte-eenheden om.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '12cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_1_1, TW, false, oe_1_2);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdGeen('b', oe_1_3, TW, false, oe_1_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTdGeen('c', oe_1_5, TW, false, oe_1_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdGeen('d', oe_1_7, TW, false, oe_1_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  tbody.appendChild(tr4);

})();
