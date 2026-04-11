/* ============================================================
   H10 / P10_4 / oe_104010.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104010_1 = document.createElement('span');
  const oe_104010_1_s1 = document.createElement('span');
  oe_104010_1_s1.appendChild(htmlSpan('-'));
  oe_104010_1_s1.appendChild(zetOmNaarOpl('1'));
  oe_104010_1_s1.appendChild(htmlSpan('(-3<i>x</i> + 4)'));
  oe_104010_1.appendChild(oe_104010_1_s1);

  const oe_104010_2 = document.createElement('span');
  oe_104010_2.appendChild(htmlSpan('3<i>x</i> - 4'));

  const oe_104010_3 = document.createElement('span');
  const oe_104010_3_s1 = document.createElement('span');
  oe_104010_3_s1.appendChild(htmlSpan('-'));
  oe_104010_3_s1.appendChild(zetOmNaarOpl('1'));
  oe_104010_3_s1.appendChild(htmlSpan('(7<i>t</i> - 8)'));
  oe_104010_3.appendChild(oe_104010_3_s1);

  const oe_104010_4 = document.createElement('span');
  oe_104010_4.appendChild(htmlSpan('-7<i>t</i> + 8'));

  const oe_104010_5 = document.createElement('span');
  const oe_104010_5_s1 = document.createElement('span');
  oe_104010_5_s1.appendChild(htmlSpan('-'));
  oe_104010_5_s1.appendChild(zetOmNaarOpl('1'));
  oe_104010_5_s1.appendChild(htmlSpan('(-<i>y</i> - 9)'));
  oe_104010_5.appendChild(oe_104010_5_s1);

  const oe_104010_6 = document.createElement('span');
  oe_104010_6.appendChild(htmlSpan('<i>y</i> + 9'));

  const oe_104010_7 = document.createElement('span');
  const oe_104010_7_s1 = document.createElement('span');
  oe_104010_7_s1.appendChild(htmlSpan('-'));
  oe_104010_7_s1.appendChild(zetOmNaarOpl('1'));
  oe_104010_7_s1.appendChild(htmlSpan('(<i>a</i> + 6)'));
  oe_104010_7.appendChild(oe_104010_7_s1);

  const oe_104010_8 = document.createElement('span');
  oe_104010_8.appendChild(htmlSpan('-<i>a</i> - 6'));

  const inhoud = maakOefening({
    id:'oe_104010', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk de haakjes weg.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', oe_104010_1, TW, false, oe_104010_2);
  tdA.style.position = 'relative';
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdC = maakOpTd('c', oe_104010_5, TW, false, oe_104010_6);
  tdC.classList.add('kolom-rechts');
  tdC.style.position = 'relative';
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', oe_104010_3, TW, false, oe_104010_4);
  tdB.classList.add('kolom-links');
  tdB.style.position = 'relative';
  tr2.appendChild(tdB);
  const tdD = maakOpTd('d', oe_104010_7, TW, false, oe_104010_8);
  tdD.classList.add('kolom-rechts');
  tdD.style.position = 'relative';
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);
  
  //opgave a
    maak2Parabolen(tdA, {
    sx: 0.8,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.5,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
    maak2Parabolen(tdB, {
    sx: 0.8,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
    maak2Parabolen(tdC, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 0.8,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave a
    maak2Parabolen(tdD, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 0.8,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.25,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
