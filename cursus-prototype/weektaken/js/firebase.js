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
  onSnapshot(_taakRef, (snap) => {
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
  await setDoc(_taakRef, data);
}

// ── Write: alleen leerlingdata bijwerken ──────────────────────
export async function saveLeerling(mail, leerlingData) {
  if (!_taakRef) throw new Error("Taak-referentie niet ingesteld.");
  
  const snap = await getDoc(_taakRef);
  if (!snap.exists()) return;
  
  const data = snap.data();
  const idx = (data.leerlingen || []).findIndex(
    l => l.mail.toLowerCase() === mail.toLowerCase()
  );
  if (idx < 0) return;

  // Vervang alleen dit leerling-object in de array
  data.leerlingen[idx] = leerlingData;

  // Sla alleen de leerlingenlijst op, niet de rest
  await updateDoc(_taakRef, { leerlingen: data.leerlingen });
}



