import { useState } from "react";
import Form from "../form";
import "./style.css";
import walk from "../icons/walk.png";
import yoga from "../icons/yoga.png";
import sunny from "../icons/sunny-xl.png";
import cloudy from "../icons/cloudy-xs.png";
import thunderstromsSm from "../icons/thunderstroms-sm.png";

function CardToday() {
  const [localWeather, setLocalWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState("");
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);

////useEffect Geolocalizacion, saca long y lat de nuestro dispositivo.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=6ec8d3dd9240c9250797102796e2ff70`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setData(result)
  //       console.log(result);
  //     });
  //   }
  //   fetchData();





  // let day = "";
  // switch (new Date().getDay()) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  // }

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
        console.log(w)     
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

  return (
    <div className="card-day_container">
      <Form newLocation={getLocation}></Form>
      {/* {console.log(getLocation)} */}
      <div className="container-card-today">
        <div className="card-day">
          <div className="weather-today">
            <div className="img-temp">
              <img src={sunny} alt="" />
            </div>
            <div className="temperature">
              <h1>{localWeather.name}</h1>
              {/* <div><img src={iconUrl}  /></div> */}
              <h3>{`${localWeather.main?.temp?.toFixed(0)}ºC`}</h3>
              <h5>{`Máx ${localWeather.main?.temp_max?.toFixed(0)}º / Min: ${localWeather.main?.temp_min?.toFixed(0)}ºC `}</h5>
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
            <div className="plan-day-title">Así da gusto</div>
            <div className="plan-description-day">
              No te dejes vencer por la pereza y aprovecha este día radiante.
              ¿Por qué no das una vuelta?
            </div>
            <div className="plan-day">
              <p>Un paseo por el Retiro</p>
              <div className="wrap-imame-day">
                <img src={walk} alt="icon" />
              </div>
            </div>
          </div>
        </div>

        {/* WEEK */}
        <div className="week-container">
          <div className="container-week-day">
            {forecast.list?.map((k) => (
              <div>
                {k.dt_txt === "2022-06-09 00:00:00" ? (
                  <div className="day">
                    {/* <h1>{day}</h1> */}

                    <h3>Jue</h3>
                    <div className="icon-week">
                      <img src={cloudy} alt="" />
                    </div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <div className="wrap-max-min">
                      <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                      <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}

                {k.dt_txt === "2022-06-10 00:00:00" ? (
                  <div className="day">
                    {/* <h1>{day}</h1> */}

                    <h3>Vie</h3>
                    <div className="icon-week">
                      <img src={cloudy} alt="" />
                    </div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <div className="wrap-max-min">
                      <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                      <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}

                {k.dt_txt === "2022-06-11 00:00:00" ? (
                  <div className="day thunder">
                    {/* <h1>{day}</h1> */}

                    <h3>Sab</h3>
                    <div className="icon-week">
                      <img src={thunderstromsSm} alt="" />
                    </div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <div className="wrap-max-min">
                      <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                      <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}

                {k.dt_txt === "2022-06-12 00:00:00" ? (
                  <div className="day">
                    {/* <h1>{day}</h1> */}

                    <h3>Dom</h3>
                    <div className="icon-week">
                      <img src={cloudy} alt="" />
                    </div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <div className="wrap-max-min">
                      <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                      <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}

                {k.dt_txt === "2022-06-13 00:00:00" ? (
                  <div className="day thunder">
                    {/* <h1>{day}</h1> */}

                    <h3>Lun</h3>
                    <div className="icon-week">
                      <img src={thunderstromsSm} alt="" />
                    </div>
                    {/* {k.weather.map((j) => (
                      <h3>{j.description}</h3>
                    ))} */}
                    <div className="wrap-max-min">
                      <h3>{`${k.main.temp_max.toFixed()}º`}</h3>
                      <h3>{`${k.main.temp_min.toFixed()}º`}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="borrador"></div>
                )}
              </div>
            ))}
          </div>

          <div className="container-description-week">
            <div className="morivation-week">
              <div className="motivation-week-title">
                La semana Pinta Regular
              </div>

              <div className="motivation-week-description">
                Si empiezas a sentir desánimo, no te agobies: es normal. Un poco
                de meditación seguro que te ayuda. ¡Adelante!
              </div>
            </div>
            <div className="plan-week">
              <p>Prepárate para un poco de Yoga</p>
              <div className="wrap-imame-day">
                <img src={yoga} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardToday;
