/* ============================================================
   H?? / P?? / oe_W31WIE_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_W31WIE_2_1 = document.createElement('span');
  oe_W31WIE_2_1.appendChild(htmlSpan('3<i>x</i> + 5'));

  const oe_W31WIE_2_2 = document.createElement('span');
  oe_W31WIE_2_2.appendChild(htmlSpan('voor <i>x</i> = -4'));

  const oe_W31WIE_2_3 = document.createElement('span');
  oe_W31WIE_2_3.appendChild(htmlSpan('3 · <span class="markeer-lila">(-4)</span> + 5'));

  const oe_W31WIE_2_4 = document.createElement('span');
  oe_W31WIE_2_4.appendChild(htmlSpan('= -12 + 5'));

  const oe_W31WIE_2_5 = document.createElement('span');
  oe_W31WIE_2_5.appendChild(htmlSpan('= -7'));

  const oe_W31WIE_2_6 = document.createElement('span');
  oe_W31WIE_2_6.appendChild(htmlSpan('-3(<i>a</i> + 2)'));

  const oe_W31WIE_2_7 = document.createElement('span');
  oe_W31WIE_2_7.appendChild(htmlSpan('voor <i>a</i> = 3'));

  const oe_W31WIE_2_8 = document.createElement('span');
  oe_W31WIE_2_8.appendChild(htmlSpan('-3 · (<span class="markeer-lila">3</span> + 2)'));

  const oe_W31WIE_2_9 = document.createElement('span');
  oe_W31WIE_2_9.appendChild(htmlSpan('= -3 · 5'));

  const oe_W31WIE_2_10 = document.createElement('span');
  oe_W31WIE_2_10.appendChild(htmlSpan('= -15'));

  const inhoud = maakOefening({
    id:'oe_W31WIE_2', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken de getalwaarde.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const BREEDTE = '3.5cm';

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdazExtra('a', oe_W31WIE_2_1, oe_W31WIE_2_2, BREEDTE, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdazExtra('b', oe_W31WIE_2_6, oe_W31WIE_2_7, BREEDTE, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_W31WIE_2_3,
    oe_W31WIE_2_4,
    oe_W31WIE_2_5,
    null,
  ];
  const oplB = [
    oe_W31WIE_2_8,
    oe_W31WIE_2_9,
    oe_W31WIE_2_10,
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
