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
    tdSoort.appendChild(htmlSpan('werkwijze'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;   // aanpasbaar
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.appendChild(htmlSpan('getalwaarde van een lettervorm berekenen'));

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

    //getalwaarde
    {
      const th_102_getA = document.createElement('span');
      th_102_getA.appendChild(htmlSpan('Om de '));
      const th_102_getA1 = htmlSpan('getalwaarde');
      th_102_getA1.classList.add('theorie');
      th_102_getA.appendChild(th_102_getA1);
      th_102_getA.appendChild(htmlSpan(' van een lettervorm te berekenen:'));

      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_getA);
      
      

      const th_102_getB = document.createElement('span');
      const th_102_getB1 = maakSpanBreedte('0.4cm', '•');
      th_102_getB.appendChild(th_102_getB1);
      th_102_getB.appendChild(htmlSpan('vervang je elke letter door het gegeven getal;'));

      maakSpanMetRuimte(div01,'0.05cm');

      voegLijstToe2(div01, 'bullet','0cm','0.3cm',
        [
          'vervang je elke letter door het gegeven getal;',
          'voer je de bewerkingen uit.',
        ],'1.2','0.05cm');    
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    //aanvulling onder de tabel
    {
      const divOpm = document.createElement('div');
      tdInhoud.appendChild(divOpm);
      divOpm.style.display = "flex";
      const SpL = htmlSpan('Let op!');
      SpL.style.fontWeight = 'bold';
      SpL.style.flex = "0 0 10%";
      SpL.style.display = 'flex';
      SpL.style.alignItems = 'top';
      const SpR = document.createElement('span');
      voegLijstToe(SpR, 'bullet','0cm','0.3cm',[
        'Zet negatieve getallen en breuken tussen haakjes.',
        'Respecteer de volgorde van de bewerkingen.',
      ]);
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