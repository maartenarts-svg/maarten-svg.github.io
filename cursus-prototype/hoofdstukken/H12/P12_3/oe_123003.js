/* ============================================================
   H12 / P12_3 / oe_123003.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_123003_1 = document.createElement('span');
  oe_123003_1.appendChild(htmlSpan('Bereken de oppervlakte van de rechthoek.'));

  const oe_123003_2 = document.createElement('span');
  const oe_123003_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123003_2.appendChild(oe_123003_2_b1);
  const oe_123003_2_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_123003_2.appendChild(oe_123003_2_b2);
  oe_123003_2.appendChild(htmlSpan('Voor de oppervlakte, heb je de hoogte <i>h</i> nodig. Die '));

  const oe_123003_3 = document.createElement('span');
  const oe_123003_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_123003_3.appendChild(oe_123003_3_b1);
  oe_123003_3.appendChild(htmlSpan('kun je met een vergelijking berekenen: start met de '));

  const oe_123003_4 = document.createElement('span');
  const oe_123003_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_123003_4.appendChild(oe_123003_4_b1);
  oe_123003_4.appendChild(htmlSpan('omtrekformule en vul alle gekende afstanden in.'));

  const oe_123003_5 = document.createElement('span');
  const oe_123003_5_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123003_5.appendChild(oe_123003_5_b1);
  oe_123003_5.appendChild(maakSpanBreedte('3.4cm','Berekening in mm:'));
  oe_123003_5.appendChild(htmlSpan('<i>P</i> = 2(<i>b</i> + <i>h</i>)'));

  const oe_123003_7 = document.createElement('span');
  const oe_123003_7_b1 = maakSpanBreedte('3.8cm', '');
  oe_123003_7.appendChild(oe_123003_7_b1);
  oe_123003_7.appendChild(htmlSpan('170 = 2 · (54 + <i>h</i>)'));

  const oe_123003_8 = document.createElement('span');
  const oe_123003_8_b1 = maakSpanBreedte('3.8cm', '');
  oe_123003_8.appendChild(oe_123003_8_b1);
  oe_123003_8.appendChild(htmlSpan('170 = 108 + 2<i>h</i>'));

  const oe_123003_9 = document.createElement('span');
  const oe_123003_9_b1 = maakSpanBreedte('3.8cm', '');
  oe_123003_9.appendChild(oe_123003_9_b1);
  oe_123003_9.appendChild(htmlSpan('170 - 108 = 2<i>h</i>'));

  const oe_123003_10 = document.createElement('span');
  const oe_123003_10_b1 = maakSpanBreedte('3.8cm', '');
  oe_123003_10.appendChild(oe_123003_10_b1);
  oe_123003_10.appendChild(htmlSpan('62 = 2<i>h</i>'));

  const oe_123003_12 = document.createElement('span');
  const oe_123003_12_b1 = maakSpanBreedte('3.8cm', '');
  oe_123003_12.appendChild(oe_123003_12_b1);
  oe_123003_12.appendChild(htmlSpan('31 = <i>h</i>'));

  const oe_123003_13 = document.createElement('span');
  const oe_123003_13_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123003_13.appendChild(oe_123003_13_b1);
  oe_123003_13.appendChild(htmlSpan('Berekening in mm<sup>2</sup>: '));
  oe_123003_13.appendChild(htmlSpan('<i>A</i> = 54 · 31 = 1 674'));

  const oe_123003_14 = document.createElement('span');
  const oe_123003_14_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123003_14.appendChild(oe_123003_14_b1);
  oe_123003_14.appendChild(htmlSpan('Antwoord: De oppervlakte is 1 674 mm<sup>2</sup>.'));

  const inhoud = maakOefening({
    id:'oe_123003', nummer:'?', soort:'inoefenen',
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
    { const _v='Een rechthoek heeft een basis van 54 mm en een omtrek van 17 cm.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_123003_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_123003_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_123003_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_123003_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_123003_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    _tr_0_5.dataset.figuur = 'afbeelding1';
    const _td_0_5 = maakSlTdZonderInsprong(oe_123003_7, false);
    _td_0_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_5.querySelector('.sl').style.flex = 'none';
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    _tr_0_6.dataset.figuur = 'afbeelding1';
    const _td_0_6 = maakSlTdZonderInsprong(oe_123003_8, false);
    _td_0_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_6.querySelector('.sl').style.flex = 'none';
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    _tr_0_7.dataset.figuur = 'afbeelding1';
    const _td_0_7 = maakSlTdZonderInsprong(oe_123003_9, false);
    _td_0_7.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_7.querySelector('.sl').style.flex = 'none';
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  /* Schrijflijn 9 van 1 */
  {
    const _tr_0_8 = document.createElement('tr');
    _tr_0_8.dataset.figuur = 'afbeelding1';
    const _td_0_8 = maakSlTdZonderInsprong(oe_123003_10, false);
    _td_0_8.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_8.querySelector('.sl').style.flex = 'none';
    _td_0_8.classList.add('kolom-links');
    _tr_0_8.appendChild(_td_0_8); tbody_0.appendChild(_tr_0_8);
  }

  /* Schrijflijn 11 van 1 */
  {
    const _tr_0_10 = document.createElement('tr');
    _tr_0_10.dataset.figuur = 'afbeelding1';
    const _td_0_10 = maakSlTdZonderInsprong(oe_123003_12, false);
    _td_0_10.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_10.querySelector('.sl').style.flex = 'none';
    _td_0_10.classList.add('kolom-links');
    _tr_0_10.appendChild(_td_0_10); tbody_0.appendChild(_tr_0_10);
  }

  /* Schrijflijn 12 van 1 */
  {
    const _tr_0_11 = document.createElement('tr');
    _tr_0_11.dataset.figuur = 'afbeelding1';
    const _td_0_11 = maakSlTdZonderInsprong(oe_123003_13, false);
    _td_0_11.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_11.querySelector('.sl').style.flex = 'none';
    _td_0_11.classList.add('kolom-links');
    _tr_0_11.appendChild(_td_0_11); tbody_0.appendChild(_tr_0_11);
  }

  /* Schrijflijn 13 van 1 */
  {
    const _tr_0_12 = document.createElement('tr');
    _tr_0_12.dataset.figuur = 'afbeelding1';
    const _td_0_12 = maakSlTdZonderInsprong(oe_123003_14, false);
    _td_0_12.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_12.querySelector('.sl').style.flex = 'none';
    _td_0_12.classList.add('kolom-links');
    _tr_0_12.appendChild(_td_0_12); tbody_0.appendChild(_tr_0_12);
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
      fetch('afbeeldingen/oe_123003.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '80%'; /* ← breedte aanpassen indien nodig */
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
