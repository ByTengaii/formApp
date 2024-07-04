import { app } from "../fireBaseConfig";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
const user = auth.currentUser;



export function isUserSignedIn() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}

export function signIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export function getUser() {
    return user;
}