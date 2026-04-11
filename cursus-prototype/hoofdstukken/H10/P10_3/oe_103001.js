/* ============================================================
   H10 / P10_3 / oe_103001.js
   soort: ontdek
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = false;

  const inhoud = maakOefening({
    id:'oe_103001', nummer:'?', soort:'ontdek',
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
    { const _v='Boer Teun wil schapen op zijn land laten grazen en zet een deel van zijn weiland af met een omheining.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd('', false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd('', false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    _tr_a_2.dataset.figuur = 'afbeelding1';
    const _td_a_2 = maakSlTd('', false);
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd('', false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  const _trWit0 = document.createElement('tr');
  const _tdWit0 = document.createElement('td');
  _tdWit0.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit0.appendChild(_tdWit0);
  tbody.appendChild(_trWit0);  

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', 'Vul de tabel in voor weiland 1 en 2.<br>Op de eerste rij staat de lengte van een zijde. <br>Op de tweede rij staat hoeveel meter omheining boer Teun voor dit weiland nodig heeft.', false);
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const rijHoogtes0 = ['0.9cm', '1.8cm', '1.8cm'];
  const kolomBreedtes0 = ['32%', '17%', '17%', '17%', '17%'];

  const matrix0 = [
    [
      { inhoud: 'lengte zijde <i>z</i> (m)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '10', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '25', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '30', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>x</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'lengte omheining weiland 1', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '4 · <span class="markeer-lila">10</span> <br>= 40', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4 · <span class="markeer-lila">25</span> <br>= 100', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4 · <span class="markeer-lila">30</span> <br>= 120', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4<i>x</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'lengte omheining weiland 2', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '5 · <span class="markeer-lila">10</span> <br>= 50', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 · <span class="markeer-lila">25</span> <br>= 125', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 · <span class="markeer-lila">30</span> <br>= 150', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5<i>x</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper0 = document.createElement('div');
  tabelWrapper0.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper0.style.marginTop = '0.5cm';  // ← HIER AANPASSEN
  tbody.appendChild(tabelWrapper0);
  maakZichtbareTabel(tabelWrapper0, 3, 5, {
    hoofding: 'links',
    rijHoogtes: rijHoogtes0,
    kolomBreedtes: kolomBreedtes0,
    matrix: matrix0,
  });

  const _trWit1 = document.createElement('tr');
  const _tdWit1 = document.createElement('td');
  _tdWit1.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit1.appendChild(_tdWit1);
  tbody.appendChild(_trWit1);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', 'Vul de tabel aan met een formule waarmee je de lengte van de omheining voor elk weiland kunt berekenen.', false);
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const rijHoogtes1 = ['0.9cm', '0.9cm'];
  const kolomBreedtes1 = ['32%', '13.6%', '13.6%', '13.6%', '13.6%', '13.6%'];

  const matrix1 = [
    [
      { inhoud: 'nummer weiland', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'formule lengte omheining', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '4<i>x</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5<i>x</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4<i>y</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6<i>y</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '7<i>y</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper1 = document.createElement('div');
  tabelWrapper1.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper1.style.marginTop = '-0.2cm';  // ← HIER AANPASSEN
  tbody.appendChild(tabelWrapper1);
  maakZichtbareTabel(tabelWrapper1, 2, 6, {
    hoofding: 'links',
    rijHoogtes: rijHoogtes1,
    kolomBreedtes: kolomBreedtes1,
    matrix: matrix1,
  });

  const _trWit2 = document.createElement('tr');
  const _tdWit2 = document.createElement('td');
  _tdWit2.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit2.appendChild(_tdWit2);
  tbody.appendChild(_trWit2);

  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', 'Boer Teun wil meer dan één afzetten.<br> Vul de tabel aan met de formule voor de lengte van de omheining voor alle weilanden.', false);
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const rijHoogtes2 = ['0.9cm', '1.8cm'];
  const kolomBreedtes2 = ['32%', '17%', '17%', '17%', '17%'];

  const matrix2 = [
    [
      { inhoud: 'omheinde weilanden', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1 en 2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3 en 4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3, 4 en 5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1, 2, 3, 4 en 5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'formule lengte omheining', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '4<i>x</i> + 5<i>x</i>\u200A <br>= 9<i>x</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4<i>y</i> + 6<i>y</i>\u200A <br>= 10<i>y</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4<i>y</i> + 6<i>y</i> + 8<i>y</i>\u200A <br>= 18<i>y</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '9<i>x</i> + 18<i>y</i>\u200A', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper2 = document.createElement('div');
  tabelWrapper2.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper2.style.marginTop = '-0.2cm';  // ← HIER AANPASSEN
  tbody.appendChild(tabelWrapper2);
  maakZichtbareTabel(tabelWrapper2, 2, 5, {
    hoofding: 'links',
    rijHoogtes: rijHoogtes2,
    kolomBreedtes: kolomBreedtes2,
    matrix: matrix2,
  });

  /* ============================================================
     FIGUUR-CONTAINERS
     Positie en hoogte worden na render berekend via requestAnimationFrame.
     De containers zoeken hun rijen op via het data-figuur attribuut.
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', 'calc(100%)');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_103001.svg';
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);  
      inhoud.appendChild(_fig);
    });
  }

})();
