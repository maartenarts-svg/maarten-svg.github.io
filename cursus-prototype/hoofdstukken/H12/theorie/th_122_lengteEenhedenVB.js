/* ============================================================
   H12 / th_122_lengteEenhedenVB.js
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
      kolommen.style.alignItems = 'center';
      kolommen.style.gap = '0.3cm';

      // --- Linkerkolom: voorbeeld 1 + voorbeeld 2 ---
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
        const tekst = htmlSpan('1 dam is 10<sup>3</sup> keer groter dan 1 cm.');
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
        const tekst = htmlSpan('1 dm is 10<sup>4</sup> keer kleiner dan 1 km.');
        tekst.style.flex = '1';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        linksDiv.appendChild(rij);
      }

      // --- Rechterkolom: ladder SVG ---
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';

      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_122_001_eenhedenladderVB.svg';
      img.style.width = '180px';
      rechtsDiv.appendChild(img);

      kolommen.appendChild(linksDiv);
      kolommen.appendChild(rechtsDiv);
      tdInhoud.appendChild(kolommen);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

})();
