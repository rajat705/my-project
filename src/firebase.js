// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCdUxikccoKAce6vV7TdfDF6w8TVruRf_w",
//   authDomain: "my-portfolio-39d96.firebaseapp.com",
//   projectId: "my-portfolio-39d96",
//   storageBucket: "my-portfolio-39d96.appspot.com",
//   messagingSenderId: "1099414518543",
//   appId: "1:1099414518543:web:92294e8863ef928a465c7a",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpyUawnuK9Qnqs5npQuuH7yOyjQGN48GQ",
  authDomain: "portfolio-62151.firebaseapp.com",
  projectId: "portfolio-62151",
  storageBucket: "portfolio-62151.firebasestorage.app",
  messagingSenderId: "447632356150",
  appId: "1:447632356150:web:07a6d47024dce49b937997",
  measurementId: "G-F4D2BJG7FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
