/* ============================================================
   H11 / P11_3 / oe_113001.js
   soort: ontdek
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_113001_1 = document.createElement('span');
  oe_113001_1.appendChild(htmlSpan('Noteer de betekenis van elk onderdeel van deze vergelijking.'));

  const oe_113001_2 = document.createElement('span');
  oe_113001_2.appendChild(htmlSpan('15'));

  const oe_113001_3 = document.createElement('span');
  oe_113001_3.appendChild(htmlSpan('de prijs voor de wasbeurt van een auto'));

  const oe_113001_4 = document.createElement('span');
  oe_113001_4.appendChild(htmlSpan('12'));

  const oe_113001_5 = document.createElement('span');
  oe_113001_5.appendChild(htmlSpan('de prijs per uur voor klusjes in de tuin'));

  const oe_113001_6 = document.createElement('span');
  oe_113001_6.appendChild(htmlSpan('<i>t</i>'));

  const oe_113001_7 = document.createElement('span');
  oe_113001_7.appendChild(htmlSpan('het aantal uren werk in de tuin'));

  const oe_113001_8 = document.createElement('span');
  oe_113001_8.appendChild(htmlSpan('63'));

  const oe_113001_9 = document.createElement('span');
  oe_113001_9.appendChild(htmlSpan('het verdiende bedrag'));

  const oe_113001_10 = document.createElement('span');
  oe_113001_10.appendChild(htmlSpan('Los de vergelijking op.'));

  const oe_113001_11 = document.createElement('span');
  oe_113001_11.appendChild(htmlSpan('15 + 12<i>t</i> = 63'));

  const oe_113001_12 = document.createElement('span');
  oe_113001_12.appendChild(htmlSpan('15 + 12<i>t</i> <span class="markeer-lila">- 15</span> = 63 <span class="markeer-lila">- 15</span>'));

  const oe_113001_13 = document.createElement('span');
  oe_113001_13.appendChild(htmlSpan('12<i>t</i> = 48'));

  const oe_113001_14 = document.createElement('span');
  oe_113001_14.appendChild(htmlSpan('12<i>t</i> <span class="markeer-lila">: 12</span> = 48 <span class="markeer-lila">: 12</span>'));

  const oe_113001_15 = document.createElement('span');
  oe_113001_15.appendChild(htmlSpan('<i>t</i> = 4'));

  const oe_113001_16 = document.createElement('span');
  oe_113001_16.appendChild(htmlSpan('Formuleer het antwoord.'));

  const oe_113001_17 = document.createElement('span');
  oe_113001_17.appendChild(htmlSpan('Hij heeft 4 uur in de tuin gewerkt.'));

  const oe_113001_18 = document.createElement('span');
  oe_113001_18.appendChild(htmlSpan('Controleer het antwoord.'));
  
  const oe_113001_19 = document.createElement('span');
  oe_113001_19.appendChild(htmlSpan('15 + 12 · 4 = 63'));  

  const inhoud = maakOefening({
    id:'oe_113001', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Om wat extra geld te verzamelen voor de taalstage, doen de coaches een actie.<br>Ze organiseren een klusjesdienst. Als je je auto laat wassen, betaal je 15 euro. Voor klusjes in de tuin betaal je 12 euro per uur.<br>Maarten werkt bij een gezin en wast er één auto. In totaal verdient hij 63 euro.<br>Om te berekenen hoeveel uur hij in de tuin gewerkt heeft, kun je werken met de vergelijking <br>15 + 12<i>t</i> = 63.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* ---- Opgave a ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('a', oe_113001_1, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  /* hulptabel voor subopgaven */
  {
    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbody.appendChild(trhulp);

    const tabelhulp = document.createElement('table');
    tabelhulp.style.width = '100%';
    tabelhulp.style.borderCollapse = 'collapse';
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '4.19%';
    const col2 = document.createElement('col'); col2.style.width = '95.81%';
    colg.appendChild(col1); colg.appendChild(col2);
    tabelhulp.appendChild(colg);
    const tbodyhulp = document.createElement('tbody');
    tabelhulp.appendChild(tbodyhulp);
    tdhulp.appendChild(tabelhulp);

    const trtabel = document.createElement('tr');
    const tdleer  = document.createElement('td');
    trtabel.appendChild(tdleer);
    const tdtabel = document.createElement('td');
    const {tbody: tbody2} = maakOefTabel(tdtabel, 1, false);
    const TW = '0.6cm';

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStreep('•', oe_113001_2, TW, false, oe_113001_3);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStreep('•', oe_113001_6, TW, false, oe_113001_7);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStreep('•', oe_113001_4, TW, false, oe_113001_5);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStreep('•', oe_113001_8, TW, false, oe_113001_9);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody,'0.3cm');
  /* ---- Opgave b ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('b', oe_113001_10, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_113001_11, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_113001_12, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_113001_13, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_113001_14, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_113001_15, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  voegWitruimteToe(tbody,'0.3cm');
  /* ---- Opgave c ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('c', oe_113001_16, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_113001_17, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  voegWitruimteToe(tbody,'0.3cm');
  /* ---- Opgave d ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('d', oe_113001_18, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  {
    const tr = document.createElement('tr');
    const td = maakSlTd(oe_113001_19, false);
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

})();
