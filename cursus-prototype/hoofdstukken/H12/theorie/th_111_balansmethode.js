/* ============================================================
   H10 / th_111_balansmethode.js
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
    tdKort.appendChild(htmlSpan('balansmethode'));

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

    //eerste twee zinnen
    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.classList.add('theorietekst');
      th_102_begrA.appendChild(htmlSpan('Een vergelijking kun je bekijken als een '));
      const th_102_begrB_b2 = htmlSpan('balans in evenwicht');
      th_102_begrB_b2.classList.add('theorie');
      th_102_begrA.appendChild(th_102_begrB_b2);
      th_102_begrA.appendChild(htmlSpan('.<br>Doe je iets bij het ene lid, dan moet je, om de balans in evenwicht te houden, hetzelfde doen bij het andere lid. Deze werkwijze is de '));
      const th_102_begrB_b3 = htmlSpan('balansmethode');
      th_102_begrB_b3.classList.add('theorie');
      th_102_begrA.appendChild(th_102_begrB_b3);
      th_102_begrA.appendChild(htmlSpan('.'));

      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', '•'));
      th_102_begrA.appendChild(htmlSpan('beide leden vermeerderen of verminderen met hetzelfde getal'));
      th_102_begrA.classList.add('theorie');
      
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
      img.src = "afbeeldingen/th_111_001a.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("<i>x</i> + 2 = 4"));

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
      img.src = "afbeeldingen/th_111_001b.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("<i>x</i> + 2 = 4"));
      const hulp02 = document.createElement('span');
      hulp02.appendChild(maakSpanBreedte('1cm',''));
      hulp02.appendChild(htmlSpan("<i>x</i> + 2 <span class='markeer-lila'>+ 3</span> = 4 <span class='markeer-lila'>+ 3</span>"));
      const hulp03 = document.createElement('span');
      hulp03.appendChild(maakSpanBreedte('1cm',''));
      hulp03.appendChild(htmlSpan("<i>x</i> + 5 = 7"));

      [htmlSpan("Door beide leden te vermeerderen met 3, blijft de balans in evenwicht."), htmlSpan(""), hulp01, hulp02, hulp03].forEach(t => {
        const span = document.createElement("span");
        span.appendChild(t);
        textDiv.appendChild(span);
        maakSpanMetRuimte(textDiv,'0.05cm');
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud,'0.3cm');

    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.appendChild(maakSpanBreedte('0.4cm', '•'));
      th_102_begrA.appendChild(htmlSpan('beide leden delen door of vermenigvuldigen met hetzelfde getal verschillend van nul'));
      th_102_begrA.classList.add('theorie');
      
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
      img.src = "afbeeldingen/th_111_001c.svg";
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
      img.src = "afbeeldingen/th_111_001d.svg";
      img.style.paddingLeft = '0.4cm';

      // tekst blok
      const textDiv = document.createElement("div");
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const hulp01 = document.createElement('span');
      hulp01.appendChild(maakSpanBreedte('1cm',''));
      hulp01.appendChild(htmlSpan("3<i>x</i> = 6"));
      const hulp02 = document.createElement('span');
      hulp02.appendChild(maakSpanBreedte('1cm',''));
      hulp02.appendChild(htmlSpan("3<i>x</i> <span class='markeer-lila'>: 3</span> = 6 <span class='markeer-lila'>: 3</span>"));
      const hulp03 = document.createElement('span');
      hulp03.appendChild(maakSpanBreedte('1cm',''));
      hulp03.appendChild(htmlSpan("<i>x</i> = 2"));

      [htmlSpan("Door beide leden te delen door 3, blijft de balans in evenwicht."), htmlSpan(""), hulp01, hulp02, hulp03].forEach(t => {
        const span = document.createElement("span");
        span.appendChild(t);
        textDiv.appendChild(span);
        maakSpanMetRuimte(textDiv,'0.05cm');
      });

      wrapper.appendChild(img);
      wrapper.appendChild(textDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud,'0.3cm')

    {
      const th_102_begrA = document.createElement('span');
      th_102_begrA.classList.add('theorietekst');
      th_102_begrA.appendChild(htmlSpan('Een '));
      const th_102_begrB_b2 = htmlSpan('vergelijking oplossen');
      th_102_begrB_b2.classList.add('theorie');
      th_102_begrA.appendChild(th_102_begrB_b2);
      th_102_begrA.appendChild(htmlSpan(' betekent dat je met de balansmethode gaat berekenen voor welke waarde van de onbekende je een gelijkheid krijgt.'));

      const div01 = document.createElement('div');
      div01.style.display = 'flex';
      div01.style.flexDirection = 'column';
      tdInhoud.appendChild(div01);
      div01.appendChild(th_102_begrA);
      maakSpanMetRuimte(div01,'0.05cm');
    }

    voegWitruimteToe(tdInhoud,'0.1cm');



    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);

    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud,'1cm');



})();