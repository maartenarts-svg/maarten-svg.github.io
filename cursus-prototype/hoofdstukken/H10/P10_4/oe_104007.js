/* ============================================================
   H10 / P10_4 / oe_104007.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104007_1 = document.createElement('span');
  oe_104007_1.appendChild(htmlSpan('5(3<i>x</i> + 1)'));

  const oe_104007_2 = document.createElement('span');
  oe_104007_2.appendChild(htmlSpan('= 5 · 3<i>x</i> + 5 · 1'));

  const oe_104007_3 = document.createElement('span');
  oe_104007_3.appendChild(htmlSpan('= 15<i>x</i> + 5'));

  const oe_104007_4 = document.createElement('span');
  oe_104007_4.appendChild(htmlSpan('(7 + <i>b</i>) · 10'));

  const oe_104007_5 = document.createElement('span');
  oe_104007_5.appendChild(htmlSpan('= 7 · 10 + <i>b</i> · 10'));

  const oe_104007_6 = document.createElement('span');
  oe_104007_6.appendChild(htmlSpan('= 70 + 10<i>b</i>'));

  const oe_104007_7 = document.createElement('span');
  oe_104007_7.appendChild(htmlSpan('(6<i>y</i> + 10) · 0,5'));

  const oe_104007_8 = document.createElement('span');
  oe_104007_8.appendChild(htmlSpan('= 6<i>y</i> · 0,5 + 10 · 0,5'));

  const oe_104007_9 = document.createElement('span');
  oe_104007_9.appendChild(htmlSpan('= 3<i>y</i> + 5'));

  const oe_104007_10 = document.createElement('span');
  const oe_104007_10_s1 = document.createElement('span');
  oe_104007_10_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_104007_10_s1.appendChild(htmlSpan('(4<i>a</i> + 12)'));
  oe_104007_10.appendChild(oe_104007_10_s1);

  const oe_104007_11 = document.createElement('span');
  const oe_104007_11_s1 = document.createElement('span');
  oe_104007_11_s1.appendChild(htmlSpan('= '));
  oe_104007_11_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_104007_11_s1.appendChild(htmlSpan(' · 4<i>a</i> + '));
  oe_104007_11_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_104007_11_s1.appendChild(htmlSpan(' · 12'));
  oe_104007_11.appendChild(oe_104007_11_s1);

  const oe_104007_12 = document.createElement('span');
  oe_104007_12.appendChild(htmlSpan('= <i>a</i> + 3'));

  const inhoud = maakOefening({
    id:'oe_104007', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit met de distributieve eigenschap.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104007_1, false);
  tdLblA.style.position = 'relative';
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_104007_7, false);
  tdLblC.classList.add('kolom-rechts');
  tdLblC.style.position = 'relative';
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104007_2,
    oe_104007_3
  ];
  const oplC = [
    oe_104007_8,
    oe_104007_9
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    if (i===0) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===1) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
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
  const tdLblB = maakOpTdaz('b', oe_104007_4, true);
  tdLblB.classList.add('kolom-links');
  tdLblB.style.position = 'relative';
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_104007_10, true);
  tdLblD.classList.add('kolom-rechts');
  tdLblD.style.position = 'relative';
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_104007_5,
    oe_104007_6
  ];
  const oplD = [
    oe_104007_11,
    oe_104007_12
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
    sx: 0.75,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdLblB, {
    sx: 0.9,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.3,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.75,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdLblC, {
    sx: 1.2,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.6,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.9,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
  maak2Parabolen(tdLblD, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.25,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
