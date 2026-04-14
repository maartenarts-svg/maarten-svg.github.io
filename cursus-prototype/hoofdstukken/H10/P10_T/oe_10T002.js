/* ============================================================
   H10 / P10_T / oe_10T002.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10T002_2 = document.createElement('span');
  oe_10T002_2.appendChild(htmlSpan('De tabel geeft de temperatuur (in °C) weer in functie van de diepte (in km) op een dag in juni.'));

  const oe_10T002_3 = document.createElement('span');
  oe_10T002_3.appendChild(htmlSpan('Teken de grafiek voor de eerste 5 km.'));

  const inhoud = maakOefening({
    id:'oe_10T002', nummer:'?', soort:'inoefenen',
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
    { const _v='Hoe dieper je in de grond gaat, hoe hoger de temperatuur.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  voegWitruimteToe(inhoud,'0.05cm');

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_10T002_2; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  
  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['14%', '14%', '14%', '14%', '14%', '14%', '14%'];

  const matrix = [
    [
      { inhoud: 'diepte (km)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'temperatuur (°C)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '20', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '30', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '40', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '50', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '60', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '70', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 2, 7, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(inhoud,'0.2cm');

  /* Opgave 2 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_10T002_3; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_1} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 2 */
  {
    const _tr_1_0 = document.createElement('tr');
    _tr_1_0.dataset.figuur = 'afbeelding1';
    const _td_1_0 = maakSlTdZonderInsprong(null, false);
    _td_1_0.querySelector('.sl').style.maxWidth = '0%';
    _td_1_0.querySelector('.sl').style.flex = 'none';
    _td_1_0.classList.add('kolom-links');
    _tr_1_0.appendChild(_td_1_0); tbody_1.appendChild(_tr_1_0);
  }

  /* Schrijflijn 2 van 2 */
  {
    const _tr_1_1 = document.createElement('tr');
    _tr_1_1.dataset.figuur = 'afbeelding1';
    const _td_1_1 = maakSlTdZonderInsprong(null, false);
    _td_1_1.querySelector('.sl').style.maxWidth = '0%';
    _td_1_1.querySelector('.sl').style.flex = 'none';
    _td_1_1.classList.add('kolom-links');
    _tr_1_1.appendChild(_td_1_1); tbody_1.appendChild(_tr_1_1);
  }

  /* Schrijflijn 3 van 2 */
  {
    const _tr_1_2 = document.createElement('tr');
    _tr_1_2.dataset.figuur = 'afbeelding1';
    const _td_1_2 = maakSlTdZonderInsprong(null, false);
    _td_1_2.querySelector('.sl').style.maxWidth = 'calc(0%)';
    _td_1_2.querySelector('.sl').style.flex = 'none';
    _td_1_2.classList.add('kolom-links');
    _tr_1_2.appendChild(_td_1_2); tbody_1.appendChild(_tr_1_2);
  }

  /* Schrijflijn 4 van 2 */
  {
    const _tr_1_3 = document.createElement('tr');
    _tr_1_3.dataset.figuur = 'afbeelding1';
    const _td_1_3 = maakSlTdZonderInsprong(null, false);
    _td_1_3.querySelector('.sl').style.maxWidth = '0%';
    _td_1_3.querySelector('.sl').style.flex = 'none';
    _td_1_3.classList.add('kolom-links');
    _tr_1_3.appendChild(_td_1_3); tbody_1.appendChild(_tr_1_3);
  }


  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '50%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_10T002.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '75%'; /* ← breedte aanpassen indien nodig */
          svg.style.height = 'auto';
          const oplLagen = ['layer2']; /* ← oplossingenlagen */
          oplLagen.forEach(id => {
            const laag = svg.getElementById(id);
            if (laag) { laag.style.display = 'none'; laag.classList.add('svg-opl-laag'); }
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
