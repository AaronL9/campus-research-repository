import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUMgfIWVYWA9dFPh7HiYHsEgRMRQjZ2i0",
  authDomain: "campus-research-repository.firebaseapp.com",
  projectId: "campus-research-repository",
  storageBucket: "campus-research-repository.appspot.com",
  messagingSenderId: "220993272223",
  appId: "1:220993272223:web:a25a979360b53060f4a5aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
