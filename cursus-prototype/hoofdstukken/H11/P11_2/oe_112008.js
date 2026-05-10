/* ============================================================
   H11 / P11_2 / oe_112008.js
   soort: oefening
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- a: stappen --- */
  const oe_112008_a_stap0 = document.createElement('span');
  oe_112008_a_stap0.appendChild(htmlSpan(''));

  const oe_112008_a_stap1 = document.createElement('span');
  oe_112008_a_stap1.appendChild(htmlSpan('Werk de termen zonder onbekende weg uit het ene lid.'));

  const oe_112008_a_stap2 = document.createElement('span');
  oe_112008_a_stap2.appendChild(htmlSpan('Herleid beide leden.'));

  const oe_112008_a_stap3 = document.createElement('span');
  oe_112008_a_stap3.appendChild(htmlSpan('Werk de factor weg uit het ene lid.'));

  const oe_112008_a_stap4 = document.createElement('span');
  oe_112008_a_stap4.appendChild(htmlSpan('Herleid beide leden.'));

  const oe_112008_a_stap5 = document.createElement('span');
  oe_112008_a_stap5.appendChild(htmlSpan('Controleer je oplossing.'));

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112008', nummer: '?', soort: 'oefening',
    niveaus: ['cirkel'], tools: [],
    toggleModus: 'oefening'
  });

  voegTekstToe(inhoud,'Volg het stappenplan om de vergelijking op te lossen. Gebruik eventueel de app <a href="https://maartenarts-svg.github.io/helperapps/vergelijkingenFALSE.html" target="_blank" rel="noopener noreferrer">balans</a>.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* ---- Opgave a ---- */
  /* --- a: oplossingen --- */
  const oe_112008_a_opl0 = document.createElement('span');
  oe_112008_a_opl0.appendChild(htmlSpan('9<i>x</i> + 7 = 34'));

  const oe_112008_a_opl1 = document.createElement('span');
  oe_112008_a_opl1.appendChild(htmlSpan('9<i>x</i> + 7 <span class="markeer-lila">- 7</span> = 34 <span class="markeer-lila">- 7</span>'));

  const oe_112008_a_opl2 = document.createElement('span');
  oe_112008_a_opl2.appendChild(htmlSpan('9<i>x</i> = 27'));

  const oe_112008_a_opl3 = document.createElement('span');
  oe_112008_a_opl3.appendChild(htmlSpan('9<i>x</i> <span class="markeer-lila">: 9</span> = 27 <span class="markeer-lila">: 9</span>'));

  const oe_112008_a_opl4 = document.createElement('span');
  oe_112008_a_opl4.appendChild(htmlSpan('<i>x</i> = 3'));

  const oe_112008_a_opl5 = document.createElement('span');
  oe_112008_a_opl5.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112008_a_opl5.appendChild(htmlSpan('9 · 3 + 7 = 34'));

  const oe_112008_a_opl6 = document.createElement('span');
  oe_112008_a_opl6.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112008_a_opl6.appendChild(htmlSpan('34'));

  {
    const tbodyX = maakNestedTabel(tbody, '4.19%');

    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbodyX.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.tableLayout = 'fixed';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '60%';
    const col2 = document.createElement('col'); col2.style.width = '40%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const stappenA = [
      oe_112008_a_stap0,
      oe_112008_a_stap1,
      oe_112008_a_stap2,
      oe_112008_a_stap3,
      oe_112008_a_stap4,
      oe_112008_a_stap5,
      htmlSpan(''),
    ];
    const oplA = [
      oe_112008_a_opl0,
      oe_112008_a_opl1,
      oe_112008_a_opl2,
      oe_112008_a_opl3,
      oe_112008_a_opl4,
      oe_112008_a_opl5,
      oe_112008_a_opl6,
    ];

    {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('', stappenA[0]);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakOpTdazZonder(oplA[0], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }

    for (let i = 1; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('•', stappenA[i]);
      tdL.style.fontSize = '0.85em';
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplA[i], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }

    {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('', stappenA[6]);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplA[6], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }
  }

  voegWitruimteToe(tbody, '0.3cm');

  /* ---- Opgave b ---- */
  /* --- b1: oplossingen --- */
  const oe_112008_b1_opg = document.createElement('span');
  oe_112008_b1_opg.appendChild(htmlSpan('-3<i>y</i> + 8 = -13'));

  const oe_112008_b1_opl1 = document.createElement('span');
  oe_112008_b1_opl1.appendChild(htmlSpan('-3<i>y</i> + 8 <span class="markeer-lila">- 8</span> = -13 <span class="markeer-lila">- 8</span>'));

  const oe_112008_b1_opl2 = document.createElement('span');
  oe_112008_b1_opl2.appendChild(htmlSpan('-3<i>y</i> = -21'));

  const oe_112008_b1_opl3 = document.createElement('span');
  oe_112008_b1_opl3.appendChild(htmlSpan('-3<i>y</i> <span class="markeer-lila">: (-3)</span> = -21 <span class="markeer-lila">: (-3)</span>'));

  const oe_112008_b1_opl4 = document.createElement('span');
  oe_112008_b1_opl4.appendChild(htmlSpan('<i>y</i> = 7'));

  const oe_112008_b1_opl5 = document.createElement('span');
  oe_112008_b1_opl5.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112008_b1_opl5.appendChild(htmlSpan('-3 · 7 + 8 = -13'));

  const oe_112008_b1_opl6 = document.createElement('span');
  oe_112008_b1_opl6.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112008_b1_opl6.appendChild(htmlSpan('-13'));

  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('b', htmlSpan('-3<i>y</i> + 8 = -13'), false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tbodyX = maakNestedTabel(tbody, '4.19%');

    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbodyX.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.tableLayout = 'fixed';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '60%';
    const col2 = document.createElement('col'); col2.style.width = '40%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const stappenB = [
      oe_112008_a_stap0,
      oe_112008_a_stap1,
      oe_112008_a_stap2,
      oe_112008_a_stap3,
      oe_112008_a_stap4,
      oe_112008_a_stap5,
      htmlSpan(''),
    ];
    const oplB = [
      oe_112008_b1_opg,
      oe_112008_b1_opl1,
      oe_112008_b1_opl2,
      oe_112008_b1_opl3,
      oe_112008_b1_opl4,
      oe_112008_b1_opl5,
      oe_112008_b1_opl6,
    ];

    for (let i = 1; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('•', stappenB[i].cloneNode(true));
      tdL.style.fontSize = '0.85em';
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplB[i], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }

    {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('', stappenB[6].cloneNode(true));
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplB[6], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }
  }

  voegWitruimteToe(tbody, '0.3cm');

  /* ---- Opgave c ---- */
  /* --- b2: oplossingen --- */
  const oe_112008_b2_opg = document.createElement('span');
  oe_112008_b2_opg.appendChild(htmlSpan('70 = 10<i>z</i> - 33'));

  const oe_112008_b2_opl1 = document.createElement('span');
  oe_112008_b2_opl1.appendChild(htmlSpan('70 <span class="markeer-lila">+ 33</span> = 10<i>z</i> - 33 <span class="markeer-lila">+ 33</span>'));

  const oe_112008_b2_opl2 = document.createElement('span');
  oe_112008_b2_opl2.appendChild(htmlSpan('103 = 10<i>z</i>'));

  const oe_112008_b2_opl3 = document.createElement('span');
  oe_112008_b2_opl3.appendChild(htmlSpan('103 <span class="markeer-lila">: 10</span> = 10<i>z</i> <span class="markeer-lila">: 10</span>'));

  const oe_112008_b2_opl4 = document.createElement('span');
  oe_112008_b2_opl4.appendChild(htmlSpan('10,3 = <i>z</i>'));

  const oe_112008_b2_opl5 = document.createElement('span');
  oe_112008_b2_opl5.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112008_b2_opl5.appendChild(htmlSpan('70'));

  const oe_112008_b2_opl6 = document.createElement('span');
  oe_112008_b2_opl6.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112008_b2_opl6.appendChild(htmlSpan('10 · 10,3 - 33 = 70'));

  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('c', htmlSpan('70 = 10<i>z</i> - 33'), false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tbodyX = maakNestedTabel(tbody, '4.19%');

    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbodyX.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.tableLayout = 'fixed';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '60%';
    const col2 = document.createElement('col'); col2.style.width = '40%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const stappenB = [
      oe_112008_a_stap0,
      oe_112008_a_stap1,
      oe_112008_a_stap2,
      oe_112008_a_stap3,
      oe_112008_a_stap4,
      oe_112008_a_stap5,
      htmlSpan(''),
    ];
    const oplB = [
      oe_112008_b2_opg,
      oe_112008_b2_opl1,
      oe_112008_b2_opl2,
      oe_112008_b2_opl3,
      oe_112008_b2_opl4,
      oe_112008_b2_opl5,
      oe_112008_b2_opl6,
    ];

    for (let i = 1; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('•', stappenB[i].cloneNode(true));
      tdL.style.fontSize = '0.85em';
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplB[i], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }

    {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('', stappenB[6].cloneNode(true));
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplB[6], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }
  }


})();