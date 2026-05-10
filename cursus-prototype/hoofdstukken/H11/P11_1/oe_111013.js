/* ============================================================
   H11 / P11_1 / oe_111013.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111013_1 = document.createElement('span');
  oe_111013_1.appendChild(htmlSpan('<i>x</i> - 7 = 13'));

  const oe_111013_2 = document.createElement('span');
  oe_111013_2.appendChild(htmlSpan('15 + <i>a</i> = -10'));

  const oe_111013_3 = document.createElement('span');
  oe_111013_3.appendChild(htmlSpan('28 = <i>y</i> + 5'));

  const oe_111013_4 = document.createElement('span');
  oe_111013_4.appendChild(htmlSpan('-20 = -8 + <i>t</i>'));

  const inhoud = maakOefening({
    id:'oe_111013', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bij elke vergelijking moet je een term wegwerken. Dit kun je doen door beide leden van de vergelijking te vermeerderen of te verminderen met een gepaste term.<br>Vul aan en los op.<br>', ['intro-tekst']);
  
  voegWitruimteToe(inhoud,'0.1cm');

  const tekst = document.createElement('span');
  const tekst_a = htmlSpan('Tip!');
  tekst_a.classList.add('theorie');
  tekst.appendChild(tekst_a);
  tekst.appendChild(htmlSpan(' Je kunt de <a href="https://maartenarts-svg.github.io/helperapps/vergelijkingenFALSE.html" target="_blank" rel="noopener noreferrer">balans</a> gebruiken.'));
  
  voegTekstToe(inhoud, tekst, ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111013_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblC = maakOpTdaz('c', oe_111013_3, false);
  tdLblC.classList.add('kolom-rechts');
  trL1.appendChild(tdLblC);
  tbody.appendChild(trL1);

  const BREEDTE = '0cm';

  const subblokkenA1 = [
    ['vast', htmlSpan('<i>x</i> - 7 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">+ 7</span>'), '1.5cm'],
    ['vast', htmlSpan('= 13 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">+ 7</span>'), '1.5cm'],
  ];
  const subblokkenA2 = [
    ['vast', htmlSpan('<i>x</i> = '), 'berekenen'],
    ['SL', htmlSpan('20'), '1.5cm'],
  ];
  const subblokkenC1 = [
    ['vast', htmlSpan('28 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">- 5</span>'), '1.5cm'],
    ['vast', htmlSpan(' = <i>y</i> + 5 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">- 5</span>'), '1.5cm'],
  ];
  const subblokkenC2 = [
    ['SL', htmlSpan('23'), '1.5cm'],
    ['vast', htmlSpan('= <i>y</i>'), 'berekenen'],
  ];  

  const tr11 = document.createElement('tr');
  const tdA1 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenA1, false);
  tdA1.classList.add('kolom-links');
  tr11.appendChild(tdA1);
  const tdC1 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenC1, false);
  tdC1.classList.add('kolom-rechts');
  tr11.appendChild(tdC1);
  tbody.appendChild(tr11);
  const tr12 = document.createElement('tr');
  const tdA2 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenA2, false);
  tdA2.classList.add('kolom-links');
  tr12.appendChild(tdA2);
  const tdC2 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenC2, false);
  tdC2.classList.add('kolom-rechts');
  tr12.appendChild(tdC2);
  tbody.appendChild(tr12);

  /* Rij 2: labels */
  const trL2 = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_111013_2, false);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_111013_4, false);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  const subblokkenB1 = [
    ['vast', htmlSpan('15 + <i>a</i> '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">- 15</span>'), '1.5cm'],
    ['vast', htmlSpan('= -10 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">- 15</span>'), '1.5cm'],
  ];
  const subblokkenB2 = [
    ['vast', htmlSpan('<i>a</i> = '), 'berekenen'],
    ['SL', htmlSpan('-25'), '1.5cm'],
  ];
  const subblokkenD1 = [
    ['vast', htmlSpan('-20 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">+ 8</span>'), '1.5cm'],
    ['vast', htmlSpan(' = -8 + <i>t</i> '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">+ 8</span>'), '1.5cm'],
  ];
  const subblokkenD2 = [
    ['SL', htmlSpan('-12'), '1.5cm'],
    ['vast', htmlSpan('= <i>t</i>'), 'berekenen'],
  ];    

  const tr21 = document.createElement('tr');
  const tdB1 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenB1, false);
  tdB1.classList.add('kolom-links');
  tr21.appendChild(tdB1);
  const tdD1 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenD1, false);
  tdD1.classList.add('kolom-rechts');
  tr21.appendChild(tdD1);
  tbody.appendChild(tr21);
  const tr22 = document.createElement('tr');
  const tdB2 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenB2, false);
  tdB2.classList.add('kolom-links');
  tr22.appendChild(tdB2);
  const tdD2 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenD2, false);
  tdD2.classList.add('kolom-rechts');
  tr22.appendChild(tdD2);
  tbody.appendChild(tr22);


})();
