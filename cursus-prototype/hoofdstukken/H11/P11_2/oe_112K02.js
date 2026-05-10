/* ============================================================
   H11 / P11_2 / oe_112K02.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_112K02_1 = document.createElement('span');
  oe_112K02_1.appendChild(htmlSpan('4<i>x</i><sup>2</sup> = 36'));

  const oe_112K02_2 = document.createElement('span');
  oe_112K02_2.appendChild(htmlSpan('4<i>x</i><sup>2</sup> <span class="markeer-lila">: 4</span> = 36 <span class="markeer-lila">: 4</span>'));

  const oe_112K02_3 = document.createElement('span');
  oe_112K02_3.appendChild(htmlSpan('<i>x</i><sup>2</sup> = 9'));

  const oe_112K02_4 = document.createElement('span');
  oe_112K02_4.appendChild(htmlSpan('<i>x</i> = 3 of <i>x</i> = -3'));

  const oe_112K02_5 = document.createElement('span');
  oe_112K02_5.appendChild(htmlSpan('3<i>x</i><sup>2</sup> + 17 = 209'));

  const oe_112K02_6 = document.createElement('span');
  oe_112K02_6.appendChild(htmlSpan('3<i>x</i><sup>2</sup> + 17 <span class="markeer-lila">- 17</span> = 209 <span class="markeer-lila">- 17</span>'));

  const oe_112K02_7 = document.createElement('span');
  oe_112K02_7.appendChild(htmlSpan('3<i>x</i><sup>2</sup> = 192'));

  const oe_112K02_8 = document.createElement('span');
  oe_112K02_8.appendChild(htmlSpan('3<i>x</i><sup>2</sup> <span class="markeer-lila">: 3</span> = 192 <span class="markeer-lila">: 3</span>'));

  const oe_112K02_9 = document.createElement('span');
  oe_112K02_9.appendChild(htmlSpan('<i>x</i><sup>2</sup> = 64'));

  const oe_112K02_10 = document.createElement('span');
  oe_112K02_10.appendChild(htmlSpan('<i>x</i> = 8 of <i>x</i> = -8'));

  const inhoud = maakOefening({
    id:'oe_112K02', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijkingen op.<br>Gebruik de vorige opdracht!', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_112K02_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_112K02_5, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_112K02_2,
    oe_112K02_3,
    oe_112K02_4,
    null,
    null,
  ];
  const oplB = [
    oe_112K02_6,
    oe_112K02_7,
    oe_112K02_8,
    oe_112K02_9,
    oe_112K02_10,
  ];
  for (let i=0; i<5; i++) {
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
