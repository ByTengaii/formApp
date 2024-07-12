import { app } from "../fireBaseConfig";
import { getFirestore, collection, getDoc, doc, setDoc, getDocs, deleteDoc} from "firebase/firestore";
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
        date: doc.data().updatedAt.toDate().toDateString(),
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
  console.log('Adding document to database', form);
  try{
    const docRef = doc(db, form.ownerId, form.formId);
    await setDoc(docRef,form);
  }catch(e){
    console.error('Error adding document: ', e);
  }

}

export async function getFormFromDatabase(userID: string, formID: string){
  try{
    const docRef = doc(db, userID, formID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as FormTemplate;
        } else {
      console.log('No such document!');
      return null;
    }
  }catch(e){
    console.log('Error getting document:', e);
    return null;
  }
}

export async function deleteFormFromDatabase(userID: string, formID: string){
  try{
    await deleteDoc(doc(db, userID, formID));
  }catch(e){
    console.log('Error deleting document:', e);
  }
}