/* ============================================================
   H10 / P10_3 / oe_103003.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103003', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', '6<i>x</i> + 7<i>x</i>', TW, true, '13<i>x</i>');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdD = maakOpTd('d', '3,5<i>p</i> - 4,7<i>p</i>', TW, true, '-1,2<i>p</i>');
  tdD.classList.add('kolom-rechts');
  tr1.appendChild(tdD);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const h1 = document.createElement('span');
  h1.appendChild(zetOmNaarOpl('1'));
  h1.appendChild(htmlSpan('<i>a</i><sup>2</sup> + 3<i>a</i><sup>2</sup> - 7<i>a</i><sup>2</sup>'));
  const oe10300301 = document.createElement('span');
  const tdB = maakOpTd('b',h1 , TW, true, htmlSpan('-3<i>a</i><sup>2</sup>'));
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdE = maakOpTd('e', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('5','3','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>xy</i> - '; s.appendChild(p1);
      s.appendChild(maakBreuk('1','3','opgave'));
      const p3=document.createElement('span'); p3.innerHTML='<i>xy</i>'; s.appendChild(p3);
      return s;})(), TW, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('4','3','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>xy</i>'; s.appendChild(p1);
      return s;})());
  tdE.classList.add('kolom-rechts');
  tr2.appendChild(tdE);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const h2 = document.createElement('span');
  h2.appendChild(htmlSpan('8<i>a</i> - '));
  h2.appendChild(zetOmNaarOpl('1'));
  h2.appendChild(htmlSpan('<i>a</i>'));
  const tdC = maakOpTd('c', h2, TW, true, '7<i>a</i>');
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  const tdF = maakOpTd('f', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('1','4','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>z</i> - '; s.appendChild(p1);
      s.appendChild(maakBreuk('2','5','opgave'));
      const p3=document.createElement('span'); p3.innerHTML='<i>z</i>'; s.appendChild(p3);
      return s;})(), TW, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('5','20','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>z</i> - '; s.appendChild(p1);
      s.appendChild(maakBreuk('8','20','oplossing'));
      const p3=document.createElement('span'); p3.innerHTML='<i>z</i> = '; s.appendChild(p3);
      s.appendChild(maakBreuk('-3','20','oplossing'));
      const p5=document.createElement('span'); p5.innerHTML='<i>z</i>'; s.appendChild(p5);
      return s;})());
  tdF.classList.add('kolom-rechts');
  tr3.appendChild(tdF);
  tbody.appendChild(tr3);

})();
