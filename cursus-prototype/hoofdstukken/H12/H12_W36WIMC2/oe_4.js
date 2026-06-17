/* ============================================================
   H12 / H12_W36WIMC2 / oe_4.js
   soort: test
   ============================================================ */

(function () {

(function () {

  /* ---- Span-variabelen ---- */
  const oe_36MC2004_1 = document.createElement('span');
  oe_36MC2004_1.appendChild(htmlSpan('Omtrek'));

  const oe_36MC2004_3 = document.createElement('span');
  const oe_36MC2004_3_b1 = maakSpanBreedte('0.4cm', '•');
  oe_36MC2004_3.appendChild(oe_36MC2004_3_b1);
  const oe_36MC2004_3_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_36MC2004_3.appendChild(oe_36MC2004_3_b2);
  oe_36MC2004_3.appendChild(htmlSpan('De omtrek van de figuur bestaat uit een halve'));

  const oe_36MC2004_4 = document.createElement('span');
  const oe_36MC2004_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_36MC2004_4.appendChild(oe_36MC2004_4_b1);
  oe_36MC2004_4.appendChild(htmlSpan('cirkel en twee zijden van een driehoek.'));

  const oe_36MC2004_5 = document.createElement('span');
  const oe_36MC2004_5_b1 = maakSpanBreedte('0.4cm', '•');
  oe_36MC2004_5.appendChild(oe_36MC2004_5_b1);
  const oe_36MC2004_5_b2 = maakSpanBreedte('3.4cm', 'Berekening in cm:');
  oe_36MC2004_5.appendChild(oe_36MC2004_5_b2); 
  const oe_36MC2004_5_b3 = maakSpanBreedte('2.6cm', '- halve cirkel:');
  oe_36MC2004_5.appendChild(oe_36MC2004_5_b3);
  oe_36MC2004_5.appendChild(htmlSpan('(2 · π · 1) : 2 = π'));

  const oe_36MC2004_6 = document.createElement('span');
  const oe_36MC2004_6_b1 = maakSpanBreedte('3.8cm', '');
  oe_36MC2004_6.appendChild(oe_36MC2004_6_b1);
  const oe_36MC2004_6_b2 = maakSpanBreedte('2.6cm', '- 2 zijden:');
  oe_36MC2004_6.appendChild(oe_36MC2004_6_b2);
  oe_36MC2004_6.appendChild(htmlSpan('2,6 + 2,6 = 5,2'));

  const oe_36MC2004_7 = document.createElement('span');
  const oe_36MC2004_7_b1 = maakSpanBreedte('3.8cm', '');
  oe_36MC2004_7.appendChild(oe_36MC2004_7_b1);
  oe_36MC2004_7.appendChild(htmlSpan('π + 5,2 ≈ 8,34'));

  const oe_36MC2004_8 = document.createElement('span');
  const oe_36MC2004_8_b1 = maakSpanBreedte('0.4cm', '•');
  oe_36MC2004_8.appendChild(oe_36MC2004_8_b1);
  oe_36MC2004_8.appendChild(htmlSpan('Antwoord: De omtrek is 8,34 cm.'));

  const oe_36MC2004_9 = document.createElement('span');
  const oe_36MC2004_9_b1 = maakSpanBreedte('0.4cm', '•');
  oe_36MC2004_9.appendChild(oe_36MC2004_9_b1);
  const oe_36MC2004_9_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_36MC2004_9.appendChild(oe_36MC2004_9_b2);
  oe_36MC2004_9.appendChild(htmlSpan('De gekleurde oppervlakte is de oppervlakte'));

  const oe_36MC2004_10 = document.createElement('span');
  const oe_36MC2004_10_b1 = maakSpanBreedte('1.4cm', '');
  oe_36MC2004_10.appendChild(oe_36MC2004_10_b1);
  oe_36MC2004_10.appendChild(htmlSpan('van een halve cirkel plus de oppervlakte'));

  const oe_36MC2004_11 = document.createElement('span');
  const oe_36MC2004_11_b1 = maakSpanBreedte('1.4cm', '');
  oe_36MC2004_11.appendChild(oe_36MC2004_11_b1);
  oe_36MC2004_11.appendChild(htmlSpan('van een driehoek.'));

  const oe_36MC2004_12 = document.createElement('span');
  const oe_36MC2004_12_b1 = maakSpanBreedte('0.4cm', '•');
  oe_36MC2004_12.appendChild(oe_36MC2004_12_b1);
  const oe_36MC2004_12_b2 = maakSpanBreedte('3.4cm', 'Berekening in cm<sup>2</sup>:');
  oe_36MC2004_12.appendChild(oe_36MC2004_12_b2);
  const oe_36MC2004_12_b3 = maakSpanBreedte('2cm', '- cirkel:');
  oe_36MC2004_12.appendChild(oe_36MC2004_12_b3);
  oe_36MC2004_12.appendChild(htmlSpan('(π · 1<sup>2</sup>) : 2 = 0,5π'));

  const oe_36MC2004_13 = document.createElement('span');
  const oe_36MC2004_13_b1 = maakSpanBreedte('3.8cm', '');
  oe_36MC2004_13.appendChild(oe_36MC2004_13_b1);
  const oe_36MC2004_13_b2 = maakSpanBreedte('2cm', '- driehoek:');
  oe_36MC2004_13.appendChild(oe_36MC2004_13_b2);
  oe_36MC2004_13.appendChild(htmlSpan('2 · 3 : 2 = 3'));

  const oe_36MC2004_14 = document.createElement('span');
  const oe_36MC2004_14_b1 = maakSpanBreedte('3.8cm', '');
  oe_36MC2004_14.appendChild(oe_36MC2004_14_b1);
  oe_36MC2004_14.appendChild(htmlSpan('0,5π + 3 ≈ 4,57'));

  const oe_36MC2004_15 = document.createElement('span');
  const oe_36MC2004_15_b1 = maakSpanBreedte('0.4cm', '•');
  oe_36MC2004_15.appendChild(oe_36MC2004_15_b1);
  oe_36MC2004_15.appendChild(htmlSpan('Antwoord: De oppervlakte is 4,57 cm².'));

  const inhoud = maakOefening({
    id:'oe_36MC2004', nummer:'?', soort:'inoefenen',
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
    { const _v='Bereken de omtrek en de oppervlakte van de gekleurde figuur.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_36MC2004_1, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_36MC2004_3, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_36MC2004_4, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd(oe_36MC2004_5, false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_36MC2004_6, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Schrijflijn 5 van a */
  {
    const _tr_a_4 = document.createElement('tr');
    _tr_a_4.dataset.figuur = 'afbeelding1';
    const _td_a_4 = maakSlTd(oe_36MC2004_7, false);
    _td_a_4.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_4.querySelector('.sl').style.flex = 'none';
    _td_a_4.classList.add('kolom-links');
    _tr_a_4.appendChild(_td_a_4); tbody.appendChild(_tr_a_4);
  }

  /* Schrijflijn 6 van a */
  {
    const _tr_a_5 = document.createElement('tr');
    _tr_a_5.dataset.figuur = 'afbeelding1';
    const _td_a_5 = maakSlTd(oe_36MC2004_8, false);
    _td_a_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_5.querySelector('.sl').style.flex = 'none';
    _td_a_5.classList.add('kolom-links');
    _tr_a_5.appendChild(_td_a_5); tbody.appendChild(_tr_a_5);
  }

  /* Schrijflijn 7 van a */
  {
    const _tr_a_6 = document.createElement('tr');
    _tr_a_6.dataset.figuur = 'afbeelding1';
    const _td_a_6 = maakSlTd(htmlSpan(''), false);
    _td_a_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_6.querySelector('.sl').style.flex = 'none';
    _td_a_6.classList.add('kolom-links');
    _tr_a_6.appendChild(_td_a_6); tbody.appendChild(_tr_a_6);
  }

  /* Schrijflijn 8 van a */
  {
    const _tr_a_7 = document.createElement('tr');
    _tr_a_7.dataset.figuur = 'afbeelding1';
    const _td_a_7 = maakSlTd(null, false);
    _td_a_7.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_7.querySelector('.sl').style.flex = 'none';
    _td_a_7.classList.add('kolom-links');
    _tr_a_7.appendChild(_td_a_7); tbody.appendChild(_tr_a_7);
  }

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', htmlSpan('Oppervlakte'), false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding2';
    const _td_b_0 = maakSlTd(oe_36MC2004_9, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    _tr_b_1.dataset.figuur = 'afbeelding2';
    const _td_b_1 = maakSlTd(oe_36MC2004_10, false);
    _td_b_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_1.querySelector('.sl').style.flex = 'none';
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    _tr_b_2.dataset.figuur = 'afbeelding2';
    const _td_b_2 = maakSlTd(oe_36MC2004_11, false);
    _td_b_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_2.querySelector('.sl').style.flex = 'none';
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    _tr_b_3.dataset.figuur = 'afbeelding2';
    const _td_b_3 = maakSlTd(oe_36MC2004_12, false);
    _td_b_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_3.querySelector('.sl').style.flex = 'none';
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* Schrijflijn 5 van b */
  {
    const _tr_b_4 = document.createElement('tr');
    _tr_b_4.dataset.figuur = 'afbeelding2';
    const _td_b_4 = maakSlTd(oe_36MC2004_13, false);
    _td_b_4.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_4.querySelector('.sl').style.flex = 'none';
    _td_b_4.classList.add('kolom-links');
    _tr_b_4.appendChild(_td_b_4); tbody.appendChild(_tr_b_4);
  }

  /* Schrijflijn 6 van b */
  {
    const _tr_b_5 = document.createElement('tr');
    _tr_b_5.dataset.figuur = 'afbeelding2';
    const _td_b_5 = maakSlTd(oe_36MC2004_14, false);
    _td_b_5.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_5.querySelector('.sl').style.flex = 'none';
    _td_b_5.classList.add('kolom-links');
    _tr_b_5.appendChild(_td_b_5); tbody.appendChild(_tr_b_5);
  }

  /* Schrijflijn 7 van b */
  {
    const _tr_b_6 = document.createElement('tr');
    _tr_b_6.dataset.figuur = 'afbeelding2';
    const _td_b_6 = maakSlTd(oe_36MC2004_15, false);
    _td_b_6.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_6.querySelector('.sl').style.flex = 'none';
    _td_b_6.classList.add('kolom-links');
    _tr_b_6.appendChild(_td_b_6); tbody.appendChild(_tr_b_6);
  }

  /* Schrijflijn 8 van b */
  {
    const _tr_b_7 = document.createElement('tr');
    _tr_b_7.dataset.figuur = 'afbeelding2';
    const _td_b_7 = maakSlTd(htmlSpan(''), false);
    _td_b_7.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_7.querySelector('.sl').style.flex = 'none';
    _td_b_7.classList.add('kolom-links');
    _tr_b_7.appendChild(_td_b_7); tbody.appendChild(_tr_b_7);
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
      _img.src = 'afbeeldingen/oe_36MC2004.svg'; /* ← bestandsnaam */
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
    const _fig = maakFiguurContainer('afbeelding2', '30%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding2"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING2 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING2) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_36MC2004.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%'; /* ← breedte aanpassen indien nodig */
          svg.style.height = 'auto';
          const oplLagen = ['layer2']; /* ← oplossingenlagen */
          oplLagen.forEach(id => {
            const laag = svg.getElementById(id);
            if (laag) { laag.style.display = TOON_OPLOSSINGEN ? 'block' : 'none'; laag.classList.add('svg-opl-laag'); }
          });
          _fig.innerHTML = '';
          _fig.appendChild(svg);
          inhoud.appendChild(_fig);
          const badge = inhoud.closest('.oefening')?.querySelector('.badge');
          if (badge) {
            badge.addEventListener('click', () => {
              const zichtbaar = svg.querySelector('.svg-opl-laag')?.style.display !== 'none';
              oplLagen.forEach(id => {
                const laag = svg.getElementById(id);
                if (laag) laag.style.display = zichtbaar ? 'none' : 'block';
              });
            });
          }
        });
    });
  }

})();

})();
