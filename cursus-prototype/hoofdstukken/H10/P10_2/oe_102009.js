/* ============================================================
   H10 / P10_2 / oe_102009.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102009', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bereken de getalwaarde.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const BREEDTE = '3cm';

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdazExtra('a', '5(<i>x</i> - 8)', 'voor <i>x</i> = -3', BREEDTE, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdazExtra('c', '4<i>t</i><sup>2</sup> + 12<i>t</i> + 9', 'voor <i>t</i> = -2', BREEDTE, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  const oe10200901 = document.createElement('span');
  oe10200901.appendChild(htmlSpan('4 · '));
    const oe10200901a = document.createElement('span');
    oe10200901a.classList.add('markeer-lila');
    oe10200901a.appendChild(htmlSpan('(-2)'));
  oe10200901.appendChild(oe10200901a);
  oe10200901.appendChild(htmlSpan('<sup>2</sup>\u200A + 12 · '));
  oe10200901.appendChild(oe10200901a.cloneNode(true));
  oe10200901.appendChild(htmlSpan('\u200A + 9'));

  /* Oplossingen rij 1 */
  const oplA = [
  '5 · (<span class="markeer-lila">-3</span>\u200A - 8)',
  '= 5 · (-11)',
  '= -55',
  ''
  ];
  const oplC = [
  oe10200901,
  '= 4 · 4 + (-24) + 9',
  '= 16 - 24 + 9',
  '= 1'
  ];
  for (let i=0; i<4; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdazExtra('b', '<i>a</i> - 2<i>b</i>', (function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='voor <i>a</i> = '; s.appendChild(p0);
      s.appendChild(maakBreuk('1','7','opgave'));
      const p2=document.createElement('span'); p2.innerHTML=' en <i>b</i> = '; s.appendChild(p2);
      s.appendChild(maakBreuk('3','7','opgave'));
      return s;})(), BREEDTE, true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdazExtra('d', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('-3','4','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>y</i> + '; s.appendChild(p1);
      s.appendChild(maakBreuk('7','20','opgave'));
      return s;})(), (function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='voor <i>y</i> = '; s.appendChild(p0);
      s.appendChild(maakBreuk('7','5','opgave'));
      return s;})(), BREEDTE, true);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  /* Oplossingen rij 2 */
  const oplB = [
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p1=maakBreuk('1','7','oplossing'); p1.style.color='#d500f9'; s.appendChild(p1);
      const p2=document.createElement('span'); p2.innerHTML=' - 2 · '; s.appendChild(p2);
      const p3=maakBreuk('3','7','oplossing'); p3.style.color='#d500f9'; s.appendChild(p3);
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('1','7','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' - '; s.appendChild(p2);
      s.appendChild(maakBreuk('6','7','oplossing'));
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('-5','7','oplossing'));
      return s;})(),
  ''
  ];
  const oplD = [
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('-3','4','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML=' · '; s.appendChild(p1);
      const p2=maakBreuk('7','5','oplossing'); p2.style.color='#d500f9'; s.appendChild(p2);
      const p3=document.createElement('span'); p3.innerHTML=' + '; s.appendChild(p3);
      s.appendChild(maakBreuk('7','20','oplossing'));
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('-21','20','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('7','20','oplossing'));
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('-14','20','oplossing'));
      return s;})(),
  (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('-7','10','oplossing'));
      return s;})()
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
