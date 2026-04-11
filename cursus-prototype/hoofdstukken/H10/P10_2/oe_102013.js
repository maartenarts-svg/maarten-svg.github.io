/* ============================================================
   H10 / P10_2 / oe_102013.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = false;

  const inhoud = maakOefening({
    id:'oe_102013', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
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
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '80%';
    { const _v=(function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='De formule voor het volume van een kegel is <i>V</i> = '; s.appendChild(p0);
      s.appendChild(maakBreuk('1','3','opgave'));
      const p2=document.createElement('span'); p2.innerHTML='&#960<i>r </i><sup>2</sup><i>h</i>.<br>Hierbij is <i>V</i> het volume, <i>r</i> de straal van het grondvlak en <i>h</i> de hoogte.'; s.appendChild(p2);
      return s;})(); if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  /* Opgave 1 */
  {
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '80%';
    { const _v='Bereken met ICT het volume op 0,01 cm<sup>3</sup> nauwkeurig.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong((function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakSpanBreedte('0.65cm','<i>V</i>'));
      s.appendChild(htmlSpan('= '));
      s.appendChild(maakBreuk('1','3','oplossing'));
      s.appendChild(htmlSpan(' · &#960 · <span class="markeer-lila">2</span>\u200A<sup>2</sup> · <span class="markeer-lila">6</span>\u200A'));
      return s;})(), true);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(80% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const oe102K0202 = document.createElement('span');
    oe102K0202.appendChild(maakSpanBreedte('0.65cm'));
    oe102K0202.appendChild(htmlSpan('&#8776 25,13'));
    const _td_0_1 = maakSlTdZonderInsprong(oe102K0202, true);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(80% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const oe10201301 = document.createElement('span');
    oe10201301.appendChild(htmlSpan('Het volume is ongeveer 25,13 cm'));
    oe10201301.appendChild(htmlSpan('<sup>3</sup>'));
    oe10201301.appendChild(htmlSpan('.'));

    const _td_0_2 = maakSlTdZonderInsprong(oe10201301, true);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(80% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong('', true);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(80% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     Positie en hoogte worden na render berekend via requestAnimationFrame.
     De containers zoeken hun rijen op via het data-figuur attribuut.
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', 'calc(20%)');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_102013.svg';
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);  
      inhoud.appendChild(_fig);
    });
  }

})();
