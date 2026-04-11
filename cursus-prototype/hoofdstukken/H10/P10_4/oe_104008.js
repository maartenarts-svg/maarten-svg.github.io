/* ============================================================
   H10 / P10_4 / oe_104008.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104008_1 = document.createElement('span');
  oe_104008_1.appendChild(htmlSpan('(3<i>a</i> - 2) · (-4)'));

  const oe_104008_2 = document.createElement('span');
  oe_104008_2.appendChild(htmlSpan('-'));

  const oe_104008_3 = document.createElement('span');
  oe_104008_3.appendChild(htmlSpan('12<i>a</i>'));

  const oe_104008_4 = document.createElement('span');
  oe_104008_4.appendChild(htmlSpan('+'));

  const oe_104008_5 = document.createElement('span');
  oe_104008_5.appendChild(htmlSpan('8'));

  const oe_104008_7 = document.createElement('span');
  oe_104008_7.appendChild(htmlSpan('-3(5<i>t</i> + 8)'));

  const oe_104008_8 = document.createElement('span');
  oe_104008_8.appendChild(htmlSpan('-'));

  const oe_104008_10 = document.createElement('span');
  oe_104008_10.appendChild(htmlSpan('15<i>t</i>'));

  const oe_104008_12 = document.createElement('span');
  oe_104008_12.appendChild(htmlSpan('-'));

  const oe_104008_11 = document.createElement('span');
  oe_104008_11.appendChild(htmlSpan('24'));

  const oe_104008_13 = document.createElement('span');
  oe_104008_13.appendChild(htmlSpan('(-<i>x</i> - 2) · (-5)'));

  const oe_104008_14 = document.createElement('span');
  oe_104008_14.appendChild(htmlSpan('+'));

  const oe_104008_9 = document.createElement('span');
  oe_104008_9.appendChild(htmlSpan('5<i>x</i>'));

  const oe_104008_15 = document.createElement('span');
  oe_104008_15.appendChild(htmlSpan('+'));

  const oe_104008_16 = document.createElement('span');
  oe_104008_16.appendChild(htmlSpan('10'));

  const oe_104008_17 = document.createElement('span');
  const oe_104008_17_s1 = document.createElement('span');
  oe_104008_17_s1.appendChild(maakBreuk('-1','2','opgave'));
  oe_104008_17_s1.appendChild(htmlSpan('(-2<i>z</i> + 6)'));
  oe_104008_17.appendChild(oe_104008_17_s1);

  const oe_104008_18 = document.createElement('span');
  oe_104008_18.appendChild(htmlSpan('+'));

  const oe_104008_19 = document.createElement('span');
  oe_104008_19.appendChild(htmlSpan('<i>z</i>'));

  const oe_104008_20 = document.createElement('span');
  oe_104008_20.appendChild(htmlSpan('-'));

  const oe_104008_21 = document.createElement('span');
  oe_104008_21.appendChild(htmlSpan('3'));

  const inhoud = maakOefening({
    id:'oe_104008', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul telkens de tekens in.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const BREEDTE = '2.5cm';

  const subblokkenA = [
    ['SL', oe_104008_2, '0.7cm'],
    ['vast', oe_104008_3, 'berekenen'],
    ['SL', oe_104008_4, '0.7cm'],
    ['vast', oe_104008_5, 'berekenen'],
  ];
  const subblokkenB = [
    ['SL', oe_104008_8, '0.7cm'],
    ['vast', oe_104008_10, 'berekenen'],
    ['SL', oe_104008_12, '0.7cm'],
    ['vast', oe_104008_11, 'berekenen'],
  ];
  const subblokkenC = [
    ['SL', oe_104008_14, '0.7cm'],
    ['vast', oe_104008_9, 'berekenen'],
    ['SL', oe_104008_15, '0.7cm'],
    ['vast', oe_104008_16, 'berekenen'],
  ];
  const subblokkenD = [
    ['SL', oe_104008_18, '0.7cm'],
    ['vast', oe_104008_19, 'berekenen'],
    ['SL', oe_104008_20, '0.7cm'],
    ['vast', oe_104008_21, 'berekenen'],
  ];

  const tr1 = document.createElement('tr');
  const tdA = maakSamengesteldeTd('a', oe_104008_1, BREEDTE, subblokkenA, true);
  tdA.classList.add('kolom-links');
  tdA.style.position = 'relative';
  tr1.appendChild(tdA);
  const tdC = maakSamengesteldeTd('c', oe_104008_13, BREEDTE, subblokkenC, true);
  tdC.classList.add('kolom-rechts');
  tdC.style.position = 'relative';
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  const tr2 = document.createElement('tr');
  const tdB = maakSamengesteldeTd('b', oe_104008_7, BREEDTE, subblokkenB, true);
  tdB.classList.add('kolom-links');
  tdB.style.position = 'relative';
  tr2.appendChild(tdB);
  const tdD = maakSamengesteldeTd('d', oe_104008_17, BREEDTE, subblokkenD, true);
  tdD.classList.add('kolom-rechts');
  tdD.style.position = 'relative';
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

  //opgave a
  maak2Parabolen(tdA, {
    sx: 1.0,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.4,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.8,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdB, {
    sx: 0.85,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.05,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave c
  maak2Parabolen(tdC, {
    sx: 1.1,           // ← x-coördinaat startpunt links in cm
    sy: 0.3,            // ← y-coördinaat startpunt links in cm
    br1: 1.45,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.9,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 1,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave d
  maak2Parabolen(tdD, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.15,            // ← y-coördinaat startpunt links in cm
    br1: 1.35,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.65,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

})();
