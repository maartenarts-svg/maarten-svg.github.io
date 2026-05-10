/* ============================================================
   H10 / P10_T / oe_10T006.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10T006_1 = document.createElement('span');
  oe_10T006_1.appendChild(htmlSpan('De tabel geeft de hoogte (in m) van een luchtballon weer in functie van de tijd (in min).'));

  const oe_10T006_2 = document.createElement('span');
  oe_10T006_2.appendChild(htmlSpan('Teken de grafiek voor de eerste 5 minuten.'));

  const inhoud = maakOefening({
    id:'oe_10T006', nummer:'?', soort:'inoefenen',
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
    { const _v='Een luchtballon stijgt op met een constante snelheid.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  voegWitruimteToe(inhoud,'0.05cm');

  /* Tabel */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_10T006_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['22%', '13%', '13%', '13%', '13%', '13%', '13%'];

  const matrix = [
    [
      { inhoud: 'tijd (min)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'hoogte (m)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '50', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '100', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '150', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '200', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '250', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 2, 7, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(inhoud,'0.2cm');

  /* Opgave */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_10T006_2; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }

  const {tbody: tbody_1} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijnen voor naast de grafiek */
  {
    const _tr_0 = document.createElement('tr');
    _tr_0.dataset.figuur = 'afbeelding1';
    const _td_0 = maakSlTdZonderInsprong(null, false);
    _td_0.querySelector('.sl').style.maxWidth = '0%';
    _td_0.querySelector('.sl').style.flex = 'none';
    _td_0.classList.add('kolom-links');
    _tr_0.appendChild(_td_0); tbody_1.appendChild(_tr_0);
  }

  {
    const _tr_1 = document.createElement('tr');
    _tr_1.dataset.figuur = 'afbeelding1';
    const _td_1 = maakSlTdZonderInsprong(null, false);
    _td_1.querySelector('.sl').style.maxWidth = '0%';
    _td_1.querySelector('.sl').style.flex = 'none';
    _td_1.classList.add('kolom-links');
    _tr_1.appendChild(_td_1); tbody_1.appendChild(_tr_1);
  }

  {
    const _tr_2 = document.createElement('tr');
    _tr_2.dataset.figuur = 'afbeelding1';
    const _td_2 = maakSlTdZonderInsprong(null, false);
    _td_2.querySelector('.sl').style.maxWidth = '0%';
    _td_2.querySelector('.sl').style.flex = 'none';
    _td_2.classList.add('kolom-links');
    _tr_2.appendChild(_td_2); tbody_1.appendChild(_tr_2);
  }

  {
    const _tr_3 = document.createElement('tr');
    _tr_3.dataset.figuur = 'afbeelding1';
    const _td_3 = maakSlTdZonderInsprong(null, false);
    _td_3.querySelector('.sl').style.maxWidth = '0%';
    _td_3.querySelector('.sl').style.flex = 'none';
    _td_3.classList.add('kolom-links');
    _tr_3.appendChild(_td_3); tbody_1.appendChild(_tr_3);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '50%');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0;
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_10T006.svg')
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '75%';
          svg.style.height = 'auto';
          const oplLagen = ['layer2'];
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

/* ============================================================
   SPECIFICATIE AFBEELDING: oe_10T006.svg
   ============================================================
   Grafiek: hoogte (m) in functie van tijd (min) — lege assen

   ASSEN:
     x-as: tijd (min), bereik 0 tot 5, stap 1
     y-as: hoogte (m), bereik 0 tot 250, stap 50

   LAYER 1 (opgave — altijd zichtbaar):
     - Assenstelsel met labels en rooster
     - Punten zijn NIET ingetekend (leerling moet dit zelf doen)
     - Label x-as: "tijd (min)"
     - Label y-as: "hoogte (m)"

   LAYER 2 (oplossing — toggle):
     - 6 punten: (0,0), (1,50), (2,100), (3,150), (4,200), (5,250)
     - Rechte lijn door alle 6 punten
   ============================================================ */
