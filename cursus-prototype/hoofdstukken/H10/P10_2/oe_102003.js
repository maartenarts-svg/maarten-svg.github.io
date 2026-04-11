// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.
// Pas in helpers.js de badge-toggle aan:
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_2 / oe_102003.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102003', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken de getalwaarde.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const BREEDTE = '3cm';

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdazExtra('a', '3(10 - <i>d</i>)', 'voor <i>d</i> = -20', BREEDTE, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdazExtra('c', '<i>x</i><sup>2</sup> - 3<i>x</i> + 5', 'voor <i>x</i> = -2', BREEDTE, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  const oe10200301 = document.createElement('span');
    const oe10200301a = document.createElement('span');
    oe10200301a.classList.add('markeer-lila');
    oe10200301a.appendChild(htmlSpan('(-2)'));
  oe10200301.appendChild(oe10200301a);
  oe10200301.appendChild(htmlSpan('<sup>2</sup></span> - 3 · '));
  oe10200301.appendChild(oe10200301a.cloneNode(true));
  oe10200301.appendChild(htmlSpan(' + 5'));
    

  /* Oplossingen rij 1 */
  const oplA = [
  '3 · (10 - <span class="markeer-lila">(-20)</span>)',
  '= 3 · (10 + 20)',
  '= 3 · 30',
  '= 90'
  ];
  const oplC = [
  oe10200301,
  '= 4 - (-6) + 5',
  '= 4 + 6 + 5',
  '= 15'
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    if (i===0) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===1) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===2) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    if (i===3) tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdazExtra('b', '2<i>ab</i> + 3', (function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='voor <i>a</i> = '; s.appendChild(p0);
      s.appendChild(maakBreuk('1','3','opgave'));
      const p2=document.createElement('span'); p2.innerHTML=' en <i>b</i> = '; s.appendChild(p2);
      s.appendChild(maakBreuk('2','3','opgave'));
      return s;})(), BREEDTE, true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdazExtra('d', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('-3','4','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>de</i> + 8'; s.appendChild(p1);
      return s;})(), 'voor <i>d</i> = 4 en <i>e</i> = -1', BREEDTE, true);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossingen)';
      const p0=document.createElement('span'); p0.innerHTML='2 · '; s.appendChild(p0);
      const p1=maakBreuk('1','3','oplossing'); p1.style.color='#d500f9'; s.appendChild(p1);
      const p2=document.createElement('span'); p2.innerHTML=' · '; s.appendChild(p2);
      const p3=maakBreuk('2','3','oplossing'); p3.style.color='#d500f9'; s.appendChild(p3);
      const p4=document.createElement('span'); p4.innerHTML=' + 3'; s.appendChild(p4);
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('4','9','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('27','9','oplossing'));
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('31','9','oplossing'));
      return s;})(),
  ''
  ];
  const oplD = [
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('-3','4','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML=' · <span class="markeer-lila">4</span>\u200A · <span class="markeer-lila">(-1)</span>\u200A + 8'; s.appendChild(p1);
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('12','4','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + 8'; s.appendChild(p2);
      return s;})(),
  '= 3 + 8',
  '= 11'
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdB = maakSlTd(oplB[i], true);
    tdB.classList.add('kolom-links');
    tr.appendChild(tdB);
    const tdD = maakSlTd(oplD[i], true);
    tdD.classList.add('kolom-rechts');
    tr.appendChild(tdD);
    tbody.appendChild(tr);
  }

})();
