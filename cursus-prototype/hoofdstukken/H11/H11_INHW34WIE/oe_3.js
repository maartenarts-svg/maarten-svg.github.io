/* ============================================================
   H11 / H11_INHW34WIE / oe_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* Contexttekst: formule p = 6r + 4, p = 46 */
  const oe_3_1 = document.createElement('span');
  oe_3_1.appendChild(htmlSpan('De formule'));
  oe_3_1.appendChild(htmlSpan(' '));
  const oe_3_1_mk = maakMarkering(htmlSpan('<i>p</i>'), '#bbdefb', true);
  oe_3_1.appendChild(oe_3_1_mk);
  oe_3_1.appendChild(htmlSpan(' '));
  oe_3_1.appendChild(htmlSpan('= 6<i>r</i> + 4 geeft het verband weer tussen het aantal punten <i>p</i> en het aantal gewonnen rondes <i>r</i>.'));
  oe_3_1.appendChild(htmlSpan('<br>Finn scoorde'));
  oe_3_1.appendChild(htmlSpan(' '));
  const oe_3_1_m46 = maakMarkering(htmlSpan('46'), '#bbdefb', true);
  oe_3_1.appendChild(oe_3_1_m46);
  oe_3_1.appendChild(htmlSpan(' '));
  oe_3_1.appendChild(htmlSpan('punten.'));
  oe_3_1.appendChild(htmlSpan('<br>Bereken met een <b>vergelijking</b> het aantal rondes dat hij won.'));

  /* ---- Opbouw oefening ---- */
  const inhoud = maakOefening({
    id:'oe_3', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Finn speelt een spel waarbij hij punten kan verdienen met rondes.', ['intro-tekst']);

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

  /* uitwerking: [46] = 6r + 4 */
  {
    const h01 = document.createElement('span');
    h01.appendChild(maakMarkering('46', '#bbdefb'));
    h01.appendChild(htmlSpan(' = 6<i>r</i> + 4'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•', 'uitwerking:', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 46 - 4 = 6r */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('46 <span class="markeer-lila">− 4</span> = 6<i>r</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 42 = 6r */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('42 = 6<i>r</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 42 : 6 = r */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('42 <span class="markeer-lila">: 6</span> = <i>r</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* 7 = r */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('7 = <i>r</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('', '', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* antwoord */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('Finn won 7 rondes.'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•', 'antwoord:', ruimte, false, h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* controle: 6 · 7 + 4 = 42 + 4 = 46 */
  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('6 · <span class="markeer-lila">7</span> + 4 = 42 + 4 = 46'));
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
