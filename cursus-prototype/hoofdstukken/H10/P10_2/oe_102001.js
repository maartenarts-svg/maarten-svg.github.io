/* ============================================================
   H10 / P10_2 / oe_102001.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = true;

  const inhoud = maakOefening({
    id:'oe_102001', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening', container:'.pagina'
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
    { const _v='Als tijdens het sporten je hartslag te hoog oploopt, dan werkt je hart niet meer optimaal.<br> Een optimale hartslag tijdens het sporten kun je berekenen door 180 te verminderen met je leeftijd.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', 'Noteer een formule waarmee je de optimale hartslag <i>h</i> (in bpm, beats per minute) kunt berekenen in functie van de leeftijd <i>l</i> (in jaar).', false);
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    const _td_a_0 = maakSlTd('optimale hartslag = 180 - leeftijd', false);
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    const _td_a_1 = maakSlTd('<i>h</i>\u200A = 180 - <i>l</i>', false);
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  const _trWit = document.createElement('tr');
  const _tdWit = document.createElement('td');
  _tdWit.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit.appendChild(_tdWit);
  tbody.appendChild(_trWit);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', 'Vul de tabel aan.', false);
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['15%', '17%', '17%', '17%', '17%', '17%'];

  const matrix = [
    [
      { inhoud: 'leeftijd <i>l</i> (jaar)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '12', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '27', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '43', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '66', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '82', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'optimale hartslag <i>h</i> (bpm)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '180 - 12 <br>= 168', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '180 - 27 <br>= 153', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '180 - 43 <br>= 137', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '180 - 66 <br>= 114', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '180 - 82 <br>= 98', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper = document.createElement('div');
  tabelWrapper.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper.style.marginTop = '-0.5cm';  // ← HIER AANPASSEN
  inhoud.appendChild(tabelWrapper);
  maakZichtbareTabel(tabelWrapper, 2, 6, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });
  
})();
