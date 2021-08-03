import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAS5s2PoUoA1PUxT16hfpY2phnJgftkV1c",
    authDomain: "react-app-cursos-c8fa8.firebaseapp.com",
    projectId: "react-app-cursos-c8fa8",
    storageBucket: "react-app-cursos-c8fa8.appspot.com",
    messagingSenderId: "823722782070",
    appId: "1:823722782070:web:97e46fae1476ad69341e57"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}