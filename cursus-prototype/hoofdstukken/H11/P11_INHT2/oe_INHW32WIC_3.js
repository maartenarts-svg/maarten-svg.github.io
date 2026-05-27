/* ============================================================
   H?? / P?? / oe_W31WIE_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_W31WIE_3_1 = document.createElement('span');
  const h01 = document.createElement('span');
  h01.appendChild(maakBreuk('2','7','opgave'));
  h01.appendChild(htmlSpan('<i>x</i>'));
  oe_W31WIE_3_1.appendChild(maakOnderstreping(h01, 'enkel', '0.1cm', true));
  oe_W31WIE_3_1.appendChild(htmlSpan(' '));
  const h02 = document.createElement('span');
  h02.appendChild(htmlSpan('+ '));
  h02.appendChild(maakBreuk('1','7','opgave'));
  h02.appendChild(htmlSpan('<i>x</i>'));
  oe_W31WIE_3_1.appendChild(maakOnderstreping(h02, 'enkel', '0.1cm', true));
  oe_W31WIE_3_1.appendChild(htmlSpan(' '));
  const h03 = document.createElement('span');
  h03.appendChild(htmlSpan('+ '));
  h03.appendChild(maakBreuk('3','7','opgave'));
  h03.appendChild(htmlSpan('<i>x</i>'));
  oe_W31WIE_3_1.appendChild(maakOnderstreping(h03, 'enkel', '0.1cm', true));

  const oe_W31WIE_3_2 = document.createElement('span');
  oe_W31WIE_3_2.appendChild(maakBreuk('6','7','opgave'));
  oe_W31WIE_3_2.appendChild(htmlSpan('<i>x</i>'));

  const oe_W31WIE_3_3 = document.createElement('span');
  oe_W31WIE_3_3.appendChild(maakOnderstreping(htmlSpan('5<i>ab</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_3.appendChild(htmlSpan(' '));
  const oe_W31WIE_3_3_s3 = document.createElement('span');
  oe_W31WIE_3_3_s3.appendChild(htmlSpan('- '));
  oe_W31WIE_3_3_s3.appendChild(zetOmNaarOpl('1'));
  oe_W31WIE_3_3_s3.appendChild(htmlSpan('<i>ab</i>'));
  oe_W31WIE_3_3.appendChild(maakOnderstreping(oe_W31WIE_3_3_s3, 'enkel', '0.1cm', true));

  const oe_W31WIE_3_4 = document.createElement('span');
  oe_W31WIE_3_4.appendChild(htmlSpan('4<i>ab</i>'));

  const oe_W31WIE_3_5 = document.createElement('span');
  oe_W31WIE_3_5.appendChild(htmlSpan('-2 · (-6)<i>ab</i>'));

  const oe_W31WIE_3_6 = document.createElement('span');
  oe_W31WIE_3_6.appendChild(htmlSpan('12<i>ab</i>'));

  const oe_W31WIE_3_7 = document.createElement('span');
  oe_W31WIE_3_7.appendChild(htmlSpan('-4<i>x</i> · (-3<i>y</i>)'));

  const oe_W31WIE_3_8 = document.createElement('span');
  oe_W31WIE_3_8.appendChild(htmlSpan('12<i>xy</i>'));

  const oe_W31WIE_3_9 = document.createElement('span');
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('5<i>a</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_9.appendChild(htmlSpan(' '));
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('+ 3'), 'dubbel', '0.18cm', true));
  oe_W31WIE_3_9.appendChild(htmlSpan(' '));
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('+ 9'), 'dubbel', '0.18cm', true));
  oe_W31WIE_3_9.appendChild(htmlSpan(' '));
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('+ 4<i>a</i>'), 'enkel', '0.1cm', true));

  const oe_W31WIE_3_10 = document.createElement('span');
  oe_W31WIE_3_10.appendChild(htmlSpan('9<i>a</i> + 12'));

  const oe_W31WIE_3_11 = document.createElement('span');
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('- 4'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_11.appendChild(htmlSpan(' '));
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('+ 3<i>x</i>'), 'dubbel', '0.18cm', true));
  oe_W31WIE_3_11.appendChild(htmlSpan(' '));
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('- 5'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_11.appendChild(htmlSpan(' '));
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('- 3<i>x</i>'), 'dubbel', '0.18cm', true));

  const oe_W31WIE_3_12 = document.createElement('span');
  oe_W31WIE_3_12.appendChild(htmlSpan('-9'));

  const inhoud = maakOefening({
    id:'oe_W31WIE_3', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', oe_W31WIE_3_1, TW, true, oe_W31WIE_3_2);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdD = maakOpTd('d', oe_W31WIE_3_7, TW, true, oe_W31WIE_3_8);
  tdD.classList.add('kolom-rechts');
  tr1.appendChild(tdD);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', oe_W31WIE_3_3, TW, true, oe_W31WIE_3_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdE = maakOpTd('e', oe_W31WIE_3_9, TW, true, oe_W31WIE_3_10);
  tdE.classList.add('kolom-rechts');
  tr2.appendChild(tdE);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTd('c', oe_W31WIE_3_5, TW, true, oe_W31WIE_3_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  const tdF = maakOpTd('f', oe_W31WIE_3_11, TW, true, oe_W31WIE_3_12);
  tdF.classList.add('kolom-rechts');
  tr3.appendChild(tdF);
  tbody.appendChild(tr3);

})();
