/* ============================================================
   H12 / th_122_eenhedenOmzetten.js
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
    tdSoort.appendChild(htmlSpan('Werkwijze'));

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('Lengte-eenheden omzetten'));

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

    // --- Intro-tekst ---
    {
      const span = document.createElement('span');
      span.appendChild(htmlSpan('Meet je lengtes en afstanden, dan gebruik je daarvoor eenheden.'));
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(span);
      maakSpanMetRuimte(div01, '0.05cm');
    }
    {
      const span = document.createElement('span');
      span.appendChild(htmlSpan('Zo is de omtrek van een voetbalveld ongeveer <span class="theorie">300</span> <span class="markeer-lila">m</span>.'));
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(span);
      maakSpanMetRuimte(div01, '0.05cm');
    }
    {
      const span = document.createElement('span');
      span.appendChild(htmlSpan('Hierbij is 1 m <span class="markeer-lila">de eenheid</span> en 300 <span class="theorie">het maatgetal</span>.'));
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(span);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // --- Werkwijze ---
    {
      const span = document.createElement('span');
      span.appendChild(htmlSpan('Wil je een afstand omzetten in een andere eenheid,'));
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(span);
      maakSpanMetRuimte(div01, '0.05cm');
    }

    // Stap 1
    {
      const span = document.createElement('span');
      const lbl = document.createElement('span');
      lbl.appendChild(htmlSpan('1|'));
      lbl.classList.add('lbl');
      span.appendChild(maakSpanBreedte('0.65cm', lbl));
      span.appendChild(htmlSpan('dan onderzoek je eerst hoeveel keer de eenheid groter of kleiner wordt;'));
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(span);
      maakSpanMetRuimte(div01, '0.05cm');
    }

    // Sub: "Gebruik daarvoor de eenhedenladder:"
    {
      const span = document.createElement('span');
      span.style.fontSize = '0.85em';
      span.appendChild(maakSpanBreedte('0.65cm', ''));
      const tekst = htmlSpan('Gebruik daarvoor de eenhedenladder:');
      tekst.style.fontSize = '0.85em';
      span.appendChild(tekst);
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(span);
      maakSpanMetRuimte(div01, '0.05cm');
    }

    // Sub-bullet: één trap naar boven
    {
      const rij = document.createElement('div');
      rij.style.display = 'flex';
      rij.style.alignItems = 'flex-start';
      rij.style.fontSize = '0.85em';
      rij.appendChild(maakSpanBreedte('0.65cm', ''));
      const lbl = maakSpanBreedte('0.4cm', '•');
      lbl.classList.add('lbl');
      rij.appendChild(lbl);
      const tekst = htmlSpan('één stap naar boven is 10 keer groter, twee naar boven is 10<sup>2</sup> keer groter, 3 naar boven is 10<sup>3</sup> keer groter ...;');
      tekst.classList.add('theorietekst');
      tekst.style.fontSize = '0.85em';
      tekst.style.flex = '1';
      tekst.style.minWidth = '0';
      rij.appendChild(tekst);
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(rij);
      maakSpanMetRuimte(div01, '0.05cm');
    }

    // Sub-bullet: één trap naar onder
    {
      const rij = document.createElement('div');
      rij.style.display = 'flex';
      rij.style.alignItems = 'flex-start';
      rij.style.fontSize = '0.85em';
      rij.appendChild(maakSpanBreedte('0.65cm', ''));
      const lbl = maakSpanBreedte('0.4cm', '•');
      lbl.classList.add('lbl');
      rij.appendChild(lbl);
      const tekst = htmlSpan('één stap naar onder is 10 keer kleiner, twee naar onder is 10<sup>2</sup> keer kleiner, 3 naar onder is 10<sup>3</sup> keer kleiner ...');
      tekst.classList.add('theorietekst');
      tekst.style.fontSize = '0.85em';
      tekst.style.flex = '1';
      tekst.style.minWidth = '0';
      rij.appendChild(tekst);
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(rij);
      maakSpanMetRuimte(div01, '0.05cm');
    }

    // Stap 2
    {
      const span = document.createElement('span');
      const lbl = document.createElement('span');
      lbl.appendChild(htmlSpan('2|'));
      lbl.classList.add('lbl');
      span.appendChild(maakSpanBreedte('0.65cm', lbl));
      span.appendChild(htmlSpan('doe daarna het omgekeerde met het maatgetal.'));
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(span);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

})();
