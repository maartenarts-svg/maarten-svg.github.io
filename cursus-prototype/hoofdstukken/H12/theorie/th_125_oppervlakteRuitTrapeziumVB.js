/* ============================================================
   H12 / th_125_oppervlakteRuitTrapeziumVB.js
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

    // Intro
    {
      const intro = htmlSpan('Bereken de oppervlakte.');
      intro.classList.add('theorietekst');
      intro.style.display = 'block';
      tdInhoud.appendChild(intro);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Twee kolommen via maakOefTabel
    const { tbody } = maakOefTabel(tdInhoud, 2, true);

    // ── Rij 1: figuren ──────────────────────────────────────
    {
      const tr = document.createElement('tr');

      const tdFig1 = document.createElement('td');
      tdFig1.style.textAlign = 'center';
      tdFig1.style.verticalAlign = 'middle';
      tdFig1.style.borderRight = '1px solid var(--oranje-scheiding)';
      tdFig1.style.paddingRight = '0.2cm';
      const imgRuit = document.createElement('img');
      imgRuit.src = 'afbeeldingen/th_125_003_ruitVB.svg';
      imgRuit.style.width = '224px';
      tdFig1.appendChild(imgRuit);

      const tdFig2 = document.createElement('td');
      tdFig2.style.textAlign = 'center';
      tdFig2.style.verticalAlign = 'middle';
      tdFig2.style.paddingLeft = '0.2cm';
      const imgTrap = document.createElement('img');
      imgTrap.src = 'afbeeldingen/th_125_003_trapeziumVB.svg';
      imgTrap.style.width = '224px';
      tdFig2.appendChild(imgTrap);

      tr.appendChild(tdFig1);
      tr.appendChild(tdFig2);
      tbody.appendChild(tr);
    }

    // ── Rij 2: berekeningen ─────────────────────────────────
    {
      const tr = document.createElement('tr');

      // Linkercel: ruit (d₁ = 16 m, d₂ = 12 m)
      const tdBer1 = document.createElement('td');
      tdBer1.style.verticalAlign = 'top';
      tdBer1.style.borderRight = '1px solid var(--oranje-scheiding)';
      tdBer1.style.paddingRight = '0.2cm';
      maakRij(tdBer1, 'formule:',            '<em>A</em> = <em>d</em><sub>1</sub> · <em>d</em><sub>2</sub> : 2');
      maakRij(tdBer1, 'berekening (in m²):', '16 · 12 : 2 <br>= 96');
      maakRij(tdBer1, 'antwoord:',           'De oppervlakte is 96 m².');

      // Rechtercel: trapezium (b₁ = 4,8 cm, b₂ = 2,4 cm, h = 3,6 cm)
      const tdBer2 = document.createElement('td');
      tdBer2.style.verticalAlign = 'top';
      tdBer2.style.paddingLeft = '0.2cm';
      maakRij(tdBer2, 'formule:',             '<em>A</em> = (<em>b</em><sub>1</sub> + <em>b</em><sub>2</sub>) · <em>h</em> : 2');
      maakRij(tdBer2, 'berekening (in cm²):', '(4,8 + 2,4) · 3,6 : 2 <br>= 12,96');
      maakRij(tdBer2, 'antwoord:',            'De oppervlakte is <br>12,96 cm².');

      tr.appendChild(tdBer1);
      tr.appendChild(tdBer2);
      tbody.appendChild(tr);
    }

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
    lblSpan.style.width = '3.3cm';
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
