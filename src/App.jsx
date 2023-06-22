import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Data from "./views/Data";
import { auth } from "./firebase/Credenciales";
import { onAuthStateChanged } from "firebase/auth";
import {ThreeCircles} from 'react-loader-spinner'

function App() {
  const [user, setUser] = useState(null);
  const [verificationComplete, setVerificationComplete] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUser(usuarioFirebase);
      } else {
        setUser(null);
      }
      setVerificationComplete(true); // Marcar la verificación como completa
    });

    return () => unsubscribe();
  }, []);

  if (!verificationComplete) {
    // Mostrar un indicador de carga mientras se verifica la autenticación
    return <div className="loader">
<ThreeCircles
  height="100"
  width="100"
  color="#fff"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
      </div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Main user={user} /> : <Login />}
      />
      <Route
        path="/data"
        element={user ? <Data user={user} /> : <Login />}
      />
    </Routes>
  );
}

export default App;
