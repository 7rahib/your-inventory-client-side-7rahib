// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6KCcKyeAukaul3fFxkPnj_ZoH9XPnhjE",
    authDomain: "your-inventory-7rahib.firebaseapp.com",
    projectId: "your-inventory-7rahib",
    storageBucket: "your-inventory-7rahib.appspot.com",
    messagingSenderId: "291883671198",
    appId: "1:291883671198:web:b5ee0130016e1fcf73658f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
