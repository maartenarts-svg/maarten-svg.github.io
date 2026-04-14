/* ============================================================
   H10 / P10_T / oe_10T004.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10T004_1 = document.createElement('span');
  oe_10T004_1.appendChild(htmlSpan('Bereken het aantal stippen van de 4de figuur.'));

  const oe_10T004_2 = document.createElement('span');
  oe_10T004_2.appendChild(htmlSpan('41'));

  const oe_10T004_3 = document.createElement('span');
  oe_10T004_3.appendChild(htmlSpan('Vul de tabel aan.'));

  const oe_10T004_4 = document.createElement('span');
  oe_10T004_4.appendChild(htmlSpan('Noteer de formule om het aantal stippen te berekenen.'));

  const oe_10T004_5 = document.createElement('span');
  oe_10T004_5.appendChild(htmlSpan('<i>s</i> = 10<i>n</i> + 1'));

  const oe_10T004_6 = document.createElement('span');
  oe_10T004_6.appendChild(htmlSpan('Bereken het aantal stippen van de 153ste figuur.'));

  const oe_10T004_7 = document.createElement('span');
  oe_10T004_7.appendChild(htmlSpan('10 · <span class="markeer-lila">153</span> + 1 = 1 531'));

  const inhoud = maakOefening({
    id:'oe_10T004', nummer:'?', soort:'inoefenen',
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
    { const _v='Drie figuren zijn gegeven.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(null, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(null, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd(null, false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(null, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_10T004_1, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    const _td_b_0 = maakSlTd(oe_10T004_2, false);
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_10T004_3, false);
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
      { inhoud: '25', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'aantal stippen (<i>s</i>)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '11', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '21', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '31', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '41', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '51', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '251', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper = document.createElement('div');
  tabelWrapper.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper.style.marginTop = '-0.5cm';  // ← HIER AANPASSEN
  tbody.appendChild(tabelWrapper);
  maakZichtbareTabel(tabelWrapper, 2, 8, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_10T004_4, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van d */
  {
    const _tr_d_0 = document.createElement('tr');
    const _td_d_0 = maakSlTd(oe_10T004_5, false);
    _td_d_0.classList.add('kolom-links');
    _tr_d_0.appendChild(_td_d_0); tbody.appendChild(_tr_d_0);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave e */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('d', oe_10T004_6, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van e */
  {
    const _tr_e_0 = document.createElement('tr');
    const _td_e_0 = maakSlTd(oe_10T004_7, false);
    _td_e_0.classList.add('kolom-links');
    _tr_e_0.appendChild(_td_e_0); tbody.appendChild(_tr_e_0);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '100%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_10T004.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%'; /* ← breedte aanpassen indien nodig */
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
