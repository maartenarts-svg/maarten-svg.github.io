/* ============================================================
   H11 / th_112_vergelijkingOplossenVB.js
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

    const {tbody} = maakOefTabel(tdInhoud,2,true);

    {
      const trS = document.createElement('tr');
      const tdSL = maakOpTdazZonder('3<i>x</i> + 4<i>x</i> - 10 = 5<i>x</i> + 2');
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const tdSR = maakOpTdazZonder('3(<i>y</i> + 1) + 2 = 6<i>y</i> - 8');
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);

    }
    {
      const trS = document.createElement('tr');
      const tdSL = maakOpTdazZonder('3<i>x</i> + 4<i>x</i> <span class="markeer-lila">- 5<i>x</i></span> = 2 <span class="markeer-lila">+ 10</span>');
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const tdSR = maakOpTdazZonder('3<i>y</i> + 3 + 2 = 6<i>y</i> - 8');
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const tdSL = maakOpTdazZonder('2<i>x</i> = 12');
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const tdSR = maakOpTdazZonder('3 + 2 <span class="markeer-lila">+ 8</span> = 6<i>y</i> <span class="markeer-lila">- 3<i>y</i></span>');
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const tdSL = maakOpTdazZonder('<i>x</i> = 12 <span class="markeer-lila">: 2</span>');
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const tdSR = maakOpTdazZonder('13 = 3<i>y</i>');
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const tdSL = maakOpTdazZonder('<i>x</i> = 6');
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const tdSR = maakOpTdazZonder('13 <span class="markeer-lila">: 3</span> = <i>y</i>');
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const tdSL = maakOpTdazZonder('');
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp = document.createElement('span');
      hulp.appendChild(maakBreuk('13','3','opgave'));
      hulp.appendChild(htmlSpan(' = <i>y</i>'));
      const tdSR = maakOpTdazZonder(hulp);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const tdSL = maakOpTdazZonder('controle:');
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const tdSR = maakOpTdazZonder('controle:');
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm','LL:'));
      hulp1.appendChild(htmlSpan('3 · <span class="markeer-lila">6</span> + 4 · <span class="markeer-lila">6</span> - 10'));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm','LL:'));
      hulp2.appendChild(htmlSpan('3 · '));
      const h1=document.createElement('span'); h1.innerHTML='<span class="bracket2">(</span>'; hulp2.appendChild(h1);
      const hulp2a = document.createElement('span');
      hulp2a.appendChild(maakBreuk('13','3','opgave'));
      hulp2a.classList.add('markeer-lila');
      hulp2.appendChild(hulp2a);
      hulp2.appendChild(htmlSpan(' + 1'));
      const h2=document.createElement('span'); h2.innerHTML='<span class="bracket2">)</span>'; hulp2.appendChild(h2);
      hulp2.appendChild(htmlSpan(' + 2'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm',''));
      hulp1.appendChild(htmlSpan('= 18 + 24 - 10'));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm',''));
      hulp2.appendChild(htmlSpan('= 3 · '));
      const h1=document.createElement('span'); h1.innerHTML='<span class="bracket2">(</span>'; hulp2.appendChild(h1);
      const hulp2a = document.createElement('span');
      hulp2a.appendChild(maakBreuk('13','3','opgave'));
      hulp2.appendChild(hulp2a);
      hulp2.appendChild(htmlSpan(' + '));
      const hulp2b = document.createElement('span');
      hulp2b.appendChild(maakBreuk('3','3','opgave'));
      const h2=document.createElement('span'); h2.innerHTML='<span class="bracket2">)</span>'; hulp2b.appendChild(h2);     
      hulp2.appendChild(hulp2b);
      hulp2.appendChild(htmlSpan(' + 2'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm',''));
      hulp1.appendChild(htmlSpan('= 32'));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm',''));
      hulp2.appendChild(htmlSpan('= 3 · '));
      const hulp2a = document.createElement('span');
      hulp2a.appendChild(maakBreuk('16','3','opgave'));
      hulp2.appendChild(hulp2a);
      hulp2.appendChild(htmlSpan(' + 2'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm',''));
      hulp1.appendChild(htmlSpan(''));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm',''));
      hulp2.appendChild(htmlSpan('= 16 + 2'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm',''));
      hulp1.appendChild(htmlSpan(''));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm',''));
      hulp2.appendChild(htmlSpan('= 18'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }

    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm','RL:'));
      hulp1.appendChild(htmlSpan('5 · <span class="markeer-lila">6</span> + 2'));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm','RL:'));
      hulp2.appendChild(htmlSpan('6 · '));
      const hulp2a = document.createElement('span');
      hulp2a.appendChild(maakBreuk('13','3','opgave'));
      hulp2a.classList.add('markeer-lila');
      hulp2.appendChild(hulp2a);
      hulp2.appendChild(htmlSpan(' - 8'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm',''));
      hulp1.appendChild(htmlSpan('= 30 + 2'));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm',''));
      hulp2.appendChild(htmlSpan('= 26 - 8'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }
    {
      const trS = document.createElement('tr');
      const hulp1 = document.createElement('span');
      hulp1.appendChild(maakSpanBreedte('0.65cm',''));
      hulp1.appendChild(htmlSpan('= 32'));
      const tdSL = maakOpTdazZonder(hulp1);
      tdSL.classList.add('kolom-links');
      trS.appendChild(tdSL);
      const hulp2 = document.createElement('span');
      hulp2.appendChild(maakSpanBreedte('0.65cm',''));
      hulp2.appendChild(htmlSpan('= 18'));
      const tdSR = maakOpTdazZonder(hulp2);
      tdSR.classList.add('kolom-rechts');
      trS.appendChild(tdSR);
      tbody.appendChild(trS);
    }

    voegWitruimteToe(tdInhoud,'0.1cm');
    
      // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

})();