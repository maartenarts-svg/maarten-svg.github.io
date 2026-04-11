/* ============================================================
   H10 / P10_3 / oe_103004.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103004', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', '5<i>a</i> · 9<i>b</i>', TW, true, '45<i>ab</i>');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdD = maakOpTd('d', '5 · 2<i>a</i> · 3', TW, true, '30<i>a</i>');
  tdD.classList.add('kolom-rechts');
  tr1.appendChild(tdD);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', '25<i>x</i> · (-4)', TW, true, '-100<i>x</i>');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdE = maakOpTd('e', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('1','3','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>p</i> · '; s.appendChild(p1);
      s.appendChild(maakBreuk('1','2','opgave'));
      return s;})(), TW, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('1','6','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>p</i>'; s.appendChild(p1);
      return s;})());
  tdE.classList.add('kolom-rechts');
  tr2.appendChild(tdE);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const h1 = document.createElement('span');
  h1.appendChild(htmlSpan('-3<i>q</i> · (-'));
  h1.appendChild(zetOmNaarOpl('1'));
  h1.appendChild(htmlSpan('<i>r</i>)'));  
  const tdC = maakOpTd('c',h1 , TW, true, '3<i>qr</i>');
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  const tdF = maakOpTd('f', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('2','5','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>a</i> · '; s.appendChild(p1);
      s.appendChild(maakBreuk('10','3','opgave'));
      const p3=document.createElement('span'); p3.innerHTML='<i>c</i>'; s.appendChild(p3);
      return s;})(), TW, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('20','15','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>ac</i> = '; s.appendChild(p1);
      s.appendChild(maakBreuk('4','3','oplossing'));
      const p3=document.createElement('span'); p3.innerHTML='<i>ac</i>'; s.appendChild(p3);
      return s;})());
  tdF.classList.add('kolom-rechts');
  tr3.appendChild(tdF);
  tbody.appendChild(tr3);

})();
