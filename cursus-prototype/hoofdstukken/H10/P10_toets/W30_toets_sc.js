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
      tekst:  'Ik lees informatie af uit een grafiek. (BG 06.03, vraag 1)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit bijna foutloos.' },
        { lbl: 'B:', tekst: 'Ik kan bijna foutloos aflezen, maar verder werken met die informatie is soms moeilijker.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
    {
      nummer: '2|',
      tekst:  'Ik teken een grafiek bij een tabel. (6.15, vraag 2)',
      scores: [
        { lbl: 'A:', tekst: 'De grafiek is nagenoeg volledig en nauwkeurig getekend.' },
        { lbl: 'B:', tekst: 'Ik laat zien dat ik dit kan, maar de grafiek is onnauwkeurig of onvolledig.' },
        { lbl: 'C:', tekst: 'Dit lukt mij nog niet.' },
      ],
    },
    {
      nummer: '3|',
      tekst:  'Ik gebruik een formule om een tabel aan te vullen. (6.13, vraag 3)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit bijna foutloos.' },
        { lbl: 'B:', tekst: 'Ik laat duidelijk zien dat ik dit kan, maar maak veel rekenfouten.' },
        { lbl: 'C:', tekst: 'Dit lukt mij nog niet.' },
      ],
    },
    {
      nummer: '4|',
      tekst:  'Ik herken een patroon in een figuur. (6.16, vraag 4a, 5a en 6a/b)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit bijna foutloos.' },
        { lbl: 'B:', tekst: 'Ik kan dit in eenvoudige situaties, maar wat minder als het patroon moeilijker is.' },
        { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
      ],
    },
    {
      nummer: '5|',
      tekst:  'Ik beschrijf een patroon met een formule en gebruik die formule. (6.16, vraag 4b/c, 5b/c en 6c/d)',
      scores: [
        { lbl: 'A:', tekst: 'Ik vind de formules en kan ze gebruiken.' },
        { lbl: 'B:', tekst: 'Ik vind niet alle formules, maar de formules die ik vind kan ik wel gebruiken.' },
        { lbl: 'C:', tekst: 'Ik vind de formules nog niet.' },
      ],
    },
    {
      nummer: '6|',
      tekst:  'Ik los problemen op met behulp van verbanden tussen grootheden. (6.22, vraag 7)',
      scores: [
        { lbl: 'A:', tekst: 'Ik kan dit bijna foutloos.' },
        { lbl: 'B:', tekst: 'Ik laat zien wat ik doe en mijn werkwijze klopt, maar het antwoord is niet volledig juist.' },
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