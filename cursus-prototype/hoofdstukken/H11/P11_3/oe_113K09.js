/* ============================================================
   H11 / P11_3 / oe_113K09.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';
  const breedte2 = '7cm';
  
  const oe_113K05_1 = document.createElement('span');
  oe_113K05_1.appendChild(htmlSpan('Bereken hoe oud Diophantus werd.'));

  const oe_113K05_2 = document.createElement('span');
  const oe_113K05_2_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113K05_2.appendChild(oe_113K05_2_b1);
  const oe_113K05_2_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113K05_2.appendChild(oe_113K05_2_b2);
  const oe_113K05_2_b3 = maakSpanBreedte(breedte2, 'leeftijd Diophantus: <i>x</i>');
  oe_113K05_2.appendChild(oe_113K05_2_b3);

  const oe_113K06_10 = document.createElement('span');
  const oe_113K06_10_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113K06_10.appendChild(oe_113K06_10_b1);
  const oe_113K06_10_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113K06_10.appendChild(oe_113K06_10_b2);  
  oe_113K06_10.appendChild(htmlSpan('de som van alle delen van zijn leeftijd is terug zijn leeftijd'));

  const oe_113K09_10 = document.createElement('span');
  const oe_113K09_10_b1 = maakSpanBreedte('0.65cm', '');
  oe_113K09_10.appendChild(oe_113K09_10_b1);
  const oe_113K09_10_b2 = maakSpanBreedte(breedte1, '');
  oe_113K09_10.appendChild(oe_113K09_10_b2);
  oe_113K09_10.appendChild(maakBreuk('1','6'));
  oe_113K09_10.appendChild(htmlSpan('<i>x</i> + '));
  oe_113K09_10.appendChild(maakBreuk('1','12'));
  oe_113K09_10.appendChild(htmlSpan('<i>x</i> + '));
  oe_113K09_10.appendChild(maakBreuk('1','7'));
  oe_113K09_10.appendChild(htmlSpan('<i>x</i> + 5 + '));
  oe_113K09_10.appendChild(maakBreuk('1','2'));
  oe_113K09_10.appendChild(htmlSpan('<i>x</i> + 4 = <i>x</i>'));

  const oe_113K06_11 = document.createElement('span');
  const oe_113K06_11_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113K06_11.appendChild(oe_113K06_11_b1);
  const oe_113K06_11_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113K06_11.appendChild(oe_113K06_11_b2);
  oe_113K06_11.appendChild(htmlSpan('<i>x</i> = 84'));

  const oe_113K05_4 = document.createElement('span');
  const oe_113K05_4_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113K05_4.appendChild(oe_113K05_4_b1);
  const oe_113K05_4_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113K05_4.appendChild(oe_113K05_4_b2);
  oe_113K05_4.appendChild(htmlSpan('Diophantus werd 84 jaar oud.'));

  const oe_113K05_5 = document.createElement('span');
  const oe_113K05_5_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113K05_5.appendChild(oe_113K05_5_b1);
  const oe_113K05_5_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113K05_5.appendChild(oe_113K05_5_b2);
  oe_113K05_5.appendChild(maakBreuk('1','6'));
  oe_113K05_5.appendChild(htmlSpan(' · 84 + '));
  oe_113K05_5.appendChild(maakBreuk('1','12'));
  oe_113K05_5.appendChild(htmlSpan(' · 84 + '));
  oe_113K05_5.appendChild(maakBreuk('1','7'));
  oe_113K05_5.appendChild(htmlSpan(' · 84 + 5 + '));
  oe_113K05_5.appendChild(maakBreuk('1','2'));
  oe_113K05_5.appendChild(htmlSpan(' · 84 + 4'));

  const oe_113K05_6 = document.createElement('span');
  const oe_113K05_6_b1 = maakSpanBreedte('0.65cm', '');
  oe_113K05_6.appendChild(oe_113K05_6_b1);
  const oe_113K05_6_b2 = maakSpanBreedte(breedte1, '');
  oe_113K05_6.appendChild(oe_113K05_6_b2);
  oe_113K05_6.appendChild(htmlSpan('= 14 + 7 + 12 + 5 + 42 + 4')); 

  const oe_113K05_7 = document.createElement('span');
  const oe_113K05_7_b1 = maakSpanBreedte('0.65cm', '');
  oe_113K05_7.appendChild(oe_113K05_7_b1);
  const oe_113K05_7_b2 = maakSpanBreedte(breedte1, '');
  oe_113K05_7.appendChild(oe_113K05_7_b2);
  oe_113K05_7.appendChild(htmlSpan('= 84')); 

  const hulp1 = document.createElement('span');
  hulp1.appendChild(maakBreuk('1','6'));
  hulp1.appendChild(htmlSpan('<i>x</i>'));
  const hulp2 = document.createElement('span');
  hulp2.appendChild(maakBreuk('1','12'));
  hulp2.appendChild(htmlSpan('<i>x</i>'));
  const hulp3 = document.createElement('span');
  hulp3.appendChild(maakBreuk('1','7'));
  hulp3.appendChild(htmlSpan('<i>x</i>'));
  const hulp5 = document.createElement('span');
  hulp5.appendChild(maakBreuk('1','2'));
  hulp5.appendChild(htmlSpan('<i>x</i>'));

  const oe_113K05_tabel = document.createElement('div');
  oe_113K05_tabel.classList.add('opl');
  oe_113K05_tabel.style.cssText = `
    position: absolute;
    top: 0; left: calc(0.65cm + ${breedte1});
    z-index: 10;
  `;

  const _t = document.createElement('table');
  _t.style.cssText = `border-collapse: collapse; font-size: inherit;`;
  const _thead = [['deel van zijn leven in woorden', 'in symbolen'],
                  ['een zesde jeugd', hulp1],
                  ['na een twaalfde kreeg hij een baard', hulp2],
                  ['na een zevende trouwde hij', hulp3],
                  ['vijf jaar later werd zijn zoon geboren', htmlSpan('5')],
                  ['zoon werd half zo oud als Diophantus', hulp5],
                  ['hij overleed vier jaar later', htmlSpan('4')],
                  ['de som is zijn leeftijd', htmlSpan('<i>x</i>')]];
  _thead.forEach((rij, ri) => {
    const tr = document.createElement('tr');
    rij.forEach(cel => {
      const td = document.createElement('td');
      td.style.cssText = `
        border: 1px solid var(--blauw-oplossing);
        padding: 0.0cm 0.15cm;
        height: 1.17cm;
        font-weight: ${ri === 0 ? 'bold' : 'normal'};
        color: ${ri === 0 ? 'var(--blauw-oplossing)' : 'inherit'};
        font-family: ${ri === 0 ? 'inherit' : 'var(--font-oplossing)'};
      `;
      if (typeof cel === 'string') td.innerHTML = cel;
      else td.appendChild(cel);
      tr.appendChild(td);
    });
    _t.appendChild(tr);
  });
  oe_113K05_tabel.appendChild(_t);

  const inhoud = maakOefening({
    id:'oe_113K09', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Diophantus’ jeugd maakte een zesde van zijn leven uit. Een twaalfde van zijn leven later kreeg hij een baard. Een zevende van zijn leven later trouwde hij. Vijf jaar na zijn huwelijk werd zijn zoon geboren. De zoon werd maar half zo oud als Diophantus zelf. Diophantus overleed vier jaar na zijn zoon.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

    {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const _o = oe_113K05_1;
        if (typeof _o === 'string') td.innerHTML = _o;
        else td.appendChild(_o);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_2, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K06_10, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const trWrap = document.createElement('tr');
        const tdWrap = document.createElement('td');
        tdWrap.style.position = 'relative';

        // de 4 lege schrijflijnen
        const innerTable = document.createElement('table');
        innerTable.classList.add('oef-tabel');
        const innerTbody = document.createElement('tbody');
        for (let i = 0; i < 8; i++) {
            const tr = document.createElement('tr');
            const td = maakSlTdZonderInsprong(null, true);
            tr.appendChild(td);
            innerTbody.appendChild(tr);
        }
        innerTable.appendChild(innerTbody);
        tdWrap.appendChild(innerTable);

        // zwevende tabel bovenop
        tdWrap.appendChild(oe_113K05_tabel);

        trWrap.appendChild(tdWrap);
        tbody.appendChild(trWrap);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K09_10, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }    
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K06_11, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_4, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_5, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_6, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_7, true);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
