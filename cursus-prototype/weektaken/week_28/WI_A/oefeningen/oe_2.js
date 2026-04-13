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
    const inhoud = maakOefening({ id: 'oe_1', nummer: 1, container });

    voegTekstToe(inhoud, 'Bereken. Gebruik de commutatieve eigenschap.', ['intro-tekst']);

    const { tbody } = maakOefTabel(inhoud, 2, true);

    // Labels-rij
    const trL1 = document.createElement('tr');
    const td1 = maakOpTdaz('a','25 · 41 · 4',false)
    td1.classList.add('kolom-links');
    const td2 = document.createElement('td');
    td2.classList.add('kolom-rechts');
    trL1.appendChild(td1);
    trL1.appendChild(td2);
    tbody.appendChild(trL1);

    // Antwoord-rij met invoervelden
    const { tr, invoer } = maakTrOpl(_antwoorden, verbeterd, 0, true,'geheel', '4100', true, true);
    _invoerVelden.push(invoer);
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
