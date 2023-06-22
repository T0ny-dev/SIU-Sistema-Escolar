import { db } from "../firebase/Credenciales";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function buscarData(string) {
  const collectionRef = collection(db, "Alumnos");

  // consultas compuestas son de tipo AND &&
  const queryNombre = query(collectionRef, where("nombre", "==", string));
  const queryApellidos = query(collectionRef, where("apellidos", "==", string));
  const queryMatricula = query(collectionRef, where("matricula", "==", string));

  // Traer documentos y realizar consultas con getDocs
  const docsEncrypted = await Promise.all([
    getDocs(queryNombre),
    getDocs(queryApellidos),
    getDocs(queryMatricula)
  ]);

  // Extraer los documentos de cada consulta
  const docs = docsEncrypted.flatMap((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data())
  );

  console.log(docs);
  return docs;
}
