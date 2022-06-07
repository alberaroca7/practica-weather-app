import { useState } from 'react';
import Form from '../input';
import './style.css';
import CardWeek from '../cardWeek';

// import Card from './card';


function CardToday() {

  const [localWeather, setLocalWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState("");

  let day = "";
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=6ec8d3dd9240c9250797102796e2ff70&units=metric&lang=es";
  let cityUrl = "&q=";

  let urlForecast =
    "http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=6ec8d3dd9240c9250797102796e2ff70&lang=es";

  const getLocation = async (loc) => {
    setLocation(loc);

    //TODAY
    urlWeather = urlWeather + cityUrl + loc;
    // console.log(loc);
    await fetch(urlWeather)
      .then((response) => {
        return response.json();
      })

      .then((w) => {
        setLocalWeather(w);
      })
      .catch((error) => {
        console.log(error);
      });

    //WEEK

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((response) => {
        return response.json();
      })

      .then((x) => {
        setForecast(x);
        // console.log(forecast)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //../../assets/icons/sunny-xl.png --> ruta imagen icono

  return (

    <>
      <Form newLocation={getLocation}></Form> 

      <section className='card-day_container'>
        {/* <h1>{weather.name}</h1>
        <h3>{`${weather.main?.temp}ºC`}</h3>
        <h5>{`T. max ${(weather.main?.temp_max)} - T. min: ${(weather.main?.temp_min)} `}</h5> */}
        <div className='temperature-container'>
          <img className='img' src="" alt="buen tiempo" />
          <div className='temperature-text_container' >
            <h1>{localWeather.name}</h1>
            <p className='p-temperature'>{`${localWeather.main?.temp?.toFixed(0)}ºC`}</p>
            <p className='p-maxYmin'>{`Máx ${localWeather.main?.temp_max?.toFixed(
                0
              )}º / Min: ${localWeather.main?.temp_min?.toFixed(0)}ºC `}</p>
          </div>
        </div>
        <h3 className='estatus-name'>Buen tiempo</h3>
      </section>

      <div className='day-plan_container'>
        <h3 className='title'>Así da gusto</h3>
        <p className='description'>No te dejes vencer por la pereza y aprovecha este día radiante. ¿Por qué no te das una vuelta?</p>
        <div className='plan-div'>
          <p>Un paseo por el Retiro</p>
          <p>icono</p>
        </div>
      </div>
      <CardWeek></CardWeek>
    </>
  )

}

export default CardToday;





// function PrintWeather() {
//   const [main, setMain] = useState({})
//   const [wind, setWind] = useState({})
//   const [name, setName] = useState({})
//   const [sys, setSys] = useState({})
//   const [weather, setWeather] = useState([])


//   useEffect(() => {

//     fetch('https://api.openweathermap.org/data/2.5/weather?q=zaragoza&units=metric&appid=6ec8d3dd9240c9250797102796e2ff70')
//       .then(r => r.json())
//       .then(w => {//console.log(w.main.temp)
//         // console.log(w.wind.speed)
//         // console.log(w.name)
//         // console.log(w.weather)

//         setMain(w.main);
//         setWind(w.wind);
//         setName(w.name);
//         setSys(w.sys);
//         setWeather(w.weather);

//       })
//   }, [])

//   const today = new Date()
//   const day = today.getDate();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date = (`${day}/${month}/${year}`)


//   return (

//     <div className='wrap-today'>

//       <div className='weather-today'>

//         <h1>{`${name} - ${sys.country}`}</h1>

//         <h2>{date}</h2>

//         {weather.map(c =>
//           <div key={c.id}>
//             <h3>{`Tiempo: ${c.description}`}</h3>
//           </div>)
//         }

//         <h3>{`Temperatura Actual: ${(main.temp)} ºC`}</h3>
//         <h5>{`T. max ${(main.temp_max)} - T. min: ${(main.temp_min)} `}</h5>
//         <h3>{`Velocidad del Viento ${wind.speed} m/s`}</h3>
//         <h3>{`Humedad: ${main.humidity} %`}</h3>

//       </div>


//     </div>


//   )
// }


// export default PrintWeather;