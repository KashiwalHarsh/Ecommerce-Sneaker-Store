// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOl9h_prjVLX6zubW9x3kPevcjvEyvFmM",
  authDomain: "e-commerce-shop-16ea2.firebaseapp.com",
  projectId: "e-commerce-shop-16ea2",
  storageBucket: "e-commerce-shop-16ea2.appspot.com",
  messagingSenderId: "422444810240",
  appId: "1:422444810240:web:c39f44487d7b57570e18e5",
  measurementId: "G-C207N88VGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app