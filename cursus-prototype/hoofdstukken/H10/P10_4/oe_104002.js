/* ============================================================
   H10 / P10_4 / oe_104002.js
   soort: ontdek
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_104002_1 = document.createElement('span');
  oe_104002_1.appendChild(htmlSpan('Noteer in de eerste twee rechthoeken de oppervlakte ervan in symbolen.'));

  const oe_104002_2 = document.createElement('span');
  oe_104002_2.appendChild(htmlSpan('De derde rechthoek bestaat uit twee kleinere rechthoeken.'));

  const inhoud = maakOefening({
    id:'oe_104002', nummer:'?', soort:'ontdek',
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
    { const _v='Rechthoeken zijn gegeven.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_104002_1, false);
    _tdLbl.style.alignItems = 'middle';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
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
    const _tdLbl = maakOpTdaz('b', oe_104002_2, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'middle';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* ---- Span-variabelen ---- */
  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan('De derde rechthoek bestaat uit twee kleinere rechthoeken.'));

  const oe_7 = document.createElement('span');
  oe_7.appendChild(htmlSpan('Noteer in elke kleinere rechthoek de oppervlakte ervan in symbolen.'));

  const oe_8 = document.createElement('span');
  oe_8.appendChild(htmlSpan('Noteer bij de pijl de totale lengte van de grote rechthoek.'));

  const oe_9 = document.createElement('span');
  oe_9.appendChild(htmlSpan('De oppervlakte van de volledige rechthoek is de som van de oppervlaktes van de kleinere rechthoeken. <br>Noteer deze som.'));

  const oe_11 = document.createElement('span');
  oe_11.appendChild(htmlSpan('15<i>x</i> + 6'));

  const oe_10 = document.createElement('span');
  oe_10.appendChild(htmlSpan('De oppervlakte van de volledige rechthoek kun je ook berekenen door de totale lengte te vermenigvuldigen met de breedte. <br>Noteer op deze manier de oppervlakte van de rechthoek.'));

  const oe_12 = document.createElement('span');
  oe_12.appendChild(htmlSpan('3(5<i>x</i> + 2)'));

  const oe_13 = document.createElement('span');
  oe_13.appendChild(htmlSpan('De bewerkingen uit '));
  const oe_13a = htmlSpan('3|');
  oe_13a.style.fontWeight = 'bold';
  oe_13a.style.color = 'var(--groen-donker)';
  const oe_13b = htmlSpan('4|');
  oe_13b.style.fontWeight = 'bold';
  oe_13b.style.color = 'var(--groen-donker)';
  const oe_13c = htmlSpan(' en ');
  const oe_13d = htmlSpan(' hebben hetzelfde resultaat. <br>Noteer welke eigenschap je hierin herkent.');
  oe_13.appendChild(oe_13a);
  oe_13.appendChild(oe_13c);
  oe_13.appendChild(oe_13b);
  oe_13.appendChild(oe_13d);

  const oe_14 = document.createElement('span');
  oe_14.appendChild(htmlSpan('de distributieve eigenschap'));

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
      const tdLbl = maakOpTdaz('1', oe_7, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', oe_8, false);
      tdLbl.classList.add('kolom-links');
      tdLbl.style.paddingBottom = '0.2cm';
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }

    /* subopgave 3 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('3', oe_9, false);
      tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
      tdLbl.style.paddingBottom = '0.6cm';
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_11, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    voegWitruimteToe(tbody2,'0.5cm');

    /* subopgave 4 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('4', oe_10, false);
      tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
      tdLbl.style.paddingBottom = '0.6cm';
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_12, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    voegWitruimteToe(tbody2,'0.5cm');

    /* subopgave 5 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('5', oe_13, false);
      tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
      tdLbl.style.paddingBottom = '0.1cm';
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_14, false);
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
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_104002.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '65%'; /* ← breedte aanpassen indien nodig */
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
            if (!TOGGLE_TOEGESTAAN) return;
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
