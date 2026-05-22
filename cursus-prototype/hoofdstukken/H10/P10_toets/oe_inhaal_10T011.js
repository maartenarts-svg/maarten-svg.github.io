/* ============================================================
   H10 / P10_T / oe_inhaal_10T011.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10T011_1 = document.createElement('span');
  oe_10T011_1.appendChild(htmlSpan('Lees af op de grafiek welke afstand Remco gereden heeft na 2,5 uur.'));

  const oe_10T011_2 = document.createElement('span');
  oe_10T011_2.appendChild(htmlSpan('55 km'));

  const oe_10T011_3 = document.createElement('span');
  oe_10T011_3.appendChild(htmlSpan('Bereken de afstand die Remco gereden heeft na <br> 7 uur.'));

  const oe_10T011_4 = document.createElement('span');
  oe_10T011_4.appendChild(htmlSpan('22 · <span class="markeer-lila">6</span> = 132'));

  const oe_10T011_4b = document.createElement('span');
  oe_10T011_4b.appendChild(htmlSpan('Remco heeft dan 132 km gereden.'));  

  const oe_10T011_5 = document.createElement('span');
  oe_10T011_5.appendChild(htmlSpan('Wout is ook aan het fietsen. Bij hem wordt het verband tussen de afstand en de tijd weergegeven door de formule <i>d</i> = 25<i>t</i>. <br> Onderzoek wie na 4 uur de grootste afstand gereden heeft.<br><b>Bereken dat verschil.</b>'));

  const oe_10T011_6 = document.createElement('span');
  oe_10T011_6.appendChild(htmlSpan('Remco: 22 · <span class="markeer-lila">4</span> = 88'));

  const oe_10T011_7 = document.createElement('span');
  oe_10T011_7.appendChild(htmlSpan('Wout: 25 · <span class="markeer-lila">4</span> = 100'));

  const oe_10T011_8 = document.createElement('span');
  oe_10T011_8.appendChild(htmlSpan('Wout heeft 100 km - 88 km = 12 km meer gereden.'));

  const inhoud = maakOefening({
    id:'oe_10T011', nummer:'?', soort:'inoefenen',
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
    { const _v='Remco legt een afstand af. De formule die het verband weergeeft tussen de afstand en de tijd is <br><i>d</i> = 18<i>t</i>.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  voegWitruimteToe(inhoud,'0.05cm');

  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Hierin is <i>d</i> de afstand (in km) en <i>t</i> de tijd (in uur).'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const WIT = '0.3cm';
  voegWitruimteToe(tbody, WIT);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_10T011_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_10T011_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  voegWitruimteToe(tbody, WIT);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('b', oe_10T011_3, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding1';
    const _td_b_0 = maakSlTd(oe_10T011_4, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding1';
    const _td_b_0 = maakSlTd(oe_10T011_4b, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  voegWitruimteToe(tbody, WIT);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('c', oe_10T011_5, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.rij').style.height = '2.5cm';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  {
    const _tr_c_0 = document.createElement('tr');
    _tr_c_0.dataset.figuur = 'afbeelding1';
    const _td_c_0 = maakSlTd(oe_10T011_6, false);
    _td_c_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_c_0.querySelector('.sl').style.flex = 'none';
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  {
    const _tr_c_1 = document.createElement('tr');
    _tr_c_1.dataset.figuur = 'afbeelding1';
    const _td_c_1 = maakSlTd(oe_10T011_7, false);
    _td_c_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_c_1.querySelector('.sl').style.flex = 'none';
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }

  {
    const _tr_c_2 = document.createElement('tr');
    _tr_c_2.dataset.figuur = 'afbeelding1';
    const _td_c_2 = maakSlTd(oe_10T011_8, false);
    _td_c_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_c_2.querySelector('.sl').style.flex = 'none';
    _td_c_2.classList.add('kolom-links');
    _tr_c_2.appendChild(_td_c_2); tbody.appendChild(_tr_c_2);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  {
    const _fig = maakFiguurContainer('afbeelding1', '40%');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0;
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_inhaal_10T011.svg')
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '90%';
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
   SPECIFICATIE AFBEELDING: oe_10T011.svg  (d = 18t)
   ============================================================
   Grafiek: afstand (km) in functie van tijd (uur)

   ASSEN:
     x-as: tijd (uur), bereik 0 tot 4, stap 0,5
     y-as: afstand (km), bereik 0 tot 72, stap 9

   LAYER 1 (opgave — altijd zichtbaar):
     - Assenstelsel met labels en rooster
     - Rechte lijn d = 18t van (0; 0) tot (4; 72)
     - Label x-as: "tijd (uur)"
     - Label y-as: "afstand (km)"

   LAYER 2 (oplossing — toggle):
     - Verticale stippellijn van (2,5; 0) naar (2,5; 45)
     - Horizontale stippellijn van (0; 45) naar (2,5; 45)
     - Punt aangeduid op (2,5; 45)
     - Verticale stippellijn van (3; 0) naar (3; 54)
     - Horizontale stippellijn van (0; 54) naar (3; 54)
     - Punt aangeduid op (3; 54)
   ============================================================ */
