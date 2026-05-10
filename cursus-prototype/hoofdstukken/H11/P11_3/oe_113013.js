/* ============================================================
   H11 / P11_3 / oe_113007.js
   soort: test
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';

  const oe_113002_1 = document.createElement('span');
  oe_113002_1.appendChild(htmlSpan('Bereken de prijs van het T-shirt zonder BTW. <br>Los op met een vergelijking.'));

  const stap1 = document.createElement('span');
  stap1.appendChild(htmlSpan('prijs zonder BTW: <i>p</i>'));

  const stap2 = document.createElement('span');
  stap2.appendChild(htmlSpan('1,21<i>p</i> = 22,99'));
  const stap2a = document.createElement('span');
  stap2a.appendChild(maakSpanBreedte('2cm',''));
  const stap2b = document.createElement('span');
  stap2b.appendChild(htmlSpan('(vermeerderen met 21 % is maal 1.21)'));
  stap2b.style.fontSize = '0.85em';
  stap2b.style.color = '#d500f9';
  stap2a.appendChild(stap2b);
  stap2.appendChild(stap2a);


  const stap3 = document.createElement('span');
  stap3.appendChild(htmlSpan('<i>p</i> = 19'));

  const stap4 = document.createElement('span');
  stap4.appendChild(htmlSpan('De prijs zonder BTW is 19 euro.'));

  const stap5 = document.createElement('span');
  stap5.appendChild(htmlSpan('1,21 · 19 = 22,99'));

  const inhoud = maakOefening({
    id:'oe_113013', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Een T-shirt, inclusief BTW van 21 %, kost 22,99 euro.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Instructie */
  {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.appendChild(oe_113002_1);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

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
    if (i === 0) col.style.width = '30%';
    if (i === 1) col.style.width = '70%';
    colg.appendChild(col);
  }
  tabelhulp.appendChild(colg);
  const tbody2 = document.createElement('tbody');
  tabelhulp.appendChild(tbody2);
  tdhulp.appendChild(tabelhulp);

  /* Keuze onbekende */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('1|', htmlSpan('keuze onbekende:'));
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap1, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }

  /* Vergelijking opstellen */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('2|', htmlSpan('vergelijking opstellen:'));
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap2, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }

  /* Vergelijking oplossen */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('3|', htmlSpan('vergelijking oplossen:'));
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap3, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }

  /* Antwoord */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('4|', htmlSpan('antwoord:'));
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap4, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }

  /* Controle */
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('5|', htmlSpan('controle:'));
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap5, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }



})();
