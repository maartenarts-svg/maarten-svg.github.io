/* ============================================================
   alles_jury / oe_alles_2v1.js
   soort: test
   ============================================================ */
(function () {

  const macht1 = document.createElement('span');
  macht1.appendChild(htmlSpan('Bereken.'));

  const macht2 = document.createElement('span');
  macht2.appendChild(htmlSpan('5<sup>3</sup>'));

  const macht3 = document.createElement('span');
  macht3.appendChild(htmlSpan('= 5 · 5 · 5'));

  const macht4 = document.createElement('span');
  macht4.appendChild(htmlSpan('= 125'));

  const macht5 = document.createElement('span');
  macht5.appendChild(htmlSpan('(-10)<sup>4</sup>'));

  const macht6 = document.createElement('span');
  macht6.appendChild(htmlSpan('= -10 · (-10) · (-10) · (-10)'));

  const macht7 = document.createElement('span');
  macht7.appendChild(htmlSpan('= 10 000'));

  const teken1 = document.createElement('span');
  teken1.appendChild(htmlSpan('Noteer het teken van het eindresultaat: + (positief) of - (negatief).'));

  const teken2 = document.createElement('span');
  teken2.appendChild(htmlSpan('-(-25)<sup>38</sup>'));

  const teken3 = document.createElement('span');
  teken3.appendChild(htmlSpan('-'));

  const teken4 = document.createElement('span');
  teken4.appendChild(htmlSpan('-108<sup>16</sup>'));

  const teken5 = document.createElement('span');
  teken5.appendChild(htmlSpan('-'));

  const inhoud = maakOefening({
    id:'oe_alles_2v1', nummer:'2', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* ---- Opgave a ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('a', macht1, false);
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
    const {tbody: tbody2} = maakOefTabel(tdtabel, 2, true);

    {
      const trL = document.createElement('tr');
      const tdLblL = maakOpTdaz('1', macht2, false);
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('2', macht5, false);
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    {
      const oplL1 = [macht3, macht4];
      const oplR1 = [macht6, macht7];
      for (let i=0; i<2; i++) {
        const tr = document.createElement('tr');
        const tdL1 = maakSlTd(oplL1[i], false);
        tdL1.classList.add('kolom-links');
        tr.appendChild(tdL1);
        const tdR1 = maakSlTd(oplR1[i], false);
        tdR1.classList.add('kolom-rechts');
        tr.appendChild(tdR1);
        tbody2.appendChild(tr);
      }
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  /* ---- Opgave b ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('b', teken1, false);
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
    const {tbody: tbody2} = maakOefTabel(tdtabel, 2, true);
    const TW = '2.4cm';

    {
      const tr = document.createElement('tr');
      const tdL = maakOpTdDubbelZStrZdub('1|', teken2, TW, false, teken3);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakOpTdDubbelZStrZdub('2|', teken4, TW, false, teken5);
      tdR.classList.add('kolom-rechts');
      tr.appendChild(tdR);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

})();
