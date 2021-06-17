import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDR8v1E-wtXp3ll9HXATg-zSzN1JNrTrKY",
  authDomain: "myproject-7f593.firebaseapp.com",
  projectId: "myproject-7f593",
  storageBucket: "myproject-7f593.appspot.com",
  messagingSenderId: "580235116692",
  appId: "1:580235116692:web:f3659b7fb7c9be1991b481",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
