/* ============================================================
   H11 / P11_3 / oe_113502.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_113502_1 = document.createElement('span');
  oe_113502_1.appendChild(htmlSpan('3<i>z</i> - 22 + <i>z</i> = 7(5 - <i>z</i>)'));

  const oe_113502_2 = document.createElement('span');
  const oe_113502_2_s1 = document.createElement('span');
  oe_113502_2_s1.appendChild(htmlSpan('<i>z</i> = '));
  oe_113502_2_s1.appendChild(maakBreuk('57','11','opgave'));
  oe_113502_2.appendChild(oe_113502_2_s1);

  const oe_113502_3 = document.createElement('span');
  oe_113502_3.appendChild(htmlSpan('-2<i>t</i> - 6 - 5<i>t</i> = <i>t</i> - 4'));

  const oe_113502_4 = document.createElement('span');
  const oe_113502_4_s1 = document.createElement('span');
  oe_113502_4_s1.appendChild(htmlSpan('<i>t</i> = '));
  oe_113502_4_s1.appendChild(maakBreuk('-1','4','opgave'));
  oe_113502_4.appendChild(oe_113502_4_s1);

  const inhoud = maakOefening({
    id:'oe_113502', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los op met ICT.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_113502_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_113502_3, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_113502_2
  ];
  const oplB = [
    oe_113502_4
  ];
  for (let i=0; i<1; i++) {
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
