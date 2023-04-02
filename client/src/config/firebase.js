import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTAfP8L3q2rfE_zIYUeekW7L1Rs7yd9tc",
    authDomain: "just-hired-9a39d.firebaseapp.com",
    projectId: "just-hired-9a39d",
    storageBucket: "just-hired-9a39d.appspot.com",
    messagingSenderId: "94792676658",
    appId: "1:94792676658:web:1a6e7891c7f7a25d52532b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth()
export const google = new GoogleAuthProvider()