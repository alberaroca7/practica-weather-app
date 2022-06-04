import './style.css';
import { useState } from 'react';

function Form ({ newLocation }) {

    const [city, updateCity] = useState('')

    //llamarle de otra forma a la funcion que va dentro del onsubmit
    function onSubmit(e) {
        e.preventDefault();
        console.log({ city });
        if (city === "" || !city) return;

        newLocation(city);
    }

    return (

        <div className='main-container'>

            <form className='form' onSubmit={onSubmit}>

                <div className='wrap-input-btn'></div>
                <input type='text' className='input' placeholder='Busca una ciudad' onChange={(e) => updateCity(e.target.value)} />
                <button className='btn' type='submit'>Buscar</button>

            </form>


        </div>

    );
}

export default Form;