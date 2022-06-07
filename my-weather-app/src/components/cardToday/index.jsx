import { useState } from "react";
import Form from "../form";
import "./style.css";

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
  // var porIcon = localWeather.weather.map(n=>console.log(n.icon))
  // var url ="http://openweathermap.org/img/w/";
  // var iconUrl =url + porIcon + ".png";

  return (
    <div className="card-day_container">
      <Form newLocation={getLocation}></Form>
      {/* {console.log(getLocation)} */}
      <div className = 'container-card-today'>
        <div className="card-day">
          <div className="weather-today">
            <div className="img-temp">image</div>
            <div className="temperature">
              <h1>{localWeather.name}</h1>
              {/* <div><img src={iconUrl}  /></div> */}
              <h3>{`${localWeather.main?.temp?.toFixed(0)}ºC`}</h3>
              <h5>{`Máx ${localWeather.main?.temp_max?.toFixed(
                0
              )}º / Min: ${localWeather.main?.temp_min?.toFixed(0)}ºC `}</h5>
            </div>
          </div>
          <div className="description-day">
            {localWeather.weather?.map((c) => (
              <div key={c.id}>
                <h3>{c.description}</h3>
              </div>
            ))}
          </div>

          <div className="container-plan-day">
            <div className="plan-day-title">Asi da gusto</div>
            <div className="plan-description-day">
              No te dejes vencer por la pereza y aprovecha este día radiante.
              ¿Por qué no das una vuelta?
            </div>
            <div className="plan-day">
              <p>un paseo por el Retiro</p>
              <span>icono</span>
            </div>
          </div>
        </div>

        

        {/* WEEK */}
        <div className = 'week-container'>
          <div className="container-week-day">
            {forecast.list?.map((k) => (
              <div>
                {k.dt_txt === "2022-06-08 09:00:00" ? (
                  <div className="day">
                    {/* <h1>{day}</h1> */}
                    
                    <h3>Jue</h3>
                    <div className = 'icon-week'>icono</div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                    <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}

{k.dt_txt === "2022-06-09 09:00:00" ? (
                  <div className="day">
                    {/* <h1>{day}</h1> */}
                    
                    <h3>Vie</h3>
                    <div className = 'icon-week'>icono</div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                    <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}

{k.dt_txt === "2022-06-10 09:00:00" ? (
                  <div className="day">
                    {/* <h1>{day}</h1> */}
                    
                    <h3>Sab</h3>
                    <div className = 'icon-week'>icono</div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                    <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}

              </div>
              
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default CardToday;
