import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACqBwUtJVZpdeFmLBImspXzDGzXhlt55w",
  authDomain: "oder-managment.firebaseapp.com",
  projectId: "oder-managment",
  storageBucket: "oder-managment.appspot.com",
  messagingSenderId: "205841144146",
  appId: "1:205841144146:web:9e5036e29ddec55682028b",
  measurementId: "G-35R92YV75X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };