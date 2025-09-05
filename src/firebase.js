// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdUxikccoKAce6vV7TdfDF6w8TVruRf_w",
  authDomain: "my-portfolio-39d96.firebaseapp.com",
  projectId: "my-portfolio-39d96",
  storageBucket: "my-portfolio-39d96.appspot.com",
  messagingSenderId: "1099414518543",
  appId: "1:1099414518543:web:92294e8863ef928a465c7a",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

