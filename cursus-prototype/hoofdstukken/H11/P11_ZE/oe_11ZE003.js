/* ============================================================
   H11 / P11_ZE / oe_ZE11003.js
   soort: test
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_ZE11003_2 = document.createElement('span');
  oe_ZE11003_2.appendChild(htmlSpan('Noteer een formule waarmee je het ...'));

  const oe_ZE11003_3 = document.createElement('span');
  oe_ZE11003_3.appendChild(htmlSpan('Bereken de coördinaat van het laagste punt van driehoek 21.'));

  const oe_ZE11003_4 = document.createElement('span');
  oe_ZE11003_4.appendChild(maakSpanBreedte('8cm','(-2<i>n</i> + 5; -0,5<i>n</i> - 0,5) voor <i>n</i> = 21: '));
  oe_ZE11003_4.appendChild(htmlSpan('(-2 · 21 + 5; -0,5 · 21 - 0,5) = (-37; -11)'));

  const oe_ZE11003_6 = document.createElement('span');
  oe_ZE11003_6.appendChild(htmlSpan('De coördinaat van het laagste punt van die driehoek is (-37; -11).'));

  const oe_ZE11003_7 = document.createElement('span');
  oe_ZE11003_7.appendChild(htmlSpan('Van een driehoek is de coördinaat van het laagste punt (-195; -50,5). <br>Bereken de coördinaat van het laagste punt dat vijf driehoeken verder naar links ligt.'));

  const oe_ZE11003_8 = document.createElement('span');
  oe_ZE11003_8.appendChild(maakSpanBreedte('8cm','-195 - 5 · 2 = -205'));
  oe_ZE11003_8.appendChild(htmlSpan('-50,5 - 5 · 0,5 = -53'));

  const oe_ZE11003_10 = document.createElement('span');
  oe_ZE11003_10.appendChild(htmlSpan('De coördinaat van het laagste punt van die driehoek is (-205; -53).'));

  const oe_ZE11003_11 = document.createElement('span');
  oe_ZE11003_11.appendChild(htmlSpan('Van het laagste punt van één van de driehoeken is het eerste coördinaatgetal -25. <br>Noteer het tweede coördinaatgetal van dit laagste punt.'));

  const oe_ZE11003_12 = document.createElement('span');
  const oe_ZE11003_12_b1 = maakSpanBreedte('8cm', '-2<i>n</i> + 5 = -25');
  oe_ZE11003_12.appendChild(oe_ZE11003_12_b1);
  oe_ZE11003_12.appendChild(htmlSpan('-0,5<i>n</i> - 0,5 voor <i>n</i> = 15'));

  const oe_ZE11003_13 = document.createElement('span');
  const oe_ZE11003_13_b1 = maakSpanBreedte('8cm', '-2<i>n</i> = -30');
  oe_ZE11003_13.appendChild(oe_ZE11003_13_b1);
  oe_ZE11003_13.appendChild(htmlSpan('-0,5 · 15 - 0,5 = -8'));

  const oe_ZE11003_14 = document.createElement('span');
  const oe_ZE11003_14_b1 = maakSpanBreedte('8cm', '<i>n</i> = 15');
  oe_ZE11003_14.appendChild(oe_ZE11003_14_b1);
  oe_ZE11003_14.appendChild(htmlSpan('Het tweede coördinaatgetal is -8.'));

  const oe_ZE11003_15 = document.createElement('span');
  const oe_ZE11003_15_b1 = maakSpanBreedte('8cm', 'Het figuurnummer is 15.');
  oe_ZE11003_15.appendChild(oe_ZE11003_15_b1);

  const oe_ZE11003_16 = document.createElement('span');
  oe_ZE11003_16.appendChild(htmlSpan('Van het laagste punt van één van de driehoeken is het tweede coördinaatgetal -25. <br>Noteer het eerste coördinaatgetal van dit laagste punt.'));

  const oe_ZE11003_18 = document.createElement('span');
  const oe_ZE11003_18_b1 = maakSpanBreedte('8cm', '-0,5<i>n</i> - 0,5 = -25');
  oe_ZE11003_18.appendChild(oe_ZE11003_18_b1);
  oe_ZE11003_18.appendChild(htmlSpan('-2<i>n</i> + 5 voor <i>n</i> = 49'));

  const oe_ZE11003_19 = document.createElement('span');
  const oe_ZE11003_19_b1 = maakSpanBreedte('8cm', '-0,5<i>n</i> = -24,5');
  oe_ZE11003_19.appendChild(oe_ZE11003_19_b1);
  oe_ZE11003_19.appendChild(htmlSpan('-2 · 49 + 5 = -93'));

  const oe_ZE11003_20 = document.createElement('span');
  const oe_ZE11003_20_b1 = maakSpanBreedte('8cm', '<i>n</i> = 49');
  oe_ZE11003_20.appendChild(oe_ZE11003_20_b1);
  oe_ZE11003_20.appendChild(htmlSpan('Het eerste coördinaatgetal is -93.'));

  const oe_ZE11003_21 = document.createElement('span');
  const oe_ZE11003_21_b1 = maakSpanBreedte('8cm', 'Het figuurnummer is 49.');
  oe_ZE11003_21.appendChild(oe_ZE11003_21_b1);

  const inhoud = maakOefening({
    id:'oe_ZE11003', nummer:'?', soort:'test',
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
    _p.style.width = '50%';
    { const _v='In het assenstelsel zie je driehoeken die steeds groter van oppervlakte worden. Je kunt de rij naar links voortzetten.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

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
    _td_a_2.querySelector('.sl').style.maxWidth = 'calc(00% - var(--insprong-stap))';
    _td_a_2.querySelector('.sl').style.flex = 'none';
    _td_a_2.classList.add('kolom-links');
    _tr_a_2.appendChild(_td_a_2); tbody.appendChild(_tr_a_2);
  }

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', 'Vul de tabel aan.', false);
    _tdLbl.dataset.figuur = 'afbeelding1';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const tbodyA = maakNestedTabel(tbody,'4.19%');
  const rijHoogtes = ['0.8cm', '0.8cm'];
  const kolomBreedtes = ['30%', '14%', '14%', '14%', '14%', '14%'];

  const matrix = [
    [
      { inhoud: 'nummer driehoek <i>n</i>', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'coördinaat laagste punt', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '(3; -1)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(1; -1,5)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(-1; -2)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(-3; -2,5)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '(-5; -3)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(tbodyA, 2, 6, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_ZE11003_2, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('1ste coördinaatgetal <i>x</i> kunt berekenen in functie van het nummer <i>n</i>.'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('<i>x</i> = -2<i>n</i> + 5'));

  const oe_4 = document.createElement('span');
  oe_4.appendChild(htmlSpan('2de coördinaatgetal <i>y</i> kunt berekenen in functie van het nummer <i>n</i>.'));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('<i>y</i> = -0,5<i>n</i> - 0,5'));

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
      tdLblL.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblL.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblR = maakOpTdaz('2', oe_4, false);
      tdLblR.querySelector('.rij').style.alignItems = 'flex-start';
      tdLblR.querySelector('.lbl').style.paddingTop = '0cm';
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 1 — oplossingen */
    {
      const oplL1 = [
        oe_2
      ];
      const oplR1 = [
        oe_5
      ];
      for (let i=0; i<1; i++) {
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
    const _tdLbl = maakOpTdaz('c', oe_ZE11003_3, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(oe_ZE11003_4, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* Schrijflijn 3 van c */
  {
    const _tr_c_2 = document.createElement('tr');
    const _td_c_2 = maakSlTd(oe_ZE11003_6, false);
    _td_c_2.classList.add('kolom-links');
    _tr_c_2.appendChild(_td_c_2); tbody.appendChild(_tr_c_2);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave d */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('d', oe_ZE11003_7, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van d */
  {
    const _tr_d_0 = document.createElement('tr');
    const _td_d_0 = maakSlTd(oe_ZE11003_8, false);
    _td_d_0.classList.add('kolom-links');
    _tr_d_0.appendChild(_td_d_0); tbody.appendChild(_tr_d_0);
  }

  /* Schrijflijn 3 van d */
  {
    const _tr_d_2 = document.createElement('tr');
    const _td_d_2 = maakSlTd(oe_ZE11003_10, false);
    _td_d_2.classList.add('kolom-links');
    _tr_d_2.appendChild(_td_d_2); tbody.appendChild(_tr_d_2);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave e */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('e', oe_ZE11003_11, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van e */
  {
    const _tr_e_0 = document.createElement('tr');
    const _td_e_0 = maakSlTd(oe_ZE11003_12, false);
    _td_e_0.classList.add('kolom-links');
    _tr_e_0.appendChild(_td_e_0); tbody.appendChild(_tr_e_0);
  }

  /* Schrijflijn 2 van e */
  {
    const _tr_e_1 = document.createElement('tr');
    const _td_e_1 = maakSlTd(oe_ZE11003_13, false);
    _td_e_1.classList.add('kolom-links');
    _tr_e_1.appendChild(_td_e_1); tbody.appendChild(_tr_e_1);
  }

  /* Schrijflijn 3 van e */
  {
    const _tr_e_2 = document.createElement('tr');
    const _td_e_2 = maakSlTd(oe_ZE11003_14, false);
    _td_e_2.classList.add('kolom-links');
    _tr_e_2.appendChild(_td_e_2); tbody.appendChild(_tr_e_2);
  }

  /* Schrijflijn 4 van e */
  {
    const _tr_e_3 = document.createElement('tr');
    const _td_e_3 = maakSlTd(oe_ZE11003_15, false);
    _td_e_3.classList.add('kolom-links');
    _tr_e_3.appendChild(_td_e_3); tbody.appendChild(_tr_e_3);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave f */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('f', oe_ZE11003_16, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van f */
  {
    const _tr_f_0 = document.createElement('tr');
    const _td_f_0 = maakSlTd(oe_ZE11003_18, false);
    _td_f_0.classList.add('kolom-links');
    _tr_f_0.appendChild(_td_f_0); tbody.appendChild(_tr_f_0);
  }

  /* Schrijflijn 2 van f */
  {
    const _tr_f_1 = document.createElement('tr');
    const _td_f_1 = maakSlTd(oe_ZE11003_19, false);
    _td_f_1.classList.add('kolom-links');
    _tr_f_1.appendChild(_td_f_1); tbody.appendChild(_tr_f_1);
  }

  /* Schrijflijn 3 van f */
  {
    const _tr_f_2 = document.createElement('tr');
    const _td_f_2 = maakSlTd(oe_ZE11003_20, false);
    _td_f_2.classList.add('kolom-links');
    _tr_f_2.appendChild(_td_f_2); tbody.appendChild(_tr_f_2);
  }

  /* Schrijflijn 4 van f */
  {
    const _tr_f_3 = document.createElement('tr');
    const _td_f_3 = maakSlTd(oe_ZE11003_21, false);
    _td_f_3.classList.add('kolom-links');
    _tr_f_3.appendChild(_td_f_3); tbody.appendChild(_tr_f_3);
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
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_11ZE003.svg'; /* ← bestandsnaam */
      _img.style.width     = '100%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
