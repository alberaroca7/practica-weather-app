import './style.css';
import { useState } from 'react';

export default function Form(){

    const [city, updateCity] = useState('')

    function onSubmit(e) {
e.preventDefault();
console.log({city});
if(city==="" || !city) return;
    }

    return(
        <div className='wrap-Form'>

<form className='form' onSubmit={onSubmit}>

<div className='wrap-input-btn'></div>
<input type='text' className='input' placeholder='Ciudad' onChange={(e) =>updateCity(e.target.value)} />
<button className='btn' type='submit'>Buscar</button>

</form>


        </div>  

    );
}
