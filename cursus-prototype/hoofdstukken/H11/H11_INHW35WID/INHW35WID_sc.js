/* ============================================================
   H11 / H11_INHW35WID / INHW35WID_sc.js
   Succescriteria voor de toets
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const FONT_KLEIN = '9pt';

  const criteria = [
    {
      nummer: '1|',
      tekst:  'Ik noteer uitspraken in symbolen. (vraag 1, 6.22)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik noteer alles juist in symbolen en volgens de afspraken.' },
        { lbl: 'A:', tekst: 'Ik noteer bijna alles juist in symbolen en volg grotendeels de afspraken.' },
        { lbl: 'B:', tekst: 'Ik heb nog wat problemen met de moeilijkste uitspraken of volg de afspraken helemaal niet.' },
        { lbl: 'C:', tekst: 'Dit lukt mij nog niet.' },
      ],
    },
    {
      nummer: '2|',
      tekst:  'Ik vul de keuze van de onbekende aan. (vraag 2, 6.22)',
      scores: [
        { lbl: 'A:', tekst: 'Ik doe dit zonder fouten.' },
        { lbl: 'B:', tekst: 'Ik doe dit bijna foutloos.' },
        { lbl: 'C:', tekst: 'Dit lukt mij nog niet.' },
      ],
    },
    {
      nummer: '3|',
      tekst:  'Ik los vraagstukken op met een onbekende. (vraag 3, 6.22)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan dit foutloos en maak alle tussenstappen.' },
        { lbl: 'A:', tekst: 'Ik kan dit, maar maak niet alle tussenstappen correct.' },
        { lbl: 'B:', tekst: 'Ik kan dit bijna foutloos of ik maak te weinig tussenstappen.' },
        { lbl: 'C:', tekst: 'Dit lukt mij nog niet.' },
      ],
    },
    {
      nummer: '4|',
      tekst:  'Ik los complexere vraagstukken op met een onbekende. (vraag 4, V6.17)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan dit foutloos en maak alle tussenstappen.' },
        { lbl: 'A:', tekst: 'Ik kan dit, maar maak niet alle tussenstappen correct.' },
        { lbl: 'B:', tekst: 'Ik kan dit bijna foutloos of ik maak te weinig tussenstappen.' },
        { lbl: 'C:', tekst: 'Dit lukt mij nog niet.' },
      ],
    },
    {
      nummer: '5|',
      tekst:  'Ik maak berekeningen met ICT. (vraag 3 en 4, 6.23)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit.' },
        { lbl: 'B:', tekst: 'Ik kan dit wel, maar maak soms nog eens een fout.' },
        { lbl: 'C:', tekst: 'Ik kan dit niet.' },
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
  tdTitel.appendChild(htmlSpan('Succescriteria'));
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
      divScore.style.paddingLeft = '0.05cm';

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