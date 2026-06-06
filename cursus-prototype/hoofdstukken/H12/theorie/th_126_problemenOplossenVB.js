/* ============================================================
   H12 / th_126_problemenOplossenVB.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';
  const breedteSoort = '37%';

  /*====voorbeeldkader=========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = 'fixed';

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--oranje-scheiding)';
    tdSoort.style.backgroundColor = 'var(--oranje-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;
    tdSoort.style.width = breedteSoort;
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Voorbeeld'));

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan(''));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // --- Eigenlijk voorbeeld ---
    const trInhoud = document.createElement('tr');
    const tdInhoud = document.createElement('td');
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--oranje-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Situatie
    {
      const intro = htmlSpan('Een park heeft de vorm van een rechthoek van 1 km op 0,6 km.');
      intro.classList.add('theorietekst');
      intro.style.display = 'block';
      tdInhoud.appendChild(intro);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // ── DEELVRAAG a ─────────────────────────────────────────────
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
      linksDiv.style.minWidth = '0';
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      // Vraag a|
      maakVraagRij(linksDiv, 'a|',
        'Aan de rand van het park is een looproute aangelegd.<br>' +
        'Jean loopt elke week rondjes rond het park. Op 1 uur kan hij vier rondjes lopen.<br>' +
        'Bereken de snelheid waarmee Jean loopt.');

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Oplossing a (ingesprongen gelijk aan vraag-tekst)
      const oplA = document.createElement('div');
      oplA.style.paddingLeft = '0.5cm';

      maakOplBullet(oplA, 'Plan:');
      maakOplSub(oplA, 'Om de snelheid te berekenen, moet je weten welke afstand Jean aflegt op 1 uur.');
      maakOplSub(oplA, 'De afstand is 4 rondjes, dus 4 keer de <strong>omtrek</strong> van een <strong>rechthoek</strong>.');

      maakSpanMetRuimte(oplA, '0.05cm');
      maakOplBullet(oplA, 'Berekeningen in km:');
      maakCalcRij(oplA, '2.7cm', '- 1 rondje:',  '2 · (1 + 0,6) = 3,2');
      maakCalcRij(oplA, '2.7cm', '- 4 rondjes:', '4 · 3,2 = 12,8');

      maakSpanMetRuimte(oplA, '0.05cm');
      maakOplBullet(oplA, 'Antwoord: Jean loopt met een snelheid van <br>12,8 km/h.');

      linksDiv.appendChild(oplA);

      // Afbeelding rechts
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const imgA = document.createElement('img');
      imgA.src = 'afbeeldingen/th_126_001_probleemVB.svg';
      imgA.style.width = '200px';
      rechtsDiv.appendChild(imgA);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.2cm');

    // ── DEELVRAAG b ─────────────────────────────────────────────
    {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'flex-start';
      wrapper.style.gap = '0.3cm';

      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
      linksDiv.style.minWidth = '0';
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';

      // Vraag b|
      maakVraagRij(linksDiv, 'b|',
        'Jean onderhoudt ook het park.<br>' +
        'Om een gebied van 200 m op 200 m grondig te inspecteren, heeft hij een dag nodig.<br>' +
        'Bereken hoeveel dagen hij nodig heeft om het volledige park te inspecteren.');

      maakSpanMetRuimte(linksDiv, '0.1cm');

      // Oplossing b
      const oplB = document.createElement('div');
      oplB.style.paddingLeft = '0.5cm';

      maakOplBullet(oplB, 'Plan:');
      maakOplSub(oplB, 'Je moet berekenen hoeveel keer het park groter is dan dat gebied van 200 m op 200 m.');
      maakOplSub(oplB,
        'Je moet dus de <strong>oppervlakte</strong> van het <strong>rechthoekige</strong> park berekenen ' +
        'en de <strong>oppervlakte</strong> van het <strong>vierkante</strong> gebied.');

      maakSpanMetRuimte(oplB, '0.05cm');
      maakOplBullet(oplB, 'Berekeningen in km:');
      maakCalcRij(oplB, '4.5cm', '- oppervlakte park:',   '1 · 0,6 = 0,6');
      maakCalcRij(oplB, '4.5cm', '- oppervlakte gebied:', '0,2 · 0,2 = 0,04');
      maakOplSub(oplB, 'Het park is dus 0,6 : 0,04 = 15 keer groter dan het gebied.');

      maakSpanMetRuimte(oplB, '0.05cm');
      maakOplBullet(oplB, 'Antwoord: Jean heeft voor het volledige park 15 dagen nodig.');

      linksDiv.appendChild(oplB);

      // Afbeelding rechts
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';
      rechtsDiv.style.display = 'flex';
      rechtsDiv.style.justifyContent = 'center';
      const imgB = document.createElement('img');
      imgB.src = 'afbeeldingen/th_126_001_probleemVB2.svg';
      imgB.style.width = '200px';
      rechtsDiv.appendChild(imgB);

      wrapper.appendChild(linksDiv);
      wrapper.appendChild(rechtsDiv);
      tdInhoud.appendChild(wrapper);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  // ── Hulpfuncties ────────────────────────────────────────────

  function maakVraagRij(container, labelTekst, htmlTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'flex-start';

    const lbl = maakSpanBreedte('0.5cm', labelTekst);
    lbl.classList.add('lbl');
    lbl.style.flexShrink = '0';
    rij.appendChild(lbl);

    const tekst = htmlSpan(htmlTekst);
    tekst.classList.add('theorietekst');
    rij.appendChild(tekst);

    container.appendChild(rij);
  }

  function maakOplBullet(container, htmlTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'flex-start';

    const bul = document.createElement('span');
    bul.style.width = '0.4cm';
    bul.style.display = 'inline-block';
    bul.style.flexShrink = '0';
    bul.classList.add('voorgedrukt');
    bul.textContent = '•';
    rij.appendChild(bul);

    const tekst = htmlSpan(htmlTekst);
    tekst.classList.add('voorgedrukt');
    rij.appendChild(tekst);

    container.appendChild(rij);
  }

  function maakOplSub(container, htmlTekst) {
    const sub = htmlSpan(htmlTekst);
    sub.classList.add('voorgedrukt');
    sub.style.paddingLeft = '0.4cm';
    sub.style.display = 'block';
    container.appendChild(sub);
  }

  function maakCalcRij(container, labelBreedte, labelTekst, waardeTekst) {
    const rij = document.createElement('div');
    rij.style.display = 'flex';
    rij.style.alignItems = 'baseline';
    rij.style.paddingLeft = '0.4cm';

    const lbl = document.createElement('span');
    lbl.style.width = labelBreedte;
    lbl.style.flexShrink = '0';
    lbl.classList.add('voorgedrukt');
    lbl.textContent = labelTekst;

    const val = htmlSpan(waardeTekst);
    val.classList.add('voorgedrukt');

    rij.appendChild(lbl);
    rij.appendChild(val);
    container.appendChild(rij);
  }

})();
