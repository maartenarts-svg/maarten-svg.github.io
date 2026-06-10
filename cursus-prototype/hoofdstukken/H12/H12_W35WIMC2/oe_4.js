/* ============================================================
   H12 / H12_W35WIMC2 / oe_4.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_4_1 = document.createElement('span');
  oe_4_1.appendChild(htmlSpan('Een blad uit een werkboek heeft een oppervlakte van ongeveer 6 ... .'));

  const oe_4_2 = document.createElement('span');
  oe_4_2.appendChild(htmlSpan('dm<sup>2</sup>'));

  const oe_4_3 = document.createElement('span');
  oe_4_3.appendChild(htmlSpan('Een klaslokaal heeft een oppervlakte van ongeveer 60 ... .'));

  const oe_4_4 = document.createElement('span');
  oe_4_4.appendChild(htmlSpan('m<sup>2</sup>'));

  const oe_4_5 = document.createElement('span');
  oe_4_5.appendChild(htmlSpan('Een bouwgrond heeft een oppervlakte van ongeveer 8 ... .'));

  const oe_4_6 = document.createElement('span');
  oe_4_6.appendChild(htmlSpan('dam<sup>2</sup>'));

  const oe_4_7 = document.createElement('span');
  oe_4_7.appendChild(htmlSpan('Een smartphone-scherm heeft een oppervlakte van ongeveer 120 ... .'));

  const oe_4_8 = document.createElement('span');
  oe_4_8.appendChild(htmlSpan('cm<sup>2</sup>'));

  const inhoud = maakOefening({
    id:'oe_4', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de juiste oppervlakte-eenheid in.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '12cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_4_1, TW, false, oe_4_2);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdGeen('b', oe_4_3, TW, false, oe_4_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTdGeen('c', oe_4_5, TW, false, oe_4_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdGeen('d', oe_4_7, TW, false, oe_4_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  tbody.appendChild(tr4);

})();
