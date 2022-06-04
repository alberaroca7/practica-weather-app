import React from "react";
import { useState} from "react";
import Form from "../form";
import Card from "../card";


function Weather(){
  
    const [weather, setWeather] = useState([]);
    const [location, setLocation]= useState()
    const [loading, setLoading] = useState(false);
 
    
   
    
    let urlWeather="https://api.openweathermap.org/data/2.5/weather?appid=6ec8d3dd9240c9250797102796e2ff70"

    let cityUrl="&q="

    const getLocation= async(loc) =>{
        setLoading(true);
        setLocation(loc)    
    
    urlWeather = urlWeather + cityUrl + loc;
    
      await fetch(urlWeather)
      .then((response) => {
        // if (!response.ok) throw { response }
        return response.json();
      })
      .then((w) => {
        console.log(w);
        setWeather(w);
     
      })
      // .catch(error => {
      //   console.log(error);
      //   setLoading(false);
      //   setShow(false);
      // });

    //     useEffect(() => {
    // fetch(urlWeather)
    // .then(r => r.json())
    // .then(c => {console.log(c)
    //     console.log(setWeather)
    //     updateWeather(c.weather);
    // })
    // },[]);

  

    }
    return (
    <React.Fragment>

    <Form

      newLocation={getLocation}></Form>
    

    <p>Luego lo borro</p>

    <Card 
     weather = {weather}>

    </Card>
    {/* <section className='container__countries'>
            {weather.map(c =>
             <div className='list__country' key= {c.id}>
               <h2>{date}</h2>
           <h3>{c.id}</h3>
           <h3>{c.main}</h3>
           <p>{c.description}</p>
           <p></p>
           <p>{c.main}</p>
            </div>)}
        
            </section> */}
</React.Fragment>                       //ESTO ES LO QUE QUIERO QUE ME DEVUELVA PINTADO!!!!!!!
)//cierre del return
}//cierre funcion List
export default Weather;