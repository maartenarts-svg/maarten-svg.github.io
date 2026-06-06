/* ============================================================
   H12 / th_125_oppervlakteCirkelVB.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';
  const breedteSoort = '37%';

  /*====voorbeeldkader=========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = 'fixed';

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--oranje-scheiding)';
    tdSoort.style.backgroundColor = 'var(--oranje-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;
    tdSoort.style.width = breedteSoort;
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Voorbeeld'));

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan(''));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // --- Eigenlijk voorbeeld ---
    const trInhoud = document.createElement('tr');
    const tdInhoud = document.createElement('td');
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--oranje-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Opgave
    {
      const opgave = htmlSpan('Bereken de oppervlakte van een cirkel met een straal van 2,7 m.');
      opgave.classList.add('theorietekst');
      opgave.style.display = 'block';
      tdInhoud.appendChild(opgave);
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    maakRij(tdInhoud, 'formule:',             '<em>A</em> = π<em>r</em><sup>2</sup>');
    maakRij(tdInhoud, 'berekening (in m²):',  'π · 2,7<sup>2</sup> ≈ 22,90');
    maakRij(tdInhoud, 'antwoord:',            'De oppervlakte is 22,90 m².');

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  // ── Hulpfunctie: labelrij zonder bullet-inspringing ─────
  function maakRij(container, labelTekst, waardeTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'baseline';
    rij.style.paddingBottom = '0.05cm';

    const lblSpan = document.createElement('span');
    lblSpan.style.width = '3.2cm';
    lblSpan.style.flexShrink = '0';
    lblSpan.classList.add('theorietekst');
    lblSpan.textContent = labelTekst;

    const valSpan = htmlSpan(waardeTekst);
    valSpan.classList.add('voorgedrukt');

    rij.appendChild(lblSpan);
    rij.appendChild(valSpan);
    container.appendChild(rij);
  }

})();
