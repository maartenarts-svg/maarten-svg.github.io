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

  voegWitruimteToe(tbody);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', 'Bereken zoals de voorbeelden.', false);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

    const trhulp = document.createElement('tr');
    const tdhulp = document.createElement('td');
    trhulp.appendChild(tdhulp);
    tbody.appendChild(trhulp);

      const tabelhulp = document.createElement('table');
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

        //tweede tabel
        const trtabel = document.createElement('tr');
        const tdtabel1 = document.createElement('td');
        trtabel.appendChild(tdtabel1);
        const tdtabel = document.createElement('td');
        const {tbody: tbody2} = maakOefTabel(tdtabel, 2, true);
        const TW = '1.5cm';

        /* Rij 1 */
        const oe103K03VA11 = document.createElement('span');
        const oe103K03VA11_m1 = maakMarkering(htmlSpan('<i>a</i><sup>2</sup>'), '#bbdefb', false);
        oe103K03VA11.appendChild(oe103K03VA11_m1);
        oe103K03VA11.appendChild(htmlSpan(' · '));
        const oe103K03VA11_m3 = maakMarkering(htmlSpan('<i>a</i><sup>3</sup>'), '#fff9c4', false);
        oe103K03VA11.appendChild(oe103K03VA11_m3);

        const oe103K03VA12 = document.createElement('span');
        const oe103K03VA12_m1 = maakMarkering(htmlSpan('<i>a</i> · <i>a</i>'), '#bbdefb', false);
        oe103K03VA12.appendChild(oe103K03VA12_m1);
        oe103K03VA12.appendChild(htmlSpan(' · '));
        const oe103K03VA12_m3 = maakMarkering(htmlSpan('<i>a</i> · <i>a</i> · <i>a</i>'), '#fff9c4', false);
        oe103K03VA12.appendChild(oe103K03VA12_m3);
        oe103K03VA12.appendChild(htmlSpan(' = <i>a</i><sup>5</sup>'));  
        
        const oe103K03VA31 = document.createElement('span');
        const oe103K03VA31_m1 = maakMarkering(htmlSpan('<i>b</i><sup>2</sup>'), '#bbdefb', true);
        oe103K03VA31.appendChild(oe103K03VA31_m1);
        oe103K03VA31.appendChild(htmlSpan(' · '));
        const oe103K03VA31_m3 = maakMarkering(htmlSpan('<i>b</i><sup>4</sup>'), '#fff9c4', true);
        oe103K03VA31.appendChild(oe103K03VA31_m3);       

        const oe103K03VA32 = document.createElement('span');
        const oe103K03VA32_m1 = maakMarkering(htmlSpan('<i>b</i> · <i>b</i>'), '#bbdefb', true);
        oe103K03VA32.appendChild(oe103K03VA32_m1);
        oe103K03VA32.appendChild(htmlSpan(' · '));
        const oe103K03VA32_m3 = maakMarkering(htmlSpan('<i>b</i> · <i>b</i> · <i>b</i> · <i>b</i>'), '#fff9c4', true);
        oe103K03VA32.appendChild(oe103K03VA32_m3);
        oe103K03VA32.appendChild(htmlSpan(' = <i>b</i><sup>6</sup>'));        

        const trL1tab = document.createElement('tr');
        const dLblAtab = maakOpTd('1', oe103K03VA11, TW, false, oe103K03VA12);
        dLblAtab.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        dLblAtab.classList.add('kolom-links');
        trL1tab.appendChild(dLblAtab);
        const tdLblCtab = maakOpTd('3', oe103K03VA31, TW, false, oe103K03VA32);
        tdLblCtab.classList.add('kolom-rechts');
        trL1tab.appendChild(tdLblCtab);
        tbody2.appendChild(trL1tab);

        /* Rij 2 */
        const oe103K03VA21 = document.createElement('span');
        const oe103K03VA21_m1 = maakMarkering(htmlSpan('<i>d</i><sup>3</sup>'), '#bbdefb', false);
        oe103K03VA21.appendChild(oe103K03VA21_m1);
        oe103K03VA21.appendChild(htmlSpan(' · '));
        const oe103K03VA21_m3 = maakMarkering(htmlSpan('<i>d</i>'), '#fff9c4', false);
        oe103K03VA21.appendChild(oe103K03VA21_m3); 

        const oe103K03VA22 = document.createElement('span');
        const oe103K03VA22_m1 = maakMarkering(htmlSpan('<i>d</i> · <i>d</i> · <i>d</i>'), '#bbdefb', false);
        oe103K03VA22.appendChild(oe103K03VA22_m1);
        oe103K03VA22.appendChild(htmlSpan(' · '));
        const oe103K03VA22_m3 = maakMarkering(htmlSpan('<i>d</i>'), '#fff9c4', false);
        oe103K03VA22.appendChild(oe103K03VA22_m3);
        oe103K03VA22.appendChild(htmlSpan(' = <i>d</i><sup>4</sup>'));

        const oe103K03VA41 = document.createElement('span');
        const oe103K03VA41_m1 = maakMarkering(htmlSpan('<i>y</i>'), '#bbdefb', true);
        oe103K03VA41.appendChild(oe103K03VA41_m1);
        oe103K03VA41.appendChild(htmlSpan(' · '));
        const oe103K03VA41_m3 = maakMarkering(htmlSpan('<i>y</i><sup>2</sup>'), '#fff9c4', true);
        oe103K03VA41.appendChild(oe103K03VA41_m3);  
        
        const oe103K03VA42 = document.createElement('span');
        const oe103K03VA42_m1 = maakMarkering(htmlSpan('<i>y</i>'), '#bbdefb', true);
        oe103K03VA42.appendChild(oe103K03VA42_m1);
        oe103K03VA42.appendChild(htmlSpan(' · '));
        const oe103K03VA42_m3 = maakMarkering(htmlSpan('<i>y</i> · <i>y</i>'), '#fff9c4', true);
        oe103K03VA42.appendChild(oe103K03VA42_m3);
        oe103K03VA42.appendChild(htmlSpan(' = <i>y</i><sup>3</sup>'));        

        const trL2tab = document.createElement('tr');
        const tdLblBtab = maakOpTd('2', oe103K03VA21, TW, false, oe103K03VA22);
        tdLblBtab.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tdLblBtab.classList.add('kolom-links');
        trL2tab.appendChild(tdLblBtab);
        const tdLblDtab = maakOpTd('4', oe103K03VA41, TW, false, oe103K03VA42);
        tdLblDtab.classList.add('kolom-rechts');
        trL2tab.appendChild(tdLblDtab);
        tbody2.appendChild(trL2tab);
        
        trtabel.appendChild(tdtabel);

      tbodyhulp.appendChild(trtabel);

  voegWitruimteToe(tbody);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', 'Bekijk de opgaven hierboven zorgvuldig. <br> Verklaar waarom <i>x</i><sup>4</sup> · <i>x</i><sup>5</sup> = <i>x</i><sup>9</sup>.', false);
  /* zet bovenaan */
  tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
  /* geef extra ruimte boven */
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const oe103K03B02 = htmlSpan('De lettervorm <i>x</i><sup>4</sup> bestaat uit 4 factoren gelijk aan <i>x</i>, want <i>x</i><sup>4</sup> = <i>x</i> · <i>x</i> · <i>x</i> · <i>x</i>.')
  const oe103K03B03 = htmlSpan('De lettervorm <i>x</i><sup>5</sup> bestaat uit 9 factoren gelijk aan <i>x</i>, want <i>x</i><sup>5</sup> = <i>x</i> · <i>x</i> · <i>x</i> · <i>x</i> · <i>x</i>.');
  const oe103K03B04 = htmlSpan('Samen zijn dat 9 factoren <i>x</i>, dus <i>x</i><sup>4</sup> · <i>x</i><sup>5</sup> = <i>x</i><sup>9</sup>.');
  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd(oe103K03B02, false);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd(oe103K03B03, false);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
  const tdb2 = maakSlTd(oe103K03B04, false);
  tdb2.classList.add('kolom-links');
  trb2.appendChild(tdb2);
  tbody.appendChild(trb2);
  const trb3 = document.createElement('tr');
  const tdb3 = maakSlTd('', false);
  tdb3.classList.add('kolom-links');
  trb3.appendChild(tdb3);
  tbody.appendChild(trb3);
  const trb4 = document.createElement('tr');
  const tdb4 = maakSlTd('', false);
  tdb4.classList.add('kolom-links');
  trb4.appendChild(tdb4);
  tbody.appendChild(trb4);

  voegWitruimteToe(tbody);

  /* Opgave c */
  const trLblC = document.createElement('tr');
  const oe103502C02 = document.createElement('span');
  const oe103502C0201 = htmlSpan('Bereken met wat je ontdekt hebt in ');
  oe103502C02.appendChild(oe103502C0201);
  const oe103502C0202 = htmlSpan('b|');
  oe103502C0202.style.fontWeight = 'bold';
  oe103502C0202.style.color = 'var(--groen-donker)';
  oe103502C02.appendChild(oe103502C0202);
  const oe103502C0203 = htmlSpan('.');
  oe103502C02.appendChild(oe103502C0203);

  
  const tdLblC = maakOpTdaz('c', oe103502C02, false);
  tdLblC.classList.add('kolom-links');
  trLblC.appendChild(tdLblC);
  tbody.appendChild(trLblC);

    const trhulpC = document.createElement('tr');
    const tdhulpC = document.createElement('td');
    trhulpC.appendChild(tdhulpC);
    tbody.appendChild(trhulpC);

      const tabelhulpC = document.createElement('table');
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

        //tweede tabel
        const trtabelC = document.createElement('tr');
        const tdtabel1C = document.createElement('td');
        trtabelC.appendChild(tdtabel1C);
        const tdtabelC = document.createElement('td');
        const {tbody: tbody2C} = maakOefTabel(tdtabelC, 2, true);
        const TWC = '1.5cm';

        /* Rij 1 */
        const oe103K03A01C = htmlSpan('<i>z</i><sup>12</sup> (7 en 5 factoren <i>z</i>)');
        const oe103K03C01C = htmlSpan('<i>s</i><sup>13</sup> (4 en 9 factoren <i>s</i>)');
        const trL1tabC = document.createElement('tr');
        const dLblAtabC = maakOpTd('1', '<i>z</i><sup>7</sup> · <i>z</i><sup>5</sup>', TWC, false, oe103K03A01C);
        dLblAtabC.classList.add('kolom-links');
        trL1tabC.appendChild(dLblAtabC);
        const tdLblCtabC = maakOpTd('3', '<i>s</i><sup>4</sup> · <i>s</i><sup>9</sup>', TWC, false, oe103K03C01C);
        tdLblCtabC.classList.add('kolom-rechts');
        trL1tabC.appendChild(tdLblCtabC);
        tbody2C.appendChild(trL1tabC);

        /* Rij 2 */
        const oe103K03B01C = htmlSpan('<i>k</i><sup>21</sup> (20 en 1 factoren <i>k</i>)');
        const oe103K03D01C = htmlSpan('<i>t</i><sup>27</sup> (11 en 16 factoren <i>t</i>)');
        const trL2tabC = document.createElement('tr');
        const tdLblBtabC = maakOpTd('2', '<i>k</i><sup>20</sup> · <i>k</i>', TWC, false, oe103K03B01C);
        tdLblBtabC.classList.add('kolom-links');
        trL2tabC.appendChild(tdLblBtabC);
        const tdLblDtabC = maakOpTd('4', '<i>t</i><sup>11</sup> · <i>t</i><sup>16</sup>', TWC, false, oe103K03D01C);
        tdLblDtabC.classList.add('kolom-rechts');
        trL2tabC.appendChild(tdLblDtabC);
        tbody2C.appendChild(trL2tabC);
        
        trtabelC.appendChild(tdtabelC);

      tbodyhulpC.appendChild(trtabelC);



})();
