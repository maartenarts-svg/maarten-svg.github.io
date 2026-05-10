/* ============================================================
   H11 / P11_2 / oe_112001.js
   soort: ontdek
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_112001_1 = document.createElement('span');
  oe_112001_1.appendChild(htmlSpan('2<i>x</i> + 3 = 9'));

  const oe_112001_2 = document.createElement('span');
  oe_112001_2.appendChild(htmlSpan('2<i>x</i> + 3 <span class="markeer-lila">- 3</span> = 9 <span class="markeer-lila">- 3</span>'));

  const oe_112001_3 = document.createElement('span');
  oe_112001_3.appendChild(htmlSpan('2<i>x</i> = 6'));

  const oe_112001_4 = document.createElement('span');
  oe_112001_4.appendChild(htmlSpan('2<i>x</i> <span class="markeer-lila">: 2</span> = 6 <span class="markeer-lila">: 2</span>'));

  const oe_112001_5 = document.createElement('span');
  oe_112001_5.appendChild(htmlSpan('<i>x</i> = 3'));

  const oe_112001_6 = document.createElement('span');
  oe_112001_6.appendChild(htmlSpan('5<i>x</i> = 2<i>x</i> + 6'));

  const oe_112001_7 = document.createElement('span');
  oe_112001_7.appendChild(htmlSpan('5<i>x</i> <span class="markeer-lila">- 2<i>x</i></span> = 2<i>x</i> + 6 <span class="markeer-lila">- 2<i>x</i></span>'));

  const oe_112001_8 = document.createElement('span');
  oe_112001_8.appendChild(htmlSpan('3<i>x</i> = 6'));

  const oe_112001_9 = document.createElement('span');
  oe_112001_9.appendChild(htmlSpan('3<i>x</i> <span class="markeer-lila">: 3</span> = 6 <span class="markeer-lila">: 3</span>'));

  const oe_112001_10 = document.createElement('span');
  oe_112001_10.appendChild(htmlSpan('<i>x</i> = 2'));

  const oe_112001_11 = document.createElement('span');
  oe_112001_11.appendChild(htmlSpan('5<i>x</i> + 3 = 3<i>x</i> + 9'));

  const oe_112001_12 = document.createElement('span');
  oe_112001_12.appendChild(htmlSpan('5<i>x</i> + 3 <span class="markeer-lila">- 3 - 3<i>x</i></span> = 3<i>x</i> + 9 <span class="markeer-lila">- 3 - 3<i>x</i></span>'));

  const oe_112001_13 = document.createElement('span');
  oe_112001_13.appendChild(htmlSpan('2<i>x</i> = 6'));

  const oe_112001_14 = document.createElement('span');
  oe_112001_14.appendChild(htmlSpan('2<i>x</i> <span class="markeer-lila">: 2</span> = 6 <span class="markeer-lila">: 2</span>'));

  const oe_112001_15 = document.createElement('span');
  oe_112001_15.appendChild(htmlSpan('<i>x</i> = 3'));

  const inhoud = maakOefening({
    id:'oe_112001', nummer:'?', soort:'ontdek',
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
    { const _v='Bij elke balans hoort een vergelijking.<br>Onderzoek met behulp van de afbeelding en de app <a href="https://maartenarts-svg.github.io/helperapps/vergelijkingenFALSE.html" target="_blank" rel="noopener noreferrer">balans</a> hoeveel stippen overeenkomen met een blokje.<br>Noteer bij elke stap die je zet de nieuwe vergelijking.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_112001_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '50%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_112001_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_112001_3, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd(oe_112001_4, false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_112001_5, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  voegWitruimteToe(tbody,'0.3cm'); 
  
  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding2';
    const _tdLbl = maakOpTdaz('b', oe_112001_6, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '50%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding2';
    const _td_b_0 = maakSlTd(oe_112001_7, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    _tr_b_1.dataset.figuur = 'afbeelding2';
    const _td_b_1 = maakSlTd(oe_112001_8, false);
    _td_b_1.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_b_1.querySelector('.sl').style.flex = 'none';
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    _tr_b_2.dataset.figuur = 'afbeelding2';
    const _td_b_2 = maakSlTd(oe_112001_9, false);
    _td_b_2.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_b_2.querySelector('.sl').style.flex = 'none';
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    _tr_b_3.dataset.figuur = 'afbeelding2';
    const _td_b_3 = maakSlTd(oe_112001_10, false);
    _td_b_3.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_b_3.querySelector('.sl').style.flex = 'none';
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  voegWitruimteToe(tbody,'0.3cm');   

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding3';
    const _tdLbl = maakOpTdaz('c', oe_112001_11, false);
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    _tr_c_0.dataset.figuur = 'afbeelding3';
    const _td_c_0 = maakSlTd(oe_112001_12, false);
    _td_c_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_c_0.querySelector('.sl').style.flex = 'none';
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* Schrijflijn 2 van c */
  {
    const _tr_c_1 = document.createElement('tr');
    _tr_c_1.dataset.figuur = 'afbeelding3';
    const _td_c_1 = maakSlTd(oe_112001_13, false);
    _td_c_1.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_c_1.querySelector('.sl').style.flex = 'none';
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }

  /* Schrijflijn 3 van c */
  {
    const _tr_c_2 = document.createElement('tr');
    _tr_c_2.dataset.figuur = 'afbeelding3';
    const _td_c_2 = maakSlTd(oe_112001_14, false);
    _td_c_2.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_c_2.querySelector('.sl').style.flex = 'none';
    _td_c_2.classList.add('kolom-links');
    _tr_c_2.appendChild(_td_c_2); tbody.appendChild(_tr_c_2);
  }

  /* Schrijflijn 4 van c */
  {
    const _tr_c_3 = document.createElement('tr');
    _tr_c_3.dataset.figuur = 'afbeelding3';
    const _td_c_3 = maakSlTd(oe_112001_15, false);
    _td_c_3.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_c_3.querySelector('.sl').style.flex = 'none';
    _td_c_3.classList.add('kolom-links');
    _tr_c_3.appendChild(_td_c_3); tbody.appendChild(_tr_c_3);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '50%'); /* ← breedte aanpassen indien nodig */
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
      _img.src = 'afbeeldingen/oe_112001a.svg'; /* ← bestandsnaam */
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

  /* afbeelding2 */
  {
    const _fig = maakFiguurContainer('afbeelding2', '50%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding2"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING2 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING2) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_112001b.svg'; /* ← bestandsnaam */
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

  /* afbeelding3 */
  {
    const _fig = maakFiguurContainer('afbeelding3', '50%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding3"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING3 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING3) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_112001c.svg'; /* ← bestandsnaam */
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
