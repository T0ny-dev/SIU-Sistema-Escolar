import { db } from "../firebase/Credenciales";
import { collection, getDocs, getDoc, query, orderBy } from "firebase/firestore";

export default async function getAllData() {
  try {
    const collectionRef = collection(db, "Alumnos");
    const q = query(collectionRef, orderBy("nombre"));
    const Alldocs = await getDocs(q);
    const dataDocs = Alldocs.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    console.log(dataDocs);
    return dataDocs;
  } catch (error) {
    console.log(error);
  }
}
