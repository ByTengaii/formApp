
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA3YdfYEF_EgylVlkgl5-c5-RQjQxV-YL4",
    authDomain: "fir-project-8ca5d.firebaseapp.com",
    projectId: "fir-project-8ca5d",
    storageBucket: "fir-project-8ca5d.appspot.com",
    messagingSenderId: "834287992094",
    appId: "1:834287992094:web:bd5ffd415ccec66ae71d0f"
};
  
const app = initializeApp(firebaseConfig);

export { app };