// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA6yP8HqWlBrdLcfsODkHQC7DleApktwo",
  authDomain: "fir-9a5d6.firebaseapp.com",
  projectId: "fir-9a5d6",
  storageBucket: "fir-9a5d6.appspot.com",
  messagingSenderId: "621504647510",
  appId: "1:621504647510:web:d3abf0d897f0b3495306f7",
  measurementId: "G-HDM79W3DNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);