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
      tekst:  'Ik bereken het gemiddelde, de mediaan en de modus bij een gegevensset. (06.19)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan de drie getallen foutloos berekenen.' },
        { lbl: 'B:', tekst: 'Ik kan twee van de drie getallen foutloos berekenen.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
    {
      nummer: '2|',
      tekst:  'Ik verwoord de betekenis van de mediaan en de modus bij gegevenssets. (06.19)',
      scores: [
        { lbl: 'A:', tekst: 'Ik verwoord de betekenis in de context en gebruik hierbij correcte Nederlandse zinnen.' },
        { lbl: 'B:', tekst: 'Ik verwoord de betekenis, maar ik gebruik de context onvoldoende of ik maak geen correcte Nederlandse zinnen.' },
        { lbl: 'C:', tekst: 'Ik kan de betekenis nog niet verwoorden.' },
      ],
    },
    {
      nummer: '3|',
      tekst:  'Ik bereken de variatiebreedte bij een gegevensset. (06.19)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
    {
      nummer: '4|',
      tekst:  'Ik verwoord de betekenis van de variatiebreedte bij gegevenssets. (06.19)',
      scores: [
        { lbl: 'A:', tekst: 'Ik verwoord de betekenis in de context en gebruik hierbij correcte Nederlandse zinnen.' },
        { lbl: 'B:', tekst: 'Ik verwoord de betekenis, maar ik gebruik de context onvoldoende of ik maak geen correcte Nederlandse zinnen.' },
        { lbl: 'C:', tekst: 'Ik kan de betekenis nog niet verwoorden.' },
      ],
    },
    {
      nummer: '5|',
      tekst:  'Ik stel gegevens voor in een frequentietabel. (06.19)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit en mijn tabel bevat bijna geen fouten.' },
        { lbl: 'B:', tekst: 'Ik kan dit, maar er staan nog wat te veel fouten in mijn tabel.' },
        { lbl: 'C:', tekst: 'Ik kan dit niet.' },
      ],
    },
    {
      nummer: '6|',
      tekst:  'Ik stel gegevens voor met behulp van een grafische voorstelling: dotplot. (06.19)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit zonder fouten en de dotplot is netjes getekend.' },
        { lbl: 'B:', tekst: 'Ik kan dit, maar maak nog een klein aantal fouten en/of de dotplot is niet netjes getekend.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
    {
      nummer: '7|',
      tekst:  'Ik voer een statistisch onderzoek uit. (06.19)',
      scores: [
        { lbl: 'A:', tekst: 'Ik vul mijn verslag volledig, bijna foutloos en verzorgd aan.' },
        { lbl: 'B:', tekst: 'Ik vul het verslag aan, maar het bevat nog wat fouten en het is onvolledig en/of niet verzorgd.' },
        { lbl: 'C:', tekst: 'Ik doe dit nog niet voldoende.' },
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
  col1.style.width = 'calc(0.65cm)';
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
      divScore.style.paddingLeft = '0.15cm';

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
  
  voegWitruimteToe(inhoud,'0.5cm');

})();