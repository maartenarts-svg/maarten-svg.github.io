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
  if (!_taakRef) throw new Error("Taak-referentie niet ingesteld.");
  // Schrijf alles BEHALVE leerlingen via setDoc
  const { leerlingen, ...rest } = data;
  await setDoc(_taakRef, rest, { merge: true });
  // Leerlingen apart en veilig
  if (leerlingen?.length) {
    await updateDoc(_taakRef, { leerlingen });
  }
}

// ── Write: alleen leerlingdata bijwerken ──────────────────────
export async function saveLeerling(mail, leerlingData) {
  if (!_taakRef) throw new Error("Taak-referentie niet ingesteld.");

  await runTransaction(db, async (transaction) => {
    const snap = await transaction.get(_taakRef);
    if (!snap.exists()) return;

    const leerlingen = snap.data().leerlingen || [];
    const idx = leerlingen.findIndex(
      l => l.mail.toLowerCase() === mail.toLowerCase()
    );
    if (idx < 0) return;

    // Merge: begin met verse Firestore-data, overschrijf alleen wat de leerling aanpaste
    leerlingen[idx] = {
      ...leerlingen[idx],       // verse data uit Firestore als basis
      antwoorden:      leerlingData.antwoorden      ?? leerlingen[idx].antwoorden,
      succescriteria:  leerlingData.succescriteria  ?? leerlingen[idx].succescriteria,
      ingediend:       leerlingData.ingediend       ?? leerlingen[idx].ingediend,
      verbeterd:       leerlingData.verbeterd       ?? leerlingen[idx].verbeterd,
    };

    transaction.update(_taakRef, { leerlingen });
  });
}



