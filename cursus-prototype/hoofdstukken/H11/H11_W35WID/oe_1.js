/* ============================================================
   H11 / H11_W35WID / oe_1.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_1_1 = document.createElement('span');
  oe_1_1.appendChild(htmlSpan('10 meer dan een getal:'));

  const oe_1_2 = document.createElement('span');
  oe_1_2.appendChild(htmlSpan('<i>g</i> + 10'));

  const oe_1_3 = document.createElement('span');
  oe_1_3.appendChild(htmlSpan('het viervoud van een getal:'));

  const oe_1_4 = document.createElement('span');
  oe_1_4.appendChild(htmlSpan('4<i>g</i>'));

  const oe_1_5 = document.createElement('span');
  oe_1_5.appendChild(htmlSpan('een vijfde van een getal:'));

  const oe_1_6 = document.createElement('span');
  const oe_1_6_s1 = document.createElement('span');
  oe_1_6_s1.appendChild(maakBreuk('1','5','opgave'));
  oe_1_6_s1.appendChild(htmlSpan('<i>g</i>'));
  oe_1_6.appendChild(oe_1_6_s1);

  const oe_1_7 = document.createElement('span');
  oe_1_7.appendChild(htmlSpan('7 minder dan een getal:'));

  const oe_1_8 = document.createElement('span');
  oe_1_8.appendChild(htmlSpan('<i>g</i> - 7'));

  const oe_1_9 = document.createElement('span');
  oe_1_9.appendChild(htmlSpan('5 meer dan het drievoud van een getal:'));

  const oe_1_10 = document.createElement('span');
  oe_1_10.appendChild(htmlSpan('3<i>g</i> + 5'));

  const oe_1_11 = document.createElement('span');
  oe_1_11.appendChild(htmlSpan('het tienvoud van de som van een getal en 8:'));

  const oe_1_12 = document.createElement('span');
  oe_1_12.appendChild(htmlSpan('10(<i>g</i> + 8)'));

  const inhoud = maakOefening({
    id:'oe_1', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de uitspraken in symbolen. Stel het getal voor door <i>g</i>.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);
  const breedte1 = '7.2cm';

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('a|',oe_1_1,breedte1,true,oe_1_2);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('b|',oe_1_3,breedte1,true,oe_1_4);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('c|',oe_1_5,breedte1,true,oe_1_6);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('d|',oe_1_7,breedte1,true,oe_1_8);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('e|',oe_1_9,breedte1,true,oe_1_10);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('f|',oe_1_11,breedte1,true,oe_1_12);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
