// ============================================================
//  oefeningen/oe_1.js  —  Zelfevaluatie succescriteria H6
// ============================================================

window.__taakOefening = (function () {

  // ── Succescriteria voor deze oefening ─────────────────────
  const CRITERIA = [
    {
      id: 'W36WIJ2SC01',
      tekst: 'Ik gebruik het verband tussen de optelling en de aftrekking.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik gebruik het verband tussen de optelling en de aftrekking en gebruik spontaan de correcte verwoording.' },
        { waarde: 'A',  label: 'A: Ik gebruik het verband tussen de optelling en de aftrekking en ken de verwoording als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik gebruik het verband tussen de optelling en de aftrekking maar verwoord het nog niet correct.' },
        { waarde: 'C',  label: 'C: Ik gebruik het verband tussen de optelling en de aftrekking nog niet correct.' },
      ],
    },
    {
      id: 'W36WIJ2SC02',
      tekst: 'Ik kan breuken optellen en aftrekken en verwoord de rekenregel correct.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan breuken optellen en aftrekken en gebruik spontaan de correcte verwoordingen van de rekenregel.' },
        { waarde: 'A',  label: 'A: Ik kan breuken optellen en aftrekken en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan breuken optellen en aftrekken maar verwoord de rekenregel nog niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan breuken nog niet optellen en aftrekken.' },
      ],
    },
    {
      id: 'W36WIJ2SC03',
      tekst: 'Ik gebruik het verband tussen de vermenigvuldiging en de deling.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik gebruik het verband tussen de vermenigvuldiging en de deling en gebruik spontaan de correcte verwoording.' },
        { waarde: 'A',  label: 'A: Ik gebruik het verband tussen de vermenigvuldiging en de deling en ken de verwoording als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik gebruik het verband tussen de vermenigvuldiging en de deling maar verwoord het nog niet correct.' },
        { waarde: 'C',  label: 'C: Ik gebruik het verband tussen de vermenigvuldiging en de deling nog niet correct.' },
      ],
    },
    {
      id: 'W36WIJ2SC04',
      tekst: 'Ik kan positieve en negatieve breuken vermenigvuldigen en delen en verwoord de rekenregels correct.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan positieve en negatieve breuken vermenigvuldigen en delen en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { waarde: 'A',  label: 'A: Ik kan positieve en negatieve breuken vermenigvuldigen en delen en ken de verwoording van de rekenregels als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan positieve en negatieve breuken vermenigvuldigen en delen maar verwoord de rekenregels niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan positieve en negatieve breuken nog niet vermenigvuldigen en delen.' },
      ],
    },
    {
      id: 'W36WIJ2SC05',
      tekst: 'Ik gebruik de begrippen bij bewerkingen en breuken correct: optelling, termen, som, aftrekking, aftrektal, aftrekker, verschil, vermenigvuldiging, factoren, product, deling, deeltal, deler, quotiënt, teller, noemer, breukstreep, tegengestelde, omgekeerde.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik gebruik altijd spontaan de correcte begrippen.' },
        { waarde: 'A',  label: 'A: Ik gebruik meestal de correcte begrippen en kan mezelf corrigeren als iemand mij daarop wijst.' },
        { waarde: 'B',  label: 'B: Ik gebruik meestal de correcte begrippen, maar ken er een aantal niet.' },
        { waarde: 'C',  label: 'C: Ik gebruik de correcte begrippen meestal nog niet.' },
      ],
    },
    {
      id: 'W36WIJ2SC06',
      tekst: 'Ik kan machten van rationale getallen berekenen.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan machten van rationale getallen berekenen en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { waarde: 'A',  label: 'A: Ik kan machten van rationale getallen berekenen en ken de verwoording van de rekenregels als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan machten van rationale getallen berekenen maar verwoord de rekenregels nog niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan machten van rationale getallen nog niet berekenen.' },
      ],
    },
    {
      id: 'W36WIJ2SC07',
      tekst: 'Ik kan het teken van een macht afleiden uit de opgave.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan het teken van een macht afleiden uit de opgave en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { waarde: 'A',  label: 'A: Ik kan het teken van een macht afleiden uit de opgave en ken de verwoording van de rekenregels als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan het teken van een macht afleiden uit de opgave maar verwoord de rekenregels nog niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan het teken van een macht nog niet afleiden uit de opgave.' },
      ],
    },
    {
      id: 'W36WIJ2SC08',
      tekst: 'Ik gebruik de begrippen bij machten correct: macht, grondtal, exponent, vermenigvuldiging, factor, tegengestelde.',
      leerplandoelcode: '6.1',
      opties: [
        { waarde: 'A+', label: 'A+: Ik gebruik altijd spontaan de correcte begrippen.' },
        { waarde: 'A',  label: 'A: Ik gebruik meestal de correcte begrippen en kan mezelf corrigeren als iemand mij daarop wijst.' },
        { waarde: 'B',  label: 'B: Ik gebruik meestal de correcte begrippen, maar ken er een aantal niet.' },
        { waarde: 'C',  label: 'C: Ik gebruik de correcte begrippen meestal nog niet.' },
      ],
    },
    {
      id: 'W36WIJ2SC09',
      tekst: 'Ik herleid lettervormen en verwoord de rekenregel correct.',
      leerplandoelcode: '6.12',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan lettervormen herleiden en gebruik spontaan de correcte verwoordingen van de rekenregel.' },
        { waarde: 'A',  label: 'A: Ik kan lettervormen herleiden en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan lettervormen herleiden maar verwoord de rekenregels niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan lettervormen nog niet herleiden.' },
      ],
    },
    {
      id: 'W36WIJ2SC10',
      tekst: 'Ik vermenigvuldig lettervormen met een getal en verwoord de rekenregel correct.',
      leerplandoelcode: '6.12',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan een lettervorm vermenigvuldigen met een getal en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { waarde: 'A',  label: 'A: Ik kan een lettervorm vermenigvuldigen met een getal en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan een lettervorm vermenigvuldigen met een getal maar verwoord de rekenregels niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan een lettervorm nog niet vermenigvuldigen met een getal.' },
      ],
    },
    {
      id: 'W36WIJ2SC11',
      tekst: 'Ik gebruik de begrippen bij lettervormen correct: coëfficiënt, letterdeel.',
      leerplandoelcode: '6.12',
      opties: [
        { waarde: 'A+', label: 'A+: Ik gebruik altijd spontaan de correcte begrippen.' },
        { waarde: 'A',  label: 'A: Ik gebruik meestal de correcte begrippen en kan mezelf corrigeren als iemand mij daarop wijst.' },
        { waarde: 'B',  label: 'B: Ik gebruik meestal de correcte begrippen, maar ken er een aantal niet.' },
        { waarde: 'C',  label: 'C: Ik gebruik de correcte begrippen meestal nog niet.' },
      ],
    },
    {
      id: 'W36WIJ2SC12',
      tekst: 'Ik herken een vergelijking en gebruik het begrip onbekende.',
      leerplandoelcode: '6.11',
      opties: [
        { waarde: 'A', label: 'A: Ik kan uitleggen hoe je een vergelijking herkent.' },
        { waarde: 'B', label: 'B: Ik kan bijna foutloos uitleggen hoe je een vergelijking herkent.' },
        { waarde: 'C', label: 'C: Ik kan nog niet zo goed uitleggen hoe je een vergelijking herkent.' },
      ],
    },
    {
      id: 'W36WIJ2SC13',
      tekst: 'Ik los vergelijkingen op en verwoord de stappen correct.',
      leerplandoelcode: '6.17',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan een vergelijking oplossen en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { waarde: 'A',  label: 'A: Ik kan een vergelijking oplossen en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan een vergelijking oplossen maar verwoord de rekenregels niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan een vergelijking nog niet oplossen.' },
      ],
    },
    {
      id: 'W36WIJ2SC14',
      tekst: 'Ik controleer de oplossing van een vergelijking en verwoord de werkwijze correct.',
      leerplandoelcode: '6.13',
      opties: [
        { waarde: 'A+', label: 'A+: Ik kan de oplossing van een vergelijking controleren en gebruik spontaan de correcte verwoordingen van de rekenregels.' },
        { waarde: 'A',  label: 'A: Ik kan de oplossing van een vergelijking controleren en ken de verwoording van de rekenregel als mij dat gevraagd wordt.' },
        { waarde: 'B',  label: 'B: Ik kan de oplossing van een vergelijking controleren maar verwoord de rekenregels niet correct.' },
        { waarde: 'C',  label: 'C: Ik kan de oplossing van een vergelijking nog niet controleren.' },
      ],
    },
    {
      id: 'W36WIJ2SC15',
      tekst: 'Ik gebruik de begrippen bij vergelijkingen correct: linkerlid, rechterlid, onbekende.',
      leerplandoelcode: '6.17',
      opties: [
        { waarde: 'A+', label: 'A+: Ik gebruik altijd spontaan de correcte begrippen.' },
        { waarde: 'A',  label: 'A: Ik gebruik meestal de correcte begrippen en kan mezelf corrigeren als iemand mij daarop wijst.' },
        { waarde: 'B',  label: 'B: Ik gebruik meestal de correcte begrippen, maar ken er een aantal niet.' },
        { waarde: 'C',  label: 'C: Ik gebruik de correcte begrippen meestal nog niet.' },
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

    const inhoud = maakOefening({ id: 'oe_1', nummer: 1, container });

    // ── Opgave ─────────────────────────────────────────────
    voegTekstToe(
      inhoud,
      'Duid de score aan die jij jezelf zou geven voor elk succescriterium.',
      ['intro-tekst']
    );

    // ── Tabel met succescriteria ──────────────────────────
    const { tbody } = maakOefTabel(inhoud, 1, false);
    const tussenruimte = '0.5cm';

    CRITERIA.forEach((criterium, idx) => {
      const huidigAntwoord = _antwoorden[idx]?.antwoord || null;

      // Tussenruimte boven elk succescriterium
      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);

      // Label-rij: nummer + tekst (+ leerplandoelcode)
      const trL = document.createElement('tr');
      const tekstMetCode = `${criterium.tekst} (${criterium.leerplandoelcode})`;
      const tdL = maakOpTdaz(String(idx + 1), tekstMetCode, false);
      tdL.classList.add('kolom-links');
      tdL.querySelector('.rij').style.cssText = `
        display: flex;
        align-items: flex-start;
        height: auto;
        min-height: var(--rij-hoogte);
        padding-top: 0.1cm;
      `;
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
      tdA.style.paddingTop = '0.2cm';
      tdA.style.paddingBottom = '0.2cm';
      tdA.style.paddingLeft = '0.65cm';

      const groepNaam = `sc_${criterium.id}`;
      const radios = [];

      criterium.opties.forEach(optie => {
        const label = document.createElement('label');
        label.style.cssText = `
          display: flex;
          align-items: flex-start;
          gap: 6px;
          margin-bottom: 0.2cm;
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
          margin-top: 0;
          cursor: ${verbeterd ? 'default' : 'pointer'};
          accent-color: var(--lila-rand, #7b1fa2);
          flex-shrink: 0;
        `;

        const [, prefix, tekst] = optie.label.match(/^([^:]+:)\s*(.*)$/);

        const prefixSpan = document.createElement('span');
        prefixSpan.textContent = prefix;
        prefixSpan.style.cssText = `
          flex-shrink: 0;
          width: 0.6cm;
          display: inline-block;
        `;

        const tekstSpan = document.createElement('span');
        tekstSpan.textContent = tekst;
        tekstSpan.style.cssText = `
          flex-shrink: 1;
          min-width: 0;
          white-space: normal;
          overflow-wrap: break-word;
        `;

        label.appendChild(radio);
        label.appendChild(prefixSpan);
        label.appendChild(tekstSpan);
        tdA.appendChild(label);
        radios.push(radio);
      });

      _radioGroepen.push({ idx, radios });

      trA.appendChild(tdA);
      tbody.appendChild(trA);
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
