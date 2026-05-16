/* ============================================================
   H10 / P10_2 / oe_W31WIE_1.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_W31WIE_1', nummer:'?', soort:'test',
    niveaus:[''], tools:[],
    toggleModus:'oefening'
  });

  const spanOpg = document.createElement('span');
  const spanOpg1 = document.createElement('span');
  spanOpg1.appendChild(htmlSpan('Gegevens van het onderzoek'));
  spanOpg1.classList.add('theorie');
  const spanOpg2 = document.createElement('span');
  spanOpg2.appendChild(htmlSpan('<br>Vul aan.'));

  voegTekstToe(inhoud,spanOpg1);
  voegTekstToe(inhoud,spanOpg2);

  /* ---- Span-variabelen ---- */
  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('tijdstip onderzoek:'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('20/04/26 - 26/04/26'));

  const oe_1b = document.createElement('span');
  oe_1b.appendChild(htmlSpan('vraag:'));

  const oe_2b = document.createElement('span');
  oe_2b.appendChild(htmlSpan('$$vraag$$'));

  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan('variabele:'));

  const oe_4 = document.createElement('span');
  oe_4.appendChild(htmlSpan('$$variabele1$$'));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('soort onderzoek:'));

  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan('wetenschappelijk experiment'));

  const oe_7 = document.createElement('span');
  oe_7.appendChild(htmlSpan('aantal deelnemers:'));

  const oe_8 = document.createElement('span');
  oe_8.appendChild(htmlSpan('$$aantal$$'));

  const oe_9 = document.createElement('span');
  oe_9.appendChild(htmlSpan('data:'));

  const oe_10 = document.createElement('span');
  oe_10.appendChild(htmlSpan('$$data[0]$$, $$data[1]$$, $$data[2]$$, $$data[3]$$, $$data[4]$$, $$data[5]$$, $$data[6]$$, $$data[7]$$, $$data[8]$$, $$data[9]$$, $$data[10]$$, $$data[11]$$, $$data[12]$$, $$data[13]$$, $$data[14]$$, $$data[15]$$, $$data[16]$$, $$data[17]$$, $$data[18]$$, $$data[19]$$'));

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '3.2cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_1, TW, false, oe_2);
  tdA.classList.add('kolom-links');
  tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  const tr1b = document.createElement('tr');
  const tdAb = maakOpTdGeen('b', oe_1b, TW, false, oe_2b);
  tdAb.classList.add('kolom-links');
  tdAb.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tr1b.appendChild(tdAb);
  tbody.appendChild(tr1b);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdGeen('c', oe_3, TW, false, oe_4);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTdGeen('d', oe_5, TW, false, oe_6);
  tdC.classList.add('kolom-links');
  tdC.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tr3.appendChild(tdC);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdGeen('e', oe_7, TW, false, oe_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  tbody.appendChild(tr4);

  /* Rij 5 + 6*/
  const tr5 = document.createElement('tr');
  const tdE = maakOpTdGeen('f', oe_9, TW, false, oe_10);
  tdE.classList.add('kolom-links');
  tdE.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tr5.appendChild(tdE);
  tbody.appendChild(tr5);

})();
