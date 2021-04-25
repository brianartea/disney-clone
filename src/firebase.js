import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvVbEGcRKPSFxddWD0R3yLUSQ9EpBYsxA",
  authDomain: "disney-clone-eaa38.firebaseapp.com",
  projectId: "disney-clone-eaa38",
  storageBucket: "disney-clone-eaa38.appspot.com",
  messagingSenderId: "615281038395",
  appId: "1:615281038395:web:26efe63afb5a55a872781e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
