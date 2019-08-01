import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCRqKWhe4CNDDpn69ycBBFHbvNrV8C4BWU",
    authDomain: "beerhub-a5842.firebaseapp.com",
    databaseURL: "https://beerhub-a5842.firebaseio.com",
    projectId: "beerhub-a5842",
    storageBucket: "",
    messagingSenderId: "149287088526",
    appId: "1:149287088526:web:4f11ea6f66deb3de"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);