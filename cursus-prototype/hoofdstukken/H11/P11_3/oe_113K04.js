/* ============================================================
   H11 / P11_3 / oe113K04.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe113K04_2 = document.createElement('span');
  oe113K04_2.appendChild(htmlSpan('keuze onbekende:'));

  const oe113K04_3 = document.createElement('span');
  oe113K04_3.appendChild(htmlSpan('aantal jaar geleden:  <i>x</i>'));

  const oe113K04_4 = document.createElement('span');
  oe113K04_4.appendChild(htmlSpan('Vul de tabel aan om de vergelijking op te stellen.'));

  const oe113K04_5 = document.createElement('span');
  oe113K04_5.appendChild(htmlSpan('vergelijking oplossen:'));

  const oe113K04_6 = document.createElement('span');
  oe113K04_6.appendChild(htmlSpan('<i>x</i> = 38'));

  const oe113K04_7 = document.createElement('span');
  oe113K04_7.appendChild(htmlSpan('antwoord:'));

  const oe113K04_8 = document.createElement('span');
  oe113K04_8.appendChild(htmlSpan('38 jaar geleden was oma dubbel zo oud als haar oudste dochter.'));

  const oe113K04_9 = document.createElement('span');
  oe113K04_9.appendChild(htmlSpan('controle:'));

  const oe113K04_10 = document.createElement('span');
  oe113K04_10.appendChild(htmlSpan('42 = 2 · 21'));

  const inhoud = maakOefening({
    id:'oe113K04', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Oma is 80 jaar, haar oudste dochter is 59.<br>We berekenen hoeveel jaar geleden oma dubbel zo oud was als haar oudste dochter.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '4cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdDubbelZStrZdub('1|', oe113K04_2, TW, false, oe113K04_3);
  tdA.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTdaz('2', oe113K04_4,false);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  tbody.appendChild(tr2);

  const tbodyA = maakNestedTabel(tbody,'4.19%');

  const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['33%', '33%', '33%'];

  const cel01 = document.createElement('span');
  cel01.appendChild(maakSpanBreedte('2cm','80 - <i>x</i>'));
  const cel01a = document.createElement('span');
  cel01a.appendChild(htmlSpan('80 - 38 = 42'));
  cel01a.style.color = '#d500f9';
  cel01.appendChild(cel01a);
  const cel02 = document.createElement('span');
  cel02.appendChild(maakSpanBreedte('2cm','59 - <i>x</i>'));
  const cel02a = document.createElement('span');
  cel02a.appendChild(htmlSpan('59 - 38 = 21'));
  cel02a.style.color = '#d500f9';
  cel02.appendChild(cel02a);

  const matrix = [
    [
      { inhoud: 'wie', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'leeftijd nu', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'leeftijd <i>x</i> jaar geleden', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'oma', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '80', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: cel01, type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'oudste dochter', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '59', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: cel02, type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(tbodyA, 3, 3, {
    hoofding: 'boven',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  const tr2a = document.createElement('tr');
  const td2a1 = maakOpTdazGeenStreep('','Stel op basis van de laatste kolom de vergelijking op als je weet dat oma op dat moment dubbel zo oud is als haar oudste dochter.',false);
  td2a1.classList.add('kolom-links');
  tr2a.appendChild(td2a1);
  tbody.appendChild(tr2a);

  const tr2b = document.createElement('tr');
  const opl2b = document.createElement('span');
  opl2b.appendChild(htmlSpan('80 - <i>x</i> = 2(59 - <i>x</i>)'));
  const td2b1 = maakSlTd(opl2b,false);
  td2b1.classList.add('kolom-links');
  tr2b.appendChild(td2b1);
  tbody.appendChild(tr2b);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTdDubbelZStrZdub('3|', oe113K04_5, TW, false, oe113K04_6);
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  tbody.appendChild(tr3);

  /* Rij 4 */
  const tr4 = document.createElement('tr');
  const tdD = maakOpTdDubbelZStrZdub('4|', oe113K04_7, TW, false, oe113K04_8);
  tdD.classList.add('kolom-links');
  tr4.appendChild(tdD);
  tbody.appendChild(tr4);

  /* Rij 5 */
  const tr5 = document.createElement('tr');
  const tdE = maakOpTdDubbelZStrZdub('5|', oe113K04_9, TW, false, oe113K04_10);
  tdE.classList.add('kolom-links');
  tr5.appendChild(tdE);
  tbody.appendChild(tr5);

})();
