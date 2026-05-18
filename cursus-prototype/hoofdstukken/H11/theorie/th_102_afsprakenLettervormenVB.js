/* ============================================================
   H10 / H10_schema1.js
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
      tabelEig.appendChild(colg);
      const tbody = document.createElement('tbody'); tabelEig.appendChild(tbody);

      //hoofding
      {
        const RIJ1 = [
          { inhoud: 'lettervorm', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
          { inhoud: 'coëfficiënt', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
          { inhoud: 'letterdeel', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        ];
        const trHoofding = document.createElement('tr');
        RIJ1.forEach(item => {
          const tdH = document.createElement('td');
          tdH.style.border = '1.2px solid var(--sl-kleur)';
          tdH.style.backgroundColor = 'var(--oranje-pastel)';
          tdH.style.paddingLeft = paddingkader;
          tdH.style.paddingRight = paddingkader;
          //tdH.style.width = '100%'; 
          tdH.style.height = '0.7cm';
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


        const th_102_vb1a_s1 = document.createElement('span');
        th_102_vb1a_s1.appendChild(maakBreuk('3','8','opgave'));
        th_102_vb1a_s1.appendChild(htmlSpan('<i>x</i>'));
        const th_102_vb1a_s2 = document.createElement('span');
        th_102_vb1a_s2.appendChild(maakBreuk('3','8','opgave'));        
        const th_102_vb1a_s3 = document.createElement('span');
        th_102_vb1a_s3.appendChild(maakBreuk('<i>z</i>','3','opgave'));
        const th_102_vb1a_s4 = document.createElement('span');
        th_102_vb1a_s4.appendChild(maakBreuk('1','3','opgave'));

        const matrix = [
          [
            { inhoud: htmlSpan('-8<i>x</i><sup>2</sup>'), hAlign: 'center', vAlign: 'middle' },
            { inhoud: htmlSpan('-8'), hAlign: 'center', vAlign: 'middle' },
            { inhoud: htmlSpan('<i>x</i><sup>2</sup>'), hAlign: 'center', vAlign: 'middle' },
          ],
          [
            { inhoud: htmlSpan('<i>ab</i>'), hAlign: 'center', vAlign: 'middle' },
            { inhoud: htmlSpan('1'), hAlign: 'center', vAlign: 'middle' },
            { inhoud: htmlSpan('<i>ab</i>'), hAlign: 'center', vAlign: 'middle' },
          ],
          [
            { inhoud: th_102_vb1a_s1, hAlign: 'center', vAlign: 'middle' },
            { inhoud: th_102_vb1a_s2, hAlign: 'center', vAlign: 'middle' },
            { inhoud: htmlSpan('<i>x</i>'), hAlign: 'center', vAlign: 'middle' },
          ],
          [
            { inhoud: htmlSpan('-<i>q</i><sup>2</sup>'), hAlign: 'center', vAlign: 'middle' },
            { inhoud: htmlSpan('-1'), hAlign: 'center', vAlign: 'middle' },
            { inhoud: htmlSpan('<i>q</i><sup>2</sup>'), hAlign: 'center', vAlign: 'middle' },
          ],

        ];
        matrix.forEach(rij => {
          const trRij = document.createElement('tr');
          rij.forEach(cel => {
            const tdR = document.createElement('td');
            tdR.style.border = '1.2px solid var(--sl-kleur)';
            tdR.style.paddingLeft = paddingkader;
            tdR.style.paddingRight = paddingkader;
            //tdR.style.width = '100%'; 
            tdR.style.height = '0.8cm';
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

    voegWitruimteToe(tdInhoud,'0.1cm');
    
      // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

})();