// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTC0MVU3N5RuoKgMv9Cp-FTxtXJS6ZX4k",
  authDomain: "rak-telaviv-rn.firebaseapp.com",
  projectId: "rak-telaviv-rn",
  storageBucket: "rak-telaviv-rn.appspot.com",
  messagingSenderId: "243024112765",
  appId: "1:243024112765:web:96eae255e0a1abc9f61514",
  measurementId: "G-75VGTPCV9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);