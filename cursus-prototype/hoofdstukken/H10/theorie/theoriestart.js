/* ============================================================
   H10 / H10_schema1.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';   // aanpasbaar
  const breedteSoort = '37%'    // aanpasbaar  

  /*====theoriekader===========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    // Soort theorie
    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--groen-scheiding)';
    tdSoort.style.backgroundColor = 'var(--groen-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;   
    tdSoort.style.width = breedteSoort;        
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Voorbeeldtekst'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;   // aanpasbaar
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.appendChild(htmlSpan('Voorbeeldtekst voor kort'));

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

      //→ items onder elkaar zetten
      const divCol = document.createElement('div');
      divCol.style.display = 'flex';
      divCol.style.flexDirection = 'column';
      ["Item 1", "Item 2"].forEach(text => {
        const span = document.createElement("span");
        span.style.minHeight = '0.9cm';
        span.textContent = text;
        span.style.display = 'flex'; //deze en volgende om verticaal te centreren
        span.style.alignItems = 'center';
        divCol.appendChild(span);
      });
      tdInhoud.appendChild(divCol);

      //→ items naast elkaar zetten
      const divRow = document.createElement("div");
      divRow.style.display = "flex"; 
      ["Links", "Rechts Rechts Rechts Rechts Rechts Rechts Rechts Rechts Rechts RechtsRechts Rechts Rechts Rechts"].forEach(text => {
        const span = document.createElement("span");
        span.textContent = text;
        divRow.appendChild(span);
      });
      tdInhoud.appendChild(divRow);

      const divTest = document.createElement("div");
      divTest.style.display = "flex";
      const Test1 = maakOpTdazZonder(htmlSpan('Probeer!'),false);
      Test1.style.flex = "0 0 50%";
      const Test2 = maakSlTdZonderInsprong('',false);
      Test2.style.flex = "1";
      Test2.style.minWidth = '0';
      divTest.appendChild(Test1);
      divTest.appendChild(Test2);
      tdInhoud.appendChild(divTest);

      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/oe_102K04.svg";
      img.style.width = '20%';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      ["Lijn 1", "Lijn 2"].forEach(t => {
        const span = document.createElement("span");
        span.textContent = t;
        textDiv.appendChild(span);
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);

      // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'1cm');

  /*====voorbeeldkader=========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    // Soort voorbeeld
    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--oranje-scheiding)';
    tdSoort.style.backgroundColor = 'var(--oranje-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;   
    tdSoort.style.width = breedteSoort;        
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Voorbeeldtekst'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('Voorbeeldtekst voor kort'));

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

      //→ items onder elkaar zetten
      const divCol = document.createElement('div');
      divCol.style.display = 'flex';
      divCol.style.flexDirection = 'column';
      ["Item 1", "Item 2"].forEach(text => {
        const span = document.createElement("span");
        span.style.minHeight = '0.9cm';
        span.textContent = text;
        span.style.display = 'flex'; //deze en volgende om verticaal te centreren
        span.style.alignItems = 'center';
        divCol.appendChild(span);
      });
      tdInhoud.appendChild(divCol);

      //→ items naast elkaar zetten
      const divRow = document.createElement("div");
      divRow.style.display = "flex"; 
      ["Links", "Rechts Rechts Rechts Rechts Rechts Rechts Rechts Rechts Rechts RechtsRechts Rechts Rechts Rechts"].forEach(text => {
        const span = document.createElement("span");
        span.textContent = text;
        divRow.appendChild(span);
      });
      tdInhoud.appendChild(divRow);

      const divTest = document.createElement("div");
      divTest.style.display = "flex";
      const Test1 = maakOpTdazZonder(htmlSpan('Probeer!'),false);
      Test1.style.flex = "0 0 50%";
      const Test2 = maakSlTdZonderInsprong('',false);
      Test2.style.flex = "1";
      Test2.style.minWidth = '0';
      divTest.appendChild(Test1);
      divTest.appendChild(Test2);
      tdInhoud.appendChild(divTest);

      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/oe_102K04.svg";
      img.style.width = '20%';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      ["Lijn 1", "Lijn 2"].forEach(t => {
        const span = document.createElement("span");
        span.textContent = t;
        textDiv.appendChild(span);
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);

      // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

})();