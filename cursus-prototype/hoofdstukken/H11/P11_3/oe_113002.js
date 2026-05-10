/* ============================================================
   H11 / P11_3 / oe_113002.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_113002_1 = document.createElement('span');
  oe_113002_1.appendChild(htmlSpan('Bereken dat getal.'));

  const stap1 = document.createElement('span');
  stap1.appendChild(htmlSpan('getal: <i>g</i>'));

  const stap2 = document.createElement('span');
  stap2.appendChild(maakBreuk('1','4'));
  stap2.appendChild(htmlSpan('<i>g</i> - 6 = 9'));

  const stap3 = document.createElement('span');
  stap3.appendChild(htmlSpan('<i>g</i> = 60'));

  const stap4 = document.createElement('span');
  stap4.appendChild(htmlSpan('Het getal is 60.'));

  const stap5 = document.createElement('span');
  stap5.appendChild(maakBreuk('1','4'));
  stap5.appendChild(htmlSpan(' · 60 - 6 = 9'));

  const inhoud = maakOefening({
    id:'oe_113002', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Als je een kwart van een getal vermindert met 6, dan is het resultaat 9.', ['intro-tekst']);

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
    const tdR = maakSlTdZonderInsprong(stap1, true);
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
    const tdR = maakSlTdZonderInsprong(stap2, true);
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
    const tdR = maakSlTdZonderInsprong(stap3, true);
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
    const tdR = maakSlTdZonderInsprong(stap4, true);
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
    const tdR = maakSlTdZonderInsprong(stap5, true);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }



})();
