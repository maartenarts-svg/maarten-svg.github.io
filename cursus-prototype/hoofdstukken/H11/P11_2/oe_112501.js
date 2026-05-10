/* ============================================================
   H11 / P11_2 / oe_112501.js
   soort: oefening
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- g --- */
  const oe_112501_g1 = document.createElement('span');
  oe_112501_g1.appendChild(htmlSpan('0,5<i>x</i> + 3 = 3<i>x</i> - 7'));

  const oe_112501_g2 = document.createElement('span');
  oe_112501_g2.appendChild(htmlSpan('0,5<i>x</i> + 3 <span class="markeer-lila">- 3 - 3<i>x</i></span> = 3<i>x</i> - 7 <span class="markeer-lila">- 3 - 3<i>x</i></span>'));

  const oe_112501_g3 = document.createElement('span');
  oe_112501_g3.appendChild(htmlSpan('-2,5<i>x</i> = -10'));

  const oe_112501_g4 = document.createElement('span');
  oe_112501_g4.appendChild(htmlSpan('-2,5<i>x</i> <span class="markeer-lila">: (-2,5)</span> = -10 <span class="markeer-lila">: (-2,5)</span>'));

  const oe_112501_g5 = document.createElement('span');
  oe_112501_g5.appendChild(htmlSpan('<i>x</i> = 4'));

  const oe_112501_g6 = document.createElement('span');
  oe_112501_g6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112501_g6.appendChild(htmlSpan('0,5 · 4 + 3 = 5'));

  const oe_112501_g7 = document.createElement('span');
  oe_112501_g7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112501_g7.appendChild(htmlSpan('3 · 4 - 7 = 5'));

  /* --- h --- */
  const oe_112501_h1 = document.createElement('span');
  oe_112501_h1.appendChild(htmlSpan('4<i>b</i> - 2<i>b</i> + 1 = 4 + 5<i>b</i> - 8'));

  const oe_112501_h2 = document.createElement('span');
  oe_112501_h2.appendChild(htmlSpan('4<i>b</i> - 2<i>b</i> + 1 <span class="markeer-lila">- 1 - 5<i>b</i></span> = 4 + 5<i>b</i> - 8 <span class="markeer-lila">- 1 - 5<i>b</i></span>'));

  const oe_112501_h3 = document.createElement('span');
  oe_112501_h3.appendChild(htmlSpan('-3<i>b</i> = -5'));

  const oe_112501_h4 = document.createElement('span');
  oe_112501_h4.appendChild(htmlSpan('-3<i>b</i> <span class="markeer-lila">: (-3)</span> = -5 <span class="markeer-lila">: (-3)</span>'));

  const oe_112501_h5 = document.createElement('span');
  const oe_112501_h5_s = document.createElement('span');
  oe_112501_h5_s.appendChild(htmlSpan('<i>b</i> = '));
  oe_112501_h5_s.appendChild(maakBreuk('5', '3', 'opgave'));
  oe_112501_h5.appendChild(oe_112501_h5_s);

  const oe_112501_h6 = document.createElement('span');
  const oe_112501_h6_s = document.createElement('span');
  oe_112501_h6_s.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112501_h6_s.appendChild(htmlSpan('4 · '));
  oe_112501_h6_s.appendChild(maakBreuk('5', '3', 'opgave'));
  oe_112501_h6_s.appendChild(htmlSpan(' - 2 · '));
  oe_112501_h6_s.appendChild(maakBreuk('5', '3', 'opgave'));
  oe_112501_h6_s.appendChild(htmlSpan(' + 1 = '));
  oe_112501_h6_s.appendChild(maakBreuk('20', '3', 'opgave'));
  oe_112501_h6_s.appendChild(htmlSpan(' - '));
  oe_112501_h6_s.appendChild(maakBreuk('10', '3', 'opgave'));
  oe_112501_h6_s.appendChild(htmlSpan(' + '));
  oe_112501_h6_s.appendChild(maakBreuk('3', '3', 'opgave'));
  oe_112501_h6_s.appendChild(htmlSpan(' = '));
  oe_112501_h6_s.appendChild(maakBreuk('13', '3', 'opgave'));
  oe_112501_h6.appendChild(oe_112501_h6_s);

  const oe_112501_h7 = document.createElement('span');
  const oe_112501_h7_s = document.createElement('span');
  oe_112501_h7_s.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112501_h7_s.appendChild(htmlSpan('4 + 5 · '));
  oe_112501_h7_s.appendChild(maakBreuk('5', '3', 'opgave'));
  oe_112501_h7_s.appendChild(htmlSpan(' - 8 = '));
  oe_112501_h7_s.appendChild(maakBreuk('12', '3', 'opgave'));
  oe_112501_h7_s.appendChild(htmlSpan(' + '));
  oe_112501_h7_s.appendChild(maakBreuk('25', '3', 'opgave'));
  oe_112501_h7_s.appendChild(htmlSpan(' - '));
  oe_112501_h7_s.appendChild(maakBreuk('24', '3', 'opgave'));
  oe_112501_h7_s.appendChild(htmlSpan(' = '));
  oe_112501_h7_s.appendChild(maakBreuk('13', '3', 'opgave'));
  oe_112501_h7.appendChild(oe_112501_h7_s);

  /* --- i --- */
  const oe_112501_i1 = document.createElement('span');
  oe_112501_i1.appendChild(htmlSpan('-<i>k</i> - 6 + 5<i>k</i> = -12<i>k</i> + 2'));

  const oe_112501_i2 = document.createElement('span');
  oe_112501_i2.appendChild(htmlSpan('-<i>k</i> - 6 + 5<i>k</i> <span class="markeer-lila">+ 6 + 12<i>k</i></span> = -12<i>k</i> + 2 <span class="markeer-lila">+ 6 + 12<i>k</i></span>'));

  const oe_112501_i3 = document.createElement('span');
  oe_112501_i3.appendChild(htmlSpan('16<i>k</i> = 8'));

  const oe_112501_i4 = document.createElement('span');
  oe_112501_i4.appendChild(htmlSpan('16<i>k</i> <span class="markeer-lila">: 16</span> = 8 <span class="markeer-lila">: 16</span>'));

  const oe_112501_i5 = document.createElement('span');
  oe_112501_i5.appendChild(htmlSpan('<i>k</i> = 0,5'));

  const oe_112501_i6 = document.createElement('span');
  oe_112501_i6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112501_i6.appendChild(htmlSpan('-0,5 - 6 + 5 · 0,5 = -4'));

  const oe_112501_i7 = document.createElement('span');
  oe_112501_i7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112501_i7.appendChild(htmlSpan('-12 · 0,5 + 2 = -4'));

  /* --- j --- */
  const oe_112501_j1 = document.createElement('span');
  oe_112501_j1.appendChild(htmlSpan('17 - 3<i>r</i> = 5 + 2<i>r</i> + 12'));

  const oe_112501_j2 = document.createElement('span');
  oe_112501_j2.appendChild(htmlSpan('17 - 3<i>r</i> <span class="markeer-lila">- 17 + 3<i>r</i></span> = 5 + 2<i>r</i> + 12 <span class="markeer-lila">- 17 + 3<i>r</i></span>'));

  const oe_112501_j3 = document.createElement('span');
  oe_112501_j3.appendChild(htmlSpan('0 = 5<i>r</i>'));

  const oe_112501_j4 = document.createElement('span');
  oe_112501_j4.appendChild(htmlSpan('0 <span class="markeer-lila">: 5</span> = 5<i>r</i> <span class="markeer-lila">: 5</span>'));

  const oe_112501_j5 = document.createElement('span');
  oe_112501_j5.appendChild(htmlSpan('0 = <i>r</i>'));

  const oe_112501_j6 = document.createElement('span');
  oe_112501_j6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112501_j6.appendChild(htmlSpan('17 - 3 · 0 = 17'));

  const oe_112501_j7 = document.createElement('span');
  oe_112501_j7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112501_j7.appendChild(htmlSpan('5 + 2 · 0 + 12 = 17'));

  /* --- c --- */
  const oe_112014_c1 = document.createElement('span');
  const oe_112014_c1_s = document.createElement('span');
  oe_112014_c1_s.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c1_s.appendChild(htmlSpan('<i>x</i> + <i>x</i> + 1 = '));
  oe_112014_c1_s.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c1_s.appendChild(htmlSpan('<i>x</i>'));
  oe_112014_c1.appendChild(oe_112014_c1_s);

  const oe_112014_c2 = document.createElement('span');
  const oe_112014_c2_s = document.createElement('span');
  oe_112014_c2_s.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c2_s.appendChild(htmlSpan('<i>x</i> + <i>x</i> + 1 '));
  const oe_112014_c2_lila = document.createElement('span');
  oe_112014_c2_lila.appendChild(htmlSpan('- '));
  oe_112014_c2_lila.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c2_lila.appendChild(htmlSpan('<i>x</i> - <i>x</i>'));
  oe_112014_c2_lila.style.color = '#d500f9';
  oe_112014_c2_s.appendChild(oe_112014_c2_lila);
  oe_112014_c2_s.appendChild(htmlSpan(' = '));
  oe_112014_c2_s.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c2_s.appendChild(htmlSpan('<i>x</i> '));
  oe_112014_c2_s.appendChild(oe_112014_c2_lila.cloneNode(true));
  oe_112014_c2.appendChild(oe_112014_c2_s);

  const oe_112014_c3 = document.createElement('span');
  oe_112014_c3.appendChild(htmlSpan('1 = -<i>x</i>'));

  const oe_112014_c4 = document.createElement('span');
  oe_112014_c4.appendChild(htmlSpan('1 <span class="markeer-lila">: (-1)</span> = -<i>x</i> <span class="markeer-lila">: (-1)</span>'));

  const oe_112014_c5 = document.createElement('span');
  oe_112014_c5.appendChild(htmlSpan('-1 = <i>x</i>'));

  const oe_112014_c6 = document.createElement('span');
  const oe_112014_c6_s = document.createElement('span');
  oe_112014_c6_s.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112014_c6_s.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c6_s.appendChild(htmlSpan(' · (-1) + (-1) + 1 = '));
  oe_112014_c6_s.appendChild(maakBreuk('-1', '4', 'opgave'));
  oe_112014_c6.appendChild(oe_112014_c6_s);

  const oe_112014_c7 = document.createElement('span');
  const oe_112014_c7_s = document.createElement('span');
  oe_112014_c7_s.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112014_c7_s.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c7_s.appendChild(htmlSpan(' · (-1) = -'));
  oe_112014_c7_s.appendChild(maakBreuk('1', '4', 'opgave'));
  oe_112014_c7.appendChild(oe_112014_c7_s);

  /* --- f --- */
  const oe_112014_f1 = document.createElement('span');
  const oe_112014_f1_s = document.createElement('span');
  oe_112014_f1_s.appendChild(maakBreuk('3', '4', 'opgave'));
  oe_112014_f1_s.appendChild(htmlSpan('<i>s</i> = 33 - 2<i>s</i>'));
  oe_112014_f1.appendChild(oe_112014_f1_s);

  const oe_112014_f2 = document.createElement('span');
  const oe_112014_f2_s = document.createElement('span');
  oe_112014_f2_s.appendChild(maakBreuk('3', '4', 'opgave'));
  oe_112014_f2_s.appendChild(htmlSpan('<i>s</i> '));
  const oe_112014_f2_lila = document.createElement('span');
  oe_112014_f2_lila.appendChild(htmlSpan('+ 2<i>s</i>'));
  oe_112014_f2_lila.style.color = '#d500f9';
  oe_112014_f2_s.appendChild(oe_112014_f2_lila);
  oe_112014_f2_s.appendChild(htmlSpan(' = 33 - 2<i>s</i> '));
  oe_112014_f2_s.appendChild(oe_112014_f2_lila.cloneNode(true));
  oe_112014_f2.appendChild(oe_112014_f2_s);

  const oe_112014_f3 = document.createElement('span');
  const oe_112014_f3_s = document.createElement('span');
  oe_112014_f3_s.appendChild(maakBreuk('3', '4', 'opgave'));
  oe_112014_f3_s.appendChild(htmlSpan('<i>s</i> + '));
  oe_112014_f3_s.appendChild(maakBreuk('8', '4', 'opgave'));
  oe_112014_f3_s.appendChild(htmlSpan('<i>s</i> = 33'));
  oe_112014_f3.appendChild(oe_112014_f3_s);

  const oe_112014_f4 = document.createElement('span');
  const oe_112014_f4_s = document.createElement('span');
  oe_112014_f4_s.appendChild(maakBreuk('11', '4', 'opgave'));
  oe_112014_f4_s.appendChild(htmlSpan('<i>s</i> = 33'));
  oe_112014_f4.appendChild(oe_112014_f4_s);

  const oe_112014_f5 = document.createElement('span');
  const oe_112014_f5_s = document.createElement('span');
  oe_112014_f5_s.appendChild(maakBreuk('11', '4', 'opgave'));
  oe_112014_f5_s.appendChild(htmlSpan('<i>s</i> '));
  const oe_112014_f5_lila = document.createElement('span');
  oe_112014_f5_lila.appendChild(htmlSpan(': '));
  oe_112014_f5_lila.appendChild(maakBreuk('11', '4', 'opgave'));
  oe_112014_f5_lila.style.color = '#d500f9';
  oe_112014_f5_s.appendChild(oe_112014_f5_lila);
  oe_112014_f5_s.appendChild(htmlSpan(' = 33 '));
  oe_112014_f5_s.appendChild(oe_112014_f5_lila.cloneNode(true));
  oe_112014_f5.appendChild(oe_112014_f5_s);

  const oe_112014_f6 = document.createElement('span');
  const oe_112014_f6_s = document.createElement('span');
  oe_112014_f6_s.appendChild(htmlSpan('<i>s</i> = 33 · '));
  oe_112014_f6_s.appendChild(maakBreuk('4', '11', 'opgave'));
  oe_112014_f6.appendChild(oe_112014_f6_s);

  const oe_112014_f7 = document.createElement('span');
  oe_112014_f7.appendChild(htmlSpan('<i>s</i> = 12'));

  const oe_112014_f8 = document.createElement('span');
  const oe_112014_f8_s = document.createElement('span');
  oe_112014_f8_s.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112014_f8_s.appendChild(maakBreuk('3', '4', 'opgave'));
  oe_112014_f8_s.appendChild(htmlSpan(' · 12 = 9'));
  oe_112014_f8.appendChild(oe_112014_f8_s);

  const oe_112014_f9 = document.createElement('span');
  oe_112014_f9.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112014_f9.appendChild(htmlSpan('33 - 2 · 12 = 9'));  

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112501', nummer: '?', soort: 'oefening',
    niveaus: ['cirkel', 'vierkant', 'zeshoek'], tools: [],
    toggleModus: 'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

    /* ---- Rij 3: c en f ---- */
  {
    const tr = document.createElement('tr');
    const tdC = maakOpTdaz('a', oe_112014_c1, true);
    tdC.classList.add('kolom-links');
    tr.appendChild(tdC);
    const tdF = maakOpTdaz('d', oe_112014_f1, true);
    tdF.classList.add('kolom-rechts');
    tr.appendChild(tdF);
    tbody.appendChild(tr);
  }
  {
    const oplC = [oe_112014_c2, oe_112014_c3, oe_112014_c4, oe_112014_c5, oe_112014_c6, oe_112014_c7];
    const oplF = [oe_112014_f2, oe_112014_f3, oe_112014_f4, oe_112014_f5, oe_112014_f6, oe_112014_f7, oe_112014_f8, oe_112014_f9];
    const maxRijen = Math.max(oplC.length, oplF.length);
    for (let i = 0; i < maxRijen; i++) {
      const tr = document.createElement('tr');
      const tdC = maakSlTd(oplC[i] || null, true);
      tdC.classList.add('kolom-links');
      tr.appendChild(tdC);
      const tdF = maakSlTd(oplF[i], true);
      tdF.classList.add('kolom-rechts');
      tr.appendChild(tdF);
      tbody.appendChild(tr);
    }
  }

  /* ---- Rij 1: g en i ---- */
  {
    const tr = document.createElement('tr');
    const tdG = maakOpTdaz('b', oe_112501_g1, false);
    tdG.classList.add('kolom-links');
    tr.appendChild(tdG);
    const tdI = maakOpTdaz('e', oe_112501_i1, false);
    tdI.classList.add('kolom-rechts');
    tr.appendChild(tdI);
    tbody.appendChild(tr);
  }
  {
    const oplG = [oe_112501_g2, oe_112501_g3, oe_112501_g4, oe_112501_g5, oe_112501_g6, oe_112501_g7];
    const oplI = [oe_112501_i2, oe_112501_i3, oe_112501_i4, oe_112501_i5, oe_112501_i6, oe_112501_i7];
    for (let i = 0; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdG = maakSlTd(oplG[i], false);
      tdG.classList.add('kolom-links');
      tr.appendChild(tdG);
      const tdI = maakSlTd(oplI[i], false);
      tdI.classList.add('kolom-rechts');
      tr.appendChild(tdI);
      tbody.appendChild(tr);
    }
  }

  /* ---- Rij 2: h en j ---- */
  {
    const tr = document.createElement('tr');
    const tdH = maakOpTdaz('c', oe_112501_h1, false);
    tdH.classList.add('kolom-links');
    tr.appendChild(tdH);
    const tdJ = maakOpTdaz('f', oe_112501_j1, false);
    tdJ.classList.add('kolom-rechts');
    tr.appendChild(tdJ);
    tbody.appendChild(tr);
  }
  {
    const oplH = [oe_112501_h2, oe_112501_h3, oe_112501_h4, oe_112501_h5, oe_112501_h6, oe_112501_h7];
    const oplJ = [oe_112501_j2, oe_112501_j3, oe_112501_j4, oe_112501_j5, oe_112501_j6, oe_112501_j7];
    for (let i = 0; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdH = maakSlTd(oplH[i], false);
      tdH.classList.add('kolom-links');
      tr.appendChild(tdH);
      const tdJ = maakSlTd(oplJ[i], false);
      tdJ.classList.add('kolom-rechts');
      tr.appendChild(tdJ);
      tbody.appendChild(tr);
    }
  }

})();
