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
    tdSoort.appendChild(htmlSpan('begrippen'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;   // aanpasbaar
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.appendChild(htmlSpan('lettervorm, veranderlijke, coëfficiënt en letterdeel'));

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

    //lettervorm
    {
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '•');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Letters kun je gebruiken om getallen voor te stellen.'));

      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);

      maakSpanMetRuimte(div01,'0.05cm');

      voegLijstToe2(div01, 'streep','0.4cm','0.3cm',
        [
          '‘Het getal kun je berekenen door vijf bij het nummer van het getal op te tellen’ kun je schrijven als <i>g</i> = <i>n</i> + 5. Hierbij stelt <i>g</i> het getal voor en <i>n</i> het nummer van dat getal.',
          '‘De lengte van een brandende kaars kun je berekenen door 20 te verminderen met 4 keer de tijd die de kaars gebrand heeft’ kun je schrijven als <i>l</i> = 20 - 4<i>t</i>. Hierbij is <i>l</i> de lengte van de kaars en <i>t</i> de tijd die ze gebrand heeft.',
          'De commutatieve eigenschap van de optelling kun je noteren als <i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>.',
        ],'1.2','0.05cm');
      voegWitruimteToe(tdInhoud,'0.3cm');

      const div02 = document.createElement('div');
      div02.style.display = 'flex';
      div02.style.flexDirection = 'column';
      tdInhoud.appendChild(div02);   
      {
        const th_102_begrB = document.createElement('span');
        const th_102_begrB_b1 = maakSpanBreedte('0.4cm', '');
        th_102_begrB.appendChild(th_102_begrB_b1);
        th_102_begrB.appendChild(htmlSpan('De vormen')); 
        div02.appendChild(th_102_begrB);
        maakSpanMetRuimte(div02,'0.05cm');
      }        
      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('<i>g</i> = <i>n</i> + 5'));
        div02.appendChild(th_102_begrC); 
        maakSpanMetRuimte(div02,'0.05cm');
      }
      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('<i>l</i> = 20 - 4<i>t</i>'));
        div02.appendChild(th_102_begrC); 
        maakSpanMetRuimte(div02,'0.05cm');
      }    
      {
        const th_102_begrC = document.createElement('span');
        const th_102_begrC_b1 = maakSpanBreedte('1cm', '');
        th_102_begrC.appendChild(th_102_begrC_b1);
        th_102_begrC.appendChild(htmlSpan('<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>'));
        div02.appendChild(th_102_begrC);
        maakSpanMetRuimte(div02,'0.05cm'); 
      }
      {
        const th_102_begrB = document.createElement('span');
        const th_102_begrB_b1 = maakSpanBreedte('0.4cm', '');
        th_102_begrB.appendChild(th_102_begrB_b1);
        const th_102_begrB_b2 = htmlSpan('lettervormen');
        th_102_begrB_b2.classList.add('theorie');
        th_102_begrB.appendChild(htmlSpan('zijn '));
        th_102_begrB.appendChild(th_102_begrB_b2);
        th_102_begrB.appendChild(htmlSpan('.'));
        div02.appendChild(th_102_begrB);
      }
      
      voegWitruimteToe(tdInhoud,'0.3cm');
      
      const div03 = document.createElement('div');
      div03.style.display = 'flex';
      div03.style.flexDirection = 'column';
      tdInhoud.appendChild(div03);        
      {
        const th_102_begrB = document.createElement('span');
        const th_102_begrB_b1 = maakSpanBreedte('0.4cm', '');
        th_102_begrB.appendChild(th_102_begrB_b1);
        th_102_begrB.appendChild(htmlSpan('In de eerste twee voorbeelden zijn de letters '));
        const th_102_begrB_b2 = htmlSpan('veranderlijken');
        th_102_begrB_b2.classList.add('theorie');
        th_102_begrB.appendChild(th_102_begrB_b2);
        th_102_begrB.appendChild(htmlSpan('.'));
        div03.appendChild(th_102_begrB);
        maakSpanMetRuimte(div03,'0.05cm');
      }      
      {
        const th_102_begrB = document.createElement('span');
        const th_102_begrB_b1 = maakSpanBreedte('0.4cm', '');
        th_102_begrB.appendChild(th_102_begrB_b1);
        th_102_begrB.appendChild(htmlSpan('In het derde voorbeeld worden letters gebruikt om te '));
        const th_102_begrB_b2 = htmlSpan('veralgemenen');
        th_102_begrB_b2.classList.add('theorie');
        th_102_begrB.appendChild(th_102_begrB_b2);
        th_102_begrB.appendChild(htmlSpan('.'));
        div03.appendChild(th_102_begrB);
      }       
    }

    voegWitruimteToe(tdInhoud,'0.3cm');
    //coëfficiënt en letterdeel
    {
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);          
      
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '•');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('In de lettervorm '));
      const the_102_begrB = document.createElement('span');
      const the_102_begrB_m1 = maakMarkering(htmlSpan('-7'), '#bbdefb', false);
      the_102_begrB.appendChild(the_102_begrB_m1);
      const the_102_begrB_m2 = maakMarkering(htmlSpan('<i>x</i>'), '#fff9c4', false);
      the_102_begrB.appendChild(the_102_begrB_m2);      
      th_102_begrA.appendChild(the_102_begrB);  
      th_102_begrA.appendChild(htmlSpan(' is')); 
      div01.appendChild(th_102_begrA); 

      maakSpanMetRuimte(div01,'0.05cm');

      const th_102_begrC = document.createElement('span');
      const th_102_begrC_m1 = maakMarkering(htmlSpan('-7'), '#bbdefb', false);
      th_102_begrC.appendChild(th_102_begrC_m1);
      th_102_begrC.appendChild(htmlSpan(' '));
      th_102_begrC.appendChild(htmlSpan('de '));
      const th_102_begrC2 = htmlSpan('coëfficiënt');
      th_102_begrC2.classList.add('theorie');
      th_102_begrC.appendChild(th_102_begrC2);
      th_102_begrC.appendChild(htmlSpan(';'));
      const th_102_begrD = document.createElement('span');
      const th_102_begrD_m1 = maakMarkering(htmlSpan('<i>x</i>'), '#fff9c4', false);
      th_102_begrD.appendChild(th_102_begrD_m1);
      th_102_begrD.appendChild(htmlSpan(' '));
      th_102_begrD.appendChild(htmlSpan('het '));
      const th_102_begrD2 = htmlSpan('letterdeel');
      th_102_begrD2.classList.add('theorie');
      th_102_begrD.appendChild(th_102_begrD2);
      th_102_begrD.appendChild(htmlSpan(';'));      
      
      voegLijstToe2(div01, 'streep', '0.4cm', '0.3cm', [th_102_begrC, th_102_begrD,], '1.2', '0.05cm');

      maakSpanMetRuimte(div01,'0.1cm');
    }

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');

})();