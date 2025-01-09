// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern--estate-88ee8.firebaseapp.com",
  projectId: "mern--estate-88ee8",
  storageBucket: "mern--estate-88ee8.firebasestorage.app",
  messagingSenderId: "706185583309",
  appId: "1:706185583309:web:46e36139ddba82a5f22784"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);