import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw-6cHhmxhGMP2OWGnkWGKCJAnSQfWmHg",
  authDomain: "netflix-clone-91ed7.firebaseapp.com",
  projectId: "netflix-clone-91ed7",
  storageBucket: "netflix-clone-91ed7.appspot.com",
  messagingSenderId: "3768314538",
  appId: "1:3768314538:web:3022d0384bccfb32c1fed3",
  measurementId: "G-CZ50VTVLDN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
