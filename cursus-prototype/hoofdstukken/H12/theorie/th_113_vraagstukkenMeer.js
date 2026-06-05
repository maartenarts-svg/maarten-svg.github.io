/* ============================================================
   H11 / th_113_vraagstukkenMeer.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';   // aanpasbaar
  const breedteSoort = '37%'    // aanpasbaar  

  /*====theoriekader===========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    // Soort theorie
    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--groen-scheiding)';
    tdSoort.style.backgroundColor = 'var(--groen-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;   
    tdSoort.style.width = breedteSoort;        
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('werkwijze'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('vraagstukken oplossen met meer dan één "ding" onbekend'));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // --- Eigenlijke theorie ---
    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--groen-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud,'0.1cm');

    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(htmlSpan('Bij sommige vraagstukken weet je verschillende “dingen” niet. Stel dan één ervan voor door een letter (de onbekende) en schrijf de andere in functie van deze onbekende.'));
      th_102_begrA.classList.add('theorie-tekst');
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.3cm');
    }

    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(htmlSpan('Kenji heeft 20 euro meer dan Debby en Jean-Marie heeft drie keer zoveel als Debby. Samen hebben ze 255 euro.<br>Bereken het bedrag dat Jean-Marie heeft.'));
      th_102_begrA.classList.add('theorie-tekst');
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }

    const spatie = '4.7cm';
    const breedte1 = '3.3cm';
    const breedte2 = '3cm';

    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '1|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'keuze onbekende:'));
      th_102_begrA.appendChild(maakSpanBreedte(breedte1,'bedrag Debby:'));
      th_102_begrA.appendChild(maakSpanBreedte(breedte2,'<i>b</i>'));
      th_102_begrA.appendChild(htmlSpan('<span class="markeer-lila">47</span>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,''));
      th_102_begrA.appendChild(maakSpanBreedte(breedte1,'bedrag Kenji:'));
      th_102_begrA.appendChild(maakSpanBreedte(breedte2,'<i>b</i> + 20'));
      th_102_begrA.appendChild(htmlSpan('<span class="markeer-lila">47 + 20 = 67</span>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.15cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,''));
      th_102_begrA.appendChild(maakSpanBreedte(breedte1,'bedrag Jean-Marie:'));
      th_102_begrA.appendChild(maakSpanBreedte(breedte2,'3<i>b</i>'));
      th_102_begrA.appendChild(htmlSpan('<span class="markeer-lila">3 · 47 = 141</span>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.25cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '2|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'vergelijking opstellen:'));
      th_102_begrA.appendChild(htmlSpan('<i>b</i> + <i>b</i> + 20 + 3<i>b</i> = 255'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.25cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '3|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'vergelijking oplossen:'));
      th_102_begrA.appendChild(htmlSpan('<i>b</i> = 47 (hier met ICT)'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.25cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '4|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'antwoord:'));
      th_102_begrA.appendChild(htmlSpan('Jean-Marie heeft 141 euro.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.25cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      const lbl01 = maakSpanBreedte('0.65cm', '5|');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(maakSpanBreedte(spatie,'controle:'));
      th_102_begrA.appendChild(htmlSpan('47 + 67 + 141 = 255 <span class="markeer-lila">(zie ook keuze onbekende)</span>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
    }

    voegWitruimteToe(tdInhoud,'0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'0.5cm');

})();