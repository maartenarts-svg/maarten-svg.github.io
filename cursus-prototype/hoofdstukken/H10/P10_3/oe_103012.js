/* ============================================================
   H10 / P10_3 / oe_103012.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103012', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul aan zoals het voorbeeld.', ['intro-tekst']);
  
  const tabel01=document.createElement('table');
  tabel01.classList.add('oef-tabel');
  const colg01=document.createElement('colgroup');
    const col1 = document.createElement('col');
    col1.style.width='25%';
    const col2 = document.createElement('col');
    col2.style.width='7%';
    const col3 = document.createElement('col');
    col3.style.width='2.5%';     
    const col4 = document.createElement('col');
    col4.style.width='20%';
    const col5 = document.createElement('col');
    col5.style.width='2.5%';         
    const col6 = document.createElement('col');
    col6.style.width='7%';    
    const col7 = document.createElement('col');
    col7.style.width='14%';    
    const col8 = document.createElement('col');
    col8.style.width='7%';    
    const col9 = document.createElement('col');
    col9.style.width='15%'; 
  colg01.appendChild(col1);
  colg01.appendChild(col2);
  colg01.appendChild(col3);
  colg01.appendChild(col4);
  colg01.appendChild(col5);
  colg01.appendChild(col6);
  colg01.appendChild(col7);
  colg01.appendChild(col8);
  colg01.appendChild(col9);
  tabel01.appendChild(colg01);
  const tbody01=document.createElement('tbody');
  tabel01.appendChild(tbody01);
  inhoud.appendChild(tabel01);

  //eerste rij: titels
  const tr01 = document.createElement('tr');
    tr01.style.height = '1.2cm';
    tr01.style.verticalAlign = 'middle';
  for (let i = 1; i <= 8; i++) {
    const td = document.createElement('td');
    td.style.verticalAlign = 'middle';
    td.style.textAlign = 'center';

    if (i === 4) {
      const span = htmlSpan('getallen vermenigvuldigen');
      td.appendChild(span);
    } else if (i === 7) {
      const span = htmlSpan('letters alfabetisch');
      td.appendChild(span);
    }

    tr01.appendChild(td);
  }
  tbody01.appendChild(tr01);

  const oe10301201 = document.createElement('span');
  const oe10301201_s1 = document.createElement('span');
  oe10301201_s1.appendChild(htmlSpan('-'));
  oe10301201_s1.appendChild(zetOmNaarOpl('1'));
  oe10301201_s1.appendChild(htmlSpan('<i>y</i> · 2<i>z</i>'));
  oe10301201.appendChild(oe10301201_s1);

  const rijen = [
    [ htmlSpan('a|'), htmlSpan('5<i>a</i> · 8<i>b</i>'), htmlSpan('5 · 8'), htmlSpan('<i>a</i> · <i>b</i>'), htmlSpan('40<i>ab</i>') ],
    [ htmlSpan('b|'), htmlSpan('-5<i>p</i> · (-3)'), htmlSpan('-5 · (-3)'), htmlSpan('<i>p</i>'), htmlSpan('15<i>p</i>') ],
    [ htmlSpan('c|'), htmlSpan('-4 · 6<i>x</i>'), htmlSpan('-4 · 6'), htmlSpan('<i>x</i>'), htmlSpan('-24<i>x</i>') ],
    [ htmlSpan('d|'), oe10301201, htmlSpan('-1 · 2'), htmlSpan('<i>y</i> · <i>z</i>'), htmlSpan('-2<i>yz</i>') ],
  ];

  const rijHoogte = '1.2cm';

  rijen.forEach((rij,index) => {
    const voorgedrukt = index === 0;
    const tr = document.createElement('tr');
    tr.style.verticalAlign = 'middle';

    // td1: label + opgave
    const td1 = document.createElement('td');
    td1.style.cssText = 'vertical-align:middle; text-align:left;';
    rij[0].classList.add('lbl', 'subopgave-label');
    td1.appendChild(rij[0]);
    rij[1].classList.add('txt');
    td1.appendChild(rij[1]);
    tr.appendChild(td1);

    // td2: '='
    const td2 = maakTdTekst('=', 'center');
    tr.appendChild(td2);

    // td3: '('
    const td3 = maakTdTekst('(', 'left');
    tr.appendChild(td3);

    // td4, td7, td9: basis + overlay
    [rij[2], rij[3], rij[4]].forEach((overlaySpan, i) => {
      const td = maakTdBasisOverlay(overlaySpan, rijHoogte,voorgedrukt);
      tr.appendChild(td);

      if (i === 0) {
        // td5: ')'
        tr.appendChild(maakTdTekst(')', 'right'));
        // td6: '('
        tr.appendChild(maakTdTekst('·', 'center'));
      } else if (i === 1) {
        // td8: ')'  (of iets anders?)
        tr.appendChild(maakTdTekst('=', 'center'));  
      }
    });

    tbody01.appendChild(tr);
  });

})();
