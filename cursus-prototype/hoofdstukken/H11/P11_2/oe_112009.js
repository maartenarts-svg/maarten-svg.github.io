/* ============================================================
   H11 / P11_2 / oe_112009.js
   soort: oefening
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- a: stappen --- */
  const oe_112009_a_stap0 = document.createElement('span');
  oe_112009_a_stap0.appendChild(htmlSpan(''));

  const oe_112009_a_stap1 = document.createElement('span');
  oe_112009_a_stap1.appendChild(htmlSpan('Werk de termen met onbekende weg uit het ene lid.'));

  const oe_112009_a_stap2 = document.createElement('span');
  oe_112009_a_stap2.appendChild(htmlSpan('Herleid beide leden.'));

  const oe_112009_a_stap3 = document.createElement('span');
  oe_112009_a_stap3.appendChild(htmlSpan('Werk de factor weg uit het ene lid.'));

  const oe_112009_a_stap4 = document.createElement('span');
  oe_112009_a_stap4.appendChild(htmlSpan('Herleid beide leden.'));

  const oe_112009_a_stap5 = document.createElement('span');
  oe_112009_a_stap5.appendChild(htmlSpan('Controleer je oplossing.'));

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112009', nummer: '?', soort: 'oefening',
    niveaus: ['cirkel'], tools: [],
    toggleModus: 'oefening'
  });

  voegTekstToe(inhoud,'Volg het stappenplan om de vergelijking op te lossen. Gebruik eventueel de app <a href="https://maartenarts-svg.github.io/helperapps/vergelijkingenFALSE.html" target="_blank" rel="noopener noreferrer">balans</a>.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* ---- Opgave a ---- */
  /* --- a: oplossingen --- */
  const oe_112009_a_opl0 = document.createElement('span');
  oe_112009_a_opl0.appendChild(htmlSpan('8<i>x</i> = 13<i>x</i> + 35'));

  const oe_112009_a_opl1 = document.createElement('span');
  oe_112009_a_opl1.appendChild(htmlSpan('8<i>x</i> <span class="markeer-lila">- 13<i>x</i></span> = 13<i>x</i> + 35 <span class="markeer-lila">- 13<i>x</i></span>'));

  const oe_112009_a_opl2 = document.createElement('span');
  oe_112009_a_opl2.appendChild(htmlSpan('-5<i>x</i> = 35'));

  const oe_112009_a_opl3 = document.createElement('span');
  oe_112009_a_opl3.appendChild(htmlSpan('-5<i>x</i> <span class="markeer-lila">: (-5)</span> = 35 <span class="markeer-lila">: (-5)</span>'));

  const oe_112009_a_opl4 = document.createElement('span');
  oe_112009_a_opl4.appendChild(htmlSpan('<i>x</i> = -7'));

  const oe_112009_a_opl5 = document.createElement('span');
  oe_112009_a_opl5.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112009_a_opl5.appendChild(htmlSpan('8 · (-7) = -56'));

  const oe_112009_a_opl6 = document.createElement('span');
  oe_112009_a_opl6.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112009_a_opl6.appendChild(htmlSpan('13 · (-7) + 35 = -56'));

  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('a', htmlSpan('8<i>x</i> = 13<i>x</i> + 35'), false);
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

    const stappenA = [
      oe_112009_a_stap0,
      oe_112009_a_stap1,
      oe_112009_a_stap2,
      oe_112009_a_stap3,
      oe_112009_a_stap4,
      oe_112009_a_stap5,
      htmlSpan(''),
    ];
    const oplA = [
      oe_112009_a_opl0,
      oe_112009_a_opl1,
      oe_112009_a_opl2,
      oe_112009_a_opl3,
      oe_112009_a_opl4,
      oe_112009_a_opl5,
      oe_112009_a_opl6,
    ];

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
  /* --- b: oplossingen --- */
  const oe_112009_b_opg = document.createElement('span');
  oe_112009_b_opg.appendChild(htmlSpan('-3<i>a</i> = 7<i>a</i> + 50'));

  const oe_112009_b_opl1 = document.createElement('span');
  oe_112009_b_opl1.appendChild(htmlSpan('-3<i>a</i> <span class="markeer-lila">- 7<i>a</i></span> = 7<i>a</i> + 50 <span class="markeer-lila">- 7<i>a</i></span>'));

  const oe_112009_b_opl2 = document.createElement('span');
  oe_112009_b_opl2.appendChild(htmlSpan('-10<i>a</i> = 50'));

  const oe_112009_b_opl3 = document.createElement('span');
  oe_112009_b_opl3.appendChild(htmlSpan('-10<i>a</i> <span class="markeer-lila">: (-10)</span> = 50 <span class="markeer-lila">: (-10)</span>'));

  const oe_112009_b_opl4 = document.createElement('span');
  oe_112009_b_opl4.appendChild(htmlSpan('<i>a</i> = -5'));

  const oe_112009_b_opl5 = document.createElement('span');
  oe_112009_b_opl5.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112009_b_opl5.appendChild(htmlSpan('-3 · (-5) = 15'));

  const oe_112009_b_opl6 = document.createElement('span');
  oe_112009_b_opl6.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112009_b_opl6.appendChild(htmlSpan('7 · (-5) + 50 = 15'));

  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('b', htmlSpan('-3<i>a</i> = 7<i>a</i> + 50'), false);
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
      oe_112009_a_stap0,
      oe_112009_a_stap1,
      oe_112009_a_stap2,
      oe_112009_a_stap3,
      oe_112009_a_stap4,
      oe_112009_a_stap5,
      htmlSpan(''),
    ];
    const oplB = [
      oe_112009_b_opg,
      oe_112009_b_opl1,
      oe_112009_b_opl2,
      oe_112009_b_opl3,
      oe_112009_b_opl4,
      oe_112009_b_opl5,
      oe_112009_b_opl6,
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
  /* --- c: oplossingen --- */
  const oe_112009_c_opg = document.createElement('span');
  oe_112009_c_opg.appendChild(htmlSpan('15 + 3<i>b</i> = 10<i>b</i>'));

  const oe_112009_c_opl1 = document.createElement('span');
  oe_112009_c_opl1.appendChild(htmlSpan('15 + 3<i>b</i> <span class="markeer-lila">- 3<i>b</i></span> = 10<i>b</i> <span class="markeer-lila">- 3<i>b</i></span>'));

  const oe_112009_c_opl2 = document.createElement('span');
  oe_112009_c_opl2.appendChild(htmlSpan('15 = 7<i>b</i>'));

  const oe_112009_c_opl3 = document.createElement('span');
  oe_112009_c_opl3.appendChild(htmlSpan('15 <span class="markeer-lila">: 7</span> = 7<i>b</i> <span class="markeer-lila">: 7</span>'));

  const oe_112009_c_opl4 = document.createElement('span');
  const oe_112009_c_opl4_s = document.createElement('span');
  oe_112009_c_opl4_s.appendChild(maakBreuk('15', '7', 'opgave'));
  oe_112009_c_opl4_s.appendChild(htmlSpan(' = <i>b</i>'));
  oe_112009_c_opl4.appendChild(oe_112009_c_opl4_s);

  const oe_112009_c_opl5 = document.createElement('span');
  const oe_112009_c_opl5_s = document.createElement('span');
  oe_112009_c_opl5_s.appendChild(maakSpanBreedte('0.85cm', 'LL:'));
  oe_112009_c_opl5_s.appendChild(htmlSpan('15 + 3 · '));
  oe_112009_c_opl5_s.appendChild(maakBreuk('15', '7', 'opgave'));
  oe_112009_c_opl5_s.appendChild(htmlSpan(' = '));
  oe_112009_c_opl5_s.appendChild(maakBreuk('150', '7', 'opgave'));
  oe_112009_c_opl5.appendChild(oe_112009_c_opl5_s);

  const oe_112009_c_opl6 = document.createElement('span');
  const oe_112009_c_opl6_s = document.createElement('span');
  oe_112009_c_opl6_s.appendChild(maakSpanBreedte('0.85cm', 'RL:'));
  oe_112009_c_opl6_s.appendChild(htmlSpan('10 · '));
  oe_112009_c_opl6_s.appendChild(maakBreuk('15', '7', 'opgave'));
  oe_112009_c_opl6_s.appendChild(htmlSpan(' = '));
  oe_112009_c_opl6_s.appendChild(maakBreuk('150', '7', 'opgave'));
  oe_112009_c_opl6.appendChild(oe_112009_c_opl6_s);

  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('c', htmlSpan('15 + 3<i>b</i> = 10<i>b</i>'), false);
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

    const stappenC = [
      oe_112009_a_stap0,
      oe_112009_a_stap1,
      oe_112009_a_stap2,
      oe_112009_a_stap3,
      oe_112009_a_stap4,
      oe_112009_a_stap5,
      htmlSpan(''),
    ];
    const oplC = [
      oe_112009_c_opg,
      oe_112009_c_opl1,
      oe_112009_c_opl2,
      oe_112009_c_opl3,
      oe_112009_c_opl4,
      oe_112009_c_opl5,
      oe_112009_c_opl6,
    ];

    for (let i = 1; i < 6; i++) {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('•', stappenC[i].cloneNode(true));
      tdL.style.fontSize = '0.85em';
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplC[i], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }

    {
      const tr = document.createElement('tr');
      const tdL = maakStapZStreep('', stappenC[6].cloneNode(true));
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdR = maakSlTdZonderInsprong(oplC[6], false);
      tdR.style.overflow = 'hidden';
      tr.appendChild(tdR);
      tbodyhulp.appendChild(tr);
    }
  }


})();