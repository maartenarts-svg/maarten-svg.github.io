/* ============================================================
   H10 / P10_3 / oe_103K01.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = false;

  const inhoud = maakOefening({
    id:'oe_103K01', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
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
    if (RAND_ZICHTBAAR) {
      div.style.border = '1.5px dashed #aaa';
      const lbl = document.createElement('span');
      lbl.textContent = naam;
      lbl.style.cssText = 'font-size:9pt;color:#999;pointer-events:none;font-family:Arial,sans-serif;';
      div.appendChild(lbl);
    }
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Bij de zeshoek is elke zijde één langer dan de vorige. <br>[<i>AB</i>] is de kortste zijde, zijde [<i>BC</i>] is 2 langer dan zijde [<i>AB</i>], zijde [<i>CD</i>] is 2 langer dan zijde [<i>BC</i>] …'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);
  voegWitruimteToe(tbody);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', 'Noteer bij elke zijde de lengte in functie van <i>z</i>.', false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const oe103K01b1 = document.createElement('span');
  const oe103K01b1_b1 = maakSpanBreedte('0.65cm', '<i>P</i>');
  oe103K01b1.appendChild(oe103K01b1_b1);
  oe103K01b1.appendChild(htmlSpan('= '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('<i>z</i>'), 'enkel', '0.1cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'enkel', '0.1cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ 2'), 'dubbel', '0.18cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'enkel', '0.1cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ 4'), 'dubbel', '0.18cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'enkel', '0.1cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ 6'), 'dubbel', '0.18cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'enkel', '0.1cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ 8'), 'dubbel', '0.18cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'enkel', '0.1cm', true));
  oe103K01b1.appendChild(htmlSpan(' '));
  oe103K01b1.appendChild(maakOnderstreping(htmlSpan('+ 10'), 'dubbel', '0.18cm', true));

  const oe103K01b2 = document.createElement('span');
  const oe103K01b2_b1 = maakSpanBreedte('0.65cm', '');
  oe103K01b2.appendChild(oe103K01b2_b1);
  oe103K01b2.appendChild(htmlSpan('= 6<i>z</i> + 30'));

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('b', 'Noteer de formule voor de omtrek <i>P</i> van de zeshoek zo kort mogelijk.', false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding1';
    const _td_b_0 = maakSlTd(oe103K01b1, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    _tr_b_1.dataset.figuur = 'afbeelding1';
    const _td_b_1 = maakSlTd(oe103K01b2, false);
    _td_b_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_b_1.querySelector('.sl').style.flex = 'none';
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  voegWitruimteToe(tbody);

  const oe103K01c1 = document.createElement('span');
  const oe103K01c1_b1 = maakSpanBreedte('0.65cm', '<i>P</i>');
  oe103K01c1.appendChild(oe103K01c1_b1);
  oe103K01c1.appendChild(htmlSpan('= 6 · <span class="markeer-lila">5</span> + 30'));

  const oe103K01c2 = document.createElement('span');
  const oe103K01c2_b1 = maakSpanBreedte('0.65cm', '');
  oe103K01c2.appendChild(oe103K01c2_b1);
  oe103K01c2.appendChild(htmlSpan('= 60'));  
  
  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('c', 'Bereken de omtrek voor <i>z</i> = 5.', false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    _tr_c_0.dataset.figuur = 'afbeelding1';
    const _td_c_0 = maakSlTd(oe103K01c1, false);
    _td_c_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_c_0.querySelector('.sl').style.flex = 'none';
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* Schrijflijn 2 van c */
  {
    const _tr_c_1 = document.createElement('tr');
    _tr_c_1.dataset.figuur = 'afbeelding1';
    const _td_c_1 = maakSlTd(oe103K01c2, false);
    _td_c_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_c_1.querySelector('.sl').style.flex = 'none';
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }

    /* Schrijflijn 3 van c */
  {
    const _tr_c_1 = document.createElement('tr');
    _tr_c_1.dataset.figuur = 'afbeelding1';
    const _td_c_1 = maakSlTd('De omtrek is 60.', false);
    _td_c_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_c_1.querySelector('.sl').style.flex = 'none';
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     Positie en hoogte worden na render berekend via requestAnimationFrame.
     De containers zoeken hun rijen op via het data-figuur attribuut.
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', 'calc(38%)');  // ← dit ontbreekt
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';

      fetch('afbeeldingen/oe_103K01.svg')
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%';
          svg.style.height = '100%';

          const oplLagen = ['layer2'];
          oplLagen.forEach(id => {
            const laag = svg.getElementById(id);
            if (laag) {
              laag.style.display = 'none';
              laag.classList.add('svg-opl-laag');
            }
          });

          _fig.innerHTML = '';
          _fig.appendChild(svg);

          const badge = inhoud.closest('.oefening')?.querySelector('.badge');
          if (badge) {
            if (!TOGGLE_TOEGESTAAN) return;
            badge.addEventListener('click', () => {
              const zichtbaar = svg.querySelector('.svg-opl-laag').style.display !== 'none';
              oplLagen.forEach(id => {
                const laag = svg.getElementById(id);
                if (laag) laag.style.display = zichtbaar ? 'none' : 'block';
              });
            });
          }
        });

      inhoud.appendChild(_fig);
    });
  }

})();
