// ============================================================
// OVERZICHT-FIREBASE.JS
// Leest en schrijft alle data voor één hoofdstuk.
//
// Structuur in Firestore:
//
//   collectie : oefeningen
//   document  : H10   ← pas aan per hoofdstuk
//   velden    :
//     niveaus   : { "oe_101001": ["cirkel","vierkant"], ... }
//     verbeter  : {
//                   "oe_101001": {
//                     keuze    : 1 | 2 | 3 | 0,
//                     pogingen : [{ datum, keuze, opmerking, opgelost }]
//                   }, ...
//                 }
//     doelkoppelingen : {
//                   "oe_101001": ["doel-id-1", "doel-id-2"],
//                   ...
//                 }
//
//   collectie : doelen
//   document  : (één document per doel, id gegenereerd door Firestore)
//   velden    :
//     tekst           : string
//     plaatscode      : array van strings  (bv. ["10.1","7.5"])
//     type            : "voorkennis" | "succescriterium"
//     leerplandoelcodes: array van strings (bv. ["6.3.5","BG6.2"])
//     referenties     : array van strings  (bv. ["10.3","7.0"])
//     evalueerbaarheid: "ja" | "nee"
//     scores          : string (bv. "A: Ik doe dit.###C: Ik oefen nog.")
//
// Minimale reads: alles per hoofdstuk in één document.
// Doelen: één read voor alle doelen (gecacht).
// ============================================================

import { db } from './firebase-config.js';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// ── Documentreferentie oefeningen ────────────────────────────
// !! Pas DOCUMENT_ID aan per hoofdstuk !!
const DOCUMENT_ID = 'H10';
const ref = doc(db, 'oefeningen', DOCUMENT_ID);

// ── Cache ─────────────────────────────────────────────────────
let _cache      = null;   // cache voor oefeningen-document
let _doelenCache = null;  // cache voor alle doelen

export function resetCache() {
  _cache = null;
  _doelenCache = null;
}

async function _laadDoc() {
  if (_cache !== null) return _cache;
  try {
    const snap = await getDoc(ref);
    _cache = snap.exists() ? snap.data() : {};
  } catch (fout) {
    console.error('Fout bij laden document:', fout);
    _cache = {};
  }
  return _cache;
}

// ── Niveaudata ────────────────────────────────────────────────
// Sleutel = bestandsnaam (zonder .js), bv. "oe_101001"
// Waarde  = array van niveaus, bv. ["cirkel", "vierkant"]

export async function laadNiveaus() {
  const data = await _laadDoc();
  return data.niveaus || {};
}

export async function slaaNiveausOp(niveaus) {
  try {
    await setDoc(ref, { niveaus }, { merge: true });
    if (_cache) _cache.niveaus = niveaus;
    return true;
  } catch (fout) {
    console.error('Fout bij opslaan niveaus:', fout);
    return false;
  }
}

// ── Verbeterdata ──────────────────────────────────────────────
// Sleutel = bestandsnaam (zonder .js), bv. "oe_101001"
// Waarde  = { keuze, pogingen: [{datum, keuze, opmerking, opgelost}] }

export async function laadVerbeterdata() {
  const data = await _laadDoc();
  return data.verbeter || {};
}

export async function slaVerbeterdataOp(bestandsnaam, verbeterObj) {
  const huidig   = await laadVerbeterdata();
  const bestaand = huidig[bestandsnaam] || { keuze: 0, pogingen: [] };
  const pogingen = bestaand.pogingen || [];

  if (verbeterObj.opmerking !== undefined) {
    pogingen.push({
      datum:     new Date().toISOString(),
      keuze:     verbeterObj.keuze ?? 0,
      opmerking: verbeterObj.opmerking,
      opgelost:  verbeterObj.opgelost ?? false
    });
  }

  huidig[bestandsnaam] = {
    keuze:    verbeterObj.keuze ?? bestaand.keuze,
    pogingen,
  };

  try {
    await setDoc(ref, { verbeter: huidig }, { merge: true });
    if (_cache) _cache.verbeter = huidig;
    return true;
  } catch (fout) {
    console.error('Fout bij opslaan verbeterdata:', fout);
    return false;
  }
}

// ── Doelkoppelingen ───────────────────────────────────────────
// Sleutel = bestandsnaam (zonder .js), bv. "oe_101001"
// Waarde  = array van doel-ids, bv. ["abc123", "def456"]

export async function laadDoelkoppelingen() {
  const data = await _laadDoc();
  return data.doelkoppelingen || {};
}

export async function slaaDoelkoppelingenOp(doelkoppelingen) {
  try {
    await setDoc(ref, { doelkoppelingen }, { merge: true });
    if (_cache) _cache.doelkoppelingen = doelkoppelingen;
    return true;
  } catch (fout) {
    console.error('Fout bij opslaan doelkoppelingen:', fout);
    return false;
  }
}
