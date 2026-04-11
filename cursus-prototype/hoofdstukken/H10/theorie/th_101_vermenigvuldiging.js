/* ============================================================
   H10 / th_101_vermenigvuldiging.js
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
    tdKort.appendChild(htmlSpan('eigenschappen voor de vermenigvuldiging'));

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
        const th_101_vermA = document.createElement('span');
        const th_101_vermA_s1 = document.createElement('span');
        th_101_vermA_s1.appendChild(htmlSpan('∀ <i>a</i> ∈ ℚ<sub>0</sub>:<br>\u00A0\u00A0<i>a</i> · '));
        th_101_vermA_s1.appendChild(maakBreuk('1','<i>a</i>','opgave'));
        th_101_vermA_s1.appendChild(htmlSpan(' = 1 = '));
        th_101_vermA_s1.appendChild(maakBreuk('1','<i>a</i>','opgave'));
        th_101_vermA_s1.appendChild(htmlSpan(' · <i>a</i>'));
        th_101_vermA.appendChild(th_101_vermA_s1);    
        
        const th_101_vermB = document.createElement('span');
        const th_101_vermB_s1 = document.createElement('span');
        th_101_vermB_s1.appendChild(htmlSpan('Het product van een rationaal getal verschillend van 0 en zijn omgekeerde is gelijk aan 1.<br>13 · '));
        th_101_vermB_s1.appendChild(maakBreuk('1','13','opgave'));
        th_101_vermB_s1.appendChild(htmlSpan(' = 1'));
        th_101_vermB.appendChild(th_101_vermB_s1);        

        const matrix = [
          [
            { inhoud: htmlSpan('De vermenigvuldiging van rationale getallen is commutatief.'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('∀ <i>a</i>, <i>b</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · <i>b</i> = <i>b</i> · <i>a</i>'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('Bij een vermenigvuldiging van rationale getallen mogen de getallen van plaats verwisseld worden.<br>25 · 13 · 4 = 25 · 4 · 13'), hAlign: 'left', vAlign: 'middle' },
          ],
          [
            { inhoud: htmlSpan('De vermenigvuldiging van rationale getallen is associatief.'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ:<br>\u00A0\u00A0(<i>a</i> · <i>b</i>) · <i>c</i> = <i>a</i> · (<i>b</i> · <i>c</i>)'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('Bij een vermenigvuldiging van rationale getallen speelt de volgorde waarin je vermenigvuldigt (dus de plaats van de haakjes) geen rol.<br>13 · 25 · 4 = 13 · (25 · 4)'), hAlign: 'left', vAlign: 'middle' },
          ],
          [
            { inhoud: htmlSpan('1 is het neutraal element voor de vermenigvuldiging van rationale getallen.'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('∀ <i>a</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · 1 = <i>a</i> = 1 · <i>a</i>'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('1 ergens mee vermenigvuldigen verandert niets aan het eindresultaat.<br>1 · 13 = 13'), hAlign: 'left', vAlign: 'middle' },
          ],
          [
            { inhoud: htmlSpan('0 is het opslorpend element voor de vermenigvuldiging van rationale getallen.'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('∀ <i>a</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · 0 = 0 = 0 · <i>a</i>'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: htmlSpan('0 ergens mee vermenigvuldigen zorgt ervoor dat het eindresultaat 0 is.<br>0 · 13 = 0'), hAlign: 'left', vAlign: 'middle' },
          ],          
          [
            { inhoud: htmlSpan('Elk rationaal getal verschillend van 0 heeft een symmetrisch element voor de vermenigvuldiging.'), hAlign: 'left', vAlign: 'middle' },
            { inhoud: th_101_vermA, hAlign: 'left', vAlign: 'middle' },
            { inhoud: th_101_vermB, hAlign: 'left', vAlign: 'middle' },
          ],
        ];
        matrix.forEach(rij => {
          const trRij = document.createElement('tr');
          rij.forEach(cel => {
            const tdR = document.createElement('td');
            tdR.style.border = '1.2px solid var(--groen-donker)';
            tdR.style.paddingLeft = paddingkader;
            tdR.style.paddingRight = paddingkader;
            //tdR.style.width = '100%'; 
            tdR.style.height = '0.9cm';
            tdR.style.textAlign = cel.hAlign;
            tdR.style.alignItems = cel.vAlign;
            tdR.classList.add('theorietekst');
            tdR.appendChild(cel.inhoud);
            trRij.appendChild(tdR);
          });
          tbody.appendChild(trRij);         
        });
      }
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    //aanvulling onder de tabel
    {
      const divOpm = document.createElement('div');
      tdInhoud.appendChild(divOpm);
      divOpm.style.display = "flex";
      const SpL = htmlSpan('Opmerking!');
      SpL.style.fontWeight = 'bold';
      SpL.style.flex = "0 0 15%";
      SpL.style.display = 'flex';
      SpL.style.alignItems = 'top';
      const SpR = htmlSpan('Alle eigenschappen gelden ook voor de natuurlijke en de gehele getallen, behalve de eigenschap van het symmetrisch element.<br>Deze eigenschap geldt niet voor de natuurlijke en de gehele getallen.');
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

  voegWitruimteToe(inhoud,'1cm');



})();