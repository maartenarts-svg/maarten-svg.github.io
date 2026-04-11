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

    /* ---- Span-variabelen ---- */
    const th_101_A = document.createElement('span');
    th_101_A.appendChild(htmlSpan('5<i>a</i> · 8<i>b</i>'));

    const oe_2 = document.createElement('span');
    oe_2.appendChild(htmlSpan('<span class="markeer-lila">= 5 · 8 · <i>a</i> · <i>b</i></span>'));

    const oe_3 = document.createElement('span');
    oe_3.appendChild(htmlSpan('= 40<i>ab</i>'));

    const th_101_B = document.createElement('span');
    th_101_B.appendChild(htmlSpan('-5<i>p</i> · (-3)'));

    const oe_5 = document.createElement('span');
    oe_5.appendChild(htmlSpan('<span class="markeer-lila">= -5 · (-3) · <i>p</i></span>'));

    const oe_6 = document.createElement('span');
    oe_6.appendChild(htmlSpan('= 15<i>p</i>'));

    const {tbody} = maakOefTabel(tdInhoud, 2, true);

    /* Rij 1: labels */
    const trL1 = document.createElement('tr');
    const tdLblA = maakOpTdaz('a', th_101_A, false);
    tdLblA.classList.add('kolom-links');
    trL1.appendChild(tdLblA);
    const tdLblC = maakOpTdaz('b', th_101_B, false);
    tdLblC.classList.add('kolom-rechts');
    trL1.appendChild(tdLblC);
    tbody.appendChild(trL1);

    /* Oplossingen rij 1 */
    {
      const oplA = [
        oe_2,
        oe_3,
      ];
      const oplC = [
        oe_5,
        oe_6,
      ];
      for (let i=0; i<2; i++) {
        const tr = document.createElement('tr');

        const tdL = document.createElement('td');
        tdL.style.height = '0.9cm';
        tdL.classList.add('kolom-links');    
        const rijL = document.createElement('div');
        rijL.classList.add('rij');
        rijL.style.height = '0.9cm';
        const lblL = document.createElement('span');
        lblL.classList.add('lbl', 'subopgave-label');
        rijL.appendChild(lblL);
        const spL2 = document.createElement('span');
        spL2.classList.add('voorgedrukt');
        spL2.appendChild(oplA[i]);
        rijL.appendChild(spL2);
        tdL.appendChild(rijL);
        tr.appendChild(tdL);

        const tdR = document.createElement('td');
        tdR.style.height = '0.9cm';
        tdR.classList.add('kolom-rechts'); 
        const rijR = document.createElement('div');
        rijR.classList.add('rij');
        const lblR = document.createElement('span');
        lblR.classList.add('lbl', 'subopgave-label');
        rijR.appendChild(lblR);
        const spR2 = document.createElement('span');
        spR2.classList.add('voorgedrukt');
        spR2.appendChild(oplC[i]);
        rijR.appendChild(spR2);
        tdR.appendChild(rijR);
        tr.appendChild(tdR);

        tbody.appendChild(tr);      
      }
    }


    voegWitruimteToe(tdInhoud,'0.1cm');
    
      // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');
  
})();