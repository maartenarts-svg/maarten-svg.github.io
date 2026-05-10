/* ============================================================
   H?? / P?? / oe_W31WIE_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_W31WIE_3_1 = document.createElement('span');
  oe_W31WIE_3_1.appendChild(maakOnderstreping(htmlSpan('7<i>t</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_1.appendChild(htmlSpan(' '));
  oe_W31WIE_3_1.appendChild(maakOnderstreping(htmlSpan('+ 3<i>t</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_1.appendChild(htmlSpan(' '));
  oe_W31WIE_3_1.appendChild(maakOnderstreping(htmlSpan('- 5<i>t</i>'), 'enkel', '0.1cm', true));

  const oe_W31WIE_3_2 = document.createElement('span');
  oe_W31WIE_3_2.appendChild(htmlSpan('5<i>t</i>'));

  const oe_W31WIE_3_3 = document.createElement('span');
  oe_W31WIE_3_3.appendChild(maakOnderstreping(htmlSpan('3<i>a</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_3.appendChild(htmlSpan(' '));
  const oe_W31WIE_3_3_s3 = document.createElement('span');
  oe_W31WIE_3_3_s3.appendChild(htmlSpan('- '));
  oe_W31WIE_3_3_s3.appendChild(zetOmNaarOpl('1'));
  oe_W31WIE_3_3_s3.appendChild(htmlSpan('<i>a</i>'));
  oe_W31WIE_3_3.appendChild(maakOnderstreping(oe_W31WIE_3_3_s3, 'enkel', '0.1cm', true));

  const oe_W31WIE_3_4 = document.createElement('span');
  oe_W31WIE_3_4.appendChild(htmlSpan('2<i>a</i>'));

  const oe_W31WIE_3_5 = document.createElement('span');
  oe_W31WIE_3_5.appendChild(htmlSpan('-9 · 2<i>x</i>'));

  const oe_W31WIE_3_6 = document.createElement('span');
  oe_W31WIE_3_6.appendChild(htmlSpan('-18<i>x</i>'));

  const oe_W31WIE_3_7 = document.createElement('span');
  oe_W31WIE_3_7.appendChild(htmlSpan('-8<i>y</i> · (-2<i>z</i>)'));

  const oe_W31WIE_3_8 = document.createElement('span');
  oe_W31WIE_3_8.appendChild(htmlSpan('16<i>yz</i>'));

  const oe_W31WIE_3_9 = document.createElement('span');
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('5<i>b</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_9.appendChild(htmlSpan(' '));
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('+ 4'), 'dubbel', '0.18cm', true));
  oe_W31WIE_3_9.appendChild(htmlSpan(' '));
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('+ 3<i>b</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_9.appendChild(htmlSpan(' '));
  oe_W31WIE_3_9.appendChild(maakOnderstreping(htmlSpan('+ 8'), 'dubbel', '0.18cm', true));

  const oe_W31WIE_3_10 = document.createElement('span');
  oe_W31WIE_3_10.appendChild(htmlSpan('8<i>b</i> + 12'));

  const oe_W31WIE_3_11 = document.createElement('span');
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('2<i>r</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_11.appendChild(htmlSpan(' '));
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('- 6'), 'dubbel', '0.18cm', true));
  oe_W31WIE_3_11.appendChild(htmlSpan(' '));
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('- 5<i>r</i>'), 'enkel', '0.1cm', true));
  oe_W31WIE_3_11.appendChild(htmlSpan(' '));
  oe_W31WIE_3_11.appendChild(maakOnderstreping(htmlSpan('+ 1'), 'dubbel', '0.18cm', true));

  const oe_W31WIE_3_12 = document.createElement('span');
  oe_W31WIE_3_12.appendChild(htmlSpan('-3<i>r</i> - 5'));

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
  const tdA = maakOpTd('a', oe_W31WIE_3_1, TW, false, oe_W31WIE_3_2);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdD = maakOpTd('d', oe_W31WIE_3_7, TW, false, oe_W31WIE_3_8);
  tdD.classList.add('kolom-rechts');
  tr1.appendChild(tdD);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', oe_W31WIE_3_3, TW, false, oe_W31WIE_3_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdE = maakOpTd('e', oe_W31WIE_3_9, TW, false, oe_W31WIE_3_10);
  tdE.classList.add('kolom-rechts');
  tr2.appendChild(tdE);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTd('c', oe_W31WIE_3_5, TW, false, oe_W31WIE_3_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  const tdF = maakOpTd('f', oe_W31WIE_3_11, TW, false, oe_W31WIE_3_12);
  tdF.classList.add('kolom-rechts');
  tr3.appendChild(tdF);
  tbody.appendChild(tr3);

})();
