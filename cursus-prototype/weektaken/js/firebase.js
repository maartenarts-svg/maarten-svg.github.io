// ============================================================
//  js/firebase.js  —  Firebase initialisatie + data-functies
//  Weektaken Wiskunde
// ============================================================

import { initializeApp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs,
         deleteDoc as firestoreDeleteDoc }
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

// ── Per-leerling referentie ───────────────────────────────────
export function setLeerlingRef(documentId, mail) {
  const safemail = mail.toLowerCase().replace(/[^a-z0-9]/g, '_');
  return doc(db, "taken", documentId, "leerlingen", safemail);
}

// ── Read: enkel eigen leerlingdocument ───────────────────────
export async function fetchLeerling(documentId, mail) {
  const ref = setLeerlingRef(documentId, mail);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}

// ── Write: enkel eigen leerlingdocument ──────────────────────
export async function saveLeerling(documentId, mail, data) {
  const ref = setLeerlingRef(documentId, mail);
  await setDoc(ref, data);
}

// ── Read: alle leerlingen (voor beheerder) ───────────────────
export async function fetchAlleLeerlingen(documentId) {
  const ref = collection(db, "taken", documentId, "leerlingen");
  const snap = await getDocs(ref);
  const result = {};
  snap.forEach(d => { result[d.id] = d.data(); });
  return result;
}

// ── Beheerder ophalen ─────────────────────────────────────────
export async function fetchBeheerder(mail) {
  const safemail = mail.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const ref = doc(db, 'beheerders', safemail);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}

// ── Leerlingdocument verwijderen ─────────────────────────────
export async function deleteDoc(documentId, safemail) {
  const ref = doc(db, 'taken', documentId, 'leerlingen', safemail);
  await firestoreDeleteDoc(ref);
}