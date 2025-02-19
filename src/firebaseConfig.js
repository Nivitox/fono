// src/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvm4yjso4ifEiWS17c_qhQA3lGZ3sBzLU",
  authDomain: "prin-login.firebaseapp.com",
  projectId: "prin-login",
  storageBucket: "prin-login.appspot.com",
  messagingSenderId: "779054252705",
  appId: "1:779054252705:web:0263dcf33cbd81968426e0",
};

// Verifica si ya existe una instancia de Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Inicializar servicios
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);