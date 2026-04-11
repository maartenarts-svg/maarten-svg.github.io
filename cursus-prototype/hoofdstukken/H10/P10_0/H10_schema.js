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

  const tabel = document.createElement('table');
  tabel.classList.add('oef-tabel');
  const cg=document.createElement('colgroup');
  for (let i=0;i<2;i++) {
    const col=document.createElement('col');
    if (i === 0) col.style.width = breedteK1;
    if (i === 1) col.style.width = breedteK2;
    cg.appendChild(col);
  }
  tabel.appendChild(cg);
  const tbody=document.createElement('tbody');
  tabel.appendChild(tbody);
  inhoud.appendChild(tabel);

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