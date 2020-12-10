import firebase from "firebase/app";
import "firebase/firestore";
// import 'firebase/database';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAe25ytPIPrcov-KTMhtmHFZNiwDtDDNYs",
    authDomain: "rnapp2021-e42ca.firebaseapp.com",
    projectId: "rnapp2021-e42ca",
    storageBucket: "rnapp2021-e42ca.appspot.com",
    messagingSenderId: "1086782046013",
    appId: "1:1086782046013:web:72aad6643601a62b060f54",
    measurementId: "G-8ZMCK1RGCE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}


const db = firebase.firestore().settings({ experimentalForceLongPolling: true })
const usersCollection = firebase.firestore().collection('users');


export {
  firebase,
  usersCollection
};
