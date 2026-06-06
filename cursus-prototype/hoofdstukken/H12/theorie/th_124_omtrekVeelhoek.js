/* ============================================================
   H12 / th_124_omtrekVeelhoek.js
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
    tdKort.appendChild(htmlSpan('omtrek van veelhoeken'));

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

    // ── SECTIE 1: Veelhoek ──────────────────────────────────
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      // Linkerkolom: tekst + labelrijen + formulebalk
      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
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
        const tekst = htmlSpan('Om de omtrek van een veelhoek te berekenen, maak je de som van de lengten van alle zijden van de figuur.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        linksDiv.appendChild(rij);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Labelrijen: formule / berekening / antwoord
      [
        { lbl: 'formule:',            val: '<em>P</em> = som van de zijden' },
        { lbl: 'berekening (in dm):', val: '1,4 + 3,6 + 3,2 + 3 = 11,2' },
        { lbl: 'antwoord:',           val: 'De omtrek is 11,2 dm.' },
      ].forEach(({ lbl, val }) => {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'baseline';
        rij.style.paddingLeft = '0.4cm';
        rij.style.paddingBottom = '0.1cm';

        const lblSpan = document.createElement('span');
        lblSpan.style.width = '3.2cm';
        lblSpan.style.flexShrink = '0';
        lblSpan.classList.add('theorietekst');
        lblSpan.textContent = lbl;

        const valSpan = htmlSpan(val);
        valSpan.classList.add('theorietekst');

        rij.appendChild(lblSpan);
        rij.appendChild(valSpan);
        linksDiv.appendChild(rij);
      });

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Groene formulebalk
      linksDiv.appendChild(maakFormuleBalk('<em>P</em><sub>veelhoek</sub> = som van de zijden','7cm'));

      // Rechterkolom: afbeelding
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';
      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_124_001_veelhoek.svg';
      img.style.width = '200px';
      rechtsDiv.appendChild(img);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0cm');

    // ── SECTIE 2: Vierkant en ruit ──────────────────────────
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      // Linkerkolom
      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
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
        const tekst = htmlSpan('Omdat een ruit en een vierkant vier even lange zijden hebben, is de omtrek gelijk aan vier keer de zijde.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        linksDiv.appendChild(rij);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // omtrek = 4 · zijde
      {
        const rij = document.createElement('div');
        rij.style.paddingLeft = '0.4cm';
        const t = htmlSpan('omtrek = 4 · zijde');
        t.classList.add('theorietekst');
        rij.appendChild(t);
        linksDiv.appendChild(rij);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Twee groene formulebalken
      linksDiv.appendChild(maakFormuleBalk('<em>P</em><sub>vierkant</sub> = 4<em>z</em>','7cm'));
      maakSpanMetRuimte(linksDiv, '0.05cm');
      linksDiv.appendChild(maakFormuleBalk('<em>P</em><sub>ruit</sub> = 4<em>z</em>','7cm'));

      // Rechterkolom: vierkant + ruit naast elkaar
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.gap = '0.1cm';
      rechtsDiv.style.alignItems = 'flex-start';

      const imgVierkant = document.createElement('img');
      imgVierkant.src = 'afbeeldingen/th_124_001_vierkant.svg';
      imgVierkant.style.width = '90px';
      rechtsDiv.appendChild(imgVierkant);

      const imgRuit = document.createElement('img');
      imgRuit.src = 'afbeeldingen/th_124_001_ruit.svg';
      imgRuit.style.width = '150px';
      rechtsDiv.appendChild(imgRuit);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.3cm');

    // ── SECTIE 3: Rechthoek ─────────────────────────────────
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      // Linkerkolom
      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
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
        const tekst = htmlSpan('Omdat een rechthoek twee paar even lange zijden heeft, is de omtrek het dubbele van de som van de lengte en de breedte.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        linksDiv.appendChild(rij);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // omtrek = 2 · (basis + hoogte)
      {
        const rij = document.createElement('div');
        rij.style.paddingLeft = '0.4cm';
        const t = htmlSpan('omtrek = 2 · (basis + hoogte)');
        t.classList.add('theorietekst');
        rij.appendChild(t);
        linksDiv.appendChild(rij);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Groene formulebalk
      linksDiv.appendChild(maakFormuleBalk('<em>P</em><sub>rechthoek</sub> = 2 · (<em>b</em> + <em>h</em>)','7cm'));

      // Rechterkolom: afbeelding
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';
      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_124_001_rechthoek.svg';
      img.style.width = '200px';
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
