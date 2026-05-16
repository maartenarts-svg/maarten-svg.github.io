/* ============================================================
   H11 / P11_ZE / oe_11ZE004.js
   soort: test
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_11ZE004_1 = document.createElement('span');
  oe_11ZE004_1.appendChild(htmlSpan('Onderzoek met behulp van een tabel de regelmaat in de coördinaten van de linkerpunten van elke driehoek. <br>Noteer een formule voor het eerste coördinaatgetal <i>x</i> en een formule voor het tweede coördinaatgetal <i>y</i>.<br>'));
  const oe_11ZE004_1a = document.createElement('span');
  oe_11ZE004_1a.appendChild(htmlSpan('Tip!'));
  oe_11ZE004_1a.classList.add('theorie');
  oe_11ZE004_1.appendChild(oe_11ZE004_1a);
  oe_11ZE004_1.appendChild(htmlSpan(' Denk aan driehoeksgetallen.'));

  const oe_11ZE004_2 = document.createElement('span');
  oe_11ZE004_2.appendChild(htmlSpan('Van het linkerpunt van een driehoek is het tweede coördinaatgetal 10.'));

  const oe_11ZE004_3 = document.createElement('span');
  oe_11ZE004_3.appendChild(htmlSpan('Van het linkerpunt van een driehoek is het eerste coördinaatgetal 66.<br> Noteer het tweede coördinaatgetal van dit punt.'));

  const oe_11ZE004_8 = document.createElement('span');
  const oe_11ZE004_8_b1 = maakSpanBreedte('8cm', '<i>n</i>(<i>n</i> - 1) : 2 = 66');
  oe_11ZE004_8.appendChild(oe_11ZE004_8_b1);
  oe_11ZE004_8.appendChild(htmlSpan('<i>n</i> + 1 voor <i>n</i> = 12'));

  const oe_11ZE004_9 = document.createElement('span');
  const oe_11ZE004_9_b1 = maakSpanBreedte('8cm', '<i>n</i>(<i>n</i> - 1) = 132');
  oe_11ZE004_9.appendChild(oe_11ZE004_9_b1);
  oe_11ZE004_9.appendChild(htmlSpan('12 + 1 = 13'));

  const oe_11ZE004_10 = document.createElement('span');
  const oe_11ZE004_10_b1 = maakSpanBreedte('8cm', 'Omdat 12 · 11 = 132, is <i>n</i> = 12.');
  oe_11ZE004_10.appendChild(oe_11ZE004_10_b1);
  oe_11ZE004_10.appendChild(htmlSpan('Het 2de coördinaatgetal is 13.'));

  const oe_11ZE004_4 = document.createElement('span');
  oe_11ZE004_4.appendChild(htmlSpan('Bereken de coördinaat van het linkerpunt van driehoek 101.'));

  const oe_11ZE004_11 = document.createElement('span');
  const oe_11ZE004_11_b1 = maakSpanBreedte('8cm', '<i>n</i>(<i>n</i> - 1) : 2 voor <i>n</i> = 101:');
  oe_11ZE004_11.appendChild(oe_11ZE004_11_b1);
  oe_11ZE004_11.appendChild(htmlSpan('<i>n</i> + 1 voor <i>n</i> = 101:'));

  const oe_11ZE004_12 = document.createElement('span');
  const oe_11ZE004_12_b1 = maakSpanBreedte('8cm', '101 · (101 - 1) : 2 = 5 050');
  oe_11ZE004_12.appendChild(oe_11ZE004_12_b1);
  oe_11ZE004_12.appendChild(htmlSpan('101 + 1 = 102'));

  const oe_11ZE004_13 = document.createElement('span');
  oe_11ZE004_13.appendChild(htmlSpan('De coördinaat is (5 050, 102).'));

  const inhoud = maakOefening({
    id:'oe_11ZE004', nummer:'?', soort:'test',
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
    { const _v='In het assenstelsel zijn vijf driehoeken getekend.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
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
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(null, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_11ZE004_1, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody,'1.2cm');

  /* tabel voor vraag a */
  const breedte1 = '0.5cm';
  const breedte2 = '8cm';

  const oe_113K05_tabel = document.createElement('div');
  oe_113K05_tabel.classList.add('opl');
  oe_113K05_tabel.style.cssText = `
    position: absolute;
    top: 0; left: calc(0.65cm + ${breedte1});
    z-index: 10;
  `;

  const _t = document.createElement('table');
  _t.style.cssText = `border-collapse: collapse; font-size: inherit;`;
  const _thead = [['nummer driehoek', '1', '2', '3', '4', '5'],
                  ['coördinaat linkerpunt', '(0, 2)', '(1, 3)', '(3, 4)', '(6, 5)', '(10, 6)'],];
  _thead.forEach((rij, ri) => {
    const tr = document.createElement('tr');
    rij.forEach((cel, ci) => {
      const td = document.createElement('td');
      td.style.cssText = `
        border: 1px solid var(--blauw-oplossing);
        padding: 0.0cm 0.15cm;
        height: 0.86cm;
        font-weight: ${ci === 0 ? 'bold' : 'normal'};
        color: ${ci === 0 ? 'var(--blauw-oplossing)' : 'inherit'};
        font-family: ${ci === 0 ? 'inherit' : 'var(--font-oplossing)'};
      `;
      if (typeof cel === 'string') td.innerHTML = cel;
      else td.appendChild(cel);
      tr.appendChild(td);
    });
    _t.appendChild(tr);
  });
  oe_113K05_tabel.appendChild(_t);

  {
    const trWrap = document.createElement('tr');
    const tdWrap = document.createElement('td');
    tdWrap.style.position = 'relative';

    // de 4 lege schrijflijnen
    const innerTable = document.createElement('table');
    innerTable.classList.add('oef-tabel');
    const innerTbody = document.createElement('tbody');
    for (let i = 0; i < 2; i++) {
        const tr = document.createElement('tr');
        const td = maakSlTd(null, false);
        tr.appendChild(td);
        innerTbody.appendChild(tr);
    }
    innerTable.appendChild(innerTbody);
    tdWrap.appendChild(innerTable);

    // zwevende tabel bovenop
    tdWrap.appendChild(oe_113K05_tabel);

    trWrap.appendChild(tdWrap);
    tbody.appendChild(trWrap);
  }

  const extra_1 = document.createElement('span');
  extra_1.appendChild(htmlSpan('<i>x</i> = <i>n</i>(<i>n</i> - 1) : 2'));

  const extra_2 = document.createElement('span');
  extra_2.appendChild(htmlSpan('<i>y</i> = <i>n</i> + 1'));

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    const _td_a_0 = maakSlTd(extra_1, false);
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    const _td_a_1 = maakSlTd(extra_2, false);
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_11ZE004_2, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const extra2_1 = document.createElement('span');
  extra2_1.appendChild(htmlSpan('Noteer het nummer van deze driehoek.'));

  const extra2_3 = document.createElement('span');
  extra2_3.appendChild(htmlSpan('<i>n</i> + 1 = 10'));

  const extra2_4 = document.createElement('span');
  extra2_4.appendChild(htmlSpan('<i>n</i> = 9'));

  const extra2_5 = document.createElement('span');
  extra2_5.appendChild(htmlSpan('Het nummer van de driehoek is 9.'));

  const extra2_2 = document.createElement('span');
  extra2_2.appendChild(htmlSpan('Noteer het eerste coördinaatgetal van het linkerpunt deze driehoek.'));

  const extra2_6 = document.createElement('span');
  extra2_6.appendChild(htmlSpan('<i>n</i>(<i>n</i> - 1) : 2 voor <i>n</i> = 9'));

  const extra2_7 = document.createElement('span');
  extra2_7.appendChild(htmlSpan('9 · (9 - 1) : 2 = 36'));

  const extra2_8 = document.createElement('span');
  extra2_8.appendChild(htmlSpan('Het 1ste coördinaatgetal is 36.'));

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
    const {tbody: tbody2} = maakOefTabel(tdtabel, 2, true);

    /* rij 1 — labels */
    {
      const trL = document.createElement('tr');
      const tdLblL = maakOpTdaz('1', extra2_1, false);
      tdLblL.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblL.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('2', extra2_2, false);
      tdLblR.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblR.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 1 — oplossingen */
    {
      const oplL1 = [
        extra2_3,
        extra2_4,
        extra2_5,
      ];
      const oplR1 = [
        extra2_6,
        extra2_7,
        extra2_8,
      ];
      for (let i=0; i<3; i++) {
        const tr = document.createElement('tr');
        const tdL1 = maakSlTd(oplL1[i], false);
        tdL1.classList.add('kolom-links');
        tr.appendChild(tdL1);
        const tdR1 = maakSlTd(oplR1[i], false);
        tdR1.classList.add('kolom-rechts');
        tr.appendChild(tdR1);
        tbody2.appendChild(tr);
      }
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_11ZE004_3, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_11ZE004_8, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* Schrijflijn 2 van c */
  {
    const _tr_c_1 = document.createElement('tr');
    const _td_c_1 = maakSlTd(oe_11ZE004_9, false);
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }

  /* Schrijflijn 3 van c */
  {
    const _tr_c_2 = document.createElement('tr');
    const _td_c_2 = maakSlTd(oe_11ZE004_10, false);
    _td_c_2.classList.add('kolom-links');
    _tr_c_2.appendChild(_td_c_2); tbody.appendChild(_tr_c_2);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('d', oe_11ZE004_4, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van d */
  {
    const _tr_d_0 = document.createElement('tr');
    const _td_d_0 = maakSlTd(oe_11ZE004_11, false);
    _td_d_0.classList.add('kolom-links');
    _tr_d_0.appendChild(_td_d_0); tbody.appendChild(_tr_d_0);
  }

  /* Schrijflijn 2 van d */
  {
    const _tr_d_1 = document.createElement('tr');
    const _td_d_1 = maakSlTd(oe_11ZE004_12, false);
    _td_d_1.classList.add('kolom-links');
    _tr_d_1.appendChild(_td_d_1); tbody.appendChild(_tr_d_1);
  }

  /* Schrijflijn 3 van d */
  {
    const _tr_d_2 = document.createElement('tr');
    const _td_d_2 = maakSlTd(oe_11ZE004_13, false);
    _td_d_2.classList.add('kolom-links');
    _tr_d_2.appendChild(_td_d_2); tbody.appendChild(_tr_d_2);
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
      _img.src = 'afbeeldingen/oe_11ZE004.svg'; /* ← bestandsnaam */
      _img.style.width     = '80%';
      _img.style.height    = 'auto';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
