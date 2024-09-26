import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props){
    return (
    <div className="WeatherInfo">
        <div className="row">
            <div className="col-8">
        <h1>{props.data.city}</h1>
        <ul>
            <li><FormattedDate date={props.data.date}/></li>
            <li className="text-capitalize"> {props.data.description}</li>
            <li>Humidity: {props.data.humidity}% | Wind: {props.data.wind} km/h</li>
        </ul></div>
        <div className="col-4">

<div className="float-right">
            <WeatherIcon 
            code={props.data.icon}/>
           </div>
            <span className="temperature float-right"> {Math.round(props.data.temperature)}  <span className="unit">°C</span></span>
            </div>
        </div>
    </div>
    );
}