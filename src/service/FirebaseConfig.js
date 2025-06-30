import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASQpVxPY_OR8Xrcozh-8QduEgpNOAXpSs",
  authDomain: "ai-trip-planner-d5982.firebaseapp.com",
  projectId: "ai-trip-planner-d5982",
  storageBucket: "ai-trip-planner-d5982.firebasestorage.app",
  messagingSenderId: "468250126768",
  appId: "1:468250126768:web:2fe2ee5f7c25f53aa8ce75",
  measurementId: "G-VEVS41GCKR"
};


export const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)
