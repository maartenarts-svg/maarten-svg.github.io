/* ============================================================
   H11 / P11_T3 / oe_W33WIE_1.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_W33WIE_1_1 = document.createElement('span');
  oe_W33WIE_1_1.appendChild(htmlSpan('5 + <i>a</i> = -23'));

  const oe_W33WIE_1_2 = document.createElement('span');
  oe_W33WIE_1_2.appendChild(htmlSpan('5 + <i>a</i> <span class="markeer-lila">- 5</span> = -23 <span class="markeer-lila">- 5</span>'));

  const oe_W33WIE_1_3 = document.createElement('span');
  oe_W33WIE_1_3.appendChild(htmlSpan('<i>a</i> = -28'));

  const oe_W33WIE_1_4 = document.createElement('span');
  oe_W33WIE_1_4.appendChild(htmlSpan('-7<i>x</i> = 140'));

  const oe_W33WIE_1_5 = document.createElement('span');
  oe_W33WIE_1_5.appendChild(htmlSpan('-7<i>x</i> <span class="markeer-lila">: (-7)</span> = 140 <span class="markeer-lila">: (-7)</span>'));

  const oe_W33WIE_1_6 = document.createElement('span');
  oe_W33WIE_1_6.appendChild(htmlSpan('<i>x</i> = -20'));

  const oe_W33WIE_1_7 = document.createElement('span');
  const oe_W33WIE_1_7_s1 = document.createElement('span');
  oe_W33WIE_1_7_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_W33WIE_1_7_s1.appendChild(htmlSpan(' + <i>y</i> = '));
  oe_W33WIE_1_7_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_W33WIE_1_7.appendChild(oe_W33WIE_1_7_s1);

  const oe_W33WIE_1_8 = document.createElement('span');
  const oe_W33WIE_1_8_s1 = document.createElement('span');
  oe_W33WIE_1_8_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_W33WIE_1_8_s1.appendChild(htmlSpan(' + <i>y</i> '));
  const h01 = document.createElement('span');
  h01.appendChild(htmlSpan('- '));
  h01.appendChild(maakBreuk('1','4','opgave'));
  h01.classList.add('markeer-lila');
  oe_W33WIE_1_8_s1.appendChild(h01);
  oe_W33WIE_1_8_s1.appendChild(htmlSpan(' = '));
  oe_W33WIE_1_8_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_W33WIE_1_8_s1.appendChild(htmlSpan(' '));
  const h02 = document.createElement('span');
  h02.appendChild(htmlSpan('- '));
  h02.appendChild(maakBreuk('1','4','opgave'));
  h02.classList.add('markeer-lila');
  oe_W33WIE_1_8_s1.appendChild(h02);
  oe_W33WIE_1_8.appendChild(oe_W33WIE_1_8_s1);

  const oe_W33WIE_1_9 = document.createElement('span');
  const oe_W33WIE_1_9_s1 = document.createElement('span');
  oe_W33WIE_1_9_s1.appendChild(htmlSpan('<i>y</i> = '));
  oe_W33WIE_1_9_s1.appendChild(maakBreuk('12','20','opgave'));
  oe_W33WIE_1_9_s1.appendChild(htmlSpan(' - '));
  oe_W33WIE_1_9_s1.appendChild(maakBreuk('5','20','opgave'));
  oe_W33WIE_1_9.appendChild(oe_W33WIE_1_9_s1);

  const oe_W33WIE_1_10 = document.createElement('span');
  const oe_W33WIE_1_10_s1 = document.createElement('span');
  oe_W33WIE_1_10_s1.appendChild(htmlSpan('<i>y</i> = '));
  oe_W33WIE_1_10_s1.appendChild(maakBreuk('7','20','opgave'));
  oe_W33WIE_1_10.appendChild(oe_W33WIE_1_10_s1);

  const oe_W33WIE_1_11 = document.createElement('span');
  oe_W33WIE_1_11.appendChild(htmlSpan('17 = 3<i>b</i>'));

  const oe_W33WIE_1_12 = document.createElement('span');
  oe_W33WIE_1_12.appendChild(htmlSpan('17 <span class="markeer-lila">: 3</span> = 3<i>b</i> <span class="markeer-lila">: 3</span>'));

  const oe_W33WIE_1_13 = document.createElement('span');
  const oe_W33WIE_1_13_s1 = document.createElement('span');
  oe_W33WIE_1_13_s1.appendChild(maakBreuk('17','3','opgave'));
  oe_W33WIE_1_13_s1.appendChild(htmlSpan(' = <i>b</i>'));
  oe_W33WIE_1_13.appendChild(oe_W33WIE_1_13_s1);

  const oe_W33WIE_1_14 = document.createElement('span');
  oe_W33WIE_1_14.appendChild(htmlSpan('-18 = <i>t</i> - 7'));

  const oe_W33WIE_1_15 = document.createElement('span');
  oe_W33WIE_1_15.appendChild(htmlSpan('-18 <span class="markeer-lila">+ 7</span> = <i>t</i> - 7 <span class="markeer-lila">+ 7</span>'));

  const oe_W33WIE_1_16 = document.createElement('span');
  oe_W33WIE_1_16.appendChild(htmlSpan('-11 = <i>t</i>'));

  const oe_W33WIE_1_17 = document.createElement('span');
  const oe_W33WIE_1_17_s1 = document.createElement('span');
  oe_W33WIE_1_17_s1.appendChild(maakBreuk('5','3','opgave'));
  oe_W33WIE_1_17_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_W33WIE_1_17_s1.appendChild(maakBreuk('2','11','opgave'));
  oe_W33WIE_1_17.appendChild(oe_W33WIE_1_17_s1);

  const oe_W33WIE_1_18 = document.createElement('span');
  const oe_W33WIE_1_18_s1 = document.createElement('span');
  oe_W33WIE_1_18_s1.appendChild(maakBreuk('5','3','opgave'));
  oe_W33WIE_1_18_s1.appendChild(htmlSpan('<i>z</i> '));
  const h03 = document.createElement('span');
  h03.appendChild(htmlSpan(': '));
  h03.appendChild(maakBreuk('5','3','opgave'));
  h03.classList.add('markeer-lila');
  oe_W33WIE_1_18_s1.appendChild(h03);
  oe_W33WIE_1_18_s1.appendChild(htmlSpan(' = ')); 
  oe_W33WIE_1_18_s1.appendChild(maakBreuk('2','11','opgave'));
  oe_W33WIE_1_18_s1.appendChild(htmlSpan(' '));
  const h04 = document.createElement('span');
  h04.appendChild(htmlSpan(': '));
  h04.appendChild(maakBreuk('5','3','opgave'));
  h04.classList.add('markeer-lila');
  oe_W33WIE_1_18_s1.appendChild(h04);
  oe_W33WIE_1_18.appendChild(oe_W33WIE_1_18_s1);

  const oe_W33WIE_1_19 = document.createElement('span');
  const oe_W33WIE_1_19_s1 = document.createElement('span');
  oe_W33WIE_1_19_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_W33WIE_1_19_s1.appendChild(maakBreuk('2','11','opgave'));
  oe_W33WIE_1_19_s1.appendChild(htmlSpan(' · '));
  oe_W33WIE_1_19_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_W33WIE_1_19.appendChild(oe_W33WIE_1_19_s1);

  const oe_W33WIE_1_20 = document.createElement('span');
  const oe_W33WIE_1_20_s1 = document.createElement('span');
  oe_W33WIE_1_20_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_W33WIE_1_20_s1.appendChild(maakBreuk('6','55','opgave'));
  oe_W33WIE_1_20.appendChild(oe_W33WIE_1_20_s1);

  const inhoud = maakOefening({
    id:'oe_W33WIE_1', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.<br><b>Een tussenstap is verplicht!</b>', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_W33WIE_1_1, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblD = maakOpTdaz('d', oe_W33WIE_1_11, true);
  tdLblD.classList.add('kolom-rechts');
  trL1.appendChild(tdLblD);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_W33WIE_1_2,
    oe_W33WIE_1_3,
  ];
  const oplD = [
    oe_W33WIE_1_12,
    oe_W33WIE_1_13,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdD = maakSlTd(oplD[i], true);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_W33WIE_1_4, true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblE = maakOpTdaz('e', oe_W33WIE_1_14, true);
  tdLblE.classList.add('kolom-rechts');
  trL2.appendChild(tdLblE);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_W33WIE_1_5,
    oe_W33WIE_1_6,
  ];
  const oplE = [
    oe_W33WIE_1_15,
    oe_W33WIE_1_16,
  ];
  for (let i=0; i<2; i++) {
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
  const tdLblC = maakOpTdaz('c', oe_W33WIE_1_7, true);
  tdLblC.classList.add('kolom-links');
  trL3.appendChild(tdLblC);
  const tdLblF = maakOpTdaz('f', oe_W33WIE_1_17, true);
  tdLblF.classList.add('kolom-rechts');
  trL3.appendChild(tdLblF);
  tbody.appendChild(trL3);

  /* Oplossingen rij 3 */
  const oplC = [
    oe_W33WIE_1_8,
    oe_W33WIE_1_9,
    oe_W33WIE_1_10,
    null,
  ];
  const oplF = [
    oe_W33WIE_1_18,
    oe_W33WIE_1_19,
    oe_W33WIE_1_20,
    null,
  ];
  for (let i=0; i<4; i++) {
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
