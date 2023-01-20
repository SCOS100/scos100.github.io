// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fR_yuPfgcFKSApSw_2ce-HpbsZaCtYk",
  authDomain: "scos-web-git.firebaseapp.com",
  projectId: "scos-web-git",
  storageBucket: "scos-web-git.appspot.com",
  messagingSenderId: "370134697674",
  appId: "1:370134697674:web:baf7ee28ed984b2c159633",
  measurementId: "G-ZR0VNTHPQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);