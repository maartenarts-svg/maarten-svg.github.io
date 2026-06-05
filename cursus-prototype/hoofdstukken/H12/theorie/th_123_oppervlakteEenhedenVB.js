/* ============================================================
   H12 / th_123_oppervlakteEenhedenVB.js
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
    kader.style.tableLayout = "fixed";

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
    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--oranje-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Twee kolommen: beide voorbeelden links | ladder rechts
    {
      const kolommen = document.createElement('div');
      kolommen.style.display = 'flex';
      kolommen.style.alignItems = 'flex-start';
      kolommen.style.gap = '0.3cm';

      // --- Linkerkolom: voorbeeld 1 + voorbeeld 2 + tip ---
      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
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
        const tekst = htmlSpan('1 dam<sup>2</sup> is 100<sup>3</sup> keer groter dan 1 cm<sup>2</sup>.');
        tekst.style.flex = '1';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        linksDiv.appendChild(rij);
        maakSpanMetRuimte(linksDiv, '0.2cm');
      }

      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';
        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);
        const tekst = htmlSpan('1 dm<sup>2</sup> is 100<sup>4</sup> keer kleiner dan 1 km<sup>2</sup>.');
        tekst.style.flex = '1';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        linksDiv.appendChild(rij);
      }

      maakSpanMetRuimte(linksDiv, '0.2cm');

      {
        const divTip = document.createElement('div');
        divTip.style.display = 'flex';
        const SpL = htmlSpan('Tip!');
        SpL.style.fontWeight = 'bold';
        SpL.style.flex = '0 0 10%';
        SpL.style.display = 'flex';
        SpL.style.alignItems = 'top';
        const SpR = htmlSpan('Werk met machten van 100. De exponent geeft weer hoeveel stappen je naar boven of naar onder zet.');
        SpR.style.flex = '1';
        SpR.style.minWidth = '0';
        SpR.classList.add('theorietekst');
        divTip.appendChild(SpL);
        divTip.appendChild(SpR);
        linksDiv.appendChild(divTip);
      }

      // --- Rechterkolom: ladder SVG ---
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';

      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_123_001_eenhedenladderVB.svg';
      img.style.width = '200px';
      rechtsDiv.appendChild(img);

      kolommen.appendChild(linksDiv);
      kolommen.appendChild(rechtsDiv);
      tdInhoud.appendChild(kolommen);
    }

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

})();
