import { app } from "../fireBaseConfig";
import { getFirestore,doc, setDoc} from "firebase/firestore";
import { UserData} from "../../models";



const db = getFirestore(app);

export async function setUserInfo(userData: UserData){
    await setDoc(doc(db, "users", userData.uid), {
        email: userData.email,
        uid: userData.uid,
        name: userData.name,
        surname: userData.surname,
        title: userData.title,
    });

}