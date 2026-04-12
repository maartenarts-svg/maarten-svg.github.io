// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.
// Pas in helpers.js de badge-toggle aan:
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_2 / oe_102010.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102010', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken de getalwaarde.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const BREEDTE = '3cm';

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdazExtra('a', '4<i>n</i> - 3<i>q</i>', 'voor <i>n</i> = <span class="markeer-lila">7</span> en <i>q</i> = <span class="markeer-oranje">-5</span>', BREEDTE, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdazExtra('c', '-4<i>a</i><sup>2</sup> + 3<i>a</i> + 1', 'voor <i>a</i> = <span class="markeer-lila">-3</span>', BREEDTE, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  /* Rij 1: invullen */
  const subblokkenA = [
    ['vast','4 · ','berekenen',false],
    ['SL','<font ="comic sans" color="#d500f9">7</font>','1cm',false],
    ['vast',' - 3 · (','berekenen',false],
    ['SL','<font ="comic sans" color="#f97c00">-5</font>','1cm',false],
    ['vast',')','berekenen',false],
  ];
  const subblokkenC = [
    ['vast','-4 · (','berekenen',false],
    ['SL','<font ="comic sans" color="#d500f9">-3</font>','1cm',true],
    ['vast',')<sup>2</sup> + 3 · (','berekenen',false],
    ['SL','<font ="comic sans" color="#d500f9">-3</font>','1cm',true],
    ['vast',') + 1','berekenen',false],
  ];
  const tr1 = document.createElement('tr');
  const tdA = maakSamengesteldeTd2(subblokkenA, false);
  tdA.classList.add('kolom-links');
  tdA.style.paddingLeft = '0.65cm';
  tr1.appendChild(tdA);
  const tdC = maakSamengesteldeTd2(subblokkenC, false);
  tdC.classList.add('kolom-rechts');
  tdC.style.paddingLeft = '0.85cm';
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 1: uitwerken */
  const oplA = [
  '= 28 - (-15)',
  '= 28 + 15',
  '= 43'
  ];
  const oplC = [
  '= -4 · 9 + (-9) + 1',
  '= -36 - 9 + 1',
  '= -44'
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    if (i===0) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===1) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===2) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdazExtra('b', '7<i>x</i> - 3<i>y</i>', 'voor <i>x</i> = <span class="markeer-lila">5</span> en <i>y</i> = <span class="markeer-oranje">-6</span>', BREEDTE, false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdazExtra('d', '-<i>a</i> + 3<i>b</i> + 2', 'voor <i>a</i> = <span class="markeer-lila">-2</span> en <i>b</i> = <span class="markeer-oranje">0</span>', BREEDTE, false);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);
  
  /* Rij 2: invullen */
  const subblokkenB = [
    ['vast','7 · ','berekenen',false],
    ['SL','<font ="comic sans" color="#d500f9">5</font>','1cm',true],
    ['vast',' - 3 · (','berekenen',false],
    ['SL','<font ="comic sans" color="#f97c00">-6</font>','1cm',true],
    ['vast',')','berekenen',false],
  ];
    const subblokkenD = [
    ['vast','-(','berekenen',false],
    ['SL','<font ="comic sans" color="#d500f9">-2</font>','1cm',true],
    ['vast',') + 3 · ','berekenen',false],
    ['SL','<font ="comic sans" color="#f97c00">0</font>','1cm',true],
    ['vast',' + 2','berekenen',false],
  ];
  const tr2 = document.createElement('tr');
  const tdB = maakSamengesteldeTd2(subblokkenB, false);
  tdB.classList.add('kolom-links');
  tdB.style.paddingLeft = '0.65cm';
  tr2.appendChild(tdB);
  const tdD = maakSamengesteldeTd2(subblokkenD, false);
  tdD.classList.add('kolom-rechts');
  tdD.style.paddingLeft = '0.85cm';
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

  /* Rij 2: uitwerken */
  const oplB = [
  '= 35 - (-18)',
  '= 35 + 18',
  '= 53'
  ];
  const oplD = [
  '= 2 + 0 + 2',
  '= 4',
  ''
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], false);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

})();
