// import { useState } from "react";

/**
 * Se utiliza para obtener la posicion actual de un dispositivo
 * @param success, error
 * success --> una funcion de devolucion de llama que tiene como parametro de entrada un objeto (position)
 *      el objeto position tiene como propiedad coords (position.coords) --> que devuelve un objeto Coordinates con la posicion actual
 *          Coordinates tiene como propiedades latitude y longitude
 */


useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (success, error) => {

        if (error) {

            return updateCurrentLocation(`No ha sido posible obtener tu localización`);

        } else {
            const { latitude, longitude } = success.coords;
            //AQUI IRIAN LOS FETCH A LOS QUE PASAS LAS COORDENADAS (latitude, longitude) EN LOS LINK
            //DESPUES DE GESTIONAR TODO EL FETCH, LO ACTUALIZAS EN EL USE STATE
        }
    });

}, []);



/**
 * Para crear un ctm hook tengo que crear una funcion que empieza por use
 * 
 */


// export const useWeather = () => {

//     // const [weather, updateWeather] = useState([]);

// }