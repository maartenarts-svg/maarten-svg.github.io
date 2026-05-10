/* ============================================================
   H11 / P11_1 / oe_111501.js
   soort: ontdek
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111501_1 = document.createElement('span');
  oe_111501_1.appendChild(htmlSpan('<i>x</i> + 5 = -2'));

  const oe_111501_2 = document.createElement('span');
  oe_111501_2.appendChild(htmlSpan('<i>x</i> + 5 <span class="markeer-lila">- 5</span> = -2 <span class="markeer-lila">- 5</span>'));

  const oe_111501_3 = document.createElement('span');
  oe_111501_3.appendChild(htmlSpan('<i>x</i> = -7'));

  const oe_111501_4 = document.createElement('span');
  oe_111501_4.appendChild(htmlSpan('10 = <i>x</i> - 4'));

  const oe_111501_5 = document.createElement('span');
  oe_111501_5.appendChild(htmlSpan('10 <span class="markeer-lila">+ 4</span> = <i>x</i> - 4 <span class="markeer-lila">+ 4</span>'));

  const oe_111501_6 = document.createElement('span');
  oe_111501_6.appendChild(htmlSpan('14 = <i>x</i>'));

  const oe_111501_7 = document.createElement('span');
  oe_111501_7.appendChild(htmlSpan('4<i>x</i> = 12'));

  const oe_111501_8 = document.createElement('span');
  oe_111501_8.appendChild(htmlSpan('4<i>x</i> <span class="markeer-lila">: 4</span> = 12 <span class="markeer-lila">: 4</span>'));

  const oe_111501_9 = document.createElement('span');
  oe_111501_9.appendChild(htmlSpan('<i>x</i> = 3'));

  const oe_111501_10 = document.createElement('span');
  oe_111501_10.appendChild(htmlSpan('-24 = 3<i>x</i>'));

  const oe_111501_11 = document.createElement('span');
  oe_111501_11.appendChild(htmlSpan('-24 <span class="markeer-lila">: 3</span> = 3<i>x</i> <span class="markeer-lila">: 3</span>'));

  const oe_111501_12 = document.createElement('span');
  oe_111501_12.appendChild(htmlSpan('-5 = <i>x</i>'));

  const inhoud = maakOefening({
    id:'oe_111501', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los op zonder de balans.<br>Controleer daarna met de <a href="https://maartenarts-svg.github.io/helperapps/vergelijkingenFALSE.html" target="_blank" rel="noopener noreferrer">balans</a>.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111501_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_111501_7, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_111501_2,
    oe_111501_3
  ];
  const oplC = [
    oe_111501_8,
    oe_111501_9
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
  const tdLblB = maakOpTdaz('b', oe_111501_4, false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_111501_10, false);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_111501_5,
    oe_111501_6
  ];
  const oplD = [
    oe_111501_11,
    oe_111501_12
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
