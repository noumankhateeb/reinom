// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJudcYfRRscDUQszJOORimdDP0_3zCt2A",
  authDomain: "reinom-7676d.firebaseapp.com",
  projectId: "reinom-7676d",
  storageBucket: "reinom-7676d.firebasestorage.app",
  messagingSenderId: "256070086164",
  appId: "1:256070086164:web:e93162cac97a8a633b0101",
  measurementId: "G-3M4R049ZME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);