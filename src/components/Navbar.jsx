import React from "react";
import "./Navbar.css";
import logOut from "../functions/logOut.js";

function Navbar({ user }) {
  const handleLogOut = () => {
    logOut(); // Lógica para cerrar sesión
  };

  return (
    <div className="Navbar">
      <h4><span className="dot"></span> Bienvenido {user.email}</h4>
      {user && <button onClick={handleLogOut}>Salir</button>}
    </div>
  );
}

export default Navbar;

