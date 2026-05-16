/* ============================================================
   H11 / P11_ZE / oe_11ZE005.js
   soort: test
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_11ZE005_2 = document.createElement('span');
  oe_11ZE005_2.appendChild(htmlSpan('Onderzoek met behulp van een tabel de regelmaat in de zijden van de vierkanten.<br> Noteer een formule om de zijde <i>z</i> van een vierkant te berekenen in functie van het nummer <i>n</i> van het vierkant.'));

  const oe_11ZE005_7 = document.createElement('span');
  oe_11ZE005_7.appendChild(htmlSpan('<i>z</i> = 2<i>n</i> - 1'));

  const oe_11ZE005_3 = document.createElement('span');
  oe_11ZE005_3.appendChild(htmlSpan('Onderzoek met behulp van een tabel de regelmaat in de coördinaten van de punten rechtsboven van de vierkanten. Noteer een formule voor het eerste coördinaatgetal <i>x</i> en een formule voor het tweede coördinaatgetal <i>y</i>.'));

  const oe_11ZE005_8 = document.createElement('span');
  oe_11ZE005_8.appendChild(htmlSpan('<i>x</i> = <i>n</i> + 1'));

  const oe_11ZE005_9 = document.createElement('span');
  oe_11ZE005_9.appendChild(htmlSpan('<i>y</i> = <i>n</i> + 1'));

  const oe_11ZE005_4 = document.createElement('span');
  oe_11ZE005_4.appendChild(htmlSpan('Bereken van vierkant 10 de coördinaat van ...'));

  const oe_11ZE005_5 = document.createElement('span');
  oe_11ZE005_5.appendChild(htmlSpan('Eén van de vierkanten bestaat uit 625 roostervierkantjes.<br> Noteer de coördinaat van ELK hoekpunt van dit vierkant.'));

  const oe_11ZE005_10 = document.createElement('span');
  const oe_11ZE005_10_b1 = maakSpanBreedte('8cm', 'De zijde van het vierkant is dan 25.');
  oe_11ZE005_10.appendChild(oe_11ZE005_10_b1);
  oe_11ZE005_10.appendChild(htmlSpan('rechtsboven: (13, 13)'));

  const oe_11ZE005_11 = document.createElement('span');
  const oe_11ZE005_11_b1 = maakSpanBreedte('8cm', '2<i>n</i> + 1 = 25');
  oe_11ZE005_11.appendChild(oe_11ZE005_11_b1);
  oe_11ZE005_11.appendChild(htmlSpan('andere hoekpunten: telkens 25 af of bij'));

  const oe_11ZE005_12 = document.createElement('span');
  oe_11ZE005_12.appendChild(maakSpanBreedte('8cm','2<i>n</i> = 24'));
  oe_11ZE005_12.appendChild(htmlSpan('rechtsonder: (13, -12)'));

  const oe_11ZE005_13 = document.createElement('span');
  const oe_11ZE005_13_b1 = maakSpanBreedte('8cm', '<i>n</i> = 12');
  oe_11ZE005_13.appendChild(oe_11ZE005_13_b1);
  oe_11ZE005_13.appendChild(htmlSpan('linksonder: (-12, -12)'));

  const oe_11ZE005_14 = document.createElement('span');
  oe_11ZE005_14.appendChild(maakSpanBreedte('8cm','het nummer is 12'));
  oe_11ZE005_14.appendChild(htmlSpan('linksboven: (-12, 13)'));

  const inhoud = maakOefening({
    id:'oe_11ZE005', nummer:'?', soort:'test',
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
    _p.style.width = '70%';
    { const _v='In het assenstelsel zijn drie vierkanten getekend.<br>De zijde van vierkant 1 is gelijk aan 1, de zijde van vierkant 2 is gelijk aan 3, de zijde van vierkant 3 is gelijk aan 5 …'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_11ZE005_2, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '70%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody,'0.8cm');

  {
    /* tabel voor vraag a */
    const breedte1 = '0.5cm';
    const breedte2 = '7cm';

    const oe_113K05_tabel = document.createElement('div');
    oe_113K05_tabel.classList.add('opl');
    oe_113K05_tabel.style.cssText = `
      position: absolute;
      top: 0; left: calc(0.65cm + ${breedte1});
      z-index: 10;
    `;

    const _t = document.createElement('table');
    _t.style.cssText = `border-collapse: collapse; font-size: inherit;`;
    const _thead = [['nummer vierkant <i>n</i>', '\u00A0\u00A0\u00A0\u00A01\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A02\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A03\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A04\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A05\u00A0\u00A0\u00A0\u00A0'],
                    ['zijde <i>z</i>', '\u00A0\u00A0\u00A0\u00A01\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A03\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A05\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A07\u00A0\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A09\u00A0\u00A0\u00A0\u00A0'],];
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
  }

  /* Schrijflijn 3 van a */
  {
    const _tr_a_2 = document.createElement('tr');
    const _td_a_2 = maakSlTd(oe_11ZE005_7, false);
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_11ZE005_3, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody,'0.3cm');

  {
    /* tabel voor vraag b */
    const breedte1 = '0.5cm';
    const breedte2 = '7cm';

    const oe_113K05_tabel = document.createElement('div');
    oe_113K05_tabel.classList.add('opl');
    oe_113K05_tabel.style.cssText = `
      position: absolute;
      top: 0; left: calc(0.65cm + ${breedte1});
      z-index: 10;
    `;

    const _t = document.createElement('table');
    _t.style.cssText = `border-collapse: collapse; font-size: inherit;`;
    const _thead = [['nummer vierkant', '1', '2', '3', '4', '5'],
                    ['coördinaat punt rechtsboven', '(2, 2)', '(3, 3)', '(4, 4)', '(5, 5)', '(6, 6)'],];
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
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    const _td_b_2 = maakSlTd(oe_11ZE005_8, false);
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    const _td_b_3 = maakSlTd(oe_11ZE005_9, false);
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', oe_11ZE005_4, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('het hoekpunt rechtsboven.'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('<i>n</i> + 1 voor <i>n</i> = 10:'));

  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan('10 + 1 = 11'));

  const oe_4 = document.createElement('span');
  oe_4.appendChild(htmlSpan('De coördinaat is (11, 11).'));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('elk ander hoekpunt.'));

  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan('De zijde van dit vierkant is'));

  const oe_6b = document.createElement('span');
  oe_6b.appendChild(htmlSpan('2 · 10 + 1 = 21 lang.'));

  const oe_8 = document.createElement('span');
  oe_8.appendChild(htmlSpan('andere hoekpunten: telkens 21 af of bij'));

  const oe_9 = document.createElement('span');
  const oe_9_b1 = maakSpanBreedte('0.5cm', '');
  oe_9.appendChild(oe_9_b1);
  oe_9.appendChild(htmlSpan('rechtsonder: (11, -10)'));

  const oe_10 = document.createElement('span');
  const oe_10_b1 = maakSpanBreedte('0.5cm', '');
  oe_10.appendChild(oe_10_b1);
  oe_10.appendChild(htmlSpan('linksonder: (-10, -10)'));

  const oe_11 = document.createElement('span');
  const oe_11_b1 = maakSpanBreedte('0.5cm', '');
  oe_11.appendChild(oe_11_b1);
  oe_11.appendChild(htmlSpan('linksboven: (-10, 11)'));

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
      const tdLblL = maakOpTdaz('1', oe_1, false);
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('2', oe_5, false);
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 1 — oplossingen */
    {
      const oplL1 = [
        oe_2,
        oe_3,
        oe_4,
        null,
        null,
        null
      ];
      const oplR1 = [
        oe_6,
        oe_6b,
        oe_8,
        oe_9,
        oe_10,
        oe_11
      ];
      for (let i=0; i<6; i++) {
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

  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('d', oe_11ZE005_5, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van d */
  {
    const _tr_d_0 = document.createElement('tr');
    const _td_d_0 = maakSlTd(oe_11ZE005_10, false);
    _td_d_0.classList.add('kolom-links');
    _tr_d_0.appendChild(_td_d_0); tbody.appendChild(_tr_d_0);
  }

  /* Schrijflijn 2 van d */
  {
    const _tr_d_1 = document.createElement('tr');
    const _td_d_1 = maakSlTd(oe_11ZE005_11, false);
    _td_d_1.classList.add('kolom-links');
    _tr_d_1.appendChild(_td_d_1); tbody.appendChild(_tr_d_1);
  }

  /* Schrijflijn 3 van d */
  {
    const _tr_d_2 = document.createElement('tr');
    const _td_d_2 = maakSlTd(oe_11ZE005_12, false);
    _td_d_2.classList.add('kolom-links');
    _tr_d_2.appendChild(_td_d_2); tbody.appendChild(_tr_d_2);
  }

  /* Schrijflijn 4 van d */
  {
    const _tr_d_3 = document.createElement('tr');
    const _td_d_3 = maakSlTd(oe_11ZE005_13, false);
    _td_d_3.classList.add('kolom-links');
    _tr_d_3.appendChild(_td_d_3); tbody.appendChild(_tr_d_3);
  }

  /* Schrijflijn 5 van d */
  {
    const _tr_d_4 = document.createElement('tr');
    const _td_d_4 = maakSlTd(oe_11ZE005_14, false);
    _td_d_4.classList.add('kolom-links');
    _tr_d_4.appendChild(_td_d_4); tbody.appendChild(_tr_d_4);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '30%'); /* ← breedte aanpassen indien nodig */
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
      _img.src = 'afbeeldingen/oe_11ZE005.svg'; /* ← bestandsnaam */
      _img.style.width     = '150%';
      _img.style.height    = '150%';
      _img.style.marginTop = '20px';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
