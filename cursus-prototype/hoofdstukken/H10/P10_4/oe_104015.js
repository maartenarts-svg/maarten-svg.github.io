/* ============================================================
   H10 / P10_4 / oe_104015.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_104015_1 = document.createElement('span');
  oe_104015_1.appendChild(htmlSpan('= 3(5<i>a</i> - 2)'));

  const oe_104015_2 = document.createElement('span');
  oe_104015_2.appendChild(htmlSpan('= 15<i>a</i> - 6'));

  const oe_104015_4 = document.createElement('span');
  oe_104015_4.appendChild(htmlSpan('= 12(5<i>z</i> + 1)'));

  const oe_104015_5 = document.createElement('span');
  oe_104015_5.appendChild(htmlSpan('= 60<i>z</i> + 12'));

  const inhoud = maakOefening({
    id:'oe_104015', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });
  inhoud.style.position = 'relative';

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.innerHTML = 'Noteer de oppervlakte van elke rechthoek zo kort mogelijk.';
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 2, true);

  /* ---- Rij 1 ---- */

  /* Rij 1: opgaven */
  {
    const tr = document.createElement('tr');
    const tdLblA = maakOpTdaz('a', null, false);
    tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
    tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblA.classList.add('kolom-links');
    tr.appendChild(tdLblA);
    const tdLblB = maakOpTdaz('b', null, false);
    tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
    tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblB.classList.add('kolom-rechts');
    tr.appendChild(tdLblB);
    tbody.appendChild(tr);
  }

  /* Rij 1: afbeeldingen */
  {
    const tr = document.createElement('tr');
    const tdFig1L = document.createElement('td');
    tdFig1L.style.borderRight = '1.2px solid var(--groen-donker)';
    tdFig1L.style.textAlign = 'center';
    (function() {
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_104015.svg'; /* ← bestandsnaam afbeelding1 */
      _img.style.width     = '40%'; /* ← breedte aanpassen indien nodig */
      _img.style.height    = 'auto';
      _img.style.objectFit = 'contain';
      tdFig1L.appendChild(_img);
    })();
    tr.appendChild(tdFig1L);
    const tdFig1R = document.createElement('td');
    tdFig1R.style.textAlign = 'center';
    (function() {
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/oe_104015b.svg'; /* ← bestandsnaam afbeelding2 */
      _img.style.width     = '62%'; /* ← breedte aanpassen indien nodig */
      _img.style.height    = 'auto';
      _img.style.objectFit = 'contain';
      tdFig1R.appendChild(_img);
    })();
    tr.appendChild(tdFig1R);
    tbody.appendChild(tr);
  }

  /* Rij 1: schrijflijnen */
  const tr1 = document.createElement('tr');
  const tdA1 = maakSlTd(oe_104015_1, false);
  tdA1.classList.add('kolom-links');
  tdA1.style.position = 'relative';
  tr1.appendChild(tdA1);
  const tdB1 = maakSlTd(oe_104015_4, false);
  tdB1.classList.add('kolom-rechts');
  tdB1.style.position = 'relative';
  tr1.appendChild(tdB1);
  tbody.appendChild(tr1);

  const tr2 = document.createElement('tr');
  const tdA2 = maakSlTd(oe_104015_2, false);
  tdA2.classList.add('kolom-links');
  tr2.appendChild(tdA2);
  const tdB2 = maakSlTd(oe_104015_5, false);
  tdB2.classList.add('kolom-rechts');
  tr2.appendChild(tdB2);
  tbody.appendChild(tr2);  

  //opgave a
  maak2Parabolen(tdA1, {
    sx: 1.05,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.45,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });

  //opgave b
  maak2Parabolen(tdB1, {
    sx: 1.35,           // ← x-coördinaat startpunt links in cm
    sy: 0.25,            // ← y-coördinaat startpunt links in cm
    br1: 1.15,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 0.5,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.1,          // ← hoogte van de kleine boog in cm
    variant: 'toggle'  // ← 'zwart', 'vast' of 'toggle'
  });  

})();
