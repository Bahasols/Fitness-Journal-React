// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC650tihdSZcQRMcQ5RAi9EhUL9LN5yNIM",
  authDomain: "fitness-journal-54ca5.firebaseapp.com",
  projectId: "fitness-journal-54ca5",
  storageBucket: "fitness-journal-54ca5.appspot.com",
  messagingSenderId: "1086500957839",
  appId: "1:1086500957839:web:a8982f0816227155bfcafa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
