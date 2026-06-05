/* ============================================================
   H?? / P?? / toets_02.js
   soort: test
   ============================================================ */
(function () {

  /* 
  ---- Variabelen van leerling ---- 
  → tussenstap enkel vullen als leerling een tussenstap heeft
  → elke tussenstap die een leelring heeft, beginnen met = 
  → gebruik de functie maakbreuk('teller','noemer','opgave') om breuken te noteren; 'opgave' heeft nu geen enkele betekenis, dus telkens letterlijk dat
  ---------------------------------
  */

  const vraag1_1 = htmlSpan(''); //→eerste tussenstaap vraag 1
  const vraag1_2 = htmlSpan(''); //→tweede tussenstaap vraag 1
  const vraag1_3 = htmlSpan(''); //→eerste tussenstaap vraag 1
  const vraag1_4 = htmlSpan(''); //→tweede tussenstaap vraag 1 
  const vraag1_5 = htmlSpan(''); //→eerste tussenstaap vraag 1
  const vraag1_6 = htmlSpan(''); //→tweede tussenstaap vraag 1 

  const vraag2_1 = htmlSpan(''); //→eerste tussenstaap vraag 2
  const vraag2_2 = htmlSpan(''); //→tweede tussenstaap vraag 2
  const vraag2_3 = htmlSpan(''); //→eerste tussenstaap vraag 2
  const vraag2_4 = htmlSpan(''); //→tweede tussenstaap vraag 2 
  const vraag2_5 = htmlSpan(''); //→eerste tussenstaap vraag 2
  const vraag2_6 = htmlSpan(''); //→tweede tussenstaap vraag 2   

  const vraag3_1 = htmlSpan(''); //→eerste tussenstaap vraag 3
  const vraag3_2 = htmlSpan(''); //→tweede tussenstaap vraag 3
  const vraag3_3 = htmlSpan(''); //→eerste tussenstaap vraag 3
  const vraag3_4 = htmlSpan(''); //→tweede tussenstaap vraag 3
  const vraag3_5 = htmlSpan(''); //→eerste tussenstaap vraag 3
  const vraag3_6 = htmlSpan(''); //→tweede tussenstaap vraag 3

  /* ---- Span-variabelen ---- */
  const vraag1 = document.createElement('span');
  vraag1.appendChild(maakBreuk('1','3','opgave'));
  vraag1.appendChild(htmlSpan(' + '));
  vraag1.appendChild(maakBreuk('1','6','opgave'));

  const vraag2 = document.createElement('span');
  vraag2.appendChild(maakBreuk('-5','4','opgave'));
  vraag2.appendChild(htmlSpan(' · '));
  vraag2.appendChild(maakBreuk('2','7','opgave'));

  const vraag3 = document.createElement('span');
  vraag3.appendChild(maakBreuk('5','9','opgave'));
  vraag3.appendChild(htmlSpan(' : '));
  vraag3.appendChild(maakBreuk('2','5','opgave'));

  const inhoud = maakOefening({
    id:'toets_02', nummer:'2', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', vraag1, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', vraag2, true);
  tdLblB.classList.add('kolom-midden');
  trL1.appendChild(tdLblB);
  const tdLblC = maakOpTdaz('c', vraag3, true);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    vraag1_1,
    vraag1_2,
    vraag1_3,
    vraag1_4,
    vraag1_5,
    vraag1_6
  ];
  const oplB = [
    vraag2_1,
    vraag2_2,
    vraag2_3,
    vraag2_4,
    vraag2_5,
    vraag2_6
  ];
  const oplC = [
    vraag3_1,
    vraag3_2,
    vraag3_3,
    vraag3_4,
    vraag3_5,
    vraag3_6
  ];
  for (let i=0; i<6; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-midden');
    tr.appendChild(tdB);
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

})();
