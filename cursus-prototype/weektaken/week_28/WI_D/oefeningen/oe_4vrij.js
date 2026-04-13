// ============================================================
//  oefeningen/oe_4.js  —  Flashcards eigenschappen (deel 1)
//
//  Pas aan per deel:
//    TOON_ITEM   : welk item verschijnt op de flashcard ('woorden', 'symbolen' of 'betekenis')
//    CONTROLE_ITEM: welk item verschijnt na klikken op controle
// ============================================================

window.__taakOefening = (function () {

  // ── Pas aan per oefening ──────────────────────────────────
  const TOON_ITEM     = 'betekenis';   // zichtbaar op flashcard
  const CONTROLE_ITEM = 'woorden';  // zichtbaar na controle

  // ── Staat ─────────────────────────────────────────────────
  let _antwoorden = [{ antwoord: null, score: 0 }];
  let _invoerVelden = [];
  let _slaOpFn    = null;
  let _container  = null;
  let _verbeterd  = false;
  let _terugNaarOverzicht = null;

  // Lokale voortgang: { index: 0 of 1 } voor elk element
  let _voortgang  = [];

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd, mail, slaOp, leerling, herlaadLeerling, terugNaarOverzicht) {
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a
          : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < 1) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _invoerVelden = [];
    _slaOpFn      = slaOp;
    _container    = container;
    _verbeterd    = verbeterd;
    _terugNaarOverzicht = terugNaarOverzicht;

    // Voortgang initialiseren: elk element start op 0
    _voortgang = (typeof Eigenschappen !== 'undefined')
      ? Eigenschappen.map(() => 0)
      : [];

      // Als al eerder volledig doorlopen: toon meteen het eindscherm
    if (_antwoorden[0].antwoord === true) {
      _voortgang = Eigenschappen.map(() => 1);
    }
    
    _container.innerHTML = '';
    _bouwOefening();
  }

  // ── Oefening bouwen ───────────────────────────────────────
  function _bouwOefening() {
    const inhoud = maakOefening({ id: 'oe_4', nummer: 4, container: _container });
    voegTekstToe(inhoud, 'Van betekenis naar woorden', ['intro-tekst']);
    voegLijstToe(inhoud, 'bullet', '0cm', '0.3cm', [
      'Je krijgt op de flashcard de betekenis van de eigenschap te zien.',
      'Zeg de eigenschap in woorden (hoef je niet op te schrijven).',
      'Klik daarna op controle en check.',
      'Kies daarna uit \'Ken ik!\' of \'Ken ik nog niet.\'.',
      'Herhaal totdat je alle eigenschappen geoefend hebt.',
    ]);   

    const spacer = document.createElement('div');
    spacer.style.height = '0.5cm';
    inhoud.appendChild(spacer);

    // Voortgangsteller
    const teller = document.createElement('div');
    teller.id = 'flash-teller';
    teller.style.cssText = `
      font-family: var(--font, Arial); font-size: var(--fontsize, 10pt);
      color: var(--tekst-zacht, #555); margin-bottom: 0.2cm;
    `;
    inhoud.appendChild(teller);

    // Flashcard
    const flashcard = document.createElement('div');
    flashcard.id = 'flash-card';
    flashcard.style.cssText = `
      width: 10cm; min-height: 7cm;
      border: 1.5px solid var(--groen-donker, #4a7c59);
      border-radius: var(--radius, 8px);
      background: var(--wit, #ffffff);
      display: flex; align-items: center; justify-content: center;
      padding: 0.5cm; box-sizing: border-box;
      font-family: var(--font, Arial); font-size: var(--fontsize, 10pt);
      color: var(--tekst, #1a1a1a);
      margin-bottom: 0.3cm;
      text-align: center;
      line-height: 1.5;
    `;
    inhoud.appendChild(flashcard);

    // Knoppen-zone
    const knoppen = document.createElement('div');
    knoppen.id = 'flash-knoppen';
    knoppen.style.cssText = 'display: flex; gap: 0.3cm; flex-wrap: wrap;';
    inhoud.appendChild(knoppen);

    // Eerste kaart tonen
    _toonVolgende(flashcard, knoppen, teller);
  }

  // ── Volgende kaart tonen ──────────────────────────────────
  function _toonVolgende(flashcard, knoppen, teller) {
    // Elementen die nog niet gekend zijn
    const openIndices = _voortgang
      .map((v, i) => v === 0 ? i : -1)
      .filter(i => i >= 0);

    // Teller bijwerken
    const gekend = _voortgang.filter(v => v === 1).length;
    const totaal = _voortgang.length;
    teller.textContent = `${gekend} van ${totaal} gekend`;

    // Alles gekend?
    if (openIndices.length === 0) {
      flashcard.innerHTML = '';
      const ok = document.createElement('div');
      ok.style.cssText = `
        color: var(--groen-midden, #6aab7e);
        font-size: 1.2rem; font-weight: bold;
        font-family: var(--font, Arial);
      `;
      ok.textContent = '✓ Je kent alle eigenschappen!';
      flashcard.appendChild(ok);
      knoppen.innerHTML = '';

      // Antwoord opslaan
      if (_terugNaarOverzicht) setTimeout(_terugNaarOverzicht, 1500);
      return;
    }

    // Willekeurig element kiezen
    const idx = openIndices[Math.floor(Math.random() * openIndices.length)];
    const element = Eigenschappen[idx];

    // Flashcard vullen met TOON_ITEM
    flashcard.innerHTML = '';
    const inhoudSpan = element[TOON_ITEM];
    if (inhoudSpan instanceof Node) {
      flashcard.appendChild(inhoudSpan.cloneNode(true));
    } else {
      flashcard.textContent = inhoudSpan;
    }

    // Knop: controle
    knoppen.innerHTML = '';
    const knopControle = document.createElement('button');
    knopControle.className   = 'knop-secundair';
    knopControle.textContent = 'Controle';
    knopControle.addEventListener('click', () => {
      // Vervang inhoud door CONTROLE_ITEM
      flashcard.innerHTML = '';
      const controleSpan = element[CONTROLE_ITEM];
      if (controleSpan instanceof Node) {
        flashcard.appendChild(controleSpan.cloneNode(true));
      } else {
        flashcard.textContent = controleSpan;
      }

      // Vervang knop door ken ik / ken ik nog niet
      knoppen.innerHTML = '';

      const knopJa = document.createElement('button');
      knopJa.className   = 'knop-primair';
      knopJa.textContent = '✓ Ken ik!';
      knopJa.style.background = 'var(--groen-midden, #6aab7e)';
      knopJa.addEventListener('click', () => {
        _voortgang[idx] = 1;
        _toonVolgende(flashcard, knoppen, teller);
      });

      const knopNee = document.createElement('button');
      knopNee.className   = 'knop-secundair';
      knopNee.textContent = '✗ Ken ik nog niet.';
      knopNee.style.borderColor = 'var(--oranje-rand, #e65100)';
      knopNee.style.color       = 'var(--oranje-rand, #e65100)';
      knopNee.addEventListener('click', () => {
        // Blijft 0, gewoon volgende tonen
        _toonVolgende(flashcard, knoppen, teller);
      });

      knoppen.appendChild(knopJa);
      knoppen.appendChild(knopNee);
    });

    knoppen.appendChild(knopControle);
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();