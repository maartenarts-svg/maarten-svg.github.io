// ============================================================
//  js/firebase.js  —  Firebase initialisatie + data-functies
//  Weektaken Wiskunde
// ============================================================

import { initializeApp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore, doc, getDoc, setDoc, updateDoc, runTransaction, onSnapshot }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey:            "AIzaSyDSU0eoW9Od_aoE-7yyDhv0vhkPjVCbWNw",
  authDomain:        "weektaken-wiskunde.firebaseapp.com",
  projectId:         "weektaken-wiskunde",
  storageBucket:     "weektaken-wiskunde.firebasestorage.app",
  messagingSenderId: "184817118821",
  appId:             "1:184817118821:web:5967eafe44ad9dbb55e08c"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── Referentie naar één taakdocument ──────────────────────────
// documentId is bv. "W1WIA" — wordt ingesteld door de taakpagina
let _taakRef = null;

export function setTaakRef(documentId) {
  _taakRef = doc(db, "taken", documentId);
}

export function luisterVersie(callback) {
  if (!_taakRef) throw new Error("Taak-referentie niet ingesteld.");
  return onSnapshot(_taakRef, (snap) => {
    if (!snap.exists()) return;
    const versie = snap.data()?.instellingen?.versie || 0;
    callback(versie);
  });
}

// ── Read (1× bij login) ───────────────────────────────────────
export async function fetchTaak() {
  if (!_taakRef) throw new Error("Taak-referentie niet ingesteld.");
  const snap = await getDoc(_taakRef);
  if (!snap.exists()) return null;
  return snap.data();
}

// ── Write ─────────────────────────────────────────────────────
export async function saveTaak(data) {
  console.log('=== saveTaak AANGEROEPEN ===');
  console.trace(); // toont waar de aanroep vandaan komt
  if (!_taakRef) throw new Error("Taak-referentie niet ingesteld.");
  
  const { leerlingen, ...rest } = data;
  await setDoc(_taakRef, rest, { merge: true });
  
  if (leerlingen?.length) {
    await runTransaction(db, async (transaction) => {
      const snap = await transaction.get(_taakRef);
      if (!snap.exists()) return;
      
      const huidigeLeerlingen = snap.data().leerlingen || [];
      
      // Merge: voor elke leerling in de nieuwe lijst, bewaar antwoorden
      // uit Firestore als die nieuwer zijn
      const geMerged = leerlingen.map(nieuw => {
        const huidig = huidigeLeerlingen.find(
          l => l.mail.toLowerCase() === nieuw.mail.toLowerCase()
        );
        if (!huidig) return nieuw; // nieuwe leerling
        return {
          ...nieuw,
          // Antwoorden en voortgang nooit overschrijven vanuit beheerder
          antwoorden:     huidig.antwoorden     ?? nieuw.antwoorden     ?? {},
          succescriteria: huidig.succescriteria ?? nieuw.succescriteria ?? [],
          ingediend:      huidig.ingediend      ?? nieuw.ingediend      ?? false,
          verbeterd:      huidig.verbeterd      ?? nieuw.verbeterd      ?? false,
        };
      });
      
      transaction.update(_taakRef, { leerlingen: geMerged });
    });
  }
}

// ── Write: alleen leerlingdata bijwerken ──────────────────────
export async function saveLeerling(mail, leerlingData) {
  if (!_taakRef) throw new Error("Taak-referentie niet ingesteld.");

  console.log('=== saveLeerling START ===');
  console.log('mail:', mail);
  console.log('leerlingData.antwoorden:', JSON.stringify(leerlingData.antwoorden));

  await runTransaction(db, async (transaction) => {
    const snap = await transaction.get(_taakRef);
    if (!snap.exists()) return;

    const leerlingen = snap.data().leerlingen || [];
    const idx = leerlingen.findIndex(
      l => l.mail.toLowerCase() === mail.toLowerCase()
    );
    if (idx < 0) return;

    console.log('Firestore antwoorden VOOR merge:', JSON.stringify(leerlingen[idx].antwoorden));

    leerlingen[idx] = {
      ...leerlingen[idx],
      antwoorden:     leerlingData.antwoorden     ?? leerlingen[idx].antwoorden     ?? {},
      succescriteria: leerlingData.succescriteria ?? leerlingen[idx].succescriteria ?? [],
      ingediend:      leerlingData.ingediend      ?? leerlingen[idx].ingediend      ?? false,
      verbeterd:      leerlingData.verbeterd      ?? leerlingen[idx].verbeterd      ?? false,
    };

    console.log('Firestore antwoorden NA merge:', JSON.stringify(leerlingen[idx].antwoorden));
    console.log('=== saveLeerling END ===');

    transaction.update(_taakRef, { leerlingen });
  });
}



