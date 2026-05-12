/* ============================================================
   H11 / P11_1 / oe_111015.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111015_1 = document.createElement('span');
  oe_111015_1.appendChild(htmlSpan('117 + <i>x</i> = 67'));

  const oe_111015_2 = document.createElement('span');
  oe_111015_2.appendChild(htmlSpan('117 + <i>x</i> <span class="markeer-lila">-117</span> = 67 <span class="markeer-lila">-117</span>'));

  const oe_111015_3 = document.createElement('span');
  oe_111015_3.appendChild(htmlSpan('<i>x</i> = -50'));

  const oe_111015_6 = document.createElement('span');
  oe_111015_6.appendChild(htmlSpan(' '));

  const oe_111015_4 = document.createElement('span');
  oe_111015_4.appendChild(htmlSpan('-7<i>y</i> = 77'));

  const oe_111015_5 = document.createElement('span');
  oe_111015_5.appendChild(htmlSpan('-7<i>y</i> <span class="markeer-lila">: (-7)</span> = 77 <span class="markeer-lila">: (-7)</span>'));

  const oe_111015_7 = document.createElement('span');
  oe_111015_7.appendChild(htmlSpan('<i>y</i> = -11'));

  const oe_111015_8 = document.createElement('span');
  oe_111015_8.appendChild(htmlSpan('14 = 0,2<i>a</i>'));

  const oe_111015_9 = document.createElement('span');
  oe_111015_9.appendChild(htmlSpan('14 <span class="markeer-lila">: 0,2</span> = 0,2<i>a</i> <span class="markeer-lila">: 0,2</span>'));

  const oe_111015_10 = document.createElement('span');
  oe_111015_10.appendChild(htmlSpan('70 = <i>a</i>'));

  const oe_111015_11 = document.createElement('span');
  oe_111015_11.appendChild(htmlSpan('-160 = <i>t</i> + 20'));

  const oe_111015_12 = document.createElement('span');
  oe_111015_12.appendChild(htmlSpan('-160 <span class="markeer-lila">- 20</span> = <i>t</i> + 20 <span class="markeer-lila">- 20</span>'));

  const oe_111015_13 = document.createElement('span');
  oe_111015_13.appendChild(htmlSpan('-180 = <i>t</i>'));

  const oe_111015_14 = document.createElement('span');
  oe_111015_14.appendChild(htmlSpan('7,25 + <i>z</i> = 0,25'));

  const oe_111015_15 = document.createElement('span');
  oe_111015_15.appendChild(htmlSpan('7,25 + <i>z</i> <span class="markeer-lila">-7,25</span> = 0,25 <span class="markeer-lila">- 7,25</span>'));

  const oe_111015_16 = document.createElement('span');
  oe_111015_16.appendChild(htmlSpan('<i>z</i> = -7'));

  const oe_111015_17 = document.createElement('span');
  oe_111015_17.appendChild(htmlSpan('-666 + <i>r</i> = 111'));

  const oe_111015_18 = document.createElement('span');
  oe_111015_18.appendChild(htmlSpan('-666 + <i>r</i> <span class="markeer-lila">+ 666</span> = 111 <span class="markeer-lila">+ 666</span>'));

  const oe_111015_19 = document.createElement('span');
  oe_111015_19.appendChild(htmlSpan('<i>r</i> = 777'));

  const oe_111015_24 = document.createElement('span');
  const oe_111015_24_s1 = document.createElement('span');
  oe_111015_24_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_111015_24_s1.appendChild(htmlSpan(' = <i>d</i> + '));
  oe_111015_24_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_111015_24.appendChild(oe_111015_24_s1);

  const oe_111015_25 = document.createElement('span');
  const oe_111015_25_s1 = document.createElement('span');
  oe_111015_25_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_111015_25_s1.appendChild(htmlSpan(' '));
  const b01 = document.createElement('span');
  b01.appendChild(htmlSpan('- '));
  b01.appendChild(maakBreuk('1','6','opgave'));
  b01.style.color = '#d500f9';
  oe_111015_25_s1.appendChild(b01);
  oe_111015_25_s1.appendChild(htmlSpan(' = <i>d</i> + '));
  oe_111015_25_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_111015_25_s1.appendChild(htmlSpan(' '));
  oe_111015_25_s1.appendChild(b01.cloneNode(true));
  oe_111015_25.appendChild(oe_111015_25_s1);

  const oe_111015_26 = document.createElement('span');
  const oe_111015_26_s1 = document.createElement('span');
  oe_111015_26_s1.appendChild(maakBreuk('3','12','opgave'));
  oe_111015_26_s1.appendChild(htmlSpan(' - '));
  oe_111015_26_s1.appendChild(maakBreuk('2','12','opgave'));
  oe_111015_26_s1.appendChild(htmlSpan(' = <i>d</i>'));
  oe_111015_26.appendChild(oe_111015_26_s1);

  const oe_111015_27 = document.createElement('span');
  const oe_111015_27_s1 = document.createElement('span');
  oe_111015_27_s1.appendChild(maakBreuk('1','12','opgave'));
  oe_111015_27_s1.appendChild(htmlSpan(' = <i>d</i>'));
  oe_111015_27.appendChild(oe_111015_27_s1);

  const oe_111015_20 = document.createElement('span');
  const oe_111015_20_s1 = document.createElement('span');
  oe_111015_20_s1.appendChild(maakBreuk('4','5','opgave'));
  oe_111015_20_s1.appendChild(htmlSpan('<i>b</i> = '));
  oe_111015_20_s1.appendChild(maakBreuk('2','15','opgave'));
  oe_111015_20.appendChild(oe_111015_20_s1);

  const oe_111015_21 = document.createElement('span');
  const oe_111015_21_s1 = document.createElement('span');
  oe_111015_21_s1.appendChild(maakBreuk('4','5','opgave'));
  oe_111015_21_s1.appendChild(htmlSpan('<i>b</i> '));
  const b02 = document.createElement('span');
  b02.appendChild(htmlSpan(': '));
  b02.appendChild(maakBreuk('4','5','opgave'));
  b02.style.color = '#d500f9';
  oe_111015_21_s1.appendChild(b02);
  oe_111015_21_s1.appendChild(htmlSpan(' = '));
  oe_111015_21_s1.appendChild(maakBreuk('2','15','opgave'));
  oe_111015_21_s1.appendChild(htmlSpan(' '));
  oe_111015_21_s1.appendChild(b02.cloneNode(true));
  oe_111015_21.appendChild(oe_111015_21_s1);

  const oe_111015_22 = document.createElement('span');
  const oe_111015_22_s1 = document.createElement('span');
  oe_111015_22_s1.appendChild(htmlSpan('<i>b</i> = '));
  oe_111015_22_s1.appendChild(maakBreuk('2','15','opgave'));
  oe_111015_22_s1.appendChild(htmlSpan(' · '));
  oe_111015_22_s1.appendChild(maakBreuk('5','4','opgave'));
  oe_111015_22.appendChild(oe_111015_22_s1);

  const oe_111015_23 = document.createElement('span');
  const oe_111015_23_s1 = document.createElement('span');
  oe_111015_23_s1.appendChild(htmlSpan('<i>b</i> = '));
  oe_111015_23_s1.appendChild(maakBreuk('1','6','opgave'));
  oe_111015_23.appendChild(oe_111015_23_s1);  

  const inhoud = maakOefening({
    id:'oe_111015', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111015_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblE = maakOpTdaz('e', oe_111015_11, false);
  tdLblE.classList.add('kolom-rechts');
  trL1.appendChild(tdLblE);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_111015_2,
    oe_111015_3,
  ];
  const oplE = [
    oe_111015_12,
    oe_111015_13,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdE = maakSlTd(oplE[i], false);
    tdE.classList.add('kolom-rechts');
    tr.appendChild(tdE);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_111015_4, false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblF = maakOpTdaz('f', oe_111015_14, false);
  tdLblF.classList.add('kolom-rechts');
  trL2.appendChild(tdLblF);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_111015_5,
    oe_111015_7,
  ];
  const oplF = [
    oe_111015_15,
    oe_111015_16,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdF = maakSlTd(oplF[i], false);
    tdF.classList.add('kolom-rechts');
    tr.appendChild(tdF);
    tbody.appendChild(tr);
  }

  /* Rij 3: labels */
  const trL3 = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_111015_8, false);
  tdLblC.classList.add('kolom-links');
  trL3.appendChild(tdLblC);
  const tdLblG = maakOpTdaz('g', oe_111015_17, false);
  tdLblG.classList.add('kolom-rechts');
  trL3.appendChild(tdLblG);
  tbody.appendChild(trL3);

  /* Oplossingen rij 3 */
  const oplC = [
    oe_111015_9,
    oe_111015_10,
  ];
  const oplG = [
    oe_111015_18,
    oe_111015_19,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-links');
    tr.appendChild(tdC);
    const tdG = maakSlTd(oplG[i], false);
    tdG.classList.add('kolom-rechts');
    tr.appendChild(tdG);
    tbody.appendChild(tr);
  }

  /* Rij 4: labels */
  const trL4 = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', oe_111015_24, true);
  tdLblD.classList.add('kolom-links');
  trL4.appendChild(tdLblD);
  const tdLblH = maakOpTdaz('h', oe_111015_20, true);
  tdLblH.classList.add('kolom-rechts');
  trL4.appendChild(tdLblH);
  tbody.appendChild(trL4);

  /* Oplossingen rij 1 */
  const oplD = [
    oe_111015_25,
    oe_111015_26,
    oe_111015_27,
  ];
  const oplH = [
    oe_111015_21,
    oe_111015_22,
    oe_111015_23,
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplD[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdD = maakSlTd(oplH[i], true);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

})();
