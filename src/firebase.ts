// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD7GtKYHwNf-v2IMpGAlICw34x-eL18lo",
  authDomain: "nwitter-reloaded-2296a.firebaseapp.com",
  projectId: "nwitter-reloaded-2296a",
  storageBucket: "nwitter-reloaded-2296a.firebasestorage.app",
  messagingSenderId: "699595332035",
  appId: "1:699595332035:web:bb43b99df35ccdab90c576",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
