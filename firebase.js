// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC54WtrllFITqU6HlPVMmHzwED2R1oQnT0",
  authDomain: "ananab-8039a.firebaseapp.com",
  projectId: "ananab-8039a",
  databaseURL: "https://ananab-8039a.firebaseio.com",
  storageBucket: "ananab-8039a.appspot.com",
  messagingSenderId: "440604722753",
  appId: "1:440604722753:web:9177d9774cec7609f3e8c0",
  measurementId: "G-8GDL55WNYM",
};

// Initialize Firebase
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
