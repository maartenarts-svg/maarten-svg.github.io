// ============================================================
//  firebase.js  —  initialisatie + data-functies
// ============================================================

import { initializeApp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs,
         deleteDoc as firestoreDeleteDoc }
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

const REF_INHOUD = doc(db, "inhoud", "alle_inhoud");

// ── Inhoud (hoofdstukken) ─────────────────────────────────────
export async function fetchInhoud() {
  const snap = await getDoc(REF_INHOUD);
  if (!snap.exists()) return { hoofdstukken: [] };
  return snap.data();
}

export async function saveInhoud(data) {
  await setDoc(REF_INHOUD, data);
}

// ── Per-leerling ──────────────────────────────────────────────
function _leerlingRef(mail) {
  const safemail = mail.toLowerCase().replace(/[^a-z0-9]/g, '_');
  return doc(db, "leerlingen", safemail);
}

export async function fetchLeerling(mail) {
  const snap = await getDoc(_leerlingRef(mail));
  if (!snap.exists()) return null;
  return snap.data();
}

export async function saveLeerling(mail, data) {
  await setDoc(_leerlingRef(mail), data);
}

export async function fetchAlleLeerlingen() {
  const ref  = collection(db, "leerlingen");
  const snap = await getDocs(ref);
  const result = {};
  snap.forEach(d => { result[d.id] = d.data(); });
  return result;
}

export async function deleteLeerling(mail) {
  await firestoreDeleteDoc(_leerlingRef(mail));
}

// ── Beheerder ─────────────────────────────────────────────────
export async function fetchBeheerder(mail) {
  const safemail = mail.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const ref  = doc(db, "beheerders", safemail);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}