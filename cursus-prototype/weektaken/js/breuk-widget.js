// breuk-widget.js — gedeelde breuk-invoer widget + rekenhulpen voor weektaken

(function () {
  const s = document.createElement('style');
  s.textContent =
    '.frac-host{display:inline-flex;align-items:center;flex-wrap:nowrap;cursor:text;outline:none;}' +
    '.fi-txt{outline:none;border:none;background:transparent;font-family:inherit;font-size:inherit;font-weight:inherit;color:inherit;padding:0;line-height:1;}' +
    '.fi-frac{display:inline-flex;flex-direction:column;align-items:center;margin:0 2px;}' +
    '.fi-frac input{outline:none;border:none;background:transparent;font-family:inherit;font-size:inherit;font-weight:inherit;text-align:center;padding:0;line-height:1.35;color:inherit;}' +
    '.fi-lijn{height:1.5px;background:currentColor;min-width:16px;}';
  document.head.appendChild(s);
})();

// ── Breuk-invoer widget ────────────────────────────────────────
const _fr = {};
const _fiRuler = document.createElement('span');
_fiRuler.setAttribute('aria-hidden', 'true');
Object.assign(_fiRuler.style, {
  position: 'fixed', top: '-9999px', left: '-9999px',
  visibility: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none',
  fontWeight: '400'
});
document.body.appendChild(_fiRuler);

function _fiBr(val, fs, ff) {
  _fiRuler.style.fontSize = fs;
  if (ff) _fiRuler.style.fontFamily = ff;
  _fiRuler.textContent = val || '';
  return Math.max(8, _fiRuler.offsetWidth + 4);
}

function getFracVal(id) {
  return _fr[id] ? _fr[id].getVal() : (document.getElementById(id) || { value: '' }).value;
}

function _extTeller(tekst, heeftVoorSegment) {
  let opIdx = -1, opChar = '';
  for (let i = tekst.length - 1; i >= 0; i--) {
    if ('+-*·:='.includes(tekst[i])) { opIdx = i; opChar = tekst[i]; break; }
  }
  if (opIdx === -1) return { prefix: '', teller: tekst };
  if (opChar === '+' || opChar === '*' || opChar === '·' || opChar === ':' || opChar === '=')
    return { prefix: tekst.slice(0, opIdx + 1), teller: tekst.slice(opIdx + 1) };
  const voor = tekst.slice(0, opIdx).trimEnd();
  // '-' is aftrekking als er een cijfer, letter of sluithaakje voor staat
  if (voor.length > 0 && /[a-zA-Z0-9)]$/.test(voor))
    return { prefix: tekst.slice(0, opIdx + 1), teller: tekst.slice(opIdx + 1) };
  // '-' is ook aftrekking als dit tekstveld leeg is maar er een vorig segment bestaat (bv. een breuk)
  if (voor.length === 0 && heeftVoorSegment)
    return { prefix: tekst.slice(0, opIdx + 1), teller: tekst.slice(opIdx + 1) };
  return { prefix: tekst.slice(0, opIdx), teller: tekst.slice(opIdx) };
}

function initFracWidget(hostId, regId, opts) {
  opts = opts || {};
  const host = document.getElementById(hostId);
  if (!host) return;
  const computed = window.getComputedStyle(host);
  const fs = computed.fontSize || '10pt';
  const ff = computed.fontFamily || 'Arial,sans-serif';
  function br(v) { return _fiBr(v, fs, ff); }
  const seg = [];
  function leesWaarde() {
    return seg.map(function (s) {
      return s.type === 'txt' ? s.el.value : '(' + s.tIn.value + ')/(' + s.nIn.value + ')';
    }).join('');
  }
  function wijzigd() { if (opts.onChange) opts.onChange(); }
  function inserNa(n, r) { if (r.nextSibling) host.insertBefore(n, r.nextSibling); else host.appendChild(n); }

  function maakTxt(iv) {
    const el = document.createElement('input');
    el.type = 'text'; el.className = 'fi-txt'; el.value = iv || '';
    el.style.width = br(el.value) + 'px';
    el.addEventListener('input', function () { el.style.width = br(el.value) + 'px'; wijzigd(); });
    el.addEventListener('keydown', function (e) {
      const pos = el.selectionStart, idx = seg.indexOf(s);
      if (e.key === '*') {
        e.preventDefault();
        const p = pos, v = el.value;
        el.value = v.slice(0, p) + '·' + v.slice(el.selectionEnd);
        el.setSelectionRange(p + 1, p + 1); el.style.width = br(el.value) + 'px'; wijzigd(); return;
      }
      if (e.key === '/') {
        e.preventDefault();
        const voor = el.value.slice(0, pos), achter = el.value.slice(pos);
        const res = _extTeller(voor, idx > 0);
        el.value = res.prefix; el.style.width = br(res.prefix) + 'px';
        const fSeg = maakFrac(res.teller), aSeg = maakTxt(achter);
        seg.splice(idx + 1, 0, fSeg, aSeg); inserNa(fSeg.el, el); inserNa(aSeg.el, fSeg.el);
        res.teller ? fSeg.nIn.focus() : fSeg.tIn.focus(); wijzigd(); return;
      }
      if (e.key === 'ArrowLeft' && pos === 0 && el.selectionEnd === 0) {
        if (idx > 0 && seg[idx - 1].type === 'frac') {
          e.preventDefault(); const n = seg[idx - 1].nIn;
          n.focus(); n.setSelectionRange(n.value.length, n.value.length);
        } return;
      }
      if (e.key === 'ArrowRight' && pos === el.value.length) {
        if (idx < seg.length - 1 && seg[idx + 1].type === 'frac') {
          e.preventDefault(); const t = seg[idx + 1].tIn;
          t.focus(); t.setSelectionRange(0, 0);
        } return;
      }
      if (e.key === 'Backspace' && pos === 0 && el.value === '') {
        if (idx > 0 && seg[idx - 1].type === 'frac') {
          e.preventDefault(); verwijderFrac(seg[idx - 1], s);
        }
      }
      if (e.key === 'Enter') { e.preventDefault(); if (opts.onEnter) opts.onEnter(); }
    });
    const s = { type: 'txt', el }; return s;
  }

  function maakFrac(tv) {
    const el = document.createElement('span'); el.className = 'fi-frac';
    const tIn = document.createElement('input'); tIn.type = 'text'; tIn.value = tv || '';
    const lijn = document.createElement('div'); lijn.className = 'fi-lijn';
    const nIn = document.createElement('input'); nIn.type = 'text'; nIn.value = '';
    el.appendChild(tIn); el.appendChild(lijn); el.appendChild(nIn);
    function updBr() {
      const tw = br(tIn.value), nw = br(nIn.value);
      tIn.style.width = tw + 'px'; nIn.style.width = nw + 'px';
      lijn.style.width = Math.max(tw, nw) + 'px'; wijzigd();
    }
    updBr(); tIn.addEventListener('input', updBr); nIn.addEventListener('input', updBr);
    function ster(inp, e) {
      if (e.key !== '*') return false;
      e.preventDefault(); const p = inp.selectionStart;
      inp.value = inp.value.slice(0, p) + '·' + inp.value.slice(inp.selectionEnd);
      inp.setSelectionRange(p + 1, p + 1); updBr(); return true;
    }
    tIn.addEventListener('keydown', function (e) {
      const pos = tIn.selectionStart, idx = seg.indexOf(s); if (ster(tIn, e)) return;
      if (e.key === '/') { e.preventDefault(); nIn.focus(); return; }
      if (e.key === 'ArrowRight' && pos === tIn.value.length) { e.preventDefault(); nIn.focus(); nIn.setSelectionRange(0, 0); return; }
      if (e.key === 'ArrowLeft' && pos === 0) {
        if (idx > 0 && seg[idx - 1].type === 'txt') {
          e.preventDefault(); const p = seg[idx - 1].el; p.focus(); p.setSelectionRange(p.value.length, p.value.length);
        } return;
      }
      if (e.key === 'Backspace' && tIn.value === '') { e.preventDefault(); verwijderFrac(s, idx < seg.length - 1 ? seg[idx + 1] : null); }
    });
    nIn.addEventListener('keydown', function (e) {
      const pos = nIn.selectionStart, idx = seg.indexOf(s); if (ster(nIn, e)) return;
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        if (e.key === 'Enter' && opts.onEnter) { opts.onEnter(); return; }
        if (idx < seg.length - 1) { const v = seg[idx + 1].el; v.focus(); v.setSelectionRange(0, 0); } return;
      }
      if (e.key === '/') {
        e.preventDefault();
        const nF = maakFrac(''), a = maakTxt('');
        seg.splice(idx + 1, 0, nF, a); inserNa(nF.el, el); inserNa(a.el, nF.el);
        nF.tIn.focus(); wijzigd(); return;
      }
      if (e.key === 'ArrowLeft' && pos === 0) { e.preventDefault(); tIn.focus(); tIn.setSelectionRange(tIn.value.length, tIn.value.length); return; }
      if (e.key === 'ArrowRight' && pos === nIn.value.length) {
        if (idx < seg.length - 1 && seg[idx + 1].type === 'txt') {
          e.preventDefault(); seg[idx + 1].el.focus(); seg[idx + 1].el.setSelectionRange(0, 0);
        } return;
      }
      if (e.key === 'Backspace' && nIn.value === '') { e.preventDefault(); tIn.focus(); tIn.setSelectionRange(tIn.value.length, tIn.value.length); }
    });
    const s = { type: 'frac', el, tIn, nIn }; return s;
  }

  function verwijderFrac(fSeg, naSeg) {
    const idx = seg.indexOf(fSeg); if (idx < 0) return;
    const vSeg = (idx > 0 && seg[idx - 1].type === 'txt') ? seg[idx - 1] : null;
    const aSeg = naSeg || (idx < seg.length - 1 && seg[idx + 1].type === 'txt' ? seg[idx + 1] : null);
    const curPos = vSeg ? vSeg.el.value.length : 0;
    if (vSeg && aSeg) {
      vSeg.el.value += aSeg.el.value;
      vSeg.el.style.width = br(vSeg.el.value) + 'px';
      seg.splice(idx, 2); host.removeChild(fSeg.el); host.removeChild(aSeg.el);
    } else { seg.splice(idx, 1); host.removeChild(fSeg.el); }
    if (vSeg) { vSeg.el.focus(); vSeg.el.setSelectionRange(curPos, curPos); } wijzigd();
  }

  host.addEventListener('click', function (e) {
    if (e.target === host) {
      const l = seg.slice().reverse().find(function (s) { return s.type === 'txt'; });
      if (l) { l.el.focus(); l.el.setSelectionRange(l.el.value.length, l.el.value.length); }
    }
  });

  function clear() {
    while (host.firstChild) host.removeChild(host.firstChild);
    seg.length = 0; const b = maakTxt(''); seg.push(b); host.appendChild(b.el);
  }

  const begin = maakTxt(''); seg.push(begin); host.appendChild(begin.el);

  function herstelWaarde(tekst) {
    clear();
    const regex = /\(([^)]*)\)\/\(([^)]*)\)/g; let last = 0, match;
    while ((match = regex.exec(tekst)) !== null) {
      const voor = tekst.slice(last, match.index);
      const huidigTxt = seg[seg.length - 1];
      if (voor) { huidigTxt.el.value += voor; huidigTxt.el.style.width = br(huidigTxt.el.value) + 'px'; }
      const fSeg = maakFrac(match[1]); fSeg.nIn.value = match[2];
      const tw = br(fSeg.tIn.value), nw = br(fSeg.nIn.value);
      fSeg.tIn.style.width = tw + 'px'; fSeg.nIn.style.width = nw + 'px';
      fSeg.el.querySelector('.fi-lijn').style.width = Math.max(tw, nw) + 'px';
      const naSeg = maakTxt('');
      seg.push(fSeg); seg.push(naSeg);
      host.removeChild(huidigTxt.el); host.appendChild(huidigTxt.el);
      host.appendChild(fSeg.el); host.appendChild(naSeg.el);
      last = match.index + match[0].length;
    }
    const rest = tekst.slice(last);
    const laatste = seg[seg.length - 1];
    if (rest && laatste.type === 'txt') { laatste.el.value += rest; laatste.el.style.width = br(laatste.el.value) + 'px'; }
    wijzigd();
  }

  _fr[regId] = {
    getVal: leesWaarde,
    clear: clear,
    herstel: herstelWaarde,
    setErr: function (h) { host.classList.toggle('fout-rand', h); }
  };
}

// ── Breuk klasse ───────────────────────────────────────────────
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
function Br(t, n) {
  if (n === undefined) n = 1;
  if (n === 0) throw new Error('n=0');
  var g = gcd(Math.abs(t), Math.abs(n)), s = n < 0 ? -1 : 1;
  this.t = s * t / g; this.n = s * n / g;
}
Br.prototype.plus  = function (b) { return new Br(this.t * b.n + b.t * this.n, this.n * b.n); };
Br.prototype.min   = function (b) { return new Br(this.t * b.n - b.t * this.n, this.n * b.n); };
Br.prototype.maal  = function (b) { return new Br(this.t * b.t, this.n * b.n); };
Br.prototype.deel  = function (b) { if (b.t === 0) throw new Error('deel door 0'); return new Br(this.t * b.n, this.n * b.t); };
Br.prototype.val   = function () { return this.t / this.n; };
Br.prototype.eq    = function (b) { return this.t === b.t && this.n === b.n; };
Br.prototype.valEq = function (b) { return Math.abs(this.val() - b.val()) < 1e-9; };

// ── Expressie evaluator ────────────────────────────────────────
function normaliseer(s) {
  return s.replace(/\s/g, '').replace(/−/g, '-').replace(/·/g, '*').replace(/:/g, '/');
}
function evalueer(tekst) {
  if (!tekst || tekst.trim() === '') return null;
  var s = normaliseer(tekst);
  try { return _bwParsExpr(s, { pos: 0 }); } catch (e) { return null; }
}
function _bwParsExpr(s, ctx) { return _bwParsOptelling(s, ctx); }
function _bwParsOptelling(s, ctx) {
  var links = _bwParsVermenigv(s, ctx);
  while (ctx.pos < s.length && (s[ctx.pos] === '+' || s[ctx.pos] === '-')) {
    var op = s[ctx.pos++]; var rechts = _bwParsVermenigv(s, ctx);
    links = op === '+' ? links.plus(rechts) : links.min(rechts);
  }
  return links;
}
function _bwParsVermenigv(s, ctx) {
  var links = _bwParsUnaireMin(s, ctx);
  while (ctx.pos < s.length && (s[ctx.pos] === '*' || s[ctx.pos] === '/')) {
    var op = s[ctx.pos++]; var rechts = _bwParsUnaireMin(s, ctx);
    links = op === '*' ? links.maal(rechts) : links.deel(rechts);
  }
  return links;
}
function _bwParsUnaireMin(s, ctx) {
  if (ctx.pos < s.length && s[ctx.pos] === '-') { ctx.pos++; return _bwParsAtoom(s, ctx).maal(new Br(-1)); }
  if (ctx.pos < s.length && s[ctx.pos] === '+') ctx.pos++;
  return _bwParsAtoom(s, ctx);
}
function _bwParsAtoom(s, ctx) {
  if (ctx.pos < s.length && s[ctx.pos] === '(') {
    ctx.pos++; var val = _bwParsExpr(s, ctx);
    if (ctx.pos < s.length && s[ctx.pos] === ')') ctx.pos++;
    return val;
  }
  var start = ctx.pos;
  if (ctx.pos < s.length && s[ctx.pos] === '-') ctx.pos++;
  while (ctx.pos < s.length && /[0-9]/.test(s[ctx.pos])) ctx.pos++;
  if (ctx.pos === start || (ctx.pos === start + 1 && s[start] === '-')) throw new Error('Geen getal');
  return new Br(parseInt(s.slice(start, ctx.pos)));
}
