/* ============================================================
   H11 / H11_INHW34WIE / oe_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* Opgave: (3/5)m + 2 = 7 + (1/5)m */
  const oe_2_1 = document.createElement('span');
  const oe_2_1_s1 = document.createElement('span');
  oe_2_1_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_2_1_s1.appendChild(htmlSpan('<i>m</i> + 2'));
  oe_2_1_s1.appendChild(htmlSpan(' = '));
  oe_2_1_s1.appendChild(htmlSpan('7 + '));
  oe_2_1_s1.appendChild(maakBreuk('1','5','opgave'));
  oe_2_1_s1.appendChild(htmlSpan('<i>m</i>'));
  oe_2_1.appendChild(oe_2_1_s1);

  /* Stap 1: (3/5)m - (lila (1/5)m) = 7 - (lila 2) */
  const oe_2_2 = document.createElement('span');
  const oe_2_2_s1 = document.createElement('span');
  oe_2_2_s1.appendChild(maakBreuk('3','5','opgave'));
  oe_2_2_s1.appendChild(htmlSpan('<i>m</i> '));
  const h01 = document.createElement('span');
  h01.appendChild(htmlSpan('− '));
  h01.appendChild(maakBreuk('1','5','opgave'));
  h01.appendChild(htmlSpan('<i>m</i>'));
  h01.classList.add('markeer-lila');
  oe_2_2_s1.appendChild(h01);
  oe_2_2_s1.appendChild(htmlSpan(' = 7'));
  oe_2_2_s1.appendChild(htmlSpan(' '));
  const h02 = document.createElement('span');
  h02.appendChild(htmlSpan('− 2'));
  h02.classList.add('markeer-lila');
  oe_2_2_s1.appendChild(h02);
  oe_2_2.appendChild(oe_2_2_s1);

  /* Stap 2: (2/5)m = 5 */
  const oe_2_3 = document.createElement('span');
  const oe_2_3_s1 = document.createElement('span');
  oe_2_3_s1.appendChild(maakBreuk('2','5','opgave'));
  oe_2_3_s1.appendChild(htmlSpan('<i>m</i> = 5'));
  oe_2_3.appendChild(oe_2_3_s1);

  /* Stap 3: m = 5 (lila : (2/5)) */
  const oe_2_4 = document.createElement('span');
  const oe_2_4_s1 = document.createElement('span');
  oe_2_4_s1.appendChild(htmlSpan('<i>m</i> = 5 '));
  const h03 = document.createElement('span');
  h03.appendChild(htmlSpan(': '));
  h03.appendChild(maakBreuk('2','5','opgave'));
  h03.classList.add('markeer-lila');
  oe_2_4_s1.appendChild(h03);
  oe_2_4.appendChild(oe_2_4_s1);

  /* Stap 4: m = 5 · (5/2) */
  const oe_2_5 = document.createElement('span');
  const oe_2_5_s1 = document.createElement('span');
  oe_2_5_s1.appendChild(htmlSpan('<i>m</i> = 5'));
  oe_2_5_s1.appendChild(htmlSpan(' · '));
  oe_2_5_s1.appendChild(maakBreuk('5','2','opgave'));
  oe_2_5.appendChild(oe_2_5_s1);

  /* Stap 5: m = 25/2 */
  const oe_2_6 = document.createElement('span');
  const oe_2_6_s1 = document.createElement('span');
  oe_2_6_s1.appendChild(htmlSpan('<i>m</i> = '));
  oe_2_6_s1.appendChild(maakBreuk('25','2','opgave'));
  oe_2_6.appendChild(oe_2_6_s1);

  /* Antwoordwaarde 25/2 (lila, voor hergebruik in controle) */
  const h04 = document.createElement('span');
  h04.appendChild(maakBreuk('25','2','opgave'));
  h04.classList.add('markeer-lila');

  /* LL: (3/5) · (25/2) + 2 = 15/2 + 4/2 = 19/2 */
  const oe_2_7 = document.createElement('span');
  const oe_2_7_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_2_7.appendChild(oe_2_7_b1);
  const oe_2_7_s2 = document.createElement('span');
  oe_2_7_s2.appendChild(maakBreuk('3','5','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' · '));
  oe_2_7_s2.appendChild(h04.cloneNode(true));
  oe_2_7_s2.appendChild(htmlSpan(' + 2 = '));
  oe_2_7_s2.appendChild(maakBreuk('15','2','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' + '));
  oe_2_7_s2.appendChild(maakBreuk('4','2','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' = '));
  oe_2_7_s2.appendChild(maakBreuk('19','2','opgave'));
  oe_2_7.appendChild(oe_2_7_s2);

  /* RL: 7 + (1/5) · (25/2) = 14/2 + 5/2 = 19/2 */
  const oe_2_8 = document.createElement('span');
  const oe_2_8_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_2_8.appendChild(oe_2_8_b1);
  const oe_2_8_s2 = document.createElement('span');
  oe_2_8_s2.appendChild(htmlSpan('7 + '));
  oe_2_8_s2.appendChild(maakBreuk('1','5','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' · '));
  oe_2_8_s2.appendChild(h04.cloneNode(true));
  oe_2_8_s2.appendChild(htmlSpan(' = '));
  oe_2_8_s2.appendChild(maakBreuk('14','2','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' + '));
  oe_2_8_s2.appendChild(maakBreuk('5','2','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' = '));
  oe_2_8_s2.appendChild(maakBreuk('19','2','opgave'));
  oe_2_8.appendChild(oe_2_8_s2);

  /* ---- Opbouw oefening ---- */
  const inhoud = maakOefening({
    id:'oe_2', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijking op.<br>Controleer je oplossing.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody, '0.3cm');

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
