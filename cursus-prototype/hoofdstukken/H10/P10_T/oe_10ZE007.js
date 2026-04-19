/* ============================================================
   H10 / P10_ZE / oe_10ZE007.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE007_1 = document.createElement('span');
  oe_10ZE007_1.appendChild(htmlSpan('Bereken het aantal gekleurde driehoeken.'));

  const oe_10ZE007_2 = document.createElement('span');
  oe_10ZE007_2.appendChild(htmlSpan('Het aantal gekleurde driehoeken is een'));

  const oe_10ZE007_3 = document.createElement('span');
  oe_10ZE007_3.appendChild(htmlSpan('driehoeksgetal met basis 15.'));

  const oe_10ZE007_4 = document.createElement('span');
  oe_10ZE007_4.appendChild(htmlSpan('15 · 16 : 2 = 120'));

  const oe_10ZE007_11 = document.createElement('span');
  oe_10ZE007_11.appendChild(htmlSpan('Er zijn 120 gekleurde driehoeken.'));

  const oe_10ZE007_5 = document.createElement('span');
  oe_10ZE007_5.appendChild(htmlSpan('Bereken het aantal witte driehoeken.'));

  const oe_10ZE007_6 = document.createElement('span');
  oe_10ZE007_6.appendChild(htmlSpan('Het aantal gekleurde driehoeken is een driehoeksgetal met basis 16.'));

  const oe_10ZE007_7 = document.createElement('span');
  oe_10ZE007_7.appendChild(htmlSpan('16 · 17 : 2 = 136'));

  const oe_10ZE007_8 = document.createElement('span');
  oe_10ZE007_8.appendChild(htmlSpan('Er zijn 136 gekleurde driehoeken.'));

  const oe_10ZE007_9 = document.createElement('span');
  oe_10ZE007_9.appendChild(htmlSpan('Bereken het totaal aantal kleine driehoeken.'));

  const oe_10ZE007_10 = document.createElement('span');
  oe_10ZE007_10.appendChild(htmlSpan('Er zijn 120 + 136 = 256 kleine driehoeken in totaal.'));

  const inhoud = maakOefening({
    id:'oe_10ZE007', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:['rekenmachine'],
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
    { const _v='De driehoek bestaat uit witte en gekleurde driehoeken.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_10ZE007_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_10ZE007_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_10ZE007_3, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd(oe_10ZE007_4, false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    const _td_a_3 = maakSlTd(oe_10ZE007_11, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  voegWitruimteToe(tbody);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_10ZE007_5, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    const _td_b_0 = maakSlTd(oe_10ZE007_6, false);
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    const _td_b_1 = maakSlTd(oe_10ZE007_7, false);
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    const _td_b_2 = maakSlTd(oe_10ZE007_8, false);
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  voegWitruimteToe(tbody);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_10ZE007_9, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_10ZE007_10, false);
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
      _img.src = 'afbeeldingen/oe_10ZE007.svg'; /* ← bestandsnaam */
      _img.style.width     = '150%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
