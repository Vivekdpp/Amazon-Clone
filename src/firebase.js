
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlhODASMae3l3-sGPDO8eH8vQ_4Mam4tU",
  authDomain: "challenge-e0ac9.firebaseapp.com",
  projectId: "challenge-e0ac9",
  storageBucket: "challenge-e0ac9.appspot.com",
  messagingSenderId: "583309371959",
  appId: "1:583309371959:web:a353b2434f484267892db2",
  measurementId: "G-JVK8WLYX7X"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth};