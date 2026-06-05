/* ============================================================
   H?? / P?? / oe_W31WIE_5.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_W31WIE_5_1 = document.createElement('span');
  oe_W31WIE_5_1.appendChild(htmlSpan('7<i>x</i> + 5(2<i>x</i> - 3) - 8'));

  const oe_W31WIE_5_2 = document.createElement('span');
  oe_W31WIE_5_2.appendChild(htmlSpan('='));
  oe_W31WIE_5_2.appendChild(htmlSpan(' '));
  oe_W31WIE_5_2.appendChild(maakOnderstreping(htmlSpan('7<i>x</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_5_2.appendChild(htmlSpan(' '));
  oe_W31WIE_5_2.appendChild(maakOnderstreping(htmlSpan('+ 10<i>x</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_5_2.appendChild(htmlSpan(' '));
  oe_W31WIE_5_2.appendChild(maakOnderstreping(htmlSpan('- 15'), 'dubbel', '0.18cm', true));
  oe_W31WIE_5_2.appendChild(htmlSpan(' '));
  oe_W31WIE_5_2.appendChild(maakOnderstreping(htmlSpan('- 8'), 'dubbel', '0.18cm', true));

  const oe_W31WIE_5_3 = document.createElement('span');
  oe_W31WIE_5_3.appendChild(htmlSpan('= 17<i>x</i> - 23'));

  const oe_W31WIE_5_4 = document.createElement('span');
  const oe_W31WIE_5_4_s1 = document.createElement('span');
  oe_W31WIE_5_4_s1.appendChild(htmlSpan('-'));
  oe_W31WIE_5_4_s1.appendChild(zetOmNaarOpl('1'));
  oe_W31WIE_5_4_s1.appendChild(htmlSpan('(2<i>a</i> + 6) + '));
  oe_W31WIE_5_4_s1.appendChild(zetOmNaarOpl('1'));
  oe_W31WIE_5_4_s1.appendChild(htmlSpan('(5<i>a</i> + 9)'));
  oe_W31WIE_5_4.appendChild(oe_W31WIE_5_4_s1);

  const oe_W31WIE_5_5 = document.createElement('span');
  oe_W31WIE_5_5.appendChild(htmlSpan('='));
  oe_W31WIE_5_5.appendChild(htmlSpan(' '));
  oe_W31WIE_5_5.appendChild(maakOnderstreping(htmlSpan('-2<i>a</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_5_5.appendChild(htmlSpan(' '));
  oe_W31WIE_5_5.appendChild(maakOnderstreping(htmlSpan('- 6'), 'dubbel', '0.18cm', true));
  oe_W31WIE_5_5.appendChild(htmlSpan(' '));
  oe_W31WIE_5_5.appendChild(maakOnderstreping(htmlSpan('+ 5<i>a</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_5_5.appendChild(htmlSpan(' '));
  oe_W31WIE_5_5.appendChild(maakOnderstreping(htmlSpan('+ 9'), 'dubbel', '0.18cm', true));

  const oe_W31WIE_5_6 = document.createElement('span');
  oe_W31WIE_5_6.appendChild(htmlSpan('= 3<i>a</i> + 3'));

  const inhoud = maakOefening({
    id:'oe_W31WIE_5', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_W31WIE_5_1, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_W31WIE_5_4, false);
  tdLblB.classList.add('kolom-rechts');
  tdLblB.style.position = 'relative';
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_W31WIE_5_2,
    oe_W31WIE_5_3,
    null
  ];
  const oplB = [
    oe_W31WIE_5_5,
    oe_W31WIE_5_6,
    null
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  //opgave a
    maak2Parabolen(tdLblA, {
    sx: 1.55,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b1
    maak2Parabolen(tdLblB, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.05,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b2
    maak2Parabolen(tdLblB, {
    sx: 2.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
