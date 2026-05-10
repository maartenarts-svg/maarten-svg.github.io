// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.

/* ============================================================
   H11 / P11_1 / oe_111016.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111016_1 = document.createElement('span');
  oe_111016_1.appendChild(htmlSpan('Het getal is '));
  oe_111016_1.appendChild(maakMarkering('212,5','#bbdefb',false));
  oe_111016_1.appendChild(htmlSpan('.'));

  const oe_111016_2 = document.createElement('span');
  oe_111016_2.appendChild(maakMarkering('212,5','#bbdefb',false));
  oe_111016_2.appendChild(htmlSpan(' = <i>n</i> + 1,5'));

  const oe_111016_3 = document.createElement('span');
  oe_111016_3.appendChild(htmlSpan('212,5 <span class="markeer-lila">- 1,5</span> = <i>n</i> + 1,5 <span class="markeer-lila">- 1,5</span>'));

  const oe_111016_4 = document.createElement('span');
  oe_111016_4.appendChild(htmlSpan('211 = <i>n</i>'));

  const oe_111016_5 = document.createElement('span');
  oe_111016_5.appendChild(htmlSpan('Het getal is '));
  oe_111016_5.appendChild(maakMarkering('48,5','#bbdefb',true));
  oe_111016_5.appendChild(htmlSpan('.'));

  const oe_111016_6 = document.createElement('span');
  oe_111016_6.appendChild(maakMarkering('48,5','#bbdefb',true));
  oe_111016_6.appendChild(htmlSpan(' = <i>n</i> + 1,5'));

  const oe_111016_7 = document.createElement('span');
  oe_111016_7.appendChild(htmlSpan('48,5 <span class="markeer-lila">- 1,5</span> = <i>n</i> + 1,5 <span class="markeer-lila">- 1,5</span>'));

  const oe_111016_8 = document.createElement('span');
  oe_111016_8.appendChild(htmlSpan('47 = <i>n</i>'));

  const inhoud = maakOefening({
    id:'oe_111016', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'De formule bij een rij getallen is <i>g</i> = <i>n</i> + 1,5.<br>Hierbij is <i>n</i> het nummer van het getal en <i>g</i> het getal zelf.<br>Bereken het nummer van elk getal.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111016_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_111016_5, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_111016_2,
    oe_111016_3,
    oe_111016_4
  ];
  const oplB = [
    oe_111016_6,
    oe_111016_7,
    oe_111016_8
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    if (i===0) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===1) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===2) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

})();
