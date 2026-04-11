/* ============================================================
   H10 / H10_schema1.js
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_???', nummer:'S', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const breedteK1 = '25%';
  const breedteK2 = `calc(100% - ${breedteK1})`;
  const tekstK1 = '0.2cm';
  const witruimte = '0.05cm';

function maakSchemaTabel(container,breedte1 = '25%') {
  const tabel = document.createElement('table');
  tabel.classList.add('oef-tabel');
  const cg=document.createElement('colgroup');
  for (let i=0;i<2;i++) {
    const col=document.createElement('col');
    if (i === 0) col.style.width = breedte1;
    if (i === 1) col.style.width = `calc(100% - ${breedte1})`;
    cg.appendChild(col);
  }
  tabel.appendChild(cg);
  const tbody=document.createElement('tbody');
  tabel.appendChild(tbody);
  container.appendChild(tabel);  
  return {tabel,tbody};
}



  const {tbody} = maakSchemaTabel(inhoud,'25%');

  const BLOKA = [
    {inhoud: htmlSpan('lettervorm: coëfficiënt en letterdeel'),type: 'grijs'},
    {inhoud: htmlSpan('5 + 3<i>x</i>'), type: 'oplvast'},
    {inhoud: htmlSpan('5 + 3<i>x</i>'), type: 'toggle'},
  ];

  function maakBlok(container, links = htmlSpan('opdracht'), blokinfo, uitlijningLinks = '0cm',wit = '0.05cm', breuk = false) {
    //tabellen maken links en rechts
    const tr = document.createElement('tr');
    for (let i=0;i<2;i++) {
      const td = document.createElement('td');
      td.style.border = '1.2px solid var(--groen-donker)';
      if (i === 0) {
        td.style.verticalAlign = 'top';
      }
      const tabel = document.createElement('table');
      td.appendChild(tabel);
      tabel.style.tableLayout = 'fixed';
      tabel.style.width = '100%';
      tr.appendChild(td);
      if (i===0) {
        //linkerkolom vullen
        const tr = document.createElement('tr');
        const tdL = document.createElement('td');
        tdL.style.paddingTop = uitlijningLinks;
        tdL.style.paddingLeft = wit;
        tdL.style.paddingRight = wit;
        tdL.appendChild(links);
        tr.appendChild(tdL);
        tabel.appendChild(tr);
      } else {
        //rechterkolom vullen
        blokinfo.forEach(item => {
          const trItem = document.createElement('tr');
          let td;

          if (item.type === 'grijs') {
            td = document.createElement('td');
            td.appendChild(item.inhoud);
            td.style.color = 'var(--sl-kleur)';
          } else if (item.type === 'oplvast') {
            td = maakSlTdZonderInsprong(item.inhoud, breuk);
            td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
          } else if (item.type === 'toggle') {
            td = maakSlTdZonderInsprong(item.inhoud, breuk);
          } else {
            td = document.createElement('td'); // fallback
            td.appendChild(item.inhoud);
          }

          td.style.height = breuk ? '1.2cm' : '0.9cm';
          td.style.paddingLeft = wit;
          td.style.paddingRight = wit;
          trItem.appendChild(td);
          tabel.appendChild(trItem);
        });
      }
    }
    container.appendChild(tr);
  }


  maakBlok(tbody,htmlSpan('lettervorm: coëfficiënt en letterdeel'),BLOKA);

  {
    /* ---- Blok A ---- */
    //td's maken links en rechts
    const trA = document.createElement('tr');
    const tdALINKS = document.createElement('td');
    tdALINKS.style.border = '1.2px solid var(--groen-donker)';
    trA.appendChild(tdALINKS);
    const tdARECHTS = document.createElement('td');
    tdARECHTS.style.border = '1.2px solid var(--groen-donker)';
    trA.appendChild(tdARECHTS);
    tbody.appendChild(trA);

    //tabellen maken links en rechts
    const tabelALinks = document.createElement('table');
    tdALINKS.appendChild(tabelALinks);
    tabelALinks.style.tableLayout = 'fixed';
    tabelALinks.style.width = '100%';    
    const tabelARechts = document.createElement('table');
    tabelARechts.style.tableLayout = 'fixed';
    tabelARechts.style.width = '100%';
    tdARECHTS.appendChild(tabelARechts);

    //linkerkolom vullen
    const trALINKS = document.createElement('tr');
    const tdA1 = document.createElement('td');
    tdALINKS.style.verticalAlign = 'top';
    tdALINKS.style.paddingTop = tekstK1;
    tdALINKS.style.paddingLeft = witruimte;
    tdALINKS.style.paddingRight = witruimte;
    tdA1.appendChild(htmlSpan('lettervorm: coëfficiënt en letterdeel'));
    trALINKS.appendChild(tdA1);
    tabelALinks.appendChild(trALINKS);

    //rechterkolom vullen
    //→ voorbeeld van grijze tekst
    const trARECHTS1 = document.createElement('tr');
    const tdAR1 = document.createElement('td');
    tdAR1.style.height = '0.9cm';
    tdAR1.style.color = 'var(--sl-kleur)';
    tdAR1.style.paddingLeft = witruimte;
    tdAR1.style.paddingRight = witruimte;
    tdAR1.appendChild(htmlSpan('Noteer een voorbeeld van een lettervorm. Duid duidelijk de coëfficiënt en het letterdeel aan.'));
    trARECHTS1.appendChild(tdAR1);
    tabelARechts.appendChild(trARECHTS1);
    //→ voorbeeld van oplossingenlaag met toggle
    const trARECHTS2 = document.createElement('tr');
    const tdAR2 = maakSlTdZonderInsprong(htmlSpan('5 + 3<i>x</i>'), false);
    tdAR2.style.height = '0.9cm';
    tdAR2.style.paddingLeft = witruimte;
    tdAR2.style.paddingRight = witruimte;
    trARECHTS2.appendChild(tdAR2);
    tabelARechts.appendChild(trARECHTS2); 
    //→ voorbeeld van oplossingenlaag die steeds zichtbaar is  
    const trARECHTS3 = document.createElement('tr');
    const tdAR3 = maakSlTdZonderInsprong(htmlSpan('5 + 3<i>x</i>'), false);
    tdAR3.style.height = '0.9cm';
    tdAR3.style.paddingLeft = witruimte;
    tdAR3.style.paddingRight = witruimte;
    tdAR3.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    trARECHTS3.appendChild(tdAR3);
    tabelARechts.appendChild(trARECHTS3); 
  }
  {
    /* ---- Blok B ---- */
    //td's maken links en rechts
    const trA = document.createElement('tr');
    const tdALINKS = document.createElement('td');
    tdALINKS.style.border = '1.2px solid var(--groen-donker)';
    trA.appendChild(tdALINKS);
    const tdARECHTS = document.createElement('td');
    tdARECHTS.style.border = '1.2px solid var(--groen-donker)';
    trA.appendChild(tdARECHTS);
    tbody.appendChild(trA);

    //tabellen maken links en rechts
    const tabelALinks = document.createElement('table');
    tdALINKS.appendChild(tabelALinks);
    const tabelARechts = document.createElement('table');
    tabelARechts.style.tableLayout = 'fixed';
    tabelARechts.style.width = '100%';
    tdARECHTS.appendChild(tabelARechts);

    //linkerkolom vullen
    const trALINKS = document.createElement('tr');
    const tdA1 = document.createElement('td');
    tdALINKS.style.verticalAlign = 'top';
    tdALINKS.style.paddingTop = tekstK1;
    tdALINKS.style.paddingLeft = witruimte;
    tdALINKS.style.paddingRight = witruimte;
    tdA1.appendChild(htmlSpan('lettervorm: coëfficiënt en letterdeel'));
    trALINKS.appendChild(tdA1);
    tabelALinks.appendChild(trALINKS);

    //rechterkolom vullen
    //→ voorbeeld van grijze tekst
    const trARECHTS1 = document.createElement('tr');
    const tdAR1 = document.createElement('td');
    tdAR1.style.height = '0.9cm';
    tdAR1.style.color = 'var(--sl-kleur)';
    tdAR1.style.paddingLeft = witruimte;
    tdAR1.style.paddingRight = witruimte;
    tdAR1.appendChild(htmlSpan('lettervorm: coëfficiënt en letterdeel letterdeel letterdeel letterdeel'));
    trARECHTS1.appendChild(tdAR1);
    tabelARechts.appendChild(trARECHTS1);
    //→ voorbeeld van oplossingenlaag met toggle
    const trARECHTS2 = document.createElement('tr');
    const tdAR2 = maakSlTdZonderInsprong(htmlSpan('5 + 3<i>x</i>'), false);
    tdAR2.style.height = '0.9cm';
    tdAR2.style.paddingLeft = witruimte;
    tdAR2.style.paddingRight = witruimte;
    trARECHTS2.appendChild(tdAR2);
    tabelARechts.appendChild(trARECHTS2); 
    //→ voorbeeld van oplossingenlaag die steeds zichtbaar is  
    const trARECHTS3 = document.createElement('tr');
    const tdAR3 = maakSlTdZonderInsprong(htmlSpan('5 + 3<i>x</i>'), false);
    tdAR3.style.height = '0.9cm';
    tdAR3.style.paddingLeft = witruimte;
    tdAR3.style.paddingRight = witruimte;
    tdAR3.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    trARECHTS3.appendChild(tdAR3);
    tabelARechts.appendChild(trARECHTS3); 
  }

})();