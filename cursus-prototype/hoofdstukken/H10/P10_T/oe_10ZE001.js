/* ============================================================
   H10 / P10_T / oe_10ZE001.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE001_2 = document.createElement('span');
  oe_10ZE001_2.appendChild(htmlSpan('Bereken hoeveel blikken je nodig hebt om een driehoekstoren te bouwen met 6 blikken op de onderste rij.'));

  const oe_10ZE001_3 = document.createElement('span');
  oe_10ZE001_3.appendChild(htmlSpan('6 + 5 + 4 + 3 + 2 + 1 = 21'));

  const oe_10ZE001_4 = document.createElement('span');
  oe_10ZE001_4.appendChild(htmlSpan('Je hebt dan 21 blokken nodig.'));

  const oe_10ZE001_5 = document.createElement('span');
  oe_10ZE001_5.appendChild(htmlSpan('Noteer nog vier andere aantallen blikken waarmee je een driehoekstoren kunt bouwen.'));

  const oe_10ZE001_6 = document.createElement('span');
  oe_10ZE001_6.appendChild(htmlSpan('Dit lukt nog met bijvoorbeeld 1 blik, 3 blikken (1 + 2), 6 blikken (1 + 2 + 3), '));

  const oe_10ZE001_7 = document.createElement('span');
  oe_10ZE001_7.appendChild(htmlSpan('15 blikken (1 + 2 + 3 + 4 + 5) ...'));

  const inhoud = maakOefening({
    id:'oe_10ZE001', nummer:'?', soort:'voorbeeld',
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
    { const _v='In de supermarkt zijn erwten in blik in promotie. Jorre, een enthousiaste medewerker, stapelt midden in de winkel een toren van blikken in de vorm van een driehoek.<br>Een voorbeeld van zo\'n driehoekstoren is afgebeeld. De toren heeft 4 blikken op de onderste rij en bestaat in totaal uit 10 blikken.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);
  voegWitruimteToe(tbody);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    _trLbl.dataset.figuur = 'afbeelding1';
    const _tdLbl = maakOpTdaz('a', oe_10ZE001_2, false);
    _tdLbl.querySelector('.rij').style.maxWidth = '60%';
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }
  voegWitruimteToe(tbody,'0.3cm');

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_10ZE001_3, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_10ZE001_4, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  voegWitruimteToe(tbody);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_10ZE001_5, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    const _td_b_0 = maakSlTd(oe_10ZE001_6, false);
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    const _td_b_1 = maakSlTd(oe_10ZE001_7, false);
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* ---- Span-variabelen ---- */
  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('Jorre krijgt van zijn chef 40 blikken.'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('Bereken hoeveel lagen de toren telt.'));

  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan('1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36  en  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45'));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('De toren telt 8 lagen.'));

  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan('Bereken het aantal blikken dat niet in de toren staat'));

  const oe_7 = document.createElement('span');
  oe_7.appendChild(htmlSpan('Er staan 4 (= 40 - 36) blikken niet in de toren.'));

  const oe_8 = document.createElement('span');
  oe_8.appendChild(htmlSpan('Jorre maakt een toren van 10 blikken hoog.'));

  const oe_9 = document.createElement('span');
  oe_9.appendChild(htmlSpan('Noteer het aantal blikken op de onderste rij van deze toren.'));

  const oe_10 = document.createElement('span');
  oe_10.appendChild(htmlSpan('Er staan 10 blikken op de onderste rij.'));

  const oe_11 = document.createElement('span');
  oe_11.appendChild(htmlSpan('Bereken het totaal aantal blikken in de toren.'));

  const oe_12 = document.createElement('span');
  oe_12.appendChild(htmlSpan('1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55'));

  const oe_13 = document.createElement('span');
  oe_13.appendChild(htmlSpan('De toren telt dan 55 blikken.'));

  voegWitruimteToe(tbody);

  /* ---- Opgave c ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('c', oe_1, false);
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
      const tdLbl = maakOpTdaz('1', oe_2, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_3, false);
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

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody);

  /* ---- Opgave d ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('d', oe_8, false);
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
      const tdLbl = maakOpTdaz('1', oe_9, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_10, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', oe_11, false);
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
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_13, false);
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
      _img.src = 'afbeeldingen/oe_10ZE001.svg'; /* ← bestandsnaam */
      _img.style.width     = '80%';
      _img.style.height    = '100%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
