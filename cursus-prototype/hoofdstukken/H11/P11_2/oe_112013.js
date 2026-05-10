/* ============================================================
   H11 / P11_2 / oe_112013.js
   soort: oefening
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */

  /* --- stappen --- */
  const oe_112013_stap1 = document.createElement('span');
  oe_112013_stap1.appendChild(htmlSpan('Vul in de formule de gegevens in.'));

  const oe_112013_stap2 = document.createElement('span');
  oe_112013_stap2.appendChild(htmlSpan('Los de vergelijking op.'));

  const oe_112013_stap3 = document.createElement('span');
  oe_112013_stap3.appendChild(htmlSpan(''));

  const oe_112013_stap4 = document.createElement('span');
  oe_112013_stap4.appendChild(htmlSpan('Noteer het antwoord.'));

  const oe_112013_stap5 = document.createElement('span');
  oe_112013_stap5.appendChild(htmlSpan('Controleer.'));

  /* --- oplossingen --- */
  const oe_112013_opl0 = document.createElement('span');
  oe_112013_opl0.appendChild(maakMarkering('<i>V</i>','#bbdefb',false));
  oe_112013_opl0.appendChild(htmlSpan(' = '));
  oe_112013_opl0.appendChild(maakMarkering('<i>A</i><sub><i>g</i></sub>','#fff9c4',false));
  oe_112013_opl0.appendChild(htmlSpan(' · <i>h</i>'));

  const oe_112013_opl1 = document.createElement('span');
  oe_112013_opl1.appendChild(maakMarkering('240','#bbdefb',false));
  oe_112013_opl1.appendChild(htmlSpan(' = '));
  oe_112013_opl1.appendChild(maakMarkering('48','#fff9c4',false));
  oe_112013_opl1.appendChild(htmlSpan(' · <i>h</i>'));

  const oe_112013_opl2 = document.createElement('span');
  oe_112013_opl2.appendChild(htmlSpan('240 <span class="markeer-lila">: 48</span> = 48 · <i>h</i> <span class="markeer-lila">: 48</span>'));

  const oe_112013_opl3 = document.createElement('span');
  oe_112013_opl3.appendChild(htmlSpan('5 = <i>h</i>'));

  const oe_112013_opl4 = document.createElement('span');
  oe_112013_opl4.appendChild(htmlSpan('De hoogte is 5 cm.'));

  const oe_112013_opl5 = document.createElement('span');
  oe_112013_opl5.appendChild(htmlSpan('48 · 5 = 240'));

  /* ---- Oefening ---- */
  const inhoud = maakOefening({
    id: 'oe_112013', nummer: '?', soort: 'oefening',
    niveaus: ['cirkel', 'vierkant'], tools: [],
    toggleModus: 'oefening'
  });
  inhoud.style.position = 'relative';

  /* Introductietekst met max-width om ruimte te maken voor figuur */
  const hulp1 = document.createElement('span');
  hulp1.appendChild(htmlSpan('Het volume <i>V</i> van een prisma bereken je met de formule <i>V</i> = <i>A</i><sub><i>g</i></sub> · <i>h</i>.<br>Hierin is <i>A</i><sub><i>g</i></sub> de oppervlakte van het grondvlak en <i>h</i> de hoogte.<br>Een prisma met een volume van '))
  hulp1.appendChild(maakMarkering('240','#bbdefb',false));
  hulp1.appendChild(htmlSpan(' m³ heeft een grondvlak met een <br>oppervlakte van '));
  hulp1.appendChild(maakMarkering('48','#fff9c4',false));
  hulp1.appendChild(htmlSpan(' cm².<br>Bereken de hoogte van het prisma met behulp van het stappenplan.')); 

  voegTekstToe(inhoud,hulp1,['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, false);

  /* Rij 0: formule (geen bullet, zichtbaar) */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('', null);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdazZonder(oe_112013_opl0, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);
  }

  /* Rij 1: stap 1 + 240 = 48 · h (vast zichtbaar) */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('•', oe_112013_stap1);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(oe_112013_opl1, false);
    tdR.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);
  }

  /* Rij 2: stap 2 + delingstap */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('•', oe_112013_stap2);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(oe_112013_opl2, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);
  }

  /* Rij 3: geen stap + 5 = h */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('', oe_112013_stap3);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(oe_112013_opl3, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);
  }

  /* Rij 4: stap 4 + antwoord */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('•', oe_112013_stap4);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(oe_112013_opl4, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);
  }

  /* Rij 5: stap 5 + controle */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('•', oe_112013_stap5);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(oe_112013_opl5, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);
  }

  /* ============================================================
     FIGUUR-CONTAINER — naast introductietekst, absoluut rechts
     ============================================================ */
  {
    const _fig = document.createElement('div');
    _fig.id = 'afbeelding1';
    _fig.style.position      = 'absolute';
    _fig.style.right         = '0';
    _fig.style.top           = '0';
    _fig.style.width         = '30%';
    _fig.style.display       = 'flex';
    _fig.style.alignItems    = 'center';
    _fig.style.justifyContent = 'center';
    _fig.style.boxSizing     = 'border-box';

    requestAnimationFrame(() => {
      const _p = inhoud.querySelector('.intro-tekst');
      if (!_p) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _p.getBoundingClientRect().top    - _base.top + inhoud.scrollTop;
      const _bottom = _p.getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET = 0;
      _fig.style.top    = (_top + FIG_OFFSET) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_112013.svg';
      _img.style.width     = '50%';
      _img.style.height    = 'auto';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();