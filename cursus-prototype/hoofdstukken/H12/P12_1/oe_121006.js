/* ============================================================
   H12 / P12_1 / oe_121006.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_121006_1 = document.createElement('span');
  oe_121006_1.appendChild(htmlSpan('Bereken hoeveel tijd Tine nodig heeft om een cirkelvormig grasveld te maaien als de straal 20 m is.'));

  const oe_121006_2 = document.createElement('span');
  const oe_121006_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121006_2.appendChild(oe_121006_2_b1);
  const oe_121006_2_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_121006_2.appendChild(oe_121006_2_b2);
  oe_121006_2.appendChild(htmlSpan('Je moet berekenen hoeveel keer de ene'));

  const oe_121006_3 = document.createElement('span');
  const oe_121006_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_121006_3.appendChild(oe_121006_3_b1);
  oe_121006_3.appendChild(htmlSpan('cirkel groter is dan de andere.'));

  const oe_121006_4 = document.createElement('span');
  const oe_121006_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_121006_4.appendChild(oe_121006_4_b1);
  oe_121006_4.appendChild(htmlSpan('Je moet dus de <b>oppervlakte</b> van'));

  const oe_121006_5 = document.createElement('span');
  const oe_121006_5_b1 = maakSpanBreedte('1.4cm', '');
  oe_121006_5.appendChild(oe_121006_5_b1);
  oe_121006_5.appendChild(htmlSpan('twee <b>cirkels</b> berekenen.'));

  const oe_121006_6 = document.createElement('span');
  const oe_121006_6_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121006_6.appendChild(oe_121006_6_b1);
  const oe_121006_6_b2 = maakSpanBreedte('3.5cm', 'Berekeningen in m<sup>2</sup>:');
  oe_121006_6.appendChild(oe_121006_6_b2);
  const oe_121006_6_b3 = maakSpanBreedte('2.5cm', '- kleine cirkel:');
  oe_121006_6.appendChild(oe_121006_6_b3);
  oe_121006_6.appendChild(htmlSpan('π · 5<sup>2</sup> = 25π'));

  const oe_121006_7 = document.createElement('span');
  const oe_121006_7_b1 = maakSpanBreedte('3.9cm', '');
  oe_121006_7.appendChild(oe_121006_7_b1);
  const oe_121006_7_b2 = maakSpanBreedte('2.5cm', '- grote cirkel:');
  oe_121006_7.appendChild(oe_121006_7_b2);
  oe_121006_7.appendChild(htmlSpan('π · 20<sup>2</sup> = 400π'));

  const oe_121006_8 = document.createElement('span');
  const oe_121006_8_b1 = maakSpanBreedte('0.4cm', '');
  oe_121006_8.appendChild(oe_121006_8_b1);
  oe_121006_8.appendChild(htmlSpan('De grote cirkel is dus (400π) : (25π) = 16 keer groter'));

  const oe_121006_9 = document.createElement('span');
  const oe_121006_9_b1 = maakSpanBreedte('0.4cm', '');
  oe_121006_9.appendChild(oe_121006_9_b1);
  oe_121006_9.appendChild(htmlSpan('dan de kleine.'));

  const oe_121006_10 = document.createElement('span');
  const oe_121006_10_b1 = maakSpanBreedte('0.4cm', '');
  oe_121006_10.appendChild(oe_121006_10_b1);
  oe_121006_10.appendChild(htmlSpan('16 · 10 min = 160 min = 2 uur 40 minuten'));

  const oe_121006_11 = document.createElement('span');
  const oe_121006_11_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121006_11.appendChild(oe_121006_11_b1);
  oe_121006_11.appendChild(htmlSpan('Antwoord: Tine heeft 2 uur en 40 minuten nodig.'));

  const inhoud = maakOefening({
    id:'oe_121006', nummer:'?', soort:'inoefenen',
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
    { const _v="Tine heeft een cirkelvormig grasveld met een diameter van 10 m. Gras afrijden duurt 10 minuten."; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_121006_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_121006_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_121006_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_121006_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_121006_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 5 van 1 */
  {
    const _tr_0_4 = document.createElement('tr');
    _tr_0_4.dataset.figuur = 'afbeelding1';
    const _td_0_4 = maakSlTdZonderInsprong(oe_121006_6, false);
    _td_0_4.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_4.querySelector('.sl').style.flex = 'none';
    _td_0_4.classList.add('kolom-links');
    _tr_0_4.appendChild(_td_0_4); tbody_0.appendChild(_tr_0_4);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    _tr_0_5.dataset.figuur = 'afbeelding1';
    const _td_0_5 = maakSlTdZonderInsprong(oe_121006_7, false);
    _td_0_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_5.querySelector('.sl').style.flex = 'none';
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    _tr_0_6.dataset.figuur = 'afbeelding1';
    const _td_0_6 = maakSlTdZonderInsprong(oe_121006_8, false);
    _td_0_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_6.querySelector('.sl').style.flex = 'none';
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    _tr_0_7.dataset.figuur = 'afbeelding1';
    const _td_0_7 = maakSlTdZonderInsprong(oe_121006_9, false);
    _td_0_7.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_7.querySelector('.sl').style.flex = 'none';
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  /* Schrijflijn 9 van 1 */
  {
    const _tr_0_8 = document.createElement('tr');
    _tr_0_8.dataset.figuur = 'afbeelding1';
    const _td_0_8 = maakSlTdZonderInsprong(oe_121006_10, false);
    _td_0_8.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_8.querySelector('.sl').style.flex = 'none';
    _td_0_8.classList.add('kolom-links');
    _tr_0_8.appendChild(_td_0_8); tbody_0.appendChild(_tr_0_8);
  }

  /* Schrijflijn 10 van 1 */
  {
    const _tr_0_9 = document.createElement('tr');
    _tr_0_9.dataset.figuur = 'afbeelding1';
    const _td_0_9 = maakSlTdZonderInsprong(oe_121006_11, false);
    _td_0_9.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_0_9.querySelector('.sl').style.flex = 'none';
    _td_0_9.classList.add('kolom-links');
    _tr_0_9.appendChild(_td_0_9); tbody_0.appendChild(_tr_0_9);
  }

  /* Schrijflijn 10 van 1 */
  {
    const _tr_0_9 = document.createElement('tr');
    _tr_0_9.dataset.figuur = 'afbeelding1';
    const _td_0_9 = maakSlTdZonderInsprong('', false);
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
      fetch('afbeeldingen/oe_121006.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '70%'; /* ← breedte aanpassen indien nodig */
          svg.style.height = 'auto';
          const oplLagen = ['layer2'] /* ← lagen aanpassen */; /* ← oplossingenlagen */
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
