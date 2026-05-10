/* ============================================================
   H11 / P11_2 / oe_112014.js
   soort: oefening
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- a --- */
  const oe_112014_a1 = document.createElement('span');
  oe_112014_a1.appendChild(htmlSpan('4<i>t</i> + 5 = 6<i>t</i> - 9'));

  const oe_112014_a2 = document.createElement('span');
  oe_112014_a2.appendChild(htmlSpan('4<i>t</i> + 5 <span class="markeer-lila">- 5 - 6<i>t</i></span> = 6<i>t</i> - 9 <span class="markeer-lila">- 5 - 6<i>t</i></span>'));

  const oe_112014_a3 = document.createElement('span');
  oe_112014_a3.appendChild(htmlSpan('-2<i>t</i> = -14'));

  const oe_112014_a4 = document.createElement('span');
  oe_112014_a4.appendChild(htmlSpan('-2<i>t</i> <span class="markeer-lila">: (-2)</span> = -14 <span class="markeer-lila">: (-2)</span>'));

  const oe_112014_a5 = document.createElement('span');
  oe_112014_a5.appendChild(htmlSpan('<i>t</i> = 7'));

  const oe_112014_a6 = document.createElement('span');
  oe_112014_a6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112014_a6.appendChild(htmlSpan('4 · 7 + 5 = 33'));

  const oe_112014_a7 = document.createElement('span');
  oe_112014_a7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112014_a7.appendChild(htmlSpan('6 · 7 - 9 = 33'));

  /* --- b --- */
  const oe_112014_b1 = document.createElement('span');
  oe_112014_b1.appendChild(htmlSpan('18<i>y</i> - 3 = 12 + 3<i>y</i>'));

  const oe_112014_b2 = document.createElement('span');
  oe_112014_b2.appendChild(htmlSpan('18<i>y</i> - 3 <span class="markeer-lila">+ 3 - 3<i>y</i></span> = 12 + 3<i>y</i> <span class="markeer-lila">+ 3 - 3<i>y</i></span>'));

  const oe_112014_b3 = document.createElement('span');
  oe_112014_b3.appendChild(htmlSpan('15<i>y</i> = 15'));

  const oe_112014_b4 = document.createElement('span');
  oe_112014_b4.appendChild(htmlSpan('15<i>y</i> <span class="markeer-lila">: 15</span> = 15 <span class="markeer-lila">: 15</span>'));

  const oe_112014_b5 = document.createElement('span');
  oe_112014_b5.appendChild(htmlSpan('<i>y</i> = 1'));

  const oe_112014_b6 = document.createElement('span');
  oe_112014_b6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112014_b6.appendChild(htmlSpan('18 · 1 - 3 = 15'));

  const oe_112014_b7 = document.createElement('span');
  oe_112014_b7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112014_b7.appendChild(htmlSpan('12 + 3 · 1 = 15'));

  /* --- d --- */
  const oe_112014_d1 = document.createElement('span');
  oe_112014_d1.appendChild(htmlSpan('7<i>z</i> + 49 = 0'));

  const oe_112014_d2 = document.createElement('span');
  oe_112014_d2.appendChild(htmlSpan('7<i>z</i> + 49 <span class="markeer-lila">- 49</span> = 0 <span class="markeer-lila">- 49</span>'));

  const oe_112014_d3 = document.createElement('span');
  oe_112014_d3.appendChild(htmlSpan('7<i>z</i> = -49'));

  const oe_112014_d4 = document.createElement('span');
  oe_112014_d4.appendChild(htmlSpan('7<i>z</i> <span class="markeer-lila">: 7</span> = -49 <span class="markeer-lila">: 7</span>'));

  const oe_112014_d5 = document.createElement('span');
  oe_112014_d5.appendChild(htmlSpan('<i>z</i> = -7'));

  const oe_112014_d6 = document.createElement('span');
  oe_112014_d6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112014_d6.appendChild(htmlSpan('7 · (-7) + 49 = 0'));

  const oe_112014_d7 = document.createElement('span');
  oe_112014_d7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112014_d7.appendChild(htmlSpan('0'));

  /* --- e --- */
  const oe_112014_e1 = document.createElement('span');
  oe_112014_e1.appendChild(htmlSpan('6 - 2<i>a</i> + 12 = 22'));

  const oe_112014_e2 = document.createElement('span');
  oe_112014_e2.appendChild(htmlSpan('6 - 2<i>a</i> + 12 <span class="markeer-lila">- 6 - 12</span> = 22 <span class="markeer-lila">- 6 - 12</span>'));

  const oe_112014_e3 = document.createElement('span');
  oe_112014_e3.appendChild(htmlSpan('-2<i>a</i> = 4'));

  const oe_112014_e4 = document.createElement('span');
  oe_112014_e4.appendChild(htmlSpan('-2<i>a</i> <span class="markeer-lila">: (-2)</span> = 4 <span class="markeer-lila">: (-2)</span>'));

  const oe_112014_e5 = document.createElement('span');
  oe_112014_e5.appendChild(htmlSpan('<i>a</i> = -2'));

  const oe_112014_e6 = document.createElement('span');
  oe_112014_e6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112014_e6.appendChild(htmlSpan('6 - 2 · (-2) + 12 = 22'));

  const oe_112014_e7 = document.createElement('span');
  oe_112014_e7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112014_e7.appendChild(htmlSpan('22'));

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112014', nummer: '?', soort: 'oefening',
    niveaus: ['cirkel', 'vierkant', 'zeshoek'], tools: [],
    toggleModus: 'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* ---- Rij 1: a en d ---- */
  {
    const tr = document.createElement('tr');
    const tdA = maakOpTdaz('a', oe_112014_a1, false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdD = maakOpTdaz('c', oe_112014_d1, false);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }
  {
    const oplA = [oe_112014_a2, oe_112014_a3, oe_112014_a4, oe_112014_a5, oe_112014_a6, oe_112014_a7];
    const oplD = [oe_112014_d2, oe_112014_d3, oe_112014_d4, oe_112014_d5, oe_112014_d6, oe_112014_d7];
    for (let i = 0; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdA = maakSlTd(oplA[i], false);
      tdA.classList.add('kolom-links');
      tr.appendChild(tdA);
      const tdD = maakSlTd(oplD[i], false);
      tdD.classList.add('kolom-rechts');
      tr.appendChild(tdD);
      tbody.appendChild(tr);
    }
  }

  /* ---- Rij 2: b en e ---- */
  {
    const tr = document.createElement('tr');
    const tdB = maakOpTdaz('b', oe_112014_b1, false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdE = maakOpTdaz('d', oe_112014_e1, false);
    tdE.classList.add('kolom-rechts');
    tr.appendChild(tdE);
    tbody.appendChild(tr);
  }
  {
    const oplB = [oe_112014_b2, oe_112014_b3, oe_112014_b4, oe_112014_b5, oe_112014_b6, oe_112014_b7];
    const oplE = [oe_112014_e2, oe_112014_e3, oe_112014_e4, oe_112014_e5, oe_112014_e6, oe_112014_e7];
    for (let i = 0; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdB = maakSlTd(oplB[i], false);
      tdB.classList.add('kolom-links');
      tr.appendChild(tdB);
      const tdE = maakSlTd(oplE[i], false);
      tdE.classList.add('kolom-rechts');
      tr.appendChild(tdE);
      tbody.appendChild(tr);
    }
  }

})();
