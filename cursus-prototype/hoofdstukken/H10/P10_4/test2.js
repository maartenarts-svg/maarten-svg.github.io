/* ============================================================
   H?? / P?? / oe_???.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_1 = document.createElement('span');
  const oe_1_s1 = document.createElement('span');
  oe_1_s1.appendChild(maakBreuk('1','5','opgave'));
  oe_1_s1.appendChild(htmlSpan(' + '));
  oe_1_s1.appendChild(zetOmNaarOpl('5'));
  oe_1.appendChild(oe_1_s1);

  const oe_2 = document.createElement('span');
  const oe_2_m1 = maakMarkering(htmlSpan('5'), '#bbdefb', true);
  oe_2.appendChild(oe_2_m1);
  oe_2.appendChild(htmlSpan('+ 3'));
  oe_2.appendChild(htmlSpan(' '));
  oe_2.appendChild(htmlSpan('- 8'));

  const inhoud = maakOefening({
    id:'oe_???', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, '', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* ---- Opgave a ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('a', null, true);
    td.querySelector('.rij').style.alignItems = 'flex-start';
    td.querySelector('.lbl').style.paddingTop = '0cm';
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tr = document.createElement('tr');
    const td = maakSlTd(null, true);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* ---- Opgave b ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('b', null, true);
    td.querySelector('.rij').style.alignItems = 'flex-start';
    td.querySelector('.lbl').style.paddingTop = '0cm';
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
      const tdLbl = maakOpTdaz('1', null, true);
      tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
      tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(null, true);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', null, true);
      tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
      tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(null, true);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(null, true);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    /* subopgave 3 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('3', null, true);
      tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
      tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(null, true);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(null, true);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(null, true);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  /* ---- Opgave c ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('c', null, true);
    td.querySelector('.rij').style.alignItems = 'flex-start';
    td.querySelector('.lbl').style.paddingTop = '0cm';
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
      const tdLblL = maakOpTdaz('1', null, true);
      tdLblL.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblL.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('4', null, true);
      tdLblR.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblR.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 1 — oplossingen */
    {
      const oplL1 = [
        null,
        null
      ];
      const oplR1 = [
        null,
        null
      ];
      for (let i=0; i<2; i++) {
        const tr = document.createElement('tr');
        const tdL1 = maakSlTd(oplL1[i], true);
        tdL1.classList.add('kolom-links');
        tr.appendChild(tdL1);
        const tdR1 = maakSlTd(oplR1[i], true);
        tdR1.classList.add('kolom-rechts');
        tr.appendChild(tdR1);
        tbody2.appendChild(tr);
      }
    }

    /* rij 2 — labels */
    {
      const trL = document.createElement('tr');
      const tdLblL = maakOpTdaz('2', null, true);
      tdLblL.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblL.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('5', null, true);
      tdLblR.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblR.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 2 — oplossingen */
    {
      const oplL2 = [
        null,
        null
      ];
      const oplR2 = [
        null,
        null
      ];
      for (let i=0; i<2; i++) {
        const tr = document.createElement('tr');
        const tdL2 = maakSlTd(oplL2[i], true);
        tdL2.classList.add('kolom-links');
        tr.appendChild(tdL2);
        const tdR2 = maakSlTd(oplR2[i], true);
        tdR2.classList.add('kolom-rechts');
        tr.appendChild(tdR2);
        tbody2.appendChild(tr);
      }
    }

    /* rij 3 — labels */
    {
      const trL = document.createElement('tr');
      const tdLblL = maakOpTdaz('3', null, true);
      tdLblL.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblL.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('6', null, true);
      tdLblR.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblR.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 3 — oplossingen */
    {
      const oplL3 = [
        null,
        null
      ];
      const oplR3 = [
        null,
        null
      ];
      for (let i=0; i<2; i++) {
        const tr = document.createElement('tr');
        const tdL3 = maakSlTd(oplL3[i], true);
        tdL3.classList.add('kolom-links');
        tr.appendChild(tdL3);
        const tdR3 = maakSlTd(oplR3[i], true);
        tdR3.classList.add('kolom-rechts');
        tr.appendChild(tdR3);
        tbody2.appendChild(tr);
      }
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  /* ---- Opgave d ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('d', null, true);
    td.querySelector('.rij').style.alignItems = 'flex-start';
    td.querySelector('.lbl').style.paddingTop = '0cm';
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
    const TW = '1.5cm';

    /* rij 1 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTd('1', oe_1, TW, true, oe_2);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakOpTd('5', null, TW, true, null);
      tdR.classList.add('kolom-rechts');
      tr.appendChild(tdR);
      tbody2.appendChild(tr);
    }

    /* rij 2 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTd('2', null, TW, true, null);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakOpTd('6', null, TW, true, null);
      tdR.classList.add('kolom-rechts');
      tr.appendChild(tdR);
      tbody2.appendChild(tr);
    }

    /* rij 3 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTd('3', null, TW, true, null);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakOpTd('7', null, TW, true, null);
      tdR.classList.add('kolom-rechts');
      tr.appendChild(tdR);
      tbody2.appendChild(tr);
    }

    /* rij 4 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTd('4', null, TW, true, null);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakOpTd('8', null, TW, true, null);
      tdR.classList.add('kolom-rechts');
      tr.appendChild(tdR);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

})();
