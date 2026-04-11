/* ============================================================
   H10 / P10_1 / oe_1010111.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = true;

  const inhoud = maakOefening({
    id:'oe_1010111', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening', container:'.pagina'
  });
  inhoud.style.position = 'relative';

  function maakFiguurContainer(naam, breedte) {
    const div = document.createElement('div');
    div.id = naam;
    div.style.position      = 'absolute';
    div.style.right         = '0';
    div.style.width         = breedte;
    div.style.display       = 'flex';
    div.style.alignItems    = 'center';
    div.style.justifyContent = 'center';
    div.style.boxSizing     = 'border-box';
    if (RAND_ZICHTBAAR) {
      div.style.border = '1.5px dashed #aaa';
      const lbl = document.createElement('span');
      lbl.textContent = naam;
      lbl.style.cssText = 'font-size:9pt;color:#999;pointer-events:none;font-family:Arial,sans-serif;';
      div.appendChild(lbl);
    }
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Bij een aftrekking kun je geen eigenschappen toepassen.<br> Door elke aftrekking als een som te schrijven, kan dat wel.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', 'Bestudeer het voorbeeld.', false);
    /* zet bovenaan */
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';
    /* geef extra ruimte boven */
    _tdLbl.querySelector('.lbl').style.paddingTop = '0cm';
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
    _tdLbl.querySelector('.rij').style.height = '0.5cm';  // ← HIER AANPASSEN
  }
 
  {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.style.paddingLeft = '1.5cm';
    td.classList.add('kolom-links');

    const tbl = document.createElement('table');
    tbl.style.borderCollapse = 'collapse';

    const rijen = [
      { links: '17 + 44 - 7', rechts: '= 17 + 44 + (-7)', nummer: null },
      { links: '',             rechts: '= 17 + (-7) + 44', nummer: '(1)' },
      { links: '',             rechts: '= 17 - 7 + 44',    nummer: null },
      { links: '',             rechts: '= 10 + 44',         nummer: null },
      { links: '',             rechts: '= 54',              nummer: null },
    ];

    rijen.forEach(rij => {
      const tr2 = document.createElement('tr');

      const tdL = document.createElement('td');
      tdL.style.height = '0.65cm';       // ← HIER AANPASSEN
      tdL.style.paddingRight = '0.2cm';  // ← HIER AANPASSEN
      tdL.style.whiteSpace = 'nowrap';
      tdL.style.verticalAlign = 'middle';
      tdL.innerHTML = rij.links;
      tr2.appendChild(tdL);

      const tdR = document.createElement('td');
      tdR.style.height = '0.65cm';       // ← HIER AANPASSEN
      tdR.style.whiteSpace = 'nowrap';
      tdR.style.verticalAlign = 'middle';
      if (rij.nummer) {
        tdR.appendChild(maakGelijkheidMetNummer(rij.rechts, rij.nummer));
      } else {
        tdR.innerHTML = rij.rechts;
      }
      tr2.appendChild(tdR);

      tbl.appendChild(tr2);
    });

    td.appendChild(tbl);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
 
  {
  const _tr = document.createElement('tr');
  const _td = document.createElement('td');
  _td.style.height = '0.9cm';        // ← 1) HIER HOOGTE AANPASSEN
  _td.style.paddingLeft = '0.65cm';  // ← 2) HIER INSPRONG AANPASSEN
  _td.innerHTML = 'Welke eigenschap wordt toegepast bij (1)?';
  _td.classList.add('kolom-links');
  _tr.appendChild(_td);
  tbody.appendChild(_tr);
  }
  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    const _td_a_0 = maakSlTd('De optelling van rationale getallen is commutatief.', false);
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  const _trWit = document.createElement('tr');
  const _tdWit = document.createElement('td');
  _tdWit.style.height = '0.3cm';  // ← HIER AANPASSEN
  _trWit.appendChild(_tdWit);
  tbody.appendChild(_trWit);

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', 'Werk uit zoals het voorbeeld hierboven.', false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  const {tbody: tbody2} = maakOefTabel(inhoud, 2, true);

  // Opgaveteksten
  {
    const tr = document.createElement('tr');
    const tdA = document.createElement('td');
    tdA.style.paddingLeft = '0.65cm';  // ← HIER AANPASSEN
    tdA.style.height = '0.8cm';
    tdA.innerHTML = '-128 + 37 - 12';
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = document.createElement('td');
    tdB.style.height = '0.8cm';
    tdB.innerHTML = '46 - 33 + 14 - 47';
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody2.appendChild(tr);
  }

  // Schrijflijnen met oplossingen
  const oplA = [
    '= -128 - 12 + 37',
    '= -140 + 37',
    '= -103'
  ];
  const oplB = [
    '= 46 + 14 - 33 - 47',
    '= 60 - 80',
    '= -20'
  ];
  for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.querySelector('.tab').style.display = 'none';
    const oplB_opl = tdB.querySelector('.opl');
    if (oplB_opl) oplB_opl.style.left = '0';
    tdB.classList.add('kolom-rechts');
    tr.appendChild(tdB);
    tbody2.appendChild(tr);
  }

  
})();
