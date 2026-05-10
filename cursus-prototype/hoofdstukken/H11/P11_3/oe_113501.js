/* ============================================================
   H11 / P11_3 / oe_113501.js
   soort: ontdek
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_113501_2 = document.createElement('span');
  oe_113501_2.appendChild(htmlSpan('We moeten drie bedragen berekenen. <br>Noteer de uitspraken in symbolen, waarbij  <i>b</i> het bedrag van Hans voorstelt.'));

  const oe_113501_3 = document.createElement('span');
  oe_113501_3.appendChild(htmlSpan('Los de vergelijking op.'));

  const oe_113501_4 = document.createElement('span');
  oe_113501_4.appendChild(htmlSpan('<i>b</i> + <i>b</i> + 18 + 2<i>b</i> + 12 = 430'));

  const oe_113501_5 = document.createElement('span');
  oe_113501_5.appendChild(htmlSpan('<i>b</i> + <i>b</i> + 18 + 2<i>b</i> + 12 <span class="markeer-lila">- 18 - 12</span> = 430 <span class="markeer-lila">- 18 - 12</span>'));

  const oe_113501_6 = document.createElement('span');
  oe_113501_6.appendChild(htmlSpan('4<i>b</i> = 400'));

  const oe_113501_7 = document.createElement('span');
  oe_113501_7.appendChild(htmlSpan('4<i>b</i> <span class="markeer-lila">: 4</span> = 400 <span class="markeer-lila">: 4</span>'));

  const oe_113501_8 = document.createElement('span');
  oe_113501_8.appendChild(htmlSpan('<i>b</i> = 100'));

  const oe_113501_9 = document.createElement('span');
  oe_113501_9.appendChild(htmlSpan('Formuleer het antwoord.'));

  const oe_113501_10 = document.createElement('span');
  oe_113501_10.appendChild(htmlSpan('Hans verdiende 100 euro, Fien 118 euro en Paulien 212 euro.'));

  const oe_113501_11 = document.createElement('span');
  oe_113501_11.appendChild(htmlSpan('Controleer het antwoord.'));

  const oe_113501_12 = document.createElement('span');
  oe_113501_12.appendChild(htmlSpan('100 + 118 + 212 = 430'));

  const oe_113501_13 = document.createElement('span');
  oe_113501_13.appendChild(htmlSpan('bedrag Hans:'));

  const breedte1 = '1.9cm';
  
  const oe_113501_14 = document.createElement('span');
  oe_113501_14.appendChild(maakSpanBreedte(breedte1,'<i>b</i>'))
  oe_113501_14.appendChild(htmlSpan('<span class="markeer-lila">100</span>'));
  
  const oe_113501_15 = document.createElement('span');
  oe_113501_15.appendChild(htmlSpan('Fien verdiende 18 euro meer dan Hans:'));
  
  const oe_113501_16 = document.createElement('span');
  oe_113501_16.appendChild(maakSpanBreedte(breedte1,'<i>b</i> + 18'))
  oe_113501_16.appendChild(htmlSpan('<span class="markeer-lila">100 + 18 = 118</span>'));
  
  const oe_113501_17 = document.createElement('span');
  oe_113501_17.appendChild(htmlSpan('Paulien verdiende 12 euro meer dan het dubbele van Hans:'));
  
  const oe_113501_18 = document.createElement('span');
  oe_113501_18.appendChild(maakSpanBreedte(breedte1,'2<i>b</i> + 12'))
  oe_113501_18.appendChild(htmlSpan('<span class="markeer-lila">2 · 100 + 12 = 212</span>'));
  
  const oe_113501_19 = document.createElement('span');
  oe_113501_19.appendChild(htmlSpan('Noteer in symbolen dat ze samen 430 euro verdienden.'));
  
  const oe_113501_20 = document.createElement('span');
  oe_113501_20.appendChild(htmlSpan('<i>b</i> + <i>b</i> + 18 + 2<i>b</i> + 12 = 430'));
  
  

  const inhoud = maakOefening({
    id:'oe_113501', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Hans, Fien en Paulien hebben bij dezelfde actie elk een verschillend bedrag verdiend. Fien verdiende 18 euro meer dan Hans. Paulien verdiende 12 euro meer dan het dubbele van Hans.<br>Samen verdienden ze 430 euro.<br>We berekenen hoeveel iedereen verdiend heeft.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_113501_2, false);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tbodyX = maakNestedTabel(tbody, '4.19%');

  {
    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbodyX.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.tableLayout = 'fixed';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '68%';
    const col2 = document.createElement('col'); col2.style.width = '32%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const stappenA = [
      oe_113501_13,
      oe_113501_15,
      oe_113501_17,
    ];
    const oplA = [
      oe_113501_14,
      oe_113501_16,
      oe_113501_18,
    ];

    for (let i = 0; i < 3; i++) {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('•', stappenA[i]);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplA[i], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  const trLble = document.createElement('tr');
  const tdLble = maakOpTdaz('b', oe_113501_19, false);
  tdLble.classList.add('kolom-links');
  trLble.appendChild(tdLble);
  tbody.appendChild(trLble);

  const tre0 = document.createElement('tr');
  const tde0 = maakSlTd(oe_113501_20, false);
  tde0.classList.add('kolom-links');
  tre0.appendChild(tde0);
  tbody.appendChild(tre0);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('c', oe_113501_3, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd(oe_113501_5, false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd(oe_113501_6, false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);
  const trb3 = document.createElement('tr');
  const tdb3 = maakSlTd(oe_113501_7, false);
  tdb3.classList.add('kolom-links');
  trb3.appendChild(tdb3);
  tbody.appendChild(trb3);
  const trb4 = document.createElement('tr');
  const tdb4 = maakSlTd(oe_113501_8, false);
  tdb4.classList.add('kolom-links');
  trb4.appendChild(tdb4);
  tbody.appendChild(trb4);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('d', oe_113501_9, false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd(oe_113501_10, false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave e */
  const trLblD = document.createElement('tr');
  const tdLblD = maakOpTdaz('e', oe_113501_11, false);
  tdLblD.classList.add('kolom-links');
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  const trd0 = document.createElement('tr');
  const tdd0 = maakSlTd(oe_113501_12, false);
  tdd0.classList.add('kolom-links');
  trd0.appendChild(tdd0);
  tbody.appendChild(trd0);

})();
