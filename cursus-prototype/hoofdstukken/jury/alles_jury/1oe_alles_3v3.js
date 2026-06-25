/* ============================================================
   alles_jury / oe_alles_3v3.js
   soort: test
   ============================================================ */
(function () {

  const opgaveA = document.createElement('span');
  opgaveA.appendChild(maakOnderstreping(htmlSpan('-3'), 'enkel', '0.1cm', true));
  opgaveA.appendChild(htmlSpan(' '));
  opgaveA.appendChild(maakOnderstreping(htmlSpan('+ 7<i>a</i>'), 'dubbel', '0.18cm', true));
  opgaveA.appendChild(htmlSpan(' '));
  opgaveA.appendChild(maakOnderstreping(htmlSpan('- <i>a</i>'), 'dubbel', '0.18cm', true));
  opgaveA.appendChild(htmlSpan(' '));
  opgaveA.appendChild(maakOnderstreping(htmlSpan('- 4'), 'enkel', '0.1cm', true));

  const antwoordA = document.createElement('span');
  antwoordA.appendChild(htmlSpan('-7 + 6<i>a</i>'));

  const opgaveB = document.createElement('span');
  opgaveB.appendChild(htmlSpan('-4(3 - 2<i>b</i>)'));

  const antwoordB = document.createElement('span');
  antwoordB.appendChild(htmlSpan('-12 + 8<i>b</i>'));

  const inhoud = maakOefening({
    id:'oe_alles_3v3', nummer:'3', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTd('a', opgaveA, '3cm', false, antwoordA);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTd('b', opgaveB, '3cm', false, antwoordB);
  tdLblB.classList.add('kolom-rechts');
  tdLblB.style.position = 'relative';
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  maak2Parabolen(tdLblB, {
    sx: 1.05,
    sy: 0.15,
    br1: 1.0,
    br2: 0.35,
    pos: 0,
    h1: 0.2,
    h2: 0.1,
    variant: 'toggle'
  });

})();
