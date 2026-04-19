/* ============================================================
   H10 / P10_ZE / oe_10ZE005.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE005_1 = document.createElement('span');
  oe_10ZE005_1.appendChild(htmlSpan('Noteer de hoogte van de rechthoek.'));

  const oe_10ZE005_2 = document.createElement('span');
  oe_10ZE005_2.appendChild(htmlSpan('4 blokjes'));

  const oe_10ZE005_3 = document.createElement('span');
  oe_10ZE005_3.appendChild(htmlSpan('Bereken het aantal blokjes dat de rechthoek telt.'));

  const oe_10ZE005_4 = document.createElement('span');
  oe_10ZE005_4.appendChild(htmlSpan('De rechthoek telt 3 · 4 = 12 blokjes.'));

  const oe_10ZE005_6 = document.createElement('span');
  oe_10ZE005_6.appendChild(htmlSpan('Bereken het aantal blokjes in elke trap.'));

  const oe_10ZE005_7 = document.createElement('span');
  oe_10ZE005_7.appendChild(htmlSpan('Elke trap heeft 12 : 2 = 6 blokjes.'));

  const inhoud = maakOefening({
    id:'oe_10ZE005', nummer:'?', soort:'voorbeeld',
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
    _p.style.width = '60%';
    { const _v='De figuur toont twee trappen van 3 blokjes breed die samen een rechthoek vormen.<br>De breedte van die rechthoek is 3 blokjes.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);


  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_10ZE005_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_10ZE005_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  voegWitruimteToe(tbody);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('b', oe_10ZE005_3, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding1';
    const _td_b_0 = maakSlTd(oe_10ZE005_4, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  voegWitruimteToe(tbody);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('c', oe_10ZE005_6, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    _tr_c_0.dataset.figuur = 'afbeelding1';
    const _td_c_0 = maakSlTd(oe_10ZE005_7, false);
    _td_c_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_c_0.querySelector('.sl').style.flex = 'none';
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '40%'); /* ← breedte aanpassen indien nodig */
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
      _img.src = 'afbeeldingen/oe_10ZE005.svg'; /* ← bestandsnaam */
      _img.style.width     = '80%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
