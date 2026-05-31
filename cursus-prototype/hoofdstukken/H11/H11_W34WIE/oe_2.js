/* ============================================================
   H11 / H11_W34WIE / oe_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* Opgave: ¾b + ⅙ = ⅚ + ¼b */
  const oe_2_1 = document.createElement('span');
  const oe_2_1_s1 = document.createElement('span');
  oe_2_1_s1.appendChild(maakBreuk('3','7','opgave'));
  oe_2_1_s1.appendChild(htmlSpan('<i>b</i> + 5'));
  oe_2_1_s1.appendChild(htmlSpan(' = '));
  oe_2_1_s1.appendChild(htmlSpan('10 + '));
  oe_2_1_s1.appendChild(maakBreuk('1','7','opgave'));
  oe_2_1_s1.appendChild(htmlSpan('<i>b</i>'));
  oe_2_1.appendChild(oe_2_1_s1);

  /* Stap 1: ¾b - (lila ¼b) = ⅚ - (lila ⅙) */
  const oe_2_2 = document.createElement('span');
  const oe_2_2_s1 = document.createElement('span');
  oe_2_2_s1.appendChild(maakBreuk('3','7','opgave'));
  oe_2_2_s1.appendChild(htmlSpan('<i>b</i> '));
  const h01 = document.createElement('span');
  h01.appendChild(htmlSpan('− '));
  h01.appendChild(maakBreuk('1','7','opgave'));
  h01.appendChild(htmlSpan('<i>b</i>'));
  h01.classList.add('markeer-lila');
  oe_2_2_s1.appendChild(h01);
  oe_2_2_s1.appendChild(htmlSpan(' = 10'));
  oe_2_2_s1.appendChild(htmlSpan(' '));
  const h02 = document.createElement('span');
  h02.appendChild(htmlSpan('− 5'));
  h02.classList.add('markeer-lila');
  oe_2_2_s1.appendChild(h02);
  oe_2_2.appendChild(oe_2_2_s1);

  /* Stap 2: ½b = ⅔ */
  const oe_2_3 = document.createElement('span');
  const oe_2_3_s1 = document.createElement('span');
  oe_2_3_s1.appendChild(maakBreuk('2','7','opgave'));
  oe_2_3_s1.appendChild(htmlSpan('<i>b</i> = 5'));
  oe_2_3.appendChild(oe_2_3_s1);

  /* Stap 3: b = ⅔ (lila : ½) */
  const oe_2_4 = document.createElement('span');
  const oe_2_4_s1 = document.createElement('span');
  oe_2_4_s1.appendChild(htmlSpan('<i>b</i> = 5 '));
  const h03 = document.createElement('span');
  h03.appendChild(htmlSpan(': '));
  h03.appendChild(maakBreuk('2','7','opgave'));
  h03.classList.add('markeer-lila');
  oe_2_4_s1.appendChild(h03);
  oe_2_4.appendChild(oe_2_4_s1);

  /* Stap 4: b = ⅔ · 2/1 */
  const oe_2_5 = document.createElement('span');
  const oe_2_5_s1 = document.createElement('span');
  oe_2_5_s1.appendChild(htmlSpan('<i>b</i> = 5'));
  oe_2_5_s1.appendChild(htmlSpan(' · '));
  oe_2_5_s1.appendChild(maakBreuk('7','2','opgave'));
  oe_2_5.appendChild(oe_2_5_s1);

  /* Stap 5: b = 4/3 */
  const oe_2_6 = document.createElement('span');
  const oe_2_6_s1 = document.createElement('span');
  oe_2_6_s1.appendChild(htmlSpan('<i>b</i> = '));
  oe_2_6_s1.appendChild(maakBreuk('35','2','opgave'));
  oe_2_6.appendChild(oe_2_6_s1);

  /* Antwoordwaarde 4/3 (lila, voor hergebruik in controle) */
  const h04 = document.createElement('span');
  h04.appendChild(maakBreuk('35','2','opgave'));
  h04.classList.add('markeer-lila');

  /* LL: ¾ · (4/3) + ⅙ = 1 + ⅙ = 7/6 */
  const oe_2_7 = document.createElement('span');
  const oe_2_7_b1 = maakSpanBreedte('0.65cm', 'LL:');
  oe_2_7.appendChild(oe_2_7_b1);
  const oe_2_7_s2 = document.createElement('span');
  oe_2_7_s2.appendChild(maakBreuk('3','7','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' · '));
  oe_2_7_s2.appendChild(h04.cloneNode(true));
  oe_2_7_s2.appendChild(htmlSpan(' + 5 = '));
  oe_2_7_s2.appendChild(maakBreuk('15','2','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' + '));
  oe_2_7_s2.appendChild(maakBreuk('10','2','opgave'));
  oe_2_7_s2.appendChild(htmlSpan(' = '));
  oe_2_7_s2.appendChild(maakBreuk('25','2','opgave'));
  oe_2_7.appendChild(oe_2_7_s2);

  /* RL: ⅚ + ¼ · (4/3) = ⅚ + ⅓ = ⅚ + 2/6 = 7/6 */
  const oe_2_8 = document.createElement('span');
  const oe_2_8_b1 = maakSpanBreedte('0.65cm', 'RL:');
  oe_2_8.appendChild(oe_2_8_b1);
  const oe_2_8_s2 = document.createElement('span');
  oe_2_8_s2.appendChild(htmlSpan('10 + '));
  oe_2_8_s2.appendChild(maakBreuk('1','7','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' · '));
  oe_2_8_s2.appendChild(h04.cloneNode(true));
  oe_2_8_s2.appendChild(htmlSpan(' = '));
  oe_2_8_s2.appendChild(maakBreuk('20','2','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' + '));
  oe_2_8_s2.appendChild(maakBreuk('5','2','opgave'));
  oe_2_8_s2.appendChild(htmlSpan(' = '));
  oe_2_8_s2.appendChild(maakBreuk('25','2','opgave'));
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
