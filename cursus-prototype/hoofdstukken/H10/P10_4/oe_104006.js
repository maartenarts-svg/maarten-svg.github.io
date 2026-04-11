/* ============================================================
   H10 / P10_4 / oe_104006.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104006_1 = document.createElement('span');
  oe_104006_1.appendChild(htmlSpan('-2(-6 + 3<i>a</i>)'));

  const oe_104006_2 = document.createElement('span');
  oe_104006_2.appendChild(htmlSpan('12 - 6<i>a</i>'));

  const oe_104006_3 = document.createElement('span');
  oe_104006_3.appendChild(htmlSpan('(5<i>x</i> - 3) · 4'));

  const oe_104006_4 = document.createElement('span');
  oe_104006_4.appendChild(htmlSpan('20<i>x</i> - 12'));

  const oe_104006_5 = document.createElement('span');
  const oe_104006_5_s1 = document.createElement('span');
  oe_104006_5_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_104006_5_s1.appendChild(htmlSpan('(1 - <i>t</i>)'));
  oe_104006_5.appendChild(oe_104006_5_s1);

  const oe_104006_6 = document.createElement('span');
  const oe_104006_6_s1 = document.createElement('span');
  oe_104006_6_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_104006_6_s1.appendChild(htmlSpan(' - '));
  oe_104006_6_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_104006_6_s1.appendChild(htmlSpan('<i>t</i>'));
  oe_104006_6.appendChild(oe_104006_6_s1);

  const oe_104006_7 = document.createElement('span');
  oe_104006_7.appendChild(htmlSpan('(20<i>y</i> - 3) · (-5)'));

  const oe_104006_8 = document.createElement('span');
  oe_104006_8.appendChild(htmlSpan('-100<i>y</i> + 15'));

  const inhoud = maakOefening({
    id:'oe_104006', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', oe_104006_1, TW, true, oe_104006_2);
  tdA.classList.add('kolom-links');
  tdA.style.position = 'relative';
  tr1.appendChild(tdA);
  const tdC = maakOpTd('c', oe_104006_5, TW, true, oe_104006_6);
  tdC.classList.add('kolom-rechts');
  tdC.style.position = 'relative';
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', oe_104006_3, TW, true, oe_104006_4);
  tdB.classList.add('kolom-links');
  tdB.style.position = 'relative';
  tr2.appendChild(tdB);
  const tdD = maakOpTd('d', oe_104006_7, TW, true, oe_104006_8);
  tdD.classList.add('kolom-rechts');
  tdD.style.position = 'relative';
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

  //opgave a
    maak2Parabolen(tdA, {
    sx: 0.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdB, {
    sx: 0.95,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.65,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdC, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 0.8,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
  maak2Parabolen(tdD, {
    sx: 1.2,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.6,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.85,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
