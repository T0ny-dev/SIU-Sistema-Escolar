import { useEffect, useState } from "react";
import editData from "../functions/editData.js";
import "./EditarDataModal.css"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditarDataModal({ data, refreshAllData }) {
  const [dataEditar, setDataEditar] = useState({});

  useEffect(() => {
    setDataEditar({ ...data });
  }, [data]);

  function notify () {
    toast("Datos Actualizados!"), {
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

  function submitHandler(e) {
    e.preventDefault();
    const modal = document.getElementById("modal-editar-data");
    editData(dataEditar.id, dataEditar)
      .then((confirmation) => {
        refreshAllData();
        return Promise.resolve(confirmation);
      })
      .then((confirmation) => {
        setTimeout(() => {
          notify(); // Llamar a la función notify después de un pequeño retraso
          modal.close(); // Cerrar el modal después de mostrar la notificación
        }, 100); // Ajusta el tiempo de espera según tus necesidades
        return Promise.resolve(confirmation);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  

  return (
    <dialog id="modal-editar-data">
      <div className="AddForm">
        <form onSubmit={submitHandler} className="Form__edit">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={dataEditar?.nombre || ""}
            onChange={(e) => {
              setDataEditar({
                ...dataEditar,
                nombre: e.target.value,
              });
            }}
          />
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            value={dataEditar?.apellidos || ""}
            onChange={(e) => {
              setDataEditar({
                ...dataEditar,
                apellidos: e.target.value,
              });
            }}
          />
          <label htmlFor="tel">Numero de telefono</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            value={dataEditar?.tel || ""}
            onChange={(e) => {
              setDataEditar({
                ...dataEditar,
                tel: e.target.value,
              });
            }}
          />
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            value={dataEditar?.email || ""}
            onChange={(e) => {
              setDataEditar({
                ...dataEditar,
                email: e.target.value,
              });
            }}
          />
          <label htmlFor="matricula">Matricula</label>
          <input
            type="text"
            name="matricula"
            id="matricula"
            value={dataEditar?.matricula || ""}
            onChange={(e) => {
              setDataEditar({
                ...dataEditar,
                matricula: e.target.value,
              });
            }}
          />
          <label htmlFor="enlace">Enlace</label>
          <input
            type="text"
            name="enlace"
            id="enlace"
            value={dataEditar?.enlace || ""}
            onChange={(e) => {
              setDataEditar({
                ...dataEditar,
                matricula: e.target.value,
              });
            }}
          />
          <button type="submit" className="button_primary">
            Editar
          </button>
      </form>
      </div>
    </dialog>
  );
}

export default EditarDataModal;
