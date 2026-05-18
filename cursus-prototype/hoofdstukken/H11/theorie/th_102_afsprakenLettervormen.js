/* ============================================================
   H10 / th_101_afsprakenLettervormen.js
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
    tdSoort.appendChild(htmlSpan('afspraken'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;   // aanpasbaar
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.appendChild(htmlSpan('lettervormen noteren'));

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

    //maalteken
    {
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '•');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Als er geen verwarring mogelijk is, laat je het maalteken weg.'));

      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);

      maakSpanMetRuimte(div01,'0.05cm');

      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('5 · <i>a</i> = 5<i>a</i>'));
        div01.appendChild(th_102_begrC); 
        maakSpanMetRuimte(div01,'0.05cm');
      }
      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('-7 · <i>q</i> = -7<i>q</i>'));
        div01.appendChild(th_102_begrC); 
        maakSpanMetRuimte(div01,'0.05cm');
      }    
      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('3 · (<i>x</i> + <i>y</i>) = 3(<i>x</i> + <i>y</i>)'));
        div01.appendChild(th_102_begrC);
        maakSpanMetRuimte(div01,'0.05cm'); 
      }
    
      voegWitruimteToe(tdInhoud,'0.3cm');
    }

    //coëfficiënt en letterdeel
    {
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);          
      
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '•');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Bij een product noteer je eerst de coëfficiënt en dan het letterdeel.'));
      div01.appendChild(th_102_begrA); 

      maakSpanMetRuimte(div01,'0.05cm');

      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('<i>x</i> · 3 = 3<i>x</i>'));
        div01.appendChild(th_102_begrC); 
        maakSpanMetRuimte(div01,'0.05cm');
      }
      voegWitruimteToe(tdInhoud,'0.3cm');      
    }

    //coëfficiënt 1
    {
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '•');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Coëfficiënt 1 schrijf je niet.'));

      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);

      maakSpanMetRuimte(div01,'0.05cm');

      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('1<i>z</i> = <i>z</i>'));
        div01.appendChild(th_102_begrC); 
        maakSpanMetRuimte(div01,'0.05cm');
      }
      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('-1<i>d</i> = -<i>d</i>'));
        div01.appendChild(th_102_begrC); 
        maakSpanMetRuimte(div01,'0.05cm');
      }    
    }

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');

})();