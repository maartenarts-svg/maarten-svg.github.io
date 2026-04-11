// ============================================================
// FIREBASE CONFIGURATIE
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyDe3VC5e2yAR1NhKFN1eqrBV2_NwwWkTn0",
  authDomain:        "cursus-wiskunde.firebaseapp.com",
  projectId:         "cursus-wiskunde",
  storageBucket:     "cursus-wiskunde.firebasestorage.app",
  messagingSenderId: "281049541814",
  appId:             "1:281049541814:web:013b1d6535c51a6e614a17"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
