/* ============================================================
   H12 / th_125_oppervlakteCirkel.js
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
    tdKort.appendChild(htmlSpan('oppervlakte van een cirkel'));

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

    // ── SECTIE 1: spieën → parallellogram ──────────────────
    {
      // Bullet
      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('Door een cirkel in spieën te knippen en die spieën anders te leggen, krijg je een figuur die lijkt op een parallellogram.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        tdInhoud.appendChild(rij);
      }

      // Sub-regel
      {
        const sub = htmlSpan('Wordt het aantal spieën groter, dan lijkt de figuur steeds meer op een parallellogram.');
        sub.classList.add('theorietekst');
        sub.style.paddingLeft = '0.4cm';
        sub.style.width = '7cm';
        sub.style.display = 'block';
        tdInhoud.appendChild(sub);
      }

      maakSpanMetRuimte(tdInhoud, '0.15cm');

      // Afbeelding onder het bulletblok (volle breedte)
      {
        const imgDiv = document.createElement('div');
        imgDiv.style.display = 'flex';
        imgDiv.style.justifyContent = 'center';
        const img = document.createElement('img');
        img.src = 'afbeeldingen/th_125_002_cir_par.svg';
        img.style.width = '80%';
        imgDiv.appendChild(img);
        tdInhoud.appendChild(imgDiv);
      }
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ── SECTIE 2: berekening + formule, naast cirkel-figuur ─
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      // Bullet
      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('De oppervlakte van een cirkel kun je dus berekenen via de oppervlakte van een parallellogram.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        linksDiv.appendChild(rij);
      }

      // Sub-regels
      {
        const sub1 = htmlSpan('De basis van dit parallellogram is even lang als de halve omtrek van de cirkel: π · <em>r</em>.');
        sub1.classList.add('theorietekst');
        sub1.style.paddingLeft = '0.4cm';
        sub1.style.width = '7cm';
        sub1.style.display = 'block';
        linksDiv.appendChild(sub1);
      }
      {
        const sub2 = htmlSpan('De hoogte van dit parallellogram is even lang als de straal van de cirkel: <em>r</em>.');
        sub2.classList.add('theorietekst');
        sub2.style.paddingLeft = '0.4cm';
        sub2.style.width = '7cm';
        sub2.style.display = 'block';
        linksDiv.appendChild(sub2);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Uitwerking (uitgelijnde = tekens)
      maakCalcRij(linksDiv, 'oppervlakte', '= halve omtrek · straal');
      maakCalcRij(linksDiv, '',            '= π · <em>r</em> · <em>r</em>');
      maakCalcRij(linksDiv, '',            '= π<em>r</em><sup>2</sup>');

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Formulebalk
      linksDiv.appendChild(maakFormuleBalk('<em>A</em><sub>cirkel</sub> = π<em>r</em><sup>2</sup>', '7cm'));

      // Rechterkolom: cirkel afbeelding
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flex = '1';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_124_002_cirkel.svg';
      img.style.width = '120px';
      rechtsDiv.appendChild(img);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

  // ── Hulpfuncties ────────────────────────────────────────────

  // Uitgelijnde berekeningsrij: vaste labelkolom + waarde
  function maakCalcRij(container, labelTekst, waardeTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'baseline';
    rij.style.paddingLeft = '0.4cm';

    const lblSpan = document.createElement('span');
    lblSpan.style.width = '2.4cm';
    lblSpan.style.flexShrink = '0';
    lblSpan.classList.add('theorietekst');
    lblSpan.textContent = labelTekst;

    const valSpan = htmlSpan(waardeTekst);
    valSpan.classList.add('theorietekst');

    rij.appendChild(lblSpan);
    rij.appendChild(valSpan);
    container.appendChild(rij);
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
