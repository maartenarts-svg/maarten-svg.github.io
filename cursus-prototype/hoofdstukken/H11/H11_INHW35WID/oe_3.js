/* ============================================================
   H11 / H11_INHW35WID / oe_3.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';
  const breedte2 = '6cm';


  const inhoud = maakOefening({
    id:'oe_3', nummer:'?', soort:'test',
    niveaus:[''], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vraagstukken op met een vergelijking.<br>Los de vergelijking op met ICT.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave a */
  {
    const oe_3_1 = document.createElement('span');
    oe_3_1.appendChild(htmlSpan('Als je het dubbel van Liams lengte vermeerdert met 30 cm, dan krijg je 360 cm.<br>Bereken hoe lang Liam is.'));

    const trLblA = document.createElement('tr');
    const tdLblA = maakOpTdaz('a', oe_3_1, false);
    tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
    tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblA.classList.add('kolom-links');
    trLblA.appendChild(tdLblA);
    tbody.appendChild(trLblA);

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

      /* subopgave 1 */
      const oe_3_2 = document.createElement('span');
      oe_3_2.appendChild(maakSpanBreedte(breedte2,'lengte Liam: <i>x</i>'));
      oe_3_2.appendChild(htmlSpan('<span class="markeer-lila">165</span>'));

      {
        const trLbl = document.createElement('tr');
        const tdLbl = maakOpTdDubbelZStrZdub('1|','keuze onbekende:',breedte1,false,oe_3_2);
        tdLbl.classList.add('kolom-links');
        trLbl.appendChild(tdLbl);
        tbody2.appendChild(trLbl);
      }

      const oe_3_3 = document.createElement('span');
      oe_3_3.appendChild(htmlSpan('2<i>x</i> + 30 = 360'));

      {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('2|','vergelijking opstellen:',breedte1,false,oe_3_3);
        td.classList.add('kolom-links');
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      const oe_3_4 = document.createElement('span');
      oe_3_4.appendChild(htmlSpan('<i>x</i> = 165'));

      {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('3|','vergelijking oplossen:',breedte1,false,oe_3_4);
        td.classList.add('kolom-links');
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      const oe_3_5 = document.createElement('span');
      oe_3_5.appendChild(htmlSpan('Liams lengte is 165 cm.'));

      {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('4|','antwoord:',breedte1,false,oe_3_5);
        td.classList.add('kolom-links');
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      const oe_3_6 = document.createElement('span');
      oe_3_6.appendChild(htmlSpan('2 · 165 + 30 = 360'));

      {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('5|','controle:',breedte1,false,oe_3_6);
        td.classList.add('kolom-links');
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      trtabel.appendChild(tdtabel);
      tbodyhulp.appendChild(trtabel);
    }
  }


  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  const oe_3_7 = document.createElement('span');
  oe_3_7.appendChild(htmlSpan('Dit jaar verzamelde de scholierenbond 620 euro voor het goede doel. Dat is 40 euro meer dan het viervoud van vorig jaar.<br>Bereken het bedrag dat vorig jaar verzameld werd.'));

  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('b', oe_3_7, false);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  voegWitruimteToe(tbody,'0.3cm');

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

    /* subopgave 1 */
    const oe_3_8 = document.createElement('span');
    oe_3_8.appendChild(maakSpanBreedte(breedte2,'bedrag vorig jaar: <i>b</i>'));
    oe_3_8.appendChild(htmlSpan('<span class="markeer-lila">145</span>'));

    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdDubbelZStrZdub('1|','keuze onbekende:',breedte1,false,oe_3_8);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }

    const oe_3_9 = document.createElement('span');
    oe_3_9.appendChild(htmlSpan('4<i>b</i> + 40 = 620'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('2|','vergelijking opstellen:',breedte1,false,oe_3_9);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    const oe_3_10 = document.createElement('span');
    oe_3_10.appendChild(htmlSpan('<i>b</i> = 145'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('3|','vergelijking oplossen:',breedte1,false,oe_3_10);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    const oe_3_11 = document.createElement('span');
    oe_3_11.appendChild(htmlSpan('Vorig jaar werd er 145 euro verzameld.'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('4|','antwoord:',breedte1,false,oe_3_11);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    const oe_3_12 = document.createElement('span');
    oe_3_12.appendChild(htmlSpan('4 · 145 + 40 = 620'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('5|','controle:',breedte1,false,oe_3_12);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

})();
