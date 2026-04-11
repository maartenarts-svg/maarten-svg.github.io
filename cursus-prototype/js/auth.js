// ============================================================
// AUTH.JS — Google-authenticatie
// ============================================================
import { auth } from './firebase-config.js';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

export function initialiseerAuth({ onIngelogd, onUitgelogd }) {
  onAuthStateChanged(auth, gebruiker => {
    if (gebruiker) {
      onIngelogd(gebruiker);
    } else {
      onUitgelogd();
    }
  });
}

export async function inloggenMetGoogle() {
  try {
    await signInWithPopup(auth, provider);
  } catch (fout) {
    console.error('Inloggen mislukt:', fout);
  }
}

export async function uitloggen() {
  try {
    await signOut(auth);
  } catch (fout) {
    console.error('Uitloggen mislukt:', fout);
  }
}
