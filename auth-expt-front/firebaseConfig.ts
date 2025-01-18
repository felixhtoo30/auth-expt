// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzULqXeuN6ayPLEp7IrwTefblFCt8Kuls",
  authDomain: "auth-expt-eff22.firebaseapp.com",
  projectId: "auth-expt-eff22",
  storageBucket: "auth-expt-eff22.firebasestorage.app",
  messagingSenderId: "838755598997",
  appId: "1:838755598997:web:396d57aca7a8ac8851119c",
  measurementId: "G-7JCD8PJCY8",
};

const app = initializeApp(firebaseConfig);
export const auth : Auth = getAuth(app);
