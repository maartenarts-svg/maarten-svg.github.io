/* ============================================================
   H11 / th_113_vraagstukkenEen.js
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
    tdKort.appendChild(htmlSpan('vraagstukken oplossen met één "ding" onbekend'));

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
      th_102_begrA.appendChild(htmlSpan('Anita geeft een vijfde van haar spaargeld uit aan een nieuwe smartphone. Ze heeft nu nog <br>432 euro over.<br>Bereken hoeveel spaargeld ze oorspronkelijk had.'));
      th_102_begrA.classList.add('theorie-tekst');
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }

    const spatie = '4.7cm';

    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '1|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'keuze onbekende:'));
      th_102_begrA.appendChild(htmlSpan('oorspronkelijke spaargeld: <i>g</i>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '2|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'vergelijking opstellen:'));
      th_102_begrA.appendChild(htmlSpan('<i>g</i> - '));
      th_102_begrA.appendChild(maakBreuk('1','5','opgave'));
      th_102_begrA.appendChild(htmlSpan('<i>g</i> = 432'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '3|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'vergelijking oplossen:'));
      th_102_begrA.appendChild(htmlSpan('<i>g</i> = 540 (hier met ICT)'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.3cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '4|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'antwoord:'));
      th_102_begrA.appendChild(htmlSpan('Anita had oorspronkelijk 540 euro.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '5|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'controle:'));
      th_102_begrA.appendChild(htmlSpan('540 - '));
      th_102_begrA.appendChild(maakBreuk('1','5','opgave'));
      th_102_begrA.appendChild(htmlSpan(' · 540 = 432'));
      
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