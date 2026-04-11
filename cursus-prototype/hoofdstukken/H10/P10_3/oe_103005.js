/* ============================================================
   H10 / P10_3 / oe_103005.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103005', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '3cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const h1 = document.createElement('span');
  h1.appendChild(maakOnderstreping(htmlSpan('2<i>x</i>'),'enkel','0.1cm'));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('- 3'),'dubbel','0.18cm'));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('+ 5<i>x</i>'),'enkel','0.1cm'));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('- 2'),'dubbel','0.18cm'));
  const tdA = maakOpTd('a',h1,TW, true, '7<i>x</i>\u200A + 5');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const h2 = document.createElement('span');
  h2.appendChild(maakOnderstreping(htmlSpan('-3<i>a</i>'),'enkel','0.1cm'));
  h2.appendChild(htmlSpan(' + 4<i>b</i> '));
  h2.appendChild(maakOnderstreping(htmlSpan('+ 3<i>a</i>'),'enkel','0.1cm'));
  const tdD = maakOpTd('d', h2, TW, true, '4<i>b</i>');
  tdD.classList.add('kolom-rechts');
  tr1.appendChild(tdD);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const h3 = document.createElement('span');
  const h31 = document.createElement('span');
  h31.appendChild(htmlSpan('-'));
  h31.appendChild(zetOmNaarOpl("1"));
  h31.appendChild(htmlSpan('<i>x</i>'));
  h3.appendChild(maakOnderstreping(h31,'enkel','0.1cm'));
  h3.appendChild(htmlSpan(' '));
  const h32 = document.createElement('span');
  h32.appendChild(htmlSpan('+ '));
  h32.appendChild(zetOmNaarOpl("1"));
  h32.appendChild(htmlSpan('<i>y</i>'));
  h3.appendChild(maakOnderstreping(h32,'dubbel','0.18cm'));
  h3.appendChild(htmlSpan(' '));
  h3.appendChild(maakOnderstreping(htmlSpan('+ 3<i>x</i>'),'enkel','0.1cm'));
  h3.appendChild(htmlSpan(' '));
  const h33 = document.createElement('span');
  h33.appendChild(htmlSpan('- '));
  h33.appendChild(zetOmNaarOpl("1"));
  h33.appendChild(htmlSpan('<i>y</i>'));
  h3.appendChild(maakOnderstreping(h33,'dubbel','0.18cm'));
  const tdB = maakOpTd('b', h3, TW, true, '2<i>x</i>');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const h4 = document.createElement('span');
  h4.appendChild(maakOnderstreping('3,2<i>p</i>','enkel','0.1cm'));
  h4.appendChild(htmlSpan(' '));
  const h41 = document.createElement('span');
  h41.appendChild(htmlSpan('- '));
  h41.appendChild(zetOmNaarOpl("1"));
  h41.appendChild(htmlSpan('<i>r</i>'));
  h4.appendChild(maakOnderstreping(h41,'dubbel','0.18cm'));
  h4.appendChild(htmlSpan(' '));
  h4.appendChild(maakOnderstreping(htmlSpan('+ 7<i>r</i>'),'dubbel','0.18cm'));
  h4.appendChild(htmlSpan(' '));
  const h42 = document.createElement('span');
  h42.appendChild(htmlSpan('+ '));
  h42.appendChild(zetOmNaarOpl("1"));
  h42.appendChild(htmlSpan('<i>p</i>'));
  h4.appendChild(maakOnderstreping(h42,'enkel','0.1cm'));
  const tdE = maakOpTd('e', h4, TW, true, '4,2<i>p</i>\u200A + 6<i>r</i>');
  tdE.classList.add('kolom-rechts');
  tr2.appendChild(tdE);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const oe10300501 = document.createElement('span');
  oe10300501.appendChild(htmlSpan('3<i>x</i>\u200A + 7<i>x</i>'));
  oe10300501.appendChild(htmlSpan('<sup>2</sup>'));
  const tdC = maakOpTd('c', '3<i>x</i> + 7<i>x</i><sup>2</sup>', TW, true, oe10300501);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  const h5 = document.createElement('span');
  const h51 = document.createElement('span');
    h51.appendChild(maakBreuk('1','5','opgave'));
    h51.appendChild(htmlSpan('<i>x</i>'));
  h5.appendChild(maakOnderstreping(h51,'enkel','0.1cm'));
  h5.appendChild(htmlSpan(' + '));
  h5.appendChild(maakBreuk('2','7','opgave'));
  h5.appendChild(htmlSpan('<i>y</i> '));
  const h52 = document.createElement('span');
    h52.appendChild(htmlSpan('- '));
    h52.appendChild(maakBreuk('4','5','opgave'));
    h52.appendChild(htmlSpan('<i>x</i>'));
  h5.appendChild(maakOnderstreping(h52,'enkel','0.1cm'));
  const tdF = maakOpTd('f', h5, TW, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('-3','5','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>x</i> + '; s.appendChild(p1);
      s.appendChild(maakBreuk('2','7','oplossing'));
      const p3=document.createElement('span'); p3.innerHTML='<i>y</i>'; s.appendChild(p3);
      return s;})());
  tdF.classList.add('kolom-rechts');
  tr3.appendChild(tdF);
  tbody.appendChild(tr3);

})();
