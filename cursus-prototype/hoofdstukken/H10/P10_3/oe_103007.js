/* ============================================================
   H10 / P10_3 / oe_103007.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = false;

  const inhoud = maakOefening({
    id:'oe_103007', nummer:'?', soort:'voorbeeld',
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
    { const _v='Noteer een formule voor de omtrek <i>P</i> van de veelhoek.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  /* Opgave 1 */
  {
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '80%';
    { const _v=''; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  const spacer0 = document.createElement('tr');
  const tdSpacer0 = document.createElement('td');
  tdSpacer0.style.height = '0.2cm';
  spacer0.appendChild(tdSpacer0);
  tbody_0.appendChild(spacer0);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const h4 = document.createElement('span');
    h4.appendChild((maakSpanBreedte('0.65cm','<i>P</i>')));
    h4.appendChild(htmlSpan('= '));
    h4.appendChild(maakOnderstreping('5<i>a</i>','enkel','0.1cm'));
    h4.appendChild(htmlSpan(' '));
    h4.appendChild(maakOnderstreping('+ 7<i>a</i>','enkel','0.1cm'));
    h4.appendChild(htmlSpan(' '));
    h4.appendChild(maakOnderstreping('- 2','dubbel','0.18cm'));
    h4.appendChild(htmlSpan(' '));
    h4.appendChild(maakOnderstreping('+ 3<i>a</i>','enkel','0.1cm'));
    h4.appendChild(htmlSpan(' '));
    h4.appendChild(maakOnderstreping('+ 1','dubbel','0.18cm'));
    const _td_0_0 = maakSlTdZonderInsprong(h4, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(80% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  const spacer = document.createElement('tr');
  const tdSpacer = document.createElement('td');
  tdSpacer.style.height = '0.0cm';
  spacer.appendChild(tdSpacer);
  tbody_0.appendChild(spacer);

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const h5 = document.createElement('span');
    h5.appendChild((maakSpanBreedte('0.65cm','')));
    h5.appendChild(htmlSpan('= 15<i>a</i>\u200A - 1'));
    const _td_0_1 = maakSlTdZonderInsprong(h5, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(80% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
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
      _img.src = 'afbeeldingen/oe_103007.svg';
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);  
      inhoud.appendChild(_fig);
    });
  }

})();
