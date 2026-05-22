/* ============================================================
   H10 / P10_T / oe_inhaal_10T010.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10T010_1 = document.createElement('span');
  oe_10T010_1.appendChild(htmlSpan('Bereken het aantal stippen van de 4de figuur.'));

  const oe_10T010_2 = document.createElement('span');
  oe_10T010_2.appendChild(htmlSpan('17'));

  const oe_10T010_3 = document.createElement('span');
  oe_10T010_3.appendChild(htmlSpan('Vul de tabel aan.'));

  const oe_10T010_4 = document.createElement('span');
  oe_10T010_4.appendChild(htmlSpan('Noteer de formule om het aantal stippen te berekenen.'));

  const oe_10T010_5 = document.createElement('span');
  oe_10T010_5.appendChild(htmlSpan('<i>s</i> = 4<i>n</i> + 1'));

  const oe_10T010_6 = document.createElement('span');
  oe_10T010_6.appendChild(htmlSpan('Bereken het aantal stippen van de 150ste figuur.'));

  const oe_10T010_7 = document.createElement('span');
  oe_10T010_7.appendChild(htmlSpan('4 · <span class="markeer-lila">150</span> + 1 = 601'));

  const inhoud = maakOefening({
    id:'oe_10T010', nummer:'?', soort:'inoefenen',
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

  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Drie figuren zijn gegeven.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijnen voor ruimte naast de figuren */
  for (let i = 0; i < 3; i++) {
    const _tr = document.createElement('tr');
    _tr.dataset.figuur = 'afbeelding1';
    const _td = maakSlTd(null, false);
    _td.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td.querySelector('.sl').style.flex = 'none';
    _td.classList.add('kolom-links');
    _tr.appendChild(_td); tbody.appendChild(_tr);
  }

  voegWitruimteToe(tbody,'0.3cm');  

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_10T010_1, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  {
    const _tr = document.createElement('tr');
    const _td = maakSlTd(oe_10T010_2, false);
    _td.classList.add('kolom-links');
    _tr.appendChild(_td); tbody.appendChild(_tr);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b — tabel */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_10T010_3, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody,'0.3cm');

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['23%', '11%', '11%', '11%', '11%', '11%', '11%', '11%'];

  const matrix = [
    [
      { inhoud: 'nummer figuur (<i>n</i>)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '...', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '40', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'aantal stippen (<i>s</i>)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '9', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '13', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '17', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '21', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '161', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper = document.createElement('div');
  tabelWrapper.style.paddingLeft = '0.65cm';
  tabelWrapper.style.marginTop   = '-0.5cm';
  tbody.appendChild(tabelWrapper);
  maakZichtbareTabel(tabelWrapper, 2, 8, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c — formule */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_10T010_4, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  {
    const _tr = document.createElement('tr');
    const _td = maakSlTd(oe_10T010_5, false);
    _td.classList.add('kolom-links');
    _tr.appendChild(_td); tbody.appendChild(_tr);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d — berekening */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('d', oe_10T010_6, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  {
    const _tr = document.createElement('tr');
    const _td = maakSlTd(oe_10T010_7, false);
    _td.classList.add('kolom-links');
    _tr.appendChild(_td); tbody.appendChild(_tr);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  {
    const _fig = maakFiguurContainer('afbeelding1', '100%');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0;
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_inhaal_10T010.svg')
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%';
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
   SPECIFICATIE AFBEELDING: oe_10T010.svg  (s = 8n + 2)
   ============================================================
   Drie stipfiguren naast elkaar, genummerd 1, 2, 3.

   Figuur 1: 10 stippen — 2 vaste stippen bovenaan + 1 rij van 8
   Figuur 2: 18 stippen — 2 vaste stippen bovenaan + 2 rijen van 8
   Figuur 3: 26 stippen — 2 vaste stippen bovenaan + 3 rijen van 8

   Patroon: 2 vaste stippen bovenaan, daaronder telkens 1 rij van 8 erbij.
   Onder elke figuur: label "figuur 1", "figuur 2", "figuur 3"

   LAYER 1 (opgave — altijd zichtbaar): de drie figuren
   LAYER 2 (oplossing — toggle): geen
   ============================================================ */
