/* ============================================================
   H12 / P12_2 / oe_123002.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_123002_1 = document.createElement('span');
  oe_123002_1.appendChild(maakSpanBreedte('1cm','<b>Tip!</b>'));
  oe_123002_1.appendChild(htmlSpan('De formule voor de oppervlakte van een trapezium is (<i>b</i><sub>1</sub> + <i>b</i><sub>2</sub>) · <i>h</i> : 2.<br>'));
  oe_123002_1.appendChild(maakSpanBreedte('1cm',''));
  oe_123002_1.appendChild(htmlSpan('Hierbij zijn <i>b</i><sub>1</sub> en <i>b</i><sub>2</sub> de lengten van de evenwijdige zijden.'));

  const oe_123002_2 = document.createElement('span');
  const oe_123002_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123002_2.appendChild(oe_123002_2_b1);
  oe_123002_2.appendChild(maakSpanBreedte('1cm',htmlSpan('Plan:')));
  oe_123002_2.appendChild(htmlSpan('Werk met een vergelijking: start met de oppervlakte-'));

  const oe_123002_3 = document.createElement('span');
  const oe_123002_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_123002_3.appendChild(oe_123002_3_b1);
  oe_123002_3.appendChild(htmlSpan('formule en vul alle gekende afstanden in.'));

  const oe_123002_5 = document.createElement('span');
  const oe_123002_5_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123002_5.appendChild(oe_123002_5_b1);
  oe_123002_5.appendChild(maakSpanBreedte('3.4cm','Berekening in cm:'));
  oe_123002_5.appendChild(htmlSpan('<i>A</i> = (<i>b</i><sub>1</sub> + <i>b</i><sub>2</sub>) · <i>h</i> : 2'));

  const oe_123002_7 = document.createElement('span');
  const oe_123002_7_b1 = maakSpanBreedte('3.8cm', '');
  oe_123002_7.appendChild(oe_123002_7_b1);
  oe_123002_7.appendChild(htmlSpan('5,5 = (<i>b</i><sub>1</sub> + 1,8) · 2 : 2'));

  const oe_123002_8 = document.createElement('span');
  oe_123002_8.appendChild(maakSpanBreedte('3.8cm',''));
  oe_123002_8.appendChild(htmlSpan('5,5 = <i>b</i><sub>1</sub> + 1,8'));

  const oe_123002_9 = document.createElement('span');
  const oe_123002_9_b1 = maakSpanBreedte('3.8cm', '');
  oe_123002_9.appendChild(oe_123002_9_b1);
  oe_123002_9.appendChild(htmlSpan('5,5 - 1,8 = <i>b</i><sub>1</sub>'));

  const oe_123002_10 = document.createElement('span');
  const oe_123002_10_b1 = maakSpanBreedte('3.8cm', '');
  oe_123002_10.appendChild(oe_123002_10_b1);
  oe_123002_10.appendChild(htmlSpan('3,7 = <i>b</i><sub>1</sub>'));

  const oe_123002_11 = document.createElement('span');
  const oe_123002_11_b1 = maakSpanBreedte('0.4cm', '•');
  oe_123002_11.appendChild(oe_123002_11_b1);
  oe_123002_11.appendChild(htmlSpan('Antwoord: De andere evenwijdige zijde is 3,7 cm.'));

  const inhoud = maakOefening({
    id:'oe_123002', nummer:'?', soort:'inoefenen',
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
    { const _v='Een trapezium heeft een hoogte van 2 cm en één van de evenwijdige zijden is 1,8 cm lang.<br>Bereken de lengte van de andere evenwijdige zijde als je weet dat de oppervlakte van het trapezium 5,5 cm² is.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_123002_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_123002_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_123002_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_123002_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    _tr_0_5.dataset.figuur = 'afbeelding1';
    const _td_0_5 = maakSlTdZonderInsprong(oe_123002_7, false);
    _td_0_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_5.querySelector('.sl').style.flex = 'none';
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    _tr_0_6.dataset.figuur = 'afbeelding1';
    const _td_0_6 = maakSlTdZonderInsprong(oe_123002_8, false);
    _td_0_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_6.querySelector('.sl').style.flex = 'none';
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    _tr_0_7.dataset.figuur = 'afbeelding1';
    const _td_0_7 = maakSlTdZonderInsprong(oe_123002_9, false);
    _td_0_7.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_7.querySelector('.sl').style.flex = 'none';
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  /* Schrijflijn 9 van 1 */
  {
    const _tr_0_8 = document.createElement('tr');
    _tr_0_8.dataset.figuur = 'afbeelding1';
    const _td_0_8 = maakSlTdZonderInsprong(oe_123002_10, false);
    _td_0_8.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_8.querySelector('.sl').style.flex = 'none';
    _td_0_8.classList.add('kolom-links');
    _tr_0_8.appendChild(_td_0_8); tbody_0.appendChild(_tr_0_8);
  }

  /* Schrijflijn 10 van 1 */
  {
    const _tr_0_9 = document.createElement('tr');
    _tr_0_9.dataset.figuur = 'afbeelding1';
    const _td_0_9 = maakSlTdZonderInsprong(oe_123002_11, false);
    _td_0_9.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_9.querySelector('.sl').style.flex = 'none';
    _td_0_9.classList.add('kolom-links');
    _tr_0_9.appendChild(_td_0_9); tbody_0.appendChild(_tr_0_9);
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
      fetch('afbeeldingen/oe_123002.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '70%'; /* ← breedte aanpassen indien nodig */
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
