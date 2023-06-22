import "./AddForm.css"
import crearData from "../functions/crearData.js"
import {  toast } from 'react-toastify';

function AddForm () {

  function notify () {
    toast.success("Se a creado el alumno correctamente"), {
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

  async function submithandler(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellidos = e.target.apellidos.value;
    const tel = e.target.tel.value;
    const email = e.target.email.value;
    const matricula = e.target.matricula.value;
    const enlace = e.target.enlace.value;
    console.log(nombre, apellidos, tel , email, matricula);
    const data = {nombre, apellidos, tel, email, matricula, enlace};
    await crearData(data);
    notify();
    e.target.nombre.value = 
    e.target.apellidos.value = 
    e.target.tel.value = 
    e.target.email.value = 
    e.target.matricula.value = 
    e.target.enlace.value= "";
  }

  return (
    <div className="AddData">
      <form onSubmit={submithandler} className="AddForm__Send">
        <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" />
        <label htmlFor="apellidos">Apellidos</label>
          <input type="text" name="apellidos" id="apellidos" />
        <label htmlFor="tel">Numero de telefono</label>
          <input type="tel" name="tel" id="tel" />
        <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email" />
        <label htmlFor="matricula">Matricula</label>
          <input type="text" name="matricula" id="matricula"/>
        <label>Enlace de archivos</label>
          <input type="text" name="enlace" id="enlace"/>
        <button className="button_primary">Agregar</button>
      </form>
    </div>
  )
}

export default AddForm;