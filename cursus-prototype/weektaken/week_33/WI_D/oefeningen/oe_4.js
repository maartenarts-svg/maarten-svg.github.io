// ============================================================
//  oefeningen/oe_4.js  —  Vergelijking: 11z = 23
// ============================================================

window.__taakOefening = (function () {

  var CORRECT_TS_L  = '11z:11';
  var CORRECT_TS_R  = '23:11';
  var CORRECT_ANT_L = 'z';
  var OPL_T = 23, OPL_N = 11;
  var MAX_RIJEN = 10;

  var _idTeller = 0;
  var _rijen    = []; // [{lId, rId}] — alle rijen in volgorde

  function _norm(s) {
    return (s || '').replace(/\s/g, '').replace(/−/g, '-').toLowerCase();
  }

  function _evalMeZ(tekst) {
    if (!tekst || tekst.trim() === '') return null;
    var s = _norm(tekst).replace(/\((-?\d+)\)\/\((\d+)\)/g, '($1/$2)');
    s = s.replace(/([0-9])([zZ])/g, '$1*(23/11)');
    s = s.replace(/[zZ]/g, '(23/11)');
    return evalueer(s);
  }

  function _antRJuist(r) {
    if (!r) return false;
    var s = _norm(r).replace(/\((-?\d+)\)\/\((\d+)\)/g, '$1/$2');
    var val = evalueer(s);
    if (!val) return false;
    return val.valEq(new Br(OPL_T, OPL_N));
  }

  function _extraJuist(l, r) {
    if (!l || !r) return false;
    var lv = _evalMeZ(l);
    var rv = _evalMeZ(r);
    if (!lv || !rv) return false;
    return lv.valEq(rv);
  }

  // ── render ────────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd) {
    // Deserializeer: flat array → paren
    var saved = [];
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      var arr = opgeslagenAntwoorden.map(function (a) {
        return (a && typeof a === 'object' && 'antwoord' in a) ? a.antwoord : a;
      });
      for (var i = 0; i + 1 < arr.length; i += 2) {
        saved.push({ l: arr[i] || null, r: arr[i + 1] || null });
      }
    }
    // Altijd minstens 2 rijen tonen
    while (saved.length < 2) saved.push({ l: null, r: null });

    _idTeller = 0;
    _rijen    = [];
    container.innerHTML = '';

    var inhoud = maakOefening({ id: 'oe_4', nummer: 4, container });

    var intro = document.createElement('p');
    intro.classList.add('intro-tekst');
    intro.innerHTML = 'Los de vergelijking op.<br>Je bent verplicht een tussenstap te noteren!';
    inhoud.appendChild(intro);

    // ── Correctheidsberekening ────────────────────────────────
    var n    = saved.length;
    var tsLJ = _norm(saved[0].l || '') === CORRECT_TS_L;
    var tsRJ = _norm(saved[0].r || '') === CORRECT_TS_R;
    var tsJ  = tsLJ && tsRJ;
    var antLJ = tsJ && _norm(saved[n - 1].l || '') === CORRECT_ANT_L;
    var antRJ = tsJ && _antRJuist(saved[n - 1].r || '');

    var midJ = [];
    for (var mi = 1; mi < n - 1; mi++) {
      midJ.push(tsJ ? _extraJuist(saved[mi].l, saved[mi].r) : false);
    }
    var oefJ = tsJ && midJ.every(function (j) { return j; }) && antLJ && antRJ;

    // ── Opgave ────────────────────────────────────────────────
    var opgRij = document.createElement('div');
    opgRij.classList.add('rij');
    opgRij.style.marginBottom = '0.3cm';
    opgRij.innerHTML = '<span style="font-weight:bold;">11<em>z</em> = 23</span>';
    inhoud.appendChild(opgRij);

    // ── Alle rijen renderen ───────────────────────────────────
    saved.forEach(function (w, i) {
      var jL = null, jR = null;
      if (verbeterd) {
        if (i === 0) {
          jL = tsLJ; jR = tsRJ;
        } else if (i === n - 1) {
          jL = tsJ ? antLJ : false;
          jR = tsJ ? antRJ : false;
        } else {
          var mj = tsJ ? midJ[i - 1] : false;
          jL = mj; jR = mj;
        }
      }
      var ids = _voegRijToe(inhoud, w.l, w.r, verbeterd, jL, jR, null);
      _rijen.push({ lId: ids[0], rId: ids[1] });
    });

    // ── + knop (alleen als niet verbeterd) ────────────────────
    if (!verbeterd) {
      var plusKnop = _maakPlusKnop();
      plusKnop.addEventListener('click', function () {
        var ids = _voegRijToe(inhoud, null, null, false, null, null, plusKnop);
        _rijen.push({ lId: ids[0], rId: ids[1] });
        if (_rijen.length >= MAX_RIJEN) plusKnop.style.display = 'none';
      });
      inhoud.appendChild(plusKnop);
    }

    // ── Verbeteringsfeedback ──────────────────────────────────
    if (verbeterd) {
      var spacer = document.createElement('div');
      spacer.style.height = '0.7cm';
      inhoud.appendChild(spacer);

      var fb = document.createElement('div');
      if (oefJ) {
        fb.style.cssText =
          'padding:0.2cm 0.4cm;' +
          'background:var(--groen-pastel,#c8e6c9);' +
          'border-left:4px solid var(--groen-donker,#4a7c59);' +
          'border-radius:4px;font-weight:600;' +
          'color:var(--groen-donker,#4a7c59);';
        fb.textContent = '✓ Correct!';
      } else {
        fb.style.cssText =
          'padding:0.25cm 0.4cm;' +
          'background:var(--oranje-pastel,#ffe0b2);' +
          'border-left:4px solid var(--oranje-rand,#e65100);' +
          'border-radius:4px;';

        var foutTitel = document.createElement('div');
        foutTitel.style.cssText =
          'font-weight:600;color:var(--oranje-rand,#e65100);margin-bottom:0.2cm;';
        foutTitel.textContent = '✗ Niet correct — bekijk de uitwerking:';
        fb.appendChild(foutTitel);

        var uitw = document.createElement('div');
        uitw.style.cssText =
          'font-family:var(--font-oplossing,\'Comic Sans MS\',cursive);' +
          'color:var(--blauw-oplossing,#1a4fa0);' +
          'font-size:var(--fontsize,10pt);line-height:2;';
        uitw.innerHTML =
          '<div>11<em>z</em> = 23</div>' +
          '<div style="font-family:Arial,sans-serif;font-style:italic;color:var(--tekst,#1a1a1a);">Je moet in het linkerlid de factor 11 wegwerken, dus je moet beide leden delen door 11.</div>' +
          '<div>11<em>z</em> : 11 = 23 : 11</div>' +
          '<div><em>z</em> = <span style="display:inline-flex;flex-direction:column;' +
          'align-items:center;vertical-align:middle;line-height:1.2;margin:0 1px;">' +
          '<span style="border-bottom:1.5px solid currentColor;padding:0 3px;">23</span>' +
          '<span style="padding:0 3px;">11</span></span></div>';
        fb.appendChild(uitw);
      }
      inhoud.appendChild(fb);
    }
  }

  // ── Rij toevoegen ──────────────────────────────────────────
  function _voegRijToe(inhoud, l, r, verbeterd, jL, jR, insertBefore) {
    var lId = 'oe4-' + (++_idTeller);
    var rId = 'oe4-' + (++_idTeller);

    var rij = document.createElement('div');
    rij.classList.add('rij');
    rij.style.cssText = 'gap:0.25cm;margin-top:0.2cm;';

    var hostL  = _maakFracHostEl(lId, verbeterd, jL, '4cm');
    var isSpan = document.createElement('span');
    isSpan.classList.add('is');
    isSpan.textContent = '=';
    isSpan.style.cssText = 'font-weight:bold;flex-shrink:0;';
    var hostR = _maakFracHostEl(rId, verbeterd, jR, '4cm');

    rij.appendChild(hostL);
    rij.appendChild(isSpan);
    rij.appendChild(hostR);

    if (insertBefore) inhoud.insertBefore(rij, insertBefore);
    else              inhoud.appendChild(rij);

    requestAnimationFrame(function () {
      initFracWidget(lId + '-fw', lId, {});
      initFracWidget(rId + '-fw', rId, {});
      if (l && _fr[lId]) _fr[lId].herstel(l);
      if (r && _fr[rId]) _fr[rId].herstel(r);
      if (verbeterd) {
        var elL = document.getElementById(lId + '-fw');
        var elR = document.getElementById(rId + '-fw');
        if (elL) elL.querySelectorAll('input').forEach(function (inp) { inp.disabled = true; });
        if (elR) elR.querySelectorAll('input').forEach(function (inp) { inp.disabled = true; });
      }
    });

    return [lId, rId];
  }

  // ── Hulpfuncties ───────────────────────────────────────────
  function _maakFracHostEl(baseId, verbeterd, juist, breedte) {
    var rand = juist === true  ? 'var(--groen-donker,#4a7c59)'
             : juist === false ? 'var(--oranje-rand,#e65100)'
             :                   'var(--groen-donker,#4a7c59)';
    var bg   = juist === true  ? 'var(--groen-pastel,#c8e6c9)'
             : juist === false ? 'var(--oranje-pastel,#ffe0b2)'
             :                   'transparent';
    var el = document.createElement('div');
    el.id = baseId + '-fw';
    el.className = 'frac-host';
    el.style.cssText =
      'border:1.5px solid ' + rand + ';border-radius:4px;' +
      'font-family:var(--font,Arial);font-size:var(--fontsize,10pt);' +
      'font-style:italic;color:var(--tekst,#1a1a1a);' +
      'background:' + bg + ';padding:0 0.1cm;min-height:0.9cm;width:' + breedte + ';';
    return el;
  }

  function _maakPlusKnop() {
    var btn = document.createElement('button');
    btn.textContent = '+';
    btn.title = 'Extra tussenstap toevoegen';
    btn.style.cssText =
      'width:26px;height:26px;border-radius:50%;' +
      'border:2px solid rgba(74,124,89,0.4);' +
      'background:rgba(74,124,89,0.08);' +
      'color:var(--groen-donker,#4a7c59);' +
      'font-size:1rem;font-weight:700;cursor:pointer;' +
      'margin:0.15cm 0;display:flex;align-items:center;justify-content:center;' +
      'font-family:Arial,sans-serif;line-height:1;';
    return btn;
  }

  // ── getAntwoorden ─────────────────────────────────────────
  function getAntwoorden() {
    var pairs = [];
    _rijen.forEach(function (rij) {
      var l = getFracVal(rij.lId) || null;
      var r = getFracVal(rij.rId) || null;
      pairs.push({ l: l, r: r });
    });

    for (var i = pairs.length - 1; i >= 0; i--) {
      if (pairs.length <= 2) break;
      if (!pairs[i].l && !pairs[i].r) pairs.splice(i, 1);
    }

    var arr = [];
    pairs.forEach(function (p) {
      arr.push({ antwoord: p.l, score: 0 });
      arr.push({ antwoord: p.r, score: 0 });
    });
    return arr;
  }

  return { render, getAntwoorden };
})();
