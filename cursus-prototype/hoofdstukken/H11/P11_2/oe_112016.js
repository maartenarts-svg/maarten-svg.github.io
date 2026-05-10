/* ============================================================
   H11 / P11_1 / oe_112016.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_112016_2 = document.createElement('span');
  oe_112016_2.appendChild(htmlSpan('Vul de tabel aan.'));

  const oe_112016_3 = document.createElement('span');
  oe_112016_3.appendChild(htmlSpan('Noteer een formule waarmee je het aantal stippen  <i>s</i> kunt berekenen in functie van het nummer <i>n</i> van de figuur.'));

  const oe_112016_4 = document.createElement('span');
  oe_112016_4.appendChild(maakMarkering('<i>s</i>','#bbdefb',true));
  oe_112016_4.appendChild(htmlSpan(' = 3<i>n</i> + 2'));

  const oe_112016_5 = document.createElement('span');
  oe_112016_5.appendChild(htmlSpan('Een figuur bestaat uit '));
  oe_112016_5.appendChild(maakMarkering('332','#bbdefb',true));
  oe_112016_5.appendChild(htmlSpan(' stippen. <br>Bereken het nummer van deze figuur.'));

  const oe_112016_6 = document.createElement('span');
  oe_112016_6.appendChild(maakMarkering('332','#bbdefb',true));
  oe_112016_6.appendChild(htmlSpan(' = 3<i>n</i> + 2'));

  const oe_112016_7 = document.createElement('span');
  oe_112016_7.appendChild(htmlSpan('332 <span class="markeer-lila">- 2</span> = 3<i>n</i> + 2 <span class="markeer-lila">- 2</span>'));

  const oe_112016_8 = document.createElement('span');
  oe_112016_8.appendChild(htmlSpan('330 = 3<i>n</i>'));

  const oe_112016_9 = document.createElement('span');
  oe_112016_9.appendChild(htmlSpan('330 <span class="markeer-lila">: 3</span> = 3<i>n</i> <span class="markeer-lila">: 3</span>'));

  const oe_112016_10 = document.createElement('span');
  oe_112016_10.appendChild(htmlSpan('110 = <i>n</i>'));

  const oe_112016_11 = document.createElement('span');
  oe_112016_11.appendChild(htmlSpan('Het nummer van deze figuur is 110.'));

  const inhoud = maakOefening({
    id:'oe_112016', nummer:'?', soort:'inoefenen',
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
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='De eerste vier figuren van een figuurrij zijn gegeven.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
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

  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(null, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }  

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_112016_2, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const tbodyA = maakNestedTabel(tbody,'4.19%');
  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['40%', '15%', '15%', '15%', '15%'];

  const matrix = [
    [
      { inhoud: 'nummer', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'aantal stippen', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '8', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '11', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '14', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(tbodyA, 2, 5, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody,'0.3cm');
  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_112016_3, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_112016_4, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  voegWitruimteToe(tbody,'0.3cm');
  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_112016_5, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van d */
  {
    const _tr_d_0 = document.createElement('tr');
    const _td_d_0 = maakSlTd(oe_112016_6, false);
    _td_d_0.classList.add('kolom-links');
    _tr_d_0.appendChild(_td_d_0); tbody.appendChild(_tr_d_0);
  }

  /* Schrijflijn 2 van d */
  {
    const _tr_d_1 = document.createElement('tr');
    const _td_d_1 = maakSlTd(oe_112016_7, false);
    _td_d_1.classList.add('kolom-links');
    _tr_d_1.appendChild(_td_d_1); tbody.appendChild(_tr_d_1);
  }

  /* Schrijflijn 3 van d */
  {
    const _tr_d_2 = document.createElement('tr');
    const _td_d_2 = maakSlTd(oe_112016_8, false);
    _td_d_2.classList.add('kolom-links');
    _tr_d_2.appendChild(_td_d_2); tbody.appendChild(_tr_d_2);
  }

  /* Schrijflijn 4 van d */
  {
    const _tr_d_3 = document.createElement('tr');
    const _td_d_3 = maakSlTd(oe_112016_9, false);
    _td_d_3.classList.add('kolom-links');
    _tr_d_3.appendChild(_td_d_3); tbody.appendChild(_tr_d_3);
  }

  /* Schrijflijn 5 van d */
  {
    const _tr_d_4 = document.createElement('tr');
    const _td_d_4 = maakSlTd(oe_112016_10, false);
    _td_d_4.classList.add('kolom-links');
    _tr_d_4.appendChild(_td_d_4); tbody.appendChild(_tr_d_4);
  }

  /* Schrijflijn 6 van d */
  {
    const _tr_d_5 = document.createElement('tr');
    const _td_d_5 = maakSlTd(oe_112016_11, false);
    _td_d_5.classList.add('kolom-links');
    _tr_d_5.appendChild(_td_d_5); tbody.appendChild(_tr_d_5);
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
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_112016.svg'; /* ← bestandsnaam */
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
