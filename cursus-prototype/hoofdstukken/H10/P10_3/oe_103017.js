/* ============================================================
   H10 / P10_3 / oe_103017.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = false;

  const inhoud = maakOefening({
    id:'oe_103017', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
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
    { const _v=''; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', 'Noteer een formule voor de omtrek <i>P</i> van de veelhoek.', false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
    const minderw = '-0.2cm'
    _tdLbl.querySelector('.rij').style.marginBottom = minderw;
  }

  /* Schrijflijn 1 van a */
  {
    const oe103017a1 = document.createElement('span');
    const oe103017a1_b1 = maakSpanBreedte('0.65cm', '<i>P</i>');
    oe103017a1.appendChild(oe103017a1_b1);
    oe103017a1.appendChild(htmlSpan('= '));
    oe103017a1.appendChild(maakOnderstreping(htmlSpan('3<i>g</i>'), 'enkel', '0.1cm', true));
    oe103017a1.appendChild(htmlSpan(' '));
    oe103017a1.appendChild(maakOnderstreping(htmlSpan('+ 1<i>g</i>'), 'enkel', '0.1cm', true));
    oe103017a1.appendChild(htmlSpan(' '));
    oe103017a1.appendChild(maakOnderstreping(htmlSpan('+ 3'), 'dubbel', '0.18cm', true));
    oe103017a1.appendChild(htmlSpan(' '));
    oe103017a1.appendChild(maakOnderstreping(htmlSpan('+ 2<i>g</i>'), 'enkel', '0.1cm', true));
    oe103017a1.appendChild(htmlSpan(' '));
    oe103017a1.appendChild(maakOnderstreping(htmlSpan('+ 2<i>g</i>'), 'enkel', '0.1cm', true));
    oe103017a1.appendChild(htmlSpan(' '));
    oe103017a1.appendChild(maakOnderstreping(htmlSpan('+ 1'), 'dubbel', '0.18cm', true));    
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe103017a1, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {   
    const oe103017a2 = document.createElement('span');
    const oe103017a2_b1 = maakSpanBreedte('0.65cm', '');
    oe103017a2.appendChild(oe103017a2_b1);
    oe103017a2.appendChild(htmlSpan('= 8<i>g</i> + 4'));    
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe103017a2, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd('', false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  voegWitruimteToe(tbody);
  
  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding2';
    const _tdLbl = maakOpTdaz('b', 'Vul de tabel aan.', false);
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
    _tr_b_0.dataset.figuur = 'afbeelding2';
    const td_b_0 = document.createElement('td');
      const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
      const kolomBreedtes = ['20%', '80%'];
      const matrix = [
        [
          { inhoud: '<i>g</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
          { inhoud: 'omtrek <i>P</i>', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '8 · 1 + 4 = 12', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
        ],
        [
          { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '8 · 2 + 4 = 20', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
        ],
        [
          { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '8 · 3 + 4 = 28', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
        ],
        [
          { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '8 · 4 + 4 = 36', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
        ],
      ];
      const tabelWrapper1 = document.createElement('div');
      tabelWrapper1.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
      tabelWrapper1.style.marginTop = '-0.5cm';  // ← HIER AANPASSEN
      td_b_0.appendChild(tabelWrapper1);
      maakZichtbareTabel(tabelWrapper1, 5, 2, {
        hoofding: 'boven',
        rijHoogtes,
        kolomBreedtes,
        matrix,
      });
    tabelWrapper1.style.maxWidth = 'calc(60% - var(--insprong-stap))';
    tabelWrapper1.style.flex = 'none';
    _tr_b_0.appendChild(td_b_0);  
    tbody.appendChild(_tr_b_0);
  }

  voegWitruimteToe(tbody);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding2';
    const _tdLbl = maakOpTdaz('c', 'Teken de grafiek voor <i>g</i> vanaf 1 tot en met 4.', false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
    const minderw2 = '-0.2cm'
    _tdLbl.querySelector('.rij').style.marginBottom = minderw2;
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     Positie en hoogte worden na render berekend via requestAnimationFrame.
     De containers zoeken hun rijen op via het data-figuur attribuut.
     ============================================================ */


  /* afbeelding svg zonder lagen */
  {
    const _fig = maakFiguurContainer('afbeelding1', 'calc(22.2%)');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_103017a.svg'; //<---- pas hier het bestand aan ============================
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);  
      inhoud.appendChild(_fig);
    });
  }

  /* afbeelding svg met lagen */
  {
    const _fig = maakFiguurContainer('afbeelding2', 'calc(38%)');  
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding2"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';

      fetch('afbeeldingen/oe_103017b.svg') //<---- pas hier het bestand aan ============================
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%';
          svg.style.height = '100%';

          const oplLagen = ['layer2']; //<---- pas hier de oplossingenlagen aan ============================
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
