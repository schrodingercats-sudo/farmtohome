import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx5-nmUmpa_13JtGXU1mByuBrll-Z-DUA",
  authDomain: "farmtofamily-ap.firebaseapp.com",
  projectId: "farmtofamily-ap",
  storageBucket: "farmtofamily-ap.firebasestorage.app",
  messagingSenderId: "1023841991055",
  appId: "1:1023841991055:web:5e1432c3b9f396df41f3fa",
  measurementId: "G-YVBD1J4VXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };