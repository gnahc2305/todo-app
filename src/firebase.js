// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBWUA7hNRbtmEGva64HS4VYDkZKERHvp2Q',
  authDomain: "todo-app-f98d9.firebaseapp.com",
  projectId: "todo-app-f98d9",
  storageBucket: "todo-app-f98d9.appspot.com",
  messagingSenderId: "1048190578059",
  appId: "1:1048190578059:web:1165f61a96c5b53048138e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);