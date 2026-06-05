/* ============================================================
   H11 / th_111_oplossingenControlerenVB.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';   // aanpasbaar
  const breedteSoort = '37%'    // aanpasbaar  

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
    tdSoort.appendChild(htmlSpan('Voorbeeld'));

    // Korte inhoud
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

    voegWitruimteToe(tdInhoud,'0.1cm');

    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('Controleer of 2 een oplossing is van de vergelijking <i>x</i> + 4 = 7<i>x</i> - 8.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'LL:'));
      th_102_begrA.appendChild(htmlSpan('<span class="markeer-lila">2</span> + 4 = 6'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'RL:'));
      th_102_begrA.appendChild(htmlSpan('7 · <span class="markeer-lila">2</span> - 8 = 6'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(htmlSpan('Omdat LL = RL, is 2 een oplossing van de vergelijking.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('Controleer of -10 een oplossing is van de vergelijking <i>x</i> + 4 = 7<i>x</i> - 8.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'LL:'));
      th_102_begrA.appendChild(htmlSpan('<span class="markeer-lila">-10</span> + 4 = -6'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'RL:'));
      th_102_begrA.appendChild(htmlSpan('7 · <span class="markeer-lila">(-10)</span> - 8 = -78'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(htmlSpan('Omdat LL ≠ RL, is -10 geen oplossing van de vergelijking.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }

    voegWitruimteToe(tdInhoud,'0.1cm');
    
      // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

})();