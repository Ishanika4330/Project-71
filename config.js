import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAL7vAy2iP_8YYIHA-zWEwXu0-aT_GGz98",
    authDomain: "e-ride-app-582ad.firebaseapp.com",
    projectId: "e-ride-app-582ad",
    storageBucket: "e-ride-app-582ad.appspot.com",
    messagingSenderId: "563386630334",
    appId: "1:563386630334:web:a20679bd5613a177129eef",
    measurementId: "G-G4VYFBGTMM"
  }
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
