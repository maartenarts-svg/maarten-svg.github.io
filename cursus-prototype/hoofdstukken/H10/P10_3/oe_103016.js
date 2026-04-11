/* ============================================================
   H10 / P10_3 / oe_103016.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103016', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '3cm';
  const TW2 = '2.6cm';

  const oe103016a = document.createElement('span');
  oe103016a.appendChild(maakOnderstreping(htmlSpan('-6<i>a</i>'), 'enkel', '0.1cm', true));
  oe103016a.appendChild(htmlSpan(' '));
  oe103016a.appendChild(maakOnderstreping(htmlSpan('+ 2<i>b</i>'), 'dubbel', '0.18cm', true));
  oe103016a.appendChild(htmlSpan(' '));
  const oe103016a_s5 = document.createElement('span');
  oe103016a_s5.appendChild(htmlSpan('+ '));
  oe103016a_s5.appendChild(zetOmNaarOpl('1'));
  oe103016a_s5.appendChild(htmlSpan('<i>b</i>'));
  oe103016a.appendChild(maakOnderstreping(oe103016a_s5, 'dubbel', '0.18cm', true));
  oe103016a.appendChild(htmlSpan(' '));
  const oe103016a_s7 = document.createElement('span');
  oe103016a_s7.appendChild(htmlSpan('- '));
  oe103016a_s7.appendChild(zetOmNaarOpl('1'));
  oe103016a_s7.appendChild(htmlSpan('<i>a</i>'));
  oe103016a.appendChild(maakOnderstreping(oe103016a_s7, 'enkel', '0.1cm', true));
  
  const oe103016b = document.createElement('span');
  const oe103016b_s1 = document.createElement('span');
  oe103016b_s1.appendChild(zetOmNaarOpl('1'));
  oe103016b_s1.appendChild(htmlSpan('<i>xy</i>'));
  oe103016b.appendChild(maakOnderstreping(oe103016b_s1, 'enkel', '0.1cm', true));
  oe103016b.appendChild(htmlSpan(' '));
  oe103016b.appendChild(maakOnderstreping(htmlSpan('- 3<i>x</i>'), 'dubbel', '0.18cm', true));
  oe103016b.appendChild(htmlSpan(' '));
  oe103016b.appendChild(maakOnderstreping(htmlSpan('- 7<i>x</i>'), 'dubbel', '0.18cm', true));
  oe103016b.appendChild(htmlSpan(' '));
  const oe103016b_s7 = document.createElement('span');
  oe103016b_s7.appendChild(htmlSpan('+ '));
  oe103016b_s7.appendChild(zetOmNaarOpl('1'));
  oe103016b_s7.appendChild(htmlSpan('<i>xy</i>'));
  oe103016b.appendChild(maakOnderstreping(oe103016b_s7, 'enkel', '0.1cm', true));
  
  const oe103016c = document.createElement('span');
  oe103016c.appendChild(maakOnderstreping(htmlSpan('-8<i>t</i>'), 'enkel', '0.1cm', true));
  oe103016c.appendChild(htmlSpan(' '));
  oe103016c.appendChild(htmlSpan('- 13<i>st</i>'));
  oe103016c.appendChild(htmlSpan(' '));
  const oe103016c_s5 = document.createElement('span');
  oe103016c_s5.appendChild(htmlSpan('+ '));
  oe103016c_s5.appendChild(zetOmNaarOpl('1'));
  oe103016c_s5.appendChild(htmlSpan('<i>t</i>'));
  oe103016c.appendChild(maakOnderstreping(oe103016c_s5, 'enkel', '0.1cm', true));
  
  const oe103016d = document.createElement('span');
  oe103016d.appendChild(maakOnderstreping(htmlSpan('5'), 'enkel', '0.1cm', true));
  oe103016d.appendChild(htmlSpan(' '));
  const oe103016d_s3 = document.createElement('span');
  oe103016d_s3.appendChild(htmlSpan('- '));
  oe103016d_s3.appendChild(zetOmNaarOpl('1'));
  oe103016d_s3.appendChild(htmlSpan('<i>q</i>'));
  oe103016d.appendChild(maakOnderstreping(oe103016d_s3, 'dubbel', '0.18cm', true));
  oe103016d.appendChild(htmlSpan(' '));
  oe103016d.appendChild(maakOnderstreping(htmlSpan('- 10'), 'enkel', '0.1cm', true));
  oe103016d.appendChild(htmlSpan(' '));
  oe103016d.appendChild(maakOnderstreping(htmlSpan('+ 3<i>q</i>'), 'dubbel', '0.18cm', true));

  const oe103016e = document.createElement('span');
  const oe103016e_s1 = document.createElement('span');
  oe103016e_s1.appendChild(maakBreuk('5','2','opgave'));
  oe103016e_s1.appendChild(htmlSpan('<i>d</i>'));
  oe103016e.appendChild(maakOnderstreping(oe103016e_s1, 'enkel', '0.1cm', true));
  oe103016e.appendChild(htmlSpan(' '));
  const oe103016e_s3 = document.createElement('span');
  oe103016e_s3.appendChild(htmlSpan('+ '));
  oe103016e_s3.appendChild(maakBreuk('3','2','opgave'));
  oe103016e_s3.appendChild(htmlSpan('<i>d</i>'));
  oe103016e.appendChild(maakOnderstreping(oe103016e_s3, 'enkel', '0.1cm', true));
  oe103016e.appendChild(htmlSpan(' '));
  const oe103016e_s5 = document.createElement('span');
  oe103016e_s5.appendChild(htmlSpan('- '));
  oe103016e_s5.appendChild(maakBreuk('1','2','opgave'));
  oe103016e_s5.appendChild(htmlSpan('<i>d</i><sup>2</sup>'));
  oe103016e.appendChild(oe103016e_s5);  

  const oe103016f = document.createElement('span');
  oe103016f.appendChild(maakOnderstreping(htmlSpan('3<i>a</i>'), 'enkel', '0.1cm', true));
  oe103016f.appendChild(htmlSpan(' '));
  const oe103016f_s3 = document.createElement('span');
  oe103016f_s3.appendChild(htmlSpan('+ '));
  oe103016f_s3.appendChild(zetOmNaarOpl('1'));
  oe103016f_s3.appendChild(htmlSpan('<i>c</i>'));
  oe103016f.appendChild(maakOnderstreping(oe103016f_s3, 'dubbel', '0.18cm', true));
  oe103016f.appendChild(htmlSpan(' '));
  const oe103016f_s5 = document.createElement('span');
  oe103016f_s5.appendChild(htmlSpan('- '));
  oe103016f_s5.appendChild(zetOmNaarOpl('1'));
  oe103016f_s5.appendChild(htmlSpan('<i>c</i>'));
  oe103016f.appendChild(maakOnderstreping(oe103016f_s5, 'dubbel', '0.18cm', true));
  oe103016f.appendChild(htmlSpan(' '));
  const oe103016f_s7 = document.createElement('span');
  oe103016f_s7.appendChild(htmlSpan('- '));
  oe103016f_s7.appendChild(zetOmNaarOpl('1'));
  oe103016f_s7.appendChild(htmlSpan('<i>a</i>'));
  oe103016f.appendChild(maakOnderstreping(oe103016f_s7, 'enkel', '0.1cm', true));  

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', oe103016a, TW, true, '-7<i>a</i>\u200A + 3<i>b</i>');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdD = maakOpTd('d', oe103016d, TW2, true, '-5 + 2<i>q</i>');
  tdD.classList.add('kolom-rechts');
  tr1.appendChild(tdD);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', oe103016b, TW, true, '2<i>xy</i>\u200A - 10<i>x</i>');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdE = maakOpTd('e', oe103016e, TW2, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('8','2','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>d</i> - '; s.appendChild(p1);
      s.appendChild(maakBreuk('1','2','oplossing'));
      const p3=document.createElement('span'); p3.innerHTML='<i>d</i><sup>2</sup> = 4<i>d</i> - '; s.appendChild(p3);
      s.appendChild(maakBreuk('1','2','oplossing'));
      const p5=document.createElement('span'); p5.innerHTML='<i>d</i><sup>2</sup>'; s.appendChild(p5);
      return s;})());
  tdE.classList.add('kolom-rechts');
  tr2.appendChild(tdE);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTd('c', oe103016c, TW, true, '-7<i>t</i>\u200A - 13<i>st</i>');
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  const tdF = maakOpTd('f', oe103016f, TW2, true, '2<i>a</i>');
  tdF.classList.add('kolom-rechts');
  tr3.appendChild(tdF);
  tbody.appendChild(tr3);

})();
