/* ============================================================
   H11 / H11_W34WIB / oe_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_2_1 = document.createElement('span');
  const oe_2_1_s1 = document.createElement('span');
  oe_2_1_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_2_1_s1.appendChild(htmlSpan('<i>a</i> + '));
  oe_2_1_s1.appendChild(maakBreuk('1','5','opgave'));
  oe_2_1_s1.appendChild(htmlSpan(' = '));
  oe_2_1_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_2_1_s1.appendChild(htmlSpan(' + '));
  oe_2_1_s1.appendChild(maakBreuk('1','3','opgave'));
  oe_2_1_s1.appendChild(htmlSpan('<i>a</i>'));
  oe_2_1.appendChild(oe_2_1_s1);

  const oe_2_2 = document.createElement('span');
  const oe_2_2_s1 = document.createElement('span');
  oe_2_2_s1.appendChild(maakBreuk('2','3','opgave'));
  oe_2_2_s1.appendChild(htmlSpan('<i>a</i> '));
  const h01 = document.createElement('span');
  h01.appendChild(htmlSpan('- '));
  h01.appendChild(maakBreuk('1','3','opgave'));
  h01.appendChild(htmlSpan('<i>a</i>'));
  h01.classList.add('markeer-lila');
  oe_2_2_s1.appendChild(h01);
  oe_2_2_s1.appendChild(htmlSpan(' = '));
  oe_2_2_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_2_2_s1.appendChild(htmlSpan(' '));
  const h02 = document.createElement('span');
  h02.appendChild(htmlSpan('- '));
  h02.appendChild(maakBreuk('1','5','opgave'));
  h02.classList.add('markeer-lila');
  oe_2_2_s1.appendChild(h02);
  oe_2_2.appendChild(oe_2_2_s1);

  const oe_2_3 = document.createElement('span');
  const oe_2_3_s1 = document.createElement('span');
  oe_2_3_s1.appendChild(maakBreuk('1','3','opgave'));
  oe_2_3_s1.appendChild(htmlSpan('<i>a</i> = '));
  oe_2_3_s1.appendChild(maakBreuk('2','5','opgave'));
  oe_2_3.appendChild(oe_2_3_s1);

  const oe_2_4 = document.createElement('span');
  const oe_2_4_s1 = document.createElement('span');
  oe_2_4_s1.appendChild(htmlSpan('<i>a</i> = '));
  oe_2_4_s1.appendChild(maakBreuk('2','5','opgave'));
  oe_2_4_s1.appendChild(htmlSpan(' '));
  const h03 = document.createElement('span');
  h03.appendChild(htmlSpan(': '));
  h03.appendChild(maakBreuk('1','3','opgave'));
  h03.classList.add('markeer-lila');
  oe_2_4_s1.appendChild(h03);
  oe_2_4.appendChild(oe_2_4_s1);

  const oe_2_5 = document.createElement('span');
  const oe_2_5_s1 = document.createElement('span');
  oe_2_5_s1.appendChild(htmlSpan('<i>a</i> = '));
  oe_2_5_s1.appendChild(maakBreuk('2','5','opgave'));
  oe_2_5_s1.appendChild(htmlSpan(' · '));
  oe_2_5_s1.appendChild(maakBreuk('3','1','opgave'));
  oe_2_5.appendChild(oe_2_5_s1);

  const oe_2_6 = document.createElement('span');
  const oe_2_6_s1 = document.createElement('span');
  oe_2_6_s1.appendChild(htmlSpan('<i>a</i> = '));
  oe_2_6_s1.appendChild(maakBreuk('6','5','opgave'));
  oe_2_6.appendChild(oe_2_6_s1);

  const h04 = document.createElement('span');
  h04.appendChild(maakBreuk('6','5','opgave'));
  h04.classList.add('markeer-lila');
  const oe_2_7 = document.createElement('span');
  const oe_2_7_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_2_7.appendChild(oe_2_7_b1);
  const oe_2_7_s2 = document.createElement('span');
  oe_2_7_s2.appendChild(maakBreuk('2','3','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' · '));
  oe_2_7_s2.appendChild(h04.cloneNode(true));
  oe_2_7_s2.appendChild(htmlSpan(' + '));
  oe_2_7_s2.appendChild(maakBreuk('1','5','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' = '));
  oe_2_7_s2.appendChild(maakBreuk('4','5','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' + '));
  oe_2_7_s2.appendChild(maakBreuk('1','5','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' = 1'));
  oe_2_7.appendChild(oe_2_7_s2);

  const oe_2_8 = document.createElement('span');
  const oe_2_8_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_2_8.appendChild(oe_2_8_b1);
  const oe_2_8_s2 = document.createElement('span');
  oe_2_8_s2.appendChild(maakBreuk('3','5','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' + '));
  oe_2_8_s2.appendChild(maakBreuk('1','3','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' · '));
  oe_2_8_s2.appendChild(h04.cloneNode(true));
  oe_2_8_s2.appendChild(htmlSpan(' = '));
  oe_2_8_s2.appendChild(maakBreuk('3','5','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' + '));
  oe_2_8_s2.appendChild(maakBreuk('2','5','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' = '));
  oe_2_8_s2.appendChild(maakBreuk('5','5','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' = 1'));
  oe_2_8.appendChild(oe_2_8_s2);

  const inhoud = maakOefening({
    id:'oe_2', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijking op.<br>Controleer je oplossing.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

    {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const _o = oe_2_1;
        if (typeof _o === 'string') td.innerHTML = _o;
        else td.appendChild(_o);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_2_2, true);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_2_3, true);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_2_4, true);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_2_5, true);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_2_6, true);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_2_7, true);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_2_8, true);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
