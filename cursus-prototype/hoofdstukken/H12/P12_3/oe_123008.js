/* ============================================================
   H12 / P12_3 / oe_123008.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_123008_1 = document.createElement('span');
  oe_123008_1.appendChild(htmlSpan('Bereken <i>h</i> met de gegevens op de figuur.'));

  const oe_123008_2 = document.createElement('span');
  const oe_123008_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123008_2.appendChild(oe_123008_2_b1);
  const oe_123008_2_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_123008_2.appendChild(oe_123008_2_b2);
   oe_123008_2.appendChild(htmlSpan('Bereken de oppervlakte op 2 manieren:'));

  const oe_123008_3 = document.createElement('span');
  const oe_123008_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_123008_3.appendChild(oe_123008_3_b1);
  oe_123008_3.appendChild(htmlSpan('met basis 8 cm en hoogte 3 cm en met'));

  const oe_123008_4 = document.createElement('span');
  const oe_123008_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_123008_4.appendChild(oe_123008_4_b1);
  oe_123008_4.appendChild(htmlSpan('basis 5 cm en hoogte <i>h</i>.'));

  const oe_123008_5 = document.createElement('span');
  const oe_123008_5_b1 = maakSpanBreedte('1.4cm', '');
  oe_123008_5.appendChild(oe_123008_5_b1);
  oe_123008_5.appendChild(htmlSpan('Met een vergelijking bereken je <i>h</i>.'));

  const oe_123008_6 = document.createElement('span');
  const oe_123008_6_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123008_6.appendChild(oe_123008_6_b1);
  oe_123008_6.appendChild(maakSpanBreedte('3.4cm','Berekening in cm:'));
  oe_123008_6.appendChild(htmlSpan('8 · 3 = 5 · <i>h</i>'));

  const oe_123008_7 = document.createElement('span');
  const oe_123008_7_b1 = maakSpanBreedte('3.8cm', '');
  oe_123008_7.appendChild(oe_123008_7_b1);
  oe_123008_7.appendChild(htmlSpan('24 = 5<i>h</i>'));

  const oe_123008_8 = document.createElement('span');
  const oe_123008_8_b1 = maakSpanBreedte('3.8cm', '');
  oe_123008_8.appendChild(oe_123008_8_b1);
  oe_123008_8.appendChild(htmlSpan('4,8 = <i>h</i>'));

  const oe_123008_9 = document.createElement('span');
  const oe_123008_9_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123008_9.appendChild(oe_123008_9_b1);
  oe_123008_9.appendChild(htmlSpan('Antwoord: De hoogte is 4,8 cm.'));

  const inhoud = maakOefening({
    id:'oe_123008', nummer:'?', soort:'inoefenen',
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
    _p.style.width = '55%';
    { const _v='De gekleurde vierhoek is een parallellogram.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  /* Opgave 1 */
  {
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '55%';
    const _o = oe_123008_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_123008_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_123008_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_123008_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_123008_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 5 van 1 */
  {
    const _tr_0_4 = document.createElement('tr');
    _tr_0_4.dataset.figuur = 'afbeelding1';
    const _td_0_4 = maakSlTdZonderInsprong(oe_123008_6, false);
    _td_0_4.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_4.querySelector('.sl').style.flex = 'none';
    _td_0_4.classList.add('kolom-links');
    _tr_0_4.appendChild(_td_0_4); tbody_0.appendChild(_tr_0_4);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    _tr_0_5.dataset.figuur = 'afbeelding1';
    const _td_0_5 = maakSlTdZonderInsprong(oe_123008_7, false);
    _td_0_5.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_5.querySelector('.sl').style.flex = 'none';
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    _tr_0_6.dataset.figuur = 'afbeelding1';
    const _td_0_6 = maakSlTdZonderInsprong(oe_123008_8, false);
    _td_0_6.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_6.querySelector('.sl').style.flex = 'none';
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    _tr_0_7.dataset.figuur = 'afbeelding1';
    const _td_0_7 = maakSlTdZonderInsprong(oe_123008_9, false);
    _td_0_7.querySelector('.sl').style.maxWidth = 'calc(55% - var(--insprong-stap))';
    _td_0_7.querySelector('.sl').style.flex = 'none';
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '45%'); /* ← breedte aanpassen indien nodig */
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
      _img.src = 'afbeeldingen/oe_123008.svg'; /* ← bestandsnaam */
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
