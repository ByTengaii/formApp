import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference with an initial file path and name
const storage = getStorage();
const pathReference = ref(storage, 'images/stars.jpg');

// Create a reference from a Google Cloud Storage URI


export async function getProfilePicture(userID: string) {
    // Create a reference to the file we want to download
    const storage = getStorage();
    const gsReference = ref(storage, 'gs://formapp-88cdd.appspot.com/pp' + userID);
    // Get the download URL
    getDownloadURL(gsReference)
        .then((url) => {
            // Insert url into an <img> tag to "download"

        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    console.log('File not found');
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log('Unauthorized');
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    console.log('Canceled');
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    console.log('Unknown error');
                    break;
            }
        });
}

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');  