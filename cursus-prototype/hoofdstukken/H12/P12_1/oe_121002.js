/* ============================================================
   H12 / P12_1 / oe_121002.js
   soort: voorbeeld
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_121002_1 = document.createElement('span');
  oe_121002_1.appendChild(htmlSpan('Bereken hoeveel plaats de draaimolen inneemt op het marktplein.'));

  const oe_121002_2 = document.createElement('span');
  const oe_121002_2_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121002_2.appendChild(oe_121002_2_b1);
  oe_121002_2.appendChild(maakSpanBreedte('1cm','Plan:'));
  oe_121002_2.appendChild(htmlSpan('Om de plaats te berekenen die de draaimolen'));

  const oe_121002_3 = document.createElement('span');
  const oe_121002_3_b1 = maakSpanBreedte('1.4cm', '');
  oe_121002_3.appendChild(oe_121002_3_b1);
  oe_121002_3.appendChild(htmlSpan('inneemt, bereken je de <b>oppervlakte</b> van de <b>cirkel</b>.'));

  const oe_121002_5 = document.createElement('span');
  const oe_121002_5_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121002_5.appendChild(oe_121002_5_b1);
  oe_121002_5.appendChild(htmlSpan('Berekening in m<sup>2</sup>: oppervlakte cirkel: π · 5<sup>2</sup> ≈ 78,54'));

  const oe_121002_7 = document.createElement('span');
  const oe_121002_7_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121002_7.appendChild(oe_121002_7_b1);
  oe_121002_7.appendChild(htmlSpan('Antwoord: De draaimolen neemt 78,54 m<sup>2</sup> in.'));

  const oe_121002_8 = document.createElement('span');
  oe_121002_8.appendChild(htmlSpan('Hans zit op de draaimolen op 3 m van het middelpunt en draait 10 rondjes.<br>Bereken de afstand die Hans afgelegd heeft.'));

  const oe_121002_10 = document.createElement('span');
  const oe_121002_10_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121002_10.appendChild(oe_121002_10_b1);
  oe_121002_10.appendChild(maakSpanBreedte('1cm','Plan:'));
  oe_121002_10.appendChild(htmlSpan('De afstand is 10 rondjes, dus 10 keer'));

  const oe_121002_12 = document.createElement('span');
  const oe_121002_12_b1 = maakSpanBreedte('1.4cm', '');
  oe_121002_12.appendChild(oe_121002_12_b1);
  oe_121002_12.appendChild(htmlSpan('de <b>omtrek</b> van een <b>cirkel</b> met straal 3 m.'));

  const oe_121002_13 = document.createElement('span');
  const oe_121002_13_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121002_13.appendChild(oe_121002_13_b1);
  oe_121002_13.appendChild(maakSpanBreedte('3.5cm','Berekeningen in m:'));
  oe_121002_13.appendChild(maakSpanBreedte('2.5cm','- 1 rondje:'));
  oe_121002_13.appendChild(htmlSpan('2 · π · 3 = 6π'));

  const oe_121002_15 = document.createElement('span');
  const oe_121002_15_b1 = maakSpanBreedte('3.9cm', '');
  oe_121002_15.appendChild(oe_121002_15_b1);
  oe_121002_15.appendChild(maakSpanBreedte('2.5cm','- 10 rondjes:'));
  oe_121002_15.appendChild(htmlSpan('10 · 6π ≈ 188,50'));

  const oe_121002_16 = document.createElement('span');
  const oe_121002_16_b1 = maakSpanBreedte('0.4cm', '•');
  oe_121002_16.appendChild(oe_121002_16_b1);
  oe_121002_16.appendChild(htmlSpan('Antwoord: Hans legt 188,50 m af.'));

  const inhoud = maakOefening({
    id:'oe_121002', nummer:'?', soort:'voorbeeld',
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
    { const _v='Een draaimolen heeft een straal van 5 m.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', oe_121002_1, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    _tr_a_0.dataset.figuur = 'afbeelding1';
    const _td_a_0 = maakSlTd(oe_121002_2, false);
    _td_a_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_0.querySelector('.sl').style.flex = 'none';
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Schrijflijn 2 van a */
  {
    const _tr_a_1 = document.createElement('tr');
    _tr_a_1.dataset.figuur = 'afbeelding1';
    const _td_a_1 = maakSlTd(oe_121002_3, false);
    _td_a_1.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_1.querySelector('.sl').style.flex = 'none';
    _td_a_1.classList.add('kolom-links');
    _tr_a_1.appendChild(_td_a_1); tbody.appendChild(_tr_a_1);
  }

  /* Schrijflijn 4 van a */
  {
    const _tr_a_3 = document.createElement('tr');
    _tr_a_3.dataset.figuur = 'afbeelding1';
    const _td_a_3 = maakSlTd(oe_121002_5, false);
    _td_a_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_3.querySelector('.sl').style.flex = 'none';
    _td_a_3.classList.add('kolom-links');
    _tr_a_3.appendChild(_td_a_3); tbody.appendChild(_tr_a_3);
  }

  /* Schrijflijn 6 van a */
  {
    const _tr_a_5 = document.createElement('tr');
    _tr_a_5.dataset.figuur = 'afbeelding1';
    const _td_a_5 = maakSlTd(oe_121002_7, false);
    _td_a_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_a_5.querySelector('.sl').style.flex = 'none';
    _td_a_5.classList.add('kolom-links');
    _tr_a_5.appendChild(_td_a_5); tbody.appendChild(_tr_a_5);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', oe_121002_8, false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    _tr_b_0.dataset.figuur = 'afbeelding2';
    const _td_b_0 = maakSlTd(oe_121002_10, false);
    _td_b_0.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_0.querySelector('.sl').style.flex = 'none';
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    _tr_b_2.dataset.figuur = 'afbeelding2';
    const _td_b_2 = maakSlTd(oe_121002_12, false);
    _td_b_2.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_2.querySelector('.sl').style.flex = 'none';
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    _tr_b_3.dataset.figuur = 'afbeelding2';
    const _td_b_3 = maakSlTd(oe_121002_13, false);
    _td_b_3.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_3.querySelector('.sl').style.flex = 'none';
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* Schrijflijn 6 van b */
  {
    const _tr_b_5 = document.createElement('tr');
    _tr_b_5.dataset.figuur = 'afbeelding2';
    const _td_b_5 = maakSlTd(oe_121002_15, false);
    _td_b_5.querySelector('.sl').style.maxWidth = 'calc(70% - var(--insprong-stap))';
    _td_b_5.querySelector('.sl').style.flex = 'none';
    _td_b_5.classList.add('kolom-links');
    _tr_b_5.appendChild(_td_b_5); tbody.appendChild(_tr_b_5);
  }

  /* Schrijflijn 7 van b */
  {
    const _tr_b_6 = document.createElement('tr');
    _tr_b_6.dataset.figuur = 'afbeelding2';
    const _td_b_6 = maakSlTd(oe_121002_16, false);
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
      fetch('afbeeldingen/oe_121002b.svg') /* ← bestandsnaam */
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
      fetch('afbeeldingen/oe_121002a.svg') /* ← bestandsnaam */
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
