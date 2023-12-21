// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const FIREBASE_API_KEY = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;
const FIREBASE_AUTHDOMAIN = import.meta.env.VITE_REACT_APP_FIREBASE_AUTHDOMAIN;
const FIREBASE_PROJECTID = import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID;
const FIREBASE_STORAGEBUCKET = import.meta.env
  .VITE_REACT_APP_FIREBASE_STORAGEBUCKET;
const FIREBASE_MESSAGINGSENDERID = import.meta.env
  .VITE_REACT_APP_FIREBASE_MESSAGINGSENDERID;
const FIREBASE_APPID = import.meta.env.VITE_REACT_APP_FIREBASE_APPID;
const FIREBASE_MEASUREMENTID = import.meta.env
  .VITE_REACT_APP_FIREBASE_MEASUREMENTID;

// Firebase Configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
