/* ============================================================
   H10 / P10_1 / oe_101500.js
   soort: ontdek
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101500', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'We beperken ons bij deze oefening tot de vier hoofdbewerkingen.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);

  /* ---- Opgave a ---- */
    /* ---- Span-variabelen ---- */
    const oe_101500_1 = document.createElement('span');
    oe_101500_1.appendChild(htmlSpan('Markeer de bewerkingen waarbij je de getallen van plaats mag verwisselen, zonder dat de uitkomst verandert.'));

    const oe_101500_2 = document.createElement('span');
    const oe_101500_2_m1 = maakMarkering(htmlSpan('20 + 10'), '#bbdefb', true);
    oe_101500_2.appendChild(oe_101500_2_m1);

    const oe_101500_3 = document.createElement('span');
    oe_101500_3.appendChild(htmlSpan('20 - 10'));

    const oe_101500_4 = document.createElement('span');
    const oe_101500_4_m1 = maakMarkering(htmlSpan('20 · 10'), '#bbdefb', true);
    oe_101500_4.appendChild(oe_101500_4_m1);

    const oe_101500_5 = document.createElement('span');
    oe_101500_5.appendChild(htmlSpan('20 : 10'));

    /* ----Opgavetekst----*/
    {
      const tr = document.createElement('tr');
      const td = maakOpTdaz('a', oe_101500_1, false);
      td.querySelector('.rij').style.alignItems = 'flex-start';
      td.querySelector('.lbl').style.paddingTop = '0cm';
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    /* subopgaven */
    {
      const tbody2a = maakNestedTabel(tbody,'4.19%');
      const {tbody:tbody3a} = maakOefTabel(tbody2a, 4, false);
      
      const trLbl = document.createElement('tr');
      const tdLbl1 = maakOpTdazZonder(oe_101500_2, false);
      tdLbl1.classList.add('kolom-links');
      trLbl.appendChild(tdLbl1);
      const tdLbl2 = maakOpTdazZonder(oe_101500_3, false);
      tdLbl2.classList.add('kolom-midden');
      trLbl.appendChild(tdLbl2);
      const tdLbl3 = maakOpTdazZonder(oe_101500_4, false);
      tdLbl3.classList.add('kolom-midden');
      trLbl.appendChild(tdLbl3);
      const tdLbl4 = maakOpTdazZonder(oe_101500_5, false);
      tdLbl4.classList.add('kolom-rechts');
      trLbl.appendChild(tdLbl4);
      tbody3a.appendChild(trLbl);
    }  

  voegWitruimteToe(tbody);

  /* ---- Opgave b ---- */
    /* ---- Span-variabelen ---- */
    const oe_101500_6 = document.createElement('span');
    oe_101500_6.appendChild(htmlSpan('Heb je maar één soort bewerking, dan moet je volgens de afspraken de bewerkingen uitrekenen van links naar rechts.<br>Markeer de opgaven waarbij je de bewerkingen ook mag uitrekenen van rechts naar links, zonder dat de uitkomst verandert.'));

    const oe_101500_7 = document.createElement('span');
    const oe_101500_7_m1 = maakMarkering(htmlSpan('80 + 10 + 2'), '#bbdefb', true);
    oe_101500_7.appendChild(oe_101500_7_m1);

    const oe_101500_8 = document.createElement('span');
    oe_101500_8.appendChild(htmlSpan('80 - 10 - 2'));

    const oe_101500_9 = document.createElement('span');
    const oe_101500_9_m1 = maakMarkering(htmlSpan('80 · 10 · 2'), '#bbdefb', true);
    oe_101500_9.appendChild(oe_101500_9_m1);

    const oe_101500_10 = document.createElement('span');
    oe_101500_10.appendChild(htmlSpan('80 : 10 : 2'));    

    /* ----Opgavetekst----*/
    {
      const tr = document.createElement('tr');
      const td = maakOpTdaz('b', oe_101500_6, false);
      td.querySelector('.rij').style.alignItems = 'flex-start';
      td.querySelector('.lbl').style.paddingTop = '0cm';
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    voegWitruimteToe(tbody,'0.8cm');

    /* subopgaven */
    {
      const tbody2b = maakNestedTabel(tbody,'4.19%');
      const {tbody:tbody3b} = maakOefTabel(tbody2b, 4, false);
      
      const trLbl = document.createElement('tr');
      const tdLbl1 = maakOpTdazZonder(oe_101500_7, false);
      tdLbl1.classList.add('kolom-links');
      trLbl.appendChild(tdLbl1);
      const tdLbl2 = maakOpTdazZonder(oe_101500_8, false);
      tdLbl2.classList.add('kolom-midden');
      trLbl.appendChild(tdLbl2);
      const tdLbl3 = maakOpTdazZonder(oe_101500_9, false);
      tdLbl3.classList.add('kolom-midden');
      trLbl.appendChild(tdLbl3);
      const tdLbl4 = maakOpTdazZonder(oe_101500_10, false);
      tdLbl4.classList.add('kolom-rechts');
      trLbl.appendChild(tdLbl4);
      tbody3b.appendChild(trLbl);
    }

  voegWitruimteToe(tbody);

  /* ---- Opgave c ---- */
    /* ---- Span-variabelen ---- */
    const oe_101500_11 = document.createElement('span');
    oe_101500_11.appendChild(htmlSpan('Reken 7 · 43 uit.<br>Laat in je tussenstappen duidelijk zien wat je doet.'));

    const oe_101500_13 = document.createElement('span');
    const oe_101500_13_b1 = maakSpanBreedte('1.5cm', '7 · 43');
    oe_101500_13.appendChild(oe_101500_13_b1);
    oe_101500_13.appendChild(htmlSpan('= 7 · 40 + 7 · 3'));

    const oe_101500_14 = document.createElement('span');
    const oe_101500_14_b1 = maakSpanBreedte('1.5cm', '');
    oe_101500_14.appendChild(oe_101500_14_b1);
    oe_101500_14.appendChild(htmlSpan('= 280 + 21'));

    const oe_101500_15 = document.createElement('span');
    const oe_101500_15_b1 = maakSpanBreedte('1.5cm', '');
    oe_101500_15.appendChild(oe_101500_15_b1);
    oe_101500_15.appendChild(htmlSpan('= 301'));

    {
      const tr = document.createElement('tr');
      const td = maakOpTdaz('c', oe_101500_11, false);
      td.querySelector('.rij').style.alignItems = 'flex-start';
      td.querySelector('.lbl').style.paddingTop = '0cm';
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_101500_13, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_101500_14, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    {
      const tr = document.createElement('tr');
      const td = maakSlTd(oe_101500_15, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

  voegWitruimteToe(tbody);

  /* ---- Opgave d ---- */
    /* ---- Span-variabelen ---- */
    const oe_101500_16 = document.createElement('span');
    oe_101500_16.appendChild(htmlSpan('Noteer op de streeplijn een getal zodat de gelijkheid klopt.'));
    
    /*opgave*/
    {
      const tr = document.createElement('tr');
      const td = maakOpTdaz('d', oe_101500_16, false);
      td.classList.add('kolom-links');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    /*invuloefeningen*/
    {
      const tbody2d = maakNestedTabel(tbody,'4.19%');
      const {tbody:tbody3d} = maakOefTabel(tbody2d, 4, true);
      const trGroot = document.createElement('tr');
      const tdGroot1 = document.createElement('td'); tdGroot1.classList.add('kolom-links'); trGroot.appendChild(tdGroot1);
      const tdGroot2 = document.createElement('td'); tdGroot2.classList.add('kolom-midden'); trGroot.appendChild(tdGroot2);
      const tdGroot3 = document.createElement('td'); tdGroot3.classList.add('kolom-midden'); trGroot.appendChild(tdGroot3);
      const tdGroot4 = document.createElement('td'); tdGroot4.classList.add('kolom-rechts'); trGroot.appendChild(tdGroot4);
      const{tbody: tbody4d1} = maakOefTabel(tdGroot1,5,false);
      const{tbody: tbody4d2} = maakOefTabel(tdGroot2,5,false);
      const{tbody: tbody4d3} = maakOefTabel(tdGroot3,5,false);
      const{tbody: tbody4d4} = maakOefTabel(tdGroot4,5,false);
      tbody3d.appendChild(trGroot);

      const BLOKA = [
        {inhoud1: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0+'), false),
          inhoud3: maakSlTdZonderInsprong(htmlSpan('\u00A0\u00A00'),false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d1,
        },
        {inhoud1: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0-'), false),
          inhoud3: maakSlTdZonderInsprong(htmlSpan('\u00A0\u00A00'),false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d2,
        },
        {inhoud1: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0·'), false),
          inhoud3: maakSlTdZonderInsprong(htmlSpan('\u00A0\u00A01'),false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d3,
        },
        {inhoud1: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0:'), false),
          inhoud3: maakSlTdZonderInsprong(htmlSpan('\u00A0\u00A01'),false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d4,
        },                  
      ]; 

      const BLOKB = [
        {inhoud1: maakSlTdZonderInsprong(htmlSpan('\u00A0\u00A00'),false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0+'), false),
          inhoud3: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d1,
        },
        {inhoud1: maakSlTdZonderInsprong(htmlSpan('\u00A010'),false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0-'), false),
          inhoud3: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d2,
        },
        {inhoud1: maakSlTdZonderInsprong(htmlSpan('\u00A0\u00A01'),false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0·'), false),
          inhoud3: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d3,
        },
        {inhoud1: maakSlTdZonderInsprong(htmlSpan('\u00A025'),false),
          inhoud2: maakOpTdazZonder(htmlSpan('\u00A0\u00A0:'), false),
          inhoud3: maakOpTdazZonder(htmlSpan('\u00A0\u00A05'), false),
          inhoud4: maakOpTdazZonder(htmlSpan('\u00A0\u00A0='), false),
          inhoud5: maakOpTdazZonder(htmlSpan('5'), false),
          container: tbody4d4,
        },                  
      ];

      BLOKA.forEach(item => {
        const tritem = document.createElement('tr');
        const tdK1 = item.inhoud1; tritem.appendChild(tdK1);
        const tdK2 = item.inhoud2; tritem.appendChild(tdK2);
        const tdK3 = item.inhoud3; tritem.appendChild(tdK3);
        const tdK4 = item.inhoud4; tritem.appendChild(tdK4);
        const tdK5 = item.inhoud5; tritem.appendChild(tdK5);
        item.container.appendChild(tritem);
      });

      BLOKB.forEach(item => {
        const tritem = document.createElement('tr');
        const tdK1 = item.inhoud1; tritem.appendChild(tdK1);
        const tdK2 = item.inhoud2; tritem.appendChild(tdK2);
        const tdK3 = item.inhoud3; tritem.appendChild(tdK3);
        const tdK4 = item.inhoud4; tritem.appendChild(tdK4);
        const tdK5 = item.inhoud5; tritem.appendChild(tdK5);
        item.container.appendChild(tritem);
      });

    /* ---- opgave onder tabel ----*/
      /* ---- Span-variabelen ---- */
      const oe_2 = document.createElement('span');
      oe_2.appendChild(htmlSpan('Bij welke bewerkingen noteer je steeds hetzelfde getal?'));

      const oe_1 = document.createElement('span');
      oe_1.appendChild(htmlSpan('bij de optelling en de vermenigvuldiging'));

      voegWitruimteToe(tbody2d);

      {
          const tr = document.createElement('tr');
          const td = document.createElement('td');
          const _o = oe_2;
          if (typeof _o === 'string') td.innerHTML = _o;
          else td.appendChild(_o);
          tr.appendChild(td);
          tbody2d.appendChild(tr);
      }

      {
          const tr = document.createElement('tr');
          const td = maakSlTdZonderInsprong(oe_1, false);
          tr.appendChild(td);
          tbody2d.appendChild(tr);
      }
    }


  voegWitruimteToe(tbody);

  /* ---- Opgave e ---- */
  {
    /* ---- Span-variabelen ---- */
    const oe_e1 = document.createElement('span');
    oe_e1.appendChild(htmlSpan('Wat gebeurt er als je een getal vermenigvuldigt met nul.'));

    const oe_e2 = document.createElement('span');
    oe_e2.appendChild(htmlSpan('de uitkomst is 0'));

    /* Opgave*/
    const trLblA = document.createElement('tr');
    const tdLblA = maakOpTdaz('e', oe_e1, false);
    tdLblA.classList.add('kolom-links');
    trLblA.appendChild(tdLblA);
    tbody.appendChild(trLblA);

    const tra0 = document.createElement('tr');
    const tda0 = maakSlTd(oe_e2, false);
    tda0.classList.add('kolom-links');
    tra0.appendChild(tda0);
    tbody.appendChild(tra0);
  }


  voegWitruimteToe(tbody);

  /* ---- Opgave f ---- */
  {
  /* ---- Span-variabelen ---- */
    const oe_1 = document.createElement('span');
    oe_1.appendChild(htmlSpan('Laat met een voorbeeld zien dat de som van twee tegengestelde getallen gelijk is aan nul.'));

    const oe_2 = document.createElement('span');
    oe_2.appendChild(htmlSpan('-3 + 3 = 0'));

    const oe_3 = document.createElement('span');
    oe_3.appendChild(htmlSpan('Laat met een voorbeeld zien dat het product van twee getallen die elkaars omgekeerde zijn gelijk is aan één.'));

    const oe_4 = document.createElement('span');
    const oe_4_s1 = document.createElement('span');
    oe_4_s1.appendChild(htmlSpan('2 · '));
    oe_4_s1.appendChild(maakBreuk('1','2','opgave'));
    oe_4_s1.appendChild(htmlSpan(' = 1'));
    oe_4.appendChild(oe_4_s1);


    /* Opgave 1 */
    const trLblA = document.createElement('tr');
    const tdLblA = maakOpTdaz('f', oe_1, false);
    tdLblA.classList.add('kolom-links');
    trLblA.appendChild(tdLblA);
    tbody.appendChild(trLblA);

    const tra0 = document.createElement('tr');
    const tda0 = maakSlTd(oe_2, false);
    tda0.classList.add('kolom-links');
    tra0.appendChild(tda0);
    tbody.appendChild(tra0);

    /* Opgave b */
    const tbody2f = maakNestedTabel(tbody,'4.19%');
    const {tbody:tbody3f} = maakOefTabel(tbody2f, 1, false);    
    const trLblB = document.createElement('tr');
    const tdLblB = maakOpTdazZonder(oe_3, true);
    tdLblB.classList.add('kolom-links');
    trLblB.appendChild(tdLblB);
    tbody3f.appendChild(trLblB);

    const trb0 = document.createElement('tr');
    const tdb0 = maakSlTd(oe_4, true);
    tdb0.classList.add('kolom-links');
    trb0.appendChild(tdb0);
    tbody.appendChild(trb0);

  }
})();
