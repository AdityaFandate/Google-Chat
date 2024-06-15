import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXjJFZUA3UwZYHPkpv3FSaQa1BHXlwku8",
  authDomain: "project-1-60c33.firebaseapp.com",
  databaseURL: "https://project-1-60c33-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-1-60c33",
  storageBucket: "project-1-60c33.appspot.com",
  messagingSenderId: "1051064597306",
  appId: "1:1051064597306:web:99f5765b15b2eae654ae03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const googleProvider = new GoogleAuthProvider();
