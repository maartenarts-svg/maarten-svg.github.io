/* ============================================================
   H10 / H10_schema1.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';   // aanpasbaar
  const breedteSoort = '37%'    // aanpasbaar  

  /*====theoriekader===========================================*/
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";
    kader.style.border = '1.2px solid var(--groen-scheiding)';

    const trTitel = document.createElement('tr');
    const tdTitel = document.createElement('td');
    tdTitel.style.paddingLeft = paddingkader;
    tdTitel.style.paddingRight = paddingkader;    
    const spanTitel = document.createElement('span')
    spanTitel.appendChild(htmlSpan('Reflectie over je voorbereiding'));
    spanTitel.style.fontWeight = 'bold';
    const spanInstructie = document.createElement('span');
    spanInstructie.appendChild(htmlSpan('<br>Vink aan wat van toepassing is.'));
    tdTitel.appendChild(spanTitel);
    tdTitel.appendChild(spanInstructie);
    trTitel.appendChild(tdTitel);
    kader.appendChild(trTitel);

    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);

    
    {
      const{tbody : tbodyA} = maakOefTabel(tdInhoud,'2',true);
      voegWitruimteToe(tbodyA,'0.3cm');

      const trVraag = document.createElement('tr');
      const td1L = document.createElement('td');
      td1L.classList.add('kolom-links');
      td1L.appendChild(htmlSpan('Hoe heb je de theorie/rekenregels geleerd?'));
      trVraag.appendChild(td1L);
      const td1R = document.createElement('td');
      td1R.classList.add('kolom-rechts');
      td1R.appendChild(htmlSpan('Hoeveel oefeningen heb je opnieuw gemaakt?'));
      trVraag.appendChild(td1R);
      tbodyA.appendChild(trVraag);

      

      const opties = [
        {links: htmlSpan('uit het hoofd'), rechts: htmlSpan('geen enkele')},
        {links: htmlSpan('veel gelezen'), rechts: htmlSpan('echt maar een paar')},
        {links: htmlSpan('steeds luidop gezegd bij elke oefening'), rechts: htmlSpan('enkel de voorbeelden')},
        {links: htmlSpan('niet geleerd'), rechts: htmlSpan('de oefeningen die ik moeilijk vond')},
      ];

      opties.forEach(optie => {
        const trO = document.createElement('tr');
        const tdOL = maakStapZStreep('☐',optie.links);
        tdOL.classList.add('kolom-links');
        trO.appendChild(tdOL);
        const tdOR = maakStapZStreep('☐',optie.rechts);
        tdOR.classList.add('kolom-rechts');
        trO.appendChild(tdOR);
        tbodyA.appendChild(trO);
      });

      const trA1 = document.createElement('tr');
      const tdA1L = maakOpTdDubbelZStrZdub('☐',htmlSpan('anders:'),'1.5cm',false,'');
      tdA1L.classList.add('kolom-links');
      trA1.appendChild(tdA1L);
      const tdA1R = maakOpTdDubbelZStrZdub('☐',htmlSpan('anders:'),'1.5cm',false,'');
      tdA1R.classList.add('kolom-rechts');
      trA1.appendChild(tdA1R);
      tbodyA.appendChild(trA1);
      voegWitruimteToe(tbodyA,'0.5cm');      
    }

    {
      const{tbody : tbodyA} = maakOefTabel(tdInhoud,'1',false);
      {
        const trVraag = document.createElement('tr');
        const td1L = document.createElement('td');
        td1L.classList.add('kolom-links');
        td1L.appendChild(htmlSpan('Wat helpt jou het meest bij het leren voor een toets?'));
        trVraag.appendChild(td1L);
        tbodyA.appendChild(trVraag);
        voegWitruimteToe(tbodyA,'0.1cm');

        const trSL = document.createElement('tr');
        const tdSl = maakSlTdZonderInsprong('',false);
        trSL.appendChild(tdSl);
        tbodyA.appendChild(trSL);        
      }
      {
        const trSL = document.createElement('tr');
        const tdSl = maakSlTdZonderInsprong('',false);
        trSL.appendChild(tdSl);
        tbodyA.appendChild(trSL);        
      }
    }

})();