/* ============================================================
   H12 / P12_1 / oe_121011.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_121011_1 = document.createElement('span');
  oe_121011_1.appendChild(maakSpanBreedte('0.4cm', '•'));
  oe_121011_1.appendChild(htmlSpan('De figuur is een parallellogram met'));

  const oe_121011_2 = document.createElement('span');
  const oe_121011_2_b1 = maakSpanBreedte('0.4cm', '');
  oe_121011_2.appendChild(oe_121011_2_b1);
  oe_121011_2.appendChild(htmlSpan('basis 6 en hoogte 7.'));

  const oe_121011_3 = document.createElement('span');
  const oe_121011_3_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121011_3.appendChild(oe_121011_3_b1);
  oe_121011_3.appendChild(htmlSpan('berekening: 6 · 7 = 42'));

  const oe_121011_4 = document.createElement('span');
  oe_121011_4.appendChild(maakSpanBreedte('0.4cm', '•'));
  oe_121011_4.appendChild(maakSpanBreedte('2cm', 'Antwoord:'));
  oe_121011_4.appendChild(htmlSpan('De vierhoek heeft een'));

  const oe_121011_5 = document.createElement('span');
  const oe_121011_5_b1 = maakSpanBreedte('2.4cm', '');
  oe_121011_5.appendChild(oe_121011_5_b1);
  oe_121011_5.appendChild(htmlSpan('oppervlakte van 42.'));

  const inhoud = maakOefening({
    id:'oe_121011', nummer:'?', soort:'inoefenen',
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
    const _wrap = document.createElement('div');
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '100%';
    { const _v='Gegeven is de vierhoek ABCD met <i>A</i>(-2, 3), <i>B</i>(4, 3),<i>C</i>(2, -4) en <i>D</i>(-4, -4).  '; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody_0,'0.1cm');

  voegLijstToe(tbody_0,'bullet','0cm','0.28cm',['Teken de vierhoek in het assenstelsel','Bereken de oppervlakte van de vierhoek']);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_121011_1, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_121011_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_121011_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_121011_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_121011_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong('', false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong('', false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
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
      fetch('afbeeldingen/oe_121011.svg') /* ← bestandsnaam */
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
