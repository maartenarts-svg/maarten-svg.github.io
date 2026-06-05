/* ============================================================
   H12 / th_121_demo.js
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
    kader.style.tableLayout = "fixed";

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
    tdSoort.appendChild(htmlSpan('Begrip'));

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('omtrek en oppervlakte'));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // --- Eigenlijke theorie ---
    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--groen-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Omtrek ---
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "flex-start";
      wrapper.style.gap = "10px";

      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";
      textDiv.style.flex = "1";

      const titel = htmlSpan('Omtrek');
      titel.classList.add('theorie');
      textDiv.appendChild(titel);
      maakSpanMetRuimte(textDiv, '0.05cm');

      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';
        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);
        const tekst = htmlSpan('De omtrek van een figuur is de afstand die je aflegt als je volledig rond de figuur wandelt.');
        tekst.style.flex = '1';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        textDiv.appendChild(rij);
        maakSpanMetRuimte(textDiv, '0.05cm');
      }

      {
        const rij = document.createElement('span');
        rij.appendChild(maakSpanBreedte('0.4cm', ''));
        rij.appendChild(htmlSpan('Symbool: <em>P</em>'));
        textDiv.appendChild(rij);
      }

      const img = document.createElement("img");
      img.src = "afbeeldingen/th_121_001_omtrek.svg";
      img.style.width = '100px';

      wrapper.appendChild(textDiv);
      wrapper.appendChild(img);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // --- Oppervlakte ---
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "flex-start";
      wrapper.style.gap = "10px";

      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";
      textDiv.style.flex = "1";

      const titel = htmlSpan('Oppervlakte');
      titel.classList.add('theorie');
      textDiv.appendChild(titel);
      maakSpanMetRuimte(textDiv, '0.05cm');

      {
        const rij = document.createElement('div');
        rij.style.display = 'flex';
        rij.style.alignItems = 'flex-start';
        const lbl = maakSpanBreedte('0.4cm', '•');
        lbl.classList.add('lbl');
        lbl.style.flexShrink = '0';
        rij.appendChild(lbl);
        const tekst = htmlSpan('De oppervlakte van een figuur is de plaats die de figuur inneemt in het vlak.');
        tekst.style.flex = '1';
        tekst.style.minWidth = '0';
        tekst.classList.add('theorietekst');
        rij.appendChild(tekst);
        textDiv.appendChild(rij);
        maakSpanMetRuimte(textDiv, '0.05cm');
      }

      {
        const rij = document.createElement('span');
        rij.appendChild(maakSpanBreedte('0.4cm', ''));
        rij.appendChild(htmlSpan('Symbool: <em>A</em>'));
        textDiv.appendChild(rij);
      }

      const img = document.createElement("img");
      img.src = "afbeeldingen/th_121_002_oppervlakte.svg";
      img.style.width = '100px';

      wrapper.appendChild(textDiv);
      wrapper.appendChild(img);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

})();
