/* ============================================================
   H11 / H11_W34WIJ / oe_1.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_1_6 = document.createElement('span');
  oe_1_6.appendChild(htmlSpan('7 meer dan het viervoud van een getal:'));

  const oe_1_7 = document.createElement('span');
  oe_1_7.appendChild(htmlSpan('<i>g</i> + 7'));

  const oe_1_8 = document.createElement('span');
  oe_1_8.appendChild(htmlSpan('10 minder dan een derde van een getal:'));

  const oe_1_9 = document.createElement('span');
  const oe_1_9_s1 = document.createElement('span');
  oe_1_9_s1.appendChild(maakBreuk('1','3','opgave'));
  oe_1_9_s1.appendChild(htmlSpan('<i>g</i> - 10'));
  oe_1_9.appendChild(oe_1_9_s1);

  const oe_1_10 = document.createElement('span');
  oe_1_10.appendChild(htmlSpan('het dubbele van de som van een getal en 5:'));

  const oe_1_11 = document.createElement('span');
  oe_1_11.appendChild(htmlSpan('2(<i>g</i> + 5)'));

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
        const td = maakOpTdDubbelZStrZdub('a|',oe_1_6,breedte1,true,oe_1_7);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('b|',oe_1_8,breedte1,true,oe_1_9);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakOpTdDubbelZStrZdub('c|',oe_1_10,breedte1,true,oe_1_11);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
