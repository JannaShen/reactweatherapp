import "./Weather.css"
import "bootstrap/dist/css/bootstrap.css"
import React, {useState, useEffect} from "react";
import axios from "axios";

import WeatherForecastDay from "./weatherforecastday"

export default function WeatherForecast(props){

    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);

    useEffect(()=>{
        setLoaded(false);
    },[props.coordinates]
    );

   function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
   }

   let apiKey = "6f079a1be79afa8a42b66a1d232d91dd";
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


   if (loaded){
    return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if (index<5){
                        return(
                            <div className="col">
                           <WeatherForecastDay data={dailyForecast}/>
                           </div>
                        );
                    }
                })}
                
            </div>
        </div>
    )
   }else{
       axios.get(apiUrl).then(handleResponse);
       return (null)
   }
}