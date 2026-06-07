/* ============================================================
   H11 / P11_2 / oe_112012.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- a --- */
  const h1 = document.createElement('span');
  const h1_b1 = maakSpanBreedte('0.65cm', '<i>P</i>');
  h1.appendChild(h1_b1);
  h1.appendChild(htmlSpan('='));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('<i>z</i>'), 'enkel', '0.1cm', true));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'enkel', '0.1cm', true));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('+ 1'), 'dubbel', '0.18cm', true));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('+ <i>z</i>'), 'enkel', '0.1cm', true));
  h1.appendChild(htmlSpan(' '));
  h1.appendChild(maakOnderstreping(htmlSpan('+ 2'), 'enkel', '0.1cm', true));

  const h2 = document.createElement('span');
  const h2_b1 = maakSpanBreedte('0.65cm', '');
  h2.appendChild(h2_b1);
  h2.appendChild(htmlSpan('= 3<i>z</i> + 3'));

  /* --- b --- */
  const oe_112012_b1 = document.createElement('span');
  oe_112012_b1.appendChild(htmlSpan('De omtrek van deze driehoek is '));
  oe_112012_b1.appendChild(maakMarkering('48','#bbdefb',true));
  oe_112012_b1.appendChild(htmlSpan('. <br>Bereken de korste zijde.'));  

  const oe_112012_b2 = document.createElement('span');
  oe_112012_b2.appendChild(maakMarkering('48','#bbdefb',true));  
  oe_112012_b2.appendChild(htmlSpan(' = 3<i>z</i> + 3'));

  const oe_112012_b3 = document.createElement('span');
  oe_112012_b3.appendChild(htmlSpan('48 <span class="markeer-lila">- 3</span> = 3<i>z</i> + 3 <span class="markeer-lila">- 3</span>'));

  const oe_112012_b4 = document.createElement('span');
  oe_112012_b4.appendChild(htmlSpan('45 = 3<i>z</i>'));

  const oe_112012_b5 = document.createElement('span');
  oe_112012_b5.appendChild(htmlSpan('45 <span class="markeer-lila">: 3</span> = 3<i>z</i> <span class="markeer-lila">: 3</span>'));

  const oe_112012_b6 = document.createElement('span');
  oe_112012_b6.appendChild(htmlSpan('15 = <i>z</i>'));

  const oe_112012_b7 = document.createElement('span');
  oe_112012_b7.appendChild(htmlSpan('De kortste zijde is 15.'));

  const oe_112012_b8 = document.createElement('span');
  oe_112012_b8.appendChild(htmlSpan('controle: 15 + 16 + 17 = 48'));

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112012', nummer: '?', soort: 'test',
    niveaus: [], tools: [],
    toggleModus: 'oefening'
  });
  inhoud.style.position = 'relative';

  const hulp1 = document.createElement('span');
  hulp1.appendChild(htmlSpan('Bij de driehoek is de langste zijde 2 langer dan de kortste zijde. De andere zijde is 1 langer dan de kortste. De omtrek <i>P</i> van deze driehoek bereken je door de lengtes van alle zijden op te tellen:<br> '));
  hulp1.appendChild(maakMarkering('<i>P</i>','#bbdefb',true));
  hulp1.appendChild(htmlSpan(' = <i>z</i> + <i>z</i> + 1 + <i>z</i> + 2.'));    

  voegTekstToe(inhoud, hulp1, ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  voegWitruimteToe(tbody, '0.3cm');

  function maakFiguurContainer(naam, left, breedte) {
    const div = document.createElement('div');
    div.id = naam;
    div.style.position       = 'absolute';
    div.style.left           = left;
    div.style.width          = breedte;
    div.style.display        = 'flex';
    div.style.alignItems     = 'center';
    div.style.justifyContent = 'center';
    div.style.boxSizing      = 'border-box';
    return div;
  }

  /* Label a + label b — geen data-figuur */
  {
    const tr = document.createElement('tr');
    const tdA = maakOpTdaz('a', htmlSpan('Herleid deze formule.'), false);
    tdA.querySelector('.rij').style.alignItems = 'flex-start';
    tdA.querySelector('.lbl').style.paddingTop = '0cm';
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakOpTdaz('b', oe_112012_b1, false);
    tdB.querySelector('.rij').style.alignItems = 'flex-start';
    tdB.querySelector('.lbl').style.paddingTop = '0cm';
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  /* Schrijflijn 1 van a + schrijflijn 1 van b — geen data-figuur */
  {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(h1, false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oe_112012_b2, false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  /* Schrijflijn 2 van a + schrijflijn 2 van b — geen data-figuur */
  {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(h2, false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oe_112012_b3, false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  /* Lege rijen voor figuurruimte (kolom a) + vervolg b — data-figuur hier */
  const oplB_rest = [oe_112012_b4, oe_112012_b5, oe_112012_b6, oe_112012_b7, oe_112012_b8];
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    tr.dataset.figuur = 'afbeelding1';
    const tdA = document.createElement('td');
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB_rest[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }

  /* ============================================================
     FIGUUR-CONTAINER
     Linkerkolom = 50% breed → container 25% breed, gecentreerd
     op left = (50% - 25%) / 2 = 12.5%
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '12.5%', '25%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      fetch('afbeeldingen/oe_112012.svg') /* ← bestandsnaam */
        .then(r => r.text())
        .then(svgTekst => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');
          svg.style.width  = '90%'; /* ← breedte aanpassen indien nodig */
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