import "./style.css";
import { useEffect, useState } from "react";
import { apikey } from '../../config.js';

export default function CardWeek({ date }) {

    const [list, setList] = useState([]);
    // const [weather, setWeather] = useState([]);

    useEffect(() => {

        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?q=madrid&units=metric&appid=${apikey}`
        )
            .then((r) => r.json())
            .then((k) => {
                // console.log(k);
                // console.log(k.list);

                setList(k.list);
            });
    }, []);

    return (

        <section className="wrap-week">

            <div className="mini-cardsWeek_container">

                <section className="mini-cardWeek_1">
                    <p className="name_day">Sáb</p>
                    <img src="" alt="image" />
                    <div>
                        <p>27º</p>
                        <p>15º</p>
                    </div>
                </section>

                <section className="mini-cardWeek_2">
                    <p className="name_day">Dom</p>
                        <img src="" alt="image" />
                        <div>
                            <p>27º</p>
                            <p>15º</p>
                        </div>
                </section>

                <section className="mini-cardWeek_3">
                    <p className="name_day">Lun</p>
                        <img src="" alt="image" />
                        <div>
                            <p>27º</p>
                            <p>15º</p>
                        </div>
                </section>

                <section className="mini-cardWeek_4">
                    <p className="name_day">Mar</p>
                        <img src="" alt="image" />
                        <div>
                            <p>27º</p>
                            <p>15º</p>
                        </div>
                </section>

                <section className="mini-cardWeek_5">
                    <p className="name_day">Mié</p>
                        <img src="" alt="image" />
                        <div>
                            <p>27º</p>
                            <p>15º</p>
                        </div>
                </section>

            </div>

            <div className='day-plan_container'>

                <h3 className='title'>La semana pinta regular</h3>
                <p className='description'>Si empiezas a sentir desánimo, no te agobies: es normal. Un poco de meditación seguro que te ayuda. ¡Adelante!</p>
                <div className='plan-div'>
                    <p>Prepárate para un poco de yoga</p>
                    <p>icono</p>
                </div>

            </div>

        </section>
    )
}

//este es el codigo del return del cardweek que no entiendo una mierda


{/*
{list.map((k) => 
    <div className="">

        {k.dt_txt === '2022-06-06 09:00:00' ?

            <div className="">
                <h3>Lunes</h3>
                {k.weather.map((j) => (
                    <h3>{j.description}</h3>
                ))}
                <h3>{`T Min:${k.main.temp_min.toFixed()} - T Max: ${k.main.temp_max.toFixed()}`}</h3>
            </div>
            :
            console.log('')
        }

        {k.dt_txt === '2022-06-07 09:00:00' ?

            <div className="day">
                <h3>Martes</h3>
                {k.weather.map((j) => (
                    <h3>{j.description}</h3>
                ))}
                <h3>{`T Min:${k.main.temp_min.toFixed()} - T Max: ${k.main.temp_max.toFixed()}`}</h3>
            </div>
            :
            console.log('')
        }

        {k.dt_txt === '2022-06-08 09:00:00' ?

            <div className="day">
                <h3>Miercoles</h3>
                {k.weather.map((j) => (
                    <h3>{j.description}</h3>
                ))}
                <h3>{`T Min:${k.main.temp_min.toFixed()} - T Max: ${k.main.temp_max.toFixed()}`}</h3>
            </div>
            :
            console.log('')
        } */}


   // </div >
    

    //)}