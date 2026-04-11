/* ============================================================
   H10 / P10_4 / oe_104012.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104012_1 = document.createElement('span');
  const oe_104012_1_s1 = document.createElement('span');
  oe_104012_1_s1.appendChild(htmlSpan('3<i>x</i> - '));
  oe_104012_1_s1.appendChild(zetOmNaarOpl('1'));
  oe_104012_1_s1.appendChild(htmlSpan('(4 + 5<i>x</i>)'));
  oe_104012_1.appendChild(oe_104012_1_s1);

  const oe_104012_2 = document.createElement('span');
  oe_104012_2.appendChild(htmlSpan('='));
  oe_104012_2.appendChild(htmlSpan(' '));
  oe_104012_2.appendChild(maakOnderstreping(htmlSpan('3<i>x</i>'), 'enkel', '0.1cm', true));
  oe_104012_2.appendChild(htmlSpan(' '));
  oe_104012_2.appendChild(htmlSpan('- 4'));
  oe_104012_2.appendChild(htmlSpan(' '));
  oe_104012_2.appendChild(maakOnderstreping(htmlSpan('- 5<i>x</i>'), 'enkel', '0.1cm', true));

  const oe_104012_3 = document.createElement('span');
  oe_104012_3.appendChild(htmlSpan('= -2<i>x</i> - 4'));

  const oe_104012_4 = document.createElement('span');
  oe_104012_4.appendChild(htmlSpan('-5(2<i>t</i><sup>2</sup> - 6<i>t</i>) + 8<i>t</i><sup>2</sup>'));

  const oe_104012_5 = document.createElement('span');
  oe_104012_5.appendChild(htmlSpan('='));
  oe_104012_5.appendChild(htmlSpan(' '));
  oe_104012_5.appendChild(maakOnderstreping(htmlSpan('-10<i>t</i><sup>2</sup>'), 'enkel', '0.1cm', true));
  oe_104012_5.appendChild(htmlSpan(' '));
  oe_104012_5.appendChild(htmlSpan('+ 30<i>t</i>'));
  oe_104012_5.appendChild(htmlSpan(' '));
  oe_104012_5.appendChild(maakOnderstreping(htmlSpan('+ 8<i>t</i><sup>2</sup>'), 'enkel', '0.1cm', true));

  const oe_104012_6 = document.createElement('span');
  oe_104012_6.appendChild(htmlSpan('= -2<i>t</i><sup>2</sup> + 30<i>t</i>'));

  const inhoud = maakOefening({
    id:'oe_104012', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104012_1, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_104012_4, false);
  tdLblB.classList.add('kolom-rechts');
  tdLblB.style.position = 'relative';
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104012_2,
    oe_104012_3
  ];
  const oplB = [
    oe_104012_5,
    oe_104012_6
  ];
  for (let i=0; i<2; i++) {
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
    sx: 1.45,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.25,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
    maak2Parabolen(tdLblB, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
