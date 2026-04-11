/* ============================================================
   H10 / H10_schema1.js
   ============================================================ */
(function () {

  const insprong = '16%';

  const inhoud = maakTheorie();

  const {tbody} = maakOefTabel(inhoud,2);

  const trhulp = document.createElement('tr');
  const tdhulp = document.createElement('td');
  tdhulp.style.border = '1.2px solid var(--groen-donker)';
  const tdleeg = document.createElement('td');
  
  trhulp.appendChild(tdhulp);
  trhulp.appendChild(tdleeg);
  tbody.appendChild(trhulp);

  const tabelNaam = document.createElement('table');
  tabelNaam.style.width = '100%';
  tabelNaam.style.borderCollapse = 'collapse';
  tabelNaam.style.tableLayout = 'fixed';
  const colg = document.createElement('colgroup');
  for (let i=0;i<2;i++) {
    const col=document.createElement('col');
    if (i === 0) col.style.width = insprong;
    if (i === 1) col.style.width = `calc(100% - ${insprong})`;
    colg.appendChild(col);
  }
  tabelNaam.appendChild(colg);
  const tbodyNaam = document.createElement('tbody');
  tabelNaam.appendChild(tbodyNaam);
  tdhulp.appendChild(tabelNaam);

  const trnaam = document.createElement('tr');
  const tdnaam = maakOpTdazZonder(htmlSpan('naam:'),false);
  tdnaam.style.paddingLeft = '0.1cm';
  const tdnaaminvul = maakSlTdZonderInsprong('',false);
  tdnaaminvul.style.paddingRight = '0.1cm';
  trnaam.appendChild(tdnaam);
  trnaam.appendChild(tdnaaminvul);
  tbodyNaam.appendChild(trnaam);

  const trcoach = document.createElement('tr');
  const tdcoach = maakOpTdazZonder(htmlSpan('coach:'),false);
  tdcoach.style.paddingLeft = '0.1cm';
  const tdcoachinvul = maakSlTdZonderInsprong('',false);
  tdcoachinvul.style.paddingRight = '0.1cm';
  trcoach.appendChild(tdcoach);
  trcoach.appendChild(tdcoachinvul);
  tbodyNaam.appendChild(trcoach);



  

})();