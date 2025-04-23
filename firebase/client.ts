// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw3Iyl4GAqfwKuO2j7y4pKC14YmG4ofrs",
  authDomain: "cakapkerja.firebaseapp.com",
  projectId: "cakapkerja",
  storageBucket: "cakapkerja.firebasestorage.app",
  messagingSenderId: "1067283412982",
  appId: "1:1067283412982:web:fb55dd833475969f9d79d7",
  measurementId: "G-LKTFQR9DRK",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
