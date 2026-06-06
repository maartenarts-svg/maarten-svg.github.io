/* ============================================================
   H12 / th_125_oppervlakteParallellogramDriehoek.js
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
    tdKort.appendChild(htmlSpan('oppervlakte van een parallellogram en een driehoek'));

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

    // ══ PARALLELLOGRAM ══════════════════════════════════════════

    {
      const titel = htmlSpan('Parallellogram');
      titel.classList.add('theorie');
      titel.style.display = 'block';
      tdInhoud.appendChild(titel);
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    // Rij 1: omvormen tot rechthoek
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('Elk parallellogram kun je omvormen tot een rechthoek.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        linksDiv.appendChild(rij);
      }

      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flex = '1';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const imgParRecht = document.createElement('img');
      imgParRecht.src = 'afbeeldingen/th_125_001_par_recht.svg';
      imgParRecht.style.width = '168px';
      rechtsDiv.appendChild(imgParRecht);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    // Rij 2: zelfde oppervlakte + formule, naast parallellogram-figuur
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('Een parallellogram heeft dus dezelfde oppervlakte als een rechthoek met dezelfde basis en dezelfde hoogte.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        linksDiv.appendChild(rij);
      }

      {
        const sub = htmlSpan('oppervlakte = basis · hoogte');
        sub.classList.add('theorietekst');
        sub.style.paddingLeft = '0.4cm';
        sub.style.display = 'block';
        linksDiv.appendChild(sub);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      linksDiv.appendChild(maakFormuleBalk('<em>A</em><sub>parallellogram</sub> = <em>bh</em>', '7cm'));

      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flex = '1';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const imgPar = document.createElement('img');
      imgPar.src = 'afbeeldingen/th_125_001_parallellogram.svg';
      imgPar.style.width = '168px';
      rechtsDiv.appendChild(imgPar);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ══ DRIEHOEK ════════════════════════════════════════════════

    {
      const titel = htmlSpan('Driehoek');
      titel.classList.add('theorie');
      titel.style.display = 'block';
      tdInhoud.appendChild(titel);
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    // Rij 1: twee driehoeken vormen een parallellogram
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('Met twee driehoeken kun je een parallellogram vormen.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        linksDiv.appendChild(rij);
      }

      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flex = '1';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const imgDriePar = document.createElement('img');
      imgDriePar.src = 'afbeeldingen/th_125_001_drie_par.svg';
      imgDriePar.style.width = '168px';
      rechtsDiv.appendChild(imgDriePar);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    maakSpanMetRuimte(tdInhoud, '0.1cm');

    // Rij 2: helft van parallellogram + formule, naast driehoek-figuur
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';

        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);

        const tekst = htmlSpan('De oppervlakte van een driehoek is de helft van de oppervlakte van een parallellogram met dezelfde basis en hoogte.');
        tekst.style.width = '7cm';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);

        linksDiv.appendChild(rij);
      }

      {
        const sub = htmlSpan('oppervlakte = basis · hoogte : 2');
        sub.classList.add('theorietekst');
        sub.style.paddingLeft = '0.4cm';
        sub.style.display = 'block';
        linksDiv.appendChild(sub);
      }

      maakSpanMetRuimte(linksDiv, '0.1cm');

      linksDiv.appendChild(maakFormuleBalk('<em>A</em><sub>driehoek</sub> = <em>bh</em> : 2', '7cm'));

      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flex = '1';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const imgDrie = document.createElement('img');
      imgDrie.src = 'afbeeldingen/th_125_001_driehoek.svg';
      imgDrie.style.width = '130px';
      rechtsDiv.appendChild(imgDrie);

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
