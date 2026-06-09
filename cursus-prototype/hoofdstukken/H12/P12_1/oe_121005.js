/* ============================================================
   H12 / P12_1 / oe_121005.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_121005_1 = document.createElement('span');
  oe_121005_1.appendChild(htmlSpan('Per vierkante meter kunnen er 9 bloemen geplant worden. <br>Bereken het aantal bloemen dat in dit perk geplant kan worden.'));

  const oe_121005_2 = document.createElement('span');
  const oe_121005_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121005_2.appendChild(oe_121005_2_b1);
  const oe_121005_2_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_121005_2.appendChild(oe_121005_2_b2);
  oe_121005_2.appendChild(htmlSpan('Je moet berekenen hoeveel keer 1 m<sup>2</sup> in'));

  const oe_121005_4 = document.createElement('span');
  const oe_121005_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_121005_4.appendChild(oe_121005_4_b1);
  oe_121005_4.appendChild(htmlSpan('de driehoek kan.'));

  const oe_121005_5 = document.createElement('span');
  const oe_121005_5_b1 = maakSpanBreedte('1.4cm', '');
  oe_121005_5.appendChild(oe_121005_5_b1);
  oe_121005_5.appendChild(htmlSpan('Je moet dus de <b>oppervlakte</b> van de <b>driehoek</b> berekenen.'));

  const oe_121005_7 = document.createElement('span');
  const oe_121005_7_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121005_7.appendChild(oe_121005_7_b1);
  oe_121005_7.appendChild(htmlSpan('Berekening in m<sup>2</sup>: 4 · 3 : 2 = 6'));

  const oe_121005_8 = document.createElement('span');
  const oe_121005_8_b1 = maakSpanBreedte('0.4cm', '');
  oe_121005_8.appendChild(oe_121005_8_b1);
  oe_121005_8.appendChild(htmlSpan('9 bloemen per m<sup>2</sup>, dus 9 · 6 = 54 in totaal'));

  const oe_121005_9 = document.createElement('span');
  const oe_121005_9_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121005_9.appendChild(oe_121005_9_b1);
  oe_121005_9.appendChild(htmlSpan('Antwoord: er kunnen 54 bloemen geplant worden.'));

  const oe_121005_10 = document.createElement('span');
  oe_121005_10.appendChild(htmlSpan('Om het perk komt een boord. <br>Bereken de lengte van deze boord.'));

  const oe_121005_11 = document.createElement('span');
  const oe_121005_11_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121005_11.appendChild(oe_121005_11_b1);
  const oe_121005_11_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_121005_11.appendChild(oe_121005_11_b2);
  oe_121005_11.appendChild(htmlSpan('De boord vormt de rand van de driehoek.'));

  const oe_121005_12 = document.createElement('span');
  const oe_121005_12_b1 = maakSpanBreedte('1.4cm', '');
  oe_121005_12.appendChild(oe_121005_12_b1);
  oe_121005_12.appendChild(htmlSpan('Je moet dus de <b>omtrek</b> van de <b>driehoek</b> berekenen.'));

  const oe_121005_13 = document.createElement('span');
  const oe_121005_13_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121005_13.appendChild(oe_121005_13_b1);
  oe_121005_13.appendChild(htmlSpan('Berekening in m: 3 + 4 + 5 = 12'));

  const oe_121005_14 = document.createElement('span');
  const oe_121005_14_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121005_14.appendChild(oe_121005_14_b1);
  oe_121005_14.appendChild(htmlSpan('Antwoord: De boord is 12 m lang.'));

  const inhoud = maakOefening({
    id:'oe_121005', nummer:'?', soort:'inoefenen',
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
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '70%';
    { const _v='Een bloemenperk heeft de vorm van een rechthoekige driehoek.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_121005_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '70%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_121005_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_121005_4, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    const _td_a_2 = maakSlTd(oe_121005_5, false);
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 5 van a */
  {
    const _tr_a_4 = document.createElement('tr');
    const _td_a_4 = maakSlTd(oe_121005_7, false);
    _td_a_4.classList.add('kolom-links');
    _tr_a_4.appendChild(_td_a_4); tbody.appendChild(_tr_a_4);
  }

  /* Schrijflijn 6 van a */
  {
    const _tr_a_5 = document.createElement('tr');
    const _td_a_5 = maakSlTd(oe_121005_8, false);
    _td_a_5.classList.add('kolom-links');
    _tr_a_5.appendChild(_td_a_5); tbody.appendChild(_tr_a_5);
  }

  /* Schrijflijn 7 van a */
  {
    const _tr_a_6 = document.createElement('tr');
    const _td_a_6 = maakSlTd(oe_121005_9, false);
    _td_a_6.classList.add('kolom-links');
    _tr_a_6.appendChild(_td_a_6); tbody.appendChild(_tr_a_6);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_121005_10, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    const _td_b_0 = maakSlTd(oe_121005_11, false);
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    const _td_b_1 = maakSlTd(oe_121005_12, false);
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    const _td_b_2 = maakSlTd(oe_121005_13, false);
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    const _td_b_3 = maakSlTd(oe_121005_14, false);
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '30%'); /* ← breedte aanpassen indien nodig */
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
      _img.src = 'afbeeldingen/oe_121005.svg'; /* ← bestandsnaam */
      _img.style.width     = '80%';
      _img.style.height    = '80%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
