/* ============================================================
   H12 / P12_1 / oe_121012.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_121012_2 = document.createElement('span');
  oe_121012_2.appendChild(htmlSpan('Onderzoek welk parkeerterrein het grootst is.'));

  const oe_121012_1 = document.createElement('span');
  const oe_121012_1_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121012_1.appendChild(oe_121012_1_b1);
  const oe_121012_1_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_121012_1.appendChild(oe_121012_1_b2);
  oe_121012_1.appendChild(htmlSpan('De grootte van het parkeerterrein is de'));

  const oe_121012_3 = document.createElement('span');
  const oe_121012_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_121012_3.appendChild(oe_121012_3_b1);
  oe_121012_3.appendChild(htmlSpan('oppervlakte ervan.'));

  const oe_121012_4 = document.createElement('span');
  const oe_121012_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_121012_4.appendChild(oe_121012_4_b1);
  oe_121012_4.appendChild(htmlSpan('Je moet dus de <b>oppervlakte</b> van een'));

  const oe_121012_5 = document.createElement('span');
  const oe_121012_5_b1 = maakSpanBreedte('1.4cm', '');
  oe_121012_5.appendChild(oe_121012_5_b1);
  oe_121012_5.appendChild(htmlSpan('<b>vierkant</b> en een <b>rechthoek</b> berekenen.'));

  const oe_121012_6 = document.createElement('span');
  const oe_121012_6_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121012_6.appendChild(oe_121012_6_b1);
  const oe_121012_6_b2 = maakSpanBreedte('3cm', 'Berekening in m²:');
  oe_121012_6.appendChild(oe_121012_6_b2);
  oe_121012_6.appendChild(htmlSpan('- vierkant: 100<sup>2</sup> = 10 000'));

  const oe_121012_7 = document.createElement('span');
  const oe_121012_7_b1 = maakSpanBreedte('3.4cm', '');
  oe_121012_7.appendChild(oe_121012_7_b1);
  oe_121012_7.appendChild(htmlSpan('- rechthoek: 150 · 50 = 7 500'));

  const oe_121012_8 = document.createElement('span');
  const oe_121012_8_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121012_8.appendChild(oe_121012_8_b1);
  oe_121012_8.appendChild(htmlSpan('Antwoord: Parkeerterrein 1 is het grootst.'));

  const oe_121012_9 = document.createElement('span');
  oe_121012_9.appendChild(htmlSpan('Onderzoek bij welk parkeerterrein de totale omheining het langst is.'));

  const oe_121012_11 = document.createElement('span');
  const oe_121012_11_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121012_11.appendChild(oe_121012_11_b1);
  const oe_121012_11_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_121012_11.appendChild(oe_121012_11_b2);
  oe_121012_11.appendChild(htmlSpan('De omheining is rond het terrein, je moet dus'));

  const oe_121012_12 = document.createElement('span');
  const oe_121012_12_b1 = maakSpanBreedte('1.4cm', '');
  oe_121012_12.appendChild(oe_121012_12_b1);
  oe_121012_12.appendChild(htmlSpan('de <b>omtrek</b> van een <b>vierkant</b> en'));

  const oe_121012_13 = document.createElement('span');
  const oe_121012_13_b1 = maakSpanBreedte('1.4cm', '');
  oe_121012_13.appendChild(oe_121012_13_b1);
  oe_121012_13.appendChild(htmlSpan('een <b>rechthoek</b> berekenen.'));

  const oe_121012_14 = document.createElement('span');
  const oe_121012_14_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121012_14.appendChild(oe_121012_14_b1);
  const oe_121012_14_b2 = maakSpanBreedte('3cm', 'Berekening in m:');
  oe_121012_14.appendChild(oe_121012_14_b2);
  oe_121012_14.appendChild(htmlSpan('- vierkant: 4 · 100 = 400'));

  const oe_121012_15 = document.createElement('span');
  const oe_121012_15_b1 = maakSpanBreedte('3.4cm', '');
  oe_121012_15.appendChild(oe_121012_15_b1);
  oe_121012_15.appendChild(htmlSpan('- rechthoek: 2 · (150 + 50) = 400'));

  const oe_121012_16 = document.createElement('span');
  const oe_121012_16_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121012_16.appendChild(oe_121012_16_b1);
  oe_121012_16.appendChild(htmlSpan('Antwoord: voor beide terreinen is de omheining even lang.'));

  const inhoud = maakOefening({
    id:'oe_121012', nummer:'?', soort:'inoefenen',
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
    { const _v='Parkeerterrein 1 is 100 m op 100 m. Parkeerterrein 2 is 50 m op 150 m.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_121012_2, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_121012_1, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_121012_3, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd(oe_121012_4, false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_121012_5, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Schrijflijn 5 van a */
  {
    const _tr_a_4 = document.createElement('tr');
    _tr_a_4.dataset.figuur = 'afbeelding1';
    const _td_a_4 = maakSlTd(oe_121012_6, false);
    _td_a_4.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_4.querySelector('.sl').style.flex = 'none';
    _td_a_4.classList.add('kolom-links');
    _tr_a_4.appendChild(_td_a_4); tbody.appendChild(_tr_a_4);
  }

  /* Schrijflijn 6 van a */
  {
    const _tr_a_5 = document.createElement('tr');
    _tr_a_5.dataset.figuur = 'afbeelding1';
    const _td_a_5 = maakSlTd(oe_121012_7, false);
    _td_a_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_5.querySelector('.sl').style.flex = 'none';
    _td_a_5.classList.add('kolom-links');
    _tr_a_5.appendChild(_td_a_5); tbody.appendChild(_tr_a_5);
  }

  /* Schrijflijn 7 van a */
  {
    const _tr_a_6 = document.createElement('tr');
    _tr_a_6.dataset.figuur = 'afbeelding1';
    const _td_a_6 = maakSlTd(oe_121012_8, false);
    _td_a_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_6.querySelector('.sl').style.flex = 'none';
    _td_a_6.classList.add('kolom-links');
    _tr_a_6.appendChild(_td_a_6); tbody.appendChild(_tr_a_6);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_121012_9, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding2';
    const _td_b_0 = maakSlTd(oe_121012_11, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    _tr_b_1.dataset.figuur = 'afbeelding2';
    const _td_b_1 = maakSlTd(oe_121012_12, false);
    _td_b_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_1.querySelector('.sl').style.flex = 'none';
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    _tr_b_2.dataset.figuur = 'afbeelding2';
    const _td_b_2 = maakSlTd(oe_121012_13, false);
    _td_b_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_2.querySelector('.sl').style.flex = 'none';
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    _tr_b_3.dataset.figuur = 'afbeelding2';
    const _td_b_3 = maakSlTd(oe_121012_14, false);
    _td_b_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_3.querySelector('.sl').style.flex = 'none';
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* Schrijflijn 5 van b */
  {
    const _tr_b_4 = document.createElement('tr');
    _tr_b_4.dataset.figuur = 'afbeelding2';
    const _td_b_4 = maakSlTd(oe_121012_15, false);
    _td_b_4.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_4.querySelector('.sl').style.flex = 'none';
    _td_b_4.classList.add('kolom-links');
    _tr_b_4.appendChild(_td_b_4); tbody.appendChild(_tr_b_4);
  }

  /* Schrijflijn 6 van b */
  {
    const _tr_b_5 = document.createElement('tr');
    _tr_b_5.dataset.figuur = 'afbeelding2';
    const _td_b_5 = maakSlTd(oe_121012_16, false);
    _td_b_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_5.querySelector('.sl').style.flex = 'none';
    _td_b_5.classList.add('kolom-links');
    _tr_b_5.appendChild(_td_b_5); tbody.appendChild(_tr_b_5);
  }

  /* Schrijflijn 7 van b */
  {
    const _tr_b_6 = document.createElement('tr');
    _tr_b_6.dataset.figuur = 'afbeelding2';
    const _td_b_6 = maakSlTd(null, false);
    _td_b_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_6.querySelector('.sl').style.flex = 'none';
    _td_b_6.classList.add('kolom-links');
    _tr_b_6.appendChild(_td_b_6); tbody.appendChild(_tr_b_6);
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
      fetch('afbeeldingen/oe_121012.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '70%'; /* ← breedte aanpassen indien nodig */
          svg.style.height = 'auto';
          const oplLagen = ['layer2','layer3']; /* ← oplossingenlagen */
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
              if (!TOGGLE_TOEGESTAAN) return;
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
      fetch('afbeeldingen/oe_121012b.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '70%'; /* ← breedte aanpassen indien nodig */
          svg.style.height = 'auto';
          const oplLagen = ['layer2','layer3']; /* ← oplossingenlagen */
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
              if (!TOGGLE_TOEGESTAAN) return;
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
