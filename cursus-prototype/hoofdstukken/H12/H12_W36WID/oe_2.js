/* ============================================================
   H12 / H12_W36WID / oe_2.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Oplossingen ---- */
  const opl_a_formule = document.createElement('span');
  opl_a_formule.appendChild(htmlSpan('<i>P</i> = 2(<i>b</i> + <i>h</i>)'));

  const opl_a_berek = document.createElement('span');
  opl_a_berek.appendChild(htmlSpan('2 · (6 + 4) = 20'));

  const opl_b_formule = document.createElement('span');
  opl_b_formule.appendChild(htmlSpan('<i>A</i> = <i>b</i><i>h</i>'));

  const opl_b_berek = document.createElement('span');
  opl_b_berek.appendChild(htmlSpan('6 · 4 = 24'));

  const inhoud = maakOefening({
    id: 'oe_2', nummer: '?', soort: 'test',
    niveaus: [], tools: [],
    toggleModus: 'oefening'
  });
  inhoud.style.position = 'relative';

  voegTekstToe(inhoud, 'Bereken de omtrek en de oppervlakte.', ['intro-tekst']);

  const { tabel, tbody } = maakOefTabel(inhoud, 1, false);
  tabel.style.width = '70%';

  function maakBerekenLabel(eenheid = null) {
    const span = document.createElement('span');
    span.style.display = 'inline-flex';
    span.style.alignItems = 'center';
    span.appendChild(htmlSpan('berekening in '));
    const wrapper = document.createElement('span');
    wrapper.style.display = 'inline-block';
    wrapper.style.position = 'relative';
    wrapper.style.width = '1.2cm';
    wrapper.style.height = 'var(--rij-hoogte)';
    const sl = document.createElement('div');
    sl.classList.add('sl');
    sl.textContent = SL;
    sl.style.width = '100%';
    sl.style.height = 'var(--rij-hoogte)';
    sl.style.lineHeight = 'var(--rij-hoogte)';
    wrapper.appendChild(sl);
    if (eenheid !== null) {
      const ov = document.createElement('span');
      ov.classList.add('opl');
      ov.style.left = '0';
      ov.style.justifyContent = 'center';
      ov.innerHTML = eenheid;
      ov.querySelectorAll('sup').forEach(s => s.style.top = '-0.5em');
      wrapper.appendChild(ov);
    }
    span.appendChild(wrapper);
    span.appendChild(htmlSpan(' :'));
    return span;
  }

  function maakAntwoordTd(voorgedrukt, oplNummer) {
    const td = document.createElement('td');
    const rij = document.createElement('div');
    rij.classList.add('rij');
    const lbl = document.createElement('span');
    lbl.classList.add('lbl', 'subopgave-label');
    lbl.textContent = '•';
    rij.appendChild(lbl);
    const txt = document.createElement('span');
    txt.classList.add('txt');
    txt.style.width = '4cm';
    txt.textContent = 'antwoord:';
    rij.appendChild(txt);
    const vg = document.createElement('span');
    vg.classList.add('voorgedrukt');
    vg.style.flexShrink = '0';
    vg.style.paddingRight = '0.4em';
    vg.innerHTML = voorgedrukt;
    rij.appendChild(vg);
    const slWrapper = document.createElement('span');
    slWrapper.style.position = 'relative';
    slWrapper.style.flex = '1';
    slWrapper.style.minWidth = '0';
    slWrapper.style.height = 'var(--rij-hoogte)';
    rij.appendChild(slWrapper);
    const sl = document.createElement('div');
    sl.classList.add('sl');
    sl.textContent = SL;
    sl.style.width = '100%';
    sl.style.height = 'var(--rij-hoogte)';
    sl.style.lineHeight = 'var(--rij-hoogte)';
    slWrapper.appendChild(sl);
    const ov = document.createElement('span');
    ov.classList.add('opl');
    ov.style.left = '0';
    ov.style.justifyContent = 'flex-start';
    ov.innerHTML = oplNummer;
    ov.querySelectorAll('sup').forEach(s => s.style.top = '-0.5em');
    slWrapper.appendChild(ov);
    td.appendChild(rij);
    return td;
  }

  function voegRij(td, insprong = false) {
    const tr = document.createElement('tr');
    tr.dataset.figuur = 'afbeelding1';
    td.classList.add('kolom-links');
    if (insprong) td.style.paddingLeft = '0.65cm';
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* a | Omtrek */
  voegRij(maakOpTdaz('a', 'Omtrek', false));
  voegRij(maakOpTdDubbelZStrZdub('•', 'formule:', '4cm', false, opl_a_formule), true);
  voegRij(maakOpTdDubbelZStrZdub('•', maakBerekenLabel('dm'), '4cm', false, opl_a_berek), true);
  voegRij(maakAntwoordTd('De omtrek is', '20 dm.'), true);

  voegWitruimteToe(tbody, '0.3cm');

  /* b | Oppervlakte */
  voegRij(maakOpTdaz('b', 'Oppervlakte', false));
  voegRij(maakOpTdDubbelZStrZdub('•', 'formule:', '4cm', false, opl_b_formule), true);
  voegRij(maakOpTdDubbelZStrZdub('•', maakBerekenLabel('dm<sup>2</sup>'), '4cm', false, opl_b_berek), true);
  voegRij(maakAntwoordTd('De oppervlakte is', '24 dm<sup>2</sup>.'), true);

  /* ============================================================
     FIGUUR
     ============================================================ */
  function maakFiguurContainer(naam, breedte) {
    const div = document.createElement('div');
    div.id = naam;
    div.style.position       = 'absolute';
    div.style.right          = '0';
    div.style.width          = breedte;
    div.style.display        = 'flex';
    div.style.alignItems     = 'center';
    div.style.justifyContent = 'center';
    div.style.boxSizing      = 'border-box';
    return div;
  }

  {
    const _fig = maakFiguurContainer('afbeelding1', '30%');
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length - 1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      _fig.style.top    = _top + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_36D002.svg')
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '100%';
          svg.style.height = 'auto';
          _fig.innerHTML = '';
          _fig.appendChild(svg);
          inhoud.appendChild(_fig);
        });
    });
  }

})();
