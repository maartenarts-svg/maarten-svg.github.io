/* ============================================================
   H10 / P10_4 / oe_104014.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104014_1 = document.createElement('span');
  const oe_104014_1_s1 = document.createElement('span');
  oe_104014_1_s1.appendChild(htmlSpan('7<i>x</i> - '));
  oe_104014_1_s1.appendChild(zetOmNaarOpl('1'));
  oe_104014_1_s1.appendChild(htmlSpan('(-5<i>xy</i> - 12<i>x</i>)'));
  oe_104014_1.appendChild(oe_104014_1_s1);

  const oe_104014_2 = document.createElement('span');
  oe_104014_2.appendChild(htmlSpan('='));
  oe_104014_2.appendChild(htmlSpan(' '));
  oe_104014_2.appendChild(maakOnderstreping(htmlSpan('7<i>x</i>'), 'enkel', '0.1cm', true));
  oe_104014_2.appendChild(htmlSpan(' '));
  oe_104014_2.appendChild(htmlSpan('+ 5<i>xy</i>'));
  oe_104014_2.appendChild(htmlSpan(' '));
  oe_104014_2.appendChild(maakOnderstreping(htmlSpan('+ 12<i>x</i>'), 'enkel', '0.1cm', true));

  const oe_104014_3 = document.createElement('span');
  oe_104014_3.appendChild(htmlSpan('= 19<i>x</i> + 5<i>xy</i>'));

  const oe_104014_4 = document.createElement('span');
  oe_104014_4.appendChild(htmlSpan('-0,1(4 - 3<i>t</i>) - <i>t</i>'));

  const oe_104014_5 = document.createElement('span');
  oe_104014_5.appendChild(htmlSpan('= -0,4'));
  oe_104014_5.appendChild(htmlSpan(' '));
  oe_104014_5.appendChild(maakOnderstreping(htmlSpan('+ 0,3<i>t</i>'), 'enkel', '0.1cm', true));
  oe_104014_5.appendChild(htmlSpan(' '));
  oe_104014_5.appendChild(maakOnderstreping(htmlSpan('- <i>t</i>'), 'enkel', '0.1cm', true));

  const oe_104014_6 = document.createElement('span');
  oe_104014_6.appendChild(htmlSpan('= -0,4 - 0,7<i>t</i>'));

  const oe_104014_7 = document.createElement('span');
  const oe_104014_7_s1 = document.createElement('span');
  oe_104014_7_s1.appendChild(htmlSpan('-'));
  oe_104014_7_s1.appendChild(zetOmNaarOpl('1'));
  oe_104014_7_s1.appendChild(htmlSpan('(8<i>z</i> + 1) + '));
  oe_104014_7_s1.appendChild(maakBreuk('1','3','opgave'));
  oe_104014_7_s1.appendChild(htmlSpan('(9 - 12<i>z</i>)'));
  oe_104014_7.appendChild(oe_104014_7_s1);

  const oe_104014_8 = document.createElement('span');
  oe_104014_8.appendChild(htmlSpan('='));
  oe_104014_8.appendChild(htmlSpan(' '));
  oe_104014_8.appendChild(maakOnderstreping(htmlSpan('- 8<i>z</i>'), 'enkel', '0.1cm', true));
  oe_104014_8.appendChild(htmlSpan(' '));
  oe_104014_8.appendChild(maakOnderstreping(htmlSpan('- 1'), 'dubbel', '0.18cm', true));
  oe_104014_8.appendChild(htmlSpan(' '));
  oe_104014_8.appendChild(maakOnderstreping(htmlSpan('+ 3'), 'dubbel', '0.18cm', true));
  oe_104014_8.appendChild(htmlSpan(' '));
  oe_104014_8.appendChild(maakOnderstreping(htmlSpan('- 4<i>z</i>'), 'enkel', '0.1cm', true));

  const oe_104014_9 = document.createElement('span');
  oe_104014_9.appendChild(htmlSpan('= -12<i>z</i> + 2'));

  const oe_104014_10 = document.createElement('span');
  oe_104014_10.appendChild(htmlSpan('15 - 10(<i>s</i> + 3) + 24'));

  const oe_104014_11 = document.createElement('span');
  oe_104014_11.appendChild(htmlSpan('='));
  oe_104014_11.appendChild(htmlSpan(' '));
  oe_104014_11.appendChild(maakOnderstreping(htmlSpan('15<i>s</i>'), 'enkel', '0.1cm', true));
  oe_104014_11.appendChild(htmlSpan(' '));
  oe_104014_11.appendChild(maakOnderstreping(htmlSpan('- 10<i>s</i>'), 'enkel', '0.1cm', true));
  oe_104014_11.appendChild(htmlSpan(' '));
  oe_104014_11.appendChild(maakOnderstreping(htmlSpan('- 30'), 'dubbel', '0.18cm', true));
  oe_104014_11.appendChild(htmlSpan(' '));
  oe_104014_11.appendChild(maakOnderstreping(htmlSpan('+ 24'), 'dubbel', '0.18cm', true));

  const oe_104014_12 = document.createElement('span');
  oe_104014_12.appendChild(htmlSpan('= 5<i>s</i> - 6'));

  const oe_104014_13 = document.createElement('span');
  oe_104014_13.appendChild(htmlSpan('18(<i>a</i> - <i>b</i>) - 5(<i>a</i> - 2<i>b</i>)'));

  const oe_104014_14 = document.createElement('span');
  oe_104014_14.appendChild(htmlSpan('='));
  oe_104014_14.appendChild(htmlSpan(' '));
  oe_104014_14.appendChild(maakOnderstreping(htmlSpan('18<i>a</i>'), 'enkel', '0.1cm', true));
  oe_104014_14.appendChild(htmlSpan(' '));
  oe_104014_14.appendChild(maakOnderstreping(htmlSpan('- 18<i>b</i>'), 'dubbel', '0.18cm', true));
  oe_104014_14.appendChild(htmlSpan(' '));
  oe_104014_14.appendChild(maakOnderstreping(htmlSpan('- 5<i>a</i>'), 'enkel', '0.1cm', true));
  oe_104014_14.appendChild(htmlSpan(' '));
  oe_104014_14.appendChild(maakOnderstreping(htmlSpan('+ 10<i>b</i>'), 'dubbel', '0.18cm', true));

  const oe_104014_15 = document.createElement('span');
  oe_104014_15.appendChild(htmlSpan('= 13<i>a</i> - 8<i>b</i>'));

  const oe_104014_16 = document.createElement('span');
  const oe_104014_16_s1 = document.createElement('span');
  oe_104014_16_s1.appendChild(htmlSpan('-'));
  oe_104014_16_s1.appendChild(zetOmNaarOpl('1'));
  oe_104014_16_s1.appendChild(htmlSpan('(-3 - <i>y</i>) + 17<i>y</i>'));
  oe_104014_16.appendChild(oe_104014_16_s1);

  const oe_104014_17 = document.createElement('span');
  oe_104014_17.appendChild(htmlSpan('= 3'));
  oe_104014_17.appendChild(htmlSpan(' '));
  oe_104014_17.appendChild(maakOnderstreping(htmlSpan('+ <i>y</i>'), 'enkel', '0.1cm', true));
  oe_104014_17.appendChild(htmlSpan(' '));
  oe_104014_17.appendChild(maakOnderstreping(htmlSpan('+ 17<i>y</i>'), 'enkel', '0.1cm', true));

  const oe_104014_18 = document.createElement('span');
  oe_104014_18.appendChild(htmlSpan('= 3 + 18<i>y</i>'));

  const oe_104014_19 = document.createElement('span');
  oe_104014_19.appendChild(htmlSpan('8('));
  oe_104014_19.appendChild(maakOnderstreping(htmlSpan('5<i>r</i>'), 'enkel', '0.1cm', true));
  oe_104014_19.appendChild(htmlSpan(' '));
  oe_104014_19.appendChild(maakOnderstreping(htmlSpan('- 4<i>r</i>'), 'enkel', '0.1cm', true));
  oe_104014_19.appendChild(htmlSpan(') + 13<i>r</i>'));

  const oe_104014_21 = document.createElement('span');
  oe_104014_21.appendChild(htmlSpan('='));
  oe_104014_21.appendChild(htmlSpan(' '));
  oe_104014_21.appendChild(maakOnderstreping(htmlSpan('8<i>r</i>'), 'golf', '0.18cm', true));
  oe_104014_21.appendChild(htmlSpan(' '));
  oe_104014_21.appendChild(maakOnderstreping(htmlSpan('+ 13<i>r</i>'), 'golf', '0.18cm', true));

  const oe_104014_22 = document.createElement('span');
  oe_104014_22.appendChild(htmlSpan('= 21<i>r</i>'));

  const oe_104014_23 = document.createElement('span');
  oe_104014_23.appendChild(htmlSpan('(<i>g</i> - 3) · (-4) + 18'));

  const oe_104014_24 = document.createElement('span');
  oe_104014_24.appendChild(htmlSpan('= -4<i>g</i>'));
  oe_104014_24.appendChild(htmlSpan(' '));
  oe_104014_24.appendChild(maakOnderstreping(htmlSpan('+ 12'), 'enkel', '0.1cm', true));
  oe_104014_24.appendChild(htmlSpan(' '));
  oe_104014_24.appendChild(maakOnderstreping(htmlSpan('+ 18'), 'enkel', '0.1cm', true));

  const oe_104014_25 = document.createElement('span');
  oe_104014_25.appendChild(htmlSpan('= -4<i>g</i> + 30'));

  const inhoud = maakOefening({
    id:'oe_104014', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104014_1, true);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblE = maakOpTdaz('e', oe_104014_13, true);
  tdLblE.classList.add('kolom-rechts');
  tdLblE.style.position = 'relative';
  trL1.appendChild(tdLblE);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104014_2,
    oe_104014_3
  ];
  const oplE = [
    oe_104014_14,
    oe_104014_15
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdE = maakSlTd(oplE[i], true);
    tdE.classList.add('kolom-rechts');
    tr.appendChild(tdE);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_104014_4, true);
  tdLblB.classList.add('kolom-links');
  tdLblB.style.position = 'relative';
  trL2.appendChild(tdLblB);
  const tdLblF = maakOpTdaz('f', oe_104014_16, true);
  tdLblF.classList.add('kolom-rechts');
  tdLblF.style.position = 'relative';
  trL2.appendChild(tdLblF);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_104014_5,
    oe_104014_6
  ];
  const oplF = [
    oe_104014_17,
    oe_104014_18
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdF = maakSlTd(oplF[i], true);
    tdF.classList.add('kolom-rechts');
    tr.appendChild(tdF);
    tbody.appendChild(tr);
  }

  /* Rij 3: labels */
  const trL3 = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_104014_7, true);
  tdLblC.classList.add('kolom-links');
  tdLblC.style.position = 'relative';
  trL3.appendChild(tdLblC);
  const tdLblG = maakOpTdaz('g', oe_104014_19, true);
  tdLblG.classList.add('kolom-rechts');
  tdLblG.style.position = 'relative';
  trL3.appendChild(tdLblG);
  tbody.appendChild(trL3);

  /* Oplossingen rij 3 */
  const oplC = [
    oe_104014_8,
    oe_104014_9
  ];
  const oplG = [
    oe_104014_21,
    oe_104014_22
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-links');
    tr.appendChild(tdC);
    const tdG = maakSlTd(oplG[i], true);
    tdG.classList.add('kolom-rechts');
    tr.appendChild(tdG);
    tbody.appendChild(tr);
  }

  /* Rij 4: labels */
  const trL4 = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', oe_104014_10, true);
  tdLblD.style.position = 'relative';
  tdLblD.classList.add('kolom-links');
  trL4.appendChild(tdLblD);
  const tdLblH = maakOpTdaz('h', oe_104014_23, true);
  tdLblH.classList.add('kolom-rechts');
  tdLblH.style.position = 'relative';
  trL4.appendChild(tdLblH);
  tbody.appendChild(trL4);

  /* Oplossingen rij 4 */
  const oplD = [
    oe_104014_11,
    oe_104014_12
  ];
  const oplH = [
    oe_104014_24,
    oe_104014_25
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdD = maakSlTd(oplD[i], true);
    tdD.classList.add('kolom-links');
    tr.appendChild(tdD);
    const tdH = maakSlTd(oplH[i], true);
    tdH.classList.add('kolom-rechts');
    tr.appendChild(tdH);
    tbody.appendChild(tr);
  }

  //opgave a
  maak2Parabolen(tdLblA, {
    sx: 1.4,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.6,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.7,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdLblB, {
    sx: 1.0,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.05,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c1
  maak2Parabolen(tdLblC, {
    sx: 0.9,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c2
  maak2Parabolen(tdLblC, {
    sx: 2.75,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
  maak2Parabolen(tdLblD, {
    sx: 1.6,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 0.95,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave e.1
  maak2Parabolen(tdLblE, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave e.2
  maak2Parabolen(tdLblE, {
    sx: 2.65,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave f
  maak2Parabolen(tdLblF, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 0.95,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave g
  maak2Parabolen(tdLblG, {
    sx: 1.0,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave h
  maak2Parabolen(tdLblH, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.35,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.9,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

})();
