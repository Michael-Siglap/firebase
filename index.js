// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEuDst5FLm3GZLg44vQZa6UHytdnNec2c",
  authDomain: "nus-b19-f2b.firebaseapp.com",
  projectId: "nus-b19-f2b",
  storageBucket: "nus-b19-f2b.appspot.com",
  messagingSenderId: "357550090972",
  appId: "1:357550090972:web:75d37cdaf648ef675b2219",
  measurementId: "G-EG6C70C5ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
