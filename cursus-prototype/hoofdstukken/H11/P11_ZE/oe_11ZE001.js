/* ============================================================
   H11 / P11_ZE / oe_11ZE001.js
   soort: test
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_11ZE001_1 = document.createElement('span');
  oe_11ZE001_1.appendChild(htmlSpan('Teken driehoeken 5 en 6. <br>Noem de toppen <i>E</i> en <i>F</i>.'));

  const oe_11ZE001_2 = document.createElement('span');
  oe_11ZE001_2.appendChild(htmlSpan('Noteer de coördinaat van <i>E</i> en <i>F</i>.'));

  const oe_11ZE001_3 = document.createElement('span');
  oe_11ZE001_3.appendChild(htmlSpan('co(<i>E</i>) = (9, 5) en co(<i>F</i>) = (11, 6)'));

  const oe_11ZE001_5 = document.createElement('span');
  oe_11ZE001_5.appendChild(htmlSpan('Om de coördinaat van de top van de 7de, 8ste, 9de … driehoek te weten te komen, kun je deze driehoeken erbij tekenen. <br>Wat is het nadeel van deze werkwijze?'));

  const oe_11ZE001_6 = document.createElement('span');
  oe_11ZE001_6.appendChild(htmlSpan('Dit duurt lang en is veel werk.'));

  const inhoud = maakOefening({
    id:'oe_11ZE001', nummer:'?', soort:'test',
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
    { const _v='De figuur toont een assenstelsel met vier gelijkbenige driehoeken. Van links naar rechts ligt de top steeds hoger.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_11ZE001_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '45%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody,'0.3cm');
  
  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('b', oe_11ZE001_2, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '45%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding1';
    const _td_b_0 = maakSlTd(oe_11ZE001_3, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(45% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_11ZE001_5, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.querySelector('.rij').style.maxWidth = 'calc(50% - var(--insprong-stap))';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }
  voegWitruimteToe(tbody,'1cm');

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_11ZE001_6, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
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
      fetch('afbeeldingen/oe_11ZE001.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%'; /* ← breedte aanpassen indien nodig */
          svg.style.height = 'auto';
          svg.style.marginTop = '20px';
          const oplLagen = ['layer2', 'layer3']; /* ← oplossingenlagen */
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
