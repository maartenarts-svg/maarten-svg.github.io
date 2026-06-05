/* ============================================================
   H11 / th_112_vergelijkingOplossen
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
    tdKort.appendChild(htmlSpan('vergelijkingen oplossen'));

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

    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = document.createElement('span');
      lbl01.appendChild(htmlSpan('1|'));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Werk de haakjes weg.'));
      
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
      th_102_begrA.appendChild(htmlSpan('Werk de termen met de onbekende weg uit het ene lid.'));
      
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
      lbl01.appendChild(htmlSpan(''));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Werk de termen zonder de onbekende weg uit het andere lid.'));
      
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
      lbl01.appendChild(htmlSpan('3|'));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Herleid beide leden.'));
      
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
      lbl01.appendChild(htmlSpan('4|'));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Werk de factor weg uit het ene lid.'));
      
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
      lbl01.appendChild(htmlSpan('5|'));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Herleid beide leden.'));
      
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
      lbl01.appendChild(htmlSpan(''));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Je hebt nu de oplossing.'));
      
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
      lbl01.appendChild(htmlSpan('6|'));
      lbl01.classList.add('lbl');
      const th_102_begrA_b1 = maakSpanBreedte('0.65cm', lbl01);
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Controleer de oplossing.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
    }

    voegWitruimteToe(tdInhoud,'0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');




})();