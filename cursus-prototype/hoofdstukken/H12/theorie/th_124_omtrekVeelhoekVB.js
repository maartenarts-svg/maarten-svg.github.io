/* ============================================================
   H12 / th_124_omtrekVeelhoekVB.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';
  const breedteSoort = '37%';
  const labelBreedte = '3.2cm';

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
      const intro = htmlSpan('Bereken de omtrek.');
      intro.classList.add('theorietekst');
      intro.style.display = 'block';
      tdInhoud.appendChild(intro);
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    // ── SECTIE 1: Vierkant ──────────────────────────────────
    {
      // Bullet + titel
      maakBulletTitel(tdInhoud, 'Vierkant <em>ABCD</em> met zijde van 3,5 dm');

      // Labelrijen
      maakLabelRij(tdInhoud, 'formule:',           '<em>P</em> = 4<em>z</em>');
      maakLabelRij(tdInhoud, 'berekening (in dm):', '4 · 3,5 = 14');
      maakLabelRij(tdInhoud, 'antwoord:',           'De omtrek is 14 dm.');
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    // ── SECTIE 2: Rechthoek ─────────────────────────────────
    {
      // Bullet + titel
      maakBulletTitel(tdInhoud, 'Rechthoek met afmetingen van 3 m op 27 dm');

      // Omzetten: twee waarden onder elkaar
      maakLabelRijMeerdereWaarden(tdInhoud, 'omzetten:', [
        '<em>b</em> = 3 m = 30 dm',
        '<em>h</em> = 27 dm',
      ]);

      maakLabelRij(tdInhoud, 'formule:',            '<em>P</em> = 2(<em>b</em> + <em>h</em>)');
      maakLabelRij(tdInhoud, 'berekening (in dm):',  '2 · (30 + 27) = 114');
      maakLabelRij(tdInhoud, 'antwoord:',            'De omtrek is 114 dm.');
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    // ── SECTIE 3: Ruit ──────────────────────────────────────
    {
      // Bullet + titel
      maakBulletTitel(tdInhoud, 'Ruit <em>KLMN</em> met zijde van 5 mm');

      // Labelrijen
      maakLabelRij(tdInhoud, 'formule:',           '<em>P</em> = 4<em>z</em>');
      maakLabelRij(tdInhoud, 'berekening (in mm):', '4 · 5 = 20');
      maakLabelRij(tdInhoud, 'antwoord:',           'De omtrek is 20 mm.');
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  // ── Hulpfuncties ────────────────────────────────────────────

  // Bullet + vetgedrukte sectietitel
  function maakBulletTitel(container, htmlTekst) {
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

  // Labelrij: label links (vaste breedte) + blauwe waarde rechts
  function maakLabelRij(container, labelTekst, waardeTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'baseline';
    rij.style.paddingLeft = '0.4cm';
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

  // Labelrij met meerdere waarden onder elkaar (bv. omzetten)
  function maakLabelRijMeerdereWaarden(container, labelTekst, waarden) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'flex-start';
    rij.style.paddingLeft = '0.4cm';
    rij.style.paddingBottom = '0.05cm';

    const lblSpan = document.createElement('span');
    lblSpan.style.width = '3.2cm';
    lblSpan.style.flexShrink = '0';
    lblSpan.classList.add('theorietekst');
    lblSpan.textContent = labelTekst;

    const waardenDiv = document.createElement('div');
    waardenDiv.style.display = 'flex';
    waardenDiv.style.flexDirection = 'column';

    waarden.forEach(w => {
      const valSpan = htmlSpan(w);
      valSpan.classList.add('voorgedrukt');
      waardenDiv.appendChild(valSpan);
    });

    rij.appendChild(lblSpan);
    rij.appendChild(waardenDiv);
    container.appendChild(rij);
  }

})();
