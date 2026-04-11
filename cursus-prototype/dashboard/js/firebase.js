// ============================================================
//  firebase.js  —  initialisatie + data-functies
// ============================================================

import { initializeApp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBmtZSFFC6QDGsJ-O6SVp1xvDb9LwriZGU",
  authDomain:        "taken-wiskunde.firebaseapp.com",
  projectId:         "taken-wiskunde",
  storageBucket:     "taken-wiskunde.firebasestorage.app",
  messagingSenderId: "198937523347",
  appId:             "1:198937523347:web:65da118a3c7dc8faf94966"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

const REF_LEERLINGEN = doc(db, "leerlingen", "alle_leerlingen");
const REF_INHOUD     = doc(db, "inhoud",     "alle_inhoud");

// ── Reads (1× bij login) ──────────────────────────────────────
export async function fetchLeerlingen() {
  const snap = await getDoc(REF_LEERLINGEN);
  if (!snap.exists()) return { leerlingen: [] };
  return snap.data();
}

export async function fetchInhoud() {
  const snap = await getDoc(REF_INHOUD);
  if (!snap.exists()) return { hoofdstukken: [] };
  return snap.data();
}

// ── Writes (enkel bij expliciet opslaan) ─────────────────────
export async function saveLeerlingen(data) {
  await setDoc(REF_LEERLINGEN, data);
}

export async function saveInhoud(data) {
  await setDoc(REF_INHOUD, data);
}