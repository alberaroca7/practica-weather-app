import './style.css';
import React, { useState } from 'react';
import { MdOutlineLocationSearching } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';


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
        <div className='main-container'>

            <div className='container-form'>
                <form onSubmit={onSubmit}>
                    <div className='filter-input__container'>
                        <IoIosSearch className='filter-icon'></IoIosSearch>
                        <input className="filter-task" id="filter" type="text"  onChange={(e) => setCity(e.target.value)} placeholder="Buscar una ciudad" />
                    </div>
                </form>
                <MdOutlineLocationSearching className='geolocation-icon'></MdOutlineLocationSearching>

            </div>

            <div className='toggle-container'>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>

                <span className='text'>Madrid, hoy 6 de junio</span>
            </div>

        </div>

    );
}

export default Form;