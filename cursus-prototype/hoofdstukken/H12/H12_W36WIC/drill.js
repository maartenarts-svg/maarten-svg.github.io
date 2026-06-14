/* ============================================================
   JURY / drill.js
   ============================================================ */
(function () {

  const TOON_SL = false;  // ← true = schrijflijn zichtbaar
  const OPL = false;

  // Elke cel: { tekst: '...', toon: true/false }
  // toon: true  → antwoord zichtbaar
  // toon: false → antwoord verborgen
  const DATA = [
    { naam: 'rechthoek',
      P: [{ tekst: '  2(<i>b</i> + <i>h</i>)', toon: OPL }, { tekst: '  2(<i>b</i> + <i>h</i>)', toon: OPL }, ],
      A: [{ tekst: '  <i>bh</i>',               toon: OPL }, { tekst: '  <i>bh</i>',               toon: OPL }, ],
    },
    { naam: 'vierkant',
      P: [{ tekst: '  4<i>z</i>',               toon: OPL }, { tekst: '  4<i>z</i>',               toon: OPL }, ],
      A: [{ tekst: '  <i>z</i><sup>2</sup>',    toon: OPL }, { tekst: '  <i>z</i><sup>2</sup>',    toon: OPL }, ],
    },
    { naam: 'parallellogram',
      P: [{ tekst: '  som van de zijden',        toon: OPL }, { tekst: '  som van de zijden',        toon: OPL }, ],
      A: [{ tekst: '  <i>bh</i>',               toon: OPL }, { tekst: '  <i>bh</i>',               toon: OPL }, ],
    },
    { naam: 'ruit',
      P: [{ tekst: '  4<i>z</i>',               toon: OPL }, { tekst: '  4<i>z</i>',               toon: OPL }, ],
      A: [{ tekst: '  XXXXXXXXXXXXXX',           toon: true }, { tekst: '  XXXXXXXXXXXXXX',           toon: true }, ],
    },
    { naam: 'trapezium',
      P: [{ tekst: '  som van de zijden',        toon: OPL }, { tekst: '  som van de zijden',        toon: OPL }, ],
      A: [{ tekst: '  XXXXXXXXXXXXXX',           toon: true }, { tekst: '  XXXXXXXXXXXXXX',           toon: true }, ],
    },
    { naam: 'driehoek',
      P: [{ tekst: '  som van de zijden',        toon: OPL }, { tekst: '  som van de zijden',        toon: OPL }, ],
      A: [{ tekst: '  <i>bh</i> : 2',           toon: OPL }, { tekst: '  <i>bh</i> : 2',           toon: OPL }, ],
    },
    { naam: 'cirkel',
      P: [{ tekst: '  2π<i>r</i>',         toon: OPL }, { tekst: '  2π<i>r</i>',         toon: OPL }, ],
      A: [{ tekst: '  π<i>r</i><sup>2</sup>',           toon: OPL }, { tekst: '  π<i>r</i><sup>2</sup>',           toon: OPL }, ],
    },
  ];

  function maakAntwoordTd(cel) {
    const td = document.createElement('td');
    const rij = document.createElement('div');
    rij.classList.add('rij');

    if (TOON_SL) {
      const sl = document.createElement('span');
      sl.classList.add('sl');
      sl.textContent = SL;
      rij.appendChild(sl);
    }

    const opl = document.createElement('div');
    opl.classList.add('opl');
    opl.style.left  = '0';
    opl.style.right = '0';
    opl.appendChild(htmlSpan(cel.tekst));
    if (cel.toon) opl.classList.add('zichtbaar', 'opl-vast');
    rij.appendChild(opl);

    td.appendChild(rij);
    return td;
  }

  const inhoud = maakTheorie();

  /* ---- Tabel ---- */
  const tabel = document.createElement('table');
  tabel.classList.add('zichtbare-tabel');
  tabel.style.tableLayout = 'fixed';

  const colg = document.createElement('colgroup');
  [20, 10, 35, 35].forEach(w => {
    const col = document.createElement('col');
    col.style.width = `${w}%`;
    colg.appendChild(col);
  });
  tabel.appendChild(colg);

  const tbody = document.createElement('tbody');
  tabel.appendChild(tbody);

  /* ---- Kolomhoofden ---- */
  const trHeader = document.createElement('tr');
  ['Figuur', '', 'Dag 2', 'Dag 1'].forEach(label => {
    const td = document.createElement('td');
    td.classList.add('hoofding');
    td.appendChild(htmlSpan(label));
    trHeader.appendChild(td);
  });
  tbody.appendChild(trHeader);

  /* ---- Figurenrijen ---- */
  DATA.forEach((fig, fi) => {
    ['P', 'A'].forEach((pa, pi) => {
      const tr = document.createElement('tr');

      /* Figuurcel (rowspan 2, enkel bij P-rij) */
      if (pi === 0) {
        const tdNaam = document.createElement('td');
        tdNaam.rowSpan         = 2;
        tdNaam.style.textAlign = 'left';
        tdNaam.style.padding   = '0 0.2cm';
        tdNaam.appendChild(htmlSpan(fig.naam));
        tr.appendChild(tdNaam);
      }

      /* P/A-labelcel */
      const tdPA = document.createElement('td');
      tdPA.appendChild(htmlSpan(`<i>${pa}</i>`));
      if (pi === 0) tdPA.style.borderBottom = '1.2px dashed var(--groen-scheiding)';
      if (pi === 1) tdPA.style.borderTop    = '1.2px dashed var(--groen-scheiding)';
      tr.appendChild(tdPA);

      /* Antwoordcellen dag 1 – 3 */
      fig[pa].forEach(cel => {
        const td = maakAntwoordTd(cel);
        if (pi === 0) td.style.borderBottom = '1.2px dashed var(--groen-scheiding)';
        if (pi === 1) td.style.borderTop    = '1.2px dashed var(--groen-scheiding)';
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  });

  inhoud.appendChild(tabel);

})();
