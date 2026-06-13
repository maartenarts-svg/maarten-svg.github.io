/* ============================================================
   H12 / P12_2 / oe_122007.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */

  const oe_122007_2 = document.createElement('span');
  const oe_122007_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122007_2.appendChild(oe_122007_2_b1);
  const oe_122007_2_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_122007_2.appendChild(oe_122007_2_b2);
  oe_122007_2.appendChild(htmlSpan('De oppervlakte van het gebied tussen de twee cirkels'));

  const oe_122007_3 = document.createElement('span');
  const oe_122007_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_122007_3.appendChild(oe_122007_3_b1);
  oe_122007_3.appendChild(htmlSpan('is de oppervlakte van de grote cirkel min de '));

  const oe_122007_4 = document.createElement('span');
  const oe_122007_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_122007_4.appendChild(oe_122007_4_b1);
  oe_122007_4.appendChild(htmlSpan('oppervlakte van de kleine cirkel.'));

  const oe_122007_5 = document.createElement('span');
  const oe_122007_5_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122007_5.appendChild(oe_122007_5_b1);
  const oe_122007_5_b2 = maakSpanBreedte('3.4cm', 'Berekening in cm<sup>2</sup>:');
  oe_122007_5.appendChild(oe_122007_5_b2);
  const oe_122007_5_b3 = maakSpanBreedte('2.5cm', '- grote cirkel:');
  oe_122007_5.appendChild(oe_122007_5_b3);
  oe_122007_5.appendChild(htmlSpan('π · 2<sup>2</sup> = 4π'));

  const oe_122007_6 = document.createElement('span');
  const oe_122007_6_b1 = maakSpanBreedte('3.8cm', '');
  oe_122007_6.appendChild(oe_122007_6_b1);
  const oe_122007_6_b2 = maakSpanBreedte('2.5cm', '- kleine cirkel:');
  oe_122007_6.appendChild(oe_122007_6_b2);
  oe_122007_6.appendChild(htmlSpan('π · 1<sup>2</sup> = π'));

  const oe_122007_8 = document.createElement('span');
  const oe_122007_8_b1 = maakSpanBreedte('3.8cm', '');
  oe_122007_8.appendChild(oe_122007_8_b1);
  oe_122007_8.appendChild(htmlSpan('4π - π = 3π ≈ 9,42'));

  const oe_122007_9 = document.createElement('span');
  const oe_122007_9_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122007_9.appendChild(oe_122007_9_b1);
  oe_122007_9.appendChild(htmlSpan('De oppervlakte van het gebied is 9,42 cm<sup>2</sup>.'));

  const inhoud = maakOefening({
    id:'oe_122007', nummer:'?', soort:'inoefenen',
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
    { const _v='Twee cirkels, met stralen van 1 cm en 2 cm, hebben hetzelfde middelpunt.<br>Bereken de oppervlakte van het gebied tussen de twee cirkels.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_122007_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_122007_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_122007_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }




  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    _tr_0_5.dataset.figuur = 'afbeelding1';
    const _td_0_5 = maakSlTdZonderInsprong(oe_122007_5, false);
    _td_0_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_5.querySelector('.sl').style.flex = 'none';
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    _tr_0_6.dataset.figuur = 'afbeelding1';
    const _td_0_6 = maakSlTdZonderInsprong(oe_122007_6, false);
    _td_0_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_6.querySelector('.sl').style.flex = 'none';
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_122007_8, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    _tr_0_7.dataset.figuur = 'afbeelding1';
    const _td_0_7 = maakSlTdZonderInsprong(oe_122007_9, false);
    _td_0_7.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_7.querySelector('.sl').style.flex = 'none';
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  {
    const _tr_0_7 = document.createElement('tr');
    _tr_0_7.dataset.figuur = 'afbeelding1';
    const _td_0_7 = maakSlTdZonderInsprong(htmlSpan(''), false);
    _td_0_7.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_7.querySelector('.sl').style.flex = 'none';
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  {
    const _tr_0_7 = document.createElement('tr');
    _tr_0_7.dataset.figuur = 'afbeelding1';
    const _td_0_7 = maakSlTdZonderInsprong(htmlSpan(''), false);
    _td_0_7.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_7.querySelector('.sl').style.flex = 'none';
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
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
      fetch('afbeeldingen/oe_122007.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '80%'; /* ← breedte aanpassen indien nodig */
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
