/* ============================================================
   H10 / P10_toets / W30_toets_sc.js
   Succescriteria voor de toets
   ============================================================ */
(function () {


  const inhoud = maakTheorie();

  const FONT_KLEIN = '9pt';

  const criteria = [
    {
      nummer: '1|',
      tekst:  'Ik noteer een lettervorm volgens de afspraken. (6.12, vraag 1)',
      scores: [
        { lbl: 'A:', tekst: 'Ik haal 4 op 4.' },
        { lbl: 'B:', tekst: 'Ik haal minstens 3 op 4.' },
        { lbl: 'C:', tekst: 'Ik haal minder dan 3 op 4.' },
      ],
    },
    {
      nummer: '2|',
      tekst:  'Ik bereken de getalwaarde van een lettervorm. (6.13, vraag 2)',
      scores: [
        { lbl: 'A:', tekst: 'Ik pas het principe juist toe in 2 oefeningen.' },
        { lbl: 'B:', tekst: 'Ik pas het principe juist toe in 1 oefening.' },
        { lbl: 'C:', tekst: 'Ik pas het principe nog niet juist toe.' },
      ],
    },
    {
      nummer: '3|',
      tekst:  'Ik herleid een lettervorm. (6.12, vraag 3)',
      scores: [
        { lbl: 'A:', tekst: 'Ik doe dit bijna foutloos.' },
        { lbl: 'B:', tekst: 'Ik laat duidelijk zien dat ik de rekenregels ken, maar maak nog wel wat fouten.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
    {
      nummer: '4|',
      tekst:  'Ik vermenigvuldig een lettervorm met een getal. (6.12, vraag 4))',
      scores: [
        { lbl: 'A:', tekst: 'Ik doe dit bijna foutloos.' },
        { lbl: 'B:', tekst: 'Ik laat duidelijk zien dat ik de rekenregels ken, maar maak nog wel wat fouten.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
    {
      nummer: '5|',
      tekst:  'Ik reken met lettervormen. (6.12, vraag 5)',
      scores: [
        { lbl: 'A:', tekst: 'Ik doe dit bijna foutloos.' },
        { lbl: 'B:', tekst: 'Ik laat duidelijk zien dat ik de rekenregels ken, maar maak nog wel wat fouten.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
  ];

  /* ---- Buitenste kader ---- */
  const kader = document.createElement('table');
  kader.style.borderCollapse = 'collapse';
  kader.style.width          = '100%';
  kader.style.tableLayout    = 'fixed';
  kader.style.border         = '1.2px solid black';
  kader.style.marginTop      = '0.2cm';

  const {tbody} = maakOefTabel(kader, 1, true);

  const trtest = document.createElement('tr');
  tbody.appendChild(trtest);
  const td = maakOpTd('1','test','3cm',false,'2x');
  trtest.appendChild(td);

  /* ---- Kolombreedtes via colgroup ---- */
  const colgroup = document.createElement('colgroup');
  const col1 = document.createElement('col');
  col1.style.width = 'calc(0.65cm + 0.2cm)';
  const col2 = document.createElement('col');
  col2.style.width = 'auto';
  colgroup.appendChild(col1);
  colgroup.appendChild(col2);
  kader.appendChild(colgroup);

  /* ---- Titelrij ---- */
  const trTitel = document.createElement('tr');
  const tdTitel = document.createElement('td');
  tdTitel.colSpan = 2;
  tdTitel.style.padding    = '0.1cm 0.2cm 0.1cm 0.2cm';
  tdTitel.style.fontFamily = 'var(--font)';
  tdTitel.style.fontSize   = 'var(--fontsize)';
  tdTitel.style.fontWeight = 'bold';
  tdTitel.appendChild(htmlSpan('Reflectie over je voorbereiding'));
  trTitel.appendChild(tdTitel);
  kader.appendChild(trTitel);

  /* ---- Één rij per criterium ---- */
  criteria.forEach(criterium => {

    const tr = document.createElement('tr');

    /* Kolom 1: nummer — opmaak van .lbl */
    const tdNr = document.createElement('td');
    tdNr.style.width         = '0.65cm';
    tdNr.style.maxWidth      = '0.65cm';
    tdNr.style.textAlign     = 'left';
    tdNr.style.verticalAlign = 'top';
    tdNr.style.padding       = '0.05cm 0 0.05cm 0.2cm';
    tdNr.style.fontFamily    = 'var(--font)';
    tdNr.style.fontSize      = 'var(--fontsize)';
    tdNr.style.fontWeight    = 'bold';
    tdNr.style.color         = 'var(--groen-donker)';
    tdNr.style.whiteSpace    = 'nowrap';
    tdNr.style.overflow      = 'hidden';
    tdNr.appendChild(htmlSpan(criterium.nummer));
    tr.appendChild(tdNr);

    /* Kolom 2: criteriumtekst + scores */
    const tdTekst = document.createElement('td');
    tdTekst.style.verticalAlign = 'top';
    tdTekst.style.padding       = '0.05cm 0.2cm 0.05cm 0';
    tdTekst.style.fontFamily    = 'var(--font)';
    tdTekst.style.fontSize      = 'var(--fontsize)';

    /* Criteriumtekst */
    const divCriterium = document.createElement('div');
    divCriterium.appendChild(htmlSpan(criterium.tekst));
    tdTekst.appendChild(divCriterium);

    /* Scores met insprong = breedte van .lbl = 0.65cm */
    criterium.scores.forEach(score => {
      const divScore = document.createElement('div');
      divScore.style.display     = 'flex';
      divScore.style.alignItems  = 'baseline';
      divScore.style.paddingLeft = '0.65cm';

      const spanLbl = document.createElement('span');
      spanLbl.style.fontFamily  = 'var(--font)';
      spanLbl.style.fontSize    = FONT_KLEIN;
      spanLbl.style.fontWeight  = 'bold';
      spanLbl.style.color       = 'var(--groen-donker)';
      spanLbl.style.minWidth    = '0.5cm';
      spanLbl.style.flexShrink  = '0';
      spanLbl.appendChild(htmlSpan(score.lbl));

      const spanTekst = document.createElement('span');
      spanTekst.style.fontFamily = 'var(--font)';
      spanTekst.style.fontSize   = FONT_KLEIN;
      spanTekst.style.marginLeft = '0.1cm';
      spanTekst.appendChild(htmlSpan(score.tekst));

      divScore.appendChild(spanLbl);
      divScore.appendChild(spanTekst);
      tdTekst.appendChild(divScore);
    });

    tr.appendChild(tdTekst);
    kader.appendChild(tr);
  });

  inhoud.appendChild(kader);

})();