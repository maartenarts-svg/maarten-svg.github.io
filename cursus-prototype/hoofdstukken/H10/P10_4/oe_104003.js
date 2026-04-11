/* ============================================================
   H10 / P10_4 / oe_104003.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104003_1 = document.createElement('span');
  oe_104003_1.appendChild(htmlSpan('4(9<i>x</i> - 5)'));

  const oe_104003_2 = document.createElement('span');
  oe_104003_2.appendChild(htmlSpan('= 4 · 9x + 4 · (-5)'));

  const oe_104003_3 = document.createElement('span');
  oe_104003_3.appendChild(htmlSpan('= 36<i>x</i> - 20'));

  const oe_104003_4 = document.createElement('span');
  oe_104003_4.appendChild(htmlSpan('(-2,5<i>a</i><sup>2</sup> + 1,5<i>a</i>) · 4'));

  const oe_104003_6 = document.createElement('span');
  oe_104003_6.appendChild(htmlSpan('= -2,5<i>a</i><sup>2</sup> · 4 + 1,5<i>a</i> · 4'));

  const oe_104003_7 = document.createElement('span');
  oe_104003_7.appendChild(htmlSpan('= -10<i>a</i><sup>2</sup> + 6<i>a</i>'));

  const oe_104003_8 = document.createElement('span');
  oe_104003_8.appendChild(htmlSpan('-8(7 + <i>y</i>)'));

  const oe_104003_9 = document.createElement('span');
  oe_104003_9.appendChild(htmlSpan('= -8 · 7 + (-8) · <i>y</i>'));

  const oe_104003_10 = document.createElement('span');
  oe_104003_10.appendChild(htmlSpan('= -56 - 8<i>y</i>'));

  const oe_104003_11 = document.createElement('span');
  const oe_104003_11_s1 = document.createElement('span');
  oe_104003_11_s1.appendChild(htmlSpan('(6<i>rt</i> + 14) · '));
  oe_104003_11_s1.appendChild(maakBreuk('-1','2','opgave'));
  oe_104003_11.appendChild(oe_104003_11_s1);

  const oe_104003_12 = document.createElement('span');
  const oe_104003_12_s1 = document.createElement('span');
  oe_104003_12_s1.appendChild(htmlSpan('= 6<i>rt</i> · '));
  oe_104003_12_s1.appendChild(maakBreuk('-1','2','opgave'));
  oe_104003_12_s1.appendChild(htmlSpan(' + 14 · '));
  oe_104003_12_s1.appendChild(maakBreuk('-1','2','opgave'));
  oe_104003_12.appendChild(oe_104003_12_s1);

  const oe_104003_13 = document.createElement('span');
  oe_104003_13.appendChild(htmlSpan('= -3<i>rt</i> - 7'));

  const inhoud = maakOefening({
    id:'oe_104003', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104003_1, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_104003_8, false);
  tdLblC.classList.add('kolom-rechts');
  tdLblC.style.position = 'relative';
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104003_2,
    oe_104003_3
  ];
  const oplC = [
    oe_104003_9,
    oe_104003_10
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  voegWitruimteToe2(tbody);

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_104003_4, true);

  tdLblB.classList.add('kolom-links');
  tdLblB.style.position = 'relative';
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_104003_11, true);

  tdLblD.classList.add('kolom-rechts');
  tdLblD.style.position = 'relative';
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_104003_6,
    oe_104003_7
  ];
  const oplD = [
    oe_104003_12,
    oe_104003_13
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], true);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

  //opgave a
    maak2Parabolen(tdLblA, {
    sx: 0.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdLblB, {
    sx: 1.15,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 2.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.9,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdLblC, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
  maak2Parabolen(tdLblD, {
    sx: 1.2,           // ← x-coördinaat startpunt links in cm
    sy: 0.1,            // ← y-coördinaat startpunt links in cm
    br1: 1.65,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.85,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
