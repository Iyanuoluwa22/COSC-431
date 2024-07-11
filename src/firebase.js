// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Correct import statement

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_XJhV2jyoHxubzKqxgKJZ1ngFqvFdFJ8",
  authDomain: "crypto-f1d5c.firebaseapp.com",
  projectId: "crypto-f1d5c",
  storageBucket: "crypto-f1d5c.appspot.com",
  messagingSenderId: "796106766777",
  appId: "1:796106766777:web:4bbf046bdd1ee974201e68",
  measurementId: "G-7XM301K227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
