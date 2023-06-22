import {db} from "../firebase/Credenciales.js"
import {collection, deleteDoc, doc} from  "firebase/firestore"

export default async function deleteData (id) {
    try {
    const collectionRef = collection(db, "Alumnos");
    const docuRef = doc(collectionRef, id);
    const confirmation = await deleteDoc(docuRef);
    return confirmation;
    } catch(err) {
        console.log(err);

    }
}