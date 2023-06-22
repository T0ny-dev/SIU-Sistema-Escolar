import {auth} from "../firebase/Credenciales"
import {createUserWithEmailAndPassword} from "firebase/auth"


export default async function registerUser (email, password) {
  try {
    await createUserWithEmailAndPassword(email, password);
    console.log(user);
  } catch (error) {
    console.log(error);
    return false;
  }
}