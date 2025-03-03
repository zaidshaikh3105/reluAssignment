// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1_Bs2xsYyqeE_sfXcF1HAU6KHPzaxlpY",
  authDomain: "relu-606b2.firebaseapp.com",
  projectId: "relu-606b2",
  storageBucket: "relu-606b2.firebasestorage.app",
  messagingSenderId: "829703168032",
  appId: "1:829703168032:web:fd726c2871233cb8fc1c45",
  measurementId: "G-56DQ89C72K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
