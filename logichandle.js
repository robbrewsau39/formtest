// Adding Cloudflare Web Analytics
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "6b079f4314164cb291c94d39b02d0995"}'></script>

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwGbDkg9LrWrLtaqRmuT--h-1h2SzT7mM",
    authDomain: "womp-womp-900f7.firebaseapp.com",
    projectId: "womp-womp-900f7",
    storageBucket: "womp-womp-900f7.appspot.com",
    messagingSenderId: "880122817140",
    appId: "1:880122817140:web:5331c9f335f879c2c83f21",
    measurementId: "G-4VRY6DCBSW",
    databaseURL: "https://womp-womp-900f7.firebaseio.com"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);