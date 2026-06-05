/* ============================================================
   JURY / drill.js
   ============================================================ */
(function () {

  const TOON_ANTWOORDEN = false;  // ← true = antwoorden zichtbaar

  const DATA = [
    { naam: 'rechthoek',      P: ['', '', ''], A: ['', '', ''] },
    { naam: 'vierkant',       P: ['', '', ''], A: ['', '', ''] },
    { naam: 'parallellogram', P: ['', '', ''], A: ['', '', ''] },
    { naam: 'ruit',           P: ['', '', ''], A: ['', '', ''] },
    { naam: 'trapezium',      P: ['', '', ''], A: ['', '', ''] },
    { naam: 'driehoek',       P: ['', '', ''], A: ['', '', ''] },
    { naam: 'cirkel',         P: ['', '', ''], A: ['', '', ''] },
  ];

  function maakAntwoordTd(tekst) {
    const td = document.createElement('td');
    const rij = document.createElement('div');
    rij.classList.add('rij');

    const sl = document.createElement('span');
    sl.classList.add('sl');
    sl.textContent = SL;
    rij.appendChild(sl);

    const opl = document.createElement('div');
    opl.classList.add('opl');
    opl.style.left  = '0';
    opl.style.right = '0';
    opl.appendChild(htmlSpan(tekst));
    if (TOON_ANTWOORDEN) opl.classList.add('zichtbaar');
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
  [17, 5, 26, 26, 26].forEach(w => {
    const col = document.createElement('col');
    col.style.width = `${w}%`;
    colg.appendChild(col);
  });
  tabel.appendChild(colg);

  const tbody = document.createElement('tbody');
  tabel.appendChild(tbody);

  /* ---- Kolomhoofden ---- */
  const trHeader = document.createElement('tr');
  ['Figuur', '', 'Dag 3', 'Dag 2', 'Dag 1'].forEach(label => {
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
        tdNaam.rowSpan       = 2;
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
      fig[pa].forEach(antw => {
        const td = maakAntwoordTd(antw);
        if (pi === 0) td.style.borderBottom = '1.2px dashed var(--groen-scheiding)';
        if (pi === 1) td.style.borderTop    = '1.2px dashed var(--groen-scheiding)';
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  });

  inhoud.appendChild(tabel);

})();
