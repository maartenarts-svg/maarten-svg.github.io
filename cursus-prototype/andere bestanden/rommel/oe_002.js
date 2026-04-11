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
    'a', '\u2212 2(\u22126 + 3<i>a</i>)',
    TW, true, '12 \u2212 6<i>a</i>'
  );
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);

  // c: breuk in opgave en oplossing
  const tekstC = document.createElement('span');
  tekstC.appendChild(maakBreuk('2','3','opgave'));
  tekstC.appendChild(document.createTextNode('(1 \u2212 '));
  const iTC = document.createElement('i'); iTC.textContent='t'; tekstC.appendChild(iTC);
  tekstC.appendChild(document.createTextNode(')'));

  const oplC = document.createElement('span');
  oplC.style.cssText='font-family:var(--font-oplossing);color:var(--blauw-oplossing);';
  oplC.appendChild(maakBreuk('2','3','oplossing'));
  oplC.appendChild(document.createTextNode(' \u2212 '));
  oplC.appendChild(maakBreuk('2','3','oplossing'));
  const iOC=document.createElement('i');
  iOC.style.cssText='font-family:var(--font-oplossing);color:var(--blauw-oplossing);';
  iOC.textContent='t'; oplC.appendChild(iOC);

  const tdC = maakOpTd('c', tekstC, TW, true, oplC);
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2: b en d */
  const tr2 = document.createElement('tr');

  const tdB = maakOpTd(
    'b', '(5<i>x</i> \u2212 3) \u00B7 4',
    TW, true, '20<i>x</i> \u200A \u2212 12'
  );
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);

  const tdD = maakOpTd(
    'd', '(20<i>y</i> \u2212 3) \u00B7 (\u22125)',
    TW, true, '\u2212 100<i>y</i> \u200A + 15'
  );
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

})();