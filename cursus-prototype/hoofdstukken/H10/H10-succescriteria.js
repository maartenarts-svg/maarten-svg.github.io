// ============================================================
// H10-SUCCESCRITERIA.JS
// Bouwt een tabel van succescriteria met bijbehorende oefeningen.
//
// Gebruik in de cursus (structuurbestand):
//   voegContentToe('content-succescriteria');
//   laadOefeningen('#content-succescriteria', [
//     'H10-succescriterium-matrix.js',
//     'H10-datamatrix.js',
//     'H10-succescriteria.js',
//   ]);
//
// Compatibel met layout-systeem 1 (doorlopend) en
// systeem 2 (pagina's met marges).
// ============================================================


// ── CONTAINER OPZOEKEN EN VULLEN ──────────────────────────────
(function() {
  // ── HOOFDSTUK-INSTELLING ──────────────────────────────────────
  // !! Pas dit aan per hoofdstuk !!
  const HOOFDSTUK = '10';   // wordt gebruikt om doelen en referenties te filteren

  // ── VERWIJZING NAAR MATRICES ──────────────────────────────────
  // !! Pas aan als de bestanden ergens anders staan !!
  // H10-succescriterium-matrix.js moet H10_doelen als globale var aanbieden
  // H10-datamatrix.js   moet H10_matrix  als globale var aanbieden
  // Laadvolgorde in laadOefeningen: doelen → data → dit bestand

  // ── MAATINSTELLINGEN ──────────────────────────────────────────
  // Speel hier met de afmetingen van de tabel.

  const RIJ_HOOGTE      = '0.9cm';   // minimale hoogte van elke rij
  const CEL_PAD_LINKS   = '0.1cm'; // afstand tekst tot linkerrand van cel
  const CEL_PAD_RECHTS  = '0.1cm'; // afstand tekst tot rechterrand van cel
  const CEL_PAD_TOP     = '0.1cm';  // afstand tekst tot bovenrand van cel
  const CEL_PAD_BOTTOM  = '0.1cm';  // afstand tekst tot onderrand van cel

  // ── KOLOMBREEDTES ─────────────────────────────────────────────
  // Totaal moet 100% zijn.
  const KOLOM_BREEDTES = [
    '50%',    // Succescriteria
    '6%',   // 🧠 (referenties)
    '7.5%',   // 🔍 (ontdekkingstocht)
    '11.5%',   // 🧭 (zo doe je dat)
    '20%',    // 🚦 en 🔄 (hoe ver sta ik + oefenen)
    '5%',   // ✔️
  ];

  const container = document.getElementById('content-succescriteria');
  if (!container) {
    console.warn('H10-succescriteria.js: container #content-succescriteria niet gevonden.');
    return;
  }

  // ── Tabel aanmaken ────────────────────────────────────────
  const tabel = document.createElement('table');
  tabel.className = 'zichtbare-tabel';

  // ── Kolombreedtes instellen via colgroup ──────────────────
  const colgroup = document.createElement('colgroup');
  KOLOM_BREEDTES.forEach(breedte => {
    const col = document.createElement('col');
    col.style.width = breedte;
    colgroup.appendChild(col);
  });
  tabel.appendChild(colgroup);

  // ── Hoofdingrij ───────────────────────────────────────────
  const thead = document.createElement('thead');
  const trH   = document.createElement('tr');
  trH.style.height = RIJ_HOOGTE;

  ['Succescriteria', '🧠', '🔍', '🧭', '🚦 en 🔄', '✔️'].forEach(titel => {
    const td = document.createElement('td');
    td.className = 'hoofding';
    td.textContent = titel;
    td.style.paddingLeft  = CEL_PAD_LINKS;
    td.style.paddingRight = CEL_PAD_RECHTS;
    trH.appendChild(td);
  });
  thead.appendChild(trH);
  tabel.appendChild(thead);

  // ── Doelen filteren en sorteren ───────────────────────────
  // Alleen doelen met plaatscode van de vorm HOOFDSTUK.x
  const prefix  = HOOFDSTUK + '.';
  const doelen  = H10_doelen
    .filter(d => d.plaatscode && d.plaatscode.startsWith(prefix))
    .sort((a, b) => {
      const xA = parseFloat(a.plaatscode.slice(prefix.length));
      const xB = parseFloat(b.plaatscode.slice(prefix.length));
      return xA - xB;
    });

  // ── Gegevensrijen ─────────────────────────────────────────
  const tbody = document.createElement('tbody');

  doelen.forEach(doel => {
    const tr = document.createElement('tr');
    tr.style.height = RIJ_HOOGTE;

    // x uit de plaatscode (bv. '10.3' → '3')
    const x = doel.plaatscode.slice(prefix.length);

    // ── Kolom 1: label x| + tekst ─────────────────────────
    const td1 = document.createElement('td');
    td1.style.paddingLeft  = CEL_PAD_LINKS;
    td1.style.paddingRight = CEL_PAD_RECHTS;
    td1.style.paddingTop    = CEL_PAD_TOP;
    td1.style.paddingBottom = CEL_PAD_BOTTOM;
    td1.style.textAlign    = 'left';
    td1.style.verticalAlign  = 'top';

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: flex;
      align-items: baseline;
    `;

    const lbl = document.createElement('span');
    lbl.className   = 'lbl';
    lbl.textContent = x + '|';

    const tekst = document.createElement('span');
    tekst.style.flex = '1';

    const codes = (doel.leerplandoelcodes || []).join(', ');
    tekst.textContent = doel.tekst + (codes ? ' (' + codes + ')' : '');

    wrapper.appendChild(lbl);
    wrapper.appendChild(tekst);
    td1.appendChild(wrapper);
    tr.appendChild(td1);

    // ── Kolom 2: referenties (10.y, niet 10.0) ────────────
    const refs = (doel.referenties || [])
      .filter(r => r.startsWith(prefix) && r !== HOOFDSTUK + '.0')
      .sort((a, b) => {
        const yA = parseFloat(a.slice(prefix.length));
        const yB = parseFloat(b.slice(prefix.length));
        return yA - yB;
      });
    const td2 = _maakTdLijst(refs);
    tr.appendChild(td2);

    // ── Oefeningen bij dit doel ophalen uit de matrix ─────
    const oefBijDoel = H10_matrix.filter(o =>
      (o.doelen || []).includes(doel.id)
    );

    // ── Kolom 3: Ontdekkingstocht ─────────────────────────
    const ontdek = oefBijDoel
      .filter(o => o.onderdeel === 'Ontdekkingstocht')
      .map(o => o.nr)
      .sort((a, b) => a - b);
    tr.appendChild(_maakTd(ontdek.join(', ')));

    // ── Kolom 4: Zo doe je dat! ───────────────────────────
    const zoeje = oefBijDoel
      .filter(o => o.onderdeel === 'Zo doe je dat!')
      .map(o => o.nr)
      .sort((a, b) => a - b);
    tr.appendChild(_maakTd(zoeje.join(', ')));

    // ── Kolom 5: Hoe ver sta ik? + Oefenen! ──────────────
    const oefenen = oefBijDoel
      .filter(o => o.onderdeel === 'Hoe ver sta ik?' || o.onderdeel === 'Oefenen!')
      .map(o => o.nr)
      .sort((a, b) => a - b);
    tr.appendChild(_maakTd(oefenen.join(', ')));

    // ── Kolom 6: vinkje ───────────────────────────────────
    tr.appendChild(_maakTd('▢'));

    tbody.appendChild(tr);
  });

  tabel.appendChild(tbody);
  container.appendChild(tabel);

  // ── Hulpfunctie: gewone td aanmaken ───────────────────────────
  function _maakTd(inhoud) {
    const td = document.createElement('td');
    td.textContent    = inhoud;
    td.style.paddingLeft  = CEL_PAD_LINKS;
    td.style.paddingRight = CEL_PAD_RECHTS;
    td.style.paddingTop    = CEL_PAD_TOP;
    td.style.paddingBottom = CEL_PAD_BOTTOM;
    td.style.verticalAlign  = 'top';
    return td;
  }

  // ── Hulpfunctie: td met items onder elkaar ─────────────────────
  function _maakTdLijst(items) {
    const td = document.createElement('td');
    td.style.paddingLeft   = CEL_PAD_LINKS;
    td.style.paddingRight  = CEL_PAD_RECHTS;
    td.style.paddingTop    = CEL_PAD_TOP;
    td.style.paddingBottom = CEL_PAD_BOTTOM;
    td.style.verticalAlign = 'top';
    items.forEach(item => {
      const regel = document.createElement('div');
      regel.textContent = item;
      td.appendChild(regel);
    });
    return td;
  }  
})();

