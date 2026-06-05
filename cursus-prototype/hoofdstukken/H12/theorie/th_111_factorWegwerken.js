/* ============================================================
   H11 / th_111_factorWegwerken.js
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
    tdSoort.appendChild(htmlSpan('werkwijze'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('een factor wegwerken in een lid van een vergelijking'));

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

    voegWitruimteToe(tdInhoud,'0.1cm');

    //eerste zin
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(htmlSpan('Om in een vergelijking een factor weg te werken:'));
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = document.createElement('span');
      lbl01.appendChild(htmlSpan('1|'));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('deel je beide leden door die factor;'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = document.createElement('span');
      lbl01.appendChild(htmlSpan('2|'));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('herleid je beide leden.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    //aanvulling onder de tabel
    {
      const divOpm = document.createElement('div');
      tdInhoud.appendChild(divOpm);
      divOpm.style.display = "flex";
      const SpL = htmlSpan('Opmerking!');
      SpL.style.fontWeight = 'bold';
      SpL.style.flex = "0 0 15%";
      SpL.style.display = 'flex';
      SpL.style.alignItems = 'top';
      const SpR = htmlSpan('Controleer door de oplossing in de vergelijking in te vullen.');
      SpR.style.flex = "1";
      SpR.style.minWidth = '0';
      SpR.classList.add('theorietekst');
      divOpm.appendChild(SpL);
      divOpm.appendChild(SpR);
    }

    voegWitruimteToe(tdInhoud,'0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');




})();