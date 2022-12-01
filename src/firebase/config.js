import firebase from "firebase";
import "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC5192G2toqh_cGAbEDYcYwyoMB-flMbGE",
    authDomain: "fir-70a87.firebaseapp.com",
    projectId: "fir-70a87",
    storageBucket: "fir-70a87.appspot.com",
    messagingSenderId: "334281512705",
    appId: "1:334281512705:web:7064f55f61f76f253c6d00",
    measurementId: "G-N6D415KM90"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, backend}