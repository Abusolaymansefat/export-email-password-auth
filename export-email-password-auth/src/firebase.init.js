// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhsUYJtxyJsivNgaqGfohEeSCr2aTd0OI",
  authDomain: "export-email-password-auth.firebaseapp.com",
  projectId: "export-email-password-auth",
  storageBucket: "export-email-password-auth.firebasestorage.app",
  messagingSenderId: "747924956425",
  appId: "1:747924956425:web:db2dacff6597aafa2b1fd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);