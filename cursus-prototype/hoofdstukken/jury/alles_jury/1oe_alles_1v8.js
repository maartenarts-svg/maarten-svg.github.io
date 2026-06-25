/* ============================================================
   alles_jury / oe_alles_1v8.js
   soort: test
   ============================================================ */
(function () {

  const a1 = document.createElement('span');
  a1.appendChild(maakBreuk('9','4','opgave'));
  a1.appendChild(htmlSpan(' - '));
  a1.appendChild(maakBreuk('-7','3','opgave'));

  const a2 = document.createElement('span');
  a2.appendChild(htmlSpan('= '));
  a2.appendChild(maakBreuk('9','4','opgave'));
  a2.appendChild(htmlSpan(' + '));
  a2.appendChild(maakBreuk('7','3','opgave'));

  const a3 = document.createElement('span');
  a3.appendChild(htmlSpan('= '));
  a3.appendChild(maakBreuk('27','12','opgave'));
  a3.appendChild(htmlSpan(' + '));
  a3.appendChild(maakBreuk('28','12','opgave'));

  const a4 = document.createElement('span');
  a4.appendChild(htmlSpan('= '));
  a4.appendChild(maakBreuk('27 + 28','\u200A \u200A \u200A 12\u200A \u200A \u200A ','opgave'));

  const a5 = document.createElement('span');
  a5.appendChild(htmlSpan('= '));
  a5.appendChild(maakBreuk('55','12','opgave'));

  const b1 = document.createElement('span');
  b1.appendChild(maakBreuk('-7','11','opgave'));
  b1.appendChild(htmlSpan(' : '));
  b1.appendChild(maakBreuk('-2','5','opgave'));

  const b2 = document.createElement('span');
  b2.appendChild(htmlSpan('= '));
  b2.appendChild(maakBreuk('-7','11','opgave'));
  b2.appendChild(htmlSpan(' · '));
  b2.appendChild(maakBreuk('-5','2','opgave'));

  const b3 = document.createElement('span');
  b3.appendChild(htmlSpan('= '));
  b3.appendChild(maakBreuk('7 · 5','11 · 2','opgave'));

  const b4 = document.createElement('span');
  b4.appendChild(htmlSpan('= '));
  b4.appendChild(maakBreuk('35','22','opgave'));

  const inhoud = maakOefening({
    id:'oe_alles_1v8', nummer:'1', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', a1, true);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', b1, true);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  const oplA = [a2, a3, a4, a5];
  const oplB = [b2, b3, b4, null];
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
