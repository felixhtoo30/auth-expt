// firebase.js

import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/compat/app";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
