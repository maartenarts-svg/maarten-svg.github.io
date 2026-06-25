/* ============================================================
   alles_jury / oe_alles_4v7.js
   soort: test
   ============================================================ */
(function () {

  const opgave = document.createElement('span');
  opgave.appendChild(htmlSpan('2<i>z</i> + 13 = 6<i>z</i> - 7'));

  const stap2 = document.createElement('span');
  stap2.appendChild(htmlSpan('2<i>z</i> <span class="markeer-lila">- 6<i>z</i></span> = -7 <span class="markeer-lila">- 13</span>'));

  const stap3 = document.createElement('span');
  stap3.appendChild(htmlSpan('-4<i>z</i> = -20'));

  const stap4 = document.createElement('span');
  stap4.appendChild(htmlSpan('<i>z</i> = -20 <span class="markeer-lila">: (-4)</span>'));

  const stap5 = document.createElement('span');
  stap5.appendChild(htmlSpan('<i>z</i> = 5'));

  const controleLabel = document.createElement('span');
  controleLabel.appendChild(htmlSpan('controle'));

  const ll = document.createElement('span');
  const ll_b1 = maakSpanBreedte('0.65cm', 'LL:');
  ll.appendChild(ll_b1);
  ll.appendChild(htmlSpan('2 · <span class="markeer-lila">5</span> + 13 = 10 + 13 = 23'));

  const rl = document.createElement('span');
  const rl_b1 = maakSpanBreedte('0.65cm', 'RL:');
  rl.appendChild(rl_b1);
  rl.appendChild(htmlSpan('6 · <span class="markeer-lila">5</span> - 7 = 30 - 7 = 23'));

  const inhoud = maakOefening({
    id:'oe_alles_4v7', nummer:'4', soort:'test',
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
