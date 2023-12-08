// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyACqBwUtJVZpdeFmLBImspXzDGzXhlt55w",
    authDomain: "oder-managment.firebaseapp.com",
    projectId: "oder-managment",
    storageBucket: "oder-managment.appspot.com",
    messagingSenderId: "205841144146",
    appId: "1:205841144146:web:9e5036e29ddec55682028b",
    measurementId: "G-35R92YV75X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };