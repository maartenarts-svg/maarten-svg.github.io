/* ============================================================
   vb_jury / oe_vj_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const ruimte1 = '1.4cm';
  const SCT = document.createElement('span');
  SCT.appendChild(htmlSpan('SC:'));
  SCT.classList.add('theorie');
  const THT = document.createElement('span');
  THT.appendChild(htmlSpan('theorie:'));
  THT.classList.add('theorie');

  const oe_vj_2_1 = document.createElement('span');
  oe_vj_2_1.appendChild(htmlSpan('Bereken.'));

  const oe_vj_2_2 = document.createElement('span');
  oe_vj_2_2.appendChild(htmlSpan('10<sup>4</sup>'));

  const oe_vj_2_3 = document.createElement('span');
  oe_vj_2_3.appendChild(htmlSpan('= 10 · 10 · 10 · 10'));

  const oe_vj_2_4 = document.createElement('span');
  oe_vj_2_4.appendChild(htmlSpan('= 10 000'));

  const oe_vj_2_5 = document.createElement('span');
  oe_vj_2_5.appendChild(htmlSpan('(-5)<sup>3</sup>'));

  const oe_vj_2_6 = document.createElement('span');
  oe_vj_2_6.appendChild(htmlSpan('= -5 · (-5) · (-5)'));

  const oe_vj_2_7 = document.createElement('span');
  oe_vj_2_7.appendChild(htmlSpan('= -125'));

  const oe_vj_2_8 = document.createElement('span');
  oe_vj_2_8.appendChild(htmlSpan('Noteer het teken van het eindresultaat: + (positief) of - (negatief).'));

  const oe_vj_2_9 = document.createElement('span');
  oe_vj_2_9.appendChild(htmlSpan('-(-25)<sup>38</sup>'));

  const oe_vj_2_10 = document.createElement('span');
  oe_vj_2_10.appendChild(htmlSpan('-'));

  const oe_vj_2_11 = document.createElement('span');
  oe_vj_2_11.appendChild(htmlSpan('-108<sup>16</sup>'));

  const oe_vj_2_12 = document.createElement('span');
  oe_vj_2_12.appendChild(htmlSpan('-'));

  const inhoud = maakOefening({
    id:'oe_vj_2', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* ---- Opgave a ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('a', oe_vj_2_1, false);
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

    /* rij 1 — labels */
    {
      const trL = document.createElement('tr');
      const tdLblL = maakOpTdaz('1', oe_vj_2_2, false);
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('2', oe_vj_2_5, false);
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 1 — oplossingen */
    {
      const oplL1 = [
        oe_vj_2_3,
        oe_vj_2_4
      ];
      const oplR1 = [
        oe_vj_2_6,
        oe_vj_2_7
      ];
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
    const td = maakOpTdaz('b', oe_vj_2_8, false);
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

    /* rij 1 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTdDubbelZStrZdub('1|', oe_vj_2_9, TW, false, oe_vj_2_10);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakOpTdDubbelZStrZdub('2|', oe_vj_2_11, TW, false, oe_vj_2_12);
      tdR.classList.add('kolom-rechts');
      tr.appendChild(tdR);
      tbody2.appendChild(tr);
    }


    
    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

})();
