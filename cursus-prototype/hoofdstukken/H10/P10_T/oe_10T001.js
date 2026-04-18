/* ============================================================
   H10 / P10_T / oe_10T001.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10T001_1 = document.createElement('span');
  oe_10T001_1.appendChild(htmlSpan('Lees af hoeveel liter per 100 km de auto verbruikt bij een snelheid van 100 km/h.'));

  const oe_10T001_2 = document.createElement('span');
  oe_10T001_2.appendChild(htmlSpan('7 liter per 100 km'));

  const oe_10T001_3 = document.createElement('span');
  oe_10T001_3.appendChild(htmlSpan('Noteer de snelheid waarbij het verbruik het laagst is.'));

  const oe_10T001_4 = document.createElement('span');
  oe_10T001_4.appendChild(htmlSpan('bij 80 km/h'));

  const oe_10T001_5 = document.createElement('span');
  oe_10T001_5.appendChild(htmlSpan('Lees af wat de snelheid van de auto is bij een verbruik van 9 l per 100 km.'));

  const oe_10T001_6 = document.createElement('span');
  oe_10T001_6.appendChild(htmlSpan('120 km/h'));

  const oe_10T001_7 = document.createElement('span');
  oe_10T001_7.appendChild(htmlSpan('Meneer Janssens rijdt 25 km lang met een constante snelheid van 160 km/h over een Duitse autosnelweg. <br>Bereken hoeveel liter benzine hij verbruikt heeft.'));

  const oe_10T001_8 = document.createElement('span');
  oe_10T001_8.appendChild(htmlSpan('Voor 100 km verbruikt hij dan 16 liter.'));

  const oe_10T001_9 = document.createElement('span');
  oe_10T001_9.appendChild(htmlSpan('Dus voor 25 km verbruikt hij 4 liter.'));

  const inhoud = maakOefening({
    id:'oe_10T001', nummer:'?', soort:'inoefenen',
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
    { const _v='Het benzineverbruik van een auto hangt af van de snelheid waarmee je rijdt.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  voegWitruimteToe(inhoud,'0.05cm');
  
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='De grafiek geeft het benzineverbruik weer in functie van de snelheid voor de auto van meneer Janssens.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const WIT = '0.2cm';
  voegWitruimteToe(tbody,WIT);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_10T001_1, false);
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
    const _td_a_0 = maakSlTd(oe_10T001_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  voegWitruimteToe(tbody,WIT);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('b', oe_10T001_3, false);
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
    const _td_b_0 = maakSlTd(oe_10T001_4, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  voegWitruimteToe(tbody,WIT);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('c', oe_10T001_5, false);
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
    const _td_c_0 = maakSlTd(oe_10T001_6, false);
    _td_c_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_c_0.querySelector('.sl').style.flex = 'none';
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  voegWitruimteToe(tbody,WIT);

  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('d', oe_10T001_7, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '50%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.rij').style.height = '2cm';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van d */
  {
    const _tr_d_0 = document.createElement('tr');
    _tr_d_0.dataset.figuur = 'afbeelding1';
    const _td_d_0 = maakSlTd(oe_10T001_8, false);
    _td_d_0.querySelector('.sl').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _td_d_0.querySelector('.sl').style.flex = 'none';
    _td_d_0.classList.add('kolom-links');
    _tr_d_0.appendChild(_td_d_0); tbody.appendChild(_tr_d_0);
  }

  /* Schrijflijn 2 van d */
  {
    const _tr_d_1 = document.createElement('tr');
    _tr_d_1.dataset.figuur = 'afbeelding1';
    const _td_d_1 = maakSlTd(oe_10T001_9, false);
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
      fetch('afbeeldingen/oe_10T001.svg') /* ← bestandsnaam */
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
