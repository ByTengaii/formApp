import { app } from "../fireBaseConfig";
import { getFirestore, collection, getDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { UserData,FormTemplate } from "../../models";

const db = getFirestore(app);

export async function getForms(userID: string){
  const querySnapshot = await getDocs(collection(db, "forms",userID));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
} 



export async function addForm2Database(form: FormTemplate) {
  try{
    await setDoc(doc(db, form.ownerId, form.formId),form);
  }catch(e){
    console.error('Error adding document: ', e);
  }

}