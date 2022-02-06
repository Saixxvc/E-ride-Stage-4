import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD64SNhGzTKWuBcZfJKUxtRToqtdLpqOk8",
    authDomain: "e-ride-stage-4-24b40.firebaseapp.com",
    projectId: "e-ride-stage-4-24b40",
    storageBucket: "e-ride-stage-4-24b40.appspot.com",
    messagingSenderId: "456099687733",
    appId: "1:456099687733:web:32f1827bdf358dabbdf07c"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
