import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJKRpeRZc1PiVB0b6kx_tLUACuy_of27Y",
  authDomain: "imessage-clone-76672.firebaseapp.com",
  databaseURL: "https://imessage-clone-76672.firebaseio.com",
  projectId: "imessage-clone-76672",
  storageBucket: "imessage-clone-76672.appspot.com",
  messagingSenderId: "695160849103",
  appId: "1:695160849103:web:e842bda23fd2c1e3a0edba"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;