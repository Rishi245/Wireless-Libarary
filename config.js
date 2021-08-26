import * as firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBF2r_SnHIF1nlyVESXtP3iadu1hUBr_HQ",
    authDomain: "wily-app-35b5a.firebaseapp.com",
    projectId: "wily-app-35b5a",
    storageBucket: "wily-app-35b5a.appspot.com",
    messagingSenderId: "787350990507",
    appId: "1:787350990507:web:3a72f4f595ea13ba7d51ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();