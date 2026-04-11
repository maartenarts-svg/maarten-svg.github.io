/* ============================================================
   H10 / ¨P10_4 / oe_104K03.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_104K03_2 = document.createElement('span');
  const oe_104K03_2_b1 = maakSpanBreedte('1.1cm', '<i>A</i><sub>grijs</sub>');
  oe_104K03_2.appendChild(oe_104K03_2_b1);
  const oe_104K03_2_s2 = document.createElement('span');
  oe_104K03_2_s2.appendChild(htmlSpan('= '));
  oe_104K03_2_s2.appendChild(zetOmNaarOpl('A'));
  oe_104K03_2_s2.appendChild(htmlSpan('<sub>grote rechthoek</sub> - '));
  oe_104K03_2_s2.appendChild(zetOmNaarOpl('A'));
  oe_104K03_2_s2.appendChild(htmlSpan('<sub>witte rechthoek</sub>'));
  oe_104K03_2.appendChild(oe_104K03_2_s2);

  const oe_104K03_3 = document.createElement('span');
  const oe_104K03_3_b1 = maakSpanBreedte('1.1cm', '');
  oe_104K03_3.appendChild(oe_104K03_3_b1);
  oe_104K03_3.appendChild(htmlSpan('= 8(4<i>t</i> + 6) - 2(<i>t</i> + 3)'));

  const oe_104K03_4 = document.createElement('span');
  const oe_104K03_4_b1 = maakSpanBreedte('1.1cm', '');
  oe_104K03_4.appendChild(oe_104K03_4_b1);
  oe_104K03_4.appendChild(htmlSpan('='));
  oe_104K03_4.appendChild(htmlSpan(' '));
  oe_104K03_4.appendChild(maakOnderstreping(htmlSpan('32<i>t</i>'), 'enkel', '0.1cm', true));
  oe_104K03_4.appendChild(htmlSpan(' '));
  oe_104K03_4.appendChild(maakOnderstreping(htmlSpan('+ 48'), 'dubbel', '0.18cm', true));
  oe_104K03_4.appendChild(htmlSpan(' '));
  oe_104K03_4.appendChild(maakOnderstreping(htmlSpan('- 2<i>t</i>'), 'enkel', '0.1cm', true));
  oe_104K03_4.appendChild(htmlSpan(' '));
  oe_104K03_4.appendChild(maakOnderstreping(htmlSpan('- 6'), 'dubbel', '0.18cm', true));

  const oe_104K03_5 = document.createElement('span');
  const oe_104K03_5_b1 = maakSpanBreedte('1.1cm', '');
  oe_104K03_5.appendChild(oe_104K03_5_b1);
  oe_104K03_5.appendChild(htmlSpan('= 30<i>t</i> + 42'));

  const inhoud = maakOefening({
    id:'oe_104K03', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:[],
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
    { const _v='Noteer een formule voor de oppervlakte van het grijze gebied.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);
  voegWitruimteToe(tbody_0);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    _tr_0_0.dataset.figuur = 'afbeelding1';
    const _td_0_0 = maakSlTdZonderInsprong(oe_104K03_2, false);
    _td_0_0.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_0.querySelector('.sl').style.flex = 'none';
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  
    const _tr_0_1 = document.createElement('tr');
    _tr_0_1.dataset.figuur = 'afbeelding1';
    const _td_0_1 = maakSlTdZonderInsprong(oe_104K03_3, false);
    _td_0_1.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_1.querySelector('.sl').style.flex = 'none';
    _td_0_1.classList.add('kolom-links');
    _td_0_1.style.position = 'relative';
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    _tr_0_2.dataset.figuur = 'afbeelding1';
    const _td_0_2 = maakSlTdZonderInsprong(oe_104K03_4, false);
    _td_0_2.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_2.querySelector('.sl').style.flex = 'none';
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    _tr_0_3.dataset.figuur = 'afbeelding1';
    const _td_0_3 = maakSlTdZonderInsprong(oe_104K03_5, false);
    _td_0_3.querySelector('.sl').style.maxWidth = 'calc(60% - var(--insprong-stap))';
    _td_0_3.querySelector('.sl').style.flex = 'none';
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '60%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_104K03.svg'; /* ← bestandsnaam */
      _img.style.width     = '62%';
      _img.style.height    = 'auto';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }


  //opgave a
  maak2Parabolen(_td_0_1, {
    sx: 1.5,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(_td_0_1, {
    sx: 3.3,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 0.85,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

})();
