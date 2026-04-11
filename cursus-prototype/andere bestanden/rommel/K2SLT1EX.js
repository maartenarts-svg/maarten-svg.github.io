/* ============================================================
   H10 / P10.4 / oe_001.js — Oppervlakte rechthoeken
   soort: inoefenen | niveaus: cirkel, vierkant, zeshoek
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_001', nummer:'13', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'],
    tools:[], toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud,
    'Bereken de getalwaarde.',
    ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const BREEDTE = '3.5cm';

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdA = maakOpTdazExtra('a', '(7<i>a</i> − 2) · 3', 'voor <i>a</i> = 5',BREEDTE, false);
  tdA.classList.add('kolom-links');
  trL1.appendChild(tdA);
  const tdC = maakOpTdazExtra('c', '12 · (5<i>z</i> + 1)', 'voor <i>z</i> = -2',BREEDTE, false);
  tdC.classList.add('kolom-rechts');
  trL1.appendChild(tdC);
  tbody.appendChild(trL1);

  /* Rijen 2-5: schrijflijnen + oplossing */
  const oplA = [
    '(7 \u00B7 \u200A <span style="color: #b266ff;">5</span> \u200A \u2212 2) \u00B7 3',
    '= (35 \u2212 2) \u00B7 3',
    '= 33 \u00B7 3',
    '= 99'
  ];
  const oplC = [
    '12 \u00B7 (5 \u00B7 \u200A <span style="color: #b266ff;">(-2)</span> \u200A + 1)',
    '= 12 \u00B7 (-10 \u200A + 1)',
    '= 12 \u00B7 (-9)',
    '= -108'
  ];

  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 1': labels */
  const trL2 = document.createElement('tr');
  const tdB = maakOpTdazExtra('b', '(7<i>a</i> − 2) · 3', 'voor <i>a</i> = 5',BREEDTE, false);
  tdB.classList.add('kolom-links');
  trL2.appendChild(tdB);
  const tdD = maakOpTdazExtra('d', '12 · (5<i>z</i> + 1)', 'voor <i>z</i> = -2',BREEDTE, false);
  tdD.classList.add('kolom-rechts');
  trL2.appendChild(tdD);
  tbody.appendChild(trL2);

  /* Rijen 2'-5': schrijflijnen + oplossing */
  const oplB = [
    '(7 \u00B7 \u200A <span style="color: #b266ff;">5</span> \u200A \u2212 2) \u00B7 3',
    '= (35 \u2212 2) \u00B7 3',
    '= 33 \u00B7 3',
    '= 99'
  ];
  const oplD = [
    '12 \u00B7 (5 \u00B7 \u200A <span style="color: #b266ff;">(-2)</span> \u200A + 1)',
    '= 12 \u00B7 (-10 \u200A + 1)',
    '= 12 \u00B7 (-9)',
    '= -108'
  ];

  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], false);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

})();