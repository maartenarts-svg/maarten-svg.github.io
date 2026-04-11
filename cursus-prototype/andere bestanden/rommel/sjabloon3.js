/* ============================================================
   H10 / P10.4 / oe_001.js — Oppervlakte rechthoeken
   soort: inoefenen | niveaus: cirkel, vierkant, zeshoek
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_001', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'],
    tools:[], toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud,
    'Noteer de oppervlakte van elke rechthoek zo kort mogelijk.',
    ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdA = maakOpTdaz('a', '(5<i>a</i> − 2) · 3',false);
  tdA.classList.add('kolom-links');
  trL1.appendChild(tdA);
  const tdB = maakOpTdaz('10', '12 · (5<i>z</i> + 1)');
  tdB.classList.add('kolom-rechts');
  trL1.appendChild(tdB);
  tbody.appendChild(trL1);

  /* Rijen 3-5: schrijflijnen + oplossing */
  const oplA = [
    '(5<i>a</i> \u2212 2) \u00B7 3',
    '= 5<i>a</i> \u00B7 3 \u2212 2 \u00B7 3',
    '= 15<i>a</i> \u2212 6'
  ];
  const oplB = [
    '12 \u00B7 (5<i>z</i> + 1)',
    '= 12 \u00B7 5<i>z</i> + 12 \u00B7 1',
    '= 60<i>z</i> + 12'
  ];

  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

})();