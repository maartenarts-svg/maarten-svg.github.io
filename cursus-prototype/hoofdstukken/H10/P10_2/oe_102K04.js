/* ============================================================
   H10 / P10_2 / oe_102K04.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = false;
  const minderw = '-0.2cm'

  const inhoud = maakOefening({
    id:'oe_102K04', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:['rekenmachine'],
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
    { const _v='Een bal die weggetrapt wordt, volgt een boogvormige baan.<br>Je kunt de hoogte van de bal ten opzichte van de grond berekenen met de formule<br><i>h</i> = -0,025<i>x</i><sup>2</sup> + 0,5<i>x</i>. Hierbij is <i>h</i> de hoogte (in m) en <i>x</i> de afstand tot de speler (in m).'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', 'Vul de tabel aan.<br>Je mag ICT gebruiken.', false);
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['16%', '12%', '12%', '12%', '12%', '12%', '12%', '12%'];

  const matrix = [
    [
      { inhoud: 'afstand <i>x</i> (m)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '8', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '12', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '16', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '20', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'hoogte <i>h</i> (m)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '0', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1,6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2,4', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2,5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2,4', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1,6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '0', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper = document.createElement('div');
  tabelWrapper.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper.style.marginTop = '0cm';  // ← HIER AANPASSEN
  tbody.appendChild(tabelWrapper);
  maakZichtbareTabel(tabelWrapper, 2, 8, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', 'Teken de grafiek.', false);
    _tdLbl.querySelector('.rij').style.marginBottom = minderw;
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding1';
    const _td_b_0 = maakSlTd('', false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    _tr_b_1.dataset.figuur = 'afbeelding1';
    const _td_b_1 = maakSlTd('', false);
    _td_b_1.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_b_1.querySelector('.sl').style.flex = 'none';
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    _tr_b_2.dataset.figuur = 'afbeelding1';
    const _td_b_2 = maakSlTd('', false);
    _td_b_2.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_b_2.querySelector('.sl').style.flex = 'none';
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    _tr_b_3.dataset.figuur = 'afbeelding1';
    const _td_b_3 = maakSlTd('', false);
    _td_b_3.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_b_3.querySelector('.sl').style.flex = 'none';
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     Positie en hoogte worden na render berekend via requestAnimationFrame.
     De containers zoeken hun rijen op via het data-figuur attribuut.
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', 'calc(100%)');  // ← dit ontbreekt
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';

      fetch('afbeeldingen/oe_102K04.svg') 
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%';
          svg.style.height = '100%';

          const oplLagen = ['layer2', 'layer3', 'layer4'];
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
