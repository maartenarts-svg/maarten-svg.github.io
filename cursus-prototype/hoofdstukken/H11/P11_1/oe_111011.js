/* ============================================================
   H11 / P11_1 / oe_111011.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111011_1 = document.createElement('span');
  oe_111011_1.appendChild(htmlSpan('<i>x</i> + 7 = 12'));

  const oe_111011_2 = document.createElement('span');
  oe_111011_2.appendChild(htmlSpan('<i>x</i> + 7 <span class="markeer-lila">- 7</span> = 12 <span class="markeer-lila">- 7</span>'));

  const oe_111011_3 = document.createElement('span');
  oe_111011_3.appendChild(htmlSpan('<i>x</i> = 5'));

  const oe_111011_4 = document.createElement('span');
  oe_111011_4.appendChild(htmlSpan('4<i>a</i> = -29'));

  const oe_111011_5 = document.createElement('span');
  oe_111011_5.appendChild(htmlSpan('4<i>a</i> <span class="markeer-lila">: 4</span> = -29 <span class="markeer-lila">: 4</span>'));

  const oe_111011_6 = document.createElement('span');
  const oe_111011_6_s1 = document.createElement('span');
  oe_111011_6_s1.appendChild(htmlSpan('<i>a</i> = '));
  oe_111011_6_s1.appendChild(maakBreuk('-29','4','opgave'));
  oe_111011_6.appendChild(oe_111011_6_s1);

  const oe_111011_7 = document.createElement('span');
  const oe_111011_7_s1 = document.createElement('span');
  oe_111011_7_s1.appendChild(htmlSpan('<i>p</i> - '));
  oe_111011_7_s1.appendChild(maakBreuk('1','3','opgave'));
  oe_111011_7_s1.appendChild(htmlSpan(' = '));
  oe_111011_7_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_111011_7.appendChild(oe_111011_7_s1);

  const oe_111011_8 = document.createElement('span');
  const b01 = maakBreuk('1','3','oplossing');
  b01.style.color = '#d500f9'
  const b02 = maakBreuk('1','3','oplossing');
  b02.style.color = '#d500f9';
  const oe_111011_8_s1 = document.createElement('span');
  oe_111011_8_s1.appendChild(htmlSpan('<i>p</i> - '));
  oe_111011_8_s1.appendChild(maakBreuk('1','3','opgave'));
  oe_111011_8_s1.appendChild(htmlSpan(' <span class="markeer-lila">+ '));
  oe_111011_8_s1.appendChild(b01);
  oe_111011_8_s1.appendChild(htmlSpan('</span> = '));
  oe_111011_8_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_111011_8_s1.appendChild(htmlSpan(' <span class="markeer-lila">+ '));
  oe_111011_8_s1.appendChild(b02);
  oe_111011_8_s1.appendChild(htmlSpan('</span>'));
  oe_111011_8.appendChild(oe_111011_8_s1);

  const oe_111011_9 = document.createElement('span');
  const oe_111011_9_s1 = document.createElement('span');
  oe_111011_9_s1.appendChild(htmlSpan('<i>p</i> = '));
  oe_111011_9_s1.appendChild(maakBreuk('3','6','opgave'));
  oe_111011_9_s1.appendChild(htmlSpan(' + '));
  oe_111011_9_s1.appendChild(maakBreuk('2','6','opgave'));
  oe_111011_9.appendChild(oe_111011_9_s1);

  const oe_111011_10 = document.createElement('span');
  const oe_111011_10_s1 = document.createElement('span');
  oe_111011_10_s1.appendChild(htmlSpan('<i>p</i> = '));
  oe_111011_10_s1.appendChild(maakBreuk('5','6','opgave'));
  oe_111011_10.appendChild(oe_111011_10_s1);

  const oe_111011_11 = document.createElement('span');
  oe_111011_11.appendChild(htmlSpan('5,3 = <i>z</i> - 2,1'));

  const oe_111011_12 = document.createElement('span');
  oe_111011_12.appendChild(htmlSpan('5,3 <span class="markeer-lila"> + 2,1</span> = <i>z</i> - 2,1 <span class="markeer-lila">+ 2,1</span>'));

  const oe_111011_13 = document.createElement('span');
  oe_111011_13.appendChild(htmlSpan('7,4 = <i>z</i>'));

  const oe_111011_14 = document.createElement('span');
  const oe_111011_14_s1 = document.createElement('span');
  oe_111011_14_s1.appendChild(maakBreuk('-1','6','opgave'));
  oe_111011_14_s1.appendChild(htmlSpan('<i>k</i> = '));
  oe_111011_14_s1.appendChild(maakBreuk('1','7','opgave'));
  oe_111011_14.appendChild(oe_111011_14_s1);

  const oe_111011_15 = document.createElement('span');
  const b03 = maakBreuk('-1','6','oplossing');
  b03.style.color = '#d500f9'
  const b04 = maakBreuk('-1','6','oplossing');
  b04.style.color = '#d500f9';
  const oe_111011_15_s1 = document.createElement('span');
  oe_111011_15_s1.appendChild(maakBreuk('-1','6','opgave'));
  oe_111011_15_s1.appendChild(htmlSpan('<i>z</i> <span class="markeer-lila">: '));
  oe_111011_15_s1.appendChild(b03);
  oe_111011_15_s1.appendChild(htmlSpan('</span> = '));
  oe_111011_15_s1.appendChild(maakBreuk('1','7','opgave'));
  oe_111011_15_s1.appendChild(htmlSpan(' <span class="markeer-lila">: '));
  oe_111011_15_s1.appendChild(b04);
  oe_111011_15_s1.appendChild(htmlSpan('</span>'));
  oe_111011_15.appendChild(oe_111011_15_s1);

  const oe_111011_16 = document.createElement('span');
  const oe_111011_16_s1 = document.createElement('span');
  oe_111011_16_s1.appendChild(htmlSpan('<i>k</i> = '));
  oe_111011_16_s1.appendChild(maakBreuk('1','7','opgave'));
  oe_111011_16_s1.appendChild(htmlSpan(' · (-6)'));
  oe_111011_16.appendChild(oe_111011_16_s1);

  const oe_111011_17 = document.createElement('span');
  const oe_111011_17_s1 = document.createElement('span');
  oe_111011_17_s1.appendChild(htmlSpan('<i>k</i> = '));
  oe_111011_17_s1.appendChild(maakBreuk('-6','7','opgave'));
  oe_111011_17.appendChild(oe_111011_17_s1);

  const oe_111011_18 = document.createElement('span');
  const oe_111011_18_s1 = document.createElement('span');
  oe_111011_18_s1.appendChild(maakBreuk('3','4','opgave'));
  oe_111011_18_s1.appendChild(htmlSpan('<i>x</i> = '));
  oe_111011_18_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_111011_18.appendChild(oe_111011_18_s1);

  const oe_111011_19 = document.createElement('span');
  const b05 = maakBreuk('3','4','oplossing');
  b05.style.color = '#d500f9'
  const b06 = maakBreuk('3','4','oplossing');
  b06.style.color = '#d500f9';
  const oe_111011_19_s1 = document.createElement('span');
  oe_111011_19_s1.appendChild(maakBreuk('3','4','opgave'));
  oe_111011_19_s1.appendChild(htmlSpan('<i>x</i> <span class="markeer-lila">: '));
  oe_111011_19_s1.appendChild(b05);
  oe_111011_19_s1.appendChild(htmlSpan('</span> = '));
  oe_111011_19_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_111011_19_s1.appendChild(htmlSpan(' <span class="markeer-lila">: '));
  oe_111011_19_s1.appendChild(b06);
  oe_111011_19_s1.appendChild(htmlSpan('</span>'));
  oe_111011_19.appendChild(oe_111011_19_s1);

  const oe_111011_20 = document.createElement('span');
  const oe_111011_20_s1 = document.createElement('span');
  oe_111011_20_s1.appendChild(htmlSpan('<i>x</i> = '));
  oe_111011_20_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_111011_20_s1.appendChild(htmlSpan(' · '));
  oe_111011_20_s1.appendChild(maakBreuk('4','3','opgave'));
  oe_111011_20.appendChild(oe_111011_20_s1);

  const oe_111011_21 = document.createElement('span');
  const oe_111011_21_s1 = document.createElement('span');
  oe_111011_21_s1.appendChild(htmlSpan('<i>x</i> = '));
  oe_111011_21_s1.appendChild(maakBreuk('2','9','opgave'));
  oe_111011_21.appendChild(oe_111011_21_s1);

  const inhoud = maakOefening({
    id:'oe_111011', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111011_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblD = maakOpTdaz('d', oe_111011_11, false);
  tdLblD.classList.add('kolom-rechts');
  trL1.appendChild(tdLblD);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_111011_2,
    oe_111011_3,
  ];
  const oplD = [
    oe_111011_12,
    oe_111011_13,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdD = maakSlTd(oplD[i], false);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_111011_4, true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblE = maakOpTdaz('e', oe_111011_14, true);
  tdLblE.classList.add('kolom-rechts');
  trL2.appendChild(tdLblE);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_111011_5,
    oe_111011_6,
    null
  ];
  const oplE = [
    oe_111011_15,
    oe_111011_16,
    oe_111011_17
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdE = maakSlTd(oplE[i], true);
    tdE.classList.add('kolom-rechts');
    tr.appendChild(tdE);
    tbody.appendChild(tr);
  }

  /* Rij 3: labels */
  const trL3 = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_111011_7, true);
  tdLblC.classList.add('kolom-links');
  trL3.appendChild(tdLblC);
  const tdLblF = maakOpTdaz('f', oe_111011_18, true);
  tdLblF.classList.add('kolom-rechts');
  trL3.appendChild(tdLblF);
  tbody.appendChild(trL3);

  /* Oplossingen rij 3 */
  const oplC = [
    oe_111011_8,
    oe_111011_9,
    oe_111011_10
  ];
  const oplF = [
    oe_111011_19,
    oe_111011_20,
    oe_111011_21
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-links');
    tr.appendChild(tdC);
    const tdF = maakSlTd(oplF[i], true);
    tdF.classList.add('kolom-rechts');
    tr.appendChild(tdF);
    tbody.appendChild(tr);
  }

})();
