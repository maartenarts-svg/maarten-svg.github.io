/* ============================================================
   H10 / P10_4 / oe104009.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe104009_1 = document.createElement('span');
  oe104009_1.appendChild(htmlSpan('(2<i>x</i> - 3) · 4'));

  const oe104009_2 = document.createElement('span');
  oe104009_2.appendChild(htmlSpan('8<i>x</i> - 12'));

  const oe104009_3 = document.createElement('span');
  oe104009_3.appendChild(htmlSpan('-1,5(4<i>a</i><sup>2</sup> + 8)'));

  const oe104009_4 = document.createElement('span');
  oe104009_4.appendChild(htmlSpan('-6<i>a</i><sup>2</sup> - 12'));

  const oe104009_5 = document.createElement('span');
  const oe104009_5_s1 = document.createElement('span');
  oe104009_5_s1.appendChild(maakBreuk('4','3','opgave'));
  oe104009_5_s1.appendChild(htmlSpan('(1 - <i>t</i>)'));
  oe104009_5.appendChild(oe104009_5_s1);

  const oe104009_6 = document.createElement('span');
  const oe104009_6_s1 = document.createElement('span');
  oe104009_6_s1.appendChild(maakBreuk('4','3','opgave'));
  oe104009_6_s1.appendChild(htmlSpan(' - '));
  oe104009_6_s1.appendChild(maakBreuk('4','3','opgave'));
  oe104009_6_s1.appendChild(htmlSpan('<i>t</i>'));
  oe104009_6.appendChild(oe104009_6_s1);

  const oe104009_7 = document.createElement('span');
  oe104009_7.appendChild(htmlSpan('(-3 - <i>r</i>) · (-4)'));

  const oe104009_8 = document.createElement('span');
  oe104009_8.appendChild(htmlSpan('12 + 4<i>r</i>'));

  const oe104009_9 = document.createElement('span');
  oe104009_9.appendChild(htmlSpan('10(0,2<i>y</i> + 0,5)'));

  const oe104009_10 = document.createElement('span');
  oe104009_10.appendChild(htmlSpan('2<i>y</i> + 5'));

  const oe104009_11 = document.createElement('span');
  oe104009_11.appendChild(htmlSpan('-5(-2<i>b</i> + 7)'));

  const oe104009_12 = document.createElement('span');
  oe104009_12.appendChild(htmlSpan('10<i>b</i> - 35'));

  const inhoud = maakOefening({
    id:'oe104009', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit.<br>Denk telkens goed na over het teken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', oe104009_1, TW, true, oe104009_2);
  tdA.classList.add('kolom-links');
  tdA.style.position = 'relative';
  tr1.appendChild(tdA);
  const tdD = maakOpTd('d', oe104009_7, TW, true, oe104009_8);
  tdD.classList.add('kolom-rechts');
  tdD.style.position = 'relative';
  tr1.appendChild(tdD);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', oe104009_3, TW, true, oe104009_4);
  tdB.classList.add('kolom-links');
  tdB.style.position = 'relative';
  tr2.appendChild(tdB);
  const tdE = maakOpTd('e', oe104009_9, TW, true, oe104009_10);
  tdE.classList.add('kolom-rechts');
  tdE.style.position = 'relative';
  tr2.appendChild(tdE);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTd('c', oe104009_5, TW, true, oe104009_6);
  tdC.classList.add('kolom-links');
  tdC.style.position = 'relative';
  tr3.appendChild(tdC);
  const tdF = maakOpTd('f', oe104009_11, TW, true, oe104009_12);
  tdF.classList.add('kolom-rechts');
  tdF.style.position = 'relative';
  tr3.appendChild(tdF);
  tbody.appendChild(tr3);

  //opgave a
  maak2Parabolen(tdA, {
    sx: 1.0,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.6,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdB, {
    sx: 1.0,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.4,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.6,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdC, {
    sx: 0.8,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 0.85,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

  //opgave d
  maak2Parabolen(tdD, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.3,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.75,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave e
  maak2Parabolen(tdE, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.6,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.65,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });    

  //opgave f
  maak2Parabolen(tdF, {
    sx: 1.0,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.3,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.6,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });    
})();
