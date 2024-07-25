// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// If you need analytics, you can import and initialize it
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ndFImiDyVoNPsWwmx5zU9pnu1iFzAWo",
  authDomain: "test-bd55e.firebaseapp.com",
  projectId: "test-bd55e",
  storageBucket: "test-bd55e.appspot.com",
  messagingSenderId: "412942298938",
  appId: "1:412942298938:web:b22d077c46d995d792ea03",
  measurementId: "G-WK1R3M4KFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// If you are using analytics
// export const analytics = getAnalytics(app);
