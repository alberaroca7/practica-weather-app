import React, {useState} from 'react';


const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        newLocation(city);
    }

    return(

        <div className="container">
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="search city" onChange={(e) =>setCity(e.target.value)}/>
                    <button type="submit">Buscar</button>
                </div>
            </form>
        </div>

    );
}

export default Form;









