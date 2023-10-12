import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);