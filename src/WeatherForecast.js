import React, { useState } from "react";
import Icon from "./Icon";
import "./Forecast.css";
import axios from "axios";

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
                <div className="Day-forecast">{forecast[0].dt}</div> 
                <Icon />
                <div className="Temp-day"></div>
                <span className="Temperature-max">{forecast[0].temp.max}</span>
                <span className="Temperature-min">{forecast[0].temp.min}</span>

            </div>
        </div>
    </div>
    );
    
   

} else {
    let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    let longitude  = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl =`https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleCoords);

    return null;
}
}