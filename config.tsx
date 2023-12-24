// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnOuHwWrAArXbHWN_VM_MheMpC4FYwBa4",
  authDomain: "bsjksup-098.firebaseapp.com",
  projectId: "bsjksup-098",
  storageBucket: "bsjksup-098.appspot.com",
  messagingSenderId: "666576210242",
  appId: "1:666576210242:web:99d6f3c484004d8bada0db",
  measurementId: "G-SESF6118DB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
