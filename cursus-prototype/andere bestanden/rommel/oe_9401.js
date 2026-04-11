/* ============================================================
   H10 / P10_4 / oe_9401.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_9401', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '5 - (-7)', true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblD = maakOpTdaz('d', '5<i>a</i> - 3<i>a</i>', true);
  tdLblD.classList.add('kolom-rechts');
  trL1.appendChild(tdLblD);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    '= 5 + 7',
    '= 12'
  ];
  const oplD = [
    '= 2<i>a</i>',
    ''
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdD = maakSlTd(oplD[i], true);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', 'B1 + B1', true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblE = maakOpTdaz('e', '-3 · 7<i>xy</i>', true);
  tdLblE.classList.add('kolom-rechts');
  trL2.appendChild(tdLblE);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    '= B2',
    '= 1'
  ];
  const oplE = [
    '= -21<i>xy</i>',
    ''
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdE = maakSlTd(oplE[i], true);
    tdE.classList.add('kolom-rechts');
    tr.appendChild(tdE);
    tbody.appendChild(tr);
  }

  /* Rij 3: labels */
  const trL3 = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', 'B3 + B3', true);
  tdLblC.classList.add('kolom-links');
  trL3.appendChild(tdLblC);
  const tdLblF = maakOpTdaz('f', '-3(2 + 4<i>x</i>)', true);
  tdLblF.classList.add('kolom-rechts');
  trL3.appendChild(tdLblF);
  tbody.appendChild(trL3);

  /* Oplossingen rij 3 */
  const oplC = [
    '= B4',
    '= 0'
  ];
  const oplF = [
    '= -3 · 2 - 3 · 4<i>x</i>',
    '= -6 - 12<i>x</i>'
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-links');
    tr.appendChild(tdC);
    const tdF = maakSlTd(oplF[i], true);
    tdF.classList.add('kolom-rechts');
    tr.appendChild(tdF);
    tbody.appendChild(tr);
  }

})();
