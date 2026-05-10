/* ============================================================
   H11 / P11_2 / oe_112007.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- a --- */
  const oe_112007_a1 = document.createElement('span');
  oe_112007_a1.appendChild(htmlSpan('7<i>a</i> + 12 = 47'));

  const oe_112007_a2 = document.createElement('span');
  oe_112007_a2.appendChild(htmlSpan('7<i>a</i> + 12 <span class="markeer-lila">-12</span> = 47 <span class="markeer-lila">-12</span>'));

  const oe_112007_a3 = document.createElement('span');
  oe_112007_a3.appendChild(htmlSpan('7<i>a</i> = 35'));

  const oe_112007_a4 = document.createElement('span');
  oe_112007_a4.appendChild(htmlSpan('7<i>a</i> <span class="markeer-lila">: 7</span> = 35 <span class="markeer-lila">: 7</span>'));

  const oe_112007_a5 = document.createElement('span');
  oe_112007_a5.appendChild(htmlSpan('<i>a</i> = 5'));

  const oe_112007_a6 = document.createElement('span');
  oe_112007_a6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112007_a6.appendChild(htmlSpan('7 · 5 + 12 = 47'));

  const oe_112007_a7 = document.createElement('span');
  oe_112007_a7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112007_a7.appendChild(htmlSpan('47'));

  /* --- b --- */
  const oe_112007_b1 = document.createElement('span');
  oe_112007_b1.appendChild(htmlSpan('35 = -4<i>x</i> + 11'));

  const oe_112007_b2 = document.createElement('span');
  oe_112007_b2.appendChild(htmlSpan('35 <span class="markeer-lila">- 11</span> = -4<i>x</i> + 11 <span class="markeer-lila">- 11</span>'));

  const oe_112007_b3 = document.createElement('span');
  oe_112007_b3.appendChild(htmlSpan('24 = -4<i>x</i>'));

  const oe_112007_b4 = document.createElement('span');
  const oe_112007_b4_s1 = document.createElement('span');
  oe_112007_b4_s1.appendChild(htmlSpan('24 <span class="markeer-lila">: (-4)</span> = 4<i>x</i> <span class="markeer-lila">: (-4)</span>'));
  oe_112007_b4.appendChild(oe_112007_b4_s1);

  const oe_112007_b5 = document.createElement('span');
  oe_112007_b5.appendChild(htmlSpan('-6 = <i>x</i>'));

  const oe_112007_b6 = document.createElement('span');
  oe_112007_b6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112007_b6.appendChild(htmlSpan('35'));

  const oe_112007_b7 = document.createElement('span');
  oe_112007_b7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112007_b7.appendChild(htmlSpan('-4 · (-6) + 11 = 35'));

  /* --- c --- */
  const oe_112007_c1 = document.createElement('span');
  oe_112007_c1.appendChild(htmlSpan('9<i>b</i> = 5<i>b</i> + 28'));

  const oe_112007_c2 = document.createElement('span');
  oe_112007_c2.appendChild(htmlSpan('9<i>b</i> <span class="markeer-lila">- 5<i>b</i></span> = 5<i>b</i> + 28 <span class="markeer-lila">- 5<i>b</i></span>'));

  const oe_112007_c3 = document.createElement('span');
  oe_112007_c3.appendChild(htmlSpan('4<i>b</i> = 28'));

  const oe_112007_c4 = document.createElement('span');
  oe_112007_c4.appendChild(htmlSpan('4<i>b</i> <span class="markeer-lila">: 4</span> = 28 <span class="markeer-lila">: 4</span>'));

  const oe_112007_c5 = document.createElement('span');
  oe_112007_c5.appendChild(htmlSpan('<i>b</i> = 7'));

  const oe_112007_c6 = document.createElement('span');
  oe_112007_c6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112007_c6.appendChild(htmlSpan('9 · 7 = 63'));

  const oe_112007_c7 = document.createElement('span');
  oe_112007_c7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112007_c7.appendChild(htmlSpan('5 · 7 + 28 = 63'));

  /* --- d --- */
  const oe_112007_d1 = document.createElement('span');
  oe_112007_d1.appendChild(htmlSpan('21 + 5<i>y</i> = 3<i>y</i>'));

  const oe_112007_d2 = document.createElement('span');
  oe_112007_d2.appendChild(htmlSpan('21 + 5<i>y</i> <span class="markeer-lila">- 5<i>y</i></span> = 3<i>y</i> <span class="markeer-lila">- 5<i>y</i></span>'));

  const oe_112007_d3 = document.createElement('span');
  oe_112007_d3.appendChild(htmlSpan('21 = -2<i>y</i>'));

  const oe_112007_d4 = document.createElement('span');
  oe_112007_d4.appendChild(htmlSpan('21 <span class="markeer-lila">: (-2)</span> = -2<i>y</i> <span class="markeer-lila">: (-2)</span>'));

  const oe_112007_d5 = document.createElement('span');
  oe_112007_d5.appendChild(htmlSpan('-10,5 = <i>y</i>'));

  const oe_112007_d6 = document.createElement('span');
  oe_112007_d6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112007_d6.appendChild(htmlSpan('21 + 5 · (-10,5) = -31,5'));

  const oe_112007_d7 = document.createElement('span');
  oe_112007_d7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112007_d7.appendChild(htmlSpan('3 · (-10,5) = -31,5'));

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112007', nummer: '?', soort: 'test',
    niveaus: [], tools: [],
    toggleModus: 'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels a en c */
  {
    const tr = document.createElement('tr');
    const tdA = maakOpTdaz('a', oe_112007_a1, false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakOpTdaz('c', oe_112007_c1, false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Oplossingen a en c */
  const oplA = [oe_112007_a2, oe_112007_a3, oe_112007_a4, oe_112007_a5, oe_112007_a6, oe_112007_a7];
  const oplC = [oe_112007_c2, oe_112007_c3, oe_112007_c4, oe_112007_c5, oe_112007_c6, oe_112007_c7];
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels b en d */
  {
    const tr = document.createElement('tr');
    const tdB = maakOpTdaz('b', oe_112007_b1, false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakOpTdaz('d', oe_112007_d1, false);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

  /* Oplossingen b en d */
  const oplB = [oe_112007_b2, oe_112007_b3, oe_112007_b4, oe_112007_b5, oe_112007_b6, oe_112007_b7];
  const oplD = [oe_112007_d2, oe_112007_d3, oe_112007_d4, oe_112007_d5, oe_112007_d6, oe_112007_d7];
  for (let i = 0; i < 6; i++) {
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
