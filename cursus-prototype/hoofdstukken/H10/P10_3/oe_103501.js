/* ============================================================
   H10 / P10_3 / oe_103501.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */

  const inhoud = maakOefening({
    id:'oe_103501', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });
  inhoud.style.position = 'relative';

  function maakFiguurContainer(naam) {
    const div = document.createElement('div');
    div.id = naam;
    div.style.width         = '90%';
    div.style.display       = 'flex';
    div.style.alignItems    = 'center';
    div.style.justifyContent = 'center';
    div.style.boxSizing     = 'border-box'; 
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Noteer de omtrek zo kort mogelijk.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 2, true);
  
  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLbl1A = maakOpTdaz('a', '', false);
  tdLbl1A.classList.add('kolom-links');
  trL1.appendChild(tdLbl1A);
  const tdLbl1B = maakOpTdaz('b', '', false);
  tdLbl1B.classList.add('kolom-rechts');
  trL1.appendChild(tdLbl1B);
  tbody.appendChild(trL1);

  const trL2 = document.createElement('tr');
  const tdLbl2A = document.createElement('td');
  tdLbl2A.style.borderRight = '1.2px solid var(--groen-donker)';

  // Maak containers voor beide figuren
  const fig1 = maakFiguurContainer('afbeelding1');
  const fig2 = maakFiguurContainer('afbeelding2');
  tdLbl2A.appendChild(fig1);
  const tdLbl2B = document.createElement('td');
  tdLbl2B.appendChild(fig2);
  trL2.appendChild(tdLbl2A);
  trL2.appendChild(tdLbl2B);
  tbody.appendChild(trL2);

  // Globale array om alle lagen vanaf layer2 op te slaan
  const svgLagen = [];

  // Functie om een SVG inline te laden en lagen te registreren
  function laadSVG(container, url, breedte) {
    fetch(url)
      .then(r => r.text())
      .then(svgTekst => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgTekst, 'image/svg+xml');
        const svg = svgDoc.querySelector('svg');
        svg.style.width  = breedte;
        svg.style.height = 'auto';

        const lagen = [...svg.querySelectorAll('[id^="layer"]')];
        lagen.forEach(laag => {
          const nummer = parseInt(laag.id.replace('layer',''),10);
          if (nummer >= 2) {
            laag.classList.add('svg-opl-laag');
            laag.style.display = 'none';
            svgLagen.push(laag); // voeg toe aan globale array
          }
        });

        container.innerHTML = '';
        container.appendChild(svg);
      });
  }
  
  // Laad beide SVG’s
  laadSVG(fig1, 'afbeeldingen/oe_103501.svg', '135px');
  laadSVG(fig2, 'afbeeldingen/oe_103501b.svg', '185px');

  // Eén badge listener voor beide figuren
  const badge = inhoud.closest('.oefening')?.querySelector('.badge');
  if (badge) {
    if (!TOGGLE_TOEGESTAAN) return;
    badge.addEventListener('click', () => {
      svgLagen.forEach(laag => {
        laag.style.display = laag.style.display === 'none' ? 'block' : 'none';
      });
    });
  }

  const oe103501a1 = document.createElement('span');
  const oe103501a1_b1 = maakSpanBreedte('0.65cm', '<i>P</i>');
  oe103501a1.appendChild(oe103501a1_b1);
  oe103501a1.appendChild(htmlSpan('= '));
  oe103501a1.appendChild(maakOnderstreping(htmlSpan('4<i>a</i>'), 'enkel', '0.1cm', true));
  oe103501a1.appendChild(htmlSpan(' '));
  oe103501a1.appendChild(maakOnderstreping(htmlSpan('+ 3<i>a</i>'), 'enkel', '0.1cm', true));
  oe103501a1.appendChild(htmlSpan(' '));
  oe103501a1.appendChild(maakOnderstreping(htmlSpan('+ 4<i>a</i>'), 'enkel', '0.1cm', true));
  oe103501a1.appendChild(htmlSpan(' '));
  oe103501a1.appendChild(maakOnderstreping(htmlSpan('+ 3<i>a</i>'), 'enkel', '0.1cm', true));

  const oe103501a2 = document.createElement('span');
  const oe103501a2_b1 = maakSpanBreedte('0.65cm', '');
  oe103501a2.appendChild(oe103501a2_b1);
  oe103501a2.appendChild(htmlSpan('= 14<i>a</i>'));

  /* Oplossingen rij 1 */
  const oplA = [
    oe103501a1,
    oe103501a2,
    ''
  ];

  const oe103501b1 = document.createElement('span');
  const oe103501b1_b1 = maakSpanBreedte('0.65cm', '<i>P</i>');
  oe103501b1.appendChild(oe103501b1_b1);
  oe103501b1.appendChild(htmlSpan('= '));
  oe103501b1.appendChild(maakOnderstreping(htmlSpan('5<i>x</i>'), 'enkel', '0.1cm', true));
  oe103501b1.appendChild(htmlSpan(' '));
  oe103501b1.appendChild(maakOnderstreping(htmlSpan('+ 4<i>x</i>'), 'enkel', '0.1cm', true));
  oe103501b1.appendChild(htmlSpan(' '));
  oe103501b1.appendChild(maakOnderstreping(htmlSpan('+ 1'), 'dubbel', '0.18cm', true));
  oe103501b1.appendChild(htmlSpan(' '));
  oe103501b1.appendChild(maakOnderstreping(htmlSpan('+ 5<i>x</i>'), 'enkel', '0.1cm', true));
  oe103501b1.appendChild(htmlSpan(' '));
  oe103501b1.appendChild(maakOnderstreping(htmlSpan('+ 4<i>x</i>'), 'enkel', '0.1cm', true));
  oe103501b1.appendChild(htmlSpan(' '));
  oe103501b1.appendChild(maakOnderstreping(htmlSpan('+ 1'), 'dubbel', '0.18cm', true));

  const oe103501b2 = document.createElement('span');
  const oe103501b2_b1 = maakSpanBreedte('0.65cm', '');
  oe103501b2.appendChild(oe103501b2_b1);
  oe103501b2.appendChild(htmlSpan('= 18<i>x</i> + 2'));  

  const oplB = [
    oe103501b1,
    oe103501b2,
    ''
  ];
  for (let i=0; i<3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody.appendChild(tr);
  }


})();
