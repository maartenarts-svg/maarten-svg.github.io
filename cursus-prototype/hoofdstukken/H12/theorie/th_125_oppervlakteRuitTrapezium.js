/* ============================================================
   H12 / th_125_oppervlakteRuitTrapezium.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';
  const breedteSoort = '37%';

  /*====theoriekader===========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = 'fixed';

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--groen-scheiding)';
    tdSoort.style.backgroundColor = 'var(--groen-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;
    tdSoort.style.width = breedteSoort;
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Formules'));

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('oppervlakte van een ruit en een trapezium'));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // --- Eigenlijke theorie ---
    const trInhoud = document.createElement('tr');
    const tdInhoud = document.createElement('td');
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--groen-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud, '0.1cm');

    // ══ RUIT ════════════════════════════════════════════════════

    // Bullet
    maakBullet(tdInhoud, 'Een ruit kun je verdelen in vier congruente driehoeken.');
    maakSub(tdInhoud, 'Door bij de ruit nog eens vier van die congruente driehoeken te leggen, krijg je een rechthoek.');

    // Afbeelding ruit (inline, gecentreerd)
    maakAfbeelding(tdInhoud, 'afbeeldingen/th_125_003_ruit.svg', '8cm');

    maakSub(tdInhoud, 'De oppervlakte van een ruit is dus de helft van de oppervlakte van een rechthoek.');
    maakSub(tdInhoud, 'De basis van deze rechthoek is de lengte van de ene diagonaal van de ruit: <em>d</em><sub>1</sub>.');
    maakSub(tdInhoud, 'De hoogte van deze rechthoek is de lengte van de andere diagonaal van de ruit: <em>d</em><sub>2</sub>.');
    maakSub(tdInhoud, 'oppervlakte = eerste diagonaal · tweede diagonaal : 2');

    maakSpanMetRuimte(tdInhoud, '0.1cm');
    tdInhoud.appendChild(maakFormuleBalk('<em>A</em><sub>ruit</sub> = <em>d</em><sub>1</sub> · <em>d</em><sub>2</sub> : 2', '7cm'));

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ══ TRAPEZIUM ════════════════════════════════════════════════

    // Bullet
    maakBullet(tdInhoud, 'Met twee congruente trapezia kun je een parallellogram maken.');

    // Afbeelding trapezium (inline, gecentreerd)
    maakAfbeelding(tdInhoud, 'afbeeldingen/th_125_003_trapezium.svg', '8cm');

    maakSub(tdInhoud, 'De oppervlakte van een trapezium is dus de helft van de oppervlakte van een parallellogram.');
    maakSub(tdInhoud, 'De basis van dit parallellogram is de som van de basissen van het trapezium: <em>b</em><sub>1</sub> + <em>b</em><sub>2</sub>.');
    maakSub(tdInhoud, 'De hoogte van dit parallellogram is de hoogte van het trapezium: <em>h</em>.');
    maakSub(tdInhoud, 'oppervlakte = (eerste basis + tweede basis) · hoogte : 2');

    maakSpanMetRuimte(tdInhoud, '0.1cm');
    tdInhoud.appendChild(maakFormuleBalk('<em>A</em><sub>trapezium</sub> = (<em>b</em><sub>1</sub> + <em>b</em><sub>2</sub>) · <em>h</em> : 2', '7cm'));

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

  // ── Hulpfuncties ────────────────────────────────────────────

  function maakBullet(container, htmlTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'flex-start';

    const lbl = maakSpanBreedte('0.4cm', '•');
    lbl.classList.add('lbl');
    lbl.style.flexShrink = '0';
    rij.appendChild(lbl);

    const tekst = htmlSpan(htmlTekst);
    tekst.classList.add('theorietekst');
    rij.appendChild(tekst);

    container.appendChild(rij);
  }

  function maakSub(container, htmlTekst) {
    const sub = htmlSpan(htmlTekst);
    sub.classList.add('theorietekst');
    sub.style.paddingLeft = '0.4cm';
    sub.style.display = 'block';
    container.appendChild(sub);
  }

  function maakAfbeelding(container, src, breedte) {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.padding = '0.1cm 0';
    const img = document.createElement('img');
    img.src = src;
    img.style.width = breedte;
    div.appendChild(img);
    container.appendChild(div);
  }

  function maakFormuleBalk(formuleTekst, breedte = null) {
    const balk = document.createElement('div');
    balk.style.display = 'inline-flex';
    balk.style.alignItems = 'center';
    balk.style.gap = '0.2cm';
    balk.style.backgroundColor = 'var(--groen-pastel)';
    balk.style.padding = '0.05cm 0.2cm';
    balk.style.marginLeft = '0.4cm';
    if (breedte) balk.style.width = breedte;

    const balkLbl = document.createElement('span');
    balkLbl.innerHTML = '<strong>Formule:</strong>';
    balkLbl.classList.add('theorietekst');

    const balkVal = htmlSpan(formuleTekst);
    balkVal.classList.add('theorietekst');

    balk.appendChild(balkLbl);
    balk.appendChild(balkVal);
    return balk;
  }

})();
