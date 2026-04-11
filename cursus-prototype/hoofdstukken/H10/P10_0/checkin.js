/* ============================================================
   H10 / checkin / checkin.js
   soort: ontdek
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const checkin_1 = document.createElement('span');
  checkin_1.appendChild(htmlSpan('De afmetingen van elk bloemperk zijn weergegeven in functie van de zijde <i>z</i> van de zeshoek.'));

  const opgA = htmlSpan('Noteer bij elke uitdrukking met letters de juiste verwoording.<br>Kies uit:');

  const checkin_2 = document.createElement('span');
  checkin_2.appendChild(htmlSpan('Bij techniek wordt een omheining gemaakt voor elk bloemperk.'));

  const inhoud = maakOefening({
    id:'checkin', nummer:'CI', soort:'ontdek',
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
    { const _v='De leerlingenraad beslist om extra bloemperken aan te leggen in drie verschillende vormen: een regelmatige zeshoek, een vierkant en een rechthoek.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', checkin_1, false);
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
    _tr_a_0.appendChild(_td_a_0); 
    tbody.appendChild(_tr_a_0);
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

  /* Schrijflijn 5 van a */
  {
    const _tr_a_4 = document.createElement('tr');
    _tr_a_4.dataset.figuur = 'afbeelding1';
    const _td_a_4 = maakSlTd(null, false);
    _td_a_4.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_4.querySelector('.sl').style.flex = 'none';
    _td_a_4.classList.add('kolom-links');
    _tr_a_4.appendChild(_td_a_4); tbody.appendChild(_tr_a_4);
  }

  /* Schrijflijn 6 van a */
  {
    const _tr_a_5 = document.createElement('tr');
    _tr_a_5.dataset.figuur = 'afbeelding1';
    const _td_a_5 = maakSlTd(null, false);
    _td_a_5.querySelector('.sl').style.maxWidth = 'calc(0% - var(--insprong-stap))';
    _td_a_5.querySelector('.sl').style.flex = 'none';
    _td_a_5.classList.add('kolom-links');
    _tr_a_5.appendChild(_td_a_5); tbody.appendChild(_tr_a_5);
  }

  voegWitruimteToe(tbody,'0.3cm'); 

  /* Start opgave onder figuur */
  const trOnder1 = document.createElement('tr');
  const tdOnder1 = document.createElement('td');
  const rijOnder1 = document.createElement('div');
  rijOnder1.classList.add('rij');
  const lblOnder1 = document.createElement('span');
  lblOnder1.classList.add('lbl', 'subopgave-label');
  rijOnder1.appendChild(lblOnder1);
  const txtOnder1 = document.createElement('span');
  txtOnder1.classList.add('txt');
  txtOnder1.appendChild(opgA);
  rijOnder1.appendChild(txtOnder1);
  tdOnder1.appendChild(rijOnder1);
  trOnder1.appendChild(tdOnder1);
  tbody.appendChild(trOnder1);

  /* keuzemogelijkheden */
  {
    const trKeuze1 = document.createElement('tr');
    const tdKeuze1 = document.createElement('td');
    const rijKeuze1 = document.createElement('div');
    const spanleeg = document.createElement('span');
    spanleeg.classList.add('lbl', 'subopgave-label');
    rijKeuze1.appendChild(spanleeg);
    const keuze1lbl = htmlSpan('(1)');
    keuze1lbl.classList.add('lbl', 'subopgave-label');
    const keuze1tekst = htmlSpan('90 % van de zijde van de zeshoek');
    rijKeuze1.appendChild(keuze1lbl);
    rijKeuze1.appendChild(keuze1tekst);
    tdKeuze1.appendChild(rijKeuze1);
    trKeuze1.appendChild(tdKeuze1);
    tbody.appendChild(trKeuze1);
  }
  {
    const trKeuze1 = document.createElement('tr');
    const tdKeuze1 = document.createElement('td');
    const rijKeuze1 = document.createElement('div');
    const spanleeg = document.createElement('span');
    spanleeg.classList.add('lbl', 'subopgave-label');
    rijKeuze1.appendChild(spanleeg);
    const keuze1lbl = htmlSpan('(2)');
    keuze1lbl.classList.add('lbl', 'subopgave-label');
    const keuze1tekst = htmlSpan('0,3 meter minder dan de zijde van de zeshoek');
    rijKeuze1.appendChild(keuze1lbl);
    rijKeuze1.appendChild(keuze1tekst);
    tdKeuze1.appendChild(rijKeuze1);
    trKeuze1.appendChild(tdKeuze1);
    tbody.appendChild(trKeuze1);
  }
  {
    const trKeuze1 = document.createElement('tr');
    const tdKeuze1 = document.createElement('td');
    const rijKeuze1 = document.createElement('div');
    const spanleeg = document.createElement('span');
    spanleeg.classList.add('lbl', 'subopgave-label');
    rijKeuze1.appendChild(spanleeg);
    const keuze1lbl = htmlSpan('(3)');
    keuze1lbl.classList.add('lbl', 'subopgave-label');
    const keuze1tekst = htmlSpan('10 meter verminderd met het drievoud van de zijde van de zeshoek');
    rijKeuze1.appendChild(keuze1lbl);
    rijKeuze1.appendChild(keuze1tekst);
    tdKeuze1.appendChild(rijKeuze1);
    trKeuze1.appendChild(tdKeuze1);
    tbody.appendChild(trKeuze1);
  }

  voegWitruimteToe(tbody,'0.1cm');

  /* hulptabel voor antwoorden keuzemogelijkheden */
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
    const {tbody: tbody2} = maakOefTabel(tdtabel, 3, false);

    {
      const zijde1 = htmlSpan('<i>z</i> - 0,3');
      const zijde2 = htmlSpan('10 - 3<i>z</i>');
      const zijde3 = htmlSpan('0,9<i>z</i>');
      const juist1 = htmlSpan('(2)');
      const juist2 = htmlSpan('(3)');
      const juist3 = htmlSpan('(1)');

      const TW1 = '1.1cm';
      
      const tr = document.createElement('tr');
      const tdL = maakOpTdKeuzeZ(zijde1, TW1, false, juist1,':','______');
      tdL.classList.add('kolom-links');
      tr.appendChild(tdL);
      const tdM = maakOpTdKeuzeZ(zijde2, TW1, false, juist2,':','______');
      tdM.classList.add('kolom-midden');
      tr.appendChild(tdM);  
      const tdR = maakOpTdKeuzeZ(zijde3, TW1, false, juist3,':','______');
      tdR.classList.add('kolom-rechts');
      tr.appendChild(tdR);
      tbody2.appendChild(tr);

    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', checkin_2, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* hulptabel voor subopgaven */
  {
    /* ---- Span-variabelen ---- */
    const oe_1 = document.createElement('span');
    oe_1.appendChild(htmlSpan('Noteer de afmetingen van de figuren in de cirkeltjes als de basis van de zeshoek 2 m is.'));

    const oe_2 = document.createElement('span');
    oe_2.appendChild(htmlSpan('Bereken voor die afmetingen de omtrek van elke veelhoek.'));

    const oe_3 = document.createElement('span');
    oe_3.appendChild(htmlSpan('Bereken hoeveel meter omheining in totaal nodig is voor deze drie perken.'));

    const oe_4 = document.createElement('span');
    oe_4.appendChild(htmlSpan('berekening (in m): 11,4 + 12 + 7,2 = 30,6'));

    const oe_5 = document.createElement('span');
    oe_5.appendChild(htmlSpan('In totaal is 30,6 m omheining nodig.'));    

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
      const tdLbl = maakOpTdaz('1', oe_1, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }

    /* subopgave 2 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('2', oe_2, false);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
      /* hulptabel voor 3 berekeningen */
      {
        const trhulp2 = document.createElement('tr');
        const tdhulp2 = document.createElement('td');
        trhulp2.appendChild(tdhulp2);
        tbody2.appendChild(trhulp2);

        const tabelhulp2 = document.createElement('table');
        tabelhulp2.style.width = '100%';
        tabelhulp2.style.borderCollapse = 'collapse';
        const colg_2 = document.createElement('colgroup');
        const col1_2 = document.createElement('col'); col1_2.style.width = '4.5%';
        const col2_2 = document.createElement('col'); col2_2.style.width = '95.5%';
        colg_2.appendChild(col1_2); colg_2.appendChild(col2_2);
        tabelhulp2.appendChild(colg_2);
        const tbodyhulp2 = document.createElement('tbody');
        tabelhulp2.appendChild(tbodyhulp2);
        tdhulp2.appendChild(tabelhulp2);

        const trtabel2 = document.createElement('tr');
        const tdleer2  = document.createElement('td');
        trtabel2.appendChild(tdleer2);
        const tdtabel2 = document.createElement('td');
        const {tbody: tbody3} = maakOefTabel(tdtabel2, 3, false);

        {
          const zijde1 = htmlSpan('<i>P</i><sub>rechthoek</sub>');
          const zijde2 = htmlSpan('<i>P</i><sub>zeshoek</sub>');
          const zijde3 = htmlSpan('<i>P</i><sub>vierkant</sub>');
          const juist1 = htmlSpan('11,4 m');
          const juist2 = htmlSpan('12 m');
          const juist3 = htmlSpan('30,6 m');

          const TW2 = '1.4cm';
          
          const tr = document.createElement('tr');
          const tdL = maakOpTdKeuzeZ(zijde1, TW2, false, juist1,'=','__________');
          tdL.classList.add('kolom-links');
          tr.appendChild(tdL);
          const tdM = maakOpTdKeuzeZ(zijde2, TW2, false, juist2,'=','__________');
          tdM.classList.add('kolom-midden');
          tr.appendChild(tdM);  
          const tdR = maakOpTdKeuzeZ(zijde3, TW2, false, juist3,'=','__________');
          tdR.classList.add('kolom-rechts');
          tr.appendChild(tdR);
          tbody3.appendChild(tr);

        }

        trtabel2.appendChild(tdtabel2);
        tbodyhulp2.appendChild(trtabel2);
      }



    /* subopgave 3 */
    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdaz('3', oe_3, false);
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

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }


  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */
  
  const FIG_OFFSET = 0; // ← positief = naar beneden, negatief = naar boven (in px)

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '100%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = (_top + FIG_OFFSET) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/checkin.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '70%'; /* ← breedte aanpassen indien nodig */
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
