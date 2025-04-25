import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnQ_RcxYPYfVwKIIKW-wZB9fV2TDGvzJ0",
  authDomain: "authtutassaf.firebaseapp.com",
  projectId: "authtutassaf",
  storageBucket: "authtutassaf.firebasestorage.app",
  messagingSenderId: "338336777257",
  appId: "1:338336777257:web:9fe38ac87ec9b6138f0838"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
