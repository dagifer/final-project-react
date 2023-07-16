import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props){
let [loaded, setLoaded]=useState(false);
let [forecast, setForecast]=useState(null);

function handleCoords(response){
    
    setForecast(response.data.daily);
    setLoaded(true);

}

if (loaded){
    return(

    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
               <ForecastDay data={forecast[0]}/>

            </div>
        </div>
    </div>
    );
    
   

} else {
    let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    let longitude  = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleCoords);

    return null;
}
}