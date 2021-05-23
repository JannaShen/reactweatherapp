import React, {useState} from "react";
import "./Weather.css"
import "bootstrap/dist/css/bootstrap.css"
import axios from "axios";
import FormatedDate from "./formattedDate.js"
import WeatherIcon from "./weathericon.js"
import WeatherTemperature from "./weathertemperature.js"

export default function  Weather(props){

    const [weatherDate, setWeatherDate]=useState({ready:false});
    const [city, setCity]=useState(props.defaultCity);

    function handleResponse(response){
        setWeatherDate({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt * 1000),
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
            city:response.data.name
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    function search(){
        let apiKey = "6f079a1be79afa8a42b66a1d232d91dd";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    if (weatherDate.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                           type="search"
                           placeholder="Enter a city.."
                           className="form-control"
                           onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </div>
                
            </form>
            <h1>{weatherDate.city}</h1>
            <ul>
                <li><FormatedDate date={weatherDate.date}/></li>
                <li>{weatherDate.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <WeatherIcon code={weatherDate.icon}/>
                    <WeatherTemperature celcius={weatherDate.temperature}/>
                   
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity:{weatherDate.humidity}%</li>
                        <li>Wind:{weatherDate.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )

    }else{
        search();
        return "Loading...";
        

    }
    

}