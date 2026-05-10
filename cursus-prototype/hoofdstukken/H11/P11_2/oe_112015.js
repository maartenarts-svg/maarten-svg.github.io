/* ============================================================
   H11 / P11_2 / oe_112015.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_112015_1 = document.createElement('span');
  oe_112015_1.appendChild(htmlSpan('struisvogel: <i>v</i> = '));
  oe_112015_1.appendChild(maakMarkering('20','#bbdefb',true));
  oe_112015_1.appendChild(htmlSpan(' m/s'));

  const oe_112015_2 = document.createElement('span');
  oe_112015_2.appendChild(maakMarkering('20','#bbdefb',true));
  oe_112015_2.appendChild(htmlSpan(' = 2,3 + 0,5<i>t</i>'));

  const oe_112015_3 = document.createElement('span');
  oe_112015_3.appendChild(htmlSpan('20 <span class="markeer-lila">- 2,3</span> = 2,3 + 0,5<i>t</i> <span class="markeer-lila">- 2,3</span>'));
  oe_112015_3.style.fontSize = '0.96em';

  const oe_112015_4 = document.createElement('span');
  oe_112015_4.appendChild(htmlSpan('17,7 = 0,5<i>t</i>'));

  const oe_112015_5 = document.createElement('span');
  oe_112015_5.appendChild(htmlSpan('17,7 <span class="markeer-lila">: 0,5</span> = 0,5<i>t</i> <span class="markeer-lila">: 0,5</span>'));

  const oe_112015_6 = document.createElement('span');
  oe_112015_6.appendChild(htmlSpan('35,4 = <i>t</i>'));

  const oe_112015_7 = document.createElement('span');
  oe_112015_7.appendChild(htmlSpan('Na 35,4 s.'));

  const oe_112015_8 = document.createElement('span');
  oe_112015_8.appendChild(htmlSpan('konijn: <i>v</i> = '));
  oe_112015_8.appendChild(maakMarkering('13','#bbdefb',true));
  oe_112015_8.appendChild(htmlSpan(' m/s'));

  const oe_112015_9 = document.createElement('span');
  oe_112015_9.appendChild(maakMarkering('13','#bbdefb',true));
  oe_112015_9.appendChild(htmlSpan(' = 2,3 + 0,5<i>t</i>'));

  const oe_112015_10 = document.createElement('span');
  oe_112015_10.appendChild(htmlSpan('13 <span class="markeer-lila">- 2,3</span> = 2,3 + 0,5<i>t</i> <span class="markeer-lila">- 2,3</span>'));
  oe_112015_10.style.fontSize = '0.96em';

  const oe_112015_11 = document.createElement('span');
  oe_112015_11.appendChild(htmlSpan('10,7 = 0,5<i>t</i>'));

  const oe_112015_12 = document.createElement('span');
  oe_112015_12.appendChild(htmlSpan('10,7 <span class="markeer-lila">: 0,5</span> = 0,5<i>t</i> <span class="markeer-lila">: 0,5</span>'));

  const oe_112015_13 = document.createElement('span');
  oe_112015_13.appendChild(htmlSpan('21,4 = <i>t</i>'));

  const oe_112015_14 = document.createElement('span');
  oe_112015_14.appendChild(htmlSpan('Na 21,4 s.'));

  const oe_112015_15 = document.createElement('span');
  oe_112015_15.appendChild(htmlSpan('Usain Bolt: <i>v</i> = '));
  oe_112015_15.appendChild(maakMarkering('10,4','#bbdefb',true));
  oe_112015_15.appendChild(htmlSpan(' m/s'));

  const oe_112015_16 = document.createElement('span');
  oe_112015_16.appendChild(maakMarkering('10,4','#bbdefb',true));
  oe_112015_16.appendChild(htmlSpan(' = 2,3 + 0,5<i>t</i>'));

  const oe_112015_17 = document.createElement('span');
  oe_112015_17.appendChild(htmlSpan('10,4 <span class="markeer-lila">- 2,3</span> = 2,3 + 0,5<i>t</i> <span class="markeer-lila">- 2,3</span>'));
  oe_112015_17.style.fontSize = '0.96em';

  const oe_112015_18 = document.createElement('span');
  oe_112015_18.appendChild(htmlSpan('8,1 = 0,5<i>t</i>'));

  const oe_112015_19 = document.createElement('span');
  oe_112015_19.appendChild(htmlSpan('8,1 <span class="markeer-lila">: 0,5</span> = 0,5<i>t</i> <span class="markeer-lila">: 0,5</span>'));

  const oe_112015_20 = document.createElement('span');
  oe_112015_20.appendChild(htmlSpan('16,2 = <i>t</i>'));

  const oe_112015_21 = document.createElement('span');
  oe_112015_21.appendChild(htmlSpan('Na 16,2 s.'));

  const inhoud = maakOefening({
    id:'oe_112015', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Een drone versnelt. De formule om zijn snelheid <i>v</i> (in m/s) te berekenen is <i>v</i> = 2,3 + 0,5<i>t</i>. Hierbij is <i>t</i> de tijd (in s).<br>Bereken de tijd die de drone nodig heeft om de snelheden te halen.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  voegWitruimteToe(tbody,'0.3cm');

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_112015_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_112015_8, false);
  tdLblB.classList.add('kolom-midden');
  trL1.appendChild(tdLblB);
  const tdLblC = maakOpTdaz('c', oe_112015_15, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_112015_2,
    oe_112015_3,
    oe_112015_4,
    oe_112015_5,
    oe_112015_6,
    oe_112015_7,
  ];
  const oplB = [
    oe_112015_9,
    oe_112015_10,
    oe_112015_11,
    oe_112015_12,
    oe_112015_13,
    oe_112015_14,
  ];
  const oplC = [
    oe_112015_16,
    oe_112015_17,
    oe_112015_18,
    oe_112015_19,
    oe_112015_20,
    oe_112015_21,
  ];
  for (let i=0; i<6; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-midden');
    tr.appendChild(tdB);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

})();
