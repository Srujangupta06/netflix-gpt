// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqVp7E-dD2R8BG6XPvUqwFHbbkppDo3BQ",
  authDomain: "netflix-gpt-85095.firebaseapp.com",
  projectId: "netflix-gpt-85095",
  storageBucket: "netflix-gpt-85095.firebasestorage.app",
  messagingSenderId: "859021310816",
  appId: "1:859021310816:web:11db8571283abbbf717c05",
  measurementId: "G-QG9CM4EW2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
