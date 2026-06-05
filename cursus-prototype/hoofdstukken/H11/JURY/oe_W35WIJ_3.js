/* ============================================================
   JURY / oe_W35WIJ_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const ruimte1 = '1.4cm';
  const SCT = document.createElement('span');
  SCT.appendChild(htmlSpan('SC:'));
  SCT.classList.add('theorie');
  const THT = document.createElement('span');
  THT.appendChild(htmlSpan('theorie:'));
  THT.classList.add('theorie');

  const oe_W35WIJ_3_1 = document.createElement('span');
  oe_W35WIJ_3_1.appendChild(maakOnderstreping(htmlSpan('7'), 'enkel', '0.1cm', true));
  oe_W35WIJ_3_1.appendChild(htmlSpan(' '));
  oe_W35WIJ_3_1.appendChild(maakOnderstreping(htmlSpan('+ 5<i>x</i>'), 'dubbel', '0.18cm', true));
  oe_W35WIJ_3_1.appendChild(htmlSpan(' '));
  oe_W35WIJ_3_1.appendChild(maakOnderstreping(htmlSpan('- <i>x</i>'), 'dubbel', '0.18cm', true));
  oe_W35WIJ_3_1.appendChild(htmlSpan(' '));
  oe_W35WIJ_3_1.appendChild(maakOnderstreping(htmlSpan('- 8'), 'enkel', '0.1cm', true));

  const oe_W35WIJ_3_2 = document.createElement('span');
  oe_W35WIJ_3_2.appendChild(htmlSpan('= -1 + 4<i>x</i>'));

  const oe_W35WIJ_3_3 = document.createElement('span');
  oe_W35WIJ_3_3.appendChild(htmlSpan('-3(2 - 7<i>a</i>)'));

  const oe_W35WIJ_3_4 = document.createElement('span');
  oe_W35WIJ_3_4.appendChild(htmlSpan('= -6 + 21<i>a</i>'));

  const inhoud = maakOefening({
    id:'oe_W35WIJ_3', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_W35WIJ_3_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_W35WIJ_3_3, false);
  tdLblB.classList.add('kolom-rechts');
  tdLblB.style.position = 'relative';
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_W35WIJ_3_2
  ];
  const oplB = [
    oe_W35WIJ_3_4
  ];
  const tr01 = document.createElement('tr');
  const tdA01 = maakSlTd(oplA[0], false);
  tdA01.classList.add('kolom-links');
  tr01.appendChild(tdA01);
  const tdB01 = maakSlTd(oplB[0], false);
  tdB01.classList.add('kolom-rechts');
  tr01.appendChild(tdB01);
  tbody.appendChild(tr01);


  /* succescriteria */

  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("",SCT.cloneNode(true),ruimte1,false,"9, 11");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("",SCT.cloneNode(true),ruimte1,false,"10, 11");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

  /* theorie */
  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("",THT.cloneNode(true),ruimte1,false,"nog");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("",THT.cloneNode(true),ruimte1,false,"nog");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

  //opgave a
    maak2Parabolen(tdLblB, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

})();
