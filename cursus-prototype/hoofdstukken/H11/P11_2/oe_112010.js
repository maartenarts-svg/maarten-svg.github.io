/* ============================================================
   H11 / P11_2 / oe_112010.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- a --- */
  const oe_112010_a1 = document.createElement('span');
  oe_112010_a1.appendChild(htmlSpan('2<i>x</i> + 73 = -5<i>x</i> + 3'));

  const oe_112010_a2 = document.createElement('span');
  oe_112010_a2.appendChild(htmlSpan('2<i>x</i> + 73 <span class="markeer-lila">- 73 + 5<i>x</i></span> = -5<i>x</i> + 3 <span class="markeer-lila">- 73 + 5<i>x</i></span>'));

  const oe_112010_a3 = document.createElement('span');
  oe_112010_a3.appendChild(htmlSpan('7<i>x</i> = -70'));

  const oe_112010_a4 = document.createElement('span');
  oe_112010_a4.appendChild(htmlSpan('7<i>x</i> <span class="markeer-lila">: 7</span> = -70 <span class="markeer-lila">: 7</span>'));

  const oe_112010_a5 = document.createElement('span');
  oe_112010_a5.appendChild(htmlSpan('<i>x</i> = -10'));

  const oe_112010_a6 = document.createElement('span');
  oe_112010_a6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112010_a6.appendChild(htmlSpan('2 · (-10) + 73 = 53'));

  const oe_112010_a7 = document.createElement('span');
  oe_112010_a7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112010_a7.appendChild(htmlSpan('-5 · (-10) + 3 = 53'));

  /* --- b --- */
  const oe_112010_b1 = document.createElement('span');
  oe_112010_b1.appendChild(htmlSpan('-6<i>s</i> - 8 + <i>s</i> = -7<i>s</i> + 11'));

  const oe_112010_b2 = document.createElement('span');
  oe_112010_b2.appendChild(htmlSpan('-6<i>s</i> - 8 + <i>s</i> <span class="markeer-lila">+ 8 + 7<i>s</i></span> = -7<i>s</i> + 11 <span class="markeer-lila">+ 8 + 7<i>s</i></span>'));

  const oe_112010_b3 = document.createElement('span');
  oe_112010_b3.appendChild(htmlSpan('2<i>s</i> = 19'));

  const oe_112010_b4 = document.createElement('span');
  oe_112010_b4.appendChild(htmlSpan('2<i>s</i> <span class="markeer-lila">: 2</span> = 19 <span class="markeer-lila">: 2</span>'));

  const oe_112010_b5 = document.createElement('span');
  oe_112010_b5.appendChild(htmlSpan('<i>s</i> = 9,5'));

  const oe_112010_b6 = document.createElement('span');
  oe_112010_b6.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112010_b6.appendChild(htmlSpan('-6 · 9,5 - 8 + 9,5 = -55,5'));

  const oe_112010_b7 = document.createElement('span');
  oe_112010_b7.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112010_b7.appendChild(htmlSpan('-7 · 9,5 + 11 = -55,5'));

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112010', nummer: '?', soort: 'test',
    niveaus: [], tools: [],
    toggleModus: 'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels a en b */
  {
    const tr = document.createElement('tr');
    const tdA = maakOpTdaz('a', oe_112010_a1, false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakOpTdaz('b', oe_112010_b1, false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  /* Oplossingen a en b */
  const oplA = [oe_112010_a2, oe_112010_a3, oe_112010_a4, oe_112010_a5, oe_112010_a6, oe_112010_a7];
  const oplB = [oe_112010_b2, oe_112010_b3, oe_112010_b4, oe_112010_b5, oe_112010_b6, oe_112010_b7];
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

})();
