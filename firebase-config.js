// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsQ_s-wVM6ExA9LACpiQN0p6vjc1BlT6o",
  authDomain: "vimo-4429c.firebaseapp.com",
  projectId: "vimo-4429c",
  storageBucket: "vimo-4429c.firebasestorage.app",
  messagingSenderId: "102294685320",
  appId: "1:102294685320:web:4f709c7c89e23d8435c13d",
  measurementId: "G-3H1B09YXGP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
console.log("Firebase initialized successfully!");
// Export for use in other files
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;
