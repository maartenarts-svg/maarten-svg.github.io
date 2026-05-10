/* ============================================================
   H11 / P11_1 / oe_111006.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111006_1 = document.createElement('span');
  const oe_111006_1_m1 = maakMarkering(htmlSpan('3<i>t</i> + 2 = 37 - 2<i>t</i>'), '#bbdefb', false);
  oe_111006_1.appendChild(oe_111006_1_m1);

  const oe_111006_2 = document.createElement('span');
  const oe_111006_2_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111006_2.appendChild(oe_111006_2_b1);
  oe_111006_2.appendChild(htmlSpan('3 · 7 + 2 = 23'));

  const oe_111006_3 = document.createElement('span');
  const oe_111006_3_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111006_3.appendChild(oe_111006_3_b1);
  oe_111006_3.appendChild(htmlSpan('37 - 2 · 7 = 23'));

  const oe_111006_4 = document.createElement('span');
  oe_111006_4.appendChild(htmlSpan('19 + <i>z</i> = 2<i>z</i> + 1'));

  const oe_111006_7 = document.createElement('span');
  const oe_111006_7_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111006_7.appendChild(oe_111006_7_b1);
  oe_111006_7.appendChild(htmlSpan('19 + 7 = 26'));

  const oe_111006_8 = document.createElement('span');
  const oe_111006_8_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111006_8.appendChild(oe_111006_8_b1);
  oe_111006_8.appendChild(htmlSpan('2 · 7 + 1 = 15'));

  const oe_111006_5 = document.createElement('span');
  oe_111006_5.appendChild(htmlSpan('3(<i>x</i> - 2) = 14'));

  const oe_111006_9 = document.createElement('span');
  const oe_111006_9_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111006_9.appendChild(oe_111006_9_b1);
  oe_111006_9.appendChild(htmlSpan('3 · (7 - 2) = 15'));

  const oe_111006_10 = document.createElement('span');
  const oe_111006_10_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111006_10.appendChild(oe_111006_10_b1);
  oe_111006_10.appendChild(htmlSpan('14'));

  const oe_111006_6 = document.createElement('span');
  const oe_111006_6_m1 = maakMarkering(htmlSpan('7<i>a</i> - 9 = 4(<i>a</i> + 3)'), '#bbdefb', true);
  oe_111006_6.appendChild(oe_111006_6_m1);

  const oe_111006_11 = document.createElement('span');
  const oe_111006_11_b1 = maakSpanBreedte('0.8cm', 'LL:');
  oe_111006_11.appendChild(oe_111006_11_b1);
  oe_111006_11.appendChild(htmlSpan('7 · 7 - 9 = 40'));

  const oe_111006_12 = document.createElement('span');
  const oe_111006_12_b1 = maakSpanBreedte('0.8cm', 'RL:');
  oe_111006_12.appendChild(oe_111006_12_b1);
  oe_111006_12.appendChild(htmlSpan('4 · (7 + 3) = 40'));

  const inhoud = maakOefening({
    id:'oe_111006', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Markeer elke vergelijking waarvan 7 een oplossing is.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111006_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_111006_5, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_111006_2,
    oe_111006_3
  ];
  const oplC = [
    oe_111006_9,
    oe_111006_10
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_111006_4, false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_111006_6, false);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_111006_7,
    oe_111006_8
  ];
  const oplD = [
    oe_111006_11,
    oe_111006_12
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tdB.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], false);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

})();
