import { app } from "../fireBaseConfig";
import { getFirestore, collection, getDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { PreviewCardData, FormTemplate}  from "../../models";

const db = getFirestore(app);

export async function getFormsPreview(userID: string){
  try{
    const querySnapshot = await getDocs(collection(db, userID));
    let forms: PreviewCardData[] = [];
    let i = 1;
    querySnapshot.forEach((doc) => {
      forms.push( { 
        formId: doc.id,
        text: doc.data().formData.tower,
        date: doc.data().formData.fault.startDay.toDate().toDateString(),
        status: doc.data().formData.status,
        } as PreviewCardData);
    });
    return forms;
  }catch(e){
    console.log('Error getting documents: ', e);
    return [];
  }
} 



export async function addForm2Database(form: FormTemplate) {
  try{
    await setDoc(doc(db, form.ownerId, form.formId),form);
  }catch(e){
    console.error('Error adding document: ', e);
  }

}