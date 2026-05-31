/* ============================================================
   H11 / H11_W34WIB / oe_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_3_1 = document.createElement('span');
  oe_3_1.appendChild(htmlSpan('De formule'));
  oe_3_1.appendChild(htmlSpan(' '));
  const oe_3_1_m3 = maakMarkering(htmlSpan('<i>p</i>'), '#bbdefb', true);
  oe_3_1.appendChild(oe_3_1_m3);
  oe_3_1.appendChild(htmlSpan(' '));
  oe_3_1.appendChild(htmlSpan('= 7<i>a</i> + 6 geeft het verband weer tussen het aantal punten <i>p</i> en het aantal gemaakte opdrachten <i>a</i>.'));
  oe_3_1.appendChild(htmlSpan('<br>Sunna verdiende'));
  oe_3_1.appendChild(htmlSpan(' '));
  const oe_3_1_m8 = maakMarkering(htmlSpan('132'), '#bbdefb', true);
  oe_3_1.appendChild(oe_3_1_m8);
  oe_3_1.appendChild(htmlSpan(' '));
  oe_3_1.appendChild(htmlSpan('punten.'));
  oe_3_1.appendChild(htmlSpan('<br>Bereken met een <b>vergelijking</b> het aantal opdrachten dat ze maakte.'));

  const inhoud = maakOefening({
    id:'oe_3', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Sunna speelt een spel waarbij ze punten kan verdienen met opdrachten.', ['intro-tekst']);

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

  {
    const h01 = document.createElement('span');
    h01.appendChild(maakMarkering('132','#bbdefb'));
    h01.appendChild(htmlSpan(' = 7<i>a</i> + 6'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•','uitwerking:',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('132 <span class="markeer-lila">- 6</span> = 7<i>a</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('','',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('126 = 7<i>a</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('','',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('126 <span class="markeer-lila">: 7</span> = <i>a</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('','',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('18 = <i>a</i>'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('','',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('Sunna maakte 18 opdrachten.'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•','antwoord:',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan('7 · <span class="markeer-lila">18</span> + 6 = 126 + 6 = 132'));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('•','controle:',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const h01 = document.createElement('span');
    h01.appendChild(htmlSpan(''));
    const tr = document.createElement('tr');
    const td = maakOpTdDubbelZStrZdub('','',ruimte,false,h01);
    if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

})();
