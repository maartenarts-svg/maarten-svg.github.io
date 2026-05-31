/* ============================================================
   H11 / H11_W34WIE / oe_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* Contexttekst: formule k = 5n + 8, k = 83 */
  const oe_3_1 = document.createElement('span');
  oe_3_1.appendChild(htmlSpan('De formule'));
  oe_3_1.appendChild(htmlSpan(' '));
  const oe_3_1_mk = maakMarkering(htmlSpan('<i>k</i>'), '#bbdefb', true);
  oe_3_1.appendChild(oe_3_1_mk);
  oe_3_1.appendChild(htmlSpan(' '));
  oe_3_1.appendChild(htmlSpan('= 5<i>n</i> + 8 geeft het verband weer tussen het aantal munten <i>k</i> en het aantal gespeelde rondes <i>n</i>.'));
  oe_3_1.appendChild(htmlSpan('<br>Lena verdiende'));
  oe_3_1.appendChild(htmlSpan(' '));
  const oe_3_1_m83 = maakMarkering(htmlSpan('83'), '#bbdefb', true);
  oe_3_1.appendChild(oe_3_1_m83);
  oe_3_1.appendChild(htmlSpan(' '));
  oe_3_1.appendChild(htmlSpan('munten.'));
  oe_3_1.appendChild(htmlSpan('<br>Bereken met een <b>vergelijking</b> het aantal rondes dat ze speelde.'));

  /* ---- Opbouw oefening ---- */
  const inhoud = maakOefening({
    id:'oe_3', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Lena speelt een spel waarbij ze munten kan verdienen met rondes.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const _o = oe_3_1;
    if (typeof _o === 'string') td.innerHTML = _o;
    else td.appendChild(_o);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  const ruimte = '2cm';

  /* uitwerking: [83] = 5n + 8 */
  {
    const h01 = document.createElement('span');
    h01.appendChild(maakMarkering('83', '#bbdefb'));
    h01.appendChild(htmlSpan(' = 5<i>n</i> + 8'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•', 'uitwerking:', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 83 - 8 = 5n */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('83 <span class="markeer-lila">− 8</span> = 5<i>n</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 75 = 5n */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('75 = 5<i>n</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 75 : 5 = n */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('75 <span class="markeer-lila">: 5</span> = <i>n</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 15 = n */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('15 = <i>n</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* antwoord */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('Lena speelde 15 rondes.'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•', 'antwoord:', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* controle: 5 · 15 + 8 = 75 + 8 = 83 */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('5 · <span class="markeer-lila">15</span> + 8 = 75 + 8 = 83'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•', 'controle:', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* lege rij (opvulling) */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan(''));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

})();
