/* ============================================================
   H12 / H12_W36WIMC2 / oe_3.js
   soort: test
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_36MC2003', nummer:'?', soort:'test',
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
    { const _v='Los op.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const oe_36MC2003_1 = document.createElement('span');
    oe_36MC2003_1.appendChild(htmlSpan('Een cirkelvormige looppiste heeft een straal van 400 m. <br>Maarten loopt 10 rondjes rond de piste.<br>Bereken de afstand die hij aflegt.'));  

    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_36MC2003_1, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody,'0.5cm');

  /* Schrijflijn 1 van a */
  {
    const oe_36MC2003_2 = document.createElement('span');
    const oe_36MC2003_2_b1 = maakSpanBreedte('0.4cm', '•');
    oe_36MC2003_2.appendChild(oe_36MC2003_2_b1);
    oe_36MC2003_2.appendChild(maakSpanBreedte('1cm','Plan:'));
    oe_36MC2003_2.appendChild(htmlSpan('Maarten legt 10 rondjes af, dus 10 keer de'));  

    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_36MC2003_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {  
    const oe_36MC2003_3 = document.createElement('span');
    const oe_36MC2003_3_b1 = maakSpanBreedte('1.4cm', '');
    oe_36MC2003_3.appendChild(oe_36MC2003_3_b1);
    oe_36MC2003_3.appendChild(htmlSpan('<b>omtrek</b> van de <b>cirkel</b>.'));

    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_36MC2003_3, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 4 van a */
  {  
    const oe_36MC2003_5 = document.createElement('span');
    const oe_36MC2003_5_b1 = maakSpanBreedte('0.4cm', '•');
    oe_36MC2003_5.appendChild(oe_36MC2003_5_b1);
    oe_36MC2003_5.appendChild(maakSpanBreedte('3cm','Berekening in m:'));
    oe_36MC2003_5.appendChild(maakSpanBreedte('2.5cm','- 1 rondje:'));
    oe_36MC2003_5.appendChild(htmlSpan('2 · π · 400 = 800π'));

    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_36MC2003_5, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Schrijflijn 5 van a */
  {  
    const oe_36MC2003_6 = document.createElement('span');
    oe_36MC2003_6.appendChild(maakSpanBreedte('3.4cm',''));
    oe_36MC2003_6.appendChild(maakSpanBreedte('2.5cm','- 10 rondjes:'));
    oe_36MC2003_6.appendChild(htmlSpan('10 · 800π ≈ 25 132,74'));

    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_36MC2003_6, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Schrijflijn 6 van a */
  {  
    const oe_36MC2003_7 = document.createElement('span');
    const oe_36MC2003_7_b1 = maakSpanBreedte('0.4cm', '•');
    oe_36MC2003_7.appendChild(oe_36MC2003_7_b1);
    oe_36MC2003_7.appendChild(htmlSpan('Antwoord: Maarten legt 25 132,74 m af.'));

    const _tr_a_5 = document.createElement('tr');
    _tr_a_5.dataset.figuur = 'afbeelding1';
    const _td_a_5 = maakSlTd(oe_36MC2003_7, false);
    _td_a_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_5.querySelector('.sl').style.flex = 'none';
    _td_a_5.classList.add('kolom-links');
    _tr_a_5.appendChild(_td_a_5); tbody.appendChild(_tr_a_5);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {  
    const oe_36MC2003_8 = document.createElement('span');
    oe_36MC2003_8.appendChild(htmlSpan('Een vierkant stuk grond met een zijde van 100 m wordt ingezaaid. <br>Met 1 kg graszaad kun je 25 m<sup>2</sup> inzaaien.<br>Bereken hoeveel kilogram graszaad nodig is voor dit stuk grond.'));

    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_36MC2003_8, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  voegWitruimteToe(tbody,'0.5cm');

  /* Schrijflijn 1 van b */
  {
    const oe_36MC2003_10 = document.createElement('span');
    const oe_36MC2003_10_b1 = maakSpanBreedte('0.4cm', '•');
    oe_36MC2003_10.appendChild(oe_36MC2003_10_b1);
    oe_36MC2003_10.appendChild(maakSpanBreedte('1cm','Plan:'));
    oe_36MC2003_10.appendChild(htmlSpan('Om te berekenen hoeveel kilogram graszaad nodig is,'));

    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding2';
    const _td_b_0 = maakSlTd(oe_36MC2003_10, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 3 van b */
  {
    const oe_36MC2003_12 = document.createElement('span');
    const oe_36MC2003_12_b1 = maakSpanBreedte('1.4cm', '');
    oe_36MC2003_12.appendChild(oe_36MC2003_12_b1);
    oe_36MC2003_12.appendChild(htmlSpan('bereken je de <b>oppervlakte</b> van het <b>vierkant</b>.'));

    const _tr_b_2 = document.createElement('tr');
    _tr_b_2.dataset.figuur = 'afbeelding2';
    const _td_b_2 = maakSlTd(oe_36MC2003_12, false);
    _td_b_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_2.querySelector('.sl').style.flex = 'none';
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const oe_36MC2003_13 = document.createElement('span');
    const oe_36MC2003_13_b1 = maakSpanBreedte('0.4cm', '•');
    oe_36MC2003_13.appendChild(oe_36MC2003_13_b1);
    oe_36MC2003_13.appendChild(maakSpanBreedte('3.5cm','Berekeningen in m<sup>2</sup>:'));
    oe_36MC2003_13.appendChild(maakSpanBreedte('2.5cm','- vierkant:'));
    oe_36MC2003_13.appendChild(htmlSpan('100<sup>2</sup> = 10 000'));    

    const _tr_b_3 = document.createElement('tr');
    _tr_b_3.dataset.figuur = 'afbeelding2';
    const _td_b_3 = maakSlTd(oe_36MC2003_13, false);
    _td_b_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_3.querySelector('.sl').style.flex = 'none';
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* Schrijflijn 5 van b */
  {  
    const oe_36MC2003_14 = document.createElement('span');
    oe_36MC2003_14.appendChild(maakSpanBreedte('3.9cm',''));
    oe_36MC2003_14.appendChild(maakSpanBreedte('2.5cm','- graszaad:'));
    oe_36MC2003_14.appendChild(htmlSpan('10 000 : 25 = 400'));    


    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_36MC2003_14, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Schrijflijn 7 van b */
  {
    const oe_36MC2003_16 = document.createElement('span');
    const oe_36MC2003_16_b1 = maakSpanBreedte('0.4cm', '•');
    oe_36MC2003_16.appendChild(oe_36MC2003_16_b1);
    oe_36MC2003_16.appendChild(htmlSpan('Antwoord: Je hebt 400 kg graszaad nodig.'));

    const _tr_b_6 = document.createElement('tr');
    _tr_b_6.dataset.figuur = 'afbeelding2';
    const _td_b_6 = maakSlTd(oe_36MC2003_16, false);
    _td_b_6.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_6.querySelector('.sl').style.flex = 'none';
    _td_b_6.classList.add('kolom-links');
    _tr_b_6.appendChild(_td_b_6); tbody.appendChild(_tr_b_6);
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
      fetch('afbeeldingen/oe_36MC2003.svg') /* ← bestandsnaam */
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
            if (laag) { laag.style.display = TOON_OPLOSSINGEN ? 'block' : 'none'; laag.classList.add('svg-opl-laag'); }
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

  /* afbeelding2 */
  {
    const _fig = maakFiguurContainer('afbeelding2', '30%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding2"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING2 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING2) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_36MC2003b.svg') /* ← bestandsnaam */
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
            if (laag) { laag.style.display = TOON_OPLOSSINGEN ? 'block' : 'none'; laag.classList.add('svg-opl-laag'); }
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
