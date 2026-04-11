/* ============================================================
   H10 / P10_3 / oe_103008.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103008', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const oe10310801 = document.createElement('span');
  const oe10310801_s1 = document.createElement('span');
  oe10310801_s1.appendChild(htmlSpan('9<i>x</i> - '));
  oe10310801_s1.appendChild(zetOmNaarOpl('1'));
  oe10310801_s1.appendChild(htmlSpan('<i>x</i>'));
  oe10310801.appendChild(oe10310801_s1);
  const tdA = maakOpTd('a', oe10310801, TW, false, '8<i>x</i>');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdC = maakOpTd('c', '-3<i>z</i> + 6<i>z</i> - 11<i>z</i>', TW, false, '-8<i>z</i>');
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const oe10310802 = document.createElement('span');
  const oe10310802_s1 = document.createElement('span');
  oe10310802_s1.appendChild(zetOmNaarOpl('1'));
  oe10310802_s1.appendChild(htmlSpan('<i>a</i> + 43<i>a</i>'));
  oe10310802.appendChild(oe10310802_s1);  
  const tdB = maakOpTd('b', oe10310802, TW, false, '44<i>a</i>');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdD = maakOpTd('d', '4<i>t</i> - 3<i>t</i> + 5<i>t</i>', TW, false, '6<i>t</i>');
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

})();
