import React, {useState} from "react";

export default function WeatherTemperature(props){

    const [unit, setUnit]=useState("celsius");

    function convertToFahrenhite(event){
        event.preventDefault();
        setUnit("fahrenhite");
    }
    function convertToCelius(event){
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenhite(){
        return((props.celcius*9)/5+32);
      
    }
    if (unit==="celsius"){
    return (
        <div className="celcius">
         <span className="degree">{Math.round(props.celcius)}</span>
         <span className="unit">℃ | <a href="/" onClick={convertToFahrenhite}>℉</a></span>
         </div>
    )
    }
    else{
        return (
        <div className="Fanrehite">
         <span className="degree">{Math.round(fahrenhite())}</span>
           <span className="unit"><a href="/" onClick={convertToCelius}>℃</a> | ℉</span>
         </div>)

    }
}