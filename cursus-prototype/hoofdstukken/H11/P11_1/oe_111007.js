/* ============================================================
   H11 / P11_1 / oe_111007.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111007_8 = document.createElement('span');
  oe_111007_8.appendChild(htmlSpan('4<i>t</i> = 36'));

  const oe_111007_9 = document.createElement('span');
  oe_111007_9.appendChild(htmlSpan('4<i>t</i> <span class="markeer-lila">: 4</span> = 36 <span class="markeer-lila">: 4</span>'));

  const oe_111007_10 = document.createElement('span');
  oe_111007_10.appendChild(htmlSpan('<i>t</i> = 9'));

  const oe_111007_11 = document.createElement('span');
  oe_111007_11.appendChild(htmlSpan('7 + <i>d</i> = 48'));

  const oe_111007_12 = document.createElement('span');
  oe_111007_12.appendChild(htmlSpan('7 + <i>d</i> <span class="markeer-lila">- 7</span> = 48 <span class="markeer-lila">- 7</span>'));

  const oe_111007_13 = document.createElement('span');
  oe_111007_13.appendChild(htmlSpan('<i>d</i> = 41'));

  const oe_111007_14 = document.createElement('span');
  oe_111007_14.appendChild(htmlSpan('-2<i>a</i> = 37'));

  const oe_111007_15 = document.createElement('span');
  oe_111007_15.appendChild(htmlSpan('-2<i>a</i> <span class="markeer-lila">: (-2)</span> = 37 <span class="markeer-lila">: (-2)</span>'));

  const oe_111007_16 = document.createElement('span');
  const oe_111007_16_s1 = document.createElement('span');
  oe_111007_16_s1.appendChild(htmlSpan('<i>a</i> = '));
  oe_111007_16_s1.appendChild(maakBreuk('-37','2','opgave'));
  oe_111007_16.appendChild(oe_111007_16_s1);

  const oe_111007_17 = document.createElement('span');
  const oe_111007_17_s1 = document.createElement('span');
  oe_111007_17_s1.appendChild(maakBreuk('1','5','opgave'));
  oe_111007_17_s1.appendChild(htmlSpan('<i>z</i> = -0,3'));
  oe_111007_17.appendChild(oe_111007_17_s1);

  const oe_111007_18 = document.createElement('span');
  const b01 = maakBreuk('1','5','oplossing');
  b01.style.color = '#d500f9'
  const b02 = maakBreuk('1','5','oplossing');
  b02.style.color = '#d500f9';
  const oe_111007_18_s1 = document.createElement('span');
  oe_111007_18_s1.appendChild(maakBreuk('1','5','opgave'));
  oe_111007_18_s1.appendChild(htmlSpan('<i>z</i> <span class="markeer-lila">: '));
  oe_111007_18_s1.appendChild(b01);
  oe_111007_18_s1.appendChild(htmlSpan('</span> = -0,3 <span class="markeer-lila">: '));
  oe_111007_18_s1.appendChild(b02);
  oe_111007_18_s1.appendChild(htmlSpan('</span>'));
  oe_111007_18.appendChild(oe_111007_18_s1);

  const oe_111007_19 = document.createElement('span');
  oe_111007_19.appendChild(htmlSpan('<i>x</i> = -0,3 · 5'));

  const oe_111007_20 = document.createElement('span');
  oe_111007_20.appendChild(htmlSpan('<i>x</i> = -1,5'));

  const oe_111007_21 = document.createElement('span');
  oe_111007_21.appendChild(htmlSpan('<i>r</i> - 1,5 = 3,3'));

  const oe_111007_22 = document.createElement('span');
  oe_111007_22.appendChild(htmlSpan('<i>r</i> - 1,5 <span class="markeer-lila">+ 1,5</span> = 3,3 <span class="markeer-lila">+ 1,5</span>'));

  const oe_111007_23 = document.createElement('span');
  oe_111007_23.appendChild(htmlSpan('<i>r</i> = 4,8'));

  const oe_111007_24 = document.createElement('span');
  oe_111007_24.appendChild(htmlSpan('-7 = 0,5<i>b</i>'));

  const oe_111007_25 = document.createElement('span');
  oe_111007_25.appendChild(htmlSpan('-7 <span class="markeer-lila">: 0,5</span> = 0,5<i>b</i> <span class="markeer-lila">: 0,5</span>'));

  const oe_111007_26 = document.createElement('span');
  oe_111007_26.appendChild(htmlSpan('-14 = <i>b</i>'));

  const oe_111007_27 = document.createElement('span');
  const oe_111007_27_s1 = document.createElement('span');
  oe_111007_27_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_111007_27_s1.appendChild(htmlSpan('<i>x</i> = '));
  oe_111007_27_s1.appendChild(maakBreuk('2','7','opgave'));
  oe_111007_27.appendChild(oe_111007_27_s1);

  const oe_111007_28 = document.createElement('span');
  const b03 = maakBreuk('3','5','oplossing');
  b03.style.color = '#d500f9'
  const b04 = maakBreuk('3','5','oplossing');
  b04.style.color = '#d500f9'
  const oe_111007_28_s1 = document.createElement('span');
  oe_111007_28_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_111007_28_s1.appendChild(htmlSpan('<i>x</i> <span class="markeer-lila">: '));
  oe_111007_28_s1.appendChild(b03);
  oe_111007_28_s1.appendChild(htmlSpan('</span> = '));
  oe_111007_28_s1.appendChild(maakBreuk('2','7','opgave'));
  oe_111007_28_s1.appendChild(htmlSpan(' <span class="markeer-lila">: '));
  oe_111007_28_s1.appendChild(b04);
  oe_111007_28_s1.appendChild(htmlSpan('</span>'));
  oe_111007_28.appendChild(oe_111007_28_s1);

  const oe_111007_29 = document.createElement('span');
  const oe_111007_29_s1 = document.createElement('span');
  oe_111007_29_s1.appendChild(htmlSpan('<i>x</i> = '));
  oe_111007_29_s1.appendChild(maakBreuk('2','7','opgave'));
  oe_111007_29_s1.appendChild(htmlSpan(' · '));
  oe_111007_29_s1.appendChild(maakBreuk('5','3','opgave'));
  oe_111007_29.appendChild(oe_111007_29_s1);

  const oe_111007_30 = document.createElement('span');
  const oe_111007_30_s1 = document.createElement('span');
  oe_111007_30_s1.appendChild(htmlSpan('<i>x</i> = '));
  oe_111007_30_s1.appendChild(maakBreuk('10','21','opgave'));
  oe_111007_30.appendChild(oe_111007_30_s1);

  const oe_111007_31 = document.createElement('span');
  const oe_111007_31_s1 = document.createElement('span');
  oe_111007_31_s1.appendChild(maakBreuk('1','10','opgave'));
  oe_111007_31_s1.appendChild(htmlSpan(' = '));
  oe_111007_31_s1.appendChild(maakBreuk('-1','5','opgave'));
  oe_111007_31_s1.appendChild(htmlSpan(' + <i>y</i>'));
  oe_111007_31.appendChild(oe_111007_31_s1);

  const oe_111007_32 = document.createElement('span');
  const b05 = maakBreuk('1','5','oplossing');
  b05.style.color = '#d500f9'
  const b06 = maakBreuk('1','5','oplossing');
  b06.style.color = '#d500f9'
  const oe_111007_32_s1 = document.createElement('span');
  oe_111007_32_s1.appendChild(maakBreuk('1','10','opgave'));
  oe_111007_32_s1.appendChild(htmlSpan(' <span class="markeer-lila">+ '));
  oe_111007_32_s1.appendChild(b05);
  oe_111007_32_s1.appendChild(htmlSpan('</span> = '));
  oe_111007_32_s1.appendChild(maakBreuk('-1','5','opgave'));
  oe_111007_32_s1.appendChild(htmlSpan(' + <i>y</i> <span class="markeer-lila">+ '));
  oe_111007_32_s1.appendChild(b06);
  oe_111007_32_s1.appendChild(htmlSpan('</span>'));
  oe_111007_32.appendChild(oe_111007_32_s1);

  const oe_111007_33 = document.createElement('span');
  const oe_111007_33_s1 = document.createElement('span');
  oe_111007_33_s1.appendChild(maakBreuk('1','10','opgave'));
  oe_111007_33_s1.appendChild(htmlSpan(' + '));
  oe_111007_33_s1.appendChild(maakBreuk('2','10','opgave'));
  oe_111007_33_s1.appendChild(htmlSpan(' = <i>y</i>'));
  oe_111007_33.appendChild(oe_111007_33_s1);

  const oe_111007_34 = document.createElement('span');
  const oe_111007_34_s1 = document.createElement('span');
  oe_111007_34_s1.appendChild(maakBreuk('3','10','opgave'));
  oe_111007_34_s1.appendChild(htmlSpan(' = <i>y</i>'));
  oe_111007_34.appendChild(oe_111007_34_s1);

  const inhoud = maakOefening({
    id:'oe_111007', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111007_8, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblE = maakOpTdaz('e', oe_111007_21, true);
  tdLblE.classList.add('kolom-rechts');
  trL1.appendChild(tdLblE);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_111007_9,
    oe_111007_10,
  ];
  const oplE = [
    oe_111007_22,
    oe_111007_23,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdE = maakSlTd(oplE[i], true);
    tdE.classList.add('kolom-rechts');
    tr.appendChild(tdE);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_111007_11, true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblF = maakOpTdaz('f', oe_111007_24, true);
  tdLblF.classList.add('kolom-rechts');
  trL2.appendChild(tdLblF);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_111007_12,
    oe_111007_13,
  ];
  const oplF = [
    oe_111007_25,
    oe_111007_26,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdF = maakSlTd(oplF[i], true);
    tdF.classList.add('kolom-rechts');
    tr.appendChild(tdF);
    tbody.appendChild(tr);
  }

  /* Rij 3: labels */
  const trL3 = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_111007_14, true);
  tdLblC.classList.add('kolom-links');
  trL3.appendChild(tdLblC);
  const tdLblG = maakOpTdaz('g', oe_111007_27, true);
  tdLblG.classList.add('kolom-rechts');
  trL3.appendChild(tdLblG);
  tbody.appendChild(trL3);

  /* Oplossingen rij 3 */
  const oplC = [
    oe_111007_15,
    oe_111007_16,
    null
  ];
  const oplG = [
    oe_111007_28,
    oe_111007_29,
    oe_111007_30
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-links');
    tr.appendChild(tdC);
    const tdG = maakSlTd(oplG[i], true);
    tdG.classList.add('kolom-rechts');
    tr.appendChild(tdG);
    tbody.appendChild(tr);
  }

  /* Rij 4: labels */
  const trL4 = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', oe_111007_17, true);
  tdLblD.classList.add('kolom-links');
  trL4.appendChild(tdLblD);
  const tdLblH = maakOpTdaz('h', oe_111007_31, true);
  tdLblH.classList.add('kolom-rechts');
  trL4.appendChild(tdLblH);
  tbody.appendChild(trL4);

  /* Oplossingen rij 4 */
  const oplD = [
    oe_111007_18,
    oe_111007_19,
    oe_111007_20
  ];
  const oplH = [
    oe_111007_32,
    oe_111007_33,
    oe_111007_34
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdD = maakSlTd(oplD[i], true);
    tdD.classList.add('kolom-links');
    tr.appendChild(tdD);
    const tdH = maakSlTd(oplH[i], true);
    tdH.classList.add('kolom-rechts');
    tr.appendChild(tdH);
    tbody.appendChild(tr);
  }

})();
