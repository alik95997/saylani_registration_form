// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdxYWfQ97sCiz-cRgzxBl8l2GrBrIR_w8",
    authDomain: "firsttry-536db.firebaseapp.com",
    projectId: "firsttry-536db",
    storageBucket: "firsttry-536db.firebasestorage.app",
    messagingSenderId: "931316456912",
    appId: "1:931316456912:web:35e7f3eb11b685fe52edd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, addDoc };
