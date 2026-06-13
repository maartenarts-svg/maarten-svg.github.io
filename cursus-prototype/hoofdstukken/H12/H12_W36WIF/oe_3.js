/* ============================================================
   H12 / H12_W35WIMC2 / oe_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_3_1 = document.createElement('span');
  oe_3_1.appendChild(htmlSpan('De breedte van een laptop is ongeveer 30 ... .'));

  const oe_3_2 = document.createElement('span');
  oe_3_2.appendChild(htmlSpan('cm'));

  const oe_3_3 = document.createElement('span');
  oe_3_3.appendChild(htmlSpan('Een deur is ongeveer 2 ... hoog.'));

  const oe_3_4 = document.createElement('span');
  oe_3_4.appendChild(htmlSpan('m'));

  const oe_3_5 = document.createElement('span');
  oe_3_5.appendChild(htmlSpan('De dikte van een muntstuk is ongeveer 2 ... .'));

  const oe_3_6 = document.createElement('span');
  oe_3_6.appendChild(htmlSpan('mm'));

  const oe_3_7 = document.createElement('span');
  oe_3_7.appendChild(htmlSpan('De afstand tussen Brussel en Antwerpen is ongeveer 45 ... .'));

  const oe_3_8 = document.createElement('span');
  oe_3_8.appendChild(htmlSpan('km'));

  const inhoud = maakOefening({
    id:'oe_3', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de juiste lengte-eenheid in.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '12cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_3_1, TW, false, oe_3_2);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdGeen('b', oe_3_3, TW, false, oe_3_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTdGeen('c', oe_3_5, TW, false, oe_3_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdGeen('d', oe_3_7, TW, false, oe_3_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  tbody.appendChild(tr4);

})();
