/* ============================================================
   H11 / P11_2 / oe_112K01.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_112K01_1 = document.createElement('span');
  oe_112K01_1.appendChild(htmlSpan('<i>x</i><sup>2</sup> = 25'));

  const oe_112K01_2 = document.createElement('span');
  oe_112K01_2.appendChild(htmlSpan('Verklaar waarom  5 een oplossing is van deze vergelijking.'));

  const oe_112K01_3 = document.createElement('span');
  oe_112K01_3.appendChild(htmlSpan('5<sup>2</sup> = 25'));

  const oe_112K01_4 = document.createElement('span');
  oe_112K01_4.appendChild(htmlSpan('Verklaar waarom  -5 een oplossing is van deze vergelijking.'));

  const oe_112K01_5 = document.createElement('span');
  oe_112K01_5.appendChild(htmlSpan('(-5)<sup>2</sup> = 25'));

  const oe_112K01_6 = document.createElement('span');
  oe_112K01_6.appendChild(htmlSpan('Noteer de oplossingen van de vergelijking  <i>x</i><sup>2</sup> = 100.'));

  const oe_112K01_7 = document.createElement('span');
  oe_112K01_7.appendChild(htmlSpan('10 en -10 want 10<sup>2</sup> = 100 en (-10)<sup>2</sup> = 100'));

  const oe_112K01_8 = document.createElement('span');
  oe_112K01_8.appendChild(htmlSpan('Verklaar waarom de vergelijking  <i>x</i><sup>2</sup> = -49 geen oplossingen heeft.'));

  const oe_112K01_9 = document.createElement('span');
  oe_112K01_9.appendChild(htmlSpan('Een kwadraat is nooit kleiner dan nul.'));

  const inhoud = maakOefening({
    id:'oe_112K01', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  const hulp1 = document.createElement('span');
  hulp1.appendChild(htmlSpan('Vergelijkingen met <i>x</i><sup>2</sup>.'));
  hulp1.classList.add('txt');

  voegTekstToe(inhoud, hulp1, ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* ---- Opgave a ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('a', oe_112K01_1, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

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
      const tdLbl = maakOpTdaz('1', oe_112K01_2, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_112K01_3, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', oe_112K01_4, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_112K01_5, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody,'0.3cm');
  /* ---- Opgave b ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('b', oe_112K01_6, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_112K01_7, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  voegWitruimteToe(tbody,'0.3cm');
  /* ---- Opgave c ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('c', oe_112K01_8, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_112K01_9, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

})();
