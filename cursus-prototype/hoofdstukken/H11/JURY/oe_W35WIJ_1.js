/* ============================================================
   JURY / oe_W35WIJ_1.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const ruimte1 = '1.4cm';
  const SCT = document.createElement('span');
  SCT.appendChild(htmlSpan('SC:'));
  SCT.classList.add('theorie');
  const THT = document.createElement('span');
  THT.appendChild(htmlSpan('theorie:'));
  THT.classList.add('theorie');

  const W35WIJ_1_1 = document.createElement('span');
  const W35WIJ_1_1_s1 = document.createElement('span');
  W35WIJ_1_1_s1.appendChild(maakBreuk('5','3','opgave'));
  W35WIJ_1_1_s1.appendChild(htmlSpan(' - '));
  W35WIJ_1_1_s1.appendChild(maakBreuk('-1','2','opgave'));
  W35WIJ_1_1.appendChild(W35WIJ_1_1_s1);

  const W35WIJ_1_2 = document.createElement('span');
  const W35WIJ_1_2_s1 = document.createElement('span');
  W35WIJ_1_2_s1.appendChild(htmlSpan('= '));
  W35WIJ_1_2_s1.appendChild(maakBreuk('5','3','opgave'));
  W35WIJ_1_2_s1.appendChild(htmlSpan(' + '));
  W35WIJ_1_2_s1.appendChild(maakBreuk('1','2','opgave'));
  W35WIJ_1_2.appendChild(W35WIJ_1_2_s1);

  const W35WIJ_1_4 = document.createElement('span');
  const W35WIJ_1_4_s1 = document.createElement('span');
  W35WIJ_1_4_s1.appendChild(htmlSpan('= '));
  W35WIJ_1_4_s1.appendChild(maakBreuk('10','6','opgave'));
  W35WIJ_1_4_s1.appendChild(htmlSpan(' + '));
  W35WIJ_1_4_s1.appendChild(maakBreuk('3','6','opgave'));
  W35WIJ_1_4.appendChild(W35WIJ_1_4_s1);

  const W35WIJ_1_5 = document.createElement('span');
  const W35WIJ_1_5_s1 = document.createElement('span');
  W35WIJ_1_5_s1.appendChild(htmlSpan('= '));
  W35WIJ_1_5_s1.appendChild(maakBreuk('10 + 3','\u200A \u200A \u200A 6 \u200A \u200A \u200A','opgave'));
  W35WIJ_1_5.appendChild(W35WIJ_1_5_s1);

  const W35WIJ_1_10 = document.createElement('span');
  const W35WIJ_1_10_s1 = document.createElement('span');
  W35WIJ_1_10_s1.appendChild(htmlSpan('= '));
  W35WIJ_1_10_s1.appendChild(maakBreuk('13','6','opgave'));
  W35WIJ_1_10.appendChild(W35WIJ_1_10_s1);

  const W35WIJ_1_6 = document.createElement('span');
  const W35WIJ_1_6_s1 = document.createElement('span');
  W35WIJ_1_6_s1.appendChild(maakBreuk('-8','3','opgave'));
  W35WIJ_1_6_s1.appendChild(htmlSpan(' : '));
  W35WIJ_1_6_s1.appendChild(maakBreuk('5','7','opgave'));
  W35WIJ_1_6.appendChild(W35WIJ_1_6_s1);

  const W35WIJ_1_7 = document.createElement('span');
  const W35WIJ_1_7_s1 = document.createElement('span');
  W35WIJ_1_7_s1.appendChild(htmlSpan('= '));
  W35WIJ_1_7_s1.appendChild(maakBreuk('-8','3','opgave'));
  W35WIJ_1_7_s1.appendChild(htmlSpan(' · '));
  W35WIJ_1_7_s1.appendChild(maakBreuk('7','5','opgave'));
  W35WIJ_1_7.appendChild(W35WIJ_1_7_s1);

  const W35WIJ_1_8 = document.createElement('span');
  const W35WIJ_1_8_s1 = document.createElement('span');
  W35WIJ_1_8_s1.appendChild(htmlSpan('= '));
  W35WIJ_1_8_s1.appendChild(maakBreuk('-8 · 7','3 · 5','opgave'));
  W35WIJ_1_8.appendChild(W35WIJ_1_8_s1);

  const W35WIJ_1_9 = document.createElement('span');
  const W35WIJ_1_9_s1 = document.createElement('span');
  W35WIJ_1_9_s1.appendChild(htmlSpan('= '));
  W35WIJ_1_9_s1.appendChild(maakBreuk('-56','15','opgave'));
  W35WIJ_1_9.appendChild(W35WIJ_1_9_s1);

  const inhoud = maakOefening({
    id:'W35WIJ_1', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', W35WIJ_1_1, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', W35WIJ_1_6, true);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    W35WIJ_1_2,
    W35WIJ_1_4,
    W35WIJ_1_5,
    W35WIJ_1_10,
  ];
  const oplB = [
    W35WIJ_1_7,
    W35WIJ_1_8,
    W35WIJ_1_9,
    null,
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], true);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  /* succescriteria */

  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("",SCT.cloneNode(true),ruimte1,false,"1, 2, 5");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("",SCT.cloneNode(true),ruimte1,false,"3, 4, 5");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

  /* theorie */
  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("",THT.cloneNode(true),ruimte1,false," ");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("",THT.cloneNode(true),ruimte1,false," ");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

})();
