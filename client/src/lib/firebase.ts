// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZVnjwDF32Bg-ijizqM1FYIscolfC_SY8",
  authDomain: "sansan-spark2023-teams.firebaseapp.com",
  projectId: "sansan-spark2023-teams",
  storageBucket: "sansan-spark2023-teams.appspot.com",
  messagingSenderId: "26114899312",
  appId: "1:26114899312:web:da0c2d5f4aef7ee15663b5",
  measurementId: "G-36W6BH2928",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
