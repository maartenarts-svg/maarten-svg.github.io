/* ============================================================
   H11 / JURY / W36WIJ_sc.js
   Succescriteria voor de jury deel a
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const FONT_KLEIN = '9pt';

  const criteria = [
    {
      nummer: '6|',
      tekst:  'Ik kan machten van rationale getallen berekenen. (6.1)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan machten van rationale getallen berekenen en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { lbl: 'A:', tekst: 'Ik kan machten van rationale getallen berekenen en ken de verwoording van de rekenregels als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan machten van rationale getallen berekenen maar verwoord de rekenregels nog niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan machten van rationale getallen nog niet berekenen.' },
      ],
    },
    {
      nummer: '7|',
      tekst:  'Ik kan het teken van een macht afleiden uit de opgave. (6.1)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan het teken van een macht afleiden uit de opgave en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { lbl: 'A:', tekst: 'Ik kan het teken van een macht afleiden uit de opgave en ken de verwoording van de rekenregels als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan het teken van een macht afleiden uit de opgave maar verwoord de rekenregels nog niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan het teken van een macht nog niet afleiden uit de opgave.' },
      ],
    },
    {
      nummer: '8|',
      tekst:  'Ik gebruik de begrippen bij machten correct: macht, grondtal, exponent, vermenigvuldiging, factor, tegengestelde. (6.1)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik gebruik altijd spontaan de correcte begrippen.' },
        { lbl: 'A:', tekst: 'Ik gebruik meestal de correcte begrippen en kan mezelf corrigeren als iemand mij daarop wijst.' },
        { lbl: 'B:', tekst: 'Ik gebruik meestal de correcte begrippen, maar ken er een aantal niet.' },
        { lbl: 'C:', tekst: 'Ik gebruik de correcte begrippen meestal nog niet.' },
      ],
    },
    {
      nummer: '9|',
      tekst:  'Ik herleid lettervormen en verwoord de rekenregel correct. (6.12)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan lettervormen herleiden en gebruik spontaan de correcte verwoordingen van de rekenregel.' },
        { lbl: 'A:', tekst: 'Ik kan lettervormen herleiden en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan lettervormen herleiden maar verwoord de rekenregels niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan lettervormen nog niet herleiden.' },
      ],
    },
    {
      nummer: '10|',
      tekst:  'Ik vermenigvuldig lettervormen met een getal en verwoord de rekenregel correct. (6.12)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan een lettervorm vermenigvuldigen met een getal en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { lbl: 'A:', tekst: 'Ik kan een lettervorm vermenigvuldigen met een getal en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan een lettervorm vermenigvuldigen met een getal maar verwoord de rekenregels niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan een lettervorm nog niet vermenigvuldigen met een getal.' },
      ],
    },
    {
      nummer: '11|',
      tekst:  'Ik gebruik de begrippen bij lettervormen correct: coëfficiënt, letterdeel. (6.12)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik gebruik altijd spontaan de correcte begrippen.' },
        { lbl: 'A:', tekst: 'Ik gebruik meestal de correcte begrippen en kan mezelf corrigeren als iemand mij daarop wijst.' },
        { lbl: 'B:', tekst: 'Ik gebruik meestal de correcte begrippen, maar ken er een aantal niet.' },
        { lbl: 'C:', tekst: 'Ik gebruik de correcte begrippen meestal nog niet.' },
      ],
    },
    {
      nummer: '12|',
      tekst:  'Ik herken een vergelijking en gebruik het begrip onbekende. (6.11)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan uitleggen hoe je een vergelijking herkent.' },
        { lbl: 'B:', tekst: 'Ik kan bijna foutloos uitleggen hoe je een vergelijking herkent.' },
        { lbl: 'C:', tekst: 'Ik kan nog niet zo goed uitleggen hoe je een vergelijking herkent.' },
      ],
    },
    {
      nummer: '13|',
      tekst:  'Ik los vergelijkingen op en verwoord de stappen correct. (6.17)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan een vergelijking oplossen en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { lbl: 'A:', tekst: 'Ik kan een vergelijking oplossen en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan een vergelijking oplossen maar verwoord de rekenregels niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan een vergelijking nog niet oplossen.' },
      ],
    },
    {
      nummer: '14|',
      tekst:  'Ik controleer de oplossing van een vergelijking en verwoord de werkwijze correct. (6.13)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan de oplossing van een vergelijking controleren en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { lbl: 'A:', tekst: 'Ik kan de oplossing van een vergelijking controleren en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan de oplossing van een vergelijking controleren maar verwoord de rekenregels niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan de oplossing van een vergelijking nog niet controleren.' },
      ],
    },
    {
      nummer: '15|',
      tekst:  'Ik gebruik de begrippen bij vergelijkingen correct: linkerlid, rechterlid, onbekende. (6.17)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik gebruik altijd spontaan de correcte begrippen.' },
        { lbl: 'A:', tekst: 'Ik gebruik meestal de correcte begrippen en kan mezelf corrigeren als iemand mij daarop wijst.' },
        { lbl: 'B:', tekst: 'Ik gebruik meestal de correcte begrippen, maar ken er een aantal niet.' },
        { lbl: 'C:', tekst: 'Ik gebruik de correcte begrippen meestal nog niet.' },
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
