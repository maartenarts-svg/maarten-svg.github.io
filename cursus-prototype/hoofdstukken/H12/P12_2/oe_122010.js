/* ============================================================
   H12 / P12_2 / oe_122010.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_122010_1 = document.createElement('span');
  oe_122010_1.appendChild(htmlSpan(' '));

  const oe_122010_3 = document.createElement('span');
  const oe_122010_3_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122010_3.appendChild(oe_122010_3_b1);
  const oe_122010_3_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_122010_3.appendChild(oe_122010_3_b2);
  oe_122010_3.appendChild(htmlSpan('De gekleurde oppervlakte is de oppervlakte'));

  const oe_122010_4 = document.createElement('span');
  const oe_122010_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_122010_4.appendChild(oe_122010_4_b1);
  oe_122010_4.appendChild(htmlSpan('van een kwart van een cirkel min de'));

  const oe_122010_5 = document.createElement('span');
  const oe_122010_5_b1 = maakSpanBreedte('1.4cm', '');
  oe_122010_5.appendChild(oe_122010_5_b1);
  oe_122010_5.appendChild(htmlSpan('oppervlakte van een driehoek.'));

  const oe_122010_6 = document.createElement('span');
  const oe_122010_6_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122010_6.appendChild(oe_122010_6_b1);
  const oe_122010_6_b2 = maakSpanBreedte('3.4cm', 'Berekening in cm<sup>2</sup>:');
  oe_122010_6.appendChild(oe_122010_6_b2); 
  const oe_122010_6_b3 = maakSpanBreedte('2.6cm', '- kwart cirkel:');
  oe_122010_6.appendChild(oe_122010_6_b3);
  oe_122010_6.appendChild(htmlSpan('π · 2<sup>2</sup> : 4 = π'));

  const oe_122010_7 = document.createElement('span');
  const oe_122010_7_b1 = maakSpanBreedte('3.8cm', '');
  oe_122010_7.appendChild(oe_122010_7_b1);
  const oe_122010_7_b2 = maakSpanBreedte('2.6cm', '- driehoek:');
  oe_122010_7.appendChild(oe_122010_7_b2);
  oe_122010_7.appendChild(htmlSpan('2 · 2 : 2 = 2'));

  const oe_122010_8 = document.createElement('span');
  const oe_122010_8_b1 = maakSpanBreedte('3.8cm', '');
  oe_122010_8.appendChild(oe_122010_8_b1);
  oe_122010_8.appendChild(htmlSpan('π - 2 ≈ 1,14'));

  const oe_122010_9 = document.createElement('span');
  const oe_122010_9_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122010_9.appendChild(oe_122010_9_b1);
  oe_122010_9.appendChild(htmlSpan('Antwoord: De oppervlakte is 1,14 cm<sup>2</sup>.'));

  const oe_122010_10 = document.createElement('span');
  const oe_122010_10_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122010_10.appendChild(oe_122010_10_b1);
  const oe_122010_10_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_122010_10.appendChild(oe_122010_10_b2);
  oe_122010_10.appendChild(htmlSpan('De gekleurde oppervlakte is de oppervlakte'));

  const oe_122010_11 = document.createElement('span');
  const oe_122010_11_b1 = maakSpanBreedte('1.4cm', '');
  oe_122010_11.appendChild(oe_122010_11_b1);
  oe_122010_11.appendChild(htmlSpan('van de grote cirkel min de oppervlakte'));

  const oe_122010_12 = document.createElement('span');
  const oe_122010_12_b1 = maakSpanBreedte('1.4cm', '');
  oe_122010_12.appendChild(oe_122010_12_b1);
  oe_122010_12.appendChild(htmlSpan('van de 2 kleinere cirkels.'));

  const oe_122010_13 = document.createElement('span');
  const oe_122010_13_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122010_13.appendChild(oe_122010_13_b1);
  const oe_122010_13_b2 = maakSpanBreedte('3.4cm', 'Berekening in cm<sup>2</sup>:');
  oe_122010_13.appendChild(oe_122010_13_b2);
  const oe_122010_13_b3 = maakSpanBreedte('2.8cm', '- grote cirkel:');
  oe_122010_13.appendChild(oe_122010_13_b3);
  oe_122010_13.appendChild(htmlSpan('π · 3<sup>2</sup> = 9π'));

  const oe_122010_14 = document.createElement('span');
  const oe_122010_14_b1 = maakSpanBreedte('3.8cm', '');
  oe_122010_14.appendChild(oe_122010_14_b1);
  const oe_122010_14_b2 = maakSpanBreedte('2.8cm', '- kleine cirkel 1:');
  oe_122010_14.appendChild(oe_122010_14_b2);
  oe_122010_14.appendChild(htmlSpan('π · 2<sup>2</sup> = 4π'));

  const oe_122010_15 = document.createElement('span');
  const oe_122010_15_b1 = maakSpanBreedte('3.8cm', '');
  oe_122010_15.appendChild(oe_122010_15_b1);
  const oe_122010_15_b2 = maakSpanBreedte('2.8cm', '- kleine cirkel 2:');
  oe_122010_15.appendChild(oe_122010_15_b2);
  oe_122010_15.appendChild(htmlSpan('π · 1<sup>2</sup> = π'));

  const oe_122010_16 = document.createElement('span');
  const oe_122010_16_b1 = maakSpanBreedte('3.8cm', '');
  oe_122010_16.appendChild(oe_122010_16_b1);
  oe_122010_16.appendChild(htmlSpan('9π - 4π - π = 4π ≈ 12,57'));

  const oe_122010_17 = document.createElement('span');
  const oe_122010_17_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122010_17.appendChild(oe_122010_17_b1);
  oe_122010_17.appendChild(htmlSpan('Antwoord: De oppervlakte is 12,57 cm².'));

  const inhoud = maakOefening({
    id:'oe_122010', nummer:'?', soort:'inoefenen',
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
    { const _v='Bereken de gekleurde oppervlakte.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_122010_1, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_122010_3, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_122010_4, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd(oe_122010_5, false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_122010_6, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Schrijflijn 5 van a */
  {
    const _tr_a_4 = document.createElement('tr');
    _tr_a_4.dataset.figuur = 'afbeelding1';
    const _td_a_4 = maakSlTd(oe_122010_7, false);
    _td_a_4.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_4.querySelector('.sl').style.flex = 'none';
    _td_a_4.classList.add('kolom-links');
    _tr_a_4.appendChild(_td_a_4); tbody.appendChild(_tr_a_4);
  }

  /* Schrijflijn 6 van a */
  {
    const _tr_a_5 = document.createElement('tr');
    _tr_a_5.dataset.figuur = 'afbeelding1';
    const _td_a_5 = maakSlTd(oe_122010_8, false);
    _td_a_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_5.querySelector('.sl').style.flex = 'none';
    _td_a_5.classList.add('kolom-links');
    _tr_a_5.appendChild(_td_a_5); tbody.appendChild(_tr_a_5);
  }

  /* Schrijflijn 7 van a */
  {
    const _tr_a_6 = document.createElement('tr');
    _tr_a_6.dataset.figuur = 'afbeelding1';
    const _td_a_6 = maakSlTd(oe_122010_9, false);
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
    const _tdLbl = maakOpTdaz('b', null, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding2';
    const _td_b_0 = maakSlTd(oe_122010_10, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    _tr_b_1.dataset.figuur = 'afbeelding2';
    const _td_b_1 = maakSlTd(oe_122010_11, false);
    _td_b_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_1.querySelector('.sl').style.flex = 'none';
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    _tr_b_2.dataset.figuur = 'afbeelding2';
    const _td_b_2 = maakSlTd(oe_122010_12, false);
    _td_b_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_2.querySelector('.sl').style.flex = 'none';
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    _tr_b_3.dataset.figuur = 'afbeelding2';
    const _td_b_3 = maakSlTd(oe_122010_13, false);
    _td_b_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_3.querySelector('.sl').style.flex = 'none';
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* Schrijflijn 5 van b */
  {
    const _tr_b_4 = document.createElement('tr');
    _tr_b_4.dataset.figuur = 'afbeelding2';
    const _td_b_4 = maakSlTd(oe_122010_14, false);
    _td_b_4.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_4.querySelector('.sl').style.flex = 'none';
    _td_b_4.classList.add('kolom-links');
    _tr_b_4.appendChild(_td_b_4); tbody.appendChild(_tr_b_4);
  }

  /* Schrijflijn 6 van b */
  {
    const _tr_b_5 = document.createElement('tr');
    _tr_b_5.dataset.figuur = 'afbeelding2';
    const _td_b_5 = maakSlTd(oe_122010_15, false);
    _td_b_5.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_5.querySelector('.sl').style.flex = 'none';
    _td_b_5.classList.add('kolom-links');
    _tr_b_5.appendChild(_td_b_5); tbody.appendChild(_tr_b_5);
  }

  /* Schrijflijn 7 van b */
  {
    const _tr_b_6 = document.createElement('tr');
    _tr_b_6.dataset.figuur = 'afbeelding2';
    const _td_b_6 = maakSlTd(oe_122010_16, false);
    _td_b_6.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_6.querySelector('.sl').style.flex = 'none';
    _td_b_6.classList.add('kolom-links');
    _tr_b_6.appendChild(_td_b_6); tbody.appendChild(_tr_b_6);
  }

  /* Schrijflijn 8 van b */
  {
    const _tr_b_7 = document.createElement('tr');
    _tr_b_7.dataset.figuur = 'afbeelding2';
    const _td_b_7 = maakSlTd(oe_122010_17, false);
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
      _img.src = 'afbeeldingen/oe_122010a.svg'; /* ← bestandsnaam */
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
    const _fig = maakFiguurContainer('afbeelding2', '40%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding2"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING2 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING2) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_122010b.svg') /* ← bestandsnaam */
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
