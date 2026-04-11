/* ============================================================
   H10 / P10_3 / oe_103011.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103011', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', '3 · (-5<i>x</i>)', TW, false, '-15<i>x</i>');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdC = maakOpTd('c', '2<i>x</i> · (-7)', TW, false, '-14<i>x</i>');
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const oe103011 = document.createElement('span');
  oe103011.appendChild(htmlSpan('2<i>a</i> · (-'));
  const oe103011_s2 = document.createElement('span');
  oe103011_s2.appendChild(zetOmNaarOpl('1'));
  oe103011.appendChild(oe103011_s2);
  oe103011.appendChild(htmlSpan('<i>b</i>)'));
  const tdB = maakOpTd('b', oe103011, TW, false, '-2<i>ab</i>');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdD = maakOpTd('d', '4<i>c</i> · (-2<i>d</i>)', TW, false, '-8<i>cd</i>');
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

})();
