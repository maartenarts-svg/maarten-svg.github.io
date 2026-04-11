/* ============================================================
   H10 / P10_4 / oe_104011.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104011_3 = document.createElement('span');
  oe_104011_3.appendChild(htmlSpan('-(9<i>a</i> + 7)'));

  const oe_104011_4 = document.createElement('span');
  oe_104011_4.appendChild(htmlSpan('-1 · (9<i>a</i> + 7)'));

  const oe_104011_5 = document.createElement('span');
  oe_104011_5.appendChild(htmlSpan('-9<i>a</i> - 7'));

  const oe_104011_6 = document.createElement('span');
  oe_104011_6.appendChild(htmlSpan('-(-6 + 3<i>x</i>)'));

  const oe_104011_7 = document.createElement('span');
  oe_104011_7.appendChild(htmlSpan('-1 · (-6 + 3<i>x</i>)'));

  const oe_104011_8 = document.createElement('span');
  oe_104011_8.appendChild(htmlSpan('6 - 3<i>x</i>'));

  const oe_104011_9 = document.createElement('span');
  oe_104011_9.appendChild(htmlSpan('-(2<i>t</i> - 8)'));

  const oe_104011_10 = document.createElement('span');
  oe_104011_10.appendChild(htmlSpan('-1 · (2<i>t</i> - 8)'));

  const oe_104011_11 = document.createElement('span');
  oe_104011_11.appendChild(htmlSpan('-2<i>t</i> + 8'));

  const oe_104011_12 = document.createElement('span');
  oe_104011_12.appendChild(htmlSpan('-(-10<i>y</i> - 1)'));

  const oe_104011_13 = document.createElement('span');
  oe_104011_13.appendChild(htmlSpan('-1 · (-10<i>y</i> -1)'));

  const oe_104011_14 = document.createElement('span');
  oe_104011_14.appendChild(htmlSpan('10<i>y</i> + 1'));

  const inhoud = maakOefening({
    id:'oe_104011', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk de haakjes weg zoals bij het voorbeeld.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', oe_104011_3, TW, false, oe_104011_4);
  tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdA.classList.add('kolom-links');
  tdA.style.position = 'relative';
  tr1.appendChild(tdA);
  const tdE = maakOpTd('c', oe_104011_9, TW, false, oe_104011_10);
  tdE.classList.add('kolom-rechts');
  tdE.style.position = 'relative';
  tr1.appendChild(tdE);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdKeuzeZ2( null, TW, false, oe_104011_5);
  tdB.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdF = maakOpTdKeuzeZ2(null, TW, false, oe_104011_11);
  tdF.classList.add('kolom-rechts');
  tr2.appendChild(tdF);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTd('b', oe_104011_6, TW, false, oe_104011_7);
  tdC.classList.add('kolom-links');
  tdC.style.position = 'relative';
  tr3.appendChild(tdC);
  const tdG = maakOpTd('d', oe_104011_12, TW, false, oe_104011_13);
  tdG.classList.add('kolom-rechts');
  tdG.style.position = 'relative';
  tr3.appendChild(tdG);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdKeuzeZ2(null, TW, false, oe_104011_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  const tdH = maakOpTdKeuzeZ2(null, TW, false, oe_104011_14);
  tdH.classList.add('kolom-rechts');
  tr4.appendChild(tdH);
  tbody.appendChild(tr4);

  //opgave a
  maak2Parabolen(tdA, {
    sx: 3.8,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.4,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.8,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdC, {
    sx: 3.8,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.45,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.65,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdE, {
    sx: 4,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.4,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.8,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
  maak2Parabolen(tdG, {
    sx: 4,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.55,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.95,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

})();
