import React, { useEffect, useState } from "react";
import getAllData from "../functions/leerData";
import Column from "../components/Column";
import Navbar from "../components/Navbar";
import CardAlumn from "../components/CardAlumn";
import EditarDataModal from "../components/EditarDataModal.jsx";
import { ToastContainer } from 'react-toastify';
import "./Main.css";

function Data({ user }) {
  const [allData, setAllData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const refreshAllData = () => {
    getAllData()
      .then((data) => {
        setAllData(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    refreshAllData();
  }, []);

  const filteredData = allData
    ? allData.filter((data) =>
        data.nombre.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <div className="Dashboard">
      <Column />
      <div className="Dashboard_content">
        <Navbar searchValue={searchValue} onSearchChange={handleSearchChange} user={user} />
        <EditarDataModal data={selectedData} refreshAllData={refreshAllData} />
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
        <div className="SearchBar">
          <input
            className="SearchBar__input"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Buscar por nombre..."
          />
        </div>
        <div className="Card__Container">
        {filteredData.map((data, id) => (
          <CardAlumn
            data={data}
            key={id}
            setSelectedData={setSelectedData}
            refreshAllData={refreshAllData}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Data;
