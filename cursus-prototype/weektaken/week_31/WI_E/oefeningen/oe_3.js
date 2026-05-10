// ============================================================
//  oefeningen/oe_3.js  —  Zelfevaluatie succescriteria
//
//  Leerlingen beoordelen zichzelf op 5 succescriteria
//  aan de hand van hun verbetering (oe_2).
//  Scores worden opgeslagen in de databank.
// ============================================================

window.__taakOefening = (function () {

  // ── Succescriteria voor deze oefening ─────────────────────
  const CRITERIA = [
    {
      id: 'W31WIESC02',
      tekst: 'Ik noteer een lettervorm volgens de afspraken. (vraag 1)',
      plaatscode: '10.2',
      opties: [
        { waarde: 'A', label: 'A: Ik haal 4 op 4.' },
        { waarde: 'B', label: 'B: Ik haal minstens 3 op 4.' },
        { waarde: 'C', label: 'C: Ik haal minder dan 3 op 4.' },
      ],
    },
    {
      id: 'W31WIESC03',
      tekst: 'Ik bereken de getalwaarde van een lettervorm. (vraag 2)',
      plaatscode: '10.3',
      opties: [
        { waarde: 'A', label: 'A: Ik pas het principe juist toe in 2 oefeningen.' },
        { waarde: 'B', label: 'B: Ik pas het principe juist toe in 1 oefening.' },
        { waarde: 'C', label: 'C: Ik pas het principe nog niet juist toe.' },
      ],
    },
    {
      id: 'W31WIESC04',
      tekst: 'Ik herleid een lettervorm. (vraag 3)',
      plaatscode: '10.4',
      opties: [
        { waarde: 'A', label: 'A: Ik haal minstens 5 op 6.' },
        { waarde: 'B', label: 'B: Ik haal minstens 3 op 6.' },
        { waarde: 'C', label: 'C: Ik haal minder dan 3 op 6.' },
      ],
    },
    {
      id: 'W31WIESC05',
      tekst: 'Ik vermenigvuldig een lettervorm met een getal. (vraag 4)',
      plaatscode: '10.5',
      opties: [
        { waarde: 'A', label: 'A: Ik haal minstens 3 op 4.' },
        { waarde: 'B', label: 'B: Ik haal minstens 2 op 4.' },
        { waarde: 'C', label: 'C: Ik haal minder dan 2 op 4.' },
      ],
    },
    {
      id: 'W31WIESC06',
      tekst: 'Ik reken met lettervormen. (vraag 5)',
      plaatscode: '10.6',
      opties: [
        { waarde: 'A', label: 'A: Ik haal 2 op 2.' },
        { waarde: 'B', label: 'B: Ik haal minstens 1 op 2.' },
        { waarde: 'C', label: 'C: Ik haal minder dan 1 op 2.' },
      ],
    },
  ];

  // ── Staat ─────────────────────────────────────────────────
  let _antwoorden = CRITERIA.map(() => ({ antwoord: null, score: 0 }));
  let _radioGroepen = [];

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd) {
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a
          : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < CRITERIA.length)
        _antwoorden.push({ antwoord: null, score: 0 });
    }

    _radioGroepen = [];
    container.innerHTML = '';

    const inhoud = maakOefening({ id: 'oe_3', nummer: 3, container });

    // ── Intro-tekst ───────────────────────────────────────
    voegTekstToe(
      inhoud,
      'Evalueer jezelf. Duid bij elk succescriterium de juiste score aan. (Bij het succescriterium staat steeds de vraag waartoe het behoort.)',
      ['intro-tekst']
    );

    // ── Waarschuwing in lila ──────────────────────────────
    const waarschuwing = document.createElement('div');
    waarschuwing.style.cssText = `
      font-weight: bold;
      color: var(--lila-tekst, #7b1fa2);
      margin-bottom: 0.4cm;
      font-size: 10pt;
      font-family: var(--font, Arial);
    `;
    waarschuwing.textContent =
      'Evalueer correct. Deze score is niet belangrijk voor je coach, wel voor jou. Zo weet je op welk succescriterium je nog moet oefenen.';
    inhoud.appendChild(waarschuwing);

    // ── Tabel met vragen ──────────────────────────────────
    const { tbody } = maakOefTabel(inhoud, 1, false);
    const tussenruimte = '0.3cm';

    CRITERIA.forEach((criterium, idx) => {
      const huidigAntwoord = _antwoorden[idx]?.antwoord || null;

      // Label-rij: plaatscode + tekst
      const trL = document.createElement('tr');
      const tdL = maakOpTdaz(criterium.plaatscode.split('.')[1], criterium.tekst, false);
      tdL.classList.add('kolom-links');
      const tdLR = document.createElement('td');
      tdLR.classList.add('kolom-rechts');
      trL.appendChild(tdL);
      trL.appendChild(tdLR);
      tbody.appendChild(trL);

      // Antwoord-rij: radio buttons
      const trA = document.createElement('tr');
      const tdA = document.createElement('td');
      tdA.classList.add('kolom-links');
      tdA.colSpan = 2;
      tdA.style.paddingBottom = '0.15cm';

      const groepNaam = `sc_${criterium.id}`;
      const radios = [];

      criterium.opties.forEach(optie => {
        const label = document.createElement('label');
        label.style.cssText = `
          display: flex;
          align-items: flex-start;
          gap: 6px;
          margin-bottom: 4px;
          font-family: var(--font, Arial);
          font-size: 10pt;
          cursor: ${verbeterd ? 'default' : 'pointer'};
          color: var(--tekst, #1a1a1a);
        `;

        const radio = document.createElement('input');
        radio.type    = 'radio';
        radio.name    = groepNaam;
        radio.value   = optie.waarde;
        radio.checked = huidigAntwoord === optie.waarde;
        radio.disabled = verbeterd;
        radio.style.cssText = `
          margin-top: 3px;
          cursor: ${verbeterd ? 'default' : 'pointer'};
          accent-color: var(--lila-rand, #7b1fa2);
          flex-shrink: 0;
        `;

        const span = document.createElement('span');
        span.textContent = optie.label;

        label.appendChild(radio);
        label.appendChild(span);
        tdA.appendChild(label);
        radios.push(radio);
      });

      _radioGroepen.push({ idx, radios });

      trA.appendChild(tdA);
      tbody.appendChild(trA);

      // Tussenruimte
      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);
    });
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    _radioGroepen.forEach(({ idx, radios }) => {
      const geselecteerd = radios.find(r => r.checked);
      _antwoorden[idx].antwoord = geselecteerd ? geselecteerd.value : null;
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();
