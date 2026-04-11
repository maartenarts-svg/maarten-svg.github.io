/* ============================================================
   H10 / P10_4 / oe_104005.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104005_1 = document.createElement('span');
  oe_104005_1.appendChild(htmlSpan('-5(-3<i>b</i> + 2) + 4<i>b</i>'));

  const oe_104005_2 = document.createElement('span');
  oe_104005_2.appendChild(htmlSpan('='));
  oe_104005_2.appendChild(htmlSpan(' '));
  oe_104005_2.appendChild(maakOnderstreping(htmlSpan('15<i>b</i>'), 'enkel', '0.1cm', true));
  oe_104005_2.appendChild(htmlSpan(' '));
  oe_104005_2.appendChild(htmlSpan('- 10'));
  oe_104005_2.appendChild(htmlSpan(' '));
  oe_104005_2.appendChild(maakOnderstreping(htmlSpan('+ 4<i>b</i>'), 'enkel', '0.1cm', true));

  const oe_104005_3 = document.createElement('span');
  oe_104005_3.appendChild(htmlSpan('= 19<i>b</i> - 10'));

  const oe_104005_4 = document.createElement('span');
  oe_104005_4.appendChild(htmlSpan('1,5(2<i>z</i> + 6) + 7'));

  const oe_104005_5 = document.createElement('span');
  oe_104005_5.appendChild(htmlSpan('= 3<i>z</i>'));
  oe_104005_5.appendChild(htmlSpan(' '));
  oe_104005_5.appendChild(maakOnderstreping(htmlSpan('+ 9'), 'enkel', '0.1cm', true));
  oe_104005_5.appendChild(htmlSpan(' '));
  oe_104005_5.appendChild(htmlSpan('+ 7'));

  const oe_104005_6 = document.createElement('span');
  oe_104005_6.appendChild(htmlSpan('= 3<i>z</i> + 16'));

  const oe_104005_7 = document.createElement('span');
  const oe_104005_7_s1 = document.createElement('span');
  oe_104005_7_s1.appendChild(htmlSpan('3<i>y</i> - '));
  oe_104005_7_s1.appendChild(zetOmNaarOpl('1'));
  oe_104005_7_s1.appendChild(htmlSpan('(9 - <i>y</i>)'));
  oe_104005_7.appendChild(oe_104005_7_s1);

  const oe_104005_8 = document.createElement('span');
  oe_104005_8.appendChild(htmlSpan('='));
  oe_104005_8.appendChild(htmlSpan(' '));
  oe_104005_8.appendChild(maakOnderstreping(htmlSpan('3<i>y</i>'), 'enkel', '0.1cm', true));
  oe_104005_8.appendChild(htmlSpan(' '));
  oe_104005_8.appendChild(htmlSpan('- 9'));
  oe_104005_8.appendChild(htmlSpan(' '));
  oe_104005_8.appendChild(maakOnderstreping(htmlSpan('+ <i>y</i>'), 'enkel', '0.1cm', true));

  const oe_104005_9 = document.createElement('span');
  oe_104005_9.appendChild(htmlSpan('= 4<i>y</i> - 9'));

  const oe_104005_10 = document.createElement('span');
  const oe_104005_10_s1 = document.createElement('span');
  oe_104005_10_s1.appendChild(htmlSpan('16 + '));
  oe_104005_10_s1.appendChild(zetOmNaarOpl('1'));
  oe_104005_10_s1.appendChild(htmlSpan('(5<i>r</i> - 4)'));
  oe_104005_10.appendChild(oe_104005_10_s1);

  const oe_104005_11 = document.createElement('span');
  oe_104005_11.appendChild(htmlSpan('='));
  oe_104005_11.appendChild(htmlSpan(' '));
  oe_104005_11.appendChild(maakOnderstreping(htmlSpan('16'), 'enkel', '0.1cm', true));
  oe_104005_11.appendChild(htmlSpan(' '));
  oe_104005_11.appendChild(htmlSpan('+ 5<i>r</i>'));
  oe_104005_11.appendChild(htmlSpan(' '));
  oe_104005_11.appendChild(maakOnderstreping(htmlSpan('- 4'), 'enkel', '0.1cm', true));

  const oe_104005_12 = htmlSpan('= 12 + 5<i>r</>');

  const inhoud = maakOefening({
    id:'oe_104005', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104005_1, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_104005_7, false);
  tdLblC.classList.add('kolom-rechts');
  tdLblC.style.position = 'relative';
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104005_2,
    oe_104005_3
  ];
  const oplC = [
    oe_104005_8,
    oe_104005_9
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
  const tdLblB = maakOpTdaz('b', oe_104005_4, false);
  tdLblB.classList.add('kolom-links');
  tdLblB.style.position = 'relative';
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_104005_10, false);
  tdLblD.classList.add('kolom-rechts');
  tdLblD.style.position = 'relative';
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_104005_5,
    oe_104005_6
  ];
  const oplD = [
    oe_104005_11,
    oe_104005_12
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
    br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.5,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
    maak2Parabolen(tdLblB, {
    sx: 0.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.55,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
    maak2Parabolen(tdLblC, {
    sx: 1.65,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 0.8,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.25,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
    maak2Parabolen(tdLblD, {
    sx: 1.75,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
