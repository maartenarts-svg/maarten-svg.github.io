// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.

/* ============================================================
   H10 / P10_4 / oe_104K01.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104K01_1 = document.createElement('span');
  const oe_104K01_1_s1 = document.createElement('span');
  oe_104K01_1_s1.appendChild(maakBreuk('7<i>a</i> - 2','\u00A0\u00A0 3 \u00A0\u00A0','opgave'));
  oe_104K01_1_s1.appendChild(htmlSpan(' + '));
  oe_104K01_1_s1.appendChild(maakBreuk('<i>a</i> + 5','\u00A0\u00A0 2 \u00A0\u00A0','opgave'));
  oe_104K01_1.appendChild(oe_104K01_1_s1); 

  const oe_104K01_2 = document.createElement('span');
  const oe_104K01_2_s1 = document.createElement('span');
  oe_104K01_2_s1.appendChild(htmlSpan('= '));
  oe_104K01_2_s1.appendChild(maakBreuk('1','3','opgave'));
  oe_104K01_2_s1.appendChild(htmlSpan('(7<i>a</i> - 2) + '));
  oe_104K01_2_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_104K01_2_s1.appendChild(htmlSpan('(<i>a</i> + 5)'));
  oe_104K01_2.appendChild(oe_104K01_2_s1);

  const oe_104K01_3 = document.createElement('span');
  oe_104K01_3.appendChild(htmlSpan('='));
  oe_104K01_3.appendChild(htmlSpan(' '));
  const oe_104K01_3_s3 = document.createElement('span');
  oe_104K01_3_s3.appendChild(maakBreuk('7','3','opgave'));
  oe_104K01_3_s3.appendChild(htmlSpan('<i>a</i>'));
  oe_104K01_3.appendChild(maakOnderstreping(oe_104K01_3_s3, 'enkel', '0.08cm', true));
  oe_104K01_3.appendChild(htmlSpan(' '));
  const oe_104K01_3_s5 = document.createElement('span');
  oe_104K01_3_s5.appendChild(htmlSpan('- '));
  oe_104K01_3_s5.appendChild(maakBreuk('2','3','opgave'));
  oe_104K01_3.appendChild(maakOnderstreping(oe_104K01_3_s5, 'dubbel', '0.16cm', true));
  oe_104K01_3.appendChild(htmlSpan(' '));
  const oe_104K01_3_s7 = document.createElement('span');
  oe_104K01_3_s7.appendChild(htmlSpan('+ '));
  oe_104K01_3_s7.appendChild(maakBreuk('1','2','opgave'));
  oe_104K01_3_s7.appendChild(htmlSpan('<i>a</i>'));
  oe_104K01_3.appendChild(maakOnderstreping(oe_104K01_3_s7, 'enkel', '0.08cm', true));
  oe_104K01_3.appendChild(htmlSpan(' '));
  const oe_104K01_3_s9 = document.createElement('span');
  oe_104K01_3_s9.appendChild(htmlSpan('+ '));
  oe_104K01_3_s9.appendChild(maakBreuk('5','2','opgave'));
  oe_104K01_3.appendChild(maakOnderstreping(oe_104K01_3_s9, 'dubbel', '0.16cm', true));

  const oe_104K01_4 = document.createElement('span');
  oe_104K01_4.appendChild(htmlSpan('='));
  oe_104K01_4.appendChild(htmlSpan(' '));
  const oe_104K01_4_s3 = document.createElement('span');
  oe_104K01_4_s3.appendChild(maakBreuk('14','6','opgave'));
  oe_104K01_4_s3.appendChild(htmlSpan('<i>a</i>'));
  oe_104K01_4.appendChild(maakOnderstreping(oe_104K01_4_s3, 'enkel', '0.1cm', true));
  oe_104K01_4.appendChild(htmlSpan(' '));
  const oe_104K01_4_s5 = document.createElement('span');
  oe_104K01_4_s5.appendChild(htmlSpan('- '));
  oe_104K01_4_s5.appendChild(maakBreuk('4','6','opgave'));
  oe_104K01_4.appendChild(maakOnderstreping(oe_104K01_4_s5, 'dubbel', '0.18cm', true));
  oe_104K01_4.appendChild(htmlSpan(' '));
  const oe_104K01_4_s7 = document.createElement('span');
  oe_104K01_4_s7.appendChild(htmlSpan('+ '));
  oe_104K01_4_s7.appendChild(maakBreuk('3','6','opgave'));
  oe_104K01_4_s7.appendChild(htmlSpan('<i>a</i>'));
  oe_104K01_4.appendChild(maakOnderstreping(oe_104K01_4_s7, 'enkel', '0.1cm', true));
  oe_104K01_4.appendChild(htmlSpan(' '));
  const oe_104K01_4_s9 = document.createElement('span');
  oe_104K01_4_s9.appendChild(htmlSpan('+ '));
  oe_104K01_4_s9.appendChild(maakBreuk('15','6','opgave'));
  oe_104K01_4.appendChild(maakOnderstreping(oe_104K01_4_s9, 'dubbel', '0.18cm', true));

  const oe_104K01_5 = document.createElement('span');
  const oe_104K01_5_s1 = document.createElement('span');
  oe_104K01_5_s1.appendChild(htmlSpan('= '));
  oe_104K01_5_s1.appendChild(maakBreuk('17','6','opgave'));
  oe_104K01_5_s1.appendChild(htmlSpan('<i>a</i> + '));
  oe_104K01_5_s1.appendChild(maakBreuk('11','6','opgave'));
  oe_104K01_5.appendChild(oe_104K01_5_s1);

  const oe_104K01_6 = document.createElement('span');
  const oe_104K01_6_s1 = document.createElement('span');
  oe_104K01_6_s1.appendChild(maakBreuk('-<i>x</i> + 4','\u00A0\u00A0 5 \u00A0\u00A0','opgave'));
  oe_104K01_6_s1.appendChild(htmlSpan(' - '));
  oe_104K01_6_s1.appendChild(maakBreuk('<i>x</i> - 2','\u00A0\u00A0 2 \u00A0\u00A0','opgave'));
  oe_104K01_6.appendChild(oe_104K01_6_s1);

  const oe_104K01_7 = document.createElement('span');
  const oe_104K01_7_s1 = document.createElement('span');
  oe_104K01_7_s1.appendChild(htmlSpan('= '));
  oe_104K01_7_s1.appendChild(maakBreuk('1','5','opgave'));
  oe_104K01_7_s1.appendChild(htmlSpan('(-<i>x</i> + 4) - '));
  oe_104K01_7_s1.appendChild(maakBreuk('1','2','opgave'));
  oe_104K01_7_s1.appendChild(htmlSpan('(<i>x</i> - 2)'));
  oe_104K01_7.appendChild(oe_104K01_7_s1);

  const oe_104K01_8 = document.createElement('span');
  oe_104K01_8.appendChild(htmlSpan('='));
  oe_104K01_8.appendChild(htmlSpan(' '));
  const oe_104K01_8_s3 = document.createElement('span');
  oe_104K01_8_s3.appendChild(maakBreuk('-1','5','opgave'));
  oe_104K01_8_s3.appendChild(htmlSpan('<i>x</i>'));
  oe_104K01_8.appendChild(maakOnderstreping(oe_104K01_8_s3, 'enkel', '0.08cm', true));
  oe_104K01_8.appendChild(htmlSpan(' '));
  const oe_104K01_8_s5 = document.createElement('span');
  oe_104K01_8_s5.appendChild(htmlSpan('+ '));
  oe_104K01_8_s5.appendChild(maakBreuk('4','5','opgave'));
  oe_104K01_8.appendChild(maakOnderstreping(oe_104K01_8_s5, 'dubbel', '0.16cm', true));
  oe_104K01_8.appendChild(htmlSpan(' '));
  const oe_104K01_8_s7 = document.createElement('span');
  oe_104K01_8_s7.appendChild(htmlSpan('- '));
  oe_104K01_8_s7.appendChild(maakBreuk('1','2','opgave'));
  oe_104K01_8_s7.appendChild(htmlSpan('<i>x</i>'));
  oe_104K01_8.appendChild(maakOnderstreping(oe_104K01_8_s7, 'enkel', '0.08cm', true));
  oe_104K01_8.appendChild(htmlSpan(' '));
  oe_104K01_8.appendChild(maakOnderstreping(htmlSpan('+ 1'), 'dubbel', '0.18cm', true));

  const oe_104K01_9 = document.createElement('span');
  oe_104K01_9.appendChild(htmlSpan('='));
  oe_104K01_9.appendChild(htmlSpan(' '));
  const oe_104K01_9_s3 = document.createElement('span');
  oe_104K01_9_s3.appendChild(maakBreuk('-2','10','opgave'));
  oe_104K01_9_s3.appendChild(htmlSpan('<i>x</i>'));
  oe_104K01_9.appendChild(maakOnderstreping(oe_104K01_9_s3, 'enkel', '0.1cm', true));
  oe_104K01_9.appendChild(htmlSpan(' '));
  const oe_104K01_9_s5 = document.createElement('span');
  oe_104K01_9_s5.appendChild(htmlSpan('+ '));
  oe_104K01_9_s5.appendChild(maakBreuk('4','5','opgave'));
  oe_104K01_9.appendChild(maakOnderstreping(oe_104K01_9_s5, 'dubbel', '0.18cm', true));
  oe_104K01_9.appendChild(htmlSpan(' '));
  const oe_104K01_9_s7 = document.createElement('span');
  oe_104K01_9_s7.appendChild(htmlSpan('- '));
  oe_104K01_9_s7.appendChild(maakBreuk('5','10','opgave'));
  oe_104K01_9_s7.appendChild(htmlSpan('<i>x</i>'));
  oe_104K01_9.appendChild(maakOnderstreping(oe_104K01_9_s7, 'enkel', '0.1cm', true));
  oe_104K01_9.appendChild(htmlSpan(' '));
  const oe_104K01_9_s9 = document.createElement('span');
  oe_104K01_9_s9.appendChild(htmlSpan('+ '));
  oe_104K01_9_s9.appendChild(maakBreuk('5','5','opgave'));
  oe_104K01_9.appendChild(maakOnderstreping(oe_104K01_9_s9, 'dubbel', '0.18cm', true));

  const oe_104K01_10 = document.createElement('span');
  const oe_104K01_10_s1 = document.createElement('span');
  oe_104K01_10_s1.appendChild(htmlSpan('= '));
  oe_104K01_10_s1.appendChild(maakBreuk('-7','10','opgave'));
  oe_104K01_10_s1.appendChild(htmlSpan('<i>x</i> + '));
  oe_104K01_10_s1.appendChild(maakBreuk('9','5','opgave'));
  oe_104K01_10.appendChild(oe_104K01_10_s1);

  const inhoud = maakOefening({
    id:'oe_104K01', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk verder uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_104K01_1, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_104K01_6, true);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_104K01_3,
    oe_104K01_4,
    oe_104K01_5
  ];
  const oplB = [
    oe_104K01_8,
    oe_104K01_9,
    oe_104K01_10
  ];

  const trH = document.createElement('tr');
  const tdAH = maakSlTd(oe_104K01_2, true);
  tdAH.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdAH.classList.add('kolom-links');
  tdAH.style.position = 'relative';
  trH.appendChild(tdAH);
  const tdBH = maakSlTd(oe_104K01_7, true);
  tdBH.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdBH.classList.add('kolom-rechts');
  tdBH.style.position = 'relative';
  trH.appendChild(tdBH);
  tbody.appendChild(trH);

  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  //opgave a.1
  maak2Parabolen(tdAH, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.5,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave a.2
  maak2Parabolen(tdAH, {
    sx: 3.0,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

  //opgave b.1
  maak2Parabolen(tdBH, {
    sx: 1.35,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b.2
  maak2Parabolen(tdBH, {
    sx: 3.2,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  


})();
