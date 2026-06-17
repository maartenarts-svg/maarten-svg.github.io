/* ============================================================
   H12 / H12_INHW35WIMC2 / oe_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_2_1 = document.createElement('span');
  oe_2_1.appendChild(htmlSpan('Een veranda heeft een oppervlakte van 50 000 cm<sup>2</sup>. Dat is ... m<sup>2</sup>.'));

  const oe_2_2 = document.createElement('span');
  oe_2_2.appendChild(htmlSpan('5'));

  const oe_2_3 = document.createElement('span');
  oe_2_3.appendChild(htmlSpan('Een vloerkleed heeft een oppervlakte van 3,2 m<sup>2</sup>. Dat is ... cm<sup>2</sup>.'));

  const oe_2_4 = document.createElement('span');
  oe_2_4.appendChild(htmlSpan('32 000'));

  const oe_2_5 = document.createElement('span');
  oe_2_5.appendChild(htmlSpan('Een bos heeft een oppervlakte van 1,8 km<sup>2</sup>. Dat is ... m<sup>2</sup>.'));

  const oe_2_6 = document.createElement('span');
  oe_2_6.appendChild(htmlSpan('1 800 000'));

  const oe_2_7 = document.createElement('span');
  oe_2_7.appendChild(htmlSpan('Een parking heeft een oppervlakte van 65 m<sup>2</sup>. Dat is ... dm<sup>2</sup>.'));

  const oe_2_8 = document.createElement('span');
  oe_2_8.appendChild(htmlSpan('6 500'));

  const inhoud = maakOefening({
    id:'oe_2', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Zet de oppervlakte-eenheden om.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '12cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_2_1, TW, false, oe_2_2);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdGeen('b', oe_2_3, TW, false, oe_2_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTdGeen('c', oe_2_5, TW, false, oe_2_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdGeen('d', oe_2_7, TW, false, oe_2_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  tbody.appendChild(tr4);

})();
