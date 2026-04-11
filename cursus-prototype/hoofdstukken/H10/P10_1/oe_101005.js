/* ============================================================
   H10 / P10_1 / oe_101005.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101004', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Werk uit met de commutatieve of de associatieve eigenschap.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '25 · 23 · 8', false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblD = maakOpTdaz('d', '83,25 + 12,13 + 16,75', false);
  tdLblD.classList.add('kolom-midden');
  trL1.appendChild(tdLblD);
  const tdLblG = maakOpTdaz('g', '9 · 4,5 · 2', false);
  tdLblG.classList.add('kolom-rechts');
  trL1.appendChild(tdLblG);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    '= 25 · 8 · 23',
    '= 200 · 23',
    '= 4 600',
    ''
  ];
  const oplD = [
    '= 83,25 + 16,75 + 12,13',
    '= 100 + 12,13',
    '= 112,13',
    ''
  ];
  const oplG = [
    '= 9 · (4,5 · 2)',
    '= 9 · 9',
    '= 81',
    ''
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdD = maakSlTd(oplD[i], false);
    tdD.classList.add('kolom-midden');
    tr.appendChild(tdD);
    const tdG = maakSlTd(oplG[i], false);
    tdG.classList.add('kolom-rechts');
    tr.appendChild(tdG);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', '4 · 9 · (-15)', false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblE = maakOpTdaz('e', '7 · (-5) · (-2) · 8', false);
  tdLblE.classList.add('kolom-midden');
  trL2.appendChild(tdLblE);
  const tdLblH = maakOpTdaz('h', '-9 + 37 + 29', false);
  tdLblH.classList.add('kolom-rechts');
  trL2.appendChild(tdLblH);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
    '= 4 · (-15) · 9',
    '= -60 · 9',
    '= -540',
    ''
  ];
  const oplE = [
    '= (7 · 8) · (-5 · (-2))',
    '= 56 · 10',
    '= 560',
    ''
  ];
  const oplH = [
    '= -9 + 29 + 37',
    '= 20 + 37',
    '= 57',
    ''
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdE = maakSlTd(oplE[i], false);
    tdE.classList.add('kolom-midden');
    tr.appendChild(tdE);
    const tdH = maakSlTd(oplH[i], false);
    tdH.classList.add('kolom-rechts');
    tr.appendChild(tdH);
    tbody.appendChild(tr);
  }

  /* Rij 3: labels */
  const trL3 = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', (function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='7 + '; s.appendChild(p0);
      s.appendChild(maakBreuk('1','2','opgave'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('5','2','opgave'));
      return s;})(), true);
  tdLblC.classList.add('kolom-links');
  trL3.appendChild(tdLblC);
  const tdLblF = maakOpTdaz('f', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('4','9','opgave'));
      const p1=document.createElement('span'); p1.innerHTML=' + '; s.appendChild(p1);
      s.appendChild(maakBreuk('5','3','opgave'));
      const p3=document.createElement('span'); p3.innerHTML=' + '; s.appendChild(p3);
      s.appendChild(maakBreuk('2','9','opgave'));
      return s;})(), true);
  tdLblF.classList.add('kolom-midden');
  trL3.appendChild(tdLblF);
  const tdLblI = maakOpTdaz('i', (function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='10 · '; s.appendChild(p0);
      s.appendChild(maakBreuk('17','4','opgave'));
      const p2=document.createElement('span'); p2.innerHTML=' · '; s.appendChild(p2);
      s.appendChild(maakBreuk('1','10','opgave'));
      return s;})(), true);
  tdLblI.classList.add('kolom-rechts');
  trL3.appendChild(tdLblI);
  tbody.appendChild(trL3);

  /* Oplossingen rij 3 */
  const oplC = [
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= 7 + <span class="bracket">(</span>'; s.appendChild(p0);
      s.appendChild(maakBreuk('1','2','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('5','2','oplossing'));
      const p4=document.createElement('span'); p4.innerHTML='<span class="bracket">)</span>'; s.appendChild(p4);
      return s;})(),
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= 7 + '; s.appendChild(p0);
      s.appendChild(maakBreuk('6','2','oplossing'));
      return s;})(),
    '= 7 + 3',
    '= 10'
  ];
  const oplF = [
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= <span class="bracket">(</span>'; s.appendChild(p0);
      s.appendChild(maakBreuk('4','9','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('2','9','oplossing'));
      const p4=document.createElement('span'); p4.innerHTML='<span class="bracket">)</span> + '; s.appendChild(p4);
      s.appendChild(maakBreuk('5','3','oplossing'));
      return s;})(),
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('6','9','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('5','3','oplossing'));
      return s;})(),
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('2','3','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('5','3','oplossing'));
      return s;})(),
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('7','3','oplossing'));
      return s;})()
  ];
  const oplI = [
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= 10 · '; s.appendChild(p0);
      s.appendChild(maakBreuk('1','10','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' · '; s.appendChild(p2);
      s.appendChild(maakBreuk('17','4','oplossing'));
      return s;})(),
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= 1 · '; s.appendChild(p0);
      s.appendChild(maakBreuk('17','4','oplossing'));
      return s;})(),
    (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('17','4','oplossing'));
      return s;})(),
    ''
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdC = maakSlTd(oplC[i], true);
    tdC.classList.add('kolom-links');
    tr.appendChild(tdC);
    const tdF = maakSlTd(oplF[i], true);
    tdF.classList.add('kolom-midden');
    tr.appendChild(tdF);
    const tdI = maakSlTd(oplI[i], true);
    tdI.classList.add('kolom-rechts');
    tr.appendChild(tdI);
    tbody.appendChild(tr);
  }

})();
