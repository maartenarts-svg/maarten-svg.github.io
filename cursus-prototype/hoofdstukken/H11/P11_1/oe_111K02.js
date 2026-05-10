/* ============================================================
   H11 / P11_1 / oe_111K02.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */

  const sprong = '0.65cm'

  const oe_111K02_1 = document.createElement('span');
  const oe_111K02_1_b1 = maakSpanBreedte(sprong, '•');
  oe_111K02_1.appendChild(oe_111K02_1_b1);
  oe_111K02_1.appendChild(htmlSpan('De massa van een varken is 2 keer die van een schaap (zie balans 1).'));

  const oe_111K02_2 = document.createElement('span');
  const oe_111K02_2_b1 = maakSpanBreedte(sprong, '');
  oe_111K02_2.appendChild(oe_111K02_2_b1);
  oe_111K02_2.appendChild(htmlSpan('De massa van een varken is dus 70 kg.'));

  const oe_111K02_3 = document.createElement('span');
  const oe_111K02_3_b1 = maakSpanBreedte(sprong, '•');
  oe_111K02_3.appendChild(oe_111K02_3_b1);
  oe_111K02_3.appendChild(htmlSpan('Op de tweede balans:'));

  const oe_111K02_5 = document.createElement('span');
  const oe_111K02_5_b1 = maakSpanBreedte(sprong, '');
  oe_111K02_5.appendChild(oe_111K02_5_b1);
  oe_111K02_5.appendChild(htmlSpan('massa varken + massa varken + massa schaap = massa varken + massa pony'));

  const oe_111K02_6 = document.createElement('span');
  const oe_111K02_6_b1 = maakSpanBreedte(sprong, '');
  oe_111K02_6.appendChild(oe_111K02_6_b1);
  oe_111K02_6.appendChild(htmlSpan('Stellen we de massa van de pony voor door p, dan krijgen we de vergelijking:'));

  const oe_111K02_7 = document.createElement('span');
  const oe_111K02_7_b1 = maakSpanBreedte(sprong, '');
  oe_111K02_7.appendChild(oe_111K02_7_b1);
  oe_111K02_7.appendChild(htmlSpan('70 + 70 + 35 = 70 + <i>p</i>'));

  const oe_111K02_8 = document.createElement('span');
  const oe_111K02_8_b1 = maakSpanBreedte(sprong, '');
  oe_111K02_8.appendChild(oe_111K02_8_b1);
  oe_111K02_8.appendChild(htmlSpan('175 <span class="markeer-lila">-70</span> = 70 + <i>p</i> <span class="markeer-lila">-70</span>'));

  const oe_111K02_9 = document.createElement('span');
  const oe_111K02_9_b1 = maakSpanBreedte(sprong, '');
  oe_111K02_9.appendChild(oe_111K02_9_b1);
  oe_111K02_9.appendChild(htmlSpan('105 = <i>p</i>'));

  const oe_111K02_10 = document.createElement('span');
  oe_111K02_10.appendChild(htmlSpan('De massa van de pony is 105 kg.'));

  const inhoud = maakOefening({
    id:'oe_111K02', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
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
    { const _v='Bereken de massa van een pony als die van een schaap 35 kg is.<br>Gebruik een vergelijking in je oplossing.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '100%';
    const _o = ''; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(null, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(00% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(null, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(00% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(null, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(00% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(null, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(00% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(null, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(00% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(null, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(00% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 5 van 1 */
  {
    const _tr_0_4 = document.createElement('tr');
    const _td_0_4 = maakSlTdZonderInsprong(oe_111K02_1, false);
    _td_0_4.classList.add('kolom-links');
    _tr_0_4.appendChild(_td_0_4); tbody_0.appendChild(_tr_0_4);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    const _td_0_5 = maakSlTdZonderInsprong(oe_111K02_2, false);
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    const _td_0_6 = maakSlTdZonderInsprong(oe_111K02_3, false);
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    const _td_0_7 = maakSlTdZonderInsprong(oe_111K02_5, false);
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  /* Schrijflijn 9 van 1 */
  {
    const _tr_0_8 = document.createElement('tr');
    const _td_0_8 = maakSlTdZonderInsprong(oe_111K02_6, false);
    _td_0_8.classList.add('kolom-links');
    _tr_0_8.appendChild(_td_0_8); tbody_0.appendChild(_tr_0_8);
  }

  /* Schrijflijn 10 van 1 */
  {
    const _tr_0_9 = document.createElement('tr');
    const _td_0_9 = maakSlTdZonderInsprong(oe_111K02_7, false);
    _td_0_9.classList.add('kolom-links');
    _tr_0_9.appendChild(_td_0_9); tbody_0.appendChild(_tr_0_9);
  }

  /* Schrijflijn 11 van 1 */
  {
    const _tr_0_10 = document.createElement('tr');
    const _td_0_10 = maakSlTdZonderInsprong(oe_111K02_8, false);
    _td_0_10.classList.add('kolom-links');
    _tr_0_10.appendChild(_td_0_10); tbody_0.appendChild(_tr_0_10);
  }

  /* Schrijflijn 12 van 1 */
  {
    const _tr_0_11 = document.createElement('tr');
    const _td_0_11 = maakSlTdZonderInsprong(oe_111K02_9, false);
    _td_0_11.classList.add('kolom-links');
    _tr_0_11.appendChild(_td_0_11); tbody_0.appendChild(_tr_0_11);
  }

  /* Schrijflijn 13 van 1 */
  {
    const _tr_0_12 = document.createElement('tr');
    const _td_0_12 = maakSlTdZonderInsprong(oe_111K02_10, false);
    _td_0_12.classList.add('kolom-links');
    _tr_0_12.appendChild(_td_0_12); tbody_0.appendChild(_tr_0_12);
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
      _img.src = 'afbeeldingen/oe_111K02.svg'; /* ← bestandsnaam */
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
