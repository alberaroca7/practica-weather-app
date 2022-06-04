import Weather from "../container"


function Card ({weather}){


    const today= new Date()
    const day = today.getDate();
    const month= today.getMonth()+1;
    const year= today.getFullYear();
    const date= day+"/"+month+"/"+year

    return (

        <>
        <div>
           <h2>{weather.name}</h2>
           <p>{date}</p>
           {/* <h1>{(weather.main.temp - 273.15).toFixed(1)}ºC</h1> */}
         </div>



        </>



    )
}


export default Card