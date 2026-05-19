/* ============================================================
   H11 / th_113_vergelijkingOplossenICTVB.js
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

    //voorbeeld 1
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/th_113_001.svg";
      img.style.width = '100%';

      wrapper.appendChild(img);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud,'0.1cm');

    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('De oplossing van de vergelijking 5<i>x</i> + 3 = 23 is 4.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('De oplossing van de vergelijking '));
      th_102_begrA.appendChild(maakBreuk('5','4','opgave'));
      th_102_begrA.appendChild(htmlSpan('(<i>y</i> - 9) = '));
      th_102_begrA.appendChild(maakBreuk('7','3','opgave'));
      th_102_begrA.appendChild(htmlSpan('<i>y</i> + 8 is '));
      th_102_begrA.appendChild(maakBreuk('-231','13','opgave'));
      th_102_begrA.appendChild(htmlSpan('.'));
      
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

})();