import { useState } from "react";
import "./Form.css";
import loginWithEmailPassword from "../functions/loginWithEmailPassword";

function Form() {
  const [error, setError] = useState(""); // Variable de estado para controlar el mensaje de error

  async function submitHandler(e) {
    e.preventDefault();
    const usuario = e.target.cuenta.value;
    const password = e.target.password.value;

    try {
      await loginWithEmailPassword(usuario, password);
      setError(""); // Si el inicio de sesión es exitoso, se borra el mensaje de error
    } catch (error) {
      setError("Contraseña incorrecta"); // Si hay un error en el inicio de sesión, se muestra el mensaje de error
    }
  }

  return (
    <div className="Container">
      <form onSubmit={submitHandler}>
        <img src="/logo.png" alt="" style={{width:"150px"}} />
        <p>Te damos la bienvenida</p>
        <h1>Inicia sesión</h1>
        <label htmlFor="cuenta">Cuenta</label>
        <input type="text" id="cuenta" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit" className="button_primary">
          Entrar
        </button>
        {error && <p className="error-message">{error}</p>} {/* Mostrar el mensaje de error si existe */}
      </form>
    </div>
  );
}

export default Form;
