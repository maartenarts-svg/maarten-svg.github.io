/* ============================================================
   H11 / P11_1 / oe_111014.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111013_1 = document.createElement('span');
  oe_111013_1.appendChild(htmlSpan('7<i>x</i> = 42'));

  const oe_111013_2 = document.createElement('span');
  oe_111013_2.appendChild(htmlSpan('7<i>a</i> = -3'));

  const oe_111013_3 = document.createElement('span');
  oe_111013_3.appendChild(htmlSpan('16 = -8<i>y</i>'));

  const oe_111013_4 = document.createElement('span');
  oe_111013_4.appendChild(maakBreuk('2','7'));
  oe_111013_4.appendChild(htmlSpan(' = -9<i>t</i>'));

  const inhoud = maakOefening({
    id:'oe_111014', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bij elke vergelijking moet je een factor wegwerken. Dit kun je doen door beide leden van de vergelijking te vermenigvuldigen met of te delen door een gepaste factor.<br>Vul aan en los op.<br>', ['intro-tekst']);
  
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
    ['vast', htmlSpan('7<i>x</i>'), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">: 7</span>'), '1.5cm'],
    ['vast', htmlSpan('= 42 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">: 7</span>'), '1.5cm'],
  ];
  const subblokkenA2 = [
    ['vast', htmlSpan('<i>x</i> = '), 'berekenen'],
    ['SL', '6', '1.5cm'],
  ];
  const subblokkenC1 = [
    ['vast', htmlSpan('16 '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">: (-8)</span>'), '1.5cm'],
    ['vast', htmlSpan(' = -8<i>y</i> '), 'berekenen'],
    ['SL', htmlSpan('<span class="markeer-lila">: (-8)</span>'), '1.5cm'],
  ];
  const subblokkenC2 = [
    ['SL', '-2', '1.5cm'],
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
  const tdLblB = maakOpTdaz('b', oe_111013_2, true);
  tdLblB.classList.add('kolom-links');
  trL2.appendChild(tdLblB);
  const tdLblD = maakOpTdaz('d', oe_111013_4, true);
  tdLblD.classList.add('kolom-rechts');
  trL2.appendChild(tdLblD);
  tbody.appendChild(trL2);

  const b03 = document.createElement('span');
  b03.appendChild(htmlSpan('7<i>a</i>'));
  const b04 = document.createElement('span');
  b04.appendChild(htmlSpan(': 7'));
  b04.style.color = '#d500f9';
  const b05 = document.createElement('span');
  b05.appendChild(maakBreuk('-3','7')); 
  const b06 = document.createElement('span');
  b06.appendChild(htmlSpan('')); 

  const b07 = document.createElement('span');
  b07.appendChild(maakBreuk('2','7'));
  const b08 = document.createElement('span');
  b08.appendChild(htmlSpan(': (-9)'));
  b08.style.color = '#d500f9';
  const b09 = document.createElement('span');
  b09.appendChild(maakBreuk('2','7')); 
  b09.appendChild(htmlSpan(' · '));
  b09.appendChild(maakBreuk('-1','9')); 
  const b10 = document.createElement('span');
  b10.appendChild(maakBreuk('-2','63')); 

  const subblokkenB1 = [
    ['vast', b03, 'berekenen'],
    ['SL', b04, '1.5cm'],
    ['vast', htmlSpan('= -3 '), 'berekenen'],
    ['SL', b04.cloneNode(true), '1.5cm'],
  ];
  const subblokkenB2 = [
    ['vast', htmlSpan('<i>a</i> = '), 'berekenen'],
    ['SL', b05, '1.5cm'],
  ];
  const subblokkenD1 = [
    ['vast', b07, 'berekenen'],
    ['SL', b08, '1.5cm'],
    ['vast', htmlSpan(' = -9<i>t</i> '), 'berekenen'],
    ['SL', b08.cloneNode(true), '1.5cm'],
  ];
  const subblokkenD2 = [
    ['SL', b09, '1.5cm'],
    ['vast', htmlSpan('= <i>t</i>'), 'berekenen'],
  ];   
  const subblokkenD3 = [
    ['SL', b10, '1.5cm'],
    ['vast', htmlSpan('= <i>t</i>'), 'berekenen'],
  ];   

  const tr21 = document.createElement('tr');
  const tdB1 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenB1, true);
  tdB1.classList.add('kolom-links');
  tr21.appendChild(tdB1);
  const tdD1 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenD1, true);
  tdD1.classList.add('kolom-rechts');
  tr21.appendChild(tdD1);
  tbody.appendChild(tr21);
  const tr22 = document.createElement('tr');
  const tdB2 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenB2, true);
  tdB2.classList.add('kolom-links');
  tr22.appendChild(tdB2);
  const tdD2 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenD2, true);
  tdD2.classList.add('kolom-rechts');
  tr22.appendChild(tdD2);
  tbody.appendChild(tr22);
  const tr23 = document.createElement('tr');
  const tdB3 = document.createElement('td');
  tdB3.appendChild(htmlSpan(''));
  tdB3.classList.add('kolom-links');
  tr23.appendChild(tdB3);
  const tdD3 = maakSamengesteldeTdZlbl('', '', BREEDTE, subblokkenD3, true);
  tdD3.classList.add('kolom-rechts');
  tr23.appendChild(tdD3);
  tbody.appendChild(tr23);


})();
