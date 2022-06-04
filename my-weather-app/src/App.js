import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/form";
import WeatherWeek from "./components/weatherWeek";

// import DosWeatherWeek from "./components/dosweather";


function PrintWeather() {
  const [main, setMain] = useState({})
  const [wind, setWind] = useState({})
  const [name, setName] = useState({})
  const [sys, setSys] = useState({})
  const [weather, setWeather] = useState([])


  useEffect(() => {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=zaragoza&units=metric&appid=6ec8d3dd9240c9250797102796e2ff70')
      .then(r => r.json())
      .then(w => {//console.log(w.main.temp)
        // console.log(w.wind.speed)
        // console.log(w.name)
        // console.log(w.weather)

        setMain(w.main);
        setWind(w.wind);
        setName(w.name);
        setSys(w.sys);
        setWeather(w.weather);

      })
  }, [])

  const today = new Date()
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = (`${day}/${month}/${year}`)


  return (

    <div className='wrap-app'>

      <div className='wrap-tiempo'>
        <Form></Form>
      </div>

      <div className='weather-today'>

        <h1>{`${name} - ${sys.country}`}</h1>

        <h2>{date}</h2>

        {weather.map(c =>
          <div key={c.id}>
            <h3>{`Tiempo: ${c.description}`}</h3>
          </div>)
        }

        <h3>{`Temperatura Actual: ${(main.temp)} ºC`}</h3>
        <h5>{`T. max ${(main.temp_max)} - T. min: ${(main.temp_min)} `}</h5>
        <h3>{`Velocidad del Viento ${wind.speed} m/s`}</h3>
        <h3>{`Humedad: ${main.humidity} %`}</h3>

      </div>

      <WeatherWeek date={date}></WeatherWeek>

      {/* {<DosWeatherWeek date={date}></DosWeatherWeek>} */}



    </div>


  )
}


export default PrintWeather;