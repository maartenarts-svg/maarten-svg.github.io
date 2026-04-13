// LET OP: voorgedrukte oplossingen gebruiken de klasse 'opl-vast'.
// Pas in helpers.js de badge-toggle aan zodat .opl-vast altijd zichtbaar blijft:
//
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_1 / oe_101002.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101002', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit met de associatieve eigenschap.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '7 · 1,25 · 4', false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', '17 + 44 + 36', false);
  tdLblB.classList.add('kolom-midden');
  trL1.appendChild(tdLblB);
  const tdLblC = maakOpTdaz('c', '17 · (-2,5) · (-4)', false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    '= 7 · (1,25 · 4)',
    '= 7 · 5',
    '= 35'
  ];
  const oplB = [
    '= 17 + (44 + 36)',
    '= 17 + 80',
    '= 97'
  ];
  const oplC = [
    '= 17 · (-2,5 · (-4))',
    '= 17 · 10',
    '= 170'
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

})();
