import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdPLc245dat8df0cNvKyg8_3AheAjU9qk",
  authDomain: "skill-verify.firebaseapp.com",
  projectId: "skill-verify",
  storageBucket: "skill-verify.appspot.com",
  messagingSenderId: "329519788601",
  appId: "1:329519788601:web:ca75d40f4d6287a13413e8",
  measurementId: "G-N1ZBCYV3YZ",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const db = firebase.firestore();

export default firebase;
