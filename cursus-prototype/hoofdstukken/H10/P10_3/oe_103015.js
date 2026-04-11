/* ============================================================
   H10 / P10_3 / oe_103015.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103015', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'De termen met hetzelfde letterdeel zijn op dezelfde manier onderlijnd. <br> Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '3cm';

  const oe10301501 = document.createElement('span');
  oe10301501.appendChild(maakOnderstreping(htmlSpan('6<i>s</i>'), 'enkel', '0.1cm', false));
  oe10301501.appendChild(htmlSpan(' - 13<i>v</i> '));
  oe10301501.appendChild(maakOnderstreping(htmlSpan('+ 16<i>s</i>'), 'enkel', '0.1cm', false));


  const oe10301502 = document.createElement('span');
  oe10301502.appendChild(maakOnderstreping(htmlSpan('0,2'), 'enkel', '0.1cm', false));
  oe10301502.appendChild(htmlSpan(' '));
  oe10301502.appendChild(maakOnderstreping(htmlSpan('+ 1,8<i>x</i>'), 'dubbel', '0.18cm', false));
  oe10301502.appendChild(htmlSpan(' '));
  oe10301502.appendChild(maakOnderstreping(htmlSpan('+ 2'), 'enkel', '0.1cm', false));
  oe10301502.appendChild(htmlSpan(' '));
  const oe10301502_s7 = document.createElement('span');
  oe10301502_s7.appendChild(htmlSpan('- '));
  oe10301502_s7.appendChild(zetOmNaarOpl('1'));
  oe10301502_s7.appendChild(htmlSpan('<i>x</i>'));
  oe10301502.appendChild(maakOnderstreping(oe10301502_s7, 'dubbel', '0.18cm', false)); 

  const oe10301503 = document.createElement('span');
  const oe10301503_s1 = document.createElement('span');
  oe10301503_s1.appendChild(zetOmNaarOpl('1'));
  oe10301503_s1.appendChild(htmlSpan('<i>a</i>'));
  oe10301503.appendChild(maakOnderstreping(oe10301503_s1, 'enkel', '0.1cm', false));
  oe10301503.appendChild(htmlSpan(' '));
  oe10301503.appendChild(maakOnderstreping(htmlSpan('+ 4<i>a</i><sup>2</sup>'), 'dubbel', '0.18cm', false));
  oe10301503.appendChild(htmlSpan(' '));
  const oe10301503_s5 = document.createElement('span');
  oe10301503_s5.appendChild(htmlSpan('- '));
  oe10301503_s5.appendChild(zetOmNaarOpl('1'));
  oe10301503_s5.appendChild(htmlSpan('<i>a</i><sup>2</sup>'));
  oe10301503.appendChild(maakOnderstreping(oe10301503_s5, 'dubbel', '0.18cm', false));
  oe10301503.appendChild(htmlSpan(' '));
  oe10301503.appendChild(maakOnderstreping(htmlSpan('+ 3<i>a</i>'), 'enkel', '0.1cm', false));

  const oe10301504 = document.createElement('span');
  oe10301504.appendChild(maakOnderstreping(htmlSpan('8'), 'enkel', '0.1cm', false));
  oe10301504.appendChild(htmlSpan(' '));
  oe10301504.appendChild(maakOnderstreping(htmlSpan('- 13<i>z</i>'), 'dubbel', '0.18cm', false));
  oe10301504.appendChild(htmlSpan(' '));
  oe10301504.appendChild(maakOnderstreping(htmlSpan('- 26<i>z</i>'), 'dubbel', '0.18cm', false));
  oe10301504.appendChild(htmlSpan(' '));
  oe10301504.appendChild(maakOnderstreping(htmlSpan('- 10'), 'enkel', '0.1cm', false));  

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', oe10301501, TW, false, '22<i>s</i>\u200A - 13<i>v</i>');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdC = maakOpTd('c', oe10301503, TW, false, '4<i>a</i>\u200A + 3<i>a</i><sup>2</sup>');
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', oe10301502, TW, false, '2,2 + 0,8<i>x</i>');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdD = maakOpTd('d', oe10301504, TW, false, '-2 - 39<i>z</i>');
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

})();
