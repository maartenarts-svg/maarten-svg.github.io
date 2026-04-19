/* ============================================================
   H10 / P10_ZE / oe_10ZE002.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE002_1 = document.createElement('span');
  oe_10ZE002_1.appendChild(htmlSpan('Teken zelf de voorstelling van de driehoeksgetallen met basis 4 en 5.'));

  const oe_10ZE002_2 = document.createElement('span');
  oe_10ZE002_2.appendChild(htmlSpan('Vul de tabel aan.'));

  const oe_10ZE002_4 = document.createElement('span');
  oe_10ZE002_4.appendChild(htmlSpan('Welk getal moet je bij het driehoeksgetal met basis 9 optellen om dat met basis 10 te krijgen?'));

  const oe_10ZE002_5 = document.createElement('span');
  oe_10ZE002_5.appendChild(htmlSpan('Je moet er 10 bij optellen.'));

  const inhoud = maakOefening({
    id:'oe_10ZE002', nummer:'?', soort:'voorbeeld',
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
    { const _v='Bekijk de voorstelling van de driehoeksgetallen met basis 1, 2 en 3.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_10ZE002_1, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

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

  voegWitruimteToe(tbody);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_10ZE002_2, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody);

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['20%', '8%', '8%', '8%', '8%', '8%', '8%', '8%', '8%', '8%', '8%'];

  const matrix = [
    [
      { inhoud: 'basis', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '7', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '8', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '9', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'driehoeksgetal', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '15', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '21', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '28', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '36', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '45', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '55', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper = document.createElement('div');
  tabelWrapper.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper.style.marginTop = '-0.5cm';  // ← HIER AANPASSEN
  tbody.appendChild(tabelWrapper);
  maakZichtbareTabel(tabelWrapper, 2, 11, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_10ZE002_4, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_10ZE002_5, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* ---- Span-variabelen ---- */
  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('Het driehoeksgetal 210 heeft als basis 20.'));

  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan('Bereken het driehoeksgetal met basis 21.'));

  const oe_4 = document.createElement('span');
  oe_4.appendChild(htmlSpan('210 + 21 = 231'));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('Het driehoeksgetal 231 heeft als basis 21.'));

  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan('Bereken het driehoeksgetal met basis 19.'));

  const oe_7 = document.createElement('span');
  oe_7.appendChild(htmlSpan('210 - 20 = 190'));

  const oe_8 = document.createElement('span');
  oe_8.appendChild(htmlSpan('Het driehoeksgetal 190 heeft als basis 19.'));

  voegWitruimteToe(tbody);  

  /* ---- Opgave d ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('d', oe_2, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* hulptabel voor subopgaven */
  {
    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbody.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '4.19%';
    const col2 = document.createElement('col'); col2.style.width = '95.81%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const trtabel = document.createElement('tr');
    const tdleer  = document.createElement('td');
    trtabel.appendChild(tdleer);
    const tdtabel = document.createElement('td');
    const {tbody: tbody2} = maakOefTabel(tdtabel, 1, false);

    /* subopgave 1 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('1', oe_3, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_4, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_5, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', oe_6, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_7, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_8, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
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
      fetch('afbeeldingen/oe_10ZE003.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '85%'; /* ← breedte aanpassen indien nodig */
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
