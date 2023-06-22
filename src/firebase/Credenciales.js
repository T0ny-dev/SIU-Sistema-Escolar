// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzt7HRTgKWvy7NKGdKkgPdYbW4p2_ebpI",
  authDomain: "db-siu.firebaseapp.com",
  projectId: "db-siu",
  storageBucket: "db-siu.appspot.com",
  messagingSenderId: "624053645949",
  appId: "1:624053645949:web:36b33e45f3723e98227714",
  measurementId: "G-WBEBSKGHM8"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
export const db = getFirestore(app)
const analytics = getAnalytics(app);