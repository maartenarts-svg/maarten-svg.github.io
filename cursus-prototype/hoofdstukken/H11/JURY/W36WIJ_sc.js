/* ============================================================
   H11 / JURY / W36WIJ_sc.js
   Succescriteria voor de jury deel a
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const FONT_KLEIN = '9pt';

  const criteria = [
    {
      nummer: '1|',
      tekst:  'Ik gebruik het verband tussen de optelling en de aftrekking. (6.1)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik gebruik het verband tussen de optelling en de aftrekking en gebruik spontaan de correcte verwoording.' },
        { lbl: 'A:', tekst: 'Ik gebruik het verband tussen de optelling en de aftrekking en ken de verwoording als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik gebruik het verband tussen de optelling en de aftrekking maar verwoord het nog niet correct.' },
        { lbl: 'C:', tekst: 'Ik gebruik het verband tussen de optelling en de aftrekking nog niet correct.' },
      ],
    },
    {
      nummer: '2|',
      tekst:  'Ik kan breuken optellen en aftrekken en verwoord de rekenregel correct. (6.1)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan breuken optellen en aftrekken en gebruik spontaan de correcte verwoordingen van de rekenregel.' },
        { lbl: 'A:', tekst: 'Ik kan breuken optellen en aftrekken en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan breuken optellen en aftrekken maar verwoord de rekenregel nog niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan breuken nog niet optellen en aftrekken.' },
      ],
    },
    {
      nummer: '3|',
      tekst:  'Ik gebruik het verband tussen de vermenigvuldiging en de deling. (6.1)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik gebruik het verband tussen de vermenigvuldiging en de deling en gebruik spontaan de correcte verwoording.' },
        { lbl: 'A:', tekst: 'Ik gebruik het verband tussen de vermenigvuldiging en de deling en ken de verwoording als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik gebruik het verband tussen de vermenigvuldiging en de deling maar verwoord het nog niet correct.' },
        { lbl: 'C:', tekst: 'Ik gebruik het verband tussen de vermenigvuldiging en de deling nog niet correct.' },
      ],
    },
    {
      nummer: '4|',
      tekst:  'Ik kan positieve en negatieve breuken vermenigvuldigen en delen en verwoord de rekenregels correct. (6.1)',
      scores: [
        { lbl: 'A+:', tekst: 'Ik kan positieve en negatieve breuken vermenigvuldigen en delen en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { lbl: 'A:', tekst: 'Ik kan positieve en negatieve breuken vermenigvuldigen en delen en ken de verwoording van de rekenregels als mij dat gevraagd wordt.' },
        { lbl: 'B:', tekst: 'Ik kan positieve en negatieve breuken vermenigvuldigen en delen maar verwoord de rekenregels niet correct.' },
        { lbl: 'C:', tekst: 'Ik kan positieve en negatieve breuken nog niet vermenigvuldigen en delen.' },
      ],
    },
    {
      nummer: '5|',
      tekst:  'Ik gebruik de begrippen bij bewerkingen en breuken correct: optelling, termen, som, aftrekking, aftrektal, aftrekker, verschil, vermenigvuldiging, factoren, product, deling, deeltal, deler, quotiënt, teller, noemer, breukstreep, tegengestelde, omgekeerde. (6.1)',
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
