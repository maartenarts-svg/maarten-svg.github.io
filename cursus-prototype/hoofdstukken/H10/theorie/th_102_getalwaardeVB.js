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
    const oe_1 = document.createElement('span');
    oe_1.appendChild(htmlSpan('-<i>a</i><sup>2</sup> + 3<i>a</i>'));

    const oe_2 = document.createElement('span');
    oe_2.appendChild(htmlSpan('voor <i>a</i> = <span class="markeer-lila">-4</span>'));

    const oe_3 = document.createElement('span');
    oe_3.appendChild(htmlSpan('-<span class="markeer-lila">(-4)</span><sup>2</sup> + 3 · <span class="markeer-lila">(-4)</span>'));

    const oe_4 = document.createElement('span');
    oe_4.appendChild(htmlSpan('= -16 - 12'));

    const oe_5 = document.createElement('span');
    oe_5.appendChild(htmlSpan('= -28'));

    const oe_6 = document.createElement('span');
    const oe_6_s1 = document.createElement('span');
    oe_6_s1.appendChild(maakBreuk('2','3','opgave'));
    oe_6_s1.appendChild(htmlSpan('<i>t</i> + '));
    oe_6_s1.appendChild(maakBreuk('1','4','opgave'));
    oe_6.appendChild(oe_6_s1);

    const oe_7 = document.createElement('span');
    oe_7.appendChild(htmlSpan('voor <i>t</i> = '));
    const oe_7_s1 = document.createElement('span');
    oe_7_s1.appendChild(maakBreuk('4','5','opgave'));
    oe_7_s1.classList.add('markeer-lila');
    oe_7.appendChild(oe_7_s1);

    const oe_8 = document.createElement('span');
    oe_8.appendChild(maakBreuk('2','3','opgave'));
    oe_8.appendChild(htmlSpan(' · '));    
    const oe_8_s1 = document.createElement('span');
    oe_8_s1.appendChild(maakBreuk('4','5','opgave'));
    oe_8_s1.classList.add('markeer-lila');
    oe_8.appendChild(oe_8_s1);
    oe_8.appendChild(htmlSpan(' + '));
    oe_8.appendChild(maakBreuk('1','4','opgave'));

    const oe_9 = document.createElement('span');
    oe_9.appendChild(htmlSpan('= '));
    const oe_9_s1 = document.createElement('span');
    oe_9_s1.appendChild(maakBreuk('8','15','opgave'));
    oe_9_s1.appendChild(htmlSpan(' + '));
    oe_9_s1.appendChild(maakBreuk('1','4','opgave'));
    oe_9.appendChild(oe_9_s1);

    const oe_10 = document.createElement('span');
    oe_10.appendChild(htmlSpan('= '));
    const oe_10_s1 = document.createElement('span');
    oe_10_s1.appendChild(maakBreuk('32','60','opgave'));
    oe_10_s1.appendChild(htmlSpan(' + '));
    oe_10_s1.appendChild(maakBreuk('15','60','opgave'));
    oe_10.appendChild(oe_10_s1);

    const oe_11 = document.createElement('span');
    oe_11.appendChild(htmlSpan('= '));
    const oe_11_s1 = document.createElement('span');
    oe_11_s1.appendChild(maakBreuk('47','60','opgave'));
    oe_11.appendChild(oe_11_s1);

    const oe_12 = document.createElement('span');
    oe_12.appendChild(htmlSpan('<i>xy</i>'));

    const oe_13 = document.createElement('span');
    oe_13.appendChild(htmlSpan('voor <i>x</i> = <span class="markeer-lila">2</span> en <i>y</i> = <span class="markeer-oranje">-8</span>'));

    const oe_14 = document.createElement('span');
    oe_14.appendChild(htmlSpan('<span class="markeer-lila">2</span> · <span class="markeer-oranje">(-8)</span>'));

    const oe_15 = document.createElement('span');
    oe_15.appendChild(htmlSpan('= -16'));

    const oe_16 = document.createElement('span');
    oe_16.appendChild(htmlSpan('7<i>q</i> - 8<i>v</i>'));

    const oe_17 = document.createElement('span');
    oe_17.appendChild(htmlSpan('voor <i>q</i> = <span class="markeer-lila">-6</span> en <i>v</i> = <span class="markeer-oranje">0</span>'));

    const oe_18 = document.createElement('span');
    oe_18.appendChild(htmlSpan('7 · <span class="markeer-lila">(-6)</span> - 8 · <span class="markeer-oranje">0</span>'));

    const oe_19 = document.createElement('span');
    oe_19.appendChild(htmlSpan('= -42 - 0'));

    const oe_20 = document.createElement('span');
    oe_20.appendChild(htmlSpan('= -42'));

    const {tbody} = maakOefTabel(tdInhoud, 2, true);

    const BREEDTE = '3.5cm';

    /* Rij 1: labels */
    const trL1 = document.createElement('tr');
    const tdLblA = maakOpTdazExtra('a', oe_1, oe_2, BREEDTE, false);
    tdLblA.classList.add('kolom-links');
    trL1.appendChild(tdLblA);
    const tdLblC = maakOpTdazExtra('c', oe_12, oe_13, BREEDTE, false);
    tdLblC.classList.add('kolom-rechts');
    trL1.appendChild(tdLblC);
    tbody.appendChild(trL1);

    /* Oplossingen rij 1 */
    {
      const oplA = [
        oe_3,
        oe_4,
        oe_5,
      ];
      const oplC = [
        oe_14,
        oe_15,
        htmlSpan(''),
      ];
      for (let i=0; i<3; i++) {
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

    /* Rij 2: labels */
    const trL2 = document.createElement('tr');
    const tdLblB = maakOpTdazExtra('b', oe_6, oe_7, BREEDTE, true);
    tdLblB.classList.add('kolom-links');
    trL2.appendChild(tdLblB);
    const tdLblD = maakOpTdazExtra('d', oe_16, oe_17, BREEDTE, true);
    tdLblD.classList.add('kolom-rechts');
    trL2.appendChild(tdLblD);
    tbody.appendChild(trL2);

    /* Oplossingen rij 2 */
    {
      const oplB = [
        oe_8,
        oe_9,
        oe_10,
        oe_11
      ];
      const oplD = [
        oe_18,
        oe_19,
        oe_20,
        htmlSpan('')
      ];
      for (let i=0; i<4; i++) {
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
        spL2.appendChild(oplB[i]);
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
        spR2.appendChild(oplD[i]);
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

})();