// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.

/* ============================================================
   H10 / P10_4 / oe_104013.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104013_1 = document.createElement('span');
  oe_104013_1.appendChild(htmlSpan('7 - '));
  const oe_104013_1_s1 = document.createElement('span');
  oe_104013_1_s1.appendChild(htmlSpan('1'));
  oe_104013_1_s1.classList.add('voorgedrukt');
  oe_104013_1.appendChild(oe_104013_1_s1);
  oe_104013_1.appendChild(htmlSpan('(<i>x</i> + 8) + 4<i>x</i>')); 

  const oe_104013_2 = document.createElement('span');
  oe_104013_2.appendChild(htmlSpan('='));
  oe_104013_2.appendChild(htmlSpan(' '));
  oe_104013_2.appendChild(maakOnderstreping(htmlSpan('7'), 'enkel', '0.1cm', true));
  oe_104013_2.appendChild(htmlSpan(' '));
  oe_104013_2.appendChild(maakOnderstreping(htmlSpan('- <i>x</i>'), 'dubbel', '0.18cm', true));
  oe_104013_2.appendChild(htmlSpan(' '));
  oe_104013_2.appendChild(maakOnderstreping(htmlSpan('- 8'), 'enkel', '0.1cm', true));
  oe_104013_2.appendChild(htmlSpan(' '));
  oe_104013_2.appendChild(maakOnderstreping(htmlSpan('+ 4<i>x</i>'), 'dubbel', '0.18cm', true));

  const oe_104013_3 = document.createElement('span');
  oe_104013_3.appendChild(htmlSpan('= -1 + 3<i>x</i>'));

  const oe_104013_4 = document.createElement('span');
  oe_104013_4.appendChild(htmlSpan('-'));
  const oe_104013_4_s1 = document.createElement('span');
  oe_104013_4_s1.appendChild(htmlSpan(1));
  oe_104013_4_s1.classList.add('voorgedrukt');
  oe_104013_4.appendChild(oe_104013_4_s1);  
  oe_104013_4.appendChild(htmlSpan('(5<i>a</i> + 2) + 3(8 - 4<i>a</i>)'));


  const oe_104013_5 = document.createElement('span');
  oe_104013_5.appendChild(htmlSpan('='));
  oe_104013_5.appendChild(htmlSpan(' '));
  oe_104013_5.appendChild(maakOnderstreping(htmlSpan('-5<i>a</i>'), 'enkel', '0.1cm', true));
  oe_104013_5.appendChild(htmlSpan(' '));
  oe_104013_5.appendChild(maakOnderstreping(htmlSpan('- 2'), 'dubbel', '0.18cm', true));
  oe_104013_5.appendChild(htmlSpan(' '));
  oe_104013_5.appendChild(maakOnderstreping(htmlSpan('+ 24'), 'dubbel', '0.18cm', true));
  oe_104013_5.appendChild(htmlSpan(' '));
  oe_104013_5.appendChild(maakOnderstreping(htmlSpan('- 12<i>a</i>'), 'enkel', '0.1cm', true));

  const oe_104013_6 = document.createElement('span');
  oe_104013_6.appendChild(htmlSpan('= -17<i>a</i> + 22'));

  const oe_104013_7 = document.createElement('span');
  oe_104013_7.appendChild(htmlSpan('7(<i>t</i> + 3<i>t</i><sup>2</sup>) - 18'));

  const oe_104013_8 = document.createElement('span');
  oe_104013_8.appendChild(htmlSpan('= 7<i>t</i> + 21<i>t</i><sup>2</sup> - 18'));

  const oe_104013_9 = document.createElement('span');
  const oe_104013_9_s1 = document.createElement('span');
  oe_104013_9_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_104013_9_s1.appendChild(htmlSpan(' - 3'));
    const oe_104013_9_s2 = htmlSpan('(');
    oe_104013_9_s2.classList.add('bracket');
  oe_104013_9_s1.appendChild(oe_104013_9_s2);
  oe_104013_9_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_104013_9_s1.appendChild(htmlSpan(' - 4<i>z</i>'));
    const oe_104013_9_s3 = htmlSpan(')');
    oe_104013_9_s3.classList.add('bracket');
  oe_104013_9_s1.appendChild(oe_104013_9_s3);
  oe_104013_9_s1.appendChild(htmlSpan(' - 16<i>z</i>'));
  oe_104013_9.appendChild(oe_104013_9_s1);

  
  const oe_104013_10 = document.createElement('span');
  oe_104013_10.appendChild(htmlSpan('='));
  oe_104013_10.appendChild(htmlSpan(' '));
  const oe_104013_10_s3 = document.createElement('span');
  oe_104013_10_s3.appendChild(maakBreuk('1','2','opgave'));
  oe_104013_10.appendChild(maakOnderstreping(oe_104013_10_s3, 'enkel', '0.1cm', true));
  oe_104013_10.appendChild(htmlSpan(' '));
  const oe_104013_10_s5 = document.createElement('span');
  oe_104013_10_s5.appendChild(htmlSpan('- '));
  oe_104013_10_s5.appendChild(maakBreuk('3','2','opgave'));
  oe_104013_10.appendChild(maakOnderstreping(oe_104013_10_s5, 'enkel', '0.1cm', true));
  oe_104013_10.appendChild(htmlSpan(' '));
  oe_104013_10.appendChild(maakOnderstreping(htmlSpan('+ 12<i>z</i>'), 'dubbel', '0.18cm', true));
  oe_104013_10.appendChild(htmlSpan(' '));
  oe_104013_10.appendChild(maakOnderstreping(htmlSpan('- 16<i>z</i>'), 'dubbel', '0.18cm', true));

  const oe_104013_11 = document.createElement('span');
  oe_104013_11.appendChild(htmlSpan('= -1 - 4<i>z</i>'));

  const inhoud = maakOefening({
    id:'oe_104013', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bij elke oefening zijn de haakjes al weggewerkt.<br>Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104013_1, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_104013_7, false);
  tdLblC.classList.add('kolom-rechts');
  tdLblC.style.position = 'relative';
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104013_2,
    oe_104013_3
  ];
  const oplC = [
    oe_104013_8,
    null
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    if (i===0) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    if (i===0) tdC.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_104013_4, true);
  tdLblB.classList.add('kolom-links');
  tdLblB.style.position = 'relative';
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_104013_9, true);
  tdLblD.classList.add('kolom-rechts');
  tdLblD.style.position = 'relative';
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    oe_104013_5,
    oe_104013_6
  ];
  const oplD = [
    oe_104013_10,
    oe_104013_11
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    if (i===0) tdB.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], true);
    if (i===0) tdD.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

  //opgave a
  maak2Parabolen(tdLblA, {
    sx: 1.25,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b1
  maak2Parabolen(tdLblB, {
    sx: 0.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.35,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b2
  maak2Parabolen(tdLblB, {
    sx: 2.65,           // ← x-coördinaat startpunt links in cm
    sy: 0.35,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.3,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });  

  //opgave c
  maak2Parabolen(tdLblC, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
  maak2Parabolen(tdLblD, {
    sx: 1.6,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });  

})();
