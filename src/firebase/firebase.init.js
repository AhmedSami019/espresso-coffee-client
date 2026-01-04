// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCadyK4jJyn8xBodbQheaZItojP-c5uHKs",
  authDomain: "coffee-store-app-3fd9f.firebaseapp.com",
  projectId: "coffee-store-app-3fd9f",
  storageBucket: "coffee-store-app-3fd9f.firebasestorage.app",
  messagingSenderId: "767458670662",
  appId: "1:767458670662:web:4f8e26f50665757c7e3247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth for authentication
export const auth = getAuth(app)