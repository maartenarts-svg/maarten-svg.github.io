/* ============================================================
   H11 / P11_2 / oe_112006.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_112006_4 = document.createElement('span');
  oe_112006_4.appendChild(htmlSpan('Bereken het aantal stippen van de 6de figuur.'));

  const oe_112006_5 = document.createElement('span');
  oe_112006_5.appendChild(htmlSpan('<i>s</i> = 2 · 6 + 1 = 13'));

  const oe_112006_6 = document.createElement('span');
  oe_112006_6.appendChild(htmlSpan('De 6de figuur heeft 13 stippen.'));

  const oe_112006_7 = document.createElement('span');
  oe_112006_7.appendChild(htmlSpan('Bereken het nummer van de figuur met 53 stippen.'));

  const oe_112006_8 = document.createElement('span');
  oe_112006_8.appendChild(htmlSpan('53 = 2<i>n</i> + 1'));

  const oe_112006_9 = document.createElement('span');
  oe_112006_9.appendChild(htmlSpan('53 <span class="markeer-lila">- 1</span> = 2<i>n</i> + 1 <span class="markeer-lila">- 1</span>'));

  const oe_112006_10 = document.createElement('span');
  oe_112006_10.appendChild(htmlSpan('52 = 2<i>n</i>'));

  const oe_112006_11 = document.createElement('span');
  oe_112006_11.appendChild(htmlSpan('52 <span class="markeer-lila">: 2</span> = 2<i>n</i> <span class="markeer-lila">: 2</span>'));

  const oe_112006_12 = document.createElement('span');
  oe_112006_12.appendChild(htmlSpan('26 = <i>n</i>'));

  const inhoud = maakOefening({
    id:'oe_112006', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });
  inhoud.style.position = 'relative';

  function maakFiguurContainer(naam, breedte) {
    const div = document.createElement('div');
    div.id = naam;
    div.style.position      = 'absolute';
    div.style.right         = '0';
    div.style.width         = breedte;
    div.style.display       = 'flex';
    div.style.alignItems    = 'center';
    div.style.justifyContent = 'center';
    div.style.boxSizing     = 'border-box';
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='De eerste vier figuren van een rij zijn gegeven.<br>De formule om het aantal stippen <i>s</i> te berekenen in functie van het nummer <i>n</i> van de figuur <br>is <i>s</i> = 2<i>n</i> + 1.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);


  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(null, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(null, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd(null, false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_112006_4, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    const _td_b_0 = maakSlTd(oe_112006_5, false);
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    const _td_b_1 = maakSlTd(oe_112006_6, false);
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_112006_7, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_112006_8, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* Schrijflijn 2 van c */
  {
    const _tr_c_1 = document.createElement('tr');
    const _td_c_1 = maakSlTd(oe_112006_9, false);
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }

  /* Schrijflijn 3 van c */
  {
    const _tr_c_2 = document.createElement('tr');
    const _td_c_2 = maakSlTd(oe_112006_10, false);
    _td_c_2.classList.add('kolom-links');
    _tr_c_2.appendChild(_td_c_2); tbody.appendChild(_tr_c_2);
  }

  /* Schrijflijn 4 van c */
  {
    const _tr_c_3 = document.createElement('tr');
    const _td_c_3 = maakSlTd(oe_112006_11, false);
    _td_c_3.classList.add('kolom-links');
    _tr_c_3.appendChild(_td_c_3); tbody.appendChild(_tr_c_3);
  }

  /* Schrijflijn 5 van c */
  {
    const _tr_c_4 = document.createElement('tr');
    const _td_c_4 = maakSlTd(oe_112006_12, false);
    _td_c_4.classList.add('kolom-links');
    _tr_c_4.appendChild(_td_c_4); tbody.appendChild(_tr_c_4);
  }

  /* Schrijflijn 6 van c */
  {
    const _tr_c_5 = document.createElement('tr');
    const _td_c_5 = maakSlTd(htmlSpan('Het nummer van deze figuur is 26.'), false);
    _td_c_5.classList.add('kolom-links');
    _tr_c_5.appendChild(_td_c_5); tbody.appendChild(_tr_c_5);
  }
  {
    const _tr_c_5 = document.createElement('tr');
    const _td_c_5 = maakSlTd(htmlSpan('controle: 2 · 26 + 1 = 53'), false);
    _td_c_5.classList.add('kolom-links');
    _tr_c_5.appendChild(_td_c_5); tbody.appendChild(_tr_c_5);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '100%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_112006.svg'; /* ← bestandsnaam */
      _img.style.width     = '80%';
      _img.style.height    = 'auto';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
