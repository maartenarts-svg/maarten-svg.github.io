/* ============================================================
   H12 / H12_W35WIMC2 / oe_6.js
   soort: test
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_6', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Noteer de formule.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 4, false);

  /* Rij 1: figuren */
  const figuren = [
    'th_124_001_vierkantZonder.svg',
    'th_124_001_rechthoekZonder.svg',
    'th_125_001_parallellogramZonder.svg',
    'th_124_001_ruitZonder.svg',
  ];

  const tr1 = document.createElement('tr');
  figuren.forEach(bestand => {
    const td = document.createElement('td');
    td.style.textAlign = 'center';
    td.style.padding = '0.1cm';
    const img = document.createElement('img');
    img.src = 'afbeeldingen/' + bestand;
    img.style.maxWidth = '90%';
    img.style.height = 'auto';
    td.appendChild(img);
    tr1.appendChild(td);
  });
  tbody.appendChild(tr1);

  /* Rij 2: A = / P = + schrijflijn */
  const TW = '0.3cm';

  const tr2 = document.createElement('tr');
  [
    maakOpTd('', '<i>A</i>', TW, false, '<i>z</i><sup>2</sup>'),
    maakOpTd('', '<i>P</i>', TW, false, '2(<i>b</i> + <i>h</i>)'),
    maakOpTd('', '<i>A</i>', TW, false, '<i>bh</i>'),
    maakOpTd('', '<i>P</i>', TW, false, '4<i>z</i>'),
  ].forEach(td => {
    td.querySelector('.lbl').remove();
    td.querySelector('.sl').style.flex = '0 0 2cm';
    tr2.appendChild(td);
  });
  tbody.appendChild(tr2);

})();
