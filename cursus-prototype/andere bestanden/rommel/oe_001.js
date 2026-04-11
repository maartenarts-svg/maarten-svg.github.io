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
  const trL = document.createElement('tr');
  ['a','b'].forEach((ltr,i) => {
    const td = document.createElement('td');
    td.classList.add(i===0?'kolom-links':'kolom-rechts');
    const lbl = document.createElement('span');
    lbl.classList.add('subopgave-label');
    lbl.innerHTML = `${ltr}<span class="streep">|</span>`;
    td.appendChild(lbl);
    trL.appendChild(td);
  });
  tbody.appendChild(trL);

  /* Rij 2: figuren */
  const trF = document.createElement('tr');
  const tdFA = document.createElement('td');
  tdFA.classList.add('figuur-cel','kolom-links');
  tekenRechthoek(tdFA, '5a \u2212 2', '3');
  trF.appendChild(tdFA);
  const tdFB = document.createElement('td');
  tdFB.classList.add('figuur-cel','kolom-rechts');
  tekenRechthoek(tdFB, '12', '5z + 1');
  trF.appendChild(tdFB);
  tbody.appendChild(trF);

  /* Rijen 3-5: schrijflijnen + oplossing */
  const oplA = [
    '(5<i>a</i> \u200A \u2212 2) \u00B7 3',
    '= 5<i>a</i> \u200A \u00B7 3 \u2212 2 \u00B7 3',
    '= 15<i>a</i> \u200A \u2212 6'
  ];
  const oplB = [
    '12 \u00B7 (5<i>z</i> \u200A + 1)',
    '= 12 \u00B7 5<i>z</i> \u200A + 12 \u00B7 1',
    '= 60<i>z</i> \u200A + 12'
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