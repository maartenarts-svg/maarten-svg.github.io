/* ============================================================
   H10 / P10_3 / oe_103502.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103502', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Lettervormen vermenigvuldigen', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);


  /* Opgave a, oefening met subopgaven op basis van maakOpTd bij de subopgaven -> schrijflijnen ernaast*/
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', 'Bereken zoals de voorbeelden.', false);
  /* zet bovenaan */
  tdLblA.querySelector('.rij').style.alignItems = 'middle';
  /* geef extra ruimte boven */
  tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td'); //deze td is nodig om straks de hulptabel in te zetten
    trhulp.appendChild(tdhulp);
    tbody.appendChild(trhulp);

      const tabelhulp = document.createElement('table'); //hulptabel om de subopgaven goed te zetten, het blok van de subopgaven komt in de tweede kolom van deze tabel
      tabelhulp.style.width = '100%';
      tabelhulp.style.borderCollapse = 'collapse';
        const colg01=document.createElement('colgroup');
        const col1 = document.createElement('col');
        col1.style.width='4.19%';
        const col2 = document.createElement('col');
        col2.style.width='95.81%';
      colg01.appendChild(col1);
      colg01.appendChild(col2);
      tabelhulp.appendChild(colg01);
      const tbodyhulp=document.createElement('tbody');
      tabelhulp.appendChild(tbodyhulp);
      tdhulp.appendChild(tabelhulp);

        //tweede tabel voor de subopgaven zelf
        const trtabel = document.createElement('tr');
        const tdtabel1 = document.createElement('td');
        trtabel.appendChild(tdtabel1);
        const tdtabel = document.createElement('td'); //deze td dient als plaats waar nu de subopgaven komen
        const {tbody: tbody2} = maakOefTabel(tdtabel, 2, true);
        const TW = '1.5cm';

        /* Rij 1 van de subopgaven*/
        const trL1tab = document.createElement('tr');
        const dLblAtab = maakOpTd('1', '1 + 1', TW, false, '2');
        dLblAtab.querySelector('.opl').classList.add('zichtbaar', 'opl-vast'); // want keuze voor zichtbare oplossing
        dLblAtab.classList.add('kolom-links');
        trL1tab.appendChild(dLblAtab);
        const tdLblCtab = maakOpTd('3', '5 + 8', TW, false, '13');
        tdLblCtab.classList.add('kolom-rechts');
        trL1tab.appendChild(tdLblCtab);
        tbody2.appendChild(trL1tab);

        /* Rij 2 */
        const trL2tab = document.createElement('tr');
        const tdLblBtab = maakOpTd('2', '9 + 7', TW, false, '16');
        tdLblBtab.querySelector('.opl').classList.add('zichtbaar', 'opl-vast'); // want keuze voor zichtbare oplossing, maar is al ok in code
        tdLblBtab.classList.add('kolom-links');
        trL2tab.appendChild(tdLblBtab);
        const tdLblDtab = maakOpTd('4', '13 + 4', TW, false, '17');
        tdLblDtab.classList.add('kolom-rechts');
        trL2tab.appendChild(tdLblDtab);
        tbody2.appendChild(trL2tab);
        
        trtabel.appendChild(tdtabel);

      tbodyhulp.appendChild(trtabel);

 

  /* Opgave b zonder subopgaven*/
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', 'Dit is de opgave.', false);
  /* zet bovenaan */
  tdLblB.querySelector('.rij').style.alignItems = 'middle';
  /* geef extra ruimte boven */
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd('eerste oplossingsregel', false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd('tweede oplossingsregel', false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);

  /* Opgave c, oefening met subopgaven op basis van maakOpTdaz en maakSlTd bij de subopgaven -> schrijflijnen eronder*/
  const trLblC = document.createElement('tr'); 
  const tdLblC = maakOpTdaz('c', 'Bereken.', false);
  /* zet bovenaan */
  tdLblC.querySelector('.rij').style.alignItems = 'middle';
  /* geef extra ruimte boven */
  tdLblC.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

    const trhulpC = document.createElement('tr');
    const tdhulpC = document.createElement('td'); //deze td is nodig om straks de hulptabel in te zetten
    trhulpC.appendChild(tdhulpC);
    tbody.appendChild(trhulpC);

      const tabelhulpC = document.createElement('table'); //hulptabel om de subopgaven goed te zetten, het blok van de subopgaven komt in de tweede kolom van deze tabel
      tabelhulpC.style.width = '100%';
      tabelhulpC.style.borderCollapse = 'collapse';
        const colg01C=document.createElement('colgroup');
        const col1C = document.createElement('col');
        col1C.style.width='4.19%'; 
        const col2C = document.createElement('col');
        col2C.style.width='95.81%';
      colg01C.appendChild(col1C);
      colg01C.appendChild(col2C);
      tabelhulpC.appendChild(colg01C);
      const tbodyhulpC=document.createElement('tbody');
      tabelhulpC.appendChild(tbodyhulpC);
      tdhulpC.appendChild(tabelhulpC);

        //tweede tabel voor de subopgaven zelf
        const trtabelC = document.createElement('tr');
        const tdtabel1C = document.createElement('td');
        trtabelC.appendChild(tdtabel1C);
        const tdtabelC = document.createElement('td'); //deze td dient als plaats waar nu de subopgaven komen
        const {tbody: tbody2C} = maakOefTabel(tdtabelC, 2, true);
        const TWC = '1.5cm';

        /* Rij 1 labels*/
        const trL1tabC = document.createElement('tr');
        const dLblAtabC = maakOpTdaz('1', '5 - 3', false);
        dLblAtabC.classList.add('kolom-links');
        trL1tabC.appendChild(dLblAtabC);
        const tdLblCtabC = maakOpTdaz('3', '7 - 6', false);
        tdLblCtabC.classList.add('kolom-rechts');
        trL1tabC.appendChild(tdLblCtabC);
        tbody2C.appendChild(trL1tabC);

        /* Oplossingen rij 1 */
        const oplA = [
          '= 2',
          '= 1 + 1'
        ];
        const oplC = [
          '= 1',
          '= 0 + 1'
        ];
        for (let i=0; i<2; i++) {
          const tr = document.createElement('tr');
          const tdA = maakSlTd(oplA[i], false);
          tdA.classList.add('kolom-links');
          tr.appendChild(tdA);
          const tdC = maakSlTd(oplC[i], false);
          tdC.classList.add('kolom-rechts');
          tr.appendChild(tdC);
          tbody2C.appendChild(tr);
        }

        /* Rij 2 labels*/
        const trL2tabC = document.createElement('tr');
        const tdLblBtabC = maakOpTdaz('2', '12 - 7', false);
        tdLblBtabC.classList.add('kolom-links');
        trL2tabC.appendChild(tdLblBtabC);
        const tdLblDtabC = maakOpTdaz('4', '20 - 11', false);
        tdLblDtabC.classList.add('kolom-rechts');
        trL2tabC.appendChild(tdLblDtabC);
        tbody2C.appendChild(trL2tabC);

        /* Oplossingen rij 2 */
        const oplB = [
          '= 5',
          '= 1 + 4'
        ];
        const oplD = [
          '= 9',
          '= 1 + 8'
        ];
        for (let i=0; i<2; i++) {
          const tr = document.createElement('tr');
          const tdA = maakSlTd(oplB[i], false);
          tdA.classList.add('kolom-links');
          tr.appendChild(tdA);
          const tdC = maakSlTd(oplD[i], false);
          tdC.classList.add('kolom-rechts');
          tr.appendChild(tdC);
          tbody2C.appendChild(tr);
        }        




        trtabelC.appendChild(tdtabelC);

      tbodyhulpC.appendChild(trtabelC);



})();
