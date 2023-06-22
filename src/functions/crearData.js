import {db} from "../firebase/Credenciales.js"
import {collection, addDoc} from "firebase/firestore"


export default async function crearData(data) {
  try {
    const collectionRef = collection(db,"Alumnos");
    const dataId = await addDoc(collectionRef, data);
    console.log(dataId);
  } catch(error) {
    console.log(error);
  }

}