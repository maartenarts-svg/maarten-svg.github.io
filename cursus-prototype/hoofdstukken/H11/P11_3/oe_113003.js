/* ============================================================
   H11 / P11_3 / oe_113003.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '3.5cm';
  const breedte2 = '4cm';

  const oe_113002_1 = document.createElement('span');
  oe_113002_1.appendChild(htmlSpan('Bereken de leeftijd van Tun Kai.'));

  const stap1_1 = document.createElement('span');
  stap1_1.appendChild(maakSpanBreedte(breedte1,'leeftijd Tun Kai:'))
  stap1_1.appendChild(maakSpanBreedte(breedte2,'<i>l</i>'))
  stap1_1.appendChild(htmlSpan('<span class="markeer-lila">7</span>'));

  const stap1_2 = document.createElement('span');
  stap1_2.appendChild(maakSpanBreedte(breedte1,'leeftijd Kai Mook:'))
  stap1_2.appendChild(maakSpanBreedte(breedte2,'3<i>l</i> - 9'))
  stap1_2.appendChild(htmlSpan('<span class="markeer-lila">3 · 7 - 9 = 12</span>'));

  const stap1_3 = document.createElement('span');
  stap1_3.appendChild(maakSpanBreedte(breedte1,'leeftijd May Tagu:'))
  stap1_3.appendChild(maakSpanBreedte(breedte2,'<i>l</i> + 5'))
  stap1_3.appendChild(htmlSpan('<span class="markeer-lila">7 + 5 = 12</span>'));

  const stap2 = document.createElement('span');
  stap2.appendChild(htmlSpan('<i>l</i> + 3<i>l</i> - 9 + <i>l</i> + 5 = 31'));

  const stap3 = document.createElement('span');
  stap3.appendChild(htmlSpan('<i>l</i> = 7'));

  const stap4 = document.createElement('span');
  stap4.appendChild(htmlSpan('Tun Kai is 7 jaar oud.'));

  const stap5 = document.createElement('span');
  stap5.appendChild(htmlSpan('7 + 12 + 12 = 31'));

  const inhoud = maakOefening({
    id:'oe_113003', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'In de dierentuin Planckendael zitten een aantal olifanten.<br>Kai Mook is 9 jaar jonger dan het drievoud van de leeftijd van Tun Kai. May Tagu is 5 jaar ouder dan Tun Kai. Samen zijn ze 31 jaar.', ['intro-tekst']);

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
    const tdR = maakSlTdZonderInsprong(stap1_1, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('', '');
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap1_2, false);
    tdR.classList.add('kolom-rechts');
    tr.appendChild(tdR);
    tbody2.appendChild(tr);
  }
  {
    const tr = document.createElement('tr');
    const tdL = maakStapZStreep('', '');
    tdL.classList.add('kolom-links');
    tr.appendChild(tdL);
    const tdR = maakSlTdZonderInsprong(stap1_3, false);
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
