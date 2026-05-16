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
  spanOpg1.appendChild(htmlSpan('Variatiebreedte'));
  spanOpg1.classList.add('theorie');
  const spanOpg2 = document.createElement('span');
  spanOpg2.appendChild(htmlSpan('<br>Bereken en vul de betekenis aan.'));

  voegTekstToe(inhoud,spanOpg1);
  voegTekstToe(inhoud,spanOpg2);

  /* ---- Span-variabelen ---- */
  const som = berekenGemiddelde(ACTIEVE_DATA);
  const getallen = ACTIEVE_DATA;

  /*variatiebreedte*/

  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('variatiebreedte:'));

  const oe_1a = document.createElement('span');
  oe_1a.appendChild(htmlSpan('variatiebreedte = '));
  oe_1a.appendChild(htmlSpan(`${v.berekening} = ${v.variatiebreedte}`));

  const oe_1b = document.createElement('span');
  oe_1b.appendChild(htmlSpan('betekenis:'));

  const oe_1c = document.createElement('span');
  oe_1c.appendChild(htmlSpan(zinnenVB[0]));  

  const oe_1d = document.createElement('span');
  oe_1d.appendChild(htmlSpan(zinnenVB[1])); 

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const TW = '2.8cm';
  const RUIMTE = '0.5cm';

  /* gemiddelde */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTdGeen('a', oe_1, TW, false, oe_1a);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  tbody.appendChild(tr1);

  const tr1b = document.createElement('tr');
  const td1b = maakOpTdDubbelZStrZdub('',oe_1b, TW, false, oe_1c);
  td1b.classList.add('kolom-links');
  tr1b.appendChild(td1b);
  tbody.appendChild(tr1b);

  const tr1c = document.createElement('tr');
  const td1c = maakOpTdDubbelZStrZdub('', '', TW, false, oe_1d);
  td1c.classList.add('kolom-links');
  tr1c.appendChild(td1c);
  tbody.appendChild(tr1c);

})();
