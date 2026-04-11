/* ============================================================
   H10 / P10_3 / oe_103013.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103013', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '3cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const oe103013 = document.createElement('span');
  oe103013.appendChild(maakOnderstreping(htmlSpan('-7<i>s</i>'), 'enkel', '0.1cm', true));
  oe103013.appendChild(htmlSpan(' '));
  oe103013.appendChild(maakOnderstreping(htmlSpan('+ 3<i>s</i>'), 'enkel', '0.1cm', true));
  oe103013.appendChild(htmlSpan(' - 2'));
  oe103013.appendChild(maakOnderstreping(htmlSpan('+ 5<i>s</i>'), 'enkel', '0.1cm', true));
  const tdA = maakOpTd('a', oe103013, TW, false, '<i>s</i>\u200A - 2');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);  
  const tdC = maakOpTd('c', '2<i>a</i> + 5<i>ab</i>', TW, false, '2<i>a</i>\u200A + 5<i>ab</i>');
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const oe10301301 = document.createElement('span');
  oe10301301.appendChild(maakOnderstreping(htmlSpan('6'), 'enkel', '0.1cm', true));
  oe10301301.appendChild(htmlSpan(' '));
  const oe10301301_s3 = document.createElement('span');
  oe10301301_s3.appendChild(htmlSpan('- '));
  oe10301301_s3.appendChild(zetOmNaarOpl('1'));
  oe10301301_s3.appendChild(htmlSpan('<i>d</i>'));
  oe10301301.appendChild(maakOnderstreping(oe10301301_s3, 'dubbel', '0.18cm', true));
  oe10301301.appendChild(htmlSpan(' '));
  oe10301301.appendChild(maakOnderstreping(htmlSpan('+ 2'), 'enkel', '0.1cm', true));
  oe10301301.appendChild(htmlSpan(' '));
  oe10301301.appendChild(maakOnderstreping(htmlSpan('+ 3<i>d</i>'), 'dubbel', '0.18cm', true));
  const tdB = maakOpTd('b', oe10301301, TW, false, '8 + 2<i>d</i>');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const oe10301302 = document.createElement('span');
  oe10301302.appendChild(maakOnderstreping(htmlSpan('-4<i>b</i>'), 'enkel', '0.1cm', true));
  oe10301302.appendChild(htmlSpan(' '));
  const oe10301302_s3 = document.createElement('span');
  oe10301302_s3.appendChild(htmlSpan('+ '));
  oe10301302_s3.appendChild(zetOmNaarOpl('1'));
  oe10301302_s3.appendChild(htmlSpan('<i>c</i>'));
  oe10301302.appendChild(maakOnderstreping(oe10301302_s3, 'dubbel', '0.18cm', true));
  oe10301302.appendChild(htmlSpan(' '));
  oe10301302.appendChild(maakOnderstreping(htmlSpan('+ 2<i>c</i>'), 'dubbel', '0.18cm', true));
  oe10301302.appendChild(htmlSpan(' '));
  const oe10301302_s7 = document.createElement('span');
  oe10301302_s7.appendChild(htmlSpan('- '));
  oe10301302_s7.appendChild(zetOmNaarOpl('1'));
  oe10301302_s7.appendChild(htmlSpan('<i>b</i>'));
  oe10301302.appendChild(maakOnderstreping(oe10301302_s7, 'enkel', '0.1cm', true));
  const tdD = maakOpTd('d', oe10301302, TW, false, '-5<i>b</i>\u200A + 3<i>c</i>');
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

})();
