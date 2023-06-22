import { useState } from "react";
import buscarData from "../functions/buscarData.js";
import deleteData from "../functions/deleteData.js"
import "./searchModal.css";

function SearchModal({ data, refreshAllData }) {
  const [listResults, setListResults] = useState(null);

  

  function deleteAlumn() {
    if (data.id) {
      deleteData(data.id)
        .then((confirmation) => {
          refreshAllData();
        })
        .catch((error) => {
          console.log("Error deleting alumn:", error);
        });
    } else {
      console.log("Invalid data ID:", data.id);
    }
  }

  function searchData(e) {
    e.preventDefault();
    const string = e.target.searchInput.value;
    buscarData(string).then((results) => setListResults(results));
    e.target.searchInput.value = "";
  }

  return (
    <dialog id="search-modal">
      <form className="search" onSubmit={searchData}>
        <input type="text" placeholder="Buscar..." id="searchInput" />
        <button type="submit">Buscar</button>
        {listResults &&
          listResults.map((res, index) => (
            <div className="Card" key={index}>
              <div>
                <h3>Nombre</h3>
                <p>{res.nombre}</p>
              </div>
              <div>
                <h3>Apellidos</h3>
                <p>{res.apellidos}</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>{res.email}</p>
              </div>
              <div>
                <h3>Tel</h3>
                <p>{res.tel}</p>
              </div>
              <div>
                <h3>Matricula</h3>
                <p>{res.matricula}</p>
              </div>
              <div>
                <a href={res.enlace} target="_blank" rel="noopener noreferrer">
                  Ver archivo
                </a>
              </div>
              <div>
              <button className="button_delete" onClick={deleteAlumn}>
                Eliminar
              </button>
              </div>
            </div>
          ))}
      </form>
    </dialog>
  );
}

export default SearchModal;
