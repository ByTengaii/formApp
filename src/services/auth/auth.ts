import { app } from "../fireBaseConfig";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { getUser } from "./userFetching";
import { UserData } from "../../models";

const auth = getAuth(app);



export async function signIn(email: string, password: string){
  let user: UserData | undefined;
  await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
             user = await getUser(userCredential.user.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
        return user;
}



