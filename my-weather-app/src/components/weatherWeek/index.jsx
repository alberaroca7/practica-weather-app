import "./style.css";
import { useEffect, useState } from "react";

export default function DosWeatherWeek({ date }) {

    const [list, setList] = useState([]);
    // const [weather, setWeather] = useState([]);

    useEffect(() => {

        fetch(
            "http://api.openweathermap.org/data/2.5/forecast?q=madrid&units=metric&appid=6ec8d3dd9240c9250797102796e2ff70"
        )
            .then((r) => r.json())
            .then((k) => {
                // console.log(k);
                // console.log(k.list);

                setList(k.list);
            });
    }, []);

    return (

        <div className="wrap-semana">
            {list.map((k) => <div>
                {console.log(k)}

                {k.dt_txt === '2022-06-05 09:00:00' ?

                    <div className="day">
                        <h3>{k.dt_txt}</h3>
                        {k.weather.map((j) => (
                            <h3>{j.description}</h3>
                        ))}
                        <h3>{`T Min:${k.main.temp_min.toFixed()} - T Max: ${k.main.temp_max.toFixed()}`}</h3>
                    </div>
                    :
                    console.log('mal')
                }

                {k.dt_txt === '2022-06-06 09:00:00' ?

                    <div className="day">
                        <h3>{k.dt_txt}</h3>
                        {k.weather.map((j) => (
                            <h3>{j.description}</h3>
                        ))}
                        <h3>{`T Min:${k.main.temp_min.toFixed()} - T Max: ${k.main.temp_max.toFixed()}`}</h3>
                    </div>
                    :
                    console.log('mal')
                }

                {k.dt_txt === '2022-06-07 09:00:00' ?

                    <div className="day">
                        <h3>{k.dt_txt}</h3>
                        {k.weather.map((j) => (
                            <h3>{j.description}</h3>
                        ))}
                        <h3>{`T Min:${k.main.temp_min.toFixed()} - T Max: ${k.main.temp_max.toFixed()}`}</h3>
                    </div>
                    :
                    console.log('mal')
                }


            </div>
            )}
        </div>
    )
}