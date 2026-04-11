/* ============================================================
   H10 / P10_3 / oe_103010.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103010', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  const opgave =   voegLijstToe(inhoud, 'bullet', '0cm', '0.2cm', [
  'Markeer de termen met coëfficiënt 1 of -1.',
  'Vul verder aan zoals het voorbeeld.'
  ]);

  voegTekstToe(inhoud, opgave, ['intro-tekst']);
  
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
      const span = htmlSpan('som coëfficiënten');
      td.appendChild(span);
    } else if (i === 7) {
      const span = htmlSpan('letterdeel');
      td.appendChild(span);
    }

    tr01.appendChild(td);
  }
  tbody01.appendChild(tr01);

  const oe10301001 = document.createElement('span');
  oe10301001.appendChild(htmlSpan('4<i>b</i> '));
  const oe10301001_m2_s = document.createElement('span');
  oe10301001_m2_s.appendChild(htmlSpan('- '));
  oe10301001_m2_s.appendChild(zetOmNaarOpl('1'));
  oe10301001_m2_s.appendChild(htmlSpan('<i>b</i>'));
  const oe10301001_m2 = maakMarkering(oe10301001_m2_s, '#bbdefb', false);
  oe10301001.appendChild(oe10301001_m2);
  oe10301001.appendChild(htmlSpan('+ 5<i>b</i>'));

  const oe10301002 = document.createElement('span');
  const oe10301002_m1_s = document.createElement('span');
  oe10301002_m1_s.appendChild(zetOmNaarOpl('1'));
  oe10301002_m1_s.appendChild(htmlSpan('<i>d</i>'));
  const oe10301002_m1 = maakMarkering(oe10301002_m1_s, '#bbdefb', true);
  oe10301002.appendChild(oe10301002_m1);
  const oe10301002_s2 = document.createElement('span');
  oe10301002_s2.appendChild(htmlSpan(' + '));
  oe10301002_s2.appendChild(maakBreuk('1','2','opgave'));
  oe10301002_s2.appendChild(htmlSpan('<i>d</i>'));
  oe10301002.appendChild(oe10301002_s2);

  const oe10301003 = document.createElement('span');
  const oe10301003_m1_s = document.createElement('span');
  oe10301003_m1_s.appendChild(htmlSpan('-'));
  oe10301003_m1_s.appendChild(zetOmNaarOpl('1'));
  oe10301003_m1_s.appendChild(htmlSpan('<i>a</i>'));
  const oe10301003_m1 = maakMarkering(oe10301003_m1_s, '#bbdefb', true);
  oe10301003.appendChild(oe10301003_m1);
  oe10301003.appendChild(htmlSpan(' + 3<i>a</i> - 7<i>a</i> '));
  const oe10301003_m3_s = document.createElement('span');
  oe10301003_m3_s.appendChild(htmlSpan('+ '));
  oe10301003_m3_s.appendChild(zetOmNaarOpl('1'));
  oe10301003_m3_s.appendChild(htmlSpan('<i>a</i>'));
  const oe10301003_m3 = maakMarkering(oe10301003_m3_s, '#bbdefb', true);
  oe10301003.appendChild(oe10301003_m3);

  const oe10301004 = document.createElement('span');
  oe10301004.appendChild(htmlSpan('-2,5<i>x</i><sup>2</sup> '));
  const oe10301004_m2_s = document.createElement('span');
  oe10301004_m2_s.appendChild(htmlSpan('+ '));
  oe10301004_m2_s.appendChild(zetOmNaarOpl('1'));
  oe10301004_m2_s.appendChild(htmlSpan('<i>x</i><sup>2</sup>'));
  const oe10301004_m2 = maakMarkering(oe10301004_m2_s, '#bbdefb', true);
  oe10301004.appendChild(oe10301004_m2);
  oe10301004.appendChild(htmlSpan(' - 1,2<i>x</i><sup>2</sup>'));

  const oe10301005 = document.createElement('span');
  const oe10301005_s1 = document.createElement('span');
  oe10301005_s1.appendChild(htmlSpan('1 + '));
  oe10301005_s1.appendChild(maakBreuk('1','2','opgave'));
  oe10301005.appendChild(oe10301005_s1);

  const oe10301006 = document.createElement('span');
  const oe10301006_s1 = document.createElement('span');
  oe10301006_s1.appendChild(maakBreuk('3','2','opgave'));
  oe10301006_s1.appendChild(htmlSpan('<i>d</i>'));
  oe10301006.appendChild(oe10301006_s1);  

  const rijen = [
    [ htmlSpan('a|'), oe10301001, htmlSpan('4 - 1 + 5'), htmlSpan('<i>b</i>'), htmlSpan('8<i>b</i>') ],
    [ htmlSpan('b|'), oe10301002, oe10301005, htmlSpan('<i>d</i>'), oe10301006 ],
    [ htmlSpan('c|'), oe10301003, htmlSpan('-1 + 3 - 7 + 1'), htmlSpan('<i>a</i>'), htmlSpan('-4<i>a</i>') ],
    [ htmlSpan('d|'), oe10301004, htmlSpan('-2,5 + 1 - 1,2'), htmlSpan('<i>x</i><sup>2</sup>'), htmlSpan('-2,7<i>x</i><sup>2</sup>') ],
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
