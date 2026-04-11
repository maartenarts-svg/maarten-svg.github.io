/* ============================================================
   H10 / P10_4 / oe_104004.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104004_1 = document.createElement('span');
  const oe_104004_1_s1 = document.createElement('span');
  oe_104004_1_s1.appendChild(htmlSpan('-'));
  oe_104004_1_s1.appendChild(zetOmNaarOpl('1'));
  oe_104004_1_s1.appendChild(htmlSpan('(3<i>a</i> - 7)'));
  oe_104004_1.appendChild(oe_104004_1_s1);

  const oe_104004_2 = document.createElement('span');
  oe_104004_2.appendChild(htmlSpan('= -1 · 3<i>a</i> + (-1) · (-7)'));

  const oe_104004_3 = document.createElement('span');
  oe_104004_3.appendChild(htmlSpan('= -3<i>a</i> + 7'));

  const oe_104004_4 = document.createElement('span');
  const oe_104004_4_s1 = document.createElement('span');
  oe_104004_4_s1.appendChild(htmlSpan('-'));
  oe_104004_4_s1.appendChild(zetOmNaarOpl('1'));
  oe_104004_4_s1.appendChild(htmlSpan('(3<i>a</i> + 7)'));
  oe_104004_4.appendChild(oe_104004_4_s1);

  const oe_104004_5 = document.createElement('span');
  oe_104004_5.appendChild(htmlSpan('= -1 · 3<i>a</i> + (-1) · 7'));

  const oe_104004_6 = document.createElement('span');
  oe_104004_6.appendChild(htmlSpan('= -3<i>a</i> - 7'));

  const oe_104004_7 = document.createElement('span');
  const oe_104004_7_s1 = document.createElement('span');
  oe_104004_7_s1.appendChild(htmlSpan('-'));
  oe_104004_7_s1.appendChild(zetOmNaarOpl('1'));
  oe_104004_7_s1.appendChild(htmlSpan('(-3<i>a</i> - 7)'));
  oe_104004_7.appendChild(oe_104004_7_s1);

  const oe_104004_8 = document.createElement('span');
  oe_104004_8.appendChild(htmlSpan('= -1 · (-3<i>a</i>) + (-1) · (-7)'));

  const oe_104004_9 = document.createElement('span');
  oe_104004_9.appendChild(htmlSpan('= 3<i>a</i> + 7'));

  const oe_104004_10 = document.createElement('span');
  const oe_104004_10_s1 = document.createElement('span');
  oe_104004_10_s1.appendChild(htmlSpan('-'));
  oe_104004_10_s1.appendChild(zetOmNaarOpl('1'));
  oe_104004_10_s1.appendChild(htmlSpan('(-3<i>a</i> + 7)'));
  oe_104004_10.appendChild(oe_104004_10_s1);

  const oe_104004_11 = document.createElement('span');
  oe_104004_11.appendChild(htmlSpan('= -1 · (-3<i>a</i>) + (-1) · 7'));

  const oe_104004_12 = document.createElement('span');
  oe_104004_12.appendChild(htmlSpan('= 3<i>a</i> - 7'));

  const inhoud = maakOefening({
    id:'oe_104004', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk de haakjes weg.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104004_1, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_104004_7, false);
  tdLblC.classList.add('kolom-rechts');
  tdLblC.style.position = 'relative';  
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104004_2,
    oe_104004_3
  ];
  const oplC = [
    oe_104004_8,
    oe_104004_9
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
  const tdLblB = maakOpTdaz('b', oe_104004_4, false);
  tdLblB.classList.add('kolom-links');
  tdLblB.style.position = 'relative';  
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_104004_10, false);
  tdLblD.classList.add('kolom-rechts');
  tdLblD.style.position = 'relative';  
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_104004_5,
    oe_104004_6
  ];
  const oplD = [
    oe_104004_11,
    oe_104004_12
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], false);
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
    sx: 0.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
    maak2Parabolen(tdLblC, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
    maak2Parabolen(tdLblD, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
