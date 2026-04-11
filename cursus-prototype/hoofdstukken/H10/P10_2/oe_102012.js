/* ============================================================
   H10 / P10_2 / oe_102012.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102012', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  const minderw = '-0.2cm'

  voegTekstToe(inhoud, 'De massa <i>m</i> (in kg) van een jonge beer kun je berekenen met de formule <i>m</i> = 1,5<i>t</i> + 12.<br>Hierbij is <i>t</i> de leeftijd van de beer (in weken).', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', 'Bereken de massa van de beer als hij 4 weken oud is.', false);
  tdLblA.classList.add('kolom-links');
  tdLblA.querySelector('.rij').style.marginBottom = minderw;
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd('tijd:\u00A0 <i>t</i>\u200A = 4 weken	', false);
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd('massa:\u00A0 <i>m</i>\u200A = 1,5 ·\u00A0 <span class="markeer-lila">4</span>\u200A + 12 = 18', false);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);
  const tra2 = document.createElement('tr');
  const tda2 = maakSlTd('De massa is dan 18 kg.', false);
  tda2.classList.add('kolom-links');
  tra2.appendChild(tda2);
  tbody.appendChild(tra2);

  voegWitruimteToe(tbody);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', 'Bereken de massa van de beer als hij 10 weken oud is.', false);
  tdLblB.classList.add('kolom-links');
  tdLblB.querySelector('.rij').style.marginBottom = minderw;
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd('tijd:\u00A0 <i>t</i>\u200A = 10 weken', false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd('massa:\u00A0 <i>m</i>\u200A = 1,5 ·\u00A0 <span class="markeer-lila">4</span>\u200A + 12 = 27', false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd('De massa is dan 27 kg.', false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);

  voegWitruimteToe(tbody);

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', 'Hoeveel neemt de massa van de beer per week toe?', false);
  tdLblC.classList.add('kolom-links');
  tdLblC.querySelector('.rij').style.marginBottom = minderw;
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd('1,5 kg per week', false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);
  const trc1 = document.createElement('tr');
  const tdc1 = maakSlTd('', false);
  tdc1.classList.add('kolom-links');
  trc1.appendChild(tdc1);
  tbody.appendChild(trc1);

  voegWitruimteToe(tbody);

  /* Opgave d */
  const trLblD = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', 'Noteer de massa van de beer bij zijn geboorte.', false);
  tdLblD.classList.add('kolom-links');
  tdLblD.querySelector('.rij').style.marginBottom = minderw;
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  const trd0 = document.createElement('tr');
  const tdd0 = maakSlTd('tijd:\u00A0 <i>t</i>\u200A = 0 weken', false);
  tdd0.classList.add('kolom-links');
  trd0.appendChild(tdd0);
  tbody.appendChild(trd0);
  const trd1 = document.createElement('tr');
  const tdd1 = maakSlTd('massa:\u00A0 <i>m</i>\u200A = 1,5 ·\u00A0 <span class="markeer-lila">4</span>\u200A + 12 = 12', false);
  tdd1.classList.add('kolom-links');
  trd1.appendChild(tdd1);
  tbody.appendChild(trd1);
  const trd2 = document.createElement('tr');
  const tdd2 = maakSlTd('De massa bij de geboorte was 12 kg.', false);
  tdd2.classList.add('kolom-links');
  trd2.appendChild(tdd2);
  tbody.appendChild(trd2);

})();
