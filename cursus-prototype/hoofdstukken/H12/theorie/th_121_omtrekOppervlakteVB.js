/* ============================================================
   H12 / th_121_demoVB.js
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

    // Vraagstelling
    {
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(htmlSpan('Bereken de omtrek en de oppervlakte van de figuur.'));
      maakSpanMetRuimte(div01, '0.1cm');
    }

    // Centrale figuur
    {
      const figuurDiv = document.createElement('div');
      figuurDiv.style.textAlign = 'center';
      const img = document.createElement('img');
      img.src = 'afbeeldingen/th_121_003_figuur.svg';
      img.style.width = '180px';
      figuurDiv.appendChild(img);
      tdInhoud.appendChild(figuurDiv);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Twee kolommen: omtrek | oppervlakte
    {
      const kolommen = document.createElement('div');
      kolommen.style.display = 'flex';
      kolommen.style.gap = '1cm';
      kolommen.style.alignItems = 'flex-start';

      // --- Linkerkolom: Omtrek ---
      const linkerKolom = document.createElement('div');
      linkerKolom.style.flex = '1';
      linkerKolom.style.display = 'flex';
      linkerKolom.style.flexDirection = 'column';
      linkerKolom.style.alignItems = 'center';

      const titelOmtrek = htmlSpan('<strong>Omtrek</strong>');
      linkerKolom.appendChild(titelOmtrek);
      maakSpanMetRuimte(linkerKolom, '0.05cm');

      const imgOmtrek = document.createElement('img');
      imgOmtrek.src = 'afbeeldingen/th_121_004_omtrek.svg';
      imgOmtrek.style.width = '180px';
      linkerKolom.appendChild(imgOmtrek);
      maakSpanMetRuimte(linkerKolom, '0.05cm');

      const berekenOmtrek = document.createElement('div');
      berekenOmtrek.style.display = 'flex';
      berekenOmtrek.style.flexDirection = 'column';
      [
        htmlSpan('<em>P</em> = 4 + 1 + 3 + 2 + 1 + 1 + 2 + 4'),
        htmlSpan('&nbsp;&nbsp;&nbsp;= 18')
      ].forEach(t => {
        const span = document.createElement('span');
        span.appendChild(t);
        berekenOmtrek.appendChild(span);
      });
      linkerKolom.appendChild(berekenOmtrek);

      // --- Rechterkolom: Oppervlakte ---
      const rechterKolom = document.createElement('div');
      rechterKolom.style.flex = '1';
      rechterKolom.style.display = 'flex';
      rechterKolom.style.flexDirection = 'column';
      rechterKolom.style.alignItems = 'center';

      const titelOppervlakte = htmlSpan('<strong>Oppervlakte</strong>');
      rechterKolom.appendChild(titelOppervlakte);
      maakSpanMetRuimte(rechterKolom, '0.05cm');

      const imgOppervlakte = document.createElement('img');
      imgOppervlakte.src = 'afbeeldingen/th_121_005_oppervlakte.svg';
      imgOppervlakte.style.width = '180px';
      rechterKolom.appendChild(imgOppervlakte);
      maakSpanMetRuimte(rechterKolom, '0.05cm');

      const berekenOppervlakte = document.createElement('div');
      berekenOppervlakte.style.display = 'flex';
      berekenOppervlakte.style.flexDirection = 'column';
      [
        htmlSpan('<em>A</em> = 8')
      ].forEach(t => {
        const span = document.createElement('span');
        span.appendChild(t);
        berekenOppervlakte.appendChild(span);
      });
      rechterKolom.appendChild(berekenOppervlakte);

      kolommen.appendChild(linkerKolom);
      kolommen.appendChild(rechterKolom);
      tdInhoud.appendChild(kolommen);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

})();
