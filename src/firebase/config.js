import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC6Ei9wgDmA-YMqe3cg-rbiK5VTF1PESZI",
  authDomain: "simdrive-ecommerce.firebaseapp.com",
  projectId: "simdrive-ecommerce",
  storageBucket: "simdrive-ecommerce.firebasestorage.app",
  messagingSenderId: "1085647348762",
  appId: "1:1085647348762:web:b8369a007148e0e1255da3"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);