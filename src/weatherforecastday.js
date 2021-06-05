import React from "react"
import WeatherIcon from "./weathericon"

export default function WeatherForecastDay(props){

    function temperature(value){
        let temperature=Math.round(value);
        return `${temperature}°`;

    }

    function day(){
        let date=new Date(props.data.dt*1000);
        let day=date.getDay();
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day]
    }
    return (
        <div>
            
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36}/>
            <div className="weatherForecast-temperatures">
                <span className="weatherForecast-temperatures-max">{temperature(props.data.temp.max)}</span>
                <span className="weatherForecast-temperatures-min">{temperature(props.data.temp.min)}</span>
            </div>
        </div>
    )
}