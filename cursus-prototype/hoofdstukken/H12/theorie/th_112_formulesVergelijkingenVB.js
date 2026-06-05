/* ============================================================
   H11 / th_112_formulesVergelijkingenVB.js
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
      const th_102_begrA = document.createElement('span');;
      th_102_begrA.appendChild(htmlSpan('Werk je met formules, dan kun je de technieken van vergelijkingen toepassen.'));
      
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
      th_102_begrA.appendChild(htmlSpan('Een rechthoek heeft een hoogte van 4,6 en een omtrek van 28,8.'));
      
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
      th_102_begrA.appendChild(htmlSpan('Bereken met behulp van een vergelijking de basis.'));
      th_102_begrA.classList.add('theorietekst');
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.2cm');
    }
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/th_112_001.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakMarkering('<i>P<i>','#bbdefb',false));
      hulp01.appendChild(htmlSpan(' = 2(<i>b</i> + '));
      hulp01.appendChild(maakMarkering('<i>h<Ii>','#fff9c4',false));
      hulp01.appendChild(htmlSpan(') voor '));
      hulp01.appendChild(maakMarkering('<i>P</i> = 28,8','#bbdefb',false));  
      hulp01.appendChild(htmlSpan(' en ')); 
      hulp01.appendChild(maakMarkering('<i>h</i> = 4,6','#fff9c4',false)); 

      const insprong = '1cm';

      const hulp02 = document.createElement('span');
      hulp02.appendChild(maakSpanBreedte(insprong,''));
      hulp02.appendChild(maakMarkering('28,8','#bbdefb',false));
      hulp02.appendChild(htmlSpan(' = 2(<i>b</i> + '));
      hulp02.appendChild(maakMarkering('4,6','#fff9c4',false));
      hulp02.appendChild(htmlSpan(')'));

      const hulp03 = document.createElement('span');
      hulp03.appendChild(maakSpanBreedte(insprong,''));
      hulp03.appendChild(htmlSpan('28,8 = 2<i>b</i> + 9,2'));

      const hulp04 = document.createElement('span');
      hulp04.appendChild(maakSpanBreedte(insprong,''));
      hulp04.appendChild(htmlSpan('28,8 <span class="markeer-lila">- 9,2</span> = 2<i>b</i>'));

      const hulp05 = document.createElement('span');
      hulp05.appendChild(maakSpanBreedte(insprong,''));
      hulp05.appendChild(htmlSpan('19,6 = 2<i>b</i>'));

      const hulp06 = document.createElement('span');
      hulp06.appendChild(maakSpanBreedte(insprong,''));
      hulp06.appendChild(htmlSpan('19,6 <span class="markeer-lila">: 2</span>= <i>b</i>'));

      const hulp07 = document.createElement('span');
      hulp07.appendChild(maakSpanBreedte(insprong,''));
      hulp07.appendChild(htmlSpan('9,8 = <i>b</i>'));
      
      const hulp08 = document.createElement('span');
      hulp08.appendChild(htmlSpan('De basis van de rechthoek is 9,8.'));    
      
      const hulp09 = document.createElement('span');
      hulp09.appendChild(htmlSpan('controle: 2 · (<span class="markeer-lila">9,8</span> + 4,6) = 28,8'));   
      

      [hulp01, hulp02, hulp03, hulp04, hulp05, hulp06,hulp07,hulp08,hulp09].forEach(t => {
        const span = document.createElement("span");
        span.appendChild(t);
        textDiv.appendChild(span);
        maakSpanMetRuimte(textDiv,'0.2cm');
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud,'0.1cm');

    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('Een onderzoeker heeft ontdekt dat het aantal volgers van een populaire streamer berekend'));
      
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
      th_102_begrA.appendChild(htmlSpan('kan worden met de formule <i>v</i> = 500<i>d</i> + 350'));
      
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
      th_102_begrA.appendChild(htmlSpan('Hierbij is <i>v</i> het aantal volgers en <i>d</i> het aantal dagen sinds de start van zijn stream.'));
      
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
      th_102_begrA.appendChild(htmlSpan('Bereken na hoeveel dagen de streamer 117 850 volgers heeft.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.2cm');
    }
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/th_112_002.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakMarkering('<i>v</i>','#bbdefb',false));
      hulp01.appendChild(htmlSpan(' = 500<i>d</i> + 350 voor '));
      hulp01.appendChild(maakMarkering('<i>v</i> = 117 850','#bbdefb',false));  

      const insprong = '1cm';

      const hulp02 = document.createElement('span');
      hulp02.appendChild(maakSpanBreedte(insprong,''));
      hulp02.appendChild(maakMarkering('117 850','#bbdefb',false));
      hulp02.appendChild(htmlSpan(' = 500<i>d</i> + 350'));

      const hulp04 = document.createElement('span');
      hulp04.appendChild(maakSpanBreedte(insprong,''));
      hulp04.appendChild(htmlSpan('117 850 <span class="markeer-lila">- 350</span> = 500<i>b</i>'));

      const hulp05 = document.createElement('span');
      hulp05.appendChild(maakSpanBreedte(insprong,''));
      hulp05.appendChild(htmlSpan('117 500 = 500<i>b</i>'));

      const hulp06 = document.createElement('span');
      hulp06.appendChild(maakSpanBreedte(insprong,''));
      hulp06.appendChild(htmlSpan('117 500 <span class="markeer-lila">: 500</span>= <i>d</i>'));

      const hulp07 = document.createElement('span');
      hulp07.appendChild(maakSpanBreedte(insprong,''));
      hulp07.appendChild(htmlSpan('235 = <i>d</i>'));
      
      const hulp08 = document.createElement('span');
      hulp08.appendChild(htmlSpan('Na 235 dagen heeft de streamer 117 850 volgers.'));    
      
      const hulp09 = document.createElement('span');
      hulp09.appendChild(htmlSpan('controle: 500 · <span class="markeer-lila">235</span> + 350 = 117 850'));      
      

      [hulp01, hulp02, hulp04, hulp05, hulp06,hulp07,hulp08, hulp09].forEach(t => {
        const span = document.createElement("span");
        span.appendChild(t);
        textDiv.appendChild(span);
        maakSpanMetRuimte(textDiv,'0.2cm');
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud,'0.1cm');
    
      // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

})();