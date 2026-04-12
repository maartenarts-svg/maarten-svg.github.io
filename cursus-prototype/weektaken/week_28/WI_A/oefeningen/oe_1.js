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
  let _antwoorden = [null, null, null];
  let _invoerVelden = [];

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd) {
    // Herstel opgeslagen antwoorden indien aanwezig
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = [...opgeslagenAntwoorden];
      // Zorg dat de lengte klopt
      while (_antwoorden.length < 3) _antwoorden.push(null);
    }

    _invoerVelden = [];
    container.innerHTML = '';

    // ── Oefening opbouwen via helpers ─────────────────────
    const inhoud = maakOefening({ id: 'oe_1', nummer: 1, container });

    voegTekstToe(inhoud, 'Bereken. Gebruik de commutatieve eigenschap.', ['intro-tekst']);

    const { tbody } = maakOefTabel(inhoud, 3, true);

    // Labels-rij
    const trL = document.createElement('tr');
    ['a', 'b', 'c'].forEach((lbl, i) => {
      const opgaven = ['25 · 41 · 4', '86 + 237 + 114', '-2 · 17 · 50'];
      const td = maakOpTdaz('', opgaven[i], false);
      td.classList.add(i === 0 ? 'kolom-links' : i === 1 ? 'kolom-midden' : 'kolom-rechts');
      trL.appendChild(td);
    });
    tbody.appendChild(trL);

    // Antwoord-rij met invoervelden
    const trA = document.createElement('tr');
    ['kolom-links', 'kolom-midden', 'kolom-rechts'].forEach((kls, i) => {
      const td  = document.createElement('td');
      td.classList.add(kls);
      const rij = document.createElement('div');
      rij.classList.add('rij');

      const invoer = document.createElement('input');
      invoer.type  = 'text';
      invoer.style.cssText = `
        flex: 1; border: 1.5px solid var(--groen-donker, #4a7c59); 
        font-family: var(--font, Arial); font-size: var(--fontsize, 10pt);
        color: var(--tekst, #1a1a1a); background: transparent;
        padding: 0 0.1cm; outline: none; height: 0.9cm;
      `;
      invoer.value       = _antwoorden[i] ?? '';
      invoer.placeholder = '…';
      invoer.disabled    = verbeterd || false;

      invoer.addEventListener('input', () => {
        _antwoorden[i] = invoer.value.trim() || null;
      });

      _invoerVelden.push(invoer);

      // Correctie tonen in verbeterd-modus
      if (verbeterd) {
        const correcties = ['4 100', '437', '-1 700'];
        const corr = document.createElement('span');
        corr.style.cssText = `
          color: var(--blauw-oplossing, #1a4fa0);
          font-family: var(--font-oplossing, 'Comic Sans MS');
          font-size: var(--fontsize, 10pt);
          margin-left: 0.3cm;
        `;
        corr.textContent = correcties[i];
        rij.appendChild(corr);
      }

      rij.appendChild(invoer);
      td.appendChild(rij);
      trA.appendChild(td);
    });
    tbody.appendChild(trA);
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    // Lees actuele waarden uit invoervelden
    _invoerVelden.forEach((veld, i) => {
      _antwoorden[i] = veld.value.trim() || null;
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();
