/* ============================================================
   H11 / P11_1 / oe_111003.js
   soort: ontdek
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111002_1 = document.createElement('span');
  oe_111002_1.appendChild(htmlSpan('Voer de vergelijking uit de opgave in en druk op \'Visualiseer\'.'));
  oe_111002_1.appendChild(htmlSpan('<br>Je merkt dat de balans in evenwicht is.'));

  const oe_111002_2 = document.createElement('span');
  oe_111002_2.appendChild(htmlSpan('Klik op de pijltjes bij \'Deel door:\' om in het juiste aantal delen te verdelen. <br>Let op bij negatieve massa\'s!'));

  const oe_111002_4 = document.createElement('span');
  oe_111002_4.appendChild(htmlSpan('Noteer de vergelijking die je rechts op de tweede regel ziet staan.'));

  const oe_111002_5 = document.createElement('span');
  oe_111002_5.appendChild(htmlSpan('Klik op \'herleiden\' om te verdelen.'));

  const oe_111002_6 = document.createElement('span');
  oe_111002_6.appendChild(htmlSpan('Noteer de vergelijking die je rechts \'NA HERLEIDEN\' ziet staan.'));

  const inhoud = maakOefening({
    id:'oe_111003', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Los de vergelijking op met behulp van de <a href="https://maartenarts-svg.github.io/helperapps/vergelijkingenFALSE.html" target="_blank" rel="noopener noreferrer">balans</a>.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  const trLblS = document.createElement('tr');
  const tdLblS = document.createElement('span');
  const subopgave = htmlSpan('In de app stelt de onbekende de massa van een blokje voor. Deze massa kan positief (blauw) of negatief zijn (oranje).<br>Jij moet de massa van één blokje berekenen.');
  tdLblS.appendChild(subopgave);
  tdLblS.classList.add('kolom-links');
  trLblS.appendChild(tdLblS);
  tbody.appendChild(trLblS);

  voegWitruimteToe(tbody,'0.3cm');

  /* Stap 1 */
  const trLblA = document.createElement('tr');
  const tdLblA = maakStap('1', oe_111002_1);
  tdLblA.querySelector('.rijstap').style.alignItems = 'flex-start';
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  /* Stap 2 */
  const trLblB = document.createElement('tr');
  const tdLblB = maakStap('2', oe_111002_2);
  tdLblB.querySelector('.rijstap').style.alignItems = 'flex-start';
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  /* Stap 3 */
  const trLblD = document.createElement('tr');
  const tdLblD = maakStap('3', oe_111002_4, false);
  tdLblD.querySelector('.rijstap').style.alignItems = 'flex-start';
  tdLblD.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblD.classList.add('kolom-links');
  trLblD.appendChild(tdLblD);
  tbody.appendChild(trLblD);

  /* Stap 4 */
  const trLblE = document.createElement('tr');
  const tdLblE = maakStap('4', oe_111002_5, false);
  tdLblE.querySelector('.rijstap').style.alignItems = 'flex-start';
  tdLblE.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblE.classList.add('kolom-links');
  trLblE.appendChild(tdLblE);
  tbody.appendChild(trLblE);

  /* Stap 5 */
  const trLblF = document.createElement('tr');
  const tdLblF = maakStap('5', oe_111002_6, false);
  tdLblF.querySelector('.rijstap').style.alignItems = 'flex-start';
  tdLblF.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblF.classList.add('kolom-links');
  trLblF.appendChild(tdLblF);
  tbody.appendChild(trLblF);

  voegWitruimteToe(tbody,'0.5cm');

  /* ---- Span-variabelen ---- */
  const oe_111002a_1 = document.createElement('span');
  oe_111002a_1.appendChild(htmlSpan('2<i>x</i> = 8'));

  const oe_111002a_2 = document.createElement('span');
  oe_111002a_2.appendChild(htmlSpan('2<i>x</i> <span class="markeer-lila">: 2</span> = 8 <span class="markeer-lila">: 2</span>'));

  const oe_111002a_3 = document.createElement('span');
  oe_111002a_3.appendChild(htmlSpan('<i>x</i> = 4'));

  const oe_111002a_4 = document.createElement('span');
  oe_111002a_4.appendChild(htmlSpan('-3<i>x</i> = -15'));

  const oe_111002a_5 = document.createElement('span');
  oe_111002a_5.appendChild(htmlSpan('-3<i>x</i> <span class="markeer-lila">: (-3)</span> = -15 <span class="markeer-lila">: (-3)</span>'));

  const oe_111002a_6 = document.createElement('span');
  oe_111002a_6.appendChild(htmlSpan('<i>x</i> = 5'));

  const oe_111002a_7 = document.createElement('span');
  oe_111002a_7.appendChild(htmlSpan('15 = -5<i>x</i>'));

  const oe_111002a_8 = document.createElement('span');
  oe_111002a_8.appendChild(htmlSpan('15 <span class="markeer-lila">: (-5)</span> = -5<i>x</i> <span class="markeer-lila">: (-5)</span>'));

  const oe_111002a_9 = document.createElement('span');
  oe_111002a_9.appendChild(htmlSpan('-3 = <i>x</i>'));

  const oe_111002a_10 = document.createElement('span');
  oe_111002a_10.appendChild(htmlSpan('14 = 7<i>x</i>'));

  const oe_111002a_11 = document.createElement('span');
  oe_111002a_11.appendChild(htmlSpan('14 <span class="markeer-lila">: 7</span> = 7<i>x</i> <span class="markeer-lila">: 7</span>'));

  const oe_111002a_12 = document.createElement('span');
  oe_111002a_12.appendChild(htmlSpan('2 = <i>x</i>'));

  const trhulp = document.createElement('tr');
  const tdhulp = document.createElement('td');
  trhulp.appendChild(tdhulp);
  tbody.appendChild(trhulp);

  const {tbody: tbody2} = maakOefTabel(tdhulp, 2, true);

  {
    /* Rij 1: labels */
    const trL1 = document.createElement('tr');
    const tdLblA = maakOpTdaz('a', oe_111002a_1, false);
    tdLblA.classList.add('kolom-links');
    trL1.appendChild(tdLblA);
    const tdLblC = maakOpTdaz('c', oe_111002a_7, false);
    tdLblC.classList.add('kolom-rechts');
    trL1.appendChild(tdLblC);
    tbody2.appendChild(trL1);

    /* Oplossingen rij 1 */
    const oplA = [
      oe_111002a_2,
      oe_111002a_3
    ];
    const oplC = [
      oe_111002a_8,
      oe_111002a_9
    ];
    for (let i=0; i<2; i++) {
      const tr = document.createElement('tr');
      const tdA = maakSlTd(oplA[i], false);
      tdA.classList.add('kolom-links');
      tr.appendChild(tdA);
      const tdC = maakSlTd(oplC[i], false);
      tdC.classList.add('kolom-rechts');
      tr.appendChild(tdC);
      tbody2.appendChild(tr);
    }

    /* Rij 2: labels */
    const trL2 = document.createElement('tr');
    const tdLblB = maakOpTdaz('b', oe_111002a_4, false);
    tdLblB.classList.add('kolom-links');
    trL2.appendChild(tdLblB);
    const tdLblD = maakOpTdaz('d', oe_111002a_10, false);
    tdLblD.classList.add('kolom-rechts');
    trL2.appendChild(tdLblD);
    tbody2.appendChild(trL2);

    /* Oplossingen rij 2 */
    const oplB = [
      oe_111002a_5,
      oe_111002a_6
    ];
    const oplD = [
      oe_111002a_11,
      oe_111002a_12
    ];
    for (let i=0; i<2; i++) {
      const tr = document.createElement('tr');
      const tdB = maakSlTd(oplB[i], false);
      tdB.classList.add('kolom-links');
      tr.appendChild(tdB);
      const tdD = maakSlTd(oplD[i], false);
      tdD.classList.add('kolom-rechts');
      tr.appendChild(tdD);
      tbody2.appendChild(tr);
    }
  }



})();
