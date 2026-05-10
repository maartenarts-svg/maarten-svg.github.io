/* ============================================================
   H11 / P11_3 / oe_113006.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const stap1_1 = document.createElement('span');
  stap1_1.appendChild(htmlSpan('<i>x</i> + 12'));

  const stap1_2 = document.createElement('span');
  stap1_2.appendChild(htmlSpan('3(<i>x</i> + 12)'));

  const stap2_1 = document.createElement('span');
  stap2_1.appendChild(maakBreuk('1','10'));
  stap2_1.appendChild(htmlSpan('<i>x</i>'));

  const stap2_2 = document.createElement('span');
  stap2_2.appendChild(maakBreuk('1','10'));
  stap2_2.appendChild(htmlSpan('<i>x</i> - 15'));

  const stap3_1 = document.createElement('span');
  stap3_1.appendChild(htmlSpan('17<i>x</i>'));

  const stap3_2 = document.createElement('span');
  stap3_2.appendChild(htmlSpan('17<i>x</i> + 3'));

  const stap4_1 = document.createElement('span');
  stap4_1.appendChild(htmlSpan('<i>x</i> - 4'));

  const stap4_2 = document.createElement('span');
  stap4_2.appendChild(maakBreuk('1','2'));
  stap4_2.appendChild(htmlSpan('(<i>x</i> - 4)'));

  const inhoud = maakOefening({
    id:'oe_113006', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[''],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de uitspraken in symbolen. Stel het getal voor door <i>x</i>.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const trhulp = document.createElement('tr');
  const tdhulp = document.createElement('td');  
  trhulp.appendChild(tdhulp);
  tbody.appendChild(trhulp);
  const tabelhulp = document.createElement('table');
  tabelhulp.style.width = '100%';
  tabelhulp.style.borderCollapse = 'collapse';
  tabelhulp.style.tableLayout = 'fixed';
  const colg = document.createElement('colgroup');
  for (let i=0;i<2;i++) {
    const col=document.createElement('col');
    if (i === 0) col.style.width = '55%';
    if (i === 1) col.style.width = '45%';
    colg.appendChild(col);
  }
  tabelhulp.appendChild(colg);
  const tbody2 = document.createElement('tbody');
  tabelhulp.appendChild(tbody2);
  tdhulp.appendChild(tabelhulp);

  /* opgave a */
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(maakOnderstreping(htmlSpan('de som van een getal en 12'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('a|', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap1_1, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(htmlSpan('het drievoud van '));
    opg.appendChild(maakOnderstreping(htmlSpan('de som van een getal en 12'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap1_2, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }

  /* opgave b */
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(maakOnderstreping(htmlSpan('een tiende van een getal'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('b|', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap2_1, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(htmlSpan('15 minder dan '));
    opg.appendChild(maakOnderstreping(htmlSpan('een tiende van een getal'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap2_2, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }

  /* opgave c */
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(maakOnderstreping(htmlSpan('het product van een getal en 17'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('c|', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap3_1, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(htmlSpan('3 meer dan '));
    opg.appendChild(maakOnderstreping(htmlSpan('het product van een getal en 17'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap3_2, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }

  /* opgave d */
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(maakOnderstreping(htmlSpan('het verschil van een getal en 4'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('d|', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap4_1, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const opg = document.createElement('span');
    opg.appendChild(htmlSpan('de helft van '));
    opg.appendChild(maakOnderstreping(htmlSpan('het verschil van een getal en 4'),'enkel','0cm',false));
    opg.appendChild(htmlSpan(':'));
    const tdL = maakStapZStreep('', opg);
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap4_2, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }



})();
