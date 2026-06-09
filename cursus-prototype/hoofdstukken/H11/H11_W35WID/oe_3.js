/* ============================================================
   H11 / H11_W35WID / oe_3.js
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
    oe_3_1.appendChild(htmlSpan('Als je het dubbel van Finns lengte vermeerdert met 40 cm, dan krijg je 400 cm.<br>Bereken hoe lang Finn is.'));

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
      oe_3_2.appendChild(maakSpanBreedte(breedte2,'lengte Finn: <i>x</i>'));
      oe_3_2.appendChild(htmlSpan('<span class="markeer-lila">180</span>'));

      {
        const trLbl = document.createElement('tr');
        const tdLbl = maakOpTdDubbelZStrZdub('1|','keuze onbekende:',breedte1,false,oe_3_2);
        tdLbl.classList.add('kolom-links');
        trLbl.appendChild(tdLbl);
        tbody2.appendChild(trLbl);
      }

      const oe_3_3 = document.createElement('span');
      oe_3_3.appendChild(htmlSpan('2<i>x</i> + 40 = 400'));

      {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('2|','vergelijking opstellen:',breedte1,false,oe_3_3);
        td.classList.add('kolom-links');
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      const oe_3_4 = document.createElement('span');
      oe_3_4.appendChild(htmlSpan('<i>x</i> = 180'));

      {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('3|','vergelijking oplossen:',breedte1,false,oe_3_4);
        td.classList.add('kolom-links');
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      const oe_3_5 = document.createElement('span');
      oe_3_5.appendChild(htmlSpan('Finns lengte is 180 cm.'));

      {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('4|','antwoord:',breedte1,false,oe_3_5);
        td.classList.add('kolom-links');
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      const oe_3_6 = document.createElement('span');
      oe_3_6.appendChild(htmlSpan('2 · 180 + 40 = 400'));

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
  const oe_3_12 = document.createElement('span');
  oe_3_12.appendChild(htmlSpan('Dit jaar verzamelde de leerlingenraad 750 euro. Dat is 50 euro meer dan het viervoud van vorig jaar.<br>Bereken het bedrag dat vorig jaar verzameld werd.'));

  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('b', oe_3_12, false);
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
    const oe_3_7 = document.createElement('span');
    oe_3_7.appendChild(maakSpanBreedte(breedte2,'bedrag vorig jaar: <i>b</i>'));
    oe_3_7.appendChild(htmlSpan('<span class="markeer-lila">175</span>'));

    {
      const trLbl = document.createElement('tr');
      const tdLbl = maakOpTdDubbelZStrZdub('1|','keuze onbekende:',breedte1,false,oe_3_7);
      tdLbl.classList.add('kolom-links');
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }

    const oe_3_8 = document.createElement('span');
    oe_3_8.appendChild(htmlSpan('4<i>b</i> + 50 = 750'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('2|','vergelijking opstellen:',breedte1,false,oe_3_8);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    const oe_3_9 = document.createElement('span');
    oe_3_9.appendChild(htmlSpan('<i>b</i> = 175'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('3|','vergelijking oplossen:',breedte1,false,oe_3_9);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    const oe_3_10 = document.createElement('span');
    oe_3_10.appendChild(htmlSpan('Vorig jaar werd er 175 euro verzameld.'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('4|','antwoord:',breedte1,false,oe_3_10);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    const oe_3_11 = document.createElement('span');
    oe_3_11.appendChild(htmlSpan('4 · 175 + 50 = 750'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdDubbelZStrZdub('5|','controle:',breedte1,false,oe_3_11);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody2.appendChild(tr);
    }

    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

})();
