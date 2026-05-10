/* ============================================================
   H11 / P11_3 / oe_113K05.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';
  const oe_113K05_1 = document.createElement('span');
  oe_113K05_1.appendChild(htmlSpan('Bereken binnen hoeveel jaar Jorre, zijn tweelingbroer en zijn zus samen 60 jaar zijn.'));

  const oe_113K05_2 = document.createElement('span');
  const oe_113K05_2_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113K05_2.appendChild(oe_113K05_2_b1);
  const oe_113K05_2_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113K05_2.appendChild(oe_113K05_2_b2);
  oe_113K05_2.appendChild(htmlSpan('aantal jaar: <i>x</i>'));

  const oe_113K05_3 = document.createElement('span');
  const oe_113K05_3_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113K05_3.appendChild(oe_113K05_3_b1);
  const oe_113K05_3_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113K05_3.appendChild(oe_113K05_3_b2);
  oe_113K05_3.appendChild(htmlSpan('een tabel kan helpen'));

  const oe_113K05_4 = document.createElement('span');
  const oe_113K05_4_b1 = maakSpanBreedte('0.65cm', '');
  oe_113K05_4.appendChild(oe_113K05_4_b1);
  const oe_113K05_4_b2 = maakSpanBreedte(breedte1, '');
  oe_113K05_4.appendChild(oe_113K05_4_b2);
  oe_113K05_4.appendChild(htmlSpan('13 + <i>x</i> + 13 + <i>x</i> + 10 + <i>x</i> = 60'));

  const oe_113K05_5 = document.createElement('span');
  const oe_113K05_5_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113K05_5.appendChild(oe_113K05_5_b1);
  const oe_113K05_5_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113K05_5.appendChild(oe_113K05_5_b2);
  oe_113K05_5.appendChild(htmlSpan('<i>x</i> = 8'));

  const oe_113K05_6 = document.createElement('span');
  const oe_113K05_6_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113K05_6.appendChild(oe_113K05_6_b1);
  const oe_113K05_6_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113K05_6.appendChild(oe_113K05_6_b2);
  oe_113K05_6.appendChild(htmlSpan('Binnen 8 jaar zijn ze samen 60 jaar.'));

  const oe_113K05_7 = document.createElement('span');
  const oe_113K05_7_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113K05_7.appendChild(oe_113K05_7_b1);
  const oe_113K05_7_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113K05_7.appendChild(oe_113K05_7_b2);
  oe_113K05_7.appendChild(htmlSpan('21 + 21 + 18 = 60'));

  const oe_113K05_tabel = document.createElement('div');
  oe_113K05_tabel.classList.add('opl');
  oe_113K05_tabel.style.cssText = `
    position: absolute;
    top: 0; left: calc(0.65cm + ${breedte1});
    z-index: 10;
  `;

  const hulp1 = document.createElement('span');
  hulp1.appendChild(maakSpanBreedte('2cm','13 + <i>x</i>'));
  const hulp1a = document.createElement('span');
  hulp1a.appendChild(htmlSpan('13 + 8 = 21'));
  hulp1a.style.color = '#d500f9';
  hulp1.appendChild(hulp1a);
  const hulp2 = document.createElement('span');
  hulp2.appendChild(maakSpanBreedte('2cm','10 + <i>x</i>'));
  const hulp2a = document.createElement('span');
  hulp2a.appendChild(htmlSpan('10 + 8 = 18'));
  hulp2a.style.color = '#d500f9';
  hulp2.appendChild(hulp2a);

  const _t = document.createElement('table');
  _t.style.cssText = `border-collapse: collapse; font-size: inherit;`;
  const _thead = [['wie', 'leeftijd nu', 'leeftijd over <i>x</i> jaar'],
                  ['Jorre', '13', hulp1],
                  ['tweelingbroer', '13', hulp1.cloneNode(true)],
                  ['zus', '10', hulp2]];
  _thead.forEach((rij, ri) => {
    const tr = document.createElement('tr');
    rij.forEach(cel => {
      const td = document.createElement('td');
      td.style.cssText = `
        border: 1px solid var(--blauw-oplossing);
        padding: 0.0cm 0.15cm;
        height: 0.87cm;
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
    id:'oe_113K05', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Jorre is 13 jaar, zijn zus is 10 jaar.', ['intro-tekst']);

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
        const td = maakSlTdZonderInsprong(oe_113K05_2, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_3, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
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
        for (let i = 0; i < 4; i++) {
            const tr = document.createElement('tr');
            const td = maakSlTdZonderInsprong(null, false);
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
        const td = maakSlTdZonderInsprong(oe_113K05_4, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_5, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_6, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_7, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
