import React from "react";
import FormattedDate from "./FormattedDate";

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
            <img className="forecast-icon" src={props.data.iconUrl} alt={props.data.description}/>
            <span className="temperature"> {Math.round(props.data.temperature)}  <span className="unit">°C</span></span>
            </div>
        </div>
    </div>
    );
}