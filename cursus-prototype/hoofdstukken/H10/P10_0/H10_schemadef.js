/* ============================================================
   H10 / H10_schema1.js
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_???', nummer:'S', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const {tbody} = maakSchemaTabel(inhoud,'25%');

  const H10_schema1 = document.createElement('span');
  const H10_schema1_m1 = maakMarkering(htmlSpan('-7'), '#bbdefb', true);
  H10_schema1.appendChild(H10_schema1_m1);
  const H10_schema1_m2 = maakMarkering(htmlSpan('<i>a</i><sup>2</sup>'), '#fff9c4', true);
  H10_schema1.appendChild(H10_schema1_m2);
  const H10_schema1_b3 = maakSpanBreedte('3cm', '');
  H10_schema1.appendChild(H10_schema1_b3);
  const H10_schema1_m4 = maakMarkering(htmlSpan('coëfficiënt'), '#bbdefb', true);
  H10_schema1.appendChild(H10_schema1_m4);
  H10_schema1.appendChild(htmlSpan(' '));
  H10_schema1.appendChild(htmlSpan('en'));
  H10_schema1.appendChild(htmlSpan(' '));
  const H10_schema1_m8 = maakMarkering(htmlSpan('letterdeel'), '#fff9c4', true);
  H10_schema1.appendChild(H10_schema1_m8);
  const BLOKA = [
    {inhoud: htmlSpan('Noteer een voorbeeld van een lettervorm. Duid duidelijk de coëfficiënt en het letterdeel aan.'),type: 'grijs'},
    {inhoud: H10_schema1, type: 'toggle'},
  ];

  const H10_schema2a = document.createElement('span');
  voegLijstToe(H10_schema2a, 'bullet', '0cm', '0.2cm', ['eerst coëfficiënt, dan letterdeel']);
  const H10_schema2b = document.createElement('span');
  voegLijstToe(H10_schema2b, 'bullet', '0cm', '0.2cm', ['geen maalteken tussen coëfficiënt en letterdeel']);
    const H10_schema2c = document.createElement('span');
  voegLijstToe(H10_schema2c, 'bullet', '0cm', '0.2cm', ['coëfficiënt 1 niet schrijven: 1<i>a</i> = <i>a</i> en -1<i>a</i> = -<i>a</i>']);
  const BLOKB = [
    {inhoud: htmlSpan('Noteer drie afspraken voor het noteren van een lettervorm.'),type: 'grijs'},
    {inhoud: H10_schema2a, type: 'toggle'},
    {inhoud: H10_schema2b, type: 'toggle'},
    {inhoud: H10_schema2c, type: 'toggle'},
  ];

  const H10_schema3a = document.createElement('span');
  const H10_schema3a_b1 = maakSpanBreedte('3cm', '3<i>a</i><sup>2</sup> + 7');
  H10_schema3a.appendChild(H10_schema3a_b1);
  H10_schema3a.appendChild(htmlSpan('voor <i>a</i> = <span class="markeer-lila">-1</span>'));  
  const H10_schema3b = document.createElement('span');
  H10_schema3b.appendChild(htmlSpan('3 ·'));
  H10_schema3b.appendChild(htmlSpan(' '));
  H10_schema3b.appendChild(htmlSpan('<span class="markeer-lila">(-1)</span>'));
  H10_schema3b.appendChild(htmlSpan('<sup>2</sup> + 7'));
  const H10_schema3c = document.createElement('span');
  H10_schema3c.appendChild(htmlSpan('= 3 · 1 + 7'));
  const H10_schema3d = document.createElement('span');
  H10_schema3d.appendChild(htmlSpan('= 10'));
  const BLOKC = [
    {inhoud: htmlSpan('Laat met een voorbeeld zien hoe je de getalwaarde van een lettervorm berekent.'),type: 'grijs'},
    {inhoud: H10_schema3a, type: 'toggle'},
    {inhoud: H10_schema3b, type: 'toggle'},
    {inhoud: H10_schema3c, type: 'toggle'},
    {inhoud: H10_schema3d, type: 'toggle'},
  ];

  const H10_schema4a = document.createElement('span');
  const H10_schema4a_b1 = maakSpanBreedte('0.2cm', '•');
  H10_schema4a.appendChild(H10_schema4a_b1);
  const H10_schema4a_b2 = maakSpanBreedte('3cm', 'optellen:');
  H10_schema4a.appendChild(H10_schema4a_b2);
  H10_schema4a.appendChild(maakOnderstreping(htmlSpan('7<i>a</i>'), 'enkel', '0.1cm', true));
  H10_schema4a.appendChild(htmlSpan(' '));
  H10_schema4a.appendChild(htmlSpan('+ 2'));
  H10_schema4a.appendChild(htmlSpan(' '));
  H10_schema4a.appendChild(maakOnderstreping(htmlSpan('+ 3<i>a</i>'), 'enkel', '0.1cm', true));
  H10_schema4a.appendChild(htmlSpan(' '));
  H10_schema4a.appendChild(htmlSpan('= 10<i>a</i> + 2'));
  const H10_schema4b = document.createElement('span');
  const H10_schema4b_b2 = maakSpanBreedte('0.2cm', '•');
  H10_schema4b.appendChild(H10_schema4b_b2);  
  const H10_schema4b_b1 = maakSpanBreedte('3cm', 'vermenigvuldigen:');
  H10_schema4b.appendChild(H10_schema4b_b1);
  H10_schema4b.appendChild(htmlSpan('3 · <i>a</i> · (-2) · <i>b</i> = -6<i>ab</i>'));
  const H10_schema4c = document.createElement('span');
  const H10_schema4c_b1 = maakSpanBreedte('3.2cm', '');
  H10_schema4c.appendChild(H10_schema4c_b1);
  H10_schema4c.appendChild(htmlSpan('→ enkel bij hetzelfde letterdeel'));
  const BLOKD = [
    {inhoud: htmlSpan('Noteer hier wat herleiden betekent.<br>Noteer een voorbeeld van herleiden met optellen (wanneer kan dat?) en herleiden met vermenigvuldigen.'),type: 'grijs'},
    {inhoud: htmlSpan('herleiden is korter schrijven'), type: 'toggle'},
    {inhoud: H10_schema4a, type: 'toggle'},
    {inhoud: H10_schema4c, type: 'toggle'},
    {inhoud: H10_schema4b, type: 'toggle'},
  ];

  const H10_schema5a = document.createElement('span');
  H10_schema5a.appendChild(htmlSpan('-3(<i>x</i> - 7) - <span class="markeer-lila">1</span>(2<i>x</i> + 8)'));
  const H10_schema5b = document.createElement('span');
  H10_schema5b.appendChild(htmlSpan('='));
  H10_schema5b.appendChild(htmlSpan(' '));
  H10_schema5b.appendChild(maakOnderstreping(htmlSpan('-3<i>x</i>'), 'enkel', '0.1cm', true));
  H10_schema5b.appendChild(htmlSpan(' '));
  H10_schema5b.appendChild(maakOnderstreping(htmlSpan('+ 21'), 'dubbel', '0.18cm', true));
  H10_schema5b.appendChild(htmlSpan(' '));
  H10_schema5b.appendChild(maakOnderstreping(htmlSpan('- 2<i>x</i>'), 'enkel', '0.1cm', true));
  H10_schema5b.appendChild(htmlSpan(' '));
  H10_schema5b.appendChild(maakOnderstreping(htmlSpan('- 8'), 'dubbel', '0.18cm', true));  
  const H10_schema5c = document.createElement('span');
  H10_schema5c.appendChild(htmlSpan('= -5<i>x</i> + 13'));
 

  maakBlok(tbody,htmlSpan('lettervorm: coëfficiënt en letterdeel'),BLOKA,'0.02cm','0.05cm',false);
  maakBlok(tbody,htmlSpan('afspraken voor noteren lettervorm'),BLOKB,'0.21cm','0.05cm',false);
  maakBlok(tbody,htmlSpan('getalwaarde berekenen'),BLOKC,'0.02cm','0.05cm',false);
  maakBlok(tbody,htmlSpan('herleiden: wat en 2 soorten'),BLOKD,'0.02cm','0.05cm',false); 

  const uitlijningLinks = '0.21cm';
  const wit = '0.05cm';
  const breuk = false;

  const tr = document.createElement('tr');
  const td0 = document.createElement('td');
  td0.style.border = '1.2px solid var(--groen-donker)';
  td0.style.verticalAlign = 'top';
  const tabel0 = document.createElement('table');
  td0.appendChild(tabel0);
  tabel0.style.tableLayout = 'fixed';
  tabel0.style.width = '100%';
  tr.appendChild(td0);
  const td1 = document.createElement('td');
  td1.style.border = '1.2px solid var(--groen-donker)';
  const tabel1 = document.createElement('table');
  td1.appendChild(tabel1);
  tabel1.style.tableLayout = 'fixed';
  tabel1.style.width = '100%';
  tr.appendChild(td1);

  //linkerkolom vullen
  const trL = document.createElement('tr');
  const tdL1 = document.createElement('td');
  tdL1.style.paddingTop = uitlijningLinks;
  tdL1.style.paddingLeft = wit;
  tdL1.style.paddingRight = wit;
  tdL1.appendChild(htmlSpan('een lettervorm vermenigvuldigen met een getal'));
  trL.appendChild(tdL1);
  tabel0.appendChild(trL);

  //rechterkolom vullen
  {
    const trItem = document.createElement('tr');
    td = document.createElement('td');
    td.appendChild(htmlSpan('Werk de lettervorm -3(<i>x</i> - 7) - (2<i>x</i> + 8) uit.'));
    td.style.color = 'var(--sl-kleur)';
    td.style.height = '0.9cm';
    td.style.paddingLeft = wit;
    td.style.paddingRight = wit; 
    trItem.appendChild(td);
    tabel1.appendChild(trItem);    
  }
  const trItemX = document.createElement('tr');
  tdX = maakSlTdZonderInsprong(H10_schema5a, false);
  tdX.style.height = breuk ? '1.2cm' : '0.9cm';
  tdX.style.paddingLeft = wit;
  tdX.style.paddingRight = wit;
  tdX.style.position = 'relative';
  trItemX.appendChild(tdX);
  tabel1.appendChild(trItemX);    
  {
    const trItem = document.createElement('tr');
    td = maakSlTdZonderInsprong(H10_schema5b, false);
    td.style.height = breuk ? '1.2cm' : '0.9cm';
    td.style.paddingLeft = wit;
    td.style.paddingRight = wit;
    trItem.appendChild(td);
    tabel1.appendChild(trItem);    
  }
  {
    const trItem = document.createElement('tr');
    td = maakSlTdZonderInsprong(H10_schema5c, false);
    td.style.height = breuk ? '1.2cm' : '0.9cm';
    td.style.paddingLeft = wit;
    td.style.paddingRight = wit;
    trItem.appendChild(td);
    tabel1.appendChild(trItem);    
  }
  tbody.appendChild(tr);



  //opgave a
  maak2Parabolen(tdX, {
    sx: 0.3,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 0.9,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.35,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });
  //opgave b
  maak2Parabolen(tdX, {
    sx: 1.9,           // ← x-coördinaat startpunt links in cm
    sy: 0.2,            // ← y-coördinaat startpunt links in cm
    br1: 1.0,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.4,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });   






 


})();