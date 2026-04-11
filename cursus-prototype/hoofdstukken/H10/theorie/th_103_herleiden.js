/* ============================================================
   H10 / th_101_begrippenLettervormen.js
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
    tdSoort.appendChild(htmlSpan('begrip'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;   // aanpasbaar
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.appendChild(htmlSpan('lettervorm herleiden'));

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

    //begrip en opmerking
    {
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);

      const th_102_begrA = htmlSpan('Een lettervorm ');
      const th_102_begrA2 = htmlSpan('herleiden');
      th_102_begrA2.classList.add('theorie');
      th_102_begrA.appendChild(th_102_begrA2);
      th_102_begrA.appendChild(htmlSpan(' betekent dat je de lettervorm korter schrijft. <br>Je kunt dit doen bij optellen en vermenigvuldigen.'));      
      th_102_begrA.classList.add('theorietekst');
      div01.appendChild(th_102_begrA);

      voegWitruimteToe(tdInhoud,'0.3cm');

      const div02 = document.createElement('div');
      div02.style.display = 'flex';
      tdInhoud.appendChild(div02); 
      const SpL = htmlSpan('Opmerking!');
      SpL.style.fontWeight = 'bold';
      SpL.style.flex = "0 0 15%";
      SpL.style.display = 'flex';
      SpL.style.alignItems = 'top';
      const SpR = htmlSpan('Omdat je elke aftrekking kunt schrijven als een optelling en elke deling als een vermenigvuldiging, kun je dit ook doen bij aftrekken en delen.');
      SpR.style.flex = "1";
      SpR.style.minWidth = '0';
      SpR.classList.add('theorietekst');
      div02.appendChild(SpL);
      div02.appendChild(SpR);  

      const div03 = document.createElement('div');
      div03.style.display = 'flex';
      tdInhoud.appendChild(div03);      
      maakSpanMetRuimte(div03,'0.1cm');
    }



    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');

})();