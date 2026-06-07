/* ============================================================
   H12 / P12_1 / oe_121501.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_121501_1 = document.createElement('span');
  oe_121501_1.appendChild(htmlSpan('Bereken hoeveel meter ledstrip hiervoor nodig is.'));

  const oe_121501_3 = document.createElement('span');
  const oe_121501_3_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121501_3.appendChild(oe_121501_3_b1);
  const oe_121501_3_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_121501_3.appendChild(oe_121501_3_b2);
  oe_121501_3.appendChild(htmlSpan('De ledstrip is aan de rand van het bord,'));

  const oe_121501_4 = document.createElement('span');
  const oe_121501_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_121501_4.appendChild(oe_121501_4_b1);
  oe_121501_4.appendChild(htmlSpan('dus we berekenen de <b>omtrek</b> van de <b>rechthoek</b>.'));

  const oe_121501_5 = document.createElement('span');
  const oe_121501_5_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121501_5.appendChild(oe_121501_5_b1);
  oe_121501_5.appendChild(htmlSpan('berekening in m: 2 · (0,45 + 0,25) = 1,4'));

  const oe_121501_6 = document.createElement('span');
  const oe_121501_6_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121501_6.appendChild(oe_121501_6_b1);
  oe_121501_6.appendChild(htmlSpan('Antwoord: Er is 1,4 m ledstrip nodig.'));

  const inhoud = maakOefening({
    id:'oe_121501', nummer:'?', soort:'voorbeeld',
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
    { const _v='Bij de ingang van de school hangt een rechthoekig bord van 45 cm op 25 cm. Om wat meer de aandacht te vestigen op dit bord, komt om de rand een ledstrip.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_121501_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_121501_3, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_121501_4, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_121501_5, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_121501_6, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
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
      fetch('afbeeldingen/oe_121501.svg') /* ← bestandsnaam */
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
