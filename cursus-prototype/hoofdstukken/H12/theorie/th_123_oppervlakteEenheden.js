/* ============================================================
   H12 / th_123_oppervlakteEenheden.js
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
    tdSoort.appendChild(htmlSpan('Eenheden'));

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

    // Intro-tekst over de volledige breedte
    [
      'Voor de oppervlakte gebruiken we de oppervlakte-eenheden.',
      'De standaardeenheid daarbij is 1 vierkante meter.',
      'Omdat sommige oppervlaktes veel groter of veel kleiner zijn dan 1 vierkante meter, gebruiken we extra onderverdelingen.'
    ].forEach(tekst => {
      const span = document.createElement('span');
      span.appendChild(htmlSpan(tekst));
      span.classList.add('theorietekst');
      span.style.display = 'block';
      tdInhoud.appendChild(span);
    });

    voegWitruimteToe(tdInhoud, '0.15cm');

    // Twee kolommen: tabel links | ladder rechts
    {
      const kolommen = document.createElement('div');
      kolommen.style.display = 'flex';
      kolommen.style.alignItems = 'center';
      kolommen.style.gap = '0.5cm';

      // --- Linkerkolom: tabel ---
      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
      linksDiv.style.minWidth = '0';

      maakZichtbareTabel(linksDiv, 8, 3, {
        hoofding: 'boven',
        kolomBreedtes: ['40%', '20%', '40%'],
        matrix: [
          [
            { inhoud: 'Eenheid',               hAlign: 'center' },
            { inhoud: 'Afkorting',             hAlign: 'center' },
            { inhoud: 'Omrekening naar m<sup>2</sup>', hAlign: 'center' }
          ],
          [
            { inhoud: 'vierkante kilometer',   hAlign: 'center' },
            { inhoud: 'km<sup>2</sup>',         hAlign: 'center' },
            { inhoud: '1 km<sup>2</sup> = 1 000 000 m<sup>2</sup>', hAlign: 'center' }
          ],
          [
            { inhoud: 'vierkante hectometer',  hAlign: 'center' },
            { inhoud: 'hm<sup>2</sup>',         hAlign: 'center' },
            { inhoud: '1 hm<sup>2</sup> = 10 000 m<sup>2</sup>', hAlign: 'center' }
          ],
          [
            { inhoud: 'vierkante decameter',   hAlign: 'center' },
            { inhoud: 'dam<sup>2</sup>',        hAlign: 'center' },
            { inhoud: '1 dam<sup>2</sup> = 100 m<sup>2</sup>', hAlign: 'center' }
          ],
          [
            { inhoud: 'vierkante meter',       hAlign: 'center' },
            { inhoud: 'm<sup>2</sup>',          hAlign: 'center' },
            { inhoud: 'basiseenheid',           hAlign: 'center' }
          ],
          [
            { inhoud: 'vierkante decimeter',   hAlign: 'center' },
            { inhoud: 'dm<sup>2</sup>',         hAlign: 'center' },
            { inhoud: '1 dm<sup>2</sup> = 0,01 m<sup>2</sup>', hAlign: 'center' }
          ],
          [
            { inhoud: 'vierkante centimeter',  hAlign: 'center' },
            { inhoud: 'cm<sup>2</sup>',         hAlign: 'center' },
            { inhoud: '1 cm<sup>2</sup> = 0,000 1 m<sup>2</sup>', hAlign: 'center' }
          ],
          [
            { inhoud: 'vierkante millimeter',  hAlign: 'center' },
            { inhoud: 'mm<sup>2</sup>',         hAlign: 'center' },
            { inhoud: '1 mm<sup>2</sup> = 0,000 001 m<sup>2</sup>', hAlign: 'center' }
          ]
        ]
      });

      // --- Rechterkolom: ladder ---
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';

      const img = document.createElement('img');
      img.src = 'afbeeldingen/eenhedenladderOppervlaktePijlen.svg';
      img.style.width = '200px';
      rechtsDiv.appendChild(img);

      kolommen.appendChild(linksDiv);
      kolommen.appendChild(rechtsDiv);
      tdInhoud.appendChild(kolommen);
    }

    voegWitruimteToe(tdInhoud, '0.1cm');

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

})();
