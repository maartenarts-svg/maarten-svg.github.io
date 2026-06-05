/* ============================================================
   H12 / th_122_lengteEenheden.js
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
    tdKort.appendChild(htmlSpan('de lengte-eenheden'));

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

    // Twee kolommen: tekst + tabel links | ladder rechts
    {
      const kolommen = document.createElement('div');
      kolommen.style.display = 'flex';
      kolommen.style.alignItems = 'center';
      kolommen.style.gap = '0.5cm';

      // --- Linkerkolom: intro-tekst + tabel ---
      const linksDiv = document.createElement('div');
      linksDiv.style.flex = '1';
      linksDiv.style.minWidth = '0';

      [
        'De omtrek is een afstand. Daarom gebruiken we voor omtrek de lengte-eenheden.',
        'De standaardeenheid daarbij is 1 meter.',
        'Omdat sommige afstanden veel groter of veel kleiner zijn dan 1 meter, gebruiken we extra onderverdelingen.'
      ].forEach(tekst => {
        const span = document.createElement('span');
        span.appendChild(htmlSpan(tekst));
        span.classList.add('theorietekst');
        span.style.display = 'block';
        linksDiv.appendChild(span);
      });

      maakSpanMetRuimte(linksDiv, '0.15cm');

      maakZichtbareTabel(linksDiv, 8, 3, {
        hoofding: 'boven',
        kolomBreedtes: ['40%', '20%', '40%'],
        matrix: [
          [
            { inhoud: 'Eenheid',              hAlign: 'center' },
            { inhoud: 'Afkorting',            hAlign: 'center' },
            { inhoud: 'Naar meter', hAlign: 'center' }
          ],
          [
            { inhoud: 'kilometer',  hAlign: 'center' },
            { inhoud: 'km',         hAlign: 'center' },
            { inhoud: '1 km = 1 000 m', hAlign: 'center' }
          ],
          [
            { inhoud: 'hectometer', hAlign: 'center' },
            { inhoud: 'hm',         hAlign: 'center' },
            { inhoud: '1 hm = 100 m', hAlign: 'center' }
          ],
          [
            { inhoud: 'decameter',  hAlign: 'center' },
            { inhoud: 'dam',        hAlign: 'center' },
            { inhoud: '1 dam = 10 m', hAlign: 'center' }
          ],
          [
            { inhoud: 'meter',      hAlign: 'center' },
            { inhoud: 'm',          hAlign: 'center' },
            { inhoud: 'basiseenheid', hAlign: 'center' }
          ],
          [
            { inhoud: 'decimeter',  hAlign: 'center' },
            { inhoud: 'dm',         hAlign: 'center' },
            { inhoud: '1 dm = 0,1 m', hAlign: 'center' }
          ],
          [
            { inhoud: 'centimeter', hAlign: 'center' },
            { inhoud: 'cm',         hAlign: 'center' },
            { inhoud: '1 cm = 0,01 m', hAlign: 'center' }
          ],
          [
            { inhoud: 'millimeter', hAlign: 'center' },
            { inhoud: 'mm',         hAlign: 'center' },
            { inhoud: '1 mm = 0,001 m', hAlign: 'center' }
          ]
        ]
      });

      // --- Rechterkolom: ladder ---
      const rechtsDiv = document.createElement('div');
      rechtsDiv.style.flexShrink = '0';

      const img = document.createElement('img');
      img.src = 'afbeeldingen/eenhedenladderLengtePijlen.svg';
      img.style.width = '200px';
      rechtsDiv.appendChild(img);

      kolommen.appendChild(linksDiv);
      kolommen.appendChild(rechtsDiv);
      tdInhoud.appendChild(kolommen);
    }

    // --- Samenstellen ---
    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

})();
