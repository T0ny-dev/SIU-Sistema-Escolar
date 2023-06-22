import { db } from "../firebase/Credenciales";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

export default async function editData(id, data) {
  try {
    const collectionRef = collection(db, "Alumnos");
    const docRef = doc(collectionRef, id);
    const result = await setDoc(docRef, data, { merge: true });
    return result;
  } catch (error) {
    throw new Error("Error al editar los datos");
  }
}

