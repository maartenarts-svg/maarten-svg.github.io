/* ============================================================
   alles_jury / oe_alles_4v10.js
   soort: test
   ============================================================ */
(function () {

  const opgave = document.createElement('span');
  opgave.appendChild(htmlSpan('10<i>t</i> - 8 = -2<i>t</i> + 16'));

  const stap2 = document.createElement('span');
  stap2.appendChild(htmlSpan('10<i>t</i> <span class="markeer-lila">+ 2<i>t</i></span> = 16 <span class="markeer-lila">+ 8</span>'));

  const stap3 = document.createElement('span');
  stap3.appendChild(htmlSpan('12<i>t</i> = 24'));

  const stap4 = document.createElement('span');
  stap4.appendChild(htmlSpan('<i>t</i> = 24 <span class="markeer-lila">: 12</span>'));

  const stap5 = document.createElement('span');
  stap5.appendChild(htmlSpan('<i>t</i> = 2'));

  const controleLabel = document.createElement('span');
  controleLabel.appendChild(htmlSpan('controle'));

  const ll = document.createElement('span');
  const ll_b1 = maakSpanBreedte('0.65cm', 'LL:');
  ll.appendChild(ll_b1);
  ll.appendChild(htmlSpan('10 · <span class="markeer-lila">2</span> - 8 = 20 - 8 = 12'));

  const rl = document.createElement('span');
  const rl_b1 = maakSpanBreedte('0.65cm', 'RL:');
  rl.appendChild(rl_b1);
  rl.appendChild(htmlSpan('-2 · <span class="markeer-lila">2</span> + 16 = -4 + 16 = 12'));

  const inhoud = maakOefening({
    id:'oe_alles_4v10', nummer:'4', soort:'test',
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
