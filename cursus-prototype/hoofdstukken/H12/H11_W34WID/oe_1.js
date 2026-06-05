/* ============================================================
   H11 / H11_W34WIB / oe_1.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const b02 = document.createElement('span');
  b02.appendChild(maakBreuk('5','3','opgave'));
  b02.classList.add('markeer-lila');

  const oe_1_5 = document.createElement('span');
  oe_1_5.appendChild(htmlSpan('7<i>x</i> + 4 = -12 + 5<i>x</i>'));

  const oe_1_6 = document.createElement('span');
  oe_1_6.appendChild(htmlSpan('7<i>x</i> <span class="markeer-lila">- 5<i>x</i></span> = -12 <span class="markeer-lila">- 4</span>'));

  const oe_1_8 = document.createElement('span');
  oe_1_8.appendChild(htmlSpan('2<i>x</i> = -16'));

  const oe_1_9 = document.createElement('span');
  oe_1_9.appendChild(htmlSpan('<i>x</i> = -16 <span class="markeer-lila">: 2</span>'));

  const oe_1_10 = document.createElement('span');
  oe_1_10.appendChild(htmlSpan('<i>x</i> = -8'));

  const oe_1_11 = document.createElement('span');
  const oe_1_11_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_1_11.appendChild(oe_1_11_b1);
  oe_1_11.appendChild(htmlSpan('7 · <span class="markeer-lila">(-8)</span> + 4 = -56 + 4 = -52'));

  const oe_1_12 = document.createElement('span');
  const oe_1_12_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_1_12.appendChild(oe_1_12_b1);
  oe_1_12.appendChild(htmlSpan('-12 + 5 · <span class="markeer-lila">(-8)</span> = -12 - 40 = -52'));

  const oe_1_13 = document.createElement('span');
  oe_1_13.appendChild(htmlSpan('12<i>y</i> + 23 = 15<i>y</i> + 18'));

  const oe_1_14 = document.createElement('span');
  oe_1_14.appendChild(htmlSpan('23 <span class="markeer-lila">- 18</span> = 15<i>y</i> <span class="markeer-lila">- 12<i>y</i></span>'));

  const oe_1_15 = document.createElement('span');
  oe_1_15.appendChild(htmlSpan('5 = 3<i>y</i>'));

  const oe_1_16 = document.createElement('span');
  oe_1_16.appendChild(htmlSpan('5 <span class="markeer-lila">: 3</span> = <i>y</i>'));

  const oe_1_17 = document.createElement('span');
  const oe_1_17_s1 = document.createElement('span');
  oe_1_17_s1.appendChild(maakBreuk('5','3','opgave'));
  oe_1_17_s1.appendChild(htmlSpan(' = <i>y</i>'));
  oe_1_17.appendChild(oe_1_17_s1);

  const oe_1_18 = document.createElement('span');
  const oe_1_18_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_1_18.appendChild(oe_1_18_b1);
  const oe_1_18_s2 = document.createElement('span');
  oe_1_18_s2.appendChild(htmlSpan('12 · '));
  oe_1_18_s2.appendChild(b02.cloneNode(true));
  oe_1_18_s2.appendChild(htmlSpan(' + 23 = 20 + 23 = 43'));
  oe_1_18.appendChild(oe_1_18_s2);

  const oe_1_19 = document.createElement('span');
  const oe_1_19_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_1_19.appendChild(oe_1_19_b1);
  const oe_1_19_s2 = document.createElement('span');
  oe_1_19_s2.appendChild(htmlSpan('15 · '));
  oe_1_19_s2.appendChild(b02.cloneNode(true));
  oe_1_19_s2.appendChild(htmlSpan(' + 18 = 25 + 18 = 43'));
  oe_1_19.appendChild(oe_1_19_s2);

  const inhoud = maakOefening({
    id:'oe_1', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.<br>Controleer je oplossing.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_1_5, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('b', oe_1_13, true);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_1_6,
    oe_1_8,
    oe_1_9,
    oe_1_10,
    oe_1_11,
    oe_1_12,
    null,
    null
  ];
  const oplC = [
    oe_1_14,
    oe_1_15,
    oe_1_16,
    oe_1_17,
    oe_1_18,
    oe_1_19,
    null,
    null
  ];
  for (let i=0; i<8; i++) {
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
