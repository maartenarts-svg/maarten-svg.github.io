/* ============================================================
   H10 / P10_ZE / oe_10ZE006.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE006_1 = document.createElement('span');
  oe_10ZE006_1.appendChild(htmlSpan('Vul de tabel aan.'));

  const oe_10ZE006_2 = document.createElement('span');
  oe_10ZE006_2.appendChild(htmlSpan('Noteer een formule waarmee je het aantal blokjes van de trap kunt berekenen als je de breedte van de trap kent.<br>Gebruik voor de breedte van de trap de letter <i>b</i>.'));

  const oe_10ZE006_3 = document.createElement('span');
  oe_10ZE006_3.appendChild(htmlSpan('aantal blokjes = <i>b</i> · (<i>b</i> + 1) : 2'));

  const oe_10ZE006_4 = document.createElement('span');
  oe_10ZE006_4.appendChild(htmlSpan('Bereken met behulp van de formule het aantal hokjes van een trap die 300 hokjes breed is.'));

  const oe_10ZE006_5 = document.createElement('span');
  oe_10ZE006_5.appendChild(htmlSpan('aantal blokjes = 300 · 301 : 2 = 45 150'));

  const oe_10ZE006_6 = document.createElement('span');
  oe_10ZE006_6.appendChild(htmlSpan('Bereken de uitkomst van 1 + 2 + 3 + ... + 299 + 300.'));

  const oe_10ZE006_7 = document.createElement('span');
  oe_10ZE006_7.appendChild(htmlSpan('1 + 2 + 3 + ... + 299 + 300 = 300 · 301 : 2 = 45 150'));

  const oe_10ZE006_8 = document.createElement('span');
  oe_10ZE006_8.appendChild(htmlSpan('Bereken de uitkomst van 1 + 2 + 3 + ... + (<i>n</i> - 1) + <i>n</i>.<br>In je antwoord komt de letter <i>n</i>  voor.'));

  const oe_10ZE006_9 = document.createElement('span');
  oe_10ZE006_9.appendChild(htmlSpan('1 + 2 + 3 + ... + (<i>n</i> - 1) + <i>n</i> = <i>n</i> · (<i>n</i> + 1) : 2'));

  const inhoud = maakOefening({
    id:'oe_10ZE006', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'We zoeken een manier om het aantal blokken van een trap te berekenen als je het aantal blokjes van de basis kent.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_10ZE006_1, false);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['30%', '10%', '10%', '10%', '10%', '10%', '20%'];

  const matrix = [
    [
      { inhoud: 'breedte van de trap', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '3', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '12', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '100', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>b</i>', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'hoogte van de rechthoek', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '4', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '13', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '101', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>b</i> + 1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'aantal blokjes van de rechthoek', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '12', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '20', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '30', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '156', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10 100', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>b</i> · (<i>b</i> + 1)', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'aantal blokjes van de trap', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '10', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '15', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '78', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '5 050', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '<i>b</i> · (<i>b</i> + 1) : 2', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabelWrapper = document.createElement('div');
  tabelWrapper.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
  tabelWrapper.style.marginTop = '-0.5cm';  // ← HIER AANPASSEN
  tbody.appendChild(tabelWrapper);
  maakZichtbareTabel(tabelWrapper, 4, 7, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

  voegWitruimteToe(tbody);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', oe_10ZE006_2, false);
  tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  voegWitruimteToe(tbody);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(oe_10ZE006_3, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);

  voegWitruimteToe(tbody);

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const tdLblC = maakOpTdaz('c', oe_10ZE006_4, false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

  const trc0 = document.createElement('tr');
  const tdc0 = maakSlTd(oe_10ZE006_5, false);
  tdc0.classList.add('kolom-links');
  trc0.appendChild(tdc0);
  tbody.appendChild(trc0);

  voegWitruimteToe(tbody);

  /* Opgave d */
  const trLblD = document.createElement('tr');
  const tdLblD = maakOpTdaz('d', oe_10ZE006_6, false);
  tdLblD.classList.add('kolom-links');
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  const trd0 = document.createElement('tr');
  const tdd0 = maakSlTd(oe_10ZE006_7, false);
  tdd0.classList.add('kolom-links');
  trd0.appendChild(tdd0);
  tbody.appendChild(trd0);

  voegWitruimteToe(tbody);

  /* Opgave e */
  const trLblE = document.createElement('tr');
  const tdLblE = maakOpTdaz('e', oe_10ZE006_8, false);
  tdLblE.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblE.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblE.classList.add('kolom-links');
  trLblE.appendChild(tdLblE);
  tbody.appendChild(trLblE);

  const tre0 = document.createElement('tr');
  const tde0 = maakSlTd(oe_10ZE006_9, false);
  tde0.classList.add('kolom-links');
  tre0.appendChild(tde0);
  tbody.appendChild(tre0);

})();
