/* ============================================================
   JURY / oe_W35WIJ_4.js
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

  const oe_W35WIJ_4_1 = document.createElement('span');
  oe_W35WIJ_4_1.appendChild(htmlSpan('5<i>z</i> - 9 = 3<i>z</i> - 17'));

  const oe_W35WIJ_4_2 = document.createElement('span');
  oe_W35WIJ_4_2.appendChild(htmlSpan('5<i>z</i> <span class="markeer-lila">- 3<i>z</i></span> = -17 <span class="markeer-lila">+ 9</span>'));

  const oe_W35WIJ_4_3 = document.createElement('span');
  oe_W35WIJ_4_3.appendChild(htmlSpan('2<i>z</i> = -8'));

  const oe_W35WIJ_4_4 = document.createElement('span');
  oe_W35WIJ_4_4.appendChild(htmlSpan('<i>z</i> = -8 <span class="markeer-lila">: 2</span>'));

  const oe_W35WIJ_4_5 = document.createElement('span');
  oe_W35WIJ_4_5.appendChild(htmlSpan('<i>z</i> = -4'));

  const oe_W35WIJ_4_6 = document.createElement('span');
  oe_W35WIJ_4_6.appendChild(htmlSpan('controle'));

  const oe_W35WIJ_4_7 = document.createElement('span');
  const oe_W35WIJ_4_7_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_W35WIJ_4_7.appendChild(oe_W35WIJ_4_7_b1);
  oe_W35WIJ_4_7.appendChild(htmlSpan('5 · <span class="markeer-lila">(-4)</span> - 9 = -20 - 9 = -29'));

  const oe_W35WIJ_4_8 = document.createElement('span');
  const oe_W35WIJ_4_8_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_W35WIJ_4_8.appendChild(oe_W35WIJ_4_8_b1);
  oe_W35WIJ_4_8.appendChild(htmlSpan('3 · <span class="markeer-lila">(-4)</span> - 17 = -12 - 17 = -29'));

  const inhoud = maakOefening({
    id:'oe_W35WIJ_4', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los op en controleer.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_W35WIJ_4_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_W35WIJ_4_6, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_W35WIJ_4_2,
    oe_W35WIJ_4_3,
    oe_W35WIJ_4_4,
    oe_W35WIJ_4_5,
    null,
    null,
  ];
  const oplB = [
    oe_W35WIJ_4_7,
    oe_W35WIJ_4_8,
    null,
    null,
    null,
    null,
  ];
  for (let i=0; i<6; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  /* succescriteria */

  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("",SCT.cloneNode(true),ruimte1,false,"12, 13, 15");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("",SCT.cloneNode(true),ruimte1,false,"12, 14, 15");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

  /* theorie */
  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("",THT.cloneNode(true),ruimte1,false," ");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("",THT.cloneNode(true),ruimte1,false," ");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

})();
