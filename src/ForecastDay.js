import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props){
    function maxTemperature(){
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}°`
    }

    function minTemperature(){
        let temperature= Math.round(props.data.temp.min);
        return `${temperature}°`
    }

    function day(){
        let date= new Date(props.data.dt*1000);
        let day= date.getDay();

        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        return days[day];

    }

    return(
    <div>
         <div className="Day-forecast">{props[0].data.dt}</div> 
                <Icon code={props[0].weather[0].icon} />
                <div className="Temp-day"></div>
                <span className="Temperature-max">{maxTemperature()}</span>
                <span className="Temperature-min">{minTemperature()}</span>
    </div>
    )
}