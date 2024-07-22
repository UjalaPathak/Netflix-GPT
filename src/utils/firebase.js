// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKi8Ivd2DvHQQ6bJsHl72JV1bD5yvU-Og",
  authDomain: "netflix-gpt-6bef7.firebaseapp.com",
  projectId: "netflix-gpt-6bef7",
  storageBucket: "netflix-gpt-6bef7.appspot.com",
  messagingSenderId: "49089900783",
  appId: "1:49089900783:web:b7e5aa17c889c9bc532b1a",
  measurementId: "G-6151ZV03R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();