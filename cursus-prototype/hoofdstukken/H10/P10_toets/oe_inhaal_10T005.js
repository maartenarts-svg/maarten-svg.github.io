/* ============================================================
   H10 / P10_T / oe_inhaal_10T005.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10T005_1 = document.createElement('span');
  oe_10T005_1.appendChild(htmlSpan('Lees af hoeveel euro per dag de verwarming kost bij een temperatuur van 10 °C.'));

  const oe_10T005_2 = document.createElement('span');
  oe_10T005_2.appendChild(htmlSpan('2,5 euro per dag'));

  const oe_10T005_3 = document.createElement('span');
  oe_10T005_3.appendChild(htmlSpan('Lees af bij welke temperatuur de kostprijs het laagst is.'));

  const oe_10T005_4 = document.createElement('span');
  oe_10T005_4.appendChild(htmlSpan('bij 20 °C'));

  const oe_10T005_5 = document.createElement('span');
  oe_10T005_5.appendChild(htmlSpan('Noteer die kostprijs.'));

  const oe_10T005_6 = document.createElement('span');
  oe_10T005_6.appendChild(htmlSpan('0,5 euro per dag'));

  const oe_10T005_7 = document.createElement('span');
  oe_10T005_7.appendChild(htmlSpan('Noteer bij welke temperaturen de kostprijs per dag 5 euro is.'));

  const oe_10T005_8 = document.createElement('span');
  oe_10T005_8.appendChild(htmlSpan('bij 5 °C en bij 35 °C'));

  const oe_10T005_9 = document.createElement('span');
  oe_10T005_9.appendChild(htmlSpan('Tijdens de eerste 10 dagen van januari is de gemiddelde temperatuur ongeveer 0 °C. <br>Bereken hoeveel euro de verwarming die periode van 10 dagen kost.'));

  const oe_10T005_10 = document.createElement('span');
  oe_10T005_10.appendChild(htmlSpan('Bij 0 °C is de kostprijs 8,5 euro per dag.'));

  const oe_10T005_11 = document.createElement('span');
  oe_10T005_11.appendChild(htmlSpan('10 · 8,5 euro = 85 euro'));

  const inhoud = maakOefening({
    id:'oe_10T005', nummer:'?', soort:'inoefenen',
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
    { const _v='De kostprijs om een huis te verwarmen of af te koelen hangt af van de buitentemperatuur.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  voegWitruimteToe(inhoud,'0.05cm');

  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='De grafiek geeft de dagelijkse kostprijs (in euro) weer in functie van de buitentemperatuur (in °C).'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const WIT = '0.3cm';
  voegWitruimteToe(tbody, WIT);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_10T005_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '50%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_10T005_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  voegWitruimteToe(tbody, WIT);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('b', oe_10T005_3, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '50%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding1';
    const _td_b_0 = maakSlTd(oe_10T005_4, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Label "Noteer die kostprijs." als subvraag zonder label */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdazGeenStreep('',oe_10T005_5, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    _tr_b_1.dataset.figuur = 'afbeelding1';
    const _td_b_1 = maakSlTd(oe_10T005_6, false);
    _td_b_1.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_b_1.querySelector('.sl').style.flex = 'none';
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  voegWitruimteToe(tbody, WIT);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('c', oe_10T005_7, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '50%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    _tr_c_0.dataset.figuur = 'afbeelding1';
    const _td_c_0 = maakSlTd(oe_10T005_8, false);
    _td_c_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_c_0.querySelector('.sl').style.flex = 'none';
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  voegWitruimteToe(tbody, WIT);

  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('d', oe_10T005_9, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '50%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.rij').style.height = '1.7cm';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van d */
  {
    const _tr_d_0 = document.createElement('tr');
    _tr_d_0.dataset.figuur = 'afbeelding1';
    const _td_d_0 = maakSlTd(oe_10T005_10, false);
    _td_d_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_d_0.querySelector('.sl').style.flex = 'none';
    _td_d_0.classList.add('kolom-links');
    _tr_d_0.appendChild(_td_d_0); tbody.appendChild(_tr_d_0);
  }

  /* Schrijflijn 2 van d */
  {
    const _tr_d_1 = document.createElement('tr');
    _tr_d_1.dataset.figuur = 'afbeelding1';
    const _td_d_1 = maakSlTd(oe_10T005_11, false);
    _td_d_1.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_d_1.querySelector('.sl').style.flex = 'none';
    _td_d_1.classList.add('kolom-links');
    _tr_d_1.appendChild(_td_d_1); tbody.appendChild(_tr_d_1);
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
      fetch('afbeeldingen/oe_inhaal_10T005.svg')
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
   SPECIFICATIE AFBEELDING: oe_10T005.svg
   ============================================================
   Grafiek: kostprijs (€/dag) in functie van temperatuur (°C)
   Voorschrift: k = 0,02(t − 20)² + 1

   ASSEN:
     x-as: temperatuur (°C), bereik −5 tot 35, stap 5
     y-as: kostprijs (€/dag), bereik 0 tot 14, stap 1

   Punten op de parabool:
     (−5; 13,5), (0; 9), (5; 5,5), (10; 3), (15; 1,5),
     (20; 1), (25; 1,5), (30; 3), (35; 5,5)

   LAYER 1 (opgave — altijd zichtbaar):
     - Assenstelsel met labels en rooster
     - Parabool k = 0,02(t − 20)² + 1 van t = −5 tot t = 35
     - Label x-as: "temperatuur (°C)"
     - Label y-as: "kostprijs (€/dag)"

   LAYER 2 (oplossing — toggle):
     - Verticale stippellijn van (10; 0) naar (10; 3)
     - Horizontale stippellijn van (−5; 3) naar (10; 3)
     - Punt aangeduid op (10; 3)
     - Verticale stippellijn van (20; 0) naar (20; 1)
     - Horizontale stippellijn van (−5; 1) naar (20; 1)
     - Punt aangeduid op (20; 1)
     - Horizontale stippellijn van (−5; 5,5) naar (5; 5,5) en naar (35; 5,5)
     - Verticale stippellijn van (5; 0) naar (5; 5,5)
     - Verticale stippellijn van (35; 0) naar (35; 5,5)
     - Punten aangeduid op (5; 5,5) en (35; 5,5)
     - Verticale stippellijn van (0; 0) naar (0; 9)
     - Horizontale stippellijn van (−5; 9) naar (0; 9)
     - Punt aangeduid op (0; 9)
   ============================================================ */
