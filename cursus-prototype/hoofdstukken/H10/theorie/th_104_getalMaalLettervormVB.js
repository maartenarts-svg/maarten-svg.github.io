/* ============================================================
   H10 / H10_schema1.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';   // aanpasbaar
  const breedteSoort = '37%'    // aanpasbaar  

  /*====voorbeeldkader=========================================*/
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
  th_101_A.appendChild(htmlSpan('<span class="markeer-oranje">4</span>(5<i>x</i> - 2)'));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('<span class="markeer-lila">= </span><span class="markeer-oranje">4 · </span><span class="markeer-lila"> 5 <i>x</i> + </span><span class="markeer-oranje">4 · </span><span class="markeer-lila">(-2)</span>'));

  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan('= 20<i>x</i> - 8'));

  const th_101_B = document.createElement('span');
  th_101_B.appendChild(htmlSpan('(-8<i>x</i> + 3) <span class="markeer-oranje">· (-2)</span>'));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('<span class="markeer-lila">= -8<i>x</i> </span><span class="markeer-oranje">· (-2)</span><span class="markeer-lila"> + 3 </span><span class="markeer-oranje">· (-2)</span>'));

  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan('= 16<i>x</i> - 6'));

  const {tbody} = maakOefTabel(tdInhoud, 2, true);

  /* Rij 1: labels */
  const trL1AB = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', th_101_A, false);
  tdLblA.classList.add('kolom-links');
  tdLblA.style.position = 'relative';
  trL1AB.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', th_101_B, false);
  tdLblB.classList.add('kolom-rechts');
  tdLblB.style.position = 'relative';
  trL1AB.appendChild(tdLblB);
  tbody.appendChild(trL1AB);

  /* Oplossingen rij 1 */
  {
    const oplA = [
      oe_2,
      oe_3,
    ];
    const oplB = [
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
      spR2.appendChild(oplB[i]);
      rijR.appendChild(spR2);
      tdR.appendChild(rijR);
      tr.appendChild(tdR);

      tbody.appendChild(tr);      
    }
  }

  voegWitruimteToe(tdInhoud,'0.3cm');    

  {
    const div02 = document.createElement('div');
    div02.style.display = 'flex';
    tdInhoud.appendChild(div02); 
    const SpL = htmlSpan('Opmerking!');
    SpL.style.fontWeight = 'bold';
    SpL.style.flex = "0 0 15%";
    SpL.style.display = 'flex';
    SpL.style.alignItems = 'top';
    const SpR = htmlSpan('Bij een lettervorm met een - (of een +) voor de haakjes, vermenigvuldig je met -1 (of 1).');
    SpR.style.flex = "1";
    SpR.style.minWidth = '0';
    SpR.classList.add('theorietekst');
    div02.appendChild(SpL);
    div02.appendChild(SpR);  
  }

  voegWitruimteToe(tdInhoud,'0.1cm');

  /* ---- Span-variabelen ---- */
  const th_101_C = document.createElement('span');
  th_101_C.appendChild(htmlSpan('<span class="markeer-oranje">-</span>(5<i>x</i> - 2)'));

  const th_101_C2 = document.createElement('span');
  th_101_C2.appendChild(htmlSpan('<span class="markeer-lila">= </span><span class="markeer-oranje">-1 · </span><span class="markeer-lila">(5<i>x</i> - 2)</span>'));      

  const oe_2C = document.createElement('span');
  oe_2C.appendChild(htmlSpan('<span class="markeer-lila">= </span><span class="markeer-oranje">-1 · </span><span class="markeer-lila"> 5 <i>x</i> + </span><span class="markeer-oranje">(-1) · </span><span class="markeer-lila">(-2)</span>'));

  const oe_3C = document.createElement('span');
  oe_3C.appendChild(htmlSpan('= -5<i>x</i> + 2'));

  const th_101_D = document.createElement('span');
  th_101_D.appendChild(htmlSpan('<span class="markeer-oranje">+</span>(-8<i>x</i> + 3) '));

  const th_101_D2 = document.createElement('span');
  th_101_D2.appendChild(htmlSpan('<span class="markeer-lila">= </span><span class="markeer-oranje">+1 · </span><span class="markeer-lila">(-8<i>x</i> + 3)</span>'));

  const oe_5D = document.createElement('span');
  oe_5D.appendChild(htmlSpan('<span class="markeer-lila">= </span><span class="markeer-oranje">1 · </span><span class="markeer-lila">(-8<i>x</i>) + </span><span class="markeer-oranje">1 · </span><span class="markeer-lila">3</span>'));

  const oe_6D = document.createElement('span');
  oe_6D.appendChild(htmlSpan('= -8<i>x</i> + 3'));

  const {tbody: tbody2} = maakOefTabel(tdInhoud, 2, true);

  /* Rij 1: labels */
  const trL1CD = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', th_101_C, false);
  tdLblC.classList.add('kolom-links');
  trL1CD.appendChild(tdLblC);
  const tdLblD = maakOpTdaz('d', th_101_D, false);
  tdLblD.classList.add('kolom-rechts');
  trL1CD.appendChild(tdLblD);
  tbody2.appendChild(trL1CD);

  /* oplossing eerste rij */
  const tr = document.createElement('tr');

  const tdL = document.createElement('td');
  tdL.style.height = '0.9cm';
  tdL.classList.add('kolom-links');
  tdL.style.position = 'relative';    
  const rijL = document.createElement('div');
  rijL.classList.add('rij');
  rijL.style.height = '0.9cm';
  const lblL = document.createElement('span');
  lblL.classList.add('lbl', 'subopgave-label');
  rijL.appendChild(lblL);
  const spL2 = document.createElement('span');
  spL2.classList.add('voorgedrukt');
  spL2.appendChild(th_101_C2);
  rijL.appendChild(spL2);
  tdL.appendChild(rijL);
  tr.appendChild(tdL);

  const tdR = document.createElement('td');
  tdR.style.height = '0.9cm';
  tdR.classList.add('kolom-rechts');
  tdR.style.position = 'relative';
  const rijR = document.createElement('div');
  rijR.classList.add('rij');
  const lblR = document.createElement('span');
  lblR.classList.add('lbl', 'subopgave-label');
  rijR.appendChild(lblR);
  const spR2 = document.createElement('span');
  spR2.classList.add('voorgedrukt');
  spR2.appendChild(th_101_D2);
  rijR.appendChild(spR2);
  tdR.appendChild(rijR);
  tr.appendChild(tdR);

  tbody2.appendChild(tr);    

  /* Oplossingen rij 2-3 */
  {
    const oplC = [
      oe_2C,
      oe_3C,
    ];
    const oplD = [
      oe_5D,
      oe_6D,
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
      spL2.appendChild(oplC[i]);
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

      tbody2.appendChild(tr);      
    }
  }

  voegWitruimteToe(tdInhoud,'0.1cm');
  
    // --- Samenstellen ---
  kader.appendChild(trTitel);
  kader.appendChild(trInhoud);

  inhoud.appendChild(kader);

  voegWitruimteToe(inhoud,'0.5cm');

  maak2Parabolen(tdLblA, {
    sx: 0.75,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  maak2Parabolen(tdLblB, {
    sx: 1.3,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.45,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.8,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  maak2Parabolen(tdL, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.45,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.8,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });

  maak2Parabolen(tdR, {
    sx: 1.3,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.6,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.95,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'vast'  // ← 'zwart', 'vast' of 'toggle'
  });  
  
})();