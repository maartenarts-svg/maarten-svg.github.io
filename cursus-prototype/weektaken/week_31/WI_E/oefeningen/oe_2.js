// ============================================================
//  oefeningen/oe_2.js  —  Herhaling vier blokjes
//
//  Pas de vier BLOKJE_LINKS aan naar de juiste paden.
// ============================================================

window.__taakOefening = (function () {

  // ── Pas deze vier paden aan ───────────────────────────────
  const BLOKJES = [
    { nr: 1, pad: '../../../hoofdstukken/H10/P10_T/oe_10T001.js' },
    { nr: 2, pad: '../../../hoofdstukken/H10/P10_T/oe_10T002.js' },
    { nr: 3, pad: '../../../hoofdstukken/H10/P10_T/oe_10T003.js' },
    { nr: 4, pad: '../../../hoofdstukken/H10/P10_T/oe_10T004.js' },
  ];

  const VAKJE = '0.9cm';
  const GAP   = '0.15cm';

  // ── Staat ─────────────────────────────────────────────────
  let _antwoorden = [
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
    { antwoord: null, score: 0 },
  ];
  let _invoerVelden = [];
  let _slaOpFn      = null;
  let _verbeterd    = false;
  let _mail         = null;
  let _container    = null;
  let _leerling     = null;
  let _herlaadLeerling = null;

  // ── Kleuren per keuze ─────────────────────────────────────
  function vakjeStijl(keuze) {
    if (!keuze || keuze === 0) return { bg: 'white',                       rand: 'var(--groen-donker,#4a7c59)',  kleur: '#1a1a1a' };
    if (keuze === 1)           return { bg: 'var(--groen-pastel,#c8e6c9)', rand: 'var(--groen-donker,#4a7c59)',  kleur: '#1a1a1a' };
    if (keuze === 2)           return { bg: 'var(--oranje-pastel,#ffe0b2)',  rand: 'var(--oranje-rand,#e65100)',  kleur: '#1a1a1a' };
    if (keuze === 3)           return { bg: 'var(--lila-pastel,#f3e5f5)',   rand: 'var(--lila-rand,#7b1fa2)',    kleur: '#1a1a1a' };
    return {};
  }

  // ── Laatste keuze ophalen ─────────────────────────────────
  function laasteKeuze(leerling, nr) {
    const pogingen = leerling?.verbetering?.[nr]?.pogingen || [];
    if (pogingen.length === 0) return 0;
    return pogingen[pogingen.length - 1].keuze;
  }

  // ── Is verbeterd ──────────────────────────────────────────
  function isVerbeterd(leerling, nr) {
    return (leerling?.verbetering?.[nr]?.pogingen?.length || 0) > 0;
  }

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd, mail, slaOp, leerling, herlaadLeerling) {
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a
          : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < 4) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _invoerVelden = [];
    _slaOpFn      = slaOp;
    _verbeterd    = verbeterd;
    _mail         = mail;
    _container    = container;
    _leerling     = leerling;
    _herlaadLeerling = herlaadLeerling;

    _herrender();
  }

  // ── Herrender ─────────────────────────────────────────────
  function _herrender() {
    // Leerling ophalen uit window (via hoofdbestand)
    const leerling = _leerling;

    _container.innerHTML = '';
    const inhoud = maakOefening({ id: 'oe_2', nummer: 2, container: _container });

    voegTekstToe(inhoud, 'Verbeter de vier oefeningen.', ['intro-tekst']);
    voegLijstToe(inhoud, 'bullet', '0cm', '0.3cm', [
      'Klik op een blokje om de verbetering te zien.',
      'Klik daarna op \'Verbeterd, keer terug.\'',
      'Vink aan wat van toepassing is en vul eventueel een opmerking of vraag in.',
      'Herhaal voor elke oefening.',
    ]);

    const { tbody } = maakOefTabel(inhoud, 1, false);

    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.classList.add('kolom-links');
    td.style.paddingTop = '0.3cm';

    // ── Rij met blokjes ───────────────────────────────────
    const rij = document.createElement('div');
    rij.style.cssText = 'display: flex; align-items: center; gap: 0.2cm;';

    // Vakjes
    const vakjesEl = document.createElement('div');
    vakjesEl.style.cssText = `display: flex; flex-wrap: wrap; gap: ${GAP};`;

    BLOKJES.forEach((blokje, idx) => {
      const vorigeVerbeterd = idx === 0 || isVerbeterd(leerling, idx); // vorige = idx (0-gebaseerd = nr-1)
      const keuze           = laasteKeuze(leerling, blokje.nr);
      const klikbaar        = !_verbeterd && vorigeVerbeterd;
      const stijl           = vakjeStijl(keuze);

      const vakje = document.createElement('div');
      vakje.style.cssText = `
        width: ${VAKJE}; height: ${VAKJE};
        display: flex; align-items: center; justify-content: center;
        border: 1.5px solid ${stijl.rand};
        border-radius: 2px;
        background: ${stijl.bg};
        color: ${stijl.kleur};
        font-size: 8pt; font-weight: bold;
        font-family: var(--font, Arial);
        flex-shrink: 0; box-sizing: border-box;
        transition: opacity 0.15s;
        ${klikbaar ? 'cursor: pointer;' : 'opacity: 0.4; cursor: default;'}
      `;
      vakje.textContent = blokje.nr;
      vakje.title = klikbaar
        ? `Blokje ${blokje.nr}`
        : idx === 0 ? '' : 'Verbeter eerst het vorige blokje.';

      if (klikbaar) {
        vakje.addEventListener('mouseenter', () => { vakje.style.opacity = '0.75'; });
        vakje.addEventListener('mouseleave', () => { vakje.style.opacity = '1'; });
        vakje.addEventListener('click', () => _openViewer(blokje, idx));
      }

      vakjesEl.appendChild(vakje);
    });

    rij.appendChild(vakjesEl);
    td.appendChild(rij);

    // ── Opmerkingen onderaan ──────────────────────────────
    const opmBlok = _bouwOpmerkingen(leerling);
    if (opmBlok) td.appendChild(opmBlok);

    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  // ── Viewer openen ─────────────────────────────────────────
  function _openViewer(blokje, idx) {
    const url = new URL('../../week_28/WI_C/correctiesleutel-viewer-taak.html', window.location.href);
    url.searchParams.set('pad',  blokje.pad);
    url.searchParams.set('nr',   blokje.nr);
    url.searchParams.set('mail', _mail);

    const popup = window.open(url.toString(), `blokje-viewer-${blokje.nr}`);

    const check = setInterval(async () => {
      if (popup && popup.closed) {
        clearInterval(check);
        if (_herlaadLeerling) _leerling = await _herlaadLeerling();
        _antwoorden[idx].antwoord = 'ja';
        if (_slaOpFn) await _slaOpFn();
        _herrender();
      }
    }, 300);
  }

  // ── Opmerkingen bouwen ────────────────────────────────────
  function _bouwOpmerkingen(leerling) {
    const metKeuze2 = [];
    const metKeuze3 = [];

    BLOKJES.forEach(blokje => {
      const pogingen = leerling?.verbetering?.[blokje.nr]?.pogingen || [];
      if (pogingen.some(p => p.keuze === 2 && p.opmerking)) metKeuze2.push(blokje);
      if (pogingen.some(p => p.keuze === 3 && p.opmerking)) metKeuze3.push(blokje);
    });

    if (metKeuze2.length === 0 && metKeuze3.length === 0) return null;

    const wrap = document.createElement('div');
    wrap.style.marginTop = '0.4cm';

    const titelEl = document.createElement('div');
    titelEl.style.cssText = `
      font-weight: bold; font-size: 11pt;
      color: var(--tekst, #1a1a1a);
      border-bottom: 1.5px solid var(--groen-scheiding, #a5d6a7);
      padding-bottom: 0.15cm; margin-bottom: 0.25cm;
    `;
    titelEl.textContent = 'Mijn opmerkingen.';
    wrap.appendChild(titelEl);

    if (metKeuze2.length > 0) wrap.appendChild(_maakOpmTabel(metKeuze2, leerling, 'oranje', 2));
    if (metKeuze3.length > 0) wrap.appendChild(_maakOpmTabel(metKeuze3, leerling, 'lila',   3));

    return wrap;
  }

  // ── Opmerkingentabel ──────────────────────────────────────
  function _maakOpmTabel(blokjes, leerling, kleur, keuzeFilter) {
    const isOranje      = kleur === 'oranje';
    const achtergronden = isOranje ? ['#fff3e0', '#ffe0b2'] : ['#f3e5f5', '#e1bee7'];
    const randKleur     = isOranje ? 'var(--oranje-rand,#e65100)' : 'var(--lila-rand,#7b1fa2)';
    const metOpgelost   = !isOranje;

    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '0.3cm';

    const tbl = document.createElement('table');
    tbl.style.cssText = `
      width: 100%; border-collapse: collapse;
      font-family: var(--font, Arial); font-size: 10pt; margin-top: 0.15cm;
    `;

    // Header
    const thead = document.createElement('thead');
    const trH   = document.createElement('tr');
    trH.style.background = isOranje ? 'var(--oranje-rand,#e65100)' : 'var(--lila-rand,#7b1fa2)';
    const koppen = metOpgelost ? ['Nr.', 'Opmerking / Vraag', 'Opgelost'] : ['Nr.', 'Opmerking'];
    koppen.forEach((k, i) => {
      const th = document.createElement('th');
      th.textContent = k;
      th.style.cssText = `
        padding: 5px 10px; color: white; text-align: left;
        font-size: 10pt; font-weight: bold;
        ${i === 0 ? 'width: 50px;' : ''}
        ${metOpgelost && i === 2 ? 'width: 70px; text-align: center;' : ''}
      `;
      trH.appendChild(th);
    });
    thead.appendChild(trH);
    tbl.appendChild(thead);

    const tbody = document.createElement('tbody');

    blokjes.forEach((blokje, idx) => {
      const allePogingen = leerling?.verbetering?.[blokje.nr]?.pogingen || [];
      const pogingen     = allePogingen.filter(p => p.keuze === keuzeFilter && p.opmerking);
      if (pogingen.length === 0) return;

      const opgelost = allePogingen
        .filter(p => p.keuze === keuzeFilter)
        .slice(-1)[0]?.opgelost === true;

      const tr = document.createElement('tr');
      tr.style.background = achtergronden[idx % 2];
      if (opgelost) tr.style.opacity = '0.6';

      // Nr.
      const tdNr = document.createElement('td');
      tdNr.style.cssText = `padding:5px 10px; font-weight:bold; color:#1a1a1a;
        border-bottom:1px solid ${randKleur}30; vertical-align:top;`;
      tdNr.textContent = blokje.nr;
      tr.appendChild(tdNr);

      // Opmerking
      const tdOpm = document.createElement('td');
      tdOpm.style.cssText = `padding:5px 10px; color:#1a1a1a;
        border-bottom:1px solid ${randKleur}30;
        ${opgelost ? 'text-decoration:line-through; opacity:0.7;' : ''}`;
      pogingen.forEach(p => {
        const regel = document.createElement('div');
        regel.style.cssText = 'padding-left:1em; text-indent:-1em; margin-bottom:3px;';
        regel.textContent = '• ' + p.opmerking;
        tdOpm.appendChild(regel);
      });
      tr.appendChild(tdOpm);

      // Opgelost (enkel lila)
      if (metOpgelost) {
        const tdOpl = document.createElement('td');
        tdOpl.style.cssText = `padding:5px 10px; text-align:center;
          border-bottom:1px solid ${randKleur}30; vertical-align:middle;`;

        const cb = document.createElement('input');
        cb.type    = 'checkbox';
        cb.checked = opgelost;
        cb.style.cssText = 'cursor:pointer; accent-color:var(--lila-rand,#7b1fa2); width:16px; height:16px;';

        cb.addEventListener('change', async () => {
          // Zet opgelost op de meest recente poging van keuze 3
          if (!leerling.verbetering)              leerling.verbetering              = {};
          if (!leerling.verbetering[blokje.nr])   leerling.verbetering[blokje.nr]   = { pogingen: [] };
          const pogs = leerling.verbetering[blokje.nr].pogingen;
          for (let i = pogs.length - 1; i >= 0; i--) {
            if (pogs[i].keuze === keuzeFilter) {
              pogs[i].opgelost = cb.checked;
              break;
            }
          }
          tr.style.opacity           = cb.checked ? '0.6' : '1';
          tdOpm.style.textDecoration = cb.checked ? 'line-through' : '';
          tdOpm.style.opacity        = cb.checked ? '0.7' : '1';

          // Opslaan via slaOp-callback
          if (_slaOpFn) await _slaOpFn();
        });

        tdOpl.appendChild(cb);
        tr.appendChild(tdOpl);
      }

      tbody.appendChild(tr);
    });

    tbl.appendChild(tbody);
    wrapper.appendChild(tbl);
    return wrapper;
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();