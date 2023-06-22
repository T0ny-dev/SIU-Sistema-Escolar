import Column from "../components/Column";
import Navbar from "../components/Navbar"
import AddForm from "../components/AddForm"
import { ToastContainer } from 'react-toastify';
import "./Main.css"


function Main ({ user }) {
  return (
    <div className="Dashboard">
    <Column/>
    <div className="Dashboard_content">
    <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <Navbar user={user}/>
      <AddForm/>
    </div>
    </div>
  )
}

export default Main;