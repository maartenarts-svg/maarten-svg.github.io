/* ============================================================
   H11 / P11_2 / oe_112005.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_112005_1 = document.createElement('span');
  oe_112005_1.appendChild(htmlSpan('5<i>x</i> - 8 = 3<i>x</i> + 16'));

  const oe_112005_2 = document.createElement('span');
  oe_112005_2.appendChild(htmlSpan('5<i>x</i> - 8 <span class="markeer-lila">+ 8 - 3<i>x</i></span> = 3<i>x</i> + 16 <span class="markeer-lila">+ 8 - 3<i>x</i></span>'));

  const oe_112005_3 = document.createElement('span');
  oe_112005_3.appendChild(htmlSpan('2<i>x</i> = 24'));

  const oe_112005_4 = document.createElement('span');
  oe_112005_4.appendChild(htmlSpan('2<i>x</i> <span class="markeer-lila">: 2</span> = 24 <span class="markeer-lila">: 2</span>'));

  const oe_112005_5 = document.createElement('span');
  oe_112005_5.appendChild(htmlSpan('<i>x</i> = 12'));

  const oe_112005_6 = document.createElement('span');
  const oe_112005_6_b1 = maakSpanBreedte('0.85cm', 'LL:');
  oe_112005_6.appendChild(oe_112005_6_b1);
  oe_112005_6.appendChild(htmlSpan('5 · 12 - 8 = 52'));

  const oe_112005_7 = document.createElement('span');
  const oe_112005_7_b1 = maakSpanBreedte('0.85cm', 'RL:');
  oe_112005_7.appendChild(oe_112005_7_b1);
  oe_112005_7.appendChild(htmlSpan('3 · 12 + 16 = 52'));

  const oe_112005_8 = document.createElement('span');
  oe_112005_8.appendChild(htmlSpan('10<i>y</i> - 4 = 15<i>y</i> + 19'));

  const oe_112005_9 = document.createElement('span');
  oe_112005_9.appendChild(htmlSpan('10<i>y</i> - 4 <span class="markeer-lila">+ 4 - 15<i>y</i></span> = 15<i>y</i> + 19 <span class="markeer-lila">+ 4 - 15<i>y</i></span>'));

  const oe_112005_10 = document.createElement('span');
  oe_112005_10.appendChild(htmlSpan('-5<i>y</i> = 23'));

  const oe_112005_11 = document.createElement('span');
  oe_112005_11.appendChild(htmlSpan('-5<i>y</i> <span class="markeer-lila">: (-5)</span> = 23 <span class="markeer-lila">: (-5)</span>'));

  const oe_112005_12 = document.createElement('span');
  const oe_112005_12_s1 = document.createElement('span');
  oe_112005_12_s1.appendChild(htmlSpan('<i>y</i> = '));
  oe_112005_12_s1.appendChild(maakBreuk('-23','\u200A 5 \u200A','opgave'));
  oe_112005_12.appendChild(oe_112005_12_s1);

  const oe_112005_13 = document.createElement('span');
  const oe_112005_13_b1 = maakSpanBreedte('0.85cm', 'LL:');
  oe_112005_13.appendChild(oe_112005_13_b1);
  const oe_112005_13_s2 = document.createElement('span');
  oe_112005_13_s2.appendChild(htmlSpan('10 · '));
  oe_112005_13_s2.appendChild(maakBreuk('-23','\u200A 5 \u200A','opgave'));
  oe_112005_13_s2.appendChild(htmlSpan(' - 4 = -50'));
  oe_112005_13.appendChild(oe_112005_13_s2);

  const oe_112005_14 = document.createElement('span');
  const oe_112005_14_b1 = maakSpanBreedte('0.85cm', 'RL:');
  oe_112005_14.appendChild(oe_112005_14_b1);
  const oe_112005_14_s2 = document.createElement('span');
  oe_112005_14_s2.appendChild(htmlSpan('15 · '));
  oe_112005_14_s2.appendChild(maakBreuk('-23','\u200A 5 \u200A','opgave'));
  oe_112005_14_s2.appendChild(htmlSpan(' + 19 = -50'));
  oe_112005_14.appendChild(oe_112005_14_s2);

  const oe_112005_15 = document.createElement('span');
  oe_112005_15.appendChild(htmlSpan('9 - 8<i>t</i> + 4 = 2<i>t</i> - 3 + 6<i>t</i>'));

  const oe_112005_16 = document.createElement('span');
  oe_112005_16.appendChild(htmlSpan('9 - 8<i>t</i> + 4 <span class="markeer-lila">+ 3 + 8<i>t</i></span> = 2<i>t</i> - 3 + 6<i>t</i> <span class="markeer-lila">+ 3 + 8<i>t</i></span>'));

  const oe_112005_17 = document.createElement('span');
  oe_112005_17.appendChild(htmlSpan('16 = 16<i>t</i>'));

  const oe_112005_18 = document.createElement('span');
  oe_112005_18.appendChild(htmlSpan('16 <span class="markeer-lila">: 16</span> = 16<i>t</i> <span class="markeer-lila">: 16</span>'));

  const oe_112005_19 = document.createElement('span');
  oe_112005_19.appendChild(htmlSpan('1 = <i>t</i>'));

  const oe_112005_20 = document.createElement('span');
  const oe_112005_20_b1 = maakSpanBreedte('0.85cm', 'LL:');
  oe_112005_20.appendChild(oe_112005_20_b1);
  oe_112005_20.appendChild(htmlSpan('9 - 8 · 1 + 4 = 5'));

  const oe_112005_21 = document.createElement('span');
  const oe_112005_21_b1 = maakSpanBreedte('0.85cm', 'RL:');
  oe_112005_21.appendChild(oe_112005_21_b1);
  oe_112005_21.appendChild(htmlSpan('2 · 1 - 3 + 6 · 1 = 5'));

  const oe_112005_22 = document.createElement('span');
  const oe_112005_22_s1 = document.createElement('span');
  oe_112005_22_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_112005_22_s1.appendChild(htmlSpan('<i>z</i> + '));
  oe_112005_22_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_112005_22_s1.appendChild(htmlSpan(' = '));
  oe_112005_22_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_112005_22.appendChild(oe_112005_22_s1);

  const oe_112005_23 = document.createElement('span');
  const oe_112005_23_s1 = document.createElement('span');
  oe_112005_23_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_112005_23_s1.appendChild(htmlSpan('<i>z</i> + '));
  oe_112005_23_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_112005_23_s1.appendChild(htmlSpan(' '));
  const b01 = document.createElement('span');
  b01.appendChild(htmlSpan('- '));
  b01.appendChild(maakBreuk('1','2','opgave'));
  b01.style.color = '#d500f9';  
  oe_112005_23_s1.appendChild(b01);
  oe_112005_23_s1.appendChild(htmlSpan(' = '));
  oe_112005_23_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_112005_23_s1.appendChild(htmlSpan(' '));
  oe_112005_23_s1.appendChild(b01.cloneNode(true));
  oe_112005_23.appendChild(oe_112005_23_s1);

  const oe_112005_24 = document.createElement('span');
  const oe_112005_24_s1 = document.createElement('span');
  oe_112005_24_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_112005_24_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_112005_24_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_112005_24_s1.appendChild(htmlSpan(' - '));
  oe_112005_24_s1.appendChild(maakBreuk('3','6','opgave'));
  oe_112005_24.appendChild(oe_112005_24_s1);

  const oe_112005_25 = document.createElement('span');
  const oe_112005_25_s1 = document.createElement('span');
  oe_112005_25_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_112005_25_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_112005_25_s1.appendChild(maakBreuk('-1','3','opgave'));
  oe_112005_25.appendChild(oe_112005_25_s1);

  const oe_112005_26 = document.createElement('span');
  const oe_112005_26_s1 = document.createElement('span');
  oe_112005_26_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_112005_26_s1.appendChild(htmlSpan('<i>z</i> '));
  const b02 = document.createElement('span');
  b02.appendChild(htmlSpan(': '));
  b02.appendChild(maakBreuk('2','3','opgave'));
  b02.style.color = '#d500f9';
  oe_112005_26_s1.appendChild(b02);
  oe_112005_26_s1.appendChild(htmlSpan(' = '));
  oe_112005_26_s1.appendChild(maakBreuk('-1','3','opgave'));
  oe_112005_26_s1.appendChild(htmlSpan(' '));
  oe_112005_26_s1.appendChild(b02.cloneNode(true));
  oe_112005_26.appendChild(oe_112005_26_s1);

  const oe_112005_27 = document.createElement('span');
  const oe_112005_27_s1 = document.createElement('span');
  oe_112005_27_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_112005_27_s1.appendChild(maakBreuk('-1','3','opgave'));
  oe_112005_27_s1.appendChild(htmlSpan(' · '));
  oe_112005_27_s1.appendChild(maakBreuk('3','2','opgave'));
  oe_112005_27.appendChild(oe_112005_27_s1);

  const oe_112005_28 = document.createElement('span');
  const oe_112005_28_s1 = document.createElement('span');
  oe_112005_28_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_112005_28_s1.appendChild(maakBreuk('-1','2','opgave'));
  oe_112005_28.appendChild(oe_112005_28_s1);

  const oe_112005_29 = document.createElement('span');
  const oe_112005_29_b1 = maakSpanBreedte('0.85cm', 'LL:');
  oe_112005_29.appendChild(oe_112005_29_b1);
  const oe_112005_29_s2 = document.createElement('span');
  oe_112005_29_s2.appendChild(maakBreuk('2','3','opgave'));
  oe_112005_29_s2.appendChild(htmlSpan(' · '));
  oe_112005_29_s2.appendChild(maakBreuk('-1','2','opgave'));
  oe_112005_29_s2.appendChild(htmlSpan(' + '));
  oe_112005_29_s2.appendChild(maakBreuk('1','2','opgave'));
  oe_112005_29_s2.appendChild(htmlSpan(' = '));
  oe_112005_29_s2.appendChild(maakBreuk('-2','6','opgave'));
  oe_112005_29_s2.appendChild(htmlSpan(' + '));
  oe_112005_29_s2.appendChild(maakBreuk('3','6','opgave'));
  oe_112005_29_s2.appendChild(htmlSpan(' = '));
  oe_112005_29_s2.appendChild(maakBreuk('1','6','opgave'));
  oe_112005_29.appendChild(oe_112005_29_s2);

  const oe_112005_30 = document.createElement('span');
  const oe_112005_30_b1 = maakSpanBreedte('0.85cm', 'RL:');
  oe_112005_30.appendChild(oe_112005_30_b1);
  const oe_112005_30_s2 = document.createElement('span');
  oe_112005_30_s2.appendChild(maakBreuk('1','6','opgave'));
  oe_112005_30.appendChild(oe_112005_30_s2);  

  const inhoud = maakOefening({
    id:'oe_112005', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_112005_1, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_112005_15, true);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_112005_2,
    oe_112005_3,
    oe_112005_4,
    oe_112005_5,
    oe_112005_6,
    oe_112005_7,
  ];
  const oplC = [
    oe_112005_16,
    oe_112005_17,
    oe_112005_18,
    oe_112005_19,
    oe_112005_20,
    oe_112005_21,
  ];
  for (let i=0; i<6; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_112005_8, true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_112005_22, true);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_112005_9,
    oe_112005_10,
    oe_112005_11,
    oe_112005_12,
    oe_112005_13,
    oe_112005_14,
    null,
    null
  ];
  const oplD = [
    oe_112005_23,
    oe_112005_24,
    oe_112005_25,
    oe_112005_26,
    oe_112005_27,
    oe_112005_28,
    oe_112005_29,
    oe_112005_30
  ];
  for (let i=0; i<8; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], true);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

})();
