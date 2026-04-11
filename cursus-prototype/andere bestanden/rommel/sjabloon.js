/* ============================================================
   H10 / P10.4 / oe_002.js — Werk uit
   soort: test | niveaus: geen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_002', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud, 'Werk uit.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const TW = '2.4cm';

  /* Rij 1: a en c */
  const tr1 = document.createElement('tr');

  const tdA = maakOpTd(
    'a', '5 - 8',
    TW, true, '-3'
  );
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);

  const tdC = maakOpTd(
    'c', '3 + 4',
    TW, true, '7'
  );
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2: b en d */
  const tr2 = document.createElement('tr');

  const tdB = maakOpTd(
    'b', '(5<i>x</i> \u2212 3) \u00B7 4',
    TW, true, '20<i>x</i> \u2212 12'
  );
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);

  const tdD = maakOpTd(
    'd', '(20<i>y</i> \u2212 3) \u00B7 (\u22125)',
    TW, true, '\u2212100<i>y</i> + 15'
  );
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

})();