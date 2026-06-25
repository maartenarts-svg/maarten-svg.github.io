/* ============================================================
   JURY / oe_vj_4.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const ruimte1 = '1.4cm';
  const SCT = document.createElement('span');
  SCT.appendChild(htmlSpan('SC:'));
  SCT.classList.add('theorie');
  const THT = document.createElement('span');
  THT.appendChild(htmlSpan('theorie:'));
  THT.classList.add('theorie');

  const oe_vj_4_1 = document.createElement('span');
  oe_vj_4_1.appendChild(htmlSpan('5<i>z</i> - 9 = 3<i>z</i> - 17'));

  const oe_vj_4_2 = document.createElement('span');
  oe_vj_4_2.appendChild(htmlSpan('5<i>z</i> <span class="markeer-lila">- 3<i>z</i></span> = -17 <span class="markeer-lila">+ 9</span>'));

  const oe_vj_4_3 = document.createElement('span');
  oe_vj_4_3.appendChild(htmlSpan('2<i>z</i> = -8'));

  const oe_vj_4_4 = document.createElement('span');
  oe_vj_4_4.appendChild(htmlSpan('<i>z</i> = -8 <span class="markeer-lila">: 2</span>'));

  const oe_vj_4_5 = document.createElement('span');
  oe_vj_4_5.appendChild(htmlSpan('<i>z</i> = -4'));

  const oe_vj_4_6 = document.createElement('span');
  oe_vj_4_6.appendChild(htmlSpan('controle'));

  const oe_vj_4_7 = document.createElement('span');
  const oe_vj_4_7_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_vj_4_7.appendChild(oe_vj_4_7_b1);
  oe_vj_4_7.appendChild(htmlSpan('5 · <span class="markeer-lila">(-4)</span> - 9 = -20 - 9 = -29'));

  const oe_vj_4_8 = document.createElement('span');
  const oe_vj_4_8_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_vj_4_8.appendChild(oe_vj_4_8_b1);
  oe_vj_4_8.appendChild(htmlSpan('3 · <span class="markeer-lila">(-4)</span> - 17 = -12 - 17 = -29'));

  const inhoud = maakOefening({
    id:'oe_vj_4', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los op en controleer.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_vj_4_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_vj_4_6, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_vj_4_2,
    oe_vj_4_3,
    oe_vj_4_4,
    oe_vj_4_5,
  ];
  const oplB = [
    oe_vj_4_7,
    oe_vj_4_8,
    null,
    null,
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

})();
