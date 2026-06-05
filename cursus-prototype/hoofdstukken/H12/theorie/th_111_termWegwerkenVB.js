/* ============================================================
   H11 / th_111_termWegwerkenVB.js
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
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('Los de vergelijking <i>x</i> + 2 = -5 op.'));
      
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
      img.src = "afbeeldingen/th_111_002a.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("<i>x</i> + 2 = -5"));

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
      img.src = "afbeeldingen/th_111_002b.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("<i>x</i> + 2 <span class='markeer-lila'>- 2</span> = -5 <span class='markeer-lila'>- 2</span>"));

      [htmlSpan("De term 2 moet weg in het linkerlid, dus beide leden verminderen met 2."), hulp01].forEach(t => {
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
      img.src = "afbeeldingen/th_111_002c.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("<i>x</i> = -7"));

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
      th_102_begrA.appendChild(htmlSpan('<span class="markeer-lila">-7</span> + 2 = -5'));
      
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
      th_102_begrA.appendChild(htmlSpan('-5'));
      
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
      const lbl01 = maakSpanBreedte('0.4cm', '•');
      lbl01.classList.add('lbl');
      th_102_begrA.appendChild(lbl01);
      th_102_begrA.appendChild(htmlSpan('Los de vergelijking -8 = <i>t</i> - 3 op.'));
      
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
      th_102_begrA.appendChild(htmlSpan('-8 = <i>t</i> - 3'));
      
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
      th_102_begrA.appendChild(maakSpanBreedte('8cm','De term -3 moet weg in het rechterlid,'));
      th_102_begrA.appendChild(htmlSpan('-8 <span class="markeer-lila">+ 3</span> = <i>t</i> - 3 <span class="markeer-lila">+ 3</span>'));
      
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
      th_102_begrA.appendChild(htmlSpan('dus beide leden vermeerderen met 3.'));
      
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
      th_102_begrA.appendChild(htmlSpan('-5 = <i>t</i>'));
      
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
      th_102_begrA.appendChild(htmlSpan('-8'));
      
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
      th_102_begrA.appendChild(htmlSpan('<span class="markeer-lila">-5</span> - 3 = -8'));
      
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