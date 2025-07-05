// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Ei9wgDmA-YMqe3cg-rbiK5VTF1PESZI",
  authDomain: "simdrive-ecommerce.firebaseapp.com",
  projectId: "simdrive-ecommerce",
  storageBucket: "simdrive-ecommerce.firebasestorage.app",
  messagingSenderId: "1085647348762",
  appId: "1:1085647348762:web:b8369a007148e0e1255da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);