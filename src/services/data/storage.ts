import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference with an initial file path and name
const storage = getStorage();
const pathReference = ref(storage, 'images/stars.jpg');

// Create a reference from a Google Cloud Storage URI


export async function getProfilePicture(userID: string) {
    // Create a reference to the file we want to download
    const storage = getStorage();
    const gsReference = ref(storage, 'gs://formapp-88cdd.appspot.com/pp/'+userID.trim()+'.jpg');
    return getDownloadURL(gsReference)
}
