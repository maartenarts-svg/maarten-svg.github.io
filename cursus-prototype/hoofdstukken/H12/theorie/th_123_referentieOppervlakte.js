/* ============================================================
   H12 / th_123_referentieOppervlakte.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';
  const breedteSoort = '37%';

  /*====theoriekader===========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";

    // --- Bovenste deel ---
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--groen-scheiding)';
    tdSoort.style.backgroundColor = 'var(--groen-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;
    tdSoort.style.width = breedteSoort;
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Referentie-eenheden'));

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('oppervlakte-eenheden'));

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

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Intro-tekst
    {
      const span = document.createElement('span');
      span.appendChild(htmlSpan('Om in te schatten hoe groot een eenheid is, kun je die eenheid linken aan oppervlaktes die je kent.'));
      span.classList.add('theorietekst');
      span.style.display = 'block';
      tdInhoud.appendChild(span);
    }

    voegWitruimteToe(tdInhoud, '0.15cm');

    // Hulpfunctie: bouw één referentiecel
    function maakReferentieCel(eenheid, bestand, beschrijving) {
      const cel = document.createElement('div');
      cel.style.flex = '1';
      cel.style.display = 'flex';
      cel.style.flexDirection = 'column';
      cel.style.alignItems = 'center';
      cel.style.textAlign = 'center';

      const naam = htmlSpan('<strong>' + eenheid + '</strong>');
      cel.appendChild(naam);

      const img = document.createElement('img');
      img.src = 'afbeeldingen/' + bestand;
      img.style.width = '100%';
      img.style.maxWidth = '120px';
      img.style.height = '80px';
      img.style.objectFit = 'contain';
      img.style.display = 'block';
      img.style.margin = '0.1cm auto';
      cel.appendChild(img);

      const tekst = document.createElement('span');
      tekst.appendChild(htmlSpan(beschrijving));
      tekst.classList.add('theorietekst');
      cel.appendChild(tekst);

      return cel;
    }

    // Rij 1: km², hm², dam², m²
    {
      const rij = document.createElement('div');
      rij.style.display = 'flex';
      rij.style.gap = '0.2cm';

      rij.appendChild(maakReferentieCel('1 km<sup>2</sup>',  'km2-reference.png',  'oppervlakte van een pretpark'));
      rij.appendChild(maakReferentieCel('1 hm<sup>2</sup>',  'hm2-reference.png',  'oppervlakte van twee voetbalvelden'));
      rij.appendChild(maakReferentieCel('1 dam<sup>2</sup>', 'dam2-reference.png', 'oppervlakte van een klaslokaal'));
      rij.appendChild(maakReferentieCel('1 m<sup>2</sup>',   'm2-reference.png',   'grondoppervlakte van een douchecabine'));

      tdInhoud.appendChild(rij);
    }

    voegWitruimteToe(tdInhoud, '0.15cm');

    // Rij 2: dm², cm², mm², (leeg)
    {
      const rij = document.createElement('div');
      rij.style.display = 'flex';
      rij.style.gap = '0.2cm';

      rij.appendChild(maakReferentieCel('1 dm<sup>2</sup>', 'dm2-reference.png', 'oppervlakte van een boterham'));
      rij.appendChild(maakReferentieCel('1 cm<sup>2</sup>', 'cm2-reference.png', 'oppervlakte van een zijvlak van een dobbelsteen'));
      rij.appendChild(maakReferentieCel('1 mm<sup>2</sup>', 'mm2-reference.png', 'oppervlakte van een potloodpunt'));

      const leeg = document.createElement('div');
      leeg.style.flex = '1';
      rij.appendChild(leeg);

      tdInhoud.appendChild(rij);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

})();
