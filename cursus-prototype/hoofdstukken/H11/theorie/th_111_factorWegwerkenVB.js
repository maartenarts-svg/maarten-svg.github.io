/* ============================================================
   H11 / th_111_factorWegwerkenVB.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';   // aanpasbaar
  const breedteSoort = '37%'    // aanpasbaar  

  /*====voorbeeldkader=========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    // Soort voorbeeld
    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--oranje-scheiding)';
    tdSoort.style.backgroundColor = 'var(--oranje-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;   
    tdSoort.style.width = breedteSoort;        
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Voorbeeld'));

    // Korte inhoud
    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan(''));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // --- Eigenlijk voorbeeld ---
    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--oranje-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud,'0.1cm');

    //voorbeeld 1
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', '•'));
      th_102_begrA.appendChild(htmlSpan('Los de vergelijking 3<i>x</i> = 6 op.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/th_111_003a.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("3<i>x</i> = 6"));

      [htmlSpan("De balans stelt de vergelijking"), htmlSpan(""), hulp01, htmlSpan(""), htmlSpan("voor.")].forEach(t => {
        const span = document.createElement("span");
        span.appendChild(t);
        textDiv.appendChild(span);
        maakSpanMetRuimte(textDiv,'0.05cm');
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);
    }
    voegWitruimteToe(tdInhoud,'0.1cm');
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/th_111_003b.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("3<i>x</i> <span class='markeer-lila'>: 3</span> = 6 <span class='markeer-lila'>: 3</span>"));

      [htmlSpan("De factor 3 moet weg in het linkerlid, dus beide leden delen door 3."), hulp01].forEach(t => {
        const span = document.createElement("span");
        span.appendChild(t);
        textDiv.appendChild(span);
        maakSpanMetRuimte(textDiv,'0.05cm');
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);
    }
    voegWitruimteToe(tdInhoud,'0.1cm');
    {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center"; // verticaal uitlijnen
      wrapper.style.gap = "10px";

      // afbeelding
      const img = document.createElement("img");
      img.src = "afbeeldingen/th_111_003c.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("<i>x</i> = 2"));

      [htmlSpan("Beide leden herleiden."), hulp01].forEach(t => {
        const span = document.createElement("span");
        span.appendChild(t);
        textDiv.appendChild(span);
        maakSpanMetRuimte(textDiv,'0.05cm');
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);
    }
    voegWitruimteToe(tdInhoud,'0.1cm');
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(htmlSpan('Controle:'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'LL:'));
      th_102_begrA.appendChild(htmlSpan('3 · <span class="markeer-lila">2</span> = 6'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'RL:'));
      th_102_begrA.appendChild(htmlSpan('6'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    //voorbeeld 2
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', '•'));
      th_102_begrA.appendChild(htmlSpan('Los de vergelijking -5 = 7<i>t</i> op.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('8cm',''));
      th_102_begrA.appendChild(htmlSpan('-5 = 7<i>t</i>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      const th_102a_begrA = document.createElement('span');
      th_102a_begrA.appendChild(maakSpanBreedte('0.65cm', '1|'));
      th_102a_begrA.classList.add('lbl');
      th_102_begrA.appendChild( th_102a_begrA);
      th_102_begrA.appendChild(maakSpanBreedte('8cm','De factor 7 moet weg in het rechterlid,'));
      th_102_begrA.appendChild(htmlSpan('-5 <span class="markeer-lila">: 7</span> = 7<i>t</i> <span class="markeer-lila">: 7</span>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm',''));
      th_102_begrA.appendChild(htmlSpan('dus beide leden delen door 7.'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      const th_102a_begrA = document.createElement('span');
      th_102a_begrA.appendChild(maakSpanBreedte('0.65cm', '2|'));
      th_102a_begrA.classList.add('lbl');
      th_102_begrA.appendChild( th_102a_begrA);
      th_102_begrA.appendChild(maakSpanBreedte('8cm','Beide leden herleiden.'));
      th_102_begrA.appendChild(maakBreuk('-5','7','opgave'));
      th_102_begrA.appendChild(htmlSpan(' = <i>t</i>'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }

    voegWitruimteToe(tdInhoud,'0.1cm');

    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'Controleer!'));
      th_102_begrA.appendChild(maakSpanBreedte('8cm', ''));
      th_102_begrA.appendChild(htmlSpan('Controle:'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('8cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'LL:'));
      th_102_begrA.appendChild(htmlSpan('-5'));
      
      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('8cm', ''));
      th_102_begrA.appendChild(maakSpanBreedte('0.65cm', 'RL:'));
      th_102_begrA.appendChild(htmlSpan('7 · '));
      const hulp01 = document.createElement('span');
      hulp01.classList.add('markeer-lila');
      hulp01.appendChild(maakBreuk('-5','7','opgave'));
      th_102_begrA.appendChild(hulp01);
      th_102_begrA.appendChild(htmlSpan(' = -5'));
      
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

})();