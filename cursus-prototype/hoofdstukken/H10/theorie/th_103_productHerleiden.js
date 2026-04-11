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
    tdKort.appendChild(htmlSpan('product herleiden'));

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

      const th_102_begrA = htmlSpan('Om een product te herleiden:');    
      th_102_begrA.classList.add('theorietekst');
      div01.appendChild(th_102_begrA);

      maakSpanMetRuimte(div01,'0.05cm');  
            
      //eerste stap
      const div02 = document.createElement('div');
      div02.style.display = 'flex';   
      tdInhoud.appendChild(div02);    
      const lbl = document.createElement('span');
      lbl.classList.add('lbl', 'subopgave-label');
      lbl.innerHTML = `1<span class="streep">|</span>`;
      div02.appendChild(lbl); 
      const txt = document.createElement('span');
      txt.classList.add('txt'); 
      txt.appendChild(htmlSpan('vermenigvuldig je de getallen;'));       
      div02.appendChild(txt);
      
      const div03 = document.createElement('div');
      div03.style.display = 'flex'; 
      maakSpanMetRuimte(div03,'0.05cm');
      tdInhoud.appendChild(div03); 

      //tweede stap
      const div04 = document.createElement('div');
      div04.style.display = 'flex';   
      tdInhoud.appendChild(div04);        
      const lbl2 = document.createElement('span');
      lbl2.classList.add('lbl', 'subopgave-label');
      lbl2.innerHTML = `2<span class="streep">|</span>`;
      div04.appendChild(lbl2); 
      const txt2 = document.createElement('span');
      txt2.classList.add('txt');
      txt2.appendChild(htmlSpan('noteer je de veranderlijken (letters) in alfabetische volgorde.'));
      div04.appendChild(txt2);

      const div05 = document.createElement('div');
      div05.style.display = 'flex'; 
      maakSpanMetRuimte(div05,'0.1cm');
      tdInhoud.appendChild(div05);
      
    }

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');

})();