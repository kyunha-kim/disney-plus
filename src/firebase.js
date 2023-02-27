// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWCvSBl_4q4A7b5nhXL684gGZfn6dJx-U",
  authDomain: "react-disney-plus-33e14.firebaseapp.com",
  projectId: "react-disney-plus-33e14",
  storageBucket: "react-disney-plus-33e14.appspot.com",
  messagingSenderId: "636522805833",
  appId: "1:636522805833:web:bc2b1c8b87544529b81d98",
  measurementId: "G-GR7B9J4YME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
