/* ============================================================
   H11 / th_111_begrippenVergelijkingen.js
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
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('vergelijking, linkerlid, rechterlid, onbekende, oplossing'));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // --- Eigenlijke theorie ---
    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--groen-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.position = 'relative';
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud,'0.1cm');

    //eerste twee zinnen
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('Een  '));
      const th_102_begrB_b2 = htmlSpan('vergelijking');
      th_102_begrB_b2.classList.add('theorie');
      th_102_begrA.appendChild(th_102_begrB_b2);
      th_102_begrA.appendChild(htmlSpan(' is een gelijkheid waarin naast getallen ook een letter staat.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('Deze letter stelt een getal dat je nog niet kent voor en is de '));
      const th_102_begrB_b2 = htmlSpan('onbekende');
      th_102_begrB_b2.classList.add('theorie');
      th_102_begrA.appendChild(th_102_begrB_b2);
      th_102_begrA.appendChild(htmlSpan('.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }

    //figuur vergelijking
    {
      const divRow = document.createElement("div");
      divRow.style.display = "flex"; 
      divRow.style.paddingBottom = "0.3cm";
        const H11_schema_A1 = document.createElement('span');
        const H11_schema_A1_s1 = document.createElement('span');
        H11_schema_A1_s1.style.cssText = `width: 4cm; text-align: right; display: inline-block;`;
        H11_schema_A1_s1.textContent = 'onbekende';
        const H11_schema_A1_s2 = document.createElement('span');
        H11_schema_A1_s2.style.cssText = `width: 3.6cm; display: inline-block;`;
        const H11_schema_A1_s3 = document.createElement('span');
        H11_schema_A1_s3.textContent = 'gelijkheidsteken';
        H11_schema_A1.appendChild(H11_schema_A1_s1);
        H11_schema_A1.appendChild(H11_schema_A1_s2);
        H11_schema_A1.appendChild(H11_schema_A1_s3);
      divRow.appendChild(H11_schema_A1);
      tdInhoud.appendChild(divRow);      
    }
    {
      const divRow = document.createElement("div");
      divRow.style.display = "flex";
      divRow.style.paddingBottom = "0.3cm";
        const H11_schema_A2 = document.createElement('span');
        const H11_schema_A2_s1 = document.createElement('span');
        H11_schema_A2_s1.style.cssText = `width: 4.2cm; display: inline-block;`;
        const H11_schema_A2_vL = document.createElement('span');
        H11_schema_A2_vL.style.cssText = `border: 1.5px solid var(--groen-scheiding); padding: 0.05cm 0.2cm; display: inline-block;`;
        H11_schema_A2_vL.innerHTML = '<i>x</i> + 3';
        const H11_schema_A2_g = document.createElement('span');
        H11_schema_A2_g.style.cssText = `margin: 0 0.1cm;`;
        H11_schema_A2_g.textContent = '=';
        const H11_schema_A2_vR = document.createElement('span');
        H11_schema_A2_vR.style.cssText = `border: 1.5px solid var(--groen-scheiding); padding: 0.05cm 0.2cm; display: inline-block;`;
        H11_schema_A2_vR.textContent = '7';
        H11_schema_A2.appendChild(H11_schema_A2_s1);
        H11_schema_A2.appendChild(H11_schema_A2_vL);
        H11_schema_A2.appendChild(H11_schema_A2_g);
        H11_schema_A2.appendChild(H11_schema_A2_vR);
      divRow.appendChild(H11_schema_A2);
      tdInhoud.appendChild(divRow);      
    }
    {
      const divRow = document.createElement("div");
      divRow.style.display = "flex";
      divRow.style.paddingBottom = "0.3cm";
        const H11_schema_A3 = document.createElement('span');
        const H11_schema_A3_s1 = document.createElement('span');
        H11_schema_A3_s1.style.cssText = `width: 4cm; text-align: right; display: inline-block;`;
        H11_schema_A3_s1.textContent = 'linkerlid';
        const H11_schema_A3_s2 = document.createElement('span');
        H11_schema_A3_s2.style.cssText = `width: 3.6cm; display: inline-block;`;
        const H11_schema_A3_s3 = document.createElement('span');
        H11_schema_A3_s3.textContent = 'rechterlid';
        H11_schema_A3.appendChild(H11_schema_A3_s1);
        H11_schema_A3.appendChild(H11_schema_A3_s2);
        H11_schema_A3.appendChild(H11_schema_A3_s3);
      divRow.appendChild(H11_schema_A3);
      tdInhoud.appendChild(divRow);      
    }
    {
      // --- SVG pijlen over de 3 schrijflijnen ---
      const H11_schema_figuur = document.createElement('div');
      H11_schema_figuur.classList.add('txt');
      H11_schema_figuur.style.cssText = `
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        pointer-events: none;
        z-index: 10;
      `;

      const CM = 37.8;
      function cm(v) { return v * CM; }

      const svgPijlen = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svgPijlen.style.cssText = `width: 100%; height: 100%; overflow: visible;`;

      function maakPijlSvg(x1,y1,x2,y2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('x1', cm(x1)); line.setAttribute('y1', cm(y1));
        line.setAttribute('x2', cm(x2)); line.setAttribute('y2', cm(y2));
        line.setAttribute('stroke','var(--groen-scheiding)');
        line.setAttribute('stroke-width','1.2');
        line.setAttribute('marker-end','url(#pijl)');
        return line;
      }

      const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
      const marker = document.createElementNS('http://www.w3.org/2000/svg','marker');
      marker.setAttribute('id','pijl');
      marker.setAttribute('markerWidth','6');
      marker.setAttribute('markerHeight','6');
      marker.setAttribute('refX','0');
      marker.setAttribute('refY','3');
      marker.setAttribute('orient','auto');
      const polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon');
      polygon.setAttribute('points','0 0, 6 3, 0 6');
      polygon.setAttribute('fill','var(--groen-scheiding)');
      marker.appendChild(polygon);
      defs.appendChild(marker);
      svgPijlen.appendChild(defs);

      // Pijl onbekende → x (rij1 naar rij2)
      svgPijlen.appendChild(maakPijlSvg(4.15, 1.3,  4.5, 1.75));
      // Pijl gelijkheidsteken → = (rij1 naar rij2)
      svgPijlen.appendChild(maakPijlSvg(7.6, 1.3,  5.9, 1.85));
      // Pijl linkerlid → vakLinks (rij3 naar rij2)
      svgPijlen.appendChild(maakPijlSvg(4.15, 2.85,  4.7, 2.45));
      // Pijl rechterlid → vakRechts (rij3 naar rij2)
      svgPijlen.appendChild(maakPijlSvg(7.6, 2.85,  6.4, 2.45));

      H11_schema_figuur.appendChild(svgPijlen);
      tdInhoud.appendChild(H11_schema_figuur);      
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    //voorbeeld in tekstvorm
    {
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('In de vergelijking <i>x</i> + 4 = 7<i>x</i> - 8 is:'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);

      maakSpanMetRuimte(div01,'0.05cm');

      const lijst01 = document.createElement('span');
      lijst01.appendChild(htmlSpan('<i>x</i> + 4 het '));
      const lijst01a = document.createElement('span');
      lijst01a.appendChild(htmlSpan('linkerlid'));
      lijst01a.classList.add('theorie');
      lijst01.appendChild(lijst01a);
      lijst01.appendChild(htmlSpan(';'));

      const lijst02 = document.createElement('span');
      lijst02.appendChild(htmlSpan('7<i>x</i> - 8 het '));
      const lijst02a = document.createElement('span');
      lijst02a.appendChild(htmlSpan('rechterlid'));
      lijst02a.classList.add('theorie');
      lijst02.appendChild(lijst02a);
      lijst02.appendChild(htmlSpan(';'));

      const lijst03 = document.createElement('span');
      lijst03.appendChild(htmlSpan('<i>x</i> de '));
      const lijst03a = document.createElement('span');
      lijst03a.appendChild(htmlSpan('onbekende'));
      lijst03a.classList.add('theorie');
      lijst03.appendChild(lijst03a);
      lijst03.appendChild(htmlSpan('.'));
    
      voegLijstToe2(div01, 'streep','0.4cm','0.3cm',
        [
          lijst01,
          lijst02,
          lijst03,
        ],'1.2','0.05cm');
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    //begrip oplossing
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('Een  '));
      const th_102_begrB_b2 = htmlSpan('oplossing');
      th_102_begrB_b2.classList.add('theorie');
      th_102_begrA.appendChild(th_102_begrB_b2);
      th_102_begrA.appendChild(htmlSpan(' van een vergelijking is een getal waarvoor je een gelijkheid krijgt.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const th_102_begrA_b1 = maakSpanBreedte('0.4cm', '');
      th_102_begrA.appendChild(th_102_begrA_b1);
      th_102_begrA.appendChild(htmlSpan('De getalwaarde van het linkerlid voor dat getal is dan gelijk aan die van het rechterlid.'));
      
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