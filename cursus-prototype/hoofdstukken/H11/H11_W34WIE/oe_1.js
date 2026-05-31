/* ============================================================
   H11 / H11_W34WIE / oe_1.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* Antwoordwaarde b = 4/3 (lila, voor hergebruik in controle) */
  const b02 = document.createElement('span');
  b02.appendChild(maakBreuk('4','3','opgave'));
  b02.classList.add('markeer-lila');

  /* --- Oefening a: 3x + 14 = 7x - 10  →  x = 6 --- */

  const oe_1_5 = document.createElement('span');
  oe_1_5.appendChild(htmlSpan('3<i>x</i> + 14 = 7<i>x</i> − 10'));

  const oe_1_6 = document.createElement('span');
  oe_1_6.appendChild(htmlSpan('14 <span class="markeer-lila">+ 10</span> = 7<i>x</i> <span class="markeer-lila">− 3<i>x</i></span>'));

  const oe_1_7 = document.createElement('span');
  oe_1_7.appendChild(htmlSpan('24 = 4<i>x</i>'));

  const oe_1_8 = document.createElement('span');
  oe_1_8.appendChild(htmlSpan('24 <span class="markeer-lila">: 4</span> = <i>x</i>'));

  const oe_1_9 = document.createElement('span');
  oe_1_9.appendChild(htmlSpan('<i>x</i> = 6'));

  const oe_1_10 = document.createElement('span');
  const oe_1_10_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_1_10.appendChild(oe_1_10_b1);
  oe_1_10.appendChild(htmlSpan('3 · <span class="markeer-lila">6</span> + 14 = 18 + 14 = 32'));

  const oe_1_11 = document.createElement('span');
  const oe_1_11_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_1_11.appendChild(oe_1_11_b1);
  oe_1_11.appendChild(htmlSpan('7 · <span class="markeer-lila">6</span> − 10 = 42 − 10 = 32'));

  /* --- Oefening b: 8p + 11 = 11p + 7  →  p = 4/3 --- */

  const oe_1_12 = document.createElement('span');
  oe_1_12.appendChild(htmlSpan('8<i>p</i> + 11 = 11<i>p</i> + 7'));

  const oe_1_13 = document.createElement('span');
  oe_1_13.appendChild(htmlSpan('11 <span class="markeer-lila">− 7</span> = 11<i>p</i> <span class="markeer-lila">− 8<i>p</i></span>'));

  const oe_1_14 = document.createElement('span');
  oe_1_14.appendChild(htmlSpan('4 = 3<i>p</i>'));

  const oe_1_15 = document.createElement('span');
  oe_1_15.appendChild(htmlSpan('4 <span class="markeer-lila">: 3</span> = <i>p</i>'));

  const oe_1_16 = document.createElement('span');
  const oe_1_16_s1 = document.createElement('span');
  oe_1_16_s1.appendChild(maakBreuk('4','3','opgave'));
  oe_1_16_s1.appendChild(htmlSpan(' = <i>p</i>'));
  oe_1_16.appendChild(oe_1_16_s1);

  const oe_1_17 = document.createElement('span');
  const oe_1_17_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_1_17.appendChild(oe_1_17_b1);
  const oe_1_17_s2 = document.createElement('span');
  oe_1_17_s2.appendChild(htmlSpan('8 · '));
  oe_1_17_s2.appendChild(b02.cloneNode(true));
  oe_1_17_s2.appendChild(htmlSpan(' + 11 = '));
  oe_1_17_s2.appendChild(maakBreuk('32','3','opgave'));
  oe_1_17_s2.appendChild(htmlSpan(' + '));
  oe_1_17_s2.appendChild(maakBreuk('33','3','opgave'));
  oe_1_17_s2.appendChild(htmlSpan(' = '));
  oe_1_17_s2.appendChild(maakBreuk('65','3','opgave'));
  oe_1_17.appendChild(oe_1_17_s2);

  const oe_1_18 = document.createElement('span');
  const oe_1_18_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_1_18.appendChild(oe_1_18_b1);
  const oe_1_18_s2 = document.createElement('span');
  oe_1_18_s2.appendChild(htmlSpan('11 · '));
  oe_1_18_s2.appendChild(b02.cloneNode(true));
  oe_1_18_s2.appendChild(htmlSpan(' + 7 = '));
  oe_1_18_s2.appendChild(maakBreuk('44','3','opgave'));
  oe_1_18_s2.appendChild(htmlSpan(' + '));
  oe_1_18_s2.appendChild(maakBreuk('21','3','opgave'));
  oe_1_18_s2.appendChild(htmlSpan(' = '));
  oe_1_18_s2.appendChild(maakBreuk('65','3','opgave'));
  oe_1_18.appendChild(oe_1_18_s2);

  /* ---- Opbouw oefening ---- */
  const inhoud = maakOefening({
    id:'oe_1', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.<br>Controleer je oplossing.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij: opgave a en b */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_1_5, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('b', oe_1_12, true);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingsrijen */
  const oplA = [
    oe_1_6,
    oe_1_7,
    oe_1_8,
    oe_1_9,
    oe_1_10,
    oe_1_11,
    null,
    null
  ];
  const oplC = [
    oe_1_13,
    oe_1_14,
    oe_1_15,
    oe_1_16,
    oe_1_17,
    oe_1_18,
    null,
    null
  ];
  for (let i = 0; i < 8; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

})();
