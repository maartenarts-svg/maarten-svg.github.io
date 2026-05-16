/* ============================================================
   oe_W32WID_freq.js
   Frequentietabel — liggend, dynamisch aantal kolommen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_W32WID_freq', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const spanOpg1 = document.createElement('span');
  spanOpg1.appendChild(htmlSpan('Frequentietabel'));
  spanOpg1.classList.add('theorie');
  const spanOpg2 = document.createElement('span');
  spanOpg2.appendChild(htmlSpan('<br>Maak een frequentietabel.'));

  voegTekstToe(inhoud, spanOpg1);
  voegTekstToe(inhoud, spanOpg2);

  /* ---- Berekeningen ---- */
  const freqTabel = berekenFrequentietabel(ACTIEVE_DATA);
  const x = freqTabel.length;

  /* ---- Afmetingen ---- */
  const rijHoogte      = '0.9cm';
  const colHoofding    = '25%';
  const colDataBreedte = `${75 / x}%`;

  /* ---- Tabel ---- */
  const tabel = document.createElement('table');
  tabel.classList.add('zichtbare-tabel');
  tabel.style.borderCollapse = 'collapse';
  tabel.style.width          = '100%';
  tabel.style.tableLayout    = 'fixed';
  tabel.style.marginTop      = '0.2cm';

  /* ---- Colgroup ---- */
  const colgroup = document.createElement('colgroup');
  const colH = document.createElement('col');
  colH.style.width = colHoofding;
  colgroup.appendChild(colH);
  for (let i = 0; i < x; i++) {
    const col = document.createElement('col');
    col.style.width = colDataBreedte;
    colgroup.appendChild(col);
  }
  tabel.appendChild(colgroup);

  /* ---- Hulpfunctie: randstijl op td ---- */
  function setRand(td, boven, onder, links, rechts) {
    const rand = '1.2px solid black';
    if (boven)  td.style.borderTop    = rand;
    if (onder)  td.style.borderBottom = rand;
    if (links)  td.style.borderLeft   = rand;
    if (rechts) td.style.borderRight  = rand;
  }

  /* ---- Hulpfunctie: basisstijl td ---- */
  function stijlTd(td, hAlign = 'center') {
    td.style.height        = rijHoogte;
    td.style.textAlign     = hAlign;
    td.style.verticalAlign = 'middle';
    td.style.fontFamily    = 'var(--font)';
    td.style.fontSize      = 'var(--fontsize)';
    td.style.padding       = '0 0.15cm';
  }

  /* ---- Hulpfunctie: maak opl-toggle span ---- */
  function oplSpan(tekst) {
    const span = document.createElement('span');
    span.classList.add('opl-toggle');
    span.appendChild(htmlSpan(String(tekst)));
    return span;
  }

  /* ============================================================
     RIJ 1: hoofding "$$variabele2$$" + waarden
     ============================================================ */
  const tr1 = document.createElement('tr');

  const tdH1 = document.createElement('td');
  stijlTd(tdH1, 'left');
  tdH1.classList.add('hoofding');
  setRand(tdH1, true, true, true, false);
  tdH1.appendChild(oplSpan('$$variabele2$$'));
  tr1.appendChild(tdH1);

  freqTabel.forEach(([waarde], i) => {
    const isLaatste = i === x - 1;
    const td = document.createElement('td');
    stijlTd(td, 'center');
    setRand(td, true, true, i === 0, isLaatste);
    td.appendChild(oplSpan(waarde));
    tr1.appendChild(td);
  });

  tabel.appendChild(tr1);

  /* ============================================================
     RIJ 2: hoofding "aantal antwoorden" + frequenties
     ============================================================ */
  const tr2 = document.createElement('tr');

  const tdH2 = document.createElement('td');
  stijlTd(tdH2, 'left');
  tdH2.classList.add('hoofding');
  setRand(tdH2, false, true, true, false);
  tdH2.appendChild(oplSpan('aantal antwoorden'));
  tr2.appendChild(tdH2);

  freqTabel.forEach(([, freq], i) => {
    const isLaatste = i === x - 1;
    const td = document.createElement('td');
    stijlTd(td, 'center');
    setRand(td, false, true, i === 0, isLaatste);
    td.appendChild(oplSpan(freq));
    tr2.appendChild(td);
  });

  tabel.appendChild(tr2);

  /* ---- Voeg tabel toe aan inhoud ---- */
  const container = document.createElement('div');
  container.style.marginTop = '0.2cm';
  container.appendChild(tabel);
  inhoud.appendChild(container);

})();