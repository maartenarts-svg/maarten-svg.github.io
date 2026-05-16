/* ============================================================
   H10 / P10_2 / oe_W31WIE_1.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_W31WIE_1', nummer:'?', soort:'test',
    niveaus:[''], tools:[],
    toggleModus:'oefening'
  });

  const resultaten = berekenAlles(ACTIEVE_DATA);
  const g = resultaten.gemiddelde;
  const m = resultaten.mediaan;
  const v = resultaten.variatiebreedte;
  const zinnenMediaan = getAntwoord('mediaan', ACTIEVE_DATA);
  const zinnenModus = getAntwoord('modus', ACTIEVE_DATA);
  const zinnenVB    = getAntwoord('variatiebreedte', ACTIEVE_DATA);

  const spanOpg = document.createElement('span');
  const spanOpg1 = document.createElement('span');
  spanOpg1.appendChild(htmlSpan('Gemiddelde, mediaan en modus'));
  spanOpg1.classList.add('theorie');
  const spanOpg2 = document.createElement('span');
  spanOpg2.appendChild(htmlSpan('<br>Bereken en vul de betekenis aan.'));

  voegTekstToe(inhoud,spanOpg1);
  voegTekstToe(inhoud,spanOpg2);

  /* ---- Span-variabelen ---- */
  const som = berekenGemiddelde(ACTIEVE_DATA);
  const getallen = ACTIEVE_DATA;

  /*gemiddelde*/
  const somDeel1 = document.createElement('span');
  somDeel1.appendChild(htmlSpan(
    `${getallen.slice(0,10).join(' + ')}`
  ));
  const somDeel2 = document.createElement('span');
  somDeel2.appendChild(htmlSpan(
    `+ ${getallen.slice(10).join(' + ')} = ${som.somWaarde}`
  ));

  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('gemiddelde:'));

  const oe_1a = document.createElement('span');
  oe_1a.appendChild(maakSpanBreedte('1cm','som'));
  oe_1a.appendChild(maakSpanBreedte('0.5cm','='));
  oe_1a.appendChild(somDeel1);

  const oe_1b = document.createElement('span');
  oe_1b.appendChild(maakSpanBreedte('1cm',''));
  oe_1b.appendChild(maakSpanBreedte('0.5cm',''));
  oe_1b.appendChild(somDeel2);

  const oe_1c = document.createElement('span');
  oe_1c.appendChild(maakSpanBreedte('1cm',''));
  oe_1c.appendChild(maakSpanBreedte('0.5cm','='));
  oe_1c.appendChild(htmlSpan(`${som.somWaarde}`));

  const oe_1d = document.createElement('span');
  oe_1d.appendChild(htmlSpan('gemiddelde = '));
  oe_1d.appendChild(htmlSpan(`${g.berekening} = ${g.gemiddelde}`));  

  /*mediaan*/
  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('mediaan:'));

  const oe_2a = document.createElement('span');
  oe_2a.appendChild(htmlSpan(m.reeks));

  const oe_2b = document.createElement('span');
  oe_2b.appendChild(htmlSpan('mediaan = '));
  oe_2b.appendChild(htmlSpan(`${m.berekening} = ${m.mediaan}`));  
  
  const oe_2c = document.createElement('span');
  oe_2c.appendChild(htmlSpan('betekenis:'));
  
  const oe_2d = document.createElement('span');
  oe_2d.appendChild(htmlSpan(zinnenMediaan[0]));  

  const oe_2e = document.createElement('span');
  oe_2e.appendChild(htmlSpan(zinnenMediaan[1])); 

  /*modus*/
  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan('modus:'));

  const oe_3a = document.createElement('span');
  oe_3a.appendChild(htmlSpan('modus = '));
  oe_3a.appendChild(htmlSpan(`${resultaten.modus.modus}`));
 
  const oe_3b = document.createElement('span');
  oe_3b.appendChild(htmlSpan('betekenis:'));
  
  const oe_3c = document.createElement('span');
  oe_3c.appendChild(htmlSpan(zinnenModus[0]));

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '2.8cm';
  const RUIMTE = '0.3cm';

  /* gemiddelde */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_1, TW, false, oe_1a);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  const tr1b = document.createElement('tr');
  const td1b = maakOpTdDubbelZStrZdub('','', TW, false, oe_1b);
  td1b.classList.add('kolom-links');
  tr1b.appendChild(td1b);
  tbody.appendChild(tr1b);

  const tr1c = document.createElement('tr');
  const td1c = maakOpTdDubbelZStrZdub('', '', TW, false, oe_1c);
  td1c.classList.add('kolom-links');
  tr1c.appendChild(td1c);
  tbody.appendChild(tr1c);

  const tr1d = document.createElement('tr');
  const td1d = maakOpTdDubbelZStrZdub('', '', TW, false, oe_1d);
  td1d.classList.add('kolom-links');
  tr1d.appendChild(td1d);
  tbody.appendChild(tr1d); 
  
  voegWitruimteToe(tbody,RUIMTE);

  /* mediaan */
  const tr2a = document.createElement('tr');
  const td2a = maakOpTdGeen('b', oe_2, TW, false, oe_2a);
  td2a.classList.add('kolom-links');
  tr2a.appendChild(td2a);
  tbody.appendChild(tr2a);

  const tr2b = document.createElement('tr');
  const td2b = maakOpTdDubbelZStrZdub('', '', TW, false, oe_2b);
  td2b.classList.add('kolom-links');
  tr2b.appendChild(td2b);
  tbody.appendChild(tr2b);

  const tr2b2 = document.createElement('tr');
  const td2b2 = maakOpTdDubbelZStrZdub('', '', TW, false, '');
  td2b2.classList.add('kolom-links');
  tr2b2.appendChild(td2b2);
  tbody.appendChild(tr2b2);

  const tr2c = document.createElement('tr');
  const td2c = maakOpTdDubbelZStrZdub('', oe_2c, TW, false, oe_2d);
  td2c.classList.add('kolom-links');
  tr2c.appendChild(td2c);
  tbody.appendChild(tr2c);

  const tr2d = document.createElement('tr');
  const td2d = maakOpTdDubbelZStrZdub('', '', TW, false, oe_2e);
  td2d.classList.add('kolom-links');
  tr2d.appendChild(td2d);
  tbody.appendChild(tr2d);  

  voegWitruimteToe(tbody,RUIMTE);

  /* modus */
  const tr3a = document.createElement('tr');
  const td3a = maakOpTdGeen('c', oe_3, TW, false, oe_3a);
  td3a.classList.add('kolom-links');
  tr3a.appendChild(td3a);
  tbody.appendChild(tr3a);

  const tr3b = document.createElement('tr');
  const td3b = maakOpTdDubbelZStrZdub('', oe_3b, TW, false, oe_3c);
  td3b.classList.add('kolom-links');
  tr3b.appendChild(td3b);
  tbody.appendChild(tr3b);

  const tr3b2 = document.createElement('tr');
  const td3b2 = maakOpTdDubbelZStrZdub('', '', TW, false, '');
  td3b2.classList.add('kolom-links');
  tr3b2.appendChild(td3b2);
  tbody.appendChild(tr3b2);

})();
