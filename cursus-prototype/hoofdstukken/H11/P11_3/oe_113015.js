/* ============================================================
   H11 / P11_3 / oe_113015.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';

  const oe_113015_1 = document.createElement('span');
  oe_113015_1.appendChild(htmlSpan('Bereken de omtrek van het vierkant. <br>Gebruik tijdens het oplossen een vergelijking.'));

  const oe_113015_2 = document.createElement('span');
  oe_113015_2.appendChild(htmlSpan('We berekenen eerst de zijde <i>z</i>.'));

  const oe_113015_3 = document.createElement('span');
  const oe_113015_3_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113015_3.appendChild(oe_113015_3_b1);
  const oe_113015_3_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113015_3.appendChild(oe_113015_3_b2);
  oe_113015_3.appendChild(htmlSpan('zijde: <i>z</i>'));

  const oe_113015_4 = document.createElement('span');
  const oe_113015_4_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113015_4.appendChild(oe_113015_4_b1);
  const oe_113015_4_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113015_4.appendChild(oe_113015_4_b2);
  oe_113015_4.appendChild(htmlSpan('<i>z</i> + 5 + 4 = 1 + 5 + 1 + 5'));

  const oe_113015_5 = document.createElement('span');
  const oe_113015_5_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113015_5.appendChild(oe_113015_5_b1);
  const oe_113015_5_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113015_5.appendChild(oe_113015_5_b2);
  oe_113015_5.appendChild(htmlSpan('<i>z</i> = 3'));

  const oe_113015_10 = document.createElement('span');
  const oe_113015_10_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113015_10.appendChild(oe_113015_10_b1);
  const oe_113015_10_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113015_10.appendChild(oe_113015_10_b2);
  oe_113015_10.appendChild(htmlSpan('De zijde <i>z</i> is 3.'));  

  const oe_113015_6 = document.createElement('span');
  const oe_113015_6_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113015_6.appendChild(oe_113015_6_b1);
  const oe_113015_6_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113015_6.appendChild(oe_113015_6_b2);
  oe_113015_6.appendChild(htmlSpan('3 + 5 + 4 = 12 en 1 + 5 + 1 + 5 = 12'));

  const oe_113015_7 = document.createElement('span');
  oe_113015_7.appendChild(htmlSpan('Het vierkant heeft zijde 3. De omtrek is dus 4 · 3 = 12.'));

  const inhoud = maakOefening({
    id:'oe_113015', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:['rekenmachine'],
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
    { const _v='De omtrek van de driehoek is gelijk aan de omtrek van de rechthoek.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  /* Opgave 1 */
  {
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '50%';
    const _o = oe_113015_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    const _td_0_0 = maakSlTdZonderInsprong(oe_113015_2, false);
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    const _td_0_1 = maakSlTdZonderInsprong(oe_113015_3, false);
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    const _td_0_2 = maakSlTdZonderInsprong(oe_113015_4, false);
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    const _td_0_3 = maakSlTdZonderInsprong(oe_113015_5, false);
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

  /* Schrijflijn 5 van 1 */
  {
    const _tr_0_4 = document.createElement('tr');
    const _td_0_4 = maakSlTdZonderInsprong(oe_113015_10, false);
    _td_0_4.classList.add('kolom-links');
    _tr_0_4.appendChild(_td_0_4); tbody_0.appendChild(_tr_0_4);
  }
  {
    const _tr_0_4 = document.createElement('tr');
    const _td_0_4 = maakSlTdZonderInsprong(oe_113015_6, false);
    _td_0_4.classList.add('kolom-links');
    _tr_0_4.appendChild(_td_0_4); tbody_0.appendChild(_tr_0_4);
  }

  /* Schrijflijn 6 van 1 */
  {
    const _tr_0_5 = document.createElement('tr');
    const _td_0_5 = maakSlTdZonderInsprong(oe_113015_7, false);
    _td_0_5.classList.add('kolom-links');
    _tr_0_5.appendChild(_td_0_5); tbody_0.appendChild(_tr_0_5);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    const _td_0_6 = maakSlTdZonderInsprong(null, false);
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* Schrijflijn 7 van 1 */
  {
    const _tr_0_6 = document.createElement('tr');
    const _td_0_6 = maakSlTdZonderInsprong(null, false);
    _td_0_6.classList.add('kolom-links');
    _tr_0_6.appendChild(_td_0_6); tbody_0.appendChild(_tr_0_6);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '50%'); /* ← breedte aanpassen indien nodig */
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
      _img.src = 'afbeeldingen/oe_113015.svg'; /* ← bestandsnaam */
      _img.style.width     = '80%';
      _img.style.height    = 'auto';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
