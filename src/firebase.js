import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.BOOKS_API_KEY,
  authDomain: "book-app-5d9bc.firebaseapp.com",
  databaseURL:
    "https://book-app-5d9bc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "book-app-5d9bc",
  storageBucket: "book-app-5d9bc.firebasestorage.app",
  messagingSenderId: "676420083623",
  appId: "1:676420083623:web:5cce9d7738860f66946082",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
