// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP_waAFrI8R3swdXPhazDBfQWrqQgFx5s",
  authDomain: "formapp-88cdd.firebaseapp.com",
  projectId: "formapp-88cdd",
  storageBucket: "formapp-88cdd.appspot.com",
  messagingSenderId: "344519871212",
  appId: "1:344519871212:web:0597f93cb3820947a873c9",
  measurementId: "G-5VFZ8W43DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };