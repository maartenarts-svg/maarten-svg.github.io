/* ============================================================
   H12 / P12_2 / oe_122001.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_122001_1 = document.createElement('span');
  oe_122001_1.appendChild(htmlSpan('Omtrek'));

  const oe_122001_2 = document.createElement('span');
  const oe_122001_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122001_2.appendChild(oe_122001_2_b1);
  const oe_122001_2_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_122001_2.appendChild(oe_122001_2_b2);
  oe_122001_2.appendChild(htmlSpan('De omtrek van de figuur bestaat'));

  const oe_122001_3 = document.createElement('span');
  const oe_122001_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_122001_3.appendChild(oe_122001_3_b1);
  oe_122001_3.appendChild(htmlSpan('uit 4 kwartjes van een cirkel met straal 4 cm.'));

  const oe_122001_4 = document.createElement('span');
  const oe_122001_4_b1 = maakSpanBreedte('1.4cm', '');
  oe_122001_4.appendChild(oe_122001_4_b1);
  oe_122001_4.appendChild(htmlSpan('Dat is dus 1 volledige cirkel met straal 4 cm.'));

  const oe_122001_5 = document.createElement('span');
  const oe_122001_5_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122001_5.appendChild(oe_122001_5_b1);
  oe_122001_5.appendChild(htmlSpan('Berekening in cm: 2 · π · 4 ≈ 25,13'));

  const oe_122001_6 = document.createElement('span');
  const oe_122001_6_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122001_6.appendChild(oe_122001_6_b1);
  oe_122001_6.appendChild(htmlSpan('Antwoord: De omtrek is 25,13 cm.'));

  const oe_122001_7 = document.createElement('span');
  oe_122001_7.appendChild(htmlSpan('Oppervlakte'));

  const oe_122001_8 = document.createElement('span');
  const oe_122001_8_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122001_8.appendChild(oe_122001_8_b1);
  const oe_122001_8_b2 = maakSpanBreedte('1cm', 'Plan:');
  oe_122001_8.appendChild(oe_122001_8_b2);
  oe_122001_8.appendChild(htmlSpan('De oppervlakte van de gekleurde figuur is de'));

  const oe_122001_10 = document.createElement('span');
  const oe_122001_10_b1 = maakSpanBreedte('1.4cm', '');
  oe_122001_10.appendChild(oe_122001_10_b1);
  oe_122001_10.appendChild(htmlSpan('oppervlakte van het vierkant min de oppervlakte van 4 kwartjes van een cirkel met'));

  const oe_122001_11 = document.createElement('span');
  const oe_122001_11_b1 = maakSpanBreedte('1.4cm', '');
  oe_122001_11.appendChild(oe_122001_11_b1);
  oe_122001_11.appendChild(htmlSpan('straal 4 cm, dus min de oppervlakte van 1 cirkel met straal 4 cm.'));

  const oe_122001_12 = document.createElement('span');
  const oe_122001_12_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122001_12.appendChild(oe_122001_12_b1);
  oe_122001_12.appendChild(htmlSpan('Berekening in cm<sup>2</sup>: 8<sup>2</sup> - π · 4<sup>2</sup> ≈ 13,73'));

  const oe_122001_14 = document.createElement('span');
  const oe_122001_14_b1 = maakSpanBreedte('0.4cm', '•');
  oe_122001_14.appendChild(oe_122001_14_b1);
  oe_122001_14.appendChild(htmlSpan('Antwoord: De oppervlakte is 13,73 cm<sup>2</sup>.'));

  const inhoud = maakOefening({
    id:'oe_122001', nummer:'?', soort:'voorbeeld',
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
    { const _v='Bereken de omtrek en de oppervlakte van het gekleurde deel.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */

  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(htmlSpan('Omtrek'), false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_122001_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_122001_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_122001_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_122001_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 5 van 1 */
  {
    const _tr_0_4 = document.createElement('tr');
    _tr_0_4.dataset.figuur = 'afbeelding1';
    const _td_0_4 = maakSlTdZonderInsprong(oe_122001_6, false);
    _td_0_4.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_4.querySelector('.sl').style.flex = 'none';
    _td_0_4.classList.add('kolom-links');
    _tr_0_4.appendChild(_td_0_4); tbody_0.appendChild(_tr_0_4);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    _tr_0_5.dataset.figuur = 'afbeelding1';
    const _td_0_5 = maakSlTdZonderInsprong(oe_122001_7, false);
    _td_0_5.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_5.querySelector('.sl').style.flex = 'none';
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    const _td_0_6 = maakSlTdZonderInsprong(oe_122001_8, false);
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 8 van 1 */
  {
    const _tr_0_7 = document.createElement('tr');
    const _td_0_7 = maakSlTdZonderInsprong(oe_122001_10, false);
    _td_0_7.classList.add('kolom-links');
    _tr_0_7.appendChild(_td_0_7); tbody_0.appendChild(_tr_0_7);
  }

  /* Schrijflijn 9 van 1 */
  {
    const _tr_0_8 = document.createElement('tr');
    const _td_0_8 = maakSlTdZonderInsprong(oe_122001_11, false);
    _td_0_8.classList.add('kolom-links');
    _tr_0_8.appendChild(_td_0_8); tbody_0.appendChild(_tr_0_8);
  }

  /* Schrijflijn 10 van 1 */
  {
    const _tr_0_9 = document.createElement('tr');
    const _td_0_9 = maakSlTdZonderInsprong(oe_122001_12, false);
    _td_0_9.classList.add('kolom-links');
    _tr_0_9.appendChild(_td_0_9); tbody_0.appendChild(_tr_0_9);
  }

  /* Schrijflijn 11 van 1 */
  {
    const _tr_0_10 = document.createElement('tr');
    const _td_0_10 = maakSlTdZonderInsprong(oe_122001_14, false);
    _td_0_10.classList.add('kolom-links');
    _tr_0_10.appendChild(_td_0_10); tbody_0.appendChild(_tr_0_10);
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
      fetch('afbeeldingen/oe_122001.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '90%'; /* ← breedte aanpassen indien nodig */
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
