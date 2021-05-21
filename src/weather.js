import React, {useState} from "react";
import "./Weather.css"
import "bootstrap/dist/css/bootstrap.css"
import axios from "axios";

export default function  Weather(props){

    const [weatherDate, setWeatherDate]=useState({ready:false});

    function handleResponse(response){
        setWeatherDate({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:"Wednesday",
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
            city:response.data.name
        });
    }
    
    if (weatherDate.ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                           type="search"
                           placeholder="Enter a city.."
                           className="form-control"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </div>
                
            </form>
            <h1>{weatherDate.city}</h1>
            <ul>
                <li>{weatherDate.date}</li>
                <li>{weatherDate.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img
                       src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                       alt="Mostly Cloudy"/><span className="degree">{weatherDate.temperature}</span><span className="unit">℃</span>
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
        let apiKey = "6f079a1be79afa8a42b66a1d232d91dd";
        let city="New York";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading...";
        

    }
    

}