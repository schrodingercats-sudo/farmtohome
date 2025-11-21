import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3BOQVJqsg7-HXgVT4sn69PQwkjlQu9PU",
  authDomain: "farm-to-home-8df9f.firebaseapp.com",
  projectId: "farm-to-home-8df9f",
  storageBucket: "farm-to-home-8df9f.firebasestorage.app",
  messagingSenderId: "876500045636",
  appId: "1:876500045636:web:011bfaee92d6f371941111",
  measurementId: "G-PEQLT04DC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

