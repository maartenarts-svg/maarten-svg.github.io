// ============================================================
// DOELEN-FIREBASE.JS
// Alle Firestore-operaties voor de doelen.
//
// Structuur in Firestore (één document voor alle doelen):
//   collectie : doelen
//   document  : alle_doelen
//   veld      : doelen: {
//                 "d_<timestamp>_<teller>": {
//                   tekst, type, evalueerbaarheid, scores,
//                   plaatscode, leerplandoelcodes, referenties
//                 },
//                 ...
//               }
//
// Voordeel: altijd 1 read en 1 write, ongeacht aantal doelen.
//
// Id-formaat: d_<timestamp>_<teller>
//   timestamp = Date.now() op moment van aanmaken
//   teller    = oplopende teller binnen dezelfde sessie
//   Voorbeeld: d_1712345678901_1
// ============================================================

import { db } from './firebase-config.js';
import {
  doc,
  getDoc,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const REF = doc(db, 'doelen', 'alle_doelen');

// ── Id-generator ──────────────────────────────────────────────
let _teller = 0;
function maakId() {
  _teller++;
  return `d_${Date.now()}_${_teller}`;
}

// ── Cache ─────────────────────────────────────────────────────
// _cache is een object: { id: { tekst, type, ... }, ... }
let _cache = null;

export function resetDoelenCache() {
  _cache = null;
}

// ── Intern: volledig document laden ──────────────────────────
async function _laadDoc() {
  if (_cache !== null) return _cache;
  try {
    const snap = await getDoc(REF);
    _cache = snap.exists() ? (snap.data().doelen || {}) : {};
  } catch (fout) {
    console.error('Fout bij laden doelen:', fout);
    _cache = {};
  }
  return _cache;
}

// ── Intern: volledig document opslaan ────────────────────────
async function _slaDoc(doelen) {
  try {
    await setDoc(REF, { doelen });
    _cache = doelen;
    return true;
  } catch (fout) {
    console.error('Fout bij opslaan doelen:', fout);
    return false;
  }
}

// ── Alle doelen laden ─────────────────────────────────────────
// Geeft een array terug van { id, tekst, type, ... }
export async function laadAlleDoelen() {
  const doelen = await _laadDoc();
  return Object.entries(doelen).map(([id, data]) => ({ id, ...data }));
}

// ── Eén doel opslaan (nieuw of samenvoegen) ───────────────────
// Als tekst al bestaat (hoofdlettergevoelig) → samenvoegen.
// Anders: nieuw doel aanmaken met automatisch id.
export async function slaaDoel(data) {
  const doelen = await _laadDoc();

  // Zoek bestaand doel met exact dezelfde tekst
  const bestaandEntry = Object.entries(doelen).find(([, d]) => d.tekst === data.tekst);

  if (bestaandEntry) {
    const [id, bestaand] = bestaandEntry;
    doelen[id] = voegSamen(bestaand, data);
    const ok = await _slaDoc(doelen);
    return ok ? { actie: 'bijgewerkt', id } : null;
  } else {
    const id = maakId();
    doelen[id] = { ...data };
    const ok = await _slaDoc(doelen);
    return ok ? { actie: 'toegevoegd', id } : null;
  }
}

// ── Eén doel aanpassen ────────────────────────────────────────
export async function pasDoelaanPas(id, data) {
  const doelen = await _laadDoc();
  if (!doelen[id]) {
    console.error('Doel niet gevonden:', id);
    return false;
  }
  doelen[id] = { ...data };
  return _slaDoc(doelen);
}

// ── Plaatscode bijwerken voor één doel ───────────────────────
// Voegt H.x toe of vervangt de bestaande H.x code.
export async function updatePlaatscode(id, hoofdstuk, xWaarde) {
  const doelen = await _laadDoc();
  if (!doelen[id]) return false;

  const prefix     = `${hoofdstuk}.`;
  const nieuweCode = `${hoofdstuk}.${xWaarde}`;
  const plaatscode = (doelen[id].plaatscode || [])
    .filter(c => !c.startsWith(prefix));
  plaatscode.push(nieuweCode);

  doelen[id] = { ...doelen[id], plaatscode };
  return _slaDoc(doelen);
}

// ── Hulpfunctie: samenvoegen ──────────────────────────────────
function voegSamen(oud, nieuw) {
  function unieArray(a, b) {
    return [...new Set([...(a || []), ...(b || [])])];
  }
  return {
    tekst:             oud.tekst,
    type:              nieuw.type             || oud.type             || '',
    evalueerbaarheid:  nieuw.evalueerbaarheid || oud.evalueerbaarheid || 'nee',
    scores:            nieuw.scores           || oud.scores           || '',
    plaatscode:        unieArray(oud.plaatscode,        nieuw.plaatscode),
    leerplandoelcodes: unieArray(oud.leerplandoelcodes, nieuw.leerplandoelcodes),
    referenties:       unieArray(oud.referenties,        nieuw.referenties),
  };
}