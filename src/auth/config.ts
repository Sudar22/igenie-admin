// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWyognQrSanoNpRm82Dgzce_NBSesXv9I",
  authDomain: "fir-f2ff9.firebaseapp.com",
  databaseURL: "https://fir-f2ff9-default-rtdb.firebaseio.com",
  projectId: "fir-f2ff9",
  storageBucket: "fir-f2ff9.appspot.com",
  messagingSenderId: "120343538121",
  appId: "1:120343538121:web:f1da77e8fa56448d8b6018",
  measurementId: "G-1W9GXX8P0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =new GoogleAuthProvider();
 export {auth,provider};