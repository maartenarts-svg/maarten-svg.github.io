/* ============================================================
   H10 / P10_3 / oe_103014.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103014', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Onderlijn de lettervormen met hetzelfde letterdeel op dezelfde manier.', ['intro-tekst']);
  
  const tabel01=document.createElement('table');
  tabel01.classList.add('oef-tabel');
  const colg01=document.createElement('colgroup');
    const col1 = document.createElement('col');
    const col2 = document.createElement('col');
    const col3 = document.createElement('col');     
    const col4 = document.createElement('col');
    const col5 = document.createElement('col');        
    const col6 = document.createElement('col'); 
  colg01.appendChild(col1);
  colg01.appendChild(col2);
  colg01.appendChild(col3);
  colg01.appendChild(col4);
  colg01.appendChild(col5);
  colg01.appendChild(col6);
  tabel01.appendChild(colg01);
  const tbody01=document.createElement('tbody');
  tabel01.appendChild(tbody01);
  inhoud.appendChild(tabel01);

  const oe10301401 = document.createElement('span');
  const oe10301401a = document.createElement('span');
  oe10301401a.appendChild(maakOnderstreping(htmlSpan('-<i>xy</i>'), 'enkel', '0.1cm', true));
  const oe10301401b = document.createElement('span');
  oe10301401b.appendChild(maakOnderstreping(htmlSpan('-0,6<i>x</i>'), 'dubbel', '0.18cm', true));
  const oe10301401c = document.createElement('span');
  oe10301401c.appendChild(maakOnderstreping(htmlSpan('3<i>y</i>'), 'golf', '0.18cm', true));
  const oe10301401d = document.createElement('span');
  oe10301401d.appendChild(maakOnderstreping(htmlSpan('\u00A0<i>x</i>\u00A0'), 'dubbel', '0.18cm', true));
  const oe10301401e = document.createElement('span');
  oe10301401e.appendChild(htmlSpan('2<i>x</i><sup>2</sup>'));
  const oe10301401f = document.createElement('span');
  oe10301401f.appendChild(maakOnderstreping(htmlSpan('7<i>xy</i>'), 'enkel', '0.1cm', true));
  const oe10301401g = document.createElement('span');  
  const oe10301401_s7 = document.createElement('span');
  oe10301401_s7.appendChild(maakBreuk('1','100','opgave'));
  oe10301401_s7.appendChild(htmlSpan('<i>y</i><sup>3</sup>'));
  oe10301401g.appendChild(oe10301401_s7);
  const oe10301401h = document.createElement('span');
  oe10301401h.appendChild(htmlSpan('1,4<i>xy</i><sup>2</sup>'));
  const oe10301401i = document.createElement('span');
  const oe10301401_s9 = document.createElement('span');
  oe10301401_s9.appendChild(maakBreuk('1','100','opgave'));
  oe10301401_s9.appendChild(htmlSpan('<i>xy</i>'));  
  oe10301401i.appendChild(maakOnderstreping(oe10301401_s9, 'enkel', '0.1cm', true));
  const oe10301401j = document.createElement('span');
  oe10301401j.appendChild(maakOnderstreping(htmlSpan('<i>xy</i>'), 'enkel', '0.1cm', true));
  const oe10301401k = document.createElement('span');
  oe10301401k.appendChild(maakOnderstreping(htmlSpan('8<i>y</i>'), 'golf', '0.18cm', true));
  const oe10301401l = document.createElement('span');
  oe10301401l.appendChild(htmlSpan('4<i>x</i><sup>3</sup>'));

  const rijen = [
    [ oe10301401a, oe10301401b, oe10301401c, oe10301401d, oe10301401e,oe10301401f ],
    [ oe10301401g, oe10301401h, oe10301401i, oe10301401j, oe10301401k,oe10301401l ],
  ];


  const rijHoogte = '1.2cm';




  rijen.forEach(rij => {
    const tr = document.createElement('tr');
    tr.style.verticalAlign = 'middle';
    tr.style.height = rijHoogte;
    rij.forEach(span => {
      const td = document.createElement("td");
      td.style.textAlign = "center";
      td.style.verticalAlign = "middle";
      td.appendChild(span);
      tr.appendChild(td);
    });
    tbody01.appendChild(tr);
  });

})();
