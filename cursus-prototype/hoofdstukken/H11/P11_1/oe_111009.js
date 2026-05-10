/* ============================================================
   H11 / P11_1 / oe_111009.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111009_1 = document.createElement('span');
  oe_111009_1.appendChild(htmlSpan('16 + 3<i>x</i> = 85 - 4<i>x</i>'));

  const oe_111009_5 = document.createElement('span');
  const oe_111009_5_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111009_5.appendChild(oe_111009_5_b1);
  oe_111009_5.appendChild(htmlSpan('16 + 3 · 10 = 46'));

  const oe_111009_6 = document.createElement('span');
  const oe_111009_6_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111009_6.appendChild(oe_111009_6_b1);
  oe_111009_6.appendChild(htmlSpan('85 - 4 · 10 = 45'));

  const oe_111009_2 = document.createElement('span');
  const oe_111009_2_m1 = maakMarkering(htmlSpan('-2<i>t</i> + 3 = <i>t</i> - 27'), '#bbdefb', true);
  oe_111009_2.appendChild(oe_111009_2_m1);

  const oe_111009_7 = document.createElement('span');
  const oe_111009_7_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111009_7.appendChild(oe_111009_7_b1);
  oe_111009_7.appendChild(htmlSpan('-2 · 10 + 3 = -17'));

  const oe_111009_8 = document.createElement('span');
  const oe_111009_8_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111009_8.appendChild(oe_111009_8_b1);
  oe_111009_8.appendChild(htmlSpan('10 - 27 = -17'));

  const oe_111009_3 = document.createElement('span');
  const oe_111009_3_m1 = maakMarkering(htmlSpan('2(<i>y</i> - 3) = <i>y</i> + 4'), '#bbdefb', true);
  oe_111009_3.appendChild(oe_111009_3_m1);

  const oe_111009_9 = document.createElement('span');
  const oe_111009_9_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111009_9.appendChild(oe_111009_9_b1);
  oe_111009_9.appendChild(htmlSpan('2 · (10 - 3) = 14'));

  const oe_111009_12 = document.createElement('span');
  const oe_111009_12_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111009_12.appendChild(oe_111009_12_b1);
  oe_111009_12.appendChild(htmlSpan('10 + 4 = 14'));

  const oe_111009_4 = document.createElement('span');
  const oe_111009_4_m1 = maakMarkering(htmlSpan('0,5<i>a</i> - 8 = -3'), '#bbdefb', true);
  oe_111009_4.appendChild(oe_111009_4_m1);

  const oe_111009_10 = document.createElement('span');
  const oe_111009_10_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111009_10.appendChild(oe_111009_10_b1);
  oe_111009_10.appendChild(htmlSpan('0,5 · 10 - 8 = -3'));

  const oe_111009_13 = document.createElement('span');
  const oe_111009_13_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111009_13.appendChild(oe_111009_13_b1);
  oe_111009_13.appendChild(htmlSpan('-3'));

  const inhoud = maakOefening({
    id:'oe_111009', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Markeer de vergelijkingen waarvan 10 een oplossing is.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111009_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_111009_3, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_111009_5,
    oe_111009_6
  ];
  const oplC = [
    oe_111009_9,
    oe_111009_12
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_111009_2, false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_111009_4, false);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_111009_7,
    oe_111009_8
  ];
  const oplD = [
    oe_111009_10,
    oe_111009_13
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], false);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

})();
