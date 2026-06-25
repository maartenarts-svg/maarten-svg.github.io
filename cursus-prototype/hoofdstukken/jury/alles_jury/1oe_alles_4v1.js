/* ============================================================
   alles_jury / oe_alles_4v1.js
   soort: test
   ============================================================ */
(function () {

  const opgave = document.createElement('span');
  opgave.appendChild(htmlSpan('7<i>z</i> - 10 = -16 + 5<i>z</i>'));

  const stap2 = document.createElement('span');
  stap2.appendChild(htmlSpan('7<i>z</i> <span class="markeer-lila">- 5<i>z</i></span> = -16 <span class="markeer-lila">+ 10</span>'));

  const stap3 = document.createElement('span');
  stap3.appendChild(htmlSpan('2<i>z</i> = -6'));

  const stap4 = document.createElement('span');
  stap4.appendChild(htmlSpan('<i>z</i> = -6 <span class="markeer-lila">: 2</span>'));

  const stap5 = document.createElement('span');
  stap5.appendChild(htmlSpan('<i>z</i> = -3'));

  const controleLabel = document.createElement('span');
  controleLabel.appendChild(htmlSpan('controle'));

  const ll = document.createElement('span');
  const ll_b1 = maakSpanBreedte('0.65cm', 'LL:');
  ll.appendChild(ll_b1);
  ll.appendChild(htmlSpan('7 · <span class="markeer-lila">(-3)</span> - 10 = -21 - 10 = -31'));

  const rl = document.createElement('span');
  const rl_b1 = maakSpanBreedte('0.65cm', 'RL:');
  rl.appendChild(rl_b1);
  rl.appendChild(htmlSpan('-16 + 5 · <span class="markeer-lila">(-3)</span> = -16 - 15 = -31'));

  const inhoud = maakOefening({
    id:'oe_alles_4v1', nummer:'4', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los op en controleer.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', opgave, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', controleLabel, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  const oplA = [stap2, stap3, stap4, stap5];
  const oplB = [ll, rl, null, null];
  for (let i=0; i<4; i++) {
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
