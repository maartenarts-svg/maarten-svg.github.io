// ============================================================
//  oefeningen/oe_2.js  —  STOP · START · CONTINUE reflectie
// ============================================================
window.__taakOefening = (function () {

  const OEF_ID = 'oe_2';

  // Structuur: { stop: { checks: [...], anders: '' }, start: {...}, continue: {...}, doel: { checks: [...] }, actie: '' }
  let _antwoord = {
    antwoord: {
      stop:     { checks: [], anders: '' },
      start:    { checks: [], anders: '' },
      doorgaan: { checks: [], anders: '' },
      doel:     { checks: [] },
      actie:    '',
    },
    score: 0,
  };
  let _verbeterd = false;
  let _blokkeer  = false;

  const STOP_ITEMS = [
    'Alles pas de avond voordien leren',
    'Alleen oefeningen overschrijven zonder na te denken',
    'Meteen opgeven als iets moeilijk is',
    'Niet controleren of ik de leerstof echt begrijp',
    'Zonder planning leren',
    'Mijn fouten niet bekijken',
    'Afgeleid leren (gsm, muziek, filmpjes …)',
  ];

  const START_ITEMS = [
    'Op tijd beginnen leren',
    'Mijn oefeningen opnieuw maken zonder oplossingen',
    'Fouten verbeteren en begrijpen',
    'Hulp vragen als ik iets niet snap',
    'Een korte planning maken',
    'Belangrijke regels/formules herhalen',
    'Rustig mijn toets nalezen',
    'Extra oefeningen maken',
  ];

  const CONTINUE_ITEMS = [
    'Netjes en stap voor stap werken',
    'Regelmatig herhalen',
    'Vragen stellen in de les',
    'Samenvattingen of schema\'s gebruiken',
    'Oefeningen maken uit het boek of online',
    'Mijn tijd goed verdelen tijdens de toets',
    'Rustig blijven als iets moeilijk is',
  ];

  const DOEL_ITEMS = [
    'beter plannen',
    'minder slordigheidsfouten maken',
    'meer oefenen',
    'sneller werken',
    'rustiger blijven',
    'beter begrijpen wat ik leer',
    'hulp vragen wanneer nodig',
  ];

  // ── render ──────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd, mail, slaOp, leerling) {
    _verbeterd = verbeterd;
    _blokkeer  = verbeterd || false;

    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden) && opgeslagenAntwoorden[0]) {
      const a = opgeslagenAntwoorden[0];
      if (a && typeof a === 'object' && 'antwoord' in a && a.antwoord && typeof a.antwoord === 'object') {
        _antwoord = a;
        // Zorg dat alle sleutels aanwezig zijn
        _antwoord.antwoord.stop     = _antwoord.antwoord.stop     || { checks: [], anders: '' };
        _antwoord.antwoord.start    = _antwoord.antwoord.start    || { checks: [], anders: '' };
        _antwoord.antwoord.doorgaan = _antwoord.antwoord.doorgaan || { checks: [], anders: '' };
        _antwoord.antwoord.doel     = _antwoord.antwoord.doel     || { checks: [] };
        _antwoord.antwoord.actie    = _antwoord.antwoord.actie    || '';
      }
    }

    container.innerHTML = '';
    _bouw(container);
  }

  // ── Oefening bouwen ──────────────────────────────────────
  function _bouw(container) {
    const inhoud = maakOefening({ id: OEF_ID, nummer: 2, container });

    const stijl = document.createElement('style');
    stijl.textContent = `
      .ssc-sectie { margin-bottom: 0.5cm; }
      .ssc-header {
        display: flex; align-items: center; gap: 0.2cm;
        margin-bottom: 0.15cm;
      }
      .ssc-badge {
        font-family: var(--font); font-size: 11pt; font-weight: bold;
        padding: 0.05cm 0.2cm;
        border-radius: 4px;
        flex-shrink: 0;
      }
      .ssc-badge.stop     { background: #ffcdd2; color: #b71c1c; }
      .ssc-badge.start    { background: #c8e6c9; color: #1b5e20; }
      .ssc-badge.doorgaan { background: #fff9c4; color: #f57f17; }
      .ssc-badge.doel     { background: #e3f2fd; color: #0d47a1; }
      .ssc-badge.actie    { background: #f3e5f5; color: #4a148c; }
      .ssc-vraag {
        font-family: var(--font); font-size: var(--fontsize);
        color: var(--tekst-zacht); font-style: italic;
        margin-bottom: 0.15cm;
      }
      .ssc-checks {
        display: flex; flex-direction: column; gap: 0.1cm;
      }
      .ssc-check-item {
        display: flex; align-items: center; gap: 0.1cm;
        font-family: var(--font); font-size: var(--fontsize);
        min-width: 45%;
      }
      .ssc-check-item input[type="checkbox"] {
        width: 14px; height: 14px;
        accent-color: var(--groen-donker);
        flex-shrink: 0;
        cursor: pointer;
      }
      .ssc-check-item input[type="checkbox"]:disabled { cursor: default; }
      .ssc-anders {
        display: flex; align-items: center; gap: 0.15cm;
        margin-top: 0.1cm;
        font-family: var(--font); font-size: var(--fontsize);
      }
      .ssc-invoer {
        flex: 1;
        border: none;
        border-bottom: 1.5px solid var(--sl-kleur, #b0b0b0);
        background: transparent; outline: none;
        font-family: var(--font-oplossing); font-size: var(--fontsize);
        color: var(--blauw-oplossing, #1a4fa0);
        padding: 0 2px;
      }
      .ssc-actie-rij {
        display: flex; align-items: center; gap: 0.15cm;
        font-family: var(--font); font-size: var(--fontsize);
        margin-top: 0.15cm;
      }
    `;
    inhoud.appendChild(stijl);

    // ── STOP ──
    inhoud.appendChild(_maakSectie(
      'STOP', 'stop',
      'Wat wil ik minder doen bij een volgende toetsvoorbereiding?',
      STOP_ITEMS, true
    ));

    // ── START ──
    inhoud.appendChild(_maakSectie(
      'START', 'start',
      'Wat wil ik voortaan wél proberen?',
      START_ITEMS, true
    ));

    // ── CONTINUE ──
    inhoud.appendChild(_maakSectie(
      'CONTINUE', 'doorgaan',
      'Wat werkte goed en wil ik blijven doen?',
      CONTINUE_ITEMS, true
    ));

    // ── DOEL ──
    inhoud.appendChild(_maakSectie(
      'Mijn doel voor de volgende toets', 'doel',
      'Bij de volgende wiskundetoets wil ik vooral:',
      DOEL_ITEMS, false
    ));

    // ── ACTIE ──
    const actieSectie = document.createElement('div');
    actieSectie.className = 'ssc-sectie';

    const actieHeader = document.createElement('div');
    actieHeader.className = 'ssc-header';
    const actieBadge = document.createElement('span');
    actieBadge.className = 'ssc-badge actie';
    actieBadge.textContent = 'ACTIE';
    actieHeader.appendChild(actieBadge);
    actieSectie.appendChild(actieHeader);

    const actieRij = document.createElement('div');
    actieRij.className = 'ssc-actie-rij';
    const actieLabel = document.createElement('span');
    actieLabel.textContent = 'Mijn persoonlijke actie:';
    actieRij.appendChild(actieLabel);

    const actieInvoer = document.createElement('input');
    actieInvoer.type = 'text';
    actieInvoer.className = 'ssc-invoer';
    actieInvoer.disabled = _blokkeer;
    actieInvoer.value = _antwoord.antwoord.actie || '';
    actieInvoer.addEventListener('input', () => {
      _antwoord.antwoord.actie = actieInvoer.value;
    });
    actieRij.appendChild(actieInvoer);
    actieSectie.appendChild(actieRij);
    inhoud.appendChild(actieSectie);
  }

  // ── Sectie bouwen ─────────────────────────────────────────
  function _maakSectie(titel, sleutel, vraag, items, metAnders) {
    const sectie = document.createElement('div');
    sectie.className = 'ssc-sectie';

    // Header met badge
    const header = document.createElement('div');
    header.className = 'ssc-header';
    const badge = document.createElement('span');
    badge.className = `ssc-badge ${sleutel}`;
    badge.textContent = titel;
    header.appendChild(badge);
    sectie.appendChild(header);

    // Vraag
    const vraagEl = document.createElement('div');
    vraagEl.className = 'ssc-vraag';
    vraagEl.textContent = vraag;
    sectie.appendChild(vraagEl);

    // Checkboxes
    const checksWrap = document.createElement('div');
    checksWrap.className = 'ssc-checks';

    const opgeslagenChecks = (sleutel === 'doel')
      ? (_antwoord.antwoord.doel?.checks || [])
      : (_antwoord.antwoord[sleutel]?.checks || []);

    items.forEach((item, idx) => {
      const label = document.createElement('label');
      label.className = 'ssc-check-item';

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.disabled = _blokkeer;
      cb.checked = opgeslagenChecks.includes(idx);
      cb.addEventListener('change', () => {
        const arr = sleutel === 'doel'
          ? _antwoord.antwoord.doel.checks
          : _antwoord.antwoord[sleutel].checks;
        if (cb.checked) {
          if (!arr.includes(idx)) arr.push(idx);
        } else {
          const pos = arr.indexOf(idx);
          if (pos > -1) arr.splice(pos, 1);
        }
      });

      label.appendChild(cb);
      const tekst = document.createElement('span');
      tekst.textContent = item;
      label.appendChild(tekst);
      checksWrap.appendChild(label);
    });

    sectie.appendChild(checksWrap);

    // Anders-veld
    if (metAnders) {
      const andersRij = document.createElement('div');
      andersRij.className = 'ssc-anders';
      const andersLabel = document.createElement('span');
      andersLabel.textContent = 'Anders:';
      andersRij.appendChild(andersLabel);

      const andersInvoer = document.createElement('input');
      andersInvoer.type = 'text';
      andersInvoer.className = 'ssc-invoer';
      andersInvoer.disabled = _blokkeer;
      andersInvoer.value = _antwoord.antwoord[sleutel]?.anders || '';
      andersInvoer.addEventListener('input', () => {
        _antwoord.antwoord[sleutel].anders = andersInvoer.value;
      });
      andersRij.appendChild(andersInvoer);
      sectie.appendChild(andersRij);
    }

    return sectie;
  }

  // ── getAntwoorden ────────────────────────────────────────
  function getAntwoorden() {
    return [{ ..._antwoord }];
  }

  return { render, getAntwoorden };
})();
