/* ============================================================
   H11 / P11_1 / oe_113K07.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_113K07_1 = document.createElement('span');
  oe_113K07_1.appendChild(htmlSpan('Stel een formule op waarmee je de prijs kunt berekenen in functie van de tijd.'));

  const oe_113K07_2 = document.createElement('span');
  oe_113K07_2.appendChild(htmlSpan('<i>p</i> = 12<i>t</i> + 10'));

  const oe_113K07_3 = document.createElement('span');
  oe_113K07_3.appendChild(htmlSpan('<span class="markeer-lila">Elk uur komt er 12 euro bij en je betaalt een vast bedrag van 10 euro.</span>'));

  const oe_113K07_4 = document.createElement('span');
  oe_113K07_4.appendChild(htmlSpan('Bereken het aantal uur dat je de gocart kunt lenen voor een bedrag van'));
  oe_113K07_4.appendChild(htmlSpan(' '));
  const oe_113K07_4_m3 = maakMarkering(htmlSpan('310'), '#bbdefb', true);
  oe_113K07_4.appendChild(oe_113K07_4_m3);
  oe_113K07_4.appendChild(htmlSpan(' '));
  oe_113K07_4.appendChild(htmlSpan('euro.'));

  const oe_113K07_5 = document.createElement('span');
  const oe_113K07_5_m1 = maakMarkering(htmlSpan('310'), '#bbdefb', true);
  oe_113K07_5.appendChild(oe_113K07_5_m1);
  oe_113K07_5.appendChild(htmlSpan(' '));
  oe_113K07_5.appendChild(htmlSpan('= 12<i>t</i> + 10'));

  const oe_113K07_6 = document.createElement('span');
  oe_113K07_6.appendChild(htmlSpan('310 <span class="markeer-lila">- 10</span> = 12<i>t</i> + 10 <span class="markeer-lila">- 10</span>'));

  const oe_113K07_7 = document.createElement('span');
  oe_113K07_7.appendChild(htmlSpan('300 = 12<i>t</i>'));

  const oe_113K07_8 = document.createElement('span');
  oe_113K07_8.appendChild(htmlSpan('300 <span class="markeer-lila">: 12</span> = 12<i>t</i> <span class="markeer-lila">: 12</span>'));

  const oe_113K07_9 = document.createElement('span');
  oe_113K07_9.appendChild(htmlSpan('25 = <i>t</i>'));

  const oe_113K07_10 = document.createElement('span');
  oe_113K07_10.appendChild(htmlSpan('Je kunt 25 uur een gocart lenen.'));

  const oe_113K07_11 = document.createElement('span');
  oe_113K07_11.appendChild(htmlSpan('controle:  10 + 12 · 25 = 310'));

  const inhoud = maakOefening({
    id:'oe_113K07', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Aan de kust kun je een gocart huren. De tabel geeft de prijs <i>p</i> (in euro) weer in functie van <br>de tijd <i>t</i> (in uur).', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['17%', '17%', '17%', '17%', '17%', '17%'];

  const matrix = [
    [
      { inhoud: 'tijd (uur)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '0', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '1', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '2', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'prijs (euro)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '22', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '34', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '46', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '58', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 2, 6, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_113K07_1, false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd(oe_113K07_2, false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd(oe_113K07_3, false);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_113K07_4, false);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(oe_113K07_5, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd(oe_113K07_6, false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd(oe_113K07_7, false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);
  const trb3 = document.createElement('tr');
  const tdb3 = maakSlTd(oe_113K07_8, false);
  tdb3.classList.add('kolom-links');
  trb3.appendChild(tdb3);
  tbody.appendChild(trb3);
  const trb4 = document.createElement('tr');
  const tdb4 = maakSlTd(oe_113K07_9, false);
  tdb4.classList.add('kolom-links');
  trb4.appendChild(tdb4);
  tbody.appendChild(trb4);
  const trb5 = document.createElement('tr');
  const tdb5 = maakSlTd(oe_113K07_10, false);
  tdb5.classList.add('kolom-links');
  trb5.appendChild(tdb5);
  tbody.appendChild(trb5);
  const trb6 = document.createElement('tr');
  const tdb6 = maakSlTd(oe_113K07_11, false);
  tdb6.classList.add('kolom-links');
  trb6.appendChild(tdb6);
  tbody.appendChild(trb6);

})();
