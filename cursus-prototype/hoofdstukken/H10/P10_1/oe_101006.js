/* ============================================================
   H10 / P10_1 / oe_101005.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101005', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit met de distributieve eigenschap.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '30 · 27', false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', '80 · 12', false);
  tdLblB.classList.add('kolom-midden');
  trL1.appendChild(tdLblB);
  const tdLblC = maakOpTdaz('c', '3,8 · 7', false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const tr = document.createElement('tr');
  const tdA = maakSlTd('= 30 · (20 + 7)', false);
  tdA.style.position = 'relative';
  tdA.classList.add('kolom-links');
  tr.appendChild(tdA);
  const tdB = maakSlTd('= 80 · (10 + 2)', false);
  tdB.classList.add('kolom-midden');
  tdB.style.position = 'relative';
  tr.appendChild(tdB);
  const tdC = maakSlTd('= (3 + 0,8) · 7', false);
  tdC.classList.add('kolom-rechts');
  tdC.style.position = 'relative';
  tr.appendChild(tdC);
  tbody.appendChild(tr);  

  /* Oplossingen anderen rijen */
  const oplA = [
    '= 30 · 20 + 30 · 7',
    '= 600 + 210',
    '= 810'
  ];
  const oplB = [
    '= 80 · 10 + 80 · 2',
    '= 800 + 160',
    '= 960'
  ];
  const oplC = [
    '= 3 · 7 + 0,8 · 7',
    '= 21 + 5,6',
    '= 26,6'
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-midden');
    tr.appendChild(tdB);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  //opgave a
  maak2Parabolen(tdA, {
    sx: 1.2,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.5,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.85,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdB, {
    sx: 1.35,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.5,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.85,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdC, {
    sx: 1.35,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.55,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.7,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
