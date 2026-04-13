// ============================================================
//  oefeningen/oe_1.js
// ============================================================

window.__taakOefening = (function() {

  let _antwoorden = [
    { antwoord: null, score: 0 },
  ];
  let _invoerVelden = [];

  const FORM_URL      = 'https://docs.google.com/forms/d/e/1FAIpQLSddjESCJ9_QECqb2gz95YrA5iKwLvyHuZsBytBmKPJS9jLIHA/viewform?usp=header';
  const FORM_CHECK_URL = 'https://script.google.com/macros/s/AKfycbwvjNHiQwrk9xCEACs0QrtwCikcFRn0tmfHZCHFlvcYH4quL7aqARd9Ci9PZEmz4qHa9A/exec';

  function render(container, opgeslagenAntwoorden, verbeterd, mail, slaOp) {
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

    const inhoud = maakOefening({ id: 'oe_1', nummer: 1, container });

    voegTekstToe(inhoud, 'Maak foto\'s van je werk en dien ze in via het formulier hieronder.', ['intro-tekst']);
    voegLijstToe(inhoud, 'bullet', '0cm', '0.3cm', [
      'Klik op de knop om het formulier te openen.',
      'Bevestig je e-mailadres in en upload je foto\'s.',
      'Dien het formulier in.',
      'Kom terug naar deze pagina en klik op "Bevestig indienen".',
    ]);

    const { tbody } = maakOefTabel(inhoud, 1, false);

    const tr  = document.createElement('tr');
    const td  = document.createElement('td');
    td.classList.add('kolom-links');
    td.style.paddingTop = '0.3cm';

    // ── Al ingediend: toon bevestiging ────────────────────────
    if (_antwoorden[0].antwoord === 'ja') {
      const bevestigd = document.createElement('div');
      bevestigd.style.cssText = `
        color: var(--groen-midden); font-family: var(--font);
        font-size: var(--fontsize); margin-bottom: 0.3cm;
      `;
      bevestigd.textContent = '✓ Je hebt het formulier ingediend.';
      td.appendChild(bevestigd);

      if (!verbeterd) {
        const knopOpnieuw = document.createElement('button');
        knopOpnieuw.className   = 'knop-secundair';
        knopOpnieuw.textContent = 'Opnieuw indienen';
        knopOpnieuw.style.marginTop = '0.2cm';
        knopOpnieuw.addEventListener('click', () => {
          _antwoorden[0].antwoord = null;
          render(container, _antwoorden, verbeterd, mail, slaOp);
        });
        td.appendChild(knopOpnieuw);
      }

      // Volgende-knop deblokkeren
      const knopVolgende = document.getElementById('knop-volgende-oef');
      if (knopVolgende) {
        knopVolgende.disabled = false;
        knopVolgende.title = '';
      }

      tr.appendChild(td);
      tbody.appendChild(tr);
      return;
    }

    // ── Nog niet ingediend ────────────────────────────────────
    const knoppen = document.createElement('div');
    knoppen.style.cssText = 'display: flex; gap: 0.3cm; flex-wrap: wrap; align-items: center;';

    // Knop: open formulier
    const knopForm = document.createElement('button');
    knopForm.className   = 'knop-primair';
    knopForm.textContent = '📋 Open formulier';
    knopForm.addEventListener('click', () => {
      window.open(FORM_URL, '_blank');
    });

    // Statusbericht
    const status = document.createElement('span');
    status.style.cssText = `
      font-family: var(--font); font-size: var(--fontsize);
      color: var(--tekst-zacht); margin-left: 0.2cm;
    `;

    // Knop: bevestig indienen
    const knopBevestigen = document.createElement('button');
    knopBevestigen.className   = 'knop-secundair';
    knopBevestigen.textContent = 'Bevestig indienen';
    knopBevestigen.addEventListener('click', async () => {
      knopBevestigen.disabled    = true;
      knopBevestigen.textContent = 'Controleren…';
      status.textContent         = '';

      try {
        const res  = await fetch(`${FORM_CHECK_URL}?mail=${encodeURIComponent(mail)}`);
        const data = await res.json();

        if (data.ingediend) {
          _antwoorden[0].antwoord = 'ja';
          if (slaOp) await slaOp();
          render(container, _antwoorden, verbeterd, mail, slaOp);
        } else {
          knopBevestigen.disabled    = false;
          knopBevestigen.textContent = 'Bevestig indienen';
          status.textContent         = '⚠ Nog geen formulier gevonden. Heb je het al ingediend?';
          status.style.color         = 'var(--oranje-rand)';
        }
      } catch (err) {
        knopBevestigen.disabled    = false;
        knopBevestigen.textContent = 'Bevestig indienen';
        status.textContent         = '⚠ Er ging iets mis. Probeer opnieuw.';
        status.style.color         = 'var(--oranje-rand)';
      }
    });

    knoppen.appendChild(knopForm);
    knoppen.appendChild(knopBevestigen);
    td.appendChild(knoppen);
    td.appendChild(status);

    // Volgende-knop blokkeren indien nog niet ingediend
    const knopVolgende = document.getElementById('knop-volgende-oef');
    if (knopVolgende) {
      const geblokkeerd = _antwoorden[0].antwoord !== 'ja' && !verbeterd;
      knopVolgende.disabled = geblokkeerd;
      knopVolgende.title = geblokkeerd ? 'Dien eerst je foto\'s in via het formulier.' : '';
    }

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