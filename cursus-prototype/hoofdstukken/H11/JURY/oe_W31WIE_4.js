/* ============================================================
   H?? / P?? / oe_W31WIE_4.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_W31WIE_4_1 = document.createElement('span');
  oe_W31WIE_4_1.appendChild(htmlSpan('2(3<i>x</i> + 5)'));

  const oe_W31WIE_4_2 = document.createElement('span');
  oe_W31WIE_4_2.appendChild(htmlSpan('= 6<i>x</i> + 10'));

  const oe_W31WIE_4_3 = document.createElement('span');
  const oe_W31WIE_4_3_s1 = document.createElement('span');
  oe_W31WIE_4_3_s1.appendChild(htmlSpan('-7('));
  oe_W31WIE_4_3_s1.appendChild(zetOmNaarOpl('1'));
  oe_W31WIE_4_3_s1.appendChild(htmlSpan('<i>a</i> - 2)'));
  oe_W31WIE_4_3.appendChild(oe_W31WIE_4_3_s1);

  const oe_W31WIE_4_4 = document.createElement('span');
  oe_W31WIE_4_4.appendChild(htmlSpan('= -7<i>a</i> + 14'));

  const oe_W31WIE_4_5 = document.createElement('span');
  const oe_W31WIE_4_5_s1 = document.createElement('span');
  oe_W31WIE_4_5_s1.appendChild(htmlSpan('-'));
  oe_W31WIE_4_5_s1.appendChild(zetOmNaarOpl('1'));
  oe_W31WIE_4_5_s1.appendChild(htmlSpan('(3<i>b</i> - 7)'));
  oe_W31WIE_4_5.appendChild(oe_W31WIE_4_5_s1);

  const oe_W31WIE_4_6 = document.createElement('span');
  oe_W31WIE_4_6.appendChild(htmlSpan('= -3<i>b</i> + 7'));

  const oe_W31WIE_4_7 = document.createElement('span');
  const oe_W31WIE_4_7_s1 = document.createElement('span');
  oe_W31WIE_4_7_s1.appendChild(htmlSpan('-'));
  oe_W31WIE_4_7_s1.appendChild(zetOmNaarOpl('1'));
  oe_W31WIE_4_7_s1.appendChild(htmlSpan('(-8<i>y</i> - 6)'));
  oe_W31WIE_4_7.appendChild(oe_W31WIE_4_7_s1);

  const oe_W31WIE_4_8 = document.createElement('span');
  oe_W31WIE_4_8.appendChild(htmlSpan('= 8<i>y</i> + 6'));

  const inhoud = maakOefening({
    id:'oe_W31WIE_4', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_W31WIE_4_1, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_W31WIE_4_5, false);
  tdLblC.classList.add('kolom-rechts');
  tdLblC.style.position = 'relative';
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const trAC1 = document.createElement('tr');
  const tdA1 = maakSlTd(oe_W31WIE_4_2, false);
  tdA1.classList.add('kolom-links');
  tdA1.style.position = 'relative';
  trAC1.appendChild(tdA1);
  const tdC1 = maakSlTd(oe_W31WIE_4_6, false);
  tdC1.classList.add('kolom-rechts');
  tdC1.style.position = 'relative';
  trAC1.appendChild(tdC1);
  tbody.appendChild(trAC1);  

  /* Oplossingen rij 2 */
  const trAC2 = document.createElement('tr');
  const tdA2 = maakSlTd(htmlSpan(''), false);
  tdA2.classList.add('kolom-links');
  trAC2.appendChild(tdA2);
  const tdC2 = maakSlTd(htmlSpan(''), false);
  tdC2.classList.add('kolom-rechts');
  trAC2.appendChild(tdC2);
  tbody.appendChild(trAC2); 

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_W31WIE_4_3, false);
  tdLblB.classList.add('kolom-links');
  tdLblB.style.position = 'relative';
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_W31WIE_4_7, false);
  tdLblD.classList.add('kolom-rechts');
  tdLblD.style.position = 'relative';
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 1 */
  const trBD1 = document.createElement('tr');
  const tdB1 = maakSlTd(oe_W31WIE_4_4, false);
  tdB1.classList.add('kolom-links');
  tdB1.style.position = 'relative';
  trBD1.appendChild(tdB1);
  const tdD1 = maakSlTd(oe_W31WIE_4_8, false);
  tdD1.classList.add('kolom-rechts');
  tdD1.style.position = 'relative';
  trBD1.appendChild(tdD1);
  tbody.appendChild(trBD1);  

  /* Oplossingen rij 2 */
  const trBD2 = document.createElement('tr');
  const tdB2 = maakSlTd(htmlSpan(''), false);
  tdB2.classList.add('kolom-links');
  trBD2.appendChild(tdB2);
  const tdD2 = maakSlTd(htmlSpan(''), false);
  tdD2.classList.add('kolom-rechts');
  trBD2.appendChild(tdD2);
  tbody.appendChild(trBD2); 

  //opgave a
    maak2Parabolen(tdLblA, {
    sx: 0.75,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
    maak2Parabolen(tdLblB, {
    sx: 0.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
    maak2Parabolen(tdLblC, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
    maak2Parabolen(tdLblD, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.5,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });
})();
