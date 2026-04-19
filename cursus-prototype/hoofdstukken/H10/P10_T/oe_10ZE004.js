/* ============================================================
   H10 / P10_ZE / oe_10ZE004.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE004_1 = document.createElement('span');
  oe_10ZE004_1.appendChild(htmlSpan('Schets een tweede trap zodat beide trappen samen een rechthoek vormen met een basis van 12 blokjes.'));

  const oe_10ZE004_3 = document.createElement('span');
  oe_10ZE004_3.appendChild(htmlSpan('Bestudeer de rechthoek grondig.'));

  const inhoud = maakOefening({
    id:'oe_10ZE004', nummer:'?', soort:'voorbeeld',
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
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '60%';
    { const _v='De figuur toont een trap. De onderste rij van de trap bestaat uit 12 blokjes, de rij erboven uit 11, de rij daarboven uit 10 ... <br>Het aantal blokjes van de trap is dus <br>1 + 2 + 3 + ... + 11 + 12.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_10ZE004_1, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_10ZE004_3, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* ---- Span-variabelen ---- */
  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('Bestudeer de rechthoek grondig.'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('Hoeveel blokjes hoog is de rechthoek?'));

  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan('13'));

  const oe_4 = document.createElement('span');
  oe_4.appendChild(htmlSpan('Hoeveel blokjes breed is de rechthoek?'));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('12'));

  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan('Bereken het aantal blokjes in de rechthoek.'));

  const oe_7 = document.createElement('span');
  oe_7.appendChild(htmlSpan('13 · 12 = 156'));


  /* ---- Opgave b ---- */

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
    const TW = '7.5cm';

    /* rij 1 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTdGeen('1', oe_2, TW, false, oe_3);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      tbody2.appendChild(tr);
    }

    /* rij 2 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTdGeen('2', oe_4, TW, false, oe_5);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      tbody2.appendChild(tr);
    }

    /* rij 3 */
    {
      const tr = document.createElement('tr');
      const tdL = maakOpTdGeen('3', oe_6, TW, false, oe_7);
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  /* ---- Span-variabelen ---- */
  const oe_10ZE004_4 = document.createElement('span');
  oe_10ZE004_4.appendChild(htmlSpan('De rechthoek bestaat uit twee trappen. <br>Bereken het aantal blokjes van een trap met als basis 12 blokjes.'));

  const oe_10ZE004_5 = document.createElement('span');
  oe_10ZE004_5.appendChild(htmlSpan('156 : 2 = 78'));

  const oe_10ZE004_6 = document.createElement('span');
  oe_10ZE004_6.appendChild(htmlSpan('De trap telt 78 blokjes.'));

  voegWitruimteToe(tbody);

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_10ZE004_4, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_10ZE004_5, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* Schrijflijn 2 van c */
  {
    const _tr_c_1 = document.createElement('tr');
    const _td_c_1 = maakSlTd(oe_10ZE004_6, false);
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }




  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '40%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_10ZE004.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '60%'; /* ← breedte aanpassen indien nodig */
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
