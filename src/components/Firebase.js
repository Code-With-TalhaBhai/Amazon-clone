// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDldye_nwknbc57zTZRgOZm1JZ48fHe44",
  authDomain: "clone-cb650.firebaseapp.com",
  projectId: "clone-cb650",
  storageBucket: "clone-cb650.appspot.com",
  messagingSenderId: "632034326634",
  appId: "1:632034326634:web:d7115fb78a8c5a1d2f3213",
  measurementId: "G-73ZM44MMWH"
};
console.log('db connected successfullly');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();