import './style.css';
import Weather from "../container";



function Card({ weather }) {


    const date = new Date().toLocaleString();

    return (

        <>
            <div>
                <h2>{weather.name}</h2>

                <h1>{(weather.main?.temp - 273.15).toFixed(1)}ºC</h1>
            </div>

        </>
    )
}


export default Card;