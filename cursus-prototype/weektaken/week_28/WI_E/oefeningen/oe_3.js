// ============================================================
//  oefeningen/oe_1.js  —  Voorbeeld oefening
//
//  Elke oefening exporteert via window.__taakOefening:
//    render(container, antwoorden, verbeterd)
//    getAntwoorden()  → array (null = niet ingevuld)
//
//  Het aantal null-waarden bij init bepaalt het aantal verwachte
//  antwoorden (voor de eindpagina-telling).
// ============================================================

window.__taakOefening = (function() {

  // ── Staat van deze oefening ───────────────────────────────
  // Pas het aantal antwoorden aan: één null per verwacht antwoord
  let _antwoorden = [
    {antwoord: null, score: 0},
  ];
  let _invoerVelden = [];

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd) {
    // Herstel opgeslagen antwoorden indien aanwezig
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a
          : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < 1) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _invoerVelden = [];
    container.innerHTML = '';

    // ── Oefening opbouwen via helpers ─────────────────────
    const inhoud = maakOefening({ id: 'oe_3', nummer: 3, container });

    voegTekstToe(inhoud, 'Kun jij goed inschatten hoelang een minuut duurt?<br>Lees de instructies en voer uit.', ['intro-tekst']);
    voegLijstToe(inhoud, 'bullet', '0cm', '0.1cm', 
      [
        'Start de klok.',
        'Sluit je ogen en tel tot 60.',
        'Open je ogen en klik op stop.',
        'Dien je antwoord in of probeer opnieuw.'
      ])    

    const { tbody } = maakOefTabel(inhoud, 1, false);

    // ── Stopwatch-rij ─────────────────────────────────────────────
        let _interval = null;
        let _seconden = 0;

        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.classList.add('kolom-links');
        td.style.paddingTop = '0.3cm';

        // Tijdweergave
        const display = document.createElement('div');
        display.style.cssText = `
          font-size: 2rem; font-weight: bold; font-family: var(--font);
          color: var(--groen-donker); margin-bottom: 0.3cm;
        `;
        display.textContent = '0 s';

        // Knoppen-container
        const knoppen = document.createElement('div');
        knoppen.style.cssText = 'display: flex; gap: 0.3cm;';

        // ── Knop: start ───────────────────────────────────────────────
        const knopStart = document.createElement('button');
        knopStart.className = 'knop-primair';
        knopStart.textContent = 'Start';

        // ── Knop: stop ────────────────────────────────────────────────
        const knopStop = document.createElement('button');
        knopStop.className = 'knop-primair';
        knopStop.textContent = 'Stop';
        knopStop.style.display = 'none';

        // ── Knop: indienen ────────────────────────────────────────────
        const knopIndienen = document.createElement('button');
        knopIndienen.className = 'knop-primair';
        knopIndienen.textContent = 'Indienen';
        knopIndienen.style.display = 'none';

        // ── Knop: opnieuw ─────────────────────────────────────────────
        const knopOpnieuw = document.createElement('button');
        knopOpnieuw.className = 'knop-secundair';
        knopOpnieuw.textContent = 'Opnieuw';
        knopOpnieuw.style.display = 'none';

        // ── Logica ────────────────────────────────────────────────────
        knopStart.addEventListener('click', () => {
          _seconden = 0;
          display.textContent = '0 s';
          _interval = setInterval(() => {
            _seconden++;
            display.textContent = _seconden + ' s';
          }, 1000);
          knopStart.style.display   = 'none';
          knopStop.style.display    = '';
        });

        knopStop.addEventListener('click', () => {
          clearInterval(_interval);
          knopStop.style.display     = 'none';
          knopIndienen.style.display = '';
          knopOpnieuw.style.display  = '';
        });

        knopIndienen.addEventListener('click', () => {
          _antwoorden[0].antwoord    = String(_seconden);
          knopIndienen.style.display = 'none';
          knopOpnieuw.style.display  = 'none';
          knopStart.style.display    = 'none';
          display.style.color        = 'var(--groen-midden)';
        });

        knopOpnieuw.addEventListener('click', () => {
          clearInterval(_interval);
          _seconden = 0;
          display.textContent        = '0 s';
          display.style.color        = 'var(--groen-donker)';
          knopIndienen.style.display = 'none';
          knopOpnieuw.style.display  = 'none';
          knopStart.style.display    = '';
          knopStop.style.display     = 'none';
        });

        if (verbeterd) {
          display.textContent = (_antwoorden[0].antwoord ?? '?') + ' s';
          knopStart.style.display = 'none';
          // alle knoppen verborgen, niets meer mogelijk
        } else if (_antwoorden[0].antwoord !== null) {
          display.textContent = _antwoorden[0].antwoord + ' s';
          display.style.color   = 'var(--groen-midden)';
          knopStart.style.display   = 'none';
          knopOpnieuw.style.display = '';
        }

        knoppen.appendChild(knopStart);
        knoppen.appendChild(knopStop);
        knoppen.appendChild(knopIndienen);
        knoppen.appendChild(knopOpnieuw);

        td.appendChild(display);
        td.appendChild(knoppen);
        tr.appendChild(td);
        tbody.appendChild(tr);    
                        

  }

  function getAntwoorden() {
    _invoerVelden.forEach((veld, i) => {
      _antwoorden[i].antwoord = veld.value.trim() || null;
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();
