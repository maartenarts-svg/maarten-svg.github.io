// LET OP: voorgedrukte oplossingen gebruiken de klasse 'opl-vast'.
// Pas in helpers.js de badge-toggle aan zodat .opl-vast altijd zichtbaar blijft:
//
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_1 / oe_101003.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101003', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });
  inhoud.style.position = 'relative';  // ← dit toevoegen

  voegTekstToe(inhoud, 'Werk uit met de distributieve eigenschap.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '-17 · 8', false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', '77 · 101', false);
  tdLblB.classList.add('kolom-midden');
  trL1.appendChild(tdLblB);
  const tdLblC = maakOpTdaz('c', '27 · 7', false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen eerste rij */
  const tr = document.createElement('tr');
  const tdA = maakSlTd('= (-10 - 7) · 8', false);
  tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdA.classList.add('kolom-links');
  tdA.style.position = 'relative';
  tr.appendChild(tdA);
  const tdB = maakSlTd('= 77 · (100 + 1)', false);
  tdB.classList.add('kolom-midden');
  tdB.style.position = 'relative';
  tr.appendChild(tdB);
  const tdC = maakSlTd('= (20 + 7) · 7', false);
  tdC.classList.add('kolom-rechts');
  tdC.style.position = 'relative';
  tr.appendChild(tdC);
  tbody.appendChild(tr);  

  /* Oplossingen rij 1 */
  const oplA = [
    '= -10 · 8 - 7 · 8',
    '= -80 - 56',
    '= -136'
  ];
  const oplB = [
    '= 77 · 100 + 77 · 1',
    '= 7 700 + 77',
    '= 7 777'
  ];
  const oplC = [
    '= 20 · 7 + 7 · 7',
    '= 140 + 49',
    '= 189'
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    if (i===0) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===1) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===2) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
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
    sx: 1.3,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.35,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.6,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdB, {
    sx: 1.3,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.7,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 1.0,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdC, {
    sx: 1.4,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.35,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.6,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
