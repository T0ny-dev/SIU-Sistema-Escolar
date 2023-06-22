import { auth } from "../firebase/Credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginWithEmailPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.log(error);
    alert("contraseña incorrecta")
  }
}