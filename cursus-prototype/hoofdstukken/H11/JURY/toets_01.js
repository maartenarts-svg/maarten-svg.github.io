/* ============================================================
   H?? / P?? / toets_01.js
   soort: test
   ============================================================ */
(function () {

  /* 
  ---- Variabelen van leerling ---- 
  → tussenstap enkel vullen als leerling een tussenstap heeft
  → elke tussenstap die een leelring heeft, beginnen met = 
  ---------------------------------
  */

  const vraag1_1 = htmlSpan(''); //→eerste tussenstaap vraag 1
  const vraag1_2 = htmlSpan(''); //→tweede tussenstaap vraag 1

  const vraag2_1 = htmlSpan(''); //→eerste tussenstaap vraag 2
  const vraag2_2 = htmlSpan(''); //→tweede tussenstaap vraag 2

  const vraag3_1 = htmlSpan(''); //→eerste tussenstaap vraag 3
  const vraag3_2 = htmlSpan(''); //→tweede tussenstaap vraag 3

  const vraag4_1 = htmlSpan(''); //→eerste tussenstaap vraag 4
  const vraag4_2 = htmlSpan(''); //→tweede tussenstaap vraag 4

  const vraag5_1 = htmlSpan(''); //→eerste tussenstaap vraag 5
  const vraag5_2 = htmlSpan(''); //→tweede tussenstaap vraag 5

  const vraag6_1 = htmlSpan(''); //→eerste tussenstaap vraag 6
  const vraag6_2 = htmlSpan(''); //→tweede tussenstaap vraag 6

  /* ---- Span-variabelen ---- */
  const vraag1 = document.createElement('span');
  vraag1.appendChild(htmlSpan('15 - 27'));

  const vraag2 = document.createElement('span');
  vraag2.appendChild(htmlSpan('-18 - 12'));

  const vraag3 = document.createElement('span');
  vraag3.appendChild(htmlSpan('100 - (-97)'));

  const vraag4 = document.createElement('span');
  vraag4.appendChild(htmlSpan('-20 + (-25)'));

  const vraag5 = document.createElement('span');
  vraag5.appendChild(htmlSpan('25 · (-4)'));

  const vraag6 = document.createElement('span');
  vraag6.appendChild(htmlSpan('-90 : (-9)'));

  const inhoud = maakOefening({
    id:'toets_01', nummer:'1', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);


  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', vraag1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', vraag3, false);
  tdLblC.classList.add('kolom-midden');
  trL1.appendChild(tdLblC);
  const tdLblE = maakOpTdaz('e', vraag5, false);
  tdLblE.classList.add('kolom-rechts');
  trL1.appendChild(tdLblE);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    vraag1_1,
    vraag1_2,
  ];
  const oplC = [
    vraag3_1,
    vraag3_2,
  ];
  const oplE = [
    vraag5_1,
    vraag5_2,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-midden');
    tr.appendChild(tdC);
    const tdE = maakSlTd(oplE[i], false);
    tdE.classList.add('kolom-rechts');
    tr.appendChild(tdE);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', vraag2, false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', vraag4, false);
  tdLblD.classList.add('kolom-midden');
  trL2.appendChild(tdLblD);
  const tdLblF = maakOpTdaz('f', vraag6, false);
  tdLblF.classList.add('kolom-rechts');
  trL2.appendChild(tdLblF);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    vraag2_1,
    vraag2_2,
  ];
  const oplD = [
    vraag4_1,
    vraag4_2,
  ];
  const oplF = [
    vraag6_1,
    vraag6_2,
  ];
  for (let i=0; i<2; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], false);
    tdD.classList.add('kolom-midden');
    tr.appendChild(tdD);
    const tdF = maakSlTd(oplF[i], false);
    tdF.classList.add('kolom-rechts');
    tr.appendChild(tdF);
    tbody.appendChild(tr);
  }

})();
