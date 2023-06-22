import {auth} from "../firebase/Credenciales"
import {signOut} from "firebase/auth"

export default async function logOut() {
  try {
    await signOut(auth);

  } catch {
    console.log(error);

  }
}

