/* ============================================================
   H11 / P11_ZE / oe_11ZE002.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_11ZE002_1 = document.createElement('span');
  oe_11ZE002_1.appendChild(htmlSpan('Noteer in de tabel de coördinaat van de top van elke driehoek.'));

  const oe_11ZE002_2 = document.createElement('span');
  oe_11ZE002_2.appendChild(htmlSpan('Noteer de coördinaat van de toppen <i>G</i>, <i>H</i> en <i>I</i> van de 7de, 8ste en 9de driehoek.'));

  const oe_11ZE002_3 = document.createElement('span');
  oe_11ZE002_3.appendChild(htmlSpan('co(<i>G</i>) = (13, 7), co(<i>H</i>) = (15, 8) en co(<i>I</i>) = (17, 9)'));

  const oe_11ZE002_4 = document.createElement('span');
  oe_11ZE002_4.appendChild(htmlSpan('Van één van de driehoeken is de coördinaat van de top (159, 80).'));

  const oe_11ZE002_5 = document.createElement('span');
  oe_11ZE002_5.appendChild(htmlSpan('Van één van de driehoeken is de coördinaat van de top (199, 100). <br>Bereken de coördinaat van de top die zeven driehoeken terug ligt.'));

  const oe_11ZE002_6 = document.createElement('span');
  oe_11ZE002_6.appendChild(htmlSpan('eerste coördinaatgetal: 199 - 2 · 7 = 185'));

  const oe_11ZE002_7 = document.createElement('span');
  oe_11ZE002_7.appendChild(htmlSpan('tweede coördinaatgetal: 100 - 7 = 93'));

  const oe_11ZE002_8 = document.createElement('span');
  oe_11ZE002_8.appendChild(htmlSpan('De coördinaat van de top van die driehoek is (185, 93).'));

  const oe_11ZE002_9 = document.createElement('span');
  oe_11ZE002_9.appendChild(htmlSpan('Noteer een formule waarmee je het ...'));

  const oe_11ZE002_10 = document.createElement('span');
  oe_11ZE002_10.appendChild(htmlSpan('Bereken de coördinaat van de top van de 100ste driehoek.'));

  const oe_11ZE002_11 = document.createElement('span');
  oe_11ZE002_11.appendChild(htmlSpan('(2<i>n</i> - 1, <i>n</i>) voor <i>n</i> = 100'));

  const oe_11ZE002_12 = document.createElement('span');
  oe_11ZE002_12.appendChild(htmlSpan('(2 · 100 - 1, 100) = (199, 100)'));

  const oe_11ZE002_13 = document.createElement('span');
  oe_11ZE002_13.appendChild(htmlSpan('De coördinaat van de top van de 100ste driehoek is (199, 100).'));

    /* ---- Span-variabelen ---- */
  const oe001a_1 = document.createElement('span');
  oe001a_1.appendChild(htmlSpan('Noteer de coördinaat van de top van de volgende driehoek.'));

  const oe001a_2 = document.createElement('span');
  oe001a_2.appendChild(htmlSpan('(161, 81)'));

  const oe001a_3 = document.createElement('span');
  oe001a_3.appendChild(htmlSpan('Noteer de coördinaat van de top die vijf driehoeken verder ligt.'));

  const oe001a_4 = document.createElement('span');
  oe001a_4.appendChild(htmlSpan('(159 + 5 · 2, 80 + 5) = (169, 85)'));

  const oe001a_6 = document.createElement('span');
  oe001a_6.appendChild(htmlSpan('eerste coördinaatgetal <i>x</i> kunt berekenen in functie van het nummer <i>n</i> van de driehoek.'));

  const oe001a_7 = document.createElement('span');
  oe001a_7.appendChild(htmlSpan('<i>x</i> = 2<i>n</i> - 1'));

  const oe001a_8 = document.createElement('span');
  oe001a_8.appendChild(htmlSpan('tweede coördinaatgetal <i>y</i> kunt berekenen in functie van het nummer <i>n</i> van de driehoek.'));

  const oe001a_9 = document.createElement('span');
  oe001a_9.appendChild(htmlSpan('<i>y</i> = <i>n</i>'));


  const inhoud = maakOefening({
    id:'oe_11ZE002', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Om de coördinaat van de toppen van de 7de, 8ste, 9de … driehoek te weten te komen, is het niet handig die driehoeken te tekenen. Het neemt veel plaats in beslag en kost veel tijd.<br>Je kunt ook gebruikmaken van de regelmaat in de coördinaten van de toppen. Om deze regelmaat te ontdekken, kan een tabel helpen.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_11ZE002_1, false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tbodyA = maakNestedTabel(tbody,'4.19%');

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['22%', '13%', '13%', '13%', '13%', '13%', '13%'];

  const matrix = [
    [
      { inhoud: 'nummer driehoek', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'coördinaat top', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '(1, 1)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(3, 2)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(5, 3)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(7, 4)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(9, 5)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(11, 6)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(tbodyA, 2, 7, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_11ZE002_2, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(oe_11ZE002_3, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_11ZE002_4, false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  {
    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbody.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '4.19%';
    const col2 = document.createElement('col'); col2.style.width = '95.81%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const trtabel = document.createElement('tr');
    const tdleer  = document.createElement('td');
    trtabel.appendChild(tdleer);
    const tdtabel = document.createElement('td');
    const {tbody: tbody2} = maakOefTabel(tdtabel, 1, false);

    /* subopgave 1 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('1', oe001a_1, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe001a_2, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', oe001a_3, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe001a_4, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d */
  const trLblD = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', oe_11ZE002_5, false);
  tdLblD.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblD.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblD.classList.add('kolom-links');
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  const trd0 = document.createElement('tr');
  const tdd0 = maakSlTd(oe_11ZE002_6, false);
  tdd0.classList.add('kolom-links');
  trd0.appendChild(tdd0);
  tbody.appendChild(trd0);
  const trd1 = document.createElement('tr');
  const tdd1 = maakSlTd(oe_11ZE002_7, false);
  tdd1.classList.add('kolom-links');
  trd1.appendChild(tdd1);
  tbody.appendChild(trd1);
  const trd2 = document.createElement('tr');
  const tdd2 = maakSlTd(oe_11ZE002_8, false);
  tdd2.classList.add('kolom-links');
  trd2.appendChild(tdd2);
  tbody.appendChild(trd2);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave e */
  const trLblE = document.createElement('tr');
  const tdLblE = maakOpTdaz('e', oe_11ZE002_9, false);
  tdLblE.classList.add('kolom-links');
  trLblE.appendChild(tdLblE);
  tbody.appendChild(trLblE);

  /* hulptabel voor subopgaven */
  {
    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbody.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '4.19%';
    const col2 = document.createElement('col'); col2.style.width = '95.81%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const trtabel = document.createElement('tr');
    const tdleer  = document.createElement('td');
    trtabel.appendChild(tdleer);
    const tdtabel = document.createElement('td');
    const {tbody: tbody2} = maakOefTabel(tdtabel, 1, false);

    /* subopgave 1 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('1', oe001a_6, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe001a_7, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', oe001a_8, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe001a_9, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave f */
  const trLblF = document.createElement('tr');
  const tdLblF = maakOpTdaz('f', oe_11ZE002_10, false);
  tdLblF.classList.add('kolom-links');
  trLblF.appendChild(tdLblF);
  tbody.appendChild(trLblF);

  const trf0 = document.createElement('tr');
  const tdf0 = maakSlTd(oe_11ZE002_11, false);
  tdf0.classList.add('kolom-links');
  trf0.appendChild(tdf0);
  tbody.appendChild(trf0);
  const trf1 = document.createElement('tr');
  const tdf1 = maakSlTd(oe_11ZE002_12, false);
  tdf1.classList.add('kolom-links');
  trf1.appendChild(tdf1);
  tbody.appendChild(trf1);
  const trf2 = document.createElement('tr');
  const tdf2 = maakSlTd(oe_11ZE002_13, false);
  tdf2.classList.add('kolom-links');
  trf2.appendChild(tdf2);
  tbody.appendChild(trf2);

})();
