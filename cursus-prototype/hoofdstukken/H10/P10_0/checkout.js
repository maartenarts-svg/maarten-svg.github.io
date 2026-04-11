/* ============================================================
   H10 / checkout / checkout.js
   soort: ontdek
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'checkin', nummer:'CO', soort:'ontdek',
    niveaus:[], tools:['rekenmachine'],
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
    { const _v='De leerlingenraad beslist om extra bloemperken aan te leggen in drie verschillende vormen: een regelmatige zeshoek, een vierkant en een rechthoek.<br>Bij techniek wordt een omheining voor deze perken gemaakt.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);
  voegWitruimteToe(tbody);

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

  const trbegin = document.createElement('tr');
  const tdbegin = htmlSpan('De berekening van de lengte <i>l</i> van de totale omheining pakken we op een andere manier aan.');
  tdbegin.style.height = '0.9cm';
  trbegin.appendChild(tdbegin);
  tbody.appendChild(trbegin);

  voegWitruimteToe(tbody,'0.3cm');   

  /* Opgave a */
  const checkin_1 = document.createElement('span');
  checkin_1.appendChild(htmlSpan('Noteer een formule voor de omtrek <i>P</i> van elke veelhoek.<br>Herleid.'));
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', checkin_1, false);
    _tdLbl.classList.add('kolom-links');
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* hulptabel voor subopgaven */
  
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
    const {tbody: tbody2} = maakOefTabel(tdtabel, 3, true);

    /* ---- Span-variabelen ---- */
      const oe_4 = document.createElement('span');
      oe_4.appendChild(htmlSpan('<i>P</i><sub>rechthoek'));

      const oe_5 = document.createElement('span');
      oe_5.appendChild(htmlSpan('= 2('));
      oe_5.appendChild(maakOnderstreping(htmlSpan('10'), 'enkel', '0.1cm', true));
      oe_5.appendChild(htmlSpan(' '));
      oe_5.appendChild(maakOnderstreping(htmlSpan('- 3<i>z</i>'), 'dubbel', '0.18cm', true));
      oe_5.appendChild(htmlSpan(' '));
      oe_5.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'dubbel', '0.18cm', true));
      oe_5.appendChild(htmlSpan(' '));
      oe_5.appendChild(maakOnderstreping(htmlSpan('+ 0,3'), 'enkel', '0.1cm', true));
      oe_5.appendChild(htmlSpan(')'));

      const oe_6 = document.createElement('span');
      oe_6.appendChild(htmlSpan('= 2(9,7 - 2<i>z</i>)'));

      const oe_7 = document.createElement('span');
      oe_7.appendChild(htmlSpan('= 19,4 - 4<i>z</i>'));

      const oe_8 = document.createElement('span');
      oe_8.appendChild(htmlSpan('<i>P</i><sub>zeshoek</sub>'));

      const oe_9 = document.createElement('span');
      oe_9.appendChild(htmlSpan('= 6<i>z</i>'));

      const oe_10 = document.createElement('span');
      oe_10.appendChild(htmlSpan(' '));

      const oe_11 = document.createElement('span');
      oe_11.appendChild(htmlSpan(' '));

      const oe_12 = document.createElement('span');
      oe_12.appendChild(htmlSpan('<i>P</i><sub>vierkant</sub>'));

      const oe_13 = document.createElement('span');
      oe_13.appendChild(htmlSpan('= 4 · 0,9<i>z</i>'));

      const oe_14 = document.createElement('span');
      oe_14.appendChild(htmlSpan('= 3,6 <i>z</i>'));

      const oe_15 = document.createElement('span');
      oe_15.appendChild(htmlSpan(' '));

    /* rij 1 — labels */
    {
      const trL = document.createElement('tr');
      const tdLblL = maakOpTdazZonder(oe_4, false);
      tdLblL.classList.add('kolom-links');
      trL.appendChild(tdLblL);
      const tdLblM = maakOpTdazZonder(oe_8, false);
      tdLblM.classList.add('kolom-midden');
      trL.appendChild(tdLblM);      
      const tdLblR = maakOpTdazZonder(oe_12, false);
      tdLblR.classList.add('kolom-rechts');
      trL.appendChild(tdLblR);
      tbody2.appendChild(trL);
    }
    /* rij 1 — oplossingen */
    {
      const tr = document.createElement('tr');
      const tdL1 = maakSlTdZonderInsprong(oe_5, false);
      tdL1.classList.add('kolom-links');
      tr.appendChild(tdL1);
      const tdM1 = maakSlTdZonderInsprong(oe_9, false);
      tdM1.classList.add('kolom-midden');
      tr.appendChild(tdM1);
      const tdR1 = maakSlTdZonderInsprong(oe_13, false);
      tdR1.classList.add('kolom-rechts');
      tr.appendChild(tdR1);
      tbody2.appendChild(tr);      
    }
    
      const trH = document.createElement('tr');
      const tdL1H = maakSlTdZonderInsprong(oe_6, false);
      tdL1H.classList.add('kolom-links');
      tdL1H.style.position = 'relative';
      trH.appendChild(tdL1H);
      const tdM1H = maakSlTdZonderInsprong(oe_10, false);
      tdM1H.classList.add('kolom-midden');
      tdM1H.style.position = 'relative';
      trH.appendChild(tdM1H);
      const tdR1H = maakSlTdZonderInsprong(oe_14, false);
      tdR1H.classList.add('kolom-rechts');
      tdR1H.style.position = 'relative';
      trH.appendChild(tdR1H);
      tbody2.appendChild(trH);      
    
    {
      const tr = document.createElement('tr');
      const tdL1 = maakSlTdZonderInsprong(oe_7, false);
      tdL1.classList.add('kolom-links');
      tr.appendChild(tdL1);
      const tdM1 = maakSlTdZonderInsprong(oe_11, false);
      tdM1.classList.add('kolom-midden');
      tr.appendChild(tdM1);
      const tdR1 = maakSlTdZonderInsprong(oe_15, false);
      tdR1.classList.add('kolom-rechts');
      tr.appendChild(tdR1);
      tbody2.appendChild(tr);      
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  /* ---- Span-variabelen ---- */
    const checkin_2 = document.createElement('span');
    checkin_2.appendChild(htmlSpan('Noteer een formule voor de totale lengte <i>l</i> van de omheining.'));

    const opgaveb_1 = document.createElement('span');
    const opgaveb_1_b1 = maakSpanBreedte('0.65cm', '<i>l</i>');
    opgaveb_1.appendChild(opgaveb_1_b1);
    opgaveb_1.appendChild(htmlSpan('= 19,4'));
    opgaveb_1.appendChild(htmlSpan(' '));
    opgaveb_1.appendChild(maakOnderstreping(htmlSpan('- 4<i>z</i>'), 'enkel', '0.1cm', true));
    opgaveb_1.appendChild(htmlSpan(' '));
    opgaveb_1.appendChild(maakOnderstreping(htmlSpan('+ 6<i>z</i>'), 'enkel', '0.1cm', true));
    opgaveb_1.appendChild(htmlSpan(' '));
    opgaveb_1.appendChild(maakOnderstreping(htmlSpan('+ 3,6<i>z</i>'), 'enkel', '0.1cm', true));

    const opgaveb_2 = document.createElement('span');
    const opgaveb_2_b1 = maakSpanBreedte('0.65cm', '');
    opgaveb_2.appendChild(opgaveb_2_b1);
    opgaveb_2.appendChild(htmlSpan('= 19,4 + 5,6<i>z</i>'));

  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', checkin_2, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }
  {
    const tra0 = document.createElement('tr');
    const tda0 = maakSlTd(opgaveb_1, false);
    tda0.classList.add('kolom-links');
    tra0.appendChild(tda0);
    tbody.appendChild(tra0);
    const tra1 = document.createElement('tr');
    const tda1 = maakSlTd(opgaveb_2, false);
    tda1.classList.add('kolom-links');
    tra1.appendChild(tda1);
    tbody.appendChild(tra1);
  }
  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  /* ---- Span-variabelen ---- */
    const checkin_3 = document.createElement('span');
    checkin_3.appendChild(htmlSpan('Vul de tabel aan.'));

  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('c', checkin_3, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }
  /* hulptabel voor subtabel */
  {
    /* ---- Span-variabelen ---- */
      const opgavec1 = document.createElement('span');
      const opgavec1_b1 = maakSpanBreedte('0.35cm', '<i>l</i>');
      opgavec1.appendChild(opgavec1_b1);
      opgavec1.appendChild(htmlSpan('= 19,4 + 5,6 · <span class="markeer-lila">2</span>'));
      opgavec1.appendChild(htmlSpan('<br><br>'));
      const opgavec1_b4 = maakSpanBreedte('0.35cm', '');
      opgavec1.appendChild(opgavec1_b4);
      opgavec1.appendChild(htmlSpan('= 30,6')); 

      const opgavec2 = document.createElement('span');
      const opgavec2_b1 = maakSpanBreedte('0.35cm', '<i>l</i>');
      opgavec2.appendChild(opgavec2_b1);
      opgavec2.appendChild(htmlSpan('= 19,4 + 5,6 · <span class="markeer-lila">3</span>'));
      opgavec2.appendChild(htmlSpan('<br><br>'));
      const opgavec2_b4 = maakSpanBreedte('0.35cm', '');
      opgavec2.appendChild(opgavec2_b4);
      opgavec2.appendChild(htmlSpan('= 36,2'));      

      const opgavec3 = document.createElement('span');
      const opgavec3_b1 = maakSpanBreedte('0.35cm', '<i>l</i>');
      opgavec3.appendChild(opgavec3_b1);
      opgavec3.appendChild(htmlSpan('= 19,4 + 5,6 · <span class="markeer-lila">1,5</span>'));
      opgavec3.appendChild(htmlSpan('<br><br>'));
      const opgavec3_b4 = maakSpanBreedte('0.35cm', '');
      opgavec3.appendChild(opgavec3_b4);
      opgavec3.appendChild(htmlSpan('= 27,8'));

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

    //tabel zelf
    const rijHoogtes = ['0.9cm', '2.7cm'];
    const kolomBreedtes = ['25%', '25%', '25%', '25%'];

    const matrix = [
      [
        { inhoud: 'zijde <i>z</i> (m)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
        { inhoud: '1,5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      ],
      [
        { inhoud: 'totale lengte <i>l</i> (m)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        { inhoud: opgavec1, type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: opgavec2, type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        { inhoud: opgavec3, type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      ],
    ];

    maakZichtbareTabel(tbody2, 2, 4, {
      hoofding: 'links',
      rijHoogtes,
      kolomBreedtes,
      matrix,
    });


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
      fetch('afbeeldingen/checkout.svg') /* ← bestandsnaam */
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


  //opgave a
  maak2Parabolen(tdL1H, {
    sx: 0.4,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.4,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });



})();
