import "./CardAlumn.css";
import deleteData from "../functions/deleteData.js";
import {  toast } from 'react-toastify';

function CardAlumn({ data, setSelectedData, refreshAllData }) {
  function mostrarModal() {
    setSelectedData(data);
    const modal = document.getElementById("modal-editar-data");
    modal.showModal();
  }

  function notify () {
    toast.error("Se a borrado correctamente"), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    };
  }

  function deleteAlumn() {
    if (data.id) {
      deleteData(data.id)
        .then((confirmation) => {

          refreshAllData();
          notify();
        })
        .catch((error) => {
          console.log("Error deleting alumn:", error);
        });
    } else {
      console.log("Invalid data ID:", data.id);
    }
  }

  return (
    <div className="Card">
      <div>
        <h3>Nombre</h3>
        <p>{data.nombre}</p>
      </div>
      <div>
        <h3>Apellidos</h3>
        <p>{data.apellidos}</p>
      </div>
      <div>
        <h3>Email</h3>
        <p>{data.email}</p>
      </div>
      <div>
        <h3>Tel</h3>
        <p>{data.tel}</p>
      </div>
      <div>
        <h3>Matricula</h3>
        <p>{data.matricula}</p>
      </div>
      <div>
        
        <a href={data.enlace} target="_blank">
        <span><img src="./folder.svg" alt=""  id="folder"/></span>
          Ver Archivo
        </a>
      </div>
      <div>
        <button onClick={mostrarModal} id="button">editar</button>
        <button className="button_delete" onClick={deleteAlumn}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CardAlumn;
