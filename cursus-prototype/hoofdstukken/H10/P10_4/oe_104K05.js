/* ============================================================
   H10 / P10_4 / oe_104K05.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_104K05_1 = document.createElement('span');
  oe_104K05_1.appendChild(htmlSpan('Voer de berekening uit met de geboortedatum 17 oktober. <br> Voer daarna uit met jouw geboortedatum.'));

  const oe_104K05_2 = document.createElement('span');
  oe_104K05_2.appendChild(htmlSpan('Stel de maand voor door <i>m</i> en de dag voor door <i>d</i>. <br>Maak de werkingen met deze letters.'));

  const inhoud = maakOefening({
    id:'oe_104K05', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Goochelen met verjaardagen', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);

  /* ---- Opgave a ---- */
  {
    const tr = document.createElement('tr');
    const td = maakOpTdaz('a', oe_104K05_1, false);
    td.querySelector('.rij').style.alignItems = 'flex-start';
    td.querySelector('.lbl').style.paddingTop = '0cm';
    td.classList.add('kolom-links');
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

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

    /* tabel 1 */
    const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
    const kolomBreedtes = ['38%', '31%', '31%'];

    {
      const matrix = [
        [
          { inhoud: 'Opdracht', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '17 oktober', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
          { inhoud: 'jouw geboortedatum', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Neem het nummer van de maand.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '10', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: 'eigen antwoord', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Vermenigvuldig met 4.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '4 · 10 = 40', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Tel hier 2 bij op.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '40 + 2 = 42', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Vermenigvuldig dit resultaat met 5.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '42 · 5 = 210', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Trek van deze uitkomst 9 af.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '210 - 9 = 201', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Vermenigvuldig nogmaals met 5.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '201 · 5 = 1 005', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Tel je geboortedag erbij op.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '1 005 + 17 = 1 022', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
        [
          { inhoud: 'Trek er tot slot nog 5 van af.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
          { inhoud: '1 022 - 5 = 1 017', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
          { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
        ],
      ];
      maakZichtbareTabel(tbody2, 9, 3, {
        hoofding: 'boven',
        rijHoogtes,
        kolomBreedtes,
        matrix,
      });
      }
    {
      const trLbl = document.createElement('tr');
      const tdLbl = htmlSpan('Herken je de geboortedatum in de oplossing?')
      trLbl.appendChild(tdLbl);
      tbody2.appendChild(trLbl);
    }
    trtabel.appendChild(tdtabel);
    tbodyhulp.appendChild(trtabel);
  }

  voegWitruimteToe(tbody,'1cm');

  /* ---- Opgave b ---- */
  
  const tr = document.createElement('tr');
  const td = maakOpTdaz('b', oe_104K05_2, false);
  td.querySelector('.rij').style.alignItems = 'flex-start';
  td.querySelector('.lbl').style.paddingTop = '0cm';
  td.classList.add('kolom-links');
  tr.appendChild(td);
  tbody.appendChild(tr);
  
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

  /* tabel 1 */
  const rijHoogtes = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes = ['38%', '62%'];

  const oe_104K05a1 = document.createElement('span');
  const oe_104K05a1_s1 = document.createElement('span');
  oe_104K05a1_s1.appendChild(htmlSpan('20'));
  oe_104K05a1_s1.appendChild(zetOmNaarOpl('m'));
  oe_104K05a1.appendChild(oe_104K05a1_s1);
  oe_104K05a1.appendChild(htmlSpan(' '));
  oe_104K05a1.appendChild(maakOnderstreping(htmlSpan('+ 10'), 'enkel', '0.05cm', true));
  oe_104K05a1.appendChild(htmlSpan(' '));
  oe_104K05a1.appendChild(maakOnderstreping(htmlSpan('- 9'), 'enkel', '0.05cm', true));
  oe_104K05a1.appendChild(htmlSpan(' '));
  oe_104K05a1.appendChild(htmlSpan('= 20<i>m</i> + 1'));

  const oe_104K05a2 = document.createElement('span');
  const oe_104K05a2_s1 = document.createElement('span');
  oe_104K05a2_s1.appendChild(htmlSpan('100'));
  oe_104K05a2_s1.appendChild(zetOmNaarOpl('m'));
  oe_104K05a2.appendChild(oe_104K05a2_s1);
  oe_104K05a2.appendChild(htmlSpan(' '));
  oe_104K05a2.appendChild(maakOnderstreping(htmlSpan('+ 5'), 'enkel', '0.05cm', true));
  oe_104K05a2.appendChild(htmlSpan(' '));
  oe_104K05a2.appendChild(htmlSpan('+ <i>d</i>'));
  oe_104K05a2.appendChild(htmlSpan(' '));
  oe_104K05a2.appendChild(maakOnderstreping(htmlSpan('- 5'), 'enkel', '0.05cm', true));
  oe_104K05a2.appendChild(htmlSpan(' '));
  const oe_104K05a2_s9 = document.createElement('span');
  oe_104K05a2_s9.appendChild(htmlSpan('= 100'));
  oe_104K05a2_s9.appendChild(zetOmNaarOpl('m'));
  oe_104K05a2_s9.appendChild(htmlSpan(' + d'));
  oe_104K05a2.appendChild(oe_104K05a2_s9);


  const DEFAULT_RIJ_HOOGTE = '0.9cm';
  const celPadding = '0.05cm';

  const tabelF = document.createElement('table');
  tabelF.classList.add('zichtbare-tabel');  

  //kolommen
  const colgF = document.createElement('colgroup');
  const colF1 = document.createElement('col'); colF1.style.width = '38%';
  const colF2 = document.createElement('col'); colF2.style.width = '62%';
  colgF.appendChild(colF1); colgF.appendChild(colF2);
  tabelF.appendChild(colgF);
  const tbodyF = document.createElement('tbody');

  //rijen
  //→ rij1
  {
    //→linkerkolom
    const trR1 = document.createElement('tr');
    const tdR1L = document.createElement('td');
    tdR1L.style.height = DEFAULT_RIJ_HOOGTE;
    tdR1L.classList.add('hoofding');
    const wrapperR1L = document.createElement('div');
    wrapperR1L.style.display = 'flex';
    wrapperR1L.style.justifyContent = 'center';
    wrapperR1L.style.alignItems = 'center';
    wrapperR1L.style.height = '100%';
    wrapperR1L.style.width = '100%';
    wrapperR1L.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L.style.padding = celPadding;
    const spanR1L = document.createElement('span');
    spanR1L.appendChild(htmlSpan('Opdracht'));
    spanR1L.classList.add('txt');
    wrapperR1L.appendChild(spanR1L);
    tdR1L.appendChild(wrapperR1L);
    trR1.appendChild(tdR1L);

    //→rechterkolom 
    const tdR1R = document.createElement('td');
    tdR1R.style.height = DEFAULT_RIJ_HOOGTE;
    tdR1R.classList.add('hoofding');
    const wrapperR1R = document.createElement('div');
    wrapperR1R.style.display = 'flex';
    wrapperR1R.style.justifyContent = 'center';
    wrapperR1R.style.alignItems = 'center';
    wrapperR1R.style.height = '100%';
    wrapperR1R.style.width = '100%';
    wrapperR1R.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R.style.padding = celPadding;
    const spanR1R = document.createElement('span');
    spanR1R.appendChild(htmlSpan('dag <i>d</i> en maand <i>m</i>'));
    spanR1R.classList.add('txt');
    wrapperR1R.appendChild(spanR1R);
    tdR1R.appendChild(wrapperR1R);
    trR1.appendChild(tdR1R);
    tbodyF.appendChild(trR1);
  }
  //→ rij2
  {
    const trR1 = document.createElement('tr');
    const tdR1L = document.createElement('td');
    tdR1L.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L = document.createElement('div');
    wrapperR1L.style.display = 'flex';
    wrapperR1L.style.justifyContent = 'flex-start';
    wrapperR1L.style.alignItems = 'center';
    wrapperR1L.style.height = '100%';
    wrapperR1L.style.width = '100%';
    wrapperR1L.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L.style.padding = celPadding;
    const spanR1L = document.createElement('span');
    spanR1L.appendChild(htmlSpan('Neem het nummer van de maand.'));
    spanR1L.classList.add('txt');
    wrapperR1L.appendChild(spanR1L);
    tdR1L.appendChild(wrapperR1L);
    trR1.appendChild(tdR1L);

    //→rechterkolom 
    const tdR1R = document.createElement('td');
    tdR1R.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1R = document.createElement('div');
    wrapperR1R.style.display = 'flex';
    wrapperR1R.style.justifyContent = 'center';
    wrapperR1R.style.alignItems = 'center';
    wrapperR1R.style.height = '100%';
    wrapperR1R.style.width = '100%';
    wrapperR1R.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R.style.padding = celPadding;
    const divR1R = document.createElement('div');
    divR1R.classList.add('opl', 'opl-toggle');
    divR1R.style.position = 'static';
    divR1R.appendChild(htmlSpan('<i>m</i>'));
    wrapperR1R.appendChild(divR1R);
    tdR1R.appendChild(wrapperR1R);
    trR1.appendChild(tdR1R);
    tbodyF.appendChild(trR1);
  }
  //→ rij3
  {
    const trR1 = document.createElement('tr');
    const tdR1L = document.createElement('td');
    tdR1L.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L = document.createElement('div');
    wrapperR1L.style.display = 'flex';
    wrapperR1L.style.justifyContent = 'flex-start';
    wrapperR1L.style.alignItems = 'center';
    wrapperR1L.style.height = '100%';
    wrapperR1L.style.width = '100%';
    wrapperR1L.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L.style.padding = celPadding;
    const spanR1L = document.createElement('span');
    spanR1L.appendChild(htmlSpan('Vermenigvuldig met 4.'));
    spanR1L.classList.add('txt');
    wrapperR1L.appendChild(spanR1L);
    tdR1L.appendChild(wrapperR1L);
    trR1.appendChild(tdR1L);

    //→rechterkolom 
    const tdR1R = document.createElement('td');
    tdR1R.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1R = document.createElement('div');
    wrapperR1R.style.display = 'flex';
    wrapperR1R.style.justifyContent = 'center';
    wrapperR1R.style.alignItems = 'center';
    wrapperR1R.style.height = '100%';
    wrapperR1R.style.width = '100%';
    wrapperR1R.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R.style.padding = celPadding;
    const divR1R = document.createElement('div');
    divR1R.classList.add('opl', 'opl-toggle');
    divR1R.style.position = 'static';
    divR1R.appendChild(htmlSpan('4<i>m</i>'));
    wrapperR1R.appendChild(divR1R);
    tdR1R.appendChild(wrapperR1R);
    trR1.appendChild(tdR1R);
    tbodyF.appendChild(trR1);
  }  
  //→ rij4
  
    const trR14 = document.createElement('tr');
    const tdR1L4 = document.createElement('td');
    tdR1L4.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L4 = document.createElement('div');
    wrapperR1L4.style.display = 'flex';
    wrapperR1L4.style.justifyContent = 'flex-start';
    wrapperR1L4.style.alignItems = 'center';
    wrapperR1L4.style.height = '100%';
    wrapperR1L4.style.width = '100%';
    wrapperR1L4.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L4.style.padding = celPadding;
    const spanR1L4 = document.createElement('span');
    spanR1L4.appendChild(htmlSpan('Tel hier 2 bij op.'));
    spanR1L4.classList.add('txt');
    wrapperR1L4.appendChild(spanR1L4);
    tdR1L4.appendChild(wrapperR1L4);
    trR14.appendChild(tdR1L4);

    //→rechterkolom 
    const tdR1R4 = document.createElement('td');
    tdR1R4.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1R4 = document.createElement('div');
    wrapperR1R4.style.display = 'flex';
    wrapperR1R4.style.justifyContent = 'center';
    wrapperR1R4.style.alignItems = 'center';
    wrapperR1R4.style.height = '100%';
    wrapperR1R4.style.width = '100%';
    wrapperR1R4.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R4.style.padding = celPadding;
    const divR1R4 = document.createElement('div');
    divR1R4.classList.add('opl', 'opl-toggle');
    divR1R4.style.position = 'static';
    divR1R4.appendChild(htmlSpan('4<i>m</i> + 2'));
    wrapperR1R4.appendChild(divR1R4);
    tdR1R4.appendChild(wrapperR1R4);
    trR14.appendChild(tdR1R4);
    tbodyF.appendChild(trR14);
  
  //→ rij5
  
    const trR15 = document.createElement('tr');
    const tdR1L5 = document.createElement('td');
    tdR1L5.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L5 = document.createElement('div');
    wrapperR1L5.style.display = 'flex';
    wrapperR1L5.style.justifyContent = 'flex-start';
    wrapperR1L5.style.alignItems = 'center';
    wrapperR1L5.style.height = '100%';
    wrapperR1L5.style.width = '100%';
    wrapperR1L5.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L5.style.padding = celPadding;
    const spanR1L5 = document.createElement('span');
    spanR1L5.appendChild(htmlSpan('Vermenigvuldig dit resultaat met 5.'));
    spanR1L5.classList.add('txt');
    wrapperR1L5.appendChild(spanR1L5);
    tdR1L5.appendChild(wrapperR1L5);
    trR15.appendChild(tdR1L5);

    //→rechterkolom 
    const tdR1R5 = document.createElement('td');
    tdR1R5.style.height = DEFAULT_RIJ_HOOGTE;
    tdR1R5.style.position = 'relative';
    const wrapperR1R5 = document.createElement('div');
    wrapperR1R5.style.display = 'flex';
    wrapperR1R5.style.justifyContent = 'center';
    wrapperR1R5.style.alignItems = 'center';
    wrapperR1R5.style.height = '100%';
    wrapperR1R5.style.width = '100%';
    wrapperR1R5.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R5.style.padding = celPadding;
    const divR1R5 = document.createElement('div');
    divR1R5.classList.add('opl', 'opl-toggle');
    divR1R5.style.position = 'static';
    divR1R5.appendChild(htmlSpan('5(4<i>m</i> + 2) = 20<i>m</i> + 10'));
    wrapperR1R5.appendChild(divR1R5);
    tdR1R5.appendChild(wrapperR1R5);
    trR15.appendChild(tdR1R5);
    tbodyF.appendChild(trR15);
  
  //→ rij6
  {
    const trR1 = document.createElement('tr');
    const tdR1L = document.createElement('td');
    tdR1L.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L = document.createElement('div');
    wrapperR1L.style.display = 'flex';
    wrapperR1L.style.justifyContent = 'flex-start';
    wrapperR1L.style.alignItems = 'center';
    wrapperR1L.style.height = '100%';
    wrapperR1L.style.width = '100%';
    wrapperR1L.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L.style.padding = celPadding;
    const spanR1L = document.createElement('span');
    spanR1L.appendChild(htmlSpan('Trek van deze uitkomst 9 af.'));
    spanR1L.classList.add('txt');
    wrapperR1L.appendChild(spanR1L);
    tdR1L.appendChild(wrapperR1L);
    trR1.appendChild(tdR1L);

    //→rechterkolom 
    const tdR1R = document.createElement('td');
    tdR1R.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1R = document.createElement('div');
    wrapperR1R.style.display = 'flex';
    wrapperR1R.style.justifyContent = 'center';
    wrapperR1R.style.alignItems = 'center';
    wrapperR1R.style.height = '100%';
    wrapperR1R.style.width = '100%';
    wrapperR1R.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R.style.padding = celPadding;
    const divR1R = document.createElement('div');
    divR1R.classList.add('opl', 'opl-toggle');
    divR1R.style.position = 'static';
    divR1R.appendChild(oe_104K05a1);
    wrapperR1R.appendChild(divR1R);
    tdR1R.appendChild(wrapperR1R);
    trR1.appendChild(tdR1R);
    tbodyF.appendChild(trR1);
  }
  //→ rij7
  
    const trR17 = document.createElement('tr');
    const tdR1L7 = document.createElement('td');
    tdR1L7.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L7 = document.createElement('div');
    wrapperR1L7.style.display = 'flex';
    wrapperR1L7.style.justifyContent = 'flex-start';
    wrapperR1L7.style.alignItems = 'center';
    wrapperR1L7.style.height = '100%';
    wrapperR1L7.style.width = '100%';
    wrapperR1L7.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L7.style.padding = celPadding;
    const spanR1L7 = document.createElement('span');
    spanR1L7.appendChild(htmlSpan('Vermenigvuldig nogmaals met 5.'));
    spanR1L7.classList.add('txt');
    wrapperR1L7.appendChild(spanR1L7);
    tdR1L7.appendChild(wrapperR1L7);
    trR17.appendChild(tdR1L7);

    //→rechterkolom 
    const tdR1R7 = document.createElement('td');
    tdR1R7.style.height = DEFAULT_RIJ_HOOGTE;
    tdR1R7.style.position = 'relative';
    const wrapperR1R7 = document.createElement('div');
    wrapperR1R7.style.display = 'flex';
    wrapperR1R7.style.justifyContent = 'center';
    wrapperR1R7.style.alignItems = 'center';
    wrapperR1R7.style.height = '100%';
    wrapperR1R7.style.width = '100%';
    wrapperR1R7.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R7.style.padding = celPadding;
    const divR1R7 = document.createElement('div');
    divR1R7.classList.add('opl', 'opl-toggle');
    divR1R7.style.position = 'static';
    divR1R7.appendChild(htmlSpan('5(20<i>m</i> + 1) = 100<i>m</i> + 5'));
    wrapperR1R7.appendChild(divR1R7);
    tdR1R7.appendChild(wrapperR1R7);
    trR17.appendChild(tdR1R7);
    tbodyF.appendChild(trR17);
  
  //→ rij8
  {
    const trR1 = document.createElement('tr');
    const tdR1L = document.createElement('td');
    tdR1L.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L = document.createElement('div');
    wrapperR1L.style.display = 'flex';
    wrapperR1L.style.justifyContent = 'flex-start';
    wrapperR1L.style.alignItems = 'center';
    wrapperR1L.style.height = '100%';
    wrapperR1L.style.width = '100%';
    wrapperR1L.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L.style.padding = celPadding;
    const spanR1L = document.createElement('span');
    spanR1L.appendChild(htmlSpan('Tel je geboortedag erbij op.'));
    spanR1L.classList.add('txt');
    wrapperR1L.appendChild(spanR1L);
    tdR1L.appendChild(wrapperR1L);
    trR1.appendChild(tdR1L);

    //→rechterkolom 
    const tdR1R = document.createElement('td');
    tdR1R.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1R = document.createElement('div');
    wrapperR1R.style.display = 'flex';
    wrapperR1R.style.justifyContent = 'center';
    wrapperR1R.style.alignItems = 'center';
    wrapperR1R.style.height = '100%';
    wrapperR1R.style.width = '100%';
    wrapperR1R.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R.style.padding = celPadding;
    const divR1R = document.createElement('div');
    divR1R.classList.add('opl', 'opl-toggle');
    divR1R.style.position = 'static';
    divR1R.appendChild(htmlSpan('100<i>m</i> + 5 + <i>d</i>'));
    wrapperR1R.appendChild(divR1R);
    tdR1R.appendChild(wrapperR1R);
    trR1.appendChild(tdR1R);
    tbodyF.appendChild(trR1);
  }
  //→ rij9
  {
    const trR1 = document.createElement('tr');
    const tdR1L = document.createElement('td');
    tdR1L.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1L = document.createElement('div');
    wrapperR1L.style.display = 'flex';
    wrapperR1L.style.justifyContent = 'flex-start';
    wrapperR1L.style.alignItems = 'center';
    wrapperR1L.style.height = '100%';
    wrapperR1L.style.width = '100%';
    wrapperR1L.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1L.style.padding = celPadding;
    const spanR1L = document.createElement('span');
    spanR1L.appendChild(htmlSpan('Trek er tot slot nog 5 van af.'));
    spanR1L.classList.add('txt');
    wrapperR1L.appendChild(spanR1L);
    tdR1L.appendChild(wrapperR1L);
    trR1.appendChild(tdR1L);

    //→rechterkolom 
    const tdR1R = document.createElement('td');
    tdR1R.style.height = DEFAULT_RIJ_HOOGTE;
    const wrapperR1R = document.createElement('div');
    wrapperR1R.style.display = 'flex';
    wrapperR1R.style.justifyContent = 'center';
    wrapperR1R.style.alignItems = 'center';
    wrapperR1R.style.height = '100%';
    wrapperR1R.style.width = '100%';
    wrapperR1R.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
    wrapperR1R.style.padding = celPadding;
    const divR1R = document.createElement('div');
    divR1R.classList.add('opl', 'opl-toggle');
    divR1R.style.position = 'static';
    divR1R.appendChild(oe_104K05a2);
    wrapperR1R.appendChild(divR1R);
    tdR1R.appendChild(wrapperR1R);
    trR1.appendChild(tdR1R);
    tbodyF.appendChild(trR1);
  }
  //afhandelen tabel
  tabelF.appendChild(tbodyF);
  tbody2.appendChild(tabelF);  

  trtabel.appendChild(tdtabel);
  tbodyhulp.appendChild(trtabel);




  //opgave a
  maak2Parabolen(tdR1R5, {
    sx: 3.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.2,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdR1R7, {
    sx: 3,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.3,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.55,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

})();
