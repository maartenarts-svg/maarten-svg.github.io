// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.

/* ============================================================
   H11 / P11_3 / oe_113012.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_113012_1 = document.createElement('span');
  oe_113012_1.appendChild(htmlSpan('In de kast liggen 64 atlassen. Er zijn 16 aardrijkskundige atlassen meer dan er historische atlassen zijn. <br>Bereken het aantal atlassen van elke soort.'));

  const oe_113012_2 = document.createElement('span');
  oe_113012_2.appendChild(htmlSpan('<i>x</i>'));

  const oe_113012_6 = document.createElement('span');
  oe_113012_6.appendChild(htmlSpan('<i>x</i> + 16'));

  const oe_113012_5 = document.createElement('span');
  oe_113012_5.appendChild(htmlSpan('<i>x</i> + <i>x</i> + 16 = 64'));

  const oe_113012_12 = document.createElement('span');
  oe_113012_12.appendChild(htmlSpan('Op de bus richting taalstage zitten 72 mensen. Er zijn 11 keer zoveel leerlingen als coaches. <br>Bereken het aantal coaches op de bus.'));

  const oe_113012_3 = document.createElement('span');
  oe_113012_3.appendChild(htmlSpan('<i>x</i>'));

  const oe_113012_7 = document.createElement('span');
  oe_113012_7.appendChild(htmlSpan('11<i>x</i>'));

  const oe_113012_8 = document.createElement('span');
  oe_113012_8.appendChild(htmlSpan('<i>x</i> + 11<i>x</i> = 72'));

  const oe_113012_13 = document.createElement('span');
  oe_113012_13.appendChild(htmlSpan('Tine heeft 7 knikkers meer dan Fien. Linda heeft er 8 meer dan een kwart van het aantal knikkers van Fien. Samen hebben ze er 105. <br>Bereken het aantal knikkers van Linda.'));

  const oe_113012_9 = document.createElement('span');
  oe_113012_9.appendChild(htmlSpan('<i>x</i>'));

  const oe_113012_10 = document.createElement('span');
  oe_113012_10.appendChild(htmlSpan('<i>x</i> + 7'));

  const oe_113012_11 = document.createElement('span');
  const oe_113012_11_s1 = document.createElement('span');
  oe_113012_11_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_113012_11_s1.appendChild(htmlSpan('<i>x</i> + 8'));
  oe_113012_11.appendChild(oe_113012_11_s1);

  const oe_113012_14 = document.createElement('span');
  const oe_113012_14_s1 = document.createElement('span');
  oe_113012_14_s1.appendChild(htmlSpan('<i>x</i> + <i>x</i> + 7 + '));
  oe_113012_14_s1.appendChild(maakBreuk('1','4','opgave'));
  oe_113012_14_s1.appendChild(htmlSpan('<i>x</i> + 8 = 105'));
  oe_113012_14.appendChild(oe_113012_14_s1);

  const inhoud = maakOefening({
    id:'oe_113012', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de keuze van de onbekende aan.<br>Stel de vergelijking op. (Je moet niet verder oplossen!)', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.3cm');

  const breedte1 = '10cm';
  const breedte2 = '4cm';
  const breedte3 = '0.65cm';
  const breedte4 = '4.65cm';  

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_113012_1, true);
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);


  {
    const tra0 = document.createElement('tr');
    const opga_1 = document.createElement('span');
    const opga_1l = maakSpanBreedte(breedte3,'1|');
    opga_1l.classList.add('lbl');
    opga_1.appendChild(opga_1l);
    opga_1.appendChild(maakSpanBreedte(breedte2,'keuze onbekende:'));
    opga_1.appendChild(htmlSpan('aantal historische atlassen:'));
    const opga_2 = document.createElement('span');
    const opga_2l = maakSpanBreedte(breedte3,'');
    opga_2l.classList.add('lbl');
    opga_2.appendChild(opga_2l);
    opga_2.appendChild(maakSpanBreedte(breedte2,''));
    opga_2.appendChild(htmlSpan('aantal aardrijkskundige atlassen:'));
    const opga_3 = document.createElement('span');
    const opga_3l = maakSpanBreedte(breedte3,'2|');
    opga_3l.classList.add('lbl');
    opga_3.appendChild(opga_3l);
    opga_3.appendChild(maakSpanBreedte(breedte2,'vergelijking opstellen:')); 

    const tda0 = maakOpTdDubbelZStrZdub('',opga_1,breedte1,false,oe_113012_2);
    tda0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tda0.classList.add('kolom-links');
    tra0.appendChild(tda0);
    tbody.appendChild(tra0);
    const tra1 = document.createElement('tr');
    const tda1 = maakOpTdDubbelZStrZdub('',opga_2,breedte1,false,oe_113012_6);
    tda1.classList.add('kolom-links');
    tra1.appendChild(tda1);
    tbody.appendChild(tra1);
    const tra2 = document.createElement('tr');
    const tda2 = maakOpTdDubbelZStrZdub('',opga_3,breedte4,false,oe_113012_5);
    tda2.classList.add('kolom-links');
    tra2.appendChild(tda2);
    tbody.appendChild(tra2);    
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave b */
  {
    const tra0 = document.createElement('tr');
    const opga_1 = document.createElement('span');
    const opga_1l = maakSpanBreedte(breedte3,'1|');
    opga_1l.classList.add('lbl');
    opga_1.appendChild(opga_1l);
    opga_1.appendChild(maakSpanBreedte(breedte2,'keuze onbekende:'));
    opga_1.appendChild(htmlSpan('aantal coaches:'));
    const opga_2 = document.createElement('span');
    const opga_2l = maakSpanBreedte(breedte3,'');
    opga_2l.classList.add('lbl');
    opga_2.appendChild(opga_2l);
    opga_2.appendChild(maakSpanBreedte(breedte2,''));
    opga_2.appendChild(htmlSpan('aantal leerlingen:'));
    const opga_3 = document.createElement('span');
    const opga_3l = maakSpanBreedte(breedte3,'2|');
    opga_3l.classList.add('lbl');
    opga_3.appendChild(opga_3l);
    opga_3.appendChild(maakSpanBreedte(breedte2,'vergelijking opstellen:')); 

    const trLblB = document.createElement('tr');
    const tdLblB = maakOpTdaz('b', oe_113012_12, true);
    tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
    tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblB.classList.add('kolom-links');
    trLblB.appendChild(tdLblB);
    tbody.appendChild(trLblB);

    const trb0 = document.createElement('tr');
    const tdb0 = maakOpTdDubbelZStrZdub('',opga_1,breedte1,false,oe_113012_3);
    tdb0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdb0.classList.add('kolom-links');
    trb0.appendChild(tdb0);
    tbody.appendChild(trb0);
    const trb1 = document.createElement('tr');
    const tdb1 = maakOpTdDubbelZStrZdub('',opga_2,breedte1,false,oe_113012_7);
    tdb1.classList.add('kolom-links');
    trb1.appendChild(tdb1);
    tbody.appendChild(trb1);
    const trb2 = document.createElement('tr');
    const tdb2 = maakOpTdDubbelZStrZdub('',opga_3,breedte4,false,oe_113012_8);
    tdb2.classList.add('kolom-links');
    trb2.appendChild(tdb2);
    tbody.appendChild(trb2);    
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  {
    const tra0 = document.createElement('tr');
    const opga_1 = document.createElement('span');
    const opga_1l = maakSpanBreedte(breedte3,'1|');
    opga_1l.classList.add('lbl');
    opga_1.appendChild(opga_1l);
    opga_1.appendChild(maakSpanBreedte(breedte2,'keuze onbekende:'));
    opga_1.appendChild(htmlSpan('aantal knikkers van Fien:'));
    const opga_2 = document.createElement('span');
    const opga_2l = maakSpanBreedte(breedte3,'');
    opga_2l.classList.add('lbl');
    opga_2.appendChild(opga_2l);
    opga_2.appendChild(maakSpanBreedte(breedte2,''));
    opga_2.appendChild(htmlSpan('aantal knikkers van Tine:'));
    const opga_3 = document.createElement('span');
    const opga_3l = maakSpanBreedte(breedte3,'');
    opga_3l.classList.add('lbl');
    opga_3.appendChild(opga_3l);
    opga_3.appendChild(maakSpanBreedte(breedte2,''));
    opga_3.appendChild(htmlSpan('aantal knikkers van Linda:'));
    const opga_4 = document.createElement('span');
    const opga_4l = maakSpanBreedte(breedte3,'2|');
    opga_4l.classList.add('lbl');
    opga_4.appendChild(opga_4l);
    opga_4.appendChild(maakSpanBreedte(breedte2,'vergelijking opstellen:')); 

    const trLblC = document.createElement('tr');
    const tdLblC = maakOpTdaz('c', oe_113012_13, true);
    tdLblC.querySelector('.rij').style.alignItems = 'flex-start';
    tdLblC.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblC.classList.add('kolom-links');
    trLblC.appendChild(tdLblC);
    tbody.appendChild(trLblC);

    const trc0 = document.createElement('tr');
    const tdc0 = maakOpTdDubbelZStrZdub('',opga_1,breedte1,false,oe_113012_9);
    tdc0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdc0.classList.add('kolom-links');
    trc0.appendChild(tdc0);
    tbody.appendChild(trc0);
    const trc1 = document.createElement('tr');
    const tdc1 = maakOpTdDubbelZStrZdub('',opga_2,breedte1,false,oe_113012_10);
    tdc1.classList.add('kolom-links');
    trc1.appendChild(tdc1);
    tbody.appendChild(trc1);
    const trc2 = document.createElement('tr');
    const tdc2 = maakOpTdDubbelZStrZdub('',opga_3,breedte1,false,oe_113012_11);
    tdc2.classList.add('kolom-links');
    trc2.appendChild(tdc2);
    tbody.appendChild(trc2);
    const trc3 = document.createElement('tr');
    const tdc3 = maakOpTdDubbelZStrZdub('',opga_4,breedte4,false,oe_113012_14);
    tdc3.classList.add('kolom-links');
    trc3.appendChild(tdc3);
    tbody.appendChild(trc3);    
  }


})();
