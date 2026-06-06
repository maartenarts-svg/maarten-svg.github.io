/* ============================================================
   H12 / th_125_oppervlakteRechthoekVierkant.js
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
    tdKort.appendChild(htmlSpan('oppervlakte van een rechthoek en een vierkant'));

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

    // ── SECTIE 1: begrip oppervlakte ────────────────────────
    {
      const rij = document.createElement('div');
      rij.style.display = 'flex';
      rij.style.alignItems = 'flex-start';

      const lbl = maakSpanBreedte('0.4cm', '•');
      lbl.classList.add('lbl');
      lbl.style.flexShrink = '0';
      rij.appendChild(lbl);

      const tekst = htmlSpan('Om de oppervlakte van een vlakke figuur te berekenen, ga je na hoeveel keer een oppervlakte-eenheid in de figuur kan.');
      tekst.style.width = '7cm';
      tekst.style.minWidth = '0';
      tekst.classList.add('theorietekst');
      rij.appendChild(tekst);

      tdInhoud.appendChild(rij);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ── SECTIE 2: Rechthoek ─────────────────────────────────
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      // Linkerkolom
      const linksDiv = document.createElement('div');
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      // Bullet + uitleg
      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('De oppervlakte van een rechthoek kun je berekenen door de lengte te vermenigvuldigen met de breedte.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        linksDiv.appendChild(rij);
      }

      // Sub-regel
      {
        const sub = htmlSpan('oppervlakte = basis · hoogte');
        sub.classList.add('theorietekst');
        sub.style.paddingLeft = '0.4cm';
        sub.style.display = 'block';
        linksDiv.appendChild(sub);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Formulebalk
      linksDiv.appendChild(maakFormuleBalk('<em>A</em><sub>rechthoek</sub> = <em>bh</em>', '7cm'));

      // Rechterkolom: afbeelding
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flex = '1';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_124_001_rechthoek.svg';
      img.style.width = '150px';
      rechtsDiv.appendChild(img);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ── SECTIE 3: Vierkant ──────────────────────────────────
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      // Linkerkolom
      const linksDiv = document.createElement('div');
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      // Bullet + uitleg
      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('Een vierkant is een rechthoek met vier even lange zijden.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        linksDiv.appendChild(rij);
      }

      // Sub-regel
      {
        const sub = htmlSpan('oppervlakte = zijde · zijde');
        sub.classList.add('theorietekst');
        sub.style.paddingLeft = '0.4cm';
        sub.style.display = 'block';
        linksDiv.appendChild(sub);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Formulebalk
      linksDiv.appendChild(maakFormuleBalk('<em>A</em><sub>vierkant</sub> = <em>z</em><sup>2</sup>', '7cm'));

      // Rechterkolom: afbeelding
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flex = '1';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_124_001_vierkant.svg';
      img.style.width = '90px';
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

  // ── Hulpfunctie: groene formulebalk ─────────────────────
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
