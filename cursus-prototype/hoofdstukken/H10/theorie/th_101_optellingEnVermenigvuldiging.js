/* ============================================================
   H10 / th_101_optellingEnVermenigvuldiging.js
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
    tdSoort.appendChild(htmlSpan('eigenschap'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('eigenschap voor de optelling en de vermenigvuldiging'));

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

    //tabel eigenschappen
    {
      const eerstekolom = '33%';
      const tweedekolom = '33%';
      const derdekolom = '33%';

      const divTabel = document.createElement("div");
      divTabel.style.display = "flex"; 
      tdInhoud.appendChild(divTabel);

      const tabelEig = document.createElement('table');
      tabelEig.style.borderCollapse = 'collapse';
      tabelEig.style.width = '100%';
      tabelEig.style.tableLayout = "fixed";
      divTabel.appendChild(tabelEig);
      const colg = document.createElement('colgroup');
      const col1 = document.createElement('col'); col1.style.width = eerstekolom; colg.appendChild(col1);
      const col2 = document.createElement('col'); col2.style.width = tweedekolom; colg.appendChild(col2);
      const col3 = document.createElement('col'); col3.style.width = derdekolom; colg.appendChild(col3);
      const tbody = document.createElement('tbody'); tabelEig.appendChild(tbody);tabelEig.appendChild(colg);

      //hoofding
      {
        const RIJ1 = [
          { inhoud: 'eigenschap in woorden', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
          { inhoud: 'eigenschap in symbolen', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
          { inhoud: 'betekenis en voorbeeld', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        ];
        const trHoofding = document.createElement('tr');
        RIJ1.forEach(item => {
          const tdH = document.createElement('td');
          tdH.style.border = '1.2px solid var(--groen-donker)';
          tdH.style.backgroundColor = 'var(--groen-pastel)';
          tdH.style.paddingLeft = paddingkader;
          tdH.style.paddingRight = paddingkader;
          //tdH.style.width = '100%'; 
          tdH.style.height = '0.9cm';
          tdH.style.fontWeight = 'bold';
          tdH.style.textAlign = item.hAlign;
          tdH.style.alignItems = item.vAlign;
          tdH.appendChild(htmlSpan(item.inhoud));
          trHoofding.appendChild(tdH);
        });
        tbody.appendChild(trHoofding);
      }

      //rest van de inhoud
      {
        const th_101_A1 = htmlSpan('De vermenigvuldiging van rationale getallen is distributief ten opzichte van de optelling van rationale getallen.')
        th_101_A1.classList.add('theorietekst');
        const th_101_A2 = htmlSpan('∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · (<i>b</i> + <i>c</i>) = <i>a</i> · <i>b</i> + <i>a</i> · <i>c</i>')
        th_101_A2.classList.add('theorietekst');
        const th_101_A3 = htmlSpan('Vermenigvuldig je een getal met een optelling, dan mag je dat getal vermenigvuldigen met elke term van die optelling en de bekomen producten optellen.<br>(20 + 7) · 8 = 20 · 8 + 7 · 8')
        th_101_A3.classList.add('theorietekst');                

        const trRij = document.createElement('tr');
        tbody.appendChild(trRij);

        //eerste kolom
          const tdK1 = document.createElement('td');
          tdK1.style.border = '1.2px solid var(--groen-donker)';
          tdK1.style.paddingLeft = paddingkader;
          tdK1.style.paddingRight = paddingkader;
          tdK1.style.height = '0.9cm';
          tdK1.style.textAlign = 'left';
          tdK1.style.alignItems = 'middle';
          tdK1.classList.add('txt');
          tdK1.appendChild(th_101_A1);
          trRij.appendChild(tdK1);        

        //tweede kolom
          const tdK2 = document.createElement('td');
          tdK2.style.border = '1.2px solid var(--groen-donker)';
          tdK2.style.paddingLeft = paddingkader;
          tdK2.style.paddingRight = paddingkader;
          tdK2.style.height = '0.9cm';
          tdK2.style.textAlign = 'left';
          tdK2.style.alignItems = 'middle';
          tdK2.classList.add('txt');
          tdK2.style.position = 'relative';
          tdK2.appendChild(th_101_A2);
          trRij.appendChild(tdK2);    

        //derde kolom
          const tdK3 = document.createElement('td');
          tdK3.style.border = '1.2px solid var(--groen-donker)';
          tdK3.style.paddingLeft = paddingkader;
          tdK3.style.paddingRight = paddingkader;
          tdK3.style.height = '0.9cm';
          tdK3.style.textAlign = 'left';
          tdK3.style.alignItems = 'middle';
          tdK3.classList.add('txt');
          tdK3.appendChild(th_101_A3);
          trRij.appendChild(tdK3);  

        maak2Parabolen(tdK2, {
          sx: 0.4,           // ← x-coördinaat startpunt links in cm
          sy: 2.0,            // ← y-coördinaat startpunt links in cm
          br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
          br2: 0.6,           // ← afstand tussen eindpunten kleine parabool in cm
          pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
          h1: -0.2,          // ← hoogte van de grote boog in cm
          h2: -0.1,          // ← hoogte van de kleine boog in cm
          variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
        });

      }
    }


    voegWitruimteToe(tdInhoud,'0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'1cm');




})();