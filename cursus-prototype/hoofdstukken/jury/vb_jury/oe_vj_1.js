/* ============================================================
   vb_jury / oe_vj_1.js
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

  const vj_1_1 = document.createElement('span');
  const vj_1_1_s1 = document.createElement('span');
  vj_1_1_s1.appendChild(maakBreuk('5','3','opgave'));
  vj_1_1_s1.appendChild(htmlSpan(' - '));
  vj_1_1_s1.appendChild(maakBreuk('-1','2','opgave'));
  vj_1_1.appendChild(vj_1_1_s1);

  const vj_1_2 = document.createElement('span');
  const vj_1_2_s1 = document.createElement('span');
  vj_1_2_s1.appendChild(htmlSpan('= '));
  vj_1_2_s1.appendChild(maakBreuk('5','3','opgave'));
  vj_1_2_s1.appendChild(htmlSpan(' + '));
  vj_1_2_s1.appendChild(maakBreuk('1','2','opgave'));
  vj_1_2.appendChild(vj_1_2_s1);

  const vj_1_4 = document.createElement('span');
  const vj_1_4_s1 = document.createElement('span');
  vj_1_4_s1.appendChild(htmlSpan('= '));
  vj_1_4_s1.appendChild(maakBreuk('10','6','opgave'));
  vj_1_4_s1.appendChild(htmlSpan(' + '));
  vj_1_4_s1.appendChild(maakBreuk('3','6','opgave'));
  vj_1_4.appendChild(vj_1_4_s1);

  const vj_1_5 = document.createElement('span');
  const vj_1_5_s1 = document.createElement('span');
  vj_1_5_s1.appendChild(htmlSpan('= '));
  vj_1_5_s1.appendChild(maakBreuk('10 + 3','\u200A \u200A \u200A 6 \u200A \u200A \u200A','opgave'));
  vj_1_5.appendChild(vj_1_5_s1);

  const vj_1_10 = document.createElement('span');
  const vj_1_10_s1 = document.createElement('span');
  vj_1_10_s1.appendChild(htmlSpan('= '));
  vj_1_10_s1.appendChild(maakBreuk('13','6','opgave'));
  vj_1_10.appendChild(vj_1_10_s1);

  const vj_1_6 = document.createElement('span');
  const vj_1_6_s1 = document.createElement('span');
  vj_1_6_s1.appendChild(maakBreuk('-8','3','opgave'));
  vj_1_6_s1.appendChild(htmlSpan(' : '));
  vj_1_6_s1.appendChild(maakBreuk('5','7','opgave'));
  vj_1_6.appendChild(vj_1_6_s1);

  const vj_1_7 = document.createElement('span');
  const vj_1_7_s1 = document.createElement('span');
  vj_1_7_s1.appendChild(htmlSpan('= '));
  vj_1_7_s1.appendChild(maakBreuk('-8','3','opgave'));
  vj_1_7_s1.appendChild(htmlSpan(' · '));
  vj_1_7_s1.appendChild(maakBreuk('7','5','opgave'));
  vj_1_7.appendChild(vj_1_7_s1);

  const vj_1_8 = document.createElement('span');
  const vj_1_8_s1 = document.createElement('span');
  vj_1_8_s1.appendChild(htmlSpan('= '));
  vj_1_8_s1.appendChild(maakBreuk('-8 · 7','3 · 5','opgave'));
  vj_1_8.appendChild(vj_1_8_s1);

  const vj_1_9 = document.createElement('span');
  const vj_1_9_s1 = document.createElement('span');
  vj_1_9_s1.appendChild(htmlSpan('= '));
  vj_1_9_s1.appendChild(maakBreuk('-56','15','opgave'));
  vj_1_9.appendChild(vj_1_9_s1);

  const inhoud = maakOefening({
    id:'vj_1', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', vj_1_1, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', vj_1_6, true);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    vj_1_2,
    vj_1_4,
    vj_1_5,
    vj_1_10,
  ];
  const oplB = [
    vj_1_7,
    vj_1_8,
    vj_1_9,
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

})();
