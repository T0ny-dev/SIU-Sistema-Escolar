import { Link } from "react-router-dom";
import "./Column.css";

function Column() {
  return (
    <div className="Column">
      <img src="./logo-BC-blanco.svg" alt="" />
      <Link to="/">Añadir Alumno</Link>
      <Link to="/data">Base de Datos</Link>
    </div>
  );
}

export default Column;
