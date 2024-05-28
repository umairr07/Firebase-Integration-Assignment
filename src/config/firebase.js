// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXUBAawpZItJX8GBJB2BPGuo7OHaToBBs",
    authDomain: "fir-project-3a95d.firebaseapp.com",
    projectId: "fir-project-3a95d",
    storageBucket: "fir-project-3a95d.appspot.com",
    messagingSenderId: "885413204602",
    appId: "1:885413204602:web:db92c71eaa213f50c0a1c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();