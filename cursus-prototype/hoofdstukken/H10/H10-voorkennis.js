// ============================================================
// H10-VOORKENNISCRITERIA.JS
// Bouwt een tabel van voorkennis.
//
// Gebruik in de cursus (structuurbestand):
//   voegContentToe('content-voorkennis');
//   laadOefeningen('#content-voorkennis', [
//     'H10-voorkennis-matrix.js',
//     'H10-voorkennis.js',
//   ]);
//
// Compatibel met layout-systeem 1 (doorlopend) en
// systeem 2 (pagina's met marges).
// ============================================================



// ── CONTAINER OPZOEKEN EN VULLEN ──────────────────────────────
(function() {
  // ── HOOFDSTUK-INSTELLING ──────────────────────────────────────
  // !! Pas dit aan per hoofdstuk !!
  const HOOFDSTUK = '10';   // wordt gebruikt om doelen te filteren

  // ── VERWIJZING NAAR MATRIX ────────────────────────────────────
  // !! Pas aan als het bestand ergens anders staat !!
  // H10-voorkennis-matrix.js moet H10_voorkennis als globale var aanbieden
  // Laadvolgorde in laadOefeningen: doelen → dit bestand

  // ── MAATINSTELLINGEN ──────────────────────────────────────────
  const RIJ_HOOGTE      = '0.9cm';  // minimale hoogte van elke rij
  const CEL_PAD_LINKS   = '0.1cm'; // afstand tekst tot linkerrand van cel
  const CEL_PAD_RECHTS  = '0.1cm'; // afstand tekst tot rechterrand van cel
  const CEL_PAD_TOP     = '0.1cm'; // afstand tekst tot bovenrand van cel
  const CEL_PAD_BOTTOM  = '0.1cm'; // afstand tekst tot onderrand van cel

  // ── KOLOMBREEDTES ─────────────────────────────────────────────
  // Totaal moet 100% zijn.
  const KOLOM_BREEDTES = [
    '70%',  // Voorkenniscriteria
    '25%',  // 🧠 (referenties: z-waarden)
    '5%',   // ✔️
  ];

  const container = document.getElementById('content-voorkennis');
  if (!container) {
    console.warn('H10-voorkennis.js: container #content-voorkennis niet gevonden.');
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

  ['Voorkennis', '🧠', '✔️'].forEach(titel => {
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
  const prefix = HOOFDSTUK + '.';
  const doelen = H10_voorkennis
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

    // ── Kolom 1: label x| + tekst + leerplandoelcodes ─────
    const td1 = document.createElement('td');
    td1.style.paddingLeft   = CEL_PAD_LINKS;
    td1.style.paddingRight  = CEL_PAD_RECHTS;
    td1.style.paddingTop    = CEL_PAD_TOP;
    td1.style.paddingBottom = CEL_PAD_BOTTOM;
    td1.style.textAlign     = 'left';
    td1.style.verticalAlign = 'middle';

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `display: flex; align-items: baseline;`;

    const lbl = document.createElement('span');
    lbl.className   = 'lbl';
    lbl.textContent = x + '|';

    const tekst = document.createElement('span');
    tekst.textContent = doel.tekst;
    tekst.style.flex = '1';

    wrapper.appendChild(lbl);
    wrapper.appendChild(tekst);
    td1.appendChild(wrapper);
    tr.appendChild(td1);

    // ── Kolom 2: referenties van de vorm z.0 → toon z ─────
    // Zoek alle referenties die eindigen op '.0', haal z eruit,
    // sorteer numerisch en toon gescheiden door ', '
    const refs = (doel.referenties || [])
      .filter(r => r.endsWith('.0'))
      .map(r => r.slice(0, -2))
      .filter(z => z !== HOOFDSTUK)
      .sort((a, b) => parseFloat(a) - parseFloat(b));
    tr.appendChild(_maakTd(refs.join(', ')));

    // ── Kolom 3: vinkje ───────────────────────────────────
    tr.appendChild(_maakTd('▢'));

    tbody.appendChild(tr);
  });

  tabel.appendChild(tbody);
  container.appendChild(tabel);

  // ── Hulpfunctie: gewone td aanmaken ───────────────────────────
  function _maakTd(inhoud) {
    const td = document.createElement('td');
    td.textContent      = inhoud;
    td.style.paddingLeft   = CEL_PAD_LINKS;
    td.style.paddingRight  = CEL_PAD_RECHTS;
    td.style.paddingTop    = CEL_PAD_TOP;
    td.style.paddingBottom = CEL_PAD_BOTTOM;
    td.style.verticalAlign = 'middle';
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


