/* ============================================================
   H12 / P12_2 / oe_122006.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_122006_1 = document.createElement('span');
  const oe_122006_1_b1 = maakSpanBreedte('0.4cm', '<b>A</b>');
  oe_122006_1.appendChild(oe_122006_1_b1);
  const oe_122006_1_b2 = maakSpanBreedte('1.5cm', '3 cm<sup>2</sup>');
  oe_122006_1.appendChild(oe_122006_1_b2);
  const oe_122006_1_b3 = maakSpanBreedte('0.4cm', '<b>B</b>');
  oe_122006_1.appendChild(oe_122006_1_b3);
  const oe_122006_1_b4 = maakSpanBreedte('1.5cm', '4 cm<sup>2</sup>');
  oe_122006_1.appendChild(oe_122006_1_b4);
  const oe_122006_1_b5 = maakSpanBreedte('0.4cm', '<b>C</b>');
  oe_122006_1.appendChild(oe_122006_1_b5);
  const oe_122006_1_b6 = maakSpanBreedte('1.5cm', '4,5 cm<sup>2</sup>');
  oe_122006_1.appendChild(oe_122006_1_b6);
  const oe_122006_1_b7 = maakSpanBreedte('0.4cm', '<b>D</b>');
  oe_122006_1.appendChild(oe_122006_1_b7);
  const oe_122006_1_b8 = maakSpanBreedte('1.5cm', '5 cm<sup>2</sup>');
  oe_122006_1.appendChild(oe_122006_1_b8);
  const oe_122006_1_b9 = maakSpanBreedte('0.4cm', '<b>E</b>');
  oe_122006_1.appendChild(oe_122006_1_b9);
  oe_122006_1.appendChild(htmlSpan('6 cm<sup>2</sup>'));

  const oe_122006_2 = document.createElement('span');
  const oe_122006_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122006_2.appendChild(oe_122006_2_b1);
  const oe_122006_2_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_122006_2.appendChild(oe_122006_2_b2);

  const oe_122006_3 = document.createElement('span');
  const oe_122006_3_b1 = maakSpanBreedte('0.4cm', '');
  oe_122006_3.appendChild(oe_122006_3_b1);
  oe_122006_3.appendChild(htmlSpan('Het vierkant bestaat uit een driehoek van 2 cm<sup>2</sup>,'));

  const oe_122006_4 = document.createElement('span');
  const oe_122006_4_b1 = maakSpanBreedte('0.4cm', '');
  oe_122006_4.appendChild(oe_122006_4_b1);
  oe_122006_4.appendChild(htmlSpan('een vierkant van 1 cm<sup>2</sup> en 2 driehoekjes van 0,5cm<sup>2</sup>.'));

  const oe_122006_5 = document.createElement('span');
  const oe_122006_5_b1 = maakSpanBreedte('0.4cm', '');
  oe_122006_5.appendChild(oe_122006_5_b1);
  oe_122006_5.appendChild(htmlSpan('De vogel bestaat uit 1 driehoek, 2 vierkanten'));

  const oe_122006_5b = document.createElement('span');
  const oe_122006_5b_b1 = maakSpanBreedte('0.4cm', '');
  oe_122006_5b.appendChild(oe_122006_5b_b1);
  oe_122006_5b.appendChild(htmlSpan('en 4 driehoekjes.'));

  const oe_122006_7 = document.createElement('span');
  const oe_122006_7_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122006_7.appendChild(oe_122006_7_b1);
  oe_122006_7.appendChild(htmlSpan('Berekening in cm<sup>2</sup>: 2 + 2 · 1 + 4 · 0,5 = 6'));

  const oe_122006_9 = document.createElement('span');
  const oe_122006_9_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122006_9.appendChild(oe_122006_9_b1);
  oe_122006_9.appendChild(htmlSpan('Het juiste antwoord is <b>E</b>.'));

  const inhoud = maakOefening({
    id:'oe_122006', nummer:'?', soort:'inoefenen',
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
  /* Introductietekst */
  {
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '60%';
    { const _v='Sofie heeft verschillende vierkante papiertjes met oppervlakte 4 cm<sup>2</sup>. Ze knipt elk van die papiertjes in 3 rechthoekige driehoeken en 1 vierkant, zoals in de figuur. Met deze stukken legt ze een vogel. <br>Bereken de oppervlakte van de vogel.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  /* Opgave 1 */
  {
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '60%';
    const _o = oe_122006_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_122006_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_122006_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_122006_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_122006_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

    /* Schrijflijn 5 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_122006_5b, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    const _td_0_5 = maakSlTdZonderInsprong(oe_122006_7, false);
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    const _td_0_7 = maakSlTdZonderInsprong(oe_122006_9, false);
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  {
    const _tr_0_7 = document.createElement('tr');
    const _td_0_7 = maakSlTdZonderInsprong(htmlSpan(''), false);
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  {
    const _tr_0_7 = document.createElement('tr');
    const _td_0_7 = maakSlTdZonderInsprong(htmlSpan(''), false);
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '40%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_122006.svg') /* ← bestandsnaam */
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
