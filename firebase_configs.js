// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔥 YOUR FIREBASE CONFIG */
const firebaseConfig = {

  apiKey: "AIzaSyBHjpiyUNDQjGKrZci74qaWiDHwZR02Hcw",

  authDomain: "vortex-login-ea644.firebaseapp.com",

  projectId: "vortex-login-ea644",

  storageBucket: "vortex-login-ea644.firebasestorage.app",

  messagingSenderId: "885557677840",

  appId: "1:885557677840:web:4559988b3f1cb90eef9f95",

  measurementId: "G-4S246JMN2G"

};



/* INITIALIZE FIREBASE */
const app = initializeApp(firebaseConfig);

/* EXPORT SERVICES */
export const auth = getAuth(app);
export const db = getFirestore(app);