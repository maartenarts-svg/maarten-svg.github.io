/* ============================================================
   JURY / oe_W35WIJ_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
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
  oe_W35WIJ_3_4.appendChild(htmlSpan('-6 + 21<i>a</i>'));

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
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_W35WIJ_3_2
  ];
  const oplB = [
    oe_W35WIJ_3_4
  ];
  for (let i=0; i<1; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }


  /* succescriteria */
  const ruimte1 = '1.3cm';

  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("","SC:",ruimte1,false,"9, 11");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("","SC:",ruimte1,false,"10, 11");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

  /* theorie */
  {
    const tr = document.createElement('tr');
    const tdL = maakOpTdDubbelZStrZdub("","theorie:",ruimte1,false,"nog");
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakOpTdDubbelZStrZdub("","theorie:",ruimte1,false,"nog");;
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody.appendChild(tr);    
  }

})();
