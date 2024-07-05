import { app } from "../fireBaseConfig";
import { getFirestore,collection, getDoc, doc} from "firebase/firestore";
import { UserData} from "../../models";

const db = getFirestore(app);

export async function getUser(uid: string){
    console.log("UID:", uid);
      const docRef = doc(collection(db, "users"), uid);
      let userData: UserData | undefined = undefined;
      try {
        const doc = await getDoc(docRef);
        userData = doc.data() as UserData;
      } catch (e) {
        console.log("Error getting cached document:", e);
      }
      return userData ? userData : undefined;
  }