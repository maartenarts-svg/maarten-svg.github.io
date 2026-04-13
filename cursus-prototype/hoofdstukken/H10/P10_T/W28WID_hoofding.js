/* ============================================================
   H10 / th_101_optelling.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';   // aanpasbaar

  /*====hoofding===========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";
    kader.style.border = '1.2px solid black';
    kader.style.padding = paddingkader;

    const trTitel = document.createElement('tr');
    trTitel.style.height = '2.7cm';
    trTitel.style.width = '100%';

    const tdLogo = document.createElement('td');
    tdLogo.style.height = '2.7cm';
    tdLogo.style.width = '12.5%';
    tdLogo.style.textAlign = 'center';
    tdLogo.style.verticalAlign = 'middle';
    const imgLogo = document.createElement('img');
    imgLogo.src = 'afbeeldingen/lablogo.png';
    imgLogo.style.height = '1.5cm';
    tdLogo.appendChild(imgLogo);    
    trTitel.appendChild(tdLogo); 

    const tdMidden = document.createElement('td');
    tdMidden.style.height = '2.7cm';
    tdMidden.style.width = '75%';
    
    const tabelMidden = document.createElement('table')
    tabelMidden.style.borderCollapse = 'collapse';
    tabelMidden.style.width = '100%';
    tabelMidden.style.height = '100%';
    tabelMidden.style.tableLayout = "fixed";
    tabelMidden.style.padding = paddingkader;
    const colg = document.createElement('colgroup');
    const col1 = document.createElement('col'); col1.style.width = '15%'; colg.appendChild(col1);
    const col2 = document.createElement('col'); col2.style.width = '85%'; colg.appendChild(col2);
    tabelMidden.appendChild(colg);
    const tbodyMidden = document.createElement('tbody');
    tabelMidden.appendChild(tbodyMidden);

    const trNaam = document.createElement('tr');
    const tdNaam = document.createElement('td');
    tdNaam.style.height = '0.9cm';
    tdNaam.style.textAlign = 'left';
    tdNaam.style.verticalAlign = 'middle';
    tdNaam.appendChild(htmlSpan('Naam:'));
    trNaam.appendChild(tdNaam);
    const tdNaam2 = document.createElement('td');    
    tdNaam2.style.height = '0.9cm';
    tdNaam2.style.textAlign = 'left';
    tdNaam2.style.verticalAlign = 'middle';
    tdNaam2.appendChild(htmlSpan('_______________________________________________________________'));
    tdNaam2.style.overflow = 'hidden';
    tdNaam2.classList.add('sl');
    trNaam.appendChild(tdNaam2); 
    tbodyMidden.appendChild(trNaam);   

    const trCoach = document.createElement('tr');
    const tdCoach = document.createElement('td');
    tdCoach.style.height = '0.9cm';
    tdCoach.style.textAlign = 'left';
    tdCoach.style.verticalAlign = 'middle';
    tdCoach.appendChild(htmlSpan('Coach:'));
    trCoach.appendChild(tdCoach);
    const tdCoach2 = document.createElement('td');    
    tdCoach2.style.height = '0.9cm';
    tdCoach2.style.textAlign = 'left';
    tdCoach2.style.verticalAlign = 'middle';
    tdCoach2.appendChild(htmlSpan('_______________________________________________________________'));
    tdCoach2.style.overflow = 'hidden';
    tdCoach2.classList.add('sl');
    trCoach.appendChild(tdCoach2); 
    tbodyMidden.appendChild(trCoach);      

    const trTaak = document.createElement('tr');
    const tdTaak = document.createElement('td');
    tdTaak.style.height = '0.9cm';
    tdTaak.style.textAlign = 'left';
    tdTaak.style.verticalAlign = 'middle';
    tdTaak.appendChild(htmlSpan('Titel:'));
    trTaak.appendChild(tdTaak);
    const tdTaak2 = document.createElement('td');    
    tdTaak2.style.height = '0.9cm';
    tdTaak2.style.textAlign = 'left';
    tdTaak2.style.verticalAlign = 'middle';
    const divTitel = document.createElement('div');
    divTitel.style.display = "flex";
    const spanTitel = document.createElement("span");
    spanTitel.appendChild(htmlSpan('Herhaling hoofdstuk 9'));
    spanTitel.style.width = '75%';
    spanTitel.style.textAlign = 'left';
    divTitel.appendChild(spanTitel); 
    const spanWerktijdTitel = document.createElement("span");
    spanWerktijdTitel.appendChild(htmlSpan('Werktijd:'));
    spanWerktijdTitel.style.width = '15%';
    spanWerktijdTitel.style.textAlign = 'left';
    divTitel.appendChild(spanWerktijdTitel);
    const spanWerktijd = document.createElement("span");
    spanWerktijd.appendChild(htmlSpan("25'"));
    spanWerktijd.style.width = '10%';
    spanWerktijd.style.textAlign = 'left';
    divTitel.appendChild(spanWerktijd);
     

    tdTaak2.appendChild(divTitel);
    trTaak.appendChild(tdTaak2); 
    tbodyMidden.appendChild(trTaak);       

    tdMidden.appendChild(tabelMidden);
    trTitel.appendChild(tdMidden);

    const tdIndienen = document.createElement('td');
    tdIndienen.style.height = '2.7cm';
    tdIndienen.style.width = '12.5%';
    tdIndienen.style.textAlign = 'center';
    tdIndienen.style.verticalAlign = 'middle';
    const divGeheel = document.createElement('div');
    divGeheel.style.display = 'flex';
    divGeheel.style.flexDirection = 'column';
    const spanIcoon = document.createElement('span');
    spanIcoon.innerHTML = '📥';
    spanIcoon.style.fontSize = '50px';
    divGeheel.appendChild(spanIcoon);
    const spanCoach = htmlSpan('Maarten');
    divGeheel.appendChild(spanCoach);
       
    tdIndienen.appendChild(divGeheel);
    trTitel.appendChild(tdIndienen);    

    kader.appendChild(trTitel);

    inhoud.appendChild(kader);
  }



})();