/* ============================================================
   H12 / H12_INHW35WIMC2 / oe_5.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_5_1 = document.createElement('span');
  oe_5_1.appendChild(htmlSpan('De omtrek van een vierkant.'));

  const oe_5_2 = document.createElement('span');
  oe_5_2.appendChild(htmlSpan('4<i>z</i>'));

  const oe_5_3 = document.createElement('span');
  oe_5_3.appendChild(htmlSpan('De oppervlakte van een rechthoek.'));

  const oe_5_4 = document.createElement('span');
  oe_5_4.appendChild(htmlSpan('<i>bh</i>'));

  const oe_5_5 = document.createElement('span');
  oe_5_5.appendChild(htmlSpan('De omtrek van een parallellogram.'));

  const oe_5_6 = document.createElement('span');
  oe_5_6.appendChild(htmlSpan('som van de zijden'));

  const oe_5_7 = document.createElement('span');
  oe_5_7.appendChild(htmlSpan('De omtrek van een cirkel.'));

  const oe_5_8 = document.createElement('span');
  oe_5_8.appendChild(htmlSpan('2π<i>r</i>'));

  const inhoud = maakOefening({
    id:'oe_5', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de formule.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '7cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_5_1, TW, false, oe_5_2);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdGeen('b', oe_5_3, TW, false, oe_5_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTdGeen('c', oe_5_5, TW, false, oe_5_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdGeen('d', oe_5_7, TW, false, oe_5_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  tbody.appendChild(tr4);

})();
