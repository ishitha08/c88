import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD8v_-2LqtaOQW_BCg8uDczKSPeZrx7Czs",
    authDomain: "book-santa-6051f.firebaseapp.com",
    databaseURL: "https://book-santa-6051f.firebaseio.com",
    projectId: "book-santa-6051f",
    storageBucket: "book-santa-6051f.appspot.com",
    messagingSenderId: "218703765130",
    appId: "1:218703765130:web:b7d3463f5880af59ae1773",
    measurementId: "G-J4EE4F1R2Y"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
