/* ============================================================
   H10 / P10.4 / oe_001.js — Oppervlakte rechthoeken
   soort: inoefenen | niveaus: cirkel, vierkant, zeshoek
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_001', nummer:'7', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'],
    tools:[], toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud,
    'Bereken.',
    ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdA = maakOpTdaz('a', '(7<i>a</i> − 2) · 3',false);
  tdA.classList.add('kolom-links');
  trL1.appendChild(tdA);
  tbody.appendChild(trL1);

  /* Rijen 2-4: schrijflijnen + oplossing */
  const oplA = [
    '(5<i>a</i> \u200A \u2212 2) \u00B7 3',
    '= 5<i>a</i> \u200A \u00B7 3 \u2212 2 \u00B7 3',
    '= 15<i>a</i> \u200A \u2212 6'
  ];

  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    tbody.appendChild(tr);
  }

  /* Rij 1': labels */
  const trL2 = document.createElement('tr');
  const tdB = maakOpTdaz('b', '(7<i>a</i> − 2) · 3',false);
  tdB.classList.add('kolom-links');
  trL2.appendChild(tdB);
  tbody.appendChild(trL2);

  /* Rijen 2'-4': schrijflijnen + oplossing */
  const oplB = [
    '(5<i>a</i> \u200A \u2212 2) \u00B7 3',
    '= 5<i>a</i> \u200A \u00B7 3 \u2212 2 \u00B7 3',
    '= 15<i>a</i> \u200A \u2212 6'
  ];

  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }


})();