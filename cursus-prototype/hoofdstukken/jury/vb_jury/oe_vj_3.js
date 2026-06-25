/* ============================================================
   JURY / oe_vj_3.js
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

  const oe_vj_3_1 = document.createElement('span');
  oe_vj_3_1.appendChild(maakOnderstreping(htmlSpan('7'), 'enkel', '0.1cm', true));
  oe_vj_3_1.appendChild(htmlSpan(' '));
  oe_vj_3_1.appendChild(maakOnderstreping(htmlSpan('+ 5<i>x</i>'), 'dubbel', '0.18cm', true));
  oe_vj_3_1.appendChild(htmlSpan(' '));
  oe_vj_3_1.appendChild(maakOnderstreping(htmlSpan('- <i>x</i>'), 'dubbel', '0.18cm', true));
  oe_vj_3_1.appendChild(htmlSpan(' '));
  oe_vj_3_1.appendChild(maakOnderstreping(htmlSpan('- 8'), 'enkel', '0.1cm', true));

  const oe_vj_3_2 = document.createElement('span');
  oe_vj_3_2.appendChild(htmlSpan('-1 + 4<i>x</i>'));

  const oe_vj_3_3 = document.createElement('span');
  oe_vj_3_3.appendChild(htmlSpan('-3(2 - 7<i>a</i>)'));

  const oe_vj_3_4 = document.createElement('span');
  oe_vj_3_4.appendChild(htmlSpan('-6 + 21<i>a</i>'));

  const inhoud = maakOefening({
    id:'oe_vj_3', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTd('a', oe_vj_3_1,'3cm',false,oe_vj_3_2);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB =maakOpTd('b', oe_vj_3_3,'3cm', false,oe_vj_3_4);
  tdLblB.classList.add('kolom-rechts');
  tdLblB.style.position = 'relative';
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

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
