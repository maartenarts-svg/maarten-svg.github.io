// LET OP: voorgedrukte oplossingen gebruiken de klasse 'opl-vast'.
// Pas in helpers.js de badge-toggle aan zodat .opl-vast altijd zichtbaar blijft:
//
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_1 / oe_101006.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101006', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit met de distributieve eigenschap zoals het voorbeeld.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '7 · 13 + 3 · 13', false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', '64 · 23 + 36 · 23', false);
  tdLblB.classList.add('kolom-midden');
  trL1.appendChild(tdLblB);
  const tdLblC = maakOpTdaz('c', '44 · (-6) + 44 · 16', false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    '= (7 + 3) · 13',
    '= 10 · 13',
    '= 130'
  ];
  const oplB = [
    '= (64 + 36) · 23',
    '= 100 · 23',
    '= 2 300'
  ];
  const oplC = [
    '= 44 · (-6 + 16)',
    '= 44 · 10',
    '= 440'
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
