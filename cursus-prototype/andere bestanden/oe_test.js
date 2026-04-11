/* ============================================================
   H?? / P?? / oe_???.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = true;

  const inhoud = maakOefening({
    id:'oe_???', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening', container:'.pagina'
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
    if (RAND_ZICHTBAAR) {
      div.style.border = '1.5px dashed #aaa';
      const lbl = document.createElement('span');
      lbl.textContent = naam;
      lbl.style.cssText = 'font-size:9pt;color:#999;pointer-events:none;font-family:Arial,sans-serif;';
      div.appendChild(lbl);
    }
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='a'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='b'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong('c', false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong('c', false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Opgave 2 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='d'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_1} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 2 */
  {
    const _tr_1_0 = document.createElement('tr');
    _tr_1_0.dataset.figuur = 'afbeelding2';
    const _td_1_0 = maakSlTdZonderInsprong('e', false);
    _td_1_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_1_0.querySelector('.sl').style.flex = 'none';
    _td_1_0.classList.add('kolom-links');
    _tr_1_0.appendChild(_td_1_0); tbody_1.appendChild(_tr_1_0);
  }

  /* Schrijflijn 2 van 2 */
  {
    const _tr_1_1 = document.createElement('tr');
    _tr_1_1.dataset.figuur = 'afbeelding2';
    const _td_1_1 = maakSlTdZonderInsprong('e', false);
    _td_1_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_1_1.querySelector('.sl').style.flex = 'none';
    _td_1_1.classList.add('kolom-links');
    _tr_1_1.appendChild(_td_1_1); tbody_1.appendChild(_tr_1_1);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     Positie en hoogte worden na render berekend via requestAnimationFrame.
     De containers zoeken hun rijen op via het data-figuur attribuut.
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', 'calc(40%)');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      inhoud.appendChild(_fig);
    });
  }

  /* afbeelding2 */
  {
    const _fig = maakFiguurContainer('afbeelding2', 'calc(40%)');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding2"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      inhoud.appendChild(_fig);
    });
  }

})();
