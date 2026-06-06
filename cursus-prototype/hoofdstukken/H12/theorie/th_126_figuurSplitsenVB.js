/* ============================================================
   H12 / th_126_figuurSplitsenVB.js
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

    // Intro-tekst
    {
      const intro = htmlSpan('Soms kun je de omtrek en de oppervlakte berekenen door de figuur op te splitsen in gekende vlakke figuren.');
      intro.classList.add('theorietekst');
      intro.style.display = 'block';
      tdInhoud.appendChild(intro);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Situatietekst naast figuur
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
      linksDiv.style.minWidth = '0';
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      const zin1 = htmlSpan('De figuur is getekend in een rooster en bestaat uit delen van cirkels.');
      zin1.classList.add('theorietekst');
      zin1.style.display = 'block';
      linksDiv.appendChild(zin1);

      const zin2 = htmlSpan('Elk roostervakje heeft een zijde van 1 cm.');
      zin2.classList.add('theorietekst');
      zin2.style.display = 'block';
      linksDiv.appendChild(zin2);

      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const imgFig = document.createElement('img');
      imgFig.src = 'afbeeldingen/th_126_002_splitsenVB.svg';
      imgFig.style.width = '243px';
      rechtsDiv.appendChild(imgFig);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ── DEELVRAAG a ─────────────────────────────────────────────
    {
      maakVraagRij(tdInhoud, 'a|',
        'Bereken de lengte van de zwarte rand op 0,01 cm nauwkeurig.');

      maakSpanMetRuimte(tdInhoud, '0.1cm');

      const oplA = document.createElement('div');
      oplA.style.paddingLeft = '0.5cm';

      maakOplBullet(oplA, 'Plan:');
      maakOplSub(oplA, 'De lengte van de zwarte rand is de omtrek van de figuur.');
      maakOplSub(oplA, 'De figuur bestaat uit 4 halve cirkels met een straal van 1 cm en 8 halve cirkels met een straal van 0,5 cm.');
      maakOplSub(oplA, 'Dat zijn dus 2 volledige cirkels met een straal van 1 cm en 4 volledige cirkels met een straal van 0,5 cm.');

      maakSpanMetRuimte(oplA, '0.05cm');
      maakOplBullet(oplA, 'Berekening in cm:');
      maakCalcRij(oplA, '6.5cm', '- omtrek cirkel met straal 1 cm:',   '2 · π · 1 = 2π');
      maakCalcRij(oplA, '6.5cm', '- omtrek cirkel met straal 0,5 cm:', '2 · π · 0,5 = π');
      maakCalcRij(oplA, '6.5cm', '- 2 grote en 4 kleine cirkels:',     '2 · 2π + 4 · π ≈ 25,13');

      maakSpanMetRuimte(oplA, '0.05cm');
      maakOplBullet(oplA, 'Antwoord: De omtrek is 25,13 cm.');

      tdInhoud.appendChild(oplA);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ── DEELVRAAG b ─────────────────────────────────────────────
    {
      maakVraagRij(tdInhoud, 'b|',
        'Bereken de oppervlakte van het gekleurde gebied op 0,01 cm² nauwkeurig.');

      maakSpanMetRuimte(tdInhoud, '0.1cm');

      const oplB = document.createElement('div');
      oplB.style.paddingLeft = '0.5cm';

      maakOplBullet(oplB, 'Plan:');
      maakOplSub(oplB, 'Je berekent de oppervlakte van een grote halve cirkel en vermindert dat met de oppervlakte van 2 kleine halve cirkels.');
      maakOplSub(oplB, 'De oppervlakte bestaat dus uit 4 halve cirkels met een straal van 1 cm verminderd met 8 halve cirkels met een straal van 0,5 cm.');
      maakOplSub(oplB, 'Dat zijn dus 2 volledige cirkels met een straal van 1 cm verminderd 4 volledige cirkels met een straal van 0,5 cm.');

      maakSpanMetRuimte(oplB, '0.05cm');
      maakOplBullet(oplB, 'Berekening in cm²:');
      maakCalcRij(oplB, '7cm', '- oppervlakte cirkel met straal 1 cm:',   'π · 1² = π');
      maakCalcRij(oplB, '7cm', '- oppervlakte cirkel met straal 0,5 cm:', 'π · 0,5² = 0,25π');
      maakCalcRij(oplB, '7cm', '- 2 grote min 4 kleine cirkels:',         '2 · π - 4 · 0,25π ≈ 3,14');

      maakSpanMetRuimte(oplB, '0.05cm');
      maakOplBullet(oplB, 'Antwoord: De oppervlakte is 3,14 cm².');

      tdInhoud.appendChild(oplB);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  // ── Hulpfuncties ────────────────────────────────────────────

  function maakVraagRij(container, labelTekst, htmlTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'flex-start';

    const lbl = maakSpanBreedte('0.5cm', labelTekst);
    lbl.classList.add('lbl');
    lbl.style.flexShrink = '0';
    rij.appendChild(lbl);

    const tekst = htmlSpan(htmlTekst);
    tekst.classList.add('theorietekst');
    rij.appendChild(tekst);

    container.appendChild(rij);
  }

  function maakOplBullet(container, htmlTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'flex-start';

    const bul = document.createElement('span');
    bul.style.width = '0.4cm';
    bul.style.display = 'inline-block';
    bul.style.flexShrink = '0';
    bul.classList.add('voorgedrukt');
    bul.textContent = '•';
    rij.appendChild(bul);

    const tekst = htmlSpan(htmlTekst);
    tekst.classList.add('voorgedrukt');
    rij.appendChild(tekst);

    container.appendChild(rij);
  }

  function maakOplSub(container, htmlTekst) {
    const sub = htmlSpan(htmlTekst);
    sub.classList.add('voorgedrukt');
    sub.style.paddingLeft = '0.4cm';
    sub.style.display = 'block';
    container.appendChild(sub);
  }

  function maakCalcRij(container, labelBreedte, labelTekst, waardeTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'baseline';
    rij.style.paddingLeft = '0.4cm';

    const lbl = document.createElement('span');
    lbl.style.width = labelBreedte;
    lbl.style.flexShrink = '0';
    lbl.classList.add('voorgedrukt');
    lbl.textContent = labelTekst;

    const val = htmlSpan(waardeTekst);
    val.classList.add('voorgedrukt');

    rij.appendChild(lbl);
    rij.appendChild(val);
    container.appendChild(rij);
  }

})();
