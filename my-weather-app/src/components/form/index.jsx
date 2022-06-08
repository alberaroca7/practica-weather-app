import React, { useState } from "react";
import { MdOutlineLocationSearching } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import "./style.css";

const Form = ({ newLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // console.log({city});
    if (city === "" || !city) return;
    //  console.log(city)
    newLocation(city);
  };

  return (
    <div className="container-form">
      <form onSubmit={onSubmit}>
        
        <div className="wrap-search">
          <div className="filter-input__container">
              <div className = 'input-loc'>
            <IoIosSearch className="filter-icon"></IoIosSearch>
            <input
              type="text"
              className="filter-task"
              placeholder="Buscar una Ciudad"
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn" type="submit">
              Buscar
            </button>
            </div>            
          </div>
          <MdOutlineLocationSearching className='geolocation-icon'></MdOutlineLocationSearching>
          </div>
          
          <div className = 'container-loc'>      
        <div className="toggle-container">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span className="text">Hoy 8 de junio</span>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
